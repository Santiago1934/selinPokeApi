import styled from "styled-components"



export const PaginationContainer = styled.div`
display:flex;
float:right;
position:relative;
bottom:15rem;
right:10%;

@media screen and (max-width: 820px){
    bottom:0;
    margin-bottom:3rem;
    right:0;
    float:none;
    justify-content:center;
    align-items:center;
    font-size:1rem;
    margin-top:1rem;
}
`

export const Page = styled.div`
display:flex;
margin: 0 1rem;
font-size:1.5rem;

@media screen and (max-width: 648px){
    font-size:1rem;
    margin:0;
}
`

export const Button = styled.button`
width:6rem;
outline:none;
border:3px solid #4B75A9 ;
cursor:pointer;
height:2rem;
border-radius:20px;
font-size:1.2rem;
font-weight:300;

&:hover {
    transition:300ms;
    color:#4B75A9;
}

@media screen and (max-width: 648px){
    font-size:1rem;
}
`

export const NotFound = styled.div`
width:100%;
text-align:center;
margin-top:6rem;
`