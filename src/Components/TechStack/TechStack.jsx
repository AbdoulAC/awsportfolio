import { ArrowUpward, Input, Label } from '@mui/icons-material'
import React from 'react'
import TechStackstyle from '../styles/TechStack.css'
import {Grid} from '@mui/material';
import Stack from './Stack';
import {motion} from 'framer-motion';
import { Typography, Card, CardMedia, CardActions, CardContent, CssBaseline, Container } from '@mui/material';
import { Chip } from '@mui/material';
import '../styles/TechStack.css'


const TechStack = () => {

  return (
      <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
      className='TechStack' id='TechStack'>
          

          <h1 className='Title' fontSize='2.5rem' > What I do</h1>
          
          
          <div className='BigGrid'>
                <Grid className='Grid' container justifyContent="center" spacing={4}  alignItems="center">
                  { Stack.map(( Stack ) => (
                                                      
                                                      <Grid item key={Stack.id} xs={12} sm={6} md={6} lg={6} >
                                                          
                                                          <div className="GridContainer">
                                                          <Container maxWidth="sm">
                                                              <Card elevation='4' >
                                                                    <div className="cardmediaimage">
                                                                    <CardMedia className='CardMedia'  image={Stack.img} title={Stack.name}/>
                                                                    </div>
                                                                      <CardContent>
                                                                          <Typography variant='h2' color='primary' className='CardText' fontSize='35px' textAlign="center"> {Stack.name}</Typography>
                                                                          <div>   
                                                                          
                                                                                  <Typography  variant='subtitle2' textAlign="center"  >
                                                                                  {Stack.tags.map( (tag)=> 
                                                                                    <Chip color='secondary' label={tag} />
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
      </motion.div>
   
  )
}

export default TechStack