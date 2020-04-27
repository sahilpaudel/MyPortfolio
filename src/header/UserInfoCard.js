import React from "react";
import {
  Card,
  CardMedia,
  makeStyles,
  CardContent,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column"
    }
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  cover: {
    margin: 10,
    width: "20%",
    [theme.breakpoints.down("md")]: {
      width: "100%"
    }
  },
  ul: {
    marginTop: 0
  }
}));

const UserInfoCard = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardMedia
          component="img"
          className={classes.cover}
          image="sahilpaudel.jpg"
          title="Sahil Paudel Rocks"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              Sahil Paudel
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              @Software Developer
            </Typography>
            <ul className={classes.ul}>
              <Typography variant="caption" color="textSecondary">
                <li>Coding & Living in Bengaluru, India</li>
              </Typography>
              <Typography variant="caption" color="textSecondary">
                <li>3 years of experience as a Developer</li>
              </Typography>
              <Typography variant="caption" color="textSecondary">
                <li>
                  Passionate about building scalable products and also open
                  source technology enthusiast
                </li>
              </Typography>
              <Typography variant="caption" color="textSecondary">
                <li>Contact: email: sahilpaudel@yahoo.in / tel: 9876996015</li>
              </Typography>
            </ul>
          </CardContent>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default UserInfoCard;
