import { Button, Card, createTheme, Grid } from '@mui/material';
import React, { Component } from 'react';
import Layout from './layout';
import { ThemeProvider } from '@emotion/react';
import { pink, blue } from '@mui/material/colors';
import  {makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    rooter: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      color: 'white',
      height:48,
      padding: '0 30px',
      '&:hover':{
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
    
    topBorder:{
        borderRadius: 3,
        overflow: "hidden"
    }
  });

const Friends = ()=> {
    const classes = useStyles();

        return (
            <Layout>
                <Grid container sx={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Grid item xs={8} sx={{height:"calc(100% - 4rem)", mt:"2rem", mb:"2rem"}}>
                    <Card sx={{display:"flex", height: "100%", width:"100%" }} elevation={4}>
                        <Grid container sx={{ height: "80%", width: "100%", alignItems: "center", justifyContent: "space-between", textAlign: "center" }}>
                            {/*Friend List scrollable*/}
                            <Grid item className="bingo" xs={12} md={4} container direction="column" sx={{ height: "100%" }} className={classes.topBorder}>
                                <Grid item container className={classes.rooter}
                                        sx={{justifyContent:"center", alignItems:"center"}} >
                                    <div variant="contained" >Friends</div>
                                </Grid>
                                <Grid item sx={{ overflowY: "scroll", height: "calc(100% - 4rem)" }}>
                                    {[...new Array(23)]
                                        .map(
                                            () => <p>shalom</p>,
                                        )
                                    }
                                </Grid>
                            </Grid>

                            <Grid item xs={12} md={4}>shalom1</Grid>
                            <Grid item xs={12} md={4}>shalom2</Grid>
                        </Grid>
                    </Card>
                    </Grid>
                </Grid>
            </Layout>
        );
    }

export default Friends;