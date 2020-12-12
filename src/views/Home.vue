<template>
  <div class="container mx-auto">
    <div class="flex flex-col justify-center items-center space-y-4">
      <h1 class="text-2xl font-extrabold">TASK TODO</h1>
      <form @submit.prevent="onAddNewTask">
        <input
          v-model="description"
          type="text"
          placeholder="Add Todo"
          class="py-1 px-2 rounded-l-lg text-sm hover:bg-scarlet-200 focus-within:bg-scarlet-200 ring-2 focus:ring-indigo-600"
        />
        <button
          class="py-1 px-2 bg-indigo-500 hover:bg-indigo-200 text-indigo-200 hover:text-indigo-500 rounded-r-lg"
        >
          Add
        </button>
      </form>
      <ul v-if="tasks" class="space-y-4">
        <TasksListSkeleton v-if="isLoading" />
        <TasksList v-else :tasks="tasks" />
      </ul>
      <div v-else>
        <h1>No tasks yet..</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import { useStore, mapGetters } from 'vuex'

import { TasksList, TasksListSkeleton } from '@/components/Tasks'

export default {
  name: 'Home',
  components: { TasksList, TasksListSkeleton },
  setup() {
    const store = useStore()
    const description = ref('')
    const isLoading = computed(() => store.state.loading)

    onMounted(() => store.dispatch('tasks/getAllTask'))

    const onAddNewTask = () => {
      store.dispatch('tasks/addNewTask', description.value)
      description.value = ''
    }

    return { isLoading, onAddNewTask, description }
  },
  computed: {
    ...mapGetters('tasks', ['tasks', 'completedTask', 'notCompletedTask'])
  }
}
</script>
