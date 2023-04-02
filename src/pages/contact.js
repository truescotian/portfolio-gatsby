import React, { useState } from "react";
import Nav from "../components/nav";
import { createUseStyles } from "react-jss";

function getBackgroundImagePosition(hovering) {
  if (!hovering) return "center";
  return "center 60%";
}

const tabletBreak = "@media (max-width: 1250px)";

const useStyles = createUseStyles({
  page: {
    height: "100%",
    display: "flex",
    flexFlow: "row nowrap",
    margin: "auto",
    paddingLeft: "10%",
    "@media (max-width: 950px)": {
      flexFlow: "column nowrap",
      paddingLeft: "0%",
    },
  },
  container: {
    flex: "1",
    margin: "auto",
    marginLeft: "100px",
    display: "flex",
    "@media (max-width: 950px)": {
      marginLeft: "0px",
      margin: "0px",
    },
  },
  box: {
    width: "80%",
    backgroundColor: "white",
    display: "flex",
    flexFlow: "column-reverse nowrap",
    "&:hover $backgroundImage": {
      filter: "brightness(70%)",
    },
    "@media (max-width: 950px)": {
      width: "100%",
    },
  },
  innerBox1: {
    flex: "3",
    backgroundColor: "#e7e8ed",
    display: "flex",
    flexflow: "column nowrap",
    alignItems: "center",
  },
  contactInfo: {
    flex: "2",
    display: "flex",
    justifyContent: "center",
    flexFlow: "column nowrap",
    position: "relative",
    minHeight: "200px",
  },
  backgroundImage: {
    height: "100%",
    width: "100%",
    backgroundImage:
      "url(https://portfolio-current-2.s3.ca-central-1.amazonaws.com/samara.jpg)",
    position: "absolute",
    left: "0px",
    top: "0px",
    transition:
      "filter 800ms ease, opacity 800ms ease, background-size 800ms ease, background-position 800ms ease",
    zIndex: "1",
    backgroundPosition: (props) => getBackgroundImagePosition(props.hovering),
    backgroundSize: (props) => {
      if (props.hovering) {
        return "100%";
      }
      return "110%";
    },
  },
  listItem: {
    fontFamily: "Moderat",
    backgroundColor: "#3b3c45",
    padding: "15px 25px",
    marginLeft: "-20px",
    marginTop: "5px",
    width: "fit-content",
    minWidth: "250px",
    transition: "margin 150ms ease",
    zIndex: "2",
    "@media (max-width: 950px)": {
      marginLeft: "-15px",
    },
    "&:hover": {
      marginLeft: "0px",
    },
  },
  form: {
    width: "70%",
    margin: "0 auto",
    "& p": {
      fontWeight: "300",
      color: "#524f4e",
    },
    "& ul": {
      fontWeight: "300",
      color: "#524f4e",
    },
    "& input, textarea": {
      backgroundColor: "rgba(0,0,0,0)",
      padding: "10px",
      paddingLeft: "0px",
      border: "0px",
      borderBottom: "1px solid #5b5959",
      width: "100%",
      transition: "border 0.5s ease",
      color: "#524f4e",
      fontSize: "16px",
      outline: "none",
    },
    gridRow: "1",
    [tabletBreak]: {
      gridRow: "2",
    },
  },
  label: {
    color: "#524f4e",
    fontSize: "14px",
    display: "block",
    marginTop: "20px",
  },
  textArea: {
    minHeight: "75px",
    resize: "none",
  },
  btn: {
    backgroundColor: "rgba(0,0,0,0)",
    border: "none",
    fontSize: "20px",
    fontWeight: "500",
    color: "rgb(59, 60, 69)",
    cursor: "pointer",
    marginTop: "20px",
    float: "right",
    marginBottom: "20px",
  },
  error: {
    backgroundColor: "#F2E6E8",
    borderRadius: "4px",
    border: "1px solid #F2E6E8",
    color: "#8B091A !important",
    padding: "10px",
    width: "max-content",
  },
  success: {
    backgroundColor: "#E1FAE4",
    borderRadius: "4px",
    border: "1px solid #E1FAE4",
    color: "#0C571A !important",
    padding: "10px",
    width: "max-content",
  },
});

const Contact = () => {
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [state, setState] = useState({
    message: "",
    name: "",
    email: "",
  });
  const [hovering, setHovering] = useState(false);
  const classes = useStyles({ hovering });

  function onChange(e) {
    if (error.length > 0) {
      setError("");
    }
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  function isValid() {
    if (state.name.length === 0) {
      setError("Name is required");
      return false;
    } else if (state.message.length === 0) {
      setError("Message is required");
      return false;
    } else if (state.email.length === 0) {
      setError("Email is required");
      return false;
    }

    return true;
  }

  async function onSubmit(e) {
    e.preventDefault();

    setSuccessMsg("");
    setError("");

    if (!isValid()) {
      return false;
    }

    setSubmitting(true);

    try {
      const body = {
        body: state.message,
        name: state.name,
        sender: state.email,
      };
      await fetch(
        `https://jefa8nm609.execute-api.ca-central-1.amazonaws.com/Production/email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
      setSuccessMsg("SENT");
    } catch (error) {
      console.error(error);
      setError(
        "Unable to send email. Please contact gregpmillr@gmail.com directly."
      );
    }

    setSubmitting(false);
  }
  return (
    <main className={classes.page}>
      <Nav showHeader={true} />
      <div className={classes.container}>
        <div
          className={classes.box}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
        >
          <div className={classes.innerBox1}>
            <form className={classes.form} onSubmit={onSubmit}>
              {error.length > 0 && <p className={classes.error}>{error}</p>}

              {successMsg.length > 0 && (
                <p className={classes.success}>Email Sent!</p>
              )}

              <label className={classes.label} htmlFor="yourName">
                Your Name
              </label>
              <input
                type="text"
                value={state.name}
                name="name"
                onChange={onChange}
              />

              <label className={classes.label} htmlFor="yourEmail">
                Your Email
              </label>
              <input
                type="email"
                value={state.email}
                name="email"
                onChange={onChange}
              />

              <label className={classes.label} htmlFor="message">
                Reason for Contact
              </label>
              <textarea
                className={classes.textArea}
                value={state.message}
                name="message"
                onChange={onChange}
              />

              <button type="submit" className={classes.btn}>
                {submitting ? <span>...</span> : <span>Send</span>}
              </button>
            </form>
          </div>
          <div className={classes.contactInfo}>
            <div className={classes.listItem}>(902) 210-5887</div>
            <div className={classes.listItem}>gregpmillr@gmail.com</div>
            <div className={classes.listItem}>Halifax, NS</div>
            <div className={classes.backgroundImage} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;

export const Head = () => <title>Contact Greg Miller</title>;
