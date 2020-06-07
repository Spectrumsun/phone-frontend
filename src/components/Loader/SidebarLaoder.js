 import React from 'react';


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



  export default showSidebarLoader;