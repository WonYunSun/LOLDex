import { Champion } from "@/app/types/Champion";
import { getChampionDetailData } from "@/utils/serverApi";
import Image from "next/image";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const champion: Champion | null = await getChampionDetailData(params.id);

  return {
    title: champion
      ? `${champion.name} - My Riot App`
      : `${params.id} - My Riot App`,
  };
}

const ChampionDetailwithId = async ({ params }: Props) => {
  const champion: Champion | null = await getChampionDetailData(params.id);

  if (!champion) {
    return <div>챔피언 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="pb-5 pr-5 pl-5">
      <div className="text-4xl font-bold mb-4">{champion.name}</div>
      <div className="text-2xl text-gray-600 mb-4">{champion.title}</div>
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champion.image.full}`} // 이미지 경로
        alt={champion.key}
        width={150}
        height={150}
        className="mx-auto m-10"
      />
      <div className="pt-5">{champion.lore}</div>
      <div className="pt-10  text-2xl font-bold ">스탯</div>
      <ul className="space-y-2 text-slate-200 pt-5">
        <li className="flex gap-4 items-center p-2 rounded-md ">
          <span className="font-semibold">공격력:</span>
          <span>{champion.info.attack}</span>
        </li>
        <li className="flex gap-4  items-center p-2 rounded-md ">
          <span className="font-semibold">마법력:</span>
          <span>{champion.info.magic}</span>
        </li>
        <li className="flex gap-4  items-center p-2 rounded-md ">
          <span className="font-semibold">방어력:</span>
          <span>{champion.info.defense}</span>
        </li>
        <li className="flex gap-4  items-center p-2 rounded-md ">
          <span className="font-semibold">난이도:</span>
          <span>{champion.info.difficulty}</span>
        </li>
      </ul>
    </div>
  );
};
export default ChampionDetailwithId;
