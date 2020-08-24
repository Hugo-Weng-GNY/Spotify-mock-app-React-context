import React from 'react';
import '../styling/header.css';
import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "../dataLayer";

export default function Header () {
    const [{ user }, dispatch] = useDataLayerValue();
    return (
        <div className="header">
            <div className="header-left">
                <SearchIcon />
                <input placeholder="Search for Artist, Songs, or Podcasts"
                    type="text"/>
            </div>
            <div className="header-right">
                <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                <h4>{user?.display_name}</h4>
            </div>
        </div>
    )
}