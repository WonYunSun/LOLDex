import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto mt-10 mb-10">
      <div className="text-center">
        <h1 className="text-3xl font-bold">리그 오브 레전드 정보 앱</h1>
        <p className="mt-4 text-gray-500">
          Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다.
        </p>
      </div>

      <div className="mt-[40px] flex flex-col justify-center gap-10">
        <div className="flex flex-col justify-center gap-10">
          {/* 챔피언 목록 링크 */}
          <a
            className="flex flex-col justify-center items-center gap-5 text-amber-400"
            href="/champions"
          >
            <div className="relative w-[400px] h-[300px]">
              <Image
                alt="챔피언 목록"
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full"
                src="https://wallpapers.com/images/featured/league-of-legends-3ggpjbfly8o9uo8a.jpg"
                width={400} // width를 지정
                height={300} // height를 지정
              />
            </div>
            <span>챔피언 목록 보기</span>
          </a>
        </div>

        <div className="flex flex-col justify-center gap-10">
          {/* 금주 로테이션 확인 링크 */}
          <a
            className="flex flex-col justify-center items-center gap-5 text-amber-400"
            href="/rotation"
          >
            <div className="relative w-[400px] h-[300px]">
              <Image
                alt="금주 로테이션"
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full"
                src="https://wallpapers.com/images/high/3d-league-of-legends-8yx3ab1xb69nn227.webp"
                width={400} // width를 지정
                height={300} // height를 지정
              />
            </div>
            <span>금주 로테이션 확인</span>
          </a>
        </div>

        <div className="flex flex-col justify-center gap-10">
          {/* 아이템 목록 보기 링크 */}
          <a
            className="flex flex-col justify-center items-center gap-5 text-amber-400"
            href="/items"
          >
            <div className="relative w-[400px] h-[300px]">
              <Image
                alt="아이템 목록"
                loading="lazy"
                decoding="async"
                className="object-cover w-full h-full"
                src="https://wallpapers.com/images/high/arcane-league-of-legends-dark-alley-z81hrap8o7mezc0g.webp"
                width={400} // width를 지정
                height={300} // height를 지정
              />
            </div>
            <span>아이템 목록 보기</span>
          </a>
        </div>
      </div>
    </div>
  );
}
