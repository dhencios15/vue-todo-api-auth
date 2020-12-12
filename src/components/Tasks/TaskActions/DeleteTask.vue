<template>
  <button @click="pushDeleteTask">
    <svg
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
  </button>
</template>

<script>
export default {
  props: ['taskId'],
  methods: {
    pushDeleteTask() {
      this.$emit('onDeleteTask', this.taskId)
    }
  }
}
</script>
