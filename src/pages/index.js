import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import Nav from "../components/nav";

function getBackgroundImagePosition(idx) {
  if (!idx) {
    return "center 45%";
  } else if (idx === 0) {
    return "center 50%";
  } else if (idx === 1) {
    return "center 55%";
  } else if (idx === 2) {
    return "center 60%";
  }
  return "center 65%";
}

const useStyles = createUseStyles({
  container: {
    height: "100%",
    display: "flex",
    width: "fit-content",
    marginLeft: "150px",
    "@media (max-width: 950px)": {
      justifyContent: "center",
      marginLeft: "0px",
      width: "100%",
    },
  },
  menuBackgroundImage: {
    display: "block",
    height: "100%",
    width: "100%",
    backgroundImage:
      "url(https://portfolio-current-2.s3.ca-central-1.amazonaws.com/samara.jpg)",
    position: "absolute",
    left: "0px",
    top: "0px",
    zIndex: "0",
    backgroundPosition: (props) =>
      getBackgroundImagePosition(props.activeIndex),
    backgroundSize: (props) => {
      if (props.hovering) {
        return "100vmax";
      }
      return "110vmax";
    },
    opacity: "0.15",
    transition: "background-size 800ms ease, background-position 800ms ease",
  },
});

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hovering, setHovering] = useState(false);
  const classes = useStyles({ activeIndex, hovering });

  return (
    <main className={classes.container}>
      <Nav updateActiveIndex={setActiveIndex} updateHovering={setHovering} />
      <div className={classes.menuBackgroundImage} />
    </main>
  );
};

export default Home;

export const Head = () => <title>Greg Miller</title>;
