import { Content } from './components/Content';
import { SideBar } from './components/SideBar';
import './app.scss';

const App = () => {
  return (
    <div className="app">
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
