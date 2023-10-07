<template>
  <Suspense>
    <UserSendForm></UserSendForm>

    <!-- fallback loader state -->
    <template #fallback><UserDefaultLoader /></template>
  </Suspense>
</template>
<script setup lang="ts">
import UserSendForm from '@ui/widgets/user-send-form/UserSendForm.vue';
import UserDefaultLoader from '@ui/components/defaults/default-loader/DefaultLoader.vue';
</script>
