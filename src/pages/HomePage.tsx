import styled from '@emotion/styled';

import CardList from '../components/ContentsArea/ContentsArea';
import TabBox from '../components/TabBox/TabBox';
import useFilterTab from '../hooks/useFilterTab';

const HomePage = () => {
    const { isLoading, tabs, handleSelectCategory } = useFilterTab();

    return (
        <ContainerStyled>
            {!isLoading && <TabBox tabs={tabs} handleClick={handleSelectCategory} />}
            <CardList selectCategory={'selectCategory'} />
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
