import styled from '@emotion/styled';

import Chip from '../Chip/Chip';

interface Props {
    tabs: string[];
}

const TabBox = (props: Props) => {
    const { tabs } = props;

    return (
        <TabBoxStyled>
            {tabs.map((tab) => (
                <Chip key={tab} text={tab} />
            ))}
        </TabBoxStyled>
    );
};

export default TabBox;

const TabBoxStyled = styled.ul`
    list-style: none;

    width: 100%;

    padding: 0;
    margin: 0;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
`;
