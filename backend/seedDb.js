const { TeamMember } = require('./model');

/* WARNING THIS WILL DROP THE CURRENT DATABASE */
seed();

async function seed() {
  // create table
  await TeamMember.sync({ force: true });
  // insert data
  await Promise.all([
    TeamMember.create({
      firstName: 'Brett',
      lastName: 'Hellman',
      title: 'CEO',
      photoUrl:
        'https://matterapp.com/static/brett_ceo_matter-3d493ed53676c4a47eff2fa7db62b9e7.jpg',
      favoriteColor: '#4F52B1',
      story:
        'At Intuit I was leading an entirely distributed team with daily group video chats. My manager gave me the feedback that my facial expressions were making them feel as if I thought they were stupid. I was totally unaware of non-verbal communication being a “thing” and I felt awful. After correcting the behavior, those team members are now some of my closest friends and colleagues.'
    }),
    TeamMember.create({
      firstName: 'Kerem',
      lastName: 'Kazan',
      title: 'Founding Engineer',
      favoriteColor: '#FF4369',
      photoUrl:
        'https://matterapp.com/static/kerem_engineer-2d704d5a7d6d50a86981011e9ab0f22f.jpg',
      story:
        'While engaging in the art of communication, I find myself committing a million micro-failures every single day. I am finally aware of both my strengths and weaknesses thanks to the brutally honest feedback I have received. Realizing where I could improve was the first step in becoming a better version of myself. Feedback is just the right tool for that.'
    }),
    TeamMember.create({
      firstName: 'Marc',
      lastName: 'Reisen',
      title: 'Founding Designer',
      favoriteColor: '#07BB87',
      photoUrl:
        'https://matterapp.com/static/marc_designer_matter-057a413b583510e01e55fbfab25cd1e8.jpg',
      story:
        'Some of the best feedback I received was “you don’t have to do your work alone.” I was an individual contributor working on a large cross-team initiative. I failed, and we decided to stop working on it. I later learned that when someone asks you to do something, it doesn’t mean they are looking for you to be the sole contributor. Ask for their help.'
    }),
    TeamMember.create({
      firstName: 'Michael',
      lastName: 'Hueter',
      title: 'Software Engineer',
      favoriteColor: '#F2A645',
      photoUrl:
        'https://matterapp.com/static/michael_matter-07991b3a8ef84e6b82c674781f179ac7.png',
      story:
        'Feedback has been a huge catalyst for growth for me. At my first job as a developer, I received candid, direct feedback that my debugging skills needed to drastically improve to stay on the team. This spurred me to reinvent my approach and be extremely mindful of my technique and bad habits. A year later I was promoted to technical lead of the team.'
    })
  ]);
}
