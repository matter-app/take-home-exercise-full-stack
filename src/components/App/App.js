import React from 'react';
import axios from 'axios';
import TeamMember from '../TeamMember';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      loading: true
    };
  }

  async componentDidMount() {
    try {
      await this.fetchInitialData();
    } catch (error) {
      // try again after half a second if fails due to race condition
      console.log('retrying initial data request...');
      setTimeout(async () => {
        await this.fetchInitialData();
      }, 500);
    }
  }

  async fetchInitialData() {
    const response = await axios.get('/team');
    this.setState({
      team: response.data,
      loading: false
    });
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="app">
        <div className="team-grid" />
        {this.state.team.map(member => (
          <TeamMember
            key={member.id}
            name={`${member.firstName} ${member.lastName}`}
            title={member.title}
            photoUrl={member.photoUrl}
            story={member.story}
            favoriteColor={member.favoriteColor}
          />
        ))}
        {/* Make this new team member link to your form! */}
        <TeamMember id="new" name="Join us!" title="New Teammate" />
      </div>
    );
  }
}

export default App;
