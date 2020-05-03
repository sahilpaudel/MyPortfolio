import React from "react";
import Grid from "@material-ui/core/Grid";

import { works } from "../../utility/workData";
import { Card, makeStyles, Avatar, CardHeader, CardMedia, CardContent, Typography } from "@material-ui/core";
import LocationIcon from '@material-ui/icons/LocationOn';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginTop: 10,
    [theme.breakpoints.down('md')]: {
      maxWidth: "100%"
    }
  },
  workHistory: {
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
    fontWeight: "bold"
  },
  workPosition: {
    fontWeight: "bold",
    margin: 0
  },
  location: {
    fontStyle: "italic"
  },
  domain: {
    fontStyle: "italic"
  },

  locationContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
}));

const Work = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h6" className={classes.workHistory}>
        <b>Work History:</b>
      </Typography>
      <Grid container>
        {
          works.map(work => (
            <Grid item xs={12} sm={12} md={6} lg={4} key={work.name}>
              <a href={work.website} target="_blank" rel="noopener noreferrer" className={classes.link}>
                <Card className={classes.root}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="company-name" className={classes.avatar}>
                        {
                          work.name.substring(0, 1)
                        }
                      </Avatar>
                    }
                    title={work.name}
                    subheader={work.year}
                  />
                  <CardMedia
                    component="img"
                    className={classes.media}
                    image={work.image}
                    title={work.name}
                  />
                  <CardContent>
                    <Typography variant="body1" className={classes.workPosition}>
                      {
                        work.role
                      }
                    </Typography>
                    <Typography variant="caption" className={classes.domain}>
                      {
                        work.domain
                      }
                    </Typography>
                    <br />
                    <br />
                    <div className={classes.locationContainer}>
                      <LocationIcon style={{ fontSize: 18 }} />
                      <Typography variant="caption" className={classes.location}>
                        {work.location}
                      </Typography>
                    </div>
                  </CardContent>
                </Card>
              </a>
            </Grid>
          ))
        }
      </Grid>
    </React.Fragment>
  );
}

export default Work;