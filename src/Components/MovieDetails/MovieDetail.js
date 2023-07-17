import React, { useEffect, useState } from "react";
import {
  Box,
  CardActionArea,
  CardMedia,
  Typography,
  Grid,
  Card,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const MovieDetail = () => {
  const [movieCharacterList, setMovieCharacterList] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleMovieDetailListApi = async () => {
    let movieCharacterData = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    movieCharacterData = await movieCharacterData.json();
    setMovieCharacterList(movieCharacterData);
  };

  useEffect(() => {
    handleMovieDetailListApi();
  }, [id]);

  return (
    <div>
      <Box sx={{ background: "rgba(73, 128, 0, 0.588)" }}>
        <ArrowBackOutlinedIcon
          onClick={() => navigate(-1)}
          color="secondary"
          fontSize="large"
          sx={{ float: "left", ml: 2 }}
        />
        <Typography variant="h4">{movieCharacterList?.name}</Typography>
      </Box>
      <Grid
        container
        spacing={3}
        sx={{
          mt: 1,
          backgroundImage:
            " linear-gradient(100deg,blue,green,cyan,yellow,red)",
        }}
      >
        <Grid item xs={3}>
          <Card sx={{ maxWidth: "100%", ml: 3, mb: 3, borderRadius: "10px" }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="100%"
                image={`${movieCharacterList?.image}`}
                alt="green"
              ></CardMedia>
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{ pl: 4 }}>
            <Typography sx={{ display: "flex", gap: 4 }}>
              <Typography variant="h6">Status </Typography>:{" "}
              <Typography
                variant="body1"
                sx={{
                  color: `${
                    movieCharacterList?.status == "Alive"
                      ? "rgba(0, 128, 0, 0.706)"
                      : "rgba(255, 0, 0, 0.915)"
                  }`,
                }}
              >
                {movieCharacterList?.status}
              </Typography>{" "}
            </Typography>
            <Typography sx={{ display: "flex", gap: 4 }}>
              <Typography variant="h6">Species </Typography>:{" "}
              <Typography
                variant="body1"
                sx={{
                  color: `${
                    movieCharacterList?.species == "Human"
                      ? "blue"
                      : "rgba(255, 0, 0, 0.915)"
                  }`,
                }}
              >
                {movieCharacterList?.species}
              </Typography>{" "}
            </Typography>
            <Typography sx={{ display: "flex", gap: 4 }}>
              <Typography variant="h6">Gender </Typography>:{" "}
              <Typography variant="body1">
                {movieCharacterList?.gender}
              </Typography>{" "}
            </Typography>
            <Typography sx={{ display: "flex", gap: 4 }}>
              <Typography variant="h6">No of Episodes </Typography>:{" "}
              <Typography variant="body1">
                {movieCharacterList?.episode?.length}
              </Typography>{" "}
            </Typography>
            <Typography sx={{ display: "flex", gap: 4 }}>
              <Typography variant="h6">Location </Typography>:{" "}
              <Typography variant="body1">
                {movieCharacterList?.location?.name}
              </Typography>{" "}
            </Typography>
            <Typography sx={{ display: "flex", gap: 4 }}>
              <Typography variant="h6">Created At </Typography>:{" "}
              <Typography variant="body1">
                {movieCharacterList?.created?.split("T")?.[0]}
              </Typography>{" "}
            </Typography>
            <Typography sx={{ display: "flex", gap: 4 }}>
              <Typography variant="h6">Origin </Typography>:{" "}
              <Typography variant="body1">
                {movieCharacterList?.origin?.name}
              </Typography>{" "}
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default MovieDetail;
