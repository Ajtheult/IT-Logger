import React from "react";
import PropTypes from "prop-types";

const LogItem = ({ log }) => {
  return (
    <div>
      <li className="collection-item">
        <div href="">{log.message}</div>
      </li>
    </div>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
};

export default LogItem;
