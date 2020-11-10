import React, { useState } from "react";
// import HomePage from "./HomePage";
import { Router } from "@reach/router";
import { navigate } from "@reach/router";
import People from "./People";
import Planets from "./Planets";
import Error from "./Error";
import "./App.css";
const baseUrl = "https://swapi.dev/api/";

function App() {
  const [showData, setShowData] = useState("");
  //Get the url and address based on user input
  const getUrl = () => {
    const data = document.getElementById("searchBar");
    const id = document.getElementById("ID");
    const strData = data.value;
    const strID = id.value;
    const fetchUrl = baseUrl.concat(strData, "/", strID);
    const address = "/" + strData + "/" + strID;
    const urlArray = [];
    urlArray.push(fetchUrl);
    urlArray.push(address);
    return urlArray;
  };
  //Get data from fetch
  const getData = async () => {
    try {
      const response = await fetch(getUrl()[0]);
      if (response.status >= 200 && response.status <= 299) {
        const jData = await response.json();
        setShowData(jData);
        navigate(getUrl()[1]);
      } else {
        navigate("/error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main-div">
        <label htmlFor="searchBar">Search for :</label>
        <select id="searchBar" name="searchBar">
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        <label htmlFor="ID" style={{ marginLeft: "30px" }}>
          ID :
        </label>
        <input type="text" id="ID" name="ID"></input>
        <button className="btn" onClick={getData}>
          Search
        </button>
        <Router>
          <People path="/people/:id" {...showData} />
          <Planets path="/planets/:id" {...showData} />
          <Error path="/error" />
        </Router>
      </div>
    </>
  );
}
export default App;
