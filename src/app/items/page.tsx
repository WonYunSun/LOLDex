import { getItemsData } from "@/utils/serverApi";
import Image from "next/image";

const ItemPage = async () => {
  const items = await getItemsData();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">아이템 목록</h1>
      <div className="grid grid-cols-4 gap-4">
        {items?.map((item) => (
          <div
            key={item.name}
            className="border-solid border-2 border-red-500/[.33] rounded-lg transform transition-transform hover:scale-105 hover:shadow-[0px_4px_6px_rgba(255,0,0,0.3),0px_-4px_6px_rgba(255,0,0,0.3)] shadow-red-500/[.33]"
          >
            <Image
              src={`https://ddragon.leagueoflegends.com/cdn/14.24.1/img/item/${item.image.full}`}
              alt={item.name}
              width={60}
              height={60}
              className="mx-auto pt-5"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center">{item.name}</h2>
              <p className="text-sm text-gray-500 text-center">
                {item.plaintext}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemPage;
