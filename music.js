const songs = [
    [
        "Lovers Rock",
        "TV Girl",
        "The French Exit",
        '../covers/FrenchExit.jpeg'
    ],
    [
        "Far Away",
        "Yebba",
        "Dawn",
        '../covers/Dawn.png'
    ],
    [
        "Diamonds",
        "Danger Incorporated",
        "Are You Afraid Of The Danger Boys?",
        '../covers/ayaf.jpeg'
    ],
    [
        "Show Me How",
        "Men I Trust",
        "Show Me How",
        '../covers/ShowMeHow.jpeg'
    ],
    [
        "Hooligan",
        "Baby Keem",
        "The Melodic Blue",
        '../covers/tmb.jpeg'
    ],
    [
        "No Opp Left Behind",
        "21 Savage",
        "Savage Mode II",
        '../covers/sm2.png'
    ],
    [
        "It Was A Good Day",
        "Ice Cube",
        "The Predator",
        '../covers/Tp.jpeg'
    ],
    [
        "Glue Song (feat. Clairo)",
        "beabadoobee",
        "Glue Song (feat. Clairo)",
        '../covers/glue.jpeg'
    ],
    [
        "WAIT FOR U (feat. Drake & Tems)",
        "Future",
        "I NEVER LIKED YOU",
        '../covers/inly.png'
    ],
    [
        "505",
        "Artic Monkeys",
        "Favourite Worst Nightmare (Standard Version)",
        '../covers/fwn.jpeg'
    ],
    [
        "I Wonder",
        "Kanye West",
        "Graduation",
        '../covers/grad.jpeg'
    ],
    [
        "Space Song",
        "Beach House",
        "Depression Cherry",
        '../covers/dep.jpeg'
    ],
    [
        "Chandelier",
        "Will Paquin",
        "Chandelier",
        '../covers/chand.jpeg'
    ],
    [
        "4EVER",
        "Clairo",
        "4EVER",
        '../covers/4ever.jpeg'
    ],
    [
        "Hoe Cakes",
        "MF DOOM",
        "MM...FOOD",
        '../covers/mmm.jpeg'
    ],
    [
        "Fine Whine (feat. Joe Fox, Future & M.I.A.)",
        "A$AP Rocky",
        "AT.LONG.LAST.A$AP",
        '../covers/ASAP.jpeg'
    ],
    [
        "Ghost Town",
        "Kanye West",
        "ye",
        '../covers/ye.jpeg'
    ],
    [
        "Mia & Sebastian's Theme",
        "Kim Bo",
        "A Piano Trip: La La Land",
        '../covers/mia.png'
    ]
];
const songsList = document.querySelector('.songsList');

songs.map((song) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    const span = document.createElement('span');
    span.innerHTML = `Title: ${song[0]} - Artist: ${song[1]} - Album: ${song[2]}`;
    img.src = song[3];
    img.classList.add("albumCover");

    li.prepend(img);
    li.appendChild(span);
    songsList.appendChild(li);
});