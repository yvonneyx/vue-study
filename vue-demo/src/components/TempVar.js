/* TempVal.js */
export default {
  functional: true,
  render: (h, ctx) => {
    return ctx.scopedSlots.default && ctx.scopedSlots.default(ctx.props || {});
  },
};

/* index.vue */
<template>
  {/* ... */}
  <TempVar>
    <template v-slot="{ val1, val2 }">
      {{ val1 }}
      {{ val2 }}
    </template>
  </TempVar>
</template>;
