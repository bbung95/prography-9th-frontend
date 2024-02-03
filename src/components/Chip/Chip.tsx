import styled from '@emotion/styled';

interface Props {
    text: string;
    isFocus?: boolean;
    handleClick?: () => void;
}

const Chip = (props: Props) => {
    const { text, isFocus, handleClick } = props;

    return (
        <ChipStyled $isFocus={isFocus} onClick={handleClick}>
            {text}
        </ChipStyled>
    );
};

export default Chip;

const ChipStyled = styled.span<{ $isFocus?: boolean }>`
    cursor: pointer;

    padding: 14px 32px;

    font-weight: 600;

    border-radius: 24px;

    box-shadow: 3px 3px 5px 2px lightgray;

    color: ${(props) => props.$isFocus && props.theme.color.blue400};
    background-color: ${(props) => (props.$isFocus ? props.theme.color.blue100 : '#fff')};

    &:hover {
        color: ${(props) => props.theme.color.blue400};

        background-color: ${(props) => props.theme.color.blue100};
    }
`;
