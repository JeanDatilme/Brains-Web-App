import { RouterProvider } from 'react-router-dom';
import { appRouter } from './Router/appRouter';
import './Style/App.css';
import './Style/Navbar.css';
import './Style/HomePage.css';
import './Style/ProductivityPage.css';
import './Style/TodoApp.css';
import './Style/BudgetingApp.css';
import './Style/weatherApp.css';


function App() {
  return (
    <div className="App-header">
      <RouterProvider router={appRouter}/>
    </div>
  );
}

export default App;
