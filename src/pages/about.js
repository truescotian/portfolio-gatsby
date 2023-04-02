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
    margin: "auto",
    width: "90%",
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "center",
    justifyContent: "space-around",
    "@media (max-width: 1250px)": {
      margin: "0px",
    },
    "@media (max-width: 950px)": {
      margin: "0 auto",
      height: "auto",
    },
  },
  bioContainer: {
    width: "45%",
    backgroundColor: "rgb(20,20,20)",
    "& h2": {
      color: "#fff",
      fontSize: "clamp(1rem, 2vw, 4rem)",
      fontWeight: "600",
    },
    "@media (max-width: 1250px)": {
      paddingRight: "0px",
    },
    "@media (max-width: 950px)": {
      width: "100%",
      paddingRight: "0px",
      textAlign: "center",
    },
  },
  backgroundImage: {
    width: "45%",
    height: "auto",
    maxWidth: "350px",
    transition:
      "filter 800ms ease, opacity 800ms ease, background-size 800ms ease, background-position 800ms ease",
    "@media (max-width: 950px)": {
      width: "100%",
    },
  },
  bio: {
    color: "rgb(225, 225, 225) !important",
    fontFamily: "Gtwalsheimprotrial !important",
    fontSize: "1em !important",
    letterSpacing: "1.5px",
    lineHeight: "24px !important",
    textAlign: "justify",
    paddingRight: "40px",
    "@media (max-width: 950px)": {
      textAlign: "center",
    },
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <main className={classes.page}>
      <Nav showHeader={true} />
      <div className={classes.container}>
        <div className={classes.bioContainer}>
          <h2>I'm Greg Miller. A Backend Developer based in Halifax.</h2>
          <p className={classes.bio}>
            I think you'll find I'm one of the most passionate developers you'll
            ever get to work with. I do my best to exceed expectations as a
            developer by writing efficient code with a great team.
          </p>
        </div>
        <img
          alt="Greg camping"
          src="https://portfolio-current-2.s3.ca-central-1.amazonaws.com/camping.jpg"
          className={classes.backgroundImage}
        />
      </div>
    </main>
  );
};

export default About;

export const Head = () => <title>About Greg Miller</title>;
