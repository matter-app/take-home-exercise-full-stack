import React from "react";
import axios from "axios";
import TeamMember from "../TeamMember";
import TeamMemberForm from "../TeamMemberForm";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      team: [],
      loading: true,
      showForm: false
    };
  }

  async componentDidMount() {
    try {
      await this.fetchInitialData();
    } catch (error) {
      // try again after half a second if fails due to race condition
      console.log("retrying initial data request...");
      setTimeout(async () => {
        await this.fetchInitialData();
      }, 500);
    }
  }

  async fetchInitialData() {
    const response = await axios.get("/team");
    this.setState({
      team: response.data,
      loading: false,
      newMember: {
        firstname: "",
        lastname: "",
        title: "",
        story: "",
        favoriteColor: "",
        photoUrl: ""
      }
    });
  }

  showForm = () => {
    this.setState({ showForm: !this.state.showForm });
  };

  handleChange = event => {
    this.setState({
      newMember: {
        ...this.state.newMember,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const newMember = {
      firstname: this.state.newMember.firstname,
      lastname: this.state.newMember.lastname,
      title: this.state.newMember.title,
      story: this.state.newMember.story,
      favoriteColor: this.state.newMember.favoriteColor,
      photoUrl: this.state.newMember.photoUrl.length
        ? this.state.newMember.photoUrl
        : `https://api.adorable.io/avatars/285/random`
    };

    if (this.validateForm()) {
      axios.post("http://localhost:3001/team", newMember).then(res => {
        console.log(res.data);
      });

      this.setState({
        newMember: {
          firstname: "",
          lastname: "",
          title: "",
          story: "",
          favoriteColor: "",
          photoUrl: ""
        },
        showForm: false
      });
      this.fetchInitialData();
    }
  };

  handleCancel = () => {
    this.setState({
      newMember: {
        firstname: "",
        lastname: "",
        title: "",
        story: "",
        favoriteColor: "",
        photoUrl: ""
      },
      showForm: false,
      errors: {}
    });
  };

  validateForm() {
    let newMember = this.state.newMember;
    let errors = {};
    let formIsValid = true;

    if (!newMember["firstname"]) {
      formIsValid = false;
      errors["firstname"] = "*Please enter your first name.";
    }

    if (typeof newMember["firstname"] !== "undefined") {
      if (!newMember["firstname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["firstname"] = "*Please enter alphabet characters only.";
      }
    }

    if (!newMember["lastname"]) {
      formIsValid = false;
      errors["lastname"] = "*Please enter your last name.";
    }

    if (typeof newMember["lastname"] !== "undefined") {
      if (!newMember["lastname"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["lastname"] = "*Please enter alphabet characters only.";
      }
    }

    if (!newMember["title"]) {
      formIsValid = false;
      errors["title"] = "*Please enter your title.";
    }

    if (typeof newMember["title"] !== "undefined") {
      if (!newMember["title"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["title"] = "*Please enter alphabet characters only.";
      }
    }

    if (!newMember["story"]) {
      formIsValid = false;
      errors["story"] = "*Please enter your story.";
    }

    if (typeof newMember["story"] !== "undefined") {
      if (!newMember["story"].match(/^[a-zA-Z0-9,.!? ]*$/)) {
        formIsValid = false;
        errors["story"] = "*Please enter alphabet characters only.";
      }
    }

    if (!newMember["favoriteColor"]) {
      formIsValid = false;
      errors["favoriteColor"] = "*Please enter your favorite color.";
    }

    if (typeof newMember["favoriteColor"] !== "undefined") {
      if (!newMember["favoriteColor"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["favoriteColor"] = "*Please enter alphabet characters only.";
      }
    }

    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    const { loading, team, showForm } = this.state;
    if (loading) {
      return <h1>Loading...</h1>;
    }
    const errors = this.state.errors ? this.state.errors : {};
    return (
      <div className="app">
        <div className="team-grid" />
        {team.map(member => (
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
        {showForm ? (
          <TeamMemberForm
            data={this.state.newMember}
            handleSubmit={this.handleSubmit}
            handleChange={this.handleChange}
            handleCancel={this.handleCancel}
            errors={errors}
          />
        ) : (
          <TeamMember
            id="new"
            name="Join us!"
            title="New Teammate"
            onClick={() => this.showForm()}
          />
        )}
      </div>
    );
  }
}

export default App;
