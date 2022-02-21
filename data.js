// Manually query for data, then convert via https://www.convertsimple.com/convert-json-to-javascript/
// 'https://nookipedia.com/w/api.php?action=cargoquery&format=json&tables=villager&fields=name,alt_name,id,image_url,species,personality,gender,birthday_month,birthday_day,sign,quote,phrase,clothing,nh'
// Data pulled on 02/20/22

let data = [
    {
      title: {
        name: "Ace",
        alt_name: "",
        id: "brd09",
        image_url: "https://dodo.ac/np/images/9/91/Ace_amiibo.png",
        species: "Bird",
        personality: "Jock",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "11",
        sign: "Leo",
        quote: "If you love something, let it go. Then chase it down. What were you thinking?",
        phrase: "ace",
        clothing: "Kung-Fu Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Admiral",
        alt_name: "",
        id: "brd06",
        image_url: "https://dodo.ac/np/images/e/ed/Admiral_NH.png",
        species: "Bird",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "January",
        birthday_day: "27",
        sign: "Aquarius",
        quote: "Only quitters give up.",
        phrase: "aye aye",
        clothing: "Hanten Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Agent S",
        alt_name: "",
        id: "squ05",
        image_url: "https://dodo.ac/np/images/a/a7/Agent_S_NH.png",
        species: "Squirrel",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "July",
        birthday_day: "2",
        sign: "Cancer",
        quote: "You gotta put the pedal to the metal!",
        phrase: "sidekick",
        clothing: "No. 2 Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Agnes",
        alt_name: "",
        id: "pig17",
        image_url: "https://dodo.ac/np/images/4/4e/Agnes_NH_Transparent.png",
        species: "Pig",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "21",
        sign: "Taurus",
        quote: "You reap what you sow.",
        phrase: "snuffle",
        clothing: "Striped Halter Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Aisle",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/2/27/Aisle_DnMe%2B.png",
        species: "Bear cub",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Capricorn",
        quote: "",
        phrase: "あーあ",
        clothing: "Blue Grid Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Al",
        alt_name: "",
        id: "gor08",
        image_url: "https://dodo.ac/np/images/c/c4/Al_NH.png",
        species: "Gorilla",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "18",
        sign: "Libra",
        quote: "Life is a buffet. Always go back for seconds.",
        phrase: "ayyyeee",
        clothing: "Athletic Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Alfonso",
        alt_name: "",
        id: "crd00",
        image_url: "https://dodo.ac/np/images/e/e4/Alfonso_NH.png",
        species: "Alligator",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "9",
        sign: "Gemini",
        quote: "Slow and steady wins the race.",
        phrase: "it'sa me",
        clothing: "Simple Parka",
        nh: "1"
      }
    },
    {
      title: {
        name: "Alice",
        alt_name: "",
        id: "kal01",
        image_url: "https://dodo.ac/np/images/e/e1/Alice_NH.png",
        species: "Koala",
        personality: "Normal",
        gender: "Female",
        birthday_month: "August",
        birthday_day: "19",
        sign: "Leo",
        quote: "Treat others as you would like to be treated.",
        phrase: "guvnor",
        clothing: "Striped Maxi Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Alli",
        alt_name: "",
        id: "crd01",
        image_url: "https://dodo.ac/np/images/8/8e/Alli_NH.png",
        species: "Alligator",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "November",
        birthday_day: "8",
        sign: "Scorpio",
        quote: "Think before you act.",
        phrase: "graaagh",
        clothing: "Leopard Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Amelia",
        alt_name: "",
        id: "pbr01",
        image_url: "https://dodo.ac/np/images/a/ab/Amelia_NH.png",
        species: "Eagle",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "November",
        birthday_day: "19",
        sign: "Scorpio",
        quote: "Pampering yourself is as important as food, water, and shelter!",
        phrase: "cuz",
        clothing: "Aran-Knit Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Anabelle",
        alt_name: "",
        id: "ant03",
        image_url: "https://dodo.ac/np/images/d/d8/Anabelle_NH.png",
        species: "Anteater",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "16",
        sign: "Aquarius",
        quote: "Dance like no one's watching!",
        phrase: "snorty",
        clothing: "Bold Muumuu",
        nh: "1"
      }
    },
    {
      title: {
        name: "Analog",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/b/be/Analog_DnMe%2B.png",
        species: "Penguin",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Aquarius",
        quote: "",
        phrase: "だもんで",
        clothing: "Spring Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Anchovy",
        alt_name: "",
        id: "brd02",
        image_url: "https://dodo.ac/np/images/e/ea/Anchovy_NH.png",
        species: "Bird",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "March",
        birthday_day: "4",
        sign: "Pisces",
        quote: "Why do today what you can put off until tomorrow?",
        phrase: "chuurp",
        clothing: "Yodel Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Angus",
        alt_name: "",
        id: "bul00",
        image_url: "https://dodo.ac/np/images/5/5f/Angus_NH.png",
        species: "Bull",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "April",
        birthday_day: "30",
        sign: "Taurus",
        quote: "Even strong bulls cry.",
        phrase: "macmoo",
        clothing: "Flame Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Anicotti",
        alt_name: "",
        id: "mus10",
        image_url: "https://dodo.ac/np/images/8/80/Anicotti_NH.png",
        species: "Mouse",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "24",
        sign: "Pisces",
        quote: "The walls have ears.",
        phrase: "cannoli",
        clothing: "Colorful Striped Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Ankha",
        alt_name: "",
        id: "cat19",
        image_url: "https://dodo.ac/np/images/5/56/Ankha_NH.png",
        species: "Cat",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "22",
        sign: "Virgo",
        quote: "All that glitters is not gold.",
        phrase: "me meow",
        clothing: "Palatial Tank Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Annalisa",
        alt_name: "",
        id: "ant08",
        image_url: "https://dodo.ac/np/images/f/f0/Annalisa_NH.png",
        species: "Anteater",
        personality: "Normal",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "6",
        sign: "Aquarius",
        quote: "Home is where the heart is.",
        phrase: "gumdrop",
        clothing: "Blossoming Kimono",
        nh: "1"
      }
    },
    {
      title: {
        name: "Annalise",
        alt_name: "",
        id: "hrs09",
        image_url: "https://dodo.ac/np/images/c/c4/Annalise_NH.png",
        species: "Horse",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "December",
        birthday_day: "2",
        sign: "Sagittarius",
        quote: "Let gossip go in one ear and out the other.",
        phrase: "nipper",
        clothing: "Bold Muumuu",
        nh: "1"
      }
    },
    {
      title: {
        name: "Antonio",
        alt_name: "",
        id: "ant01",
        image_url: "https://dodo.ac/np/images/d/d4/Antonio_NH.png",
        species: "Anteater",
        personality: "Jock",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "20",
        sign: "Libra",
        quote: "Always go for the burn!",
        phrase: "honk",
        clothing: "Bone Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Apollo",
        alt_name: "",
        id: "pbr00",
        image_url: "https://dodo.ac/np/images/0/0e/Apollo_NH_Transparent.png",
        species: "Eagle",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "4",
        sign: "Cancer",
        quote: "What goes up must come down.",
        phrase: "pah",
        clothing: "Flight Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Apple",
        alt_name: "",
        id: "ham01",
        image_url: "https://dodo.ac/np/images/5/57/Apple_NH.png",
        species: "Hamster",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "24",
        sign: "Libra",
        quote: "One rotten apple spoils the barrel.",
        phrase: "cheekers",
        clothing: "Marble-Dots Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Astrid",
        alt_name: "",
        id: "kgr05",
        image_url: "https://dodo.ac/np/images/d/d5/Astrid_NH.png",
        species: "Kangaroo",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "8",
        sign: "Virgo",
        quote: "The apple doesn't fall far from the tree.",
        phrase: "my pet",
        clothing: "Tee Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Audie",
        alt_name: "",
        id: "wol12",
        image_url: "https://dodo.ac/np/images/1/1b/Audie_NH.png",
        species: "Wolf",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "August",
        birthday_day: "31",
        sign: "Virgo",
        quote: "Be the kind of person your future self won't regret having been.",
        phrase: "foxtrot",
        clothing: "Tropical Muumuu",
        nh: "1"
      }
    },
    {
      title: {
        name: "Aurora",
        alt_name: "",
        id: "pgn00",
        image_url: "https://dodo.ac/np/images/c/c6/Aurora_NH_Transparent.png",
        species: "Penguin",
        personality: "Normal",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "27",
        sign: "Aquarius",
        quote: "Always keep your cool.",
        phrase: "b-b-baby",
        clothing: "Plover Cardigan",
        nh: "1"
      }
    },
    {
      title: {
        name: "Ava",
        alt_name: "",
        id: "chn05",
        image_url: "https://dodo.ac/np/images/c/cc/Ava_NH.png",
        species: "Chicken",
        personality: "Normal",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "28",
        sign: "Taurus",
        quote: "Early to bed, early to rise.",
        phrase: "beaker",
        clothing: "Checkered Jumper Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Avery",
        alt_name: "",
        id: "pbr05",
        image_url: "https://dodo.ac/np/images/d/dd/Avery_NH.png",
        species: "Eagle",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "February",
        birthday_day: "22",
        sign: "Pisces",
        quote: "What goes around comes around.",
        phrase: "skree-haw",
        clothing: "Oversized Shawl Overshirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Axel",
        alt_name: "",
        id: "elp06",
        image_url: "https://dodo.ac/np/images/0/09/Axel_NH.png",
        species: "Elephant",
        personality: "Jock",
        gender: "Male",
        birthday_month: "March",
        birthday_day: "23",
        sign: "Aries",
        quote: "Do not compare a fly with an elephant.",
        phrase: "WHONK",
        clothing: "Kanji Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Azalea",
        alt_name: "",
        id: "rhn05",
        image_url: "https://dodo.ac/np/images/e/ef/Azalea_amiibo.png",
        species: "Rhinoceros",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "December",
        birthday_day: "18",
        sign: "Sagittarius",
        quote: "Colorful petals, deep roots.",
        phrase: "merci",
        clothing: "Sleeveless Tunic",
        nh: "1"
      }
    },
    {
      title: {
        name: "Aziz",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/1/17/Aziz_PG.png",
        species: "Lion",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Pisces",
        quote: "",
        phrase: "RAWR",
        clothing: "Anju's Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Baabara",
        alt_name: "",
        id: "shp01",
        image_url: "https://dodo.ac/np/images/8/81/Baabara_NH_Transparent.png",
        species: "Sheep",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "28",
        sign: "Aries",
        quote: "Don't just follow the flock.",
        phrase: "daahling",
        clothing: "Zigzag-Print Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bam",
        alt_name: "",
        id: "der01",
        image_url: "https://dodo.ac/np/images/2/2b/Bam_NH.png",
        species: "Deer",
        personality: "Jock",
        gender: "Male",
        birthday_month: "November",
        birthday_day: "7",
        sign: "Scorpio",
        quote: "Get while the getting's good.",
        phrase: "kablang",
        clothing: "Athletic Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bangle",
        alt_name: "",
        id: "tig03",
        image_url: "https://dodo.ac/np/images/6/68/Bangle_NH.png",
        species: "Tiger",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "August",
        birthday_day: "27",
        sign: "Virgo",
        quote: "Don't blink or you'll miss it.",
        phrase: "growf",
        clothing: "Tropical Muumuu",
        nh: "1"
      }
    },
    {
      title: {
        name: "Barold",
        alt_name: "",
        id: "cbr16",
        image_url: "https://dodo.ac/np/images/9/9d/Barold_NH.png",
        species: "Bear cub",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "March",
        birthday_day: "2",
        sign: "Pisces",
        quote: "Please DO feed the bears!",
        phrase: "cubby",
        clothing: "Animal-Stripes Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bea",
        alt_name: "",
        id: "dog10",
        image_url: "https://dodo.ac/np/images/c/c2/Bea_NH.png",
        species: "Dog",
        personality: "Normal",
        gender: "Female",
        birthday_month: "October",
        birthday_day: "15",
        sign: "Libra",
        quote: "The perfect pair complements each other.",
        phrase: "bingo",
        clothing: "Striped Maxi Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Beardo",
        alt_name: "",
        id: "bea13",
        image_url: "https://dodo.ac/np/images/c/c0/Beardo_NH.png",
        species: "Bear",
        personality: "Smug",
        gender: "Male",
        birthday_month: "September",
        birthday_day: "27",
        sign: "Libra",
        quote: "Fashion first!",
        phrase: "whiskers",
        clothing: "Tweed Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Beau",
        alt_name: "",
        id: "der07",
        image_url: "https://dodo.ac/np/images/d/d4/Beau_NH.png",
        species: "Deer",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "April",
        birthday_day: "5",
        sign: "Aries",
        quote: "You snooze, you lose.",
        phrase: "saltlick",
        clothing: "Reindeer Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Becky",
        alt_name: "",
        id: "chn09",
        image_url: "https://dodo.ac/np/images/7/74/Becky_NH.png",
        species: "Chicken",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "December",
        birthday_day: "9",
        sign: "Sagittarius",
        quote: "A fool and his Bells are soon parted.",
        phrase: "chicklet",
        clothing: "Renaissance Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bella",
        alt_name: "",
        id: "mus02",
        image_url: "https://dodo.ac/np/images/c/c0/Bella_NH.png",
        species: "Mouse",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "December",
        birthday_day: "28",
        sign: "Capricorn",
        quote: "A glamour shot is worth a thousand words.",
        phrase: "eeks",
        clothing: "Tee Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Belle",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/c/c1/Belle_PG.png",
        species: "Cow",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Cancer",
        quote: "",
        phrase: "cuddles",
        clothing: "Denim Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Benedict",
        alt_name: "",
        id: "chn01",
        image_url: "https://dodo.ac/np/images/3/3a/Benedict_NH.png",
        species: "Chicken",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "10",
        sign: "Libra",
        quote: "Don't put all your eggs in one basket.",
        phrase: "uh-hoo",
        clothing: "Two-Ball Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Benjamin",
        alt_name: "",
        id: "dog16",
        image_url: "https://dodo.ac/np/images/9/97/Benjamin_NH.png",
        species: "Dog",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "3",
        sign: "Leo",
        quote: "A good dog deserves a good treat.",
        phrase: "alrighty",
        clothing: "Striped Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bertha",
        alt_name: "",
        id: "hip03",
        image_url: "https://dodo.ac/np/images/a/a7/Bertha_NH.png",
        species: "Hippo",
        personality: "Normal",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "25",
        sign: "Taurus",
        quote: "The best part of spring is the picnics!",
        phrase: "bloop",
        clothing: "Pintuck-Pleated Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bessie",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/1/1f/Bessie_PG.png",
        species: "Cow",
        personality: "Normal",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Taurus",
        quote: "",
        phrase: "buttercup",
        clothing: "Berry Gingham",
        nh: "0"
      }
    },
    {
      title: {
        name: "Bettina",
        alt_name: "",
        id: "mus15",
        image_url: "https://dodo.ac/np/images/9/9c/Bettina_NH_Transparent.png",
        species: "Mouse",
        personality: "Normal",
        gender: "Female",
        birthday_month: "June",
        birthday_day: "12",
        sign: "Gemini",
        quote: "No time like the present!",
        phrase: "eekers",
        clothing: "Chef's Outfit",
        nh: "1"
      }
    },
    {
      title: {
        name: "Betty",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/c/ce/Betty_PG.png",
        species: "Chicken",
        personality: "Normal",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Gemini",
        quote: "",
        phrase: "cluckling",
        clothing: "Comfy Sweater",
        nh: "0"
      }
    },
    {
      title: {
        name: "Bianca",
        alt_name: "",
        id: "tig06",
        image_url: "https://dodo.ac/np/images/6/6f/Bianca_NH.png",
        species: "Tiger",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "December",
        birthday_day: "13",
        sign: "Sagittarius",
        quote: "There is such a thing as love at first sight.",
        phrase: "glimmer",
        clothing: "Front-Tie Button-Down Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Biff",
        alt_name: "",
        id: "hip04",
        image_url: "https://dodo.ac/np/images/9/9c/Biff_NH.png",
        species: "Hippo",
        personality: "Jock",
        gender: "Male",
        birthday_month: "March",
        birthday_day: "29",
        sign: "Aries",
        quote: "Eighth place is just the seventh loser.",
        phrase: "squirt",
        clothing: "Gold-Print Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Big Top",
        alt_name: "",
        id: "elp02",
        image_url: "https://dodo.ac/np/images/8/80/Big_Top_NH.png",
        species: "Elephant",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "3",
        sign: "Libra",
        quote: "A big nose never spoiled a handsome face.",
        phrase: "villain",
        clothing: "No. 3 Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bill",
        alt_name: "",
        id: "duk00",
        image_url: "https://dodo.ac/np/images/c/c1/Bill_NH.png",
        species: "Duck",
        personality: "Jock",
        gender: "Male",
        birthday_month: "February",
        birthday_day: "1",
        sign: "Aquarius",
        quote: "Even though there's no 'I' in team, there is a 'me'!",
        phrase: "quacko",
        clothing: "Basketball Tank",
        nh: "1"
      }
    },
    {
      title: {
        name: "Billy",
        alt_name: "",
        id: "goa02",
        image_url: "https://dodo.ac/np/images/2/26/Billy_NH.png",
        species: "Goat",
        personality: "Jock",
        gender: "Male",
        birthday_month: "March",
        birthday_day: "25",
        sign: "Aries",
        quote: "Old dogs can learn new tricks.",
        phrase: "dagnaabit",
        clothing: "Hanten Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Biskit",
        alt_name: "",
        id: "dog03",
        image_url: "https://dodo.ac/np/images/7/78/Biskit_NH.png",
        species: "Dog",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "13",
        sign: "Taurus",
        quote: "Let sleeping dogs lie.",
        phrase: "dawg",
        clothing: "Meme Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bitty",
        alt_name: "",
        id: "hip05",
        image_url: "https://dodo.ac/np/images/7/74/Bitty_NH.png",
        species: "Hippo",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "October",
        birthday_day: "6",
        sign: "Libra",
        quote: "Necessity is the mother of all invention.",
        phrase: "my dear",
        clothing: "Frilly Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Blaire",
        alt_name: "",
        id: "squ01",
        image_url: "https://dodo.ac/np/images/7/73/Blaire_NH.png",
        species: "Squirrel",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "July",
        birthday_day: "3",
        sign: "Cancer",
        quote: "Practice makes perfect.",
        phrase: "nutlet",
        clothing: "Layered Tank Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Blanche",
        alt_name: "",
        id: "ost08",
        image_url: "https://dodo.ac/np/images/d/df/Blanche_NH.png",
        species: "Ostrich",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "December",
        birthday_day: "21",
        sign: "Sagittarius",
        quote: "Nothing beats personal experience.",
        phrase: "quite so",
        clothing: "Butterfly Visiting Kimono",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bluebear",
        alt_name: "",
        id: "cbr00",
        image_url: "https://dodo.ac/np/images/4/49/Bluebear_NH.png",
        species: "Bear cub",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "June",
        birthday_day: "24",
        sign: "Cancer",
        quote: "Candy makes the world go 'round.",
        phrase: "peach",
        clothing: "Aran-Knit Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bob",
        alt_name: "",
        id: "cat00",
        image_url: "https://dodo.ac/np/images/e/ea/Bob_NH.png",
        species: "Cat",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "January",
        birthday_day: "1",
        sign: "Capricorn",
        quote: "You only live once...or nine times.",
        phrase: "pthhpth",
        clothing: "Blossom Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bonbon",
        alt_name: "",
        id: "rbt17",
        image_url: "https://dodo.ac/np/images/c/cc/Bonbon_NH.png",
        species: "Rabbit",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "3",
        sign: "Pisces",
        quote: "Hindsight is always 20/20.",
        phrase: "deelish",
        clothing: "Sleeveless Tunic",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bones",
        alt_name: "",
        id: "dog04",
        image_url: "https://dodo.ac/np/images/2/2b/Bones_NH.png",
        species: "Dog",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "4",
        sign: "Leo",
        quote: "A snack a day keeps the vacuum away.",
        phrase: "yip yip",
        clothing: "Printed Fleece Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Boomer",
        alt_name: "",
        id: "pgn10",
        image_url: "https://dodo.ac/np/images/7/7d/Boomer_NH.png",
        species: "Penguin",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "February",
        birthday_day: "7",
        sign: "Aquarius",
        quote: "Flying is believing.",
        phrase: "human",
        clothing: "Flight Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Boone",
        alt_name: "",
        id: "gor02",
        image_url: "https://dodo.ac/np/images/1/19/Boone_NH.png",
        species: "Gorilla",
        personality: "Jock",
        gender: "Male",
        birthday_month: "September",
        birthday_day: "12",
        sign: "Virgo",
        quote: "Never settle for second best.",
        phrase: "baboom",
        clothing: "Cycling Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Boots",
        alt_name: "",
        id: "crd02",
        image_url: "https://dodo.ac/np/images/3/3e/Boots_NH.png",
        species: "Alligator",
        personality: "Jock",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "7",
        sign: "Leo",
        quote: "Strength lies in muscles.",
        phrase: "munchie",
        clothing: "Jester Costume",
        nh: "1"
      }
    },
    {
      title: {
        name: "Boris",
        alt_name: "",
        id: "pig09",
        image_url: "https://dodo.ac/np/images/e/ef/Boris_NH.png",
        species: "Pig",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "November",
        birthday_day: "6",
        sign: "Scorpio",
        quote: "Life's short. Eat chocolate.",
        phrase: "schnort",
        clothing: "Desert Outfit",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bow",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/a/ae/Bow_DnMe%2B.png",
        species: "Dog",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Leo",
        quote: "",
        phrase: "バウ",
        clothing: "Houndstooth Knit",
        nh: "0"
      }
    },
    {
      title: {
        name: "Boyd",
        alt_name: "",
        id: "gor05",
        image_url: "https://dodo.ac/np/images/2/21/Boyd_NH.png",
        species: "Gorilla",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "1",
        sign: "Libra",
        quote: "There's always time to take a second look.",
        phrase: "uh-oh",
        clothing: "Three-Ball Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bree",
        alt_name: "",
        id: "mus03",
        image_url: "https://dodo.ac/np/images/1/12/Bree_NH.png",
        species: "Mouse",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "July",
        birthday_day: "7",
        sign: "Cancer",
        quote: "The gift says more about the giver.",
        phrase: "cheeseball",
        clothing: "Sweetheart Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Broccolo",
        alt_name: "",
        id: "mus12",
        image_url: "https://dodo.ac/np/images/6/69/Broccolo_NH.png",
        species: "Mouse",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "30",
        sign: "Cancer",
        quote: "One nap leads to another.",
        phrase: "eat it",
        clothing: "Raglan Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Broffina",
        alt_name: "",
        id: "chn12",
        image_url: "https://dodo.ac/np/images/7/7a/Broffina_NH.png",
        species: "Chicken",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "October",
        birthday_day: "24",
        sign: "Scorpio",
        quote: "Don't peck the hand that feeds you.",
        phrase: "cluckadoo",
        clothing: "Rumba Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bruce",
        alt_name: "",
        id: "der03",
        image_url: "https://dodo.ac/np/images/0/08/Bruce_NH.png",
        species: "Deer",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "26",
        sign: "Gemini",
        quote: "Nobody's perfect.",
        phrase: "gruff",
        clothing: "After-School Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bubbles",
        alt_name: "",
        id: "hip02",
        image_url: "https://dodo.ac/np/images/0/0e/Bubbles_NH.png",
        species: "Hippo",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "18",
        sign: "Virgo",
        quote: "It's best to keep your lips and purse sealed.",
        phrase: "hipster",
        clothing: "Grape Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Buck",
        alt_name: "",
        id: "hrs00",
        image_url: "https://dodo.ac/np/images/7/7f/Buck_NH.png",
        species: "Horse",
        personality: "Jock",
        gender: "Male",
        birthday_month: "April",
        birthday_day: "4",
        sign: "Aries",
        quote: "Keep your eyes on the prize.",
        phrase: "pardner",
        clothing: "Sweatshirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bud",
        alt_name: "",
        id: "lon00",
        image_url: "https://dodo.ac/np/images/1/1f/Bud_NH.png",
        species: "Lion",
        personality: "Jock",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "8",
        sign: "Leo",
        quote: "You're not living unless you're sweating!",
        phrase: "shredded",
        clothing: "Pineapple Aloha Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Bunnie",
        alt_name: "",
        id: "rbt00",
        image_url: "https://dodo.ac/np/images/0/00/Bunnie_NH_Transparent.png",
        species: "Rabbit",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "May",
        birthday_day: "9",
        sign: "Taurus",
        quote: "Hare today, gone tomorrow.",
        phrase: "tee-hee",
        clothing: "Lively Plaid Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Butch",
        alt_name: "",
        id: "dog01",
        image_url: "https://dodo.ac/np/images/2/2b/Butch_NH.png",
        species: "Dog",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "November",
        birthday_day: "1",
        sign: "Scorpio",
        quote: "A house without either a cat or a dog is a sad house indeed.",
        phrase: "ROOOOOWF",
        clothing: "Argyle Vest",
        nh: "1"
      }
    },
    {
      title: {
        name: "Buzz",
        alt_name: "",
        id: "pbr03",
        image_url: "https://dodo.ac/np/images/0/05/Buzz_NH.png",
        species: "Eagle",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "7",
        sign: "Sagittarius",
        quote: "Pride'll put you in a pickle.",
        phrase: "captain",
        clothing: "Nine-Ball Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Cally",
        alt_name: "Sally",
        id: "squ11",
        image_url: "https://dodo.ac/np/images/a/a6/Cally_NH.png",
        species: "Squirrel",
        personality: "Normal",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "4",
        sign: "Virgo",
        quote: "It's always teatime somewhere.",
        phrase: "WHEE",
        clothing: "Fairy-Tale Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Camofrog",
        alt_name: "",
        id: "flg03",
        image_url: "https://dodo.ac/np/images/e/e1/Camofrog_NH.png",
        species: "Frog",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "5",
        sign: "Gemini",
        quote: "What you can't see can't hurt you.",
        phrase: "ten-hut",
        clothing: "MVP Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Canberra",
        alt_name: "",
        id: "kal08",
        image_url: "https://dodo.ac/np/images/e/e6/Canberra_NH.png",
        species: "Koala",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "May",
        birthday_day: "14",
        sign: "Taurus",
        quote: "It's never too late to start over.",
        phrase: "nuh uh",
        clothing: "Striped Tank",
        nh: "1"
      }
    },
    {
      title: {
        name: "Candi",
        alt_name: "",
        id: "mus08",
        image_url: "https://dodo.ac/np/images/5/57/Candi_NH.png",
        species: "Mouse",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "13",
        sign: "Aries",
        quote: "The players may change, but the music stays the same.",
        phrase: "sweetie",
        clothing: "Bohemian Tunic Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Carmen",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/f/fd/Carmen_PG.png",
        species: "Mouse",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Aries",
        quote: "",
        phrase: "bumpkin",
        clothing: "Ribbon Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Carmen",
        alt_name: "",
        id: "rbt16",
        image_url: "https://dodo.ac/np/images/e/eb/Carmen_NH.png",
        species: "Rabbit",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "6",
        sign: "Capricorn",
        quote: "Absence makes the heart grow fonder.",
        phrase: "nougat",
        clothing: "Plaid-Print Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Caroline",
        alt_name: "Bliss",
        id: "squ06",
        image_url: "https://dodo.ac/np/images/2/26/Caroline_NH.png",
        species: "Squirrel",
        personality: "Normal",
        gender: "Female",
        birthday_month: "July",
        birthday_day: "15",
        sign: "Cancer",
        quote: "New brooms sweep clean.",
        phrase: "hulaaaa",
        clothing: "Striped Maxi Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Carrie",
        alt_name: "",
        id: "kgr02",
        image_url: "https://dodo.ac/np/images/6/6a/Carrie_NH.png",
        species: "Kangaroo",
        personality: "Normal",
        gender: "Female",
        birthday_month: "December",
        birthday_day: "5",
        sign: "Sagittarius",
        quote: "A mother's work is never done.",
        phrase: "little one",
        clothing: "Simple-Dots Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Carrot",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/e/e2/Carrot_DnMe%2B.png",
        species: "Cow",
        personality: "Normal",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Gemini",
        quote: "",
        phrase: "きゃはっ",
        clothing: "Tropical Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Cashmere",
        alt_name: "",
        id: "shp04",
        image_url: "https://dodo.ac/np/images/e/eb/Cashmere_NH.png",
        species: "Sheep",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "2",
        sign: "Aries",
        quote: "100% Wool.",
        phrase: "baaaby",
        clothing: "Sleeveless Tunic",
        nh: "1"
      }
    },
    {
      title: {
        name: "Cece",
        alt_name: "",
        id: "squ19",
        image_url: "https://dodo.ac/np/images/9/9f/Cece_NLWa.png",
        species: "Squirrel",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "May",
        birthday_day: "28",
        sign: "Gemini",
        quote: "Too heads are better than one!",
        phrase: "stay fresh",
        clothing: "Callie Outfit",
        nh: "0"
      }
    },
    {
      title: {
        name: "Celia",
        alt_name: "",
        id: "pbr09",
        image_url: "https://dodo.ac/np/images/0/00/Celia_NH.png",
        species: "Eagle",
        personality: "Normal",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "25",
        sign: "Aries",
        quote: "It's the thought that counts.",
        phrase: "feathers",
        clothing: "Alpinist Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Cephalobot",
        alt_name: "",
        id: "ocp04",
        image_url: "https://dodo.ac/np/images/b/b5/Cephalobot_amiibo.png",
        species: "Octopus",
        personality: "Smug",
        gender: "Male",
        birthday_month: "April",
        birthday_day: "1",
        sign: "Aries",
        quote: "Take me to your pizza.",
        phrase: "donk donk",
        clothing: "Retro Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Cesar",
        alt_name: "",
        id: "gor00",
        image_url: "https://dodo.ac/np/images/2/23/Cesar_NH.png",
        species: "Gorilla",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "September",
        birthday_day: "6",
        sign: "Virgo",
        quote: "As soon as you can grow a mustache, do it.",
        phrase: "highness",
        clothing: "A Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Chabwick",
        alt_name: "",
        id: "pgn07",
        image_url: "https://dodo.ac/np/images/6/60/Chabwick_amiibo.png",
        species: "Penguin",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "24",
        sign: "Capricorn",
        quote: "Live, laugh, lasagna.",
        phrase: "blargh",
        clothing: "Nine-Ball Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Chadder",
        alt_name: "",
        id: "mus18",
        image_url: "https://dodo.ac/np/images/3/32/Chadder_NH.png",
        species: "Mouse",
        personality: "Smug",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "15",
        sign: "Sagittarius",
        quote: "Meeting is just the start of us saying goodbye.",
        phrase: "fromage",
        clothing: "Tailcoat",
        nh: "1"
      }
    },
    {
      title: {
        name: "Chai",
        alt_name: "",
        id: "elp11",
        image_url: "https://dodo.ac/np/images/a/ab/Chai_PC.png",
        species: "Elephant",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "6",
        sign: "Pisces",
        quote: "He who chases two rabbits catches none.",
        phrase: "flap flap",
        clothing: "Cinnamoroll Puffy Blouse",
        nh: "1"
      }
    },
    {
      title: {
        name: "Champ",
        alt_name: "",
        id: "mnk00",
        image_url: "https://dodo.ac/np/images/8/81/Champ_CF.png",
        species: "Monkey",
        personality: "Jock",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "4",
        sign: "Gemini",
        quote: "You'll never get THIS monkey off your back!",
        phrase: "choo CHOO",
        clothing: "Paw Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Charlise",
        alt_name: "",
        id: "bea12",
        image_url: "https://dodo.ac/np/images/a/ac/Charlise_NH.png",
        species: "Bear",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "17",
        sign: "Aries",
        quote: "Actions speak louder than words.",
        phrase: "urgh",
        clothing: "Athletic Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Chelsea",
        alt_name: "",
        id: "der10",
        image_url: "https://dodo.ac/np/images/9/97/Chelsea_PC.png",
        species: "Deer",
        personality: "Normal",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "18",
        sign: "Capricorn",
        quote: "Always look a gift horse in the mouth.",
        phrase: "pound cake",
        clothing: "My Melody Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Cheri",
        alt_name: "",
        id: "cbr10",
        image_url: "https://dodo.ac/np/images/d/d5/Cheri_NH.png",
        species: "Bear cub",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "17",
        sign: "Pisces",
        quote: "Good things come in small packages.",
        phrase: "tralala",
        clothing: "Zigzag-Print Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Cherry",
        alt_name: "",
        id: "dog17",
        image_url: "https://dodo.ac/np/images/3/3e/Cherry_NH.png",
        species: "Dog",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "May",
        birthday_day: "11",
        sign: "Taurus",
        quote: "One dog barks at something, the rest bark at him.",
        phrase: "what what",
        clothing: "Spider-Web Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Chester",
        alt_name: "",
        id: "cbr15",
        image_url: "https://dodo.ac/np/images/a/af/Chester_NH.png",
        species: "Bear cub",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "6",
        sign: "Leo",
        quote: "Sleep early. Wake late.",
        phrase: "rookie",
        clothing: "Dragon Suit",
        nh: "1"
      }
    },
    {
      title: {
        name: "Chevre",
        alt_name: "",
        id: "goa00",
        image_url: "https://dodo.ac/np/images/c/c9/Chevre_NH.png",
        species: "Goat",
        personality: "Normal",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "6",
        sign: "Pisces",
        quote: "If you're gonna dream, dream big.",
        phrase: "la baa",
        clothing: "Poncho Coat",
        nh: "1"
      }
    },
    {
      title: {
        name: "Chico",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/2/2e/Chico_PG.png",
        species: "Mouse",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Capricorn",
        quote: "",
        phrase: "cheeeese",
        clothing: "Blue Check Print",
        nh: "0"
      }
    },
    {
      title: {
        name: "Chief",
        alt_name: "",
        id: "wol00",
        image_url: "https://dodo.ac/np/images/1/13/Chief_NH.png",
        species: "Wolf",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "19",
        sign: "Sagittarius",
        quote: "Don't wish it were easier; wish you were better.",
        phrase: "harrumph",
        clothing: "Sweater on Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Chops",
        alt_name: "",
        id: "pig14",
        image_url: "https://dodo.ac/np/images/a/ad/Chops_NH_Transparent.png",
        species: "Pig",
        personality: "Smug",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "13",
        sign: "Libra",
        quote: "You can't have your cake and eat it too.",
        phrase: "zoink",
        clothing: "Military Uniform",
        nh: "1"
      }
    },
    {
      title: {
        name: "Chow",
        alt_name: "",
        id: "bea03",
        image_url: "https://dodo.ac/np/images/d/d1/Chow_NH.png",
        species: "Bear",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "22",
        sign: "Cancer",
        quote: "All good things must come to an end.",
        phrase: "aiya",
        clothing: "Gold-Print Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Chrissy",
        alt_name: "",
        id: "rbt13",
        image_url: "https://dodo.ac/np/images/6/6a/Chrissy_NH.png",
        species: "Rabbit",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "August",
        birthday_day: "28",
        sign: "Virgo",
        quote: "A fool and their Bells are soon parted.",
        phrase: "sparkles",
        clothing: "Marble-Dots Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Chuck",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/b/b8/Chuck_PG.png",
        species: "Bull",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Taurus",
        quote: "",
        phrase: "jerky",
        clothing: "Four-Ball Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Clara",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/6/6a/Clara_DnMe%2B.png",
        species: "Hippo",
        personality: "Normal",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Pisces",
        quote: "",
        phrase: "うふふ",
        clothing: "Yellow Bolero",
        nh: "0"
      }
    },
    {
      title: {
        name: "Claude",
        alt_name: "",
        id: "rbt11",
        image_url: "https://dodo.ac/np/images/1/1f/Claude_NH.png",
        species: "Rabbit",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "3",
        sign: "Sagittarius",
        quote: "Don't judge a rabbit by its ears.",
        phrase: "hopalong",
        clothing: "Marble-Dots Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Claudia",
        alt_name: "",
        id: "tig05",
        image_url: "https://dodo.ac/np/images/d/d6/Claudia_NH.png",
        species: "Tiger",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "November",
        birthday_day: "22",
        sign: "Scorpio",
        quote: "A tiger can't change its stripes.",
        phrase: "ooh la la",
        clothing: "Lacy Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Clay",
        alt_name: "",
        id: "ham05",
        image_url: "https://dodo.ac/np/images/6/6c/Clay_NH.png",
        species: "Hamster",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "19",
        sign: "Libra",
        quote: "Life is just a bowl of cherries.",
        phrase: "thump",
        clothing: "Poncho-Style Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Cleo",
        alt_name: "",
        id: "hrs07",
        image_url: "https://dodo.ac/np/images/e/e9/Cleo_NH.png",
        species: "Horse",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "9",
        sign: "Aquarius",
        quote: "There's something lovable in all of us.",
        phrase: "sugar",
        clothing: "Floral Lace Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Clyde",
        alt_name: "",
        id: "hrs10",
        image_url: "https://dodo.ac/np/images/b/bb/Clyde_NH.png",
        species: "Horse",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "1",
        sign: "Taurus",
        quote: "The grass is always greener.",
        phrase: "clip clawp",
        clothing: "Madras Plaid Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Coach",
        alt_name: "",
        id: "bul07",
        image_url: "https://dodo.ac/np/images/c/c1/Coach_NH.png",
        species: "Bull",
        personality: "Jock",
        gender: "Male",
        birthday_month: "April",
        birthday_day: "29",
        sign: "Taurus",
        quote: "Fool me once, shame on you. Fool me twice, shame on me.",
        phrase: "stubble",
        clothing: "Relay Tank",
        nh: "1"
      }
    },
    {
      title: {
        name: "Cobb",
        alt_name: "",
        id: "pig08",
        image_url: "https://dodo.ac/np/images/9/9d/Cobb_NH.png",
        species: "Pig",
        personality: "Jock",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "7",
        sign: "Libra",
        quote: "Might makes right.",
        phrase: "hot dog",
        clothing: "Flannel Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Coco",
        alt_name: "",
        id: "rbt02",
        image_url: "https://dodo.ac/np/images/8/83/Coco_NH.png",
        species: "Rabbit",
        personality: "Normal",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "1",
        sign: "Pisces",
        quote: "Don't put off till tomorrow what you can do today.",
        phrase: "doyoing",
        clothing: "Layered Tank Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Cole",
        alt_name: "",
        id: "rbt18",
        image_url: "https://dodo.ac/np/images/9/95/Cole_NH_Transparent.png",
        species: "Rabbit",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "10",
        sign: "Leo",
        quote: "Little pitchers have big ears.",
        phrase: "coooooool",
        clothing: "Orange Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Colton",
        alt_name: "",
        id: "hrs11",
        image_url: "https://dodo.ac/np/images/8/8c/Colton_NH.png",
        species: "Horse",
        personality: "Smug",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "22",
        sign: "Gemini",
        quote: "Make hay while the sun shines.",
        phrase: "check it",
        clothing: "Prince's Tunic",
        nh: "1"
      }
    },
    {
      title: {
        name: "Cookie",
        alt_name: "",
        id: "dog08",
        image_url: "https://dodo.ac/np/images/d/d9/Cookie_NH.png",
        species: "Dog",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "June",
        birthday_day: "18",
        sign: "Gemini",
        quote: "Don't lose sight of what you're really after.",
        phrase: "arfer",
        clothing: "Retro Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Cousteau",
        alt_name: "",
        id: "flg10",
        image_url: "https://dodo.ac/np/images/1/1c/Cousteau_NH.png",
        species: "Frog",
        personality: "Jock",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "17",
        sign: "Sagittarius",
        quote: "Jump first, ask questions later.",
        phrase: "oui oui",
        clothing: "Silk Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Cranston",
        alt_name: "",
        id: "ost06",
        image_url: "https://dodo.ac/np/images/b/b7/Cranston_NH.png",
        species: "Ostrich",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "September",
        birthday_day: "23",
        sign: "Libra",
        quote: "Hard work beats talent.",
        phrase: "sweatband",
        clothing: "Oversized Shawl Overshirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Croque",
        alt_name: "",
        id: "flg17",
        image_url: "https://dodo.ac/np/images/7/70/Croque_NH.png",
        species: "Frog",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "18",
        sign: "Cancer",
        quote: "Where there's smoke, there's fire.",
        phrase: "as if",
        clothing: "Silk Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Cube",
        alt_name: "",
        id: "pgn02",
        image_url: "https://dodo.ac/np/images/1/10/Cube_NH.png",
        species: "Penguin",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "January",
        birthday_day: "29",
        sign: "Aquarius",
        quote: "Sometimes you gotta learn to chill.",
        phrase: "brainfreeze",
        clothing: "Simple-Dots Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Cupcake",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/c/c9/Cupcake_PG.png",
        species: "Bear cub",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Gemini",
        quote: "",
        phrase: "sugar pie",
        clothing: "Dreamy Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Curlos",
        alt_name: "",
        id: "shp08",
        image_url: "https://dodo.ac/np/images/1/1a/Curlos_NH_Transparent.png",
        species: "Sheep",
        personality: "Smug",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "8",
        sign: "Taurus",
        quote: "If you want to know yourself better, ask your neighbors.",
        phrase: "shearly",
        clothing: "Zigzag Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Curly",
        alt_name: "",
        id: "pig00",
        image_url: "https://dodo.ac/np/images/3/3d/Curly_NH.png",
        species: "Pig",
        personality: "Jock",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "26",
        sign: "Leo",
        quote: "Get fired up!",
        phrase: "nyoink",
        clothing: "Energetic Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Curt",
        alt_name: "",
        id: "bea02",
        image_url: "https://dodo.ac/np/images/2/27/Curt_NH.png",
        species: "Bear",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "1",
        sign: "Cancer",
        quote: "A Bell saved is a Bell earned.",
        phrase: "fuzzball",
        clothing: "MVP Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Cyd",
        alt_name: "",
        id: "elp12",
        image_url: "https://dodo.ac/np/images/5/5d/Cyd_NH.png",
        species: "Elephant",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "9",
        sign: "Gemini",
        quote: "Do what you want, but do it loud!",
        phrase: "rockin'",
        clothing: "Dragon Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Cyrano",
        alt_name: "",
        id: "ant00",
        image_url: "https://dodo.ac/np/images/4/48/Cyrano_NH.png",
        species: "Anteater",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "March",
        birthday_day: "9",
        sign: "Pisces",
        quote: "Don't punch your nose to spite your face.",
        phrase: "ah-CHOO",
        clothing: "Judogi",
        nh: "1"
      }
    },
    {
      title: {
        name: "Daisy",
        alt_name: "",
        id: "dog07",
        image_url: "https://dodo.ac/np/images/9/96/Daisy_NH.png",
        species: "Dog",
        personality: "Normal",
        gender: "Female",
        birthday_month: "November",
        birthday_day: "16",
        sign: "Scorpio",
        quote: "It's not always a dog-eat-dog world.",
        phrase: "bow-WOW",
        clothing: "Colorful Striped Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Deena",
        alt_name: "",
        id: "duk04",
        image_url: "https://dodo.ac/np/images/b/b8/Deena_NH.png",
        species: "Duck",
        personality: "Normal",
        gender: "Female",
        birthday_month: "June",
        birthday_day: "27",
        sign: "Cancer",
        quote: "Duck...duck...GOOSE!",
        phrase: "woowoo",
        clothing: "Overall Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Deirdre",
        alt_name: "",
        id: "der04",
        image_url: "https://dodo.ac/np/images/3/3c/Deirdre_NH.png",
        species: "Deer",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "May",
        birthday_day: "4",
        sign: "Taurus",
        quote: "Legs of an antelope, heart of an eagle.",
        phrase: "whatevs",
        clothing: "Flower Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Del",
        alt_name: "",
        id: "crd04",
        image_url: "https://dodo.ac/np/images/4/46/Del_NH.png",
        species: "Alligator",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "27",
        sign: "Gemini",
        quote: "The hero is brave in deeds as well as words.",
        phrase: "gronk",
        clothing: "Striped Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Deli",
        alt_name: "",
        id: "mnk08",
        image_url: "https://dodo.ac/np/images/3/30/Deli_NH.png",
        species: "Monkey",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "24",
        sign: "Gemini",
        quote: "Righty tighty, lefty loosey.",
        phrase: "monch",
        clothing: "Argyle Vest",
        nh: "1"
      }
    },
    {
      title: {
        name: "Derwin",
        alt_name: "",
        id: "duk08",
        image_url: "https://dodo.ac/np/images/9/98/Derwin_NH.png",
        species: "Duck",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "25",
        sign: "Gemini",
        quote: "Everything in moderation. Except for snacks.",
        phrase: "derrrr",
        clothing: "Striped Tank",
        nh: "1"
      }
    },
    {
      title: {
        name: "Diana",
        alt_name: "",
        id: "der08",
        image_url: "https://dodo.ac/np/images/1/1f/Diana_NH.png",
        species: "Deer",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "4",
        sign: "Capricorn",
        quote: "Sometimes you have to lose to win.",
        phrase: "no doy",
        clothing: "Mysterious Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Diva",
        alt_name: "",
        id: "flg18",
        image_url: "https://dodo.ac/np/images/4/44/Diva_NH.png",
        species: "Frog",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "October",
        birthday_day: "2",
        sign: "Libra",
        quote: "Eyes are the windows to the soul.",
        phrase: "ya know",
        clothing: "Palatial Tank Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Dizzy",
        alt_name: "",
        id: "elp01",
        image_url: "https://dodo.ac/np/images/6/63/Dizzy_NH.png",
        species: "Elephant",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "14",
        sign: "Cancer",
        quote: "Keep it mellow.",
        phrase: "woo-oo",
        clothing: "Bone Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Dobie",
        alt_name: "",
        id: "wol04",
        image_url: "https://dodo.ac/np/images/7/76/Dobie_NH.png",
        species: "Wolf",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "February",
        birthday_day: "17",
        sign: "Aquarius",
        quote: "Old longings never truly fade.",
        phrase: "ohmmm",
        clothing: "Fuzzy Vest",
        nh: "1"
      }
    },
    {
      title: {
        name: "Doc",
        alt_name: "",
        id: "rbt10",
        image_url: "https://dodo.ac/np/images/c/cd/Doc_NH.png",
        species: "Rabbit",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "March",
        birthday_day: "16",
        sign: "Pisces",
        quote: "One cannot live on carrots alone.",
        phrase: "old bunny",
        clothing: "Flannel Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Dom",
        alt_name: "",
        id: "shp15",
        image_url: "https://dodo.ac/np/images/7/75/Dom_NH.png",
        species: "Sheep",
        personality: "Jock",
        gender: "Male",
        birthday_month: "March",
        birthday_day: "18",
        sign: "Pisces",
        quote: "Be true to your most shiny self.",
        phrase: "indeedaroo",
        clothing: "Tie-Dye Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Dora",
        alt_name: "",
        id: "mus00",
        image_url: "https://dodo.ac/np/images/d/de/Dora_NH.png",
        species: "Mouse",
        personality: "Normal",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "18",
        sign: "Aquarius",
        quote: "The squeaky wheel gets the cheese.",
        phrase: "squeaky",
        clothing: "Sea Hanten Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Dotty",
        alt_name: "",
        id: "rbt01",
        image_url: "https://dodo.ac/np/images/c/cc/Dotty_NH.png",
        species: "Rabbit",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "14",
        sign: "Pisces",
        quote: "It's always a good hare day.",
        phrase: "wee one",
        clothing: "Sleeveless Tunic",
        nh: "1"
      }
    },
    {
      title: {
        name: "Dozer",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/3/3a/Dozer_PG.png",
        species: "Bear",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Pisces",
        quote: "",
        phrase: "zzzzzz",
        clothing: "Bear Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Drago",
        alt_name: "",
        id: "crd08",
        image_url: "https://dodo.ac/np/images/f/f9/Drago_NH.png",
        species: "Alligator",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "February",
        birthday_day: "12",
        sign: "Aquarius",
        quote: "There is no room for two dragons in one pond.",
        phrase: "burrrn",
        clothing: "Dragon Suit",
        nh: "1"
      }
    },
    {
      title: {
        name: "Drake",
        alt_name: "",
        id: "duk09",
        image_url: "https://dodo.ac/np/images/e/e0/Drake_NH.png",
        species: "Duck",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "25",
        sign: "Cancer",
        quote: "...Quack.",
        phrase: "quacko",
        clothing: "Yodel Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Drift",
        alt_name: "",
        id: "flg04",
        image_url: "https://dodo.ac/np/images/a/ac/Drift_NH.png",
        species: "Frog",
        personality: "Jock",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "9",
        sign: "Libra",
        quote: "Always go for the gold!",
        phrase: "dribbit",
        clothing: "Six-Ball Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Ed",
        alt_name: "",
        id: "hrs06",
        image_url: "https://dodo.ac/np/images/c/c9/Ed_NH.png",
        species: "Horse",
        personality: "Smug",
        gender: "Male",
        birthday_month: "September",
        birthday_day: "16",
        sign: "Virgo",
        quote: "Beauty is pretty!",
        phrase: "greenhorn",
        clothing: "Collarless Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Egbert",
        alt_name: "",
        id: "chn02",
        image_url: "https://dodo.ac/np/images/3/3f/Egbert_NH.png",
        species: "Chicken",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "14",
        sign: "Libra",
        quote: "You gotta break a few eggs to make an omelet.",
        phrase: "doodle-duh",
        clothing: "Folk Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Elina",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/a/ac/Elina_PG.png",
        species: "Elephant",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Cancer",
        quote: "",
        phrase: "shrimp",
        clothing: "Red Aloha Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Elise",
        alt_name: "",
        id: "mnk05",
        image_url: "https://dodo.ac/np/images/0/0c/Elise_NH.png",
        species: "Monkey",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "21",
        sign: "Aries",
        quote: "Do as I say, not as I do.",
        phrase: "puh-lease",
        clothing: "Elegant Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Ellie",
        alt_name: "",
        id: "elp07",
        image_url: "https://dodo.ac/np/images/3/38/Ellie_NH.png",
        species: "Elephant",
        personality: "Normal",
        gender: "Female",
        birthday_month: "May",
        birthday_day: "12",
        sign: "Taurus",
        quote: "You need the sour to highlight the sweet.",
        phrase: "li'l one",
        clothing: "Aran-Knit Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Elmer",
        alt_name: "",
        id: "hrs03",
        image_url: "https://dodo.ac/np/images/6/60/Elmer_NH.png",
        species: "Horse",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "5",
        sign: "Libra",
        quote: "The horse doesn't pull the cart, the oats do.",
        phrase: "tenderfoot",
        clothing: "Boa Fleece",
        nh: "1"
      }
    },
    {
      title: {
        name: "Eloise",
        alt_name: "",
        id: "elp03",
        image_url: "https://dodo.ac/np/images/b/b1/Eloise_NH.png",
        species: "Elephant",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "December",
        birthday_day: "8",
        sign: "Sagittarius",
        quote: "An elephant never forgets.",
        phrase: "tooooot",
        clothing: "Zigzag-Print Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Elvis",
        alt_name: "",
        id: "lon01",
        image_url: "https://dodo.ac/np/images/c/cc/Elvis_NH.png",
        species: "Lion",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "23",
        sign: "Leo",
        quote: "Better a live coward than a forgotten hero.",
        phrase: "unh-hunh",
        clothing: "Royal Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Emerald",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/2/2f/Emerald_PG.png",
        species: "Frog",
        personality: "Normal",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Cancer",
        quote: "",
        phrase: "sproing",
        clothing: "Frog Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Epona",
        alt_name: "",
        id: "hrs15",
        image_url: "https://dodo.ac/np/images/d/d4/Epona_NLWa_Model_2.png",
        species: "Horse",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "November",
        birthday_day: "21",
        sign: "Scorpio",
        quote: "Even the wildest horse can be tamed.",
        phrase: "neigh",
        clothing: "Epona Outfit",
        nh: "0"
      }
    },
    {
      title: {
        name: "Erik",
        alt_name: "",
        id: "der09",
        image_url: "https://dodo.ac/np/images/8/88/Erik_NH.png",
        species: "Deer",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "27",
        sign: "Leo",
        quote: "If you're afraid of wolves, don't go to the woods.",
        phrase: "chow down",
        clothing: "Yodel Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Étoile",
        alt_name: "",
        id: "shp14",
        image_url: "https://dodo.ac/np/images/2/23/%C3%89toile_PC.png",
        species: "Sheep",
        personality: "Normal",
        gender: "Female",
        birthday_month: "December",
        birthday_day: "25",
        sign: "Capricorn",
        quote: "Who knows what the stars have in store for us?",
        phrase: "fuzzy",
        clothing: "Kiki &amp; Lala Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Eugene",
        alt_name: "",
        id: "kal10",
        image_url: "https://dodo.ac/np/images/a/ab/Eugene_NH.png",
        species: "Koala",
        personality: "Smug",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "26",
        sign: "Scorpio",
        quote: "Imitation is the sincerest form of flattery.",
        phrase: "yeah buddy",
        clothing: "Biker Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Eunice",
        alt_name: "",
        id: "shp02",
        image_url: "https://dodo.ac/np/images/9/97/Eunice_NH.png",
        species: "Sheep",
        personality: "Normal",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "3",
        sign: "Aries",
        quote: "There is a point to every encounter.",
        phrase: "lambchop",
        clothing: "Aran-Knit Cardigan",
        nh: "1"
      }
    },
    {
      title: {
        name: "Faith",
        alt_name: "",
        id: "kal07",
        image_url: "https://dodo.ac/np/images/5/58/Faith_amiibo.png",
        species: "Koala",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "21",
        sign: "Aries",
        quote: "Never let your mind be what holds you back.",
        phrase: "aloha",
        clothing: "Hula Top",
        nh: "1"
      }
    },
    {
      title: {
        name: "Fang",
        alt_name: "",
        id: "wol06",
        image_url: "https://dodo.ac/np/images/9/9e/Fang_NH_Transparent.png",
        species: "Wolf",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "18",
        sign: "Sagittarius",
        quote: "You mess with the wolf, you get the fangs.",
        phrase: "cha-chomp",
        clothing: "Snowy Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Fauna",
        alt_name: "",
        id: "der00",
        image_url: "https://dodo.ac/np/images/9/91/Fauna_NH.png",
        species: "Deer",
        personality: "Normal",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "26",
        sign: "Aries",
        quote: "The first step is always the hardest.",
        phrase: "dearie",
        clothing: "Bohemian Tunic Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Felicity",
        alt_name: "",
        id: "cat17",
        image_url: "https://dodo.ac/np/images/c/c7/Felicity_NH.png",
        species: "Cat",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "30",
        sign: "Aries",
        quote: "Love has no bounds.",
        phrase: "mimimi",
        clothing: "Tweed Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Felyne",
        alt_name: "",
        id: "cat22",
        image_url: "https://dodo.ac/np/images/3/31/Felyne_HHD.png",
        species: "Cat",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "January",
        birthday_day: "6",
        sign: "Capricorn",
        quote: "♪ Calmly gathering. Ah, the life of a hunter. ♪",
        phrase: "nya",
        clothing: "Felyne Outfit",
        nh: "0"
      }
    },
    {
      title: {
        name: "Filbert",
        alt_name: "",
        id: "squ02",
        image_url: "https://dodo.ac/np/images/8/81/Filbert_NH.png",
        species: "Squirrel",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "3",
        sign: "Gemini",
        quote: "Don't go nuts or anything.",
        phrase: "bucko",
        clothing: "Tree Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Filly",
        alt_name: "",
        id: "hrs14",
        image_url: "https://dodo.ac/np/images/0/03/Filly_HHD.png",
        species: "Horse",
        personality: "Normal",
        gender: "Female",
        birthday_month: "July",
        birthday_day: "11",
        sign: "Cancer",
        quote: "One horse against the world.",
        phrase: "hah",
        clothing: "Sunset Tee",
        nh: "0"
      }
    },
    {
      title: {
        name: "Flash",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/b/b5/Flash_PG.png",
        species: "Bird",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Gemini",
        quote: "",
        phrase: "babe",
        clothing: "Blue Aloha Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Flip",
        alt_name: "",
        id: "mnk06",
        image_url: "https://dodo.ac/np/images/c/c3/Flip_NH.png",
        species: "Monkey",
        personality: "Jock",
        gender: "Male",
        birthday_month: "November",
        birthday_day: "21",
        sign: "Scorpio",
        quote: "See no donut, hear no donut, speak no donut.",
        phrase: "rerack",
        clothing: "Muscle Tank",
        nh: "1"
      }
    },
    {
      title: {
        name: "Flo",
        alt_name: "",
        id: "pgn13",
        image_url: "https://dodo.ac/np/images/b/bb/Flo_NH.png",
        species: "Penguin",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "2",
        sign: "Virgo",
        quote: "Always keep a straight face.",
        phrase: "cha",
        clothing: "Folk Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Flora",
        alt_name: "",
        id: "ost09",
        image_url: "https://dodo.ac/np/images/8/8e/Flora_NH.png",
        species: "Ostrich",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "9",
        sign: "Aquarius",
        quote: "Pink is the new black.",
        phrase: "pinky",
        clothing: "Gumdrop Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Flossie",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/1/1b/Flossie_PG.png",
        species: "Mouse",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Libra",
        quote: "",
        phrase: "squeaker",
        clothing: "Red Aloha Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Flurry",
        alt_name: "",
        id: "ham06",
        image_url: "https://dodo.ac/np/images/0/03/Flurry_NH.png",
        species: "Hamster",
        personality: "Normal",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "30",
        sign: "Aquarius",
        quote: "Squeak your mind, even if your voice shakes.",
        phrase: "powderpuff",
        clothing: "Flower Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Francine",
        alt_name: "",
        id: "rbt12",
        image_url: "https://dodo.ac/np/images/3/34/Francine_NH.png",
        species: "Rabbit",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "22",
        sign: "Aquarius",
        quote: "You can't have wise folks if you don't have fools too.",
        phrase: "karat",
        clothing: "Marble-Dots Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Frank",
        alt_name: "",
        id: "pbr06",
        image_url: "https://dodo.ac/np/images/7/75/Frank_NH.png",
        species: "Eagle",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "30",
        sign: "Leo",
        quote: "Today is the last day of the rest of your life.",
        phrase: "crushy",
        clothing: "Letter Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Freckles",
        alt_name: "",
        id: "duk07",
        image_url: "https://dodo.ac/np/images/7/7d/Freckles_NH.png",
        species: "Duck",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "19",
        sign: "Pisces",
        quote: "Act now before you change your mind!",
        phrase: "ducky",
        clothing: "Flower-Print Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Frett",
        alt_name: "",
        id: "dog11",
        image_url: "https://dodo.ac/np/images/b/b3/Frett_amiibo.png",
        species: "Dog",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "30",
        sign: "Scorpio",
        quote: "I'm in the prime of my life.",
        phrase: "goshers",
        clothing: "Gingham Picnic Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Freya",
        alt_name: "",
        id: "wol05",
        image_url: "https://dodo.ac/np/images/e/ee/Freya_NH.png",
        species: "Wolf",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "December",
        birthday_day: "14",
        sign: "Sagittarius",
        quote: "Don't stray too far from the pack.",
        phrase: "uff da",
        clothing: "Reindeer Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Friga",
        alt_name: "",
        id: "pgn04",
        image_url: "https://dodo.ac/np/images/8/8c/Friga_NH.png",
        species: "Penguin",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "October",
        birthday_day: "16",
        sign: "Libra",
        quote: "You can't learn a life lesson from a fortune cookie.",
        phrase: "brrrmph",
        clothing: "Simple Checkered Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Frita",
        alt_name: "",
        id: "shp11",
        image_url: "https://dodo.ac/np/images/d/d5/Frita_NH.png",
        species: "Sheep",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "July",
        birthday_day: "16",
        sign: "Cancer",
        quote: "Don't sweat the small potatoes.",
        phrase: "oh ewe",
        clothing: "Hot-Dog Costume",
        nh: "1"
      }
    },
    {
      title: {
        name: "Frobert",
        alt_name: "",
        id: "flg02",
        image_url: "https://dodo.ac/np/images/3/3b/Frobert_NH.png",
        species: "Frog",
        personality: "Jock",
        gender: "Male",
        birthday_month: "February",
        birthday_day: "8",
        sign: "Aquarius",
        quote: "Always aim high!",
        phrase: "fribbit",
        clothing: "Striped Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Fruity",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/b/b3/Fruity_DnMe%2B.png",
        species: "Duck",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Sagittarius",
        quote: "",
        phrase: "グァバ",
        clothing: "Blue Aloha Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Fuchsia",
        alt_name: "",
        id: "der06",
        image_url: "https://dodo.ac/np/images/6/67/Fuchsia_NH.png",
        species: "Deer",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "19",
        sign: "Virgo",
        quote: "It takes one to know one.",
        phrase: "precious",
        clothing: "Zigzag-Print Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Gabi",
        alt_name: "",
        id: "rbt05",
        image_url: "https://dodo.ac/np/images/8/86/Gabi_NH.png",
        species: "Rabbit",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "December",
        birthday_day: "16",
        sign: "Sagittarius",
        quote: "The more the merrier.",
        phrase: "honeybun",
        clothing: "Gingham Picnic Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Gala",
        alt_name: "",
        id: "pig13",
        image_url: "https://dodo.ac/np/images/e/e6/Gala_NH.png",
        species: "Pig",
        personality: "Normal",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "5",
        sign: "Pisces",
        quote: "Still waters run deep.",
        phrase: "snortie",
        clothing: "Flower-Print Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Ganon",
        alt_name: "",
        id: "pig18",
        image_url: "https://dodo.ac/np/images/2/22/Ganon_NL_Model.png",
        species: "Pig",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "February",
        birthday_day: "21",
        sign: "Pisces",
        quote: "Never be ashamed to pig out.",
        phrase: "heh heh",
        clothing: "Ganon Outfit",
        nh: "0"
      }
    },
    {
      title: {
        name: "Gaston",
        alt_name: "",
        id: "rbt04",
        image_url: "https://dodo.ac/np/images/5/59/Gaston_NH.png",
        species: "Rabbit",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "28",
        sign: "Scorpio",
        quote: "An ear for an ear makes it hard to hear.",
        phrase: "mon chou",
        clothing: "Color-Block Dress Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Gayle",
        alt_name: "",
        id: "crd07",
        image_url: "https://dodo.ac/np/images/5/5e/Gayle_NH.png",
        species: "Alligator",
        personality: "Normal",
        gender: "Female",
        birthday_month: "May",
        birthday_day: "17",
        sign: "Taurus",
        quote: "An ounce of prevention is worth a pound of cure.",
        phrase: "snacky",
        clothing: "Lace-Up Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Gen",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/7/7f/Gen_DnMe%2B.png",
        species: "Sheep",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Aries",
        quote: "",
        phrase: "っしゃあ",
        clothing: "Red Check Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Genji",
        alt_name: "",
        id: "rbt08",
        image_url: "https://dodo.ac/np/images/6/67/Genji_NH.png",
        species: "Rabbit",
        personality: "Jock",
        gender: "Male",
        birthday_month: "January",
        birthday_day: "21",
        sign: "Aquarius",
        quote: "Fall down seven times, get up eight.",
        phrase: "mochi",
        clothing: "Misty Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Gigi",
        alt_name: "",
        id: "flg16",
        image_url: "https://dodo.ac/np/images/8/86/Gigi_NH.png",
        species: "Frog",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "August",
        birthday_day: "11",
        sign: "Leo",
        quote: "Look at the world through rose-colored glasses.",
        phrase: "ribbette",
        clothing: "Full-Length Dress with Pearls",
        nh: "1"
      }
    },
    {
      title: {
        name: "Gladys",
        alt_name: "",
        id: "ost01",
        image_url: "https://dodo.ac/np/images/a/a5/Gladys_NH_Transparent.png",
        species: "Ostrich",
        personality: "Normal",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "15",
        sign: "Capricorn",
        quote: "Smiles are free.",
        phrase: "stretch",
        clothing: "Misty Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Gloria",
        alt_name: "",
        id: "duk15",
        image_url: "https://dodo.ac/np/images/1/14/Gloria_NH.png",
        species: "Duck",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "August",
        birthday_day: "12",
        sign: "Leo",
        quote: "Time is money.",
        phrase: "quacker",
        clothing: "Floral Lace Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Goldie",
        alt_name: "",
        id: "dog00",
        image_url: "https://dodo.ac/np/images/8/83/Goldie_NH.png",
        species: "Dog",
        personality: "Normal",
        gender: "Female",
        birthday_month: "December",
        birthday_day: "27",
        sign: "Capricorn",
        quote: "A little bit of happiness is better than a lot of anguish.",
        phrase: "woof",
        clothing: "Tweed Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Gonzo",
        alt_name: "",
        id: "kal04",
        image_url: "https://dodo.ac/np/images/0/09/Gonzo_NH.png",
        species: "Koala",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "13",
        sign: "Libra",
        quote: "Brothers are brothers, cheese is cheese.",
        phrase: "mate",
        clothing: "Reindeer Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Goose",
        alt_name: "",
        id: "chn00",
        image_url: "https://dodo.ac/np/images/9/91/Goose_NH.png",
        species: "Chicken",
        personality: "Jock",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "4",
        sign: "Libra",
        quote: "Birds of a feather crow together.",
        phrase: "buh-kay",
        clothing: "Bold Aloha Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Graham",
        alt_name: "",
        id: "ham02",
        image_url: "https://dodo.ac/np/images/a/a1/Graham_NH.png",
        species: "Hamster",
        personality: "Smug",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "20",
        sign: "Gemini",
        quote: "Knowledge is power.",
        phrase: "indeed",
        clothing: "Madras Plaid Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Greta",
        alt_name: "",
        id: "mus16",
        image_url: "https://dodo.ac/np/images/b/bd/Greta_NH.png",
        species: "Mouse",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "5",
        sign: "Virgo",
        quote: "The world is a stage.",
        phrase: "yelp",
        clothing: "Pinafore",
        nh: "1"
      }
    },
    {
      title: {
        name: "Grizzly",
        alt_name: "",
        id: "bea09",
        image_url: "https://dodo.ac/np/images/4/4b/Grizzly_NH.png",
        species: "Bear",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "31",
        sign: "Leo",
        quote: "Those who live in glass houses shouldn't throw stones.",
        phrase: "grrr",
        clothing: "Flannel Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Groucho",
        alt_name: "",
        id: "bea06",
        image_url: "https://dodo.ac/np/images/1/1d/Groucho_NH.png",
        species: "Bear",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "23",
        sign: "Libra",
        quote: "Rocky road is more than just a flavor of ice cream.",
        phrase: "grumble",
        clothing: "Dragon Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Gruff",
        alt_name: "",
        id: "goa04",
        image_url: "https://dodo.ac/np/images/2/25/Gruff_NH.png",
        species: "Goat",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "29",
        sign: "Virgo",
        quote: "Don't burn bridges.",
        phrase: "bleh eh eh",
        clothing: "Old-School Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Gwen",
        alt_name: "",
        id: "pgn05",
        image_url: "https://dodo.ac/np/images/b/be/Gwen_NH.png",
        species: "Penguin",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "23",
        sign: "Aquarius",
        quote: "Mind your manners, or someone else will.",
        phrase: "h-h-h-hon",
        clothing: "Retro Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Hambo",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/a/a8/Hambo_PG.png",
        species: "Pig",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Virgo",
        quote: "",
        phrase: "yo",
        clothing: "Concierge Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Hamlet",
        alt_name: "",
        id: "ham00",
        image_url: "https://dodo.ac/np/images/4/46/Hamlet_NH.png",
        species: "Hamster",
        personality: "Jock",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "30",
        sign: "Gemini",
        quote: "The ear's the thing.",
        phrase: "hammie",
        clothing: "Big-Star Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Hamphrey",
        alt_name: "",
        id: "ham07",
        image_url: "https://dodo.ac/np/images/a/a9/Hamphrey_NH.png",
        species: "Hamster",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "February",
        birthday_day: "25",
        sign: "Pisces",
        quote: "Children should be seen and not heard.",
        phrase: "snort",
        clothing: "Fuzzy Vest",
        nh: "1"
      }
    },
    {
      title: {
        name: "Hank",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/9/9f/Hank_PG.png",
        species: "Chicken",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Libra",
        quote: "",
        phrase: "buhk buhk",
        clothing: "Exotic Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Hans",
        alt_name: "",
        id: "gor10",
        image_url: "https://dodo.ac/np/images/1/15/Hans_NH.png",
        species: "Gorilla",
        personality: "Smug",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "5",
        sign: "Sagittarius",
        quote: "One good turn deserves another.",
        phrase: "groovy",
        clothing: "Down Ski Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Harry",
        alt_name: "",
        id: "hip08",
        image_url: "https://dodo.ac/np/images/1/1a/Harry_NH.png",
        species: "Hippo",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "January",
        birthday_day: "7",
        sign: "Capricorn",
        quote: "Patience is a virtue for folks with time.",
        phrase: "beach bum",
        clothing: "Camo Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Hazel",
        alt_name: "",
        id: "squ18",
        image_url: "https://dodo.ac/np/images/1/17/Hazel_NH.png",
        species: "Squirrel",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "August",
        birthday_day: "30",
        sign: "Virgo",
        quote: "Never say never!",
        phrase: "uni-wow",
        clothing: "Athletic Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Hector",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/6/6e/Hector_PG.png",
        species: "Chicken",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Aries",
        quote: "",
        phrase: "coo-HAH",
        clothing: "Light Line Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Henry",
        alt_name: "",
        id: "flg19",
        image_url: "https://dodo.ac/np/images/2/26/Henry_NH.png",
        species: "Frog",
        personality: "Smug",
        gender: "Male",
        birthday_month: "September",
        birthday_day: "21",
        sign: "Virgo",
        quote: "The way to a frog's heart is through his stomach.",
        phrase: "snoozit",
        clothing: "Denim Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Hippeux",
        alt_name: "",
        id: "hip09",
        image_url: "https://dodo.ac/np/images/2/26/Hippeux_NH.png",
        species: "Hippo",
        personality: "Smug",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "15",
        sign: "Libra",
        quote: "Mottoes are for the unoriginal.",
        phrase: "natch",
        clothing: "Emblem Blazer",
        nh: "1"
      }
    },
    {
      title: {
        name: "Holden",
        alt_name: "",
        id: "ham08",
        image_url: "https://dodo.ac/np/images/b/b6/Holden_NLWa.png",
        species: "Hamster",
        personality: "Jock",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "11",
        sign: "Gemini",
        quote: "You can solve any problem if you just stick to it!",
        phrase: "glue stick",
        clothing: "High-Spirits Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Hopkins",
        alt_name: "",
        id: "rbt14",
        image_url: "https://dodo.ac/np/images/c/c1/Hopkins_NH.png",
        species: "Rabbit",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "March",
        birthday_day: "11",
        sign: "Pisces",
        quote: "A wise mammal gives danger a wide berth.",
        phrase: "thumper",
        clothing: "Striped Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Hopper",
        alt_name: "",
        id: "pgn03",
        image_url: "https://dodo.ac/np/images/c/cb/Hopper_NH.png",
        species: "Penguin",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "April",
        birthday_day: "6",
        sign: "Aries",
        quote: "Always have a comeback.",
        phrase: "slushie",
        clothing: "Dragon Suit",
        nh: "1"
      }
    },
    {
      title: {
        name: "Hornsby",
        alt_name: "",
        id: "rhn04",
        image_url: "https://dodo.ac/np/images/9/95/Hornsby_NH.png",
        species: "Rhinoceros",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "March",
        birthday_day: "20",
        sign: "Pisces",
        quote: "You can't hit a mosquito with a horseshoe.",
        phrase: "schnozzle",
        clothing: "Argyle Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Huck",
        alt_name: "",
        id: "flg11",
        image_url: "https://dodo.ac/np/images/1/17/Huck_NH.png",
        species: "Frog",
        personality: "Smug",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "9",
        sign: "Cancer",
        quote: "Cold coffee makes for a cold demeanor.",
        phrase: "hopper",
        clothing: "Striped Tank",
        nh: "1"
      }
    },
    {
      title: {
        name: "Huggy",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/2/2e/Huggy_PG.png",
        species: "Koala",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Pisces",
        quote: "",
        phrase: "bear",
        clothing: "Jade Check Print",
        nh: "0"
      }
    },
    {
      title: {
        name: "Hugh",
        alt_name: "",
        id: "pig03",
        image_url: "https://dodo.ac/np/images/b/b6/Hugh_NH.png",
        species: "Pig",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "30",
        sign: "Capricorn",
        quote: "Keep it real. Real chill.",
        phrase: "snortle",
        clothing: "Camo Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Iggly",
        alt_name: "",
        id: "pgn11",
        image_url: "https://dodo.ac/np/images/6/68/Iggly_NH.png",
        species: "Penguin",
        personality: "Jock",
        gender: "Male",
        birthday_month: "November",
        birthday_day: "2",
        sign: "Scorpio",
        quote: "Six of one, half dozen of the other.",
        phrase: "waddler",
        clothing: "Rugby Uniform",
        nh: "1"
      }
    },
    {
      title: {
        name: "Iggy",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/4/44/Iggy_PG.png",
        species: "Goat",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Capricorn",
        quote: "",
        phrase: "paaally",
        clothing: "White Ring Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Ike",
        alt_name: "",
        id: "bea11",
        image_url: "https://dodo.ac/np/images/3/34/Ike_NH.png",
        species: "Bear",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "16",
        sign: "Taurus",
        quote: "The higher you climb, the smaller things look.",
        phrase: "roadie",
        clothing: "Camo Bomber-Style Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Inkwell",
        alt_name: "",
        id: "ocp03",
        image_url: "https://dodo.ac/np/images/3/3b/Inkwell_NL_Model.png",
        species: "Octopus",
        personality: "Jock",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "2",
        sign: "Gemini",
        quote: "A sucker is born every minute.",
        phrase: "splat",
        clothing: "Black Anchor Tee",
        nh: "0"
      }
    },
    {
      title: {
        name: "Ione",
        alt_name: "",
        id: "squ21",
        image_url: "https://dodo.ac/np/images/4/40/Ione_amiibo.png",
        species: "Squirrel",
        personality: "Normal",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "11",
        sign: "Virgo",
        quote: "I was born under a lucky star.",
        phrase: "gleam",
        clothing: "Astro Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Jacob",
        alt_name: "",
        id: "brd11",
        image_url: "https://dodo.ac/np/images/3/3e/Jacob_NH.png",
        species: "Bird",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "24",
        sign: "Virgo",
        quote: "Your greatest strength can be your greatest weakness.",
        phrase: "ya feel",
        clothing: "Camo Bomber-Style Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Jacques",
        alt_name: "",
        id: "brd16",
        image_url: "https://dodo.ac/np/images/0/03/Jacques_NH.png",
        species: "Bird",
        personality: "Smug",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "22",
        sign: "Cancer",
        quote: "Better to have loved and squawked than to have never loved at all.",
        phrase: "zut alors",
        clothing: "Puffy Vest",
        nh: "1"
      }
    },
    {
      title: {
        name: "Jambette",
        alt_name: "",
        id: "flg13",
        image_url: "https://dodo.ac/np/images/3/35/Jambette_NH.png",
        species: "Frog",
        personality: "Normal",
        gender: "Female",
        birthday_month: "October",
        birthday_day: "27",
        sign: "Scorpio",
        quote: "It takes more muscles to frown than smile.",
        phrase: "croak-kay",
        clothing: "Shell Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Jane",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/0/04/Jane_PG.png",
        species: "Gorilla",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Sagittarius",
        quote: "",
        phrase: "chimp",
        clothing: "Rainbow Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Jay",
        alt_name: "",
        id: "brd00",
        image_url: "https://dodo.ac/np/images/3/3b/Jay_NH_1.png",
        species: "Bird",
        personality: "Jock",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "17",
        sign: "Cancer",
        quote: "He who hesitates has lost.",
        phrase: "heeeeeyy",
        clothing: "Six-Ball Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Jeremiah",
        alt_name: "",
        id: "flg07",
        image_url: "https://dodo.ac/np/images/9/93/Jeremiah_NH.png",
        species: "Frog",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "8",
        sign: "Cancer",
        quote: "Sleep before you leap.",
        phrase: "nee-deep",
        clothing: "Gingham Picnic Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Jitters",
        alt_name: "",
        id: "brd04",
        image_url: "https://dodo.ac/np/images/a/a6/Jitters_NH.png",
        species: "Bird",
        personality: "Jock",
        gender: "Male",
        birthday_month: "February",
        birthday_day: "2",
        sign: "Aquarius",
        quote: "When you're a team of one, you're always captain!",
        phrase: "bzzert",
        clothing: "Soccer-Uniform Top",
        nh: "1"
      }
    },
    {
      title: {
        name: "Joe",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/2/2d/Joe_DnMe%2B.png",
        species: "Bird",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Cancer",
        quote: "",
        phrase: "やれやれ",
        clothing: "Orange Pinstripe",
        nh: "0"
      }
    },
    {
      title: {
        name: "Joey",
        alt_name: "",
        id: "duk01",
        image_url: "https://dodo.ac/np/images/6/66/Joey_NH.png",
        species: "Duck",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "January",
        birthday_day: "3",
        sign: "Capricorn",
        quote: "Don't get your feathers all ruffled. Just chill.",
        phrase: "bleeeeeck",
        clothing: "Bear Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Jūbei",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/d/dd/J%C5%ABbei_DnMe%2B.png",
        species: "Lion",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Sagittarius",
        quote: "",
        phrase: "いかにも",
        clothing: "Thunder Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Judy",
        alt_name: "",
        id: "cbr19",
        image_url: "https://dodo.ac/np/images/d/d4/Judy_NH.png",
        species: "Bear cub",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "10",
        sign: "Pisces",
        quote: "I'm dancing my dreams away.",
        phrase: "myohmy",
        clothing: "Fairy-Tale Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Julia",
        alt_name: "",
        id: "ost05",
        image_url: "https://dodo.ac/np/images/0/0b/Julia_NH_Transparent.png",
        species: "Ostrich",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "July",
        birthday_day: "31",
        sign: "Leo",
        quote: "Cut once, measure twice... Wait— reverse that.",
        phrase: "dahling",
        clothing: "Zigzag-Print Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Julian",
        alt_name: "",
        id: "hrs13",
        image_url: "https://dodo.ac/np/images/f/f2/Julian_NH.png",
        species: "Horse",
        personality: "Smug",
        gender: "Male",
        birthday_month: "March",
        birthday_day: "15",
        sign: "Pisces",
        quote: "Never trot when you can prance.",
        phrase: "glitter",
        clothing: "Space Parka",
        nh: "1"
      }
    },
    {
      title: {
        name: "June",
        alt_name: "",
        id: "cbr13",
        image_url: "https://dodo.ac/np/images/8/85/June_NH.png",
        species: "Bear cub",
        personality: "Normal",
        gender: "Female",
        birthday_month: "May",
        birthday_day: "21",
        sign: "Gemini",
        quote: "Dream big, expect little.",
        phrase: "rainbow",
        clothing: "Hibiscus Muumuu",
        nh: "1"
      }
    },
    {
      title: {
        name: "Kabuki",
        alt_name: "",
        id: "cat09",
        image_url: "https://dodo.ac/np/images/2/2a/Kabuki_NH.png",
        species: "Cat",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "November",
        birthday_day: "29",
        sign: "Sagittarius",
        quote: "If you make your opponent flinch, you have already won.",
        phrase: "meooo-OH",
        clothing: "Kabuki-Actor Yukata",
        nh: "1"
      }
    },
    {
      title: {
        name: "Katt",
        alt_name: "",
        id: "cat21",
        image_url: "https://dodo.ac/np/images/c/c9/Katt_NH.png",
        species: "Cat",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "27",
        sign: "Taurus",
        quote: "MeowMEOWmeow!",
        phrase: "purrty",
        clothing: "Old-School Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Keaton",
        alt_name: "",
        id: "pbr08",
        image_url: "https://dodo.ac/np/images/3/3b/Keaton_NH.png",
        species: "Eagle",
        personality: "Smug",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "1",
        sign: "Gemini",
        quote: "Even in a room full of fools, someone is the smartest.",
        phrase: "wingo",
        clothing: "Fuzzy Vest",
        nh: "1"
      }
    },
    {
      title: {
        name: "Ken",
        alt_name: "",
        id: "chn13",
        image_url: "https://dodo.ac/np/images/e/e0/Ken_NH.png",
        species: "Chicken",
        personality: "Smug",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "23",
        sign: "Capricorn",
        quote: "C'est la vie!",
        phrase: "no doubt",
        clothing: "Ninja Costume",
        nh: "1"
      }
    },
    {
      title: {
        name: "Ketchup",
        alt_name: "",
        id: "duk13",
        image_url: "https://dodo.ac/np/images/4/42/Ketchup_NH.png",
        species: "Duck",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "July",
        birthday_day: "27",
        sign: "Leo",
        quote: "When in doubt, eat a tomato!",
        phrase: "bitty",
        clothing: "Lacy Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Kevin",
        alt_name: "",
        id: "pig15",
        image_url: "https://dodo.ac/np/images/7/71/Kevin_NH.png",
        species: "Pig",
        personality: "Jock",
        gender: "Male",
        birthday_month: "April",
        birthday_day: "26",
        sign: "Taurus",
        quote: "Sometimes it's OK to get dirty.",
        phrase: "weeweewee",
        clothing: "After-School Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Kid Cat",
        alt_name: "",
        id: "cat10",
        image_url: "https://dodo.ac/np/images/c/c3/Kid_Cat_NH.png",
        species: "Cat",
        personality: "Jock",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "1",
        sign: "Leo",
        quote: "Crime doesn't pay!",
        phrase: "psst",
        clothing: "No. 1 Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Kidd",
        alt_name: "",
        id: "goa07",
        image_url: "https://dodo.ac/np/images/7/7a/Kidd_NH.png",
        species: "Goat",
        personality: "Smug",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "28",
        sign: "Cancer",
        quote: "Be yourself, everyone else is already taken.",
        phrase: "wut",
        clothing: "Tailored Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Kiki",
        alt_name: "",
        id: "cat04",
        image_url: "https://dodo.ac/np/images/c/c5/Kiki_NH.png",
        species: "Cat",
        personality: "Normal",
        gender: "Female",
        birthday_month: "October",
        birthday_day: "8",
        sign: "Libra",
        quote: "Nothing ventured, nothing gained.",
        phrase: "kitty cat",
        clothing: "Argyle Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Kit",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/c/cd/Kit_DnMe%2B.png",
        species: "Squirrel",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Libra",
        quote: "",
        phrase: "だキョ",
        clothing: "Jagged Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Kitt",
        alt_name: "",
        id: "kgr00",
        image_url: "https://dodo.ac/np/images/7/75/Kitt_NH.png",
        species: "Kangaroo",
        personality: "Normal",
        gender: "Female",
        birthday_month: "October",
        birthday_day: "11",
        sign: "Libra",
        quote: "Funny parents have funny kids.",
        phrase: "child",
        clothing: "Striped Halter Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Kitty",
        alt_name: "",
        id: "cat14",
        image_url: "https://dodo.ac/np/images/2/21/Kitty_NH.png",
        species: "Cat",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "15",
        sign: "Aquarius",
        quote: "If you want something done well, do it yourself.",
        phrase: "mrowrr",
        clothing: "Loose Fall Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Klaus",
        alt_name: "",
        id: "bea14",
        image_url: "https://dodo.ac/np/images/5/5c/Klaus_NH.png",
        species: "Bear",
        personality: "Smug",
        gender: "Male",
        birthday_month: "March",
        birthday_day: "31",
        sign: "Aries",
        quote: "Pride goes before a fall.",
        phrase: "strudel",
        clothing: "Toga",
        nh: "1"
      }
    },
    {
      title: {
        name: "Knox",
        alt_name: "",
        id: "chn11",
        image_url: "https://dodo.ac/np/images/0/03/Knox_NH.png",
        species: "Chicken",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "November",
        birthday_day: "23",
        sign: "Sagittarius",
        quote: "A chicken's coop is its castle.",
        phrase: "cluckling",
        clothing: "Cavalier Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Kody",
        alt_name: "",
        id: "cbr04",
        image_url: "https://dodo.ac/np/images/2/20/Kody_NH.png",
        species: "Bear cub",
        personality: "Jock",
        gender: "Male",
        birthday_month: "September",
        birthday_day: "28",
        sign: "Libra",
        quote: "The sky's the limit!",
        phrase: "grah grah",
        clothing: "Western Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Koharu",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/e/ef/Koharu_DnMe%2B.png",
        species: "Kangaroo",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Libra",
        quote: "",
        phrase: "ちょいと",
        clothing: "Red Aloha Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Kyle",
        alt_name: "",
        id: "wol10",
        image_url: "https://dodo.ac/np/images/4/46/Kyle_NH.png",
        species: "Wolf",
        personality: "Smug",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "6",
        sign: "Sagittarius",
        quote: "Never trust a sheep in wolf's clothing.",
        phrase: "alpha",
        clothing: "Gilet and Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Leigh",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/1/11/Leigh_PG.png",
        species: "Chicken",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Sagittarius",
        quote: "",
        phrase: "cutie",
        clothing: "Puzzling Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Leonardo",
        alt_name: "",
        id: "tig04",
        image_url: "https://dodo.ac/np/images/0/0a/Leonardo_NH.png",
        species: "Tiger",
        personality: "Jock",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "15",
        sign: "Taurus",
        quote: "That's the way the energy bar crumbles.",
        phrase: "flexin'",
        clothing: "Hawk Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Leopold",
        alt_name: "",
        id: "lon04",
        image_url: "https://dodo.ac/np/images/3/3a/Leopold_NH.png",
        species: "Lion",
        personality: "Smug",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "14",
        sign: "Leo",
        quote: "The bigger the fish, the bigger your dinner.",
        phrase: "lion cub",
        clothing: "Tennis Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Lily",
        alt_name: "",
        id: "flg00",
        image_url: "https://dodo.ac/np/images/4/42/Lily_NH.png",
        species: "Frog",
        personality: "Normal",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "4",
        sign: "Aquarius",
        quote: "Don't jump to conclusions!",
        phrase: "toady",
        clothing: "Tropical Muumuu",
        nh: "1"
      }
    },
    {
      title: {
        name: "Limberg",
        alt_name: "",
        id: "mus01",
        image_url: "https://dodo.ac/np/images/b/b0/Limberg_NH.png",
        species: "Mouse",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "17",
        sign: "Libra",
        quote: "Don't build a better mousetrap.",
        phrase: "squinky",
        clothing: "Hanten Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Lionel",
        alt_name: "",
        id: "lon08",
        image_url: "https://dodo.ac/np/images/b/bb/Lionel_NH.png",
        species: "Lion",
        personality: "Smug",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "29",
        sign: "Leo",
        quote: "Love is blind.",
        phrase: "precisely",
        clothing: "Noble Coat",
        nh: "1"
      }
    },
    {
      title: {
        name: "Liz",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/8/8e/Liz_PG.png",
        species: "Alligator",
        personality: "Normal",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Virgo",
        quote: "",
        phrase: "groonch",
        clothing: "Diamond Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Lobo",
        alt_name: "",
        id: "wol01",
        image_url: "https://dodo.ac/np/images/d/d1/Lobo_NH.png",
        species: "Wolf",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "November",
        birthday_day: "5",
        sign: "Scorpio",
        quote: "If it's not one thing, it's another.",
        phrase: "ah-rooooo",
        clothing: "Bomber-Style Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Lolly",
        alt_name: "",
        id: "cat18",
        image_url: "https://dodo.ac/np/images/1/16/Lolly_NH.png",
        species: "Cat",
        personality: "Normal",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "27",
        sign: "Aries",
        quote: "Laughter is the best medicine.",
        phrase: "bonbon",
        clothing: "Snowy Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Lopez",
        alt_name: "",
        id: "der05",
        image_url: "https://dodo.ac/np/images/5/53/Lopez_NH.png",
        species: "Deer",
        personality: "Smug",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "20",
        sign: "Leo",
        quote: "Always look both ways before crossing the street.",
        phrase: "badoom",
        clothing: "Chimayo Vest",
        nh: "1"
      }
    },
    {
      title: {
        name: "Louie",
        alt_name: "",
        id: "gor04",
        image_url: "https://dodo.ac/np/images/5/5a/Louie_NH.png",
        species: "Gorilla",
        personality: "Jock",
        gender: "Male",
        birthday_month: "March",
        birthday_day: "26",
        sign: "Aries",
        quote: "It's all about the muscle.",
        phrase: "hoo hoo ha",
        clothing: "Muscle Tank",
        nh: "1"
      }
    },
    {
      title: {
        name: "Lucha",
        alt_name: "",
        id: "brd15",
        image_url: "https://dodo.ac/np/images/4/4a/Lucha_NH.png",
        species: "Bird",
        personality: "Smug",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "12",
        sign: "Sagittarius",
        quote: "Birds of a feather, et cetera, et cetera...",
        phrase: "cacaw",
        clothing: "Athletic Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Lucky",
        alt_name: "",
        id: "dog02",
        image_url: "https://dodo.ac/np/images/5/59/Lucky_NH.png",
        species: "Dog",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "November",
        birthday_day: "4",
        sign: "Scorpio",
        quote: "Don't bite the hand that feeds you.",
        phrase: "rrr-owch",
        clothing: "Open-Collar Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Lucy",
        alt_name: "",
        id: "pig04",
        image_url: "https://dodo.ac/np/images/e/e5/Lucy_NH.png",
        species: "Pig",
        personality: "Normal",
        gender: "Female",
        birthday_month: "June",
        birthday_day: "2",
        sign: "Gemini",
        quote: "The best is yet to come.",
        phrase: "snoooink",
        clothing: "Frilly Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Lulu",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/d/d2/Lulu_DnMe%2B.png",
        species: "Anteater",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Aquarius",
        quote: "",
        phrase: "あらあら",
        clothing: "Red Aloha Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Lulu",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/e/ed/Lulu_PG.png",
        species: "Hippo",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Sagittarius",
        quote: "",
        phrase: "yaaaawl",
        clothing: "Flowery Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Lyman",
        alt_name: "",
        id: "kal09",
        image_url: "https://dodo.ac/np/images/a/a5/Lyman_NH.png",
        species: "Koala",
        personality: "Jock",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "12",
        sign: "Libra",
        quote: "Eucalyptus is the spice of life.",
        phrase: "chips",
        clothing: "Vertical-Stripes Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Mac",
        alt_name: "",
        id: "dog14",
        image_url: "https://dodo.ac/np/images/a/ab/Mac_NH.png",
        species: "Dog",
        personality: "Jock",
        gender: "Male",
        birthday_month: "November",
        birthday_day: "11",
        sign: "Scorpio",
        quote: "Sometimes life is rough.",
        phrase: "woo woof",
        clothing: "Raglan Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Madam Rosa",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/b/b9/Madam_Rosa_DnMe%2B.png",
        species: "Bird",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Scorpio",
        quote: "",
        phrase: "ほほほ",
        clothing: "Red Aloha Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Maddie",
        alt_name: "",
        id: "dog09",
        image_url: "https://dodo.ac/np/images/0/06/Maddie_NH.png",
        species: "Dog",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "11",
        sign: "Capricorn",
        quote: "The IT revolution is under way.",
        phrase: "yippee",
        clothing: "Layered Sleeveless Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Maelle",
        alt_name: "",
        id: "duk03",
        image_url: "https://dodo.ac/np/images/9/93/Maelle_NH.png",
        species: "Duck",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "8",
        sign: "Aries",
        quote: "A wise duck takes care of its bill.",
        phrase: "duckling",
        clothing: "Flower Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Maggie",
        alt_name: "",
        id: "pig10",
        image_url: "https://dodo.ac/np/images/b/b8/Maggie_NH.png",
        species: "Pig",
        personality: "Normal",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "3",
        sign: "Virgo",
        quote: "All a plant needs is love...and sun and water and soil.",
        phrase: "schep",
        clothing: "Pintuck-Pleated Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Mallary",
        alt_name: "",
        id: "duk06",
        image_url: "https://dodo.ac/np/images/2/28/Mallary_NH.png",
        species: "Duck",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "November",
        birthday_day: "17",
        sign: "Scorpio",
        quote: "Purple is the color of royalty.",
        phrase: "quackpth",
        clothing: "Striped Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Maple",
        alt_name: "",
        id: "cbr01",
        image_url: "https://dodo.ac/np/images/a/a2/Maple_NH.png",
        species: "Bear cub",
        personality: "Normal",
        gender: "Female",
        birthday_month: "June",
        birthday_day: "15",
        sign: "Gemini",
        quote: "Waste not, want not.",
        phrase: "honey",
        clothing: "Tree Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Marcel",
        alt_name: "",
        id: "dog15",
        image_url: "https://dodo.ac/np/images/3/3e/Marcel_NH.png",
        species: "Dog",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "31",
        sign: "Capricorn",
        quote: "There's not a dog so bad that he won't wag his tail.",
        phrase: "non",
        clothing: "Sea Hanten Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Marcie",
        alt_name: "",
        id: "kgr10",
        image_url: "https://dodo.ac/np/images/2/2b/Marcie_NH.png",
        species: "Kangaroo",
        personality: "Normal",
        gender: "Female",
        birthday_month: "May",
        birthday_day: "31",
        sign: "Gemini",
        quote: "The road to a friend's house is never long.",
        phrase: "pouches",
        clothing: "Heart Apron",
        nh: "1"
      }
    },
    {
      title: {
        name: "Marcy",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/4/4d/Marcy_PG.png",
        species: "Kangaroo",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Cancer",
        quote: "",
        phrase: "young 'un",
        clothing: "Snowcone Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Margie",
        alt_name: "",
        id: "elp04",
        image_url: "https://dodo.ac/np/images/5/54/Margie_NH.png",
        species: "Elephant",
        personality: "Normal",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "28",
        sign: "Aquarius",
        quote: "Keep your feet on the ground.",
        phrase: "tootie",
        clothing: "Silk Floral-Print Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Marina",
        alt_name: "",
        id: "ocp01",
        image_url: "https://dodo.ac/np/images/2/25/Marina_NH.png",
        species: "Octopus",
        personality: "Normal",
        gender: "Female",
        birthday_month: "June",
        birthday_day: "26",
        sign: "Cancer",
        quote: "If you can't say something nice, don't say anything at all.",
        phrase: "blurp",
        clothing: "Dreamy Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Marlo",
        alt_name: "",
        id: "ham09",
        image_url: "https://dodo.ac/np/images/c/c1/Marlo_amiibo.png",
        species: "Hamster",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "26",
        sign: "Cancer",
        quote: "You gotta walk the walk if you're gonna talk the talk.",
        phrase: "gabeesh",
        clothing: "Doublet",
        nh: "1"
      }
    },
    {
      title: {
        name: "Marshal",
        alt_name: "",
        id: "squ17",
        image_url: "https://dodo.ac/np/images/d/da/Marshal_NH.png",
        species: "Squirrel",
        personality: "Smug",
        gender: "Male",
        birthday_month: "September",
        birthday_day: "29",
        sign: "Libra",
        quote: "Seize the day.",
        phrase: "sulky",
        clothing: "Puffy Vest",
        nh: "1"
      }
    },
    {
      title: {
        name: "Marty",
        alt_name: "",
        id: "cbr18",
        image_url: "https://dodo.ac/np/images/a/a9/Marty_PC.png",
        species: "Bear cub",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "April",
        birthday_day: "16",
        sign: "Aries",
        quote: "Just wait until I get started!",
        phrase: "pompom",
        clothing: "Pompompurin Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Masa",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/0/0a/Masa_DnMe%2B.png",
        species: "Dog",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Pisces",
        quote: "",
        phrase: "てもんだ",
        clothing: "Blue Aloha Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Mathilda",
        alt_name: "",
        id: "kgr01",
        image_url: "https://dodo.ac/np/images/5/58/Mathilda_NH.png",
        species: "Kangaroo",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "November",
        birthday_day: "12",
        sign: "Scorpio",
        quote: "Nail polish is thicker than water.",
        phrase: "wee baby",
        clothing: "Sleeveless Sweater Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Medli",
        alt_name: "",
        id: "brd19",
        image_url: "https://dodo.ac/np/images/e/ed/Medli_NL_Model_2.png",
        species: "Bird",
        personality: "Normal",
        gender: "Female",
        birthday_month: "December",
        birthday_day: "13",
        sign: "Sagittarius",
        quote: "A bird on the wing is worth two on the ground.",
        phrase: "gimme",
        clothing: "Medli Outfit",
        nh: "0"
      }
    },
    {
      title: {
        name: "Megan",
        alt_name: "",
        id: "bea15",
        image_url: "https://dodo.ac/np/images/7/72/Megan_NH_1.png",
        species: "Bear",
        personality: "Normal",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "13",
        sign: "Pisces",
        quote: "Take a page out of someone else's book, if it's a good book.",
        phrase: "sundae",
        clothing: "Dollhouse Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Megumi",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/6/67/Megumi_DnMe%2B.png",
        species: "Dog",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Aries",
        quote: "",
        phrase: "きゅん",
        clothing: "Berry Gingham",
        nh: "0"
      }
    },
    {
      title: {
        name: "Melba",
        alt_name: "",
        id: "kal02",
        image_url: "https://dodo.ac/np/images/4/43/Melba_NH.png",
        species: "Koala",
        personality: "Normal",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "12",
        sign: "Aries",
        quote: "A friend who shares is a friend who cares.",
        phrase: "toasty",
        clothing: "Plaid-Print Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Meow",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/5/54/Meow_DnMe%2B.png",
        species: "Cat",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Virgo",
        quote: "",
        phrase: "ミャウ",
        clothing: "Blossom Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Merengue",
        alt_name: "",
        id: "rhn07",
        image_url: "https://dodo.ac/np/images/0/0c/Merengue_NH.png",
        species: "Rhinoceros",
        personality: "Normal",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "19",
        sign: "Pisces",
        quote: "Life is a piece of cake.",
        phrase: "shortcake",
        clothing: "Chef's Outfit",
        nh: "1"
      }
    },
    {
      title: {
        name: "Merry",
        alt_name: "",
        id: "cat16",
        image_url: "https://dodo.ac/np/images/4/4f/Merry_NH.png",
        species: "Cat",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "June",
        birthday_day: "29",
        sign: "Cancer",
        quote: "A smile increases your face value.",
        phrase: "mweee",
        clothing: "Dreamy Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Midge",
        alt_name: "",
        id: "brd08",
        image_url: "https://dodo.ac/np/images/a/af/Midge_NH.png",
        species: "Bird",
        personality: "Normal",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "12",
        sign: "Pisces",
        quote: "When the world gets cold, just fly south.",
        phrase: "tweedledee",
        clothing: "Silk Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Mint",
        alt_name: "",
        id: "squ09",
        image_url: "https://dodo.ac/np/images/5/5b/Mint_NH.png",
        species: "Squirrel",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "May",
        birthday_day: "2",
        sign: "Taurus",
        quote: "Always lead by example.",
        phrase: "ahhhhhh",
        clothing: "Gumdrop Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Mira",
        alt_name: "",
        id: "rbt19",
        image_url: "https://dodo.ac/np/images/d/d1/Mira_NH.png",
        species: "Rabbit",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "July",
        birthday_day: "6",
        sign: "Cancer",
        quote: "Always help a friend in need.",
        phrase: "cottontail",
        clothing: "Noble Zap Suit",
        nh: "1"
      }
    },
    {
      title: {
        name: "Miranda",
        alt_name: "",
        id: "duk12",
        image_url: "https://dodo.ac/np/images/8/8c/Miranda_NH.png",
        species: "Duck",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "23",
        sign: "Taurus",
        quote: "If the world is flooded, it will be easy for the duck.",
        phrase: "quackulous",
        clothing: "Sleeveless Shirtdress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Mitzi",
        alt_name: "",
        id: "cat01",
        image_url: "https://dodo.ac/np/images/6/63/Mitzi_NH.png",
        species: "Cat",
        personality: "Normal",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "25",
        sign: "Libra",
        quote: "Practice makes purrrfect!",
        phrase: "mew",
        clothing: "Gumdrop Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Moe",
        alt_name: "",
        id: "cat08",
        image_url: "https://dodo.ac/np/images/a/a4/Moe_NH.png",
        species: "Cat",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "January",
        birthday_day: "12",
        sign: "Capricorn",
        quote: "Ignorance is bliss.",
        phrase: "myawn",
        clothing: "Simple Parka",
        nh: "1"
      }
    },
    {
      title: {
        name: "Molly",
        alt_name: "",
        id: "duk16",
        image_url: "https://dodo.ac/np/images/2/29/Molly_NH.png",
        species: "Duck",
        personality: "Normal",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "7",
        sign: "Pisces",
        quote: "Like water off a duck's back.",
        phrase: "quackidee",
        clothing: "Pintuck-Pleated Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Monique",
        alt_name: "",
        id: "cat11",
        image_url: "https://dodo.ac/np/images/c/cc/Monique_NH.png",
        species: "Cat",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "30",
        sign: "Libra",
        quote: "All publicity is good publicity!",
        phrase: "pffffft",
        clothing: "Flapper Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Monty",
        alt_name: "",
        id: "mnk04",
        image_url: "https://dodo.ac/np/images/d/d7/Monty_NH.png",
        species: "Monkey",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "7",
        sign: "Sagittarius",
        quote: "No news is good news.",
        phrase: "g'tang",
        clothing: "Guayabera Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Moose",
        alt_name: "",
        id: "mus14",
        image_url: "https://dodo.ac/np/images/e/ee/Moose_NH.png",
        species: "Mouse",
        personality: "Jock",
        gender: "Male",
        birthday_month: "September",
        birthday_day: "13",
        sign: "Virgo",
        quote: "A cornered rat will summon the courage to bite a cat.",
        phrase: "shorty",
        clothing: "Big-Star Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Mott",
        alt_name: "",
        id: "lon06",
        image_url: "https://dodo.ac/np/images/b/b8/Mott_NH.png",
        species: "Lion",
        personality: "Jock",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "10",
        sign: "Cancer",
        quote: "The lion's share goes to the lion.",
        phrase: "cagey",
        clothing: "College Cardigan",
        nh: "1"
      }
    },
    {
      title: {
        name: "Muffy",
        alt_name: "",
        id: "shp12",
        image_url: "https://dodo.ac/np/images/1/16/Muffy_NH.png",
        species: "Sheep",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "14",
        sign: "Aquarius",
        quote: "There's a black sheep in every family.",
        phrase: "nightshade",
        clothing: "Ruffled Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Murphy",
        alt_name: "",
        id: "cbr07",
        image_url: "https://dodo.ac/np/images/7/7c/Murphy_NH.png",
        species: "Bear cub",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "29",
        sign: "Capricorn",
        quote: "More money, more problems.",
        phrase: "malarkey",
        clothing: "Puffy Vest",
        nh: "1"
      }
    },
    {
      title: {
        name: "Nan",
        alt_name: "",
        id: "goa01",
        image_url: "https://dodo.ac/np/images/b/b8/Nan_NH.png",
        species: "Goat",
        personality: "Normal",
        gender: "Female",
        birthday_month: "August",
        birthday_day: "24",
        sign: "Virgo",
        quote: "Nanny-nanny boo-boo!",
        phrase: "kid",
        clothing: "Tweed Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Nana",
        alt_name: "",
        id: "mnk01",
        image_url: "https://dodo.ac/np/images/b/b1/Nana_NH.png",
        species: "Monkey",
        personality: "Normal",
        gender: "Female",
        birthday_month: "August",
        birthday_day: "23",
        sign: "Virgo",
        quote: "Bread always falls peanut-butter side down.",
        phrase: "po po",
        clothing: "Pom-Pom Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Naomi",
        alt_name: "",
        id: "cow07",
        image_url: "https://dodo.ac/np/images/f/f6/Naomi_NH.png",
        species: "Cow",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "28",
        sign: "Pisces",
        quote: "Moo like there's no tomorrow.",
        phrase: "moolah",
        clothing: "Marble-Print Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Nate",
        alt_name: "",
        id: "bea05",
        image_url: "https://dodo.ac/np/images/5/55/Nate_NH.png",
        species: "Bear",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "16",
        sign: "Leo",
        quote: "Be true to yourself.",
        phrase: "yawwwn",
        clothing: "Reindeer Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Nibbles",
        alt_name: "",
        id: "squ04",
        image_url: "https://dodo.ac/np/images/9/97/Nibbles_NH.png",
        species: "Squirrel",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "July",
        birthday_day: "19",
        sign: "Cancer",
        quote: "Appearances are, like, totally deceiving.",
        phrase: "niblet",
        clothing: "Watermelon Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Nindori",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/6/68/Nindori_DnMe%2B.png",
        species: "Ostrich",
        personality: "Jock",
        gender: "Male",
        birthday_month: "September",
        birthday_day: "14",
        sign: "Virgo",
        quote: "",
        phrase: "ドクソウ",
        clothing: "G Logo Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Norma",
        alt_name: "",
        id: "cow06",
        image_url: "https://dodo.ac/np/images/e/e7/Norma_NH.png",
        species: "Cow",
        personality: "Normal",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "20",
        sign: "Virgo",
        quote: "If you want what you have, then you'll have what you want.",
        phrase: "hoof hoo",
        clothing: "Plaid-Print Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Nosegay",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/3/3f/Nosegay_PG.png",
        species: "Anteater",
        personality: "Normal",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Aquarius",
        quote: "",
        phrase: "hoooonk",
        clothing: "Loud Bloom Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "O'Hare",
        alt_name: "",
        id: "rbt15",
        image_url: "https://dodo.ac/np/images/c/cf/O%27Hare_NH.png",
        species: "Rabbit",
        personality: "Smug",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "24",
        sign: "Leo",
        quote: "It's not old; it's vintage.",
        phrase: "amigo",
        clothing: "Pineapple Aloha Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Octavian",
        alt_name: "",
        id: "ocp00",
        image_url: "https://dodo.ac/np/images/5/54/Octavian_NH_Transparent.png",
        species: "Octopus",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "September",
        birthday_day: "20",
        sign: "Virgo",
        quote: "Don't be a sucker!",
        phrase: "sucker",
        clothing: "Gold-Print Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Olaf",
        alt_name: "",
        id: "ant09",
        image_url: "https://dodo.ac/np/images/1/11/Olaf_NH.png",
        species: "Anteater",
        personality: "Smug",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "19",
        sign: "Taurus",
        quote: "Keep your nose clean.",
        phrase: "whiffa",
        clothing: "Suit of Lights",
        nh: "1"
      }
    },
    {
      title: {
        name: "Olive",
        alt_name: "",
        id: "cbr09",
        image_url: "https://dodo.ac/np/images/5/5c/Olive_NH.png",
        species: "Bear cub",
        personality: "Normal",
        gender: "Female",
        birthday_month: "July",
        birthday_day: "12",
        sign: "Cancer",
        quote: "Sticky fingers attract bees.",
        phrase: "sweet pea",
        clothing: "Plover Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Olivia",
        alt_name: "",
        id: "cat03",
        image_url: "https://dodo.ac/np/images/3/36/Olivia_NH.png",
        species: "Cat",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "3",
        sign: "Aquarius",
        quote: "There's an exception to every rule.",
        phrase: "purrr",
        clothing: "Sweetheart Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Opal",
        alt_name: "",
        id: "elp00",
        image_url: "https://dodo.ac/np/images/c/ce/Opal_NH.png",
        species: "Elephant",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "20",
        sign: "Aquarius",
        quote: "However little you think of an elephant, you can't say it won't fill a pot.",
        phrase: "snoot",
        clothing: "Front-Tie Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Otis",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/8/80/Otis_PG.png",
        species: "Bird",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Capricorn",
        quote: "",
        phrase: "I s'pose",
        clothing: "Moldy Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Oxford",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/1/10/Oxford_PG.png",
        species: "Bull",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Taurus",
        quote: "",
        phrase: "bully, eh",
        clothing: "Leather Jerkin",
        nh: "0"
      }
    },
    {
      title: {
        name: "Ozzie",
        alt_name: "",
        id: "kal05",
        image_url: "https://dodo.ac/np/images/3/3a/Ozzie_NH.png",
        species: "Koala",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "7",
        sign: "Taurus",
        quote: "Half a loaf is better than none.",
        phrase: "ol' bear",
        clothing: "Energetic Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Pancetti",
        alt_name: "",
        id: "pig16",
        image_url: "https://dodo.ac/np/images/e/ec/Pancetti_NH.png",
        species: "Pig",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "November",
        birthday_day: "14",
        sign: "Scorpio",
        quote: "Always get it in writing.",
        phrase: "sooey",
        clothing: "Dollhouse Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Pango",
        alt_name: "",
        id: "ant02",
        image_url: "https://dodo.ac/np/images/d/d5/Pango_NH.png",
        species: "Anteater",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "November",
        birthday_day: "9",
        sign: "Scorpio",
        quote: "A thing of beauty is a joy forever.",
        phrase: "snooooof",
        clothing: "Oversized Print Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Paolo",
        alt_name: "",
        id: "elp05",
        image_url: "https://dodo.ac/np/images/5/59/Paolo_NH.png",
        species: "Elephant",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "5",
        sign: "Taurus",
        quote: "When it works, it works.",
        phrase: "pal",
        clothing: "Simple Parka",
        nh: "1"
      }
    },
    {
      title: {
        name: "Papi",
        alt_name: "",
        id: "hrs12",
        image_url: "https://dodo.ac/np/images/a/a7/Papi_NH.png",
        species: "Horse",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "January",
        birthday_day: "10",
        sign: "Capricorn",
        quote: "Never say neigh.",
        phrase: "haaay",
        clothing: "Colorful Striped Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Pashmina",
        alt_name: "",
        id: "goa08",
        image_url: "https://dodo.ac/np/images/3/3e/Pashmina_NH.png",
        species: "Goat",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "December",
        birthday_day: "26",
        sign: "Capricorn",
        quote: "Before you judge someone, walk a mile in their hooves.",
        phrase: "kidders",
        clothing: "Rainbow Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Pate",
        alt_name: "",
        id: "duk02",
        image_url: "https://dodo.ac/np/images/6/6b/Pate_NH.png",
        species: "Duck",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "23",
        sign: "Pisces",
        quote: "A duck won't bite you.",
        phrase: "quackle",
        clothing: "Sunflower Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Patricia",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/a/aa/Patricia_DnMe%2B.png",
        species: "Rhinoceros",
        personality: "Normal",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Virgo",
        quote: "",
        phrase: "えへっ",
        clothing: "Red Aloha Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Patty",
        alt_name: "",
        id: "cow00",
        image_url: "https://dodo.ac/np/images/f/f1/Patty_NH.png",
        species: "Cow",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "May",
        birthday_day: "10",
        sign: "Taurus",
        quote: "A friend in need is a friend indeed!",
        phrase: "how-now",
        clothing: "Orange Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Paula",
        alt_name: "",
        id: "bea10",
        image_url: "https://dodo.ac/np/images/0/0f/Paula_NH.png",
        species: "Bear",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "22",
        sign: "Aries",
        quote: "Trends always make a comeback.",
        phrase: "yodelay",
        clothing: "Zigzag-Print Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Peaches",
        alt_name: "",
        id: "hrs08",
        image_url: "https://dodo.ac/np/images/0/0d/Peaches_NH.png",
        species: "Horse",
        personality: "Normal",
        gender: "Female",
        birthday_month: "November",
        birthday_day: "28",
        sign: "Sagittarius",
        quote: "Every day is a gift.",
        phrase: "neighbor",
        clothing: "Long Denim Cardigan",
        nh: "1"
      }
    },
    {
      title: {
        name: "Peanut",
        alt_name: "",
        id: "squ00",
        image_url: "https://dodo.ac/np/images/0/06/Peanut_NH_Transparent.png",
        species: "Squirrel",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "June",
        birthday_day: "8",
        sign: "Gemini",
        quote: "Never take a nibble when you can take a bite.",
        phrase: "slacker",
        clothing: "Striped Maxi Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Pecan",
        alt_name: "",
        id: "squ03",
        image_url: "https://dodo.ac/np/images/6/60/Pecan_NH.png",
        species: "Squirrel",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "10",
        sign: "Virgo",
        quote: "Promises are like pie crusts— they're made to be broken.",
        phrase: "chipmunk",
        clothing: "Milkmaid Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Peck",
        alt_name: "",
        id: "brd17",
        image_url: "https://dodo.ac/np/images/4/44/Peck_NH.png",
        species: "Bird",
        personality: "Jock",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "25",
        sign: "Leo",
        quote: "The best defense is a good offense.",
        phrase: "crunch",
        clothing: "Raglan Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Peewee",
        alt_name: "",
        id: "gor01",
        image_url: "https://dodo.ac/np/images/2/2a/Peewee_NH.png",
        species: "Gorilla",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "September",
        birthday_day: "11",
        sign: "Virgo",
        quote: "Look behind you.",
        phrase: "li'l bitty baby",
        clothing: "Five-Ball Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Peggy",
        alt_name: "",
        id: "pig11",
        image_url: "https://dodo.ac/np/images/2/28/Peggy_NH.png",
        species: "Pig",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "May",
        birthday_day: "23",
        sign: "Gemini",
        quote: "We're all diamonds in the rough.",
        phrase: "shweetie",
        clothing: "Aran-Knit Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Pekoe",
        alt_name: "",
        id: "cbr14",
        image_url: "https://dodo.ac/np/images/d/df/Pekoe_NH.png",
        species: "Bear cub",
        personality: "Normal",
        gender: "Female",
        birthday_month: "May",
        birthday_day: "18",
        sign: "Taurus",
        quote: "Let bygones be bygones.",
        phrase: "bud",
        clothing: "Sleeveless Silk Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Penelope",
        alt_name: "",
        id: "mus17",
        image_url: "https://dodo.ac/np/images/1/15/Penelope_NH.png",
        species: "Mouse",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "5",
        sign: "Aquarius",
        quote: "One mile or a thousand makes no difference to love.",
        phrase: "oh bow",
        clothing: "Oversized Print Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Penny",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/7/78/Penny_PG.png",
        species: "Mouse",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Cancer",
        quote: "",
        phrase: "ska-WEAK",
        clothing: "Subdued Print",
        nh: "0"
      }
    },
    {
      title: {
        name: "Petri",
        alt_name: "",
        id: "mus19",
        image_url: "https://dodo.ac/np/images/7/7e/Petri_amiibo.png",
        species: "Mouse",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "October",
        birthday_day: "23",
        sign: "Libra",
        quote: "Our DNA is only the beginning of the story.",
        phrase: "mmmhmm",
        clothing: "Doctor's Coat",
        nh: "1"
      }
    },
    {
      title: {
        name: "Petunia",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/5/52/Petunia_PG.png",
        species: "Cow",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Taurus",
        quote: "",
        phrase: "moo la la",
        clothing: "Spunky Knit",
        nh: "0"
      }
    },
    {
      title: {
        name: "Phil",
        alt_name: "",
        id: "ost07",
        image_url: "https://dodo.ac/np/images/f/f2/Phil_NH.png",
        species: "Ostrich",
        personality: "Smug",
        gender: "Male",
        birthday_month: "November",
        birthday_day: "27",
        sign: "Sagittarius",
        quote: "Best not to say too much.",
        phrase: "hurk",
        clothing: "Fischerhemd",
        nh: "1"
      }
    },
    {
      title: {
        name: "Phoebe",
        alt_name: "",
        id: "ost10",
        image_url: "https://dodo.ac/np/images/5/50/Phoebe_NH.png",
        species: "Ostrich",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "22",
        sign: "Taurus",
        quote: "You can't keep a good bird down.",
        phrase: "sparky",
        clothing: "Front-Tie Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Pierce",
        alt_name: "",
        id: "pbr02",
        image_url: "https://dodo.ac/np/images/8/80/Pierce_NH.png",
        species: "Eagle",
        personality: "Jock",
        gender: "Male",
        birthday_month: "January",
        birthday_day: "8",
        sign: "Capricorn",
        quote: "When someone says fly, you ask how high!",
        phrase: "hawkeye",
        clothing: "Tennis Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Pierre",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/5/53/Pierre_DnMe%2B.png",
        species: "Cat",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Sagittarius",
        quote: "",
        phrase: "ってね",
        clothing: "Jester Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Pietro",
        alt_name: "",
        id: "shp13",
        image_url: "https://dodo.ac/np/images/f/fb/Pietro_NH.png",
        species: "Sheep",
        personality: "Smug",
        gender: "Male",
        birthday_month: "April",
        birthday_day: "19",
        sign: "Aries",
        quote: "Be the class clown.",
        phrase: "honk honk",
        clothing: "Jester Costume",
        nh: "1"
      }
    },
    {
      title: {
        name: "Pigleg",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/f/f8/Pigleg_PG.png",
        species: "Pig",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Leo",
        quote: "",
        phrase: "arrrn",
        clothing: "Blue Aloha Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Pinky",
        alt_name: "",
        id: "bea01",
        image_url: "https://dodo.ac/np/images/b/bf/Pinky_NH.png",
        species: "Bear",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "9",
        sign: "Virgo",
        quote: "Time spent with friends is time well spent.",
        phrase: "wah",
        clothing: "Silk Floral-Print Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Piper",
        alt_name: "",
        id: "brd05",
        image_url: "https://dodo.ac/np/images/0/09/Piper_NH.png",
        species: "Bird",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "18",
        sign: "Aries",
        quote: "Where there's life, there's hope.",
        phrase: "chickadee",
        clothing: "Lacy Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Pippy",
        alt_name: "",
        id: "rbt06",
        image_url: "https://dodo.ac/np/images/a/a1/Pippy_NH.png",
        species: "Rabbit",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "June",
        birthday_day: "14",
        sign: "Gemini",
        quote: "Fake it till you make it.",
        phrase: "li'l hare",
        clothing: "Overall Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Plucky",
        alt_name: "",
        id: "chn10",
        image_url: "https://dodo.ac/np/images/6/63/Plucky_NH.png",
        species: "Chicken",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "October",
        birthday_day: "12",
        sign: "Libra",
        quote: "Keep your crumbs out of the bed.",
        phrase: "chicky-poo",
        clothing: "Bold Muumuu",
        nh: "1"
      }
    },
    {
      title: {
        name: "Poko",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/7/7f/Poko_DnMe%2B.png",
        species: "Bear cub",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Aries",
        quote: "",
        phrase: "へへ",
        clothing: "Arctic Camo",
        nh: "0"
      }
    },
    {
      title: {
        name: "Pompom",
        alt_name: "",
        id: "duk05",
        image_url: "https://dodo.ac/np/images/3/32/Pompom_NH.png",
        species: "Duck",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "11",
        sign: "Aquarius",
        quote: "Happiness is a rainy day!",
        phrase: "rah rah",
        clothing: "Parka Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Poncho",
        alt_name: "",
        id: "cbr02",
        image_url: "https://dodo.ac/np/images/f/f0/Poncho_NH.png",
        species: "Bear cub",
        personality: "Jock",
        gender: "Male",
        birthday_month: "January",
        birthday_day: "2",
        sign: "Capricorn",
        quote: "Fortune favors the brave!",
        phrase: "li'l bear",
        clothing: "Energetic Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Poppy",
        alt_name: "",
        id: "squ15",
        image_url: "https://dodo.ac/np/images/c/c4/Poppy_NH.png",
        species: "Squirrel",
        personality: "Normal",
        gender: "Female",
        birthday_month: "August",
        birthday_day: "5",
        sign: "Leo",
        quote: "It's all about positive thinking!",
        phrase: "nutty",
        clothing: "Alpinist Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Portia",
        alt_name: "",
        id: "dog05",
        image_url: "https://dodo.ac/np/images/c/ce/Portia_NH.png",
        species: "Dog",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "October",
        birthday_day: "25",
        sign: "Scorpio",
        quote: "Charity begins at home.",
        phrase: "ruffian",
        clothing: "Rad Power Skirt Suit",
        nh: "1"
      }
    },
    {
      title: {
        name: "Prince",
        alt_name: "",
        id: "flg12",
        image_url: "https://dodo.ac/np/images/a/a6/Prince_NH.png",
        species: "Frog",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "21",
        sign: "Cancer",
        quote: "Catch more flies with honey than vinegar.",
        phrase: "burrup",
        clothing: "Striped Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Puck",
        alt_name: "",
        id: "pgn06",
        image_url: "https://dodo.ac/np/images/5/53/Puck_NH.png",
        species: "Penguin",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "February",
        birthday_day: "21",
        sign: "Pisces",
        quote: "A bad attitude will land you in the penalty box.",
        phrase: "brrrrrrrrr",
        clothing: "Ice-Hockey Uniform",
        nh: "1"
      }
    },
    {
      title: {
        name: "Puddles",
        alt_name: "",
        id: "flg06",
        image_url: "https://dodo.ac/np/images/f/f9/Puddles_NH.png",
        species: "Frog",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "13",
        sign: "Capricorn",
        quote: "Look before you leap.",
        phrase: "splish",
        clothing: "Retro Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Pudge",
        alt_name: "",
        id: "cbr03",
        image_url: "https://dodo.ac/np/images/8/87/Pudge_NH.png",
        species: "Bear cub",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "11",
        sign: "Gemini",
        quote: "There's no such thing as a free lunch.",
        phrase: "golly",
        clothing: "Letter Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Punchy",
        alt_name: "",
        id: "cat06",
        image_url: "https://dodo.ac/np/images/6/6d/Punchy_NH.png",
        species: "Cat",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "April",
        birthday_day: "11",
        sign: "Aries",
        quote: "There's always more fish in the sea!",
        phrase: "mrmpht",
        clothing: "Madras Plaid Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Purrl",
        alt_name: "",
        id: "cat07",
        image_url: "https://dodo.ac/np/images/a/a2/Purrl_NH.png",
        species: "Cat",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "May",
        birthday_day: "29",
        sign: "Gemini",
        quote: "Let them drink cream.",
        phrase: "kitten",
        clothing: "Kung-Fu Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Queenie",
        alt_name: "",
        id: "ost00",
        image_url: "https://dodo.ac/np/images/f/f1/Queenie_NH.png",
        species: "Ostrich",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "November",
        birthday_day: "13",
        sign: "Scorpio",
        quote: "You never get a second chance to make a first impression.",
        phrase: "chicken",
        clothing: "Shirtdress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Quetzal",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/8/8e/Quetzal_PG.png",
        species: "Eagle",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Virgo",
        quote: "",
        phrase: "SKREEE",
        clothing: "Rally Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Quillson",
        alt_name: "",
        id: "duk17",
        image_url: "https://dodo.ac/np/images/e/e4/Quillson_NH.png",
        species: "Duck",
        personality: "Smug",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "22",
        sign: "Capricorn",
        quote: "There is beauty in everything.",
        phrase: "ridukulous",
        clothing: "Checkered Muffler",
        nh: "1"
      }
    },
    {
      title: {
        name: "Quinn",
        alt_name: "",
        id: "pbr10",
        image_url: "https://dodo.ac/np/images/a/a2/Quinn_amiibo.png",
        species: "Eagle",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "20",
        sign: "Aquarius",
        quote: "Step on a violet, and you'll smell forgiveness.",
        phrase: "proper",
        clothing: "Collarless Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Raddle",
        alt_name: "",
        id: "flg15",
        image_url: "https://dodo.ac/np/images/7/7a/Raddle_NH.png",
        species: "Frog",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "6",
        sign: "Gemini",
        quote: "A healthy mind makes for a healthy body.",
        phrase: "aaach—",
        clothing: "Doctor's Coat",
        nh: "1"
      }
    },
    {
      title: {
        name: "Rasher",
        alt_name: "",
        id: "pig02",
        image_url: "https://dodo.ac/np/images/e/e1/Rasher_NH.png",
        species: "Pig",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "April",
        birthday_day: "7",
        sign: "Aries",
        quote: "Don't judge a book by its cover.",
        phrase: "swine",
        clothing: "Pineapple Aloha Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Raymond",
        alt_name: "",
        id: "cat23",
        image_url: "https://dodo.ac/np/images/2/2a/Raymond_NH.png",
        species: "Cat",
        personality: "Smug",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "1",
        sign: "Libra",
        quote: "Stay on brand!",
        phrase: "crisp",
        clothing: "Waistcoat",
        nh: "1"
      }
    },
    {
      title: {
        name: "Renée",
        alt_name: "",
        id: "rhn08",
        image_url: "https://dodo.ac/np/images/e/ef/Ren%C3%A9e_NH.png",
        species: "Rhinoceros",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "May",
        birthday_day: "28",
        sign: "Gemini",
        quote: "Reckless youth makes rueful age.",
        phrase: "yo yo yo",
        clothing: "Sailor's Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Reneigh",
        alt_name: "",
        id: "hrs16",
        image_url: "https://dodo.ac/np/images/9/92/Reneigh_NH.png",
        species: "Horse",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "June",
        birthday_day: "4",
        sign: "Gemini",
        quote: "You can only be you, so be the best you that you can be.",
        phrase: "ayup yup",
        clothing: "Zigzag-Print Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Rex",
        alt_name: "",
        id: "lon02",
        image_url: "https://dodo.ac/np/images/7/78/Rex_NH.png",
        species: "Lion",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "24",
        sign: "Leo",
        quote: "Three wrongs don't make a right, but three rights make a left.",
        phrase: "cool cat",
        clothing: "Striped Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Rhoda",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/f/f8/Rhoda_PG.png",
        species: "Chicken",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Aries",
        quote: "",
        phrase: "clucky",
        clothing: "Red Tie-Dye",
        nh: "0"
      }
    },
    {
      title: {
        name: "Rhonda",
        alt_name: "",
        id: "rhn01",
        image_url: "https://dodo.ac/np/images/d/df/Rhonda_NH.png",
        species: "Rhinoceros",
        personality: "Normal",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "24",
        sign: "Aquarius",
        quote: "Don't look down your nose at people!",
        phrase: "bigfoot",
        clothing: "Ruffled Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Ribbot",
        alt_name: "",
        id: "flg01",
        image_url: "https://dodo.ac/np/images/9/94/Ribbot_NH.png",
        species: "Frog",
        personality: "Jock",
        gender: "Male",
        birthday_month: "February",
        birthday_day: "13",
        sign: "Aquarius",
        quote: "Never rest, never rust.",
        phrase: "zzrrbbit",
        clothing: "Simple Parka",
        nh: "1"
      }
    },
    {
      title: {
        name: "Ricky",
        alt_name: "",
        id: "squ10",
        image_url: "https://dodo.ac/np/images/8/8d/Ricky_NH.png",
        species: "Squirrel",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "September",
        birthday_day: "14",
        sign: "Virgo",
        quote: "You gotta break a few shells to get to the nut.",
        phrase: "nutcase",
        clothing: "Three-Ball Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Rilla",
        alt_name: "",
        id: "gor11",
        image_url: "https://dodo.ac/np/images/3/31/Rilla_PC.png",
        species: "Gorilla",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "November",
        birthday_day: "1",
        sign: "Scorpio",
        quote: "When there's a will, there's a way.",
        phrase: "hello",
        clothing: "Hello Kitty Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Rio",
        alt_name: "",
        id: "ost04",
        image_url: "https://dodo.ac/np/images/7/7e/Rio_amiibo.png",
        species: "Ostrich",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "10",
        sign: "Virgo",
        quote: "Self-care? Best care.",
        phrase: "li'l chick",
        clothing: "Zigzag-Print Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Rizzo",
        alt_name: "",
        id: "mus09",
        image_url: "https://dodo.ac/np/images/6/69/Rizzo_NH.png",
        species: "Mouse",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "January",
        birthday_day: "17",
        sign: "Capricorn",
        quote: "Evil lurks everywhere.",
        phrase: "squee",
        clothing: "Ninja Costume",
        nh: "1"
      }
    },
    {
      title: {
        name: "Roald",
        alt_name: "",
        id: "pgn01",
        image_url: "https://dodo.ac/np/images/6/63/Roald_NH.png",
        species: "Penguin",
        personality: "Jock",
        gender: "Male",
        birthday_month: "January",
        birthday_day: "5",
        sign: "Capricorn",
        quote: "You must learn to waddle before you can swim.",
        phrase: "b-b-buddy",
        clothing: "Flannel Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Robin",
        alt_name: "",
        id: "brd01",
        image_url: "https://dodo.ac/np/images/8/85/Robin_NH.png",
        species: "Bird",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "December",
        birthday_day: "4",
        sign: "Sagittarius",
        quote: "Always keep your wings manicured so you can fly away.",
        phrase: "la-di-da",
        clothing: "Front-Tie Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Rocco",
        alt_name: "",
        id: "hip00",
        image_url: "https://dodo.ac/np/images/0/02/Rocco_NH.png",
        species: "Hippo",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "18",
        sign: "Leo",
        quote: "The only thing to fear is fear itself... and wasps!",
        phrase: "hippie",
        clothing: "Danger Tank",
        nh: "1"
      }
    },
    {
      title: {
        name: "Rocket",
        alt_name: "",
        id: "gor09",
        image_url: "https://dodo.ac/np/images/5/58/Rocket_NH.png",
        species: "Gorilla",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "14",
        sign: "Aries",
        quote: "Art feeds the soul. So does pizza.",
        phrase: "vroom",
        clothing: "No. 4 Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Rod",
        alt_name: "",
        id: "mus05",
        image_url: "https://dodo.ac/np/images/e/ea/Rod_NH.png",
        species: "Mouse",
        personality: "Jock",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "14",
        sign: "Leo",
        quote: "If you can't beat 'em, work harder.",
        phrase: "ace",
        clothing: "Striped Tank",
        nh: "1"
      }
    },
    {
      title: {
        name: "Rodeo",
        alt_name: "",
        id: "bul01",
        image_url: "https://dodo.ac/np/images/6/6c/Rodeo_NH.png",
        species: "Bull",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "29",
        sign: "Scorpio",
        quote: "Zzzzzzzzzzzzzzzzz...",
        phrase: "chaps",
        clothing: "Graduation Gown",
        nh: "1"
      }
    },
    {
      title: {
        name: "Rodney",
        alt_name: "",
        id: "ham03",
        image_url: "https://dodo.ac/np/images/3/35/Rodney_NH.png",
        species: "Hamster",
        personality: "Smug",
        gender: "Male",
        birthday_month: "November",
        birthday_day: "10",
        sign: "Scorpio",
        quote: "Everything is temporary.",
        phrase: "le ham",
        clothing: "Striped Tank",
        nh: "1"
      }
    },
    {
      title: {
        name: "Rolf",
        alt_name: "",
        id: "tig00",
        image_url: "https://dodo.ac/np/images/9/93/Rolf_NH.png",
        species: "Tiger",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "22",
        sign: "Leo",
        quote: "Don't skip lunch. Ever.",
        phrase: "grrrolf",
        clothing: "Down Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Rollo",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/4/4f/Rollo_PG.png",
        species: "Hippo",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Leo",
        quote: "",
        phrase: "beaulch",
        clothing: "Whirly Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Rooney",
        alt_name: "",
        id: "kgr09",
        image_url: "https://dodo.ac/np/images/7/79/Rooney_NH.png",
        species: "Kangaroo",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "1",
        sign: "Sagittarius",
        quote: "Bob and weave! Bob and weave!",
        phrase: "punches",
        clothing: "Sleeveless Parka",
        nh: "1"
      }
    },
    {
      title: {
        name: "Rory",
        alt_name: "",
        id: "lon07",
        image_url: "https://dodo.ac/np/images/d/db/Rory_NH.png",
        species: "Lion",
        personality: "Jock",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "7",
        sign: "Leo",
        quote: "Set 'em up and knock 'em down.",
        phrase: "capital",
        clothing: "Sea Hanten Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Roscoe",
        alt_name: "",
        id: "hrs04",
        image_url: "https://dodo.ac/np/images/8/8e/Roscoe_NH.png",
        species: "Horse",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "16",
        sign: "Gemini",
        quote: "Trouble rides a fast horse.",
        phrase: "nay",
        clothing: "Biker Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Rosie",
        alt_name: "",
        id: "cat02",
        image_url: "https://dodo.ac/np/images/f/fe/Rosie_NH_Transparent.png",
        species: "Cat",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "27",
        sign: "Pisces",
        quote: "One good purr deserves another.",
        phrase: "silly",
        clothing: "Dazed Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Roswell",
        alt_name: "",
        id: "crd05",
        image_url: "https://dodo.ac/np/images/d/df/Roswell_amiibo.png",
        species: "Alligator",
        personality: "Smug",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "2",
        sign: "Taurus",
        quote: "Keep your eyes on the skies.",
        phrase: "spaaace",
        clothing: "Pineapple Aloha Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Rowan",
        alt_name: "",
        id: "tig01",
        image_url: "https://dodo.ac/np/images/7/7c/Rowan_NH_Transparent.png",
        species: "Tiger",
        personality: "Jock",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "26",
        sign: "Virgo",
        quote: "Refuse to lose.",
        phrase: "mango",
        clothing: "Simple-Dots Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Ruby",
        alt_name: "",
        id: "rbt09",
        image_url: "https://dodo.ac/np/images/4/41/Ruby_NH.png",
        species: "Rabbit",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "December",
        birthday_day: "25",
        sign: "Capricorn",
        quote: "You can always take the red-eye.",
        phrase: "li'l ears",
        clothing: "Rabbit Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Rudy",
        alt_name: "",
        id: "cat20",
        image_url: "https://dodo.ac/np/images/7/7e/Rudy_NH.png",
        species: "Cat",
        personality: "Jock",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "20",
        sign: "Sagittarius",
        quote: "Always land on your feet!",
        phrase: "mush",
        clothing: "Simple Parka",
        nh: "1"
      }
    },
    {
      title: {
        name: "Sally",
        alt_name: "Hazel",
        id: "squ07",
        image_url: "https://dodo.ac/np/images/a/a3/Sally_NH.png",
        species: "Squirrel",
        personality: "Normal",
        gender: "Female",
        birthday_month: "June",
        birthday_day: "19",
        sign: "Gemini",
        quote: "Even the smallest acorn may grow into the tallest tree.",
        phrase: "nutmeg",
        clothing: "Snowy Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Samson",
        alt_name: "",
        id: "mus04",
        image_url: "https://dodo.ac/np/images/9/9b/Samson_NH.png",
        species: "Mouse",
        personality: "Jock",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "5",
        sign: "Cancer",
        quote: "Squeak softly and carry a big stick.",
        phrase: "pipsqueak",
        clothing: "Kanji Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Sandy",
        alt_name: "",
        id: "ost02",
        image_url: "https://dodo.ac/np/images/a/a9/Sandy_NH.png",
        species: "Ostrich",
        personality: "Normal",
        gender: "Female",
        birthday_month: "October",
        birthday_day: "21",
        sign: "Libra",
        quote: "Soaring through the sky takes more than a pair of wings.",
        phrase: "speedy",
        clothing: "Striped Tank",
        nh: "1"
      }
    },
    {
      title: {
        name: "Sasha",
        alt_name: "",
        id: "rbt21",
        image_url: "https://dodo.ac/np/images/9/90/Sasha_amiibo.png",
        species: "Rabbit",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "19",
        sign: "Taurus",
        quote: "Timing is everything.",
        phrase: "hoppity",
        clothing: "Letter Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Savannah",
        alt_name: "",
        id: "hrs02",
        image_url: "https://dodo.ac/np/images/4/46/Savannah_NH.png",
        species: "Horse",
        personality: "Normal",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "25",
        sign: "Aquarius",
        quote: "Keep your chin up!",
        phrase: "y'all",
        clothing: "Top Coat",
        nh: "1"
      }
    },
    {
      title: {
        name: "Scoot",
        alt_name: "",
        id: "duk10",
        image_url: "https://dodo.ac/np/images/e/ec/Scoot_NH.png",
        species: "Duck",
        personality: "Jock",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "13",
        sign: "Gemini",
        quote: "Some birds avoid the water, ducks look for it.",
        phrase: "zip zoom",
        clothing: "Frog Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Shari",
        alt_name: "",
        id: "mnk07",
        image_url: "https://dodo.ac/np/images/7/72/Shari_NH.png",
        species: "Monkey",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "10",
        sign: "Aries",
        quote: "A good start leads to a good end.",
        phrase: "cheeky",
        clothing: "Garden Tank",
        nh: "1"
      }
    },
    {
      title: {
        name: "Sheldon",
        alt_name: "",
        id: "squ16",
        image_url: "https://dodo.ac/np/images/c/ce/Sheldon_NH.png",
        species: "Squirrel",
        personality: "Jock",
        gender: "Male",
        birthday_month: "February",
        birthday_day: "26",
        sign: "Pisces",
        quote: "Winners don't quit, and quitters never win.",
        phrase: "cardio",
        clothing: "Tiger Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Shep",
        alt_name: "",
        id: "dog18",
        image_url: "https://dodo.ac/np/images/c/c1/Shep_NH.png",
        species: "Dog",
        personality: "Smug",
        gender: "Male",
        birthday_month: "November",
        birthday_day: "24",
        sign: "Sagittarius",
        quote: "Even dogs won't get in the middle of true love.",
        phrase: "baa baa baa",
        clothing: "Denim Vest",
        nh: "1"
      }
    },
    {
      title: {
        name: "Sherb",
        alt_name: "",
        id: "goa09",
        image_url: "https://dodo.ac/np/images/1/18/Sherb_NH.png",
        species: "Goat",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "January",
        birthday_day: "18",
        sign: "Capricorn",
        quote: "Forty winks is never enough.",
        phrase: "bawwww",
        clothing: "Snowy Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Shinabiru",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/a/a5/Shinabiru_DnMe%2B.png",
        species: "Duck",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Cancer",
        quote: "",
        phrase: "シナ",
        clothing: "MVP Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Shino",
        alt_name: "",
        id: "der11",
        image_url: "https://dodo.ac/np/images/2/26/Shino_amiibo.png",
        species: "Deer",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "October",
        birthday_day: "31",
        sign: "Scorpio",
        quote: "Better the demon you know than the one you do not.",
        phrase: "okaaay",
        clothing: "Morning-Glory Yukata",
        nh: "1"
      }
    },
    {
      title: {
        name: "Shoukichi",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/9/9b/Shoukichi_DnMe%2B.png",
        species: "Bird",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Capricorn",
        quote: "",
        phrase: "ズン",
        clothing: "Orange Pinstripe",
        nh: "0"
      }
    },
    {
      title: {
        name: "Simon",
        alt_name: "",
        id: "mnk02",
        image_url: "https://dodo.ac/np/images/6/68/Simon_NH.png",
        species: "Monkey",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "January",
        birthday_day: "19",
        sign: "Capricorn",
        quote: "Friends go together like peanut butter and bananas.",
        phrase: "zzzook",
        clothing: "Striped Tank",
        nh: "1"
      }
    },
    {
      title: {
        name: "Skye",
        alt_name: "",
        id: "wol09",
        image_url: "https://dodo.ac/np/images/d/d1/Skye_NH.png",
        species: "Wolf",
        personality: "Normal",
        gender: "Female",
        birthday_month: "March",
        birthday_day: "24",
        sign: "Aries",
        quote: "Love makes the world go 'round.",
        phrase: "airmail",
        clothing: "Peasant Blouse",
        nh: "1"
      }
    },
    {
      title: {
        name: "Sly",
        alt_name: "",
        id: "crd06",
        image_url: "https://dodo.ac/np/images/7/70/Sly_NH.png",
        species: "Alligator",
        personality: "Jock",
        gender: "Male",
        birthday_month: "November",
        birthday_day: "15",
        sign: "Scorpio",
        quote: "Don't bite off more than you can chew.",
        phrase: "hoo-rah",
        clothing: "Camo Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Snake",
        alt_name: "",
        id: "rbt03",
        image_url: "https://dodo.ac/np/images/e/ec/Snake_NH.png",
        species: "Rabbit",
        personality: "Jock",
        gender: "Male",
        birthday_month: "November",
        birthday_day: "3",
        sign: "Scorpio",
        quote: "A good ninja is neither seen nor heard.",
        phrase: "bunyip",
        clothing: "Ninja Costume",
        nh: "1"
      }
    },
    {
      title: {
        name: "Snooty",
        alt_name: "",
        id: "ant06",
        image_url: "https://dodo.ac/np/images/6/63/Snooty_NH.png",
        species: "Anteater",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "October",
        birthday_day: "24",
        sign: "Scorpio",
        quote: "Request forgiveness, not permission.",
        phrase: "sniffff",
        clothing: "Misty Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Soleil",
        alt_name: "",
        id: "ham04",
        image_url: "https://dodo.ac/np/images/d/de/Soleil_NH.png",
        species: "Hamster",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "August",
        birthday_day: "9",
        sign: "Leo",
        quote: "Sometimes dreams are merely dreams.",
        phrase: "tarnation",
        clothing: "Sari",
        nh: "1"
      }
    },
    {
      title: {
        name: "Sparro",
        alt_name: "",
        id: "brd18",
        image_url: "https://dodo.ac/np/images/3/32/Sparro_NH.png",
        species: "Bird",
        personality: "Jock",
        gender: "Male",
        birthday_month: "November",
        birthday_day: "20",
        sign: "Scorpio",
        quote: "The proof of the pudding is in the eating.",
        phrase: "like whoa",
        clothing: "Earbuds Combo",
        nh: "1"
      }
    },
    {
      title: {
        name: "Spike",
        alt_name: "",
        id: "rhn02",
        image_url: "https://dodo.ac/np/images/f/f1/Spike_NH.png",
        species: "Rhinoceros",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "17",
        sign: "Gemini",
        quote: "Keep your eye on the ball.",
        phrase: "punk",
        clothing: "Gold-Print Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Spork",
        alt_name: "",
        id: "pig05",
        image_url: "https://dodo.ac/np/images/c/c2/Spork_NH.png",
        species: "Pig",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "September",
        birthday_day: "3",
        sign: "Virgo",
        quote: "It's never too late for a snack.",
        phrase: "snork",
        clothing: "Layered Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Sprinkle",
        alt_name: "",
        id: "pgn14",
        image_url: "https://dodo.ac/np/images/4/44/Sprinkle_NH.png",
        species: "Penguin",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "20",
        sign: "Pisces",
        quote: "Frosting is just the icing on the cake.",
        phrase: "frappe",
        clothing: "Snowy Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Sprocket",
        alt_name: "",
        id: "ost03",
        image_url: "https://dodo.ac/np/images/8/8b/Sprocket_NH.png",
        species: "Ostrich",
        personality: "Jock",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "1",
        sign: "Sagittarius",
        quote: "Strike while the iron is hot.",
        phrase: "zort",
        clothing: "Jumper Work Suit",
        nh: "1"
      }
    },
    {
      title: {
        name: "Static",
        alt_name: "",
        id: "squ08",
        image_url: "https://dodo.ac/np/images/6/68/Static_NH.png",
        species: "Squirrel",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "9",
        sign: "Cancer",
        quote: "Lightning never strikes twice.",
        phrase: "krzzt",
        clothing: "Dragon Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Stella",
        alt_name: "",
        id: "shp03",
        image_url: "https://dodo.ac/np/images/9/95/Stella_NH.png",
        species: "Sheep",
        personality: "Normal",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "9",
        sign: "Aries",
        quote: "100% Natural Fiber.",
        phrase: "baa-dabing",
        clothing: "Flower Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Sterling",
        alt_name: "",
        id: "pbr07",
        image_url: "https://dodo.ac/np/images/4/4f/Sterling_NH.png",
        species: "Eagle",
        personality: "Jock",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "11",
        sign: "Sagittarius",
        quote: "Discretion is the better part of valor.",
        phrase: "skraaaaw",
        clothing: "Cavalier Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Stinky",
        alt_name: "",
        id: "cat13",
        image_url: "https://dodo.ac/np/images/9/9c/Stinky_NH.png",
        species: "Cat",
        personality: "Jock",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "17",
        sign: "Leo",
        quote: "If the mask fits, wear it!",
        phrase: "GAAHHH",
        clothing: "Athletic Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Stitches",
        alt_name: "",
        id: "cbr05",
        image_url: "https://dodo.ac/np/images/5/56/Stitches_NH.png",
        species: "Bear cub",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "February",
        birthday_day: "10",
        sign: "Aquarius",
        quote: "A stitch in time saves nine.",
        phrase: "stuffin'",
        clothing: "Starry Tank",
        nh: "1"
      }
    },
    {
      title: {
        name: "Stu",
        alt_name: "",
        id: "bul03",
        image_url: "https://dodo.ac/np/images/f/fa/Stu_NH.png",
        species: "Bull",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "April",
        birthday_day: "20",
        sign: "Taurus",
        quote: "As a cow grows, so do its nostrils.",
        phrase: "mrooooo",
        clothing: "Yodel Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Sue E",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/2/2f/Sue_E_PG.png",
        species: "Pig",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Libra",
        quote: "",
        phrase: "snort",
        clothing: "Snappy Print",
        nh: "0"
      }
    },
    {
      title: {
        name: "Sunny",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/4/48/Sunny_DnMe%2B.png",
        species: "Frog",
        personality: "Normal",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Sagittarius",
        quote: "",
        phrase: "でちょ",
        clothing: "Citrus Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Sven",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/6/66/Sven_PG.png",
        species: "Goat",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Capricorn",
        quote: "",
        phrase: "buh-uh-ud",
        clothing: "Desert Camo",
        nh: "0"
      }
    },
    {
      title: {
        name: "Sydney",
        alt_name: "",
        id: "kal03",
        image_url: "https://dodo.ac/np/images/3/3f/Sydney_NH.png",
        species: "Koala",
        personality: "Normal",
        gender: "Female",
        birthday_month: "June",
        birthday_day: "21",
        sign: "Gemini",
        quote: "Sail wherever the wind takes you.",
        phrase: "sunshine",
        clothing: "Overall Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Sylvana",
        alt_name: "",
        id: "squ14",
        image_url: "https://dodo.ac/np/images/f/fc/Sylvana_NH.png",
        species: "Squirrel",
        personality: "Normal",
        gender: "Female",
        birthday_month: "October",
        birthday_day: "22",
        sign: "Libra",
        quote: "Remember to see the forest between the trees.",
        phrase: "hubbub",
        clothing: "Kiwi Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Sylvia",
        alt_name: "",
        id: "kgr06",
        image_url: "https://dodo.ac/np/images/9/93/Sylvia_NH.png",
        species: "Kangaroo",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "May",
        birthday_day: "3",
        sign: "Taurus",
        quote: "Hop first; ask questions later.",
        phrase: "boing",
        clothing: "Tropical Muumuu",
        nh: "1"
      }
    },
    {
      title: {
        name: "T-Bone",
        alt_name: "",
        id: "bul05",
        image_url: "https://dodo.ac/np/images/e/e0/T-Bone_NH.png",
        species: "Bull",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "20",
        sign: "Taurus",
        quote: "Don't have a cow.",
        phrase: "moocher",
        clothing: "Hanten Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Tabby",
        alt_name: "",
        id: "cat12",
        image_url: "https://dodo.ac/np/images/2/2f/Tabby_NH.png",
        species: "Cat",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "August",
        birthday_day: "13",
        sign: "Leo",
        quote: "You can never have too much of a good thing!",
        phrase: "me-WOW",
        clothing: "Tee Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Tad",
        alt_name: "",
        id: "flg09",
        image_url: "https://dodo.ac/np/images/6/67/Tad_NH.png",
        species: "Frog",
        personality: "Jock",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "3",
        sign: "Leo",
        quote: "Take a leap!",
        phrase: "sluuuurp",
        clothing: "One-Ball Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Tammi",
        alt_name: "",
        id: "mnk03",
        image_url: "https://dodo.ac/np/images/a/a8/Tammi_NH.png",
        species: "Monkey",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "2",
        sign: "Aries",
        quote: "Always be down to monkey around!",
        phrase: "chimpy",
        clothing: "Silk Floral-Print Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Tammy",
        alt_name: "",
        id: "cbr17",
        image_url: "https://dodo.ac/np/images/a/aa/Tammy_NH.png",
        species: "Bear cub",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "June",
        birthday_day: "23",
        sign: "Cancer",
        quote: "If a job is worth doing, do it right!",
        phrase: "ya heard",
        clothing: "Hawk Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Tangy",
        alt_name: "",
        id: "cat05",
        image_url: "https://dodo.ac/np/images/6/6f/Tangy_NH.png",
        species: "Cat",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "June",
        birthday_day: "17",
        sign: "Gemini",
        quote: "When life gives you lemons, make lemonade!",
        phrase: "reeeeOWR",
        clothing: "Retro Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Tank",
        alt_name: "",
        id: "rhn00",
        image_url: "https://dodo.ac/np/images/6/69/Tank_NH_Transparent.png",
        species: "Rhinoceros",
        personality: "Jock",
        gender: "Male",
        birthday_month: "May",
        birthday_day: "6",
        sign: "Taurus",
        quote: "Remember to keep your core muscles engaged!",
        phrase: "kerPOW",
        clothing: "No. 1 Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Tarou",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/d/dd/Tarou_DnMe%2B.png",
        species: "Wolf",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Gemini",
        quote: "",
        phrase: "ワオーン",
        clothing: "Houndstooth Knit",
        nh: "0"
      }
    },
    {
      title: {
        name: "Tasha",
        alt_name: "",
        id: "squ13",
        image_url: "https://dodo.ac/np/images/3/35/Tasha_NH.png",
        species: "Squirrel",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "November",
        birthday_day: "30",
        sign: "Sagittarius",
        quote: "There's no such thing as a safe secret.",
        phrase: "nice nice",
        clothing: "Collarless Coat",
        nh: "1"
      }
    },
    {
      title: {
        name: "Teddy",
        alt_name: "",
        id: "bea00",
        image_url: "https://dodo.ac/np/images/b/b9/Teddy_NH.png",
        species: "Bear",
        personality: "Jock",
        gender: "Male",
        birthday_month: "September",
        birthday_day: "26",
        sign: "Libra",
        quote: "No pain, no gain!",
        phrase: "grooof",
        clothing: "Energetic Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Tex",
        alt_name: "",
        id: "pgn12",
        image_url: "https://dodo.ac/np/images/4/44/Tex_NH.png",
        species: "Penguin",
        personality: "Smug",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "6",
        sign: "Libra",
        quote: "Rules were made to be broken.",
        phrase: "picante",
        clothing: "Letter Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Tia",
        alt_name: "",
        id: "elp10",
        image_url: "https://dodo.ac/np/images/0/0d/Tia_NH.png",
        species: "Elephant",
        personality: "Normal",
        gender: "Female",
        birthday_month: "November",
        birthday_day: "18",
        sign: "Scorpio",
        quote: "Tea is a cup of life.",
        phrase: "teacup",
        clothing: "Maid Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Tiansheng",
        alt_name: "",
        id: "mnk09",
        image_url: "https://dodo.ac/np/images/5/5d/Tiansheng_amiibo.png",
        species: "Monkey",
        personality: "Jock",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "18",
        sign: "Leo",
        quote: "The world is more swole than you will ever fully know.",
        phrase: "wuwu",
        clothing: "Dragon Suit",
        nh: "1"
      }
    },
    {
      title: {
        name: "Tiara",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/1/14/Tiara_PG.png",
        species: "Rhinoceros",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Scorpio",
        quote: "",
        phrase: "lovey",
        clothing: "Yodel Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Tiffany",
        alt_name: "",
        id: "rbt07",
        image_url: "https://dodo.ac/np/images/f/f0/Tiffany_NH.png",
        species: "Rabbit",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "9",
        sign: "Capricorn",
        quote: "What is cheap is most costly.",
        phrase: "bunbun",
        clothing: "Chic Tuxedo Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Timbra",
        alt_name: "",
        id: "shp10",
        image_url: "https://dodo.ac/np/images/6/6f/Timbra_NH.png",
        species: "Sheep",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "October",
        birthday_day: "21",
        sign: "Libra",
        quote: "Don't pine for the past.",
        phrase: "pine nut",
        clothing: "Aran-Knit Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Tipper",
        alt_name: "",
        id: "cow01",
        image_url: "https://dodo.ac/np/images/7/75/Tipper_NH.png",
        species: "Cow",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "August",
        birthday_day: "25",
        sign: "Virgo",
        quote: "It takes two to tango.",
        phrase: "pushy",
        clothing: "Retro Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Toby",
        alt_name: "",
        id: "rbt20",
        image_url: "https://dodo.ac/np/images/6/67/Toby_PC.png",
        species: "Rabbit",
        personality: "Smug",
        gender: "Male",
        birthday_month: "July",
        birthday_day: "10",
        sign: "Cancer",
        quote: "Toby or not Toby? I don't know, I'm asking you.",
        phrase: "ribbit",
        clothing: "Kerokerokeroppi Tank Top",
        nh: "1"
      }
    },
    {
      title: {
        name: "Tom",
        alt_name: "",
        id: "cat15",
        image_url: "https://dodo.ac/np/images/d/d1/Tom_NH.png",
        species: "Cat",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "10",
        sign: "Sagittarius",
        quote: "There's no use crying over spilled milk.",
        phrase: "me-YOWZA",
        clothing: "Bulldog Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Truffles",
        alt_name: "",
        id: "pig01",
        image_url: "https://dodo.ac/np/images/e/eb/Truffles_NH.png",
        species: "Pig",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "July",
        birthday_day: "28",
        sign: "Leo",
        quote: "The best things in life are free.",
        phrase: "snoutie",
        clothing: "Tee-Parka Combo",
        nh: "1"
      }
    },
    {
      title: {
        name: "Tucker",
        alt_name: "",
        id: "elp09",
        image_url: "https://dodo.ac/np/images/7/7c/Tucker_NH.png",
        species: "Elephant",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "September",
        birthday_day: "7",
        sign: "Virgo",
        quote: "Time makes fossils of us all.",
        phrase: "fuzzers",
        clothing: "Caveman Tank",
        nh: "1"
      }
    },
    {
      title: {
        name: "Tutu",
        alt_name: "",
        id: "bea07",
        image_url: "https://dodo.ac/np/images/9/93/Tutu_NH.png",
        species: "Bear",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "15",
        sign: "Virgo",
        quote: "Even the best of friends start out as strangers.",
        phrase: "twinkles",
        clothing: "Heart Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Twiggy",
        alt_name: "",
        id: "brd03",
        image_url: "https://dodo.ac/np/images/6/67/Twiggy_NH.png",
        species: "Bird",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "July",
        birthday_day: "13",
        sign: "Cancer",
        quote: "It's the early bird that catches the worm!",
        phrase: "cheepers",
        clothing: "Striped Tank",
        nh: "1"
      }
    },
    {
      title: {
        name: "Twirp",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/a/a0/Twirp_PG.png",
        species: "Bird",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Leo",
        quote: "",
        phrase: "CHIRP",
        clothing: "Arctic Camo",
        nh: "0"
      }
    },
    {
      title: {
        name: "Tybalt",
        alt_name: "",
        id: "tig02",
        image_url: "https://dodo.ac/np/images/0/0f/Tybalt_NH.png",
        species: "Tiger",
        personality: "Jock",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "19",
        sign: "Leo",
        quote: "There's no excuse for half-baked potatoes.",
        phrase: "grrrRAH",
        clothing: "Simple Parka",
        nh: "1"
      }
    },
    {
      title: {
        name: "Ursala",
        alt_name: "",
        id: "bea08",
        image_url: "https://dodo.ac/np/images/6/65/Ursala_NH.png",
        species: "Bear",
        personality: "Big sister",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "16",
        sign: "Capricorn",
        quote: "Surround yourself with things you love.",
        phrase: "grooomph",
        clothing: "Striped Maxi Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Valise",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/a/ad/Valise_PG.png",
        species: "Kangaroo",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "",
        birthday_day: "",
        sign: "Sagittarius",
        quote: "",
        phrase: "tadder",
        clothing: "Rose Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Velma",
        alt_name: "",
        id: "goa06",
        image_url: "https://dodo.ac/np/images/5/59/Velma_NH.png",
        species: "Goat",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "14",
        sign: "Capricorn",
        quote: "Work smarter, not harder.",
        phrase: "blih",
        clothing: "Prim Outfit",
        nh: "1"
      }
    },
    {
      title: {
        name: "Vesta",
        alt_name: "",
        id: "shp00",
        image_url: "https://dodo.ac/np/images/5/59/Vesta_NH_Transparent.png",
        species: "Sheep",
        personality: "Normal",
        gender: "Female",
        birthday_month: "April",
        birthday_day: "16",
        sign: "Aries",
        quote: "No sweater off my back.",
        phrase: "baaaffo",
        clothing: "Hand-Knit Tank",
        nh: "1"
      }
    },
    {
      title: {
        name: "Vic",
        alt_name: "",
        id: "bul08",
        image_url: "https://dodo.ac/np/images/1/1d/Vic_NH.png",
        species: "Bull",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "29",
        sign: "Capricorn",
        quote: "You mess with the bull, you get the horns.",
        phrase: "cud",
        clothing: "Viking Top",
        nh: "1"
      }
    },
    {
      title: {
        name: "Viché",
        alt_name: "",
        id: "squ20",
        image_url: "https://dodo.ac/np/images/2/2f/Viche_NL.png",
        species: "Squirrel",
        personality: "Normal",
        gender: "Female",
        birthday_month: "July",
        birthday_day: "7",
        sign: "Cancer",
        quote: "TWO heads are better than one!",
        phrase: "splatastic",
        clothing: "Marie Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Victoria",
        alt_name: "",
        id: "hrs01",
        image_url: "https://dodo.ac/np/images/d/da/Victoria_NH.png",
        species: "Horse",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "July",
        birthday_day: "11",
        sign: "Cancer",
        quote: "Don't put the cart before the horse.",
        phrase: "sugar cube",
        clothing: "One-Ball Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Violet",
        alt_name: "",
        id: "gor07",
        image_url: "https://dodo.ac/np/images/6/6b/Violet_NH.png",
        species: "Gorilla",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "1",
        sign: "Virgo",
        quote: "Pearls are a pink gorilla's best friend.",
        phrase: "sweetie",
        clothing: "Poncho-Style Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Vivian",
        alt_name: "",
        id: "wol08",
        image_url: "https://dodo.ac/np/images/2/24/Vivian_NH.png",
        species: "Wolf",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "26",
        sign: "Aquarius",
        quote: "Onwards and upwards!",
        phrase: "piffle",
        clothing: "Peacoat-and-Skirt Combo",
        nh: "1"
      }
    },
    {
      title: {
        name: "Vladimir",
        alt_name: "",
        id: "cbr06",
        image_url: "https://dodo.ac/np/images/7/75/Vladimir_NH.png",
        species: "Bear cub",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "2",
        sign: "Leo",
        quote: "Trouble never comes alone.",
        phrase: "nyet",
        clothing: "Striped Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "W. Link",
        alt_name: "",
        id: "wol11",
        image_url: "https://dodo.ac/np/images/3/3d/W._Link_NL_Model.png",
        species: "Wolf",
        personality: "Smug",
        gender: "Male",
        birthday_month: "December",
        birthday_day: "2",
        sign: "Sagittarius",
        quote: "Walk on the wild side.",
        phrase: "ruff ruff",
        clothing: "Wolf Link Outfit",
        nh: "0"
      }
    },
    {
      title: {
        name: "Wade",
        alt_name: "",
        id: "pgn09",
        image_url: "https://dodo.ac/np/images/5/52/Wade_NH.png",
        species: "Penguin",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "October",
        birthday_day: "30",
        sign: "Scorpio",
        quote: "Which came first, the seeds or the sunflower?",
        phrase: "so it goes",
        clothing: "Frog Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Walker",
        alt_name: "",
        id: "dog06",
        image_url: "https://dodo.ac/np/images/0/0f/Walker_NH.png",
        species: "Dog",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "10",
        sign: "Gemini",
        quote: "The dog wags his tail, not for you, but for your bread.",
        phrase: "wuh",
        clothing: "Five-Ball Tee",
        nh: "1"
      }
    },
    {
      title: {
        name: "Walt",
        alt_name: "",
        id: "kgr08",
        image_url: "https://dodo.ac/np/images/b/bf/Walt_NH.png",
        species: "Kangaroo",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "April",
        birthday_day: "24",
        sign: "Taurus",
        quote: "Take the good with the bad.",
        phrase: "pockets",
        clothing: "Casual Kimono",
        nh: "1"
      }
    },
    {
      title: {
        name: "Wart Jr.",
        alt_name: "",
        id: "flg05",
        image_url: "https://dodo.ac/np/images/2/21/Wart_Jr._NH.png",
        species: "Frog",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "August",
        birthday_day: "21",
        sign: "Leo",
        quote: "Age before beauty.",
        phrase: "grr-ribbit",
        clothing: "Hanten Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Weber",
        alt_name: "",
        id: "duk11",
        image_url: "https://dodo.ac/np/images/6/66/Weber_NH.png",
        species: "Duck",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "30",
        sign: "Cancer",
        quote: "Today's adults are yesterday's children.",
        phrase: "quaa",
        clothing: "Striped Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Weldon",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/6/69/Weldon_DnMe%2B.png",
        species: "Bull",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Aquarius",
        quote: "",
        phrase: "ムーチョ",
        clothing: "Blue Aloha Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Wendy",
        alt_name: "",
        id: "shp09",
        image_url: "https://dodo.ac/np/images/2/23/Wendy_NH.png",
        species: "Sheep",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "August",
        birthday_day: "15",
        sign: "Leo",
        quote: "Every cloud has a silver lining.",
        phrase: "lambkins",
        clothing: "Watermelon Dress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Whitney",
        alt_name: "",
        id: "wol03",
        image_url: "https://dodo.ac/np/images/3/36/Whitney_NH.png",
        species: "Wolf",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "September",
        birthday_day: "17",
        sign: "Virgo",
        quote: "Don't cry wolf unless you mean it.",
        phrase: "snappy",
        clothing: "Sleeveless Shirtdress",
        nh: "1"
      }
    },
    {
      title: {
        name: "Willow",
        alt_name: "",
        id: "shp07",
        image_url: "https://dodo.ac/np/images/6/62/Willow_NH.png",
        species: "Sheep",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "November",
        birthday_day: "26",
        sign: "Sagittarius",
        quote: "You can't fight your genes.",
        phrase: "bo peep",
        clothing: "Pom-Pom Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Winnie",
        alt_name: "",
        id: "hrs05",
        image_url: "https://dodo.ac/np/images/b/b8/Winnie_NH.png",
        species: "Horse",
        personality: "Peppy",
        gender: "Female",
        birthday_month: "January",
        birthday_day: "31",
        sign: "Aquarius",
        quote: "Smile, and the world smiles with you.",
        phrase: "hay-OK",
        clothing: "Faux-Hair Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Wolfgang",
        alt_name: "",
        id: "wol02",
        image_url: "https://dodo.ac/np/images/a/aa/Wolfgang_NH.png",
        species: "Wolf",
        personality: "Cranky",
        gender: "Male",
        birthday_month: "November",
        birthday_day: "25",
        sign: "Sagittarius",
        quote: "Don't be afraid to show your fangs.",
        phrase: "snarrrl",
        clothing: "Flight Jacket",
        nh: "1"
      }
    },
    {
      title: {
        name: "Woolio",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/7/73/Woolio_PG.png",
        species: "Sheep",
        personality: "Jock",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Aries",
        quote: "",
        phrase: "biz-aaa",
        clothing: "Dark Polka Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Yodel",
        alt_name: "",
        id: "",
        image_url: "https://dodo.ac/np/images/9/98/Yodel_PG.png",
        species: "Gorilla",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "",
        birthday_day: "",
        sign: "Sagittarius",
        quote: "",
        phrase: "odelay",
        clothing: "Blue Aloha Shirt",
        nh: "0"
      }
    },
    {
      title: {
        name: "Yuka",
        alt_name: "",
        id: "kal00",
        image_url: "https://dodo.ac/np/images/c/ca/Yuka_NH.png",
        species: "Koala",
        personality: "Snooty",
        gender: "Female",
        birthday_month: "July",
        birthday_day: "20",
        sign: "Cancer",
        quote: "Beauty is in the eye of the beholder.",
        phrase: "tsk tsk",
        clothing: "Aran-Knit Sweater",
        nh: "1"
      }
    },
    {
      title: {
        name: "Zell",
        alt_name: "",
        id: "der02",
        image_url: "https://dodo.ac/np/images/c/c0/Zell_NH.png",
        species: "Deer",
        personality: "Smug",
        gender: "Male",
        birthday_month: "June",
        birthday_day: "7",
        sign: "Gemini",
        quote: "Clothes totally make the mammal.",
        phrase: "pronk",
        clothing: "Gilet and Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Zoe",
        alt_name: "",
        id: "ant05",
        image_url: "https://dodo.ac/np/images/0/0b/Zoe_amiibo.png",
        species: "Anteater",
        personality: "Normal",
        gender: "Female",
        birthday_month: "February",
        birthday_day: "10",
        sign: "Aquarius",
        quote: "Don't sign until you've read the whole thing.",
        phrase: "zoozooroo",
        clothing: "Silk Floral-Print Shirt",
        nh: "1"
      }
    },
    {
      title: {
        name: "Zucker",
        alt_name: "",
        id: "ocp02",
        image_url: "https://dodo.ac/np/images/7/7f/Zucker_NH.png",
        species: "Octopus",
        personality: "Lazy",
        gender: "Male",
        birthday_month: "March",
        birthday_day: "8",
        sign: "Pisces",
        quote: "There's no such thing as luck.",
        phrase: "bloop",
        clothing: "Happi Tee",
        nh: "1"
      }
    }
  ];

acnhData = [];
for (item of data) {
  if (item.title.nh == "1") {
    acnhData.push(item.title);
  }
}
console.log("Villager Data:", acnhData);