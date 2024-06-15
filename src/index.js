/*import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
/*import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import Customer from './Components/Customer';
import Product from './Components/Product';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
document.getElementById('root')
);

const routing =(
  <Router>
   <div>
      <Routes>
    <Route exact path="/" element={<App/>}/>
    <Route path="/Product" element={<Product/>}/>
    <Route path="/Customer" element={<Customer/>}/>
    </Routes>
    </div>
</Router>
)
ReactDOM.render(routing,document.getElementById('root'))
reportWebVitals(); */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



ReactDOM.render(<App />, document.getElementById('root'));