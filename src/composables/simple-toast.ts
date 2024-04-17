import { safeInject } from '../utils/injection-util'
import { toastKey } from '../injection-keys'

export const useSimpleToast = () => {
  const toast = safeInject(toastKey)
  const showToast = (msg: string) => {
    toast.value.message = msg
    toast.value.show = true
    setTimeout(() => {
      toast.value.show = false
    }, 1500)
  }
  const showDangerToast = (msg: string) => {
    toast.value.context = 'danger'
    showToast(msg)
  }
  const showWarningToast = (msg: string) => {
    toast.value.context = 'warning'
    showToast(msg)
  }
  const showSuccessToast = (msg: string) => {
    toast.value.context = 'success'
    showToast(msg)
  }
  const showInfoToast = (msg: string) => {
    toast.value.context = 'info'
    showToast(msg)
  }
  return { showToast, showDangerToast, showWarningToast, showSuccessToast, showInfoToast }
}
