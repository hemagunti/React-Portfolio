import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

export default class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Hema Gunti</h2>
                        <img src="../avatar.jpg" alt="avatar" style={{ height: "250px" }} />
                        <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>A self-motivated Frontend developer with 1+ year experience in Start-up environment . A good team player with Agile mindset and willingness to step in unknown technologies to help and be part of organizations transformation journey.</p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-phone-square" are-hidden="true" />
                                        +45 31881383
                                    </ListItemContent>
                                </ListItem>

                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-envelope" are-hidden="true" />
                                        hema.gunti02@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-skype" are-hidden="true" />
                                        HEMAGUNTI
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontSize: '25px', fontFamily: 'Anton' }}>
                                        <i className="fa fa-linkedin" are-hidden="true" />
                                        linkedin.com/in/hema-gunti-78b21253
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
