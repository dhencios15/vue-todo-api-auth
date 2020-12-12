<template>
  <div
    v-for="i in skeleton"
    :key="i"
    class="animate-pulse flex justify-between items-center py-1 px-4 bg-gray-300 rounded-lg shadow-md w-72 h-8"
  />
</template>

<script>
export default {
  name: 'TasksListSkeleton',
  data() {
    return {
      skeleton: ['12', '52', '11', '1f', '1q']
    }
  }
}
</script>
