export const joinClassName = (array: (String | Boolean | null | undefined)[]) =>
  array.filter((x) => x).join(' ');
