<template>
  <button @click="pushUpdateTask">
    <svg
      class="w-6 h-6 text-limegreen-600 cursor-pointer hover:text-limegreen-400"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  </button>
</template>

<script>
export default {
  props: ['task', 'description'],
  methods: {
    pushUpdateTask() {
      this.description
        ? this.$emit('onUpdateTask', {
            _id: this.task._id,
            info: { description: this.description }
          })
        : this.$$emit('finishEditting')
    }
  }
}
</script>
