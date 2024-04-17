import { InjectionKey, inject } from "vue";

export const safeInject = <T>(key: InjectionKey<T>): T => {
  const resolved = inject(key);
  if (resolved === undefined) {
    throw new Error(`Injection "${key.toString()}" not found`);
  }
  return resolved;
};
