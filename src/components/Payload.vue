<template>
  <v-textarea
    @input="inputValue"
    :prepend-icon="mdiCodeJson"
    :clearable="true"
    :rows="20"
    :autofocus="true"
    :background-color="greyLighten4"
    :error-messages="invalidJsonFormat"
    data-test="v-textarea"
  />
</template>
<script>
import { mdiCodeJson } from "@mdi/js";
import colors from "vuetify/es5/util/colors";

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
      let payload;

      if (!value) {
        payload = {};
        this.invalidJsonFormat = [];
      } else {
        try {
          payload = JSON.parse(value);
          this.invalidJsonFormat = [];
        } catch (err) {
          payload = {};
          this.invalidJsonFormat = [this.invalidJsonFormatMessage];
        }
      }

      this.$emit("payload-change", payload);
    },
  },
};
</script>
<style>
.v-input__slot {
  padding: 4px 12px 10px;
}
</style>
