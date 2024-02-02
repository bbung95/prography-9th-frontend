import styled from '@emotion/styled';

export interface IOption {
    text: string;
    value: string;
}

interface Props {
    selectValue?: string;
    options: IOption[];
}

const SelectBox = (props: Props) => {
    const { selectValue, options } = props;

    return (
        <SelectBoxStyled>
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                    selected={selectValue === option.value}
                >
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
