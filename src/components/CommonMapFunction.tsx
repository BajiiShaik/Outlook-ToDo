import React from "react";

type Data={
    id:number,
    task:string
}
type CommmonMapFunctionProps={
    data:Data[]
}

const CommmonMapFunction=(props:CommmonMapFunctionProps)=>{
return (
    <>
    {
    props.data.map((item)=>{
        return(<div key ={item.id}>
            <p key={item.id}>{item.task}</p>
            <hr />
            </div>)
    })}</>
)
}

export default CommmonMapFunction;