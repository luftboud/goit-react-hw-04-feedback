import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/FeedbackForm/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// ReactDOM.render(<FeedbackForm />, document.getElementById('root'));
