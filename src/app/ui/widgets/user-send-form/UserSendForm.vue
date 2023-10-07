<template>
  <form @submit.prevent="sendForm" aria-description="Form to send message or upload file">
    form
  </form>
</template>
<script setup lang="ts">
const sendForm = () => console.log('send');
</script>
