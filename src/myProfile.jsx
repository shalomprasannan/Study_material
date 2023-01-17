import { ThemeProvider } from '@emotion/react';
import { Avatar, Button, ButtonGroup, Card, createTheme, Grid, IconButton, Input } from '@mui/material';
import { pink, blue } from '@mui/material/colors';
import React, { Component } from 'react';
import Layout from './layout';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';


class MyProfile extends React.Component {
    state = {
        gender: true
    }


    render() {
        const theme = createTheme({
            palette: {
                primary: {
                    main: this.state.gender ? blue[700] : pink[400],
                },
            },
        });

        const { gender } = this.state
        return (
            <Layout>
                <Grid container sx={{ height: "100%", justifyContent: "center", alignItems: "center" }}>
                    <Grid item xs={11} sm={11} md={10} lg={8} sx={{ mb: "1rem" }}>
                        <Card sx={{ display: "flex" }} elevation={4}>
                            <Grid container sx={{ justifyContent: "center", alignItems: "stretch", mx: "1rem", my: "1rem" }} >
                                <Grid item container direction="column" xs={12} md={6} sx={{ alignItems: "center", alignContent: "center" }}>
                                    <Grid item xs>
                                        <IconButton sx={{ border: "inset" }}>
                                            <Avatar sx={{ height: "300px", width: "300px", fontSize: "10rem", pointerEvents: "none" }}
                                                src="./1637677854898.jpg"
                                            ></Avatar>
                                        </IconButton>
                                    </Grid>
                                    <Grid item xs>
                                        <Input placeholder="Bio" sx={{ maxWidth: "10rem", my: "1rem" }} />
                                    </Grid>
                                </Grid>
                                <Grid item container direction="column" xs={12} sm={10} md={6} sx={{ justifyContent: "space-evenly" }}>
                                    <Grid item container sx={{ justifyContent: "space-between" }}>
                                        <Grid item xs={6} pr="1rem">
                                            <Input placeholder="First Name" sx={{ mb: "1rem" }} />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Input placeholder="Last Name" sx={{ mb: "1rem" }} />
                                        </Grid>
                                    </Grid>
                                    <Input placeholder="Display Name" sx={{ mb: "1rem" }} />
                                    <Input placeholder="Email Id" sx={{ mb: "1rem" }} />
                                    <Input placeholder="Contact no." sx={{ mb: "1rem" }} />
                                    <ButtonGroup disableElevation>
                                        <ThemeProvider theme={theme}>
                                            <Button onClick={() => !gender && this.setState({ gender: true })}
                                                variant={gender ? "contained" : "outlined"}
                                                startIcon={<MaleIcon />}>
                                                male
                                            </Button>
                                            <Button onClick={() => gender && this.setState({ gender: false })}
                                                variant={!gender ? "contained" : "outlined"}
                                                endIcon={<FemaleIcon />}>
                                                female
                                            </Button>
                                        </ThemeProvider>
                                    </ButtonGroup>
                                    <Grid item container sx={{ width: "100%", justifyContent: "center" }}>
                                        <Button sx={{ width: "200px" }}> Update </Button>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
            </Layout>
        );
    }
}

export default MyProfile;