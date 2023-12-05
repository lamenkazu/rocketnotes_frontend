import styled from "styled-components";

import { Link } from "react-router-dom";
import { DEVICE_BREAKPOINTS } from './../../styles/deviceBreakpoints';


export const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};

    display: grid;
    grid-template-columns: 25rem auto;
    grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
    grid-template-areas: 
        "brand header"
        "menu search"
        "menu content"
        "newnote content"
    ;

    @media(max-width: ${DEVICE_BREAKPOINTS.MD}){

        grid-template-columns: auto; //Muda para apenas 1 coluna
        grid-template-rows: 10.5rem 12.8rem min-content 1fr 5rem;

        grid-template-areas: 
            "brand"
            "header"
            "search"
            "content"
            "newnote" 
        ;

    }


`
export const Brand = styled.div`
    grid-area: brand;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: .1rem solid ${({theme}) => theme.COLORS.BACKGROUND_700};

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    >h1{
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLORS.ORANGE};
    }
`
export const Menu = styled.ul`
    grid-area: menu;
    padding-top: 6.4rem;
    text-align: center;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};

    >li{
        margin-bottom: 2.4rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        grid-area: none;
        display: none;
    }

`
export const Search = styled.div`
    grid-area: search;
    padding: 6.4rem 6.4rem 0;


    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        padding: 0 0 0;
        max-width: 75%;
        margin-left: 12%;
    }

`
export const Content = styled.div`
    grid-area: content;

    padding: 0 6.4rem;

    overflow-y: auto;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        margin-bottom: 1rem;
    }

`
export const NewNote = styled(Link)`
    grid-area: newnote;

    color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    background-color: ${({theme}) => theme.COLORS.ORANGE};

    display: flex;
    align-items: center;
    justify-content: center;

    gap: .8rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        margin: 0 6.8rem 0rem 6.3rem;
        border-radius: 1rem;
    }
`
