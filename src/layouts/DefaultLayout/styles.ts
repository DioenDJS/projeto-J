import styled from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 90rem;
    margin: 1rem auto;

    background: ${props => props.theme['gray-100']};
    display: flex;
    flex-direction: column;
`;