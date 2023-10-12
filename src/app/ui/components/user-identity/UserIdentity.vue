<template>
  <aside class="user-identity">
    <!-- @slot Slot for provided picture -->
    <slot name="picture" />
    <div class="user-identity__data">
      <span>
        <!-- @slot Slot for provided name -->
        <slot name="name">No name provided</slot>
      </span>
      <span>
        <!-- @slot Slot for provided role -->
        <slot name="role">No role provided</slot>
      </span>
    </div>
  </aside>
</template>
<style lang="scss" src="./UserIdentity.scss" scoped />
