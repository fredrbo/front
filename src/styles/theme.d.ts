import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        // Ajustar  variavies com base na tela sorteio
        title: string,

        bodyBackground: string,

        containerBackground: string,

        buttonColor: string,
        buttonBackground: string,
        buttonBackgroundHover: string,

        errorBackground: string,

        inputColor: string,
        inputBackground: string,
        inputBorderColor: string,
        inputFocusBorderColor: string,

        labelColor: string,
        labelFontWeight: number,

        navbarBackground: string,

        switchOnColor: string,
        switchOffColor: string,

        trBackgroundHover: string
    }
}