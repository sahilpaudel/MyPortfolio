import React from "react";
import { Typography, makeStyles, Grid, Card, CardHeader, Avatar, CardContent, Divider } from "@material-ui/core";
import LocationIcon from '@material-ui/icons/LocationOn';

import { educations } from '../../utility/educationData';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '40vw',
    marginTop: 10,
    [theme.breakpoints.down('md')]: {
      maxWidth: "100%"
    }
  },
  educationHistory: {
    marginTop: 10,
    marginBottom: 5
  },
  link: {
    textDecoration: "none"
  },
  media: {
    height: 200
  },
  avatar: {
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    objectFit: "scale-down"
  },
  educationPosition: {
    fontWeight: "bold",
    margin: 0
  },
  location: {
    fontStyle: "italic"
  },
  locationContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  grade: {
    margin: 20,
    fontWeight: "bold"
  }
}));

const Education = () => {
  const classes = useStyles();

  return <React.Fragment>
    <Typography variant="h6" className={classes.educationHistory}>
      <b>Education:</b>
    </Typography>
    <Grid container>
      {
        educations.map(education => (
          <Grid item xs={12} sm={12} md={6} lg={6} key={education.name}>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="institution-name" className={classes.avatar}>
                    {
                      education.from.substring(0, 1)
                    }
                  </Avatar>
                }
                action={
                  <Typography className={classes.grade}>
                    {
                      education.grade
                    }
                  </Typography>
                }
                title={education.from}
                subheader={education.year}
              />
              <Divider />
              <CardContent>
                <Typography variant="body1" className={classes.educationPosition}>
                  {
                    education.name
                  }
                </Typography>
                <br />
                <div className={classes.locationContainer}>
                  <LocationIcon style={{ fontSize: 18 }} />
                  <Typography variant="caption" className={classes.location}>
                    {education.location}
                  </Typography>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))
      }
    </Grid>
  </React.Fragment>
}

export default Education;