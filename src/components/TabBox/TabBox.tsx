import styled from '@emotion/styled';

interface Props {
    children: React.ReactNode;
}

const TabBox = (props: Props) => {
    const { children } = props;

    return <TabBoxStyled>{children}</TabBoxStyled>;
};

export default TabBox;

const TabBoxStyled = styled.ul`
    list-style: none;

    display: flex;
    flex-direction: row;
`;
