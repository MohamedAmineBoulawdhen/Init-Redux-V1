import React, { useRef, useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { MdOutlineAddTask } from "react-icons/md";
import "../index.css";
export default function Addtask() {
  const [formIsOpen, setFormIsOpen] = useState(false);
  const [textInput, setTextInput] = useState("");
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setFormIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  const handleTextInput = () => {
    console.log(textInput);
    setTextInput("");
  };

  return (
    <div className="addtask" ref={ref}>
      {!formIsOpen && (
        <div
          onClick={() => {
            setFormIsOpen(!formIsOpen);
            console.log(formIsOpen);
          }}
        >
          <FontAwesomeIcon icon={faPlus} />
          {!textInput && <span>Add a task</span>}
          {textInput && <span>{textInput}</span>}
        </div>
      )}
      {formIsOpen && (
        <div id="formaddatask">
          <form onSubmit={handleTextInput}>
            <input
              type="text"
              id="formaddataskinput"
              autoFocus="autofocus"
              placeholder="Try typing 'Pay utilities bill by Friday 6pm'"
              value={textInput}
              onChange={(event) => setTextInput(event.target.value)}
              minLength="3"
              required
            />
            <button id="addtaskbutton">
              <MdOutlineAddTask style={{ fontSize: "30px" }} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
