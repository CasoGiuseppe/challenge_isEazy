import type { InjectionKey } from "vue";
import type { IUserInfo } from "@shared/composables/interfaces/useUserInfo";
import type { IMessagesDetails } from "@shared/composables/interfaces/useMessagesDetails";
import type { IAsyncComponent } from "@shared/composables/interfaces/useAsyncComponent";
import type { IObserver } from "@shared/composables/interfaces/useObserver";
import type { IAttachments } from "@shared/composables/interfaces/useAttach";
import type { IAggregator } from "@shared/composables/interfaces/useAggregator";

export const useUserInfoKey = Symbol() as InjectionKey<IUserInfo>
export const useMessagesKey = Symbol() as InjectionKey<IMessagesDetails>
export const useAsyncComponentKey = Symbol() as InjectionKey<IAsyncComponent>
export const useObserverKey = Symbol() as InjectionKey<IObserver>
export const useUploadAttachKey = Symbol() as InjectionKey<IAttachments>
export const useAggregatorKey = Symbol() as InjectionKey<IAggregator>