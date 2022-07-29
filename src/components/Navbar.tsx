import React from "react";
import {AiOutlineSetting,AiOutlineNotification} from "react-icons/ai";
import {MdOutlineHelp} from "react-icons/md"
import { Link } from "react-router-dom";
type NavbarProps={
  colorTheme:string,
  setting:(event:React.MouseEvent<HTMLAnchorElement>)=>void
}

const Navbar = (props:NavbarProps) => {

  return (
    <>
      <nav className={props.colorTheme}>
        <div className="leftNav">
          <Link to="">Outlook</Link>
          <input placeholder="Search" />
          <button>
            <i className="fa fa-search"></i>
          </button>
        </div>

        <div className="rightNav">
          <Link to="" title="Setting" style={{color:"white"}} onClick={event=>props.setting(event)}><AiOutlineSetting /></Link>
          <Link to="" title="Help" style={{color:"white"}}><MdOutlineHelp /></Link>
          <Link to="" title="What's New" style={{color:"white"}}><AiOutlineNotification /></Link>
          <Link to="" title="Profile" style={{color:"white"}}>BAJI SHAIK</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
