import React from 'react';
import '../styling/sidebar.css';
import SideOption from './sidebarOption'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <img className="sidebar-logo" src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="Spotify_Logo"/>

            <SideOption title="Home" />
            <SideOption title="Search" />
            <SideOption title="Your Library" />
        </div>
    )
}
