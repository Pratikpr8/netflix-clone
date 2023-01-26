import React from "react";

import Navbar from "../Navbar/Navbar";
import MovieRow from "../MovieRow/MovieRow";
import request from "../../Request/request";
import Footer from "../Footer/Footer";
import MoviePic from "../MoviePic/MoviePic";

export default function Home({ selectedUser }) {
  return (
    <>
      <Navbar selectedUser={selectedUser} />
      <MoviePic fetchURL={request.fetchPopularMov} />
      <MovieRow title="What's trending" fetchURL={request.fetchTrending} />
      <MovieRow title="Top Rated" fetchURL={request.fetchTopRated} isLargeRow />
      <MovieRow title="Trending Today" fetchURL={request.fetchTrendingTod} />
      <MovieRow title="Popular TV Series" fetchURL={request.fetchPopularTV} />
      <Footer />
    </>
  );
}
