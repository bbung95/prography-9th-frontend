import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <HeaderStyled>
            <Link to={'/'} reloadDocument>
                <img src='logo.png' alt='프로그라피 로고' />
            </Link>
        </HeaderStyled>
    );
};

export default Header;

const HeaderStyled = styled.header`
    padding: 20px 30px;

    & img {
        height: 50px;
    }
`;
