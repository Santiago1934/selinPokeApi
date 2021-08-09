import styled, { css } from 'styled-components'


const sharedStyleOptions = css`
width:140px;
display:block;
padding:5px 10px;

&:before {
    content:'';
    width:32px;
    display:inline-block;
    height:32px;
    margin-right:10px;
    vertical-align: middle;
}

&:hover {
    background-color:#f2f2f2;
}
@media screen and (max-width: 648px){
   padding:0;
}
`

export const Nav = styled.div`
background-color:#EF5350;
height:3.5rem;
display:flex;
align-items:center;
justify-content:space-between;
}

@media screen and (max-width: 648px){
    width:100%;
}
`

export const Logo = styled.img`
width:9rem;
height:auto;
margin:.2rem 0 0 .4rem;
`

export const LangMenu = styled.div`
margin-top:25px;
background:#fff;
margin-right:3rem;
position:relative;
cursor:pointer;
`

export const SelectedLanguage = styled.div`
cursor:pointer;
display:flex;
justify-content:space-between;
width:140px;
background-color:#EF5350;
margin-top:-15px;
&:before {
    content:'';
    width:32px;
    display:block;
    height:32px;
} 
@media screen and (max-width: 648px){
    width:fit-content;
}}
`

export const Options = styled.ul`
background-color:#fff;
border:1px solid #f8f8f8;
box-shadow:0px 1px 10px rgba(0, 0, 0, 0.2);
position:absolute;
top:.5rem;
left:-1rem;
display:${({ displayLangMenu }) => (displayLangMenu ? 'block' : 'none')};
}
@media screen and (max-width: 648px){
    left:0;
}
`

export const OptionEN = styled.a`
${sharedStyleOptions}
:before {
    background-image: url(https://www.countryflags.io/um/flat/32.png); 
}
`

export const OptionES = styled.a`
${sharedStyleOptions}
:before {
    background-image: url(https://www.countryflags.io/es/flat/32.png); 
}
`