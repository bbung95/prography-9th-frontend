import styled from '@emotion/styled';

import TabBox from '../components/TabBox/TabBox';

const tabList = [
    'Beef',
    'Chicken',
    'Dessert',
    'Lamb',
    'Miscellaneous',
    'Pasta',
    'Pork',
    'Seafood',
    'Side',
    'Starter',
    'Vegan',
    'Vegerarian',
    'Breakfast',
    'Goat',
];

const HomePage = () => {
    return (
        <ContainerStyled>
            <TabBox tabs={tabList} />
        </ContainerStyled>
    );
};

export default HomePage;

const ContainerStyled = styled.div`
    width: 100%;
    max-width: 1040px;

    margin: 0 auto;
`;
