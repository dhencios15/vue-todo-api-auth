<template>
  <div class="container mx-auto">
    <div
      class="flex flex-col justify-center items-center w-80 mx-auto py-6 px-10 rounded-md border border-scarlet-300"
    >
      <h1 class="text-limegreen-600">LOGIN</h1>
      <small v-if="hasError" class="text-scarlet-700 text-xs">{{
        hasError
      }}</small>
      <Form
        @submit="onRegister"
        :validation-schema="registerSchema"
        v-slot="{ errors }"
        class="flex flex-col space-y-2"
      >
        <BaseInput
          holder="e.g denn yss"
          :errors="errors.name"
          label="Name"
          type="text"
          name="name"
        />
        <BaseInput
          holder="e.g dhenis@test.com"
          :errors="errors.email"
          label="Email"
          type="email"
          name="email"
        />
        <BaseInput
          holder="e.g 21"
          :errors="errors.age"
          label="Age"
          type="number"
          name="age"
        />
        <BaseInput
          :errors="errors.password"
          label="Password"
          type="password"
          name="password"
        />

        <button
          :disabled="isLoading"
          class="py-1 px-2 bg-indigo-700 text-indigo-200 hover:bg-indigo-300 hover:text-indigo-600 rounded-lg"
        >
          {{ isLoading ? 'REGISTERING...' : 'REGISTER' }}
        </button>
      </Form>
      <div class="flex flex-row text-xs mt-2 -ml-2">
        <p>Already have account?</p>
        <router-link class="text-indigo-600" to="/login"> Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { Form } from 'vee-validate'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'

import BaseInput from '@/components/BaseComponents/BaseInput.vue'
import { registerSchema } from '@/utils/authValidations'

export default {
  components: { BaseInput, Form },
  setup() {
    const store = useStore()
    const name = ref('')
    const email = ref('')
    const age = ref('')
    const password = ref('')
    const hasError = computed(() => store.state.error)
    const isLoading = computed(() => store.state.loading)
    const onRegister = values => store.dispatch('register', values)

    return {
      email,
      password,
      name,
      age,
      onRegister,
      hasError,
      isLoading,
      registerSchema
    }
  }
}
</script>
