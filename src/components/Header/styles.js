import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled.header`
    grid-area: header; //Define como grid-area para que mesmo quando a pagina rolar, ele fique fixo.
    height: 10.5rem;
    width: 100%;

    border-bottom: .1rem solid ${({theme}) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    
    padding: 0 8rem;
`

export const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: .9rem;

    //Garante que existe a imagem dentro do componente (>)
    > img{
        width: 5.6rem;
        height: 5.6rem;

        border-radius: 50%;
    }

    >div{
        display: flex;
        flex-direction: column;
        line-height: 2.4rem;

        //A especificidade aqui já é grande então não é necessário usar (>)
        span{
            font-size: 1.4rem;
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }

        strong{
            font-size: 1.8rem;
            color: ${({theme}) => theme.COLORS.WHITE};
        }
    }

`

export const Logout = styled.button`
    border: none;
    background: none;

    > svg{
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 3.6rem;
    }
`
