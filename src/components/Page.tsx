
import styled from "styled-components";
import Header from "../components/Header";

const MainContent = styled.div`
  background: #000;
`;

export const Page = ({children}: {children: any}) => {
    return (
      <MainContent>
        <Header />
        {children}
      </MainContent>
    )
}