import React from "react";
import { useDrawerStyles } from "./drawerStyles";
import {
  Drawer,
  List,
  ListItemText,
  ListItemIcon,
  ListItem
} from "@material-ui/core";

import { drawerOptions as data } from "../utility/drawerData";
import { Link } from "react-router-dom";

const WebDrawer = () => {
  const classes = useDrawerStyles();
  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{ paper: classes.drawerPaper }}
    >
      <div className={classes.drawerContainer}>
        <List>
          {data.map((item, index) => (
            <Link
              to={item.path}
              key={item.text}
              className={classes.link}
            >
              <ListItem button>
                <ListItemIcon>
                  <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default WebDrawer;
