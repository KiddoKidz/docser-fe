import styled from "styled-components";

const md = "1279.95px";
const sm = "599.95px";

export const SearchResult = styled.div`
  margin-left: 10px;
  font-size: 14px;
  color: grey;
  @media (max-width: ${sm}) {
    margin-left: 0;
  }
`;

export const DashboardContainer = styled.div`
  margin-left: 300px;
  padding: 100px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${md}) {
    margin-left: 0;
    padding: 75px 50px;
  }
  @media (max-width: ${sm}) {
    padding: 75px 25px;
  }
`;

export const ContentContainer = styled.div`
  margin-left: 10px;
  margin-top: 20px;
  align-items: flex-start;
  @media (max-width: ${md}) {
    align-items: flex-start;
  }
  @media (max-width: ${sm}) {
    margin-top: 10px;
    margin-left: 0px;
  }
`;

export const PaginationWrapper = styled.div`
  margin-top: 25px;
  max-width: 800px;
  display: flex;
  justify-content: flex-start;
  @media (max-width: ${md}) {
    justify-content: center;
  }
`;

export const InfoContainer = styled.div`
  margin-left: -300px;
  margin-top: 125px;
  @media (max-width: ${md}) {
    margin-top: 100px;
    margin-left: 0;
  }
`;
