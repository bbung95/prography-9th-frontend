import styled from '@emotion/styled';

import Card from '../Card/Card';

const CardList = () => {
    return (
        <CardListStyled>
            {new Array(20).fill('').map((_, idx) => (
                <li key={idx}>
                    <Card cardInfo={{}} />
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
    justify-content: space-between;
    flex-wrap: wrap;
`;
