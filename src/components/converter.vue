<template>
  <v-card>
    <h1>Convertidor de monedas</h1>
    <v-row class="pa-5">
      <v-col cols="3">
        <combo ref="comboOrigen" v-model="monedaOrigen" label="Origen" :items="items" />
        <combo ref="comboDestino" v-model="monedaDestino" label="Destino" :items="items" />
      </v-col>
      <v-col cols="3">
        <v-text-field
          class="mt-5 ml-5"
          :rules="[rules.required, rules.min]"
          outlined
          v-model="monto"
          type="number"
          @keydown.enter="convert"
          label="Ingrese monto a convertir"
        >
        </v-text-field>
      </v-col>
      <v-col cols="3" class="px-auto mt-6">
        <v-btn elevation="2" @click="convert" class="ml-15">
          <v-icon> mdi-transfer-right </v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-text-field class="mt-4" outlined v-model="resultado" type="number" label="Resultado" disabled />
      </v-col>
    </v-row>
    <v-alert v-if="error" :value="true" type="error" class="multi-line">{{ error }}</v-alert>
    <v-card-actions>
      <v-btn @click="goToedit" color="green" dark elevation="2"> Editar Tasas </v-btn>
      <v-btn @click="goToAuth" color="red" dark elevation="2"> Salir </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import combo from '@/components/combos/combo.vue'
import axiosInstance from '@/plugins/axios'
export default defineComponent({
  components: {
    combo,
  },
  data() {
    return {
      items: ['soles', 'dolar', 'euro'],
      monedaOrigen: '',
      monedaDestino: '',
      monto: 0,
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
      this.$router.push({ path: 'edit' })
    },
    goToAuth() {
      this.$router.push({ path: '/auth' })
    },
    async convert() {
      this.payload.monto = this.monto
      this.payload.monedaOrigen = this.monedaOrigen
      this.payload.monedaDestino = this.monedaDestino
      const response = await axiosInstance.post('/converter/convert', this.payload)
      console.log(response)
      this.resultado = response.data.monto
      this.error = response.data.mensajeError
      return response
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