import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Layout from './Components/LayoutArea/Layout/Layout';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Layout/>
  </BrowserRouter>
);
