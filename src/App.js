import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Api from './component/Api'
import EditTable from './component/editTable';
import AddTable from './component/addTable';


function App() {
  return (
    <div>
      <Api></Api>
     {/* <EditTable></EditTable> */}
     {/* <AddTable></AddTable> */}
      </div>
  );
}

export default App;
