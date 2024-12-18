import { Champion } from "@/app/types/Champion";
import { fetchhampionListData } from "./serverApi";

export const getChampionRotation = async (): Promise<Champion[] | null> => {
  try {
    const allChamps = await fetchhampionListData();

    if (!allChamps) {
      console.error("No champion data available.");
      return [];
    }
    const response = await fetch("/api/rotation");
    if (!response.ok) {
      throw new Error("Failed to fetch rotation data");
    }
    const data = await response.json();

    const rotationChamp: Champion[] = Object.values(allChamps).filter(
      (champion) => data?.includes(Number(champion.key))
    );
    return rotationChamp;
  } catch (error) {
    console.error("Error fetching champion rotation:", error);
    return null;
  }
};
