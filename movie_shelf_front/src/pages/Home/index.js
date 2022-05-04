import './style.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../components/scripts/Navbar';
import SliderWrap from '../../components/scripts/SliderWrap';
import SliderMain from '../../components/scripts/SliderMain';

function home() {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
      <SliderMain title="Releases" />
      <SliderWrap title="Most Seen" />
      <SliderWrap title="Adventure" />
      <SliderWrap title="Action" />
    </div>
  );
}

export default home;
