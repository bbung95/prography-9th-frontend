import { css } from '@emotion/react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';

const Layout = () => {
    return (
        <>
            <Header />
            <div css={layoutCss}>
                <Outlet />
            </div>
        </>
    );
};

export default Layout;

const layoutCss = css`
    width: 100%;
    height: 100%;

    background-color: #fff;
`;
