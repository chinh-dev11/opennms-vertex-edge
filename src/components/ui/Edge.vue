<template>
  <div :class="obj.type">{{ obj.label }}</div>
</template>
<script>
export default {
  name: "Edge",
  props: {
    obj: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style>
.link {
  border-top: solid 1px black;
  padding: 0 1em;
  margin-top: 2.5em;
  height: 2em;
}
</style>
