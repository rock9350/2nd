import { Route, Routes } from 'react-router-dom';
import './App.css';
import Part_1 from './part/part_1';
import Part_2 from './part/part_2';
import Part_3 from './part/part_3';
import Part_4 from './part/part_4';
import Part_5 from './part/part_5';


function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Part_1/>}></Route>
        <Route path='/A' element={<Part_2/>}></Route>
        <Route path='/B' element={<Part_3/>}></Route>
        <Route path='/C' element={<Part_4/>}></Route>
        <Route path='/form' element={<Part_5/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
