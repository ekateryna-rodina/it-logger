import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addTech } from "../../actions/techActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = ({ addTech }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //   on submit
  const onSubmit = (e) => {
    if (firstName === "" || lastName === "") {
      M.toast({ html: "Please enter first name and last name" });
    } else {
      const newTech = {
        firstName,
        lastName,
      };
      // call an action
      addTech(newTech);

      // reset form state
      setFirstName("");
      setLastName("");
    }
  };
  return (
    <div id="add-tech-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter tech information</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              First Name
            </label>
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
AddTechModal.propTypes = {
  addTech: PropTypes.func.isRequired,
};

// style
const modalStyle = {
  width: "75%",
  height: "55%",
};

export default connect(null, { addTech })(AddTechModal);
