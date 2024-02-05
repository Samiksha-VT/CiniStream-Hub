const API_KEY = "10a749ef89026c2d460d33b5c045c079";

const requests = {
    fetchTrending : `/trending/all/day?api_key=${API_KEY}&language=en&with_genres=14`,
    fetchNetflixOriginals:`/discover/movie?api_key=${API_KEY}&language=en-US&page=1&sort_by=popularity.desc&with_genres=878`,
    fetchTopRated : `/discover/movie?api_key=${API_KEY}&language=en-US&page=1&with_genres=12,18`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&include_adult=false&with_genres=28,18`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomaceMovies : `/discover/movie?api_key=${API_KEY}&include_adult=false&with_genres=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_genres=99`,


}

export default requests;

