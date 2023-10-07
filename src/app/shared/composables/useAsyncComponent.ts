import { defineAsyncComponent, type Component } from "vue";
import type { IAsyncComponent } from "./interfaces/useAsyncComponent";
import UserDefaultError from "@ui/components/defaults/default-error/DefaultError.vue";
import UserDefaultLoader from "@ui/components/defaults/default-loader/DefaultLoader.vue";

export default function useAsyncComponent(): IAsyncComponent {
  const create = async ({ component, error = UserDefaultError, loader = UserDefaultLoader } :{ component: string, error?: Component, loader?: Component}): Promise<Component> => {
    return await defineAsyncComponent({
      errorComponent: error,
      loadingComponent: loader,
      loader: () => import (`../../ui/components/${ component }`)
    })
  }

  

  return { create }
}