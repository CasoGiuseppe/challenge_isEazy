import { ref } from "vue";

export const isLoading = ref<boolean>(false);
export const isSuccess = ref<boolean>(false);
export const hasError = ref<Record<string, boolean | string>>({ state: false, message: ''});