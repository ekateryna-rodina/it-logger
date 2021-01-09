import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { editLog } from "../../actions/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = ({ current, editLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");
  //   update current
  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setAttention(current.attention);
      setTech(current.tech);
    }
  }, [current]);
  //   on submit
  const onSubmit = (e) => {
    if (message === "" || tech === "") {
      M.toast({ html: "Please enter a message and tech" });
    } else {
      const id = current.id;
      const editedLog = {
        id,
        message,
        attention,
        tech,
        date: new Date(),
      };
      // call an action
      editLog(editedLog);
      // reset form state
      setMessage("");
      setAttention(false);
      setTech("");
    }
  };
  return (
    <div id="edit-log-modal" className="modal" style={modalStyle}>
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
EditLogModal.propTypes = {
  editLog: PropTypes.func.isRequired,
};

// style settings
const modalStyle = {
  width: "75%",
  height: "48%",
};

// state to props
const mapStateToProps = (state) => ({
  current: state.log.current,
});

export default connect(mapStateToProps, { editLog })(EditLogModal);
