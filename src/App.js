
import './App.css';
import Dogs from './redux/Dogs';
import Comments from './redux/Commits'

function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <div className='cards about__container'>
          <Dogs/>
        </div>
        <div className='comments about__container'>
          <Comments/>
        </div>
      </div>
    </div>
  );
}

export default App;
