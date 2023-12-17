import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    ul, ol{
        list-style: none;
    }

    button{
        background: transparent;
        border: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }
`