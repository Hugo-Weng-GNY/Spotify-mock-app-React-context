import React from 'react';
import '../styling/sidebarOption.css';

export default function SideOption({ title, Icon}) {
    return(
        <div className="sidebar-option">
            {Icon && <Icon className="sidebar-option-icon" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}