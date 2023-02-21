import React from 'react'
import api from '../api/api'
import Banner from '../components/Banner/Banner'
import Nav from '../components/Nav/Nav'
import Row from '../components/Row/Row'


const NetflixShow = () => {
  return (
    
    <div>
      <Nav/>
      <Banner/>
      <Row 
      title="NETFLIX ORIGINALS" 
      fetchUrl={api.fetchNetflixOriginals} 
      isLargeRow/>
      <Row title="Trending Now" fetchUrl={api.fetchTrending} />
      <Row title="Top Rated" fetchUrl={api.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={api.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={api.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={api.fetchHorroMovies} />
      <Row title="Romantic Movies" fetchUrl={api.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={api.fetchDocumentariesMovies} />
    </div>
  )
}

export default NetflixShow