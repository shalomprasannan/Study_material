import { Chip, FilledInput, Grid, IconButton, InputAdornment, LinearProgress } from '@mui/material';
import React, { Component } from 'react';
import Layout from './layout';
import SearchIcon from '@mui/icons-material/Search';
import BubbleChartIcon from '@mui/icons-material/BubbleChart';
import RemoveIcon from '@mui/icons-material/Remove';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import $ from 'jquery';

class Friends extends React.Component {

    constructor(props){
        super(props);
        this.state={
            list:[]
        }
        this.fetchFriends=this.fetchFriends.bind(this)
    }

    fetchFriends(){
        $.get("/api/fetchFriends")
        .then((list)=>{
            this.setState({list})
        })
    }
    
    componentDidMount(){
        this.fetchFriends();
    }

    render() { 
        return (
            <Layout>
                <Grid container sx={{justifyContent:"space-between", alignItems:"center", padding:"2rem", height:"100%", overflowY: "scroll"}} >
                    <Grid item container xs={12} md={3}  direction="column" sx={{height:"100%", border:"solid 1px #ddd", borderRadius:"5px", textAlign:"center"}}>
                        <Grid item container 
                            sx={{justifyContent:"center", 
                                    alignItems:"center",
                                    height:"4rem", borderBottom:"solid 1px #ddd"}} >
                                        <div variant="contained" >Friends <IconButton onClick={this.fetchFriends}> <SearchIcon/> </IconButton></div>
                            </Grid>
                        <Grid item 
                            sx={{overflowY: "scroll", height:"calc(100% - 4rem)"}}>
                            {this.state.list.map(
                                                (friend, i) => 
                                                    <div style={{display:"flex", borderBottom:"solid 1px #ddd"}}>
                                                        <div style={{marginLeft:"2rem"}} key={i}> {friend} </div>
                                                        <IconButton sx={{ml:"auto","&:hover":{color:"#FE6B8B"}}}> <BubbleChartIcon /> </IconButton>
                                                        <IconButton sx={{"&:hover":{color:"#FE6B8B"}}}> <RemoveIcon /> </IconButton>
                                                    </div>,
                                            )
                                        }
                            </Grid>
                    </Grid>
                    <Grid item container xs={12}  md={3}>
                        <Grid item pb="1rem">Levels:</Grid>   
                        <Grid item container direction="column" sx={{border:"1px solid #ddd",  ml:"1rem"}}>
                        {["Just Introduced", "Friends", "Best Friends", "Lover", "Soul mate"]
                                            .map(
                                                (category) => 
                                                <Grid item container sx={{borderBottom:"1px solid #ddd", alignItems:"center"}}>
                                                    <p style={{margin:"1rem"}}>{category}</p>
                                                    <Chip sx={{ml:"auto", mr:"1rem"}} label="4" color="primary" />
                                                </Grid>
                                            )
                                            }
                        </Grid>
                        <Grid item container direction="column">
                            <Grid item pb="1rem">
                                Your activity:
                            </Grid>
                            <Grid item ml="1rem">
                                <LinearProgress variant="determinate" value={5} sx={{height:"5px", borderRadius:"2px"}}/> 5%
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}  md={3} sx={{height:"100%"}}>
                        Generate OTP Link :
                    <FilledInput id="outlined-basic" value="Outlined" variant="outlined"  
                        endAdornment={<InputAdornment position="start" sx={{borderLeft:"1px solid #555"}} ><IconButton ><ContentCopyIcon/></IconButton> </InputAdornment>} />
                    </Grid>
                </Grid>
            </Layout>
        );
    }
}
 
export default Friends;