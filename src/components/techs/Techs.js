import React, { useState, useEffect } from "react";
import TechItem from "./TechItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTechs } from "../../actions/techActions";

const Techs = ({ tech: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technicians</h4>
        <ul className="collection">
          {techs.length === 0 ? (
            <p className="center">No techs to show...</p>
          ) : (
            !loading && techs.map((t) => <TechItem key={t.id} tech={t} />)
          )}
        </ul>
      </div>
      <div className="modal-footer" style={{ padding: "4px 15px 15px 4px" }}>
        <button
          className="btn modal-close waves-effect waves-light"
          name="cancel"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tech: state.tech,
});

Techs.propTypes = {
  getTechs: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, { getTechs })(Techs);
