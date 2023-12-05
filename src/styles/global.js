import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from './deviceBreakpoints';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 62.5%;
        
        @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
            
            font-size: 52.5%;
            
        }

        @media(max-width: ${DEVICE_BREAKPOINTS.XS}){
            
            font-size: 42.5%;
            
        }
    }

    body{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
    }

    body, input, button, textarea{
        font-family: 'Roboto Slab', serif;
        font-size: 1.6rem;
        outline: none;
    }

    a{
        text-decoration: none;
    }

    button, a{
        cursor: pointer;
        transition: filter 200ms;
    }

    button:hover, 
    a:hover{
        filter: brightness(0.9)
    }

    ::-webkit-scrollbar{
        width: .8rem;
    }

    ::-webkit-scrollbar-track{
        background-color: ${({theme}) => theme.COLORS.GRAY_100}
    }

    ::-webkit-scrollbar-thumb{
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900}
    }
`