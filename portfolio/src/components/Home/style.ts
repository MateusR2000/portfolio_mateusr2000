import styled from "styled-components";

export const StyledHome = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 90px;
    width: 100%;
    max-width: 800px;
    color: #ffffff;

    .info {
        display: flex;
        height: 60px;
        gap: 15px;
    }

    h2{
        font-size: 2.2rem;
    }

    span{
        color: var(--color-secondary);
    }

    .intro{
        color: var(--grey-3);
        font-weight: 400;
        font-size: 1rem;
    }

    .buttons{
        display: flex;
        gap: 20px;
    }

    button{
        height: 48px;
        background-color: var(--color-secondary);
        color: #ffffff;
        padding: 20px;
        border-radius: 8px;
    }

    .techIcons {
        height: 70px;
        display: flex;
        gap: 30px;
    }

`