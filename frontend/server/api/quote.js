export default defineEventHandler(async () => {
  const res = await fetch('https://zenquotes.io/api/random');
  const data = await res.json();
  return data;
});