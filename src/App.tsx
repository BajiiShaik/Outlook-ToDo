import Navbar from "./components/Navbar";
import "./App.css";
import {Routes, Route } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import CommonAddTask from "./components/CommonAddTask";
import { useState,Suspense,lazy } from "react"
import SettingMenu from "./components/SettingMenu";

//const CommonAddTask = lazy(() => import("./components/CommonAddTask"));
//const  Navbar= lazy(() => import("./components/Navbar"));
//const  SideMenu= lazy(() => import("./components/SideMenu"));
export default function App() { 
   const [task, setTask] = useState("");
   const [isSettingClick,setIsSettingClick]=useState(false);
   const [colorTheme,setColorTheme]=useState("navCss")

const [myDayObj, setmyDayObj] = useState([
  {
    id: 0,
    task: ""
  }
]);
const [importantObj, setImportantObj] = useState([
  {
    id: 0,
    task: ""
  }
]);
// const onSaveMyDayPlan =()=>{

// }
const addTaskChange = (e:React.ChangeEvent<HTMLInputElement>, id:string) => {
  console.log(id);
  setTask(e.target.value);
  // if (id === "myday") {
    
  //   setTask(e.target.value);
  //   console.log(e.target.value);
  // }
  // else if(id==="important"){
  //   console.log("important")
  //   setTask(e.target.value);
  //   console.log(e.target.value);
  // }
  
};
const addTaskSubmit=(e:React.SyntheticEvent<HTMLButtonElement>,id:string)=>{
e.preventDefault();
if(task!=="" && id==='myday'){
setmyDayObj([...myDayObj,{id:+myDayObj[myDayObj.length-1].id+1,task:task}])
setTask("")
}
else if(task!=="" && id==='important'){
  
  setImportantObj([...importantObj,{id:+importantObj[importantObj.length-1].id+1,task:task}])
  console.log(importantObj)
setTask("")
}
}
const settingClick=(e:React.MouseEvent<HTMLAnchorElement>)=>{
  e.preventDefault();
  setIsSettingClick(!isSettingClick);
}

return (
  
  <div className="App">
      <Suspense fallback={<div>...LOADING</div>}>
         <Navbar colorTheme={colorTheme} setting={settingClick}/>
         </Suspense>
   <Suspense>
   <SideMenu />
   </Suspense>
    
    {isSettingClick &&
    <SettingMenu 
    ThemeClick={(e,id)=>{
      console.log(id)
    e.preventDefault();
    
    id==="black"?setColorTheme("navCss"):setColorTheme("navCssBlue")
    }} 
    setting={settingClick}/>
    }
    <Suspense fallback={<div>Loading....</div>}>
    <Routes>
   
      <Route
        path="/"
        element={
          <CommonAddTask
            name="My Day"
            task={task}
            addTaskChange={addTaskChange}
            id="myday"
            addTaskSubmit={addTaskSubmit}
            data={myDayObj}
          />
        }
      />
      
      <Route
        path="/important"
        element={
           <CommonAddTask 
           name="Important"
           id="important" 
           task={task} 
           addTaskChange={addTaskChange}
           addTaskSubmit={addTaskSubmit}
           data={importantObj}
        />}
      />
      <Route
        path="/planned"
        element={<CommonAddTask 
          name="planned"
          id="important" 
          task={task} 
          addTaskChange={addTaskChange}
          addTaskSubmit={addTaskSubmit}
          data={importantObj} />}
      />
      <Route
        path="/assigned"
        element={<CommonAddTask 
          name="Assigned"
          id="important" 
          task={task} 
          addTaskChange={addTaskChange}
          addTaskSubmit={addTaskSubmit}
          data={importantObj}/>}
      />
      <Route
        path="/tasks"
        element={<CommonAddTask 
          name="Tasks"
          id="important" 
          task={task} 
          addTaskChange={addTaskChange}
          addTaskSubmit={addTaskSubmit}
          data={importantObj}/>
        }
      />
     
    </Routes>
    </Suspense>
  </div>

);
}

