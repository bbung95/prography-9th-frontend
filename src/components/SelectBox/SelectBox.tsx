import styled from '@emotion/styled';
import { ChangeEvent } from 'react';

export interface IOption {
    text: string;
    value: string;
}

interface Props {
    selectValue?: string;
    options: IOption[];
    handleChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox = (props: Props) => {
    const { selectValue, options, handleChange } = props;

    const defaultValue = selectValue || options[0].value;

    return (
        <SelectBoxStyled defaultValue={defaultValue} onChange={handleChange}>
            {options.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.text}
                </option>
            ))}
        </SelectBoxStyled>
    );
};

export default SelectBox;

const SelectBoxStyled = styled.select`
    padding: 6px 6px 6px 12px;

    font-weight: 600;

    border-radius: 12px;

    box-shadow: 3px 3px 5px 2px lightgray;
`;
