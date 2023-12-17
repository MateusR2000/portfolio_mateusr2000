import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --color-primary: #FFE9EE;
        --color-secondary: #154C79;

        --grey-1: #f8f9fa;
        --grey-2: #e9ecef;
        --grey-3: #868e96;
        --grey-4: #212529;
        --grey-5: #0a0a0b;
    }

    body {
        background-color: var(--grey-4);
    }

    body, button, input {
        font-family: "Inter", sans-serif;
    }
`