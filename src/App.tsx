import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "./routing"
import { routes } from "./routing"
import "src/assets/styles/globals.scss"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            {/* Rendering Dynamic Routes from src/routing/routes.ts  */}
            { routes.map( (route) => (
              <Route 
                key={route.moduleCode}
                path={route.path}
                element={<route.element />}
              /> ))
            }
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
