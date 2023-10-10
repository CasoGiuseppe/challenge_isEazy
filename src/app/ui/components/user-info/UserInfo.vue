<template>
  <aside class="user-info">
    <slot name="picture" />
    <div class="user-info__data">
      <span><slot name="name">No name provided</slot></span>
      <span><slot name="email">No email provided</slot></span>
    </div>
  </aside>
</template>
<style lang="scss" src="./UserInfo.scss" scoped />
