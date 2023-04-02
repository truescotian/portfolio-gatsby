import React from "react";
import Nav from "../components/nav";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  page: {
    height: "100%",
    display: "flex",
    flexFlow: "row nowrap",
    paddingLeft: "10%",
    "@media (max-width: 950px)": {
      flexFlow: "column nowrap",
      paddingLeft: "0%",
    },
  },
  container: {
    flex: "1",
    marginLeft: "50px",
    display: "flex",
    "& embed": {
      width: "100%",
      height: "100%",
    },
    "@media (max-width: 950px)": {
      marginLeft: "0px",
    },
  },
});

const Resume = () => {
  const classes = useStyles();

  return (
    <main className={classes.page}>
      <Nav showHeader={true} />
      <div className={classes.container}>
        <embed type="application/pdf" src="../resume.pdf" />
      </div>
    </main>
  );
};

export default Resume;

export const Head = () => <title>Greg Miller's Resume</title>;
