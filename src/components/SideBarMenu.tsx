import { SIDEBAR_MENU_ITEMS } from "@/helpers/data";
import { useState } from "react";

interface SideBarMenuProps {
    open: boolean;
    onClose: () => void;
};

export default function SideBarMenu({ open, onClose }: SideBarMenuProps) {
    return (
        <div className={`sidebar-menu ${open ? 'sidebar-menu--open' : ''}`}>
            <div className="sidebar-menu__header">
                <img src="/img/site-logo.svg" alt="site logo image"/>
                <button className="close-button" onClick={onClose}>
                    <img src="/img/close-icon.svg" alt="close action icon image"/>
                </button>
            </div>
            <ul className="sidebar-menu__items">
                {SIDEBAR_MENU_ITEMS.map((item) => <li key={item}>{item}</li>)}
            </ul>
        </div>
    )
}