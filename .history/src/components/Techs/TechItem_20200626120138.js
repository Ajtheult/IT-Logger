import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteTech } from "../../actions/techActions";

const TechItem = ({ tech: { id, firstname, lastname }, deleteTech }) => {
  return (
    <li className="collection-item">
      <div>
        {firstname} {lastname}
        <a
          href="#!"
          className="secondary-content"
          onClick={() => deleteTech(id)}
        >
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired,
};

export default connect(null, { deleteTech })(TechItem);
