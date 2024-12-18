// 개별 챔피언 데이터 타입
export interface Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampionInfo; // info 객체 타입
  image: ChampionImage; // image 객체 타입
  tags: string[]; // 문자열 배열
  partype: string; // 파트 타입
  stats: ChampionStats; // stats 객체 타입
  lore: string;
}

// info 객체 타입
export interface ChampionInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

// image 객체 타입
export interface ChampionImage {
  full: string;
  sprite: string;
  group: string;
  w: number;
  h: number;
}

// stats 객체 타입
export interface ChampionStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}

// 챔피언 목록 데이터 타입
export interface ChampionList {
  [key: string]: Champion; // 키는 챔피언 이름, 값은 Champion 객체
}
