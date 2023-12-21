import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("Select your time slot");



    const toggleDropdown = () => {
        setIsOpen(!isOpen);
      };
      
      
    const handleOptionSelect = (value, option) => {
        setSelectedOption(option);
        setDropdownValue(value);
        setIsOpen(false);
      };


  return (
      <div className="Navbar">
        <div className="Display">
            <div className="selected-option" onClick={toggleDropdown}>
              <div>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  class="icon"
                  height="1em"
                  width="1em"
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
              <div>
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
                >
                <path fill="none" d="M0 0h24v24H0V0z"></path>
                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
              </svg>
                  </div>
          </div>
          {isOpen && (
            <section className="maintime">
              <div
                className="option1"
                onClick={() =>
                  handleOptionSelect("12pm - 12:30pm", "12pm - 12:30pm")
                }
              >
                <span></span>
                <select name="" id=""></select>
              </div>
              <div
                className="option2"
                onClick={() =>
                  handleOptionSelect("12:30pm - 1:00pm", "12:30pm - 1:00pm")
                }
              >
                <span></span>
                <select name="" id=""></select>
              </div>
            </section>
          )}
          <input
            type="hidden"
            id="dropdown-value"
            name="dropdown-value"
            value={dropdownValue}
          />
        </div>
        <button className="toggle"></button>
      </div>
  );
};

export default Navbar;
