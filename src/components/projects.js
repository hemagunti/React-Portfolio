
import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardText, Button, CardMenu, IconButton } from 'react-mdl';
import '../App.css';
export default class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0
        };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center/cover' }}>React Project</CardTitle>
                        <CardText>This is react project one and more coming soon</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>codepen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center/cover' }}>React Project</CardTitle>
                        <CardText>This is react project one and more coming soon</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>codepen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://reactjs.org/logo-og.png) center/cover' }}>React Project</CardTitle>
                        <CardText>This is react project one and more coming soon</CardText>
                        <CardActions border>
                            <Button colored>Github</Button>
                            <Button colored>LiveDemo</Button>
                            <Button colored>codepen</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div><h1>This is react</h1></div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div><h1>This is VueJS</h1></div>
            )
        }
    }
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab}
                    onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Javascript</Tab>
                    <Tab>React</Tab>
                    <Tab>VueJS</Tab>
                    <Tab>Angular</Tab>
                    <Tab>NodeJS</Tab>
                    <Tab>Wordpress</Tab>

                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>

            </div>

        )
    }
}