import styled from '@emotion/styled';

import useFoodList from '../../hooks/useFoodList';
import Card from '../Card/Card';
import FilterArea from '../FilterArea/FilterArea';

const ContentsArea = () => {
    const { foodList, sort, changeSort } = useFoodList();

    return (
        <ContentsAreaStyled>
            <FilterArea
                count={0}
                totalCount={foodList.length}
                sort={sort}
                handleChange={changeSort}
            />
            <CardListStyled>
                {foodList.map((food) => (
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
