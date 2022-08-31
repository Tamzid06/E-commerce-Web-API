import React from "react";
import styled from "styled-components";
import Navbar from '../Components/Navbar';
const Card = styled.div `
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  margin-top: 100px;
`

const Title = styled.div`
  color: grey;
  font-size: 18px;
`

const Container2 = styled.div`
font-family: sans-serif;
text-align: center;
`;

const Button = styled.button`
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  width: 100%;
  font-size: 18px;
  margin-top: 5px;
  &:hover {
    transform: scale(1.1);
  }
`

const a = styled.div` 
  text-decoration: none;
  font-size: 22px;
  color: black;
  &:hover {
    transform: scale(1.1);
  }
`

// button:hover,
// a:hover {
//   transform: scale(1.1);
// }


const testOrders = () => {
  return (  
    
    <Container2>  
      <Card>
        <Title>ORDER DETAILS</Title>
          <Button>Username</Button>
          <Button>Email</Button>
          <Button>Address</Button>
          <Button>OrderID</Button>
          <Button>Card No</Button>
          <Button>Payment Status</Button>
      </Card>
      </Container2>
    // <p>hii</p>

  );
};
export default testOrders;
