export default defineEventHandler(async (e) => {
  let date = await Date.now();

  return { date };
});
