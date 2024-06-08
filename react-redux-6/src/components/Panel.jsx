import React from "react";
import classNames from "classnames";
const Panel = ({ children, className, ...rest }) => {
  const finalClassNames = classNames(
    "border rounded p-3 shadow bg-white w-full",
    className // this is the new line for adding more class to the panel
  );

  // rest take all the rest of the properties and pass them to the div
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
};

export default Panel;
