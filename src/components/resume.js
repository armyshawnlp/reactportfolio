import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://i.imgur.com/Be27BVM.png"
                                alt="avatar"
                                style={{height: '300px'}}
                                />
                        </div>
                        <h2 style={{paddingTop: '2em'}}>Shawn Patton</h2>
                        <h4 style={{color: 'grey'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <p>a lot of words</p>
                        <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
                        <h5>Address</h5>
                        <p>Houston, TX</p>
                        <h5>Email</h5>
                        <p>shawn_patton@outlook.com</p>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>

                    
                    <Education
              startYear={2012}
              endYear={2018}
              schoolName="University of Houston"
              schoolDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
               />
            
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2005}
              endYear={2010}
              jobName="United States Army"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />
              <Experience
                startYear={2012}
                endYear={2016}
                jobName="Shell Network Analyst"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />

                    

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;