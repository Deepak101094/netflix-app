import React from "react";
import "./HomeScreen.css";
import Navbar from "../../navbar";
import Banner from "../../banner";
import Row from "../../row";
import {
  BASE_URL,
  FETCH_NETFLIX_ORIGINALS,
  FETCH_TRENDING,
  FETCH_TOP_RATED,
  FETCH_ACTION_MOVIES,
  FETCH_COMEDY_MOVIES,
  FETCH_HORROR_MOVIES,
  FETCH_ROMANCE_MOVIES,
  FETCH_DOCUMENTARIES,
} from "../../../utility/api";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      <Navbar />
      
      <Banner />

      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={`${BASE_URL}${FETCH_NETFLIX_ORIGINALS}`}
        isLargeRow
      />
      <Row 
        title="Trending Now" 
        fetchUrl={`${BASE_URL}${FETCH_TRENDING}`}
      />
      <Row 
        title="Top Rated" 
        fetchUrl={`${BASE_URL}${FETCH_TOP_RATED}`}
      />
      <Row
        title="Action Movies"
        fetchUrl={`${BASE_URL}${FETCH_ACTION_MOVIES}`}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={`${BASE_URL}${FETCH_COMEDY_MOVIES}`}
      />
      <Row
        title="Horror Movies"
        fetchUrl={`${BASE_URL}${FETCH_HORROR_MOVIES}`}
      />
      <Row
        title="Romance Movies"
        fetchUrl={`${BASE_URL}${FETCH_ROMANCE_MOVIES}`}
      />
      <Row
        title="Documentaries"
        fetchUrl={`${BASE_URL}${FETCH_DOCUMENTARIES}`}
      />
    </div>
  );
};

export default HomeScreen;
