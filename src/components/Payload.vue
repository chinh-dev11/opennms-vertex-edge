<template>
  <v-textarea
    @input="inputValue"
    :background-color="greyLighten4"
    :prepend-icon="mdiCodeJson"
    :clearable="true"
    :rows="20"
    :autofocus="true"
    :rounded="true"
    label="Payload"
  />
</template>
<script>
import { mdiCodeJson } from "@mdi/js";
import colors from "vuetify/lib/util/colors";

export default {
  name: "Payload",
  data: () => ({
    mdiCodeJson,
    greyLighten4: colors.grey.lighten4,
  }),
  methods: {
    inputValue(value) {
      this.$emit("payload-change", value);
    },
  },
};
</script>
<style>
.v-input__slot {
  padding: 10px;
}
</style>
