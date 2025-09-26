export async function getRoutineApi() {
  const call = await fetch("/api/routine");
  const res = await call.json();
  return res;
}
export async function getNoticeApi() {
  const call = await fetch("/api/notice");
  const res = await call.json();
  return res;
}
export async function getResourcesApi() {
  const call = await fetch("/api/resources");
  const res = await call.json();
  return res;
}
