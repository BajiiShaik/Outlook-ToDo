import React from "react";
import { Link } from "react-router-dom";
import{AiOutlineClose} from "react-icons/ai";


type SettingClickProps={
    ThemeClick:(event:React.MouseEvent,id:string)=>void,
    setting:(event:React.MouseEvent<HTMLAnchorElement>)=>void
}

const SettingMenu=(props:SettingClickProps)=>{
    console.log(props)
        return (
       
        <div className="settingFlex">
        <div className="headFlex">
            <h2>Setting</h2>
            <Link to="" onClick={props.setting}><AiOutlineClose /></Link>
        </div>
        <div className="settingBody">
            <h3 style={{margin:0}}>Outlook</h3>
            <Link to="" style={{color:"blue"}}>To Do Settings</Link>
        </div>
        <div className="themeCss">
            <h3>Theme</h3>
            <div>
                <button onClick={(e)=>props.ThemeClick(e,"black")} id="black" className="themeColorBoxBlack"></button>
                <button onClick={(e)=>props.ThemeClick(e,"blue")}  className="themeColorBoxBlue"></button>
            </div>
            <span className="themeColorBox"></span>
        </div>
        </div>
        
    )
}

export default SettingMenu;