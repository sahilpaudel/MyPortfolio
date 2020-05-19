import React from "react";

import { Typography, makeStyles, Chip } from "@material-ui/core";
import { skills } from "../../utility/skillData";
import { profiles } from "../../utility/profileData";

const useStyles = makeStyles(theme => ({
  root: {
    "& a": {
      textDecoration: "none",
      color: "#fff"
    }
  },
  aboutMeText: {
    margin: 10
  },
  aboutMeContainer: {
    width: "75%",
    marginLeft: 10
  },
  aboutMeContent: {
    margin: 10,
    textAlign: "center",
    wordBreak: "break-word"
  },
  heart: {
    color: "red",
    fontSize: 20
  },
  skillsText: {
    margin: 10,
    fontWeight: "bold"
  },
  chip: {
    margin: 5
  },
  profile: {
    textAlign: "center"
  },
  profileContainer: {
    margin: 10
  }
}));

const AboutMe = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.aboutMeText}>
        <b>About Me</b>
      </Typography>
      <div className={classes.aboutMeContainer}>
        <Typography variant="caption" className={classes.aboutMeContent}>
          Backend Engineer building scalable web applications. With enthusiasm
          to learn everything possible in the field, currently exploring
          frontend development with React. My passion is to contribute in any
          way possible for the growth of engineering culture around me (mostly
          within me).
        </Typography>
      </div>
      <Typography variant="caption" className={classes.aboutMeContent}>
        I <span className={classes.heart}>❤</span> Java, Spring Boot, NodeJS, React &
        Elixir.
      </Typography>
      <Typography variant="h6" className={classes.skillsText}>
        Skills:
      </Typography>
      <div>
        {skills.map(skill => (
          <Chip key={skill} className={classes.chip} label={skill} />
        ))}
      </div>
      <Typography variant="h6" className={classes.skillsText}>
        Profiles:
      </Typography>
      <div className={classes.profileContainer}>
        {profiles.map(Profile => (
          <a href={Profile.url} key={Profile.name} target="_blank" rel="noreferrer noopener">
            <span className={classes.profile}>
              <Profile.icon /> {Profile.name} |{" "}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
