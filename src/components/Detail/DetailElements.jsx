import styled from 'styled-components'


export const ContainerDetails = styled.div`
height:80vh;
width:95%;
display:flex;
margin:3rem;

& > h1 {
    margin-left: 10%;
    height:fit-content;
    border-bottom: 2px solid #EF5350;
    border-top:2px solid #EF5350;
    &::first-letter {
        text-transform:uppercase;
    }
}

@media screen and (max-width: 648px){
    width:fit-content;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height:100%;
}
`

export const ContainerImg = styled.div`
top:55%;
left:20%;
transform:translate(-50%, -50%);
position:absolute;
img {
max-width:80%;
}
@media screen and (max-width: 648px){
    position:relative;
    top:6rem;
    left:60%;
}

`

export const ContainerInfo = styled.div`
width:60%;
position:relative;
left:10%;
display:flex;
flex-direction:column;

@media screen and (max-width: 648px){
    width:100%;
    left:0;
    top:1rem;
}
`

export const ContainerStats = styled.div`
display:flex;
width:100%;
position:relative;
justify-content:space-between;
align-items:center;
margin-top:10%;
div {
    display:flex;
    flex-direction:column;
    align-items:center;
    h2 {
        text-align:center;
        width:100%;
    }
}
@media screen and (max-width: 648px){ 
    width:60%;
    display:grid;
    grid-auto-rows: 130px;
    grid-template-columns: repeat(auto-fill, minmax(5rem, 1fr));
    margin-left:10%;
    div {
        h2 {
            font-size:1rem;
        }
    }
}
`

export const StatValue = styled.div`
width: 5rem;
height: 5rem;
border-radius: 50%;
text-align:center;
font-size:5vh;
border:5px solid;
border-color:#EF5350;
h3 {
    position:relative;
    top:-1.6rem;
}
@media screen and (max-width: 648px){ 
    width: 3rem;
    height: 3rem;
    font-size:1.5rem;
    
}

`


export const Types = styled.div`
display:flex;
width:20rem;
justify-content:space-between;

h3 {
    width:9rem;
    height:2rem;
    background:#EF5350;
    text-align:center;
    padding-top:.5rem;
    border-radius:20px;
    color:#fff;
    &::first-letter {
        text-transform:uppercase;
    }
}

@media screen and (max-width: 648px){
    width:70%;
    h3 {
        width:100%;
        font-size:.9rem;
        height:1.5rem;
        margin-top:-.3rem;
        position:relative;
        left:1rem;
        &:first-child {
            position:relative;
            left:0rem;
        }
    }
    
}
`



