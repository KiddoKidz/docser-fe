import React, { useEffect, useState } from "react";
import { MyContext } from "../../utils/myContext";
import {
  SearchResult,
  DashboardContainer,
  ContentContainer,
  InfoContainer,
  PaginationWrapper,
} from "./style";
import {
  FileNotFound,
  SearchBar,
  Header,
  File,
  SearchDocument,
  Filter,
  Pagination,
  ErrorInfo,
  LoadingInfo,
} from "../../components";
import { getUserInfo } from "../../utils/useAuth";
import getFileResult from "../../utils/getFileResult";
import useDebounce from "../../utils/useDebounce";

const DashboardPage = () => {
  const [fullName, setFullName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);
  const [first, setFirst] = useState(true);
  const [filter, setFilter] = useState({
    date: {
      from: 0,
      to: new Date().getTime(),
    },
    owners: [],
    type: [],
    locations: [],
  });

  const debounceValue = useDebounce(value, 500);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleResultValue = () => {
    const url = new URL(window.location);
    url.searchParams.set("q", debounceValue);
    window.history.pushState({}, "", url);
    setLoading(true);
    setError(false);
    getFileResult(debounceValue, filter)
      .then((body) => {
        if (body.error) {
          setResult([]);
          setError(true);
        } else {
          setResult(body.data);
        }
        setLoading(false);
      })
      .catch(() => {
        setResult([]);
        setLoading(false);
        setError(true);
      });
  };

  const handleFilterValue = (name, valueFilter) => {
    setFilter({ ...filter, [name]: valueFilter });
    setFirst(false);
  };

  const handleSearchValue = (e) => {
    setValue(e.target.value);
    setError(false);
    setFirst(false);
  };

  const resetSearchValue = () => {
    setValue("");
    setError(false);
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("q");
    if (query) {
      setFirst(false);
      setValue(query);
    }
    const user = getUserInfo();
    setFullName(user.fullName);
    setPictureUrl(user.pictureURL);
    setLoggedIn(!loggedIn);
  }, []);

  useEffect(() => {
    if (!first) {
      handleResultValue();
    }
  }, [filter, debounceValue, first]);

  const usePagination = result.length > 10;
  const countPagination = Math.ceil(result.length / 10);

  const content = () => {
    if (first) {
      return (
        <InfoContainer>
          <SearchDocument />
        </InfoContainer>
      );
    }

    if (error) {
      return (
        <InfoContainer>
          <ErrorInfo />
        </InfoContainer>
      );
    }

    if (loading) {
      return (
        <InfoContainer>
          <LoadingInfo />
        </InfoContainer>
      );
    }

    if (result.length === 0) {
      return (
        <InfoContainer>
          <FileNotFound filename={value} filter={filter} />
        </InfoContainer>
      );
    }

    const resultSliced = usePagination
      ? result.slice(page * 10 - 10, page * 10)
      : result;

    return (
      <>
        <SearchResult data-testid="search-results">
          {usePagination && (
            <span>
              Page {page} of {countPagination}.
            </span>
          )}{" "}
          Showing {resultSliced.length} from {result.length} results
        </SearchResult>
        {resultSliced.map((x) => (
          <File
            key={x.id}
            fileContent={x.content}
            fileTitle={x.name}
            location={x.location}
            locationLink={x.locationLink}
            date={x.createdTime}
            modifiedTime={x.modifiedTime}
            author={x.lastModifiedBy}
            fileLink={x.webViewLink}
            owner={x.owners}
            iconLink={x.iconLink}
          />
        ))}
        {usePagination && (
          <PaginationWrapper>
            <Pagination count={countPagination} setPage={setPage} />
          </PaginationWrapper>
        )}
      </>
    );
  };

  return (
    <div data-testid="dashboard">
      <MyContext.Provider value={loggedIn}>
        <Header
          action={handleDrawerToggle}
          username={fullName}
          picture={pictureUrl}
        />
        <Filter
          opened={mobileOpen}
          action={handleDrawerToggle}
          handleFilterValue={handleFilterValue}
        />
        <DashboardContainer>
          <SearchBar
            value={value}
            handleSearchValue={handleSearchValue}
            resetSearchValue={resetSearchValue}
          />
          <ContentContainer>{content()}</ContentContainer>
        </DashboardContainer>
      </MyContext.Provider>
    </div>
  );
};

export default DashboardPage;
