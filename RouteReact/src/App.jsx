import Show from './components/Show';
import About from './components/About'
import Home from './components/Home';
import { Link,Route,Routes } from 'react-router-dom';


const App = () => {


  return (
    <div>
      <nav className='flex  gap-8 text-xl font-semibold justify-center'>
        <Link to ="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/show">Show</Link>
      </nav>

      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/Show' element={<Show/>} />
     
      </Routes>
    </div>
  );
}

export default App;
