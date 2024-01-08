import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import HomePage from '../Pages/HomePage'; 
import ProductivityPage from '../Pages/ProductivityPage';
import Entertainment from '../Pages/Entertainment';
import NavBar from './NavBar';
import TodoPage from '../Pages/TodoPage';
import BudgetingPage from '../Pages/BudgetingPage';

export const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<NavBar/>}>
      <Route path='/' element={<HomePage/>} />


      <Route path='/productivity' element={<ProductivityPage/>}> 
        <Route path='todoapp'element={<TodoPage/>} />
        <Route path='budgetingapp' element={<BudgetingPage/>} />
      </Route>

      
      <Route path='entertainment' element={<Entertainment/>}/>

      <Route />
    </Route>
  )
);

