import type { Ref } from "vue";

export interface IAggregator {
  items: any;
  isLoading: Ref<boolean>;
  isSaving: Ref<boolean>;
  aggregateItems({ collection }:{ collection : any[]}): Promise<void>;
}
