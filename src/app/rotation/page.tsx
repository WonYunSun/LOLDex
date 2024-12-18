"use client";

import { useQuery } from "@tanstack/react-query";
import { getChampionRotation } from "@/utils/riotApi";

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
        {rotation?.map((championId) => (
          <li key={championId}>
            <span className="text-xl">{championId}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RotationPage;
