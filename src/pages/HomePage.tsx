import styled from '@emotion/styled';
import { useQuery } from 'react-query';

import { fetchGetCategory } from '../apis/api';
import CardList from '../components/CardList/CardList';
import FilterArea from '../components/FilterArea/FilterArea';
import TabBox from '../components/TabBox/TabBox';

const HomePage = () => {
    const { data: tabs, isLoading } = useQuery(['category'], fetchGetCategory);

    return (
        <ContainerStyled>
            {!isLoading && <TabBox tabs={tabs?.categories ?? []} />}
            <FilterArea />
            <CardList />
        </ContainerStyled>
    );
};

export default HomePage;

const ContainerStyled = styled.div`
    width: 100%;
    max-width: 1040px;

    padding-top: 30px;
    margin: 0 auto;
`;
