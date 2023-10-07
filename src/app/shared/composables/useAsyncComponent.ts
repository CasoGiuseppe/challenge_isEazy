import { defineAsyncComponent, type Component } from "vue";
import type { IAsyncComponent } from "./interfaces/useAsyncComponent.interface";

export default function useAsyncComponent(): IAsyncComponent {
  const create = async ({ component, error, loader } :{ component: string, error: Component, loader: Component}): Promise<Component> => {
    return await defineAsyncComponent({
      errorComponent: error,
      loadingComponent: loader,
      loader: () => import (`@ui/${ component }`)
    })
  }

  return { create }
}