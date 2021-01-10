import './App.css';
import AddTodo from './Component/AddTodo/AddTodo';
import List from './Component/List/List';
import NavItems from './Component/NavItems/NavItems';

function App() {
  return (
    <div className="bg_image ">
        <NavItems></NavItems>
        <List></List>
        <AddTodo></AddTodo>
    </div>
  );
}

export default App;
