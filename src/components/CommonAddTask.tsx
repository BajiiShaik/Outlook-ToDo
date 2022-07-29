import React from "react";
import CommmonMapFunction from "./CommonMapFunction";

type CommonAddTaskProps={
  name:string,
  task?:string,
  addTaskChange:(event:React.ChangeEvent<HTMLInputElement>,id:string)=>void,
  id:string,
  addTaskSubmit:(event:React.MouseEvent<HTMLButtonElement>,id:string)=>void,
  data:{
    id:number,
    task:string
  }[]
}

const CommonAddTask = (props:CommonAddTaskProps) => {
  return (
    <div className="main">
      <h3>{props.name}</h3>
      <div className="box">
        <input
          className="addText"
          value={props.task}
          onChange={(e) => props.addTaskChange(e, props.id)}
          placeholder="Add a task"
        />
        <div className="btnDiv">
          <button className="btnAdd" onClick={(e)=>props.addTaskSubmit(e,props.id)}>Add</button>
        </div>
      </div>

      <div className="taskList">
        {/* {props.id=='myday'&&
           props.data.map((item)=>{
            return(<>
            
                <p>{item.task}</p>
                <hr />
                </>)
           }) } */}
           <CommmonMapFunction data={props.data} />
           {/* {
            props.id==='myday'&&<CommmonMapFunction data={props.data} />
           }
           {
            props.id==='important'&&<CommmonMapFunction data={props.data} />
           } */}
        
      </div>
     
    </div>
  );
};

export default CommonAddTask;
