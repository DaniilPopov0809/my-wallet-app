import React from "react";
import PropTypes from "prop-types";
import { Tooltip } from "react-tooltip";

const ToolTipMes = ({ anchor, position, content }) => {
  return (
    <Tooltip anchorSelect={anchor} place={position} variant={"dark"}>
      {content}
    </Tooltip>
  );
};

ToolTipMes.propTypes = {
  anchor: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ToolTipMes;
