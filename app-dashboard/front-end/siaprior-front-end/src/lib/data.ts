export const seatSample = Array.from({ length: 24 }).map((_, i) => ({
  id: `S${i+1}`,
  status: (i % 7 === 0) ? "priority" : (i % 3 ? "full" : "empty"),
}));

export const lineData = [
  { x: 8, y: 10 },
  { x: 9, y: 18 },
  { x: 10, y: 30 },
  { x: 11, y: 45 },
  { x: 12, y: 70 },
];

export const barData = [
  { label: "S61", value: 38 },
  { label: "1W", value: 120 },
  { label: "9A", value: 82 },
  { label: "T11", value: 97 },
];
