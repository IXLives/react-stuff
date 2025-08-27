export default function getCoordinates(curr: (string | null)[], prev: (string | null)[]): string {
  const index = curr.findIndex((val, i) => val !== prev[i]);
  if (index === -1) return "";
  const row = Math.floor(index / 3) + 1;
  const col = (index % 3) + 1;
  return `row ${row}, col ${col}`;
}