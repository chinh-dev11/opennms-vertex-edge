<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Vertex :obj="node" />
      <Vertex :obj="alarm" />
      <Edge :obj="link" />
    </v-main>
  </v-app>
</template>

<script>
import Vertex from "./components/ui/Vertex.vue";
import Edge from "./components/ui/Edge.vue";

export default {
  name: "App",

  components: { Vertex, Edge },

  data: () => ({
    node: {
      id: "n1",
      label: "Node 1",
      type: "node",
    },
    alarm: {
      id: "a1",
      label: "Alarm 1",
      type: "alarm",
    },
    link: {
      id: "e1",
      label: "edge n1-n2",
      type: "link",
      source_id: "n1",
      target_id: "n2",
    },
  }),
};
</script>
