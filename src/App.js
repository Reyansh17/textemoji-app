
import './App.css';
import MainPage from './Components/MainPage';
import { createRoot } from "react-dom/client";
import { Converter } from "./converter/Converter";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
       <MainPage />
      </div>
    ),
  },
  {
    path: "converter",
    element: <Converter />,
  },
]);

function App() {
  return (
    <div className="App">
    <div>
    <RouterProvider router={router} />
    
      </div>
    </div>
  );
}

export default App;
