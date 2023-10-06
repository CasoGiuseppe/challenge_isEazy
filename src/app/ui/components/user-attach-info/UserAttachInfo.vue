<template>
  <aside class="user-attach-info">
    <section class="user-attach-info__heading">
      <h3 data-testID="ui-version" v-if="$slots.version" class="user-attach-info__heading-version">
        <!-- @slot Slot for version label -->
        <slot name="version" />
      </h3>
      <h2 v-if="$slots.title" data-testID="ui-title" class="user-attach-info__heading-title">
        <!-- @slot Slot for title file -->
        <slot name="title" />
      </h2>
      <p v-if="$slots.typing" data-testID="ui-typing" class="user-attach-info__heading-typing">
        <!-- @slot Slot for file info as type or size -->
        <slot name="typing" />
      </p>
    </section>
    <slot name="action" />
  </aside>
</template>
<style lang="scss" src="./UserAttachInfo.scss" scoped />
