import styled from '@emotion/styled';

const Header = () => {
    return (
        <HeaderStyled>
            <img src='logo.png' alt='프로그라피 로고' />
        </HeaderStyled>
    );
};

export default Header;

const HeaderStyled = styled.header`
    padding: 20px 30px;

    & > img {
        cursor: pointer;

        height: 50px;
    }
`;
