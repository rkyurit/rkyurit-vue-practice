import { InjectionKey, Ref } from 'vue'

export type ToastState = { show: boolean; message: string }
export const toastKey: InjectionKey<Ref<ToastState>> = Symbol('toast')
