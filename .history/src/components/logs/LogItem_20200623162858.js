/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react-moment";
import Moment from "";
import PropTypes from "prop-types";

const LogItem = ({ log }) => {
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">{log.tech}</span>
        </span>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
