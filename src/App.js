
import './App.css';
import React from 'react';
// import Category from './components/CategoryList';
// import Resource from './components/Resource';
// import Details from './components/Details';
import Menu from './components/Menu';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components"
import Navbar from './components/Navbar';

const Container = styled.div`
  display: flex;
`;

// 7 times bigger than menu
const Main = styled.div`
  flex:7;
  background-color: ${({ theme }) => theme.bg};
`
// wrapper will include all the cards
const Wrapper = styled.div`
  padding: 22px 50px;
`;

function App() {

  return (
    <Container>
      <BrowserRouter>
       <Menu />
         <Main>
           <Navbar/>
           <Wrapper>
           <Routes>
                <Route path="/">
                
                  </Route>
              </Routes>
           </Wrapper>
         </Main>
       </BrowserRouter>
     </Container>
  );
}

export default App;
