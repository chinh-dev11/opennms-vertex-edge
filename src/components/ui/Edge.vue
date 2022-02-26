<template>
  <div :class="'type-' + item.type" class="d-flex justify-center align-center">
    {{ item.label }}
  </div>
</template>
<script>
export default {
  name: "Edge",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style>
.type-link {
  border-top: solid 1px black;
  padding: 0 1em;
  /* margin-top: 2.5em; */
  height: 2em;
}
</style>
