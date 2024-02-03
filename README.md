# prography-9th-frontend-pa

## 프로젝트 실행

패키지 매니져로 npm을 사용하였습니다.

```
# clone
git clone https://github.com/bbung95/prography-9th-frontend.git

# change directory
cd prography-9th-frontend

# install
npm install

# start
npm run dev
```

## 기술 스택

-   React v18 + vite
-   typescript
-   eslint, prettier
-   emotion
-   axios
-   react-query
-   pre-commit

## 디렉토리 구조

```
src
├── apis
├── components
│   ├── Card
│   ├── Chip
│   ├── ContentsArea
│   ├── FilterArea
│   ├── Header
│   ├── layout
│   ├── routes
│   ├── SelectBox
│   ├── TabBox
│   └── TopButton
├── pages
├── hooks
│   ├── useFillterTab
│   ├── useFoodList
│   └── useScrollObserver
├── styles
│   ├── reset.ts
│   └── theme.tsx
└── types
```

apis : 프로젝트에서 사용하는 api와 type을 정의했습니다.
components : 프로젝트에서 사용되는 재사용 컴포넌트를 정의했습니다.
pages : 프로젝트의 페이지 컴포넌트가 정의되어 있습니다.
hooks : 로직을 가지고 있는 커스텀 훅을 정의했습니다.
styles : emotion으로 정의한 reset style과 theme가 정의되어 있습니다.
types : emotion Type이 정의되어 있습니다.

## 요구사항 구현

### 1. UI 구현

화면 샘플과 비슷한 UI와 레이아웃을 적용했습니다.

### 2. useQueries

음식 목록을 제공하는 API가 단일 카테고리 조회만 가능한 스펙이였습니다.
ex) https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}

많은 카테고리의 상품들을 가져와 하나의 목록으로 렌더링하는데 시간이 걸릴거라 생각하여 useQueries를 통한 병렬처리를 진행했습니다.

v5에서 지원하는 combine 옵션을 통해 각기 다른 데이터를 하나로 모아 관리할 수 있었습니다.

```javascript
const combinedQueries = useQueries({
    queries: categories.map((cat) => {
        return { queryKey: ['food', { date: cat }], queryFn: () => fetchGetFoodList(cat) };
    }),
    combine: (results) => {
        return {
            data: results.map((result) => result.data?.meals ?? []) ?? [],
            pending: results.some((result) => result.isPending),
        };
    },
});
```

### 3. 무한스크롤 (IntersectionObserver)

API로 받아온 데이터를 클라이언트가 계속해서 가지고 있어야한다는 조건이 있어 react-query로 cache를 통해 관리하였습니다.

IntersectionObserver를 사용하여 무한스크롤은 구현하였으며 20개씩 보여주는 조건에 따라 slice를 사용하여 목록을 렌더링 하였습니다.

```javascript
const count = offset * (foodList.length > 20 ? 20 : foodList.length);

const { observe, unobserve } = useScrollObserver(() => {
    setOffset((offset) => offset + 1);
});

<CardListStyled>
    {foodList.slice(0, count).map((food) => (
        <Card
            key={food.strMeal}
            cardInfo={{
                img: food.strMealThumb,
                info: food.strMeal,
            }}
            viewType={viewType}
        />
    ))}
</CardListStyled>;
```
