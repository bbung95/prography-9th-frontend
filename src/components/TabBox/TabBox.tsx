import styled from '@emotion/styled';

import { ICategory } from '../../apis/api';
import Chip from '../Chip/Chip';

export interface ITab extends ICategory {
    isFocus?: boolean;
}

interface Props {
    tabs: ITab[];
    handleClick: (strCategory: string) => void;
}

const TabBox = (props: Props) => {
    const { tabs, handleClick } = props;

    return (
        <TabBoxStyled>
            {tabs.map((tab) => (
                <Chip
                    key={tab.idCategory}
                    text={tab.strCategory}
                    isFocus={tab.isFocus}
                    handleClick={() => handleClick(tab.strCategory)}
                />
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
