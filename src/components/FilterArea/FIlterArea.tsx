import styled from '@emotion/styled';

import SelectBox, { IOption } from '../SelectBox/SelectBox';

const sortOption: IOption[] = [
    {
        text: '최신 등록순',
        value: 'recent',
    },
    {
        text: '오름차순',
        value: 'desc',
    },
    {
        text: '내림차순',
        value: 'asc',
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

const FilterArea = () => {
    return (
        <FilterAreaStyled>
            <SelectBox options={sortOption} />
            <SelectBox options={viewOption} />
        </FilterAreaStyled>
    );
};

export default FilterArea;

const FilterAreaStyled = styled.div`
    padding: 18px 0;

    display: flex;
    flex-direction: row;
    justify-content: end;
    gap: 12px;
`;
