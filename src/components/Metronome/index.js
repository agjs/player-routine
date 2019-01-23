import React from 'react';

import ProMetronome from 'react-pro-metronome';

class Metronome extends React.Component {
  constructor() {
    super();
    this.state = {
      enabled: false,
      bpm: 60,
    };
    this.bpmInputRef = React.createRef();
  }
  toggle = () => {
    this.setState({ enabled: !this.state.enabled });
  };
  render() {
    const { enabled, bpm } = this.state;
    return (
      <div className="pr-metronome">
        <ProMetronome
          bpm={bpm}
          subdivision={4}
          soundEnabled={true}
          soundPattern="2121212121212121"
          isPlaying={enabled}
          render={(_props, state) => (
            <div>
              {state.qNote}/{state.subNote}
            </div>
          )}
        />
        <input
          value={bpm}
          onChange={event => this.setState({ bpm: parseInt(event.currentTarget.value, 10) })}
          ref={this.bpmInputRef}
          type="number"
        />
        <button onClick={this.toggle}>{enabled ? 'Stop' : 'Start'}</button>
      </div>
    );
  }
}

export default Metronome;
