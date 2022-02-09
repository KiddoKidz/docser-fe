import { render, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DashboardPage from "./index";
import getFileResult from "../../utils/getFileResult";

jest.mock("../../utils/getFileResult", () => jest.fn());

function jsonData(i) {
  return {
    content: "Ini sebuah test",
    createdTime: 1609761730398,
    id: `1BDkAcM4yfWDRS4i2Oe96MLFE_1i5TFqBNnIvpC1V${i}`,
    lastModifiedBy: "User Modify",
    location: ["My Drive", "test_file"],
    locationLink: {
      "My Drive": ["none"],
      test_file: ["https://testurl.com"],
    },
    mimeType: "application/vnd.google-apps.document",
    modifiedTime: 1611667088811,
    name: "Test File",
    owners: ["User test"],
    shared: true,
    sharedBy: "",
    webViewLink: "https://drive.google.com/",
  };
}

const bodyData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((i) => jsonData(i));
const data = {
  error: false,
  data: bodyData,
};

describe("When user type search bar", () => {
  beforeAll(() => {
    document.cookie = `token=test; expires=test`;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("File found", async () => {
    getFileResult.mockImplementation(() => Promise.resolve(data));

    const wrapper = render(<DashboardPage />);
    const searchBarPlaceholder = wrapper.getByPlaceholderText("Search for keyword...");
    userEvent.type(searchBarPlaceholder, "test");
    await waitFor(() => expect(wrapper.queryByTestId("search-results")).toBeInTheDocument());
  });

  it("Search bar can clear values when clear icon is clicked", async () => {
    getFileResult.mockImplementation(() => Promise.resolve(data));
    const wrapper = render(<DashboardPage />);
    const searchBar = wrapper.getByPlaceholderText("Search for keyword...");
    userEvent.type(searchBar, "test");
    const clearIcon = wrapper.getByTestId("clear-icon");
    userEvent.click(clearIcon);

    await waitFor(() => {
      expect(searchBar).toHaveValue("");
    });
  }, 10000);

  it("File not found", async () => {
    getFileResult.mockImplementation(() => Promise.resolve({ error: false, data: [] }));

    const wrapper = render(<DashboardPage />);
    const searchBarPlaceholder = wrapper.getByPlaceholderText("Search for keyword...");
    userEvent.type(searchBarPlaceholder, "xxxxxx");
    await waitFor(() => {
      expect(wrapper.queryByTestId("file-not-found-component")).toBeInTheDocument();
    });
  }, 10000);

  it("Error from backend", async () => {
    getFileResult.mockImplementation(() => Promise.resolve({ error: true, data: "test" }));

    const wrapper = render(<DashboardPage />);
    const searchBarPlaceholder = wrapper.getByPlaceholderText("Search for keyword...");
    userEvent.type(searchBarPlaceholder, "xxxxxx");
    await waitFor(() => {
      expect(wrapper.queryByTestId("error-info")).toBeInTheDocument();
    });
  });

  it("Error occured", async () => {
    getFileResult.mockImplementation(() => Promise.reject());

    const wrapper = render(<DashboardPage />);
    const searchBarPlaceholder = wrapper.getByPlaceholderText("Search for keyword...");
    userEvent.type(searchBarPlaceholder, "test");
    await waitFor(() => expect(wrapper.queryByTestId("error-info")).toBeInTheDocument());
  });
});

describe("When user enter dashboard page", () => {
  beforeAll(() => {
    document.cookie = `token=test; expires=test`;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("filter hamburger button visible when in mobile", async () => {
    getFileResult.mockImplementation(() => Promise.resolve({ error: false, data: [] }));
    global.innerWidth = 1000;
    // eslint-disable-next-line no-undef
    global.dispatchEvent(new Event("resize"));
    const { queryByTestId } = render(<DashboardPage />);
    const filterButton = queryByTestId("filter-button");
    userEvent.click(filterButton);
    await waitFor(() => expect(filterButton).toBeInTheDocument());
  });

  it("Use filter to search", async () => {
    getFileResult.mockImplementation(() => Promise.resolve(data));
    const wrapper = render(<DashboardPage />);
    wrapper.queryByTestId("filter-button").click();
    wrapper.queryByText("Docs").click();
    await waitFor(() => expect(wrapper.queryByTestId("search-results")).toBeInTheDocument());
  });
});
