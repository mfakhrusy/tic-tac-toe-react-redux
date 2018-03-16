/* eslint react/no-did-mount-set-state: 0 */
import React from 'react';

class BoardGame extends React.Component {
  constructor() {
    super();
    this.state = {
      isGameLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isGameLoading: false });
    }, 500);
  }

  render() {
    const children = this.state.isGameLoading ? (
      <p>Game Loads!</p>
    ) : (
      <p>Game Starts!</p>
    );

    return (
      <div className="board-game">
        {children}
      </div>
    );
  }
}

export default BoardGame;
