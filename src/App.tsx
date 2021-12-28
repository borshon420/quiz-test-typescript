import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(()=> import('./pages/Home'));
const Exam = lazy(()=> import('./pages/Exam'));
const Result = lazy(()=> import('./pages/Result'));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<p>Loading...</p>}>
      <BrowserRouter>
          <Routes>
            <Route path={"/"} element={<Home/>}></Route>
            <Route path={"/exam"} element={<Exam/>}></Route>
            <Route path={"/result"} element={<Result/>}></Route>
          </Routes>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
