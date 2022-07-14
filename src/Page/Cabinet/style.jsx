import styled from 'styled-components'

export const Container = styled.div`
   width: calc(100% - 25%);
   margin: 0 auto;
   @media (max-width: 600px) { width: 95%; margin-top: 60px; }
`
export const Img = styled.img`
   width: 200px;
   margin-top: 20px;
   @media (max-width: 600px) { width: 100px; }
`
export const Navbar = styled.div`
   margin: 0 auto;
   text-align: center;
   h1 { margin: 15px 0; }
   @media (max-width: 600px) { h1 { font-size: 22px; } }
`
export const User = styled.h1`
   font-size: 50px;
   color: #262626;
   text-align: center;
   @media (max-width: 600px) { font-size: 25px; }
`
export const Content = styled.div`
   width: 100%;
   margin-top: 30px;
`
export const Question = styled.div`
   h3 {
   font-family: 'Poppins', sans-serif;
   letter-spacing: 0.7px;
   font-weight: bold !important;
   }
   h2 { margin-left: 10px; }
   @media (max-width: 600px) { font-size: 14px; }
`
export const Variant = styled.div`
   margin: 10px 0 20px 0;
`
export const Box = styled.label`
   margin: 7px 0;
   display: flex;
   align-items: center;
   border: 1px solid #dcdcdc;
   padding: 10px;
   border-radius: 12px;
   cursor: pointer;
   background-color: ${props => props.test1 ? '#00ee00': ''};
   input { transform: scale(1.5);}
   label { margin-left: 15px; font-size: 15px;}
   &:hover { background-color: #f1f1f1; }
`
export const Finished = styled.div`
   text-align: center;
   padding: 30px 0;
   button {
   padding: 15px 20px 13px 20px;
   width: 150px;
   cursor: no-drop;
   font-size: 20px;
   border: none;
   font-weight: bold;
   background-color: #FFC227;
   border-radius: 10px;
   box-shadow: 0 7px 20px #ffc227;
   transition: .1s;
   a {
   text-decoration: none;
   color: black;
   }
   &:hover { transform: scale(1.1); }
   }
`
export const Home = styled.div`
   position: absolute;
   top: 20px;
   left: 50px;
   i {
   color: gray;
   font-size: 25px;
   cursor: pointer;
   &:hover { color: #454545; }
   }
   @media (max-width: 600px) { transform: scale(0.8); left: 0; }
`