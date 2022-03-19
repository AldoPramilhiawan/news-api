import React from "react";
import Axios from "axios";
import axios from "axios";

function App() {
  let data = document.getElementById("data");
  axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=a047eeeab97a479496714dd0da8d145f").then((res) => {
    console.log(res.data);
    console.log(res.data.articles);
    data.innerHTML = render(res.data.articles);
  });
  
  let getSearch = () => {
    let inputVal = document.getElementById("search").value;
    axios.get(`https://newsapi.org/v2/everything?q=${inputVal}&shortBy=popularity&language=id&apiKey=a047eeeab97a479496714dd0da8d145f`).then((res) => {
      data.innerHTML = render(res.data.articles);
    });
  };
  
  function render(result) {
    let card = "";
    result.forEach((data) => {
      card += `
      
      <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col-3">
       <div class="card" style="width: 18rem">
          <img src=${data.urlToImage} class="card-img-top" alt="..."/>
        <div class="card-body">
          <p class="card-text">${data.title}</p>
          <p class="card-text">${data.description}</p>
          <p class="card-text">${data.url}</p>
        </div> 
      </div>
      </div>`;
    });
    return card;
  }
  
  return (
    <>
      <nav className="navbar navbar-light" style="background-color: #e3f2fd">
        <div className="container-fluid">
          <a className="navbar-brand">TopNews</a>
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Features
          </a>
          <a className="nav-link" href="#">
            Pricing
          </a>
          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
            Disabled
          </a>
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="search" aria-label="search" id="search" />
            <button className="btn btn-outline-success" type="submit" onclick={getSearch()}>
              Search
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default App;
