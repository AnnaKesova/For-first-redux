
import './App.css';
import Foxes from './redux/Foxes';
import Comments from './redux/Commits';
import FoxesLikes from './redux/FoxesLikes'

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <div className='cards about__container'>
          <Foxes/>
          <FoxesLikes/>
        </div>
        <div className='comments about__container'>
          <Comments/>
        </div>
      </div>
    </div>
  );
}

export default App;
