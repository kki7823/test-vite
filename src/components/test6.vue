<template>
  <p>{{ count_o }}</p>
  <button @click="count_o++">Option API 카운트 증가</button>
  <p>{{ count_c_1 }}</p>
  <button @click="count_c_1++">Composition API 1st 카운트 증가</button>
  <p>{{ count_c_2 }}</p>
  <button @click="count_c_2++">Composition API 2nd 카운트 증가</button>
  <p>상태 : {{ state }}</p>
  <button @click="onStop()">watchEffect 중지</button>
</template>

<script>
import {ref, watch, watchEffect} from "vue";

export default {
  data() {
    return {
      count_o: 0
    }
  },

  watch: {
    count_o: (cur, prev) => { //해당 변수의 변경 감지 (null -> 초기값 제외) , 콜백 실행
      console.log('Option API Watch : ' + prev + ' ==> ' + cur) //현재 값 이전 값 볼 수있음
    },
  },

  setup() {
    const count_c_1 = ref(0)
    const count_c_2 = ref(0)
    const state = ref('실행 중')

    watch(
        count_c_1,
        (cur, prev) => {
          console.log('Composition API Watch : ' + prev + ' ==> ' + cur)
        },
        {
          immediate: true, //초기값도 확인할지 여부
        }
    )

    watch([count_c_1, count_c_2], (cur, prev) => {
      console.log('Composition API Multiple Watch : ' + prev + ' ==> ' + cur)
    })

    const stop = watchEffect(() => { //stop()함수 반환, 호출 시 감시 중단
          console.log('Composition API watchEffect Called' + count_c_2.value) //콜백 함수가 참조하는 변수의 변화 감지
        },
        {flush: "post"} // pre - DOM 업데이트 전 호출, post - DOM 업데이트 후 호출
    )

    const onStop = () => {
      state.value = '중지'
      stop()
    }

    return {
      count_c_1,
      count_c_2,
      state,
      onStop,
    }
  },
}
</script>

<style scoped>

</style>