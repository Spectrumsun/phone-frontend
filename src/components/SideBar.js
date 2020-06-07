import React from "react";

const SideBar = (
  handlePriceChange,
  handleRangeSearch,
  closeSideBar,
  sliderValue,
  Slider,
) => (
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
        <a href="#/" className="button">
          Load new data
        </a>
      </div>
    </section>
  </>
);


export default SideBar;