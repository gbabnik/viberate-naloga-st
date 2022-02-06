import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import './styles/less/master.less';
// import './styles/basic.css';
// import './styles/styles.css';
import Navbar from "./components/navbar.js"
import NotFound from './components/not-found.js'
import ArtistCard from "./views/artist-card.js"


function App() {
  return (
       <Router> 
        <div className="container">
          <header className="header">
            <Navbar />
          </header>
        </div>
        <main className="main">
          <section className="section section-artist-detail trending claimed">
          <Routes>
              <Route path=":artistUuid" element={<ArtistCard />} />
              <Route path="*" element={<NotFound />} />
          </Routes>  
          </section>
        </main> 
      </Router>   
  );
}

export default App;
