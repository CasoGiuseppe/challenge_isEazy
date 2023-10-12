<template>
  <aside class="user-identity">
    <slot name="picture" />
    <div class="user-identity__data">
      <span><slot name="name">No name provided</slot></span>
      <span><slot name="role">No role provided</slot></span>
    </div>
  </aside>
</template>
<style lang="scss" src="./UserIdentity.scss" scoped />
