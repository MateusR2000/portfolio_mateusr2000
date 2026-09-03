import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

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
        allign-items: center;
        height: 60px;
        gap: 15px;
    }

    .info img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
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
        flex-wrap: wrap;
        gap: 20px;
    }

    .buttons img {
        height: 28px;
        width: 28px;
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
        flex-wrap: wrap;
        gap: 30px;
    }

    .techIcons img {
        height: 40px;
        width: 40px;
        object-fit: cover;
    }

    ${devices.tablet} {
        padding: 50px 30px;

        h2 {
            font-size: 1.5rem;
        }
    }

    ${devices.mobile} {
        padding: 30px 20px;

        h2 {
            font-size: 1.3rem;
        }

        .buttons{
            gap: 12px;
        }

        button {
            width: 100%;
            justify-content: center;
        }
    }

`