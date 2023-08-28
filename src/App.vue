<template>
  <v-app id="app">
    <!-- <transition name="fade" mode="out-in" > -->
    <transition name="fade" mode="out-in">
      <component :is="currentLayout" v-if="isRouterLoaded"> </component>
    </transition>
  </v-app>
</template>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import admin from './views/Admin.vue'
import edit from './views/EditPage.vue'
import auth from './views/AuthPage.vue'
export default defineComponent({
  name: 'App',
  data: () => ({
    isRouterLoaded: false,
  }),
  components: {
    admin,
    edit,
    auth
  },
  computed: {
    currentLayout() {
      const route = this.$route.meta.layout
      return route
    },
  },
  methods: {},
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
