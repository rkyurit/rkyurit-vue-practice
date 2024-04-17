import { App, ref } from 'vue'
import { ToastState, toastKey } from '../injection-keys'

export default {
  install: (app: App) => {
    const toastState = ref<ToastState>({ show: false, message: '', context: 'success' })
    app.provide(toastKey, toastState)
  }
}
