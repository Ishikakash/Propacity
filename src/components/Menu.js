import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";
import FolderIcon from '@mui/icons-material/Folder';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Container = styled.div`
  flex:1;
  background-color: ${({ theme }) => theme.bgLighter};
  height: 500vh;
  color: ${({ theme }) => theme.text};
  font-size: 25px;
  position: sticky;
  top: 0;
`;

const Wrapper = styled.div`
  padding: 18px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;


const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 7.5px 0px;
  height: 10vh;

  &:hover {
    background-color: ${({ theme }) => theme.soft};
  }

`;

const Hr = styled.hr`
  margin: 15px 0px;
  border: 0.5px solid ${({ theme }) => theme.soft};
`;


const Menu = () => {
  return (
    <Container>
            <Wrapper>
            <Link to="/" style={{textDecoration:"none", color:"inherit"}}>
                <Logo> 
                    <i>Star Wars</i> 
                </Logo>
                </Link>
                <Item>
                    <FolderIcon/>Films<ArrowRightIcon />
                </Item>
                <Link to="people" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>  
                <FolderIcon/>People<ArrowRightIcon />
                </Item>
                </Link>
                <Link to="speciess" style={{ textDecoration: "none", color: "inherit" }} >
                <Item>  
                <FolderIcon/>Species<ArrowRightIcon />
                </Item>
                </Link>
                
                <Link to="starships" style={{ textDecoration: "none", color: "inherit" }}>
                <Item>  
                <FolderIcon/>Starships<ArrowRightIcon />
                </Item>
                </Link>
                <Link to="vehicles" style={{ textDecoration: "none", color: "inherit" }} >
                <Item>  
                <FolderIcon/>Vehicles<ArrowRightIcon />
                </Item>
                </Link>
                <Hr/>
            </Wrapper>
        </Container>
  )
}

export default Menu