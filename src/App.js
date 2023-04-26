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
        <GroupPageProvider id="2d9dcd22-a4a2-11ed-b9df-0242ac120003" />
      </AppProvider>
    </div>
  );
}

export default App;
