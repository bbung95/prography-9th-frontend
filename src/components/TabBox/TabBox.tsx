import styled from '@emotion/styled';

import { ICategory } from '../../apis/api';
import Chip from '../Chip/Chip';

interface Props {
    tabs: ICategory[];
}

const TabBox = (props: Props) => {
    const { tabs } = props;

    return (
        <TabBoxStyled>
            {tabs.map((tab) => (
                <Chip key={tab.idCategory} text={tab.strCategory} />
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
