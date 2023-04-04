import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  //IconHouse,
  //IconHouseActive,
  IconClassroom,
  IconClassroomActive,
  IconSchedule,
  IconScheduleActive
} from "../Svg";

import { useMediaQuery } from "@material-ui/core";
import styles from "./styles";

const useStyles = makeStyles(styles);

const Sidebar = ({isSidebar}) => {
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
      IconActive: <IconScheduleActive />,
      Icon: <IconSchedule />
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
      IconActive: <IconClassroomActive />,
      Icon: <IconClassroom />
    }
  ];

  const classes = useStyles();

  return (
    <div className={`${classes.root}`} style={{display: !isSidebar && matches ? "none" : "flex"}}>
      <ul className={`${classes.menu}`}>
        {navItems.map(({ to, name, Icon, IconActive }, index) => (
          <li key={index}>
            <Link
              className={`${classes.linkMenu} ${classes.liMenu} ${
                history.location.pathname.includes(to) ||
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
