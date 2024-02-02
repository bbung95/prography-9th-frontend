import styled from '@emotion/styled';

import CardList from '../components/CardList/CardList';
import FIlterArea from '../components/FilterArea/FIlterArea';
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
            <FIlterArea />
            <CardList />
        </ContainerStyled>
    );
};

export default HomePage;

const ContainerStyled = styled.div`
    width: 100%;
    max-width: 1040px;

    margin: 0 auto;
`;
