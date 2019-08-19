const { TeamMember } = require('../backend/model');

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
      firstName: 'Matthew',
      lastName: 'Eernisse',
      title: 'CTO',
      photoUrl:
        'https://matterapp.com/static/mde_cto_matter-0b4c9c077275efce8eef42a0b2749cf6.jpg',
      favoriteColor: '#F2A745',
      story:
        'There have been many times in my career when candid, actionable feedback would have made a bad situation better, or a good situation more awesome. When I started as a manager, I received feedback that my enthusiasm during conversation steamrolls over other people. Receiving ongoing feedback on this has made me a much better listener, and in turn more effective in my work.'
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
    })
  ]);
}
