import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './components/app/App';
import registerServiceWorker from './Utils/registerServiceWorker';

//render(<App />, document.getElementById('root'));
render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    document.getElementById('root')
);
registerServiceWorker();
