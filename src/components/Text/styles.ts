import styled from 'styled-components';

type SpanProps = {
    margin?: string;
    background?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    borderBot?: string;
    padding?: string;

}   

export const SpanComp = styled.span<SpanProps>`
    margin: ${props => props.margin ? props.margin : "0px"};
    color: ${props => props.theme.text};
    font-size: ${props => props.fontSize};
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'}
    display: inline
    border-bottom: ${props => props.borderBot ? props.borderBot : '20px solid blue'}
    padding: ${props => props.padding ? props.padding : "0px"};

`;