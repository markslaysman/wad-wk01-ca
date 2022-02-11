import React from 'react';

export default class NavBar extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <nav class="my-navbar">
                        <ul>
                            <li class="active"><a href="#">Main Page</a></li>
                            <li><a href="#">Page 2</a></li>
                            <li><a href="#">Page 3</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );        
    }
}