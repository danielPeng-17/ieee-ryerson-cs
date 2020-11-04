 // add new events here
 const items = [
     
    {
        id: '12m3lf9dx0efsS0DF34ER5df',
        eventImg: require('../assets/events/coding-challenge-fall-2020/codingchallengeheader.png'),
        eventTitle: 'IEEE Ryerson CIC Coding Challenge',
        eventStartDate: '11.09.2020',
        eventEndDate: '11.23.2020',
        collab: false,
        misc: {
            pdf: null,
            images: {
                header: require('../assets/events/coding-challenge-fall-2020/codingchallengeheader.png'),
            },
            texts: {
                text1: `
                            IEEE Ryerson Computational Intelligence Chapter is proud to announce the IEEE Ryerson Competitive 
                            Coding Competition on November 28, 2020! This interactive competition will bring together programmers from 
                            all levels to learn and tackle coding challenges.
                        `,
                text2: 'We are excited to offer an event series leading up to the competition providing:',
                text3: '\n ● Workshops teaching fundamental programming skills',
                text4: '\n ● Opportunities for students to engage with each other',
                text5: '\n ● Practice to build collaboration skills with your team',
                text6: `
                            Of course, we will offer various prizes $$$ to encourage and motivate you throughout the events!!
                        `,
                text7: `
                            Interested? Visit @ieee_ryersoncic on Instagram for more information!
                        `,
                text8: `
                            *This project is supported financially by the Student Initiatives Fund. SIF is administered by the Department 
                            of Student Life on behalf of the Vice Provost Students, Ryerson University.
                        `
            },
            notes: null,
        }
    },
    {
        id: "1p23WaH11odo253jnFSPD23wLw254",
        eventImg: require('../assets/events/game-dev-summer-2020/unity-event-img.jpg'),
        eventTitle: 'Unity Game Development Workshop',
        eventStartDate: '07.27.2020',
        eventEndDate: '08.24.2020',
        collab: false,
        misc: {
            pdf: null,
            images: {
                header: require('../assets/events/game-dev-summer-2020/game-dev-demo.jpeg'),
            },
            texts: {
                text1: `
                            Our interactive workshop welcomes new and experienced programmers who are interested in 2D game development.  
                            This event hosted by IEEE Ryerson Computational Intelligence Chapter is sponsored by IEEE WIE and will provide 
                            the building blocks and best practices in developing a 2D level game including, creating a player, creating 
                            enemies, game loops, animations, and more!
                        `,
                text2: `
                            Our workshop is hosted in several sessions to give students time to digest the concepts taught. In our first session, 
                            we will review basic programming concepts, object-oriented programming, and introduce best 
                            practices working with C# in the Unity environment. The next session explores 
                            interfaces and intractability. Followed by the concept of game loops and scenes. Next, students will explore animations 
                            and the associated features in animating players and enemies. Finally in the last session, students will focus on polishing 
                            their 2D game.
                         `,
                text3: `
                         The host of this workshop is Steven Medeot, a 3rd-year Computer Science Student at Ryerson University. He has a 
                         background in Game Development, who completed the Game Programming curriculum at George Brown College along with a few 
                         years of experience working in this industry and enjoys developing his own games on the side. He strongly believes 
                         that creating a game that people can find joy in is a wonderful experience and wants to share some of the basic 
                         knowledge he has learned throughout the years.
                     `,
                text4: `
                            Students who finished the workshop got a chance to show off what they learned in a small competition. Feel free to take a look at
                            their projects on {<a href='https://itch.io/jam/ieeeryerson-cic-game-jam/entries'>itch.io</a>}. Or watch the video below.
                        `,
                text5: `--video--`,
               

            },
            notes: null,
            video: require( "../assets/events/game-dev-summer-2020/Winners2.mp4")
        }
        // overflow: this.state.overflow
    },
    {
        id: '17s78P3efe232fs425HdEs651y6r2',
        eventImg: require('../assets/events/scalable-deployment-of-ML-summer-2020/scalable-deployment-of-ML-poster.PNG'),
        eventTitle: 'Scalable Deployment of ML & Drone-base Search & Rescue',
        eventStartDate: '07.23.2020',
        eventEndDate: 'null',
        collab: true,
        misc: {
            pdf: require('../assets/events/scalable-deployment-of-ML-summer-2020/ieee scalable deployment of ML.pdf'),
            images: null,
            texts: null,
            notes: null
        }
    }


    // test data

    // {
    //     eventImg: 'https://picsum.photos/451/250',
    //     eventTitle: 'Event Name',
    //     eventStartDate: '07.27.2020',
    //     eventEndDate: '08.24.2020',
    //     time: {current: true, upcoming: false},
    //     collab: true
    // },
    // {
    //     eventImg: 'https://picsum.photos/451/250',
    //     eventTitle: 'Event Name',
    //     eventStartDate: '07.27.2020',
    //     eventEndDate: '08.24.2020',
    //     time: {current: false, upcoming: true},
    //     collab: false
    // },
    // {
    //     eventImg: 'https://picsum.photos/451/250',
    //     eventTitle: 'Event Name',
    //     eventStartDate: '07.27.2020',
    //     eventEndDate: '08.24.2020',
    //     time: {current: false, upcoming: false},
    //     collab: true
    // },
    // {
    //     eventImg: 'https://picsum.photos/451/250',
    //     eventTitle: 'Event Name',
    //     eventStartDate: '07.27.2020',
    //     eventEndDate: '08.24.2020',
    //     time: {current: false, upcoming: false},
    //     collab: false
    // },
    // {
    //     eventImg: 'https://picsum.photos/451/250',
    //     eventTitle: 'Event Name',
    //     eventStartDate: '07.27.2020',
    //     eventEndDate: '08.24.2020',
    //     time: {current: false, upcoming: true},
    //     collab: false
    // }
];

export default items;