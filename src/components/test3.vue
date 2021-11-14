<template>
  <p v-text="counter"></p>
  <p v-if="counter < 5">5보다 작다</p>
  <p v-else>5보다 크거나 같다</p>
  <button @click="counter++">클릭하면 숫자가 올라갑니다.</button>
</template>

<script>
import {ref} from "vue";

export default {
  setup(){
    let counter = ref(0)
    return{
      counter,
    }
  },
}
</script>

<style scoped>

</style>