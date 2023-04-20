import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import { GroupPage } from 'pages/GroupPage';
import { GroupPageProvider } from 'pages/GroupPageProvider';
import { AppProvider } from 'pages/AppProvider';

function App() {
  return (
    <div className="App">
      
      <AppProvider>
        <GroupPageProvider id="2c1e4410-b1c5-11ed-8fd2-0242ac110002" />
      </AppProvider>
    </div>
  );
}

export default App;
