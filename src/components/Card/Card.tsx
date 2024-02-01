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
        cardInfo: { img = 'https://via.placeholder.com/300x300', info = 'Beed Sunday Roast' },
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
    width: 300px;
    height: 380px;
`;

const ImageWrapperStyled = styled.div`
    width: 300px;
    height: 300px;

    border-radius: 20px;

    overflow: hidden;
`;

const CardInfo = styled.p`
    font-size: 18px;
    font-weight: 500;
`;
