<template>
  <v-textarea @input="inputValue" />
</template>
<script>
export default {
  name: "Payload",
  methods: {
    inputValue(value) {
      this.$emit("payload-change", value);
    },
  },
};
</script>
