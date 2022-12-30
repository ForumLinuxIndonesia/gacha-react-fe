import "./App.css";
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import ButtonPage from "./pages/ui/ButtonPage";

const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ui/button" element={<ButtonPage />} />
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
