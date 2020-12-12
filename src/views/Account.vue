<template>
  <h1>ACCOUNT</h1>
  <pre>{{ JSON.stringify(userInfo, null, 2) }}</pre>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  name: 'Account',
  setup() {
    const store = useStore()
    const userInfo = computed(() => store.getters.userInfo)

    return { userInfo }
  }
}
</script>

<style></style>
