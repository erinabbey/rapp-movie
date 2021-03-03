import styled from 'styled-components'


export const ProductContainer = styled.div`
min-height: 100vh;
padding: 5rem (calc(100vw- 1300px)/2);
background: #150f0f;
color: #fff;
`;

export const ProductHeading = styled.h2`
font-size: clamp(2rem, 2.5vw, 3rem);
text-align: center;
margin-bottom: 5rem;

`;

export const ProductWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 8px auto;
`;

export const ProductButton = styled.button`
font-size: 1rem;
padding: 1rem 4rem;
border: none;
background: #7251b5;
color: #fff;
transition: 0.2s ease-out;

&:hover{
    background: #ff5400;
    transition: 0.2s ease-out;
    color: #000;
}
`;


export const ProductCard = styled.div`
margin: 0 2rem;
line-height: 2;
width: 300px;

`;


export const ProductDesc = styled.p`
margin-bottm: 1rem;
`;


export const ProductTitle= styled.h3`
font-weigth: 400;
font-size: 1.5rem;

`;


export const ProductImg = styled.img`
height: 300px;
min-width: 300px;
max-width: 300px;
box-shadow: 8px 8px #ff5400;
`;


export const ProductInfo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2rem;
text-align: center
`;

export const ProductPrice = styled.p`
margin-bottom: 1rem;
font-size: 2rem;
`;
