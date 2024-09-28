import { HeaderContainer, ArticleContainer, ImageContainer, HomeContainer, BodyContainer, CuboCardContainer, CardContainer, ServiceContainer, ImgeServiceContainer, SocialWebContainer, FooterContainer } from './styles'
import modelo from "../../assets/modelo.png"
import { At, InstagramLogo, WhatsappLogo } from '@phosphor-icons/react';

export function Home() {
    return (
        <HomeContainer>
            <HeaderContainer>
                <ArticleContainer>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </p> 
                    <strong>
                        Tenetur eum vero nisi magni 
                    </strong> 
                    <p>
                        culpa consequuntur autem sint temporibus provident, velit iste! 
                        Laboriosam atque quasi corrupti maxime accusantium?
                    culpa consequuntur autem sint temporibus provident, velit iste! 
                    Laboriosam atque quasi corrupti maxime accusantium?
                    culpa consequuntur autem sint temporibus provident, velit iste! 
                    </p>
                </ArticleContainer>
                <ImageContainer>
                    <img src={modelo} alt="" />
                </ImageContainer>
            </HeaderContainer>
            <BodyContainer>
                <strong>atque quasi corrupti maxim</strong>
                <CuboCardContainer>
                    <CardContainer>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Aperiam natus nesciunt similique quos 
                           aliquid repudiandae, magnam temporibus repellat 
                           minus optio sequi labore nulla consequatur voluptas
                           labore ea. Doloremque."</p>
                        <div>
                            <span>Colaborador</span>
                            <img src={modelo} alt="" />
                        </div>   
                    </CardContainer>
                    <CardContainer>
                        <p>"Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Aperiam natus nesciunt similique quos 
                           aliquid repudiandae,"</p>
                           <div>
                            <span>Colaborador</span>
                            <img src={modelo} alt="" />
                        </div>   
                    </CardContainer>
                    <CardContainer>
                        <p>"Consectetur adipisicing
                           elit. Aperiam natus nesciunt similique quos 
                           aliquid repudiandae, magnam temporibus repellat 
                           minus optio sequi."</p>
                           <div>
                            <span>Colaborador</span>
                            <img src={modelo} alt="" />
                        </div>   
                    </CardContainer>
                </CuboCardContainer>
            </BodyContainer>
            <ServiceContainer>
                <div>
                    <ImgeServiceContainer>
                        <img src={modelo} alt="" />
                    </ImgeServiceContainer>
                    <p>Verifique outros elementos: Assegure-se de que não existam outros elementos com </p>
                </div>
                <div>
                    <ImgeServiceContainer>
                        <img src={modelo} alt="" />
                    </ImgeServiceContainer>
                    <p>Verifique outros elementos: Assegure-se de que não existam outros elementos com </p>
                </div>
                <div>
                    <ImgeServiceContainer>
                        <img src={modelo} alt="" />
                    </ImgeServiceContainer>
                    <p>Verifique outros elementos: Assegure-se de que não existam outros elementos com </p>
                </div>
            </ServiceContainer>
            <SocialWebContainer>
                <a href="">
                    <InstagramLogo size={54} />
                </a>
                <a href="">
                    <WhatsappLogo size={54} />
                </a>
                <a href="">
                    <At size={54} />
                </a>
            </SocialWebContainer>
            <FooterContainer>

            </FooterContainer>
        </HomeContainer>
    )
}