import { Button } from "@material-ui/core";
import React, { Component } from "react";
import "./Main_button.scss";

interface Props {
  icons: string;
}

const Main_button: React.FC<Props> = ({ icons }) => {
  return (
    <Button variant="contained" size="large">
      Sign In
    </Button>
  );
};

export default Main_button;
