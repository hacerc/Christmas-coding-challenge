import React from 'react';

const Header = (/*props*/ { title, propFunction, logFunction, prop3 }, a, b, c) => {
    // console.log(props);
    // const { title, prop1, prop2, prop3 } = props;
    return (
        <header class="app-header">
            <div className="logo" onClick={propFunction}>
                <h1>{title}</h1>
            </div>
            <nav>
                <ul>
                    <li onClick={() => logFunction("This argument was sent by the child component")}><a href="">Home</a></li>
                    <li><a href="">My Profile</a></li>
                    <li><a href="">Logout</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;