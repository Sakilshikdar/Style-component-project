import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        border: inherit;
    }

    html{
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body{
        background-color: #fff;
    }
    img{
        width: 100%;
    }


    ul{
        display: flex;
        list-style: none;
        gap: 2rem;
        align-items: center;
        justify-content: center;
            li{
                font-size: 1.8rem;
            }
    }

`
