import React from "react";
import { Tooltip } from "react-tooltip";

const ToolTipMes = ({ anchor, position, content }) => {
 
  return (
    <Tooltip anchorSelect={anchor} place={position} variant={'dark'}>
        {content}
    </Tooltip>
  );
};

export default ToolTipMes;
