import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { Link } from "gatsby";

const useStyles = createUseStyles({
  menuItems: {
    margin: "auto",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "space-around",
    zIndex: "2",
    position: "relative",
    "&:hover $menuItem": {
      opacity: "0.3",
    },
    "@media (max-width: 950px)": {
      display: (props) => (props.showHeader ? "none" : "block"),
      textAlign: "center",
    },
  },
  menuItem: {
    marginTop: "auto",
    marginBottom: "auto",
    color: "white",
    cursor: "pointer",
    fontSize: "clamp(2rem, 7vw, 5rem)",
    fontFamily: "Moderat",
    fontWeight: "300",
    display: "block",
    textDecoration: "none",
    transition: "opacity 400ms ease",
    "&:hover": {
      opacity: "1 !important",
    },
    "$:hover $menuBackgroundImage": {
      backgroundSize: "100vmax !important",
      opacity: "0.10 !important",
    },
  },
  header: {
    display: "none",
    margin: "20px auto",
    wordBreak: "break-word",
    "@media (max-width: 950px)": {
      display: "block",
    },
  },
  headerMenuItem: {
    marginTop: "auto",
    marginBottom: "auto",
    margin: "10px",
    color: "#fff",
  },
});

function renderNavLinks(onMouseEnter, menuItem) {
  return (
    <>
      <Link to="/" className={menuItem} onMouseEnter={() => onMouseEnter(0)}>
        DOG
      </Link>
      <Link
        to="/about"
        className={menuItem}
        onMouseEnter={() => onMouseEnter(1)}
      >
        ABOUT
      </Link>
      <Link
        to="/resume"
        className={menuItem}
        onMouseEnter={() => onMouseEnter(2)}
      >
        RESUME
      </Link>
      <Link
        to="/contact"
        className={menuItem}
        onMouseEnter={() => onMouseEnter(3)}
      >
        CONTACT
      </Link>
    </>
  );
}

const Nav = ({ showHeader, updateActiveIndex, updateHovering }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [hovering, setHovering] = useState(false);

  const classes = useStyles({ activeIndex, hovering, showHeader });

  useEffect(() => {
    updateActiveIndex && updateActiveIndex(activeIndex);
  }, [activeIndex, updateActiveIndex]);

  useEffect(() => {
    updateHovering && updateHovering(hovering);
  }, [hovering, updateHovering]);

  return (
    <>
      {showHeader && (
        <header className={classes.header}>
          <nav>{renderNavLinks(setActiveIndex, classes.headerMenuItem)}</nav>
        </header>
      )}
      <div
        className={classes.menuItems}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {renderNavLinks(setActiveIndex, classes.menuItem)}
      </div>
    </>
  );
};

export default Nav;
