import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import './App.css';

export default function App () {
  return (
    <div className="App">
      <RouterProvider router={Router} />
    </div>
  );
}
