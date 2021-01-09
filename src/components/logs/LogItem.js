import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { deleteLog, setCurrent } from "../../actions/logActions";
import { connect } from "react-redux";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onEdit = () => {
    // set current
    setCurrent(log);
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          onClick={onEdit}
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID #{log.id}</span> last updated by{" "}
          <span className="black-text">{log.tech}</span> on{" "}
          <Moment format="MMMM Do YYYY hh:mm:ss a">{log.date}</Moment>
        </span>
        <a
          href="#!"
          className="secondary-content"
          onClick={() => {
            deleteLog(log.id);
          }}
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired,
};

export default connect(null, { deleteLog, setCurrent })(LogItem);
