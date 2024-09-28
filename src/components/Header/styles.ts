import styled from 'styled-components';

export const HeaderContainer = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem;
    background-color: ${props => props.theme['white']};

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;

        img {
            width: 34px;
            height: 34px;
        }
    }

    nav {
        display: flex;
        gap: 0.5rem;


        a {
            color: ${props => props.theme['wine-gray-100']};
            text-decoration: none;
            padding: 0.5rem ;
            &:hover {
                background-color: ${props => props.theme['wine-500']};
                border-radius: 5px;
                color: ${props => props.theme['white']};
            }
        }
    }
`;