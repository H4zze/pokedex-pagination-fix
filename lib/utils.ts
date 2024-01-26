export function capName(str: string) {
  let parts = str.split(" ");
  return parts.map((part) => capitalize(part)).join(" ");
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export function convertToNumber(value: any, defaultValue: number = 0): number {
  let num = Number(value);
  if (isNaN(num)) {
    return defaultValue;
  } else {
    return num;
  }
}
