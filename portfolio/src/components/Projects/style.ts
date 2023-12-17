import styled from "styled-components";

export const StyledProjects = styled.div`
    background-color: var(--grey-5);
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: 100%;
    height: 1000px;
    padding: 90px;
    color: #ffffff;

    .projects__intro{
        height: 75px;
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
    }

    li{
        height: 100px;
        width: 100%;
        max-height: 225px;
        max-width: 500px;
        display: flex;
        flex-direction: column;
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

    .links__projeto{
        height: 28px;
        display: flex;
        gap: 10px;
    }

    a{
        font-size: 1rem;
        color: var(--grey-3);
        font-weight: 400;
    }
`