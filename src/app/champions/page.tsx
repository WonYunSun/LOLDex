import { fetchhampionListData } from "@/utils/serverApi";

import ChampionListComponent from "./ChampionList";

export const revalidate = 86400; // 24시간마다 ISR을 재생성

// 서버에서 데이터를 페칭하여 클라이언트 컴포넌트에 전달
const ChampionListPage = async () => {
  const champions = await fetchhampionListData();
  const championArray = Object.values(champions);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
        챔피언 목록
      </h1>
      <ChampionListComponent champions={championArray} />
    </div>
  );
};

export default ChampionListPage;
