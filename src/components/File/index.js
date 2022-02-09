import React from "react";
import { Link, useMediaQuery, useTheme } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";
import {
  FileWrapper,
  Content,
  Image,
  TitleWrapper,
  InfoWrapper,
  Title,
  MetadataWrapper,
  MetadataRow1,
} from "./styles";
import LocationBreadcrumb from "./LocationBreadcrumb";
import CreationDate from "./CreationDate";
import LastModified from "./LastModified";
import OwnerInfo from "./OwnerInfo";

export default function File({
  fileTitle,
  fileContent,
  location,
  locationLink,
  date,
  author,
  modifiedTime,
  owner,
  fileLink,
  iconLink,
}) {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <FileWrapper data-testid="file-component">
      {!mobile ? (
        <>
          <Image src={iconLink} alt="file_icon" />
          <InfoWrapper>
            <TitleWrapper>
              <Title>
                <Link href={fileLink} target="_blank" variant="subtitle1">
                  {ReactHtmlParser(fileTitle)}
                </Link>
              </Title>
              {location && <LocationBreadcrumb location={location} locationLink={locationLink} />}
            </TitleWrapper>

            <Content>{ReactHtmlParser(fileContent)}</Content>

            <MetadataWrapper>
              <MetadataRow1>
                <OwnerInfo owner={owner} />
                <CreationDate date={date} />
              </MetadataRow1>
              <LastModified author={author} modifiedTime={modifiedTime} />
            </MetadataWrapper>
          </InfoWrapper>
        </>
      ) : (
        <>
          <TitleWrapper>
            <Image src={iconLink} alt="file_icon" />
            {location && <LocationBreadcrumb location={location} locationLink={locationLink} />}
          </TitleWrapper>
          <Title>
            <Link href={fileLink} target="_blank" variant="subtitle1">
              {ReactHtmlParser(fileTitle)}
            </Link>
          </Title>
          <Content>{ReactHtmlParser(fileContent)}</Content>
          <MetadataWrapper>
            <OwnerInfo owner={owner} />
            <CreationDate date={date} />
            <LastModified author={author} modifiedTime={modifiedTime} />
          </MetadataWrapper>
        </>
      )}
    </FileWrapper>
  );
}
