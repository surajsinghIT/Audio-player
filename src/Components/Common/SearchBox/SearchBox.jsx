import { useNavigate } from "react-router-dom";
import "./SearchBox.css";
import { useEffect, useState } from "react";

const SearchBox = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const isBackClicked = localStorage.getItem("backClicked");
  console.log("isBackClicked", isBackClicked);
  // const domain = window.location.hostname;

  useEffect(() => {
    if (isBackClicked) {
      setText((prev) => {
        if (prev !== "") {
          return ""; // Set text to empty
        }
        return prev;
      });
    }
  }, [isBackClicked]);

  useEffect(() => {
    if (text === "") {
      localStorage.removeItem("backClicked");
    }
  }, [text]);

  useEffect(() => {
    if (text === "") {
      navigate("/");
    }
  }, [text]);

  const handleSearch = (e) => {
    const value = e.target.value;
    console.log("value", value);
    setText(value);
  };

  const onSearch = () => {
    if (text === "") {
      return;
    }
    navigate(`/songs-listings?title=${text}`, { replace: true });
  };
  return (
    <span className=" d-flex gap-2">
      <input
        type="search"
        id="gsearch"
        name="gsearch"
        style={{ fontFamily: "Arial, sans-serif" }}
        placeholder="Search..."
        onChange={handleSearch}
        value={text}
      />
      <i class="bi bi-search" onClick={onSearch}></i>
    </span>
  );
};

export default SearchBox;
