<template>
  <div class="flex justify-between items-center py-4 px-6">
    <div class="text-2xl">
      <router-link to="/"
        >TODO<span class="text-limegreen-600">LIST</span></router-link
      >
    </div>
    <div class="flex items-center space-x-4">
      <router-link
        v-if="isLoggedIn"
        class="hover:bg-scarlet-600 hover:text-limegreen-200 text-limegreen-600 py-1 px-4 rounded-lg"
        to="/account"
        >Account</router-link
      >
      <button
        @click="logout"
        v-if="isLoggedIn"
        class="bg-scarlet-600 hover:bg-scarlet-200 hover:text-limegreen-700 text-limegreen-100 py-1 px-4 rounded-lg"
      >
        {{ isLoading ? 'LOGGING OUT...' : 'LOGOUT' }}
      </button>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const isLoggedIn = computed(() => store.state.isLoggedIn)
    const isLoading = computed(() => store.state.logging_out)
    const logout = () => store.dispatch('logout')

    return { isLoggedIn, isLoading, logout }
  }
}
</script>
