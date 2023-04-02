import React from "react";
import Nav from "../components/nav";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  page: {
    overflow: "auto",
    height: "100%",
    display: "flex",
    flexFlow: "row nowrap",
    paddingLeft: "10%",
    "@media (max-width: 950px)": {
      flexFlow: "column nowrap",
      paddingLeft: "0%",
    },
    "& ul li": {
      margin: "5px 0px",
    },
  },
  container: {
    boxSizing: "border-box",
    overflow: "auto",
    marginLeft: "50px",
    padding: "0px 30px",
    "@media (max-width: 950px)": {
      marginLeft: "0px",
    },
  },
  companyInfo: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
  },
  contactList: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    marginBottom: "0px",
    "& li": {
      margin: "0px 15px !important",
    },
    "& :first-child": {
      listStyleType: "none",
    },
  },
  h2: {
    marginTop: "60px",
    marginBottom: "10px",
  },
  skillList: {
    display: "flex",
    flexFlow: "row wrap",
  },
  positionTitle: {
    fontWeight: "600",
  },
});

const Resume = () => {
  const classes = useStyles();

  return (
    <main className={classes.page}>
      <Nav showHeader={true} />
      <div className={classes.container}>
        <h1 style={{ textAlign: "center" }}>GREG MILLER</h1>

        <ul className={classes.contactList}>
          <li>Halifax, NS</li>
          <li>(902) 210 5887</li>
          <li>gregpmillr@gmail.com</li>
          <li>Github</li>
        </ul>

        <h2 className={classes.h2}>PROFESSIONAL SUMMARY</h2>

        <p>
          With 7 years of experience, I'm a passionate full-stack developer who
          strives to exceed expectations when building web systems. My technical
          proficiency spans backend development, cloud infrastructure, frontend
          development, technical documentation, and team leadership while
          thriving in highly-collaborative environments. I look forward to
          contributing my skills to your team's success!
        </p>

        <h2 className={classes.h2}>SKILLS</h2>

        <div className={classes.skillList}>
          <ul>
            <li>Golang, SQL, Javascript, Git, Java</li>
            <li>API Development, Postman</li>
            <li>RDBMS, NoSQL</li>
            <li>Various caching methods</li>
            <li>Event-driven systems, PubSub, microservices</li>
            <li>Elasticsearch, Metabase, SSRS, SSIS, SSAS</li>
          </ul>

          <ul>
            <li>React, Nextjs, Gatsbyjs, Laravel</li>
            <li>CI/CD</li>
            <li>Slack</li>
            <li>Docker</li>
            <li>AWS</li>
            <li>Project Management / Jira</li>
            <li>PII / PHI Data Handling</li>
          </ul>
        </div>

        <h2 className={classes.h2}>WORK EXPERIENCE</h2>

        <p>
          <b>Backend Developer</b>
        </p>
        <p className={classes.companyInfo}>
          <span>
            <b>Inkblot therapy</b> - Toronto, ON
          </span>{" "}
          <span>01/2022 - Present</span>
        </p>
        <ul>
          <li>
            Oversee Tranquility’s development to maintain security, privacy, and
            access controls.
          </li>
          <li>Event sourcing audit logs using Elasticsearch.</li>
          <li>Access controls (RBAC, ABAC) using the Casbin Go library.</li>
          <li>
            Optimization with pprof and Go’s data race detector to find race
            conditions in the PubSub message broker.
          </li>
          <li>
            New hire training overhaul for frontend and backend developers,
            including a different interview strategy, onboarding documentation,
            and 30-60-90 day plans.
          </li>
          <li>
            B2B White labelling using feature flags to control features shown to
            groups of users.
          </li>
        </ul>

        <hr style={{ marginTop: "40px", marginBottom: "40px" }} />

        <p>
          <b>Full-Stack Developer</b>
        </p>
        <p className={classes.companyInfo}>
          <span>
            <b>ReelData</b> - Halifax, NS
          </span>{" "}
          <span>03/2021 - 06/2022</span>
        </p>
        <ul>
          <li>
            Simple marketing web application built using Gatsby, Heroku, and
            AWS.
          </li>
          <li>
            Worked with designers for UI/UX incremental development and fixes.
          </li>
          <li>CI/CD pipelines.</li>
        </ul>

        <hr style={{ marginTop: "40px", marginBottom: "40px" }} />

        <p>
          <b>Full-Stack Developer / Lead Developer</b>
        </p>
        <p className={classes.companyInfo}>
          <span>
            <b>Tranquility Online</b> - Halifax, NS
          </span>{" "}
          <span>05/2017 - 01/2022</span>
        </p>
        <ul>
          <li>
            Oversee frontend, backend development, and cloud infrastructure to a
            successful acquisition.
          </li>
          <li>API development, React frontend development, AWS.</li>
          <li>Custom scalable PubSub and chat using web sockets.</li>
          <li>CMS and educational progression system.</li>
          <li>
            Stripe payment system to create a flexible payment system to handle
            B2C and B2B customers.
          </li>
          <li>Plan matching algorithms and handle the development of one.</li>
          <li>Security, PHI, and PII handling with two PIAs and a TRA</li>
        </ul>

        <hr style={{ marginTop: "40px", marginBottom: "40px" }} />

        <p>
          <b>Teacher's Assistant & Marker</b>
        </p>
        <p className={classes.companyInfo}>
          <span>
            <b>Dalhousie University</b> - Halifax, NS
          </span>{" "}
          <span>01/2017 - 04/2018</span>
        </p>
        <ul>
          <li>
            Exercises in Server-side scripting, including PHP, SQL, database
            design and management, website security, HTTP protocols, REST
            services, and tools for managing a website application.
          </li>
          <li>
            TA and marker for mobile computing, including Android development,
            design patterns, Volley, and Firebase.
          </li>
          <li>Marker for assignments and labs.</li>
          <li>Exam proctoring.</li>
        </ul>

        <hr style={{ marginTop: "40px", marginBottom: "40px" }} />

        <p>
          <b>Business Intelligence Developer (Co-op)</b>
        </p>
        <p className={classes.companyInfo}>
          <span>
            <b>Emera Energy</b> - Halifax, NS
          </span>{" "}
          <span>05/2016 - 09/2017</span>
        </p>
        <ul>
          <li>
            Use of SSRS, SSIS, and SSAS to gather business insights for energy
            traders to make more informed decisions.{" "}
          </li>
          <li>
            Processed data captured via pipeline sensors and third-party
            vendors.
          </li>
          <li>Heavy SQL-based development (~1k lines per day).</li>
        </ul>

        <hr style={{ marginTop: "40px", marginBottom: "40px" }} />

        <p>
          <b>Website Developer (Co-op)</b>
        </p>
        <p className={classes.companyInfo}>
          <span>
            <b>NSCC Print Shop</b> - Halifax, NS
          </span>{" "}
          <span>02/2015 - 2016</span>
        </p>
        <ul>
          <li>
            Streamlining the process of old and current print jobs through a
            Laravel web app.
          </li>
          <li>MySQL database to collect user information.</li>
        </ul>

        <h2 className={classes.h2}>EDUCATION</h2>

        <p>
          <b>Bachelor: </b> Applied Computer Science
        </p>
        <p className={classes.companyInfo}>
          <span>
            <b>Dalhousie University</b> - Halifax, NS
          </span>
          <span>09/2016 - 05/2020</span>
        </p>

        <p>
          <b>Diploma: </b> Database Application Development
        </p>
        <p className={classes.companyInfo}>
          <span>
            <b>NSCC Institute of Technology</b> - Halifax, NS
          </span>
          <span>09/2014 - 06/2016</span>
        </p>

        <br />
        <br />
        <br />
      </div>
    </main>
  );
};

export default Resume;

export const Head = () => <title>Greg Miller's Resume</title>;
