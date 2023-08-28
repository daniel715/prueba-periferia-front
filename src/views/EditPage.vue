<template>
  <v-card>
    <h1>Editar Tasas</h1>
    <v-row class="pa-5">
      <v-col cols="3">
        <combo ref="comboOrigen" v-model="monedaOrigen" label="Origen" :items="items" />
        <combo ref="comboDestino" v-model="monedaDestino" label="Destino" :items="items" />
        <v-text-field
          class="mt-5"
          :rules="[rules.required, rules.min]"
          outlined
          v-model="tasa"
          type="number"
          @keydown.enter="save"
          label="Ingrese Tasa"
        >
        </v-text-field>
      </v-col>
      <v-col cols="6" class="px-auto mt-6">
        <v-btn color="green" dark elevation="0" @click="save" class="ml-15"> Guardar </v-btn>
        <v-btn color="green" dark elevation="0" @click="goToedit" class="ml-15"> Regresar </v-btn>
        <v-btn color="red" dark elevation="0" @click="goToAuth" class="ml-15"> Salir </v-btn>
      </v-col>
    </v-row>
    <v-alert v-if="error" :value="true" type="error" class="multi-line">{{ error }}</v-alert>
  </v-card>
</template>
  <script>
import { defineComponent } from '@vue/composition-api'
import combo from '@/components/combos/combo.vue'
import axiosInstance from '@/plugins/axios'
import swal from 'sweetalert';  
export default defineComponent({
  components: {
    combo,
  },
  data() {
    return {
      items: ['soles', 'dolar', 'euro'],
      monedaOrigen: '',
      monedaDestino: '',
      tasa: 0,
      resultado: '',
      payload: {},
      rules: {
        required: (value) => !!value || 'Obligatorio',
        min: (v) => v.length >= 0 || 'Contrasena muy corta',
      },
      error: '',
    }
  },
  methods: {
    goToedit() {
      this.$router.push({ path: '/admin' })
    },
    goToAuth() {
      this.$router.push({ path: '/auth' })
    },
    
    async save() {
      if (this.monedaOrigen != this.monedaDestino) {
        this.error = ''
        this.payload.monedaOrigen = this.monedaOrigen
        this.payload.monedaDestino = this.monedaDestino
        this.payload.tasa = this.tasa

        const response = await axiosInstance.patch('/converter/updateTasa', this.payload)
        console.log(response)
        if ((response.status = '200')) {
          this.payload.monedaOrigen = this.monedaDestino
          this.payload.monedaDestino = this.monedaOrigen
          this.payload.tasa = 1 / this.tasa
          const response = await axiosInstance.patch('/converter/updateTasa', this.payload)
          console.log(response)
          if ((response.status = '200')) {
            swal({
              title: 'Tasa editada Exitosamente!',
              text: '',
              icon: 'success',
              button: 'Cerrar',
            }).then((e) => {})
          }
        }

        return response
      } else {
        this.error = 'Monedas Iguales'
      }
    },
  },
  created() {
    setTimeout(() => {
      this.$refs.comboOrigen.model = 'soles'
      this.$refs.comboDestino.model = 'dolar'
    }, 50)
  },
})
</script>
  <style scoped>
</style>