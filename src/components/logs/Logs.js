import React, { useState, useEffect } from "react";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLogs } from "../../actions/logActions";

const Logs = ({ log: { logs, loading }, getLogs }) => {
  useEffect(() => {
    getLogs();
    // eslint-disable-next-line
  }, []);

  if (loading || logs === null) {
    return (
      <div style={{ position: "absolute", bottom: "50%", right: "50%" }}>
        <Preloader />
      </div>
    );
  }
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>
      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show...</p>
      ) : (
        logs.map((l) => <LogItem key={l.id} log={l} />)
      )}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  log: state.log,
});

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, { getLogs })(Logs);
