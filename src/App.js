import Row from './components/Row'
import './App.css'
import requests from './requests'
import Banner from './components/Banner'

function App() {
    return (
        <div className="app">
            {/* Navbar */}
            {/* Banner */}
            <Banner />
            <Row title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
            <Row
                title="Animation Movies"
                fetchUrl={requests.fetchAnimationMovies}
            />
            <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row
                title="Science Fiction Movies"
                fetchUrl={requests.fetchScienceFictionMovies}
            />
            <Row title="War Movies" fetchUrl={requests.fetchWarMovies} />
        </div>
    )
}

export default App
