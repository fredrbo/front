import styled from "styled-components";

export const BodySld = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.background};
    min-height: 100vh;
    width: 100vw;
    align-items: center;
`;