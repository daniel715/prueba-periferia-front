<template>
  <!-- :search-input.sync="search" -->
    <v-col :cols="cols" class="pa-0 ma-0">
      <div class="d-flex flex-column">
        <!-- <label class="custom-label" :id="uniqueId">{{ label }}</label> -->
        <v-select
          :label="label"
          v-model="model"
          :items="items"
          :item-text="itemText"
          :item-value="itemValue"
          outlined
          dense
          ref="input"
          class="pa-0"
        ></v-select>
      </div>
    </v-col>
</template>

<script>
export default {
  name: "Combo",
  props: {
    itemText:{
      type: String,
      default: ""
    },
    itemValue:{
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    cols: {
      type: Number,
      default: 12
    },
    //v-model customizado
    value: {
      type: String / Number,
      default: ""
    },
    items: {
      type: Array,
      default: () => []
    },
    noRequired: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    model: ""
  }),
  methods: {},
  watch: {
    model(newVal, oldVal) {
      console.log(newVal)
      this.$emit("input", newVal);
    },
    value(newVal, oldVal) {
      this.model = newVal;
    }
  },
};
</script>
<style lang="scss">
</style>
