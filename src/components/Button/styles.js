import styled from 'styled-components'

export const Button = styled.button`
background: ${ props => props.isBack ? 'transparent' : 'rgba(0, 0, 0, 0.8)'};
margin-top: 130px;
border-radius: 14px;
text-decoration: none;
width: 342px;
height: 74px;
color: #FFFFFF;
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;
border: ${ props => props.isBack ? 'solid 1px #FFFFFF' : 'none'};
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;

&:hover {
    opacity: 0.8;
}

&:active {
    opacity: 0.6;
}

img {
    transform: ${ props => props.isBack ? 'rotateY(180deg)' : ''};
}

`

