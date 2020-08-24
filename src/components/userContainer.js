import React from 'react';
import '../styling/container.css';
import Header from './header';
import { useDataLayerValue } from "../dataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./songRow";

export default function Container({ spotify}){
    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    const playPlaylist = (id) => {
        spotify.play({
                context_uri: `spotify:playlist:5TOyYIWbGM5G0wtJyMKxSZ`,
            })
            .then(() => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };

    const playSong = (id) => {
        spotify.play({
                uris: [`spotify:track:${id}`],
            })
            .then(() => {
                spotify.getMyCurrentPlayingTrack().then((r) => {
                    dispatch({
                        type: "SET_ITEM",
                        item: r.item,
                    });
                    dispatch({
                        type: "SET_PLAYING",
                        playing: true,
                    });
                });
            });
    };

    return (
        <div className="container">
            <Header spotify={spotify}/>
            <div className="container-info">
                <img src={discover_weekly?.images[0].url} alt=""/>
                <div className="container-info-text">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="container-songs">
                <div className="container-icons">
                    <PlayCircleFilledIcon className="container-shuffle" onClick={playPlaylist} />
                    <FavoriteIcon fontSize="large"/>
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map((item, index)=>(
                    <SongRow key={index} playSong={playSong} track={item.track}/>
                ))}
            </div>
        </div>
    )
}