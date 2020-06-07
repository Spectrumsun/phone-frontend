import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import "./App.css";

const baseUrl = "https://back-phone.herokuapp.com/api/v1/phones";

const App = () => {
  const [phoneData, setPhoneData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState("");
  const [phoneRequest, setPhoneRequest] = useState("buyer");
  const [sliderValue, setSliderValue] = useState({
    min: 30,
    max: 2000,
  });

  useEffect(() => {
    const url = `${baseUrl}?type=buyer&page=1&limit=8`;
    fetchData(url);
  }, []);

  const noResult = () => (
    <div className="no_result">
      <h3>No item match your search {search}</h3>
    </div>
  );

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data.phones;
      setPhoneData(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(true);
    }
  };

  const toggleType = (e) => {
    const { classList, textContent } = e.target;
    const listClassList = classList[1];
    if (listClassList === undefined) {
      classList.add("active_type");
      const element = textContent === "Buy Requests" ? "sell" : "buy";
      const removeClass = document.getElementById(element);
      removeClass.classList.remove("active_type");
    }
    const list = {
      "Buy Requests": "buyer",
      "Sell Requests": "seller",
    };
    const url = `${baseUrl}?type=${list[textContent]}&page=${currentPage}&limit=8limit=8&min=${sliderValue.min}&max=${sliderValue.max}&searchString=${search}`;
    setIsLoading(true);
    fetchData(url);
    setSearch("");
    setPhoneRequest(list[textContent]);
  };

  const handelSearchInput = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSearch = (e) => {
    const input = document.getElementById("search");
    const searchValue = input.value;
    if (searchValue !== "") {
      input.value = "";
      const url = `${baseUrl}?type=${phoneRequest}&page=${currentPage}&limit=8&searchString=${search}`;
      setIsLoading(true);
      fetchData(url);
    }
  };

  const showSidebarLoader = () => (
    <section className="section_side_bar">
      <div>
        <div className="side_bar_cancel loader">
          <p className="loading"></p>
        </div>

        <figure className="card-image loading" />
        <p className="loading_back loading"></p>
        <p className="loading_back loading"></p>
        <p className="loading_back loading"></p>
        <p className="loading_back loading"></p>
        <a href="/#" className=" loading button"></a>
      </div>

      <div>
        <div className="side_bar_cancel loader">
          <p className="loading"></p>
        </div>

        <figure className="card-image loading" />
        <p className="loading_back loading"></p>
        <p className="loading_back loading"></p>
        <p className="loading_back loading"></p>
        <p className="loading_back loading"></p>
        <a href="/#" className=" loading button"></a>
      </div>
    </section>
  );

  const showSidebar = (e) => {
    const sidebar = document.querySelector(".section_side_bar");
    console.log(sidebar);
    sidebar.classList.add("show_side_bar");
  };

  const main = () => (
    <section className="section_main">
      <div>
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

  const cardLoaderPlaceHolder = () => (
    <div className="card">
      <p className="card_phone_condition loading"></p>
      <figure className="card-image loading" />
      <p className="card-title loading"></p>
      <p className="card-title loading"></p>
      <p className="card-title loading"></p>
      <p className="card-title loading"></p>
      <a href="/#" className="button"></a>
    </div>
  );

  const loader = () => {
    const arr = [];
    for (let i = 0; i < 8; i++) {
      arr.push(cardLoaderPlaceHolder());
    }
    return arr;
  };

  const handlePageClick = (data) => {
    const selected = data.selected + 1;
    const url = `${baseUrl}?type=${phoneRequest}&page=${selected}&limit=8&min=${sliderValue.min}&max=${sliderValue.max}&searchString=${search}`;
    setCurrentPage(selected);
    fetchData(url);
  };

  const toggleList = () => (
    <div className="section_toggle">
      <div id="buy" onClick={toggleType} className="btn active_type">
        Buy Requests
      </div>
      <div id="sell" onClick={toggleType} className="btn">
        Sell Requests
      </div>
    </div>
  );

  const pagination = (phoneData) => (
    <div className="pagination">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={phoneData.totalPages - 1}
        marginPagesDisplayed={1}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </div>
  );

  const onSlide = (value) => {
    setSliderValue({
      min: Math.round(value[0]),
      max: Math.round(value[1]),
    });
  };

  const Slider = () => (
    <Nouislider
      connect
      start={[sliderValue.min, sliderValue.max]}
      behaviour="tap"
      range={{
        min: [30],
        max: [2000],
      }}
      onSlide={onSlide}
    />
  );

  const handlePriceChange = (e) => {
    const { value, name } = e.target;
    setSliderValue({ ...sliderValue, [name]: value });
  };

  const handleRangeSearch = () => {
    const url = `${baseUrl}?type=${phoneRequest}&page=${currentPage}&limit=8&min=${sliderValue.min}&max=${sliderValue.max}`;
    console.log(url, "url");
    setIsLoading(true);
    fetchData(url);
  };

  const closeSideBar = () => {
    const sidebar = document.querySelector(".section_side_bar");
    console.log(sidebar);
    sidebar.classList.remove("show_side_bar");
  };

  const sideBar = () => (
    <>
      <section className="section_side_bar">
        <div>
          <div className="side_bar_cancel">
            <p>Price Filter</p>
            <span onClick={closeSideBar}>X</span>
          </div>
          <div className="price_format">
            <span>{sliderValue.min}</span>
            <span>{sliderValue.max}</span>
          </div>
          <div className="side_bar_content">{Slider()}</div>
          <div className="search max_min">
            <div className="max_min_box">
              <label>Min:</label>
              <input
                type="number"
                value={sliderValue.min}
                name="min"
                min="30"
                onChange={handlePriceChange}
              />
            </div>

            <div className="max_min_box">
              <label>Max:</label>
              <input
                type="number"
                max="2000"
                name="max"
                value={sliderValue.max}
                onChange={handlePriceChange}
              />
            </div>
            <a
              className="button range_search"
              href="/#"
              onClick={handleRangeSearch}
            >
              Search
            </a>
          </div>
        </div>

        <div>
          <p>Categories</p>
          <div className="side_bar_content">
            <ul>
              <li>iPhone</li>
              <li>Samsung</li>
              <li>MacBook</li>
              <li>Airpod</li>
              <li>iPad</li>
            </ul>
          </div>
        </div>

        <div>
          <p>Storage</p>
          <div className="side_bar_content">
            <ul>
              <li>32GB</li>
              <li>64GB</li>
              <li>128GB</li>
              <li>256GB</li>
              <li>512GB</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );

  const cardHTML = (data) => (
    <section className="section_content">
      <div className="card_item">
        {isLoading
          ? loader()
          : data.docs && data.docs.map((phone) => cardPhone(phone))}
      </div>
    </section>
  );

  const cardPhone = (phone) => (
    <div key={phone._id} className="card">
      <p className="card_phone_condition ">{phone.condition}</p>
      <img src={phone.image} className="" alt="phone" />
      <p className="card_phone_name ">{phone.phone_name}</p>
      <div className="card_phone_details ">
        <p className="card_phone_others ">{phone.lock_status}</p>
        <span>|</span>
        <p className="card_phone_others ">{phone.storage}</p>
      </div>
      <p className="card_phone_others ">Unit Per Price</p>
      <p className="card_phone_others price ">${phone.price}</p>
      <a href="/#" className="button">
        Buy
      </a>
    </div>
  );

  const footer = () => (
    <section className="section_footer">
      <footer>
        <div class="details">
          <h2>Eze Phones</h2>
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting, remaining
            essentially unchanged. It was popularised in the 1960s with the
            release of Letraset sheets containing Lorem Ipsum passages, and more
            recently with desktop publishing software like Aldus PageMaker
            including versions of Lorem Ipsum
          </p>
        </div>
        <div class="message">
          <h2>Personal contact</h2>
          <p>Email: issimplydumm@unknow.com</p>
          <p>Tel: +001122334455</p>
          <p>Tel: +001122334455</p>
          <p></p>
        </div>
      </footer>
      <p class="end">Designed by Sunday Taiwo 2020</p>
    </section>
  );

  return (
    <>
      <div className="container">
        {main()}
        {toggleList(setPhoneData)}
        {isLoading ? showSidebarLoader() : sideBar()}
        {cardHTML(phoneData)}
        {isLoading ? null : pagination(phoneData)}
        {footer()}
      </div>
    </>
  );
};

export default App;
