import type { IMessagesStoreState } from "@shared/stores/messages/definitions";
import { tranformDate } from "@shared/helpers";

export class AggregatorViewModel {
  private constructor(
    public readonly node: IMessagesStoreState,
  ) {}

  static createAggregatorViewModel(newListItem: IMessagesStoreState) {
    return new AggregatorViewModel( newListItem );
  }

  get viewAggregator(): IMessagesStoreState {
    return {
      ...this.node,
      ...{ item: {...this.node.item, date: tranformDate(this.node.item.date as string)}}
    };
  }
}