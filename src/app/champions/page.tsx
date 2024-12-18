import { fetchhampionListData } from "@/utils/serverApi";

import ChampionListComponent from "./ChampionList";

export const revalidate = 86400; // 24시간마다 ISR을 재생성

// 서버에서 데이터를 페칭하여 클라이언트 컴포넌트에 전달
const ChampionListPage = async () => {
  const champions = await fetchhampionListData();

  return (
    <>
      <div className="font-bold text-2xl">챔피언 목록</div>
      <ChampionListComponent champions={champions} />
    </>
  );
};

export default ChampionListPage;
