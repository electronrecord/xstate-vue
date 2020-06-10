<template>
  <section class="register-client">

    <ValidationObserver v-slot="{ handleSubmit }">
      <form @submit.prevent="handleSubmit(submit)"
            class="relative">
        <validation-provider rules="required"
                             v-slot="{ errors }">
          <input type="text"
                 v-model="value"
                 placeholder="nume">
          <br>
          <span>{{ errors[0] }}</span>
        </validation-provider>

        <br>
        <button>TEST</button>

      </form>
    </ValidationObserver>

  </section>
</template>

<script>
  export default {
    name: 'register-client',

    data () {
      return {
        value: ''
      }
    },

    methods: {
      submit () {
        console.log(`submit`)
      }
    }
  }
</script>

<style lang="less">
  .register-client {
  }
</style>
