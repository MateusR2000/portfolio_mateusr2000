import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

export const StyledProjects = styled.div`
    background-color: var(--grey-5);
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    height: auto;
    min-height: 600px;
    padding: 90px;
    color: #ffffff;

    .projects__intro{
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        gap: 20px;
    }

    h2{
        font-size: 1.375rem;
        font-weight: 700;
    }

    p{
        font-size: 1rem;
        font-weight: 400;
        color: var(--grey-3);
        line-height: 28px;
    }

    span{
        color: var(--color-secondary);
    }

    ul{
        display: flex;
        max-width: 1030px;
        flex-wrap: wrap;
        gap: 40px;
    }

    li{
        height: auto;
        width: 100%;
        max-width: 500px;
        display: flex;
        flex-direction: column;
        flex: 1 1 320px;
        gap: 25px;
    }
    
    .languages__container{
        height: 25px;
        display: flex;
        gap: 10px;
    }

    .languages{
        background-color: var(--grey-4);
        line-height: 10px;
        height: 28px;
        padding: 8px;
        color: var(--grey-3);
    }

    .links__project{
        height: 28px;
        display: flex;
        gap: 10px;
    }

    a{
        font-size: 1rem;
        color: var(--grey-3);
        font-weight: 400;
    }

    ${devices.tablet} {
        padding: 50px 30px;
        gap: 30px;
    }

    ${devices.mobile} {
        padding: 40px 20px;
        gap: 20px;

        ul {
            flex-direction: column;
            gap: 30px;
        }

        li {
            flex: 1 1 auto;
            max-width: 100%;
        }
    }
`