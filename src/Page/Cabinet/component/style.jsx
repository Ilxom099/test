import styled, { keyframes } from 'styled-components'


export const Block = styled.div`
   position: fixed;
   top: 30px;
   right: 30px;
   width: 200px;
   height: 80px;
   border-radius: 15px;
   background-color: #fff537;
   display: flex;
   justify-content: center;
   align-items: center;
   z-index: 3;
   box-shadow: 0 5px 20px 3px #ffee9e;
   @media (max-width: 600px) { transform: scale(0.5); top: -10px; right: -50px; font-size: 20px;}
`
export const Minut = styled.h1`
   width: 80%;
   margin: 0 auto;
   text-align: center;
`
export const Beginer = styled.div`
   margin-top: 50px;
   h1 { text-align: center; }
   p {
   margin-top: 20px;
   font-size: 25px;
   line-height: 30px;
   position: sticky;
   top: 0;
   background-color: white;
   z-index: 1;
   @media (max-width: 600px) { font-size: 18px; width: 100%; margin: 20px 0 0 0;}
   }
   b {color: red;}
   span { 
   color: white; 
   padding: 2px 4px; 
   font-size: 20px; 
   background-color: #ff5050;
   @media (max-width: 600px) { font-size: 17px; }  
   }
`
export const BlockItem = styled.div` 
   margin-top: 15px;
   background-color: #fff537;
   padding: 15px 0;
   text-align: center;
   border-radius: 5px;
   h3 {
   font-family: 'Poppins', sans-serif;
   font-size: 22px;
   @media (max-width: 700px) { }
   }
   p { color: red; }
   
   
`