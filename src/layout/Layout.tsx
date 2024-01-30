import { css } from '@emotion/react';

interface Props {
    children: React.ReactNode;
}

const Layout = (props: Props) => {
    const { children } = props;

    return <div css={layoutCss}>{children}</div>;
};

export default Layout;

const layoutCss = css`
    width: 100%;
    height: 100%;

    background-color: #fff;
`;
