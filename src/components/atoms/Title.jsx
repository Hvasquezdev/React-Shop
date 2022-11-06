import React from "react";
import "./../../assets/styles/atoms/Title.scss";

function Title({ children, align = "start", fullWidth = false }) {
  const getClassNames = () => {
    const classNames = {
      title: true,
      [`title--${align}`]: align,
      "title--full-width": fullWidth,
    };
    const filteredClassNames = Object.keys(classNames).filter((key) => !!classNames[key]);

    return filteredClassNames.join(" ");
  };

  return <h1 className={getClassNames()}>{children}</h1>;
}

export default Title;
