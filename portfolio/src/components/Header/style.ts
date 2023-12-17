import styled from "styled-components"

export const StyledHeader = styled.header`
    color: #ffffff;
    background-color: var(--grey-5);
    height: 72px;
    width: 100%;
    border-bottom: 1px solid var(--color-secondary);

    display: flex;
    justify-content: space-around;

    h1{
        padding: 15px;
        font-size: 1.3rem;
        font-weight: 700;
    }

    div {
        display: flex;
        justify-content: space-between;
        color: #ffffff;
        gap: 20px;
        margin-bottom: 10px;
    }

    button {
        color: var(--grey-3);
        font-size: 1rem;
        font-weight: 600;
    }

    button:hover {
        color: #ffffff;
    }
`