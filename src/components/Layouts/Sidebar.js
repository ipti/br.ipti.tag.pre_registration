import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import cronogramaBlueSvg from "../../assets/images/cronograma-blue.svg";
import cronogramaGraySvg from "../../assets/images/cronograma-gray.svg";

import turmaGraySvg from "../../assets/images/classroom-gray.svg";
import turmaBlueSvg from "../../assets/images/classroom-blue.svg";

import { useMediaQuery } from "@material-ui/core";
import styles from "./styles";

import dotenv from 'dotenv';

dotenv.config();

const useStyles = makeStyles(styles);
const Sidebar = ({ isSidebar }) => {
  let history = useHistory();
  const matches = useMediaQuery('(max-width:600px)')
  const navItems = [
    // {
    //   to: "/",
    //   name: "Início",
    //   exact: true,
    //   IconActive: <IconHouseActive />,
    //   Icon: <IconHouse />
    // },
    {
      to: "/cronograma",
      name: "Cronograma",
      exact: false,
      isMatricula: true,
      IconActive: <img src={cronogramaBlueSvg} alt=""></img>,
      Icon: <img src={cronogramaGraySvg} alt=""></img>
    },
    // {
    //   to: "/escolas",
    //   name: "Escolas",
    //   exact: false,
    //   IconActive: <IconSchoolActive />,
    //   Icon: <IconSchool />
    // },
    {
      to: "/turmas",
      name: "Turmas",
      exact: false,
      isMatricula: process.env.REACT_APP_VERSION === "true",
      IconActive: <img src={turmaBlueSvg} alt=""></img>,
      Icon: <img src={turmaGraySvg} alt=""></img>
    }
  ];

  const classes = useStyles();

  return (
    <div className={`${classes.root}`} style={{ display: !isSidebar && matches ? "none" : "flex" }}>
      <ul className={`${classes.menu}`}>
      <p>SERVER_SIDE_ONLY_VAR: {process.env.REACT_APP_VERSION}</p>
        {navItems.map(({ to, name, Icon, IconActive, isMatricula }, index) => (
          <>
            {isMatricula ? <li key={index}>
              <Link
                className={`${classes.linkMenu} ${classes.liMenu} ${history.location.pathname.includes(to) ||
                    (history.location.pathname.length === 1 && index === 0)
                    ? classes.activeLink
                    : ""
                  }`}
                to={to}
              >
                <span className={`iconInactive ${classes.floatLeft}`}>
                  {Icon}
                </span>
                <span className={`iconActive ${classes.floatLeft}`}>
                  {IconActive}
                </span>
                <span className={classes.span}>{name}</span>
              </Link>
            </li> : null}
          </>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
