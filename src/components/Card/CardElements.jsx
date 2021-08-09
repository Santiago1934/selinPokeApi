import styled from "styled-components"
import { Link } from "react-router-dom"

export const ContainerCard = styled.div`
width:90%;
margin:0;
display:grid;
gap: 2rem;
grid-auto-rows: 410px;
grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
margin-left:7rem;
margin-top:5rem;

@media (max-width: 648px){
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    margin-top:2rem;
    margin-left:0;
}
`

export const PokemonCard = styled(Link)`
background:#f2e4f1;
width:18rem;
height:22rem;
border-radius: 16px;
overflow: hidden;
-webkit-box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
text-decoration: none;

@media (max-width: 648px){
    width:14rem;
 }
`



export const Background = styled.div`
width:100%;
height:6rem;
display: block;
background-color:#cc564e;
`

export const ContainerImg = styled.div`
width:90%;
display:flex;
justify-content: center;
img {
    width:12rem;
    height:12rem;
    border: 5px solid white;
    border-radius: 50%;
    margin-top: -60px ; 
    background-color: white;
    margin-left:1.5rem;
}
`

export const CardFooter = styled.div`
width:100%;
height:6rem;
display: block;
h2 {
    text-align:center;
    color: black;
&::first-letter {
    text-transform:uppercase;
}}

div {
    display:flex;
    width:80%;
    justify-content: space-between;
    margin-top:-1.5rem;
    margin-left:1.8rem;
    
    h3 {
        color:#636063;
        span {
            color:black;
            margin-left:.5rem;
        }
    }
}

@media (max-width: 648px){
    width:14rem;
    h3 {
        font-size:1rem;
        margin-left:0;
    }
 }
`