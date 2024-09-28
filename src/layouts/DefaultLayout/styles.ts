import styled from "styled-components";

export const LayoutContainer = styled.div`
    width: 90rem;
    margin: 1rem auto;

    background: ${props => props.theme['gray-100']};
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        margin: 0;
        width: 24.7rem;
    }
`;