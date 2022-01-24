import React from "react";
import PropTypes from "prop-types";
import "./TeamMemberForm.css";
import MatterEmptyAvatar from "../../assets/matter_empty_avatar.svg";
import Input from "../Input";
import Textarea from "../Textarea";
import Button from "../Button";

class TeamMemberForm extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      memberObj: {}
    };
  }

  static defaultProps = {
    photoUrl: MatterEmptyAvatar,
    story: null
  };

  render() {
    const {
      errors,
      name,
      photoUrl,
      handleSubmit,
      handleChange,
      handleCancel,
      data,
      story
    } = this.props;
    console.log(errors);
    return (
      <div className="container">
        <header>
          <div className="avatar-container">
            <img className="avatar" src={photoUrl} alt={name} />
          </div>
          <form onSubmit={handleSubmit}>
            <Input
              error={errors.firstname}
              onChange={handleChange}
              value={data.firstname}
              name="firstname"
              placeholder="enter first name"
            />
            <Input
              error={errors.lastname}
              onChange={handleChange}
              value={data.lastname}
              name="lastname"
              placeholder="enter last name"
            />
            <Input
              error={errors.title}
              onChange={handleChange}
              value={data.title}
              name="title"
              placeholder="enter title"
            />
            <Textarea
              error={errors.story}
              onChange={handleChange}
              value={data.story}
              name="story"
              placeholder="enter your story"
            />
            <Input
              error={errors.favoriteColor}
              onChange={handleChange}
              value={data.favoriteColor}
              name="favoriteColor"
              placeholder="enter favorite color"
            />
            <Input
              onChange={handleChange}
              value={data.photoUrl}
              name="photoUrl"
              placeholder="enter photo url"
            />
            <div className="action-buttons">
              <Button variant="outline" onClick={handleCancel}>
                cancel
              </Button>
              <Button variant="primary" type="submit">
                submit
              </Button>
            </div>
          </form>
        </header>
        <div className="body">{story}</div>
      </div>
    );
  }
}

TeamMemberForm.propTypes = {
  errors: PropTypes.object,
  name: PropTypes.string,
  photoUrl: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  handleCancel: PropTypes.func,
  data: PropTypes.object,
  story: PropTypes.string
};

export default TeamMemberForm;
