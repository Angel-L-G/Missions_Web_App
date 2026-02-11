import AppRouter  from './router'
import './App.css'
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div>
        <BrowserRouter>
            <AppRouter />
        </BrowserRouter>
    </div>
  )
}

export default App
