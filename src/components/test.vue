<template>
  <p>줄임말과 원래말 입력</p>
  <input type="text" v-bind:value="abbr"/>
  <input type="text" v-model="normal"/>
  <hr/>
  <abbr v-bind:title="normal" >{{abbr}}</abbr>
</template>

<script >
import {ref} from "vue";

export default {

  setup() {
    const abbr = ref("SCF")
    const normal = ref("Single Componet File")
    return {
      abbr, normal
    }
  },
}
</script>

<style scoped>

</style>