import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

import SelectBox, { IOption } from '../SelectBox/SelectBox';

const sortOption: IOption[] = [
    {
        text: '최신 등록순',
        value: 'new',
    },
    {
        text: '오름차순',
        value: 'asc',
    },
    {
        text: '내림차순',
        value: 'desc',
    },
] as const;

const viewOption: IOption[] = [
    {
        text: '2개씩 보기',
        value: '2',
    },
    {
        text: '4개씩 보기',
        value: '4',
    },
] as const;

interface Props {
    count: number;
    totalCount: number;
    sort?: string;
    viewType: number;
    handleChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleChangeView?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const FilterArea = (props: Props) => {
    const { count, totalCount, sort, viewType, handleChange, handleChangeView } = props;

    return (
        <FilterAreaStyled>
            <InfoBoxStyled>
                {count}/{totalCount} 개 조회
            </InfoBoxStyled>
            <FilterGroupStyled>
                <SelectBox options={sortOption} selectValue={sort} handleChange={handleChange} />
                <SelectBox
                    options={viewOption}
                    selectValue={String(viewType)}
                    handleChange={handleChangeView}
                />
            </FilterGroupStyled>
        </FilterAreaStyled>
    );
};

export default FilterArea;

const FilterAreaStyled = styled.div`
    padding: 18px 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const InfoBoxStyled = styled.div`
    font-weight: 600;
`;

const FilterGroupStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: 12px;

    & > select:last-child {
        @media screen and (max-width: 576px) {
            display: none;
        }
    }
`;
