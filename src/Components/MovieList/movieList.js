import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import { Box, Button, CardActionArea, CardContent, CardMedia, Input, TextField, Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

const MovieList = () => {
    const [movieCharacterList, setMovieCharacterList] = useState(null)
    const [characterName,setCharacterName] = useState("")
    const navigate = useNavigate();

     const handleMovieListApi = async() => {
        let movieCharacterData = await fetch("https://rickandmortyapi.com/api/character");
        movieCharacterData = await movieCharacterData.json()
        const filteredData = movieCharacterData?.results?.filter(vv => { return vv?.name?.toLowerCase().includes(`${characterName?.toLowerCase()}`)})
            setMovieCharacterList(filteredData)
        console.log(filteredData)
    }
    

    useEffect(() => {
    handleMovieListApi() 
    }, [characterName])
   
  return (
      <div >
          <Box sx={{background:'rgba(73, 128, 0, 0.588)'}}>
          <Typography variant="h4">All Characters</Typography>
          <Box sx={{mt:1,display:'flex',justifyContent:"center",alignContent:'center',gap:1}}>
          <input className='input' type="text"  value = {characterName} placeholder='search character name' onChange={e=>setCharacterName(e.target.value)} style={{ width: "27vw", height: "5vh",border:"none",outline:"none",paddingRight:5 }}></input>
          <Button  variant='outlined' sx={{backgroundColor:"Black"}}  >Search Character</Button>
          </Box>
          </Box>
          <Grid container spacing={3} sx={{mt:1, backgroundImage:" linear-gradient(100deg,red,yellow,cyan,green,blue);"}}>
          
                  {movieCharacterList?.map((vv) => {
                      return  <Grid key = {vv?.id} item xs={3} >
                          <Card sx={{ maxWidth: "75%" ,ml:3 ,borderRadius:"10px"}}>
                          <CardActionArea>
                              <CardMedia
                                  component="img"
                                      height='auto'  
                                  image= {`${vv?.image}`}
                                      alt="green"
                                      onClick = {()=>navigate(`/movie/detail/${vv?.id}`)}
                                  ></CardMedia>
                                  <CardContent >
                                  <Typography gutterBottom variant = "h5" component = "div">{vv?.name}</Typography>
                                      <Typography sx={{ display: 'flex', gap: 1 }}><Typography variant="body1" >Status </Typography>: <Typography variant="body1" sx={{ color: `${vv?.status == "Alive" ? "rgba(0, 128, 0, 0.706)" : "rgba(255, 0, 0, 0.915)"}` }}>{vv?.status}</Typography> </Typography>
                                      <Typography  sx={{display:'flex', gap:1}}><Typography variant = "body1" >Species </Typography>: <Typography variant = "body1" sx={{color:`${vv?.species=="Human"?"blue":"rgba(255, 0, 0, 0.915)"}`}}>{vv?.species}</Typography> </Typography>
                                  </CardContent>
                                 
                          </CardActionArea>
                      </Card>
                      </Grid>
                          
                  })} 
          </Grid>
      </div>
  )
}

export default MovieList