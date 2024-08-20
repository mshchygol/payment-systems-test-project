import { useState } from "react";
import SideBarMenu from "./SideBarMenu";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header>
            <SideBarMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)}/>
            <div className="header-container">
                <div>
                    <button className="menu-button" onClick={() => setIsMenuOpen(true)}>
                        <img src="/img/menu-icon.svg" alt="sidebar menu icon image"/>
                    </button>
                    <img src="/img/site-logo.svg" alt="site logo image"/>
                </div>
                <div className="icons-wrapper">
                    <img className="icon" src="/img/search-icon.svg" alt="search icon image"/>
                    <img className="icon" src="/img/gift-icon.svg" alt="gift icon image"/>
                    <img className="icon" src="/img/notification-icon.svg" alt="notification icon image"/>
                    <div className="action-block">
                        <span className="action-block__balance">125.02 $</span>
                        <div className="action-block__promotion">13%</div>
                        <img src="/img/down-chevron-icon.svg" alt="down chevron icon image"/>
                        <div className="action-block__plus">
                            <img src="/img/plus-icon.svg" alt="plus icon image"/>
                        </div>
                    </div>
                    <img src="/img/avatar.svg" alt="user avatar image"/>
                </div>
            </div>
        </header>
    )
}