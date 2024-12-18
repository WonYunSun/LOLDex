export const getChampionRotation = async (): Promise<string[] | null> => {
  try {
    const response = await fetch("/api/rotation");
    if (!response.ok) {
      throw new Error("Failed to fetch rotation data");
    }
    const data = await response.json();
    return data || null;
  } catch (error) {
    console.error("Error fetching champion rotation:", error);
    return null;
  }
};
