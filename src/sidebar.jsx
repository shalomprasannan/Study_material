import { Card, Link, ListItem, ListItemIcon, ListItemText, MenuItem, MenuList } from '@mui/material';
import { Callbacks } from 'jquery';
import React from 'react';

class Sidebar extends React.Component {
    render() {
        return (
            <div >
                <MenuList>
                    
                <Link href="profile" className="Link" underline="none" >
                        <MenuItem>
                        
                            <ListItem>
                                <ListItemIcon></ListItemIcon>
                                <ListItemText>
                                    Home
                                </ListItemText>
                            </ListItem>
                            
                        </MenuItem>
                    </Link>
                    <MenuItem sx={{ mt: "8px" }}>
                        <ListItem>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText>Profile</ListItemText>
                        </ListItem>
                    </MenuItem>
                    <MenuItem sx={{ mt: "8px" }}>
                        <ListItem>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText>News</ListItemText>
                        </ListItem>
                    </MenuItem>
                </MenuList>
            </div>
        );
    }
}

export default Sidebar;