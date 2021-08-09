import styled from  "styled-components"


export const SearchBarContainer = styled.div`
background-color:transparent;
heigth:2rem;
width:100%;
display:flex;
justify-content:center;
align-items:center;
margin-top:5rem;

@media (max-width: 648px){
    width:100%;
 }
`

export const InputBar = styled.input`
height:2rem;
width:20rem;
padding-left:2rem;
border:2.5px solid;
border-color:#EF5350;
border-radius:999px;
position:relative;
left:-.5rem;
outline:none;
font-size:1rem;


::placeholder{
    font-family: 'Lato', sans-serif;
}

@media (max-width: 648px){
    width:80%;
 }
`

export const IconSearch = styled.i`
position:absolute;
z-index:2;
top:9.2rem;
color:#EF5350;

`