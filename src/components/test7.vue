<template>
  <p>{{ `[${msg}] : ${msg2}` }}</p>
  <Component v-model:msg="msg" v-model:msg2="msg2"/>
</template>

<script>
import  Component from './Comp.vue';

export default {
  data() {
    return {
      msg: '초기 메세지',
      msg2: '초기 메세지2',
    }
  },

  components: {
    Component,
  },
}
</script>

<style scoped>

</style>