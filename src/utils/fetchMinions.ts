export const fetchMinions = async () => {
  const response = await fetch('https://ffxivcollect.com/api/minions');
  if (!response.ok) {
    throw new Error('Failed to fetch minions');
  }
  return response.json();
};  