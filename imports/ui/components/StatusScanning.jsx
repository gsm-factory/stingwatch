import React from 'react';
import Factoid from './Factoid.jsx';
import LearnButton from './LearnButton.jsx';
import NavBar from './NavBar.jsx';
import Radar from './Radar.jsx';
import TweetButton from './TweetButton.jsx';

export default class StatusPage extends React.Component {
  render() {
    return (
      <div>
        <NavBar toggleGeekMode={this.props.toggleGeekMode} />
        <Radar />
        <div className="container">
          <Factoid />
          <LearnButton />
          <TweetButton
            setComposingTweet={this.props.setComposingTweet}
            loggedIn={this.props.loggedIn} />
        </div>
      </div>
    );
  }
}