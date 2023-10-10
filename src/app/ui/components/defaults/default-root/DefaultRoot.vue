<template>
  <section id="app-layout">
    <Suspense>
      <template #default>
        <RouterView v-slot="{ Component }" name="content">
          <transition appear name="appear-change-view" mode="out-in">
            <component :is="Component">
              <template #title>Access to your private area</template>
            </component>
          </transition>
        </RouterView>
      </template>
      <!-- fallback loader state -->
      <template #fallback><UserDefaultLoader /></template>
    </Suspense>

    <component v-if="isSuccess" :is="dialog">
      <template #content>content</template>
      <template #close><XMarkIcon /></template>
      <template #title>Comments</template>
      <template #extra>Extrae</template>
    </component>
  </section>
</template>
<script setup lang="ts">
import { inject, ref, watch } from 'vue';
import UserDefaultLoader from '@ui/components/defaults/default-loader/DefaultLoader.vue';
import { XMarkIcon } from '@heroicons/vue/24/solid';
import type { IAsyncComponent } from '@shared/composables/interfaces/useAsyncComponent';
import type { IUserInfo } from '@shared/composables/interfaces/useUserInfo';

// inject composables
const useAsyncComponent = inject<IAsyncComponent>('UseAsyncComponent') as IAsyncComponent;
const useInfoUserState = inject<IUserInfo>('UseUserInfo') as IUserInfo;

// get create method to load lazy component
const { create } = useAsyncComponent;

// get user composable states
const { isSuccess } = useInfoUserState;

// lazy load for dialgo component
const dialog = await create({ component: 'user-dialog/UserDialog' });
</script>
