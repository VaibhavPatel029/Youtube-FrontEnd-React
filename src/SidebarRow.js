import React from 'react'
import './SidebarRow.css';

function SidebarRow({selected, Icon, titel}) {
    return (
        <div className={`sidebarRow ${selected && "selected"}` }>
            <Icon className="sidebarRow__icon" />
            <h2 className="sidebarRow__titel"> {titel} </h2>
        </div>
    )
}

export default SidebarRow
