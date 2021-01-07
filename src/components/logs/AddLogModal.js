import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  //   on submit
  const onSubmit = (e) => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date(),
      };
      // call an action
      addLog(newLog);

      // reset form state
      setMessage("");
      setAttention(false);
      setTech("");
    }
  };
  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter system log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={(e) => setTech(e.target.value)}
            >
              <option value="" disabled>
                Select technician
              </option>
              <option value="John Smith">John Smith</option>
              <option value="Jeff Benney">Jeff Benney</option>
            </select>
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Requires attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer" style={{ padding: "4px 15px 15px 4px" }}>
        <button
          className="btn modal-close waves-effect waves-light"
          name="cancel"
        >
          Cancel
        </button>{" "}
        <button
          className="btn waves-effect waves-light blue darken-2"
          onClick={onSubmit}
          name="action"
        >
          Submit
          <i className="material-icons right">send</i>
        </button>
      </div>
    </div>
  );
};

// prop types
AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired,
};

// style
const modalStyle = {
  width: "75%",
  height: "55%",
};

export default connect(null, { addLog })(AddLogModal);
