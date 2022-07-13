export function getDate() {
  const date = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return `${date}, ${time}`;
}
