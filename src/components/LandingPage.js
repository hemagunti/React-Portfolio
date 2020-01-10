import React, { Component } from 'react'
//import {Link} from 'react-router-dom';
import { Grid, Cell } from 'react-mdl';
import '../App.css';
export default class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100 %', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="../avatar.jpg" alt="avatar" className="avatar-img" />
                        <div className="banner-text">
                            <h1>Frontend Developer</h1>
                            <hr />
                            <p>HTML/CSS | Javascript | Bootstrap | React | NodeJs | Express | MySQL | Angular | VueJS | GIT</p>
                            <div className="social-links">
                                {/* LinkedIn*/}
                                <a href="https://www.linkedin.com/in/hema-gunti-78b21253/" rel="noopener no referrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                {/* Github*/}
                                <a href="https://github.com/hemagunti" rel="noopener no referrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                {/* LinkedIn*/}
                                <a href="https://www.linkedin.com/in/hema-gunti-78b21253/" rel="noopener no referrer" target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true" />
                                </a>
                                {/* LinkedIn*/}
                                <a href="https://www.linkedin.com/in/hema-gunti-78b21253/" rel="noopener no referrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>

                    </Cell>
                </Grid>

            </div>

        )
    }
}
