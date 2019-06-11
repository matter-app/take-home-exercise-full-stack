const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite3'
});

class TeamMember extends Sequelize.Model {}
TeamMember.init(
  {
    // attributes
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    story: {
      type: Sequelize.STRING,
      allowNull: false
    },
    favoriteColor: {
      type: Sequelize.STRING
    },
    photoUrl: {
      type: Sequelize.STRING
    }
  },
  {
    sequelize,
    modelName: 'TeamMembers'
    // options
  }
);

module.exports = {
  sequelize,
  TeamMember
};
