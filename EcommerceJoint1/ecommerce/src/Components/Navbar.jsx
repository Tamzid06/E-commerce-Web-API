import { CropFree, Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { Badge, Button } from '@material-ui/core';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { persistor1 } from "../redux/store";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    height: 60px;
`;

const Wrapper = styled.div`
    padding: 10px 20px;  
    display: flex;
    justify-content: space-between;    
    `;
//Wrapper component navbar r all components ke wrap kore kisu certain property die.
//jemon ekhane padding 10px 20px bolte each component r top bottom e 10 px ar 
//left right e 20px pad mane space thakbe..justify-content mane holo component gulor 
//modde space thakbe equally

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  color:blue;
  cursor: pointer;  
`;

const Input = styled.input`
  border: none;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

//left center r right er protitar flex:1 mane holo ei tinti component equal space nibe 
// screen er.

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
   
`;

const Logo = styled.h1`
  font-weight: bold;
  
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {

  const history = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser)
  console.log(currentUser);

  const btnClick = () => {
    persistor1.purge();
    window.location.reload(false);
    history('/', { replace: true });


  }
  const quantity = useSelector(state => state.cart.quantity)
  const cart = useSelector((state) => state.cart);
  return (
    <Container>
      <Wrapper>
        <Left>
          {/* <Language>EN</Language>
          <SearchContainer> */}
          {/* <Input />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer> */}

          <MenuItem>
            <Link to="/">
              <Button>
                HOME
              </Button>

            </Link>
          </MenuItem>

          <MenuItem>
            {currentUser ?
              <Link to="/orders">
                <Button>
                  ORDERS
                </Button>
              </Link>

              :
              <Link to="/">

              </Link>
            }
          </MenuItem>

          <MenuItem>
            {currentUser ?
              <Link to="/profile">
                <Button>
                  PROFILE
                </Button>
              </Link>

              :
              <Link to="/">

              </Link>
            }
          </MenuItem>

          <MenuItem>
            {currentUser ?
              <Link to="/info_bank">
                <Button>
                  BANK REG
                </Button>
              </Link>

              :
              <Link to="/">

              </Link>
            }
          </MenuItem>



        </Left>
        <Center><Logo>D-Valy</Logo></Center>
        <Right>


          <MenuItem>
            {currentUser ?
              <Link to="/banking">
                <Button>
                  Bank
                </Button>
              </Link>

              :
              <Link to="/register">
                <Button >
                  REGISTER
                </Button>
              </Link>

            }
          </MenuItem>


          <MenuItem>
            {currentUser ?
              <Button onClick={btnClick}>
                {/* <Button onClick={() => {persistor1.purge();}}> */}
                LOGOUT
              </Button>

              :
              <Link to="/login">
                <Button >
                  LOGIN
                </Button>
              </Link>

            }

          </MenuItem>
          {quantity > 0 ?
            <Link to="/cart">
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
            :

            <Link to="/">
              <MenuItem>
                <Badge badgeContent={quantity} color="primary">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
          }
        </Right>
      </Wrapper>
    </Container>
  )


}

export default Navbar

