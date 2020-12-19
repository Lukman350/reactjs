import React from 'react';

class Title extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Aplikasi react pertamaku",
            subtitle: "Dibuat dengan semangat!"
        };
    }
    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>{this.state.subtitle}</h3>
            </div>
        );
    }
}

export default Title;