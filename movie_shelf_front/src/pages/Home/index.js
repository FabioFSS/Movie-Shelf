import './style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../components/scripts/Navbar';
import SliderWrap from '../../components/scripts/SliderWrap';
import SliderMain from '../../components/scripts/SliderMain';

function Home() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <SliderMain title="Releases" />
      <SliderWrap title="Most Seen" page={1}/>
      <SliderWrap title="Adventure" page={2}/>
      <SliderWrap title="Action" page={3}/>
    </div>
  );
}

export default Home;
