import React from 'react';
import '../styling/sidebarOption.css';

export default function SideOption({ title, Icon}) {
    return(
        <div className="sidebar-option">
            <p>{title}</p>
        </div>
    )
}