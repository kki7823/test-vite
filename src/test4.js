import {createApp, ref} from "vue";

const app = createApp({})

app.component('Component', {
    setup(props, context) {
        const msg = context.attrs.msg
        return {
            msg,
        }
    },

    template: `
      <Component3></Component3>
    `
})

app.component('Component2', {
    inheritAttrs: false, //non-prop을 상속하지 않음
    setup(props, context) {
        const msg = context.attrs.msg
        return {
            msg,
        }
    },
    template: `
      <Component3></Component3>
    `,
})

app.component('Component3', {
    template: `
    <div>
      <p>@Component: {{$attrs.msg}}</p>
    </div>
    `,
})

app.mount('#app')