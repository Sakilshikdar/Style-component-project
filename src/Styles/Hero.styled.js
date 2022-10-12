import styled from "styled-components"


export const HeroSection =styled.div`
    padding: 8rem 0;
    color: ${bg=>bg};
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div{
        flex: 1;
    }

    img{
        border-radius: 50%;
    }
    h2{
        font-size: 64px;
        span{
            color: #5156D9;
        }
    }
`

export const TopSection = styled.section`
background: linear-gradient(180deg, #D1D2F1 0.47%, rgba(217, 217, 217, 0) 85.31%);
`