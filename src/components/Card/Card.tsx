import styled from '@emotion/styled';

export interface ICardInfo {
    img?: string;
    info?: string;
}

interface Props {
    cardInfo: ICardInfo;
    viewType?: number;
}

const Card = (props: Props) => {
    const {
        cardInfo: { img = 'https://via.placeholder.com/250x250', info = 'Beed Sunday Roast' },
        viewType = 4,
    } = props;

    return (
        <CardStyled $viewType={viewType}>
            <ImageWrapperStyled>
                <img src={img} alt='' loading='lazy' />
            </ImageWrapperStyled>
            <CardInfo>{info}</CardInfo>
        </CardStyled>
    );
};

export default Card;

const CardStyled = styled.article<{ $viewType: number }>`
    width: ${(props) => (props.$viewType === 4 ? 'calc(24.9999% - 9.1111px)' : 'calc(50% - 8px)')};

    @media screen and (max-width: 576px) {
        width: 100%;
    }
`;

const ImageWrapperStyled = styled.div`
    width: 100%;

    border-radius: 20px;

    overflow: hidden;

    & > img {
        width: inherit;
        height: inherit;
    }
`;

const CardInfo = styled.p`
    font-size: 18px;
    font-weight: 500;
`;
