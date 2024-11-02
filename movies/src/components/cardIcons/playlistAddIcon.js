import React from "react";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import IconButton from "@mui/material/IconButton";

const PlaylistAddIconComponent = ({ movie }) => {
  return (
    <IconButton aria-label="add to watchlist">
      <PlaylistAddIcon color="primary" />
    </IconButton>
  );
};

export default PlaylistAddIconComponent;