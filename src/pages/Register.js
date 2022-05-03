import React from 'react';
import Header from './Header';
import Player from './Player';

class Register extends React.Component {
    state = {
        players: [
            {
                name: 'Teemu',
                id: 1
            },
            {
                name: 'Moni',
                id: 2
            },
            {
                name: 'Pekka',
                id: 3
            },
            {
                name: 'Orushin',
                id: 4
            }
        ]
    };

    handleRemovePlayer = (id) => {
        this.setState((prevState) => {
            return {
                players: prevState.players.filter((p) => p.id !== id)
            };
        });
    };

    render() {
        return (
            <div className='scoreboard'>
                <Header title='Scoreboard' totalPlayers={this.state.players.length} />
                {this.state.players.map((player) => (
                    <Player
                        name={player.name}
                        id={player.id}
                        key={player.id.toString()}
                        removePlayer={this.handleRemovePlayer}
                    />
                ))}
            </div>
        );
    }
}

export default Register;
