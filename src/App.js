import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from 'react-router-dom';
import { CharacterScreen } from './Screens/Character/Character';
import { HomeScreen } from './Screens/Home/Home';
// import { NavBar } from './components/nav/navbar';
import './App.css';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/character/:id" element={<CharacterScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
