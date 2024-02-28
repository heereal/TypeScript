// Literal types allow you to specify the exact value an object must have.
type ButtonSizes = "small" | "medium" | "large";

function sortOrderMessage(order: "ascending" | "descending"): string {
  if (order === "ascending") {
    return "The order is set to ascending.";
  } else {
    return "The order is set to descending.";
  }
}
