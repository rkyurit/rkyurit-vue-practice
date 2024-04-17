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
  return { showToast }
}
