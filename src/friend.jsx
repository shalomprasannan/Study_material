import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import Layout from './layout'
import { Button, Card } from '@mui/material';

class Friends extends React.Component {
    render() {
        return (
            <Layout>
                <Grid container sx={{height:"calc(100% - 8rem)"}}>
                    <Card sx={{ml:"0px", mr:"0px"}}>
                <Grid container sx={{ justifyContent: "center", alignItems: "stretch", height: "100%", pt:"2rem" }}>
                    <Grid item xs={6} md={3} container direction="column" sx={{ height:"80%"}}>
                        <Grid item sx={{height:"2rem"}}>
                            <Button variant="contained">Friends</Button>
                        </Grid>
                        <Grid item sx={{ overflowY: "scroll", height: "calc(100% - 2rem)" }}>
                            {[...new Array(32)]
                                .map(
                                    () => <p>shalom</p>,
                                )
                                }
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={3} container direction="column" sx={{justifyContent:"space-around", alignItems:"center"}}>
                        <p>Levels</p>
                        <div>
                            Stranger 10 <br/>
                            friends 15 <br/>
                            Best Friend 3 <br/>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <p>Generate OTP link</p>
                    </Grid>
                </Grid>
                </Card>
                </Grid>
            </Layout>
        );
    }
}

export default Friends;