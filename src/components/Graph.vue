<template>
  <div>
    <div v-for="item in items" :key="item.id">
      <Edge v-if="item.type === 'link'" :item="item" />
      <Vertex v-else :item="item" />
    </div>
  </div>
</template>
<script>
import Vertex from "./ui/Vertex.vue";
import Edge from "./ui/Edge.vue";

export default {
  name: "Graph",
  components: { Vertex, Edge },
  props: {
    payload: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    items() {
      console.log(this.payload);
      return [];
    },
  },
};
</script>
