/*import React, { useEffect, useState } from "react";
import MovieRow from "./components/MovieRow";
import Tmdb from "./tmdb";



export default () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(()=>{
    const loadAll = async () => {

      let list = await Tmdb.getHomeList();
      setMovieList(list);
    }

    loadAll();
  }, []);

  return (
    <div className='page'>
      <section className='lists'>
        {movieList.map((item, key) => (
        <div>
          <MovieRow key={key} title={item.title} items={item.items}/>
        </div> 

        ))}
      </section>
    </div>
  );
}*/

import "./App.css";
import React, {useEffect, useState} from 'react';
import Tmdb from './tmdb';
import MovieRow from './components/MovieRow';
import FeaturedMovie from "./components/FeaturedMovie";
export default () => {

  const [movieList, setMovielist] = useState([]);
  const [featuredData, setfeaturedData] = useState(null);

  useEffect(() => {

    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovielist(list);
    }

    loadAll();
  }, []);
  

  return (
    <div className='page'>

      {featuredData &&
       <FeaturedMovie item ={featuredData}  /> }
      <section className='lists'>
        {movieList.map((item, key) => (
          <div>
            <MovieRow key={key} title={item.title} items={item.items}/>
          </div>
        ))}
      </section>
    </div>
  );
}


