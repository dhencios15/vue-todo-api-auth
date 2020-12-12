<template>
  <li
    class="flex justify-between items-center py-2 px-2 bg-scarlet-200 rounded-lg shadow-md w-72"
    v-for="task in tasks"
    :key="task._id"
  >
    <div class="flex items-center space-x-2">
      <button
        class="focus:outline-none"
        :disabled="task.completed"
        @click="toggleIsEditting(task._id)"
      >
        <svg
          class="w-6 h-6 cursor-pointer hover:text-indigo-400"
          :class="[task.completed ? 'text-indigo-200' : 'text-indigo-600']"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          ></path>
        </svg>
      </button>
      <input
        v-if="isEditting === task._id"
        class="bg-transparent bg-scarlet-100 rounded-lg px-1 w-44"
        type="text"
        :placeholder="task.description"
        @input="onInput($event.target.value)"
      />
      <span v-else :class="{ 'line-through opacity-50': task.completed }">{{
        task.description
      }}</span>
    </div>
    <div class="flex space-x-1">
      <div class="flex p-0" v-if="isEditting === task._id">
        <UpdateTaskDescription
          @onUpdateTask="onUpdateTask"
          @finishEditting="finishEditting"
          :task="task"
          :description="description"
        />
        <svg
          @click="finishEditting"
          class="w-6 h-6 text-scarlet-600 cursor-pointer hover:text-scarlet-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
      </div>
      <div v-else>
        <UpdateTaskStatus @onUpdateTask="onUpdateTask" :task="task" />
        <DeleteTask @onDeleteTask="onDeleteTask" :taskId="task._id" />
      </div>
    </div>
  </li>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import {
  UpdateTaskStatus,
  DeleteTask,
  UpdateTaskDescription
} from './TaskActions'
export default {
  components: { UpdateTaskStatus, DeleteTask, UpdateTaskDescription },
  props: ['tasks'],
  setup() {
    const store = useStore()
    const isEditting = ref(null)
    const description = ref('')
    const onUpdateTask = task => {
      store.dispatch('tasks/updateTask', task)
      finishEditting()
    }

    const finishEditting = () => (isEditting.value = null)
    const onDeleteTask = taskId => store.dispatch('tasks/deleteTask', taskId)
    const onInput = e => (description.value = e)
    const toggleIsEditting = id => (isEditting.value = id)

    return {
      finishEditting,
      onInput,
      description,
      isEditting,
      toggleIsEditting,
      onUpdateTask,
      onDeleteTask
    }
  }
}
</script>

<style></style>
