import { createLocalVue, mount } from "@vue/test-utils";
import Vuetify from "vuetify";
import Payload from "@/components/Payload.vue";
import { getPayload } from "./Payload.mock";

describe("Payload.vue", () => {
  const localVue = createLocalVue();
  let vuetify;

  beforeEach(() => {
    vuetify = new Vuetify();
  });

  it.each`
    test         | payload
    ${"valid"}   | ${getPayload()}
    ${"invalid"} | ${getPayload("invalid")}
    ${"empty"}   | ${getPayload("empty")}
  `("should emit $test payload", async ({ payload }) => {
    const wrapper = mount(Payload, {
      localVue,
      vuetify,
    });
    const input = wrapper.findComponent(`[data-test="v-textarea"]`);

    await input.setValue(JSON.stringify(payload));

    const payloadChange = wrapper.emitted("payload-change")[0][0];

    expect(payloadChange).toBe(payload);
  });
});
