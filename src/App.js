import Movies from './components/Movies'
import './App.css'
import requests from './requests'

function App() {
    return (
        <div className="App">
            <h1>Hey Thunder! This is Netflix-clone application</h1>
            <Movies title="TRENDING NOW" fetchUrl={requests.fetchTrending} />
            <Movies title="Top Rated" fetchUrl={requests.fetchTopRated} />
        </div>
    )
}

export default App
