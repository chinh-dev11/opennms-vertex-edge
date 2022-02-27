<template>
  <div :class="'type-' + item.type" class="d-flex justify-center align-center">
    {{ item.label }}
  </div>
</template>
<script>
export default {
  name: "Vertex",
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style>
.type-node {
  border: solid 1px black;
  border-radius: 50%;
  width: 5em;
  height: 5em;
  padding: 0 0.5em;
}
.type-alarm {
  border: solid 1px black;
  width: 5em;
  height: 5em;
}
</style>
