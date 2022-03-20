import './App.css';
import NavBar from './components/NavBar';
import Title from './components/Title.js';
import CakeImage from './components/CakeImage';
import SearchBar from './components/SearchBar';
import Recipes from './components/Recipes';
import RecipeForm from './components/RecipeForm';

function App() {
  return (
    <>
      <NavBar/>
      <Title/>
      <CakeImage/>
      <SearchBar/>
      <Recipes/>
      <RecipeForm/>
    </>
  );
}

export default App;
