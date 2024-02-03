import styled from '@emotion/styled';
import { useQuery } from 'react-query';

import { fetchGetFoodList } from '../../apis/api';
import Card from '../Card/Card';
import FilterArea from '../FilterArea/FilterArea';

interface Props {
    selectCategory?: string;
}

const ContentsArea = (props: Props) => {
    const { selectCategory = '' } = props;
    const { data, isLoading } = useQuery(
        ['foods', selectCategory],
        () => fetchGetFoodList(selectCategory),
        {
            staleTime: Infinity,
        },
    );
    const meals = data?.meals ?? [];

    return (
        <ContentsAreaStyled>
            <FilterArea count={0} totalCount={meals.length} />
            <CardListStyled>
                {!isLoading &&
                    meals.map((food) => (
                        <li key={food.idMeal}>
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
