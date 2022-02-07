import styled from "styled-components";

const sm = "600px";

export const FileWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 15px;
  @media (max-width: ${sm}) {
    flex-direction: column;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Title = styled.div`
  margin-right: 10px;
`;

export const MetadataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MetadataRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 350px;
`;
