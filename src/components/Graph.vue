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

/**
 * Combine vertices and edges into a list.
 * 
 * e.g. [
			{
				"id": "n1",
				"label": "Node 1",
				"type": "node"
			},
			{
				"id": "e1",
				"label": "edge n1-n2",
				"type": "link",
				"source_id": "n1",
				"target_id": "n2"
			},
			{
				"id": "n2",
				"label": "Node 2",
				"type": "node"
			},
			...
		]
 *
 * @param {Array} vertices List containing nodes and alarms
 * @param {Array} edges List containing links
 * @Return {Array} ... List containing vertices and edges
 */
const verticesLinkList = ({ vertices, edges }) =>
  edges.reduce((acc, edge) => {
    const verticesLink = vertices.filter(
      (vertex) => edge.source_id === vertex.id || edge.target_id === vertex.id
    ); // filter in linked vertices of an edge

    verticesLink.splice(1, 0, edge); // add link between linked vertices
    acc.push(...verticesLink);

    return acc;
  }, []);

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
      return new Set(verticesLinkList(this.payload)); // use Set() to remove duplicate
      /* try {
        return new Set(verticesLinkList(this.payload)); // use Set() to remove duplicate
      } catch (err) {
        // show error: valid but empty payload or missing edges or vertices attribute
        // safeguard: should never get to this
        console.warn("Graph", err);
      }

      return []; */
    },
  },
};
</script>
