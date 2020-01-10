import React, { Component } from 'react';
import '../App.css';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return (
            <div className="resume-data">
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src="../avatar.jpg" alt="avatar" style={{ height: '200px' }} />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Hema Gunti</h2>
                        <h4 style={{ color: 'grey' }}>Frontend Developer</h4>
                        <hr style={{ borderTop: '3px solid darkblue', width: '50%' }} />
                        <p>A self-motivated Frontend developer with 1+ year experience in Start-up environment . A good team player with Agile mindset and willingness to step in unknown technologies to help and be part of organizations transformation journey.</p>
                        <hr style={{ borderTop: '3px solid darkblue', width: '50%' }} />
                        <h5>Address</h5>
                        <p>Tukshøjen, Herlev</p>
                        <h5>Phone</h5>
                        <p>+45 31881383</p>
                        <h5>Email</h5>
                        <p>hema.gunti02@gmail.com</p>
                        <h5>Web</h5>
                        <p>mywebsite.com</p>
                        <hr style={{ borderTop: '3px solid darkblue', width: '50%' }} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2018}
                            endYear={2018}
                            schoolName="HackYourFuture"
                            schoolDescription="Teaches Web develpment course of 7 months with technologies 
                            HTML,CSS,Javascript,React,NodeJS,MySQL"
                        />

                        <Education
                            startYear={2005}
                            endYear={2008}
                            schoolName="Osmania University"
                            schoolDescription="Holy Jesus & Mary P.G.College"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2019}
                            endYear={'present'}
                            jobName="Frontend Developer"
                            company="Whyser"
                        />
                        <Experience
                            startYear={2018}
                            endYear={2018}
                            jobName="Frontend Developer"
                            company="Wiredelta"
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills
                            skill="Javascript"
                        progress={80}    
                        />
                        <Skills
                            skill="ReactJs"
                            progress={80}
                        />
                        <Skills
                            skill="VueJS"
                            progress={70}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={60}
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Resume;