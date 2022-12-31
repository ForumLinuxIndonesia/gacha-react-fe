import "./App.css";
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import ButtonPage from "./pages/ui/ButtonPage";
import Feature from "./pages/Feature";
import Forum from "./pages/Forum";
import Showcase from "./pages/Showcase";
import Team from "./pages/Team";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Home = React.lazy(() => import('./pages/Home'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/fitur" element={<Feature />} />
          <Route exact path="/forum" element={<Forum />} />
          <Route exact path="/showcase" element={<Showcase />} />
          <Route exact path="/tim" element={<Team />} />
          <Route exact path="/masuk" element={<Login />} />
          <Route exact path="/daftar" element={<Register />} />
          <Route exact path="/ui/button" element={<ButtonPage />} />
          {/* <Route path="*" component={NotFound} /> */}
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
