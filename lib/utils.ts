export function capName(str: string) {
  let parts = str.split(" ");
  return parts.map((part) => capitalize(part)).join(" ");
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
