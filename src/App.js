import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddPost from './components/AddPost';
import DeletePost from './components/DeletePost';
import SearchPost from './components/SearchPost';
import ViewAll from './components/ViewAll';


function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path='/' element={<AddPost/>}/>
  <Route path='/search' element={<SearchPost/>}/>
  <Route path='/delete' element={<DeletePost/>}/>
  <Route path='/view' element={<ViewAll/>}/>
</Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
