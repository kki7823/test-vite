<template>
  <div style="width: 200px">
    <ol>
      <li v-for="i in items" >
        {{i}}
      </li>
    </ol>
  </div>
</template>

<script>
import {reactive} from "vue";

export default {
  setup(){
    const items = reactive(['1번', '2번', '3번'])
    // const items = ['1번', '2번', '3번']
    return{
      items,
    }
  },
}
</script>

<style scoped>

</style>