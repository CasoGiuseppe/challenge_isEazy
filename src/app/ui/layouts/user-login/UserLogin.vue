<template>
  <form class="user-login" @submit.prevent="sendLogin">login</form>
</template>
<script setup lang="ts">
const sendLogin = (): void => console.log('loin');
</script>
<style lang="scss" src="./UserLogin.scss" scoped />
