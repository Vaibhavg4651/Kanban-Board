import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import arw from "../assets/down.png";
import {setgroup , setTheme , setorder} from "../reducers/stateSlice.jsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const group = useSelector((state) => state.states.group);
  const order = useSelector((state) => state.states.order);
  const theme = useSelector((state) => state.states.theme);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOrderSelect = (event) => {
    dispatch(setorder(event.target.value));
  };

  const handleGroupSelect = (event) => {
    dispatch(setgroup(event.target.value));
  };


  return (
    <div className="Navbar">
      <div className="Display">
        <div className="display-icons " onClick={toggleDropdown}>
          <div>
            <svg
              stroke="#999899"
              fill= "#999899"
              stroke-width="0"
              viewBox="0 0 16 16"
              class="icon"
              height="1em"
              width="1em"
              transform="rotate(90)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"
              ></path>
            </svg>
          </div>
          Display
          <div className={ `icon-container ${isOpen ? "rotate" : ""}`}>
            <img src={arw} style={{color: "#999899"}} alt="arrow" />
          </div>
        </div>
        {isOpen && (
          <section className="maintime">
            <div className="group">
              <span style={{color:"#a7a6a6"}}>Grouping</span>
              <select name="group" className="select" value={group} onChange={handleGroupSelect}>
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="group">
              <span style={{color:"#a7a6a6"}}>Ordering</span>
              <select name="order" className="select" value={order} onChange={handleOrderSelect}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </section>
        )}
      </div>
      <button className="toggle"></button>
    </div>
  );
};

export default Navbar;
