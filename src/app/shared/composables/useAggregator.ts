import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import type { MessageStore } from '@shared/stores/messages';
import type { IMessagesStoreState } from '@shared/stores/messages/definitions';
import type { IAggregator } from './interfaces/useAggregator';
import { sortByDate } from '@shared/helpers';
import { AggregatorViewModel } from './views-model/aggregator.view';

export default function useAggregator(store: MessageStore): IAggregator {
  const { saveMessage } = store;
  const isLoading = ref<boolean>(false);

  const aggregateItems = async ({ collection }: { collection: Record<string, any>[] }): Promise<void> => {
    try {
      // 1. set loading state on true to display spinner
      isLoading.value = true;

      // 2. promise all methods to get list items [ messages, attaches ]
      const aggregatorCollection = await Promise.all(
        collection.map(async (getter) => await getter.fn(getter.params ?? null))
      );

      if(!aggregatorCollection) return;

      // 3. sort promises result and save on store
      sortByDate({ array: await aggregatorCollection.flat() }).forEach((item: IMessagesStoreState) =>
        saveMessage(AggregatorViewModel.createAggregatorViewModel(item).viewAggregator)
      );
    } catch (e) {
      throw new Error(e as string);
    } finally {
      // 5. restore loading state
      isLoading.value = false;
    }
  };

  return {
    items: storeToRefs(store).getMessages,
    isLoading,
    aggregateItems
  };
}
