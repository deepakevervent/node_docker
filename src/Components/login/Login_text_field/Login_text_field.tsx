import React, { Component } from "react";
import "./Login_text_field.scss";

interface Props {
  name: string;
  placeholder: string;
  type: string;
  icons: string;
}

const Login_text_field: React.FC<Props> = ({
  name,
  type,
  placeholder,
  icons,
}) => {
  return (
    <div className={icons}>
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default Login_text_field;
