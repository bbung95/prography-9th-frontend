import styled from '@emotion/styled';
import { useEffect, useRef } from 'react';

import useFoodList from '../../hooks/useFoodList';
import useScrollObserver from '../../hooks/useScrollObserver';
import Card from '../Card/Card';
import FilterArea from '../FilterArea/FilterArea';

const ContentsArea = () => {
    const targetRef = useRef(null);
    const { foodList, sort, offset, setOffset, changeSort } = useFoodList();
    const count = offset * (foodList.length > 20 ? 20 : foodList.length);

    const { observe, unobserve } = useScrollObserver(() => {
        setOffset((offset) => offset + 1);
    });

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
            <FilterArea
                count={count > foodList.length ? foodList.length : count}
                totalCount={foodList.length}
                sort={sort}
                handleChange={changeSort}
            />
            <CardListStyled>
                {foodList.slice(0, count).map((food) => (
                    <li key={food.strMeal}>
                        <Card
                            cardInfo={{
                                img: food.strMealThumb,
                                info: food.strMeal,
                            }}
                        />
                    </li>
                ))}
            </CardListStyled>
            <div ref={targetRef} style={{ width: '100px', height: '20px' }} />
        </ContentsAreaStyled>
    );
};

export default ContentsArea;

const ContentsAreaStyled = styled.section``;

const CardListStyled = styled.ul`
    list-style: none;

    margin: 0;
    padding: 0;

    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;
