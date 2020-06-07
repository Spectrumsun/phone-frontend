import React from "react";

const Main = (showSidebar, handelSearchInput, handleSearch) => (
  <section className="section_main">
    <div>
      <div id="alert" className="alert">Database Update Successfully </div>
      <div className="title">
        <span className="openbtn" onClick={showSidebar}>
          ☰
        </span>
        <p>Shop our latest</p>
        <p>available stock here</p>
      </div>
      <div className="search">
        <input
          type="text"
          id="search"
          onChange={handelSearchInput}
          placeholder="Enter a search term eg Iphone x, 128GB or A1"
        />
        <a className="button" href="/#" onClick={handleSearch}>
          Search →
        </a>
      </div>
    </div>
    <img
      src="https://res.cloudinary.com/skybound/image/upload/v1591279531/eventmanager/Phone/apple-iphones-2.jpg"
      className="phone_logo"
      alt="phone"
    />
  </section>
);

export default Main;
