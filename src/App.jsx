import React, { useState } from "react";
import styled from "styled-components";
import * as Fa from "react-icons/fa";
import * as Icons from "react-icons/all";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 64px);
  padding: 8px;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 10px;
  overflow-y: scroll;
`;

const Nav = styled.div`
  position: relative;
  width: 100vw;
  min-height: 64px;
  background-color: hsl(${({ theme }) => theme.colors.primary});
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.25);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 25px;
  gap: 40px;
`;

const SearchBox = styled.div`
  position: absolute;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 2px;
  padding: 8px;
  /* border: solid 2px white; */
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 100vh;
  font-size: 2vw;
  max-height: 75%;
  max-width: max-content;

  input {
    margin: 0;
    border: none;
    background: transparent;
    font-size: 2vw;
    color: white;
    &:focus {
      outline: none;
    }
  }

  svg {
    cursor: pointer;
  }
`;

const Logo = styled.h2`
  font-weight: bolder;
  font-size: 2.5vw;
  text-shadow: 2px 2px black;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  gap: 2px;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  border: 20px black;
  border-radius: 10px;
  color: white;

  &:hover {
    background-color: hsla(${({ theme }) => theme.colors.primary}, 0.15);
  }

  svg {
    height: 80%;
    width: 80%;
  }

  span {
    color: hsl(${({ theme }) => theme.colors.primary});
    font-weight: bold;
    text-align: center;
    width: 100%;
    word-wrap: break-word;
  }
`;

function App() {
  const [searchInput, setSearch] = useState("");
  return (
    <>
      <Nav>
        <Logo>React Icon Search</Logo>
        <SearchBox>
          <input
            placeholder="search for an icon here..."
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSearch(e.target.value);
              }
            }}
          />
          <Fa.FaSearch />
        </SearchBox>
      </Nav>
      <Container>
        {Object.keys(Icons)
          .filter((key) =>
            key.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())
          )
          .slice(0, 999)
          .map((key) => {
            return (
              <IconContainer
                key={key.toLocaleLowerCase}
                onClick={() => navigator.clipboard.writeText(key)}
              >
                {React.createElement(Icons[key])}
                <span>{key}</span>
              </IconContainer>
            );
          })}
      </Container>
    </>
  );
}

export default App;
