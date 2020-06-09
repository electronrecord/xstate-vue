<template>
  <div class="home">
    <h1>Xstate</h1>
    <toggle></toggle>
  </div>
</template>

<script>
// @ is an alias to /src
import Toggle from '@/components/toggle.vue'

export default {
  name: 'Home',
  components: {
    Toggle
  }
}
</script>
