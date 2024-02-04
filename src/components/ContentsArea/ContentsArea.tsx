import styled from '@emotion/styled';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

import useFoodList from '../../hooks/useFoodList';
import useScrollObserver from '../../hooks/useScrollObserver';
import Card from '../Card/Card';
import FilterBox from '../FilterBox/FilterBox';

const ContentsArea = () => {
    const targetRef = useRef(null);
    const { foodList, sort, offset, setOffset, changeSort } = useFoodList();
    const [viewType, setViewType] = useState<number>(4);
    const count = offset * (foodList.length > 20 ? 20 : foodList.length);

    const { observe, unobserve } = useScrollObserver(() => {
        setOffset((offset) => offset + 1);
    });

    const changeViewType = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setViewType(Number(value));
    };

    useEffect(() => {
        if (targetRef.current) {
            if (offset === 1) observe(targetRef.current);

            if (count >= foodList.length) {
                unobserve(targetRef.current);
            }
        }
    }, [foodList]);

    return (
        <ContentsAreaStyled>
            <FilterBox
                count={count > foodList.length ? foodList.length : count}
                totalCount={foodList.length}
                sort={sort}
                handleChange={changeSort}
                viewType={viewType}
                handleChangeView={changeViewType}
            />
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
            </CardListStyled>
            <div ref={targetRef} style={{ width: '100px', height: '20px' }} />
        </ContentsAreaStyled>
    );
};

export default ContentsArea;

const ContentsAreaStyled = styled.section``;

const CardListStyled = styled.div`
    list-style: none;

    width: 100%;

    margin: 0;
    padding: 0;

    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;
