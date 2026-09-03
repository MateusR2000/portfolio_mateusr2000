import styled from "styled-components";
import { devices } from "../../styles/breakpoints";

export const StyledContacts = styled.div`
    color: #ffffff;
    display: flex;
    gap: 100px;
    justify-content: center;
    flex-wrap: wrap;
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
        height: auto;
        display: flex;
        align-items: flex-start;
        gap: 20px;
    }

    .contact__container img{
        height: 32px;
        width: 32px;
    }
    .contact__info{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    a{
        font-size: 1rem;
        color: #ffffff;
    }

    ${devices.tablet} {
        padding: 50px 30px;
        gap: 50px; 
    }

    ${devices.mobile} {
        padding: 40px 20px;
        gap: 30px; 

        .contact__cards{
            gap: 40px;
        }
    }
`