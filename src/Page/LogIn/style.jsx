import styled from "styled-components";

export const Block = styled.div`
   width: calc(100% - 60%);
   position: absolute;
   left: 50%;
   top: 35%;
   transform: translate(-50%, -50%);
   text-align: center;
   @media (max-width: 600px) { width: calc(100% - 3%) }
`
export const Img = styled.img`
   width: 200px;
   height: 200px;
`
export const Form = styled.form`
   width: 70%;
   margin: 0 auto;
   @media ( max-width: 600px ) { width: 90%; }
   input {
   width: 90%;
   height: 60px;
   font-size: 20px;
   font-weight: bold;
   color: black;
   outline: none;
   border: none;
   border-radius: 12px;
   margin: 7px 0;
   padding: 0 15px;
   background-color: #EEEEEE;
   }
`
export const Submit = styled.button`
   width: 200px;
   height: 50px;
   margin-top: 15px;
   border-radius: 8px;
   border: none;
   font-size: 20px;
   font-weight: bold;
   background-color: #ffc227;
   cursor: pointer;
   transition: .3s;
   box-shadow: 0 7px 20px #ffc227;
   &:hover { transform: scale(1.1); }
`


export const Docs = styled.div`
border-radius: 3px;
position: absolute;
right: 5%;
top: 12%;

button{
width: 60px;
height: 50px;
border-radius: 4px;
border: 1px solid gold;
box-shadow: 0 0 4px gold;
color: black;
background: gold;
font-size: 16px;
font-weight: 600;
transition: .4s;
cursor:pointer;
&:hover{
  transform: scale(1.1);
}
}

`
