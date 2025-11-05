
import './App.css'
import LudoBoard from './LudoBoard.jsx';
import Hi from "./Hi.jsx";
import TodoList from "./TodoList.jsx";
import Lottery from "./Lottery.jsx";

function App() {
  

  return (
    <>
    <Hi/>
    <LudoBoard/>
    <TodoList/>
    <Lottery n={3} winnigSum={15}/>
    </>
  )
}

export default App
