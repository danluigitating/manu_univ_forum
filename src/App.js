import Sidebar from "./components/Sidebar";
import React from "react";
import 'antd/dist/antd.css';
import {getRandomName} from "./api/randomName";

function App() {

    const randomName = localStorage.getItem("randomName") ? localStorage.getItem("randomName") :
        getRandomName().then( response => localStorage.setItem("randomName", response.data))

    return (
       <div>
          <Sidebar/>
       </div>
    )
}

export default App;
