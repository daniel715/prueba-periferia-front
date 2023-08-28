<template>
  <div>
    <v-container class="px-0">
      <converter />
    </v-container>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
// import { ref, defineComponent } from '@vue/composition-api'
import converter from '@/components/converter.vue'
export default defineComponent({
  components: {
    converter,
  },
  data: () => ({
    loading: false,
    password: '',
    showAdmin: false,
    passwordError: false,
    rules: {
      required: (value) => !!value || 'Obligatorio',
      min: (v) => v.length >= 0 || 'Contrasena muy corta',
    },
  }),
  // setup() {
  //   const count = ref(0)
  //   return { count }
  // },
  methods: {
    entrar() {
      this.loading = true
      let delay = Math.random() * 2
      setTimeout(() => {
        if (this.password == '123') {
          this.showAdmin = true
          this.passwordError = false
        } else {
          this.showAdmin = false
          this.passwordError = true
        }
        this.loading = false
      }, 0)
    },
  },
})
</script>

<style scoped>
</style>