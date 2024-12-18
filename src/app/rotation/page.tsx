"use client";

import { useQuery } from "@tanstack/react-query";
import { getChampionRotation } from "@/utils/riotApi";
import Link from "next/link";
import Image from "next/image";

const RotationPage = () => {
  const {
    data: rotation,
    error,
    isPending,
  } = useQuery({
    queryKey: ["championRotation"],
    queryFn: getChampionRotation,
  });

  if (isPending) {
    return <div>로딩 중...</div>;
  }

  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        현재 무료로 플레이 가능한 챔피언
      </h1>
      <ul className="grid grid-cols-2 gap-4">
        {rotation?.map((champion) => (
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
                <h2 className="text-xl font-semibold text-center">
                  {champion.name}
                </h2>
                <p className="text-sm text-gray-500 text-center">
                  {champion.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RotationPage;
