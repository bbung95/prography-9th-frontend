import { css } from '@emotion/react';

import { normalize } from 'styled-normalize';

const reset = css`
    ${normalize}

    * {
        box-sizing: border-box;
        -ms-text-size-adjust: 100%; /* 2 */
        -webkit-text-size-adjust: 100%; /* 2 */
    }

    html,
    body {
        font-style: normal;
        overscroll-behavior: none;
    }
`;

export default reset;
