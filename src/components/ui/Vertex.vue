<template>
  <div :class="obj.type">{{ obj.label }}</div>
</template>
<script>
export default {
  name: "Vertex",
  props: {
    obj: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style>
.node {
  border: solid 1px black;
  border-radius: 50%;
  width: 5em;
  height: 5em;
  padding: 0 0.5em;
}
.alarm {
  border: solid 1px black;
  width: 5em;
  height: 5em;
}
</style>
