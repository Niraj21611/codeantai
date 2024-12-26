import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    box-sizing: border-box;
    overflow: hidden;
    margin: 0;
    padding: 0;
}
:root {
    --color-brand-primary: #FFFFFF;
    --color-brand-secondary: #FAFAFA;
    --color-button-primary: #1570EF;
    --color-border-primary: #d5d7da;
    --color-border: #E9EAEB;
    --color-text: #414651;
    --color-user: #181d27;
    --color-badge-border : #B2DDFF;
    --color-badge-text: #175CD3;
    --color-badge-background: #EFF8FF;
    --color-card : #081735;
    --color-border-secondary: #d5d7da;   
}`;

export default GlobalStyle;
