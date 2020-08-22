import React from 'react';
import '../styling/sidebar.css';
import SideOption from './sidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from "../dataLayer";

export default function Sidebar() {
    const [{ playlists }, dispatch] = useDataLayerValue();

    return (
        <div className="sidebar">
            <img className="sidebar-logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify_Logo"/>

            <SideOption Icon={HomeIcon} title="Home" />
            <SideOption Icon={SearchIcon} title="Search" />
            <SideOption Icon={LibraryMusicIcon} title="Your Library" />

            <br/>
            <strong className="sidebar-title">PLAYLIST</strong>
            <hr/>

            {playlists?.items?.map(playlist=>(
                <SideOption title={playlist.name}/>
            ))}
        </div>
    )
}
