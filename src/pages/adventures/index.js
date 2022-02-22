import React from 'react';
import { Avatar, Card, CardContent, CardHeader, Divider, Grid, makeStyles, Typography } from '@material-ui/core';

import { adventures } from '../../utility/adventureData';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '40vw',
        marginTop: 10,
        [theme.breakpoints.down('md')]: {
            maxWidth: "100%"
        }
    },
    adventureHistory: {
        marginTop: 10,
        marginBottom: 5
    },
    avatar: {
        backgroundColor: "#f0f0f0",
        fontWeight: "bold",
        objectFit: "scale-down"
    },
    locationContainer: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
}));

const Adventures = () => {
    const classes = useStyles();

    return <React.Fragment>
        <Typography variant="h6" className={classes.adventureHistory}>
            <b>Adventure:</b>
        </Typography>
        <Grid container>
            {
                adventures.map(adventure => (
                    <Grid item xs={12} sm={12} md={6} lg={6} key={adventure.name}>
                        <Card className={classes.root}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="institution-name" className={classes.avatar}>
                                        {
                                            adventure.to.substring(0, 1)
                                        }
                                    </Avatar>
                                }
                                title={adventure.to}
                                subheader={adventure.year}
                            />
                            <Divider />
                            <CardContent>
                                <div className={classes.locationContainer}>
                                    {
                                        <adventure.iframe />
                                    }
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))
            }
        </Grid>
    </React.Fragment>
}

export default Adventures