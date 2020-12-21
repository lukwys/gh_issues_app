import { BrowserRouter } from 'react-router-dom';
import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import './app.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <SideBar />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
