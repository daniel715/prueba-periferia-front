<template>
  <v-container class="mt-10">
    <v-row justify="center">
      <v-col cols="4">
        <v-card>
          <v-card-text>
            <v-text-field
              v-model="password"
              type="password"
              autofocus
              @keydown.enter="entrar"
              label="Ingrese correo"
            >
            </v-text-field>
            <v-row class="ma-0" align-items="center" justify="center">
              <v-progress-linear :active="loading" :indeterminate="loading" color="blue"></v-progress-linear>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import axiosInstance from '@/plugins/axios'
export default defineComponent({
  name: 'App',
  data: () => ({
    password: '',
    loading: false
  }),
  computed: {
    currentLayout() {
      const route = this.$route.meta.layout
      return route
    },
  },
  methods: {
    async entrar(){
        let response = await axiosInstance.post('localhost:8081/api/v1/auth/register')
    }
  },
  created() {
    setTimeout(() => {
      this.isRouterLoaded = true
    }, 500)
  },
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
