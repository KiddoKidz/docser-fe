import React from "react";
import { render, screen } from "@testing-library/react";
import File from "./index";

const fileTest = {
  fileType: "application/pdf",
  fileContent:
    "This is a test content altough it is not a long content it could serve as a placeholder for the actual content, altough the reprimanded testing the non verbal methodologies are vaguely preserved by the implementation of the current codebase",
  fileTitle: "Test Title",
  location: ["MyDrive", "Projects", "Dashboard", "Mobile", "POS Project"],
  locationLink: {
    MyDrive: "none",
    Projects: "https://testurla.com",
    Dashboard: "https://testurlb.com",
    Mobile: "https://testurlc.com",
    "POS Project": "https://testurld.com",
  },
  date: 1609761730398,
  modifiedTime: 1611667088811,
  owner: ["Siti"],
};

test("creation date is shown", () => {
  render(
    <File
      fileType={fileTest.fileType}
      fileContent={fileTest.fileContent}
      fileTitle={fileTest.fileTitle}
      searchParam={fileTest.searchParam}
      location={fileTest.location}
      date={fileTest.date}
      time={fileTest.time}
    />,
  );
  const creationDate = screen.getByText("Jan", { exact: false });
  expect(creationDate).toBeInTheDocument();
});

test("File component exist", () => {
  const { queryByTestId } = render(
    <File
      fileType={fileTest.fileType}
      fileContent={fileTest.fileContent}
      fileTitle={fileTest.fileTitle}
      location={fileTest.location}
      locationLink={fileTest.locationLink}
      date={fileTest.date}
      author={fileTest.author}
      time={fileTest.time}
    />,
  );
  expect(queryByTestId("file-component")).toBeTruthy();
});

test("File types", () => {
  const file = render(
    <File
      fileType="application/vnd.google-apps.document"
      fileContent={fileTest.fileContent}
      fileTitle={fileTest.fileTitle}
      location={[]}
    />,
  );

  file.rerender(
    <File
      fileType="application/vnd.google-apps.spreadsheet"
      fileContent={fileTest.fileContent}
      fileTitle={fileTest.fileTitle}
      location={fileTest.location}
    />,
  );

  file.rerender(
    <File
      fileType="application/vnd.google-apps.presentation"
      fileContent={fileTest.fileContent}
      fileTitle={fileTest.fileTitle}
      location={fileTest.location}
      date={fileTest.date}
      author={fileTest.author}
      time={fileTest.time}
    />,
  );

  file.rerender(
    <File
      fileType="application/vnd.google-apps.file"
      fileContent={fileTest.fileContent}
      fileTitle={fileTest.fileTitle}
      location={fileTest.location}
      date={fileTest.date}
      author={fileTest.author}
      time={fileTest.time}
    />,
  );

  file.rerender(
    <File
      fileType="application/vnd.google-apps.folder"
      fileContent={fileTest.fileContent}
      fileTitle={fileTest.fileTitle}
      location={fileTest.location}
      date={fileTest.date}
      author={fileTest.author}
      time={fileTest.time}
    />,
  );

  file.rerender(
    <File
      fileType="application/vnd.google-apps.form"
      fileContent={fileTest.fileContent}
      fileTitle={fileTest.fileTitle}
      location={fileTest.location}
      date={fileTest.date}
      author={fileTest.author}
      time={fileTest.time}
    />,
  );

  file.rerender(
    <File
      fileType="application/vnd.google-apps.audio"
      fileContent={fileTest.fileContent}
      fileTitle={fileTest.fileTitle}
      location={fileTest.location}
      date={fileTest.date}
      author={fileTest.author}
      time={fileTest.time}
    />,
  );

  file.rerender(
    <File
      fileType="application/vnd.google-apps.photo"
      fileContent={fileTest.fileContent}
      fileTitle={fileTest.fileTitle}
      location={fileTest.location}
      date={fileTest.date}
      author={fileTest.author}
      time={fileTest.time}
    />,
  );

  file.rerender(
    <File
      fileType="application/vnd.google-apps.video"
      fileContent={fileTest.fileContent}
      fileTitle={fileTest.fileTitle}
      location={fileTest.location}
      date={fileTest.date}
      author={fileTest.author}
      time={fileTest.time}
    />,
  );

  file.rerender(
    <File
      fileType="other"
      fileContent={fileTest.fileContent}
      fileTitle={fileTest.fileTitle}
      location={fileTest.location}
    />,
  );

  expect(file.queryByTestId("file-component")).toBeTruthy();
});

test("owner name shown", () => {
  const file = render(
    <File
      fileType="application/vnd.google-apps.document"
      fileContent={fileTest.fileContent}
      fileTitle={fileTest.fileTitle}
      location={[]}
    />,
  );

  file.rerender(
    <File
      fileType="application/vnd.google-apps.spreadsheet"
      fileContent={fileTest.fileContent}
      fileTitle={fileTest.fileTitle}
      location={fileTest.location}
    />,
  );

  file.rerender(
    <File
      fileType="application/vnd.google-apps.presentation"
      fileContent={fileTest.fileContent}
      fileTitle={fileTest.fileTitle}
      location={fileTest.location}
      owner={fileTest.owner}
    />,
  );
  const ownerName = screen.getByText("Siti");
  expect(ownerName).toBeInTheDocument();
});
