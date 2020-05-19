import React from "react";
import {
  Card,
  CardMedia,
  makeStyles,
  CardContent,
  Typography,
  Button
} from "@material-ui/core";
import MailIcon from "@material-ui/icons/MailOutline"

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
  },
  hireMe: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    fontSize: 12,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    padding: '0 30px',
    textTransform: 'capitalize',
  },
  hireMeParent: {
    [theme.breakpoints.down("md")]: {
      display: 'flex', 
      justifyContent: 'center'
    }
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
            <div className={classes.hireMeParent}>
              <Button
                startIcon={<MailIcon />}
                className={classes.hireMe}
                size="small"
                onClick={() => window.location.href = 'mailto:sahilpaudel@yahoo.in'}>
                Hire Me
            </Button>
            </div>
          </CardContent>
        </div>
      </Card>
    </React.Fragment>
  );
};

export default UserInfoCard;
