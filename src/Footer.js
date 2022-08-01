import React from "react";
import PlayCircleOutlinedIcon from "@mui/icons-material/PlayCircleOutlined";
import SkipPreviousOutlinedIcon from "@mui/icons-material/SkipPreviousOutlined";
import SkipNextOutlinedIcon from "@mui/icons-material/SkipNextOutlined";
import ShuffleOutlinedIcon from "@mui/icons-material/ShuffleOutlined";
import RepeatOutlinedIcon from "@mui/icons-material/RepeatOutlined";
import VolumeDownOutlinedIcon from "@mui/icons-material/VolumeDownOutlined";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";
import "./Footer.css";
import { Grid, Slider } from "@mui/material";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src="https://upload.wikimedia.org/wikipedia/commons/4/45/Replused_EP_Original_Cover_Album.png" alt="" />
      <div className="footer__songInfo">
            <h4>One</h4>
            <p>Day</p>
          </div>
      </div>
      <div className="footer__center">
        <ShuffleOutlinedIcon className="footer__green" />
        <SkipPreviousOutlinedIcon className="footer__icon" />
        <PlayCircleOutlinedIcon fontSize="large" className="footer__icon"/>
        <SkipNextOutlinedIcon className="footer__icon"/>
        <RepeatOutlinedIcon className="footer__green"/>
      </div>
      <div className="footer__right">
      <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayOutlinedIcon />
          </Grid>
          <Grid item>
            <VolumeDownOutlinedIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
