<template>
  <div class="min-h-screen bg-scarlet-100 font-sans">
    <Navbar />
    <div class="container mx-auto py-4 px-6">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: { Navbar }
}
</script>
