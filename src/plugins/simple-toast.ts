import { App, ref } from "vue";
import { toastKey } from "../injection-keys";

export default {
  install: (app: App) => {
    const toastState = ref({ show: false, message: "" });
    app.provide(toastKey, toastState);
  },
};
