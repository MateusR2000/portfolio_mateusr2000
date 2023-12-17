import styled from "styled-components";

export const StyledContacts = styled.div`
    color: #ffffff;
    display: flex;
    gap: 100px;
    justify-content: center;
    align-items: center;
    padding: 90px;
    
    .contacts__intro{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    h2{
        color: var(--color-secondary);
        font-size: 1.625rem;
        font-weight: 700;
        line-height: 40px;
    }

    p{
        color: var(--grey-3);
        font-size: 1rem;
        line-height: 28px;
    }

    .contact__cards{
        display: flex;
        flex-direction: column;
        gap: 60px;
    }

    .contact__container{
        height: 120px;
        display: flex;
        gap: 20px;
    }

    .contact__info{
        display: flex;
        flex-direction: column;
        gap: 25px;
    }

    a{
        font-size: 1rem;
        color: #ffffff;
    }
`