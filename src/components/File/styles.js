import styled from "styled-components";

const sm = "600px";

export const FileWrapper = styled.div`
  display: flex;
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

export const Content = styled.div`
  font-size: 16px;
  line-height: 125%;
  text-align: justify;
  text-justify: inter-word;
  max-width: 900px;
  @media (max-width: ${sm}) {
    font-size: 12px;
  }
`;

export const Image = styled.img`
  width: 75px;
  height: 75px;
  padding-right: 10px;
  padding-top: 5px;
  @media (max-width: ${sm}) {
    width: 16px;
    height: 16px;
    padding: 0 5px 3px 0;
  }
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
  margin-left: 3px;
  margin-top: 5px;
  display: flex;
  flex-direction: column;
`;

export const MetadataRow1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 350px;
`;
