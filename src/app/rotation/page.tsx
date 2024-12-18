"use client";

import { useQuery } from "@tanstack/react-query";
import { getChampionRotation } from "@/utils/riotApi";
import ChampionListComponent from "../champions/ChampionList";

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
    return (
      <div className="fixed inset-0 flex items-center justify-center  z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-red-500"></div>
      </div>
    );
  }

  if (error instanceof Error) {
    return <div>{error.message}</div>;
  }
  if (!rotation || rotation.length === 0) {
    return <div>챔피언이 없습니다.</div>;
  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        현재 무료로 플레이 가능한 챔피언
      </h1>
      <ChampionListComponent champions={rotation} />
    </div>
  );
};

export default RotationPage;
