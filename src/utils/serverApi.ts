"use server";

import { Champion, ChampionList } from "@/app/types/Champion";
import { Item } from "@/app/types/Item";

export async function fetchhampionListData(): Promise<ChampionList> {
  try {
    const versionResponse = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );

    const versions: string = await versionResponse.json();
    const latestVersion: string = versions[0];

    const championsResponse = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion.json`
    );

    const championData = await championsResponse.json();

    return championData.data;
  } catch (error) {
    console.error("Error fetching champion data:", error);
    return {};
  }
}

export async function getChampionDetailData(
  id: string
): Promise<Champion | null> {
  try {
    const versionResponse = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );

    const versions: string = await versionResponse.json();
    const latestVersion: string = versions[0];

    const championsResponse = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/champion/${id}.json`
    );

    const championData = await championsResponse.json();
    const championDetail = championData.data[id];

    return championDetail;
  } catch (error) {
    console.log("Error fetching Detail data: ", error);
    return null;
  }
}
export async function getItemsData(): Promise<Item[] | null> {
  try {
    const versionResponse = await fetch(
      "https://ddragon.leagueoflegends.com/api/versions.json"
    );

    const versions: string = await versionResponse.json();
    const latestVersion: string = versions[0];

    const ItemResponse = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/ko_KR/item.json`
    );

    const itemData = await ItemResponse.json();

    return Object.values(itemData.data);
  } catch (error) {
    console.log("Error fetching Detail data: ", error);
    return null;
  }
}
