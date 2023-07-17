import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {
  Box,
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MovieList = () => {
  const [movieCharacterList, setMovieCharacterList] = useState([]);
  const [characterName, setCharacterName] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(10000);
  const navigate = useNavigate();

  const handleMovieListApi = async () => {
    let movieCharacterData = await fetch(
      `https://rickandmortyapi.com/api/character?page=${pageNumber}`
    );
    movieCharacterData = await movieCharacterData.json();
    const filteredData = movieCharacterData?.results?.filter((vv) => {
      return vv?.name
        ?.toLowerCase()
        .includes(`${characterName?.toLowerCase()}`);
    });
    setMovieCharacterList(filteredData);
    setTotalPages(movieCharacterData?.info?.pages);
  };

  const handleDecrease = () => {
    setPageNumber((pageNumber) => pageNumber - 1);
    if (characterName != "") {
      setCharacterName("");
    }
  };
  const handleIncrease = () => {
    setPageNumber((pageNumber) => pageNumber + 1);
    if (characterName != "") {
      setCharacterName("");
    }
  };

  useEffect(() => {
    handleMovieListApi();
  }, [pageNumber, characterName]);

  // useEffect(() => {
  // handleSearch()
  // }, [characterName])

  return (
    <div>
      <Box sx={{ background: "rgba(73, 128, 0, 0.588)" }}>
        <Typography variant="h4">All Characters</Typography>
        <input
          className="input"
          type="text"
          value={characterName}
          placeholder="search character by name"
          onChange={(e) => setCharacterName(e.target.value)}
          style={{
            width: "27vw",
            height: "6vh",
            border: "none",
            outline: "none",
            paddingRight: 5,
            marginBottom: 10,
            borderRadius: "5px",
            fontSize: "15px",
          }}
        ></input>
        <Box
          style={{
            float: "right",
            marginTop: "13px",
            display: "flex",
            gap: "10px",
          }}
        >
          <Button
            onClick={handleDecrease}
            disabled={pageNumber == 1}
            variant="outlined"
            color="secondary"
            sx={{ background: "yellow" }}
          >
            <ArrowBackIcon /> Prev
          </Button>
          <Button
            onClick={handleIncrease}
            disabled={pageNumber == totalPages}
            variant="outlined"
            color="secondary"
            sx={{ background: "yellow", mr: 3 }}
          >
            Next <ArrowForwardIcon />
          </Button>
        </Box>
      </Box>

      <Grid
        container
        spacing={3}
        sx={{
          mt: 1,
          backgroundImage:
            " linear-gradient(100deg,red,yellow,cyan,green,blue);",
        }}
      >
        {movieCharacterList?.map((vv) => {
          return (
            <Grid key={vv?.id} item xs={3}>
              <Card sx={{ maxWidth: "75%", ml: 3, borderRadius: "10px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="auto"
                    image={`${vv?.image}`}
                    alt="green"
                    onClick={() => navigate(`/movie/detail/${vv?.id}`)}
                  ></CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {vv?.name}
                    </Typography>
                    <Typography
                      sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}
                    >
                      <Typography variant="body1">Status </Typography>:{" "}
                      <Typography
                        variant="body1"
                        sx={{
                          color: `${
                            vv?.status == "Alive"
                              ? "rgba(0, 128, 0, 0.706)"
                              : "rgba(255, 0, 0, 0.915)"
                          }`,
                        }}
                      >
                        {vv?.status}
                      </Typography>{" "}
                    </Typography>
                    <Typography
                      sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}
                    >
                      <Typography variant="body1">Species </Typography>:{" "}
                      <Typography
                        variant="body1"
                        sx={{
                          color: `${
                            vv?.species == "Human"
                              ? "blue"
                              : "rgba(255, 0, 0, 0.915)"
                          }`,
                        }}
                      >
                        {vv?.species}
                      </Typography>{" "}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default MovieList;
