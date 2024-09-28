import styled from "styled-components";

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90rem;
`;

export const HeaderContainer = styled.header`
    display: flex;
    padding: 6.25rem 1rem 0 5.3125rem;
    background-color: ${props => props.theme['gray-100']};
    width: 90rem;
    height: 42.3125rem;
    gap: 11rem;
`;

export const ArticleContainer = styled.div`
    width: 34rem;
    strong {
        font-size: 4.5rem;
        height: 1.75rem;
        width: 0.5rem;
        letter-spacing: -0.10rem;
        word-spacing: -0.05em;
        color: ${props => props.theme['green-blue-300']};

    }
    p:first-of-type {
        color: ${props => props.theme['wine-gray-100']};
        font-size: 1rem;
        font-style: italic;
    }
    p:last-of-type {
        margin-top: 1.5rem;
        font-size: 1.25rem;
        color: ${props => props.theme['wine-500']};
    }
`;

export const ImageContainer = styled.div`
    position: relative; /* Contexto de posicionamento */
    
    img {
        position: absolute; /* Para sobrepor outros elementos */
        top: 0; /* Ajuste conforme necessário */
        left: 0; /* Ajuste conforme necessário */
        height: auto; /* Mantém a proporção */
        max-width: 28rem; /* Limita a largura máxima */
        z-index: 9999; /* Valor alto para sobreposição */
    }
`;

export const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90rem;
    height: 45.3125rem;
    padding:  7.5rem 0 0 9.5rem;
    z-index: 1; /* Apenas se necessário para outros elementos */
    background: linear-gradient(to bottom, ${props => props.theme['beige-100']}, ${props => props.theme['wine-gray-100']});

    strong {
        font-size: 3.5rem;
        font-weight: bold;
        width:25rem;
        letter-spacing: -0.10rem;
        word-spacing: -0.05em;
        color: ${props => props.theme['purple-900']};
    }
`;

export const CuboCardContainer = styled.div`
    display: flex;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start ;
    justify-content: space-between;
    width: 25rem;
    height: 24.44rem;
    margin: 1rem;
    background-color: ${props => props.theme['gray-100']};
    transition: transform 0.3s ease-in-out;
    padding: 3rem;
    color: ${props => props.theme['green-300']};

    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding-left:-1rem ;
    }
    span{
        font-size: 1rem;
        font-weight: bold;
        color: ${props => props.theme['wine-gray-100']};
    }
    img {
        width: 8rem;
        height: 8rem;
        object-fit: cover;
        
        border-radius: 999rem;
        border: 3px solid ${props => props.theme['wine-gray-100']};
        padding: 0.25rem;
    }

    &:hover {
        background-color: ${props => props.theme['wine-gray-100']};
        transform: scale(1.05);
        color: ${props => props.theme['beige-100']};
        box-shadow: -1px 0 10px 1px ${props => props.theme['beige-200']};

        span {
            color: ${props => props.theme['beige-100']};
        }

        img {
            border-color: ${props => props.theme['gray-100']};
        }
    }
`;
export const ServiceContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90rem;
    height: 42.3125rem;
    padding:3rem 4rem;
    gap: 1rem;

    div{
        height: 12rem ;
        width: 21.5rem;
        display: flex;
        flex-direction: column;
        font-style: italic;
        color: ${props => props.theme['purple-900']};
    }
`;

export const ImgeServiceContainer = styled.div`
    img {
        display: block;
        max-height: 12rem;
        max-width: 22rem;
        object-fit: cover;
        z-index: 2; /* Imagem acima do pseudoelemento */
        border-radius: 20px 80px 20px 80px;
        position: relative; /* Garante que a imagem esteja acima do pseudoelemento */
    }
`;

export const SocialWebContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 90rem;
    height: 22.3125rem;
    background: ${props => props.theme['gray-100']};
    justify-content: center;
    align-items: center;
    border-top:1px solid ${props => props.theme['wine-gray-100']};
    gap: 3rem;
    svg{
        color: ${props => props.theme['wine-500']};
    }
`;

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    width: 90rem;
    height: 22.3125rem;
    background: ${props => props.theme['wine-500']};
`;