"use client";

import Link from "next/link";
import type { Champion } from "../types/Champion";
import Image from "next/image";

interface ChampionListComponentProps {
  champions: Champion[];
}

const ChampionListComponent = ({ champions }: ChampionListComponentProps) => {
  if (!champions) return <p>챔피언 데이터가 없습니다.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ">
      {Object.values(champions).map((champion) => (
        <Link key={champion.key} href={`/champions/${champion.id}`}>
          <div className="border-solid border-2 border-red-500/[.33] rounded-lg transform transition-transform hover:scale-105 hover:shadow-[0px_4px_6px_rgba(255,0,0,0.3),0px_-4px_6px_rgba(255,0,0,0.3)] shadow-red-500/[.33]">
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/champion/${champion.image.full}`} // 이미지 경로
              alt={champion.key}
              width={60}
              height={60}
              className="mx-auto pt-5"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center text-gray-900 dark:text-white">
                {champion.name}
              </h2>
              <p className="text-sm text-gray-500 text-center">
                {champion.title}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ChampionListComponent;
