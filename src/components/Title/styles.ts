import styled from 'styled-components';

type TextComp = {
    color?: string;
    fontSize?: string;
    fontWeight?: string;

}

export const TextComp = styled.span<TextComp>`
    color: ${props => props.theme.result};
    font-size: ${props => props.fontSize ? props.fontSize : '40px'};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'}
    display: inline

`;