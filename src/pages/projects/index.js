import React from "react";
import { makeStyles, Typography, Chip, Avatar } from "@material-ui/core";
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from "../../components/PanelUtility";
import { project } from "../../utility/projectData";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: 15,
  },
  year: {
    position: "absolute",
    right: 15
  },
  chip: {
    margin: "10px 10px 10px 0"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  contributionText: {
    marginTop: 10,
    fontWeight: "bold",
    textDecoration: "underline"
  },
  contribution: {
    marginTop: 5,
    fontSize: 13,
    wordSpacing: "-0.1em"
  },
  stackText: {
    marginTop: 10,
    fontWeight: "bold",
    textDecoration: "underline"
  },
  stack: {
    marginTop: 5
  },
  logo: {
    marginLeft: theme.spacing(1),
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  footer: {
    '& .MuiChip-root': {
      borderRadius: 0
    }
  }
}));

const Projects = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return <div className={classes.root}>
    {
      project.map((project, i) =>
        <ExpansionPanel
          square
          key={project.name}
          expanded={expanded === 'panel' + i}
          onChange={handleChange('panel' + i)} >
          <ExpansionPanelSummary aria-controls={`panel${i + 1}d-content`} id={`panel${i + 1}d-header`}>
            <Typography style={{fontWeight: "bolder"}}>{project.name}</Typography>
            <Avatar alt={project.logo} variant="rounded" src={project.logo} className={classes.logo}/>
            <Typography className={classes.year}>{project.year}</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
            <div>
              <Typography className={classes.contributionText}>Contribution:</Typography>
              <Typography className={classes.contribution}>
                {
                  project.contribution
                }
              </Typography>
            </div>
            <div>
              <Typography className={classes.contributionText}>Description:</Typography>
              <Typography className={classes.contribution}>
                {
                  project.description
                }
              </Typography>
            </div>
            <div className={classes.footer}>
              <Typography className={classes.stackText}>Tech Stack:</Typography>
              {
                project.stack.map((s, i) => <Chip key={i} label={s} variant="outlined" size="small" className={classes.chip} />)
              }
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>)
    }
  </div>
}

export default Projects;