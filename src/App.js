import logo from './logo.svg';
import './App.css';
import React, {Suspense,useEffect} from 'react';

//imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ParallaxProvider } from 'react-scroll-parallax';
import 'bootstrap/dist/css/bootstrap.min.css';

// constants
import Constants from './assets/constants'; 

// pages
import Home from './views/pages/Home/Home';
import Page404 from './views/pages/Pages404/Page404';


//layout 
import DefaultLayout from './containers/DefaultLayout';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

function App() {
  useEffect(() => {
    document.title = "Motos"
  }, [])
  return (
    <BrowserRouter>
      <Suspense fallback={loading()}>
        <ParallaxProvider>
          <DefaultLayout>
            <Routes>
              <Route path={Constants.ROUTES.HOME} element={<Home />}></Route>
              <Route path='*' element={<Page404 />} />
            </Routes>
          </DefaultLayout>
        </ParallaxProvider>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
