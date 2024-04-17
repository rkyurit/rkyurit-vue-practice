import { InjectionKey, Ref } from 'vue'

export type ToastState = {
  show: boolean
  message: string
  context: 'danger' | 'warning' | 'success' | 'info'
}
export const toastKey: InjectionKey<Ref<ToastState>> = Symbol('toast')
export type DialogState = { show: boolean; message: string }
export const dialogKey: InjectionKey<Ref<DialogState>> = Symbol('dialog')
