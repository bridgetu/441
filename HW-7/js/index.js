// Where are we in the story? Intro (0), middle (1), end (2). Start at the beginning
var point_in_story = 0;

// each outcome
var outcomes = [
    {
        option: 1,
        text: [
            'You shell out the 50 euros for the ticket, happy that you won’t have the worry of getting caught and knowing that buying the pass is cheaper than paying the fee. You know you’ll feel better because you’re doing the “right” thing.',
            'A ticket-taker approaches you on the U-bahn, so you reach for your wallet, feeling justified in your decision to buy the ticket, only to realize that your pass is not in the special pocket on the exterior of your bag where you meant to place it earlier. You start to panic… did you drop it when you were meaning to place it back in your bag… did someone steal it out of your bag after they saw you place it in the pocket? Regardless, you are without a ticket and the ticket-taker is about to ask you for your ticket.',
        ],
        buttons: [
            {
                option: 'You run away.',
                outcome: [
                    'You end up falling down the stairs at the train station, break your ankle, are taken to the hospital, and spend the rest of the trip sitting on the couch while our friends are hitting the town without you.'
                ]
            },
            {
                option: 'You pay the fine.',
                outcome: [
                    'You reluctantly pay the 100 euro fine and are out 150 euros with no transport pass and have to sacrifice 2 nights of going clubbing.',
                    'On a night you are unfortunately forced to stay in because you can’t afford to go out, your friends meet your favorite DJ, Cashmere Cat, at the club and get to party backstage. And they get pictures. And you’re not there.'
                ]
            },
        ]
    },
    {
        option: 2,
        text: [
            'You’re willing to risk the consequences of having no ticket and getting caught if it means you can spend the 50 euros on something more exciting… plus you’re certain you won’t get caught and if you do you’ll just pull the “I’m American” card.',
            'You ride the bus no problem, and as you enter the U-banh you realize you have something stuck to the bottom of your shoe… you pull it off, look at it for a second, and realize it is a valid transport pass. What are the odds! But do you keep it for yourself, or do you do the “right thing” and turn it in and redeem yourself? KARMA!'
        ],
        buttons: [
            {
                option: 'You turn in the ticket.',
                outcome: 'When you arrive at the counter there is a handsome young man in a panic because he has dropped his pass… which is most likely the pass you found on the ground. When you present him with the pass he is so appreciative that he insists on exchanging information and buying you a drink while you’re in Berlin. How perfect.'
            },
            {
                option: 'You keep the found ticket.',
                outcome: 'You go on your way and spend your money living it up in Berlin.'
            }
        ]
    },
];

// Function to select which piece of content to reveal for the story
// Arguments:
//   section: which part of the layout is targeted? (e.g. 1 will reveal red flag, 2 will reveal yellow flag)
//   option: which path did you pick?
function revealStory(section, option) {

    var flag_color;

    switch(section) {
        case 1: 
            flag_color = 'german-red';
            break;
        case 2:
            flag_color = 'german-yellow';
            break;
        default:
            flag_color = '';
    }

    generateStorySection(option);

    var body = document.getElementsByTagName('body')[0];

    var story = document.createElement('div');
    story.classList.add(flag_color);
    story.innerText = 'cool beans';
    body.appendChild(story);
    point_in_story += 1;
}

// Function to take arrays and create either paragraphs or buttons, depending on context
function generateStorySection(option) {
    
}