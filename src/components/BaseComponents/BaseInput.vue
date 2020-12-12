<template>
  <div class="flex flex-col space-y-1">
    <label>{{ label }}</label>
    <Field
      v-bind="$attrs"
      class="py-1 px-2 rounded-lg hover:bg-indigo-200"
      :class="{ 'border border-scarlet-700': !!errors }"
      :placeholder="holder"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <small class="text-scarlet-700 text-xs">{{ errors }}</small>
  </div>
</template>

<script>
import { Field } from 'vee-validate'
export default {
  components: { Field },
  props: {
    label: {
      type: String,
      default: ''
    },
    holder: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    errors: {
      type: String
    }
  }
}
</script>
