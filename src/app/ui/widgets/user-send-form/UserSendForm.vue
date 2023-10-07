<template>
  <form @submit.prevent="sendForm">form</form>
</template>
<script setup lang="ts">
const sendForm = () => console.log('send');
</script>
