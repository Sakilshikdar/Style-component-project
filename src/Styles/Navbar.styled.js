import styled from "styled-components";

export const Nevigation = styled.nav`
    height: 12vh;

    display: flex;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;


    img{
        height: 5rem;
        width: 5rem;
        border-radius: 50%;
    }

    @media (max-width: ${({theme})=>theme.mobile}) {
    flex-direction: column;
    padding: 2rem;
  }
`