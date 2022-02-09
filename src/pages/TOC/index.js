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
  TOCFile,
  TOCHome,
  TOCSideBar,
  Pagination,
  ErrorInfo,
  LoadingInfo,
} from "../../components";
import { getUserInfo } from "../../utils/useAuth";
import getTOCSearchResult from "../../utils/getTOCSearchResult";
import getTOCHomepageData from "../../utils/getTOCHomepageData";
import getTOCTreeData from "../../utils/getTOCTreeData";
import useDebounce from "../../utils/useDebounce";

const TOCPage = () => {
  const [fullName, setFullName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);
  const [page, setPage] = useState(1);
  const [showHome, setShowHome] = useState(true);

  const debounceValue = useDebounce(value, 500);

  const [treeData, setTreeData] = useState({});
  const [homepageData, setHomepageData] = useState([]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleResultValue = () => {
    const url = new URL(window.location);
    url.searchParams.set("q", debounceValue);
    window.history.pushState({}, "", url);
    setShowHome(false);
    setLoading(true);
    setError(false);
    getTOCSearchResult(debounceValue)
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

  const handleSearchValue = (e) => {
    setValue(e.target.value);
    setError(false);
  };

  const resetSearchValue = () => {
    setValue("");
    setError(false);
  };

  const handleTreeData = () => {
    getTOCTreeData()
      .then((body) => {
        if (body.error) {
          setTreeData({});
        } else {
          setTreeData(body.data);
        }
      })
      .catch(() => {
        setTreeData({});
      });
  };

  const handleHomepageData = () => {
    getTOCHomepageData()
      .then((body) => {
        if (body.error) {
          setHomepageData([]);
        } else {
          setHomepageData(body.data);
        }
      })
      .catch(() => {
        setHomepageData([]);
      });
  };

  useEffect(() => {
    const query = new URLSearchParams(window.location.search).get("q");
    if (query) {
      setShowHome(false);
      setValue(query);
    }
    const user = getUserInfo();
    setFullName(user.fullName);
    setPictureUrl(user.pictureURL);
    setIsAdmin(user.isAdmin);
    setLoggedIn(!loggedIn);

    handleHomepageData();
    handleTreeData();
  }, []);

  useEffect(() => {
    if (debounceValue) {
      handleResultValue();
    } else {
      setShowHome(true);
    }
  }, [debounceValue]);

  const usePagination = result.length > 10;
  const countPagination = Math.ceil(result.length / 10);

  const content = () => {
    if (showHome) {
      return <TOCHome items={homepageData} />;
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
          <FileNotFound filename={value} />
        </InfoContainer>
      );
    }

    const resultSliced = usePagination ? result.slice(page * 10 - 10, page * 10) : result;

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
          <TOCFile
            key={x.id}
            fileTitle={x.name}
            location={x.location}
            locationLink={x.locationLink}
            fileLink={x.url}
            iconLink={x.iconLink}
            fileType={x.type}
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
        <Header action={handleDrawerToggle} username={fullName} picture={pictureUrl} />
        <TOCSideBar
          opened={mobileOpen}
          isAdmin={isAdmin}
          action={handleDrawerToggle}
          type="toc"
          treeData={treeData}
          refreshTreeData={handleTreeData}
          refreshHomepageData={handleHomepageData}
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

export default TOCPage;
