import React, { Fragment, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';

// const Index = lazy(() => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(import("./pages/index")), 600);
//   });
// });
const Index = lazy(() => import('./pages/index/index'));
const Team = lazy(() => import('./pages/team/team'));
const EventDetails = lazy(() => import('./pages/eventDetails/event-details'));
const PageNotFound = lazy(() => import('./pages/page404/page-not-found'));


const loading = (
  <div className="load-container">
    <span className='load-box box-3'></span>
    <span className='load-box box-4'></span>
    <span className='load-box box-5'></span>
    <span className='load-box box-2'></span>
    <span className='load-box box-3'></span>
    <span className='load-box box-4'></span>
    <span className='load-box box-1'></span>
    <span className='load-box box-2'></span>
    <span className='load-box box-3'></span>
  </div>
);

function handleNavbarScrollOffset(id) {
  if (id != null && document.getElementById(id) !== null){
    let yPos = document.getElementById(id).getBoundingClientRect().top;

    window.scrollTo({
      top: window.scrollY + yPos - 80,
      behavior: 'smooth'
    });
  }
}

function App() {
  return (
    <Fragment>
      <Router>   
        <Suspense fallback={loading}>
          <Navbar handleNavbarScrollOffset={handleNavbarScrollOffset} />     
          <Switch>
            <Route path={process.env.PUBLIC_URL + '/'} exact component={Index} />
            <Route path={process.env.PUBLIC_URL + '/team'} exact component={Team} />
            <Route path={process.env.PUBLIC_URL + '/event-details/:id'} component={EventDetails} />
            <Route component={PageNotFound} />
          </Switch>
        </Suspense>
      </Router>
    </Fragment>
  ); 
}

export default App;
