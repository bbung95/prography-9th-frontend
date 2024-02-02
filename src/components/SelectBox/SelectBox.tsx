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
        <select>
            {options.map((option) => (
                <option
                    key={option.value}
                    value={option.value}
                    selected={selectValue === option.value}
                >
                    {option.text}
                </option>
            ))}
        </select>
    );
};

export default SelectBox;
