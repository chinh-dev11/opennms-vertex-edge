const payloadValid = `{
    "vertices": [
      {
        "id": "n1",
        "label": "Node 1",
        "type": "node"
      },
      {
        "id": "n2",
        "label": "Node 2",
        "type": "node"
      },
      {
        "id": "a1",
        "label": "Alarm 1",
        "type": "alarm"
      }
    ],  
    "edges": [
      {
        "id": "e1",
        "label": "edge n1-n2",
        "type": "link",
        "source_id": "n1",
        "target_id": "n2"
      },
      {
        "id": "e2",
        "label": "edge n2-a1",
        "type": "link",
        "source_id": "n2",
        "target_id": "a1"
      }
    ]
}`;
const payloadInvalid = `"vertices": [{ "id": "n1", "label":"Node 1", type:"node" }] }`;
const payloadEmpty = `{}`;

export const getPayload = (type) => {
  switch (type) {
    case "invalid":
      return JSON.stringify(payloadInvalid);
    case "empty":
      return payloadEmpty;
    default:
      return payloadValid;
  }
};
