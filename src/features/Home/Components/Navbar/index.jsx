import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isShowMenu, setIsShowMenu] = useState(false);

    return (
        <header>
            <a href="#" className="logo">
                Zalo
            </a>

            <input type="checkbox" id="menu-bar" />
            <label
                for="menu-bar"
                onClick={() => setIsShowMenu(!isShowMenu)}
                className="menu-bar"
            >
                {isShowMenu ? <CloseOutlined /> : <MenuOutlined />}
            </label>

            <nav className="navbar">
                <Link to='/account/registry'>Đăng ký</Link>
                <Link to='/account/login'>Đăng nhập</Link>
            </nav>
        </header>
    )
}

export default Navbar
