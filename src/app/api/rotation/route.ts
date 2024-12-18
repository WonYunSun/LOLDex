import { NextApiRequest } from "next";
const apiKey = process.env.RIOT_API_KEY;
if (!apiKey) {
  throw new Error("RIOT_API_KEY is not defined");
}
const headers = new Headers({
  "X-Riot-Token": apiKey,
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  "Accept-Language": "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7",
  "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
  Origin: "https://developer.riotgames.com",
});
export async function GET(req: NextApiRequest) {
  if (req.method === "GET") {
    try {
      const response = await fetch(
        "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations",
        {
          headers,
        }
      );

      if (!response.ok) {
        throw new Error(`Riot API Error: ${response.status}`);
      }
      const data = await response.json();
      return new Response(JSON.stringify(data.freeChampionIds), {
        status: 200,
      });
    } catch (error) {
      console.log(error);
      return new Response(
        JSON.stringify({ error: "Failed to fetch champion rotations" }),
        { status: 500 }
      );
    }
  } else {
    //GET 요청 이외의 요청 시

    return new Response(
      JSON.stringify({ error: "Failed to fetch champion rotations" }),
      { status: 405 }
    );
  }
}
