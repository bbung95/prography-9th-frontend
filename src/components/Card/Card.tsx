import styled from '@emotion/styled';

export interface ICardInfo {
    img?: string;
    info?: string;
}

interface Props {
    cardInfo: ICardInfo;
}

const Card = (props: Props) => {
    const {
        cardInfo: { img = 'https://via.placeholder.com/250x250', info = 'Beed Sunday Roast' },
    } = props;

    return (
        <CardStyled>
            <ImageWrapperStyled>
                <img src={img} alt='' />
            </ImageWrapperStyled>
            <CardInfo>{info}</CardInfo>
        </CardStyled>
    );
};

export default Card;

const CardStyled = styled.div`
    width: 250px;
`;

const ImageWrapperStyled = styled.div`
    width: 250px;
    height: 250px;

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
