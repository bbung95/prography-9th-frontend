import styled from '@emotion/styled';
import { useQuery } from 'react-query';

import { fetchGetFoodList } from '../../apis/api';
import Card from '../Card/Card';

const CardList = () => {
    const { data, isLoading } = useQuery(['foods'], () => fetchGetFoodList('Beef'));

    return (
        <CardListStyled>
            {!isLoading &&
                data?.meals.map((food) => (
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
    );
};

export default CardList;

const CardListStyled = styled.ul`
    list-style: none;

    margin: 0;
    padding: 0;

    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;
