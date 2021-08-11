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
        'https://matterapp.com/img/brett.jpg',
      favoriteColor: '#4F52B1',
      story:
        'At Intuit I was leading an entirely distributed team with daily group video chats. My manager gave me the feedback that my facial expressions were making them feel as if I thought they were stupid. I was totally unaware of non-verbal communication being a “thing” and I felt awful. After correcting the behavior, those team members are now some of my closest friends and colleagues.'
    }),
    TeamMember.create({
      firstName: 'Matthew',
      lastName: 'Eernisse',
      title: 'CTO',
      photoUrl:
        'https://matterapp.com/img/matthew.jpg',
      favoriteColor: '#F2A745',
      story:
        'There have been many times in my career when candid, actionable feedback would have made a bad situation better, or a good situation more awesome. When I started as a manager, I received feedback that my enthusiasm during conversation steamrolls over other people. Receiving ongoing feedback on this has made me a much better listener, and in turn more effective in my work.'
    }),
    TeamMember.create({
      firstName: 'Francesca',
      lastName: 'del Rosario',
      title: 'Design Strategist',
      favoriteColor: '#FF4369',
      photoUrl:
        'https://matterapp.com/img/francesca.jpg',
      story:
        'Early in my career, I was confused by feedback I received during a formal review. After debriefing with a close mentor, I realized my confusion didn’t stem from the feedback itself, but rather in its delivery. The feedback caught me by surprise. Since then, I’ve sought feedback proactively. This proactiveness has led me to grow in all aspects of my life, from personal development to career ownership.'
    }),
    TeamMember.create({
      firstName: 'Marc',
      lastName: 'Reisen',
      title: 'Founding Designer',
      favoriteColor: '#07BB87',
      photoUrl:
        'https://matterapp.com/img/marc.jpg',
      story:
        'Some of the best feedback I received was “you don’t have to do your work alone.” I was an individual contributor working on a large cross-team initiative. I failed, and we decided to stop working on it. I later learned that when someone asks you to do something, it doesn’t mean they are looking for you to be the sole contributor. Ask for their help.'
    })
  ]);
}
