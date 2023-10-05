<template>
  <aside class="user-attach-info">
    <section class="user-attach-info__heading">
      <h3 v-if="$slots.version" class="user-attach-info__heading-version">
        <slot name="version" />
      </h3>
      <h2 v-if="$slots.title" class="user-attach-info__heading-title"><slot name="title" /></h2>
      <p v-if="$slots.typing" class="user-attach-info__heading-typing"><slot name="typing" /></p>
    </section>
    <slot name="action" />
  </aside>
</template>
<style lang="scss" src="./UserAttachInfo.scss" scoped />
