<template>
  <Suspense>
    <template #default>
      <UserMessageWindow>
        <template #header>Comments</template>
        <div>conent</div>
        <template #footer><UserSendForm /></template>
      </UserMessageWindow>
    </template>
    <!-- <UserSendForm></UserSendForm> -->

    <!-- fallback loader state -->
    <template #fallback><UserDefaultLoader /></template>
  </Suspense>
</template>
<script setup lang="ts">
import UserSendForm from '@ui/widgets/user-send-form/UserSendForm.vue';
import UserMessageWindow from '@ui/layouts/user-message-window/UserMessageWindow.vue';
import UserDefaultLoader from '@ui/components/defaults/default-loader/DefaultLoader.vue';
// import useAsyncComponent from '@shared/composables/useAsyncComponent';

// const { create } = useAsyncComponent();
// const UserMessageWindow = await create({
//   component: 'layouts/user-message-window/UserMessageWindow.vue'
// });
</script>
