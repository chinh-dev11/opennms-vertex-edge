<template>
  <v-textarea
    @input="inputValue"
    :background-color="greyLighten4"
    :prepend-icon="mdiCodeJson"
    :clearable="true"
    :rows="20"
    :autofocus="true"
    :error-messages="invalidJsonFormat"
  />
</template>
<script>
import { mdiCodeJson } from "@mdi/js";
import colors from "vuetify/lib/util/colors";

export default {
  name: "Payload",
  data: () => ({
    invalidJsonFormat: [],
    invalidJsonFormatMessage: "Invalid JSON format !!!",
    mdiCodeJson,
    greyLighten4: colors.grey.lighten4,
  }),
  methods: {
    inputValue(value) {
      if (!value) {
        this.invalidJsonFormat = [];
        return;
      }

      let payload = null;

      try {
        payload = JSON.parse(value);
        this.invalidJsonFormat = [];
      } catch (err) {
        payload = null;
        this.invalidJsonFormat = [this.invalidJsonFormatMessage];
      } finally {
        this.$emit("payload-change", payload);
      }
    },
  },
};
</script>
<style>
.v-input__slot {
  padding: 4px 12px 10px;
}
</style>
