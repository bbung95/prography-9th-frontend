import styled from '@emotion/styled';

const TopButton = () => {
    const handleScrollTop = () => {
        window.scrollTo(0, 0);
    };

    return <TopButtonStyled onClick={handleScrollTop}>Top</TopButtonStyled>;
};

export default TopButton;

const TopButtonStyled = styled.button`
    cursor: pointer;

    width: 60px;
    height: 60px;

    position: fixed;

    bottom: 50px;
    right: 50px;

    border: none;
    border-radius: 50%;

    box-shadow: 3px 3px 5px 2px lightgray;
`;
