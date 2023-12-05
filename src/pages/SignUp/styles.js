import styled from "styled-components";
import backgroundImg from '../../assets/background.png'


export const Container = styled.div`
    display: flex;
    align-items: stretch;

    height: 100vh;

`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 0 13.6rem;

    text-align: center;

    >h1{
        font-size: 4.8rem;
        color: ${({theme}) => theme.COLORS.ORANGE};

        margin-top: 2.4rem;
    }

    >p{
        font-size: 1.4rem;
        color: ${({theme}) => theme.COLORS.GRAY_100};

    }

    >h2{
        font-size: 2.4rem;
        margin: 4.8rem 0;
    }

    >a{
        margin-top: 6.4rem;
        color: ${({theme}) => theme.COLORS.ORANGE};

    }


`

export const Background = styled.div`
    flex:1;
    
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;

    opacity: 0.40;
`