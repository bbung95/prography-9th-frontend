import styled from '@emotion/styled';

import CardList from '../components/ContentsArea/ContentsArea';
import TabBox from '../components/TabBox/TabBox';
import useFilterTab from '../hooks/useFilterTab';

const HomePage = () => {
    const { isLoading, tabs, handleSelectCategory } = useFilterTab();

    return (
        <ContainerStyled>
            {!isLoading && (
                <>
                    <TabBox tabs={tabs} handleClick={handleSelectCategory} />
                    <CardList />
                </>
            )}
        </ContainerStyled>
    );
};

export default HomePage;

const ContainerStyled = styled.div`
    width: 100%;
    max-width: 1280px;

    padding: 30px 20px 0;
    margin: 0 auto;
`;
