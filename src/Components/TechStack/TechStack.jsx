import { ArrowUpward, Input, Label } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import TechStackstyle from '../styles/TechStack.css'
import {Grid} from '@material-ui/core';
import Stack from './Stack';
import { Typography, Card, CardMedia, CardActions, CardContent, CssBaseline, Container } from '@mui/material';
import { Chip } from '@mui/material';

const TechStack = () => {
 


  return (
      <div className='TechStack'>
          <div className="arrow-home">
            <Link to='#'><ArrowUpward className='arrow'/></Link>
          </div>

          <h1 className='Title' fontSize='2.5rem' > What I do</h1>
          
          
          <div className='BigGrid'>
                <Grid className='Grid' container justifyContent="center" spacing={4}  alignItems="center">
                  { Stack.map(( Stack ) => (
                                                      
                                                      <Grid item key={Stack.id} xs={12} sm={6} md={6} lg={6} >
                                                          
                                                          <div className="GridContainer">
                                                          <Container maxWidth="sm">
                                                              <Card elevation='3'>
                                                                    <div className="cardmediaimage">
                                                                    <CardMedia className='CardMedia'  image={Stack.img} title={Stack.name}/>
                                                                    </div>
                                                                      <CardContent>
                                                                          <Typography variant='h2' className='CardText' fontSize='35px' textAlign="center"> {Stack.name}</Typography>
                                                                          <div>   
                                                                          
                                                                                  <Typography  variant='subtitle2' textAlign="center" >
                                                                                  {Stack.tags.map( (tag)=> 
                                                                                    <Chip label={tag} />
                                                                                    )} 
                                                                                  </Typography>
                                                                                  {/* <CardActions disableSpacing className={classes.CardActions}></CardActions> */}
                                                                          </div>
                                                                      </CardContent>
                                                              </Card>
                                                            </Container>
                                                            </div>
                                                      </Grid>

                                                    
                                              
                                              )) 
                                            }

                </Grid>
      
                </div>
      </div>
   
  )
}

export default TechStack