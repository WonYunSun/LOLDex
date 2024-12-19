# LoL Dex
 **주특기 플러스주차** Riot API를 활용한 League of Legends 정보 앱
 
![enter image description here](https://github.com/user-attachments/assets/3deb23ab-9fed-4602-bbcb-c854c4dcb282)

### 📌 vercel 배포 링크 - [https://lol-dex-ten.vercel.app/](https://lol-dex-ten.vercel.app/)

## 페이지 별 주요 기능

 1. 홈 (`/`)
	 간단한 서비스 설명과 각 세부 페이지 바로 가기 제공합니다.![loldex1](https://github.com/user-attachments/assets/1384a79f-441b-4631-a906-ac4d1671d280)
 2. 챔피언 목록 (`/champions`)
	 RIOT API에서 제공하는 챔피언 목록을 카드 리스트 형식으로 보여줍니다. ![loldex2](https://github.com/user-attachments/assets/f9f4e1c2-1612-451b-9b6e-b2dc5c898728)

 3. 챔피언 상세페이지 (`/champions/[id]`)
 각 챔피언 별 세부 정보를 제공합니다.![loldex3](https://github.com/user-attachments/assets/ca789155-5f56-4b70-81f4-3859b425a5ac)

 4. 아이템 목록 (`/items`)
  RIOT API에서 제공하는 아이템 목록을 카드 리스트 형식으로 보여줍니다. ![loldex4](https://github.com/user-attachments/assets/5aa13f12-8dff-4840-8622-a28cccb92fc0)
 5. 챔피언 로테이션 (`/rotation`)
 무료로 플레이 가능한 챔피언 로테이션 목록을 카드 리스트 형식으로 제공합니다.
![loldex5](https://github.com/user-attachments/assets/a52209a3-0d13-424c-bdd5-a670e9ba1ec4)
 7. 기타
	 - 다크모드 / 라이트모드
	 ![loldex6](https://github.com/user-attachments/assets/a0aaf126-d7bf-4388-82b7-deba03567e4c)
	 - 반응형 UI
	 ![loldex7](https://github.com/user-attachments/assets/e00312a5-b05f-43ac-b769-fe83142401e6)

## 🗂️폴더 구조

```
📦 LOLDex
├─ .eslintrc.json
├─ .gitignore
├─ README.md
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  └─ favicon.png
├─ src
│  ├─ app
│  │  ├─ GlobalLoading.tsx
│  │  ├─ api
│  │  │  └─ rotation
│  │  │     └─ route.ts
│  │  ├─ champions
│  │  │  ├─ ChampionList.tsx
│  │  │  ├─ [id]
│  │  │  │  └─ page.tsx
│  │  │  └─ page.tsx
│  │  ├─ components
│  │  │  ├─ ThemeToggle.tsx
│  │  │  ├─ TopNav.tsx
│  │  │  └─ providers
│  │  │     └─ TQProvider.tsx
│  │  ├─ fonts
│  │  │  ├─ GeistMonoVF.woff
│  │  │  └─ GeistVF.woff
│  │  ├─ globals.css
│  │  ├─ items
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ rotation
│  │  │  └─ page.tsx
│  │  └─ types
│  │     ├─ Champion.ts
│  │     ├─ ChampionRotation.ts
│  │     └─ Item.ts
│  └─ utils
│     ├─ riotApi.ts
│     └─ serverApi.ts
├─ tailwind.config.ts
├─ tsconfig.json
└─ yarn.lock
```


## 과제 요구사항 완료 목록

 ### 데이터 Fetching

 - [x] `types/` 디렉토리에 필요한 타입 정의

 - [x] **Server Actions**를 사용하여 서버 컴포넌트에서 `/champions`, `/items`, `/rotation` 데이터 Fetching
 - [x]  `/api/rotation` 엔드포인트 유지 (CSR 전용)
 - [x] 외부 API 호출에 `fetch` 사용 및 적절한 에러 처리

----------

###  Tanstack Query

 - [x] 클라이언트 컴포넌트에서 API 호출 시 Tanstack Query 사용
    -   `useQuery` 훅 사용
    -   상태 관리와 데이터 캐싱에 `useState`와 `useEffect` 대신 Tanstack Query 활용
 - [x] Query Key와 옵션 설정
    -   고유한 Query Key 지정
    -   `staleTime`, `cacheTime`, `refetchInterval`, `enabled` 옵션 설정
 - [x] 로딩 및 에러 처리 구현
    -   `isPending`, `isError`, `data` 상태를 활용한 UI 처리
- [x]  타입스크립트로 API 응답 데이터의 타입 정의 및 제네릭 사용

----------

###  각 페이지 구현 및 렌더링 방식 적용

 - [x]  **챔피언 목록 페이지 (`/champions`)**
    -   ISR 방식으로 구현
    -   챔피언 목록 표시
 - [x] **챔피언 상세 페이지 (`/champions/[id]`)**
    -   동적 렌더링 방식 구현
    -   챔피언 상세 정보 표시
    -   동적 메타데이터 생성
 - [x] **챔피언 로테이션 페이지 (`/rotation`)**
    -   클라이언트 사이드 렌더링(CSR)으로 구현
    -   로테이션 정보 표시
 - [x] **아이템 목록 페이지 (`/items`)**
    -   SSG 방식으로 구현
    -   아이템 목록 표시

----------

###  레이아웃 및 네비게이션 구성

 - [x]  글로벌 레이아웃 설정
 - [x]  네비게이션 메뉴 추가 및 페이지 간 이동 가능하도록 구현

----------

### 로딩 핸들링 고도화
 - [x]  로딩 핸들링 고도화
	-   React Suspense와 loading.tsx를 사용하여 서버 컴포넌트의 로딩 상태를 관리
	- 서버 컴포넌트 내에서 비동기 데이터를 가져올 때 Suspense를 활용하여 로딩 UI를 구현
----------

### 성능 최적화
 - [x]  이미지 최적화
	-   Next.js의 <Image> 컴포넌트를 활용하여 이미지 로딩 최적화 및 자동 서식 변경을 적용
----------

### 반응형 디자인 및 UI 개선
 - [x]  Tailwind CSS의 유틸리티 클래스를 활용하여 반응형 디자인을 구현
	 - 모바일 환경에서도 사용하기 편리한 인터페이스를 제공

----------

### 다크 모드 기능 구현
 - [x]  다크 모드 토글 스위치를 제공하여 테마를 전환
	 - next-themes 라이브러리 사용
	

## 🔧 사용기술
[![TypeScript](https://camo.githubusercontent.com/a8288db858b02700d4d4d33894264f1c897566782c26fb013450c2539288c4d5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d3331373843363f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/a8288db858b02700d4d4d33894264f1c897566782c26fb013450c2539288c4d5/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f547970655363726970742d3331373843363f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465) [![Next.js](https://camo.githubusercontent.com/d13b13f612e04c7f0acbac86017eccf8b541fe32d9e3aabe51f036319f5f1946/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742e6a732d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/d13b13f612e04c7f0acbac86017eccf8b541fe32d9e3aabe51f036319f5f1946/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4e6578742e6a732d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d6e6578742e6a73266c6f676f436f6c6f723d7768697465)    [![Tailwind CSS](https://camo.githubusercontent.com/c1b0453a3b14ed323285b2c961db4cf969f64039c6d6aa2ebd0928353801ab47/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5461696c77696e645f4353532d3036423644343f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e64637373266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/c1b0453a3b14ed323285b2c961db4cf969f64039c6d6aa2ebd0928353801ab47/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5461696c77696e645f4353532d3036423644343f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e64637373266c6f676f436f6c6f723d7768697465)  [![Riot Games API](https://camo.githubusercontent.com/0d91f3f51d14291b5be609cb36d9442bde7a72e2c8f4f098c09459508ccc9587/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52696f745f47616d65735f4150492d4646303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d72696f742d67616d6573266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/5fcf5af28ae0515672389b5f009859d7a5d809704a22161b97e70e86bf8cb60e/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c75636964655f52656163742d3631444146423f7374796c653d666f722d7468652d6261646765266c6f676f3d7265616374266c6f676f436f6c6f723d7768697465)
