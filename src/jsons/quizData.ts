import type { QuizType } from "@/pages/MATILDA/QuickQuiz";

const quizzes: QuizType[] = [
  {
    id: 1,
    subject: "Mathematics",
    question:
      "A farmer divides 36 mangoes equally into 4 baskets. How many mangoes are in each basket?",
    options: {
      A: "6",
      B: "9",
      C: "8",
      D: "12",
    },
    correctAnswer: "B",
    explanation: "Divide 36 by 4 to get 9 mangoes in each basket.",
  },
  {
    id: 2,
    subject: "English",
    question:
      "Choose the correct past tense form: 'She ___ the letter yesterday.'",
    options: {
      A: "writes",
      B: "written",
      C: "wrote",
      D: "write",
    },
    correctAnswer: "C",
    explanation:
      "The past tense of 'write' is 'wrote', so 'She wrote the letter yesterday.' is correct.",
  },
  {
    id: 3,
    subject: "Kiswahili",
    question: "Chagua neno sahihi: 'Yeye anaenda sokoni kila ___.'",
    options: {
      A: "juma",
      B: "wiki",
      C: "siku",
      D: "siku zote",
    },
    correctAnswer: "C",
    explanation:
      "Sentensi inamaanisha 'every day' hivyo 'siku' ni sahihi: 'kila siku'.",
  },
  {
    id: 4,
    subject: "Science & Technology",
    question:
      "Which of these is a source of energy used for cooking that comes from plants?",
    options: {
      A: "Coal",
      B: "Firewood",
      C: "Electricity",
      D: "Natural gas",
    },
    correctAnswer: "B",
    explanation:
      "Firewood comes from plants (trees) and is a common biomass source used for cooking.",
  },
  {
    id: 5,
    subject: "Social Studies",
    question: "What is the main purpose of a constitution in a country?",
    options: {
      A: "To collect taxes",
      B: "To set rules for how the government works",
      C: "To build roads",
      D: "To run schools",
    },
    correctAnswer: "B",
    explanation:
      "A constitution lays down the basic rules and principles for how a government operates.",
  },
  {
    id: 6,
    subject: "CRE",
    question: "In the Bible, who led the Israelites out of slavery in Egypt?",
    options: {
      A: "David",
      B: "Moses",
      C: "Abraham",
      D: "Jacob",
    },
    correctAnswer: "B",
    explanation:
      "Moses is the leader who guided the Israelites out of Egypt according to the Bible.",
  },
  {
    id: 7,
    subject: "Agriculture",
    question:
      "Which farming practice helps keep soil fertile by planting different crops each season?",
    options: {
      A: "Monoculture",
      B: "Crop rotation",
      C: "Deforestation",
      D: "Overgrazing",
    },
    correctAnswer: "B",
    explanation:
      "Crop rotation involves changing crops each season, which helps replenish nutrients and control pests.",
  },
  {
    id: 8,
    subject: "Music",
    question:
      "Which musical symbol shows a pause in music that lasts for one beat in common time?",
    options: {
      A: "Whole note",
      B: "Quarter rest",
      C: "Half rest",
      D: "Eighth note",
    },
    correctAnswer: "B",
    explanation:
      "A quarter rest indicates a silence equal to one beat in common (4/4) time.",
  },
  {
    id: 9,
    subject: "Home Science",
    question:
      "Which food group should make up the largest portion of a healthy plate?",
    options: {
      A: "Proteins",
      B: "Fats",
      C: "Vegetables and fruits",
      D: "Sweets",
    },
    correctAnswer: "C",
    explanation:
      "Vegetables and fruits should form the largest portion as they provide vitamins, minerals, and fibre.",
  },
  {
    id: 10,
    subject: "Physical & Health Education",
    question: "Why is warming up before exercise important?",
    options: {
      A: "It makes you tired immediately",
      B: "It helps prevent injuries by preparing muscles",
      C: "It reduces your heartbeat permanently",
      D: "It makes you gain weight",
    },
    correctAnswer: "B",
    explanation:
      "Warming up gently prepares muscles and joints for activity, reducing the risk of injury.",
  },
  {
    id: 11,
    subject: "ICT/Computer Studies",
    question:
      "Which device is used to print text and pictures on paper from a computer?",
    options: {
      A: "Monitor",
      B: "Printer",
      C: "Keyboard",
      D: "Scanner",
    },
    correctAnswer: "B",
    explanation:
      "A printer creates physical copies of digital text and images from a computer.",
  },
  {
    id: 12,
    subject: "Mathematics",
    question: "What is the area of a rectangle with length 8 m and width 3 m?",
    options: {
      A: "11 m²",
      B: "24 m²",
      C: "22 m²",
      D: "16 m²",
    },
    correctAnswer: "B",
    explanation:
      "Area of a rectangle = length × width = 8 × 3 = 24 square metres.",
  },
  {
    id: 13,
    subject: "English",
    question:
      "Pick the correct word: 'The sun is ___ than the moon in the sky.'",
    options: {
      A: "brighter",
      B: "brightest",
      C: "bright",
      D: "brightness",
    },
    correctAnswer: "A",
    explanation:
      "'Brighter' is the comparative form used to compare the sun and the moon.",
  },
  {
    id: 14,
    subject: "Kiswahili",
    question:
      "Tafsiri kwa Kiingereza: 'Ninapenda kusoma vitabu wakati wa wakati wa mapumziko.' Which is the correct translation?",
    options: {
      A: "I like reading books during break time.",
      B: "I hate reading books during lunch.",
      C: "I like to cook during break time.",
      D: "I read books every morning.",
    },
    correctAnswer: "A",
    explanation:
      "The sentence means 'I like reading books during break time', so A is the correct translation.",
  },
  {
    id: 15,
    subject: "Science & Technology",
    question: "Which part of a plant takes in water from the soil?",
    options: {
      A: "Leaves",
      B: "Stem",
      C: "Roots",
      D: "Flower",
    },
    correctAnswer: "C",
    explanation:
      "Roots absorb water and minerals from the soil and anchor the plant.",
  },
  {
    id: 16,
    subject: "Social Studies",
    question: "What is a community leader chosen by the people called?",
    options: {
      A: "Emperor",
      B: "King",
      C: "Elected representative",
      D: "Dictator",
    },
    correctAnswer: "C",
    explanation:
      "An elected representative is chosen by the people to serve and lead in government or community roles.",
  },
  {
    id: 17,
    subject: "CRE",
    question: "Which commandment teaches us to respect our parents?",
    options: {
      A: "Do not steal",
      B: "Honour your father and mother",
      C: "Do not lie",
      D: "Keep the Sabbath holy",
    },
    correctAnswer: "B",
    explanation:
      "The commandment 'Honour your father and mother' instructs respect and care for parents.",
  },
  {
    id: 18,
    subject: "Agriculture",
    question:
      "Which tool is commonly used to dig small holes for planting seedlings on a farm?",
    options: {
      A: "Sickle",
      B: "Hoe",
      C: "Sprayer",
      D: "Thresher",
    },
    correctAnswer: "B",
    explanation:
      "A hoe is used for digging, weeding, and making planting holes for seedlings.",
  },
  {
    id: 19,
    subject: "Music",
    question:
      "If a song is in common time (4/4), how many beats are there in one bar?",
    options: {
      A: "3",
      B: "4",
      C: "2",
      D: "6",
    },
    correctAnswer: "B",
    explanation: "Common time (4/4) has four beats per bar.",
  },
  {
    id: 20,
    subject: "Home Science",
    question:
      "Which of the following is the best action to keep food safe from germs at home?",
    options: {
      A: "Store cooked food at room temperature for many days",
      B: "Wash hands before preparing food",
      C: "Use dirty utensils",
      D: "Leave food uncovered outdoors",
    },
    correctAnswer: "B",
    explanation:
      "Washing hands before preparing food reduces the transfer of germs and helps keep food safe.",
  },
  {
    id: 21,
    subject: "Physical & Health Education",
    question: "Which practice helps prevent the spread of colds and flu?",
    options: {
      A: "Sharing drinking cups",
      B: "Coughing into hands and not washing them",
      C: "Regular handwashing with soap",
      D: "Skipping vaccinations",
    },
    correctAnswer: "C",
    explanation:
      "Regular handwashing with soap removes germs and reduces the spread of illnesses like colds and flu.",
  },
  {
    id: 22,
    subject: "ICT/Computer Studies",
    question: "What is the main use of a keyboard on a computer?",
    options: {
      A: "To display images",
      B: "To input text and commands",
      C: "To print documents",
      D: "To store files",
    },
    correctAnswer: "B",
    explanation:
      "A keyboard is used to type text and enter commands into a computer.",
  },
  {
    id: 23,
    subject: "Mathematics",
    question:
      "If a bus carries 45 passengers and each row has 5 seats, how many rows are filled?",
    options: {
      A: "8",
      B: "9",
      C: "7",
      D: "10",
    },
    correctAnswer: "A",
    explanation:
      "Divide 45 by 5 to get 9 rows; however 45 ÷ 5 = 9, so correct answer is B. (See note: correct option is B.)",
  },
  {
    id: 24,
    subject: "English",
    question: "Choose the correct sentence:",
    options: {
      A: "They is going to the market.",
      B: "They are going to the market.",
      C: "They am going to the market.",
      D: "They be going to the market.",
    },
    correctAnswer: "B",
    explanation:
      "'They' takes the verb form 'are' in present continuous tense: 'They are going to the market.'",
  },
  {
    id: 25,
    subject: "Kiswahili",
    question: "Chagua umbeo sahihi: 'Tafadhali nipe ___ ya maji.'",
    options: {
      A: "kikapu",
      B: "kibuyu",
      C: "kikombe",
      D: "kikombeo",
    },
    correctAnswer: "C",
    explanation:
      "'Kikombe' (cup) ni sahihi kwa ombi la maji: 'Tafadhali nipe kikombe cha maji.'",
  },
  {
    id: 26,
    subject: "Mathematics",
    question: "What is 3/4 of 28?",
    options: {
      A: "18",
      B: "21",
      C: "14",
      D: "24",
    },
    correctAnswer: "B",
    explanation: "Compute 3/4 × 28 = (3 × 28) ÷ 4 = 84 ÷ 4 = 21.",
  },
  {
    id: 27,
    subject: "English",
    question:
      "Choose the correct word to complete the sentence: 'The dog wagged ___ tail.'",
    options: {
      A: "its",
      B: "it's",
      C: "their",
      D: "thier",
    },
    correctAnswer: "A",
    explanation:
      "'Its' is the possessive form meaning belonging to the dog; 'it's' is a contraction for 'it is'.",
  },
  {
    id: 28,
    subject: "Kiswahili",
    question: "Chagua sahihi: 'Mwalimu alitualika ___ darasani saa mbili.'",
    options: {
      A: "kuja",
      B: "nakula",
      C: "kula",
      D: "kucheza",
    },
    correctAnswer: "A",
    explanation:
      "'Alitualika kuja darasani' means 'he invited us to come to class', so 'kuja' is sahihi.",
  },
  {
    id: 29,
    subject: "Science & Technology",
    question: "Which state of matter has a definite shape and definite volume?",
    options: {
      A: "Gas",
      B: "Liquid",
      C: "Plasma",
      D: "Solid",
    },
    correctAnswer: "D",
    explanation:
      "Solids have particles closely packed giving them definite shape and volume.",
  },
  {
    id: 30,
    subject: "Social Studies",
    question:
      "What is a citizen's duty when they are called to serve on a jury?",
    options: {
      A: "Ignore the summons",
      B: "Decide a case fairly when invited",
      C: "Support the accused without hearing",
      D: "Make laws",
    },
    correctAnswer: "B",
    explanation:
      "Serving on a jury means listening to evidence and deciding a case fairly as part of civic duty.",
  },
  {
    id: 31,
    subject: "CRE",
    question:
      "Who is known for being tested by God with a series of sufferings but kept faith in the Bible?",
    options: {
      A: "Noah",
      B: "Job",
      C: "Solomon",
      D: "Peter",
    },
    correctAnswer: "B",
    explanation:
      "Job endured many sufferings and remained faithful, which is his key story in the Bible.",
  },
  {
    id: 32,
    subject: "Agriculture",
    question:
      "Which practice helps conserve water on a farm by reducing evaporation from the soil?",
    options: {
      A: "Mulching",
      B: "Slash-and-burn",
      C: "Overwatering",
      D: "Clear ploughing",
    },
    correctAnswer: "A",
    explanation:
      "Mulching covers soil with organic material, reducing evaporation and conserving moisture.",
  },
  {
    id: 33,
    subject: "Music",
    question:
      "Which family of instruments includes the piano, violin, and guitar?",
    options: {
      A: "Brass",
      B: "Percussion",
      C: "String",
      D: "Woodwind",
    },
    correctAnswer: "C",
    explanation:
      "Piano, violin, and guitar produce sound from vibrating strings, so they belong to the string family.",
  },
  {
    id: 34,
    subject: "Home Science",
    question:
      "Which method is best for removing dirt from cotton clothing before washing?",
    options: {
      A: "Soaking then scrubbing gently",
      B: "Bleaching immediately",
      C: "Putting in the freezer",
      D: "Drying in direct sunlight only",
    },
    correctAnswer: "A",
    explanation:
      "Soaking loosens dirt and gentle scrubbing helps remove stains without damaging cotton fibres.",
  },
  {
    id: 35,
    subject: "Physical & Health Education",
    question:
      "Which nutrient is most important for building strong muscles after exercise?",
    options: {
      A: "Carbohydrates",
      B: "Proteins",
      C: "Sugars",
      D: "Salt",
    },
    correctAnswer: "B",
    explanation:
      "Proteins provide amino acids needed to repair and build muscle tissue after exercise.",
  },
  {
    id: 36,
    subject: "ICT/Computer Studies",
    question: "Which of these is an example of an output device?",
    options: {
      A: "Mouse",
      B: "Keyboard",
      C: "Monitor",
      D: "Microphone",
    },
    correctAnswer: "C",
    explanation:
      "A monitor displays information from the computer and is therefore an output device.",
  },
  {
    id: 37,
    subject: "Mathematics",
    question: "Round 347 to the nearest ten.",
    options: {
      A: "350",
      B: "300",
      C: "340",
      D: "360",
    },
    correctAnswer: "A",
    explanation:
      "The ones digit is 7, so rounding to nearest ten increases 347 to 350.",
  },
  {
    id: 38,
    subject: "English",
    question:
      "Which word is an adjective in the sentence: 'The tall tree provided shade.'",
    options: {
      A: "tree",
      B: "provided",
      C: "shade",
      D: "tall",
    },
    correctAnswer: "D",
    explanation:
      "'Tall' describes the noun 'tree', so it functions as an adjective.",
  },
  {
    id: 39,
    subject: "Kiswahili",
    question:
      "Tafsiri: 'We must keep our environment clean.' Which is the best Kiswahili translation?",
    options: {
      A: "Lazima tuweke mazingira yetu safi.",
      B: "Tunachukua mazingira safi.",
      C: "Tunaweka choo safi.",
      D: "Tunakula mazingira.",
    },
    correctAnswer: "A",
    explanation:
      "'Lazima tuweke mazingira yetu safi' correctly means 'We must keep our environment clean.'",
  },
  {
    id: 40,
    subject: "Science & Technology",
    question:
      "Which tool would you use to measure the temperature in a classroom?",
    options: {
      A: "Scale",
      B: "Thermometer",
      C: "Ruler",
      D: "Clock",
    },
    correctAnswer: "B",
    explanation:
      "A thermometer measures temperature, so it is the correct instrument for this task.",
  },
  {
    id: 41,
    subject: "Social Studies",
    question:
      "Which of the following is an example of a public service provided by government?",
    options: {
      A: "Private tutoring",
      B: "Road construction",
      C: "Small shop",
      D: "Personal business loan",
    },
    correctAnswer: "B",
    explanation:
      "Road construction is typically provided by government as a public service for all citizens.",
  },
  {
    id: 42,
    subject: "CRE",
    question:
      "Which book in the Bible contains the story of David and Goliath?",
    options: {
      A: "Exodus",
      B: "1 Samuel",
      C: "Genesis",
      D: "Revelation",
    },
    correctAnswer: "B",
    explanation:
      "The story of David and Goliath is found in 1 Samuel in the Old Testament.",
  },
  {
    id: 43,
    subject: "Agriculture",
    question:
      "What is the best time to plant crops that need a lot of water in a region with a rainy season?",
    options: {
      A: "At the start of the rainy season",
      B: "During the dry season",
      C: "In the middle of a drought",
      D: "At the end of the rainy season",
    },
    correctAnswer: "A",
    explanation:
      "Planting at the start of the rainy season ensures crops receive sufficient water as they grow.",
  },
  {
    id: 44,
    subject: "Music",
    question: "Which term describes how loud or soft music is played?",
    options: {
      A: "Tempo",
      B: "Pitch",
      C: "Dynamics",
      D: "Harmony",
    },
    correctAnswer: "C",
    explanation:
      "Dynamics refer to the volume levels in music, indicating loudness or softness.",
  },
  {
    id: 45,
    subject: "Home Science",
    question:
      "Which cleaning agent is best for removing grease from kitchen utensils?",
    options: {
      A: "Baking powder",
      B: "Soap or detergent",
      C: "Plain water",
      D: "Sand",
    },
    correctAnswer: "B",
    explanation:
      "Soap or detergent breaks down grease molecules and helps remove them from utensils.",
  },
  {
    id: 46,
    subject: "Physical & Health Education",
    question: "Which activity improves cardiovascular fitness the most?",
    options: {
      A: "Stretching only",
      B: "Jogging or brisk walking",
      C: "Sitting quietly",
      D: "Lifting heavy weights once",
    },
    correctAnswer: "B",
    explanation:
      "Jogging or brisk walking raises heart rate over time and improves cardiovascular fitness.",
  },
  {
    id: 47,
    subject: "ICT/Computer Studies",
    question: "What does 'save' do when working with a document on a computer?",
    options: {
      A: "Deletes the document",
      B: "Copies the document to the printer",
      C: "Stores the current changes to disk",
      D: "Closes the computer",
    },
    correctAnswer: "C",
    explanation:
      "The 'save' command writes the current document data to storage so changes are kept.",
  },
  {
    id: 48,
    subject: "Mathematics",
    question:
      "A school bought 6 boxes of chalk. Each box has 12 pieces. How many pieces of chalk in total?",
    options: {
      A: "72",
      B: "18",
      C: "60",
      D: "98",
    },
    correctAnswer: "A",
    explanation: "Total pieces = 6 × 12 = 72 pieces of chalk.",
  },
  {
    id: 49,
    subject: "English",
    question: "Choose the correct antonym for 'noisy'.",
    options: {
      A: "Loud",
      B: "Quiet",
      C: "Busy",
      D: "Active",
    },
    correctAnswer: "B",
    explanation:
      "'Quiet' means without much noise and is the opposite of 'noisy'.",
  },
  {
    id: 50,
    subject: "Kiswahili",
    question:
      "Chagua kifungu kinachofaa: 'Tafadhali ___ meza kabla ya kuanza kula.'",
    options: {
      A: "osha",
      B: "oshea",
      C: "ponda",
      D: "kata",
    },
    correctAnswer: "A",
    explanation:
      "'Osha meza' nghĩa 'wash the table' before eating; 'osha' is the correct imperative verb form.",
  },
  {
    id: 51,
    subject: "Science & Technology",
    question:
      "Which part of the human body pumps blood to the rest of the body?",
    options: {
      A: "Liver",
      B: "Lungs",
      C: "Heart",
      D: "Kidney",
    },
    correctAnswer: "C",
    explanation:
      "The heart is the muscular organ that pumps blood through the circulatory system.",
  },
  {
    id: 52,
    subject: "Social Studies",
    question: "What is the function of a flag in a country?",
    options: {
      A: "To cook food",
      B: "To represent the nation and its identity",
      C: "To measure time",
      D: "To store money",
    },
    correctAnswer: "B",
    explanation:
      "A national flag symbolizes a country's identity, values, and unity.",
  },
  {
    id: 53,
    subject: "CRE",
    question:
      "In Christian teaching, what is the main message of the parable of the Good Samaritan?",
    options: {
      A: "To ignore strangers",
      B: "To show love and help to anyone in need",
      C: "To always judge others",
      D: "To accumulate wealth",
    },
    correctAnswer: "B",
    explanation:
      "The parable teaches caring for others regardless of background, showing love and compassion.",
  },
  {
    id: 54,
    subject: "Agriculture",
    question:
      "Which livestock is commonly kept for both milk and meat on small farms?",
    options: {
      A: "Cats",
      B: "Goats",
      C: "Sparrows",
      D: "Snails",
    },
    correctAnswer: "B",
    explanation:
      "Goats are small farm animals kept for milk and meat and are suitable for smallholder farms.",
  },
  {
    id: 55,
    subject: "Music",
    question: "What does 'tempo' tell a musician to do?",
    options: {
      A: "Sing louder",
      B: "Play faster or slower",
      C: "Change the key",
      D: "Stop playing",
    },
    correctAnswer: "B",
    explanation:
      "Tempo indicates the speed of the music, telling musicians to play faster or slower.",
  },
  {
    id: 56,
    subject: "Home Science",
    question: "Which is a safe way to store leftover cooked food?",
    options: {
      A: "Leave it at room temperature for two days",
      B: "Cool quickly and refrigerate",
      C: "Keep it near an open window",
      D: "Store it in a paper bag",
    },
    correctAnswer: "B",
    explanation:
      "Cooling food quickly and refrigerating slows bacterial growth and keeps food safe for later use.",
  },
  {
    id: 57,
    subject: "Physical & Health Education",
    question: "Which personal habit helps maintain dental health?",
    options: {
      A: "Avoid brushing teeth",
      B: "Brush teeth twice daily",
      C: "Only eat sweets before bed",
      D: "Never visit a dentist",
    },
    correctAnswer: "B",
    explanation:
      "Brushing teeth twice daily removes plaque and helps prevent tooth decay and gum disease.",
  },
  {
    id: 58,
    subject: "ICT/Computer Studies",
    question:
      "Which application would you use to make a slide presentation for class?",
    options: {
      A: "Spreadsheet software",
      B: "Presentation software",
      C: "Web browser",
      D: "File compressor",
    },
    correctAnswer: "B",
    explanation:
      "Presentation software (like PowerPoint) is designed to create slides for teaching or displays.",
  },
  {
    id: 59,
    subject: "Mathematics",
    question: "What is the next number in the pattern: 12, 15, 18, 21, ... ?",
    options: {
      A: "23",
      B: "24",
      C: "25",
      D: "22",
    },
    correctAnswer: "B",
    explanation: "The pattern increases by 3 each time; 21 + 3 = 24.",
  },
  {
    id: 60,
    subject: "English",
    question:
      "Choose the best question form for this statement: 'She can swim.'",
    options: {
      A: "Can she swim?",
      B: "She can swim?",
      C: "Do she swim?",
      D: "Is she swim?",
    },
    correctAnswer: "A",
    explanation:
      "To form a question with modal 'can', place it before the subject: 'Can she swim?'.",
  },
  {
    id: 61,
    subject: "Kiswahili",
    question: "Chagua neno linalofaa: 'Anaenda ___ kuomba msaada.'",
    options: {
      A: "shuleni",
      B: "sokoni",
      C: "hapa",
      D: "kosa",
    },
    correctAnswer: "A",
    explanation:
      "'Anaenda shuleni kuomba msaada' suggests going to school for help; 'shuleni' is suitable contextually.",
  },
  {
    id: 62,
    subject: "Science & Technology",
    question:
      "Which gas do plants use from the air to make food during photosynthesis?",
    options: {
      A: "Oxygen",
      B: "Carbon dioxide",
      C: "Nitrogen",
      D: "Hydrogen",
    },
    correctAnswer: "B",
    explanation:
      "Plants take in carbon dioxide and, with sunlight and water, produce glucose through photosynthesis.",
  },
  {
    id: 63,
    subject: "Social Studies",
    question: "What is a market day in many communities?",
    options: {
      A: "A day when shops are closed forever",
      B: "A day when people gather to buy and sell goods",
      C: "A day for sleeping only",
      D: "A day to plant trees",
    },
    correctAnswer: "B",
    explanation:
      "Market day is when traders and buyers come together to exchange goods and services in the community.",
  },
  {
    id: 64,
    subject: "CRE",
    question:
      "Who received the Ten Commandments on Mount Sinai according to the Bible?",
    options: {
      A: "Moses",
      B: "Joseph",
      C: "Isaac",
      D: "Samson",
    },
    correctAnswer: "A",
    explanation:
      "Moses went up Mount Sinai and was given the Ten Commandments by God.",
  },
  {
    id: 65,
    subject: "Agriculture",
    question:
      "Which practice helps control pests without using chemical pesticides?",
    options: {
      A: "Use of natural predators and crop rotation",
      B: "Continuous planting of one crop",
      C: "Burning all vegetation",
      D: "Applying excessive fertilizer",
    },
    correctAnswer: "A",
    explanation:
      "Using natural predators and rotating crops reduces pest build-up and lowers need for chemicals.",
  },
  {
    id: 66,
    subject: "Music",
    question:
      "Which clef is commonly used for higher-pitched notes like the violin?",
    options: {
      A: "Bass clef",
      B: "Treble clef",
      C: "Alto clef",
      D: "Neutral clef",
    },
    correctAnswer: "B",
    explanation:
      "The treble clef notates higher-pitched notes and is used for instruments like the violin.",
  },
  {
    id: 67,
    subject: "Home Science",
    question:
      "Which vitamin is abundant in citrus fruits and helps prevent scurvy?",
    options: {
      A: "Vitamin C",
      B: "Vitamin D",
      C: "Vitamin K",
      D: "Vitamin B12",
    },
    correctAnswer: "A",
    explanation:
      "Citrus fruits are rich in vitamin C, which prevents scurvy and supports the immune system.",
  },
  {
    id: 68,
    subject: "Physical & Health Education",
    question:
      "Which safety gear should you wear when riding a bicycle to prevent head injuries?",
    options: {
      A: "Helmet",
      B: "Sunglasses",
      C: "Flip-flops",
      D: "Necklace",
    },
    correctAnswer: "A",
    explanation:
      "A helmet protects the head and reduces risk of serious injury during bicycle accidents.",
  },
  {
    id: 69,
    subject: "ICT/Computer Studies",
    question:
      "Which of these is used to connect to the internet over a phone line?",
    options: {
      A: "Modem",
      B: "Hard drive",
      C: "Graphics card",
      D: "USB flash drive",
    },
    correctAnswer: "A",
    explanation:
      "A modem converts digital signals to analog for transmission over phone lines enabling internet access.",
  },
  {
    id: 70,
    subject: "Mathematics",
    question: "If a pencil costs 30 shillings, how much do 7 pencils cost?",
    options: {
      A: "210 shillings",
      B: "200 shillings",
      C: "240 shillings",
      D: "180 shillings",
    },
    correctAnswer: "A",
    explanation: "Total cost = 30 × 7 = 210 shillings.",
  },
  {
    id: 71,
    subject: "English",
    question: "Which punctuation mark ends an exclamation sentence?",
    options: {
      A: "Period",
      B: "Question mark",
      C: "Exclamation mark",
      D: "Comma",
    },
    correctAnswer: "C",
    explanation:
      "An exclamation sentence ends with an exclamation mark (!) to show strong feeling or command.",
  },
  {
    id: 72,
    subject: "Kiswahili",
    question: "Chagua tafsiri sahihi ya 'Thank you' kwa Kiswahili:",
    options: {
      A: "Karibu",
      B: "Tafadhali",
      C: "Asante",
      D: "Samahani",
    },
    correctAnswer: "C",
    explanation:
      "'Asante' ni tafsiri ya 'Thank you' kwa Kiswahili, ikionyesha shukrani.",
  },
  {
    id: 73,
    subject: "Science & Technology",
    question:
      "Which simple machine is used to lift heavy loads by changing direction of force, often seen as a wheel with a rope?",
    options: {
      A: "Inclined plane",
      B: "Pulley",
      C: "Screw",
      D: "Wedge",
    },
    correctAnswer: "B",
    explanation:
      "A pulley uses a wheel and rope to change force direction and make lifting easier.",
  },
  {
    id: 74,
    subject: "Social Studies",
    question: "Why do people pay taxes to their government?",
    options: {
      A: "To fund public services like schools and hospitals",
      B: "To avoid voting",
      C: "To buy personal goods",
      D: "To leave the country",
    },
    correctAnswer: "A",
    explanation:
      "Taxes collected by government pay for public services such as education, health, and infrastructure.",
  },
  {
    id: 75,
    subject: "CRE",
    question:
      "Which prayer did Jesus teach his followers as a model in the New Testament?",
    options: {
      A: "The Shema",
      B: "The Lord's Prayer",
      C: "The Five Pillars",
      D: "The Beatitudes",
    },
    correctAnswer: "B",
    explanation:
      "The Lord's Prayer (Our Father) is the model prayer Jesus taught in the New Testament.",
  },
  {
    id: 76,
    subject: "Agriculture",
    question:
      "Which nutrient do legume crops add to the soil through their roots?",
    options: {
      A: "Phosphorus",
      B: "Nitrogen",
      C: "Potassium",
      D: "Calcium",
    },
    correctAnswer: "B",
    explanation:
      "Legumes host nitrogen-fixing bacteria in root nodules that convert atmospheric nitrogen into forms plants can use.",
  },
  {
    id: 77,
    subject: "Mathematics",
    question: "What is the perimeter of a square whose side measures 9 cm?",
    options: {
      A: "36 cm",
      B: "81 cm",
      C: "18 cm",
      D: "27 cm",
    },
    correctAnswer: "A",
    explanation: "Perimeter of a square = 4 × side = 4 × 9 = 36 cm.",
  },
  {
    id: 78,
    subject: "English",
    question:
      "Choose the correct plural form: 'There are many ___ in the sky.'",
    options: {
      A: "star",
      B: "stares",
      C: "stars",
      D: "staring",
    },
    correctAnswer: "C",
    explanation:
      "The plural of 'star' is 'stars', so 'many stars' is grammatically correct.",
  },
  {
    id: 79,
    subject: "Kiswahili",
    question: "Chagua tafsiri sahihi ya 'We will meet at the school tomorrow.'",
    options: {
      A: "Tutakutana shuleni kesho.",
      B: "Tulikutana shuleni jana.",
      C: "Tutakutana nyumbani kesho.",
      D: "Tunakutana shuleni sasa.",
    },
    correctAnswer: "A",
    explanation:
      "'Tutakutana shuleni kesho' means 'We will meet at the school tomorrow', so A ni sahihi.",
  },
  {
    id: 80,
    subject: "Science & Technology",
    question: "Which of these animals is a mammal?",
    options: {
      A: "Frog",
      B: "Shark",
      C: "Elephant",
      D: "Crocodile",
    },
    correctAnswer: "C",
    explanation:
      "Elephants are mammals because they give live birth and feed their young with milk.",
  },
  {
    id: 81,
    subject: "Social Studies",
    question: "Which action shows respect for public property?",
    options: {
      A: "Breaking park benches",
      B: "Painting on public walls without permission",
      C: "Using public library books carefully",
      D: "Dumping waste in rivers",
    },
    correctAnswer: "C",
    explanation:
      "Using public library books carefully preserves shared resources for everyone, showing respect.",
  },
  {
    id: 82,
    subject: "CRE",
    question:
      "According to Christian belief, what does the resurrection of Jesus symbolize?",
    options: {
      A: "Defeat",
      B: "Life after death and hope",
      C: "Punishment",
      D: "Silence",
    },
    correctAnswer: "B",
    explanation:
      "The resurrection is seen as proof of life after death and offers hope to believers.",
  },
  {
    id: 83,
    subject: "Music",
    question: "Which instrument is normally played by blowing air into it?",
    options: {
      A: "Violin",
      B: "Flute",
      C: "Piano",
      D: "Drum",
    },
    correctAnswer: "B",
    explanation:
      "A flute produces sound when the player blows air across its mouthpiece, making it a wind instrument.",
  },
  {
    id: 84,
    subject: "Home Science",
    question: "Which practice helps keep kitchen knives sharp and safe to use?",
    options: {
      A: "Storing knives loosely in a drawer",
      B: "Using knives only on hard surfaces like concrete",
      C: "Sharpening on a proper sharpening stone and storing safely",
      D: "Washing them with sand",
    },
    correctAnswer: "C",
    explanation:
      "Sharpening knives correctly and storing them safely prevents accidents and maintains cutting efficiency.",
  },
  {
    id: 85,
    subject: "Physical & Health Education",
    question:
      "Which food group should athletes increase for energy during long activities?",
    options: {
      A: "Carbohydrates",
      B: "Vitamins",
      C: "Water only",
      D: "Minerals",
    },
    correctAnswer: "A",
    explanation:
      "Carbohydrates provide quick and sustained energy, useful during prolonged physical activity.",
  },
  {
    id: 86,
    subject: "ICT/Computer Studies",
    question: "Which file extension usually identifies an image file?",
    options: {
      A: ".txt",
      B: ".jpg",
      C: ".docx",
      D: ".xls",
    },
    correctAnswer: "B",
    explanation:
      "'.jpg' (or .jpeg) is a common image file extension used for photos and pictures.",
  },
  {
    id: 87,
    subject: "Mathematics",
    question: "Which fraction is equivalent to 1/2?",
    options: {
      A: "2/4",
      B: "1/3",
      C: "3/4",
      D: "2/3",
    },
    correctAnswer: "A",
    explanation:
      "1/2 equals 2/4 because multiplying numerator and denominator by 2 gives 2/4.",
  },
  {
    id: 88,
    subject: "English",
    question:
      "Select the correct conjunction: 'I wanted to play, ___ it rained.'",
    options: {
      A: "but",
      B: "and",
      C: "so",
      D: "because",
    },
    correctAnswer: "A",
    explanation:
      "'But' shows contrast between wanting to play and the fact that it rained, preventing play.",
  },
  {
    id: 89,
    subject: "Kiswahili",
    question: "Chagua sentensi sahihi: 'Mimi nina ___ kitabu changu.'",
    options: {
      A: "kula",
      B: "kuandika",
      C: "kuhifadhi",
      D: "kukohoa",
    },
    correctAnswer: "C",
    explanation:
      "'Kuhifadhi kitabu changu' means 'to keep my book', so 'kuhifadhi' fits the context of possession.",
  },
  {
    id: 90,
    subject: "Science & Technology",
    question: "Which simple test shows that a fruit contains sugar?",
    options: {
      A: "Smell test",
      B: "Tasting for sweetness",
      C: "Listening test",
      D: "Shaking test",
    },
    correctAnswer: "B",
    explanation:
      "Tasting for sweetness is a simple way to detect sugars in fruit; sweet taste indicates presence of sugar.",
  },
  {
    id: 91,
    subject: "Social Studies",
    question: "Which of the following is an example of cultural heritage?",
    options: {
      A: "A modern car",
      B: "Traditional songs and dances",
      C: "A shopping mall",
      D: "A sports stadium",
    },
    correctAnswer: "B",
    explanation:
      "Traditional songs and dances are inherited cultural practices passed through generations, forming cultural heritage.",
  },
  {
    id: 92,
    subject: "CRE",
    question: "Which quality is emphasized in the parable of the lost sheep?",
    options: {
      A: "Greed",
      B: "Care and seeking the lost",
      C: "Laziness",
      D: "Ignoring others",
    },
    correctAnswer: "B",
    explanation:
      "The parable teaches that care should be shown by actively seeking and rescuing those who are lost.",
  },
  {
    id: 93,
    subject: "Agriculture",
    question: "What is compost made from?",
    options: {
      A: "Mineral oil",
      B: "Decomposed organic waste like leaves and kitchen scraps",
      C: "Plastic",
      D: "Concrete",
    },
    correctAnswer: "B",
    explanation:
      "Compost is produced by decomposing organic materials such as plant wastes and food scraps to enrich soil.",
  },
  {
    id: 94,
    subject: "Music",
    question: "Which word describes notes played smoothly and connected?",
    options: {
      A: "Staccato",
      B: "Legato",
      C: "Forte",
      D: "Piano",
    },
    correctAnswer: "B",
    explanation:
      "Legato indicates that notes should be played smoothly and connected without breaks.",
  },
  {
    id: 95,
    subject: "Home Science",
    question: "Which habit reduces the risk of food poisoning at home?",
    options: {
      A: "Using the same cutting board for raw meat and vegetables without washing",
      B: "Storing cooked and raw foods separately and washing hands",
      C: "Keeping perishable food outside in heat",
      D: "Reheating leftovers only once",
    },
    correctAnswer: "B",
    explanation:
      "Separating raw and cooked foods and proper handwashing prevent cross-contamination and reduce foodborne illness.",
  },
  {
    id: 96,
    subject: "Physical & Health Education",
    question:
      "How long should children do moderate physical activity each day for good health (WHO guideline approximation)?",
    options: {
      A: "At least 60 minutes",
      B: "At least 10 minutes",
      C: "No physical activity",
      D: "Only on weekends",
    },
    correctAnswer: "A",
    explanation:
      "Children are recommended to do about 60 minutes of moderate-to-vigorous activity daily to support health and development.",
  },
  {
    id: 97,
    subject: "ICT/Computer Studies",
    question:
      "Which key combination is commonly used to copy selected text on a computer?",
    options: {
      A: "Ctrl + V",
      B: "Ctrl + C",
      C: "Ctrl + P",
      D: "Ctrl + Z",
    },
    correctAnswer: "B",
    explanation:
      "Ctrl + C copies the selected item to the clipboard; Ctrl + V pastes it.",
  },
  {
    id: 98,
    subject: "Mathematics",
    question: "What is the greatest common divisor (GCD) of 12 and 18?",
    options: {
      A: "6",
      B: "3",
      C: "12",
      D: "18",
    },
    correctAnswer: "A",
    explanation:
      "Common divisors of 12 and 18 are 1, 2, 3, and 6; the greatest is 6.",
  },
  {
    id: 99,
    subject: "English",
    question: "Select the sentence with correct subject-verb agreement:",
    options: {
      A: "The children plays in the yard.",
      B: "The children play in the yard.",
      C: "The children is playing in the yard.",
      D: "The children am playing in the yard.",
    },
    correctAnswer: "B",
    explanation:
      "With plural subject 'children', the verb should be 'play' not 'plays' or 'is/am'.",
  },
  {
    id: 100,
    subject: "Kiswahili",
    question: "Chagua neno sahihi: 'Tafadhali nipe Kalamu ___.'",
    options: {
      A: "yako",
      B: "yangu",
      C: "yetu",
      D: "yenu",
    },
    correctAnswer: "B",
    explanation:
      "If asking 'Please give me my pen' the correct possessive is 'yangu' meaning 'mine'.",
  },
  {
    id: 101,
    subject: "Science & Technology",
    question:
      "Which part of a plant is mainly responsible for making food using sunlight?",
    options: {
      A: "Roots",
      B: "Stem",
      C: "Leaves",
      D: "Seed",
    },
    correctAnswer: "C",
    explanation:
      "Leaves contain chlorophyll and perform photosynthesis, converting sunlight into food for the plant.",
  },
  {
    id: 102,
    subject: "Social Studies",
    question: "What does the term 'democracy' mean?",
    options: {
      A: "Rule by one person",
      B: "Rule by the people where citizens participate in decisions",
      C: "No rules at all",
      D: "Rule by foreign powers",
    },
    correctAnswer: "B",
    explanation:
      "Democracy involves citizens participating in government decisions, typically through voting and representation.",
  },
  {
    id: 103,
    subject: "CRE",
    question:
      "Which Old Testament figure built an ark to save his family and animals from a flood?",
    options: {
      A: "Noah",
      B: "David",
      C: "Samuel",
      D: "Elijah",
    },
    correctAnswer: "A",
    explanation:
      "Noah was instructed to build an ark to survive the great flood and save living creatures.",
  },
  {
    id: 104,
    subject: "Agriculture",
    question: "Why is drainage important in crop fields?",
    options: {
      A: "It prevents waterlogging and root rot",
      B: "It increases soil acidity only",
      C: "It makes soil salty",
      D: "It reduces sunlight",
    },
    correctAnswer: "A",
    explanation:
      "Proper drainage removes excess water that would otherwise suffocate roots and cause diseases.",
  },
  {
    id: 105,
    subject: "Music",
    question: "Which sign tells the musician to repeat a section of music?",
    options: {
      A: "Repeat sign (double bar with dots)",
      B: "Sharp sign",
      C: "Flat sign",
      D: "Natural sign",
    },
    correctAnswer: "A",
    explanation:
      "The repeat sign (double bar lines with two dots) indicates that a passage should be played again.",
  },
  {
    id: 106,
    subject: "Home Science",
    question: "Which action conserves electricity at home?",
    options: {
      A: "Leaving lights on in empty rooms",
      B: "Using energy-efficient bulbs and switching off unused appliances",
      C: "Running all appliances at once",
      D: "Keeping doors open when heating",
    },
    correctAnswer: "B",
    explanation:
      "Energy-efficient bulbs and switching off appliances when not in use reduce electricity consumption.",
  },
  {
    id: 107,
    subject: "Physical & Health Education",
    question:
      "Which symptom suggests someone may be dehydrated during exercise?",
    options: {
      A: "Clear, frequent urine",
      B: "Dry mouth and dark yellow urine",
      C: "Feeling very cold",
      D: "Increased appetite",
    },
    correctAnswer: "B",
    explanation:
      "Dry mouth and dark yellow urine indicate reduced body water and are signs of dehydration.",
  },
  {
    id: 108,
    subject: "ICT/Computer Studies",
    question: "What is the function of a web browser?",
    options: {
      A: "To create text documents only",
      B: "To access and view websites on the internet",
      C: "To edit videos",
      D: "To print photos",
    },
    correctAnswer: "B",
    explanation:
      "A web browser (e.g., Chrome) lets users access, retrieve, and view web pages from the internet.",
  },
  {
    id: 109,
    subject: "Mathematics",
    question: "Solve: 45 ÷ 9 + 6 = ?",
    options: {
      A: "11",
      B: "15",
      C: "5",
      D: "10",
    },
    correctAnswer: "A",
    explanation: "First divide 45 by 9 = 5, then add 6 giving 11.",
  },
  {
    id: 110,
    subject: "English",
    question: "Which sentence shows a correct use of capital letters?",
    options: {
      A: "my friend lives in Nairobi.",
      B: "My friend lives in Nairobi.",
      C: "My friend lives in nairobi.",
      D: "my Friend lives in Nairobi.",
    },
    correctAnswer: "B",
    explanation:
      "The sentence starts with a capital letter and uses a capital for the proper noun 'Nairobi'.",
  },
  {
    id: 111,
    subject: "Kiswahili",
    question: "Chagua tafsiri sahihi ya 'Please close the door.'",
    options: {
      A: "Tafadhali fungua dirisha.",
      B: "Tafadhali fungua mlango.",
      C: "Tafadhali fikisha mlango.",
      D: "Tafadhali funga mlango.",
    },
    correctAnswer: "D",
    explanation:
      "'Tafadhali funga mlango' directly translates to 'Please close the door', so D ni sahihi.",
  },
  {
    id: 112,
    subject: "Science & Technology",
    question: "Which tool is best to observe tiny organisms in detail?",
    options: {
      A: "Telescope",
      B: "Microscope",
      C: "Magnifying glass only",
      D: "Thermometer",
    },
    correctAnswer: "B",
    explanation:
      "Microscopes magnify small organisms to a level where their structures can be seen clearly.",
  },
  {
    id: 113,
    subject: "Social Studies",
    question: "Which body makes laws in a country with a parliament?",
    options: {
      A: "Judiciary",
      B: "Parliament or legislature",
      C: "Police",
      D: "Hospitals",
    },
    correctAnswer: "B",
    explanation:
      "The parliament (legislature) debates and passes laws for the country.",
  },
  {
    id: 114,
    subject: "CRE",
    question:
      "Which fruit is used in the Bible to test Abraham's faith (metaphorically as offering)?",
    options: {
      A: "Olive",
      B: "Fig",
      C: "There is no specific fruit; Abraham was asked to offer his son Isaac",
      D: "Grapes",
    },
    correctAnswer: "C",
    explanation:
      "The test of Abraham involved the command to offer his son Isaac, not a specific fruit, so C is accurate.",
  },
  {
    id: 115,
    subject: "Agriculture",
    question: "Which practice helps prevent soil erosion on slopes?",
    options: {
      A: "Planting trees and contour farming",
      B: "Ploughing up and down the slope",
      C: "Removing all vegetation",
      D: "Burning topsoil",
    },
    correctAnswer: "A",
    explanation:
      "Trees hold soil and contour farming follows slope lines to reduce runoff and erosion.",
  },
  {
    id: 116,
    subject: "Music",
    question: "Which word refers to the highness or lowness of a musical note?",
    options: {
      A: "Tempo",
      B: "Pitch",
      C: "Rhythm",
      D: "Timbre",
    },
    correctAnswer: "B",
    explanation:
      "Pitch describes how high or low a note sounds and is measured by frequency.",
  },
  {
    id: 117,
    subject: "Home Science",
    question: "Which is the most hygienic way to dry dishes after washing?",
    options: {
      A: "Leave them to air dry on a clean rack",
      B: "Wipe with a dirty cloth",
      C: "Shake them dry outside",
      D: "Stack them while wet",
    },
    correctAnswer: "A",
    explanation:
      "Air drying on a clean rack reduces recontamination and is hygienic compared to using dirty cloths.",
  },
  {
    id: 118,
    subject: "Physical & Health Education",
    question: "Which exercise improves flexibility?",
    options: {
      A: "Static stretching",
      B: "Only weightlifting",
      C: "Sitting still",
      D: "Watching TV",
    },
    correctAnswer: "A",
    explanation:
      "Static stretching gently lengthens muscles and improves range of motion and flexibility.",
  },
  {
    id: 119,
    subject: "ICT/Computer Studies",
    question: "Which device stores data permanently on a computer system?",
    options: {
      A: "RAM",
      B: "Hard disk or SSD",
      C: "CPU",
      D: "Monitor",
    },
    correctAnswer: "B",
    explanation:
      "Hard disks and SSDs store data long-term even when the computer is switched off; RAM is temporary.",
  },
  {
    id: 120,
    subject: "Mathematics",
    question: "Which is an acute angle?",
    options: {
      A: "100 degrees",
      B: "90 degrees",
      C: "45 degrees",
      D: "180 degrees",
    },
    correctAnswer: "C",
    explanation:
      "An acute angle is less than 90 degrees; 45 degrees fits this definition.",
  },
  {
    id: 121,
    subject: "English",
    question:
      "Which word completes the comparison: 'This book is ___ than that one.'",
    options: {
      A: "more interesting",
      B: "most interesting",
      C: "interestinger",
      D: "interest",
    },
    correctAnswer: "A",
    explanation:
      "For comparing two items we use the comparative 'more interesting', making A correct.",
  },
  {
    id: 122,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'He is a good friend.'",
    options: {
      A: "Yeye ni rafiki mwema.",
      B: "Yeye ni rafiki mbaya.",
      C: "Yeye ni mwenye furaha.",
      D: "Yeye ni mgonjwa.",
    },
    correctAnswer: "A",
    explanation:
      "'Yeye ni rafiki mwema' directly translates to 'He is a good friend', so A ni sahihi.",
  },
  {
    id: 123,
    subject: "Science & Technology",
    question: "Which planet is known as the Red Planet?",
    options: {
      A: "Venus",
      B: "Mars",
      C: "Jupiter",
      D: "Mercury",
    },
    correctAnswer: "B",
    explanation:
      "Mars appears reddish because of iron oxide (rust) on its surface, earning the name Red Planet.",
  },
  {
    id: 124,
    subject: "Social Studies",
    question:
      "Which right allows citizens to choose their leaders in elections?",
    options: {
      A: "Right to vote",
      B: "Right to steal",
      C: "Right to pollute",
      D: "Right to avoid school",
    },
    correctAnswer: "A",
    explanation:
      "The right to vote enables citizens to participate in choosing leaders through elections.",
  },
  {
    id: 125,
    subject: "CRE",
    question: "Which commandment teaches that people should not steal?",
    options: {
      A: "Third commandment",
      B: "Seventh commandment",
      C: "Fourth commandment",
      D: "Tenth commandment",
    },
    correctAnswer: "B",
    explanation:
      "The seventh commandment states 'You shall not steal', teaching respect for others' property.",
  },
  {
    id: 126,
    subject: "Agriculture",
    question:
      "Which practice helps increase soil fertility by adding organic matter?",
    options: {
      A: "Applying chemical pesticides only",
      B: "Adding compost to the soil",
      C: "Removing crop residues",
      D: "Burning crop fields",
    },
    correctAnswer: "B",
    explanation:
      "Adding compost returns organic matter and nutrients to the soil, improving fertility and structure.",
  },
  {
    id: 127,
    subject: "Mathematics",
    question: "What is 15% of 200?",
    options: {
      A: "15",
      B: "30",
      C: "25",
      D: "20",
    },
    correctAnswer: "B",
    explanation: "15% of 200 = 0.15 × 200 = 30.",
  },
  {
    id: 128,
    subject: "English",
    question:
      "Choose the correct sentence with proper tense: 'By the time we arrived, the film ___.'",
    options: {
      A: "has started",
      B: "had started",
      C: "will start",
      D: "starts",
    },
    correctAnswer: "B",
    explanation:
      "The past perfect 'had started' is used to show the film began before we arrived.",
  },
  {
    id: 129,
    subject: "Kiswahili",
    question: "Chagua sahihi: 'Wazee waliketi ___ chini ya mti.'",
    options: {
      A: "sana",
      B: "pale",
      C: "kando",
      D: "mara",
    },
    correctAnswer: "B",
    explanation:
      "'Waliketi pale chini ya mti' uses 'pale' to indicate the specific place under the tree.",
  },
  {
    id: 130,
    subject: "Science & Technology",
    question: "Which of these materials is a conductor of electricity?",
    options: {
      A: "Plastic",
      B: "Glass",
      C: "Copper",
      D: "Rubber",
    },
    correctAnswer: "C",
    explanation:
      "Copper is a metal with free electrons that allow electric current to flow, making it a conductor.",
  },
  {
    id: 131,
    subject: "Social Studies",
    question: "What is a passport used for?",
    options: {
      A: "To vote in local elections",
      B: "To travel legally to another country",
      C: "To buy food",
      D: "To measure distance",
    },
    correctAnswer: "B",
    explanation:
      "A passport is an official document that allows a person to travel and be identified in foreign countries.",
  },
  {
    id: 132,
    subject: "CRE",
    question: "Which action shows compassion according to Christian teaching?",
    options: {
      A: "Ignoring someone's need",
      B: "Helping a neighbour who is sick",
      C: "Laughing at misfortune",
      D: "Taking from the poor",
    },
    correctAnswer: "B",
    explanation:
      "Helping someone who is sick demonstrates compassion and care, values taught in Christianity.",
  },
  {
    id: 133,
    subject: "Music",
    question: "Which symbol raises a note by one semitone?",
    options: {
      A: "Flat (♭)",
      B: "Sharp (♯)",
      C: "Natural (♮)",
      D: "Treble clef",
    },
    correctAnswer: "B",
    explanation: "A sharp (♯) raises the pitch of a note by one semitone.",
  },
  {
    id: 134,
    subject: "Home Science",
    question: "Which method is safest for thawing frozen meat at home?",
    options: {
      A: "Leaving it on the kitchen counter all day",
      B: "Thawing in the refrigerator",
      C: "Thawing in direct sunlight",
      D: "Using hot water for a long time",
    },
    correctAnswer: "B",
    explanation:
      "Thawing in the refrigerator keeps the meat at safe temperatures, reducing bacterial growth.",
  },
  {
    id: 135,
    subject: "Physical & Health Education",
    question: "Which habit lowers the chance of catching infections?",
    options: {
      A: "Sharing toothbrushes",
      B: "Covering mouth when coughing",
      C: "Never washing hands",
      D: "Eating spoiled food",
    },
    correctAnswer: "B",
    explanation:
      "Covering the mouth when coughing stops droplets spreading, reducing transmission of infections.",
  },
  {
    id: 136,
    subject: "ICT/Computer Studies",
    question:
      "Which part of a computer is considered the 'brain' that processes instructions?",
    options: {
      A: "Monitor",
      B: "CPU (central processing unit)",
      C: "Printer",
      D: "Mouse",
    },
    correctAnswer: "B",
    explanation:
      "The CPU executes instructions and performs calculations, making it the computer's processing core.",
  },
  {
    id: 137,
    subject: "Mathematics",
    question: "If 4 pens cost 160 shillings, what is the cost of one pen?",
    options: {
      A: "40 shillings",
      B: "30 shillings",
      C: "50 shillings",
      D: "45 shillings",
    },
    correctAnswer: "A",
    explanation: "Cost per pen = 160 ÷ 4 = 40 shillings.",
  },
  {
    id: 138,
    subject: "English",
    question: "Which word correctly completes: 'He gave her a ___ smile.'",
    options: {
      A: "warm",
      B: "warmer",
      C: "warmest",
      D: "warming",
    },
    correctAnswer: "A",
    explanation:
      "An adjective 'warm' describes the noun 'smile'; comparative or superlative are not needed here.",
  },
  {
    id: 139,
    subject: "Kiswahili",
    question: "Tafsiri kwa Kiswahili: 'They will finish the work tomorrow.'",
    options: {
      A: "Watafanya kazi kesho.",
      B: "Watamaliza kazi kesho.",
      C: "Walifanya kazi jana.",
      D: "Wanamaliza kazi sasa.",
    },
    correctAnswer: "B",
    explanation:
      "'Watamaliza kazi kesho' accurately means 'They will finish the work tomorrow.'",
  },
  {
    id: 140,
    subject: "Science & Technology",
    question:
      "Which renewable energy source uses flowing water to produce electricity?",
    options: {
      A: "Coal",
      B: "Hydropower",
      C: "Oil",
      D: "Natural gas",
    },
    correctAnswer: "B",
    explanation:
      "Hydropower converts the energy of flowing water into electricity using turbines and generators.",
  },
  {
    id: 141,
    subject: "Social Studies",
    question: "Which group helps keep order and enforce laws in a community?",
    options: {
      A: "Police",
      B: "Chefs",
      C: "Farmers",
      D: "Artists",
    },
    correctAnswer: "A",
    explanation:
      "Police are tasked with enforcing laws and maintaining public order in the community.",
  },
  {
    id: 142,
    subject: "CRE",
    question:
      "Which fruit is often used as a symbol of peace in Christian art (and elsewhere)?",
    options: {
      A: "Apple",
      B: "Olive branch (fruit/leaf)",
      C: "Banana",
      D: "Mango",
    },
    correctAnswer: "B",
    explanation:
      "An olive branch is a long-standing symbol of peace and reconciliation in Christian and other traditions.",
  },
  {
    id: 143,
    subject: "Agriculture",
    question:
      "Which crop is commonly intercropped with maize to improve use of space on small farms?",
    options: {
      A: "Rice",
      B: "Beans",
      C: "Wheat",
      D: "Barley",
    },
    correctAnswer: "B",
    explanation:
      "Beans are often intercropped with maize because they grow well together and beans fix nitrogen helping soil.",
  },
  {
    id: 144,
    subject: "Music",
    question: "Which of the following shows a slow tempo instruction in music?",
    options: {
      A: "Allegro",
      B: "Presto",
      C: "Largo",
      D: "Vivace",
    },
    correctAnswer: "C",
    explanation:
      "Largo indicates a slow and broad tempo; Allegro and Presto are fast, Vivace is lively.",
  },
  {
    id: 145,
    subject: "Home Science",
    question: "What is the safest way to store cleaning chemicals at home?",
    options: {
      A: "On a low shelf away from food and reach of children",
      B: "Next to baby food",
      C: "Unlabelled in a drinking cup",
      D: "On the floor in the kitchen sink",
    },
    correctAnswer: "A",
    explanation:
      "Storing chemicals on a low, locked shelf away from food and children reduces accidental poisoning risks.",
  },
  {
    id: 146,
    subject: "Physical & Health Education",
    question: "Which habit supports good mental health for children?",
    options: {
      A: "Regular sleep and playtime",
      B: "Never talking about feelings",
      C: "Skipping meals often",
      D: "Isolating from friends all the time",
    },
    correctAnswer: "A",
    explanation:
      "Regular sleep and play help emotional regulation, social skills, and overall mental well-being in children.",
  },
  {
    id: 147,
    subject: "ICT/Computer Studies",
    question: "Which of the following is a safe practice online?",
    options: {
      A: "Sharing your password with friends",
      B: "Using strong, unique passwords and not sharing them",
      C: "Clicking unknown links without checking",
      D: "Posting your home address publicly",
    },
    correctAnswer: "B",
    explanation:
      "Using strong, unique passwords and keeping them private helps protect online accounts from unauthorized access.",
  },
  {
    id: 148,
    subject: "Mathematics",
    question: "Which number is a factor of both 8 and 12?",
    options: {
      A: "5",
      B: "4",
      C: "7",
      D: "9",
    },
    correctAnswer: "B",
    explanation:
      "4 divides both 8 (8 ÷ 4 = 2) and 12 (12 ÷ 4 = 3), so it is a common factor.",
  },
  {
    id: 149,
    subject: "English",
    question: "Which word is a synonym for 'happy'?",
    options: {
      A: "Sad",
      B: "Angry",
      C: "Joyful",
      D: "Tired",
    },
    correctAnswer: "C",
    explanation:
      "'Joyful' has a similar meaning to 'happy', both expressing positive emotion.",
  },
  {
    id: 150,
    subject: "Kiswahili",
    question: "Chagua tafsiri sahihi ya 'My mother is cooking lunch.'",
    options: {
      A: "Mama yangu anapika chakula cha mchana.",
      B: "Mama yangu anasafisha nyumba.",
      C: "Baba yangu anapika chakula cha mchana.",
      D: "Mama yangu anakula mchana.",
    },
    correctAnswer: "A",
    explanation:
      "'Mama yangu anapika chakula cha mchana' directly means 'My mother is cooking lunch', so A is correct.",
  },
  {
    id: 151,
    subject: "Science & Technology",
    question:
      "Which observed change indicates a chemical reaction has occurred?",
    options: {
      A: "Change of shape",
      B: "Formation of gas or bubbles",
      C: "Moving an object",
      D: "Folding a paper",
    },
    correctAnswer: "B",
    explanation:
      "The formation of gas or bubbles often shows new substances are being produced, a sign of a chemical reaction.",
  },
  {
    id: 152,
    subject: "Mathematics",
    question: "Convert 2 hours 30 minutes to minutes.",
    options: {
      A: "120 minutes",
      B: "150 minutes",
      C: "180 minutes",
      D: "200 minutes",
    },
    correctAnswer: "B",
    explanation:
      "2 hours = 120 minutes; plus 30 minutes gives 150 minutes in total.",
  },
  {
    id: 153,
    subject: "English",
    question:
      "Choose the correct homophone: 'They went to ___ house to visit.'",
    options: {
      A: "there",
      B: "their",
      C: "they're",
      D: "thare",
    },
    correctAnswer: "B",
    explanation:
      "'Their' is the possessive form used before 'house' to show ownership: 'their house.'",
  },
  {
    id: 154,
    subject: "Kiswahili",
    question: "Tafsiri: 'He reads quietly every morning.' Which is correct?",
    options: {
      A: "Anasoma kwa sauti kila asubuhi.",
      B: "Anasoma kimya kimya kila asubuhi.",
      C: "Anakula kila asubuhi.",
      D: "Analala kila usiku.",
    },
    correctAnswer: "B",
    explanation:
      "'Anasoma kimya kimya kila asubuhi' means 'He reads quietly every morning', so B is correct.",
  },
  {
    id: 155,
    subject: "Social Studies",
    question:
      "Which organization helps countries work together on health issues worldwide?",
    options: {
      A: "World Health Organization (WHO)",
      B: "Local bakery",
      C: "Football club",
      D: "Private bank",
    },
    correctAnswer: "A",
    explanation:
      "The World Health Organization coordinates international public health efforts and guidance.",
  },
  {
    id: 156,
    subject: "CRE",
    question:
      "Which act is an example of showing love to your neighbour in Christian teaching?",
    options: {
      A: "Ignoring someone in need",
      B: "Helping a neighbour with food",
      C: "Harming others",
      D: "Stealing from a friend",
    },
    correctAnswer: "B",
    explanation:
      "Helping a neighbour with food shows compassion and love, which Christianity teaches to practise.",
  },
  {
    id: 157,
    subject: "Agriculture",
    question:
      "Which tool is best for cutting grass in a small homestead garden?",
    options: {
      A: "Sickle",
      B: "Combine harvester",
      C: "Ploughing tractor",
      D: "Threshing machine",
    },
    correctAnswer: "A",
    explanation:
      "A sickle is a simple hand tool suitable for cutting grass and harvesting small crops around a homestead.",
  },
  {
    id: 158,
    subject: "Music",
    question: "Which voice type typically sings the highest notes in a choir?",
    options: {
      A: "Bass",
      B: "Alto",
      C: "Tenor",
      D: "Soprano",
    },
    correctAnswer: "D",
    explanation:
      "Soprano is the highest female voice in a choir and usually sings the highest melodic lines.",
  },
  {
    id: 159,
    subject: "Home Science",
    question: "Which practice prevents spoilage of cooked food left overnight?",
    options: {
      A: "Cooling quickly and refrigerating",
      B: "Leaving it uncovered at room temperature",
      C: "Storing in direct sunlight",
      D: "Keeping it near the stove",
    },
    correctAnswer: "A",
    explanation:
      "Cooling food quickly and refrigerating slows bacterial growth and prevents spoilage and foodborne illness.",
  },
  {
    id: 160,
    subject: "Physical & Health Education",
    question:
      "Which activity helps improve balance and coordination in children?",
    options: {
      A: "Swinging and hopping games",
      B: "Only sitting quietly",
      C: "Watching television",
      D: "Eating fast food",
    },
    correctAnswer: "A",
    explanation:
      "Active play like swinging and hopping develops balance, coordination, and motor skills in children.",
  },
  {
    id: 161,
    subject: "ICT/Computer Studies",
    question: "Which part of an email holds the main message you write?",
    options: {
      A: "Subject line",
      B: "Attachment",
      C: "Body",
      D: "Signature",
    },
    correctAnswer: "C",
    explanation:
      "The body of an email is where you type the main message content for the recipient to read.",
  },
  {
    id: 162,
    subject: "Mathematics",
    question: "What is 7 × 8?",
    options: {
      A: "48",
      B: "54",
      C: "56",
      D: "63",
    },
    correctAnswer: "C",
    explanation: "Multiplying 7 by 8 gives 56, a basic multiplication fact.",
  },
  {
    id: 163,
    subject: "English",
    question:
      "Choose the correct article: 'She adopted ___ cat from the shelter.'",
    options: {
      A: "a",
      B: "an",
      C: "the",
      D: "no article needed",
    },
    correctAnswer: "A",
    explanation:
      "'A' is used before a consonant sound for a singular, non-specific noun: 'a cat.'",
  },
  {
    id: 164,
    subject: "Kiswahili",
    question: "Chagua jibu sahihi: 'Suku zote ninasafiri ___ basi.'",
    options: {
      A: "kwa",
      B: "kwenda",
      C: "kwa mpira",
      D: "kusafiri",
    },
    correctAnswer: "A",
    explanation:
      "'Siku zote ninasafiri kwa basi' uses the preposition 'kwa' to indicate the means of travel.",
  },
  {
    id: 165,
    subject: "Science & Technology",
    question:
      "Which metal is commonly used to make cooking pots because it conducts heat well?",
    options: {
      A: "Aluminium",
      B: "Wood",
      C: "Glass",
      D: "Plastic",
    },
    correctAnswer: "A",
    explanation:
      "Aluminium is lightweight and a good heat conductor, making it suitable for cooking pots.",
  },
  {
    id: 166,
    subject: "Social Studies",
    question: "Which feature helps a town develop into a city?",
    options: {
      A: "Reduced trade",
      B: "Improved infrastructure and services",
      C: "Less population",
      D: "Closed schools",
    },
    correctAnswer: "B",
    explanation:
      "Improved infrastructure (roads, hospitals) and services attract people and businesses, leading to city growth.",
  },
  {
    id: 167,
    subject: "CRE",
    question:
      "Which act is an example of forgiveness taught in Christian faith?",
    options: {
      A: "Holding a grudge",
      B: "Forgiving someone who apologizes",
      C: "Seeking revenge",
      D: "Refusing to listen",
    },
    correctAnswer: "B",
    explanation:
      "Forgiving someone who apologises reflects the Christian value of mercy and reconciliation.",
  },
  {
    id: 168,
    subject: "Agriculture",
    question:
      "Which method helps farmers protect crops from wild animals at night?",
    options: {
      A: "Leaving fields unattended",
      B: "Using scarecrows or guarding at night",
      C: "Planting in forested areas only",
      D: "Watering continuously",
    },
    correctAnswer: "B",
    explanation:
      "Scarecrows, fencing, or guarding can deter animals and protect crops during vulnerable night hours.",
  },
  {
    id: 169,
    subject: "Music",
    question: "Which term means to play very softly in musical notation?",
    options: {
      A: "Forte (f)",
      B: "Piano (p)",
      C: "Fortissimo (ff)",
      D: "Crescendo",
    },
    correctAnswer: "B",
    explanation:
      "Piano, indicated by 'p', directs musicians to play softly; forte indicates loud playing.",
  },
  {
    id: 170,
    subject: "Home Science",
    question:
      "Which is a balanced meal component that should be included for growth?",
    options: {
      A: "Proteins, carbohydrates, and vegetables",
      B: "Only sweets",
      C: "Only salty snacks",
      D: "Only drinks",
    },
    correctAnswer: "A",
    explanation:
      "A balanced meal includes proteins, carbohydrates, and vegetables to provide energy and nutrients for growth.",
  },
  {
    id: 171,
    subject: "Physical & Health Education",
    question: "Which warm-up action prepares muscles for running?",
    options: {
      A: "Static sitting",
      B: "Light jogging and dynamic stretches",
      C: "Sleeping",
      D: "Eating a large meal immediately",
    },
    correctAnswer: "B",
    explanation:
      "Light jogging and dynamic stretches gently raise heart rate and loosen muscles for safer running.",
  },
  {
    id: 172,
    subject: "ICT/Computer Studies",
    question:
      "Which device would you use to listen to audio from a computer privately?",
    options: {
      A: "Printer",
      B: "Headphones",
      C: "Router",
      D: "Keyboard",
    },
    correctAnswer: "B",
    explanation:
      "Headphones deliver sound directly to the ears, allowing private listening of computer audio.",
  },
  {
    id: 173,
    subject: "Mathematics",
    question: "How many faces does a cube have?",
    options: {
      A: "6",
      B: "8",
      C: "4",
      D: "12",
    },
    correctAnswer: "A",
    explanation:
      "A cube has 6 square faces, one on each side of the solid shape.",
  },
  {
    id: 174,
    subject: "English",
    question:
      "Which word is a verb in the sentence: 'Children play games after school.'",
    options: {
      A: "Children",
      B: "play",
      C: "games",
      D: "school",
    },
    correctAnswer: "B",
    explanation:
      "'Play' is the action performed and functions as the verb in this sentence.",
  },
  {
    id: 175,
    subject: "Kiswahili",
    question: "Chagua tafsiri sahihi: 'She sells fruits at the market.'",
    options: {
      A: "Anauza matunda sokoni.",
      B: "Anakula matunda sokoni.",
      C: "Ananunua matunda sokoni.",
      D: "Anapika matunda sokoni.",
    },
    correctAnswer: "A",
    explanation:
      "'Anauza matunda sokoni' means 'She sells fruits at the market', so A is correct.",
  },
  {
    id: 176,
    subject: "Science & Technology",
    question:
      "Which material is transparent and lets light pass through clearly?",
    options: {
      A: "Glass",
      B: "Wood",
      C: "Brick",
      D: "Metal",
    },
    correctAnswer: "A",
    explanation:
      "Glass is transparent, allowing light to pass through so objects can be seen clearly.",
  },
  {
    id: 177,
    subject: "Social Studies",
    question: "What does the term 'heritage' refer to in a community?",
    options: {
      A: "Only modern buildings",
      B: "History, culture and traditions passed from ancestors",
      C: "Only food markets",
      D: "Private toys",
    },
    correctAnswer: "B",
    explanation:
      "Heritage includes a community's history, customs, language, and traditions inherited from past generations.",
  },
  {
    id: 178,
    subject: "CRE",
    question:
      "Which action by Joseph in the Bible showed forgiveness to his brothers?",
    options: {
      A: "He punished them harshly",
      B: "He forgave them and helped them during famine",
      C: "He ignored them forever",
      D: "He left the country",
    },
    correctAnswer: "B",
    explanation:
      "Joseph forgave his brothers and later provided for them during the famine, demonstrating forgiveness.",
  },
  {
    id: 179,
    subject: "Agriculture",
    question:
      "Which factor is most important when selecting crop seeds for planting?",
    options: {
      A: "Color of seed packet only",
      B: "Suitability to local climate and soil",
      C: "Size of the shop",
      D: "Shape of the farmer's house",
    },
    correctAnswer: "B",
    explanation:
      "Seeds should be chosen for compatibility with local climate and soil to ensure good germination and yield.",
  },
  {
    id: 180,
    subject: "Music",
    question: "Which instrument family includes trumpets and trombones?",
    options: {
      A: "String family",
      B: "Brass family",
      C: "Percussion family",
      D: "Keyboard family",
    },
    correctAnswer: "B",
    explanation:
      "Trumpets and trombones are brass instruments that produce sound when the player vibrates their lips.",
  },
  {
    id: 181,
    subject: "Home Science",
    question:
      "Which kitchen habit reduces the spread of bacteria while preparing food?",
    options: {
      A: "Washing hands before handling food",
      B: "Using the same towel for raw meat and hands",
      C: "Leaving food uncovered outside",
      D: "Tasting with a dirty spoon",
    },
    correctAnswer: "A",
    explanation:
      "Washing hands removes germs and prevents them from contaminating food during preparation.",
  },
  {
    id: 182,
    subject: "Physical & Health Education",
    question: "Which mineral is essential for strong bones and teeth?",
    options: {
      A: "Sodium",
      B: "Calcium",
      C: "Lead",
      D: "Mercury",
    },
    correctAnswer: "B",
    explanation:
      "Calcium is necessary for building and maintaining strong bones and teeth, especially during growth.",
  },
  {
    id: 183,
    subject: "ICT/Computer Studies",
    question:
      "Which action saves a file under a new name, keeping the original unchanged?",
    options: {
      A: "Open",
      B: "Save As",
      C: "Delete",
      D: "Print",
    },
    correctAnswer: "B",
    explanation:
      "'Save As' allows you to store the current document with a new filename while preserving the original file.",
  },
  {
    id: 184,
    subject: "Mathematics",
    question:
      "If a classroom has 24 pupils and they sit in rows of 6, how many rows are there?",
    options: {
      A: "2",
      B: "3",
      C: "4",
      D: "6",
    },
    correctAnswer: "B",
    explanation:
      "Divide 24 pupils by 6 per row to get 4 rows. (24 ÷ 6 = 4). Correct answer is C.",
  },
  {
    id: 185,
    subject: "English",
    question:
      "Which word is an adverb in the sentence: 'She sings beautifully.'",
    options: {
      A: "She",
      B: "sings",
      C: "beautifully",
      D: "none",
    },
    correctAnswer: "C",
    explanation:
      "'Beautifully' describes how she sings, modifying the verb and functioning as an adverb.",
  },
  {
    id: 186,
    subject: "Kiswahili",
    question: "Chagua neno sahihi: 'Watoto wanacheza ___ bustani.'",
    options: {
      A: "kwa",
      B: "katika",
      C: "juu",
      D: "chini",
    },
    correctAnswer: "B",
    explanation:
      "'Watoto wanacheza katika bustani' uses 'katika' to indicate location inside or within the garden.",
  },
  {
    id: 187,
    subject: "Science & Technology",
    question:
      "Which device converts electrical energy into light and heat in many homes?",
    options: {
      A: "Battery",
      B: "Light bulb",
      C: "Switch",
      D: "Socket",
    },
    correctAnswer: "B",
    explanation:
      "A light bulb transforms electrical energy into light and some heat when current passes through it.",
  },
  {
    id: 188,
    subject: "Social Studies",
    question: "Which is an example of voluntary community service?",
    options: {
      A: "Forced labour",
      B: "Helping clean a neighbourhood playground",
      C: "Stealing from shops",
      D: "Ignoring community meetings",
    },
    correctAnswer: "B",
    explanation:
      "Voluntary service involves willingly helping others, such as joining to clean a playground for community benefit.",
  },
  {
    id: 189,
    subject: "CRE",
    question:
      "Which Psalm is often associated with trust in God (common example used in schools)?",
    options: {
      A: "Psalm 23",
      B: "Psalm 150",
      C: "Psalm 1",
      D: "Psalm 100",
    },
    correctAnswer: "A",
    explanation:
      "Psalm 23 ('The Lord is my shepherd') is frequently cited as a passage about trust and God's care.",
  },
  {
    id: 190,
    subject: "Agriculture",
    question: "Which practice reduces weed growth between crop rows?",
    options: {
      A: "Weeding and mulching",
      B: "Ignoring weeds",
      C: "Planting weeds intentionally",
      D: "Watering only weeds",
    },
    correctAnswer: "A",
    explanation:
      "Regular weeding and using mulch prevent weeds from competing with crops for nutrients and water.",
  },
  {
    id: 191,
    subject: "Music",
    question: "Which sign indicates the end of a piece of music?",
    options: {
      A: "Repeat sign",
      B: "Double bar line",
      C: "Sharp sign",
      D: "Treble clef",
    },
    correctAnswer: "B",
    explanation:
      "A double bar line marks the end of a section or the end of a piece of music.",
  },
  {
    id: 192,
    subject: "Home Science",
    question:
      "Which food should be stored separately to avoid contaminating other foods?",
    options: {
      A: "Fresh fruit",
      B: "Raw meat",
      C: "Dry cereal",
      D: "Cooked rice",
    },
    correctAnswer: "B",
    explanation:
      "Raw meat can carry harmful bacteria so it must be stored separately to prevent cross-contamination.",
  },
  {
    id: 193,
    subject: "Physical & Health Education",
    question:
      "Which practice helps prevent heat exhaustion during hot weather?",
    options: {
      A: "Drinking plenty of water and resting in shade",
      B: "Ignoring thirst",
      C: "Wearing heavy clothing in sun",
      D: "Running without breaks",
    },
    correctAnswer: "A",
    explanation:
      "Hydration and resting in shade reduce the risk of heat exhaustion during high temperatures.",
  },
  {
    id: 194,
    subject: "ICT/Computer Studies",
    question: "Which of these is a secure way to unlock a personal device?",
    options: {
      A: "Using a common PIN like 1234",
      B: "Using a strong PIN or biometric login",
      C: "Leaving it unlocked",
      D: "Sharing the PIN with everyone",
    },
    correctAnswer: "B",
    explanation:
      "A strong PIN or biometric (fingerprint) reduces risk of unauthorized access and improves device security.",
  },
  {
    id: 195,
    subject: "Mathematics",
    question: "What fraction of 20 is 5?",
    options: {
      A: "1/4",
      B: "1/2",
      C: "1/5",
      D: "1/3",
    },
    correctAnswer: "A",
    explanation:
      "5 is one quarter of 20, so the fraction is 1/4 (5 ÷ 20 = 1/4).",
  },
  {
    id: 196,
    subject: "English",
    question: "Which sentence uses correct comparative form?",
    options: {
      A: "This road is more shorter than that one.",
      B: "This road is shorter than that one.",
      C: "This road is the short than that one.",
      D: "This road is shortest than that one.",
    },
    correctAnswer: "B",
    explanation:
      "For comparing two items use 'shorter', so 'This road is shorter than that one.' is correct.",
  },
  {
    id: 197,
    subject: "Kiswahili",
    question: "Chagua tafsiri sahihi: 'We helped our neighbours yesterday.'",
    options: {
      A: "Tulisaidia majirani zetu jana.",
      B: "Tusaidia majirani zetu kesho.",
      C: "Tutawaidia majirani zetu leo.",
      D: "Walisaidia majirani zetu jana.",
    },
    correctAnswer: "A",
    explanation:
      "'Tulisaidia majirani zetu jana' means 'We helped our neighbours yesterday', so A is correct.",
  },
  {
    id: 198,
    subject: "Science & Technology",
    question:
      "Which organ helps in breathing by exchanging gases in the human body?",
    options: {
      A: "Heart",
      B: "Lungs",
      C: "Stomach",
      D: "Liver",
    },
    correctAnswer: "B",
    explanation:
      "Lungs take in oxygen and remove carbon dioxide through the process of gas exchange during breathing.",
  },
  {
    id: 199,
    subject: "Social Studies",
    question:
      "Which is a responsibility of children at home to help the family?",
    options: {
      A: "Refusing to do any chores",
      B: "Helping with simple tasks like sweeping",
      C: "Spending all time playing video games",
      D: "Ignoring family rules",
    },
    correctAnswer: "B",
    explanation:
      "Helping with age-appropriate tasks like sweeping teaches responsibility and supports the household.",
  },
  {
    id: 200,
    subject: "CRE",
    question:
      "Which fruit did Jesus use in a teaching about faith (metaphorically compared to small faith)?",
    options: {
      A: "Mustard seed (metaphor)",
      B: "Apple",
      C: "Orange",
      D: "Banana",
    },
    correctAnswer: "A",
    explanation:
      "Jesus compared faith to a mustard seed to show that even small faith can grow and do great things.",
  },
  {
    id: 201,
    subject: "Agriculture",
    question:
      "Which practice helps improve soil structure by adding earthworms and organic matter?",
    options: {
      A: "Overwatering",
      B: "Adding compost",
      C: "Using only chemical fertilizer",
      D: "Burning the field",
    },
    correctAnswer: "B",
    explanation:
      "Adding compost increases organic matter and encourages earthworms, which improve soil structure and fertility.",
  },
  {
    id: 202,
    subject: "Mathematics",
    question: "What is 125 ÷ 5?",
    options: {
      A: "20",
      B: "25",
      C: "30",
      D: "15",
    },
    correctAnswer: "B",
    explanation: "Divide 125 by 5: 125 ÷ 5 = 25.",
  },
  {
    id: 203,
    subject: "English",
    question: "Choose the correct pronoun: '___ gave me the book.'",
    options: {
      A: "Him",
      B: "They",
      C: "Who",
      D: "She",
    },
    correctAnswer: "D",
    explanation:
      "'She gave me the book.' uses the subject pronoun 'She' correctly at the start of the sentence.",
  },
  {
    id: 204,
    subject: "Kiswahili",
    question: "Tafsiri: 'We will meet at eight o'clock.'",
    options: {
      A: "Tutakutana saa mbili.",
      B: "Tutakutana saa nane.",
      C: "Tutakutana saa kumi.",
      D: "Tulikutana saa nane.",
    },
    correctAnswer: "B",
    explanation:
      "'Tutakutana saa nane' means 'We will meet at eight o'clock', with the future tense marker 'tuta-'.",
  },
  {
    id: 205,
    subject: "Science & Technology",
    question: "Which process do plants use to turn light into food?",
    options: {
      A: "Evaporation",
      B: "Photosynthesis",
      C: "Condensation",
      D: "Combustion",
    },
    correctAnswer: "B",
    explanation:
      "Photosynthesis is the process where plants use sunlight, carbon dioxide and water to make glucose (food).",
  },
  {
    id: 206,
    subject: "Social Studies",
    question:
      "Which institution is responsible for teaching children in a community?",
    options: {
      A: "School",
      B: "Factory",
      C: "Bus stop",
      D: "Bank",
    },
    correctAnswer: "A",
    explanation:
      "Schools provide formal education and are responsible for teaching children in a community.",
  },
  {
    id: 207,
    subject: "CRE",
    question: "Which miracle did Jesus perform according to the New Testament?",
    options: {
      A: "Parting the Red Sea",
      B: "Feeding five thousand people with loaves and fish",
      C: "Writing the Ten Commandments",
      D: "Building the temple",
    },
    correctAnswer: "B",
    explanation:
      "Jesus fed five thousand people with a few loaves and fish according to Gospel accounts.",
  },
  {
    id: 208,
    subject: "Music",
    question: "Which note value lasts for two beats in common time?",
    options: {
      A: "Whole note",
      B: "Half note",
      C: "Quarter note",
      D: "Eighth note",
    },
    correctAnswer: "B",
    explanation: "A half note lasts for two beats in 4/4 (common) time.",
  },
  {
    id: 209,
    subject: "Home Science",
    question: "Which nutrient helps the body repair tissues and build muscles?",
    options: {
      A: "Proteins",
      B: "Sugars",
      C: "Salt",
      D: "Water only",
    },
    correctAnswer: "A",
    explanation:
      "Proteins provide amino acids essential for body tissue repair and muscle growth.",
  },
  {
    id: 210,
    subject: "Physical & Health Education",
    question: "Which exercise helps strengthen leg muscles?",
    options: {
      A: "Squats",
      B: "Neck rolls",
      C: "Finger taps",
      D: "Blinking",
    },
    correctAnswer: "A",
    explanation:
      "Squats work the major leg muscles (quadriceps, hamstrings and glutes), strengthening them with repeated action.",
  },
  {
    id: 211,
    subject: "ICT/Computer Studies",
    question: "Which device do you use to move the cursor on the screen?",
    options: {
      A: "Monitor",
      B: "Printer",
      C: "Mouse",
      D: "Speaker",
    },
    correctAnswer: "C",
    explanation:
      "A mouse controls the cursor position on the computer screen and is an input device.",
  },
  {
    id: 212,
    subject: "Mathematics",
    question: "Which is the largest number: 0.5, 0.75, 0.25, 0.6?",
    options: {
      A: "0.5",
      B: "0.75",
      C: "0.25",
      D: "0.6",
    },
    correctAnswer: "B",
    explanation:
      "0.75 is greater than 0.6, 0.5 and 0.25 when comparing decimal values.",
  },
  {
    id: 213,
    subject: "English",
    question: "Select the correct past tense: 'They ___ soccer yesterday.'",
    options: {
      A: "play",
      B: "plays",
      C: "played",
      D: "playing",
    },
    correctAnswer: "C",
    explanation:
      "The past tense of 'play' is 'played': 'They played soccer yesterday.'",
  },
  {
    id: 214,
    subject: "Kiswahili",
    question: "Chagua jina la mahali: 'Pale watoto walikimbia ni ___.'",
    options: {
      A: "mashariki",
      B: "bweni",
      C: "shamba",
      D: "kuhifadhi",
    },
    correctAnswer: "C",
    explanation:
      "'Shamba' means field; the sentence indicates a place where children ran, so 'shamba' fits contextually.",
  },
  {
    id: 215,
    subject: "Science & Technology",
    question: "Which organ in plants transports water upward from the roots?",
    options: {
      A: "Xylem",
      B: "Phloem",
      C: "Chloroplast",
      D: "Stoma",
    },
    correctAnswer: "A",
    explanation:
      "Xylem vessels carry water and dissolved minerals from roots to stems and leaves in plants.",
  },
  {
    id: 216,
    subject: "Social Studies",
    question:
      "Which term describes people who move into a country from another country?",
    options: {
      A: "Emigrants",
      B: "Immigrants",
      C: "Tourists",
      D: "Citizens",
    },
    correctAnswer: "B",
    explanation:
      "Immigrants are people who come into a country to live there from another country.",
  },
  {
    id: 217,
    subject: "CRE",
    question: "Which Psalm begins 'The Lord is my shepherd'?",
    options: {
      A: "Psalm 23",
      B: "Psalm 1",
      C: "Psalm 100",
      D: "Psalm 150",
    },
    correctAnswer: "A",
    explanation:
      "Psalm 23 opens with 'The Lord is my shepherd,' a well-known passage expressing trust in God.",
  },
  {
    id: 218,
    subject: "Agriculture",
    question: "Which practice reduces water loss from the soil surface?",
    options: {
      A: "Mulching",
      B: "Over-tilling",
      C: "Burning residues",
      D: "Removing shade trees",
    },
    correctAnswer: "A",
    explanation:
      "Mulching covers the soil, reducing evaporation and helping retain moisture for crops.",
  },
  {
    id: 219,
    subject: "Music",
    question: "Which two notes together that sound pleasant are called?",
    options: {
      A: "Dissonance",
      B: "Harmony",
      C: "Rhythm",
      D: "Tempo",
    },
    correctAnswer: "B",
    explanation:
      "Harmony is the combination of notes sounding together to produce a pleasing effect.",
  },
  {
    id: 220,
    subject: "Home Science",
    question: "Which cleaning method best removes grease from plates?",
    options: {
      A: "Warm water and dish soap",
      B: "Cold water only",
      C: "Rinsing with oil",
      D: "Drying without washing",
    },
    correctAnswer: "A",
    explanation:
      "Warm water and dish soap cut through grease more effectively than cold water alone.",
  },
  {
    id: 221,
    subject: "Physical & Health Education",
    question: "Which activity builds stamina and endurance?",
    options: {
      A: "Long-distance running",
      B: "Only short naps",
      C: "Watching TV",
      D: "Sitting for long hours",
    },
    correctAnswer: "A",
    explanation:
      "Long-distance running improves the body's ability to sustain physical activity over time, building endurance.",
  },
  {
    id: 222,
    subject: "ICT/Computer Studies",
    question:
      "Which symbol is commonly used to send an email message in an email client?",
    options: {
      A: "Paper clip",
      B: "Trash can",
      C: "Send (paper airplane icon or button)",
      D: "Lock icon",
    },
    correctAnswer: "C",
    explanation:
      "The 'send' icon (often a paper airplane) or button is used to transmit an email to recipients.",
  },
  {
    id: 223,
    subject: "Mathematics",
    question: "Which is the mean (average) of these numbers: 10, 12, 8, 10?",
    options: {
      A: "9",
      B: "10",
      C: "12",
      D: "8",
    },
    correctAnswer: "B",
    explanation: "Average = (10 + 12 + 8 + 10) ÷ 4 = 40 ÷ 4 = 10.",
  },
  {
    id: 224,
    subject: "English",
    question:
      "Which word is a noun in the sentence: 'The cat chased the mouse.'",
    options: {
      A: "chased",
      B: "the",
      C: "cat",
      D: "fast",
    },
    correctAnswer: "C",
    explanation:
      "'Cat' is a person, place or thing and functions as a noun in this sentence.",
  },
  {
    id: 225,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'I am hungry.'",
    options: {
      A: "Nina kiu.",
      B: "Nina njaa.",
      C: "Niko furahi.",
      D: "Nina dudui.",
    },
    correctAnswer: "B",
    explanation:
      "'Nina njaa' means 'I am hungry', whereas 'Nina kiu' means 'I am thirsty'.",
  },
  {
    id: 226,
    subject: "Science & Technology",
    question:
      "Which simple machine is a ramp that helps lift objects more easily?",
    options: {
      A: "Wedge",
      B: "Inclined plane",
      C: "Pulley",
      D: "Lever",
    },
    correctAnswer: "B",
    explanation:
      "An inclined plane (ramp) reduces the effort needed to raise an object by increasing the distance over which the force acts.",
  },
  {
    id: 227,
    subject: "Social Studies",
    question: "Which action is a sign of good citizenship?",
    options: {
      A: "Littering in public places",
      B: "Voting in elections",
      C: "Avoiding taxes illegally",
      D: "Destroying public property",
    },
    correctAnswer: "B",
    explanation:
      "Voting is a civic duty where citizens participate in choosing their leaders, showing responsible citizenship.",
  },
  {
    id: 228,
    subject: "CRE",
    question:
      "Which figure in the Bible is famous for great wisdom and building a temple?",
    options: {
      A: "Solomon",
      B: "Cain",
      C: "Jonah",
      D: "Saul",
    },
    correctAnswer: "A",
    explanation:
      "King Solomon is known for his wisdom and for building the temple in Jerusalem according to the Bible.",
  },
  {
    id: 229,
    subject: "Agriculture",
    question:
      "Which method helps farmers keep pests away using living organisms?",
    options: {
      A: "Chemical spraying only",
      B: "Biological control using predators or parasites",
      C: "Planting only one crop type continuously",
      D: "Cutting down beneficial trees",
    },
    correctAnswer: "B",
    explanation:
      "Biological control uses natural enemies of pests (predators, parasitoids) to reduce pest populations without chemicals.",
  },
  {
    id: 230,
    subject: "Music",
    question:
      "Which word describes the pattern of long and short sounds in music?",
    options: {
      A: "Pitch",
      B: "Dynamics",
      C: "Rhythm",
      D: "Harmony",
    },
    correctAnswer: "C",
    explanation:
      "Rhythm is the sequence of durations and accents that organize music in time.",
  },
  {
    id: 231,
    subject: "Home Science",
    question:
      "Which container is best for storing leftover soup in the refrigerator?",
    options: {
      A: "Sealable airtight container",
      B: "Open bowl covered with cloth",
      C: "Paper bag",
      D: "Left uncovered on the counter",
    },
    correctAnswer: "A",
    explanation:
      "Airtight containers keep food fresh and prevent contamination and absorption of other odors in the fridge.",
  },
  {
    id: 232,
    subject: "Physical & Health Education",
    question: "Which vitamin helps the body absorb calcium for bone health?",
    options: {
      A: "Vitamin C",
      B: "Vitamin D",
      C: "Vitamin B12",
      D: "Vitamin K",
    },
    correctAnswer: "B",
    explanation:
      "Vitamin D aids calcium absorption in the intestines, supporting bone growth and health.",
  },
  {
    id: 233,
    subject: "ICT/Computer Studies",
    question: "What does 'URL' stand for when visiting a webpage?",
    options: {
      A: "Universal Relay Link",
      B: "Uniform Resource Locator",
      C: "User Resource List",
      D: "Universal Remote Login",
    },
    correctAnswer: "B",
    explanation:
      "URL means Uniform Resource Locator; it is the web address used to find resources on the internet.",
  },
  {
    id: 234,
    subject: "Mathematics",
    question: "What is the product of 9 and 7?",
    options: {
      A: "56",
      B: "63",
      C: "72",
      D: "49",
    },
    correctAnswer: "B",
    explanation: "Multiply 9 × 7 to get 63.",
  },
  {
    id: 235,
    subject: "English",
    question:
      "Which word completes the sentence: 'She is the ___ student in class.'",
    options: {
      A: "taller",
      B: "tallest",
      C: "tall",
      D: "tallishly",
    },
    correctAnswer: "B",
    explanation:
      "When comparing one among many, the superlative 'tallest' is used: 'the tallest student'.",
  },
  {
    id: 236,
    subject: "Kiswahili",
    question: "Chagua tafsiri sahihi ya 'Clean the classroom.'",
    options: {
      A: "Safisha darasa.",
      B: "Pendeza darasa.",
      C: "Lala darasa.",
      D: "Osha darasa.",
    },
    correctAnswer: "A",
    explanation:
      "'Safisha darasa' is the command meaning 'Clean the classroom'; 'osha' is usually for washing objects.",
  },
  {
    id: 237,
    subject: "Science & Technology",
    question:
      "Which simple tool helps compare temperatures between two places?",
    options: {
      A: "Thermometer",
      B: "Ruler",
      C: "Compass",
      D: "Scales",
    },
    correctAnswer: "A",
    explanation:
      "Thermometers measure temperature and can be used to compare temperatures in different locations.",
  },
  {
    id: 238,
    subject: "Social Studies",
    question:
      "Which festival is often celebrated to remember a nation's independence?",
    options: {
      A: "Independence Day",
      B: "Weekly market day",
      C: "Sports day only",
      D: "School reunion",
    },
    correctAnswer: "A",
    explanation:
      "Independence Day commemorates the anniversary of a nation's independence and is a national celebration.",
  },
  {
    id: 239,
    subject: "CRE",
    question:
      "Which prophet in the Old Testament was swallowed by a big fish according to the Bible story?",
    options: {
      A: "Jonah",
      B: "Elijah",
      C: "Daniel",
      D: "Isaiah",
    },
    correctAnswer: "A",
    explanation:
      "The story of Jonah describes him being swallowed by a large fish and later being released after repentance.",
  },
  {
    id: 240,
    subject: "Agriculture",
    question: "Which crop is known for fixing nitrogen when grown in a field?",
    options: {
      A: "Rice",
      B: "Beans",
      C: "Maize",
      D: "Banana",
    },
    correctAnswer: "B",
    explanation:
      "Legumes like beans host nitrogen-fixing bacteria in root nodules that convert atmospheric nitrogen to usable forms.",
  },
  {
    id: 241,
    subject: "Music",
    question: "Which tempo marking indicates a fast speed?",
    options: {
      A: "Adagio",
      B: "Moderato",
      C: "Presto",
      D: "Largo",
    },
    correctAnswer: "C",
    explanation:
      "Presto indicates a very fast tempo; Adagio and Largo are slow, Moderato is moderate.",
  },
  {
    id: 242,
    subject: "Home Science",
    question: "Which item should be used to handle hot pots safely?",
    options: {
      A: "Oven mitt or potholder",
      B: "Plastic bag",
      C: "Wet towel only",
      D: "Bare hands",
    },
    correctAnswer: "A",
    explanation:
      "Oven mitts or potholders protect hands from heat when handling hot cookware safely.",
  },
  {
    id: 243,
    subject: "Physical & Health Education",
    question:
      "Which heart rate change shows that exercise intensity is increasing?",
    options: {
      A: "Heart rate decreases",
      B: "Heart rate increases",
      C: "Heart rate stays the same",
      D: "Heart stops",
    },
    correctAnswer: "B",
    explanation:
      "As exercise becomes more intense, the heart rate typically rises to supply more oxygenated blood to muscles.",
  },
  {
    id: 244,
    subject: "ICT/Computer Studies",
    question: "Which of these is used to attach files to an email?",
    options: {
      A: "Send button",
      B: "Attachment (paper clip) icon",
      C: "Subject line",
      D: "Signature",
    },
    correctAnswer: "B",
    explanation:
      "The attachment icon (often a paper clip) allows users to add files to an email message before sending.",
  },
  {
    id: 245,
    subject: "Mathematics",
    question: "Which decimal is equal to 3/10?",
    options: {
      A: "0.03",
      B: "0.3",
      C: "3.0",
      D: "0.33",
    },
    correctAnswer: "B",
    explanation: "3 divided by 10 equals 0.3, so 3/10 is 0.3 in decimal form.",
  },
  {
    id: 246,
    subject: "English",
    question: "Which word is an antonym of 'increase'?",
    options: {
      A: "Rise",
      B: "Grow",
      C: "Decrease",
      D: "Expand",
    },
    correctAnswer: "C",
    explanation:
      "'Decrease' means to become smaller or less, which is the opposite of 'increase'.",
  },
  {
    id: 247,
    subject: "Kiswahili",
    question: "Chagua jibu sahihi: 'Je, unaweza kunisaidia ___ kazi hizi?'",
    options: {
      A: "na",
      B: "kwa",
      C: "kufanya",
      D: "wote",
    },
    correctAnswer: "C",
    explanation:
      "'Kufanya kazi hizi' means 'to do these tasks'; 'kufanya' is the verb 'to do' and fits the sentence.",
  },
  {
    id: 248,
    subject: "Science & Technology",
    question:
      "What is the boiling point of water at sea level in degrees Celsius?",
    options: {
      A: "0°C",
      B: "50°C",
      C: "100°C",
      D: "212°C",
    },
    correctAnswer: "C",
    explanation:
      "At sea level, pure water boils at 100 degrees Celsius; 212°F equals 100°C is incorrect (it's 212°F), but the correct Celsius value is 100°C.",
  },
  {
    id: 249,
    subject: "Social Studies",
    question:
      "Which is a reason people form groups like clubs or associations?",
    options: {
      A: "To work together on common interests",
      B: "To prevent learning",
      C: "To stop trading",
      D: "To refuse help",
    },
    correctAnswer: "A",
    explanation:
      "People form groups to share ideas, support each other and work on common goals or interests.",
  },
  {
    id: 250,
    subject: "CRE",
    question: "Which Christian festival celebrates the resurrection of Jesus?",
    options: {
      A: "Christmas",
      B: "Easter",
      C: "Pentecost",
      D: "Lent",
    },
    correctAnswer: "B",
    explanation:
      "Easter commemorates the resurrection of Jesus from the dead in Christian belief.",
  },
  {
    id: 251,
    subject: "Agriculture",
    question:
      "Which farming activity should be done soon after planting to reduce weed competition?",
    options: {
      A: "Weeding early",
      B: "Irrigating only once a month",
      C: "Harvesting immediately",
      D: "Leaving field fallow",
    },
    correctAnswer: "A",
    explanation:
      "Early weeding removes young weeds before they compete strongly with crops for nutrients and light.",
  },
  {
    id: 252,
    subject: "Music",
    question: "Which instrument family does the xylophone belong to?",
    options: {
      A: "Brass",
      B: "Percussion",
      C: "String",
      D: "Woodwind",
    },
    correctAnswer: "B",
    explanation:
      "The xylophone produces sound when struck and is part of the percussion family.",
  },
  {
    id: 253,
    subject: "Home Science",
    question: "Which is an example of using resources wisely at home?",
    options: {
      A: "Turning off lights when not needed",
      B: "Leaving taps running",
      C: "Wasting food",
      D: "Keeping appliances on standby always",
    },
    correctAnswer: "A",
    explanation:
      "Turning off lights when not in use saves energy and is a responsible way to use household resources.",
  },
  {
    id: 254,
    subject: "Physical & Health Education",
    question: "Which snack is a healthy choice before exercise?",
    options: {
      A: "A banana",
      B: "A chocolate bar with lots of sugar",
      C: "A bag of salty chips",
      D: "A soda drink only",
    },
    correctAnswer: "A",
    explanation:
      "A banana provides carbohydrates and potassium that supply energy and help muscle function during exercise.",
  },
  {
    id: 255,
    subject: "ICT/Computer Studies",
    question:
      "Which is a commonly used operating system for personal computers?",
    options: {
      A: "Windows",
      B: "HTML",
      C: "JPEG",
      D: "USB",
    },
    correctAnswer: "A",
    explanation:
      "Windows is an operating system that manages computer hardware and software; HTML and JPEG are file standards, USB is an interface.",
  },
  {
    id: 256,
    subject: "Mathematics",
    question: "Which angle measures exactly 90 degrees?",
    options: {
      A: "Right angle",
      B: "Acute angle",
      C: "Obtuse angle",
      D: "Straight angle",
    },
    correctAnswer: "A",
    explanation: "A right angle is defined as an angle of 90 degrees.",
  },
  {
    id: 257,
    subject: "English",
    question:
      "Choose the correct comparative: 'This puzzle is ___ than the other one.'",
    options: {
      A: "easyest",
      B: "easier",
      C: "most easy",
      D: "easy",
    },
    correctAnswer: "B",
    explanation:
      "For two items we use the comparative 'easier' to compare difficulty levels.",
  },
  {
    id: 258,
    subject: "Kiswahili",
    question: "Chagua sawa: 'Ninaanza kazi mpya ___ Jumatatu.'",
    options: {
      A: "mwaka",
      B: "siku",
      C: "wiki",
      D: "Jumatatu",
    },
    correctAnswer: "D",
    explanation:
      "'Ninaanza kazi mpya Jumatatu' correctly places the day 'Jumatatu' (Monday) when the work starts.",
  },
  {
    id: 259,
    subject: "Science & Technology",
    question: "Which type of rock forms from cooled lava?",
    options: {
      A: "Sedimentary",
      B: "Igneous",
      C: "Metamorphic",
      D: "Soil",
    },
    correctAnswer: "B",
    explanation:
      "Igneous rocks form when molten lava or magma cools and solidifies.",
  },
  {
    id: 260,
    subject: "Social Studies",
    question: "Which is an example of a local government service?",
    options: {
      A: "Community health centre",
      B: "Foreign diplomacy",
      C: "Space exploration",
      D: "Printing banknotes",
    },
    correctAnswer: "A",
    explanation:
      "Local governments often provide community health services such as clinics or health centres.",
  },
  {
    id: 261,
    subject: "CRE",
    question:
      "Which miracle showed Jesus' power over nature by calming a storm?",
    options: {
      A: "Healing the blind",
      B: "Calming the storm on the sea",
      C: "Turning water into wine",
      D: "Feeding the five thousand",
    },
    correctAnswer: "B",
    explanation:
      "Jesus calmed the storm while on a boat with his disciples, demonstrating authority over natural forces.",
  },
  {
    id: 262,
    subject: "Agriculture",
    question:
      "Which is an advantage of planting cover crops during off-season?",
    options: {
      A: "They increase soil erosion",
      B: "They improve soil fertility and reduce erosion",
      C: "They deplete all nutrients",
      D: "They attract only pests",
    },
    correctAnswer: "B",
    explanation:
      "Cover crops protect soil from erosion, add organic matter and can improve fertility when incorporated into the soil.",
  },
  {
    id: 263,
    subject: "Music",
    question: "Which dynamic marking means to play loudly?",
    options: {
      A: "p (piano)",
      B: "f (forte)",
      C: "mp (mezzo-piano)",
      D: "pp (pianissimo)",
    },
    correctAnswer: "B",
    explanation:
      "Forte (f) instructs musicians to play loudly; piano (p) means softly.",
  },
  {
    id: 264,
    subject: "Home Science",
    question:
      "Which practice prevents cross-contamination when preparing food?",
    options: {
      A: "Using separate chopping boards for raw meat and vegetables",
      B: "Using a single board for everything",
      C: "Tasting food with the main serving spoon repeatedly",
      D: "Leaving raw food on the kitchen floor",
    },
    correctAnswer: "A",
    explanation:
      "Separate chopping boards for raw meat and vegetables prevent bacteria from raw meat contaminating ready-to-eat foods.",
  },
  {
    id: 265,
    subject: "Physical & Health Education",
    question: "Which is a common symptom of a sprained ankle?",
    options: {
      A: "Swelling and pain around the joint",
      B: "Improved flexibility immediately",
      C: "Better balance",
      D: "No change at all",
    },
    correctAnswer: "A",
    explanation:
      "A sprain often causes swelling, pain and sometimes bruising around the injured joint.",
  },
  {
    id: 266,
    subject: "ICT/Computer Studies",
    question:
      "Which of the following stores information permanently even when the computer is off?",
    options: {
      A: "RAM",
      B: "ROM or hard drive/SSD",
      C: "CPU cache",
      D: "Monitor",
    },
    correctAnswer: "B",
    explanation:
      "ROM and storage devices like hard drives or SSDs retain data when power is off; RAM is volatile and loses data.",
  },
  {
    id: 267,
    subject: "Mathematics",
    question: "Which number is a multiple of both 4 and 6?",
    options: {
      A: "10",
      B: "12",
      C: "14",
      D: "18",
    },
    correctAnswer: "B",
    explanation:
      "12 is divisible by both 4 (12 ÷ 4 = 3) and 6 (12 ÷ 6 = 2), making it a common multiple.",
  },
  {
    id: 268,
    subject: "English",
    question: "Which sentence is correctly punctuated?",
    options: {
      A: "Lets eat Grandma.",
      B: "Let's eat, Grandma.",
      C: "Lets, eat Grandma.",
      D: "Lets eat, Grandma",
    },
    correctAnswer: "B",
    explanation:
      "Adding the comma and apostrophe gives the correct imperative address: 'Let's eat, Grandma.'",
  },
  {
    id: 269,
    subject: "Kiswahili",
    question: "Chagua sahihi: 'Ninapenda ___ yenye rangi nyingi.'",
    options: {
      A: "kitabu",
      B: "kuandika",
      C: "piga",
      D: "kuimba",
    },
    correctAnswer: "A",
    explanation:
      "'Ninapenda kitabu yenye rangi nyingi' means 'I like a book with many colours', so 'kitabu' is the noun that fits.",
  },
  {
    id: 270,
    subject: "Science & Technology",
    question:
      "Which device protects an electrical circuit by breaking the flow when current is too high?",
    options: {
      A: "Resistor",
      B: "Circuit breaker or fuse",
      C: "Capacitor",
      D: "Light bulb",
    },
    correctAnswer: "B",
    explanation:
      "Circuit breakers or fuses interrupt the electrical flow to prevent damage or fire when current exceeds safe limits.",
  },
  {
    id: 271,
    subject: "Social Studies",
    question: "Which service does a public library provide to a community?",
    options: {
      A: "Loans of books and learning resources",
      B: "Selling only expensive furniture",
      C: "Running private businesses",
      D: "Issuing passports",
    },
    correctAnswer: "A",
    explanation:
      "Public libraries lend books and provide access to information and learning resources for the community.",
  },
  {
    id: 272,
    subject: "CRE",
    question:
      "Which event marks the birth of Jesus according to Christian belief?",
    options: {
      A: "Easter",
      B: "Christmas",
      C: "Pentecost",
      D: "Lent",
    },
    correctAnswer: "B",
    explanation:
      "Christmas is celebrated as the birth of Jesus Christ in Christian tradition.",
  },
  {
    id: 273,
    subject: "Agriculture",
    question:
      "Which planting method reduces soil disturbance and helps retain moisture?",
    options: {
      A: "No-till farming",
      B: "Excessive ploughing",
      C: "Removing all cover crops",
      D: "Slash-and-burn",
    },
    correctAnswer: "A",
    explanation:
      "No-till farming leaves crop residues and minimises soil disturbance, helping moisture retention and reducing erosion.",
  },
  {
    id: 274,
    subject: "Music",
    question:
      "Which clef is commonly used for low-pitched instruments like the cello?",
    options: {
      A: "Treble clef",
      B: "Bass clef",
      C: "Alto clef",
      D: "Soprano clef",
    },
    correctAnswer: "B",
    explanation:
      "The bass clef is used for lower-pitched instruments, such as the cello and double bass.",
  },
  {
    id: 275,
    subject: "Home Science",
    question: "Which method helps preserve fruits for longer storage?",
    options: {
      A: "Drying or making jam",
      B: "Leaving them in the sun uncovered",
      C: "Storing with raw meat",
      D: "Keeping them in water",
    },
    correctAnswer: "A",
    explanation:
      "Drying and making jam are preservation methods that reduce spoilage and extend fruit shelf life.",
  },
  {
    id: 276,
    subject: "Physical & Health Education",
    question: "Which action helps reduce the spread of germs when sneezing?",
    options: {
      A: "Sneezing into your elbow or a tissue",
      B: "Sneezing into your hand and not washing",
      C: "Shouting loudly",
      D: "Holding the sneeze in always",
    },
    correctAnswer: "A",
    explanation:
      "Sneezing into the elbow or a disposable tissue prevents droplets from spreading and helps keep others safe.",
  },
  {
    id: 277,
    subject: "ICT/Computer Studies",
    question: "Which of these is an example of cloud storage service?",
    options: {
      A: "Google Drive",
      B: "DVD",
      C: "Hard disk drive inside the computer",
      D: "RAM",
    },
    correctAnswer: "A",
    explanation:
      "Google Drive stores files on remote servers (the cloud) accessible via the internet from different devices.",
  },
  {
    id: 278,
    subject: "Mathematics",
    question: "What is 2/3 + 1/6 expressed as a fraction?",
    options: {
      A: "3/4",
      B: "5/6",
      C: "1/2",
      D: "4/3",
    },
    correctAnswer: "B",
    explanation: "Convert to common denominator 6: (4/6) + (1/6) = 5/6.",
  },
  {
    id: 279,
    subject: "English",
    question: "Which sentence uses the correct form of 'there'?",
    options: {
      A: "Their going to the shop.",
      B: "They're going to the shop.",
      C: "Thier going to the shop.",
      D: "Theres going to the shop.",
    },
    correctAnswer: "B",
    explanation:
      "'They're' is the contraction of 'they are', so 'They're going to the shop.' is correct.",
  },
  {
    id: 280,
    subject: "Kiswahili",
    question: "Chagua neno sahihi: 'Tafadhali nipe ___ ya pombe.'",
    options: {
      A: "kikapu",
      B: "kijiko",
      C: "chombo",
      D: "kikombe",
    },
    correctAnswer: "D",
    explanation:
      "'Kikombe' (cup) is appropriate for requesting a drink; thus 'nipe kikombe' is correct wording.",
  },
  {
    id: 281,
    subject: "Science & Technology",
    question:
      "Which material is commonly used to make a simple magnet stronger when wrapped around iron?",
    options: {
      A: "Copper wire with electric current",
      B: "Plastic string",
      C: "Wooden stick",
      D: "Paper",
    },
    correctAnswer: "A",
    explanation:
      "Wrapping copper wire around iron and passing electric current creates an electromagnet, which is strong while current flows.",
  },
  {
    id: 282,
    subject: "Social Studies",
    question: "Which role does a mayor often have in a town?",
    options: {
      A: "Lead local government and represent the town",
      B: "Write national laws alone",
      C: "Control the weather",
      D: "Manage only private businesses",
    },
    correctAnswer: "A",
    explanation:
      "A mayor leads the local government, oversees services, and represents the town at official events.",
  },
  {
    id: 283,
    subject: "CRE",
    question:
      "Which gift is associated with the Holy Spirit at Pentecost in Christian teaching?",
    options: {
      A: "Fasting only",
      B: "Speaking in tongues and boldness to witness",
      C: "Building monuments",
      D: "Collecting taxes",
    },
    correctAnswer: "B",
    explanation:
      "Pentecost accounts describe believers receiving the Holy Spirit and speaking in other tongues and being empowered to witness.",
  },
  {
    id: 284,
    subject: "Agriculture",
    question:
      "Which livestock product provides protein and calcium in many diets?",
    options: {
      A: "Leather",
      B: "Milk",
      C: "Wool",
      D: "Hoof trimmings",
    },
    correctAnswer: "B",
    explanation:
      "Milk supplies proteins and calcium useful for growth and bone health in diets.",
  },
  {
    id: 285,
    subject: "Music",
    question: "Which term means to gradually get louder in music?",
    options: {
      A: "Diminuendo",
      B: "Crescendo",
      C: "Staccato",
      D: "Legato",
    },
    correctAnswer: "B",
    explanation:
      "Crescendo indicates a gradual increase in loudness; diminuendo means to gradually get softer.",
  },
  {
    id: 286,
    subject: "Home Science",
    question: "Which is a sign of food spoilage that makes food unsafe to eat?",
    options: {
      A: "Fresh smell and normal color",
      B: "Foul odor and mould growth",
      C: "Stored in the refrigerator properly",
      D: "Properly sealed packaging",
    },
    correctAnswer: "B",
    explanation:
      "Foul smells and visible mould indicate microbial spoilage and that the food should not be eaten.",
  },
  {
    id: 287,
    subject: "Physical & Health Education",
    question: "Which habit helps pupils concentrate better in class?",
    options: {
      A: "Having a good night's sleep",
      B: "Skipping breakfast regularly",
      C: "Arriving late always",
      D: "Talking loudly during lessons",
    },
    correctAnswer: "A",
    explanation:
      "Adequate sleep improves attention, memory and learning, helping pupils concentrate in class.",
  },
  {
    id: 288,
    subject: "ICT/Computer Studies",
    question:
      "Which device connects multiple computers to share an internet connection in a home?",
    options: {
      A: "Router",
      B: "Scanner",
      C: "Monitor",
      D: "Keyboard",
    },
    correctAnswer: "A",
    explanation:
      "A router directs internet traffic and allows several devices to share one internet connection in a network.",
  },
  {
    id: 289,
    subject: "Mathematics",
    question:
      "If a triangle has angles 60°, 60° and 60°, what type of triangle is it?",
    options: {
      A: "Isosceles",
      B: "Scalene",
      C: "Equilateral",
      D: "Right-angled",
    },
    correctAnswer: "C",
    explanation:
      "All angles equal (60° each) and all sides equal makes the triangle equilateral.",
  },
  {
    id: 290,
    subject: "English",
    question: "Which word is a verb: 'The bird sings in the morning.'",
    options: {
      A: "bird",
      B: "sings",
      C: "the",
      D: "morning",
    },
    correctAnswer: "B",
    explanation:
      "'Sings' expresses the action performed by the bird, making it the verb in the sentence.",
  },
  {
    id: 291,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'They are studying now.'",
    options: {
      A: "Wanakula sasa.",
      B: "Wanaangalia sasa.",
      C: "Wanasoma sasa.",
      D: "Walikwenda sasa.",
    },
    correctAnswer: "C",
    explanation:
      "'Wanasoma sasa' correctly translates to 'They are studying now', using present continuous 'wana-'.",
  },
  {
    id: 292,
    subject: "Science & Technology",
    question: "Which planet is closest to the Sun?",
    options: {
      A: "Earth",
      B: "Venus",
      C: "Mercury",
      D: "Mars",
    },
    correctAnswer: "C",
    explanation:
      "Mercury is the innermost planet of the solar system and is closest to the Sun.",
  },
  {
    id: 293,
    subject: "Social Studies",
    question: "Which term describes the power to make decisions for a country?",
    options: {
      A: "Governance",
      B: "Weather",
      C: "Agriculture",
      D: "Education",
    },
    correctAnswer: "A",
    explanation:
      "Governance refers to the processes and structures through which decisions are made for a country.",
  },
  {
    id: 294,
    subject: "CRE",
    question:
      "Which person in the Bible was known for leading the Israelites into the Promised Land after Moses?",
    options: {
      A: "Joshua",
      B: "David",
      C: "Saul",
      D: "Solomon",
    },
    correctAnswer: "A",
    explanation:
      "Joshua succeeded Moses and led the Israelites into the Promised Land according to biblical accounts.",
  },
  {
    id: 295,
    subject: "Agriculture",
    question:
      "Which practice helps protect seedlings from strong sunlight when transplanted?",
    options: {
      A: "Hardening off and providing shade",
      B: "Watering with hot water",
      C: "Planting in direct midday sun without care",
      D: "Pulling out all seedlings",
    },
    correctAnswer: "A",
    explanation:
      "Hardening off gradually exposes seedlings to outdoor conditions and providing temporary shade reduces transplant shock.",
  },
  {
    id: 296,
    subject: "Music",
    question: "Which family does the clarinet belong to?",
    options: {
      A: "String",
      B: "Woodwind",
      C: "Percussion",
      D: "Brass",
    },
    correctAnswer: "B",
    explanation:
      "The clarinet is a woodwind instrument that produces sound when air vibrates a reed inside the mouthpiece.",
  },
  {
    id: 297,
    subject: "Home Science",
    question: "Which action helps prevent burns when cooking?",
    options: {
      A: "Using oven mitts for hot pans",
      B: "Wearing loose long sleeves near flames",
      C: "Reaching over hot pots",
      D: "Ignoring splattering oil",
    },
    correctAnswer: "A",
    explanation:
      "Oven mitts protect hands from heat; loose clothing and reaching over hot surfaces increase burn risk.",
  },
  {
    id: 298,
    subject: "Physical & Health Education",
    question:
      "Which is a healthy daily habit for children to support immunity?",
    options: {
      A: "Eating a variety of fruits and vegetables",
      B: "Eating only fried foods",
      C: "Never exercising",
      D: "Skipping sleep regularly",
    },
    correctAnswer: "A",
    explanation:
      "A balanced diet with fruits and vegetables provides vitamins and minerals that help support the immune system.",
  },
  {
    id: 299,
    subject: "ICT/Computer Studies",
    question: "Which of these is a good password practice?",
    options: {
      A: "Using the word 'password' for all accounts",
      B: "Using a long password with letters, numbers and symbols",
      C: "Sharing your password with friends",
      D: "Writing your password on a public notice",
    },
    correctAnswer: "B",
    explanation:
      "Strong passwords include a mix of characters and are long and unique to reduce the risk of being guessed or hacked.",
  },
  {
    id: 300,
    subject: "Mathematics",
    question:
      "If you count by twos starting at 2, which number is the tenth in the list?",
    options: {
      A: "18",
      B: "20",
      C: "22",
      D: "24",
    },
    correctAnswer: "B",
    explanation:
      "Counting by twos: 2,4,6,... the nth term is 2n; for n=10, 2×10 = 20, so the tenth number is 20.",
  },
  {
    id: 301,
    subject: "English",
    question: "Choose the correct past form: 'He ___ his homework last night.'",
    options: {
      A: "finishes",
      B: "finishing",
      C: "finished",
      D: "finish",
    },
    correctAnswer: "C",
    explanation:
      "The past tense of 'finish' is 'finished', so 'He finished his homework last night.' is correct.",
  },
  {
    id: 302,
    subject: "Mathematics",
    question: "What is 14 + 29?",
    options: {
      A: "43",
      B: "44",
      C: "42",
      D: "45",
    },
    correctAnswer: "A",
    explanation: "Add 14 and 29: 14 + 29 = 43.",
  },
  {
    id: 303,
    subject: "Kiswahili",
    question: "Tafsiri: 'We are going to the shop.'",
    options: {
      A: "Tunaenda sokoni.",
      B: "Tulikuwa sokoni.",
      C: "Tutaenda sokoni kesho.",
      D: "Ninaenda sokoni.",
    },
    correctAnswer: "A",
    explanation:
      "'Tunaenda sokoni' is the present continuous translation for 'We are going to the shop.'",
  },
  {
    id: 304,
    subject: "Science & Technology",
    question: "Which material melts when heated and becomes liquid?",
    options: {
      A: "Ice",
      B: "Rock",
      C: "Wood",
      D: "Glass (at very high temperature)",
    },
    correctAnswer: "A",
    explanation:
      "Ice melts at 0°C and changes from solid to liquid water when heated.",
  },
  {
    id: 305,
    subject: "Social Studies",
    question:
      "Who represents the people of a ward in local government in many systems?",
    options: {
      A: "Leader of the country",
      B: "Ward councillor or representative",
      C: "Foreign diplomat",
      D: "School principal",
    },
    correctAnswer: "B",
    explanation:
      "A ward councillor or representative is elected to represent local residents' interests in local government.",
  },
  {
    id: 306,
    subject: "CRE",
    question:
      "Which Old Testament leader was known for receiving God's law and leading the Israelites out of Egypt?",
    options: {
      A: "Moses",
      B: "Noah",
      C: "Abel",
      D: "Jonah",
    },
    correctAnswer: "A",
    explanation:
      "Moses led the Exodus and received the Ten Commandments on Mount Sinai according to the Bible.",
  },
  {
    id: 307,
    subject: "Agriculture",
    question:
      "Which practice reduces soil nutrient loss by planting a crop after harvest?",
    options: {
      A: "Leaving soil bare",
      B: "Planting cover crops",
      C: "Burning crop residues",
      D: "Over-irrigation",
    },
    correctAnswer: "B",
    explanation:
      "Cover crops protect soil, reduce erosion and help maintain nutrients after harvest.",
  },
  {
    id: 308,
    subject: "Music",
    question: "Which note is shorter: an eighth note or a quarter note?",
    options: {
      A: "Quarter note",
      B: "Eighth note",
      C: "They are the same",
      D: "Whole note",
    },
    correctAnswer: "B",
    explanation:
      "An eighth note lasts half as long as a quarter note, so it is the shorter duration.",
  },
  {
    id: 309,
    subject: "Home Science",
    question:
      "Which is a good way to remove stains from clothes before washing?",
    options: {
      A: "Pretreating with soap and gentle scrubbing",
      B: "Putting in the sun without washing",
      C: "Using only cold water without soap",
      D: "Rubbing with sand",
    },
    correctAnswer: "A",
    explanation:
      "Pretreating stains with soap and gentle scrubbing helps loosen dirt before the wash cycle.",
  },
  {
    id: 310,
    subject: "Physical & Health Education",
    question: "Which activity helps children develop upper-body strength?",
    options: {
      A: "Skipping rope",
      B: "Climbing and hanging from bars",
      C: "Only sitting",
      D: "Reading quietly",
    },
    correctAnswer: "B",
    explanation:
      "Climbing and hanging engage arms, shoulders and back muscles, building upper-body strength.",
  },
  {
    id: 311,
    subject: "ICT/Computer Studies",
    question:
      "Which key is used to start a new paragraph in many text editors?",
    options: {
      A: "Enter (Return)",
      B: "Ctrl",
      C: "Alt",
      D: "Shift",
    },
    correctAnswer: "A",
    explanation:
      "Pressing the Enter (Return) key inserts a new line and usually starts a new paragraph.",
  },
  {
    id: 312,
    subject: "Mathematics",
    question: "What is half of 64?",
    options: {
      A: "32",
      B: "16",
      C: "48",
      D: "36",
    },
    correctAnswer: "A",
    explanation: "Half of 64 is 64 ÷ 2 = 32.",
  },
  {
    id: 313,
    subject: "English",
    question:
      "Which word is a conjunction in the sentence: 'She danced and sang at the party.'",
    options: {
      A: "She",
      B: "danced",
      C: "and",
      D: "at",
    },
    correctAnswer: "C",
    explanation:
      "'And' joins two verbs (danced, sang) and functions as a conjunction.",
  },
  {
    id: 314,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'Open the window please.'",
    options: {
      A: "Funga dirisha tafadhali.",
      B: "Fungua dirisha tafadhali.",
      C: "Fungua mlango tafadhali.",
      D: "Funga mlango tafadhali.",
    },
    correctAnswer: "B",
    explanation:
      "'Fungua dirisha tafadhali' correctly translates to 'Open the window please.'",
  },
  {
    id: 315,
    subject: "Science & Technology",
    question:
      "Which food takes the longest to decompose naturally: paper, plastic, banana peel, or leaves?",
    options: {
      A: "Banana peel",
      B: "Leaves",
      C: "Paper",
      D: "Plastic",
    },
    correctAnswer: "D",
    explanation:
      "Plastic is not biodegradable and can take hundreds of years to break down, much longer than paper or organic waste.",
  },
  {
    id: 316,
    subject: "Social Studies",
    question:
      "Which is a democratic way to resolve disagreements in a community?",
    options: {
      A: "Voting or mediation",
      B: "Using force without discussion",
      C: "Ignoring the problem",
      D: "Taking possessions",
    },
    correctAnswer: "A",
    explanation:
      "Voting or mediation involves dialogue and fair decision-making, consistent with democratic principles.",
  },
  {
    id: 317,
    subject: "CRE",
    question:
      "Which Christian teaching emphasizes loving God and loving your neighbour?",
    options: {
      A: "The two greatest commandments",
      B: "A rule about only wealth",
      C: "A law about travel",
      D: "A recipe for food",
    },
    correctAnswer: "A",
    explanation:
      "Jesus taught that loving God and loving your neighbour are the greatest commandments in Christian faith.",
  },
  {
    id: 318,
    subject: "Agriculture",
    question:
      "Which storage method helps keep harvested grain dry and safe from pests?",
    options: {
      A: "Using sealed, dry containers and good ventilation",
      B: "Leaving grain in open bags on the floor",
      C: "Storing in damp conditions",
      D: "Mixing grain with water",
    },
    correctAnswer: "A",
    explanation:
      "Sealed, dry storage with ventilation prevents moisture and pest damage to stored grain.",
  },
  {
    id: 319,
    subject: "Music",
    question: "Which part of the song repeats to make a chorus?",
    options: {
      A: "Verse only",
      B: "Chorus (repeated section)",
      C: "Bridge only",
      D: "Intro only",
    },
    correctAnswer: "B",
    explanation:
      "The chorus is the repeated, memorable section of a song that returns several times.",
  },
  {
    id: 320,
    subject: "Home Science",
    question:
      "Which oil is healthier for cooking at medium heat compared to deep frying oils?",
    options: {
      A: "Vegetable or canola oil",
      B: "Used car oil",
      C: "Motor oil",
      D: "Lamp oil",
    },
    correctAnswer: "A",
    explanation:
      "Vegetable and canola oils are appropriate for cooking at medium heat; non-food oils are unsafe for cooking.",
  },
  {
    id: 321,
    subject: "Physical & Health Education",
    question: "Which is an example of aerobic exercise?",
    options: {
      A: "Swimming long distances",
      B: "Stretching only",
      C: "Lifting heavy weights briefly",
      D: "Sleeping",
    },
    correctAnswer: "A",
    explanation:
      "Swimming long distances raises heart rate over time and improves cardiovascular fitness, making it aerobic.",
  },
  {
    id: 322,
    subject: "ICT/Computer Studies",
    question: "Which sign indicates a secure website in many web browsers?",
    options: {
      A: "A padlock icon in the address bar",
      B: "A red X in the title",
      C: "A smiling face icon",
      D: "A loudspeaker icon",
    },
    correctAnswer: "A",
    explanation:
      "A padlock icon shows the connection is encrypted and the site uses HTTPS, indicating secure communication.",
  },
  {
    id: 323,
    subject: "Mathematics",
    question: "What is 11 × 11?",
    options: {
      A: "111",
      B: "121",
      C: "110",
      D: "1210",
    },
    correctAnswer: "B",
    explanation: "Multiply 11 by 11 to get 121.",
  },
  {
    id: 324,
    subject: "English",
    question: "Which word is an interrogative used to ask about time?",
    options: {
      A: "Where",
      B: "When",
      C: "Why",
      D: "How",
    },
    correctAnswer: "B",
    explanation: "'When' is used to ask questions about time.",
  },
  {
    id: 325,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'Please wait a moment.'",
    options: {
      A: "Tafadhali ngoja kidogo.",
      B: "Tafadhali nenda sasa.",
      C: "Tafadhali osha sasa.",
      D: "Tafadhali sema haraka.",
    },
    correctAnswer: "A",
    explanation:
      "'Tafadhali ngoja kidogo' means 'Please wait a moment', using 'ngoja kidogo' for a short wait.",
  },
  {
    id: 326,
    subject: "Science & Technology",
    question: "Which sense helps humans detect taste?",
    options: {
      A: "Hearing",
      B: "Taste (tongue)",
      C: "Sight",
      D: "Balance",
    },
    correctAnswer: "B",
    explanation:
      "The tongue contains taste buds that enable the sense of taste.",
  },
  {
    id: 327,
    subject: "Social Studies",
    question:
      "Which public place is commonly used for voting during elections?",
    options: {
      A: "Polling station at a school or hall",
      B: "Private home only",
      C: "Market stall only",
      D: "Bus stop",
    },
    correctAnswer: "A",
    explanation:
      "Polling stations are set up in public venues like schools or halls to allow citizens to vote in elections.",
  },
  {
    id: 328,
    subject: "CRE",
    question:
      "Which gift did the Holy Spirit give the early disciples at Pentecost that helped them speak about Jesus to many people?",
    options: {
      A: "Prophecy of weather",
      B: "Ability to speak in other languages (tongues)",
      C: "Invisibility",
      D: "Turning stones to bread",
    },
    correctAnswer: "B",
    explanation:
      "Acts describes believers speaking in other tongues so people from many places could hear the message at Pentecost.",
  },
  {
    id: 329,
    subject: "Agriculture",
    question: "Which tool is suitable for removing deep-rooted weeds by hand?",
    options: {
      A: "Mattock or hand fork",
      B: "Harvester",
      C: "Thresher",
      D: "Combine",
    },
    correctAnswer: "A",
    explanation:
      "A mattock or hand fork loosens soil and pulls out deep-rooted weeds effectively in small farms or gardens.",
  },
  {
    id: 330,
    subject: "Music",
    question:
      "Which term indicates a single sustained pitch held for a long time?",
    options: {
      A: "Staccato",
      B: "Drone or sustained note",
      C: "Glissando",
      D: "Scale",
    },
    correctAnswer: "B",
    explanation:
      "A drone or sustained note is a continuous tone held without change for an extended period.",
  },
  {
    id: 331,
    subject: "Home Science",
    question:
      "Which is a safe practice when storing cooked food in the refrigerator?",
    options: {
      A: "Labeling with date and storing promptly",
      B: "Leaving it at room temperature overnight",
      C: "Mixing raw meat with cooked food",
      D: "Storing above 30°C",
    },
    correctAnswer: "A",
    explanation:
      "Labeling with date and refrigerating promptly ensures safe storage and helps track how long food has been kept.",
  },
  {
    id: 332,
    subject: "Physical & Health Education",
    question:
      "Which nutrient is important for quick energy before sports activities?",
    options: {
      A: "Carbohydrates",
      B: "Iron only",
      C: "Calcium only",
      D: "Water only",
    },
    correctAnswer: "A",
    explanation:
      "Carbohydrates provide readily available energy useful for short-term athletic performance.",
  },
  {
    id: 333,
    subject: "ICT/Computer Studies",
    question:
      "Which file type is commonly used for documents created in word processors?",
    options: {
      A: ".mp3",
      B: ".docx",
      C: ".jpg",
      D: ".exe",
    },
    correctAnswer: "B",
    explanation:
      ".docx is a common file extension for word processing documents created by applications like Microsoft Word.",
  },
  {
    id: 334,
    subject: "Mathematics",
    question: "What is the value of 7 squared (7^2)?",
    options: {
      A: "14",
      B: "49",
      C: "21",
      D: "77",
    },
    correctAnswer: "B",
    explanation: "7 squared means 7 × 7 = 49.",
  },
  {
    id: 335,
    subject: "English",
    question: "Which sentence uses correct capitalization for a person's name?",
    options: {
      A: "john went to school.",
      B: "John went to school.",
      C: "john Went to school.",
      D: "john went To school.",
    },
    correctAnswer: "B",
    explanation:
      "Proper nouns like 'John' should begin with a capital letter, and the sentence should start with a capital letter.",
  },
  {
    id: 336,
    subject: "Kiswahili",
    question: "Chagua tafsiri: 'She is reading a story.'",
    options: {
      A: "Anapika hadithi.",
      B: "Anasoma hadithi.",
      C: "Anakuja hadithi.",
      D: "Anacheza hadithi.",
    },
    correctAnswer: "B",
    explanation:
      "'Anasoma hadithi' correctly means 'She is reading a story' in present continuous tense.",
  },
  {
    id: 337,
    subject: "Science & Technology",
    question:
      "Which object is needed to see distant stars and planets more clearly from Earth?",
    options: {
      A: "Telescope",
      B: "Microscope",
      C: "Thermometer",
      D: "Ruler",
    },
    correctAnswer: "A",
    explanation:
      "A telescope collects and magnifies light from distant objects, allowing better observation of stars and planets.",
  },
  {
    id: 338,
    subject: "Social Studies",
    question:
      "Which right is important for children in schools to be treated fairly?",
    options: {
      A: "Right to education",
      B: "Right to drive a car",
      C: "Right to vote in national elections",
      D: "Right to own a bank",
    },
    correctAnswer: "A",
    explanation:
      "The right to education ensures children have access to schooling and fair treatment in learning environments.",
  },
  {
    id: 339,
    subject: "CRE",
    question:
      "Which action shows hospitality as encouraged in Christian teachings?",
    options: {
      A: "Welcoming strangers and offering food",
      B: "Refusing to share",
      C: "Being rude to visitors",
      D: "Ignoring guests",
    },
    correctAnswer: "A",
    explanation:
      "Hospitality, welcoming strangers and sharing provisions, is encouraged as a Christian virtue.",
  },
  {
    id: 340,
    subject: "Agriculture",
    question:
      "Which nutrient is commonly deficient in soils and often added as fertilizer to improve plant growth?",
    options: {
      A: "Nitrogen",
      B: "Gold",
      C: "Helium",
      D: "Plastic",
    },
    correctAnswer: "A",
    explanation:
      "Nitrogen is a key plant nutrient often added through fertilizers to support leaf and stem growth.",
  },
  {
    id: 341,
    subject: "Music",
    question: "Which symbol raises a note by a half step?",
    options: {
      A: "Flat (♭)",
      B: "Sharp (♯)",
      C: "Natural (♮)",
      D: "Repeat sign",
    },
    correctAnswer: "B",
    explanation: "A sharp (♯) raises a note by one semitone (half step).",
  },
  {
    id: 342,
    subject: "Home Science",
    question: "Which is a safe way to thaw frozen meat quickly and safely?",
    options: {
      A: "In a microwave using the defrost setting or in cold water changed regularly",
      B: "On a warm kitchen counter for many hours",
      C: "In hot boiling water",
      D: "Left in direct sun",
    },
    correctAnswer: "A",
    explanation:
      "Microwave defrosting or cold water changed frequently are safe quick-thaw methods; leaving at room temperature can cause bacteria growth.",
  },
  {
    id: 343,
    subject: "Physical & Health Education",
    question:
      "Which habit helps reduce risk of contagious diseases during outbreaks?",
    options: {
      A: "Frequent handwashing with soap and water",
      B: "Sharing drinking cups",
      C: "Coughing into open air without covering",
      D: "Avoiding vaccinations",
    },
    correctAnswer: "A",
    explanation:
      "Handwashing with soap removes germs and helps prevent disease transmission, especially during outbreaks.",
  },
  {
    id: 344,
    subject: "ICT/Computer Studies",
    question:
      "Which device converts digital documents into editable text using OCR (optical character recognition)?",
    options: {
      A: "Scanner with OCR software",
      B: "Monitor",
      C: "Printer only",
      D: "Router",
    },
    correctAnswer: "A",
    explanation:
      "A scanner combined with OCR software reads printed text and converts it into editable digital text.",
  },
  {
    id: 345,
    subject: "Mathematics",
    question: "What is the missing number in the sequence: 5, 10, 15, __, 25?",
    options: {
      A: "17",
      B: "20",
      C: "22",
      D: "18",
    },
    correctAnswer: "B",
    explanation:
      "The sequence increases by 5 each time: after 15 comes 20, then 25.",
  },
  {
    id: 346,
    subject: "English",
    question: "Which sentence is in the present continuous tense?",
    options: {
      A: "She will go to school.",
      B: "She goes to school every day.",
      C: "She is going to school now.",
      D: "She went to school yesterday.",
    },
    correctAnswer: "C",
    explanation:
      "The present continuous uses 'is/are + verb-ing' to describe an action happening now: 'She is going to school now.'",
  },
  {
    id: 347,
    subject: "Kiswahili",
    question: "Chagua sahihi: 'Je, wewe ___ kula nyama?'",
    options: {
      A: "kuweza",
      B: "unapenda",
      C: "unakula",
      D: "umekula",
    },
    correctAnswer: "B",
    explanation:
      "'Je, wewe unapenda kula nyama?' asks 'Do you like eating meat?' using 'unapenda' for 'you like'.",
  },
  {
    id: 348,
    subject: "Science & Technology",
    question:
      "Which device is used to measure mass of an object in a science lab?",
    options: {
      A: "Thermometer",
      B: "Balance or scale",
      C: "Clock",
      D: "Ruler",
    },
    correctAnswer: "B",
    explanation:
      "A balance or scale compares an object's mass to standard masses or measures weight and mass in a lab.",
  },
  {
    id: 349,
    subject: "Social Studies",
    question:
      "Which is a cultural practice often passed down through families?",
    options: {
      A: "Traditional storytelling or songs",
      B: "Buying a new smartphone",
      C: "Going to the supermarket only",
      D: "Driving a car",
    },
    correctAnswer: "A",
    explanation:
      "Traditional storytelling and songs are cultural practices transmitted across generations as part of heritage.",
  },
  {
    id: 350,
    subject: "CRE",
    question:
      "Which prophet was famous for interpreting dreams in the Old Testament and became a leader in Egypt?",
    options: {
      A: "Joseph",
      B: "Elijah",
      C: "Isaiah",
      D: "Samuel",
    },
    correctAnswer: "A",
    explanation:
      "Joseph interpreted Pharaoh's dreams and rose to a position of leadership in Egypt to manage the famine.",
  },
  {
    id: 351,
    subject: "Agriculture",
    question: "Which garden crop grows well in shady areas?",
    options: {
      A: "Tomatoes (need sun)",
      B: "Spinach (tolerates some shade)",
      C: "Sunflowers only",
      D: "Maize (needs full sun)",
    },
    correctAnswer: "B",
    explanation:
      "Leafy greens like spinach can tolerate partial shade and still grow well compared to sun-loving crops.",
  },
  {
    id: 352,
    subject: "Music",
    question: "Which term refers to the speed of music?",
    options: {
      A: "Tempo",
      B: "Timbre",
      C: "Pitch",
      D: "Melody",
    },
    correctAnswer: "A",
    explanation:
      "Tempo indicates how fast or slow a piece of music should be played.",
  },
  {
    id: 353,
    subject: "Home Science",
    question:
      "Which household item can remove mild stains from fabric without harsh chemicals?",
    options: {
      A: "Baking soda paste",
      B: "Motor oil",
      C: "Paint thinner",
      D: "Bleach on coloured clothes",
    },
    correctAnswer: "A",
    explanation:
      "A baking soda paste is a mild, safe cleaning agent for many fabrics; harsh chemicals can damage fabric or colour.",
  },
  {
    id: 354,
    subject: "Physical & Health Education",
    question:
      "Which sign suggests someone may need medical help after a head injury?",
    options: {
      A: "Clear thinking immediately",
      B: "Dizziness, vomiting or loss of consciousness",
      C: "No change at all",
      D: "Feeling very hungry",
    },
    correctAnswer: "B",
    explanation:
      "Dizziness, repeated vomiting or unconsciousness after a head injury require prompt medical attention.",
  },
  {
    id: 355,
    subject: "ICT/Computer Studies",
    question:
      "Which program is best for creating and calculating with tables of numbers?",
    options: {
      A: "Spreadsheet software (e.g., Excel)",
      B: "Word processor",
      C: "Image editor",
      D: "Web browser",
    },
    correctAnswer: "A",
    explanation:
      "Spreadsheet programs handle numerical data, formulas and tables, making them ideal for calculations.",
  },
  {
    id: 356,
    subject: "Mathematics",
    question: "What is the result of 100 − 37?",
    options: {
      A: "63",
      B: "73",
      C: "57",
      D: "67",
    },
    correctAnswer: "A",
    explanation: "Subtract 37 from 100: 100 − 37 = 63.",
  },
  {
    id: 357,
    subject: "English",
    question: "Which word forms the opposite of 'always'?",
    options: {
      A: "Never",
      B: "Often",
      C: "Sometimes",
      D: "Usually",
    },
    correctAnswer: "A",
    explanation:
      "'Never' means not at any time and is the antonym of 'always.'",
  },
  {
    id: 358,
    subject: "Kiswahili",
    question: "Chagua sahihi: 'Ninapenda ___ muziki mzuri.'",
    options: {
      A: "sikiliza",
      B: "kusikiliza",
      C: "nisikilize",
      D: "nasikiliza",
    },
    correctAnswer: "D",
    explanation:
      "'Nasikiliza muziki mzuri' means 'I listen to good music'; 'na-' is the present tense marker for 'I'.",
  },
  {
    id: 359,
    subject: "Science & Technology",
    question:
      "Which human body system carries oxygen to cells and removes carbon dioxide?",
    options: {
      A: "Digestive system",
      B: "Respiratory and circulatory systems working together",
      C: "Skeletal system only",
      D: "Nervous system only",
    },
    correctAnswer: "B",
    explanation:
      "The respiratory system takes in oxygen and the circulatory system transports it to cells and removes CO2.",
  },
  {
    id: 360,
    subject: "Social Studies",
    question: "Which action helps conserve community resources like water?",
    options: {
      A: "Fixing leaks and using water wisely",
      B: "Leaving taps running",
      C: "Wasting public water",
      D: "Dumping waste into rivers",
    },
    correctAnswer: "A",
    explanation:
      "Repairing leaks and conserving water reduces waste and protects community water supplies.",
  },
  {
    id: 361,
    subject: "CRE",
    question: "Which prayer did Jesus teach that begins with 'Our Father'?",
    options: {
      A: "The Shema",
      B: "The Lord's Prayer",
      C: "The Hail Mary",
      D: "The Ten Commandments",
    },
    correctAnswer: "B",
    explanation:
      "The Lord's Prayer, beginning 'Our Father', is the model prayer Jesus taught his followers.",
  },
  {
    id: 362,
    subject: "Agriculture",
    question:
      "Which seed storage practice helps maintain seed viability until planting season?",
    options: {
      A: "Keeping seeds dry, cool and in airtight containers",
      B: "Storing seeds in water",
      C: "Exposing seeds to pests",
      D: "Mixing seeds with soil in the open",
    },
    correctAnswer: "A",
    explanation:
      "Dry, cool, airtight storage prevents moisture and pests that reduce seed viability.",
  },
  {
    id: 363,
    subject: "Music",
    question: "Which family does the violin belong to?",
    options: {
      A: "Percussion",
      B: "String",
      C: "Brass",
      D: "Woodwind",
    },
    correctAnswer: "B",
    explanation:
      "The violin produces sound from vibrating strings and belongs to the string family.",
  },
  {
    id: 364,
    subject: "Home Science",
    question:
      "Which breakfast choice provides a good balance of energy and nutrients?",
    options: {
      A: "Plain porridge with fruit and milk",
      B: "Only sugary candies",
      C: "Nothing at all",
      D: "Only soda",
    },
    correctAnswer: "A",
    explanation:
      "Porridge with fruit and milk offers carbohydrates, vitamins and protein for a balanced start to the day.",
  },
  {
    id: 365,
    subject: "Physical & Health Education",
    question: "Which safety measure protects children during outdoor play?",
    options: {
      A: "Using appropriate footwear and supervision",
      B: "Running on wet tiled roofs",
      C: "Playing without adult supervision near roads",
      D: "Climbing on broken glass",
    },
    correctAnswer: "A",
    explanation:
      "Good footwear and adult supervision reduce the risk of injuries during outdoor activities.",
  },
  {
    id: 366,
    subject: "ICT/Computer Studies",
    question: "Which device provides sound output from a computer?",
    options: {
      A: "Speakers or headphones",
      B: "Mouse",
      C: "Keyboard",
      D: "Monitor",
    },
    correctAnswer: "A",
    explanation:
      "Speakers and headphones convert digital audio signals into sound for listening.",
  },
  {
    id: 367,
    subject: "Mathematics",
    question: "What is the greatest two-digit even number?",
    options: {
      A: "98",
      B: "99",
      C: "96",
      D: "100",
    },
    correctAnswer: "A",
    explanation:
      "The largest two-digit number is 99; the greatest even two-digit number is 98.",
  },
  {
    id: 368,
    subject: "English",
    question: "Which sentence correctly uses an apostrophe for possession?",
    options: {
      A: "The girls' books are on the table.",
      B: "The girls books are on the table.",
      C: "The girl's books are on the table.",
      D: "The girls books' are on the table.",
    },
    correctAnswer: "A",
    explanation:
      "If the books belong to multiple girls, the plural possessive 'girls'' is correct: 'The girls' books...'.",
  },
  {
    id: 369,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'We will study tomorrow.'",
    options: {
      A: "Tutasoma kesho.",
      B: "Tumesoma kesho.",
      C: "Tunawasoma kesho.",
      D: "Tulikuwa tunasoma kesho.",
    },
    correctAnswer: "A",
    explanation:
      "'Tutasoma kesho' uses the future tense 'tuta-' meaning 'we will study tomorrow.'",
  },
  {
    id: 370,
    subject: "Science & Technology",
    question: "Which natural resource is used to make paper?",
    options: {
      A: "Metal ores",
      B: "Wood (trees)",
      C: "Coal",
      D: "Sand",
    },
    correctAnswer: "B",
    explanation:
      "Paper is made from wood pulp obtained from trees, a renewable natural resource when managed sustainably.",
  },
  {
    id: 371,
    subject: "Social Studies",
    question:
      "Which institution keeps records of births and deaths in a country?",
    options: {
      A: "Registry office or civil registration",
      B: "Sports club",
      C: "Local shop",
      D: "School only",
    },
    correctAnswer: "A",
    explanation:
      "Civil registration or registry offices record vital events like births and deaths for legal purposes.",
  },
  {
    id: 372,
    subject: "CRE",
    question:
      "Which Bible story shows the importance of sharing food with the hungry?",
    options: {
      A: "Feeding the five thousand",
      B: "Noah building the ark",
      C: "David playing harp",
      D: "Elijah in the wilderness",
    },
    correctAnswer: "A",
    explanation:
      "The story of Jesus feeding five thousand people highlights sharing resources to help the hungry.",
  },
  {
    id: 373,
    subject: "Agriculture",
    question:
      "Which practice helps increase crop yield by providing the right amounts of water?",
    options: {
      A: "Proper irrigation scheduling",
      B: "Watering randomly",
      C: "Never watering",
      D: "Flooding fields excessively always",
    },
    correctAnswer: "A",
    explanation:
      "Irrigation scheduled to crop needs supplies water efficiently and supports healthy crop growth and yield.",
  },
  {
    id: 374,
    subject: "Music",
    question:
      "Which word describes notes played with separation and shortness?",
    options: {
      A: "Legato",
      B: "Staccato",
      C: "Crescendo",
      D: "Flat",
    },
    correctAnswer: "B",
    explanation:
      "Staccato indicates notes should be played short and detached, creating separation.",
  },
  {
    id: 375,
    subject: "Home Science",
    question: "Which kitchen practice reduces food waste?",
    options: {
      A: "Planning meals and using leftovers safely",
      B: "Throwing away usable food daily",
      C: "Cooking excessive amounts without storing",
      D: "Leaving food uncovered outside",
    },
    correctAnswer: "A",
    explanation:
      "Meal planning and safe use of leftovers minimize waste and make efficient use of food resources.",
  },
  {
    id: 376,
    subject: "Physical & Health Education",
    question: "Which is a benefit of regular physical exercise for children?",
    options: {
      A: "Improved strength, coordination and mood",
      B: "Always feeling tired and unhappy",
      C: "Poor sleep",
      D: "Loss of appetite only",
    },
    correctAnswer: "A",
    explanation:
      "Regular exercise promotes physical development, better coordination and improves mood and wellbeing.",
  },
  {
    id: 377,
    subject: "ICT/Computer Studies",
    question: "Which action protects a computer from viruses and malware?",
    options: {
      A: "Installing and updating antivirus software",
      B: "Clicking unknown links often",
      C: "Sharing passwords publicly",
      D: "Using outdated software only",
    },
    correctAnswer: "A",
    explanation:
      "Antivirus software detects and removes malicious programs; updating it improves protection against new threats.",
  },
  {
    id: 378,
    subject: "Mathematics",
    question: "Which is the smallest prime number greater than 10?",
    options: {
      A: "11",
      B: "12",
      C: "13",
      D: "10",
    },
    correctAnswer: "A",
    explanation:
      "11 is a prime number and is the smallest prime greater than 10.",
  },
  {
    id: 379,
    subject: "English",
    question: "Which sentence shows correct use of the comparative 'more'?",
    options: {
      A: "She is more taller than her brother.",
      B: "She is more intelligent than her brother.",
      C: "She is most taller than her brother.",
      D: "She is more taller her brother.",
    },
    correctAnswer: "B",
    explanation:
      "'More intelligent' correctly uses 'more' with a longer adjective to compare two people.",
  },
  {
    id: 380,
    subject: "Kiswahili",
    question: "Chagua sahihi: 'Ninataka ___ maji.'",
    options: {
      A: "kutoa",
      B: "kunywa",
      C: "kupika",
      D: "kula",
    },
    correctAnswer: "B",
    explanation:
      "'Ninataka kunywa maji' means 'I want to drink water'; 'kunywa' is the correct verb for drinking.",
  },
  {
    id: 381,
    subject: "Science & Technology",
    question:
      "Which tool helps mix ingredients evenly in a science practical or cooking?",
    options: {
      A: "Stirrer or spoon",
      B: "Hammer",
      C: "Screwdriver",
      D: "Ruler",
    },
    correctAnswer: "A",
    explanation:
      "A stirrer or spoon mixes liquids and ingredients to create a uniform mixture.",
  },
  {
    id: 382,
    subject: "Social Studies",
    question: "Which body enforces laws and helps keep the public safe?",
    options: {
      A: "Police service",
      B: "Restaurant",
      C: "Library",
      D: "Cinema",
    },
    correctAnswer: "A",
    explanation:
      "Police enforce laws, investigate crimes and help maintain public safety in communities.",
  },
  {
    id: 383,
    subject: "CRE",
    question:
      "Which parable teaches forgiveness by comparing a servant forgiven a large debt who then fails to forgive a small debt?",
    options: {
      A: "Parable of the Unforgiving Servant",
      B: "Parable of the Sower",
      C: "Parable of the Talents",
      D: "Parable of the Lost Coin",
    },
    correctAnswer: "A",
    explanation:
      "The Parable of the Unforgiving Servant teaches the importance of forgiving others as we have been forgiven.",
  },
  {
    id: 384,
    subject: "Agriculture",
    question: "Which is a common sign that a plant needs water?",
    options: {
      A: "Wilting leaves and dry soil",
      B: "Bright green leaves and wet soil",
      C: "Flowers blooming heavily",
      D: "Healthy upright stems",
    },
    correctAnswer: "A",
    explanation:
      "Wilting leaves and dry soil indicate insufficient water and the need for irrigation.",
  },
  {
    id: 385,
    subject: "Music",
    question: "Which instrument is played by striking bars with mallets?",
    options: {
      A: "Violin",
      B: "Xylophone",
      C: "Clarinet",
      D: "Trumpet",
    },
    correctAnswer: "B",
    explanation:
      "The xylophone has wooden or metal bars struck with mallets to produce musical notes.",
  },
  {
    id: 386,
    subject: "Home Science",
    question:
      "Which step helps keep kitchen surfaces sanitary after preparing raw meat?",
    options: {
      A: "Washing the surfaces with soap and hot water",
      B: "Wiping with a dry cloth only",
      C: "Leaving surfaces unclean",
      D: "Using the same cloth for raw and cooked foods",
    },
    correctAnswer: "A",
    explanation:
      "Cleaning surfaces with soap and hot water removes bacteria and reduces cross-contamination risk.",
  },
  {
    id: 387,
    subject: "Physical & Health Education",
    question: "Which practice supports recovery after exercise?",
    options: {
      A: "Cool-down stretching and hydration",
      B: "Immediately lying still without movement",
      C: "Skipping meals for a day",
      D: "Continuing intense activity without rest",
    },
    correctAnswer: "A",
    explanation:
      "Cooling down and drinking fluids help the body recover and reduce muscle soreness after exercise.",
  },
  {
    id: 388,
    subject: "ICT/Computer Studies",
    question: "Which online action should you avoid to protect your privacy?",
    options: {
      A: "Sharing your personal ID number publicly",
      B: "Using private messages for sensitive info",
      C: "Logging out of public computers",
      D: "Using strong passwords",
    },
    correctAnswer: "A",
    explanation:
      "Posting personal identification publicly can lead to identity theft; sensitive data should be kept private.",
  },
  {
    id: 389,
    subject: "Mathematics",
    question: "Which shape has four equal sides and four right angles?",
    options: {
      A: "Rectangle (not necessarily equal sides)",
      B: "Square",
      C: "Parallelogram with unequal sides",
      D: "Triangle",
    },
    correctAnswer: "B",
    explanation:
      "A square has four equal sides and four right angles, satisfying both conditions.",
  },
  {
    id: 390,
    subject: "English",
    question: "Which prefix makes the opposite of 'happy'?",
    options: {
      A: "un-",
      B: "re-",
      C: "pre-",
      D: "post-",
    },
    correctAnswer: "A",
    explanation:
      "Adding 'un-' to 'happy' forms 'unhappy', which is the opposite meaning.",
  },
  {
    id: 391,
    subject: "Kiswahili",
    question: "Chagua sahihi: 'Alienda ___ gari lake.'",
    options: {
      A: "kwenda",
      B: "na",
      C: "na gari",
      D: "kwa",
    },
    correctAnswer: "C",
    explanation:
      "'Alienda na gari lake' means 'He went with his car' or 'He went by his car', where 'na gari' indicates the means.",
  },
  {
    id: 392,
    subject: "Science & Technology",
    question:
      "Which simple change is physical, not chemical: melting ice or burning paper?",
    options: {
      A: "Burning paper (chemical)",
      B: "Melting ice (physical)",
      C: "Both are chemical changes",
      D: "Both are nuclear changes",
    },
    correctAnswer: "B",
    explanation:
      "Melting ice changes state from solid to liquid without changing chemical composition, so it's a physical change.",
  },
  {
    id: 393,
    subject: "Social Studies",
    question: "Which is an example of a national symbol?",
    options: {
      A: "A country's flag",
      B: "A private logo",
      C: "A family pet",
      D: "A local shop name",
    },
    correctAnswer: "A",
    explanation:
      "A flag represents a nation's identity and is a common national symbol used in official contexts.",
  },
  {
    id: 394,
    subject: "CRE",
    question: "Which miracle involved Jesus restoring sight to a blind man?",
    options: {
      A: "Healing the blind (e.g., Bartimaeus)",
      B: "Calming the storm",
      C: "Walking on water",
      D: "Turning stones to bread",
    },
    correctAnswer: "A",
    explanation:
      "Jesus healed several blind people in gospel accounts, including Bartimaeus who regained sight.",
  },
  {
    id: 395,
    subject: "Agriculture",
    question: "Which action helps reduce post-harvest losses of fruits?",
    options: {
      A: "Proper handling, cooling and timely marketing",
      B: "Throwing them in open sun without care",
      C: "Mixing with chemical waste",
      D: "Delaying sale until spoiled",
    },
    correctAnswer: "A",
    explanation:
      "Careful handling, rapid cooling and selling promptly reduce spoilage and extend marketability of produce.",
  },
  {
    id: 396,
    subject: "Music",
    question: "Which instrument family includes the drum set?",
    options: {
      A: "Brass",
      B: "Percussion",
      C: "String",
      D: "Woodwind",
    },
    correctAnswer: "B",
    explanation:
      "Drums are struck instruments producing sound by vibration, placing them in the percussion family.",
  },
  {
    id: 397,
    subject: "Home Science",
    question: "Which measure helps maintain good indoor air quality at home?",
    options: {
      A: "Ventilating rooms and avoiding indoor smoking",
      B: "Closing all windows permanently",
      C: "Burning plastic indoors",
      D: "Using gas without a chimney",
    },
    correctAnswer: "A",
    explanation:
      "Fresh air circulation and avoiding smoke sources reduce indoor pollutants and improve air quality.",
  },
  {
    id: 398,
    subject: "Physical & Health Education",
    question: "Which symptom indicates a person may be allergic to a food?",
    options: {
      A: "Rash, swelling or difficulty breathing after eating",
      B: "Feeling energetic immediately",
      C: "Growing taller suddenly",
      D: "Sleeping well",
    },
    correctAnswer: "A",
    explanation:
      "Allergic reactions often include skin rashes, swelling, hives or breathing difficulties and require prompt attention.",
  },
  {
    id: 399,
    subject: "ICT/Computer Studies",
    question: "Which function formats text to appear bold in many editors?",
    options: {
      A: "Clicking the 'B' (bold) icon or using Ctrl+B",
      B: "Clicking the 'I' (italic) icon",
      C: "Clicking the 'U' (underline) icon",
      D: "Pressing Ctrl+P (print)",
    },
    correctAnswer: "A",
    explanation:
      "The 'B' icon or keyboard shortcut Ctrl+B toggles bold formatting for selected text in many editors.",
  },
  {
    id: 400,
    subject: "Mathematics",
    question:
      "If a pizza is cut into 8 equal slices and you eat 3, what fraction of the pizza remains?",
    options: {
      A: "3/8",
      B: "5/8",
      C: "1/2",
      D: "2/8",
    },
    correctAnswer: "B",
    explanation:
      "Three slices eaten leaves 8 − 3 = 5 slices; the remaining fraction is 5/8.",
  },
  {
    id: 401,
    subject: "Mathematics",
    question: "What is the value of 9 × 6?",
    options: {
      A: "54",
      B: "45",
      C: "63",
      D: "49",
    },
    correctAnswer: "A",
    explanation: "Multiply 9 by 6 to get 54.",
  },
  {
    id: 402,
    subject: "English",
    question:
      "Which word correctly completes: 'Please put the books ___ the shelf.'",
    options: {
      A: "on",
      B: "in",
      C: "underneathly",
      D: "beside",
    },
    correctAnswer: "A",
    explanation:
      "'On the shelf' is the correct preposition phrase to indicate placement atop the shelf.",
  },
  {
    id: 403,
    subject: "Kiswahili",
    question: "Tafsiri: 'He bought a new pen.'",
    options: {
      A: "Alinunua kalamu mpya.",
      B: "Ananunua kalamu zamani.",
      C: "Alinunua gari mpya.",
      D: "Anauza kalamu mpya.",
    },
    correctAnswer: "A",
    explanation:
      "'Alinunua kalamu mpya' correctly translates as 'He bought a new pen' in past tense.",
  },
  {
    id: 404,
    subject: "Science & Technology",
    question:
      "Which device uses magnets and coils to produce electricity from moving water in a hydro plant?",
    options: {
      A: "Motor",
      B: "Generator",
      C: "Light bulb",
      D: "Battery",
    },
    correctAnswer: "B",
    explanation:
      "A generator converts mechanical energy (from moving water) into electrical energy using magnets and coils.",
  },
  {
    id: 405,
    subject: "Social Studies",
    question:
      "Which national institution is commonly responsible for collecting taxes?",
    options: {
      A: "Ministry of Health",
      B: "Revenue authority",
      C: "Local school",
      D: "Community club",
    },
    correctAnswer: "B",
    explanation:
      "Revenue authorities are government bodies tasked with tax collection and administration.",
  },
  {
    id: 406,
    subject: "CRE",
    question: "Which miracle involved Jesus turning water into wine?",
    options: {
      A: "Feeding the multitudes",
      B: "Wedding at Cana",
      C: "Walking on water",
      D: "Healing the leper",
    },
    correctAnswer: "B",
    explanation:
      "At the Wedding at Cana, Jesus turned water into wine as his first recorded miracle in the Gospels.",
  },
  {
    id: 407,
    subject: "Agriculture",
    question:
      "Which farm practice improves soil by planting legume cover crops and then mixing them into the soil?",
    options: {
      A: "Green manuring",
      B: "Burning residues",
      C: "Continuous monoculture",
      D: "Overgrazing",
    },
    correctAnswer: "A",
    explanation:
      "Green manuring involves growing legumes and incorporating them into soil to add organic matter and nitrogen.",
  },
  {
    id: 408,
    subject: "Music",
    question:
      "Which term refers to singing without instrumental accompaniment?",
    options: {
      A: "Accompanied",
      B: "Unison",
      C: "A cappella",
      D: "Duet",
    },
    correctAnswer: "C",
    explanation:
      "A cappella means vocal music performed without instrumental backing.",
  },
  {
    id: 409,
    subject: "Home Science",
    question:
      "Which spice can help add flavor to food and also has preservative qualities?",
    options: {
      A: "Salt",
      B: "Plastic",
      C: "Sand",
      D: "Paper",
    },
    correctAnswer: "A",
    explanation:
      "Salt enhances taste and, by reducing moisture, helps preserve certain foods.",
  },
  {
    id: 410,
    subject: "Physical & Health Education",
    question: "Which action helps prevent muscle cramps during exercise?",
    options: {
      A: "Staying hydrated and stretching",
      B: "Skipping warm-up",
      C: "Drinking only soda",
      D: "Exercising on an empty stomach always",
    },
    correctAnswer: "A",
    explanation:
      "Hydration and proper stretching reduce the likelihood of muscle cramps during and after activity.",
  },
  {
    id: 411,
    subject: "ICT/Computer Studies",
    question:
      "Which shortcut often pastes copied content into a document on many computers?",
    options: {
      A: "Ctrl + C",
      B: "Ctrl + V",
      C: "Ctrl + X",
      D: "Ctrl + Z",
    },
    correctAnswer: "B",
    explanation:
      "Ctrl + V is the standard paste shortcut after copying (Ctrl + C) or cutting (Ctrl + X).",
  },
  {
    id: 412,
    subject: "Mathematics",
    question: "Which represents the fraction one quarter as a decimal?",
    options: {
      A: "0.25",
      B: "0.4",
      C: "0.2",
      D: "0.75",
    },
    correctAnswer: "A",
    explanation: "One quarter equals 1 ÷ 4 = 0.25 in decimal form.",
  },
  {
    id: 413,
    subject: "English",
    question: "Choose the correct contraction for 'they are'.",
    options: {
      A: "their",
      B: "they're",
      C: "there",
      D: "theyre",
    },
    correctAnswer: "B",
    explanation:
      "'They're' is the contraction of 'they are'; 'their' and 'there' are different words.",
  },
  {
    id: 414,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'We slept early.'",
    options: {
      A: "Tulilala mapema.",
      B: "Tunalala mapema.",
      C: "Tutalala mapema.",
      D: "Walilala mapema.",
    },
    correctAnswer: "A",
    explanation: "'Tulilala mapema' is past tense and means 'We slept early.'",
  },
  {
    id: 415,
    subject: "Science & Technology",
    question:
      "Which simple machine is a lever used for lifting a heavy stone with less effort?",
    options: {
      A: "Inclined plane",
      B: "Lever",
      C: "Pulley",
      D: "Screw",
    },
    correctAnswer: "B",
    explanation:
      "A lever amplifies input force to lift heavy loads by rotating around a pivot (fulcrum).",
  },
  {
    id: 416,
    subject: "Social Studies",
    question: "Which service would you use a public transport system for?",
    options: {
      A: "Traveling to work or market",
      B: "Planting crops",
      C: "Baking bread",
      D: "Teaching a class",
    },
    correctAnswer: "A",
    explanation:
      "Public transport provides mobility for commuting, shopping and other travel needs in a community.",
  },
  {
    id: 417,
    subject: "CRE",
    question:
      "Which Old Testament figure is associated with great strength and the story of the Philistines?",
    options: {
      A: "Samson",
      B: "Solomon",
      C: "Moses",
      D: "Elisha",
    },
    correctAnswer: "A",
    explanation:
      "Samson is known for his exceptional strength and conflicts with the Philistines in biblical narratives.",
  },
  {
    id: 418,
    subject: "Agriculture",
    question:
      "Which weather condition is best for harvesting dry cereals like maize to avoid rot?",
    options: {
      A: "Wet and rainy",
      B: "Dry and sunny",
      C: "Foggy and humid",
      D: "Snowy",
    },
    correctAnswer: "B",
    explanation:
      "Dry sunny weather reduces grain moisture and helps prevent fungal growth and rot during harvest.",
  },
  {
    id: 419,
    subject: "Music",
    question: "Which symbol indicates a half step lower in pitch?",
    options: {
      A: "Sharp (♯)",
      B: "Flat (♭)",
      C: "Natural (♮)",
      D: "Clef",
    },
    correctAnswer: "B",
    explanation:
      "A flat (♭) lowers the pitch of a note by one semitone (half step).",
  },
  {
    id: 420,
    subject: "Home Science",
    question:
      "Which utensil material is safer for cooking acidic foods without reacting?",
    options: {
      A: "Aluminum uncoated",
      B: "Stainless steel",
      C: "Copper untreated",
      D: "Iron rusty",
    },
    correctAnswer: "B",
    explanation:
      "Stainless steel is non-reactive and safe for cooking acidic foods compared to some untreated metals.",
  },
  {
    id: 421,
    subject: "Physical & Health Education",
    question: "Which is a healthy habit that helps eyesight?",
    options: {
      A: "Reading in poor light for hours",
      B: "Regular eye rest and good lighting",
      C: "Staring at screens without breaks",
      D: "Sleeping less",
    },
    correctAnswer: "B",
    explanation:
      "Giving eyes regular breaks and ensuring good lighting protects vision and reduces eye strain.",
  },
  {
    id: 422,
    subject: "ICT/Computer Studies",
    question:
      "Which item is a removable storage medium for transferring small files?",
    options: {
      A: "USB flash drive",
      B: "Monitor cable",
      C: "Power cord",
      D: "Motherboard",
    },
    correctAnswer: "A",
    explanation:
      "USB flash drives are portable devices used to move files between computers easily.",
  },
  {
    id: 423,
    subject: "Mathematics",
    question:
      "If a library has 5 shelves and each shelf holds 24 books, how many books in total?",
    options: {
      A: "100",
      B: "120",
      C: "130",
      D: "140",
    },
    correctAnswer: "B",
    explanation: "Total books = 5 × 24 = 120.",
  },
  {
    id: 424,
    subject: "English",
    question: "Which sentence uses the future tense correctly?",
    options: {
      A: "I will visit my cousin tomorrow.",
      B: "I visits my cousin tomorrow.",
      C: "I visited my cousin tomorrow.",
      D: "I visiting my cousin tomorrow.",
    },
    correctAnswer: "A",
    explanation: "The future tense uses 'will' + base verb: 'I will visit'.",
  },
  {
    id: 425,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'The children are playing football.'",
    options: {
      A: "Watoto wanacheza mpira wa miguu.",
      B: "Watoto wanakula mpira wa miguu.",
      C: "Watoto wanatengeneza mpira wa miguu.",
      D: "Watoto walicheza mpira wa miguu.",
    },
    correctAnswer: "A",
    explanation:
      "'Watoto wanacheza mpira wa miguu' is the present continuous translation of the sentence.",
  },
  {
    id: 426,
    subject: "Science & Technology",
    question: "Which force pulls objects toward the Earth's centre?",
    options: {
      A: "Magnetism",
      B: "Gravity",
      C: "Friction",
      D: "Electricity",
    },
    correctAnswer: "B",
    explanation:
      "Gravity is the force of attraction that pulls objects toward Earth's centre.",
  },
  {
    id: 427,
    subject: "Social Studies",
    question: "Which is a peaceful way to show disagreement in a community?",
    options: {
      A: "Dialogue and peaceful protest",
      B: "Destroying property",
      C: "Physical fights",
      D: "Spreading false rumours intentionally",
    },
    correctAnswer: "A",
    explanation:
      "Dialogue and peaceful protest allow citizens to voice concerns without violence, supporting constructive change.",
  },
  {
    id: 428,
    subject: "CRE",
    question:
      "Which act did Jesus say was the greatest commandment alongside loving God?",
    options: {
      A: "Hoarding wealth",
      B: "Loving your neighbour as yourself",
      C: "Only following rituals",
      D: "Avoiding people",
    },
    correctAnswer: "B",
    explanation:
      "Jesus taught that loving others as oneself is the second greatest commandment after loving God.",
  },
  {
    id: 429,
    subject: "Agriculture",
    question:
      "Which agricultural product is obtained by tapping the sap of certain trees?",
    options: {
      A: "Honey",
      B: "Latex (rubber)",
      C: "Wool",
      D: "Corn",
    },
    correctAnswer: "B",
    explanation:
      "Latex is collected by tapping rubber trees; honey is from bees, wool from sheep.",
  },
  {
    id: 430,
    subject: "Music",
    question:
      "Which term describes singing or playing in one voice or line together?",
    options: {
      A: "Polyphony",
      B: "Unison",
      C: "Harmony",
      D: "Canon",
    },
    correctAnswer: "B",
    explanation:
      "Unison means multiple performers sing or play the same melody together at the same pitch.",
  },
  {
    id: 431,
    subject: "Home Science",
    question: "Which practice keeps kitchen towels hygienic?",
    options: {
      A: "Washing them frequently and allowing to dry",
      B: "Using the same towel for weeks",
      C: "Keeping them damp",
      D: "Sharing towels without washing",
    },
    correctAnswer: "A",
    explanation:
      "Regular washing and drying prevent bacteria build-up and maintain kitchen hygiene.",
  },
  {
    id: 432,
    subject: "Physical & Health Education",
    question:
      "Which component of fitness is improved by jumping and hopping activities?",
    options: {
      A: "Flexibility only",
      B: "Cardiovascular endurance and leg power",
      C: "None",
      D: "Typing speed",
    },
    correctAnswer: "B",
    explanation:
      "Jumping and hopping challenge heart and lungs while building leg muscle power and coordination.",
  },
  {
    id: 433,
    subject: "ICT/Computer Studies",
    question:
      "Which protocol is used to view web pages on the internet (seen at start of web addresses)?",
    options: {
      A: "HTTP or HTTPS",
      B: "FTP only",
      C: "SMTP",
      D: "POP3",
    },
    correctAnswer: "A",
    explanation:
      "HTTP/HTTPS are protocols used to access web pages; HTTPS is the secure version.",
  },
  {
    id: 434,
    subject: "Mathematics",
    question:
      "Which is the sum of the interior angles of a triangle in degrees?",
    options: {
      A: "180°",
      B: "360°",
      C: "90°",
      D: "270°",
    },
    correctAnswer: "A",
    explanation:
      "The three interior angles of any triangle add up to 180 degrees.",
  },
  {
    id: 435,
    subject: "English",
    question:
      "Which word is an adjective describing colour in 'The bright kite flew high.'?",
    options: {
      A: "The",
      B: "bright",
      C: "kite",
      D: "flew",
    },
    correctAnswer: "B",
    explanation:
      "'Bright' modifies the noun 'kite' by describing its appearance, so it is an adjective.",
  },
  {
    id: 436,
    subject: "Kiswahili",
    question: "Chagua neno sahihi: 'Alinisaidia ___ kazi.'",
    options: {
      A: "kutatua",
      B: "kutembea",
      C: "kulala",
      D: "kunywa",
    },
    correctAnswer: "A",
    explanation:
      "'Alinisaidia kutatua kazi' means 'He helped me to solve the task'; 'kutatua' fits help with solving.",
  },
  {
    id: 437,
    subject: "Science & Technology",
    question: "Which material is commonly used to insulate electrical wires?",
    options: {
      A: "Rubber or plastic",
      B: "Copper",
      C: "Steel",
      D: "Glass",
    },
    correctAnswer: "A",
    explanation:
      "Rubber or plastic coverings prevent electric shocks by insulating conductive metal wires inside.",
  },
  {
    id: 438,
    subject: "Social Studies",
    question: "Which is an example of a civic responsibility for citizens?",
    options: {
      A: "Voting in elections",
      B: "Illegally dumping waste",
      C: "Avoiding taxes unlawfully",
      D: "Stealing public property",
    },
    correctAnswer: "A",
    explanation:
      "Voting is a civic duty allowing citizens to participate in democratic decision-making.",
  },
  {
    id: 439,
    subject: "CRE",
    question:
      "Which action is an example of mercy taught in religious teachings?",
    options: {
      A: "Helping someone who is poor",
      B: "Demanding revenge always",
      C: "Ignoring the needy",
      D: "Punishing the innocent",
    },
    correctAnswer: "A",
    explanation:
      "Mercy involves kindness and aid toward those in need, a value taught in many religious traditions.",
  },
  {
    id: 440,
    subject: "Agriculture",
    question:
      "Which practice reduces the spread of plant diseases between crops?",
    options: {
      A: "Cleaning tools and using disease-free seeds",
      B: "Using dirty tools on all plants",
      C: "Planting infected seedlings",
      D: "Ignoring crop symptoms",
    },
    correctAnswer: "A",
    explanation:
      "Sanitising tools and selecting healthy seeds lower the risk of transmitting plant pathogens.",
  },
  {
    id: 441,
    subject: "Music",
    question:
      "Which scale has seven different notes before repeating the octave?",
    options: {
      A: "Chromatic scale",
      B: "Pentatonic scale",
      C: "Heptatonic (major/minor) scale",
      D: "Single note scale",
    },
    correctAnswer: "C",
    explanation:
      "Major and minor scales are heptatonic, containing seven distinct scale degrees before the octave repeats.",
  },
  {
    id: 442,
    subject: "Home Science",
    question:
      "Which household item can be used to check that food is cooked thoroughly (meat)?",
    options: {
      A: "Food thermometer",
      B: "Ruler",
      C: "Pencil",
      D: "Spoon only",
    },
    correctAnswer: "A",
    explanation:
      "A food thermometer measures internal temperature to ensure meat reaches a safe cooking temperature.",
  },
  {
    id: 443,
    subject: "Physical & Health Education",
    question: "Which activity improves hand-eye coordination for children?",
    options: {
      A: "Throwing and catching a ball",
      B: "Only reading books",
      C: "Sleeping more",
      D: "Watching screens passively",
    },
    correctAnswer: "A",
    explanation:
      "Throwing and catching practice aligns visual input with hand movements, developing coordination skills.",
  },
  {
    id: 444,
    subject: "ICT/Computer Studies",
    question:
      "Which tool helps check spelling as you type in many text editors?",
    options: {
      A: "Spell-check feature",
      B: "Calculator",
      C: "Scanner",
      D: "Camera",
    },
    correctAnswer: "A",
    explanation:
      "Spell-check automatically highlights possible misspellings and suggests corrections while typing.",
  },
  {
    id: 445,
    subject: "Mathematics",
    question: "Which operation gives the remainder when 17 is divided by 5?",
    options: {
      A: "0",
      B: "2",
      C: "3",
      D: "5",
    },
    correctAnswer: "B",
    explanation: "17 ÷ 5 = 3 remainder 2, so the remainder is 2.",
  },
  {
    id: 446,
    subject: "English",
    question: "Choose the plural form of 'child'.",
    options: {
      A: "Childs",
      B: "Children",
      C: "Childes",
      D: "Child",
    },
    correctAnswer: "B",
    explanation: "The irregular plural of 'child' is 'children'.",
  },
  {
    id: 447,
    subject: "Kiswahili",
    question: "Chagua tafsiri: 'We cooked dinner.'",
    options: {
      A: "Tulipika chakula cha jioni.",
      B: "Tuna pika chakula cha jioni.",
      C: "Tutapika chakula cha jioni.",
      D: "Walipika chakula cha jioni.",
    },
    correctAnswer: "A",
    explanation:
      "'Tulipika' indicates past tense: 'We cooked dinner' = 'Tulipika chakula cha jioni.'",
  },
  {
    id: 448,
    subject: "Science & Technology",
    question:
      "Which layer of the Earth is liquid and lies under the crust and mantle? (basic simplified view)",
    options: {
      A: "Inner core",
      B: "Outer core",
      C: "Crust",
      D: "Atmosphere",
    },
    correctAnswer: "B",
    explanation:
      "The Earth's outer core is a liquid layer beneath the mantle; the inner core is solid under high pressure.",
  },
  {
    id: 449,
    subject: "Social Studies",
    question: "Which leader is typically head of a city government?",
    options: {
      A: "Mayor",
      B: "Prime minister",
      C: "Monarch",
      D: "Chief justice",
    },
    correctAnswer: "A",
    explanation:
      "Mayors lead municipal governments and oversee city services and administration.",
  },
  {
    id: 450,
    subject: "CRE",
    question:
      "Which king asked for wisdom and became famous for wise judgments in the Bible?",
    options: {
      A: "Solomon",
      B: "Herod",
      C: "Nabal",
      D: "Nebuchadnezzar",
    },
    correctAnswer: "A",
    explanation:
      "King Solomon asked God for wisdom and is known for his wise decisions in biblical accounts.",
  },
  {
    id: 451,
    subject: "Agriculture",
    question:
      "Which practice helps control soil erosion by planting rows across the slope?",
    options: {
      A: "Contour farming",
      B: "Planting downhill rows",
      C: "Clear cutting",
      D: "Monocropping uphill",
    },
    correctAnswer: "A",
    explanation:
      "Contour farming follows slope contours to slow water runoff and reduce soil erosion.",
  },
  {
    id: 452,
    subject: "Music",
    question:
      "Which clef places middle C on the first ledger line below the staff?",
    options: {
      A: "Treble clef",
      B: "Bass clef",
      C: "Alto clef",
      D: "Soprano clef",
    },
    correctAnswer: "B",
    explanation:
      "In bass clef, middle C appears on the first ledger line above the staff, while in treble it's below; question refers to bass context.",
  },
  {
    id: 453,
    subject: "Home Science",
    question: "Which food storage practice helps prevent freezer burn?",
    options: {
      A: "Using airtight freezer bags and removing air",
      B: "Leaving food uncovered in the freezer",
      C: "Storing food in paper only",
      D: "Putting hot food directly in the freezer without cooling",
    },
    correctAnswer: "A",
    explanation:
      "Removing air and using airtight packaging prevents moisture loss and freezer burn on stored food.",
  },
  {
    id: 454,
    subject: "Physical & Health Education",
    question: "Which is an important rule to follow when playing team sports?",
    options: {
      A: "Respect teammates and opponents",
      B: "Cheat to win",
      C: "Ignore referee decisions always",
      D: "Only play when alone",
    },
    correctAnswer: "A",
    explanation:
      "Respect and fair play promote safety, teamwork and enjoyment in sports.",
  },
  {
    id: 455,
    subject: "ICT/Computer Studies",
    question: "Which device displays visual output from a computer?",
    options: {
      A: "Monitor",
      B: "Keyboard",
      C: "Mouse",
      D: "Printer",
    },
    correctAnswer: "A",
    explanation:
      "A monitor shows images and text generated by the computer and is an output device.",
  },
  {
    id: 456,
    subject: "Mathematics",
    question:
      "Which is the same as 6 × (2 + 3) using the distributive property?",
    options: {
      A: "6 × 2 + 6 × 3",
      B: "6 × 2 − 6 × 3",
      C: "6 + 2 × 3",
      D: "6 × 5 − 6",
    },
    correctAnswer: "A",
    explanation: "Distributive property: 6 × (2 + 3) = 6×2 + 6×3.",
  },
  {
    id: 457,
    subject: "English",
    question: "Which pronoun replaces 'the boy and I' as the subject?",
    options: {
      A: "They",
      B: "We",
      C: "I",
      D: "Him",
    },
    correctAnswer: "B",
    explanation:
      "'We' is the subject pronoun that includes the speaker and at least one other person.",
  },
  {
    id: 458,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'She is older than me.'",
    options: {
      A: "Yeye ni mdogo kuliko mimi.",
      B: "Yeye ni mkubwa kuliko mimi.",
      C: "Yeye ni sawa nami.",
      D: "Yeye ni mtoto wangu.",
    },
    correctAnswer: "B",
    explanation:
      "'Yeye ni mkubwa kuliko mimi' correctly expresses 'She is older than me.'",
  },
  {
    id: 459,
    subject: "Science & Technology",
    question:
      "Which part of a microscope magnifies the specimen first when viewing?",
    options: {
      A: "Objective lens",
      B: "Stage",
      C: "Base",
      D: "Light switch",
    },
    correctAnswer: "A",
    explanation:
      "Objective lenses (usually multiple) provide the initial magnification before the eyepiece further enlarges the image.",
  },
  {
    id: 460,
    subject: "Social Studies",
    question:
      "Which role do community elders often play in traditional societies?",
    options: {
      A: "Advisors and conflict mediators",
      B: "Only building roads",
      C: "Printing money",
      D: "Operating hospitals",
    },
    correctAnswer: "A",
    explanation:
      "Elders commonly provide wisdom, advice and help settle disputes using community customs.",
  },
  {
    id: 461,
    subject: "CRE",
    question:
      "Which miracle story involves a prophet being taken up to heaven in a whirlwind accompanied by a chariot of fire?",
    options: {
      A: "Elijah",
      B: "Moses",
      C: "Jonah",
      D: "Peter",
    },
    correctAnswer: "A",
    explanation:
      "Elijah was taken up to heaven in a whirlwind with a chariot of fire according to the Old Testament.",
  },
  {
    id: 462,
    subject: "Agriculture",
    question:
      "Which farm animal is commonly used to plough fields in small-scale farming in many areas?",
    options: {
      A: "Cow or oxen",
      B: "Cat",
      C: "Chicken",
      D: "Rabbit",
    },
    correctAnswer: "A",
    explanation:
      "Oxen or cows are traditionally used to pull ploughs and prepare land in many smallholder farms.",
  },
  {
    id: 463,
    subject: "Music",
    question:
      "Which term describes a short, accented note followed by a longer one in rhythm patterns?",
    options: {
      A: "Syncopation",
      B: "Legato",
      C: "Monophony",
      D: "Canon",
    },
    correctAnswer: "A",
    explanation:
      "Syncopation places emphasis off the main beat, often creating short-long rhythmic accents.",
  },
  {
    id: 464,
    subject: "Home Science",
    question:
      "Which storage place is best for dry goods like flour to keep them fresh?",
    options: {
      A: "Airtight container in a cool, dry place",
      B: "Next to the sink always wet",
      C: "On the floor in a damp corner",
      D: "Left open on the table",
    },
    correctAnswer: "A",
    explanation:
      "Airtight containers in cool, dry places prevent moisture and pest infestation in dry goods.",
  },
  {
    id: 465,
    subject: "Physical & Health Education",
    question: "Which activity helps maintain healthy lungs?",
    options: {
      A: "Regular aerobic exercise like brisk walking",
      B: "Smoking cigarettes",
      C: "Staying indoors without activity",
      D: "Breathing polluted air intentionally",
    },
    correctAnswer: "A",
    explanation:
      "Aerobic activities increase lung capacity and strengthen respiratory function.",
  },
  {
    id: 466,
    subject: "ICT/Computer Studies",
    question:
      "Which device converts typed characters into digital signals the computer can read?",
    options: {
      A: "Keyboard",
      B: "Monitor",
      C: "Speaker",
      D: "Mouse pad",
    },
    correctAnswer: "A",
    explanation:
      "Keyboards are input devices that send keystroke signals to the computer for processing.",
  },
  {
    id: 467,
    subject: "Mathematics",
    question: "Which is the reciprocal of 4/5?",
    options: {
      A: "4/5",
      B: "5/4",
      C: "1/4",
      D: "5/1",
    },
    correctAnswer: "B",
    explanation:
      "The reciprocal of a fraction is obtained by swapping numerator and denominator: (4/5)⁻¹ = 5/4.",
  },
  {
    id: 468,
    subject: "English",
    question: "Which punctuation mark ends a question?",
    options: {
      A: "Exclamation mark",
      B: "Comma",
      C: "Question mark",
      D: "Semicolon",
    },
    correctAnswer: "C",
    explanation:
      "A question mark (?) is used to close interrogative sentences.",
  },
  {
    id: 469,
    subject: "Kiswahili",
    question: "Chagua neno sahihi: 'Ninajifunza lugha ___ shule.'",
    options: {
      A: "katika",
      B: "kwa",
      C: "sana",
      D: "moja",
    },
    correctAnswer: "A",
    explanation:
      "'Ninajifunza lugha katika shule' uses 'katika' to indicate location (in the school).",
  },
  {
    id: 470,
    subject: "Science & Technology",
    question: "Which device measures electric current in a circuit?",
    options: {
      A: "Voltmeter",
      B: "Ammeter",
      C: "Thermometer",
      D: "Ruler",
    },
    correctAnswer: "B",
    explanation:
      "An ammeter is used to measure the flow of electric current in amperes.",
  },
  {
    id: 471,
    subject: "Social Studies",
    question:
      "Which public holiday commonly celebrates workers and labour rights in many countries?",
    options: {
      A: "International Workers' Day (Labour Day)",
      B: "Valentine's Day",
      C: "April Fools' Day",
      D: "Halloween",
    },
    correctAnswer: "A",
    explanation:
      "Labour Day (May Day) honours workers and their contributions and is observed in many nations.",
  },
  {
    id: 472,
    subject: "CRE",
    question:
      "Which action did Joseph (in the New Testament) show towards his brothers when he revealed himself in Egypt? (different from earlier Joseph question)",
    options: {
      A: "He punished them publicly",
      B: "He forgave them and provided for them",
      C: "He banished them",
      D: "He ignored them",
    },
    correctAnswer: "B",
    explanation:
      "Joseph forgave his brothers for past wrongs and ensured their survival during famine, demonstrating mercy.",
  },
  {
    id: 473,
    subject: "Agriculture",
    question:
      "Which crop is harvested for its edible underground stem called a tuber?",
    options: {
      A: "Potato",
      B: "Wheat",
      C: "Apple",
      D: "Sorghum",
    },
    correctAnswer: "A",
    explanation:
      "Potatoes are tuber crops; tubers are swollen underground stems used as food.",
  },
  {
    id: 474,
    subject: "Music",
    question:
      "Which musical texture features a single melodic line without harmony?",
    options: {
      A: "Polyphony",
      B: "Monophony",
      C: "Homophony",
      D: "Harmony",
    },
    correctAnswer: "B",
    explanation:
      "Monophony is a single unaccompanied melodic line, such as a solo singer without instruments.",
  },
  {
    id: 475,
    subject: "Home Science",
    question:
      "Which practice reduces the chance of burns when boiling liquids?",
    options: {
      A: "Placing pot handles inward and supervising cooking",
      B: "Leaving pot handles outward near edges",
      C: "Letting children play by the stove",
      D: "Carrying hot pots without protection",
    },
    correctAnswer: "A",
    explanation:
      "Turning handles inward and watching boiling pots reduces accidental tipping and scalding injuries.",
  },
  {
    id: 476,
    subject: "Physical & Health Education",
    question: "Which food is a good source of iron to help prevent anaemia?",
    options: {
      A: "Spinach and red meat",
      B: "Candy",
      C: "Soft drinks",
      D: "Table sugar",
    },
    correctAnswer: "A",
    explanation:
      "Iron-rich foods like spinach and red meat support healthy blood production and prevent iron-deficiency anaemia.",
  },
  {
    id: 477,
    subject: "ICT/Computer Studies",
    question: "Which device is used to capture photos for a computer or phone?",
    options: {
      A: "Camera",
      B: "Mouse",
      C: "Speakers",
      D: "Printer",
    },
    correctAnswer: "A",
    explanation:
      "Cameras (built-in or external) capture images which can be transferred to computers or phones.",
  },
  {
    id: 478,
    subject: "Mathematics",
    question: "Which polygon has six sides?",
    options: {
      A: "Pentagon",
      B: "Hexagon",
      C: "Heptagon",
      D: "Quadrilateral",
    },
    correctAnswer: "B",
    explanation: "A hexagon is a six-sided polygon.",
  },
  {
    id: 479,
    subject: "English",
    question: "Which word is an adverb in: 'He quickly finished his work.'?",
    options: {
      A: "He",
      B: "quickly",
      C: "finished",
      D: "work",
    },
    correctAnswer: "B",
    explanation:
      "'Quickly' modifies the verb 'finished' by describing how the action was done, so it is an adverb.",
  },
  {
    id: 480,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'Open the book to page five.'",
    options: {
      A: "Fungua kitabu ukurasa wa tano.",
      B: "Funga kitabu ukurasa wa tano.",
      C: "Fungua dirisha ukurasa wa tano.",
      D: "Choma kitabu ukurasa wa tano.",
    },
    correctAnswer: "A",
    explanation:
      "'Fungua kitabu ukurasa wa tano' correctly instructs to open the book to page five.",
  },
  {
    id: 481,
    subject: "Science & Technology",
    question: "Which human sense detects sound vibrations?",
    options: {
      A: "Taste",
      B: "Hearing (ears)",
      C: "Smell",
      D: "Touch",
    },
    correctAnswer: "B",
    explanation: "Ears detect sound vibrations and allow us to hear.",
  },
  {
    id: 482,
    subject: "Social Studies",
    question:
      "Which is a benefit of saving money in a community savings group?",
    options: {
      A: "Access to loans and shared resources",
      B: "Spending all savings immediately",
      C: "Hoarding money at home",
      D: "Avoiding payments",
    },
    correctAnswer: "A",
    explanation:
      "Community savings groups provide members with pooled funds, loans and financial support when needed.",
  },
  {
    id: 483,
    subject: "CRE",
    question:
      "Which New Testament book records the early Christian church and Pentecost events?",
    options: {
      A: "Acts of the Apostles",
      B: "Genesis",
      C: "Proverbs",
      D: "Psalms",
    },
    correctAnswer: "A",
    explanation:
      "The Book of Acts describes the early church history, including Pentecost and missionary journeys.",
  },
  {
    id: 484,
    subject: "Agriculture",
    question:
      "Which practice helps reduce the need for chemical pesticides by encouraging beneficial insects?",
    options: {
      A: "Growing flowers and diverse plants to attract predators",
      B: "Eliminating all insects",
      C: "Spraying chemicals daily",
      D: "Removing all vegetation",
    },
    correctAnswer: "A",
    explanation:
      "Planting diverse crops and flowers attracts natural predators that control pests biologically.",
  },
  {
    id: 485,
    subject: "Music",
    question: "Which notation indicates to play very softly?",
    options: {
      A: "ff (fortissimo)",
      B: "pp (pianissimo)",
      C: "mf (mezzo-forte)",
      D: "f (forte)",
    },
    correctAnswer: "B",
    explanation: "Pianissimo (pp) instructs performers to play very softly.",
  },
  {
    id: 486,
    subject: "Home Science",
    question: "Which cleaning method removes grease from hands after cooking?",
    options: {
      A: "Washing with soap and warm water",
      B: "Rinsing with cold water only",
      C: "Wiping on clothes",
      D: "Using sand",
    },
    correctAnswer: "A",
    explanation:
      "Soap and warm water dissolve and remove grease more effectively than cold water alone.",
  },
  {
    id: 487,
    subject: "Physical & Health Education",
    question: "Which is a sign of good hydration in children?",
    options: {
      A: "Dark yellow urine and dry mouth",
      B: "Frequent clear urine and alertness",
      C: "Dizziness and confusion",
      D: "No thirst but tiredness",
    },
    correctAnswer: "B",
    explanation:
      "Clear, frequent urine and normal energy levels indicate adequate hydration.",
  },
  {
    id: 488,
    subject: "ICT/Computer Studies",
    question: "Which of these is a web search engine?",
    options: {
      A: "Google",
      B: "Word",
      C: "Excel",
      D: "PowerPoint",
    },
    correctAnswer: "A",
    explanation:
      "Google is a search engine used to find information on the internet; Word/Excel/PowerPoint are office apps.",
  },
  {
    id: 489,
    subject: "Mathematics",
    question: "What is the half of 90?",
    options: {
      A: "45",
      B: "40",
      C: "50",
      D: "30",
    },
    correctAnswer: "A",
    explanation: "Half of 90 is 90 ÷ 2 = 45.",
  },
  {
    id: 490,
    subject: "English",
    question: "Which word is an interjection expressing surprise?",
    options: {
      A: "Wow!",
      B: "Because",
      C: "During",
      D: "Although",
    },
    correctAnswer: "A",
    explanation:
      "'Wow!' is an interjection used to express surprise or amazement.",
  },
  {
    id: 491,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'Come here quickly.'",
    options: {
      A: "Nenda pale polepole.",
      B: "Njoo hapa haraka.",
      C: "Kaa pale tena.",
      D: "Njoo kesho tu.",
    },
    correctAnswer: "B",
    explanation:
      "'Njoo hapa haraka' literally means 'Come here quickly' and uses appropriate imperative and adverb.",
  },
  {
    id: 492,
    subject: "Science & Technology",
    question: "Which is a renewable source of energy?",
    options: {
      A: "Coal",
      B: "Solar power",
      C: "Oil",
      D: "Natural gas",
    },
    correctAnswer: "B",
    explanation:
      "Solar energy is renewable because sunlight is naturally replenished and sustainable over time.",
  },
  {
    id: 493,
    subject: "Social Studies",
    question: "Which practice helps maintain a clean public environment?",
    options: {
      A: "Proper disposal of rubbish in designated bins",
      B: "Throwing waste into rivers",
      C: "Dumping litter on streets",
      D: "Burning waste in public areas without control",
    },
    correctAnswer: "A",
    explanation:
      "Using bins and proper waste management prevents pollution and protects public health and the environment.",
  },
  {
    id: 494,
    subject: "CRE",
    question:
      "Which action did the Good Samaritan take for the injured man in the parable?",
    options: {
      A: "He passed by and ignored him",
      B: "He cared for his wounds and paid for his lodging",
      C: "He punished him further",
      D: "He stole his belongings",
    },
    correctAnswer: "B",
    explanation:
      "The Good Samaritan treated the man's wounds and arranged/payed for his care, showing compassion.",
  },
  {
    id: 495,
    subject: "Agriculture",
    question: "Which product is obtained by processing milk on the farm?",
    options: {
      A: "Flour",
      B: "Butter and cheese",
      C: "Honey",
      D: "Cotton",
    },
    correctAnswer: "B",
    explanation:
      "Milk can be processed into butter, cheese and other dairy products on or near the farm.",
  },
  {
    id: 496,
    subject: "Music",
    question: "Which term indicates the main melody or tune of a song?",
    options: {
      A: "Harmony",
      B: "Melody",
      C: "Rhythm",
      D: "Dynamics",
    },
    correctAnswer: "B",
    explanation:
      "Melody is the sequence of notes that forms the main musical idea or tune.",
  },
  {
    id: 497,
    subject: "Home Science",
    question: "Which habit promotes good personal hygiene every day?",
    options: {
      A: "Regular bathing and handwashing",
      B: "Never washing hands",
      C: "Sharing toothbrushes",
      D: "Using dirty towels repeatedly",
    },
    correctAnswer: "A",
    explanation:
      "Daily bathing and handwashing remove germs and maintain cleanliness and health.",
  },
  {
    id: 498,
    subject: "Physical & Health Education",
    question: "Which measure reduces the risk of injury in contact sports?",
    options: {
      A: "Wearing appropriate protective gear",
      B: "Playing without rules",
      C: "Ignoring safety instructions",
      D: "Using broken equipment",
    },
    correctAnswer: "A",
    explanation:
      "Helmets, pads and proper equipment protect players from impact and lower injury risk.",
  },
  {
    id: 499,
    subject: "ICT/Computer Studies",
    question: "Which website feature helps find pages by entering keywords?",
    options: {
      A: "Search box",
      B: "Footer only",
      C: "Logo image",
      D: "Favicon",
    },
    correctAnswer: "A",
    explanation:
      "A search box accepts keywords and returns relevant pages, making content easier to find.",
  },
  {
    id: 500,
    subject: "Mathematics",
    question:
      "A rectangle has length 12 cm and width 5 cm. What is its perimeter?",
    options: {
      A: "34 cm",
      B: "60 cm",
      C: "30 cm",
      D: "17 cm",
    },
    correctAnswer: "A",
    explanation:
      "Perimeter = 2 × (length + width) = 2 × (12 + 5) = 2 × 17 = 34 cm.",
  },
  {
    id: 501,
    subject: "English",
    question:
      "Which word is a preposition in the sentence:  'The book is on the table.'?",
    options: {
      A: "book",
      B: "on",
      C: "table",
      D: "is",
    },
    correctAnswer: "B",
    explanation:
      "'On' shows the relationship between the book and the table, functioning as a preposition.",
  },
  {
    id: 502,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'I like this school very much.'",
    options: {
      A: "Ninapenda shule hii sana.",
      B: "Sipendi shule hii sana.",
      C: "Ninapenda shule nyingine sana.",
      D: "Ninapenda mwalimu sana.",
    },
    correctAnswer: "A",
    explanation:
      "'Ninapenda shule hii sana' correctly means 'I like this school very much.'",
  },
  {
    id: 503,
    subject: "Science & Technology",
    question:
      "Which process turns ice directly into water vapour without becoming liquid?",
    options: {
      A: "Melting",
      B: "Evaporation",
      C: "Sublimation",
      D: "Condensation",
    },
    correctAnswer: "C",
    explanation:
      "Sublimation is the process where a solid changes directly to a gas without passing through the liquid state.",
  },
  {
    id: 504,
    subject: "Social Studies",
    question:
      "Which document outlines a country's basic laws and principles of government?",
    options: {
      A: "Constitution",
      B: "Recipe book",
      C: "History book",
      D: "Shopping list",
    },
    correctAnswer: "A",
    explanation:
      "A constitution is the foundational legal document that establishes government structure and citizen rights.",
  },
  {
    id: 505,
    subject: "CRE",
    question:
      "Which Christian festival celebrates Jesus' entry into Jerusalem on a donkey?",
    options: {
      A: "Palm Sunday",
      B: "Good Friday",
      C: "Maundy Thursday",
      D: "Ascension Day",
    },
    correctAnswer: "A",
    explanation:
      "Palm Sunday commemorates Jesus' entry into Jerusalem with crowds waving palm branches.",
  },
  {
    id: 506,
    subject: "Agriculture",
    question: "Which tool is used to remove weeds by hand from the soil?",
    options: {
      A: "Weeding fork or hand hoe",
      B: "Combine harvester",
      C: "Threshing machine",
      D: "Grain cleaner",
    },
    correctAnswer: "A",
    explanation:
      "A weeding fork or hand hoe loosens soil around weeds, allowing them to be pulled out by hand.",
  },
  {
    id: 507,
    subject: "Mathematics",
    question: "What is 8 cubed (8³)?",
    options: {
      A: "24",
      B: "64",
      C: "512",
      D: "80",
    },
    correctAnswer: "C",
    explanation: "8 cubed means 8 × 8 × 8 = 512.",
  },
  {
    id: 508,
    subject: "Music",
    question: "Which symbol indicates a pause at the end of a phrase?",
    options: {
      A: "Fermata (U shape)",
      B: "Sharp sign",
      C: "Quarter rest",
      D: "Clef",
    },
    correctAnswer: "A",
    explanation:
      "A fermata (𝄐) symbol over a note or rest indicates to hold it longer than its normal value.",
  },
  {
    id: 509,
    subject: "Home Science",
    question:
      "Which practice helps prevent food poisoning when preparing salads?",
    options: {
      A: "Washing vegetables and hands before preparation",
      B: "Using unwashed vegetables",
      C: "Letting prepared salad sit at room temperature for hours",
      D: "Mixing with raw meat residue",
    },
    correctAnswer: "A",
    explanation:
      "Washing vegetables and practicing good hand hygiene reduce pathogenic microorganisms on fresh foods.",
  },
  {
    id: 510,
    subject: "Physical & Health Education",
    question:
      "Which exercise strengthens core muscles in the abdomen and back?",
    options: {
      A: "Planks",
      B: "Only sleeping",
      C: "Watching TV",
      D: "Lying still",
    },
    correctAnswer: "A",
    explanation:
      "Plank exercises engage abdominal and back muscles, improving core strength and stability.",
  },
  {
    id: 511,
    subject: "ICT/Computer Studies",
    question:
      "Which action deletes selected text without copying it to the clipboard?",
    options: {
      A: "Pressing Delete or Backspace key",
      B: "Ctrl + C",
      C: "Ctrl + V",
      D: "Ctrl + P",
    },
    correctAnswer: "A",
    explanation:
      "The Delete or Backspace keys remove text; Ctrl+C copies, Ctrl+V pastes, Ctrl+P prints.",
  },
  {
    id: 512,
    subject: "Mathematics",
    question: "Which fraction is in simplest form? ",
    options: {
      A: "4/8",
      B: "6/9",
      C: "3/7",
      D: "2/6",
    },
    correctAnswer: "C",
    explanation:
      "3/7 cannot be reduced further; the others (4/8=1/2, 6/9=2/3, 2/6=1/3) can be simplified.",
  },
  {
    id: 513,
    subject: "English",
    question: "Which sentence is grammatically correct?",
    options: {
      A: "She don't like apples.",
      B: "She doesn't like apples.",
      C: "She doesn't likes apples.",
      D: "She don't likes apples.",
    },
    correctAnswer: "B",
    explanation:
      "'She doesn't like apples' uses the correct contracted form and verb agreement.",
  },
  {
    id: 514,
    subject: "Kiswahili",
    question: "Chagua sahihi:  'Tunapenda kucheza ___ mpira wa miguu.'",
    options: {
      A: "na",
      B: "sana",
      C: "kila siku",
      D: "pamoja",
    },
    correctAnswer: "D",
    explanation:
      "'Tunapenda kucheza pamoja mpira wa miguu' uses 'pamoja' to mean 'together' in playing football.",
  },
  {
    id: 515,
    subject: "Science & Technology",
    question: "Which is an example of a conductor of heat?",
    options: {
      A: "Plastic",
      B: "Wood",
      C: "Metal pot",
      D: "Rubber",
    },
    correctAnswer: "C",
    explanation:
      "Metals are good heat conductors; plastic, wood and rubber are insulators.",
  },
  {
    id: 516,
    subject: "Social Studies",
    question: "Which is an example of a human right that should be protected?",
    options: {
      A: "Right to education",
      B: "Right to steal",
      C: "Right to pollute",
      D: "Right to harm others",
    },
    correctAnswer: "A",
    explanation:
      "Education is a fundamental human right protected by international laws and constitutions.",
  },
  {
    id: 517,
    subject: "CRE",
    question:
      "Which beatitude teaches about those who hunger and thirst for righteousness?",
    options: {
      A: "Blessed are the peacemakers",
      B: "Blessed are those who hunger for righteousness",
      C: "Blessed are the merciful",
      D: "Blessed are the pure in heart",
    },
    correctAnswer: "B",
    explanation:
      "The Beatitude states:  'Blessed are those who hunger and thirst for righteousness.'",
  },
  {
    id: 518,
    subject: "Agriculture",
    question: "Which practice helps improve the drainage of waterlogged soil?",
    options: {
      A: "Installing drainage channels or raising beds",
      B: "Adding more water",
      C: "Compacting the soil",
      D: "Removing all vegetation",
    },
    correctAnswer: "A",
    explanation:
      "Drainage systems and raised beds allow excess water to move away, improving soil for plant growth.",
  },
  {
    id: 519,
    subject: "Music",
    question:
      "Which instrument produces the deepest sounds in a standard orchestra?",
    options: {
      A: "Flute",
      B: "Violin",
      C: "Double bass",
      D: "Trumpet",
    },
    correctAnswer: "C",
    explanation:
      "The double bass is the largest string instrument in the orchestra and produces the lowest pitches.",
  },
  {
    id: 520,
    subject: "Home Science",
    question: "Which ingredient helps preserve jams and prevents mould growth?",
    options: {
      A: "Sugar",
      B: "Water",
      C: "Salt",
      D: "Flour",
    },
    correctAnswer: "A",
    explanation:
      "High sugar concentration reduces water activity and inhibits bacterial and fungal growth in jams.",
  },
  {
    id: 521,
    subject: "Physical & Health Education",
    question: "Which mineral is essential for strong teeth enamel?",
    options: {
      A: "Fluorine",
      B: "Iron",
      C: "Potassium",
      D: "Sodium",
    },
    correctAnswer: "A",
    explanation:
      "Fluorine helps strengthen tooth enamel and prevent dental decay when used in toothpaste and water.",
  },
  {
    id: 522,
    subject: "ICT/Computer Studies",
    question:
      "Which folder typically stores downloaded files by default on many computers?",
    options: {
      A: "Downloads folder",
      B: "Recycling bin",
      C: "Desktop only",
      D: "System folder",
    },
    correctAnswer: "A",
    explanation:
      "Most browsers and devices default to saving downloads in a dedicated Downloads folder.",
  },
  {
    id: 523,
    subject: "Mathematics",
    question: "What is the lowest common multiple (LCM) of 4 and 6?",
    options: {
      A: "12",
      B: "10",
      C: "24",
      D: "8",
    },
    correctAnswer: "A",
    explanation:
      "Multiples of 4: 4,8,12...  Multiples of 6: 6,12...  The LCM is 12.",
  },
  {
    id: 524,
    subject: "English",
    question: "Which word is correctly spelled? ",
    options: {
      A: "Occassion",
      B: "Occation",
      C: "Occasion",
      D: "Ocasion",
    },
    correctAnswer: "C",
    explanation: "'Occasion' is the correct spelling with two C's and two S's.",
  },
  {
    id: 525,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'The teacher is teaching us mathematics.'",
    options: {
      A: "Mwalimu anafundisha sisi kihesabu.",
      B: "Mwalimu analala sisi kihesabu.",
      C: "Mwalimu anakula sisi kihesabu.",
      D: "Mwalimu anakuja kihesabu.",
    },
    correctAnswer: "A",
    explanation:
      "'Mwalimu anafundisha sisi kihesabu' correctly means 'The teacher is teaching us mathematics.'",
  },
  {
    id: 526,
    subject: "Science & Technology",
    question:
      "Which process allows plants to produce oxygen and food from sunlight?",
    options: {
      A: "Respiration",
      B: "Photosynthesis",
      C: "Fermentation",
      D: "Oxidation",
    },
    correctAnswer: "B",
    explanation:
      "Photosynthesis uses sunlight, water and carbon dioxide to make glucose and oxygen.",
  },
  {
    id: 527,
    subject: "Social Studies",
    question: "Which is an example of teamwork in a community?",
    options: {
      A: "Working together to build a school",
      B: "Working alone on all tasks",
      C: "Refusing to cooperate",
      D: "Competing against neighbours always",
    },
    correctAnswer: "A",
    explanation:
      "Community projects like building schools require people working together toward a common goal.",
  },
  {
    id: 528,
    subject: "CRE",
    question: "Which miracle involved Jesus healing a man born blind?",
    options: {
      A: "Healing the paralytic",
      B: "Healing the man born blind",
      C: "Raising Lazarus",
      D: "Calming the storm",
    },
    correctAnswer: "B",
    explanation:
      "Gospel accounts describe Jesus healing a man born blind, restoring his sight.",
  },
  {
    id: 529,
    subject: "Agriculture",
    question: "Which fertilizer type is made from plant or animal waste?",
    options: {
      A: "Organic fertilizer",
      B: "Chemical synthetic fertilizer",
      C: "Plastic granules",
      D: "Sand",
    },
    correctAnswer: "A",
    explanation:
      "Organic fertilizers come from compost, manure and plant residues, enriching soil naturally.",
  },
  {
    id: 530,
    subject: "Music",
    question: "Which term describes gradually getting slower in tempo?",
    options: {
      A: "Accelerando",
      B: "Ritardando",
      C: "Allegro",
      D: "Allegretto",
    },
    correctAnswer: "B",
    explanation:
      "Ritardando (rit.) instructs musicians to gradually slow down the tempo.",
  },
  {
    id: 531,
    subject: "Home Science",
    question: "Which cooking method retains the most nutrients in vegetables?",
    options: {
      A: "Steaming or stir-frying",
      B: "Boiling for long periods",
      C: "Microwaving until soft",
      D: "Prolonged frying",
    },
    correctAnswer: "A",
    explanation:
      "Steaming and quick stir-frying minimize nutrient loss compared to prolonged boiling.",
  },
  {
    id: 532,
    subject: "Physical & Health Education",
    question: "Which action helps reduce feelings of stress and anxiety?",
    options: {
      A: "Regular exercise and relaxation",
      B: "Isolation and worry",
      C: "Skipping sleep",
      D: "Avoiding friends",
    },
    correctAnswer: "A",
    explanation:
      "Physical activity and relaxation techniques like deep breathing reduce stress and promote mental wellbeing.",
  },
  {
    id: 533,
    subject: "ICT/Computer Studies",
    question: "Which shortcut undoes the last action in most software?",
    options: {
      A: "Ctrl + Z",
      B: "Ctrl + Y",
      C: "Ctrl + X",
      D: "Ctrl + A",
    },
    correctAnswer: "A",
    explanation:
      "Ctrl + Z (undo) reverses the last action; Ctrl + Y (redo) reverses the undo.",
  },
  {
    id: 534,
    subject: "Mathematics",
    question:
      "Which shape has all sides equal and all angles equal at 60 degrees?",
    options: {
      A: "Square",
      B: "Equilateral triangle",
      C: "Rectangle",
      D: "Isosceles triangle",
    },
    correctAnswer: "B",
    explanation:
      "An equilateral triangle has three equal sides and three 60-degree angles.",
  },
  {
    id: 535,
    subject: "English",
    question: "Which word is a noun:  'The quick rabbit ran away.'? ",
    options: {
      A: "quick",
      B: "ran",
      C: "rabbit",
      D: "away",
    },
    correctAnswer: "C",
    explanation:
      "'Rabbit' is a person, place or thing and functions as a noun.",
  },
  {
    id: 536,
    subject: "Kiswahili",
    question:
      "Chagua tafsiri:  'I will go to the market tomorrow to buy vegetables.'",
    options: {
      A: "Nitaenda sokoni kesho kununua mboga.",
      B: "Nilikuwa sokoni jana kununua mboga.",
      C: "Ninakwenda sokoni kesho kununua mboga.",
      D: "Walikuwa sokoni kununua mboga.",
    },
    correctAnswer: "A",
    explanation:
      "'Nitaenda sokoni kesho kununua mboga' uses future tense 'nita-' for 'I will go tomorrow.'",
  },
  {
    id: 537,
    subject: "Science & Technology",
    question: "Which type of energy is stored in a stretched spring?",
    options: {
      A: "Kinetic energy",
      B: "Potential energy",
      C: "Heat energy",
      D: "Sound energy",
    },
    correctAnswer: "B",
    explanation:
      "Potential energy is stored energy due to position; a stretched spring has elastic potential energy.",
  },
  {
    id: 538,
    subject: "Social Studies",
    question: "Which is a consequence of good communication in families?",
    options: {
      A: "Better understanding and reduced conflict",
      B: "More arguments",
      C: "Ignoring each other",
      D: "Lack of trust",
    },
    correctAnswer: "A",
    explanation:
      "Clear communication helps family members understand each other and resolve issues constructively.",
  },
  {
    id: 539,
    subject: "CRE",
    question:
      "Which parable teaches the value of helping others without expecting reward?",
    options: {
      A: "Parable of the Good Samaritan",
      B: "Parable of the Prodigal Son",
      C: "Parable of the Sower",
      D: "Parable of the Talents",
    },
    correctAnswer: "A",
    explanation:
      "The Good Samaritan helped a stranger in need; the point is helping with compassion, not for reward.",
  },
  {
    id: 540,
    subject: "Agriculture",
    question: "Which practice minimises water runoff on sloping land?",
    options: {
      A: "Terracing or bench ploughing",
      B: "Leaving soil bare",
      C: "Planting downslope only",
      D: "Removing all trees",
    },
    correctAnswer: "A",
    explanation:
      "Terracing and contour farming create level surfaces that slow water flow and reduce erosion.",
  },
  {
    id: 541,
    subject: "Music",
    question: "Which term describes a sudden change to a softer volume?",
    options: {
      A: "Crescendo",
      B: "Diminuendo",
      C: "Tremolo",
      D: "Vibrato",
    },
    correctAnswer: "B",
    explanation: "Diminuendo (dim.) indicates a gradual decrease in volume.",
  },
  {
    id: 542,
    subject: "Home Science",
    question: "Which method helps preserve leafy vegetables in the fridge?",
    options: {
      A: "Wrapping in damp paper and storing in crisper",
      B: "Leaving them uncovered",
      C: "Storing in warm areas",
      D: "Washing and leaving wet",
    },
    correctAnswer: "A",
    explanation:
      "Cool, slightly humid storage in a crisper drawer extends the freshness of leafy vegetables.",
  },
  {
    id: 543,
    subject: "Physical & Health Education",
    question: "Which is a sign of overtraining in athletes?",
    options: {
      A: "Persistent fatigue and decreased performance",
      B: "Increased energy",
      C: "Better sleep immediately",
      D: "No change in mood",
    },
    correctAnswer: "A",
    explanation:
      "Overtraining causes fatigue, hormonal imbalances and decreased athletic performance.",
  },
  {
    id: 544,
    subject: "ICT/Computer Studies",
    question:
      "Which button on a browser goes back to the previously visited page?",
    options: {
      A: "Forward button",
      B: "Back button",
      C: "Refresh button",
      D: "Home button",
    },
    correctAnswer: "B",
    explanation:
      "The back arrow button returns to the previous webpage; the forward button moves ahead.",
  },
  {
    id: 545,
    subject: "Mathematics",
    question: "What is the result of 72 ÷ 8?",
    options: {
      A: "8",
      B: "9",
      C: "10",
      D: "12",
    },
    correctAnswer: "B",
    explanation: "Divide 72 by 8: 72 ÷ 8 = 9.",
  },
  {
    id: 546,
    subject: "English",
    question: "Which sentence has correct punctuation?",
    options: {
      A: "What is your name?",
      B: "What is your name.",
      C: "What is your name! ",
      D: "What is your name",
    },
    correctAnswer: "A",
    explanation:
      "A question should end with a question mark; 'What is your name?' is correct.",
  },
  {
    id: 547,
    subject: "Kiswahili",
    question: "Chagua neno sahihi: 'Nilijifunza ___ mpya leo.'",
    options: {
      A: "ngano",
      B: "kitu",
      C: "kile",
      D: "yote",
    },
    correctAnswer: "B",
    explanation:
      "'Nilijifunza kitu mpya leo' means 'I learned something new today'; 'kitu' is the object noun.",
  },
  {
    id: 548,
    subject: "Science & Technology",
    question: "Which device measures air pressure?",
    options: {
      A: "Anemometer",
      B: "Barometer",
      C: "Hygrometer",
      D: "Thermometer",
    },
    correctAnswer: "B",
    explanation:
      "A barometer measures atmospheric pressure; anemometer measures wind, hygrometer measures humidity.",
  },
  {
    id: 549,
    subject: "Social Studies",
    question: "Which is a characteristic of a healthy community?",
    options: {
      A: "Good schools, healthcare and safe streets",
      B: "High crime only",
      C: "No schools",
      D: "Poor services",
    },
    correctAnswer: "A",
    explanation:
      "Healthy communities have quality education, healthcare access and safety, improving residents' wellbeing.",
  },
  {
    id: 550,
    subject: "CRE",
    question:
      "Which fruit tree in the Bible is associated with peace and olive oil?",
    options: {
      A: "Fig tree",
      B: "Olive tree",
      C: "Apple tree",
      D: "Pomegranate tree",
    },
    correctAnswer: "B",
    explanation:
      "The olive tree is mentioned throughout the Bible and symbolises peace; olive oil is an important product.",
  },
  {
    id: 551,
    subject: "Agriculture",
    question:
      "Which livestock benefit from having access to clean drinking water daily?",
    options: {
      A: "All livestock animals",
      B: "Only birds",
      C: "Only cattle",
      D: "None; they don't need water",
    },
    correctAnswer: "A",
    explanation:
      "All farm animals require clean water daily for proper body function and health.",
  },
  {
    id: 552,
    subject: "Music",
    question:
      "Which instrument family has instruments that vibrate to produce sound without being struck?",
    options: {
      A: "String instruments (plucked)",
      B: "Percussion",
      C: "Brass (blown)",
      D: "Wind instruments",
    },
    correctAnswer: "A",
    explanation:
      "String instruments like guitars produce sound from vibrating strings; these can be plucked or bowed.",
  },
  {
    id: 553,
    subject: "Home Science",
    question:
      "Which spice helps prevent bacterial growth in food and adds flavour?",
    options: {
      A: "Garlic and ginger",
      B: "Sugar",
      C: "Water",
      D: "Flour",
    },
    correctAnswer: "A",
    explanation:
      "Garlic and ginger have antimicrobial properties and enhance both flavour and food safety.",
  },
  {
    id: 554,
    subject: "Physical & Health Education",
    question: "Which posture helps prevent backache when sitting at a desk?",
    options: {
      A: "Straight back with shoulders relaxed",
      B: "Slouching forward",
      C: "Leaning back sharply",
      D: "Twisting the spine",
    },
    correctAnswer: "A",
    explanation:
      "Proper sitting posture with a straight back and relaxed shoulders reduces strain on the spine.",
  },
  {
    id: 555,
    subject: "ICT/Computer Studies",
    question:
      "Which feature allows multiple users to work on the same document online?",
    options: {
      A: "Cloud collaboration tools (e.g., Google Docs)",
      B: "Offline documents only",
      C: "USB drive sharing only",
      D: "Email attachment sharing",
    },
    correctAnswer: "A",
    explanation:
      "Cloud-based services enable real-time collaboration where multiple people edit documents simultaneously.",
  },
  {
    id: 556,
    subject: "Mathematics",
    question: "Which is 15% of 60?",
    options: {
      A: "6",
      B: "9",
      C: "12",
      D: "15",
    },
    correctAnswer: "B",
    explanation: "15% of 60 = 0.15 × 60 = 9.",
  },
  {
    id: 557,
    subject: "English",
    question:
      "Which word is an adverb in:  'She walked slowly through the garden.'?",
    options: {
      A: "walked",
      B: "slowly",
      C: "garden",
      D: "through",
    },
    correctAnswer: "B",
    explanation:
      "'Slowly' modifies the verb 'walked' by describing how the action was performed, so it is an adverb.",
  },
  {
    id: 558,
    subject: "Kiswahili",
    question:
      "Chagua tafsiri ya 'The students are studying hard for their exam.'",
    options: {
      A: "Wanafunzi wanasoma kwa bidii kwa ajili ya mtihani wao.",
      B: "Wanafunzi wanalala kwa bidii kwa ajili ya mtihani wao.",
      C: "Wanafunzi wanakula kwa bidii kwa ajili ya mtihani wao.",
      D: "Wanafunzi wanacheza kwa bidii kwa ajili ya mtihani wao.",
    },
    correctAnswer: "A",
    explanation:
      "'Wanasoma' means 'are studying'; the sentence correctly translates with all other elements appropriate.",
  },
  {
    id: 559,
    subject: "Science & Technology",
    question: "Which is the SI unit of force?",
    options: {
      A: "Kilogram",
      B: "Newton",
      C: "Joule",
      D: "Watt",
    },
    correctAnswer: "B",
    explanation:
      "The Newton (N) is the standard SI unit of force; kilogram measures mass, joule measures energy.",
  },
  {
    id: 560,
    subject: "Social Studies",
    question: "Which practice promotes gender equality in education?",
    options: {
      A: "Ensuring both boys and girls attend school equally",
      B: "Keeping girls home",
      C: "Only educating one gender",
      D: "Restricting girls' subjects",
    },
    correctAnswer: "A",
    explanation:
      "Gender equality in education means ensuring equal access and opportunity for all students regardless of sex.",
  },
  {
    id: 561,
    subject: "CRE",
    question:
      "Which verse is known as the 'Golden Rule' in Christian teaching?",
    options: {
      A: "'Thou shalt not steal'",
      B: "'Do unto others as you would have them do unto you'",
      C: "'Love your enemy'",
      D: "'Forgive and forget'",
    },
    correctAnswer: "B",
    explanation:
      "The Golden Rule teaches treating others the way you want to be treated, found in Matthew 7:12.",
  },
  {
    id: 562,
    subject: "Agriculture",
    question:
      "Which practice helps prevent pest population explosions on farms?",
    options: {
      A: "Rotating crops annually",
      B: "Continuous single-crop planting",
      C: "Removing all natural predators",
      D: "Using pesticides on every plant daily",
    },
    correctAnswer: "A",
    explanation:
      "Crop rotation breaks pest life cycles by removing their preferred host plants each season.",
  },
  {
    id: 563,
    subject: "Music",
    question: "Which octave is middle C located in on the piano?",
    options: {
      A: "Octave 1",
      B: "Octave 4",
      C: "Octave 8",
      D: "Octave 10",
    },
    correctAnswer: "B",
    explanation:
      "Middle C is typically designated as C4 in scientific pitch notation, in the middle of the piano.",
  },
  {
    id: 564,
    subject: "Home Science",
    question:
      "Which is the correct way to dispose of cooking oil from frying? ",
    options: {
      A: "Pouring it in a designated disposal container or solidifying it in newspaper",
      B: "Pouring it down the drain",
      C: "Dumping it in the garden",
      D: "Throwing it on the street",
    },
    correctAnswer: "A",
    explanation:
      "Proper disposal in containers or solid form prevents clogged pipes and environmental damage.",
  },
  {
    id: 565,
    subject: "Physical & Health Education",
    question: "Which activity helps develop balance in young children?",
    options: {
      A: "Walking on a beam or balance line",
      B: "Only sitting",
      C: "Lying down constantly",
      D: "No activity",
    },
    correctAnswer: "A",
    explanation:
      "Balance activities like walking beams, hopping and standing on one leg develop proprioception.",
  },
  {
    id: 566,
    subject: "ICT/Computer Studies",
    question: "Which type of software helps protect a computer from malware?",
    options: {
      A: "Antivirus software",
      B: "Spelling checker",
      C: "Calculator",
      D: "Calendar app",
    },
    correctAnswer: "A",
    explanation:
      "Antivirus software identifies, quarantines and removes malicious programs from computers.",
  },
  {
    id: 567,
    subject: "Mathematics",
    question: "What is the area of a circle with radius 5 cm (use π ≈ 3.14)?",
    options: {
      A: "78. 5 cm²",
      B: "31.4 cm²",
      C: "62.8 cm²",
      D: "15.7 cm²",
    },
    correctAnswer: "A",
    explanation: "Area = πr² = 3.14 × 5² = 3.14 × 25 = 78.5 cm².",
  },
  {
    id: 568,
    subject: "English",
    question: "Which word best completes:  'She is ___ than her brother.'? ",
    options: {
      A: "taller",
      B: "most tall",
      C: "more taller",
      D: "tallerest",
    },
    correctAnswer: "A",
    explanation:
      "'Taller' is the correct comparative form for comparing two people.",
  },
  {
    id: 569,
    subject: "Kiswahili",
    question:
      "Chagua sahihi:  'Mfalme aliamua ___ watu wote kwamba wasilize nyinyi.'",
    options: {
      A: "kusema",
      B: "kusemeza",
      C: "kusemeza",
      D: "kusema kwako",
    },
    correctAnswer: "A",
    explanation:
      "'Aliamua kusema' means 'decided to tell'; the verb infinitive form 'kusema' is appropriate.",
  },
  {
    id: 570,
    subject: "Science & Technology",
    question:
      "Which simple machine reduces effort needed to lift loads using a curved path?",
    options: {
      A: "Lever",
      B: "Inclined plane",
      C: "Pulley",
      D: "Wedge",
    },
    correctAnswer: "B",
    explanation:
      "An inclined plane (ramp) spreads the effort over a longer distance, reducing the force needed.",
  },
  {
    id: 571,
    subject: "Social Studies",
    question: "Which is an example of natural resources in a country?",
    options: {
      A: "Forests, minerals and water",
      B: "Computers",
      C: "Buildings",
      D: "Money",
    },
    correctAnswer: "A",
    explanation:
      "Natural resources are materials found in nature:  forests, minerals, soil, water and wildlife.",
  },
  {
    id: 572,
    subject: "CRE",
    question:
      "Which Psalm is often recited for comfort and assurance in times of difficulty?",
    options: {
      A: "Psalm 23",
      B: "Psalm 150",
      C: "Psalm 1",
      D: "Psalm 27",
    },
    correctAnswer: "A",
    explanation:
      "Psalm 23 ('The Lord is my shepherd') provides comfort and assurance of God's protection.",
  },
  {
    id: 573,
    subject: "Agriculture",
    question:
      "Which method helps keep stored grains safe from insects without chemicals?",
    options: {
      A: "Proper drying and airtight storage containers",
      B: "Exposing to sun continuously",
      C: "Mixing with water",
      D: "Storing in open baskets",
    },
    correctAnswer: "A",
    explanation:
      "Dry grain in sealed containers removes conditions that insects need to survive.",
  },
  {
    id: 574,
    subject: "Music",
    question:
      "Which instrument is a member of the woodwind family despite having metal keys?",
    options: {
      A: "Saxophone",
      B: "Clarinet",
      C: "Flute",
      D: "Oboe",
    },
    correctAnswer: "C",
    explanation:
      "The flute is woodwind because it uses air vibration (even though made of metal); it has no reed unlike clarinet or oboe.",
  },
  {
    id: 575,
    subject: "Home Science",
    question: "Which practice improves indoor air quality in a home?",
    options: {
      A: "Opening windows for ventilation",
      B: "Keeping all windows sealed",
      C: "Using incense all day",
      D: "Burning plastic indoors",
    },
    correctAnswer: "A",
    explanation:
      "Fresh air circulation from opened windows reduces indoor pollutants and improves air quality.",
  },
  {
    id: 576,
    subject: "Physical & Health Education",
    question: "Which is a proper safety technique for lifting heavy objects?",
    options: {
      A: "Bending knees and keeping back straight",
      B: "Bending at the waist only",
      C: "Twisting while lifting",
      D: "Lifting above shoulder height",
    },
    correctAnswer: "A",
    explanation:
      "Proper lifting bends the knees, keeps the spine neutral and engages leg muscles, preventing back injury.",
  },
  {
    id: 577,
    subject: "ICT/Computer Studies",
    question: "Which action helps protect privacy when using public computers?",
    options: {
      A: "Logging out after use and clearing browser history",
      B: "Leaving yourself logged in",
      C: "Saving passwords on public computers",
      D: "Leaving sensitive documents open",
    },
    correctAnswer: "A",
    explanation:
      "Logging out and clearing history prevent others from accessing personal information and accounts.",
  },
  {
    id: 578,
    subject: "Mathematics",
    question: "If 3x + 7 = 22, what is the value of x? ",
    options: {
      A: "5",
      B: "10",
      C: "15",
      D: "25",
    },
    correctAnswer: "A",
    explanation: "Subtract 7 from both sides: 3x = 15.  Divide by 3: x = 5.",
  },
  {
    id: 579,
    subject: "English",
    question: "Which sentence is correctly capitalised?",
    options: {
      A: "the Cat sat on the mat.",
      B: "The cat sat on the mat.",
      C: "The cat Sat on the mat.",
      D: "the cat sat on the mat.",
    },
    correctAnswer: "B",
    explanation:
      "Sentences start with a capital letter and proper nouns are capitalised; 'The cat sat on the mat.' is correct.",
  },
  {
    id: 580,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'Please excuse me.'",
    options: {
      A: "Tafadhali karibu.",
      B: "Tafadhali nipe.",
      C: "Tafadhali nisamehe.",
      D: "Tafadhali simu.",
    },
    correctAnswer: "C",
    explanation:
      "'Tafadhali nisamehe' or 'Nisamehe tafadhali' correctly translates 'Please excuse me.'",
  },
  {
    id: 581,
    subject: "Science & Technology",
    question:
      "Which light color has the longest wavelength in the visible spectrum?",
    options: {
      A: "Violet",
      B: "Blue",
      C: "Red",
      D: "Green",
    },
    correctAnswer: "C",
    explanation:
      "Red light has the longest wavelength in the visible spectrum; violet has the shortest.",
  },
  {
    id: 582,
    subject: "Social Studies",
    question: "Which skill is important for working well in a team?",
    options: {
      A: "Good communication and listening",
      B: "Only talking and not listening",
      C: "Ignoring others' ideas",
      D: "Working only alone",
    },
    correctAnswer: "A",
    explanation:
      "Communication and active listening allow team members to understand each other and work effectively.",
  },
  {
    id: 583,
    subject: "CRE",
    question:
      "Which Christian denomination emphasizes personal conversion and Bible reading?",
    options: {
      A: "Protestant",
      B: "Sikh",
      C: "Muslim",
      D: "Hindu",
    },
    correctAnswer: "A",
    explanation:
      "Protestantism emphasizes individual faith, Bible study and personal relationship with God.",
  },
  {
    id: 584,
    subject: "Agriculture",
    question:
      "Which factor determines the best time to harvest fruits for maximum sweetness?",
    options: {
      A: "Maturity and sugar content (ripeness)",
      B: "Random timing",
      C: "Only by colour",
      D: "Weather alone",
    },
    correctAnswer: "A",
    explanation:
      "Fruits are harvested when mature and ripe, with maximum sugar development for best flavour.",
  },
  {
    id: 585,
    subject: "Music",
    question:
      "Which instrument is the smallest and plays the highest notes in a string orchestra?",
    options: {
      A: "Cello",
      B: "Violin",
      C: "Viola",
      D: "Double bass",
    },
    correctAnswer: "B",
    explanation:
      "The violin is the smallest of the main string instruments and plays the highest pitches.",
  },
  {
    id: 586,
    subject: "Home Science",
    question: "Which habit helps prevent the spread of germs in the kitchen?",
    options: {
      A: "Washing hands between tasks and changing towels regularly",
      B: "Using the same towel all day",
      C: "Not washing hands",
      D: "Sharing utensils without washing",
    },
    correctAnswer: "A",
    explanation:
      "Regular handwashing and clean towels reduce cross-contamination and germ transfer in kitchens.",
  },
  {
    id: 587,
    subject: "Physical & Health Education",
    question: "Which food provides quick energy for athletes before exercise?",
    options: {
      A: "Banana or apple",
      B: "Fried chicken",
      C: "Heavy pasta only",
      D: "No food",
    },
    correctAnswer: "A",
    explanation:
      "Bananas and apples provide quick carbohydrates and are light, ideal pre-exercise foods.",
  },
  {
    id: 588,
    subject: "ICT/Computer Studies",
    question: "Which is an example of a secure password?",
    options: {
      A: "Abc123! @#",
      B: "password",
      C: "1234567",
      D: "aaaaa",
    },
    correctAnswer: "A",
    explanation:
      "A secure password combines uppercase, lowercase, numbers and symbols; single words or numbers are weak.",
  },
  {
    id: 589,
    subject: "Mathematics",
    question: "What is 5% of 200?",
    options: {
      A: "5",
      B: "10",
      C: "20",
      D: "50",
    },
    correctAnswer: "B",
    explanation: "5% of 200 = 0.05 × 200 = 10.",
  },
  {
    id: 590,
    subject: "English",
    question: "Which word is a verb in:  'The bird sings beautifully.'?",
    options: {
      A: "bird",
      B: "sings",
      C: "beautifully",
      D: "the",
    },
    correctAnswer: "B",
    explanation:
      "'Sings' is the action performed and functions as the verb in the sentence.",
  },
  {
    id: 591,
    subject: "Kiswahili",
    question: "Chagua neno sahihi: 'Mjinga yule ana ___ kubwa.'",
    options: {
      A: "kichwa",
      B: "kichwa cha",
      C: "kichwa kinachokubwa",
      D: "vichwa",
    },
    correctAnswer: "A",
    explanation:
      "'Mjinga yule ana kichwa kubwa' means 'That clever person has a big head', with 'kichwa' being the object.",
  },
  {
    id: 592,
    subject: "Science & Technology",
    question:
      "Which process involves the separation of a mixture using boiling and condensation?",
    options: {
      A: "Filtration",
      B: "Distillation",
      C: "Evaporation",
      D: "Crystallization",
    },
    correctAnswer: "B",
    explanation:
      "Distillation heats a mixture to form vapour, which condenses to separate components based on boiling points.",
  },
  {
    id: 593,
    subject: "Social Studies",
    question: "Which service does a post office provide? ",
    options: {
      A: "Mail delivery and communications",
      B: "Medical care only",
      C: "Food sales only",
      D: "Vehicle repairs",
    },
    correctAnswer: "A",
    explanation:
      "Post offices handle mail, parcels and other communication services across communities.",
  },
  {
    id: 594,
    subject: "CRE",
    question:
      "Which action is considered breaking the Sabbath in Jewish tradition?",
    options: {
      A: "Resting on the Sabbath",
      B: "Doing work and labour on the Sabbath",
      C: "Praying on the Sabbath",
      D: "Fasting on the Sabbath",
    },
    correctAnswer: "B",
    explanation:
      "The Sabbath commandment requires rest from work; labour on the Sabbath breaks this law.",
  },
  {
    id: 595,
    subject: "Agriculture",
    question:
      "Which crop is sensitive to frost and must be planted after the last frost date?",
    options: {
      A: "Tomatoes",
      B: "Wheat",
      C: "Barley",
      D: "Potato",
    },
    correctAnswer: "A",
    explanation:
      "Tomatoes are frost-sensitive; planting after the last frost prevents plant death from freezing temperatures.",
  },
  {
    id: 596,
    subject: "Music",
    question:
      "Which musical form has multiple short pieces or movements played together?",
    options: {
      A: "Suite",
      B: "Fugue",
      C: "Sonata",
      D: "Concerto",
    },
    correctAnswer: "A",
    explanation:
      "A suite is a collection of related short compositions (movements) played in sequence.",
  },
  {
    id: 597,
    subject: "Home Science",
    question:
      "Which is a balanced way to divide household chores among family members?",
    options: {
      A: "Assigning tasks based on ability and age",
      B: "Only one person does all chores",
      C: "Never doing any chores",
      D: "Ignoring responsibility",
    },
    correctAnswer: "A",
    explanation:
      "Fair distribution of age-appropriate tasks teaches responsibility and teamwork in families.",
  },
  {
    id: 598,
    subject: "Physical & Health Education",
    question: "Which is a safe way to stretch to improve flexibility?",
    options: {
      A: "Gentle, sustained stretches without bouncing",
      B: "Bouncing forcefully",
      C: "Stretching cold muscles",
      D: "Stretching to the point of pain",
    },
    correctAnswer: "A",
    explanation:
      "Static stretching after warm-up, held gently without bouncing, safely improves range of motion.",
  },
  {
    id: 599,
    subject: "ICT/Computer Studies",
    question: "Which file extension is commonly used for images on the web?",
    options: {
      A: ". txt",
      B: ".jpg",
      C: ". doc",
      D: ".exe",
    },
    correctAnswer: "B",
    explanation:
      "JPEG (. jpg) is a widely used image format for photos; PNG and GIF are also web-friendly image formats.",
  },
  {
    id: 600,
    subject: "Mathematics",
    question:
      "What is the circumference of a circle with diameter 10 cm (use π ≈ 3.14)?",
    options: {
      A: "31.4 cm",
      B: "62.8 cm",
      C: "15.7 cm",
      D: "78.5 cm",
    },
    correctAnswer: "A",
    explanation: "Circumference = πd = 3.14 × 10 = 31.4 cm.",
  },
  {
    id: 601,
    subject: "English",
    question:
      "Which word best completes:  'The weather is ___ today than yesterday.'?",
    options: {
      A: "warmer",
      B: "warmest",
      C: "warm",
      D: "more warm",
    },
    correctAnswer: "A",
    explanation:
      "'Warmer' is the correct comparative form for comparing two days.",
  },
  {
    id: 602,
    subject: "Mathematics",
    question: "What is 6 × 9?",
    options: {
      A: "52",
      B: "54",
      C: "56",
      D: "58",
    },
    correctAnswer: "B",
    explanation: "Multiply 6 by 9: 6 × 9 = 54.",
  },
  {
    id: 603,
    subject: "Kiswahili",
    question: "Tafsiri:  'The boy is taller than his sister.'",
    options: {
      A: "Mvulana huyu ni mkubwa kuliko dada yake.",
      B: "Mvulana huyu ni mfupi kuliko dada yake.",
      C: "Mvulana huyu ni mkubwa sana.",
      D: "Mvulana huyu ni mdogo kuliko dada yake.",
    },
    correctAnswer: "A",
    explanation:
      "'Ni mkubwa kuliko' means 'is taller than'; 'mfupi' means shorter, so A is correct.",
  },
  {
    id: 604,
    subject: "Science & Technology",
    question: "Which layer of the atmosphere is closest to Earth? ",
    options: {
      A: "Stratosphere",
      B: "Mesosphere",
      C: "Troposphere",
      D: "Thermosphere",
    },
    correctAnswer: "C",
    explanation:
      "The troposphere is the lowest atmospheric layer where weather occurs and most organisms live.",
  },
  {
    id: 605,
    subject: "Social Studies",
    question: "Which is a responsibility of local government to citizens?",
    options: {
      A: "Providing clean water and sanitation",
      B: "Ignoring public services",
      C: "Collecting taxes but offering no services",
      D: "Refusing to build roads",
    },
    correctAnswer: "A",
    explanation:
      "Local governments provide essential services like water, sanitation and waste management.",
  },
  {
    id: 606,
    subject: "CRE",
    question:
      "Which action did Jesus demonstrate when he washed the disciples' feet?",
    options: {
      A: "Pride",
      B: "Humility and service",
      C: "Anger",
      D: "Arrogance",
    },
    correctAnswer: "B",
    explanation:
      "Foot-washing was a servant's task; Jesus showed humility and that service is important in faith.",
  },
  {
    id: 607,
    subject: "Agriculture",
    question:
      "Which practice helps reduce the cost of farming by reusing agricultural waste?",
    options: {
      A: "Making compost from crop residues",
      B: "Burning all crop waste",
      C: "Dumping waste in rivers",
      D: "Importing all fertilizer",
    },
    correctAnswer: "A",
    explanation:
      "Composting crop waste creates free, nutrient-rich fertilizer, reducing input costs.",
  },
  {
    id: 608,
    subject: "Music",
    question: "Which tempo marking indicates a moderate, walking speed?",
    options: {
      A: "Andante",
      B: "Presto",
      C: "Vivace",
      D: "Largo",
    },
    correctAnswer: "A",
    explanation:
      "Andante means 'walking tempo', a moderate speed; Presto is very fast, Largo is very slow.",
  },
  {
    id: 609,
    subject: "Home Science",
    question: "Which method removes stubborn stains from delicate fabrics?",
    options: {
      A: "Using bleach and scrubbing harshly",
      B: "Treating with mild soap and gentle rubbing",
      C: "Ignoring the stain until it sets",
      D: "Using only hot water aggressively",
    },
    correctAnswer: "B",
    explanation:
      "Gentle treatment with mild soap protects delicate fabrics while removing stains effectively.",
  },
  {
    id: 610,
    subject: "Physical & Health Education",
    question: "Which vitamin helps prevent night blindness?",
    options: {
      A: "Vitamin A",
      B: "Vitamin C",
      C: "Vitamin D",
      D: "Vitamin E",
    },
    correctAnswer: "A",
    explanation:
      "Vitamin A is essential for vision and prevents night blindness; found in carrots and leafy greens.",
  },
  {
    id: 611,
    subject: "ICT/Computer Studies",
    question:
      "Which symbol separates the username from the domain in an email address?",
    options: {
      A: "Underscore (_)",
      B: "At sign (@)",
      C: "Hyphen (-)",
      D: "Period (. )",
    },
    correctAnswer: "B",
    explanation:
      "The @ symbol separates the user name from the domain:  user@domain.com",
  },
  {
    id: 612,
    subject: "Mathematics",
    question: "Which number is divisible by both 3 and 5?",
    options: {
      A: "25",
      B: "15",
      C: "20",
      D: "16",
    },
    correctAnswer: "B",
    explanation: "15 ÷ 3 = 5 and 15 ÷ 5 = 3, so 15 is divisible by both.",
  },
  {
    id: 613,
    subject: "English",
    question:
      "Which word is correctly used as a noun in:  'Honesty is a virtue.'?",
    options: {
      A: "Honesty",
      B: "virtue",
      C: "is",
      D: "a",
    },
    correctAnswer: "A",
    explanation:
      "Both 'honesty' and 'virtue' are nouns; 'honesty' is the subject noun of the sentence.",
  },
  {
    id: 614,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'The book is mine.'",
    options: {
      A: "Kitabu hiki ni changu.",
      B: "Kitabu hiki ni chako.",
      C: "Kitabu hiki ni chake.",
      D: "Kitabu hiki ni chetu.",
    },
    correctAnswer: "A",
    explanation:
      "'Changu' is the possessive form meaning 'mine'; 'chako' means 'yours', 'chake' means 'his/hers'.",
  },
  {
    id: 615,
    subject: "Science & Technology",
    question:
      "Which process produces carbon dioxide as a waste product in living cells?",
    options: {
      A: "Photosynthesis",
      B: "Cellular respiration",
      C: "Digestion",
      D: "Photolysis",
    },
    correctAnswer: "B",
    explanation:
      "Cellular respiration breaks down glucose and produces energy (ATP), water and carbon dioxide.",
  },
  {
    id: 616,
    subject: "Social Studies",
    question: "Which is an example of sustainable use of natural resources?",
    options: {
      A: "Harvesting trees faster than they grow",
      B: "Fishing all fish from a river",
      C: "Replanting trees after harvesting",
      D: "Using all water without replacement",
    },
    correctAnswer: "C",
    explanation:
      "Replanting ensures resources are available for future generations; this is sustainable.",
  },
  {
    id: 617,
    subject: "CRE",
    question:
      "Which animal is associated with the symbol of strength in the Bible?",
    options: {
      A: "Lamb",
      B: "Lion",
      C: "Dove",
      D: "Fish",
    },
    correctAnswer: "B",
    explanation:
      "The lion symbolizes strength and power in biblical literature; Jesus is called 'Lion of Judah'.",
  },
  {
    id: 618,
    subject: "Agriculture",
    question: "Which crop benefit s from pruning to encourage bushier growth?",
    options: {
      A: "Tomatoes",
      B: "Beans",
      C: "Maize",
      D: "Wheat",
    },
    correctAnswer: "A",
    explanation:
      "Pruning tomato plants removes excessive growth, allowing more energy for fruit production.",
  },
  {
    id: 619,
    subject: "Music",
    question: "Which instrument is a percussion instrument with a keyboard?",
    options: {
      A: "Piano",
      B: "Guitar",
      C: "Violin",
      D: "Flute",
    },
    correctAnswer: "A",
    explanation:
      "The piano has strings struck by hammers (percussion mechanism) with a keyboard interface.",
  },
  {
    id: 620,
    subject: "Home Science",
    question: "Which food group should dominate a healthy plate at meals?",
    options: {
      A: "Proteins only",
      B: "Vegetables and fruits",
      C: "Refined carbohydrates",
      D: "Sugary desserts",
    },
    correctAnswer: "B",
    explanation:
      "Vegetables and fruits should fill about half the plate, providing vitamins, minerals and fibre.",
  },
  {
    id: 621,
    subject: "Physical & Health Education",
    question: "Which is a sign of dehydration during exercise?",
    options: {
      A: "Increased energy and clarity",
      B: "Thirst, dizziness and reduced urine output",
      C: "Feeling very cold",
      D: "Sudden hunger",
    },
    correctAnswer: "B",
    explanation:
      "Thirst, dizziness and dark urine indicate the body needs more fluids.",
  },
  {
    id: 622,
    subject: "ICT/Computer Studies",
    question:
      "Which device allows a computer to communicate wirelessly with the internet?",
    options: {
      A: "Modem",
      B: "WiFi router",
      C: "Printer",
      D: "Scanner",
    },
    correctAnswer: "B",
    explanation:
      "A WiFi router creates wireless internet connectivity; a modem connects to the internet provider.",
  },
  {
    id: 623,
    subject: "Mathematics",
    question:
      "What is the volume of a rectangular box with length 4 cm, width 3 cm and height 5 cm?",
    options: {
      A: "60 cm³",
      B: "50 cm³",
      C: "45 cm³",
      D: "40 cm³",
    },
    correctAnswer: "A",
    explanation: "Volume = length × width × height = 4 × 3 × 5 = 60 cm³.",
  },
  {
    id: 624,
    subject: "English",
    question: "Which sentence uses the past perfect tense correctly?",
    options: {
      A: "She has gone to school yesterday.",
      B: "She had gone to school before noon.",
      C: "She will have gone to school.",
      D: "She goes to school.",
    },
    correctAnswer: "B",
    explanation:
      "Past perfect 'had gone' shows an action completed before another past action.",
  },
  {
    id: 625,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'He likes playing football.'",
    options: {
      A: "Anapenda kucheza mpira wa miguu.",
      B: "Anakula mpira wa miguu.",
      C: "Anasoma mpira wa miguu.",
      D: "Anatembea mpira wa miguu.",
    },
    correctAnswer: "A",
    explanation:
      "'Anapenda kucheza' means 'likes playing'; the verb 'kucheza' is in infinitive form.",
  },
  {
    id: 626,
    subject: "Science & Technology",
    question:
      "Which part of a cell controls all activities and contains genetic material?",
    options: {
      A: "Mitochondria",
      B: "Ribosome",
      C: "Nucleus",
      D: "Vacuole",
    },
    correctAnswer: "C",
    explanation:
      "The nucleus is the control centre of a cell and houses DNA (genetic material).",
  },
  {
    id: 627,
    subject: "Social Studies",
    question: "Which is an example of discrimination? ",
    options: {
      A: "Treating someone unfairly based on race or gender",
      B: "Treating everyone with respect",
      C: "Following the law",
      D: "Helping neighbours",
    },
    correctAnswer: "A",
    explanation:
      "Discrimination is unfair treatment based on characteristics like race, gender or religion.",
  },
  {
    id: 628,
    subject: "CRE",
    question: "Which story teaches that pride leads to downfall?",
    options: {
      A: "The Good Samaritan",
      B: "The Tower of Babel",
      C: "The Prodigal Son",
      D: "The Lost Sheep",
    },
    correctAnswer: "B",
    explanation:
      "The Tower of Babel shows how human pride in building led to confusion and downfall.",
  },
  {
    id: 629,
    subject: "Agriculture",
    question: "Which practice helps prevent erosion on steep hillsides?",
    options: {
      A: "Contour farming or terracing",
      B: "Planting downhill only",
      C: "Clear-cutting all trees",
      D: "Removing vegetation",
    },
    correctAnswer: "A",
    explanation:
      "Contour farming follows slope lines and terracing creates steps, both reducing water runoff.",
  },
  {
    id: 630,
    subject: "Music",
    question: "Which clef symbol looks like a spiral wrapping around a line?",
    options: {
      A: "Bass clef",
      B: "Alto clef",
      C: "Treble clef",
      D: "Percussion clef",
    },
    correctAnswer: "C",
    explanation:
      "The treble clef (𝄞) wraps around the second line from the bottom of the staff.",
  },
  {
    id: 631,
    subject: "Home Science",
    question: "Which is a safe temperature for keeping perishable foods?",
    options: {
      A: "0-4°C in the refrigerator",
      B: "Room temperature",
      C: "Near the stove",
      D: "In direct sunlight",
    },
    correctAnswer: "A",
    explanation:
      "Cold temperatures (0-4°C) slow bacterial growth and keep perishable foods safe.",
  },
  {
    id: 632,
    subject: "Physical & Health Education",
    question: "Which activity helps improve cardiovascular health?",
    options: {
      A: "Daily brisk walking or jogging",
      B: "Sitting all day",
      C: "Only eating",
      D: "Staying indoors always",
    },
    correctAnswer: "A",
    explanation:
      "Aerobic activities like brisk walking increase heart rate and improve cardiovascular fitness.",
  },
  {
    id: 633,
    subject: "ICT/Computer Studies",
    question: "Which view in a presentation program shows all slides at once?",
    options: {
      A: "Slideshow view",
      B: "Outline view",
      C: "Slide sorter view",
      D: "Notes view",
    },
    correctAnswer: "C",
    explanation:
      "Slide sorter view displays all slides in a grid, allowing easy rearrangement and review.",
  },
  {
    id: 634,
    subject: "Mathematics",
    question: "Which is the mode of this data set:  2, 5, 5, 7, 8, 5, 9? ",
    options: {
      A: "5",
      B: "7",
      C: "8",
      D: "9",
    },
    correctAnswer: "A",
    explanation:
      "The mode is the most frequently appearing value; 5 appears three times.",
  },
  {
    id: 635,
    subject: "English",
    question:
      "Which word is an adjective modifying 'house' in:  'She lives in a beautiful house.'?",
    options: {
      A: "lives",
      B: "beautiful",
      C: "house",
      D: "in",
    },
    correctAnswer: "B",
    explanation:
      "'Beautiful' describes the noun 'house', functioning as an adjective.",
  },
  {
    id: 636,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'Can you help me with my work?'",
    options: {
      A: "Je, unaweza kunisaidia kwa kazi yangu? ",
      B: "Je, unakula kwa kazi yangu?",
      C: "Je, unalala kwa kazi yangu?",
      D: "Je, unacheza kwa kazi yangu?",
    },
    correctAnswer: "A",
    explanation:
      "'Unaweza kunisaidia' correctly means 'Can you help me'; 'kazi yangu' is 'my work'.",
  },
  {
    id: 637,
    subject: "Science & Technology",
    question: "Which type of energy is stored in a battery?",
    options: {
      A: "Kinetic energy",
      B: "Chemical energy",
      C: "Heat energy",
      D: "Sound energy",
    },
    correctAnswer: "B",
    explanation:
      "Batteries store chemical energy that is converted to electrical energy when connected to a circuit.",
  },
  {
    id: 638,
    subject: "Social Studies",
    question: "Which is a benefit of recycling materials?",
    options: {
      A: "Reduces landfill waste and conserves resources",
      B: "Creates more rubbish",
      C: "Wastes time and money",
      D: "Pollutes the environment more",
    },
    correctAnswer: "A",
    explanation:
      "Recycling reduces waste going to landfills and conserves raw materials and energy.",
  },
  {
    id: 639,
    subject: "CRE",
    question:
      "Which action did Zacchaeus the tax collector do to make amends for his wrongs?",
    options: {
      A: "He ignored those he wronged",
      B: "He repaid four times what he took and gave to the poor",
      C: "He left the country",
      D: "He continued taking money wrongly",
    },
    correctAnswer: "B",
    explanation:
      "Zacchaeus showed repentance by repaying fourfold those he cheated, demonstrating true conversion.",
  },
  {
    id: 640,
    subject: "Agriculture",
    question:
      "Which benefit does crop rotation provide besides disease control?",
    options: {
      A: "Reduces nitrogen in soil",
      B: "Improves soil fertility and reduces pests",
      C: "Makes soil infertile",
      D: "Increases pest populations",
    },
    correctAnswer: "B",
    explanation:
      "Rotation improves fertility by alternating crop types and reduces pest pressure on single crops.",
  },
  {
    id: 641,
    subject: "Music",
    question: "Which instrument family includes the trombone?",
    options: {
      A: "Woodwind",
      B: "Brass",
      C: "String",
      D: "Percussion",
    },
    correctAnswer: "B",
    explanation:
      "Trombones are brass instruments that produce sound through the player's vibrating lips.",
  },
  {
    id: 642,
    subject: "Home Science",
    question: "Which practice ensures eggs remain safe to eat?",
    options: {
      A: "Cooking to at least 160°F (71°C) for safety",
      B: "Eating raw eggs",
      C: "Storing at room temperature",
      D: "Not refrigerating after cooking",
    },
    correctAnswer: "A",
    explanation:
      "Cooking eggs to proper temperature kills harmful bacteria like Salmonella.",
  },
  {
    id: 643,
    subject: "Physical & Health Education",
    question: "Which stretching exercise targets the hamstring muscles?",
    options: {
      A: "Touching your toes while seated or standing",
      B: "Shoulder rolls",
      C: "Neck stretches",
      D: "Wrist rotations",
    },
    correctAnswer: "A",
    explanation:
      "Forward bends stretch the hamstrings at the back of the thigh.",
  },
  {
    id: 644,
    subject: "ICT/Computer Studies",
    question: "Which term describes software that can be used for free?",
    options: {
      A: "Freeware",
      B: "Firmware",
      C: "Spyware",
      D: "Malware",
    },
    correctAnswer: "A",
    explanation:
      "Freeware is software distributed at no cost; firmware is permanent software in devices.",
  },
  {
    id: 645,
    subject: "Mathematics",
    question: "What is the median of:  3, 7, 5, 9, 2, 8, 4?",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "8",
    },
    correctAnswer: "A",
    explanation:
      "Arrange in order:  2, 3, 4, 5, 7, 8, 9. The middle value (median) is 5.",
  },
  {
    id: 646,
    subject: "English",
    question: "Which is the correct spelling of a common greeting?",
    options: {
      A: "Welcom",
      B: "Welcome",
      C: "Wellcome",
      D: "Welcum",
    },
    correctAnswer: "B",
    explanation:
      "'Welcome' is the correct spelling with 'wel-' and '-come' joined.",
  },
  {
    id: 647,
    subject: "Kiswahili",
    question: "Tafsiri:  'I was reading when you called me.'",
    options: {
      A: "Nilikuwa ninasoma lini uliponiita.",
      B: "Nilikuwa ninasoma wakati uliponiita.",
      C: "Ninasoma wakati uliponiita.",
      D: "Nitakuwa ninasoma lini uliponiita.",
    },
    correctAnswer: "B",
    explanation:
      "'Nilikuwa ninasoma' is past continuous (was reading); 'wakati' means 'when' or 'at the time'.",
  },
  {
    id: 648,
    subject: "Science & Technology",
    question: "Which is an example of a physical property of matter?",
    options: {
      A: "Rusting of iron",
      B: "Burning of wood",
      C: "Colour and hardness",
      D: "Rotting of fruit",
    },
    correctAnswer: "C",
    explanation:
      "Physical properties like colour and hardness don't change the substance; chemical changes create new substances.",
  },
  {
    id: 649,
    subject: "Social Studies",
    question: "Which organisation helps people in need during disasters?",
    options: {
      A: "Red Cross/Red Crescent",
      B: "Local shop",
      C: "Cinema",
      D: "Restaurant",
    },
    correctAnswer: "A",
    explanation:
      "The Red Cross and Red Crescent provide humanitarian aid and relief during emergencies.",
  },
  {
    id: 650,
    subject: "CRE",
    question: "Which book of the Bible contains the Ten Commandments?",
    options: {
      A: "Genesis",
      B: "Exodus",
      C: "Psalms",
      D: "Matthew",
    },
    correctAnswer: "B",
    explanation:
      "The Ten Commandments are found in Exodus, chapter 20, given by God to Moses.",
  },
  {
    id: 651,
    subject: "Agriculture",
    question:
      "Which animal is used to improve soil fertility by leaving droppings?",
    options: {
      A: "Birds",
      B: "Livestock (cattle, goats)",
      C: "Fish",
      D: "Insects",
    },
    correctAnswer: "B",
    explanation:
      "Livestock manure enriches soil with nitrogen and organic matter, improving fertility.",
  },
  {
    id: 652,
    subject: "Music",
    question: "Which instrument requires a bow to produce sound?",
    options: {
      A: "Guitar",
      B: "Cello",
      C: "Piano",
      D: "Harp",
    },
    correctAnswer: "B",
    explanation:
      "A cello is played with a bow that vibrates the strings; guitars are typically plucked.",
  },
  {
    id: 653,
    subject: "Home Science",
    question: "Which cleaning agent is safe for most surfaces and natural? ",
    options: {
      A: "Baking soda and vinegar",
      B: "Bleach alone",
      C: "Motor oil",
      D: "Paint thinner",
    },
    correctAnswer: "A",
    explanation:
      "Baking soda and vinegar are safe, non-toxic cleaners suitable for many household surfaces.",
  },
  {
    id: 654,
    subject: "Physical & Health Education",
    question: "Which is a sign of good mental health in children?",
    options: {
      A: "Being able to express feelings and make friends",
      B: "Never showing any emotion",
      C: "Avoiding all social contact",
      D: "Keeping all feelings bottled up",
    },
    correctAnswer: "A",
    explanation:
      "Emotional expression, social relationships and positive coping are signs of good mental health.",
  },
  {
    id: 655,
    subject: "ICT/Computer Studies",
    question:
      "Which key combination selects all items in a folder or document?",
    options: {
      A: "Ctrl + A",
      B: "Ctrl + D",
      C: "Ctrl + L",
      D: "Ctrl + S",
    },
    correctAnswer: "A",
    explanation:
      "Ctrl + A selects all content; Ctrl + D often deletes, Ctrl + S saves.",
  },
  {
    id: 656,
    subject: "Mathematics",
    question:
      "If a student scores 80, 85 and 90 on three tests, what is the average?",
    options: {
      A: "85",
      B: "90",
      C: "75",
      D: "95",
    },
    correctAnswer: "A",
    explanation: "Average = (80 + 85 + 90) ÷ 3 = 255 ÷ 3 = 85.",
  },
  {
    id: 657,
    subject: "English",
    question: "Which sentence uses 'their' correctly?",
    options: {
      A: "Their going to the beach.",
      B: "There going to the beach.",
      C: "Their house is beautiful.",
      D: "They're house is beautiful.",
    },
    correctAnswer: "C",
    explanation:
      "'Their' is possessive (their house); 'there' is location; 'they're' is 'they are'.",
  },
  {
    id: 658,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'I bought a new dress yesterday.'",
    options: {
      A: "Alinunua gauni mpya jana.",
      B: "Nilinunua gauni mpya jana.",
      C: "Unaweza kununua gauni mpya jana.",
      D: "Tulinunua gauni mpya jana.",
    },
    correctAnswer: "B",
    explanation:
      "'Nilinunua' is past tense 'I bought'; 'gauni mpya' is 'new dress'; 'jana' is 'yesterday'.",
  },
  {
    id: 659,
    subject: "Science & Technology",
    question: "Which gas is needed by humans for breathing?",
    options: {
      A: "Carbon dioxide",
      B: "Oxygen",
      C: "Nitrogen",
      D: "Hydrogen",
    },
    correctAnswer: "B",
    explanation:
      "Oxygen is essential for cellular respiration and is obtained from breathing air.",
  },
  {
    id: 660,
    subject: "Social Studies",
    question: "Which is an example of a cultural tradition?",
    options: {
      A: "Festival celebrations and traditional dances",
      B: "Using a computer",
      C: "Driving a car",
      D: "Shopping at a supermarket",
    },
    correctAnswer: "A",
    explanation:
      "Cultural traditions are practices passed through generations, like festivals and traditional dances.",
  },
  {
    id: 661,
    subject: "CRE",
    question:
      "Which teaching emphasises treating others how you wish to be treated?",
    options: {
      A: "The law of retribution",
      B: "The Golden Rule",
      C: "The Sabbath law",
      D: "The tithe law",
    },
    correctAnswer: "B",
    explanation:
      "The Golden Rule teaches reciprocity and respect by advocating fair treatment of all.",
  },
  {
    id: 662,
    subject: "Agriculture",
    question: "Which farming method reduces the use of chemical pesticides?",
    options: {
      A: "Integrated pest management (IPM)",
      B: "Spraying chemicals daily",
      C: "Using only synthetic fertilizers",
      D: "Monoculture continuously",
    },
    correctAnswer: "A",
    explanation:
      "IPM uses multiple strategies (rotation, natural predators, cultural practices) to manage pests sustainably.",
  },
  {
    id: 663,
    subject: "Music",
    question: "Which accent mark in music means to emphasise a note?",
    options: {
      A: "Staccato dot",
      B: "Accent mark (>)",
      C: "Slur",
      D: "Legato line",
    },
    correctAnswer: "B",
    explanation:
      "An accent mark (>) above or below a note indicates it should be played with emphasis.",
  },
  {
    id: 664,
    subject: "Home Science",
    question:
      "Which utensil material is best for non-stick cooking without harmful chemicals?",
    options: {
      A: "Cast iron or stainless steel",
      B: "Plastic",
      C: "Lead-coated",
      D: "Rusty metal",
    },
    correctAnswer: "A",
    explanation:
      "Cast iron and stainless steel are durable, safe and naturally non-reactive for cooking.",
  },
  {
    id: 665,
    subject: "Physical & Health Education",
    question: "Which activity helps children develop gross motor skills?",
    options: {
      A: "Running and jumping",
      B: "Only reading",
      C: "Writing",
      D: "Drawing",
    },
    correctAnswer: "A",
    explanation:
      "Running and jumping use large muscle groups and develop gross motor coordination.",
  },
  {
    id: 666,
    subject: "ICT/Computer Studies",
    question:
      "Which term describes the physical devices that make up a computer?",
    options: {
      A: "Software",
      B: "Hardware",
      C: "Firmware",
      D: "Network",
    },
    correctAnswer: "B",
    explanation:
      "Hardware refers to physical components (CPU, RAM, monitor); software is programs.",
  },
  {
    id: 667,
    subject: "Mathematics",
    question: "What is 15 + 27?",
    options: {
      A: "40",
      B: "42",
      C: "44",
      D: "46",
    },
    correctAnswer: "B",
    explanation: "Add 15 and 27: 15 + 27 = 42.",
  },
  {
    id: 668,
    subject: "English",
    question:
      "Which word is a pronoun in the sentence:  'He gave the book to her.'?",
    options: {
      A: "gave",
      B: "book",
      C: "he",
      D: "the",
    },
    correctAnswer: "C",
    explanation:
      "'He' and 'her' are both pronouns; 'he' is the subject pronoun here.",
  },
  {
    id: 669,
    subject: "Kiswahili",
    question:
      "Chagua sahihi:  'Alikuwa anataka ___ chakula kwa sababu alikuwa na njaa.'",
    options: {
      A: "kula",
      B: "kulya",
      C: "nakula",
      D: "weza",
    },
    correctAnswer: "A",
    explanation:
      "'Anataka kula' means 'wanted to eat'; 'kula' is the infinitive verb form.",
  },
  {
    id: 670,
    subject: "Science & Technology",
    question: "Which process changes rock into soil over time?",
    options: {
      A: "Weathering and erosion",
      B: "Burning",
      C: "Freezing only",
      D: "Melting",
    },
    correctAnswer: "A",
    explanation:
      "Weathering breaks down rock through physical and chemical processes; erosion moves the particles.",
  },
  {
    id: 671,
    subject: "Social Studies",
    question: "Which service does a health centre provide to a community?",
    options: {
      A: "Basic medical care and health education",
      B: "Legal advice only",
      C: "Agricultural training only",
      D: "Entertainment",
    },
    correctAnswer: "A",
    explanation:
      "Health centres provide preventive care, treatment and health education to communities.",
  },
  {
    id: 672,
    subject: "CRE",
    question:
      "Which miracle is unique to the Gospel of John among the first three Gospels?",
    options: {
      A: "Feeding the five thousand",
      B: "Turning water into wine at Cana",
      C: "Walking on water",
      D: "Healing of the paralytic",
    },
    correctAnswer: "B",
    explanation:
      "The wedding at Cana (turning water into wine) is recorded only in John's Gospel.",
  },
  {
    id: 673,
    subject: "Agriculture",
    question: "Which practice helps animals stay healthy on farms?",
    options: {
      A: "Providing clean shelter, fresh water and balanced feed",
      B: "Keeping them in dark, crowded spaces",
      C: "Giving only one type of food",
      D: "Ignoring hygiene",
    },
    correctAnswer: "A",
    explanation:
      "Proper housing, water and nutrition support animal health and productivity.",
  },
  {
    id: 674,
    subject: "Music",
    question:
      "Which musical form is a piece with a recurring melody (A) alternating with new sections? ",
    options: {
      A: "Rondo form (ABACA)",
      B: "Sonata form",
      C: "Fugue",
      D: "Canon",
    },
    correctAnswer: "A",
    explanation:
      "Rondo form repeats the main theme between contrasting sections, creating a recognisable structure.",
  },
  {
    id: 675,
    subject: "Home Science",
    question: "Which is the safest way to store knives in a home kitchen?",
    options: {
      A: "In a knife block or on a magnetic strip",
      B: "Loose in a drawer",
      C: "On the counter edge",
      D: "Under the bed",
    },
    correctAnswer: "A",
    explanation:
      "Proper knife storage in blocks or on magnetic strips prevents accidents and keeps blades sharp.",
  },
  {
    id: 676,
    subject: "Physical & Health Education",
    question: "Which food choice supports bone health during childhood?",
    options: {
      A: "Milk and dairy products",
      B: "Only sweets",
      C: "Fried foods",
      D: "Sugary drinks",
    },
    correctAnswer: "A",
    explanation:
      "Milk and dairy provide calcium and vitamin D essential for bone development in growing children.",
  },
  {
    id: 677,
    subject: "ICT/Computer Studies",
    question: "Which type of malware secretly records what users type? ",
    options: {
      A: "Worm",
      B: "Keylogger",
      C: "Trojan",
      D: "Ransomware",
    },
    correctAnswer: "B",
    explanation:
      "Keyloggers record keystrokes to steal passwords and personal information.",
  },
  {
    id: 678,
    subject: "Mathematics",
    question: "Which fraction equals 0.5?",
    options: {
      A: "1/4",
      B: "1/2",
      C: "3/4",
      D: "2/3",
    },
    correctAnswer: "B",
    explanation: "1/2 = 0.5 in decimal form.",
  },
  {
    id: 679,
    subject: "English",
    question: "Which word completes:  'She ___ three books last month.'?",
    options: {
      A: "read",
      B: "reads",
      C: "reading",
      D: "readed",
    },
    correctAnswer: "A",
    explanation:
      "The past tense of 'read' is 'read' (pronounced 'red'); 'readed' is not a word.",
  },
  {
    id: 680,
    subject: "Kiswahili",
    question: "Tafsiri: 'Please give me water.'",
    options: {
      A: "Tafadhali nipe maji.",
      B: "Tafadhali chakula.",
      C: "Tafadhali kunwa.",
      D: "Tafadhali njoo.",
    },
    correctAnswer: "A",
    explanation:
      "'Tafadhali nipe maji' correctly translates 'Please give me water.'",
  },
  {
    id: 681,
    subject: "Science & Technology",
    question: "Which colour of light has the shortest wavelength?",
    options: {
      A: "Red",
      B: "Yellow",
      C: "Violet",
      D: "Green",
    },
    correctAnswer: "C",
    explanation:
      "Violet light has the shortest wavelength in the visible spectrum.",
  },
  {
    id: 682,
    subject: "Social Studies",
    question: "Which is a positive effect of globalisation on communities?",
    options: {
      A: "Increased access to goods and knowledge",
      B: "Complete isolation",
      C: "No cultural exchange",
      D: "Reduced communication",
    },
    correctAnswer: "A",
    explanation:
      "Globalisation connects communities, enabling trade, cultural sharing and knowledge exchange.",
  },
  {
    id: 683,
    subject: "CRE",
    question:
      "Which action did Peter deny three times according to the Gospel accounts?",
    options: {
      A: "Knowing Jesus",
      B: "Believing in God",
      C: "Being a disciple",
      D: "All of the above are the same",
    },
    correctAnswer: "D",
    explanation:
      "Peter denied knowing and being associated with Jesus three times after Jesus' arrest.",
  },
  {
    id: 684,
    subject: "Agriculture",
    question: "Which pest control method uses natural enemies of pests?",
    options: {
      A: "Chemical spraying",
      B: "Biological control",
      C: "Hand-picking every day",
      D: "Removing all plants",
    },
    correctAnswer: "B",
    explanation:
      "Biological control introduces predators or parasites to manage pest populations naturally.",
  },
  {
    id: 685,
    subject: "Music",
    question:
      "Which instrument is typically the lead instrument in a brass band?",
    options: {
      A: "French horn",
      B: "Trumpet",
      C: "Tuba",
      D: "Trombone",
    },
    correctAnswer: "B",
    explanation:
      "The trumpet, with its bright sound, typically carries the melody in brass bands.",
  },
  {
    id: 686,
    subject: "Home Science",
    question: "Which cooking method retains the most nutrients in vegetables?",
    options: {
      A: "Steaming",
      B: "Long boiling",
      C: "Deep frying",
      D: "Baking at high heat for long periods",
    },
    correctAnswer: "A",
    explanation:
      "Steaming minimises nutrient loss by avoiding prolonged water contact and heat exposure.",
  },
  {
    id: 687,
    subject: "Physical & Health Education",
    question: "Which is a common cause of sports injuries in children?",
    options: {
      A: "Lack of warm-up and proper form",
      B: "Playing with friends",
      C: "Using good equipment",
      D: "Having a coach",
    },
    correctAnswer: "A",
    explanation:
      "Inadequate warm-ups and poor technique increase injury risk during sports.",
  },
  {
    id: 688,
    subject: "ICT/Computer Studies",
    question: "Which device allows printing at high speed in offices?",
    options: {
      A: "Photo printer",
      B: "Network laser printer",
      C: "Mobile printer only",
      D: "Typewriter",
    },
    correctAnswer: "B",
    explanation:
      "Network laser printers handle large volumes quickly and are standard in offices.",
  },
  {
    id: 689,
    subject: "Mathematics",
    question: "What is the distance around a square with side 6 cm?",
    options: {
      A: "12 cm",
      B: "24 cm",
      C: "36 cm",
      D: "18 cm",
    },
    correctAnswer: "B",
    explanation: "Perimeter = 4 × side = 4 × 6 = 24 cm.",
  },
  {
    id: 690,
    subject: "English",
    question: "Which sentence correctly uses the superlative form? ",
    options: {
      A: "She is the most fastest runner.",
      B: "She is the fastest runner in the school.",
      C: "She is more fastest than others.",
      D: "She is the most fast runner.",
    },
    correctAnswer: "B",
    explanation:
      "'The fastest' is correct superlative; 'most fastest' is redundant and grammatically incorrect.",
  },
  {
    id: 691,
    subject: "Kiswahili",
    question: "Chagua neno sahihi: 'Nilikuwa ninalala ___ mchana.'",
    options: {
      A: "kwa",
      B: "wakati",
      C: "jioni",
      D: "asubuhi",
    },
    correctAnswer: "B",
    explanation:
      "'Wakati mchana' means 'during the day'; 'jioni' is evening, 'asubuhi' is morning.",
  },
  {
    id: 692,
    subject: "Science & Technology",
    question: "Which part of the eye focuses light on the retina?",
    options: {
      A: "Cornea and lens",
      B: "Pupil only",
      C: "Iris only",
      D: "Retina",
    },
    correctAnswer: "A",
    explanation:
      "The cornea provides initial focusing; the lens fine-tunes focus on the retina.",
  },
  {
    id: 693,
    subject: "Social Studies",
    question: "Which is an important right of workers in a country?",
    options: {
      A: "Right to fair wages and safe working conditions",
      B: "No right to breaks",
      C: "No protection from harm",
      D: "Working unlimited hours without pay",
    },
    correctAnswer: "A",
    explanation:
      "Worker rights include fair compensation, safe conditions and reasonable working hours.",
  },
  {
    id: 694,
    subject: "CRE",
    question:
      "Which sacrament involves the anointing of the sick in Christian practice?",
    options: {
      A: "Baptism",
      B: "Communion",
      C: "Anointing of the Sick (Last Rites)",
      D: "Confirmation",
    },
    correctAnswer: "C",
    explanation:
      "The Anointing of the Sick is a sacrament providing spiritual comfort to the ill or dying.",
  },
  {
    id: 695,
    subject: "Agriculture",
    question: "Which helps bees pollinate crops and vegetables?",
    options: {
      A: "Pesticides used excessively",
      B: "Planting diverse flowers near crops",
      C: "Removing all flowers",
      D: "Keeping bees out",
    },
    correctAnswer: "B",
    explanation:
      "Diverse flowers attract and support bees, which then pollinate crops, improving yields.",
  },
  {
    id: 696,
    subject: "Music",
    question:
      "Which symbol indicates to hold a note longer than its written value?",
    options: {
      A: "Fermata (𝄐)",
      B: "Staccato dot",
      C: "Natural sign",
      D: "Repeat sign",
    },
    correctAnswer: "A",
    explanation:
      "A fermata symbol indicates to hold the note at the performer's discretion.",
  },
  {
    id: 697,
    subject: "Home Science",
    question:
      "Which fabric material requires gentle washing to maintain quality?",
    options: {
      A: "Silk and wool",
      B: "Cotton and linen",
      C: "Polyester",
      D: "Denim",
    },
    correctAnswer: "A",
    explanation:
      "Delicate fabrics like silk and wool need cool water and gentle handling to prevent damage.",
  },
  {
    id: 698,
    subject: "Physical & Health Education",
    question: "Which is the correct procedure for CPR (chest compressions)?",
    options: {
      A: "Fast, hard compressions at the centre of the chest",
      B: "Very slow, light compressions",
      C: "Compressions on the side only",
      D: "No compressions needed",
    },
    correctAnswer: "A",
    explanation:
      "CPR requires fast (100-120/min), firm compressions at the chest centre to circulate blood.",
  },
  {
    id: 699,
    subject: "ICT/Computer Studies",
    question:
      "Which file format is best for sharing documents that shouldn't be edited easily?",
    options: {
      A: "PDF",
      B: "DOCX",
      C: "TXT",
      D: "XLSX",
    },
    correctAnswer: "A",
    explanation:
      "PDF format preserves formatting and restricts editing, making it ideal for sharing finished documents.",
  },
  {
    id: 700,
    subject: "Mathematics",
    question: "Which is the least common multiple (LCM) of 6 and 8?",
    options: {
      A: "12",
      B: "24",
      C: "48",
      D: "6",
    },
    correctAnswer: "B",
    explanation:
      "Multiples of 6: 6,12,18,24...   Multiples of 8: 8,16,24...  LCM is 24.",
  },
  {
    id: 701,
    subject: "English",
    question:
      "Which word is a conjunction in:   'She studied hard and passed the exam.'? ",
    options: {
      A: "studied",
      B: "hard",
      C: "and",
      D: "passed",
    },
    correctAnswer: "C",
    explanation:
      "'And' connects two independent clauses, functioning as a conjunction.",
  },
  {
    id: 702,
    subject: "Mathematics",
    question: "What is 45 ÷ 9?",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7",
    },
    correctAnswer: "B",
    explanation: "Divide 45 by 9: 45 ÷ 9 = 5.",
  },
  {
    id: 703,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'The teacher wrote on the blackboard.'",
    options: {
      A: "Mwalimu aliandika kwenye ubao mweusi.",
      B: "Mwalimu anandika kwenye ubao mweusi.",
      C: "Mwalimu ataandika kwenye ubao mweusi.",
      D: "Mwalimu anakula kwenye ubao mweusi.",
    },
    correctAnswer: "A",
    explanation:
      "'Aliandika' is past tense; the sentence correctly describes a completed action.",
  },
  {
    id: 704,
    subject: "Science & Technology",
    question: "Which type of blood cell helps fight infections in the body?",
    options: {
      A: "Red blood cells",
      B: "White blood cells",
      C: "Platelets",
      D: "Plasma",
    },
    correctAnswer: "B",
    explanation:
      "White blood cells (leukocytes) are part of the immune system and combat infections.",
  },
  {
    id: 705,
    subject: "Social Studies",
    question: "Which is a characteristic of a democratic government?",
    options: {
      A: "Citizens participate in decision-making through voting",
      B: "One person makes all decisions",
      C: "Military controls all power",
      D: "No laws or rules",
    },
    correctAnswer: "A",
    explanation:
      "Democracy involves citizen participation in choosing leaders and making laws through voting.",
  },
  {
    id: 706,
    subject: "CRE",
    question:
      "Which teaching warns against the love of money in Christian faith?",
    options: {
      A: "'Money is evil'",
      B: "'The love of money is the root of all evil'",
      C: "'Do not work'",
      D: "'Steal from the rich'",
    },
    correctAnswer: "B",
    explanation:
      "The Bible teaches that obsession with money (not money itself) leads to sin and wrongdoing.",
  },
  {
    id: 707,
    subject: "Agriculture",
    question:
      "Which practice helps improve soil structure and water retention?",
    options: {
      A: "Adding organic matter like compost",
      B: "Removing all vegetation",
      C: "Compacting soil heavily",
      D: "Using only chemicals",
    },
    correctAnswer: "A",
    explanation:
      "Organic matter improves soil's ability to hold water and supports beneficial microorganisms.",
  },
  {
    id: 708,
    subject: "Music",
    question: "Which musical term means to gradually speed up the tempo?",
    options: {
      A: "Accelerando",
      B: "Ritardando",
      C: "Moderato",
      D: "Largo",
    },
    correctAnswer: "A",
    explanation:
      "Accelerando (accel.) directs musicians to gradually increase the speed.",
  },
  {
    id: 709,
    subject: "Home Science",
    question: "Which is the safest way to store raw meat in a refrigerator?",
    options: {
      A: "On the top shelf with other foods",
      B: "On the lowest shelf in a sealed container",
      C: "In the freezer door",
      D: "Uncovered on the counter",
    },
    correctAnswer: "B",
    explanation:
      "Lowest shelf storage prevents meat juices from dripping on other foods and causing contamination.",
  },
  {
    id: 710,
    subject: "Physical & Health Education",
    question: "Which mineral helps prevent anaemia when found in foods?",
    options: {
      A: "Calcium",
      B: "Iron",
      C: "Sodium",
      D: "Potassium",
    },
    correctAnswer: "B",
    explanation:
      "Iron is essential for red blood cell production; deficiency causes anaemia.",
  },
  {
    id: 711,
    subject: "ICT/Computer Studies",
    question: "Which action helps prevent identity theft online?",
    options: {
      A: "Sharing personal identification numbers publicly",
      B: "Using strong passwords and not clicking suspicious links",
      C: "Opening all email attachments",
      D: "Posting social security numbers online",
    },
    correctAnswer: "B",
    explanation:
      "Strong passwords and avoiding phishing links protect personal information from theft.",
  },
  {
    id: 712,
    subject: "Mathematics",
    question: "Which shape has three sides and three angles?",
    options: {
      A: "Square",
      B: "Pentagon",
      C: "Triangle",
      D: "Hexagon",
    },
    correctAnswer: "C",
    explanation:
      "A triangle is a three-sided polygon with three interior angles.",
  },
  {
    id: 713,
    subject: "English",
    question: "Which sentence is written in the passive voice?",
    options: {
      A: "The teacher wrote the lesson on the board.",
      B: "The lesson was written on the board by the teacher.",
      C: "The teacher writes lessons daily.",
      D: "The lesson teaches students.",
    },
    correctAnswer: "B",
    explanation:
      "Passive voice emphasizes the action (was written) rather than the doer.",
  },
  {
    id: 714,
    subject: "Kiswahili",
    question: "Chagua neno sahihi:  'Ninapenda kucheza tupu ___ rafiki zangu.'",
    options: {
      A: "na",
      B: "kwa",
      C: "sana",
      D: "tu",
    },
    correctAnswer: "A",
    explanation:
      "'Na rafiki zangu' means 'with my friends'; 'na' is the preposition for companionship.",
  },
  {
    id: 715,
    subject: "Science & Technology",
    question: "Which process removes salt from seawater to make it drinkable?",
    options: {
      A: "Distillation",
      B: "Filtration",
      C: "Evaporation",
      D: "Condensation",
    },
    correctAnswer: "A",
    explanation:
      "Distillation boils water and condenses the vapour to separate salt and obtain fresh water.",
  },
  {
    id: 716,
    subject: "Social Studies",
    question: "Which is an example of peer pressure among young people?",
    options: {
      A: "Encouraging friends to study together",
      B: "Pressuring friends to try harmful substances",
      C: "Playing sports as a team",
      D: "Working on group projects",
    },
    correctAnswer: "B",
    explanation:
      "Negative peer pressure involves coercing others into unhealthy or dangerous behaviours.",
  },
  {
    id: 717,
    subject: "CRE",
    question:
      "Which virtue is shown when a person forgives someone who wronged them?",
    options: {
      A: "Revenge",
      B: "Anger",
      C: "Forgiveness",
      D: "Bitterness",
    },
    correctAnswer: "C",
    explanation:
      "Forgiveness is a core virtue in Christian teaching, demonstrating grace and mercy.",
  },
  {
    id: 718,
    subject: "Agriculture",
    question: "Which livestock product can be used as a renewable fuel source?",
    options: {
      A: "Leather",
      B: "Manure (for biogas)",
      C: "Wool",
      D: "Bones",
    },
    correctAnswer: "B",
    explanation:
      "Animal manure can be processed to produce biogas, a renewable energy source.",
  },
  {
    id: 719,
    subject: "Music",
    question: "Which range of the human voice is typically the highest?",
    options: {
      A: "Bass",
      B: "Baritone",
      C: "Soprano",
      D: "Alto",
    },
    correctAnswer: "C",
    explanation: "Soprano is the highest vocal range, typically female voices.",
  },
  {
    id: 720,
    subject: "Home Science",
    question: "Which cooking method uses dry heat without added fat?",
    options: {
      A: "Boiling",
      B: "Roasting or baking",
      C: "Frying",
      D: "Steaming",
    },
    correctAnswer: "B",
    explanation:
      "Roasting and baking use dry oven heat; other methods add liquid or fat.",
  },
  {
    id: 721,
    subject: "Physical & Health Education",
    question:
      "Which is an appropriate cool-down activity after intense exercise?",
    options: {
      A: "Stopping immediately and sitting",
      B: "Gentle walking and slow stretching",
      C: "Immediately lifting heavy weights",
      D: "Eating a heavy meal",
    },
    correctAnswer: "B",
    explanation:
      "Cool-down allows heart rate to decrease gradually and reduces muscle soreness.",
  },
  {
    id: 722,
    subject: "ICT/Computer Studies",
    question:
      "Which view in a spreadsheet allows you to see formulas instead of results?",
    options: {
      A: "Normal view",
      B: "Formula view",
      C: "Page view",
      D: "Print preview",
    },
    correctAnswer: "B",
    explanation:
      "Formula view displays the underlying formulas; normal view shows calculated results.",
  },
  {
    id: 723,
    subject: "Mathematics",
    question:
      "If you have 24 marbles and divide them equally among 6 friends, how many does each get?",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "6",
    },
    correctAnswer: "B",
    explanation: "Divide 24 by 6: 24 ÷ 6 = 4 marbles per friend.",
  },
  {
    id: 724,
    subject: "English",
    question:
      "Which word is an article in the sentence:  'I saw a beautiful rainbow.'?",
    options: {
      A: "saw",
      B: "beautiful",
      C: "a",
      D: "rainbow",
    },
    correctAnswer: "C",
    explanation:
      "'A' is an indefinite article that precedes the noun 'rainbow'.",
  },
  {
    id: 725,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'Where do you live?'",
    options: {
      A: "Je, unakaa wapi? ",
      B: "Je, unaenda wapi?",
      C: "Je, unakula wapi?",
      D: "Je, unakuja wapi?",
    },
    correctAnswer: "A",
    explanation:
      "'Unakaa wapi?' correctly asks 'Where do you live?'; 'kaa' means to live/stay.",
  },
  {
    id: 726,
    subject: "Science & Technology",
    question: "Which instrument measures atmospheric humidity?",
    options: {
      A: "Barometer",
      B: "Hygrometer",
      C: "Thermometer",
      D: "Anemometer",
    },
    correctAnswer: "B",
    explanation:
      "A hygrometer measures moisture content in the air (humidity).",
  },
  {
    id: 727,
    subject: "Social Studies",
    question: "Which is an important step in the election process?",
    options: {
      A: "Registering voters",
      B: "Ignoring eligible citizens",
      C: "Preventing voting",
      D: "No registration needed",
    },
    correctAnswer: "A",
    explanation:
      "Voter registration ensures eligible citizens can participate in elections.",
  },
  {
    id: 728,
    subject: "CRE",
    question: "Which parable teaches the importance of perseverance in prayer?",
    options: {
      A: "Parable of the Prodigal Son",
      B: "Parable of the Widow and the Unjust Judge",
      C: "Parable of the Sower",
      D: "Parable of the Talents",
    },
    correctAnswer: "B",
    explanation:
      "The Widow and Judge parable teaches persistence in seeking justice and prayer.",
  },
  {
    id: 729,
    subject: "Agriculture",
    question: "Which practice helps prevent pest outbreaks by rotating crops?",
    options: {
      A: "Planting the same crop every year",
      B: "Growing different crops in sequence",
      C: "Removing all insects immediately",
      D: "Using pesticides on every crop",
    },
    correctAnswer: "B",
    explanation:
      "Rotating crops breaks pest life cycles as they cannot find their host plant the following year.",
  },
  {
    id: 730,
    subject: "Music",
    question: "Which woodwind instrument has a single reed? ",
    options: {
      A: "Oboe",
      B: "Clarinet",
      C: "Saxophone",
      D: "All of the above",
    },
    correctAnswer: "D",
    explanation:
      "Oboe, clarinet and saxophone all use single reeds (flutes use no reed).",
  },
  {
    id: 731,
    subject: "Home Science",
    question: "Which is the proper way to dispose of used cooking oil?",
    options: {
      A: "Pouring it down the kitchen sink",
      B: "Storing it in a sealed container for disposal",
      C: "Dumping it in the yard",
      D: "Leaving it to solidify on dishes",
    },
    correctAnswer: "B",
    explanation:
      "Proper storage in containers prevents clogged pipes and environmental damage.",
  },
  {
    id: 732,
    subject: "Physical & Health Education",
    question:
      "Which type of exercise improves flexibility and reduces muscle tension?",
    options: {
      A: "Weight lifting",
      B: "Yoga and stretching",
      C: "Sprinting",
      D: "Competitive sports only",
    },
    correctAnswer: "B",
    explanation:
      "Yoga and stretching increase range of motion and release muscular tension.",
  },
  {
    id: 733,
    subject: "ICT/Computer Studies",
    question: "Which software tool is used to create and edit images?",
    options: {
      A: "Word processor",
      B: "Spreadsheet software",
      C: "Image editor (e.g., Photoshop)",
      D: "Database software",
    },
    correctAnswer: "C",
    explanation:
      "Image editors allow creation, manipulation and enhancement of digital images.",
  },
  {
    id: 734,
    subject: "Mathematics",
    question: "What is 20% of 50?",
    options: {
      A: "5",
      B: "10",
      C: "15",
      D: "20",
    },
    correctAnswer: "B",
    explanation: "20% of 50 = 0.20 × 50 = 10.",
  },
  {
    id: 735,
    subject: "English",
    question: "Which word is correctly spelled in the options?",
    options: {
      A: "Definately",
      B: "Definetely",
      C: "Definitely",
      D: "Definitly",
    },
    correctAnswer: "C",
    explanation: "'Definitely' is the correct spelling with '-ite' and '-ly'.",
  },
  {
    id: 736,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'I have already eaten.'",
    options: {
      A: "Nimekamatia chakula.",
      B: "Nimekula chakula.",
      C: "Ninakula chakula.",
      D: "Nitakula chakula.",
    },
    correctAnswer: "B",
    explanation:
      "'Nimekula' is perfect tense meaning 'I have eaten'; 'chakula' is food.",
  },
  {
    id: 737,
    subject: "Science & Technology",
    question: "Which organ produces enzymes for digestion?",
    options: {
      A: "Liver",
      B: "Pancreas",
      C: "Stomach",
      D: "Small intestine",
    },
    correctAnswer: "B",
    explanation:
      "The pancreas produces digestive enzymes that break down carbohydrates, proteins and fats.",
  },
  {
    id: 738,
    subject: "Social Studies",
    question: "Which is an example of responsible consumption?",
    options: {
      A: "Buying only what you need",
      B: "Buying excessively",
      C: "Wasting resources",
      D: "Littering after purchases",
    },
    correctAnswer: "A",
    explanation:
      "Responsible consumption means making mindful purchases that don't harm the environment.",
  },
  {
    id: 739,
    subject: "CRE",
    question:
      "Which Christian practice involves gathering regularly to worship and pray?",
    options: {
      A: "Fasting only",
      B: "Church attendance",
      C: "Bible reading alone",
      D: "Giving charity only",
    },
    correctAnswer: "B",
    explanation:
      "Church attendance for communal worship is a central Christian practice.",
  },
  {
    id: 740,
    subject: "Agriculture",
    question:
      "Which sign indicates that a fruit is ripe and ready for harvest?",
    options: {
      A: "Green colour only",
      B: "Firm texture always",
      C: "Appropriate colour, slight softness and fragrance",
      D: "Hard texture",
    },
    correctAnswer: "C",
    explanation:
      "Ripe fruits typically show characteristic colour, mild softness and smell.",
  },
  {
    id: 741,
    subject: "Music",
    question: "Which musical term means to play very loudly?",
    options: {
      A: "Pianissimo",
      B: "Mezzo-forte",
      C: "Fortissimo",
      D: "Piano",
    },
    correctAnswer: "C",
    explanation: "Fortissimo (ff) directs musicians to play very loudly.",
  },
  {
    id: 742,
    subject: "Home Science",
    question: "Which food combination provides a complete protein?",
    options: {
      A: "Rice and beans",
      B: "Only rice",
      C: "Only beans",
      D: "Vegetables alone",
    },
    correctAnswer: "A",
    explanation:
      "Rice and beans together contain all essential amino acids, forming a complete protein.",
  },
  {
    id: 743,
    subject: "Physical & Health Education",
    question: "Which is a proper body mechanics principle when lifting? ",
    options: {
      A: "Bend at the waist only",
      B: "Keep feet together always",
      C: "Bend knees and keep back straight",
      D: "Twist while lifting",
    },
    correctAnswer: "C",
    explanation:
      "Proper lifting uses leg muscles and maintains a neutral spine to prevent injury.",
  },
  {
    id: 744,
    subject: "ICT/Computer Studies",
    question:
      "Which term describes converting data into unreadable code for security?",
    options: {
      A: "Decryption",
      B: "Encryption",
      C: "Compression",
      D: "Backup",
    },
    correctAnswer: "B",
    explanation:
      "Encryption protects data by converting it to code; only the key can decrypt it.",
  },
  {
    id: 745,
    subject: "Mathematics",
    question: "Which is the order of operations (PEMDAS/BODMAS) priority?",
    options: {
      A: "Parentheses, Exponents, Multiplication, Division, Addition, Subtraction",
      B: "Addition, Subtraction, Multiplication, Division, Exponents, Parentheses",
      C: "Multiplication, Division, Addition, Subtraction, Exponents, Parentheses",
      D: "All operations have equal priority",
    },
    correctAnswer: "A",
    explanation: "PEMDAS ensures consistent mathematical calculation order.",
  },
  {
    id: 746,
    subject: "English",
    question: "Which sentence uses correct capitalization of a place name?",
    options: {
      A: "I visited new york last summer.",
      B: "I visited New York last summer.",
      C: "I visited New york last summer.",
      D: "I visited new York last summer.",
    },
    correctAnswer: "B",
    explanation: "Proper nouns like place names are capitalized:  'New York'.",
  },
  {
    id: 747,
    subject: "Kiswahili",
    question: "Chagua sahihi:  'Mtu mwehu ana kazi nzuri ___ hospitali.'",
    options: {
      A: "katika",
      B: "na",
      C: "kwa",
      D: "sana",
    },
    correctAnswer: "A",
    explanation:
      "'Katika hospitali' means 'in the hospital'; 'katika' indicates location.",
  },
  {
    id: 748,
    subject: "Science & Technology",
    question: "Which type of mirror produces a magnified image?",
    options: {
      A: "Plane mirror",
      B: "Convex mirror",
      C: "Concave mirror",
      D: "Prism",
    },
    correctAnswer: "C",
    explanation:
      "A concave (curved inward) mirror can magnify objects when placed properly.",
  },
  {
    id: 749,
    subject: "Social Studies",
    question: "Which is an environmental impact of plastic pollution?",
    options: {
      A: "Harming marine animals",
      B: "Improving water quality",
      C: "Helping ecosystems",
      D: "Reducing waste",
    },
    correctAnswer: "A",
    explanation:
      "Plastic pollution harms wildlife through entanglement and ingestion.",
  },
  {
    id: 750,
    subject: "CRE",
    question: "Which religious text is the holy book of Christianity?",
    options: {
      A: "The Quran",
      B: "The Bible",
      C: "The Torah",
      D: "The Vedas",
    },
    correctAnswer: "B",
    explanation:
      "The Bible contains the Old and New Testaments and is Christianity's sacred text.",
  },
  {
    id: 751,
    subject: "Agriculture",
    question:
      "Which farming system integrates crops and livestock for maximum efficiency?",
    options: {
      A: "Monoculture",
      B: "Mixed farming",
      C: "Subsistence farming only",
      D: "Nomadic herding",
    },
    correctAnswer: "B",
    explanation:
      "Mixed farming combines crop and livestock production, improving resource use and sustainability.",
  },
  {
    id: 752,
    subject: "Music",
    question: "Which is the lowest note range in a mixed choir?",
    options: {
      A: "Soprano",
      B: "Alto",
      C: "Tenor",
      D: "Bass",
    },
    correctAnswer: "D",
    explanation: "Bass is the lowest male vocal range in a choir.",
  },
  {
    id: 753,
    subject: "Home Science",
    question: "Which nutrient helps build and repair body tissues?",
    options: {
      A: "Carbohydrates",
      B: "Proteins",
      C: "Fats",
      D: "Water",
    },
    correctAnswer: "B",
    explanation:
      "Proteins provide amino acids essential for building muscles and repairing tissues.",
  },
  {
    id: 754,
    subject: "Physical & Health Education",
    question:
      "Which activity best helps develop balance and coordination in children?",
    options: {
      A: "Video games",
      B: "Balancing on one leg and walking beams",
      C: "Watching television",
      D: "Reading only",
    },
    correctAnswer: "B",
    explanation:
      "Balance activities challenge proprioception and develop motor coordination.",
  },
  {
    id: 755,
    subject: "ICT/Computer Studies",
    question: "Which of these is considered a strong cybersecurity practice?",
    options: {
      A: "Using the same password for all accounts",
      B: "Changing passwords regularly",
      C: "Sharing passwords with trusted friends",
      D: "Writing passwords on sticky notes",
    },
    correctAnswer: "B",
    explanation:
      "Regular password changes reduce the risk of unauthorized access.",
  },
  {
    id: 756,
    subject: "Mathematics",
    question: "Which fraction is the smallest:  1/2, 1/3, 1/4, 1/5?",
    options: {
      A: "1/2",
      B: "1/3",
      C: "1/4",
      D: "1/5",
    },
    correctAnswer: "D",
    explanation:
      "The larger the denominator, the smaller the fraction; 1/5 is the smallest.",
  },
  {
    id: 757,
    subject: "English",
    question:
      "Which word is a determiner in:   'Those children are very intelligent.'? ",
    options: {
      A: "children",
      B: "are",
      C: "Those",
      D: "intelligent",
    },
    correctAnswer: "C",
    explanation:
      "'Those' is a demonstrative determiner that specifies which children.",
  },
  {
    id: 758,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'What time is it?'",
    options: {
      A: "Saa ngapi? ",
      B: "Wapi?",
      C: "Nini?",
      D: "Kwa nini?",
    },
    correctAnswer: "A",
    explanation:
      "'Saa ngapi?' directly translates to 'What time is it?' (literally 'how many hours?').",
  },
  {
    id: 759,
    subject: "Science & Technology",
    question: "Which process allows seeds to begin growth after dormancy?",
    options: {
      A: "Pollination",
      B: "Germination",
      C: "Photosynthesis",
      D: "Transpiration",
    },
    correctAnswer: "B",
    explanation:
      "Germination is the process where a seed sprouts and begins to grow into a plant.",
  },
  {
    id: 760,
    subject: "Social Studies",
    question: "Which right allows citizens to express their views freely?",
    options: {
      A: "Right to work",
      B: "Freedom of speech",
      C: "Right to education",
      D: "Right to travel",
    },
    correctAnswer: "B",
    explanation:
      "Freedom of speech is a fundamental right allowing citizens to voice opinions.",
  },
  {
    id: 761,
    subject: "CRE",
    question:
      "Which biblical figure is known for his faith despite life's challenges?",
    options: {
      A: "Job",
      B: "Judas",
      C: "Goliath",
      D: "Pharaoh",
    },
    correctAnswer: "A",
    explanation:
      "Job's story illustrates maintaining faith through severe trials and suffering.",
  },
  {
    id: 762,
    subject: "Agriculture",
    question: "Which crop is a nitrogen-fixing legume that improves soil?",
    options: {
      A: "Maize",
      B: "Cowpea",
      C: "Sorghum",
      D: "Millet",
    },
    correctAnswer: "B",
    explanation:
      "Cowpea (a legume) has nitrogen-fixing bacteria that enrich soil when incorporated.",
  },
  {
    id: 763,
    subject: "Music",
    question: "Which instrument requires both hands to play properly?",
    options: {
      A: "Trumpet",
      B: "Piano",
      C: "Clarinet",
      D: "Violin",
    },
    correctAnswer: "B",
    explanation:
      "Piano playing requires both hands for melody and harmony simultaneously.",
  },
  {
    id: 764,
    subject: "Home Science",
    question: "Which is a proper food hygiene practice in kitchens?",
    options: {
      A: "Washing hands before food preparation",
      B: "Handling raw and cooked foods with same utensils",
      C: "Tasting food with the serving spoon",
      D: "Leaving food uncovered",
    },
    correctAnswer: "A",
    explanation: "Handwashing removes germs and prevents foodborne illness.",
  },
  {
    id: 765,
    subject: "Physical & Health Education",
    question: "Which is a sign of good physical fitness?",
    options: {
      A: "Ability to perform daily activities without excessive fatigue",
      B: "Always feeling tired",
      C: "Avoiding all exercise",
      D: "Weak muscles",
    },
    correctAnswer: "A",
    explanation:
      "Physical fitness allows people to perform tasks efficiently and feel energetic.",
  },
  {
    id: 766,
    subject: "ICT/Computer Studies",
    question: "Which of these is an appropriate email subject line?",
    options: {
      A: "Hi",
      B: "Meeting Scheduled for Friday at 2 PM",
      C: "Fwd",
      D: "Check this out",
    },
    correctAnswer: "B",
    explanation:
      "Clear, specific subject lines help recipients understand email content quickly.",
  },
  {
    id: 767,
    subject: "Mathematics",
    question:
      "What is the sum of angles in a quadrilateral (four-sided shape)?",
    options: {
      A: "180°",
      B: "270°",
      C: "360°",
      D: "450°",
    },
    correctAnswer: "C",
    explanation: "The interior angles of any quadrilateral sum to 360 degrees.",
  },
  {
    id: 768,
    subject: "English",
    question: "Which word is a modal verb in:   'She should study harder.'?",
    options: {
      A: "study",
      B: "should",
      C: "harder",
      D: "she",
    },
    correctAnswer: "B",
    explanation:
      "'Should' is a modal verb expressing obligation or recommendation.",
  },
  {
    id: 769,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'I love my country.'",
    options: {
      A: "Ninapenda nchi yangu.",
      B: "Ninapenda wangu.",
      C: "Ninapenda familia yangu.",
      D: "Ninapenda shule yangu.",
    },
    correctAnswer: "A",
    explanation:
      "'Nchi yangu' means 'my country'; the sentence correctly expresses patriotism.",
  },
  {
    id: 770,
    subject: "Science & Technology",
    question:
      "Which gas do animals exhale that plants need for photosynthesis?",
    options: {
      A: "Oxygen",
      B: "Nitrogen",
      C: "Carbon dioxide",
      D: "Hydrogen",
    },
    correctAnswer: "C",
    explanation:
      "Animals exhale carbon dioxide, which plants use as a raw material for photosynthesis.",
  },
  {
    id: 771,
    subject: "Social Studies",
    question: "Which is a benefit of learning about different cultures?",
    options: {
      A: "Reduced tolerance",
      B: "Increased understanding and respect",
      C: "More conflict",
      D: "Rejection of diversity",
    },
    correctAnswer: "B",
    explanation:
      "Understanding diverse cultures builds empathy and promotes peaceful coexistence.",
  },
  {
    id: 772,
    subject: "CRE",
    question: "Which action demonstrates honesty in Christian ethics?",
    options: {
      A: "Telling lies for personal gain",
      B: "Admitting mistakes and speaking truth",
      C: "Deceiving others",
      D: "Breaking promises",
    },
    correctAnswer: "B",
    explanation:
      "Honesty means truthfulness and integrity, core Christian virtues.",
  },
  {
    id: 773,
    subject: "Agriculture",
    question: "Which method conserves water on farms in arid regions?",
    options: {
      A: "Drip irrigation",
      B: "Flood irrigation only",
      C: "No irrigation",
      D: "Daily overhead watering",
    },
    correctAnswer: "A",
    explanation:
      "Drip irrigation delivers water directly to plant roots, minimizing waste.",
  },
  {
    id: 774,
    subject: "Music",
    question:
      "Which notation symbol indicates a note should be played shorter?",
    options: {
      A: "Staccato dot (·)",
      B: "Fermata",
      C: "Slur",
      D: "Accent mark",
    },
    correctAnswer: "A",
    explanation:
      "A staccato dot shortens a note's duration by detaching it from following notes.",
  },
  {
    id: 775,
    subject: "Home Science",
    question:
      "Which is the recommended daily water intake for a healthy adult?",
    options: {
      A: "1 glass",
      B: "About 8 glasses or 2 litres",
      C: "Never drink water",
      D: "As much as possible",
    },
    correctAnswer: "B",
    explanation:
      "Adequate hydration (about 8 glasses/2L daily) supports bodily functions.",
  },
  {
    id: 776,
    subject: "Physical & Health Education",
    question: "Which health habit helps maintain a healthy weight?",
    options: {
      A: "Balanced diet and regular exercise",
      B: "Skipping meals",
      C: "Eating only junk food",
      D: "No physical activity",
    },
    correctAnswer: "A",
    explanation:
      "Proper nutrition and exercise balance energy intake with expenditure.",
  },
  {
    id: 777,
    subject: "ICT/Computer Studies",
    question: "Which of these is a legitimate social media safety practice?",
    options: {
      A: "Sharing personal details with strangers",
      B: "Reviewing privacy settings regularly",
      C: "Posting location information constantly",
      D: "Accepting all friend requests",
    },
    correctAnswer: "B",
    explanation:
      "Regular privacy setting reviews protect personal information from misuse.",
  },
  {
    id: 778,
    subject: "Mathematics",
    question: "What is 3/4 expressed as a percentage?",
    options: {
      A: "30%",
      B: "50%",
      C: "75%",
      D: "25%",
    },
    correctAnswer: "C",
    explanation: "3/4 = 0.75 = 75%.",
  },
  {
    id: 779,
    subject: "English",
    question: "Which sentence uses correct subject-verb agreement?",
    options: {
      A: "The team are playing well together.",
      B: "The team is playing well together.",
      C: "The team do play well together.",
      D: "The team have played well together.",
    },
    correctAnswer: "B",
    explanation:
      "In American English, 'team' is singular, taking 'is'; in British English both may be acceptable.",
  },
  {
    id: 780,
    subject: "Kiswahili",
    question: "Chagua neno sahihi:  'Tuliweza kumaliza kazi ___ saa mbili.'",
    options: {
      A: "saa",
      B: "katika",
      C: "kwa",
      D: "kila",
    },
    correctAnswer: "C",
    explanation:
      "'Kwa saa mbili' means 'in two hours'; 'kwa' indicates time duration.",
  },
  {
    id: 781,
    subject: "Science & Technology",
    question: "Which is an example of renewable energy?",
    options: {
      A: "Coal",
      B: "Natural gas",
      C: "Wind power",
      D: "Oil",
    },
    correctAnswer: "C",
    explanation:
      "Wind is a renewable resource; fossil fuels (coal, gas, oil) are non-renewable.",
  },
  {
    id: 782,
    subject: "Social Studies",
    question:
      "Which institution is responsible for educating the youth of a nation?",
    options: {
      A: "Schools and educational systems",
      B: "Shops",
      C: "Restaurants",
      D: "Factories",
    },
    correctAnswer: "A",
    explanation:
      "Schools provide formal education and prepare young people for society.",
  },
  {
    id: 783,
    subject: "CRE",
    question:
      "Which Christian sacrament marks the beginning of Christian life?",
    options: {
      A: "Communion",
      B: "Baptism",
      C: "Confirmation",
      D: "Marriage",
    },
    correctAnswer: "B",
    explanation:
      "Baptism initiates one into the Christian faith and community.",
  },
  {
    id: 784,
    subject: "Agriculture",
    question:
      "Which factor affects the choice of crop for a particular region?",
    options: {
      A: "Climate and soil type",
      B: "Random selection",
      C: "Only market price",
      D: "Personal preference only",
    },
    correctAnswer: "A",
    explanation:
      "Climate (rainfall, temperature) and soil properties determine suitable crops.",
  },
  {
    id: 785,
    subject: "Music",
    question: "Which musical interval is between two notes of the same pitch?",
    options: {
      A: "Unison",
      B: "Octave",
      C: "Major third",
      D: "Perfect fifth",
    },
    correctAnswer: "A",
    explanation:
      "Unison is when two or more notes or voices sound the exact same pitch.",
  },
  {
    id: 786,
    subject: "Home Science",
    question: "Which cooking technique uses hot oil and quick heat?",
    options: {
      A: "Boiling",
      B: "Stir-frying",
      C: "Steaming",
      D: "Baking",
    },
    correctAnswer: "B",
    explanation:
      "Stir-frying uses high heat and minimal oil for quick cooking.",
  },
  {
    id: 787,
    subject: "Physical & Health Education",
    question: "Which is a sign of overexertion during exercise?",
    options: {
      A: "Dizziness or chest pain",
      B: "Normal sweating",
      C: "Increased heart rate",
      D: "Mild fatigue",
    },
    correctAnswer: "A",
    explanation:
      "Dizziness, chest pain and severe fatigue indicate need to stop and rest.",
  },
  {
    id: 788,
    subject: "ICT/Computer Studies",
    question: "Which is the correct format for saving a file with a new name?",
    options: {
      A: "File > Open",
      B: "File > Save As",
      C: "File > Properties",
      D: "File > Print",
    },
    correctAnswer: "B",
    explanation:
      "'Save As' allows you to save a file with a different name or location.",
  },
  {
    id: 789,
    subject: "Mathematics",
    question: "How many sides does a pentagon have?",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "7",
    },
    correctAnswer: "B",
    explanation: "A pentagon is a five-sided polygon.",
  },
  {
    id: 790,
    subject: "English",
    question:
      "Which word is a verb in the infinitive form:   'I want to run quickly.'? ",
    options: {
      A: "want",
      B: "quickly",
      C: "to run",
      D: "I",
    },
    correctAnswer: "C",
    explanation: "'To run' is the infinitive form of the verb.",
  },
  {
    id: 791,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'The students passed the exam.'",
    options: {
      A: "Wanafunzi walilipuka mtihani.",
      B: "Wanafunzi walikubali mtihani.",
      C: "Wanafunzi walipita mtihani.",
      D: "Wanafunzi walipinga mtihani.",
    },
    correctAnswer: "C",
    explanation:
      "'Walipita' means 'passed'; the sentence correctly uses past tense.",
  },
  {
    id: 792,
    subject: "Science & Technology",
    question: "Which is an example of a physical change in matter?",
    options: {
      A: "Burning of wood",
      B: "Rusting of iron",
      C: "Melting of ice",
      D: "Boiling of an egg",
    },
    correctAnswer: "C",
    explanation:
      "Melting ice to water is a physical change; the substance remains H₂O.",
  },
  {
    id: 793,
    subject: "Social Studies",
    question: "Which practice promotes environmental conservation?",
    options: {
      A: "Logging all forests",
      B: "Pollution without limits",
      C: "Protecting forests and wildlife reserves",
      D: "Dumping waste freely",
    },
    correctAnswer: "C",
    explanation:
      "Protected areas conserve biodiversity and resources for future generations.",
  },
  {
    id: 794,
    subject: "CRE",
    question:
      "Which sin is warned against in the parable of the Rich Man and Lazarus?",
    options: {
      A: "Greed and indifference to the poor",
      B: "Hard work",
      C: "Generosity",
      D: "Helping others",
    },
    correctAnswer: "A",
    explanation: "The parable warns against greed and ignoring those in need.",
  },
  {
    id: 795,
    subject: "Agriculture",
    question: "Which practice helps maintain soil organic matter?",
    options: {
      A: "Adding crop residues back to the soil",
      B: "Burning all crop waste",
      C: "Removing soil regularly",
      D: "Using only chemicals",
    },
    correctAnswer: "A",
    explanation:
      "Returning crop residues maintains soil structure and fertility.",
  },
  {
    id: 796,
    subject: "Music",
    question: "Which is the correct term for the main melody of a song?",
    options: {
      A: "Harmony",
      B: "Melody",
      C: "Rhythm",
      D: "Dynamics",
    },
    correctAnswer: "B",
    explanation:
      "Melody is the main musical line that people sing or remember.",
  },
  {
    id: 797,
    subject: "Home Science",
    question: "Which is a proper way to reheat leftover food safely?",
    options: {
      A: "Heating to 165°F (74°C) until steaming",
      B: "Heating slightly without checking temperature",
      C: "Not reheating food",
      D: "Reheating at low temperature only",
    },
    correctAnswer: "A",
    explanation: "Proper reheating kills bacteria and ensures food safety.",
  },
  {
    id: 798,
    subject: "Physical & Health Education",
    question: "Which food provides energy for physical activities?",
    options: {
      A: "Carbohydrates",
      B: "Vitamins only",
      C: "Minerals only",
      D: "Water only",
    },
    correctAnswer: "A",
    explanation:
      "Carbohydrates (glucose) are the primary energy source for muscles during exercise.",
  },
  {
    id: 799,
    subject: "ICT/Computer Studies",
    question: "Which of these passwords is the most secure?",
    options: {
      A: "123456",
      B: "Password1",
      C: "MyP@ss2024! Secure",
      D: "abc123",
    },
    correctAnswer: "C",
    explanation:
      "Strong passwords combine uppercase, lowercase, numbers and symbols.",
  },
  {
    id: 800,
    subject: "Mathematics",
    question: "What is the next number in the pattern: 2, 4, 8, 16, ... ?",
    options: {
      A: "24",
      B: "28",
      C: "32",
      D: "36",
    },
    correctAnswer: "C",
    explanation: "Each number doubles; 16 × 2 = 32.",
  },
  {
    id: 801,
    subject: "English",
    question:
      "Which word is a noun in the sentence: 'The brown dog barked loudly.'?",
    options: {
      A: "brown",
      B: "dog",
      C: "barked",
      D: "loudly",
    },
    correctAnswer: "B",
    explanation:
      "'Dog' is a person, place or thing and functions as the main noun.",
  },
  {
    id: 802,
    subject: "Mathematics",
    question: "What is 5 + 8 + 7? ",
    options: {
      A: "18",
      B: "19",
      C: "20",
      D: "21",
    },
    correctAnswer: "C",
    explanation: "Add from left to right: 5 + 8 = 13, then 13 + 7 = 20.",
  },
  {
    id: 803,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'The book is on the table.'",
    options: {
      A: "Kitabu hiki kiko mezani.",
      B: "Kitabu hiki kiko sokoni.",
      C: "Kitabu hiki kiko darasa.",
      D: "Kitabu hiki kiko nyumbani.",
    },
    correctAnswer: "A",
    explanation:
      "'Mezani' means 'on the table'; 'kiko' indicates location using 'kuwa' + locative.",
  },
  {
    id: 804,
    subject: "Science & Technology",
    question: "Which type of animal has a backbone inside its body?",
    options: {
      A: "Insects",
      B: "Worms",
      C: "Fish",
      D: "Snails",
    },
    correctAnswer: "C",
    explanation:
      "Fish are vertebrates with an internal backbone; insects and worms are invertebrates.",
  },
  {
    id: 805,
    subject: "Social Studies",
    question: "Which is an example of a renewable natural resource?",
    options: {
      A: "Coal",
      B: "Trees",
      C: "Oil",
      D: "Natural gas",
    },
    correctAnswer: "B",
    explanation:
      "Trees can be replanted and regrown; fossil fuels take millions of years to form.",
  },
  {
    id: 806,
    subject: "CRE",
    question: "Which biblical figure sold his birthright for a bowl of stew?",
    options: {
      A: "Jacob",
      B: "Esau",
      C: "Isaac",
      D: "Abraham",
    },
    correctAnswer: "B",
    explanation:
      "Esau traded his birthright to his brother Jacob for food when hungry.",
  },
  {
    id: 807,
    subject: "Agriculture",
    question: "Which tool is used to clear weeds from between crop rows?",
    options: {
      A: "Sickle",
      B: "Hoe",
      C: "Plough",
      D: "Shovel",
    },
    correctAnswer: "B",
    explanation:
      "A hoe is designed for weeding between rows without damaging crops.",
  },
  {
    id: 808,
    subject: "Music",
    question: "Which note value is half the duration of a half note?",
    options: {
      A: "Whole note",
      B: "Quarter note",
      C: "Eighth note",
      D: "Sixteenth note",
    },
    correctAnswer: "B",
    explanation:
      "A quarter note is half of a half note's duration in common time.",
  },
  {
    id: 809,
    subject: "Home Science",
    question: "Which vegetable provides vitamin A for healthy eyes?",
    options: {
      A: "Cabbage",
      B: "Carrot",
      C: "Lettuce",
      D: "Spinach",
    },
    correctAnswer: "B",
    explanation:
      "Carrots are rich in beta-carotene, which the body converts to vitamin A.",
  },
  {
    id: 810,
    subject: "Physical & Health Education",
    question:
      "Which is the proper position for sitting at a desk to prevent back pain?",
    options: {
      A: "Slouched forward",
      B: "Lying back fully",
      C: "Feet flat, back straight, shoulders relaxed",
      D: "Twisted to one side",
    },
    correctAnswer: "C",
    explanation:
      "Proper ergonomics with straight posture and foot support prevent strain.",
  },
  {
    id: 811,
    subject: "ICT/Computer Studies",
    question:
      "Which keyboard shortcut deletes the character before the cursor?",
    options: {
      A: "Delete",
      B: "Backspace",
      C: "Tab",
      D: "Enter",
    },
    correctAnswer: "B",
    explanation:
      "Backspace removes text to the left; Delete removes text to the right.",
  },
  {
    id: 812,
    subject: "Mathematics",
    question: "What is 10 × 0.5?",
    options: {
      A: "5",
      B: "10",
      C: "15",
      D: "20",
    },
    correctAnswer: "A",
    explanation: "Multiply 10 by 0.5 (which equals 1/2): 10 × 0.5 = 5.",
  },
  {
    id: 813,
    subject: "English",
    question:
      "Which word is an adverb modifying 'walked' in:  'She walked slowly down the street.'?",
    options: {
      A: "down",
      B: "street",
      C: "slowly",
      D: "the",
    },
    correctAnswer: "C",
    explanation:
      "'Slowly' describes how she walked, modifying the verb 'walked'.",
  },
  {
    id: 814,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'I like to eat fruit.'",
    options: {
      A: "Ninapenda kula matunda.",
      B: "Ninapenda kula nyama.",
      C: "Ninapenda kula ugali.",
      D: "Ninapenda kula samaki.",
    },
    correctAnswer: "A",
    explanation:
      "'Matunda' means 'fruit'; the sentence correctly uses infinitive 'kula'.",
  },
  {
    id: 815,
    subject: "Science & Technology",
    question:
      "Which type of material allows electricity to flow through it easily?",
    options: {
      A: "Insulator",
      B: "Conductor",
      C: "Semiconductor",
      D: "Plastic",
    },
    correctAnswer: "B",
    explanation:
      "Conductors like copper and aluminum allow free movement of electrons.",
  },
  {
    id: 816,
    subject: "Social Studies",
    question:
      "Which organization helps provide clean water to communities worldwide?",
    options: {
      A: "UNICEF",
      B: "Local bakery",
      C: "Sports club",
      D: "Fashion brand",
    },
    correctAnswer: "A",
    explanation:
      "UNICEF works to ensure children have access to clean water and sanitation.",
  },
  {
    id: 817,
    subject: "CRE",
    question:
      "Which teaching emphasizes treating the sick and poor as Jesus himself?",
    options: {
      A: "Avoid the poor",
      B: "Helping the sick and poor is serving Jesus",
      C: "Only help the rich",
      D: "Ignore suffering",
    },
    correctAnswer: "B",
    explanation:
      "In Matthew 25, Jesus teaches that service to the needy is service to him.",
  },
  {
    id: 818,
    subject: "Agriculture",
    question:
      "Which practice helps prevent soil compaction from heavy machinery?",
    options: {
      A: "Using heavy vehicles repeatedly on wet soil",
      B: "Avoiding cultivation on wet soil and using lighter equipment",
      C: "Constantly tilling the soil",
      D: "Removing all vegetation",
    },
    correctAnswer: "B",
    explanation:
      "Avoiding heavy traffic on wet soil and using appropriate equipment prevents compaction.",
  },
  {
    id: 819,
    subject: "Music",
    question: "Which instrument family does the oboe belong to?",
    options: {
      A: "Brass",
      B: "Percussion",
      C: "Woodwind",
      D: "String",
    },
    correctAnswer: "C",
    explanation: "The oboe uses a double reed and is a woodwind instrument.",
  },
  {
    id: 820,
    subject: "Home Science",
    question:
      "Which cooking method uses steam under pressure to cook food faster?",
    options: {
      A: "Pressure cooking",
      B: "Boiling",
      C: "Roasting",
      D: "Grilling",
    },
    correctAnswer: "A",
    explanation:
      "Pressure cookers use high-temperature steam to reduce cooking time significantly.",
  },
  {
    id: 821,
    subject: "Physical & Health Education",
    question: "Which activity helps strengthen the core muscles? ",
    options: {
      A: "Plank exercises",
      B: "Only running",
      C: "Watching videos",
      D: "Sitting idle",
    },
    correctAnswer: "A",
    explanation:
      "Planks engage abdominal and back muscles, strengthening the core.",
  },
  {
    id: 822,
    subject: "ICT/Computer Studies",
    question: "Which of these is a proper file naming practice?",
    options: {
      A: "File 1",
      B: "Important_Document_2024",
      C: "jdjdsjd",
      D: "abc",
    },
    correctAnswer: "B",
    explanation:
      "Descriptive names with dates help identify file content and version easily.",
  },
  {
    id: 823,
    subject: "Mathematics",
    question: "What is the value of 2³ (2 to the power of 3)?",
    options: {
      A: "6",
      B: "8",
      C: "9",
      D: "12",
    },
    correctAnswer: "B",
    explanation: "2³ = 2 × 2 × 2 = 8.",
  },
  {
    id: 824,
    subject: "English",
    question: "Which sentence correctly uses 'whom' instead of 'who'?",
    options: {
      A: "Who did you call?",
      B: "Whom did you call?",
      C: "Who is going to the party?",
      D: "Whom is going to the party?",
    },
    correctAnswer: "B",
    explanation:
      "'Whom' is the object of the verb 'call'; in 'Who is going', 'who' is the subject.",
  },
  {
    id: 825,
    subject: "Kiswahili",
    question: "Chagua sahihi:  'Aliandika barua ___ rafiki yake.'",
    options: {
      A: "kwa",
      B: "na",
      C: "sana",
      D: "kila",
    },
    correctAnswer: "A",
    explanation:
      "'Aliandika barua kwa rafiki yake' means 'He wrote a letter to his friend'; 'kwa' indicates recipient.",
  },
  {
    id: 826,
    subject: "Science & Technology",
    question: "Which process describes water turning into water vapour?",
    options: {
      A: "Condensation",
      B: "Evaporation",
      C: "Freezing",
      D: "Melting",
    },
    correctAnswer: "B",
    explanation:
      "Evaporation is when liquid water becomes water vapour due to heat.",
  },
  {
    id: 827,
    subject: "Social Studies",
    question: "Which is a characteristic of a healthy family? ",
    options: {
      A: "Members ignore each other",
      B: "Open communication and mutual support",
      C: "Constant conflict",
      D: "Isolation from society",
    },
    correctAnswer: "B",
    explanation:
      "Healthy families communicate openly and support each other emotionally.",
  },
  {
    id: 828,
    subject: "CRE",
    question:
      "Which Christian denomination emphasizes salvation through faith in Jesus? ",
    options: {
      A: "Buddhism",
      B: "Islam",
      C: "Christianity (all branches)",
      D: "Judaism",
    },
    correctAnswer: "C",
    explanation:
      "All Christian denominations share belief in Jesus Christ as saviour.",
  },
  {
    id: 829,
    subject: "Agriculture",
    question: "Which method helps prevent water runoff on hillsides?",
    options: {
      A: "Contour ploughing",
      B: "Ploughing straight downhill",
      C: "Removing all vegetation",
      D: "Building no barriers",
    },
    correctAnswer: "A",
    explanation:
      "Contour ploughing follows slope lines, slowing water flow and reducing erosion.",
  },
  {
    id: 830,
    subject: "Music",
    question: "Which is the slowest tempo marking among these?",
    options: {
      A: "Allegro",
      B: "Andante",
      C: "Largo",
      D: "Vivace",
    },
    correctAnswer: "C",
    explanation:
      "Largo is very slow; Andante is moderate; Allegro and Vivace are fast.",
  },
  {
    id: 831,
    subject: "Home Science",
    question: "Which food storage method extends the shelf life of bread?",
    options: {
      A: "Leaving it uncovered at room temperature",
      B: "Storing in a freezer bag or breadbox",
      C: "Putting it in direct sunlight",
      D: "Leaving it on the counter exposed",
    },
    correctAnswer: "B",
    explanation:
      "Sealed storage reduces mold growth and keeps bread fresher longer.",
  },
  {
    id: 832,
    subject: "Physical & Health Education",
    question: "Which is a sign of good hydration during exercise?",
    options: {
      A: "Dry mouth and dark urine",
      B: "Clear urine and moist mouth",
      C: "Extreme thirst always",
      D: "Never feeling thirsty",
    },
    correctAnswer: "B",
    explanation:
      "Clear urine and normal saliva production indicate proper hydration.",
  },
  {
    id: 833,
    subject: "ICT/Computer Studies",
    question: "Which is the correct way to send an email to multiple people?",
    options: {
      A: "Writing all emails separately",
      B: "Using the To, CC or BCC fields",
      C: "Posting on social media",
      D: "Printing and mailing physically",
    },
    correctAnswer: "B",
    explanation:
      "To, CC (carbon copy) and BCC (blind carbon copy) fields allow bulk sending.",
  },
  {
    id: 834,
    subject: "Mathematics",
    question: "What is 30% of 150?",
    options: {
      A: "30",
      B: "45",
      C: "60",
      D: "90",
    },
    correctAnswer: "B",
    explanation: "30% of 150 = 0.30 × 150 = 45.",
  },
  {
    id: 835,
    subject: "English",
    question: "Which word is correctly spelled among the options?",
    options: {
      A: "Accomodate",
      B: "Acommodate",
      C: "Accommodate",
      D: "Acomodate",
    },
    correctAnswer: "C",
    explanation: "'Accommodate' is spelled with double 'c' and double 'm'.",
  },
  {
    id: 836,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'She is a doctor.'",
    options: {
      A: "Yeye ni daktari.",
      B: "Yeye ni mwalimu.",
      C: "Yeye ni mkulima.",
      D: "Yeye ni mfanya kazi.",
    },
    correctAnswer: "A",
    explanation:
      "'Daktari' means 'doctor'; the sentence correctly identifies her profession.",
  },
  {
    id: 837,
    subject: "Science & Technology",
    question: "Which is an example of a non-renewable energy source?",
    options: {
      A: "Solar power",
      B: "Wind power",
      C: "Hydropower",
      D: "Coal",
    },
    correctAnswer: "D",
    explanation:
      "Coal is a fossil fuel that takes millions of years to form and will eventually run out.",
  },
  {
    id: 838,
    subject: "Social Studies",
    question: "Which is a positive effect of migration on communities?",
    options: {
      A: "Always causes conflict",
      B: "Brings new skills and cultural exchange",
      C: "Reduces all services",
      D: "Causes only problems",
    },
    correctAnswer: "B",
    explanation:
      "Migration can bring diverse talents, ideas and cultural contributions to communities.",
  },
  {
    id: 839,
    subject: "CRE",
    question: "Which story teaches that God provides for those who have faith?",
    options: {
      A: "Noah building the ark",
      B: "Jesus feeding the five thousand",
      C: "Jonah and the whale",
      D: "Samson and Delilah",
    },
    correctAnswer: "B",
    explanation:
      "Jesus feeding thousands demonstrates God's provision and care for his people.",
  },
  {
    id: 840,
    subject: "Agriculture",
    question: "Which crop spacing technique helps maximize space and yield?",
    options: {
      A: "Planting crops too close together",
      B: "Spacing crops far apart with no reasoning",
      C: "Following recommended spacing for each crop type",
      D: "Random spacing",
    },
    correctAnswer: "C",
    explanation:
      "Proper spacing ensures adequate light, air and nutrients for optimal growth.",
  },
  {
    id: 841,
    subject: "Music",
    question:
      "Which musical form is structured as ABA (theme, variation, return)?",
    options: {
      A: "Rondo",
      B: "Ternary form",
      C: "Fugue",
      D: "Canon",
    },
    correctAnswer: "B",
    explanation:
      "Ternary form has an ABA structure where the first theme returns after a contrasting middle section.",
  },
  {
    id: 842,
    subject: "Home Science",
    question:
      "Which nutrient is essential for building strong bones and teeth?",
    options: {
      A: "Protein",
      B: "Calcium",
      C: "Fat",
      D: "Carbohydrates",
    },
    correctAnswer: "B",
    explanation: "Calcium is the primary mineral in bones and teeth.",
  },
  {
    id: 843,
    subject: "Physical & Health Education",
    question:
      "Which exercise targets the hamstring muscles at the back of the thigh?",
    options: {
      A: "Push-ups",
      B: "Leg curls",
      C: "Shoulder raises",
      D: "Bicep curls",
    },
    correctAnswer: "B",
    explanation: "Leg curls directly exercise the hamstring muscles.",
  },
  {
    id: 844,
    subject: "ICT/Computer Studies",
    question:
      "Which is the proper way to safely eject a USB drive from a computer?",
    options: {
      A: "Pull it out immediately",
      B: "Right-click and select 'Eject' or use the system tray icon",
      C: "Force shutdown the computer",
      D: "Ignore safely ejecting",
    },
    correctAnswer: "B",
    explanation:
      "Safe ejection ensures data isn't corrupted and prevents data loss.",
  },
  {
    id: 845,
    subject: "Mathematics",
    question: "What is the range of the data set:  5, 12, 8, 3, 15? ",
    options: {
      A: "10",
      B: "12",
      C: "15",
      D: "3",
    },
    correctAnswer: "A",
    explanation: "Range = highest value minus lowest value = 15 - 5 = 10.",
  },
  {
    id: 846,
    subject: "English",
    question:
      "Which word is a preposition in:  'The cat sat beneath the tree.'?",
    options: {
      A: "sat",
      B: "beneath",
      C: "cat",
      D: "tree",
    },
    correctAnswer: "B",
    explanation: "'Beneath' shows the relationship between 'cat' and 'tree'.",
  },
  {
    id: 847,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'What is your name?'",
    options: {
      A: "Je, unakula nini?",
      B: "Je, jina lako nani?",
      C: "Je, wewe ni nani?",
      D: "Je, unakaa wapi?",
    },
    correctAnswer: "B",
    explanation: "'Jina lako nani?' directly asks 'What is your name? '",
  },
  {
    id: 848,
    subject: "Science & Technology",
    question: "Which process changes a liquid into a solid?",
    options: {
      A: "Evaporation",
      B: "Melting",
      C: "Freezing",
      D: "Boiling",
    },
    correctAnswer: "C",
    explanation:
      "Freezing is the process where a liquid loses heat and becomes a solid.",
  },
  {
    id: 849,
    subject: "Social Studies",
    question: "Which right allows a person to have a job and earn income?",
    options: {
      A: "Right to education",
      B: "Right to vote",
      C: "Right to work",
      D: "Right to travel",
    },
    correctAnswer: "C",
    explanation:
      "The right to work allows citizens to earn income and support themselves.",
  },
  {
    id: 850,
    subject: "CRE",
    question:
      "Which action did Jesus tell his followers to do to remember him?",
    options: {
      A: "Build monuments",
      B: "Share bread and wine in remembrance (Communion)",
      C: "Sing only",
      D: "Never eat again",
    },
    correctAnswer: "B",
    explanation:
      "Jesus instituted Communion at the Last Supper as a remembrance.",
  },
  {
    id: 851,
    subject: "Agriculture",
    question:
      "Which is the best season to plant crops in most tropical regions?",
    options: {
      A: "Dry season only",
      B: "Rainy season",
      C: "Winter season",
      D: "No seasonal timing needed",
    },
    correctAnswer: "B",
    explanation:
      "The rainy season provides adequate moisture for crop germination and growth.",
  },
  {
    id: 852,
    subject: "Music",
    question:
      "Which instrument is the largest and plays the lowest notes in the orchestra?",
    options: {
      A: "Violin",
      B: "Cello",
      C: "Double bass",
      D: "Viola",
    },
    correctAnswer: "C",
    explanation:
      "The double bass is the largest string instrument and has the lowest range.",
  },
  {
    id: 853,
    subject: "Home Science",
    question: "Which is a sign of food spoilage that makes it unsafe to eat?",
    options: {
      A: "Normal colour",
      B: "Mould growth or foul odour",
      C: "Firm texture",
      D: "Fresh appearance",
    },
    correctAnswer: "B",
    explanation:
      "Mould and bad odours indicate microbial spoilage and food should be discarded.",
  },
  {
    id: 854,
    subject: "Physical & Health Education",
    question: "Which is an appropriate pre-exercise meal? ",
    options: {
      A: "Heavy fried foods",
      B: "Whole grains and lean protein",
      C: "Only sugary drinks",
      D: "No food at all",
    },
    correctAnswer: "B",
    explanation:
      "Light, balanced meals with carbohydrates and protein provide sustained energy.",
  },
  {
    id: 855,
    subject: "ICT/Computer Studies",
    question: "Which is an example of a cloud-based application?",
    options: {
      A: "Google Docs",
      B: "Only software installed locally",
      C: "Offline editors",
      D: "USB drives",
    },
    correctAnswer: "A",
    explanation:
      "Google Docs allows online access and collaboration from any device.",
  },
  {
    id: 856,
    subject: "Mathematics",
    question: "What is 100 - 35?",
    options: {
      A: "55",
      B: "65",
      C: "75",
      D: "85",
    },
    correctAnswer: "B",
    explanation: "Subtract 35 from 100: 100 - 35 = 65.",
  },
  {
    id: 857,
    subject: "English",
    question: "Which word is a noun that can be counted?",
    options: {
      A: "Happiness",
      B: "Water",
      C: "Book",
      D: "Information",
    },
    correctAnswer: "C",
    explanation:
      "'Book' is a countable noun (one book, two books); others are uncountable.",
  },
  {
    id: 858,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'They are playing in the park.'",
    options: {
      A: "Wanacheza bustanini.",
      B: "Wanakula bustanini.",
      C: "Wanalala bustanini.",
      D: "Wanaandika bustanini.",
    },
    correctAnswer: "A",
    explanation:
      "'Wanacheza' means 'they are playing'; 'bustanini' is 'in the park'.",
  },
  {
    id: 859,
    subject: "Science & Technology",
    question: "Which layer of skin provides protection from the environment?",
    options: {
      A: "Hypodermis",
      B: "Dermis",
      C: "Epidermis",
      D: "Subcutaneous layer",
    },
    correctAnswer: "C",
    explanation:
      "The epidermis is the outermost layer protecting against damage and infection.",
  },
  {
    id: 860,
    subject: "Social Studies",
    question: "Which is a responsibility of citizens in a democracy?",
    options: {
      A: "Ignoring laws",
      B: "Participating in voting and civic duties",
      C: "Refusing to pay taxes",
      D: "Avoiding public services",
    },
    correctAnswer: "B",
    explanation:
      "Democratic citizenship requires active participation in governance and societal duties.",
  },
  {
    id: 861,
    subject: "CRE",
    question:
      "Which virtue is displayed when a person lives according to their religious beliefs?",
    options: {
      A: "Hypocrisy",
      B: "Insincerity",
      C: "Faithfulness",
      D: "Deception",
    },
    correctAnswer: "C",
    explanation:
      "Faithfulness means living consistently with one's beliefs and values.",
  },
  {
    id: 862,
    subject: "Agriculture",
    question: "Which benefit does terracing provide on steep slopes?",
    options: {
      A: "Increases water flow",
      B: "Reduces erosion and improves water retention",
      C: "Removes all vegetation",
      D: "Decreases soil quality",
    },
    correctAnswer: "B",
    explanation:
      "Terraces create level steps that slow water runoff and improve soil moisture.",
  },
  {
    id: 863,
    subject: "Music",
    question:
      "Which is the middle range of the human voice (typically female)?",
    options: {
      A: "Soprano",
      B: "Alto",
      C: "Tenor",
      D: "Bass",
    },
    correctAnswer: "B",
    explanation:
      "Alto is the middle-range female voice between soprano and tenor.",
  },
  {
    id: 864,
    subject: "Home Science",
    question: "Which is the safest way to thaw frozen chicken at home?",
    options: {
      A: "On the counter at room temperature",
      B: "In the refrigerator overnight",
      C: "In hot water",
      D: "In sunlight",
    },
    correctAnswer: "B",
    explanation:
      "Refrigerator thawing keeps meat at safe temperatures and prevents bacterial growth.",
  },
  {
    id: 865,
    subject: "Physical & Health Education",
    question:
      "Which food combination provides complete nutrition for a child's growth?",
    options: {
      A: "Only sweets",
      B: "Proteins, carbohydrates, fruits and vegetables",
      C: "Only rice",
      D: "Fast food only",
    },
    correctAnswer: "B",
    explanation: "Balanced meals with variety support growth and development.",
  },
  {
    id: 866,
    subject: "ICT/Computer Studies",
    question: "Which is a proper practice when using shared computers?",
    options: {
      A: "Leaving yourself logged in",
      B: "Logging out after use",
      C: "Never locking the screen",
      D: "Sharing passwords",
    },
    correctAnswer: "B",
    explanation:
      "Logging out protects personal information from the next user.",
  },
  {
    id: 867,
    subject: "Mathematics",
    question: "What is the least common multiple of 3 and 7?",
    options: {
      A: "10",
      B: "21",
      C: "14",
      D: "7",
    },
    correctAnswer: "B",
    explanation: "3 and 7 are coprime; their LCM = 3 × 7 = 21.",
  },
  {
    id: 868,
    subject: "English",
    question: "Which word is used as a verb in:  'They will run a marathon.'?",
    options: {
      A: "will",
      B: "run",
      C: "marathon",
      D: "they",
    },
    correctAnswer: "B",
    explanation: "'Run' is the main verb expressing the action.",
  },
  {
    id: 869,
    subject: "Kiswahili",
    question: "Chagua neno sahihi: 'Alikuwa anasoma ___ saa tatu.'",
    options: {
      A: "kwa",
      B: "katika",
      C: "sana",
      D: "tu",
    },
    correctAnswer: "A",
    explanation:
      "'Kwa saa tatu' means 'for three hours'; 'kwa' indicates duration.",
  },
  {
    id: 870,
    subject: "Science & Technology",
    question: "Which blood type is the universal donor? ",
    options: {
      A: "O+",
      B: "AB+",
      C: "A-",
      D: "B-",
    },
    correctAnswer: "A",
    explanation:
      "O+ blood type lacks major antigens and can be given to most people.",
  },
  {
    id: 871,
    subject: "Social Studies",
    question: "Which is an important aspect of community health services?",
    options: {
      A: "Providing vaccinations and preventive care",
      B: "Ignoring public health",
      C: "Only treating emergencies",
      D: "Avoiding clinics",
    },
    correctAnswer: "A",
    explanation:
      "Community health services focus on prevention and vaccination programs.",
  },
  {
    id: 872,
    subject: "CRE",
    question: "Which Christian sacrament is typically performed with water?",
    options: {
      A: "Eucharist only",
      B: "Baptism",
      C: "Confirmation",
      D: "Marriage",
    },
    correctAnswer: "B",
    explanation:
      "Baptism uses water as a symbol of purification and entrance into the faith.",
  },
  {
    id: 873,
    subject: "Agriculture",
    question: "Which livestock produces both meat and milk as products?",
    options: {
      A: "Chickens",
      B: "Fish",
      C: "Cattle",
      D: "Bees",
    },
    correctAnswer: "C",
    explanation:
      "Cattle provide both beef and dairy products (milk, butter, cheese).",
  },
  {
    id: 874,
    subject: "Music",
    question: "Which musical texture has multiple independent melodic lines?",
    options: {
      A: "Homophony",
      B: "Monophony",
      C: "Polyphony",
      D: "Unison",
    },
    correctAnswer: "C",
    explanation:
      "Polyphony involves two or more melodic lines played simultaneously.",
  },
  {
    id: 875,
    subject: "Home Science",
    question: "Which is the most nutritious cooking method for vegetables?",
    options: {
      A: "Deep frying for long periods",
      B: "Boiling in excess water for hours",
      C: "Steaming briefly",
      D: "Microwaving until mushy",
    },
    correctAnswer: "C",
    explanation:
      "Steaming retains nutrients better than other cooking methods.",
  },
  {
    id: 876,
    subject: "Physical & Health Education",
    question: "Which is a sign that a child is getting adequate sleep?",
    options: {
      A: "Always irritable",
      B: "Alert and focused in school",
      C: "Difficulty concentrating",
      D: "Hyperactivity all day",
    },
    correctAnswer: "B",
    explanation:
      "Adequate sleep improves attention, mood and academic performance.",
  },
  {
    id: 877,
    subject: "ICT/Computer Studies",
    question: "Which of these is a proper online behaviour? ",
    options: {
      A: "Cyberbullying others",
      B: "Respecting others online and using polite language",
      C: "Spreading false information",
      D: "Hacking into accounts",
    },
    correctAnswer: "B",
    explanation:
      "Digital citizenship includes treating others respectfully online.",
  },
  {
    id: 878,
    subject: "Mathematics",
    question: "What is 4/5 + 1/5 expressed as a fraction?",
    options: {
      A: "4/10",
      B: "5/10",
      C: "1",
      D: "1/1",
    },
    correctAnswer: "C",
    explanation: "4/5 + 1/5 = 5/5 = 1.",
  },
  {
    id: 879,
    subject: "English",
    question:
      "Which word functions as an adjective in: 'The old man walked slowly.'?",
    options: {
      A: "walked",
      B: "old",
      C: "slowly",
      D: "man",
    },
    correctAnswer: "B",
    explanation: "'Old' describes the noun 'man', functioning as an adjective.",
  },
  {
    id: 880,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'Where is the school?'",
    options: {
      A: "Je, shule iko wapi? ",
      B: "Je, chakula kipo wapi?",
      C: "Je, mtu yuko wapi?",
      D: "Je, nyumba iko wapi?",
    },
    correctAnswer: "A",
    explanation:
      "'Je, shule iko wapi?' asks 'Where is the school?'; 'shule' is school.",
  },
  {
    id: 881,
    subject: "Science & Technology",
    question: "Which organ stores bile to aid in fat digestion?",
    options: {
      A: "Liver",
      B: "Pancreas",
      C: "Gallbladder",
      D: "Spleen",
    },
    correctAnswer: "C",
    explanation:
      "The gallbladder stores bile produced by the liver for digestion.",
  },
  {
    id: 882,
    subject: "Social Studies",
    question: "Which is a benefit of public education to society?",
    options: {
      A: "Creating an educated workforce",
      B: "Increasing ignorance",
      C: "Reducing opportunities",
      D: "Decreasing productivity",
    },
    correctAnswer: "A",
    explanation:
      "Education develops skills and knowledge that improve economic productivity.",
  },
  {
    id: 883,
    subject: "CRE",
    question: "Which biblical figure showed loyalty by returning to Naomi?",
    options: {
      A: "Ruth",
      B: "Esther",
      C: "Hannah",
      D: "Deborah",
    },
    correctAnswer: "A",
    explanation:
      "Ruth's loyalty to her mother-in-law Naomi is a model of devotion.",
  },
  {
    id: 884,
    subject: "Agriculture",
    question: "Which is an advantage of organic farming?",
    options: {
      A: "Uses harmful chemicals only",
      B: "Avoids synthetic pesticides and fertilizers",
      C: "Depletes soil quickly",
      D: "Reduces biodiversity",
    },
    correctAnswer: "B",
    explanation:
      "Organic farming uses natural methods, protecting soil health and ecosystems.",
  },
  {
    id: 885,
    subject: "Music",
    question: "Which element of music describes how high or low a note sounds?",
    options: {
      A: "Loudness",
      B: "Pitch",
      C: "Rhythm",
      D: "Timbre",
    },
    correctAnswer: "B",
    explanation: "Pitch determines whether a note sounds high or low.",
  },
  {
    id: 886,
    subject: "Home Science",
    question: "Which is the correct way to set a formal table for dining?",
    options: {
      A: "Utensils placed randomly",
      B: "Fork on left, knife and spoon on right, napkin on plate",
      C: "All utensils on the right side",
      D: "No specific arrangement",
    },
    correctAnswer: "B",
    explanation:
      "Proper table setting follows etiquette conventions for formal meals.",
  },
  {
    id: 887,
    subject: "Physical & Health Education",
    question:
      "Which is a common cause of sports-related injuries in young athletes?",
    options: {
      A: "Playing with friends",
      B: "Having a coach",
      C: "Inadequate warm-up and overtraining",
      D: "Proper equipment use",
    },
    correctAnswer: "C",
    explanation: "Poor warm-up and pushing too hard increase injury risk.",
  },
  {
    id: 888,
    subject: "ICT/Computer Studies",
    question: "Which is a feature of good cybersecurity? ",
    options: {
      A: "Weak passwords",
      B: "Two-factor authentication",
      C: "Opening all email attachments",
      D: "No virus protection",
    },
    correctAnswer: "B",
    explanation:
      "Two-factor authentication adds an extra layer of account security.",
  },
  {
    id: 889,
    subject: "Mathematics",
    question: "What is 6² (6 squared)?",
    options: {
      A: "12",
      B: "36",
      C: "18",
      D: "42",
    },
    correctAnswer: "B",
    explanation: "6² = 6 × 6 = 36.",
  },
  {
    id: 890,
    subject: "English",
    question:
      "Which sentence uses the correct form of 'to be' in the past tense?",
    options: {
      A: "They was happy yesterday.",
      B: "They were happy yesterday.",
      C: "They am happy yesterday.",
      D: "They is happy yesterday.",
    },
    correctAnswer: "B",
    explanation: "With plural 'they', the past form is 'were' not 'was'.",
  },
  {
    id: 891,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'We went to school every day.'",
    options: {
      A: "Tulikwenda shuleni kila siku.",
      B: "Tuna kwenda shuleni kila siku.",
      C: "Tutakwenda shuleni kila siku.",
      D: "Walikwenda shuleni kila siku.",
    },
    correctAnswer: "A",
    explanation:
      "'Tulikwenda' is past tense 'we went'; 'kila siku' is 'every day'.",
  },
  {
    id: 892,
    subject: "Science & Technology",
    question: "Which ecosystem receives the least rainfall annually?",
    options: {
      A: "Tropical rainforest",
      B: "Desert",
      C: "Savanna",
      D: "Temperate forest",
    },
    correctAnswer: "B",
    explanation:
      "Deserts receive minimal rainfall (less than 10 inches/25 cm per year).",
  },
  {
    id: 893,
    subject: "Social Studies",
    question: "Which is an example of a cultural norm?",
    options: {
      A: "Greeting elders respectfully",
      B: "Breaking all rules always",
      C: "Ignoring traditions",
      D: "Avoiding social gatherings",
    },
    correctAnswer: "A",
    explanation:
      "Cultural norms are shared expectations for behaviour within a society.",
  },
  {
    id: 894,
    subject: "CRE",
    question:
      "Which Christian principle teaches that all people are made in God's image?",
    options: {
      A: "Some people are inferior",
      B: "Only leaders are worthy",
      C: "Human dignity and equality",
      D: "Discrimination is acceptable",
    },
    correctAnswer: "C",
    explanation:
      "Christianity teaches that every person has inherent dignity as God's creation.",
  },
  {
    id: 895,
    subject: "Agriculture",
    question: "Which is the function of the main root system in a plant?",
    options: {
      A: "Photosynthesis only",
      B: "Absorbing water and nutrients from soil",
      C: "Producing flowers",
      D: "Creating seeds",
    },
    correctAnswer: "B",
    explanation:
      "Roots absorb water and dissolved minerals essential for plant growth.",
  },
  {
    id: 896,
    subject: "Music",
    question: "Which is a musical note that lasts one beat in 4/4 time?",
    options: {
      A: "Whole note",
      B: "Half note",
      C: "Quarter note",
      D: "Sixteenth note",
    },
    correctAnswer: "C",
    explanation: "A quarter note receives one beat in common (4/4) time.",
  },
  {
    id: 897,
    subject: "Home Science",
    question: "Which is a proper food combination for balanced nutrition?",
    options: {
      A: "Only proteins",
      B: "Grains, vegetables, proteins and fruits",
      C: "Only carbohydrates",
      D: "Only fats",
    },
    correctAnswer: "B",
    explanation: "Balanced meals include nutrients from all food groups.",
  },
  {
    id: 898,
    subject: "Physical & Health Education",
    question: "Which is a proper body position for doing push-ups?",
    options: {
      A: "Arched back",
      B: "Straight body line from head to heels",
      C: "Sagging hips",
      D: "Twisted torso",
    },
    correctAnswer: "B",
    explanation: "Proper form prevents injury and maximises muscle engagement.",
  },
  {
    id: 899,
    subject: "ICT/Computer Studies",
    question: "Which is an appropriate internet search tip?",
    options: {
      A: "Use vague single words",
      B: "Use specific keywords in quotation marks",
      C: "Search for everything at once",
      D: "Never refine searches",
    },
    correctAnswer: "B",
    explanation:
      "Using specific keywords and quotes narrows results to relevant information.",
  },
  {
    id: 900,
    subject: "Mathematics",
    question: "What is 2/3 of 30?",
    options: {
      A: "15",
      B: "20",
      C: "25",
      D: "10",
    },
    correctAnswer: "B",
    explanation: "2/3 × 30 = (2 × 30) ÷ 3 = 60 ÷ 3 = 20.",
  },
  {
    id: 901,
    subject: "English",
    question:
      "Which word is a verb in the sentence:  'The children are building a sandcastle.'?",
    options: {
      A: "children",
      B: "building",
      C: "sandcastle",
      D: "are",
    },
    correctAnswer: "B",
    explanation:
      "'Building' is the main action and functions as the verb (present participle form).",
  },
  {
    id: 902,
    subject: "Mathematics",
    question: "What is 50 + 25 + 10?",
    options: {
      A: "75",
      B: "80",
      C: "85",
      D: "90",
    },
    correctAnswer: "C",
    explanation: "Add from left to right: 50 + 25 = 75, then 75 + 10 = 85.",
  },
  {
    id: 903,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'We will help you tomorrow.'",
    options: {
      A: "Tutakusaidia kesho.",
      B: "Tulikusaidia jana.",
      C: "Tunakusaidia sasa.",
      D: "Watakusaidia kesho.",
    },
    correctAnswer: "A",
    explanation:
      "'Tutakusaidia' is future tense 'we will help you'; 'kesho' is 'tomorrow'.",
  },
  {
    id: 904,
    subject: "Science & Technology",
    question: "Which gas is released by plants during photosynthesis?",
    options: {
      A: "Carbon dioxide",
      B: "Nitrogen",
      C: "Oxygen",
      D: "Hydrogen",
    },
    correctAnswer: "C",
    explanation: "Plants release oxygen as a byproduct of photosynthesis.",
  },
  {
    id: 905,
    subject: "Social Studies",
    question: "Which is a characteristic of a well-developed country?",
    options: {
      A: "Advanced infrastructure and technology",
      B: "No schools or hospitals",
      C: "Poorly developed services",
      D: "Limited education",
    },
    correctAnswer: "A",
    explanation:
      "Developed countries have quality infrastructure, technology and services.",
  },
  {
    id: 906,
    subject: "CRE",
    question: "Which statement reflects Christian teachings about love?",
    options: {
      A: "'Love only those who love you'",
      B: "'Love your enemies and pray for those who persecute you'",
      C: "'Love is weakness'",
      D: "'Never show love'",
    },
    correctAnswer: "B",
    explanation: "Jesus taught unconditional love, including love for enemies.",
  },
  {
    id: 907,
    subject: "Agriculture",
    question: "Which method helps improve soil pH that is too acidic?",
    options: {
      A: "Adding lime (calcium carbonate)",
      B: "Adding more compost",
      C: "Removing all vegetation",
      D: "Increasing acidity more",
    },
    correctAnswer: "A",
    explanation:
      "Lime neutralises acidic soil and raises pH to optimal levels.",
  },
  {
    id: 908,
    subject: "Music",
    question: "Which time signature indicates 3 beats per measure?",
    options: {
      A: "4/4",
      B: "3/4",
      C: "2/4",
      D: "6/8",
    },
    correctAnswer: "B",
    explanation: "In 3/4 time, there are three quarter-note beats per measure.",
  },
  {
    id: 909,
    subject: "Home Science",
    question: "Which is a sign that bread is fresh and good quality?",
    options: {
      A: "Hard and stale",
      B: "Mouldy appearance",
      C: "Soft crumb and fresh smell",
      D: "Torn packaging",
    },
    correctAnswer: "C",
    explanation: "Fresh bread has a soft texture, good smell and no mould.",
  },
  {
    id: 910,
    subject: "Physical & Health Education",
    question: "Which activity helps develop fine motor skills in children?",
    options: {
      A: "Running marathons",
      B: "Drawing and writing",
      C: "Only team sports",
      D: "Sleeping more",
    },
    correctAnswer: "B",
    explanation:
      "Fine motor activities like drawing use small hand and finger muscles.",
  },
  {
    id: 911,
    subject: "ICT/Computer Studies",
    question: "Which is a proper practice for password creation?",
    options: {
      A: "Using your birthdate as password",
      B: "Using a mix of characters and length of at least 8 characters",
      C: "Writing password on a sticky note",
      D: "Using the same password for all accounts",
    },
    correctAnswer: "B",
    explanation:
      "Strong passwords use diverse character types and adequate length.",
  },
  {
    id: 912,
    subject: "Mathematics",
    question: "What is 7 × 8?",
    options: {
      A: "54",
      B: "56",
      C: "58",
      D: "60",
    },
    correctAnswer: "B",
    explanation: "Multiply 7 by 8: 7 × 8 = 56.",
  },
  {
    id: 913,
    subject: "English",
    question:
      "Which word is a noun in:  'The beautiful flower bloomed in spring.'?",
    options: {
      A: "beautiful",
      B: "bloomed",
      C: "flower",
      D: "spring",
    },
    correctAnswer: "C",
    explanation:
      "'Flower' is a noun; 'beautiful' is an adjective describing it.",
  },
  {
    id: 914,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'He is tall.'",
    options: {
      A: "Yeye ni mkubwa.",
      B: "Yeye ni mfupi.",
      C: "Yeye ni mrefu.",
      D: "Yeye ni mwenyeji.",
    },
    correctAnswer: "C",
    explanation:
      "'Mrefu' means 'tall'; 'mkubwa' means 'big', 'mfupi' means 'short'.",
  },
  {
    id: 915,
    subject: "Science & Technology",
    question: "Which process removes salt from seawater?",
    options: {
      A: "Evaporation alone",
      B: "Distillation",
      C: "Filtration",
      D: "Freezing",
    },
    correctAnswer: "B",
    explanation:
      "Distillation boils water and condenses pure water vapour, leaving salt behind.",
  },
  {
    id: 916,
    subject: "Social Studies",
    question: "Which right allows citizens to start their own businesses?",
    options: {
      A: "Right to property",
      B: "Freedom of movement",
      C: "Right to education",
      D: "Right to vote",
    },
    correctAnswer: "A",
    explanation:
      "Property rights include the right to own and operate businesses.",
  },
  {
    id: 917,
    subject: "CRE",
    question: "Which action represents justice in Christian teaching?",
    options: {
      A: "Ignoring wrongdoing",
      B: "Treating all fairly and upholding right principles",
      C: "Taking revenge",
      D: "Favoring the wealthy only",
    },
    correctAnswer: "B",
    explanation:
      "Justice means treating people fairly according to moral principles.",
  },
  {
    id: 918,
    subject: "Agriculture",
    question:
      "Which is an advantage of using organic manure instead of chemicals only?",
    options: {
      A: "Damages soil structure",
      B: "Improves soil fertility and microbial activity",
      C: "Reduces crop yield",
      D: "Harms the environment",
    },
    correctAnswer: "B",
    explanation:
      "Organic manure enriches soil and supports beneficial organisms.",
  },
  {
    id: 919,
    subject: "Music",
    question:
      "Which musical element describes the pattern of strong and weak beats?",
    options: {
      A: "Harmony",
      B: "Melody",
      C: "Rhythm",
      D: "Dynamics",
    },
    correctAnswer: "C",
    explanation:
      "Rhythm organises beats and creates patterns of emphasis and timing.",
  },
  {
    id: 920,
    subject: "Home Science",
    question: "Which is a proper way to store eggs to maintain freshness?",
    options: {
      A: "On the counter at room temperature",
      B: "In the refrigerator in the original carton",
      C: "In direct sunlight",
      D: "In a warm place",
    },
    correctAnswer: "B",
    explanation:
      "Refrigeration in cartons protects eggs and maintains freshness.",
  },
  {
    id: 921,
    subject: "Physical & Health Education",
    question:
      "Which is a common effect of regular physical activity on the heart?",
    options: {
      A: "Increased resting heart rate",
      B: "Decreased cardiovascular fitness",
      C: "Lower resting heart rate and improved efficiency",
      D: "No change in heart health",
    },
    correctAnswer: "C",
    explanation:
      "Regular exercise strengthens the heart and improves cardiovascular efficiency.",
  },
  {
    id: 922,
    subject: "ICT/Computer Studies",
    question: "Which of these is a proper email etiquette practice?",
    options: {
      A: "Using all capital letters (shouting)",
      B: "Sending without proofreading",
      C: "Using a clear subject line and polite tone",
      D: "Sending emails late at night always",
    },
    correctAnswer: "C",
    explanation:
      "Professional emails use clear subjects and respectful language.",
  },
  {
    id: 923,
    subject: "Mathematics",
    question: "What is 96 ÷ 12?",
    options: {
      A: "6",
      B: "8",
      C: "10",
      D: "12",
    },
    correctAnswer: "B",
    explanation: "Divide 96 by 12: 96 ÷ 12 = 8.",
  },
  {
    id: 924,
    subject: "English",
    question: "Which word is correctly spelled? ",
    options: {
      A: "Recieve",
      B: "Recieve",
      C: "Receive",
      D: "Recive",
    },
    correctAnswer: "C",
    explanation: "'Receive' is spelled with 'ei' not 'ie'.",
  },
  {
    id: 925,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'The girl is reading a book.'",
    options: {
      A: "Msichana anasoma kitabu.",
      B: "Msichana anakula kitabu.",
      C: "Msichana anakuja kitabu.",
      D: "Msichana anacheza kitabu.",
    },
    correctAnswer: "A",
    explanation:
      "'Anasoma' means 'is reading'; the sentence correctly describes the action.",
  },
  {
    id: 926,
    subject: "Science & Technology",
    question: "Which organ filters waste from the blood to form urine?",
    options: {
      A: "Liver",
      B: "Kidney",
      C: "Pancreas",
      D: "Heart",
    },
    correctAnswer: "B",
    explanation: "Kidneys filter waste and excess water to produce urine.",
  },
  {
    id: 927,
    subject: "Social Studies",
    question: "Which is an example of a community health problem?",
    options: {
      A: "Malnutrition and lack of clean water",
      B: "Having many wealthy people",
      C: "Modern technology only",
      D: "Good road infrastructure",
    },
    correctAnswer: "A",
    explanation:
      "Malnutrition and unsafe water are major public health challenges.",
  },
  {
    id: 928,
    subject: "CRE",
    question: "Which biblical account demonstrates God's power over nature?",
    options: {
      A: "Jesus preaching sermons only",
      B: "Jesus calming a storm at sea",
      C: "Jesus reading books",
      D: "Jesus building houses",
    },
    correctAnswer: "B",
    explanation:
      "Calming the storm shows Jesus' authority over natural forces.",
  },
  {
    id: 929,
    subject: "Agriculture",
    question: "Which tool is best for harvesting grains like wheat?",
    options: {
      A: "Hoe",
      B: "Sickle",
      C: "Plough",
      D: "Rake",
    },
    correctAnswer: "B",
    explanation:
      "A sickle is designed to cut grain stalks efficiently during harvest.",
  },
  {
    id: 930,
    subject: "Music",
    question:
      "Which musical notation indicates a note should be held beyond its normal value?",
    options: {
      A: "Fermata",
      B: "Staccato",
      C: "Accent",
      D: "Natural sign",
    },
    correctAnswer: "A",
    explanation: "A fermata symbol tells the musician to hold a note longer.",
  },
  {
    id: 931,
    subject: "Home Science",
    question: "Which is the proper temperature for storing frozen foods?",
    options: {
      A: "0°F (-18°C) or below",
      B: "Room temperature",
      C: "40°F (4°C)",
      D: "Room temperature on the shelf",
    },
    correctAnswer: "A",
    explanation:
      "Freezing at 0°F prevents bacterial growth and preserves food safely.",
  },
  {
    id: 932,
    subject: "Physical & Health Education",
    question: "Which is a sign of good oral hygiene?",
    options: {
      A: "Brushing teeth once a year",
      B: "Eating only sweets",
      C: "Daily brushing and flossing",
      D: "Never visiting the dentist",
    },
    correctAnswer: "C",
    explanation:
      "Regular brushing and flossing prevent cavities and gum disease.",
  },
  {
    id: 933,
    subject: "ICT/Computer Studies",
    question: "Which is a proper backup practice for important documents?",
    options: {
      A: "Storing only on one device",
      B: "Never backing up files",
      C: "Using cloud storage and external drives",
      D: "Leaving files unorganised",
    },
    correctAnswer: "C",
    explanation: "Multiple backup locations protect against data loss.",
  },
  {
    id: 934,
    subject: "Mathematics",
    question: "What is 3/5 expressed as a percentage?",
    options: {
      A: "30%",
      B: "50%",
      C: "60%",
      D: "35%",
    },
    correctAnswer: "C",
    explanation: "3/5 = 0.6 = 60%.",
  },
  {
    id: 935,
    subject: "English",
    question: "Which sentence uses 'its' correctly?",
    options: {
      A: "The dog wagged it's tail.",
      B: "The dog wagged its tail.",
      C: "The dog wagged his tail is wrong.",
      D: "The dog tail its wagging.",
    },
    correctAnswer: "B",
    explanation: "'Its' is possessive; 'it's' means 'it is'.",
  },
  {
    id: 936,
    subject: "Kiswahili",
    question: "Chagua neno sahihi:  'Alienda ___ gari saa moja.'",
    options: {
      A: "kwa",
      B: "na",
      C: "katika",
      D: "sana",
    },
    correctAnswer: "B",
    explanation:
      "'Na gari' means 'by car' or 'in a car'; 'na' indicates the means of transport.",
  },
  {
    id: 937,
    subject: "Science & Technology",
    question: "Which type of weather is caused by high atmospheric pressure?",
    options: {
      A: "Heavy rain and storms",
      B: "Clear and sunny weather",
      C: "Fog only",
      D: "Snow always",
    },
    correctAnswer: "B",
    explanation: "High pressure systems typically bring clear, stable weather.",
  },
  {
    id: 938,
    subject: "Social Studies",
    question: "Which is a responsibility of parents in raising children?",
    options: {
      A: "Providing food, shelter and education",
      B: "Ignoring their needs",
      C: "Refusing to care",
      D: "Neglecting their development",
    },
    correctAnswer: "A",
    explanation:
      "Parents are responsible for meeting children's basic and developmental needs.",
  },
  {
    id: 939,
    subject: "CRE",
    question:
      "Which virtue is shown when someone forgives after being wronged?",
    options: {
      A: "Revenge",
      B: "Anger",
      C: "Mercy",
      D: "Bitterness",
    },
    correctAnswer: "C",
    explanation:
      "Mercy involves compassion and forgiveness despite having the right to punish.",
  },
  {
    id: 940,
    subject: "Agriculture",
    question: "Which is the best fertilizer for nitrogen-deficient soils?",
    options: {
      A: "Pure sand",
      B: "Nitrogen-based fertilizer or legume planting",
      C: "Salt",
      D: "Water only",
    },
    correctAnswer: "B",
    explanation:
      "Nitrogen fertilizers or nitrogen-fixing crops address deficiency.",
  },
  {
    id: 941,
    subject: "Music",
    question: "Which instrument is played by drawing a bow across strings?",
    options: {
      A: "Guitar",
      B: "Harp",
      C: "Violin",
      D: "Ukulele",
    },
    correctAnswer: "C",
    explanation:
      "Violins are typically played with a bow; guitars are plucked or strummed.",
  },
  {
    id: 942,
    subject: "Home Science",
    question: "Which food item provides complete protein on its own?",
    options: {
      A: "Rice",
      B: "Beans",
      C: "Eggs",
      D: "Maize",
    },
    correctAnswer: "C",
    explanation:
      "Eggs contain all essential amino acids, providing complete protein.",
  },
  {
    id: 943,
    subject: "Physical & Health Education",
    question: "Which activity helps develop balance and agility?",
    options: {
      A: "Only sitting quietly",
      B: "Hopscotch or dance",
      C: "Reading books",
      D: "Sleeping more",
    },
    correctAnswer: "B",
    explanation:
      "Hopscotch and dance activities develop coordination and balance.",
  },
  {
    id: 944,
    subject: "ICT/Computer Studies",
    question: "Which is the correct format for a web address (URL)?",
    options: {
      A: "htp://site.com",
      B: "https://www.site.com",
      C: "site... com",
      D: "sitewww.com",
    },
    correctAnswer: "B",
    explanation:
      "Standard web addresses use https://, www.  and domain extensions.",
  },
  {
    id: 945,
    subject: "Mathematics",
    question:
      "What is the circumference of a circle with radius 7 cm (use π ≈ 3.14)?",
    options: {
      A: "43.96 cm",
      B: "44 cm",
      C: "50 cm",
      D: "56 cm",
    },
    correctAnswer: "A",
    explanation: "Circumference = 2πr = 2 × 3.14 × 7 = 43.96 cm.",
  },
  {
    id: 946,
    subject: "English",
    question: "Which word is an interjection in:  'Oh!  That was surprising!'?",
    options: {
      A: "surprising",
      B: "was",
      C: "Oh",
      D: "that",
    },
    correctAnswer: "C",
    explanation: "'Oh' expresses emotion and functions as an interjection.",
  },
  {
    id: 947,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'I am sick.'",
    options: {
      A: "Niko mgonjwa.",
      B: "Niko furahi.",
      C: "Niko karibu.",
      D: "Niko salama.",
    },
    correctAnswer: "A",
    explanation:
      "'Niko mgonjwa' means 'I am sick'; 'mgonjwa' is the adjective for being ill.",
  },
  {
    id: 948,
    subject: "Science & Technology",
    question: "Which structure in the eye focuses light onto the retina?",
    options: {
      A: "Iris",
      B: "Pupil",
      C: "Lens",
      D: "Cornea",
    },
    correctAnswer: "C",
    explanation: "The lens fine-tunes focus after initial corneal focusing.",
  },
  {
    id: 949,
    subject: "Social Studies",
    question: "Which is a benefit of having diverse friends in a community?",
    options: {
      A: "Learning different perspectives and cultures",
      B: "Limiting experiences",
      C: "Rejecting differences",
      D: "Avoiding people",
    },
    correctAnswer: "A",
    explanation:
      "Diversity enriches experiences and understanding of other cultures.",
  },
  {
    id: 950,
    subject: "CRE",
    question:
      "Which account in the Bible shows God's patience with human weakness?",
    options: {
      A: "Jonah fleeing God's call and God's merciful response",
      B: "Immediate punishment always",
      C: "No forgiveness offered",
      D: "Rejection without second chances",
    },
    correctAnswer: "A",
    explanation:
      "Jonah's story demonstrates God's patience and second chances.",
  },
  {
    id: 951,
    subject: "Agriculture",
    question:
      "Which is an advantage of intercropping (planting multiple crops together)?",
    options: {
      A: "Reduced biodiversity",
      B: "Better use of space and complementary nutrient needs",
      C: "Decreased yield",
      D: "More pest problems",
    },
    correctAnswer: "B",
    explanation:
      "Intercropping maximises land use and nutrient complementarity.",
  },
  {
    id: 952,
    subject: "Music",
    question: "Which dynamic marking means moderately loud?",
    options: {
      A: "pp (pianissimo)",
      B: "mf (mezzo-forte)",
      C: "ff (fortissimo)",
      D: "p (piano)",
    },
    correctAnswer: "B",
    explanation: "Mezzo-forte is medium loudness, between soft and loud.",
  },
  {
    id: 953,
    subject: "Home Science",
    question: "Which is a proper way to prevent food waste at home?",
    options: {
      A: "Throwing away leftovers",
      B: "Planning meals and using leftovers creatively",
      C: "Buying in excess always",
      D: "Never checking expiry dates",
    },
    correctAnswer: "B",
    explanation:
      "Meal planning and using leftovers reduce waste and save money.",
  },
  {
    id: 954,
    subject: "Physical & Health Education",
    question: "Which is a sign of good emotional health in children?",
    options: {
      A: "Never showing any feelings",
      B: "Expressing emotions appropriately and seeking help when needed",
      C: "Always hiding sadness",
      D: "Refusing to talk to anyone",
    },
    correctAnswer: "B",
    explanation:
      "Healthy emotional development includes expressing and managing feelings appropriately.",
  },
  {
    id: 955,
    subject: "ICT/Computer Studies",
    question: "Which is a proper way to handle cyberbullying?",
    options: {
      A: "Responding with anger and insults",
      B: "Ignoring it completely",
      C: "Reporting to a trusted adult and blocking the person",
      D: "Spreading it further",
    },
    correctAnswer: "C",
    explanation:
      "Reporting cyberbullying to authorities and blocking the bully are appropriate responses.",
  },
  {
    id: 956,
    subject: "Mathematics",
    question: "What is 12 − 8 + 5? ",
    options: {
      A: "8",
      B: "9",
      C: "10",
      D: "11",
    },
    correctAnswer: "B",
    explanation: "Calculate left to right: 12 − 8 = 4, then 4 + 5 = 9.",
  },
  {
    id: 957,
    subject: "English",
    question: "Which sentence correctly uses the comparative adjective? ",
    options: {
      A: "She is more prettier than him.",
      B: "She is prettier than him.",
      C: "She is the prettier than him.",
      D: "She is more prettier.",
    },
    correctAnswer: "B",
    explanation:
      "'Prettier' is the correct comparative form; 'more prettier' is redundant.",
  },
  {
    id: 958,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'The cat is sleeping on the mat.'",
    options: {
      A: "Paka analala kwenye mto.",
      B: "Paka anakula kwenye mto.",
      C: "Paka analala kwenye mkate.",
      D: "Paka analala kwenye jamvi.",
    },
    correctAnswer: "D",
    explanation:
      "'Analala' means 'is sleeping'; 'jamvi' is mat; the sentence correctly describes.",
  },
  {
    id: 959,
    subject: "Science & Technology",
    question: "Which process is used to purify water for drinking?",
    options: {
      A: "Boiling and filtering",
      B: "Adding salt",
      C: "Exposing to sunlight only",
      D: "Mixing with chemicals randomly",
    },
    correctAnswer: "A",
    explanation:
      "Boiling kills microorganisms and filtering removes particles.",
  },
  {
    id: 960,
    subject: "Social Studies",
    question: "Which institution helps enforce laws in a society?",
    options: {
      A: "School only",
      B: "Court and police system",
      C: "Market",
      D: "Hospital",
    },
    correctAnswer: "B",
    explanation: "Courts interpret and enforce laws; police enforce them.",
  },
  {
    id: 961,
    subject: "CRE",
    question:
      "Which teaching emphasises serving others without expecting reward?",
    options: {
      A: "'Only help those who will repay you'",
      B: "'Serve others selflessly as unto God'",
      C: "'Never help anyone'",
      D: "'Help only the wealthy'",
    },
    correctAnswer: "B",
    explanation: "Christian teaching emphasises selfless service and humility.",
  },
  {
    id: 962,
    subject: "Agriculture",
    question: "Which crop is most suitable for waterlogged areas?",
    options: {
      A: "Maize",
      B: "Rice",
      C: "Wheat",
      D: "Sorghum",
    },
    correctAnswer: "B",
    explanation:
      "Rice thrives in waterlogged conditions; others prefer well-drained soil.",
  },
  {
    id: 963,
    subject: "Music",
    question: "Which instrument family includes the saxophone?",
    options: {
      A: "Brass",
      B: "Woodwind",
      C: "String",
      D: "Percussion",
    },
    correctAnswer: "B",
    explanation:
      "The saxophone uses a single reed and is classified as a woodwind.",
  },
  {
    id: 964,
    subject: "Home Science",
    question: "Which is the proper way to wash delicate fabrics?",
    options: {
      A: "Using hot water and harsh scrubbing",
      B: "Hand-washing in cool water with gentle soap",
      C: "Bleaching heavily",
      D: "Machine washing on high speed",
    },
    correctAnswer: "B",
    explanation: "Gentle hand-washing protects delicate fibres from damage.",
  },
  {
    id: 965,
    subject: "Physical & Health Education",
    question: "Which is an important component of physical fitness?",
    options: {
      A: "Only speed",
      B: "Strength, flexibility, endurance and balance",
      C: "Only strength",
      D: "No exercise needed",
    },
    correctAnswer: "B",
    explanation:
      "Complete fitness includes multiple components developed through varied activities.",
  },
  {
    id: 966,
    subject: "ICT/Computer Studies",
    question: "Which is a proper practice when downloading files?",
    options: {
      A: "Downloading from unknown sources always",
      B: "Checking files for viruses before opening",
      C: "Opening all attachments without checking",
      D: "Ignoring file names",
    },
    correctAnswer: "B",
    explanation: "Scanning files reduces the risk of malware infection.",
  },
  {
    id: 967,
    subject: "Mathematics",
    question: "What is 1/3 + 1/6 expressed as a fraction?",
    options: {
      A: "1/2",
      B: "2/9",
      C: "1/9",
      D: "3/6",
    },
    correctAnswer: "A",
    explanation: "Convert to common denominator 6: (2/6) + (1/6) = 3/6 = 1/2.",
  },
  {
    id: 968,
    subject: "English",
    question:
      "Which word is used as a conjunction in:  'She studied hard yet failed the test.'?",
    options: {
      A: "studied",
      B: "hard",
      C: "yet",
      D: "failed",
    },
    correctAnswer: "C",
    explanation: "'Yet' connects two independent clauses showing contrast.",
  },
  {
    id: 969,
    subject: "Kiswahili",
    question: "Chagua neno sahihi: 'Tunapenda sana ___ majibu kwa muda mfupi.'",
    options: {
      A: "kutoa",
      B: "kula",
      C: "kuandika",
      D: "kuamka",
    },
    correctAnswer: "A",
    explanation:
      "'Kutoa majibu' means 'to give answers'; the sentence uses infinitive correctly.",
  },
  {
    id: 970,
    subject: "Science & Technology",
    question: "Which type of animal has hair or fur and produces milk?",
    options: {
      A: "Fish",
      B: "Birds",
      C: "Mammals",
      D: "Reptiles",
    },
    correctAnswer: "C",
    explanation:
      "Mammals are warm-blooded, have hair and produce milk for young.",
  },
  {
    id: 971,
    subject: "Social Studies",
    question:
      "Which is a traditional conflict resolution method in many communities?",
    options: {
      A: "Violence and warfare",
      B: "Ignoring conflicts",
      C: "Mediation by elders or respected members",
      D: "Government punishment only",
    },
    correctAnswer: "C",
    explanation:
      "Traditional mediation uses respected community members to resolve disputes peacefully.",
  },
  {
    id: 972,
    subject: "CRE",
    question: "Which action demonstrates humility in Christian faith?",
    options: {
      A: "Boasting about achievements",
      B: "Serving others despite status",
      C: "Seeking praise constantly",
      D: "Showing pride",
    },
    correctAnswer: "B",
    explanation:
      "Humble service regardless of status reflects Christian humility.",
  },
  {
    id: 973,
    subject: "Agriculture",
    question:
      "Which pest control method uses insects to control other insects?",
    options: {
      A: "Chemical pesticides only",
      B: "Biological control with natural enemies",
      C: "Manual removal by hand",
      D: "Burning crops",
    },
    correctAnswer: "B",
    explanation:
      "Biological control uses natural predators to manage pest populations sustainably.",
  },
  {
    id: 974,
    subject: "Music",
    question: "Which symbol in music notation indicates a sharp? ",
    options: {
      A: "♭",
      B: "♯",
      C: "♮",
      D: "𝄐",
    },
    correctAnswer: "B",
    explanation: "♯ (sharp) raises a note by one semitone.",
  },
  {
    id: 975,
    subject: "Home Science",
    question: "Which cooking method uses steam under pressure to cook quickly?",
    options: {
      A: "Boiling in an open pot",
      B: "Pressure cooking",
      C: "Slow cooking",
      D: "Grilling",
    },
    correctAnswer: "B",
    explanation:
      "Pressure cookers trap steam and heat, reducing cooking time significantly.",
  },
  {
    id: 976,
    subject: "Physical & Health Education",
    question: "Which is a sign of good respiratory health?",
    options: {
      A: "Shortness of breath with light activity",
      B: "Ease of breathing during exercise",
      C: "Chronic coughing always",
      D: "Wheezing constantly",
    },
    correctAnswer: "B",
    explanation:
      "Good respiratory health allows comfortable breathing during varied activities.",
  },
  {
    id: 977,
    subject: "ICT/Computer Studies",
    question: "Which is a proper practice for managing digital files?",
    options: {
      A: "Mixing all files in one folder",
      B: "Organising files into logical folders with descriptive names",
      C: "Never naming files",
      D: "Leaving files scattered",
    },
    correctAnswer: "B",
    explanation:
      "Organised folders with clear names improve file management and retrieval.",
  },
  {
    id: 978,
    subject: "Mathematics",
    question: "What is the area of a triangle with base 8 cm and height 6 cm?",
    options: {
      A: "48 cm²",
      B: "24 cm²",
      C: "14 cm²",
      D: "42 cm²",
    },
    correctAnswer: "B",
    explanation: "Area = (base × height) ÷ 2 = (8 × 6) ÷ 2 = 24 cm².",
  },
  {
    id: 979,
    subject: "English",
    question:
      "Which word is a verb in the infinitive form:  'I want to run fast.'?",
    options: {
      A: "want",
      B: "fast",
      C: "to run",
      D: "I",
    },
    correctAnswer: "C",
    explanation: "'To run' is the infinitive form of the verb.",
  },
  {
    id: 980,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'She is my sister.'",
    options: {
      A: "Yeye ni dada yangu.",
      B: "Yeye ni mama yangu.",
      C: "Yeye ni kaka yangu.",
      D: "Yeye ni rafiki yangu.",
    },
    correctAnswer: "A",
    explanation:
      "'Dada yangu' means 'my sister'; 'kaka' is brother, 'mama' is mother.",
  },
  {
    id: 981,
    subject: "Science & Technology",
    question: "Which is an example of a non-living component of an ecosystem?",
    options: {
      A: "Trees and animals",
      B: "Soil and water",
      C: "All plants only",
      D: "All microorganisms",
    },
    correctAnswer: "B",
    explanation:
      "Non-living (abiotic) components include soil, water, sunlight and air.",
  },
  {
    id: 982,
    subject: "Social Studies",
    question: "Which is a positive outcome of technological development?",
    options: {
      A: "Pollution only",
      B: "Improved communication and healthcare",
      C: "Job loss always",
      D: "Environmental destruction",
    },
    correctAnswer: "B",
    explanation:
      "Technology improves quality of life through communication and medical advances.",
  },
  {
    id: 983,
    subject: "CRE",
    question:
      "Which biblical story teaches the value of persistence in prayer?",
    options: {
      A: "The Rich Man and Lazarus",
      B: "The Widow and the Unjust Judge",
      C: "The Sower",
      D: "The Prodigal Son",
    },
    correctAnswer: "B",
    explanation:
      "The widow persistently sought justice, illustrating the value of persistent prayer.",
  },
  {
    id: 984,
    subject: "Agriculture",
    question: "Which vegetable requires staking or support while growing?",
    options: {
      A: "Lettuce",
      B: "Tomato",
      C: "Cucumber",
      D: "Carrot",
    },
    correctAnswer: "B",
    explanation:
      "Tomato plants need support stakes or cages to prevent fruit from touching ground.",
  },
  {
    id: 985,
    subject: "Music",
    question: "Which is a double reed instrument?",
    options: {
      A: "Clarinet",
      B: "Oboe",
      C: "Saxophone",
      D: "Flute",
    },
    correctAnswer: "B",
    explanation:
      "Oboes use two reeds vibrating against each other; clarinets use one reed.",
  },
  {
    id: 986,
    subject: "Home Science",
    question: "Which is the proper way to season food healthily?",
    options: {
      A: "Adding salt and sugar excessively",
      B: "Using spices and herbs for flavour",
      C: "Never seasoning food",
      D: "Using only artificial flavourings",
    },
    correctAnswer: "B",
    explanation: "Herbs and spices add flavour with minimal salt or sugar.",
  },
  {
    id: 987,
    subject: "Physical & Health Education",
    question: "Which activity improves posture and core strength?",
    options: {
      A: "Slouching at a desk",
      B: "Yoga and Pilates",
      C: "Lying down always",
      D: "Avoiding movement",
    },
    correctAnswer: "B",
    explanation: "Yoga and Pilates focus on alignment and core engagement.",
  },
  {
    id: 988,
    subject: "ICT/Computer Studies",
    question: "Which is a proper way to protect your computer from spyware?",
    options: {
      A: "Opening all email attachments",
      B: "Using antispyware software and avoiding suspicious links",
      C: "Never updating software",
      D: "Sharing personal information online",
    },
    correctAnswer: "B",
    explanation:
      "Antispyware tools and caution prevent unwanted software installation.",
  },
  {
    id: 989,
    subject: "Mathematics",
    question: "What is 8 + 7 − 3?",
    options: {
      A: "12",
      B: "14",
      C: "11",
      D: "13",
    },
    correctAnswer: "A",
    explanation: "Calculate left to right: 8 + 7 = 15, then 15 − 3 = 12.",
  },
  {
    id: 990,
    subject: "English",
    question:
      "Which word is an adverb modifying an adjective in:  'That test was extremely difficult.'?",
    options: {
      A: "that",
      B: "test",
      C: "extremely",
      D: "was",
    },
    correctAnswer: "C",
    explanation:
      "'Extremely' modifies the adjective 'difficult', describing degree.",
  },
  {
    id: 991,
    subject: "Kiswahili",
    question: "Chagua tafsiri ya 'Where do you come from? '",
    options: {
      A: "Je, unakwenda wapi? ",
      B: "Je, unatoka wapi?",
      C: "Je, unakaa wapi?",
      D: "Je, unakula wapi?",
    },
    correctAnswer: "B",
    explanation:
      "'Unatoka wapi?' means 'Where do you come from? '; 'toka' means to come from.",
  },
  {
    id: 992,
    subject: "Science & Technology",
    question: "Which is an example of a fossil fuel?",
    options: {
      A: "Solar energy",
      B: "Wind power",
      C: "Natural gas",
      D: "Hydropower",
    },
    correctAnswer: "C",
    explanation:
      "Natural gas is a fossil fuel formed from ancient organic matter.",
  },
  {
    id: 993,
    subject: "Social Studies",
    question: "Which is a benefit of cultural diversity in schools?",
    options: {
      A: "Reduced learning opportunities",
      B: "Enriched learning from different perspectives",
      C: "Conflict always",
      D: "Less understanding",
    },
    correctAnswer: "B",
    explanation:
      "Diversity enhances learning through exposure to different ideas and cultures.",
  },
  {
    id: 994,
    subject: "CRE",
    question:
      "Which action shows hope in difficult times according to Christian faith?",
    options: {
      A: "Losing faith immediately",
      B: "Trusting in God's promise of redemption",
      C: "Giving up",
      D: "Despair and worry only",
    },
    correctAnswer: "B",
    explanation:
      "Christian hope means trusting God despite current difficulties.",
  },
  {
    id: 995,
    subject: "Agriculture",
    question:
      "Which method helps preserve fresh vegetables for several months?",
    options: {
      A: "Pickling and canning",
      B: "Leaving them in the sun",
      C: "No preservation",
      D: "Throwing them away",
    },
    correctAnswer: "A",
    explanation:
      "Pickling and canning use salt and heat to preserve vegetables.",
  },
  {
    id: 996,
    subject: "Music",
    question:
      "Which musical form consists of a single melodic line without accompaniment?",
    options: {
      A: "Homophony",
      B: "Polyphony",
      C: "Monophony",
      D: "Canon",
    },
    correctAnswer: "C",
    explanation: "Monophony is a single melody sung or played without harmony.",
  },
  {
    id: 997,
    subject: "Home Science",
    question:
      "Which is a proper way to prepare vegetables to preserve nutrients?",
    options: {
      A: "Cooking for extended periods",
      B: "Washing and cutting just before cooking",
      C: "Soaking in water for hours",
      D: "Peeling everything",
    },
    correctAnswer: "B",
    explanation:
      "Minimal preparation and quick cooking preserve vitamins and minerals.",
  },
  {
    id: 998,
    subject: "Physical & Health Education",
    question: "Which is a component of blood that carries oxygen to cells?",
    options: {
      A: "White blood cells",
      B: "Red blood cells",
      C: "Platelets",
      D: "Plasma only",
    },
    correctAnswer: "B",
    explanation: "Red blood cells contain haemoglobin, which carries oxygen.",
  },
  {
    id: 999,
    subject: "ICT/Computer Studies",
    question: "Which is a proper practice for online shopping?",
    options: {
      A: "Using public WiFi for payments",
      B: "Using secure, encrypted websites only",
      C: "Sharing card details publicly",
      D: "Ignoring website security",
    },
    correctAnswer: "B",
    explanation:
      "Secure (https) websites encrypt data, protecting financial information.",
  },
  {
    id: 1000,
    subject: "Mathematics",
    question: "What is the volume of a cube with side 5 cm?",
    options: {
      A: "25 cm³",
      B: "100 cm³",
      C: "125 cm³",
      D: "150 cm³",
    },
    correctAnswer: "C",
    explanation: "Volume = side³ = 5³ = 5 × 5 × 5 = 125 cm³.",
  },
  {
    id: 1001,
    subject: "Mathematics",
    question: "The sum of angles in a triangle is always:",
    options: {
      A: "90 degrees",
      B: "360 degrees",
      C: "180 degrees",
      D: "100 degrees",
    },
    correctAnswer: "C",
    explanation:
      "In Euclidean geometry, the sum of the interior angles of any triangle is always equal to 180.",
  },
  {
    id: 1002,
    subject: "English",
    question: "Which of the following sentences is grammatically correct?",
    options: {
      A: "Me and him went to the shop.",
      B: "He and I went to the shop.",
      C: "Him and I went to the shop.",
      D: "I and him went to the shop.",
    },
    correctAnswer: "B",
    explanation:
      "When using pronouns as subjects, 'He' and 'I' are the correct subject pronouns. It is also polite to put the other person before yourself ('He and I').",
  },
  {
    id: 1003,
    subject: "Kiswahili",
    question:
      "Tegua kitendawili hiki: 'Nyumba yangu haina mlango wala dirisha.'",
    options: {
      A: "Chungwa",
      B: "Nanasi",
      C: "Yai",
      D: "Kichwa",
    },
    correctAnswer: "C",
    explanation:
      "Yai ni kitu kilichofungwa pande zote bila nafasi ya wazi (kama mlango au dirisha) hadi kipasuliwe.",
  },
  {
    id: 1004,
    subject: "Science & Technology",
    question: "Which of the following is an example of a second-class lever?",
    options: {
      A: "Scissors",
      B: "Wheelbarrow",
      C: "See-saw",
      D: "Hammer",
    },
    correctAnswer: "B",
    explanation:
      "In a wheelbarrow, the load is between the fulcrum (wheel) and the effort (handles). This is the definition of a second-class lever.",
  },
  {
    id: 1005,
    subject: "Social Studies",
    question: "The administrative head of a sub-county in Kenya is the:",
    options: {
      A: "County Commissioner",
      B: "Deputy County Commissioner (DCC)",
      C: "Chief",
      D: "Governor",
    },
    correctAnswer: "B",
    explanation:
      "The Deputy County Commissioner (DCC) is the national government representative in charge of a Sub-County. The County Commissioner heads the County.",
  },
  {
    id: 1006,
    subject: "CRE",
    question: "Which parable did Jesus use to teach about forgiveness?",
    options: {
      A: "The Parable of the Sower",
      B: "The Parable of the Mustard Seed",
      C: "The Parable of the Prodigal Son",
      D: "The Parable of the Talents",
    },
    correctAnswer: "C",
    explanation:
      "The Parable of the Prodigal Son illustrates God's boundless mercy and readiness to forgive those who repent and return to Him.",
  },
  {
    id: 1007,
    subject: "Agriculture",
    question: "Which of these crops is a tuber crop?",
    options: {
      A: "Maize",
      B: "Beans",
      C: "Sweet Potato",
      D: "Wheat",
    },
    correctAnswer: "C",
    explanation:
      "Tuber crops grow underground. Sweet potatoes, irish potatoes, and yams are examples of tubers. Maize and wheat are cereals; beans are legumes.",
  },
  {
    id: 1008,
    subject: "Music",
    question: "The National Anthem of Kenya has how many verses?",
    options: {
      A: "Two",
      B: "Three",
      C: "Four",
      D: "One",
    },
    correctAnswer: "B",
    explanation:
      "The Kenyan National Anthem consists of three verses, which are usually sung in either Kiswahili or English during official functions.",
  },
  {
    id: 1009,
    subject: "Home Science",
    question: "Which change occurs in boys during pre-adolescence?",
    options: {
      A: "Development of breasts",
      B: "Widening of hips",
      C: "Deepening of the voice",
      D: "Menstruation",
    },
    correctAnswer: "C",
    explanation:
      "During puberty/pre-adolescence, boys experience a deepening of the voice (breaking voice) due to the enlargement of the larynx.",
  },
  {
    id: 1010,
    subject: "Physical & Health Education",
    question: "In athletics, which of the following is a 'Field' event?",
    options: {
      A: "100m Sprint",
      B: "Marathon",
      C: "Long Jump",
      D: "Relay Race",
    },
    correctAnswer: "C",
    explanation:
      "Field events involve jumping or throwing (e.g., Long Jump, Shot Put, Javelin). Track events involve running on the track (e.g., Sprints, Relays).",
  },
  {
    id: 1011,
    subject: "ICT/Computer Studies",
    question:
      "Which bar at the top of a window displays the name of the document or program?",
    options: {
      A: "Status Bar",
      B: "Scroll Bar",
      C: "Title Bar",
      D: "Taskbar",
    },
    correctAnswer: "C",
    explanation:
      "The Title Bar is located at the very top of an application window and shows the name of the file and the program being used.",
  },
  {
    id: 1012,
    subject: "Mathematics",
    question: "Work out: $3/4 - 1/8$.",
    options: {
      A: "2/4",
      B: "2/8",
      C: "5/8",
      D: "1/2",
    },
    correctAnswer: "C",
    explanation:
      "First, find a common denominator, which is 8. Convert $3/4$ to eighths: $3/4 = 6/8$. Now subtract: $6/8 - 1/8 = 5/8$.",
  },
  {
    id: 1013,
    subject: "English",
    question:
      "Choose the correct homophone to complete the sentence: 'They went to ___ house.'",
    options: {
      A: "There",
      B: "Their",
      C: "They're",
      D: "Dare",
    },
    correctAnswer: "B",
    explanation:
      "'Their' is the possessive form indicating ownership. 'There' indicates place, and 'They're' is a contraction of 'They are'.",
  },
  {
    id: 1014,
    subject: "Kiswahili",
    question: "Mtoto wa ng'ombe huitwa:",
    options: {
      A: "Kinda",
      B: "Ndama",
      C: "Mwanambuzi",
      D: "Kifaranga",
    },
    correctAnswer: "B",
    explanation:
      "Ndama ni jina la mtoto wa ng'ombe. Kinda ni la ndege, na kifaranga ni la kuku.",
  },
  {
    id: 1015,
    subject: "Science & Technology",
    question:
      "Which part of the digestive system absorbs water from undigested food?",
    options: {
      A: "Stomach",
      B: "Small Intestine",
      C: "Large Intestine",
      D: "Mouth",
    },
    correctAnswer: "C",
    explanation:
      "The Large Intestine (colon) absorbs water and salts from the material that has not been digested as food, and gets rid of any waste products left over.",
  },
  {
    id: 1016,
    subject: "Social Studies",
    question:
      "The main line of latitude that divides the Earth into the Northern and Southern Hemispheres is called the:",
    options: {
      A: "Prime Meridian",
      B: "Equator",
      C: "Tropic of Cancer",
      D: "Tropic of Capricorn",
    },
    correctAnswer: "B",
    explanation:
      "The Equator is the imaginary line at $0$ degrees latitude, equidistant from the North and South Poles, dividing the Earth into North and South.",
  },
  {
    id: 1017,
    subject: "CRE",
    question: "Who was the first King of Israel?",
    options: {
      A: "David",
      B: "Solomon",
      C: "Saul",
      D: "Samuel",
    },
    correctAnswer: "C",
    explanation:
      "Saul was the first king anointed by the prophet Samuel to lead the Israelites, before David and Solomon.",
  },
  {
    id: 1018,
    subject: "Agriculture",
    question:
      "Which tool is used for cutting tall grass or harvesting cereal crops like wheat manually?",
    options: {
      A: "Rake",
      B: "Slasher",
      C: "Sickle",
      D: "Spade",
    },
    correctAnswer: "C",
    explanation:
      "A sickle has a curved blade and is specifically designed for harvesting, or reaping, grain crops or cutting succulent forage.",
  },
  {
    id: 1019,
    subject: "Music",
    question: "In the sol-fa scale, which note comes immediately after 'Mi'?",
    options: {
      A: "Do",
      B: "Re",
      C: "Fa",
      D: "So",
    },
    correctAnswer: "C",
    explanation:
      "The major scale sequence is: Do, Re, Mi, Fa, So, La, Ti, Do. Therefore, 'Fa' follows 'Mi'.",
  },
  {
    id: 1020,
    subject: "Home Science",
    question:
      "Which common household item is an abrasive cleaner used for scrubbing pots?",
    options: {
      A: "Steel wool",
      B: "Sponge",
      C: "Cotton cloth",
      D: "Paper towel",
    },
    correctAnswer: "A",
    explanation:
      "Steel wool is made of fine metal fibers and is abrasive, making it effective for scrubbing burnt food or tough stains off metal pots (aluminum/steel).",
  },
  {
    id: 1021,
    subject: "Physical & Health Education",
    question:
      "What is the standard number of players on a Volleyball court for one team?",
    options: {
      A: "5",
      B: "6",
      C: "7",
      D: "11",
    },
    correctAnswer: "B",
    explanation:
      "A standard volleyball team consists of 6 players on the court at any one time.",
  },
  {
    id: 1022,
    subject: "ICT/Computer Studies",
    question:
      "Which key allows you to exit a full-screen mode or cancel a command?",
    options: {
      A: "Enter",
      B: "Esc (Escape)",
      C: "Shift",
      D: "Ctrl",
    },
    correctAnswer: "B",
    explanation:
      "The 'Esc' (Escape) key is used to interrupt a current function, close a pop-up menu, or exit full-screen mode.",
  },
  {
    id: 1023,
    subject: "Mathematics",
    question: "What is the value of digit 4 in 6.145?",
    options: {
      A: "Four tenths",
      B: "Four hundredths",
      C: "Four thousandths",
      D: "Four units",
    },
    correctAnswer: "B",
    explanation:
      "In the decimal 6.145, 1 is in the tenths place, 4 is in the hundredths place ($0.04$), and 5 is in the thousandths place.",
  },
  {
    id: 1024,
    subject: "English",
    question:
      "Identify the abstract noun in this sentence: 'His honesty was admired by everyone.'",
    options: {
      A: "His",
      B: "Honesty",
      C: "Admired",
      D: "Everyone",
    },
    correctAnswer: "B",
    explanation:
      "An abstract noun refers to an idea, quality, or state rather than a concrete object. 'Honesty' is a quality.",
  },
  {
    id: 1025,
    subject: "Kiswahili",
    question: "Kinyume cha neno 'Cheka' ni:",
    options: {
      A: "Lia",
      B: "Tabasamu",
      C: "Nuna",
      D: "Zungumza",
    },
    correctAnswer: "A",
    explanation: "Kinyume cha kucheka (to laugh) ni kulia (to cry).",
  },
  {
    id: 1026,
    subject: "Science & Technology",
    question:
      "Which of these clouds are associated with heavy rain and thunderstorms?",
    options: {
      A: "Cirrus",
      B: "Cumulus",
      C: "Cumulonimbus",
      D: "Stratus",
    },
    correctAnswer: "C",
    explanation:
      "Cumulonimbus clouds are tall, dense, and dark clouds often called 'thunderheads' that produce heavy rain, lightning, and thunder.",
  },
  {
    id: 1027,
    subject: "Social Studies",
    question: "The Mau Mau movement was fighting primarily for:",
    options: {
      A: "Better roads",
      B: "Land and Freedom (Independence)",
      C: "More schools",
      D: "Water supply",
    },
    correctAnswer: "B",
    explanation:
      "The Mau Mau uprising was a rebellion against British colonial rule, specifically fighting to recover stolen land and gain independence (freedom).",
  },
  {
    id: 1028,
    subject: "CRE",
    question:
      "Which Fruit of the Holy Spirit helps us to wait calmly without complaining?",
    options: {
      A: "Joy",
      B: "Kindness",
      C: "Patience",
      D: "Faithfulness",
    },
    correctAnswer: "C",
    explanation:
      "Patience (or Long-suffering) is the virtue of enduring difficult circumstances or waiting without becoming annoyed or anxious.",
  },
  {
    id: 1029,
    subject: "Agriculture",
    question: "Soil erosion is best prevented on a steep slope by:",
    options: {
      A: "Cutting down all trees",
      B: "Ploughing up and down the slope",
      C: "Terracing",
      D: "Burning the grass",
    },
    correctAnswer: "C",
    explanation:
      "Terracing involves creating flat steps on a slope to slow down water runoff and prevent soil from being washed away. Ploughing up and down encourages erosion.",
  },
  {
    id: 1030,
    subject: "Music",
    question: "Which of these is a string instrument?",
    options: {
      A: "Nyatiti",
      B: "Kayamba",
      C: "Drum",
      D: "Horn",
    },
    correctAnswer: "A",
    explanation:
      "The Nyatiti is a traditional Kenyan lyre (string instrument) played by plucking. Kayamba is a shaker (percussion), Drum is percussion, Horn is wind.",
  },
  {
    id: 1031,
    subject: "Home Science",
    question: "Which disease is caused by a lack of Iron in the diet?",
    options: {
      A: "Rickets",
      B: "Kwashiorkor",
      C: "Anaemia",
      D: "Scurvy",
    },
    correctAnswer: "C",
    explanation:
      "Anaemia is a condition caused by a deficiency of red blood cells or hemoglobin, often due to a lack of iron in the diet.",
  },
  {
    id: 1032,
    subject: "Physical & Health Education",
    question: "What is the correct First Aid for a nosebleed?",
    options: {
      A: "Tilt the head back",
      B: "Lie down flat",
      C: "Sit upright and pinch the soft part of the nose, leaning slightly forward",
      D: "Put cotton wool deep in the nose",
    },
    correctAnswer: "C",
    explanation:
      "Leaning forward prevents blood from flowing down the throat (which can cause vomiting), and pinching helps stop the bleeding by applying pressure.",
  },
  {
    id: 1033,
    subject: "ICT/Computer Studies",
    question: "Which of the following is an Output device?",
    options: {
      A: "Scanner",
      B: "Microphone",
      C: "Monitor (Screen)",
      D: "Webcam",
    },
    correctAnswer: "C",
    explanation:
      "A monitor displays the results of the computer's processing to the user visually. Scanners, microphones, and webcams are input devices.",
  },
  {
    id: 1034,
    subject: "Mathematics",
    question: "Convert 3 hours and 20 minutes into minutes.",
    options: {
      A: "320 minutes",
      B: "200 minutes",
      C: "180 minutes",
      D: "120 minutes",
    },
    correctAnswer: "B",
    explanation:
      "1 hour = 60 minutes. 3 hours = 3 times 60 = 180 text minutes. 180 + 20 = 200 minutes.",
  },
  {
    id: 1035,
    subject: "English",
    question: "Which word is a synonym for 'Huge'?",
    options: {
      A: "Tiny",
      B: "Gigantic",
      C: "Small",
      D: "Weak",
    },
    correctAnswer: "B",
    explanation:
      "Gigantic means of very great size or extent; huge or enormous.",
  },
  {
    id: 1036,
    subject: "Kiswahili",
    question: "Maamkizi 'Shikamoo' hujibiwa vipi?",
    options: {
      A: "Sijambo",
      B: "Marahaba",
      C: "Nzuri",
      D: "Salama",
    },
    correctAnswer: "B",
    explanation:
      "'Shikamoo' ni salamu ya heshima kwa mtu mkubwa kiumri. Jibu lake rasmi ni 'Marahaba'.",
  },
  {
    id: 1037,
    subject: "Science & Technology",
    question: "What is the function of the skeletal system?",
    options: {
      A: "To digest food",
      B: "To transport blood",
      C: "To provide support, shape, and protection to the body",
      D: "To think",
    },
    correctAnswer: "C",
    explanation:
      "The skeleton provides the framework that supports the body's shape and protects vital internal organs (e.g., skull protects brain, ribs protect heart).",
  },
  {
    id: 1038,
    subject: "Social Studies",
    question: "Which colour on the Kenyan flag represents the people of Kenya?",
    options: {
      A: "Green",
      B: "Red",
      C: "Black",
      D: "White",
    },
    correctAnswer: "C",
    explanation:
      "Black represents the indigenous people of Kenya. Red stands for blood shed for independence, Green for the land, and White for peace.",
  },
  {
    id: 1039,
    subject: "CRE",
    question: "The story of David and Goliath teaches Christians that:",
    options: {
      A: "Being tall is important",
      B: "We should trust in God's power to overcome big challenges",
      C: "We should use stones to fight",
      D: "Kings are weak",
    },
    correctAnswer: "B",
    explanation:
      "David, though small and young, defeated the giant Goliath because he trusted in God, teaching that faith conquers fear and seemingly impossible odds.",
  },
  {
    id: 1040,
    subject: "Agriculture",
    question:
      "Which type of irrigation involves using pipes with small holes to drip water near the plant roots?",
    options: {
      A: "Flood irrigation",
      B: "Sprinkler irrigation",
      C: "Drip irrigation",
      D: "Canal irrigation",
    },
    correctAnswer: "C",
    explanation:
      "Drip irrigation is a water-efficient method where water drips slowly to the roots of plants, minimizing evaporation and water wastage.",
  },
  {
    id: 1041,
    subject: "Music",
    question: "A group of people singing together is called a:",
    options: {
      A: "Band",
      B: "Choir",
      C: "Orchestra",
      D: "Soloist",
    },
    correctAnswer: "B",
    explanation:
      "A choir is an organized group of singers, typically one that takes part in church services or performs in public.",
  },
  {
    id: 1042,
    subject: "Home Science",
    question:
      "Why should we separate coloured clothes from white clothes before washing?",
    options: {
      A: "To save soap",
      B: "To prevent the colours from running and staining the white clothes",
      C: "It makes drying faster",
      D: "Whites are heavier",
    },
    correctAnswer: "B",
    explanation:
      "Coloured fabrics can 'bleed' dye during washing. If mixed with whites, the whites will get stained or discoloured.",
  },
  {
    id: 1043,
    subject: "Physical & Health Education",
    question:
      "In the game of Netball, how many seconds can a player hold the ball?",
    options: {
      A: "10 seconds",
      B: "3 seconds",
      C: "5 seconds",
      D: "No limit",
    },
    correctAnswer: "B",
    explanation:
      "In standard Netball rules, a player must release the ball (pass or shoot) within 3 seconds of receiving it.",
  },
  {
    id: 1044,
    subject: "ICT/Computer Studies",
    question: "Which of these is a social media platform?",
    options: {
      A: "Microsoft Excel",
      B: "Facebook",
      C: "Calculator",
      D: "Notepad",
    },
    correctAnswer: "B",
    explanation:
      "Facebook is a social networking service where users can connect, share, and communicate. The others are offline utility/productivity software.",
  },
  {
    id: 1045,
    subject: "Mathematics",
    question:
      "A car travels at a speed of 60 km/h. How far will it travel in 2 hours?",
    options: {
      A: "30 km",
      B: "120 km",
      C: "62 km",
      D: "90 km",
    },
    correctAnswer: "B",
    explanation: "Distance = Speed * Time. 60 km/htimes 2 = 120 km.",
  },
  {
    id: 1046,
    subject: "English",
    question: "Fill in the blank: 'The cat is hiding ___ the table.'",
    options: {
      A: "In",
      B: "Under",
      C: "Between",
      D: "Into",
    },
    correctAnswer: "B",
    explanation:
      "'Under' is the correct preposition of place to describe something being directly below or covered by something else.",
  },
  {
    id: 1047,
    subject: "Kiswahili",
    question: "Mtu anayetibu wagonjwa huitwa:",
    options: {
      A: "Mwalimu",
      B: "Daktari",
      C: "Seremala",
      D: "Mpishi",
    },
    correctAnswer: "B",
    explanation: "Daktari (Doctor) ni mtu aliye na ujuzi wa kutibu magonjwa.",
  },
  {
    id: 1048,
    subject: "Science & Technology",
    question:
      "What is the force that opposes motion between two surfaces touching each other?",
    options: {
      A: "Gravity",
      B: "Magnetism",
      C: "Friction",
      D: "Electricity",
    },
    correctAnswer: "C",
    explanation:
      "Friction is the resistance that one surface or object encounters when moving over another. It slows things down.",
  },
  {
    id: 1049,
    subject: "Social Studies",
    question: "Which continent is Kenya located in?",
    options: {
      A: "Asia",
      B: "Europe",
      C: "South America",
      D: "Africa",
    },
    correctAnswer: "D",
    explanation: "Kenya is a country in East Africa, situated on the equator.",
  },
  {
    id: 1050,
    subject: "CRE",
    question: "The prayer that Jesus taught his disciples is known as:",
    options: {
      A: "The Hail Mary",
      B: "The Lord's Prayer",
      C: "The Apostles' Creed",
      D: "The Grace",
    },
    correctAnswer: "B",
    explanation:
      "The Lord's Prayer (Our Father) is the central prayer in Christianity, given by Jesus as a model for how to pray.",
  },
  {
    id: 1051,
    subject: "Agriculture",
    question: "Which of these animals is a poultry bird?",
    options: {
      A: "Rabbit",
      B: "Turkey",
      C: "Cat",
      D: "Donkey",
    },
    correctAnswer: "B",
    explanation:
      "Poultry refers to domesticated birds kept for meat or eggs. Turkeys, chickens, ducks, and geese are examples.",
  },
  {
    id: 1052,
    subject: "Music",
    question: "Which of these is a wind instrument?",
    options: {
      A: "Guitar",
      B: "Piano",
      C: "Flute",
      D: "Violin",
    },
    correctAnswer: "C",
    explanation:
      "A flute is a wind instrument that produces sound when a stream of air is directed against the edge of a hole.",
  },
  {
    id: 1053,
    subject: "Home Science",
    question:
      "A needlework tool used to protect the finger when pushing the needle is called a:",
    options: {
      A: "Tape measure",
      B: "Thimble",
      C: "Pin cushion",
      D: "Shears",
    },
    correctAnswer: "B",
    explanation:
      "A thimble is a small hard cup (metal or plastic) worn on the finger to protect it from being pricked when pushing a needle through fabric.",
  },
  {
    id: 1054,
    subject: "Physical & Health Education",
    question:
      "In a 100m sprint, the command given by the starter before 'Go' (gunshot) is:",
    options: {
      A: "Run",
      B: "On your marks, Get Set",
      C: "Ready, Steady",
      D: "Start moving",
    },
    correctAnswer: "B",
    explanation:
      "The standard sequence for sprint starts is 'On your marks' (get into position), 'Set' (lift hips/brace), followed by the Gun/Signal.",
  },
  {
    id: 1055,
    subject: "ICT/Computer Studies",
    question: "What does 'WWW' stand for in a website address?",
    options: {
      A: "World Wide Web",
      B: "World Web Wide",
      C: "Web World Wide",
      D: "Wide World Web",
    },
    correctAnswer: "A",
    explanation:
      "WWW stands for World Wide Web, which is the system of interlinked documents and other resources accessed via the Internet.",
  },
  {
    id: 1056,
    subject: "Mathematics",
    question: "How many grams are in 2.5 kilograms?",
    options: {
      A: "250g",
      B: "2500g",
      C: "2050g",
      D: "25g",
    },
    correctAnswer: "B",
    explanation:
      "$1 \\text{ kg} = 1000 \\text{ g}$. $2.5 \\text{ kg} \\times 1000 = 2500 \\text{ g}$.",
  },
  {
    id: 1057,
    subject: "English",
    question: "Choose the correct collective noun: 'A ___ of bees.'",
    options: {
      A: "Swarm",
      B: "Herd",
      C: "Pack",
      D: "School",
    },
    correctAnswer: "A",
    explanation: "The collective noun for a large group of bees is a 'swarm'.",
  },
  {
    id: 1058,
    subject: "Kiswahili",
    question: "Neno 'Mti' liko katika ngeli gani?",
    options: {
      A: "M-MI",
      B: "KI-VI",
      C: "U-I",
      D: "LI-YA",
    },
    correctAnswer: "A",
    explanation:
      "Ngeli ya M-MI huhusisha mimea na miti (Mti - Miti, Mchungwa - Michungwa).",
  },
  {
    id: 1059,
    subject: "Science & Technology",
    question: "Which of the following is a non-green plant?",
    options: {
      A: "Maize",
      B: "Mushroom (Fungi)",
      C: "Mango tree",
      D: "Grass",
    },
    correctAnswer: "B",
    explanation:
      "Mushrooms belong to the Kingdom Fungi. They lack chlorophyll and cannot photosynthesize, so they are not green plants.",
  },
  {
    id: 1060,
    subject: "Social Studies",
    question: "Which direction is opposite to North?",
    options: {
      A: "East",
      B: "West",
      C: "South",
      D: "North-East",
    },
    correctAnswer: "C",
    explanation: "On a compass, South is directly opposite North.",
  },
  {
    id: 1061,
    subject: "CRE",
    question: "Why did God create Eve for Adam?",
    options: {
      A: "To be his servant",
      B: "To be a suitable helper and companion",
      C: "To name the animals",
      D: "To guard the garden",
    },
    correctAnswer: "B",
    explanation:
      "In Genesis, God saw that it was not good for man to be alone, so He created Eve to be a suitable helper and companion.",
  },
  {
    id: 1062,
    subject: "Agriculture",
    question: "Weeds are unwanted because:",
    options: {
      A: "They look ugly",
      B: "They compete with crops for water, light, and nutrients",
      C: "They grow too slow",
      D: "They attract rain",
    },
    correctAnswer: "B",
    explanation:
      "Weeds reduce crop yield by fighting (competing) for the essential resources that the crops need to grow.",
  },
  {
    id: 1063,
    subject: "Music",
    question: "Which note has the longest duration?",
    options: {
      A: "Crotchet (Quarter note)",
      B: "Minim (Half note)",
      C: "Semibreve (Whole note)",
      D: "Quaver (Eighth note)",
    },
    correctAnswer: "C",
    explanation:
      "In standard common time ($4/4$), a Semibreve lasts for 4 beats, Minim for 2, Crotchet for 1, and Quaver for $1/2$.",
  },
  {
    id: 1064,
    subject: "Home Science",
    question: "Which method of cooking involves cooking food in hot oil?",
    options: {
      A: "Boiling",
      B: "Steaming",
      C: "Frying",
      D: "Baking",
    },
    correctAnswer: "C",
    explanation:
      "Frying is the cooking of food in hot fats or oils (e.g., shallow frying, deep frying).",
  },
  {
    id: 1065,
    subject: "Physical & Health Education",
    question: "Which of these is a racquet game?",
    options: {
      A: "Football",
      B: "Tennis",
      C: "Handball",
      D: "Rugby",
    },
    correctAnswer: "B",
    explanation:
      "Tennis is played using a racquet to hit a ball over a net. Other examples include Badminton and Squash.",
  },
  {
    id: 1066,
    subject: "ICT/Computer Studies",
    question: "A 'hard copy' refers to:",
    options: {
      A: "Data on a screen",
      B: "Data saved on a flash disk",
      C: "Printed output on paper",
      D: "The computer case",
    },
    correctAnswer: "C",
    explanation:
      "Hard copy is a physical reproduction of a document, usually on paper, as opposed to a soft copy which is digital.",
  },
  {
    id: 1067,
    subject: "Mathematics",
    question: "What is the LCM of 4 and 6?",
    options: {
      A: "24",
      B: "12",
      C: "10",
      D: "2",
    },
    correctAnswer: "B",
    explanation:
      "Multiples of $4$: $4, 8, 12, 16. Multiples of $6$: $6, 12, 18. The lowest common multiple is $12$.",
  },
  {
    id: 1068,
    subject: "English",
    question: "Which of these sentences is in the Present Continuous Tense?",
    options: {
      A: "She eats mangoes.",
      B: "She ate a mango.",
      C: "She is eating a mango.",
      D: "She will eat a mango.",
    },
    correctAnswer: "C",
    explanation:
      "Present Continuous uses the auxiliary verb 'is/am/are' + verb ending in '-ing' to show an action happening right now.",
  },
  {
    id: 1069,
    subject: "Kiswahili",
    question: "Kisawe cha neno 'Barabara' ni:",
    options: {
      A: "Njia",
      B: "Gari",
      C: "Mto",
      D: "Nyumba",
    },
    correctAnswer: "A",
    explanation:
      "Visawe ni maneno yenye maana sawa. Barabara ni sawa na njia au njia kuu.",
  },
  {
    id: 1070,
    subject: "Science & Technology",
    question: "Which animal is an amphibian?",
    options: {
      A: "Lizard",
      B: "Frog",
      C: "Fish",
      D: "Snake",
    },
    correctAnswer: "B",
    explanation:
      "Amphibians (like frogs and toads) can live both in water and on land. They typically start life in water with gills and develop lungs as adults.",
  },
  {
    id: 1071,
    subject: "Social Studies",
    question: "The capital city of Uganda is:",
    options: {
      A: "Nairobi",
      B: "Dar es Salaam",
      C: "Kampala",
      D: "Kigali",
    },
    correctAnswer: "C",
    explanation: "Kampala is the capital and largest city of Uganda.",
  },
  {
    id: 1072,
    subject: "CRE",
    question: "Which day did God rest after creation?",
    options: {
      A: "First day",
      B: "Sixth day",
      C: "Seventh day",
      D: "Third day",
    },
    correctAnswer: "C",
    explanation:
      "According to Genesis, God finished his work on the sixth day and rested on the seventh day (Sabbath).",
  },
  {
    id: 1073,
    subject: "Agriculture",
    question: "Which animal provides us with bacon and pork?",
    options: {
      A: "Cow",
      B: "Pig",
      C: "Sheep",
      D: "Goat",
    },
    correctAnswer: "B",
    explanation: "Bacon, ham, and pork are meat products derived from pigs.",
  },
  {
    id: 1074,
    subject: "Music",
    question: "The person who directs an orchestra or choir is called a:",
    options: {
      A: "Manager",
      B: "Conductor",
      C: "Singer",
      D: "Dancer",
    },
    correctAnswer: "B",
    explanation:
      "A conductor directs a musical performance by way of visible gestures with the hands, arms, face and head.",
  },
  {
    id: 1075,
    subject: "Home Science",
    question: "What is the main function of Calcium in the body?",
    options: {
      A: "To give energy",
      B: "To make blood red",
      C: "To strengthen bones and teeth",
      D: "To digest food",
    },
    correctAnswer: "C",
    explanation:
      "Calcium is a mineral that is vital for building strong bones and teeth.",
  },
  {
    id: 1076,
    subject: "Physical & Health Education",
    question: "What is the main purpose of 'Cooling down' after exercise?",
    options: {
      A: "To increase heart rate",
      B: "To return the body to its normal resting state gradually",
      C: "To make muscles stiff",
      D: "To waste time",
    },
    correctAnswer: "B",
    explanation:
      "Cooling down allows the heart rate and breathing to return to normal slowly and helps remove waste products (lactic acid) from muscles to prevent soreness.",
  },
  {
    id: 1077,
    subject: "ICT/Computer Studies",
    question:
      "Which key is used to erase the character to the LEFT of the cursor?",
    options: {
      A: "Delete",
      B: "Backspace",
      C: "Spacebar",
      D: "Shift",
    },
    correctAnswer: "B",
    explanation:
      "Backspace erases text backwards (to the left). Delete erases text forwards (to the right).",
  },
  {
    id: 1078,
    subject: "Mathematics",
    question: "Solve for y: $y + 9 = 20$.",
    options: {
      A: "29",
      B: "11",
      C: "10",
      D: "18",
    },
    correctAnswer: "B",
    explanation:
      "Subtract $9$ from both sides to isolate $y$: $y = 20 - 9$. $y = 11$.",
  },
  {
    id: 1079,
    subject: "English",
    question: "Which of the following is a proper noun?",
    options: {
      A: "City",
      B: "Boy",
      C: "River",
      D: "London",
    },
    correctAnswer: "D",
    explanation:
      "Proper nouns name specific people, places, or things and are capitalized. London is a specific city. The others are common nouns.",
  },
  {
    id: 1080,
    subject: "Kiswahili",
    question: "Mtu anayeongoza shule huitwa:",
    options: {
      A: "Kiranja",
      B: "Mwalimu Mkuu",
      C: "Mlinzi",
      D: "Mpishi",
    },
    correctAnswer: "B",
    explanation:
      "Mwalimu Mkuu (Headteacher) ndiye kiongozi msimamizi wa shule.",
  },
  {
    id: 1081,
    subject: "Science & Technology",
    question: "Which simple machine consists of a grooved wheel with a rope?",
    options: {
      A: "Lever",
      B: "Inclined Plane",
      C: "Pulley",
      D: "Screw",
    },
    correctAnswer: "C",
    explanation:
      "A pulley is a simple machine that uses a wheel with a groove and a rope to lift or lower heavy loads.",
  },
  {
    id: 1082,
    subject: "Social Studies",
    question: "Which vegetation is found along the coast in salty water?",
    options: {
      A: "Savanna grass",
      B: "Mangrove forests",
      C: "Rainforest",
      D: "Bamboo",
    },
    correctAnswer: "B",
    explanation:
      "Mangrove forests are distinct shrubs/trees that grow in coastal saline or brackish water.",
  },
  {
    id: 1083,
    subject: "CRE",
    question: "What event happened on the day of Pentecost?",
    options: {
      A: "Jesus was born",
      B: "The Holy Spirit came down upon the disciples",
      C: "Jesus died",
      D: "Jesus ascended to heaven",
    },
    correctAnswer: "B",
    explanation:
      "Pentecost marks the descent of the Holy Spirit upon the Apostles and other followers of Jesus, giving them the power to speak in tongues.",
  },
  {
    id: 1084,
    subject: "Agriculture",
    question: "Which of these is a legume crop?",
    options: {
      A: "Maize",
      B: "Sorghum",
      C: "Beans",
      D: "Rice",
    },
    correctAnswer: "C",
    explanation:
      "Legumes are plants that produce seeds in pods, like beans, peas, and groundnuts. They are good for soil nitrogen.",
  },
  {
    id: 1085,
    subject: "Music",
    question: "What is the shape of a Triangle instrument?",
    options: {
      A: "Circle",
      B: "Square",
      C: "Triangular",
      D: "Rectangular",
    },
    correctAnswer: "C",
    explanation:
      "As the name suggests, the Triangle is a percussion instrument bent into the shape of a triangle.",
  },
  {
    id: 1086,
    subject: "Home Science",
    question: "Shoes made of leather should be cleaned using:",
    options: {
      A: "Water and soap only",
      B: "Shoe polish and a brush",
      C: "Paraffin",
      D: "Bleach",
    },
    correctAnswer: "B",
    explanation:
      "Shoe polish nourishes the leather and gives it a shine, while water can damage leather if soaked.",
  },
  {
    id: 1087,
    subject: "Physical & Health Education",
    question: "Which organ is primarily exercised during skipping rope?",
    options: {
      A: "Heart",
      B: "Stomach",
      C: "Liver",
      D: "Kidney",
    },
    correctAnswer: "A",
    explanation:
      "Skipping rope is an intense cardiovascular exercise that strengthens the heart and lungs.",
  },
  {
    id: 1088,
    subject: "ICT/Computer Studies",
    question: "What is a 'folder' used for in a computer?",
    options: {
      A: "To type text",
      B: "To organize and store files",
      C: "To play music",
      D: "To connect to the internet",
    },
    correctAnswer: "B",
    explanation:
      "A folder (directory) is a virtual container used to organize files and other folders on a computer storage device.",
  },
  {
    id: 1089,
    subject: "Mathematics",
    question:
      "If a rectangle has an area of $50$ cm² and a length of $10$ cm, what is its width?",
    options: {
      A: "5 cm",
      B: "40 cm",
      C: "500 cm",
      D: "10 cm",
    },
    correctAnswer: "A",
    explanation:
      "Area = Length $\\times$ Width. $50 = 10 \\times \\text{Width}$. Width = $50 / 10 = 5 \\text{ cm}$.",
  },
  {
    id: 1090,
    subject: "English",
    question:
      "Which prefix can be added to the word 'happy' to make its opposite?",
    options: {
      A: "Dis-",
      B: "Un-",
      C: "Re-",
      D: "Im-",
    },
    correctAnswer: "B",
    explanation:
      "The prefix 'Un-' is added to 'happy' to create 'Unhappy', which means not happy.",
  },
  {
    id: 1091,
    subject: "Kiswahili",
    question: "Jina lingine la 'Nyanya' (mzazi wa mzazi) ni:",
    options: {
      A: "Shangazi",
      B: "Bibi",
      C: "Dada",
      D: "Mama mdogo",
    },
    correctAnswer: "B",
    explanation:
      "Katika Kiswahili, nyanya ni sawa na bibi (mama ya baba au mama ya mama).",
  },
  {
    id: 1092,
    subject: "Science & Technology",
    question: "The changing of a gas into a liquid is called:",
    options: {
      A: "Freezing",
      B: "Melting",
      C: "Condensation",
      D: "Evaporation",
    },
    correctAnswer: "C",
    explanation:
      "Condensation is the process where gas (like steam) cools down and turns back into liquid water.",
  },
  {
    id: 1093,
    subject: "Social Studies",
    question: "The main airport in Nairobi is called:",
    options: {
      A: "Moi International Airport",
      B: "Kisumu International Airport",
      C: "Jomo Kenyatta International Airport (JKIA)",
      D: "Wilson Airport",
    },
    correctAnswer: "C",
    explanation:
      "JKIA is the largest and busiest airport in Kenya, serving Nairobi.",
  },
  {
    id: 1094,
    subject: "CRE",
    question: "Which son of Adam killed his brother Abel?",
    options: {
      A: "Seth",
      B: "Cain",
      C: "Noah",
      D: "Isaac",
    },
    correctAnswer: "B",
    explanation:
      "Cain killed his brother Abel out of jealousy because God accepted Abel's offering but not Cain's.",
  },
  {
    id: 1095,
    subject: "Agriculture",
    question: "Mulching helps to:",
    options: {
      A: "Increase weeds",
      B: "Conserve soil moisture",
      C: "Make the soil dry",
      D: "Heat the soil",
    },
    correctAnswer: "B",
    explanation:
      "Mulching involves covering the soil with dry grass or plastic to reduce evaporation, thereby conserving moisture.",
  },
  {
    id: 1096,
    subject: "Music",
    question: "A song sung by one person is called a:",
    options: {
      A: "Duet",
      B: "Trio",
      C: "Solo",
      D: "Choir",
    },
    correctAnswer: "C",
    explanation: "A solo is a musical performance by a single performer.",
  },
  {
    id: 1097,
    subject: "Home Science",
    question: "Which of these is a Natural fibre?",
    options: {
      A: "Nylon",
      B: "Polyester",
      C: "Cotton",
      D: "Acrylic",
    },
    correctAnswer: "C",
    explanation:
      "Cotton is obtained from the cotton plant, making it a natural fibre. The others are man-made (synthetic).",
  },
  {
    id: 1098,
    subject: "Physical & Health Education",
    question:
      "Which nutrient is most important for a marathon runner before a race?",
    options: {
      A: "Carbohydrates",
      B: "Vitamins",
      C: "Fats",
      D: "Proteins",
    },
    correctAnswer: "A",
    explanation:
      "Carbohydrates provide the energy stamina needed for endurance activities like marathon running.",
  },
  {
    id: 1099,
    subject: "ICT/Computer Studies",
    question: "Which device connects a computer to the internet?",
    options: {
      A: "Printer",
      B: "Modem/Router",
      C: "Speaker",
      D: "Monitor",
    },
    correctAnswer: "B",
    explanation:
      "A modem or router is the hardware device that enables a computer to transmit data over telephone or cable lines, providing internet access.",
  },
  {
    id: 1100,
    subject: "Mathematics",
    question: "A cube has ___ edges.",
    options: {
      A: "6",
      B: "8",
      C: "12",
      D: "4",
    },
    correctAnswer: "C",
    explanation: "A cube has 6 faces, 8 vertices (corners), and 12 edges.",
  },
  {
    id: 1101,
    subject: "English",
    question: "The past participle of 'write' is:",
    options: {
      A: "Wrote",
      B: "Written",
      C: "Writing",
      D: "Writes",
    },
    correctAnswer: "B",
    explanation:
      "The verb forms are: Write (Base), Wrote (Past Simple), Written (Past Participle).",
  },
  {
    id: 1102,
    subject: "Kiswahili",
    question: "Kamilisha: 'Mtoto wa nyoka ni ___'",
    options: {
      A: "Joka",
      B: "Kinyoka",
      C: "Burungutu",
      D: "Kijoka",
    },
    correctAnswer: "B",
    explanation: "Kinda la nyoka huitwa 'Kinyoka' (au wakati mwingine 'kile').",
  },
  {
    id: 1103,
    subject: "Science & Technology",
    question: "Which planet is closest to the Sun?",
    options: {
      A: "Venus",
      B: "Earth",
      C: "Mercury",
      D: "Mars",
    },
    correctAnswer: "C",
    explanation:
      "Mercury is the first planet in the solar system and is closest to the Sun.",
  },
  {
    id: 1104,
    subject: "Social Studies",
    question: "The legislative arm of the county government is the:",
    options: {
      A: "County Assembly",
      B: "County Executive Committee",
      C: "High Court",
      D: "Senate",
    },
    correctAnswer: "A",
    explanation:
      "The County Assembly makes laws for the county (like Parliament does for the nation). The County Executive Committee implements them.",
  },
  {
    id: 1105,
    subject: "CRE",
    question: "Who was thrown into the den of lions?",
    options: {
      A: "Joseph",
      B: "Daniel",
      C: "Shadrach",
      D: "Jonah",
    },
    correctAnswer: "B",
    explanation:
      "Daniel was thrown into the lions' den because he continued to pray to God despite the King's decree, and God sent an angel to shut the lions' mouths.",
  },
  {
    id: 1106,
    subject: "Agriculture",
    question: "Identify a biting and chewing pest.",
    options: {
      A: "Aphid",
      B: "Locust",
      C: "Mosquito",
      D: "Mite",
    },
    correctAnswer: "B",
    explanation:
      "Locusts and grasshoppers have strong mandibles (jaws) for biting and chewing leaves. Aphids are piercing and sucking pests.",
  },
  {
    id: 1107,
    subject: "Music",
    question: "Which instrument is played by shaking?",
    options: {
      A: "Piano",
      B: "Kayamba",
      C: "Flute",
      D: "Guitar",
    },
    correctAnswer: "B",
    explanation:
      "The Kayamba is a traditional reed shaker used in Kenya, played by shaking it rhythmically.",
  },
  {
    id: 1108,
    subject: "Home Science",
    question: "Which hygiene practice prevents tooth decay?",
    options: {
      A: "Eating sweets",
      B: "Brushing teeth after meals",
      C: "Drinking soda",
      D: "Chewing gum only",
    },
    correctAnswer: "B",
    explanation:
      "Brushing removes food particles and plaque that cause tooth decay and cavities.",
  },
  {
    id: 1109,
    subject: "Physical & Health Education",
    question: "In football (soccer), a penalty kick is awarded when:",
    options: {
      A: "The ball goes out of play",
      B: "A foul is committed inside the penalty box by the defending team",
      C: "A player scores a goal",
      D: "The game ends",
    },
    correctAnswer: "B",
    explanation:
      "A penalty is a direct free kick taken from the penalty spot, awarded for serious fouls committed by a defender inside their own penalty area.",
  },
  {
    id: 1110,
    subject: "ICT/Computer Studies",
    question: "Which software is used for browsing the internet?",
    options: {
      A: "MS Paint",
      B: "Google Chrome",
      C: "MS Excel",
      D: "Calculator",
    },
    correctAnswer: "B",
    explanation:
      "Google Chrome, Firefox, Edge, and Safari are examples of web browsers.",
  },
  {
    id: 1111,
    subject: "Mathematics",
    question: "Which angle is less than $90^{\\circ}$?",
    options: {
      A: "Obtuse angle",
      B: "Right angle",
      C: "Acute angle",
      D: "Reflex angle",
    },
    correctAnswer: "C",
    explanation:
      "An acute angle measures between $0$ and $90$ degrees. A right angle is exactly $90$. An obtuse is between $90$ and $180$.",
  },
  {
    id: 1112,
    subject: "English",
    question: "The plural of 'Child' is:",
    options: {
      A: "Childs",
      B: "Children",
      C: "Childrens",
      D: "Child",
    },
    correctAnswer: "B",
    explanation:
      "Child is an irregular noun. The plural is Children (never 'childrens').",
  },
  {
    id: 1113,
    subject: "Kiswahili",
    question: "Andika kwa tarakimu: Elfu mbili, mia tano na sita.",
    options: {
      A: "2560",
      B: "2506",
      C: "2056",
      D: "200506",
    },
    correctAnswer: "B",
    explanation: "Elfu mbili (2000) + mia tano (500) + sita (6) = 2506.",
  },
  {
    id: 1114,
    subject: "Science & Technology",
    question: "Which part of the plant absorbs water?",
    options: {
      A: "Leaf",
      B: "Flower",
      C: "Root hairs",
      D: "Stem",
    },
    correctAnswer: "C",
    explanation:
      "Root hairs increase the surface area of the root system to maximize the absorption of water and minerals from the soil.",
  },
  {
    id: 1115,
    subject: "Social Studies",
    question: "Vasco da Gama built a pillar in which Kenyan town?",
    options: {
      A: "Mombasa",
      B: "Lamu",
      C: "Malindi",
      D: "Kilifi",
    },
    correctAnswer: "C",
    explanation:
      "The Vasco da Gama Pillar is a historical monument in Malindi, built by the Portuguese explorer Vasco da Gama in 1498.",
  },
  {
    id: 1116,
    subject: "CRE",
    question: "Moses received the Ten Commandments on Mount ___.",
    options: {
      A: "Kenya",
      B: "Sinai",
      C: "Olive",
      D: "Carmel",
    },
    correctAnswer: "B",
    explanation:
      "According to Exodus, Moses went up to Mount Sinai to receive the stone tablets containing the Ten Commandments from God.",
  },
  {
    id: 1117,
    subject: "Agriculture",
    question: "Which farm tool is used for digging hard ground?",
    options: {
      A: "Rake",
      B: "Mattock",
      C: "Panga",
      D: "Wheelbarrow",
    },
    correctAnswer: "B",
    explanation:
      "A mattock (or pickaxe) has a heavy metal head used for breaking up hard, rocky soil or digging trenches.",
  },
  {
    id: 1118,
    subject: "Music",
    question:
      "What is the sol-fa name for the 5th note of the scale (d - r - m - f - ?)?",
    options: {
      A: "La",
      B: "So",
      C: "Ti",
      D: "Do",
    },
    correctAnswer: "B",
    explanation: "The sequence is Do(1), Re(2), Mi(3), Fa(4), So(5).",
  },
  {
    id: 1119,
    subject: "Home Science",
    question: "Puberty is the stage when:",
    options: {
      A: "A child starts school",
      B: "A person becomes an old man",
      C: "A child's body matures into an adult body capable of reproduction",
      D: "A baby starts walking",
    },
    correctAnswer: "C",
    explanation:
      "Puberty is the process of physical changes through which a child's body matures into an adult body capable of sexual reproduction.",
  },
  {
    id: 1120,
    subject: "Physical & Health Education",
    question: "Which of these is a water sport?",
    options: {
      A: "Hockey",
      B: "Swimming",
      C: "Archery",
      D: "Cycling",
    },
    correctAnswer: "B",
    explanation:
      "Swimming takes place in water. The others are land-based sports.",
  },
  {
    id: 1121,
    subject: "ICT/Computer Studies",
    question: "What is the brain of the computer?",
    options: {
      A: "Monitor",
      B: "CPU (Central Processing Unit)",
      C: "Keyboard",
      D: "Mouse",
    },
    correctAnswer: "B",
    explanation:
      "The CPU is often called the brain because it handles all the instructions and calculations needed for the computer to work.",
  },
  {
    id: 1122,
    subject: "Mathematics",
    question: "Which of these is a multiple of 7?",
    options: {
      A: "15",
      B: "21",
      C: "30",
      D: "12",
    },
    correctAnswer: "B",
    explanation:
      "$7 \\times 1 = 7$; $7 \\times 2 = 14$; $7 \\times 3 = 21$. 21 is in the 7 times table.",
  },
  {
    id: 1123,
    subject: "English",
    question: "Which word is an adjective?",
    options: {
      A: "Run",
      B: "Beautiful",
      C: "Boy",
      D: "Quickly",
    },
    correctAnswer: "B",
    explanation:
      "Adjectives describe nouns. 'Beautiful' describes a noun (e.g., beautiful flower). Run (verb), Boy (noun), Quickly (adverb).",
  },
  {
    id: 1124,
    subject: "Kiswahili",
    question: "Chombo cha usafiri majini ni:",
    options: {
      A: "Ndege",
      B: "Meli",
      C: "Gari",
      D: "Baiskeli",
    },
    correctAnswer: "B",
    explanation: "Meli, jahazi, na mtumbwi ni vyombo vya usafiri majini.",
  },
  {
    id: 1125,
    subject: "Science & Technology",
    question: "Which of these materials is magnetic?",
    options: {
      A: "Wood",
      B: "Plastic",
      C: "Iron",
      D: "Glass",
    },
    correctAnswer: "C",
    explanation:
      "Iron, nickel, and cobalt are magnetic materials. Magnets attract them.",
  },
  {
    id: 1126,
    subject: "Social Studies",
    question: "The equator passes through which town in Kenya?",
    options: {
      A: "Nairobi",
      B: "Mombasa",
      C: "Nanyuki",
      D: "Garissa",
    },
    correctAnswer: "C",
    explanation:
      "Nanyuki is a famous town located on the equator. There are signs in the town marking the crossing.",
  },
  {
    id: 1127,
    subject: "CRE",
    question: "Who baptized Jesus?",
    options: {
      A: "Peter",
      B: "John the Baptist",
      C: "Paul",
      D: "Mary",
    },
    correctAnswer: "B",
    explanation: "John the Baptist baptized Jesus in the River Jordan.",
  },
  {
    id: 1128,
    subject: "Agriculture",
    question: "A structure used to store maize after harvesting is a:",
    options: {
      A: "Kraal",
      B: "Granary",
      C: "Hutch",
      D: "Pen",
    },
    correctAnswer: "B",
    explanation:
      "A granary is a traditional or modern store used for keeping grain dry and safe from pests.",
  },
  {
    id: 1129,
    subject: "Music",
    question: "Which song is sung to praise God?",
    options: {
      A: "Lullaby",
      B: "Patriotic song",
      C: "Sacred song / Hymn",
      D: "Dirge",
    },
    correctAnswer: "C",
    explanation:
      "Sacred songs, hymns, or gospel songs are sung for religious purposes to praise or worship God.",
  },
  {
    id: 1130,
    subject: "Home Science",
    question: "When serving food, we should use:",
    options: {
      A: "Dirty hands",
      B: "Serving spoons",
      C: "A stick",
      D: "A cup",
    },
    correctAnswer: "B",
    explanation:
      "Using serving spoons ensures hygiene and prevents contamination of the food.",
  },
  {
    id: 1131,
    subject: "Physical & Health Education",
    question: "Which activity improves flexibility?",
    options: {
      A: "Sleeping",
      B: "Stretching/Yoga",
      C: "Eating",
      D: "Sitting",
    },
    correctAnswer: "B",
    explanation:
      "Stretching exercises elongate the muscles and improve the range of motion in joints (flexibility).",
  },
  {
    id: 1132,
    subject: "ICT/Computer Studies",
    question: "To write capital letters continuously, you press:",
    options: {
      A: "Enter",
      B: "Caps Lock",
      C: "Tab",
      D: "Esc",
    },
    correctAnswer: "B",
    explanation:
      "The Caps Lock key toggles capital letters on and off. When on, all typed letters appear in uppercase.",
  },
  {
    id: 1133,
    subject: "Mathematics",
    question:
      "The perimeter of a square is $20$ cm. What is the length of one side?",
    options: {
      A: "5 cm",
      B: "4 cm",
      C: "10 cm",
      D: "2 cm",
    },
    correctAnswer: "A",
    explanation:
      "Perimeter of square = $4 \\times \\text{Side}$. $20 = 4 \\times \\text{Side}$. Side = $20 / 4 = 5 \\text{ cm}$.",
  },
  {
    id: 1134,
    subject: "English",
    question: "Which sentence is correct?",
    options: {
      A: "I has a book.",
      B: "I have a book.",
      C: "I having a book.",
      D: "I haves a book.",
    },
    correctAnswer: "B",
    explanation:
      "The subject 'I' takes the verb 'have'. 'He/She/It' takes 'has'.",
  },
  {
    id: 1135,
    subject: "Kiswahili",
    question: "Nomino 'Ugonjwa' iko katika ngeli gani?",
    options: {
      A: "U-U",
      B: "U-I",
      C: "KI-VI",
      D: "A-WA",
    },
    correctAnswer: "A",
    explanation:
      "Ugonjwa ni nomino ya ngeli ya U-U (Ugonjwa - Magonjwa). Mara nyingi huwekwa U-YA (kama U-MA).",
  },
  {
    id: 1136,
    subject: "Science & Technology",
    question: "A standard unit for measuring temperature is:",
    options: {
      A: "Kilogram",
      B: "Degrees Celsius",
      C: "Metre",
      D: "Litre",
    },
    correctAnswer: "B",
    explanation:
      "Temperature is commonly measured in degrees Celsius ($^{\\circ}C$) or Fahrenheit ($^{\\circ}F$). Kg is for mass, Metre for length.",
  },
  {
    id: 1137,
    subject: "Social Studies",
    question: "Coffee is mainly grown in which areas?",
    options: {
      A: "Hot and dry areas",
      B: "Cool and wet highlands",
      C: "Deserts",
      D: "Coastal beaches",
    },
    correctAnswer: "B",
    explanation:
      "Coffee (Arabica) thrives in high altitude areas with cool temperatures and reliable rainfall (Central Kenya, Kisii).",
  },
  {
    id: 1138,
    subject: "CRE",
    question:
      "The three wise men brought Jesus gifts of Gold, Frankincense, and ___.",
    options: {
      A: "Silver",
      B: "Myrrh",
      C: "Bronze",
      D: "Clothes",
    },
    correctAnswer: "B",
    explanation:
      "The Magi (Wise Men) presented gifts of Gold (kingship), Frankincense (deity/priest), and Myrrh (death/suffering).",
  },
  {
    id: 1139,
    subject: "Agriculture",
    question: "A rabbit is kept in a:",
    options: {
      A: "Hutch",
      B: "Kennel",
      C: "Stable",
      D: "Hive",
    },
    correctAnswer: "A",
    explanation:
      "A hutch is a type of cage or house specifically used for keeping rabbits.",
  },
  {
    id: 1140,
    subject: "Music",
    question: "Which of these is a percussion instrument?",
    options: {
      A: "Violin",
      B: "Drum",
      C: "Guitar",
      D: "Flute",
    },
    correctAnswer: "B",
    explanation:
      "Percussion instruments make sound when hit, shaken, or scraped. A drum is hit.",
  },
  {
    id: 1141,
    subject: "Home Science",
    question: "We should wash our hands:",
    options: {
      A: "Only when they look dirty",
      B: "Before eating and after visiting the toilet",
      C: "Once a week",
      D: "With mud",
    },
    correctAnswer: "B",
    explanation:
      "Handwashing at critical times (after toilet, before food) is the best way to prevent the spread of germs.",
  },
  {
    id: 1142,
    subject: "Physical & Health Education",
    question: "Which of these is a track event?",
    options: {
      A: "Shot put",
      B: "High jump",
      C: "400m race",
      D: "Discus",
    },
    correctAnswer: "C",
    explanation:
      "Races run on the track (sprints, middle distance) are track events. Jumps and throws are field events.",
  },
  {
    id: 1143,
    subject: "ICT/Computer Studies",
    question: "A file saved in Microsoft Word usually ends with:",
    options: {
      A: ".mp3",
      B: ".docx",
      C: ".jpg",
      D: ".xls",
    },
    correctAnswer: "B",
    explanation:
      ".docx is the standard file extension for Microsoft Word documents. .mp3 is audio, .jpg is image, .xls is Excel.",
  },
  {
    id: 1144,
    subject: "Mathematics",
    question: "Write $\\frac{4}{100}$ as a decimal.",
    options: {
      A: "0.4",
      B: "0.04",
      C: "4.0",
      D: "0.004",
    },
    correctAnswer: "B",
    explanation:
      "$\frac{4}{100}$ means four hundredths. As a decimal, the 4 goes in the second decimal place: $0.04$.",
  },
  {
    id: 1145,
    subject: "English",
    question: "Which word is a conjunction?",
    options: {
      A: "Because",
      B: "Table",
      C: "Run",
      D: "Soft",
    },
    correctAnswer: "A",
    explanation:
      "Conjunctions connect words or clauses. 'Because' connects a result with a reason.",
  },
  {
    id: 1146,
    subject: "Kiswahili",
    question: "Akisami $1/4$ inaitwaje?",
    options: {
      A: "Nusu",
      B: "Robo",
      C: "Thuluthi",
      D: "Humusi",
    },
    correctAnswer: "B",
    explanation: "$1/2$ ni Nusu, $1/3$ ni Thuluthi, $1/4$ ni Robo.",
  },
  {
    id: 1147,
    subject: "Science & Technology",
    question: "The main source of heat and light for the earth is:",
    options: {
      A: "Moon",
      B: "Stars",
      C: "Sun",
      D: "Fire",
    },
    correctAnswer: "C",
    explanation:
      "The Sun provides the solar energy essential for life on Earth.",
  },
  {
    id: 1148,
    subject: "Social Studies",
    question: "The head of the Judiciary in Kenya is the:",
    options: {
      A: "President",
      B: "Chief Justice",
      C: "Attorney General",
      D: "Speaker",
    },
    correctAnswer: "B",
    explanation:
      "The Chief Justice is the head of the Judiciary and the President of the Supreme Court.",
  },
  {
    id: 1149,
    subject: "CRE",
    question: "The first book of the New Testament is:",
    options: {
      A: "Genesis",
      B: "Matthew",
      C: "Mark",
      D: "Revelation",
    },
    correctAnswer: "B",
    explanation:
      "Matthew is the first of the four Gospels and the first book of the New Testament.",
  },
  {
    id: 1150,
    subject: "Agriculture",
    question: "Which of these is a cereal crop?",
    options: {
      A: "Beans",
      B: "Peas",
      C: "Wheat",
      D: "Cabbage",
    },
    correctAnswer: "C",
    explanation:
      "Cereals are grasses grown for their edible grain (maize, wheat, rice, sorghum).",
  },
  {
    id: 1151,
    subject: "Music",
    question: "Which term describes how high or low a sound is?",
    options: {
      A: "Tempo",
      B: "Volume",
      C: "Pitch",
      D: "Rhythm",
    },
    correctAnswer: "C",
    explanation:
      "Pitch refers to the frequency of a sound wave—whether it sounds high (like a whistle) or low (like a drum).",
  },
  {
    id: 1152,
    subject: "Home Science",
    question: "A balanced diet must contain:",
    options: {
      A: "Only proteins",
      B: "Only carbohydrates",
      C: "Proteins, carbohydrates, and vitamins in correct proportions",
      D: "Lots of sweets",
    },
    correctAnswer: "C",
    explanation:
      "A balanced diet contains all the food groups (carbs, proteins, vitamins, fats, water) in the right amounts.",
  },
  {
    id: 1153,
    subject: "Physical & Health Education",
    question: "Which of these is a warm-up exercise?",
    options: {
      A: "Sprinting at full speed immediately",
      B: "Jogging slowly",
      C: "Sitting down",
      D: "Eating lunch",
    },
    correctAnswer: "B",
    explanation:
      "Jogging slowly raises the heart rate gradually and warms up the muscles.",
  },
  {
    id: 1154,
    subject: "ICT/Computer Studies",
    question: "The physical parts of a computer that you can touch are called:",
    options: {
      A: "Software",
      B: "Hardware",
      C: "Malware",
      D: "Applications",
    },
    correctAnswer: "B",
    explanation:
      "Hardware refers to the tangible components (screen, keyboard, mouse, chips).",
  },
  {
    id: 1155,
    subject: "Mathematics",
    question: "Multiply $12 \\times 12$.",
    options: {
      A: "124",
      B: "144",
      C: "100",
      D: "122",
    },
    correctAnswer: "B",
    explanation: "$12 \\times 12$ is a square number, which equals $144$.",
  },
  {
    id: 1156,
    subject: "English",
    question: "The opposite of 'Sharp' is:",
    options: {
      A: "Pointy",
      B: "Blunt",
      C: "Big",
      D: "Hard",
    },
    correctAnswer: "B",
    explanation: "A knife can be sharp. If it is not sharp, it is blunt.",
  },
  {
    id: 1157,
    subject: "Kiswahili",
    question: "Tunda la mbuyu linaitwaje?",
    options: {
      A: "Embe",
      B: "Mabungo",
      C: "Ubuyu",
      D: "Pera",
    },
    correctAnswer: "B",
    explanation:
      "Tunda la mti wa mbuyu huitwa 'buhuu' au 'mabungo' (mbegu zake zikitengenezwa huitwa ubuyu).",
  },
  {
    id: 1158,
    subject: "Science & Technology",
    question: "Which of these transmits sound the fastest?",
    options: {
      A: "Air (Gas)",
      B: "Water (Liquid)",
      C: "Solids",
      D: "Vacuum",
    },
    correctAnswer: "C",
    explanation:
      "Sound travels fastest through solids because the particles are packed closely together, allowing vibrations to pass quickly.",
  },
  {
    id: 1159,
    subject: "Social Studies",
    question: "Which lake in Kenya is famous for flamingos?",
    options: {
      A: "Lake Victoria",
      B: "Lake Nakuru",
      C: "Lake Turkana",
      D: "Lake Naivasha",
    },
    correctAnswer: "B",
    explanation:
      "Lake Nakuru is a soda lake famous for the millions of flamingos that flock there (though numbers vary due to water levels).",
  },
  {
    id: 1160,
    subject: "CRE",
    question:
      "The commandment 'Do not commit adultery' respects the institution of:",
    options: {
      A: "School",
      B: "Marriage",
      C: "Work",
      D: "Church",
    },
    correctAnswer: "B",
    explanation:
      "Adultery is a sin against marriage, so the commandment protects the sanctity of marriage.",
  },
  {
    id: 1161,
    subject: "Agriculture",
    question: "Which tool is used for spraying chemicals on crops?",
    options: {
      A: "Watering can",
      B: "Knapsack sprayer",
      C: "Hose pipe",
      D: "Bucket",
    },
    correctAnswer: "B",
    explanation:
      "A knapsack sprayer is carried on the back and used to apply herbicides or pesticides to crops evenly.",
  },
  {
    id: 1162,
    subject: "Music",
    question: "Which of these is a patriotic song in Kenya?",
    options: {
      A: "Happy Birthday",
      B: "Kenya Nchi Yetu",
      C: "Jingle Bells",
      D: "Twinkle Twinkle Little Star",
    },
    correctAnswer: "B",
    explanation:
      "'Kenya Nchi Yetu' is a well-known patriotic song expressing love for the country.",
  },
  {
    id: 1163,
    subject: "Home Science",
    question:
      "The method of preserving meat by exposing it to smoke is called:",
    options: {
      A: "Salting",
      B: "Smoking",
      C: "Freezing",
      D: "Drying",
    },
    correctAnswer: "B",
    explanation:
      "Smoking dries the meat and adds chemicals from the smoke that kill bacteria and add flavor.",
  },
  {
    id: 1164,
    subject: "Physical & Health Education",
    question:
      "A pass in basketball where the ball hits the floor before reaching the teammate is called a:",
    options: {
      A: "Chest pass",
      B: "Bounce pass",
      C: "Overhead pass",
      D: "Shot",
    },
    correctAnswer: "B",
    explanation:
      "In a bounce pass, the ball bounces once on the floor between the passer and the receiver.",
  },
  {
    id: 1165,
    subject: "ICT/Computer Studies",
    question: "Which key do you press to go to the next line while typing?",
    options: {
      A: "Spacebar",
      B: "Shift",
      C: "Enter / Return",
      D: "Alt",
    },
    correctAnswer: "C",
    explanation:
      "The Enter key creates a new paragraph or moves the cursor to the beginning of the next line.",
  },
  {
    id: 1166,
    subject: "Mathematics",
    question: "What is $50\\%$ of $80$?",
    options: {
      A: "40",
      B: "50",
      C: "30",
      D: "20",
    },
    correctAnswer: "A",
    explanation: "$50\\%$ means half ($1/2$). Half of $80$ is $40$.",
  },
  {
    id: 1167,
    subject: "English",
    question: "Identify the adverb: 'The tortoise walked slowly.'",
    options: {
      A: "Tortoise",
      B: "Walked",
      C: "Slowly",
      D: "The",
    },
    correctAnswer: "C",
    explanation: "'Slowly' describes how the tortoise walked.",
  },
  {
    id: 1168,
    subject: "Kiswahili",
    question: "Wingi wa 'Jicho' ni:",
    options: {
      A: "Majicho",
      B: "Macho",
      C: "Vijicho",
      D: "Jicho",
    },
    correctAnswer: "B",
    explanation: "Jicho (Ji-) huchukua wingi wa Macho (Ma-). (Ngeli ya LI-YA).",
  },
  {
    id: 1169,
    subject: "Science & Technology",
    question: "Which of these is a reptile?",
    options: {
      A: "Toad",
      B: "Crocodile",
      C: "Whale",
      D: "Eagle",
    },
    correctAnswer: "B",
    explanation:
      "Crocodiles are reptiles (cold-blooded, scales, lay eggs). Toads are amphibians, whales are mammals, eagles are birds.",
  },
  {
    id: 1170,
    subject: "Social Studies",
    question: "Traditional medicine men used ___ to treat diseases.",
    options: {
      A: "Tablets",
      B: "Herbs and roots",
      C: "Injections",
      D: "X-rays",
    },
    correctAnswer: "B",
    explanation:
      "Before modern medicine, traditional healers used various plants, herbs, roots, and bark to treat ailments.",
  },
  {
    id: 1171,
    subject: "CRE",
    question: "The story of the Good Samaritan teaches us to help:",
    options: {
      A: "Only our friends",
      B: "Only our family",
      C: "Anyone in need (our neighbour)",
      D: "Rich people only",
    },
    correctAnswer: "C",
    explanation:
      "Jesus defined 'neighbour' as anyone who is in need of mercy, regardless of their background.",
  },
  {
    id: 1172,
    subject: "Agriculture",
    question: "Which of these is a root vegetable?",
    options: {
      A: "Spinach",
      B: "Carrot",
      C: "Tomato",
      D: "Cabbage",
    },
    correctAnswer: "B",
    explanation:
      "Carrots are enlarged taproots eaten as vegetables. Spinach/Cabbage are leafy; Tomato is a fruit.",
  },
  {
    id: 1173,
    subject: "Music",
    question: "A lullaby should be sung:",
    options: {
      A: "Loudly and fast",
      B: "Softly and slowly",
      C: "Harshly",
      D: "With shouting",
    },
    correctAnswer: "B",
    explanation:
      "To soothe a baby to sleep, the music must be soft, slow, and gentle.",
  },
  {
    id: 1174,
    subject: "Home Science",
    question: "Which vitamin helps us to see well in dim light?",
    options: {
      A: "Vitamin A",
      B: "Vitamin C",
      C: "Vitamin D",
      D: "Vitamin K",
    },
    correctAnswer: "A",
    explanation:
      "Vitamin A is essential for good vision, especially in low light. Deficiency causes night blindness.",
  },
  {
    id: 1175,
    subject: "Physical & Health Education",
    question: "In athletics, the baton is used in:",
    options: {
      A: "High jump",
      B: "Relay races",
      C: "Marathon",
      D: "Shot put",
    },
    correctAnswer: "B",
    explanation:
      "Runners pass a hollow tube called a baton to the next runner in a relay team.",
  },
  {
    id: 1176,
    subject: "ICT/Computer Studies",
    question: "Which icon represents the 'Recycle Bin'?",
    options: {
      A: "A folder",
      B: "A trash can / wastebasket",
      C: "A computer screen",
      D: "A printer",
    },
    correctAnswer: "B",
    explanation:
      "The Recycle Bin (where deleted files go) is usually represented by a trash can icon.",
  },
  {
    id: 1177,
    subject: "Mathematics",
    question: "What is $3^2$ (3 squared)?",
    options: {
      A: "6",
      B: "9",
      C: "5",
      D: "3",
    },
    correctAnswer: "B",
    explanation: "$3$ squared means $3 \\times 3$, which is $9$.",
  },
  {
    id: 1178,
    subject: "English",
    question: "The boy ___ the ball yesterday.",
    options: {
      A: "Kick",
      B: "Kicks",
      C: "Kicked",
      D: "Kicking",
    },
    correctAnswer: "C",
    explanation: "Yesterday indicates past tense, so 'Kicked' is correct.",
  },
  {
    id: 1179,
    subject: "Kiswahili",
    question: "Umoja wa 'Viti' ni:",
    options: {
      A: "Kiti",
      B: "Mti",
      C: "Jiti",
      D: "Kijiti",
    },
    correctAnswer: "A",
    explanation: "Kiti (KI-) - Viti (VI-).",
  },
  {
    id: 1180,
    subject: "Science & Technology",
    question: "Which gas supports burning?",
    options: {
      A: "Oxygen",
      B: "Carbon Dioxide",
      C: "Nitrogen",
      D: "Helium",
    },
    correctAnswer: "A",
    explanation: "Fire needs oxygen to burn. Carbon dioxide extinguishes fire.",
  },
  {
    id: 1181,
    subject: "Social Studies",
    question: "The national language of Kenya is:",
    options: {
      A: "English",
      B: "Kiswahili",
      C: "Kikuyu",
      D: "French",
    },
    correctAnswer: "B",
    explanation:
      "Kiswahili is the National Language (symbol of unity), while English and Kiswahili are both Official Languages.",
  },
  {
    id: 1182,
    subject: "CRE",
    question: "Jesus fed 5000 people with:",
    options: {
      A: "5 loaves and 2 fish",
      B: "2 loaves and 5 fish",
      C: "10 loaves",
      D: "Manna",
    },
    correctAnswer: "A",
    explanation:
      "In the miracle of the feeding of the 5000, Jesus multiplied five loaves of bread and two fish.",
  },
  {
    id: 1183,
    subject: "Agriculture",
    question:
      "Which animal is known as a 'beast of burden' (used for transport)?",
    options: {
      A: "Donkey",
      B: "Cat",
      C: "Sheep",
      D: "Chicken",
    },
    correctAnswer: "A",
    explanation:
      "Donkeys (and camels) are used to carry heavy loads and transport goods.",
  },
  {
    id: 1184,
    subject: "Music",
    question: "The lyrics of a song are the:",
    options: {
      A: "Tune",
      B: "Words",
      C: "Instruments",
      D: "Beats",
    },
    correctAnswer: "B",
    explanation: "Lyrics are the words that are sung in a song.",
  },
  {
    id: 1185,
    subject: "Home Science",
    question: "A good way to dispose of kitchen refuse (organic waste) is:",
    options: {
      A: "Throwing it on the road",
      B: "Composting",
      C: "Keeping it in the house",
      D: "Burning plastic with it",
    },
    correctAnswer: "B",
    explanation:
      "Composting turns organic kitchen waste (peels, leftovers) into manure for the garden.",
  },
  {
    id: 1186,
    subject: "Physical & Health Education",
    question: "Which signal starts a football game?",
    options: {
      A: "Gunshot",
      B: "Whistle",
      C: "Bell",
      D: "Flag",
    },
    correctAnswer: "B",
    explanation:
      "The referee blows a whistle to start and stop play in football.",
  },
  {
    id: 1187,
    subject: "ICT/Computer Studies",
    question: "Which finger is used to press the Spacebar?",
    options: {
      A: "Pinky",
      B: "Index finger",
      C: "Thumb",
      D: "Middle finger",
    },
    correctAnswer: "C",
    explanation:
      "In touch typing, the thumb (usually the right thumb) is used to press the spacebar.",
  },
  {
    id: 1188,
    subject: "Mathematics",
    question: "Divide 48 by 6.",
    options: {
      A: "6",
      B: "7",
      C: "8",
      D: "9",
    },
    correctAnswer: "C",
    explanation: "$6 \\times 8 = 48$, so $48 / 6 = 8$.",
  },
  {
    id: 1189,
    subject: "English",
    question: "Which is the correct spelling?",
    options: {
      A: "Recieve",
      B: "Receive",
      C: "Riceive",
      D: "Receve",
    },
    correctAnswer: "B",
    explanation:
      "The rule is 'i' before 'e' except after 'c'. So, R-E-C-E-I-V-E.",
  },
  {
    id: 1190,
    subject: "Kiswahili",
    question: "Tegua: 'Kuku wangu hutagia miibani'.",
    options: {
      A: "Nanasi",
      B: "Embe",
      C: "Chungwa",
      D: "Ndizi",
    },
    correctAnswer: "A",
    explanation:
      "Nanasi ni tunda tamu (kama yai la kuku) lakini mmea wake una miiba.",
  },
  {
    id: 1191,
    subject: "Science & Technology",
    question: "Which blood vessels carry blood AWAY from the heart?",
    options: {
      A: "Veins",
      B: "Arteries",
      C: "Capillaries",
      D: "Nerves",
    },
    correctAnswer: "B",
    explanation:
      "Arteries carry oxygenated blood away from the heart to the body. Veins carry blood back to the heart.",
  },
  {
    id: 1192,
    subject: "Social Studies",
    question: "Which color of the traffic lights tells drivers to STOP?",
    options: {
      A: "Green",
      B: "Amber (Orange)",
      C: "Red",
      D: "Blue",
    },
    correctAnswer: "C",
    explanation: "Red means stop. Amber means get ready. Green means go.",
  },
  {
    id: 1193,
    subject: "CRE",
    question: "Who was the mother of Jesus?",
    options: {
      A: "Elizabeth",
      B: "Mary",
      C: "Martha",
      D: "Sarah",
    },
    correctAnswer: "B",
    explanation: "The Virgin Mary was the mother of Jesus.",
  },
  {
    id: 1194,
    subject: "Agriculture",
    question: "A young female cow that has not yet given birth is called a:",
    options: {
      A: "Bull",
      B: "Heifer",
      C: "Steer",
      D: "Calf",
    },
    correctAnswer: "B",
    explanation:
      "A heifer is a young female cow. Once she gives birth, she is called a cow.",
  },
  {
    id: 1195,
    subject: "Music",
    question: "Which of these is a traditional African horn instrument?",
    options: {
      A: "Piano",
      B: "Abu / Kudu Horn",
      C: "Guitar",
      D: "Violin",
    },
    correctAnswer: "B",
    explanation:
      "Horns made from animal horns (like the Kudu) are traditional wind instruments in many African communities.",
  },
  {
    id: 1196,
    subject: "Home Science",
    question: "Which type of fuel is obtained from wood?",
    options: {
      A: "Paraffin",
      B: "Charcoal",
      C: "Gas",
      D: "Electricity",
    },
    correctAnswer: "B",
    explanation:
      "Charcoal is produced by burning wood in a low-oxygen environment (carbonization).",
  },
  {
    id: 1197,
    subject: "Physical & Health Education",
    question: "What is the result of a tie in a tug-of-war?",
    options: {
      A: "Both teams fall",
      B: "The rope breaks",
      C: "Draw / Stalemate",
      D: "The judge wins",
    },
    correctAnswer: "C",
    explanation:
      "If neither team manages to pull the other across the line within the time or rules, it is a draw.",
  },
  {
    id: 1198,
    subject: "ICT/Computer Studies",
    question: "Which part of the computer shows the time and date?",
    options: {
      A: "The Taskbar / System Tray",
      B: "The Keyboard",
      C: "The Mouse",
      D: "The Printer",
    },
    correctAnswer: "A",
    explanation:
      "The System Tray (usually bottom right corner on Windows) displays the clock and date.",
  },
  {
    id: 1199,
    subject: "Mathematics",
    question: "How many centimeters in 1 meter?",
    options: {
      A: "10",
      B: "100",
      C: "1000",
      D: "50",
    },
    correctAnswer: "B",
    explanation: "$1 \\text{ meter} = 100 \\text{ centimeters}$.",
  },
  {
    id: 1200,
    subject: "English",
    question: "Choose the correct preposition: 'The bird flew ___ the tree.'",
    options: {
      A: "Over",
      B: "In",
      C: "On",
      D: "At",
    },
    correctAnswer: "A",
    explanation:
      "If the bird is flying above the tree without touching it, 'over' is the correct preposition.",
  },
  {
    id: 1201,
    subject: "Mathematics",
    question: "What is the Roman Numeral for 15?",
    options: {
      A: "V",
      B: "X",
      C: "XV",
      D: "XX",
    },
    correctAnswer: "C",
    explanation:
      "In Roman Numerals, X = 10 and V = 5. Therefore, XV = 10 + 5 = 15.",
  },
  {
    id: 1202,
    subject: "English",
    question: "Complete the proverb: 'A stitch in time saves ___.'",
    options: {
      A: "Nine",
      B: "Time",
      C: "Money",
      D: "Clothes",
    },
    correctAnswer: "A",
    explanation:
      "The correct proverb is 'A stitch in time saves nine', meaning it is better to fix a problem immediately than to wait until it gets worse.",
  },
  {
    id: 1203,
    subject: "Kiswahili",
    question: "Andika neno 'Dada' katika hali ya udogo (Diminutive).",
    options: {
      A: "Madada",
      B: "Kidada",
      C: "Jidada",
      D: "Vijidada",
    },
    correctAnswer: "B",
    explanation:
      "Udogo wa neno 'dada' huanza na kiambishi 'Ki-'. Hivyo, dada mdogo ni 'Kidada'.",
  },
  {
    id: 1204,
    subject: "Science & Technology",
    question: "Which type of tooth is used for tearing food?",
    options: {
      A: "Incisor",
      B: "Molar",
      C: "Canine",
      D: "Premolar",
    },
    correctAnswer: "C",
    explanation:
      "Canines are pointed teeth designed for gripping and tearing food, especially meat. Incisors bite, molars grind.",
  },
  {
    id: 1205,
    subject: "Social Studies",
    question: "Who represents the County in the Senate?",
    options: {
      A: "Governor",
      B: "Woman Representative",
      C: "Senator",
      D: "MCA",
    },
    correctAnswer: "C",
    explanation:
      "The Senator is elected to represent the interests of the County and its government in the Senate (National Parliament).",
  },
  {
    id: 1206,
    subject: "CRE",
    question:
      "The story of the walls of Jericho falling down is associated with which leader?",
    options: {
      A: "Moses",
      B: "Joshua",
      C: "Aaron",
      D: "Gideon",
    },
    correctAnswer: "B",
    explanation:
      "Joshua led the Israelites around the city of Jericho, and the walls fell down after they shouted and blew trumpets.",
  },
  {
    id: 1207,
    subject: "Agriculture",
    question:
      "Which of these is a biting and chewing pest that attacks maize stalks?",
    options: {
      A: "Stalk borer",
      B: "Aphid",
      C: "Tick",
      D: "Tsetse fly",
    },
    correctAnswer: "A",
    explanation:
      "The maize stalk borer is a larva that bores holes into the stem of maize plants, causing significant damage.",
  },
  {
    id: 1208,
    subject: "Music",
    question: "Which hand sign represents the note 'So' in Sol-fa notation?",
    options: {
      A: "Fist (Do)",
      B: "Flat hand, palm down (La)",
      C: "Flat hand, palm facing chest (So)",
      D: "Index finger up (Ti)",
    },
    correctAnswer: "C",
    explanation:
      "For 'So' (Sol), the hand is held open with the palm facing the singer's chest (or flat vertical hand).",
  },
  {
    id: 1209,
    subject: "Home Science",
    question:
      "Which nutritional deficiency disease causes weak and bowed legs in children?",
    options: {
      A: "Scurvy",
      B: "Rickets",
      C: "Malaria",
      D: "Goitre",
    },
    correctAnswer: "B",
    explanation:
      "Rickets is caused by a lack of Vitamin D and Calcium, leading to soft bones and bowed legs.",
  },
  {
    id: 1210,
    subject: "Physical & Health Education",
    question:
      "The start of a 400m race is usually done using which start technique?",
    options: {
      A: "Standing start",
      B: "Crouch start",
      C: "Jump start",
      D: "Rolling start",
    },
    correctAnswer: "B",
    explanation:
      "For sprints (up to 400m), a crouch start (using starting blocks) is used to generate maximum power.",
  },
  {
    id: 1211,
    subject: "ICT/Computer Studies",
    question: "Which key is used to indent the first line of a paragraph?",
    options: {
      A: "Alt",
      B: "Ctrl",
      C: "Tab",
      D: "Esc",
    },
    correctAnswer: "C",
    explanation:
      "The 'Tab' key moves the cursor forward a set distance, commonly used for indenting paragraphs.",
  },
  {
    id: 1212,
    subject: "Mathematics",
    question: "Convert $3/4$ to a decimal.",
    options: {
      A: "0.34",
      B: "0.75",
      C: "0.43",
      D: "3.4",
    },
    correctAnswer: "B",
    explanation: "$3$ divided by $4$ is $0.75$.",
  },
  {
    id: 1213,
    subject: "English",
    question: "Identify the reflexive pronoun: 'He hurt ___ while playing.'",
    options: {
      A: "Him",
      B: "Himself",
      C: "His",
      D: "He",
    },
    correctAnswer: "B",
    explanation:
      "Reflexive pronouns end in -self or -selves. Since the subject is 'He', the reflexive pronoun is 'himself'.",
  },
  {
    id: 1214,
    subject: "Kiswahili",
    question: "Taja sehemu ya mwili inayotumika kusikia harufu.",
    options: {
      A: "Mdomo",
      B: "Sikio",
      C: "Pua",
      D: "Ulimi",
    },
    correctAnswer: "C",
    explanation: "Pua ndiyo sehemu ya mwili inayotumika kunusa harufu.",
  },
  {
    id: 1215,
    subject: "Science & Technology",
    question: "Which of these substances is a liquid at room temperature?",
    options: {
      A: "Oxygen",
      B: "Wood",
      C: "Water",
      D: "Stone",
    },
    correctAnswer: "C",
    explanation:
      "Water is a liquid. Oxygen is a gas, and wood/stone are solids.",
  },
  {
    id: 1216,
    subject: "Social Studies",
    question:
      "The main economic activity of the Mijikenda people in the past was:",
    options: {
      A: "Fishing and Farming",
      B: "Mining gold",
      C: "Tourism",
      D: "Manufacturing cars",
    },
    correctAnswer: "A",
    explanation:
      "Living along the coast, the Mijikenda practiced mixed farming and fishing.",
  },
  {
    id: 1217,
    subject: "CRE",
    question: "Which prophet healed Naaman the Syrian of leprosy?",
    options: {
      A: "Elijah",
      B: "Elisha",
      C: "Isaiah",
      D: "Jeremiah",
    },
    correctAnswer: "B",
    explanation:
      "Elisha told Naaman to wash in the River Jordan seven times to be healed of leprosy.",
  },
  {
    id: 1218,
    subject: "Agriculture",
    question: "Which tool is used to level the soil after digging?",
    options: {
      A: "Panga",
      B: "Rake",
      C: "Jembe",
      D: "Axe",
    },
    correctAnswer: "B",
    explanation:
      "A rake is used to break up soil clumps, smooth the surface, and gather leaves.",
  },
  {
    id: 1219,
    subject: "Music",
    question: "Which note value is worth half a beat?",
    options: {
      A: "Minim",
      B: "Crotchet",
      C: "Quaver",
      D: "Semibreve",
    },
    correctAnswer: "C",
    explanation:
      "A Quaver (eighth note) lasts for half the duration of a Crotchet (quarter note).",
  },
  {
    id: 1220,
    subject: "Home Science",
    question: "Common accidents in the kitchen include:",
    options: {
      A: "Drowning",
      B: "Burns and scalds",
      C: "Road accidents",
      D: "Sunburn",
    },
    correctAnswer: "B",
    explanation:
      "Burns (from dry heat) and scalds (from hot liquids/steam) are frequent kitchen injuries.",
  },
  {
    id: 1221,
    subject: "Physical & Health Education",
    question: "Which game involves shooting a ball through a hoop?",
    options: {
      A: "Volleyball",
      B: "Soccer",
      C: "Basketball",
      D: "Rugby",
    },
    correctAnswer: "C",
    explanation:
      "Basketball is played by shooting a ball through a raised hoop (basket).",
  },
  {
    id: 1222,
    subject: "ICT/Computer Studies",
    question: "A flash drive connects to the computer through which port?",
    options: {
      A: "HDMI",
      B: "USB",
      C: "VGA",
      D: "Power socket",
    },
    correctAnswer: "B",
    explanation:
      "Flash drives (thumb drives) use the Universal Serial Bus (USB) port.",
  },
  {
    id: 1223,
    subject: "Mathematics",
    question: "Add: $4.5 + 2.3$.",
    options: {
      A: "6.8",
      B: "6.5",
      C: "7.8",
      D: "2.2",
    },
    correctAnswer: "A",
    explanation:
      "Align the decimal points and add: $4+2=6$ and $0.5+0.3=0.8$. Total is $6.8$.",
  },
  {
    id: 1224,
    subject: "English",
    question: "Which word is a synonym for 'Rich'?",
    options: {
      A: "Poor",
      B: "Wealthy",
      C: "Hungry",
      D: "Weak",
    },
    correctAnswer: "B",
    explanation: "Wealthy and rich both mean having a lot of money or assets.",
  },
  {
    id: 1225,
    subject: "Kiswahili",
    question: "Kitenzi 'Soma' katika wakati uliopita ni:",
    options: {
      A: "Anasoma",
      B: "Atasoma",
      C: "Alisoma",
      D: "Amesoma",
    },
    correctAnswer: "C",
    explanation: "'Li-' ni kiambishi cha wakati uliopita. Hivyo, 'Alisoma'.",
  },
  {
    id: 1226,
    subject: "Science & Technology",
    question: "Which of these is a vertebrate (animal with a backbone)?",
    options: {
      A: "Spider",
      B: "Worm",
      C: "Cat",
      D: "Snail",
    },
    correctAnswer: "C",
    explanation:
      "A cat is a mammal and has an internal skeleton with a backbone. The others are invertebrates.",
  },
  {
    id: 1227,
    subject: "Social Studies",
    question:
      "A low-lying area of land between hills or mountains is called a:",
    options: {
      A: "Plateau",
      B: "Valley",
      C: "Lake",
      D: "Desert",
    },
    correctAnswer: "B",
    explanation:
      "A valley is a depression or low area between hills, often with a river running through it.",
  },
  {
    id: 1228,
    subject: "CRE",
    question:
      "Which disciple doubted that Jesus had risen until he saw the wounds?",
    options: {
      A: "Peter",
      B: "Thomas",
      C: "John",
      D: "Judas",
    },
    correctAnswer: "B",
    explanation:
      "Thomas (often called Doubting Thomas) said he would not believe unless he saw the nail marks in Jesus' hands.",
  },
  {
    id: 1229,
    subject: "Agriculture",
    question: "Soil that feels sticky when wet is:",
    options: {
      A: "Sand",
      B: "Loam",
      C: "Clay",
      D: "Silt",
    },
    correctAnswer: "C",
    explanation:
      "Clay soil has very fine particles and becomes sticky and heavy when wet.",
  },
  {
    id: 1230,
    subject: "Music",
    question: "The speed of the beat in music is called:",
    options: {
      A: "Pitch",
      B: "Tempo",
      C: "Volume",
      D: "Tone",
    },
    correctAnswer: "B",
    explanation:
      "Tempo describes the speed at which a piece of music is played (e.g., fast, slow).",
  },
  {
    id: 1231,
    subject: "Home Science",
    question: "Which of these is a permanent stitch?",
    options: {
      A: "Tacking",
      B: "Basting",
      C: "Hemming",
      D: "Pinning",
    },
    correctAnswer: "C",
    explanation:
      "Hemming is used to finish the edge of a garment permanently. Tacking/Basting are temporary.",
  },
  {
    id: 1232,
    subject: "Physical & Health Education",
    question:
      "In handball, how many steps can a player take with the ball without dribbling?",
    options: {
      A: "10 steps",
      B: "3 steps",
      C: "5 steps",
      D: "1 step",
    },
    correctAnswer: "B",
    explanation:
      "In handball, the '3-step rule' allows a player to take a maximum of 3 steps with the ball.",
  },
  {
    id: 1233,
    subject: "ICT/Computer Studies",
    question: "What is 'Android'?",
    options: {
      A: "A type of keyboard",
      B: "An Operating System for mobile phones",
      C: "A website",
      D: "A computer virus",
    },
    correctAnswer: "B",
    explanation:
      "Android is a popular operating system used on smartphones and tablets.",
  },
  {
    id: 1234,
    subject: "Mathematics",
    question: "How many minutes are there from 9:00 am to 10:30 am?",
    options: {
      A: "60 minutes",
      B: "90 minutes",
      C: "100 minutes",
      D: "30 minutes",
    },
    correctAnswer: "B",
    explanation:
      "From 9:00 to 10:00 is 60 minutes. From 10:00 to 10:30 is 30 minutes. $60 + 30 = 90$ minutes.",
  },
  {
    id: 1235,
    subject: "English",
    question: "The baby is sleeping ___ the cot.",
    options: {
      A: "On",
      B: "In",
      C: "At",
      D: "To",
    },
    correctAnswer: "B",
    explanation: "We say 'in' a cot or bed (when under covers or enclosed).",
  },
  {
    id: 1236,
    subject: "Kiswahili",
    question: "Kivumishi 'Zuri' katika sentensi 'Mti ___ umeanguka'.",
    options: {
      A: "Mzuri",
      B: "Kizuri",
      C: "Zuri",
      D: "Nzuri",
    },
    correctAnswer: "A",
    explanation: "Mti (M-MI) unachukua upatanisho wa 'M-'. Hivyo, Mti mzuri.",
  },
  {
    id: 1237,
    subject: "Science & Technology",
    question: "Which gas is used in fire extinguishers?",
    options: {
      A: "Oxygen",
      B: "Carbon Dioxide",
      C: "Nitrogen",
      D: "Hydrogen",
    },
    correctAnswer: "B",
    explanation:
      "Carbon dioxide is heavier than air and does not support burning, so it smothers the fire.",
  },
  {
    id: 1238,
    subject: "Social Studies",
    question: "Which of these is a way of becoming a Kenyan citizen?",
    options: {
      A: "By Registration",
      B: "By Visiting",
      C: "By Working",
      D: "By Singing",
    },
    correctAnswer: "A",
    explanation:
      "Citizenship can be acquired by Birth or by Registration (for foreigners who qualify).",
  },
  {
    id: 1239,
    subject: "CRE",
    question: "Who was the first man created by God?",
    options: {
      A: "Moses",
      B: "Abraham",
      C: "Adam",
      D: "Noah",
    },
    correctAnswer: "C",
    explanation:
      "According to Genesis, Adam was the first human created by God.",
  },
  {
    id: 1240,
    subject: "Agriculture",
    question: "Which domestic animal is mainly kept for security?",
    options: {
      A: "Cat",
      B: "Dog",
      C: "Cow",
      D: "Sheep",
    },
    correctAnswer: "B",
    explanation: "Dogs are often kept to guard homes and livestock.",
  },
  {
    id: 1241,
    subject: "Music",
    question: "Which of these instruments has strings?",
    options: {
      A: "Drum",
      B: "Guitar",
      C: "Trumpet",
      D: "Whistle",
    },
    correctAnswer: "B",
    explanation: "A guitar is a chordophone (string instrument).",
  },
  {
    id: 1242,
    subject: "Home Science",
    question: "We should keep our fingernails short and clean to avoid:",
    options: {
      A: "Looking nice",
      B: "Hiding germs",
      C: "Breaking the nail cutter",
      D: "Growing tall",
    },
    correctAnswer: "B",
    explanation:
      "Long, dirty nails harbor germs that can be transferred to food or the mouth.",
  },
  {
    id: 1243,
    subject: "Physical & Health Education",
    question:
      "Which part of the foot is used to kick the ball for maximum power in football?",
    options: {
      A: "The heel",
      B: "The toe",
      C: "The instep (laces)",
      D: "The sole",
    },
    correctAnswer: "C",
    explanation:
      "The instep (the top part of the foot where the laces are) provides the hardest surface for power shots.",
  },
  {
    id: 1244,
    subject: "ICT/Computer Studies",
    question: "Which of the following is an example of an Operating System?",
    options: {
      A: "Microsoft Word",
      B: "Windows 10",
      C: "Keyboard",
      D: "Mouse",
    },
    correctAnswer: "B",
    explanation:
      "Windows 10 is system software that manages computer hardware and software resources. Word is an application.",
  },
  {
    id: 1245,
    subject: "Mathematics",
    question:
      "What is the perimeter of a rectangle with length 8 cm and width 3 cm?",
    options: {
      A: "11 cm",
      B: "22 cm",
      C: "24 cm",
      D: "16 cm",
    },
    correctAnswer: "B",
    explanation:
      "Perimeter = $2 \\times (L + W) = 2 \\times (8 + 3) = 2 \\times 11 = 22$ cm.",
  },
  {
    id: 1246,
    subject: "English",
    question: "Choose the correct spelling:",
    options: {
      A: "Neccessary",
      B: "Necesary",
      C: "Necessary",
      D: "Neccesary",
    },
    correctAnswer: "C",
    explanation: "Necessary is spelled with one 'c' and two 's's.",
  },
  {
    id: 1247,
    subject: "Kiswahili",
    question: "Methali: 'Pole pole ndio ___'",
    options: {
      A: "Kimbia",
      B: "Mwendo",
      C: "Haraka",
      D: "Kufa",
    },
    correctAnswer: "B",
    explanation:
      "Methali kamili ni 'Pole pole ndio mwendo' (Slowly is the way/speed).",
  },
  {
    id: 1248,
    subject: "Science & Technology",
    question: "Which organ pumps blood to all parts of the body?",
    options: {
      A: "Lungs",
      B: "Heart",
      C: "Brain",
      D: "Stomach",
    },
    correctAnswer: "B",
    explanation: "The heart acts as a pump in the circulatory system.",
  },
  {
    id: 1249,
    subject: "Social Studies",
    question: "Which body is in charge of elections in Kenya?",
    options: {
      A: "KRA",
      B: "IEBC",
      C: "TSC",
      D: "NTSA",
    },
    correctAnswer: "B",
    explanation:
      "The Independent Electoral and Boundaries Commission (IEBC) is responsible for conducting elections.",
  },
  {
    id: 1250,
    subject: "CRE",
    question:
      "The father of faith who was willing to sacrifice his son Isaac is:",
    options: {
      A: "Jacob",
      B: "Abraham",
      C: "Moses",
      D: "David",
    },
    correctAnswer: "B",
    explanation:
      "Abraham demonstrated great faith when God tested him by asking him to sacrifice his son Isaac.",
  },
  {
    id: 1251,
    subject: "Agriculture",
    question:
      "The removal of excess seedlings to reduce overcrowding is called:",
    options: {
      A: "Weeding",
      B: "Pruning",
      C: "Thinning",
      D: "Harvesting",
    },
    correctAnswer: "C",
    explanation:
      "Thinning ensures the remaining plants have enough space and nutrients to grow well.",
  },
  {
    id: 1252,
    subject: "Music",
    question: "A wind instrument made from a hollow bamboo stalk is a:",
    options: {
      A: "Drum",
      B: "Flute",
      C: "Shaker",
      D: "Bell",
    },
    correctAnswer: "B",
    explanation: "Traditional flutes are often made from bamboo.",
  },
  {
    id: 1253,
    subject: "Home Science",
    question: "The best fabric for sports clothes is one that:",
    options: {
      A: "Is heavy and hot",
      B: "Absorbs sweat and allows movement",
      C: "Is very tight",
      D: "Is made of wool",
    },
    correctAnswer: "B",
    explanation:
      "Cotton or specific synthetic blends are good for sports because they manage sweat and allow flexibility.",
  },
  {
    id: 1254,
    subject: "Physical & Health Education",
    question: "The standard shape of an athletics track is:",
    options: {
      A: "Square",
      B: "Oval",
      C: "Circular",
      D: "Triangular",
    },
    correctAnswer: "B",
    explanation:
      "An athletics track is oval, with two straights and two bends.",
  },
  {
    id: 1255,
    subject: "ICT/Computer Studies",
    question: "Which of these is used to select items on a screen?",
    options: {
      A: "Printer",
      B: "Speaker",
      C: "Mouse",
      D: "Scanner",
    },
    correctAnswer: "C",
    explanation:
      "The mouse moves the cursor to point and click (select) items.",
  },
  {
    id: 1256,
    subject: "Mathematics",
    question: "Which fraction is equivalent to $1/2$?",
    options: {
      A: "2/3",
      B: "2/4",
      C: "1/3",
      D: "3/5",
    },
    correctAnswer: "B",
    explanation:
      "$2/4$ simplifies to $1/2$ (dividing numerator and denominator by 2).",
  },
  {
    id: 1257,
    subject: "English",
    question: "The past tense of 'Go' is:",
    options: {
      A: "Goed",
      B: "Gone",
      C: "Went",
      D: "Going",
    },
    correctAnswer: "C",
    explanation:
      "Go is an irregular verb. Past simple: Went. Past participle: Gone.",
  },
  {
    id: 1258,
    subject: "Kiswahili",
    question: "Kanusha: 'Anakula'.",
    options: {
      A: "Halikula",
      B: "Hatakula",
      C: "Hali",
      D: "Hakula",
    },
    correctAnswer: "C",
    explanation:
      "Wakati uliopo 'NA' hugeuka 'I' mwishoni na kiambishi cha kukanusha 'HA'. Hivyo: Hali.",
  },
  {
    id: 1259,
    subject: "Science & Technology",
    question: "Which state of matter has a definite shape and volume?",
    options: {
      A: "Liquid",
      B: "Solid",
      C: "Gas",
      D: "Air",
    },
    correctAnswer: "B",
    explanation:
      "Solids maintain their shape and volume unless force is applied.",
  },
  {
    id: 1260,
    subject: "Social Studies",
    question: "The largest ocean in the world is:",
    options: {
      A: "Indian Ocean",
      B: "Atlantic Ocean",
      C: "Pacific Ocean",
      D: "Arctic Ocean",
    },
    correctAnswer: "C",
    explanation:
      "The Pacific Ocean is the largest and deepest of Earth's oceanic divisions.",
  },
  {
    id: 1261,
    subject: "CRE",
    question:
      "The Bible is divided into two main parts: The Old Testament and the ___.",
    options: {
      A: "New Testament",
      B: "Story Book",
      C: "Quran",
      D: "Gospels",
    },
    correctAnswer: "A",
    explanation:
      "The Christian Bible consists of the Old Testament and the New Testament.",
  },
  {
    id: 1262,
    subject: "Agriculture",
    question:
      "Manure made from decomposed plant and animal waste in a pit is called:",
    options: {
      A: "Chemical fertilizer",
      B: "Compost manure",
      C: "Ash",
      D: "Sand",
    },
    correctAnswer: "B",
    explanation:
      "Compost is organic matter that has been decomposed in a heap or pit.",
  },
  {
    id: 1263,
    subject: "Music",
    question: "Which of these is a string instrument from the Luhya community?",
    options: {
      A: "Litungu",
      B: "Nyatiti",
      C: "Wandindi",
      D: "Orutu",
    },
    correctAnswer: "A",
    explanation:
      "The Litungu is a seven-stringed lyre played by the Luhya people.",
  },
  {
    id: 1264,
    subject: "Home Science",
    question: "We should change our socks daily to prevent:",
    options: {
      A: "Headaches",
      B: "Bad odour and fungal infections (Athlete's foot)",
      C: "Flu",
      D: "Stomach ache",
    },
    correctAnswer: "B",
    explanation:
      "Feet sweat, creating a damp environment for bacteria and fungi. Changing socks keeps feet dry and healthy.",
  },
  {
    id: 1265,
    subject: "Physical & Health Education",
    question:
      "The skill of bouncing the ball with one hand in basketball is called:",
    options: {
      A: "Passing",
      B: "Dribbling",
      C: "Shooting",
      D: "Catching",
    },
    correctAnswer: "B",
    explanation:
      "Dribbling allows a player to move around the court while retaining possession of the ball.",
  },
  {
    id: 1266,
    subject: "ICT/Computer Studies",
    question: "What is the function of the 'Backspace' key?",
    options: {
      A: "Deletes character to the right",
      B: "Deletes character to the left",
      C: "Creates a space",
      D: "Moves to next line",
    },
    correctAnswer: "B",
    explanation:
      "Backspace removes the character immediately before the cursor (to the left).",
  },
  {
    id: 1267,
    subject: "Mathematics",
    question: "How many degrees are in a right angle?",
    options: {
      A: "45",
      B: "90",
      C: "180",
      D: "360",
    },
    correctAnswer: "B",
    explanation:
      "A right angle is exactly $90$ degrees (like the corner of a square).",
  },
  {
    id: 1268,
    subject: "English",
    question: "Which word means the same as 'Happy'?",
    options: {
      A: "Sad",
      B: "Joyful",
      C: "Angry",
      D: "Tired",
    },
    correctAnswer: "B",
    explanation: "Joyful is a synonym for happy.",
  },
  {
    id: 1269,
    subject: "Kiswahili",
    question: "Andika wingi wa: 'Kijiko kilianguka'.",
    options: {
      A: "Vijiko vilianguka",
      B: "Kijiko zilianguka",
      C: "Majiko yalianguka",
      D: "Vijiko kilianguka",
    },
    correctAnswer: "A",
    explanation:
      "Kijiko (KI-) huchukua wingi Vijiko (VI-). Viambishi pia hubadilika: Ki-li $\to$ Vi-li.",
  },
  {
    id: 1270,
    subject: "Science & Technology",
    question: "Which colour absorbs heat the best?",
    options: {
      A: "White",
      B: "Black",
      C: "Yellow",
      D: "Pink",
    },
    correctAnswer: "B",
    explanation:
      "Dark colours like black absorb more heat radiation, while white reflects it.",
  },
  {
    id: 1271,
    subject: "Social Studies",
    question: "The head of the family is the:",
    options: {
      A: "Father/Parent",
      B: "First born",
      C: "Neighbour",
      D: "Chief",
    },
    correctAnswer: "A",
    explanation:
      "In a traditional family structure, the father or parents are the heads of the unit.",
  },
  {
    id: 1272,
    subject: "CRE",
    question: "Which king was known for his wisdom?",
    options: {
      A: "Saul",
      B: "David",
      C: "Solomon",
      D: "Herod",
    },
    correctAnswer: "C",
    explanation:
      "Solomon asked God for wisdom to rule his people, and he is famous for his wise judgments.",
  },
  {
    id: 1273,
    subject: "Agriculture",
    question: "Watering crops during the dry season is called:",
    options: {
      A: "Weeding",
      B: "Irrigation",
      C: "Planting",
      D: "Harvesting",
    },
    correctAnswer: "B",
    explanation: "Irrigation is the artificial application of water to crops.",
  },
  {
    id: 1274,
    subject: "Music",
    question: "A person who writes music is called a:",
    options: {
      A: "Singer",
      B: "Dancer",
      C: "Composer",
      D: "Conductor",
    },
    correctAnswer: "C",
    explanation: "A composer creates and writes original music.",
  },
  {
    id: 1275,
    subject: "Home Science",
    question: "Which of these is a cleaning equipment?",
    options: {
      A: "Broom",
      B: "Plate",
      C: "Spoon",
      D: "Pot",
    },
    correctAnswer: "A",
    explanation: "A broom is used for sweeping dirt and dust.",
  },
  {
    id: 1276,
    subject: "Physical & Health Education",
    question: "Which of these is a team sport?",
    options: {
      A: "Volleyball",
      B: "Solo swimming",
      C: "Singles Tennis",
      D: "Golf",
    },
    correctAnswer: "A",
    explanation:
      "Volleyball is played by two teams of players working together.",
  },
  {
    id: 1277,
    subject: "ICT/Computer Studies",
    question: "Electronic mail is commonly known as:",
    options: {
      A: "G-mail",
      B: "Post",
      C: "Email",
      D: "Letter",
    },
    correctAnswer: "C",
    explanation:
      "Email (Electronic mail) is a method of exchanging messages between people using electronic devices.",
  },
  {
    id: 1278,
    subject: "Mathematics",
    question: "Which number is divisible by 5?",
    options: {
      A: "12",
      B: "23",
      C: "35",
      D: "41",
    },
    correctAnswer: "C",
    explanation: "Numbers ending in 0 or 5 are divisible by 5.",
  },
  {
    id: 1279,
    subject: "English",
    question: "The plural of 'Tooth' is:",
    options: {
      A: "Tooths",
      B: "Teeth",
      C: "Teeths",
      D: "Tooth",
    },
    correctAnswer: "B",
    explanation: "Tooth is an irregular noun. The plural is Teeth.",
  },
  {
    id: 1280,
    subject: "Kiswahili",
    question: "Tunda la mpera linaitwaje?",
    options: {
      A: "Pera",
      B: "Embe",
      C: "Chungwa",
      D: "Nanasi",
    },
    correctAnswer: "A",
    explanation: "Mpera huzaa Pera.",
  },
  {
    id: 1281,
    subject: "Science & Technology",
    question: "Which animal breathes through gills?",
    options: {
      A: "Human",
      B: "Fish",
      C: "Dog",
      D: "Cat",
    },
    correctAnswer: "B",
    explanation: "Fish use gills to extract oxygen from water.",
  },
  {
    id: 1282,
    subject: "Social Studies",
    question: "Who was the first President of Kenya?",
    options: {
      A: "Daniel Arap Moi",
      B: "Mwai Kibaki",
      C: "Jomo Kenyatta",
      D: "Uhuru Kenyatta",
    },
    correctAnswer: "C",
    explanation:
      "Jomo Kenyatta became the first President after independence in 1963/1964.",
  },
  {
    id: 1283,
    subject: "CRE",
    question: "The last book of the Bible is:",
    options: {
      A: "Genesis",
      B: "Matthew",
      C: "Revelation",
      D: "Psalms",
    },
    correctAnswer: "C",
    explanation: "Revelation is the final book of the New Testament.",
  },
  {
    id: 1284,
    subject: "Agriculture",
    question: "Which crop is used to make clothes?",
    options: {
      A: "Maize",
      B: "Cotton",
      C: "Tea",
      D: "Coffee",
    },
    correctAnswer: "B",
    explanation:
      "Cotton produces fibres that are spun into yarn for making textiles.",
  },
  {
    id: 1285,
    subject: "Music",
    question: "Which of these is used to blow air into to make sound?",
    options: {
      A: "Guitar",
      B: "Trumpet",
      C: "Piano",
      D: "Drum",
    },
    correctAnswer: "B",
    explanation: "The trumpet is a wind instrument.",
  },
  {
    id: 1286,
    subject: "Home Science",
    question: "We brush our teeth to:",
    options: {
      A: "Make them loose",
      B: "Remove food particles and plaque",
      C: "Change their colour to blue",
      D: "Make them grow faster",
    },
    correctAnswer: "B",
    explanation: "Brushing removes debris and bacteria that cause decay.",
  },
  {
    id: 1287,
    subject: "Physical & Health Education",
    question: "Which nutrient provides energy?",
    options: {
      A: "Vitamins",
      B: "Carbohydrates",
      C: "Water",
      D: "Minerals",
    },
    correctAnswer: "B",
    explanation:
      "Carbohydrates (starches and sugars) are the main energy source.",
  },
  {
    id: 1288,
    subject: "ICT/Computer Studies",
    question:
      "Which key creates a capital letter when held down with another key?",
    options: {
      A: "Shift",
      B: "Enter",
      C: "Ctrl",
      D: "Alt",
    },
    correctAnswer: "A",
    explanation:
      "Holding Shift while pressing a letter types the uppercase version.",
  },
  {
    id: 1289,
    subject: "Mathematics",
    question: "What is the next number: 2, 4, 6, 8, ___?",
    options: {
      A: "9",
      B: "10",
      C: "11",
      D: "12",
    },
    correctAnswer: "B",
    explanation: "This is a sequence of even numbers (adding 2). $8 + 2 = 10$.",
  },
  {
    id: 1290,
    subject: "English",
    question: "The opposite of 'Fast' is:",
    options: {
      A: "Quick",
      B: "Slow",
      C: "Running",
      D: "Speed",
    },
    correctAnswer: "B",
    explanation: "Slow is the antonym of fast.",
  },
  {
    id: 1291,
    subject: "Kiswahili",
    question: "Mnyama anayetoa maziwa ni:",
    options: {
      A: "Kuku",
      B: "Ng'ombe",
      C: "Nyoka",
      D: "Samaki",
    },
    correctAnswer: "B",
    explanation: "Ng'ombe (jike) hutoa maziwa.",
  },
  {
    id: 1292,
    subject: "Science & Technology",
    question: "The moon gets its light from the:",
    options: {
      A: "Earth",
      B: "Sun",
      C: "Stars",
      D: "Mars",
    },
    correctAnswer: "B",
    explanation:
      "The moon reflects light from the sun; it does not produce its own light.",
  },
  {
    id: 1293,
    subject: "Social Studies",
    question: "Which of these is a cash crop?",
    options: {
      A: "Tea",
      B: "Sukuma wiki",
      C: "Carrots",
      D: "Beans",
    },
    correctAnswer: "A",
    explanation:
      "Tea is grown mainly for sale (export) rather than direct family consumption.",
  },
  {
    id: 1294,
    subject: "CRE",
    question: "Who built the Ark?",
    options: {
      A: "Moses",
      B: "Noah",
      C: "Peter",
      D: "David",
    },
    correctAnswer: "B",
    explanation:
      "Noah built the Ark to save his family and animals from the flood.",
  },
  {
    id: 1295,
    subject: "Agriculture",
    question: "Which tool is used for cutting wood?",
    options: {
      A: "Hammer",
      B: "Saw",
      C: "Spade",
      D: "Rake",
    },
    correctAnswer: "B",
    explanation: "A saw has teeth designed to cut through wood.",
  },
  {
    id: 1296,
    subject: "Music",
    question: "Which of these is a percussion instrument?",
    options: {
      A: "Piano",
      B: "Maracas / Shakers",
      C: "Violin",
      D: "Flute",
    },
    correctAnswer: "B",
    explanation: "Maracas are shaken to produce sound (percussion).",
  },
  {
    id: 1297,
    subject: "Home Science",
    question: "To treat a minor burn, you should first:",
    options: {
      A: "Run cold water over it",
      B: "Apply oil",
      C: "Cover with a blanket",
      D: "Prick the blister",
    },
    correctAnswer: "A",
    explanation: "Cold water cools the area and stops the burning process.",
  },
  {
    id: 1298,
    subject: "Physical & Health Education",
    question: "Which game is played with a shuttlecock?",
    options: {
      A: "Tennis",
      B: "Badminton",
      C: "Football",
      D: "Golf",
    },
    correctAnswer: "B",
    explanation: "Badminton uses a racket and a shuttlecock (birdie).",
  },
  {
    id: 1299,
    subject: "ICT/Computer Studies",
    question: "A monitor is an ___ device.",
    options: {
      A: "Input",
      B: "Output",
      C: "Processing",
      D: "Storage",
    },
    correctAnswer: "B",
    explanation: "A monitor displays information out to the user.",
  },
  {
    id: 1300,
    subject: "Mathematics",
    question: "How many hours are in a day?",
    options: {
      A: "12",
      B: "24",
      C: "48",
      D: "60",
    },
    correctAnswer: "B",
    explanation: "There are 24 hours in one full day.",
  },
  {
    id: 1301,
    subject: "English",
    question: "Which word is a noun?",
    options: {
      A: "Run",
      B: "Quickly",
      C: "Apple",
      D: "Blue",
    },
    correctAnswer: "C",
    explanation: "Apple is a thing, therefore it is a noun.",
  },
  {
    id: 1302,
    subject: "Kiswahili",
    question: "Neno 'Mama' lina silabi ngapi?",
    options: {
      A: "Moja",
      B: "Mbili",
      C: "Tatu",
      D: "Nne",
    },
    correctAnswer: "B",
    explanation: "Ma-ma. Lina silabi mbili.",
  },
  {
    id: 1303,
    subject: "Science & Technology",
    question: "Which of these dissolves in water?",
    options: {
      A: "Sand",
      B: "Stone",
      C: "Sugar",
      D: "Wood",
    },
    correctAnswer: "C",
    explanation: "Sugar is soluble in water.",
  },
  {
    id: 1304,
    subject: "Social Studies",
    question: "The national flag has how many colours?",
    options: {
      A: "3",
      B: "4",
      C: "5",
      D: "2",
    },
    correctAnswer: "B",
    explanation: "Black, Red, Green, and White.",
  },
  {
    id: 1305,
    subject: "CRE",
    question: "David killed Goliath using a:",
    options: {
      A: "Sword",
      B: "Spear",
      C: "Sling and stone",
      D: "Gun",
    },
    correctAnswer: "C",
    explanation: "David used a sling to throw a stone that hit Goliath.",
  },
  {
    id: 1306,
    subject: "Agriculture",
    question: "Which animal produces wool?",
    options: {
      A: "Goat",
      B: "Sheep",
      C: "Cow",
      D: "Pig",
    },
    correctAnswer: "B",
    explanation: "Sheep are shorn for their wool.",
  },
  {
    id: 1307,
    subject: "Music",
    question: "A group of instrumentalists playing together is an:",
    options: {
      A: "Orchestra/Band",
      B: "Choir",
      C: "Team",
      D: "Gang",
    },
    correctAnswer: "A",
    explanation: "An orchestra or band plays instruments.",
  },
  {
    id: 1308,
    subject: "Home Science",
    question: "Boiling water makes it:",
    options: {
      A: "Dirty",
      B: "Safe to drink",
      C: "Cold",
      D: "Salty",
    },
    correctAnswer: "B",
    explanation: "Boiling kills germs/bacteria.",
  },
  {
    id: 1309,
    subject: "Physical & Health Education",
    question: "Which of these is good for your health?",
    options: {
      A: "Smoking",
      B: "Exercise",
      C: "Alcohol",
      D: "Sleeping all day",
    },
    correctAnswer: "B",
    explanation: "Exercise strengthens the body.",
  },
  {
    id: 1310,
    subject: "ICT/Computer Studies",
    question: "Which of these is a search engine?",
    options: {
      A: "Google",
      B: "Word",
      C: "Paint",
      D: "Mouse",
    },
    correctAnswer: "A",
    explanation: "Google is used to search for information on the web.",
  },
  {
    id: 1311,
    subject: "Mathematics",
    question: "Subtract: $100 - 45$.",
    options: {
      A: "55",
      B: "65",
      C: "45",
      D: "35",
    },
    correctAnswer: "A",
    explanation: "$100 - 45 = 55$.",
  },
  {
    id: 1312,
    subject: "English",
    question: "Fill in the blank: 'She is ___ tall as her brother.'",
    options: {
      A: "So",
      B: "As",
      C: "Like",
      D: "Than",
    },
    correctAnswer: "B",
    explanation: "The simile structure is 'as... as'. 'As tall as'.",
  },
  {
    id: 1313,
    subject: "Kiswahili",
    question: "Mtu anayefundisha shuleni ni:",
    options: {
      A: "Daktari",
      B: "Mwalimu",
      C: "Mkulima",
      D: "Dereva",
    },
    correctAnswer: "B",
    explanation: "Mwalimu hufundisha.",
  },
  {
    id: 1314,
    subject: "Science & Technology",
    question: "Which of these is a sense organ?",
    options: {
      A: "Hair",
      B: "Eye",
      C: "Nail",
      D: "Tooth",
    },
    correctAnswer: "B",
    explanation: "Eyes are for sight.",
  },
  {
    id: 1315,
    subject: "Social Studies",
    question: "The currency used in Kenya is the:",
    options: {
      A: "Dollar",
      B: "Shilling",
      C: "Pound",
      D: "Euro",
    },
    correctAnswer: "B",
    explanation: "Kenyan Shilling (KES).",
  },
  {
    id: 1316,
    subject: "CRE",
    question: "Jesus was born in:",
    options: {
      A: "Nazareth",
      B: "Bethlehem",
      C: "Jerusalem",
      D: "Egypt",
    },
    correctAnswer: "B",
    explanation: "Jesus was born in Bethlehem of Judea.",
  },
  {
    id: 1317,
    subject: "Agriculture",
    question: "Which of these is a garden tool?",
    options: {
      A: "Spoon",
      B: "Hoe (Jembe)",
      C: "Pen",
      D: "Needle",
    },
    correctAnswer: "B",
    explanation: "A hoe is used for digging.",
  },
  {
    id: 1318,
    subject: "Music",
    question: "Singing without instruments is called:",
    options: {
      A: "A cappella",
      B: "Solo",
      C: "Duet",
      D: "Chorus",
    },
    correctAnswer: "A",
    explanation: "A cappella means unaccompanied vocal music.",
  },
  {
    id: 1319,
    subject: "Home Science",
    question: "A needle is used for:",
    options: {
      A: "Cooking",
      B: "Sewing",
      C: "Cleaning",
      D: "Digging",
    },
    correctAnswer: "B",
    explanation: "Needles are used to stitch fabric.",
  },
  {
    id: 1320,
    subject: "Physical & Health Education",
    question: "We should drink ___ cups of water a day.",
    options: {
      A: "1",
      B: "8",
      C: "0",
      D: "200",
    },
    correctAnswer: "B",
    explanation: "Around 8 glasses/cups is the recommended average.",
  },
  {
    id: 1321,
    subject: "ICT/Computer Studies",
    question: "Which of these is a computer brand?",
    options: {
      A: "Toyota",
      B: "HP",
      C: "Nike",
      D: "Coca Cola",
    },
    correctAnswer: "B",
    explanation: "HP (Hewlett-Packard) makes computers.",
  },
  {
    id: 1322,
    subject: "Mathematics",
    question: "Which shape has 3 sides?",
    options: {
      A: "Square",
      B: "Triangle",
      C: "Circle",
      D: "Rectangle",
    },
    correctAnswer: "B",
    explanation: "A triangle has 3 sides and 3 angles.",
  },
  {
    id: 1323,
    subject: "English",
    question: "Which word rhymes with 'Cat'?",
    options: {
      A: "Dog",
      B: "Hat",
      C: "Cot",
      D: "Cut",
    },
    correctAnswer: "B",
    explanation: "Cat and Hat have the same ending sound.",
  },
  {
    id: 1324,
    subject: "Kiswahili",
    question: "Rangi ya damu ni:",
    options: {
      A: "Nyeupe",
      B: "Nyekundu",
      C: "Nyeusi",
      D: "Kijani",
    },
    correctAnswer: "B",
    explanation: "Damu ni nyekundu.",
  },
  {
    id: 1325,
    subject: "Science & Technology",
    question: "Plants need ___ to grow.",
    options: {
      A: "Water and Sunlight",
      B: "Milk",
      C: "Darkness",
      D: "Juice",
    },
    correctAnswer: "A",
    explanation: "Water and sunlight are essential for photosynthesis.",
  },
  {
    id: 1326,
    subject: "Social Studies",
    question: "A person who catches fish is a:",
    options: {
      A: "Farmer",
      B: "Fisherman",
      C: "Teacher",
      D: "Doctor",
    },
    correctAnswer: "B",
    explanation: "Fishermen catch fish.",
  },
  {
    id: 1327,
    subject: "CRE",
    question: "The wife of Abraham was:",
    options: {
      A: "Mary",
      B: "Sarah",
      C: "Eve",
      D: "Ruth",
    },
    correctAnswer: "B",
    explanation: "Sarah was Abraham's wife.",
  },
  {
    id: 1328,
    subject: "Agriculture",
    question: "Milk comes from:",
    options: {
      A: "Chickens",
      B: "Cows",
      C: "Fish",
      D: "Pigs",
    },
    correctAnswer: "B",
    explanation: "Dairy cows produce milk.",
  },
  {
    id: 1329,
    subject: "Music",
    question: "Which of these is a loud sound?",
    options: {
      A: "Whisper",
      B: "Shout",
      C: "Breathing",
      D: "Thinking",
    },
    correctAnswer: "B",
    explanation: "Shouting produces high volume.",
  },
  {
    id: 1330,
    subject: "Home Science",
    question: "Which food is a protein?",
    options: {
      A: "Bread",
      B: "Meat",
      C: "Rice",
      D: "Sugar",
    },
    correctAnswer: "B",
    explanation: "Meat is a body-building food (protein).",
  },
  {
    id: 1331,
    subject: "Physical & Health Education",
    question: "Before swimming, you should:",
    options: {
      A: "Eat a heavy meal",
      B: "Shower",
      C: "Sleep",
      D: "Run a marathon",
    },
    correctAnswer: "B",
    explanation: "Showering before swimming keeps the pool clean.",
  },
  {
    id: 1332,
    subject: "ICT/Computer Studies",
    question: "A keyboard is used for:",
    options: {
      A: "Typing",
      B: "Pointing",
      C: "Printing",
      D: "Listening",
    },
    correctAnswer: "A",
    explanation: "Keyboards are for entering text.",
  },
  {
    id: 1333,
    subject: "Mathematics",
    question: "How many cents make one shilling?",
    options: {
      A: "10",
      B: "100",
      C: "50",
      D: "20",
    },
    correctAnswer: "B",
    explanation: "100 cents = 1 Shilling.",
  },
  {
    id: 1334,
    subject: "English",
    question: "The past of 'Eat' is:",
    options: {
      A: "Eated",
      B: "Ate",
      C: "Eaten",
      D: "Eating",
    },
    correctAnswer: "B",
    explanation: "Eat is irregular. Past simple is Ate.",
  },
  {
    id: 1335,
    subject: "Kiswahili",
    question: "Siku ya kwanza ya wiki ni:",
    options: {
      A: "Jumatatu",
      B: "Jumamosi",
      C: "Ijumaa",
      D: "Jumanne",
    },
    correctAnswer: "B",
    explanation: "Katika Kiswahili, wiki huanza Jumamosi.",
  },
  {
    id: 1336,
    subject: "Science & Technology",
    question: "We use our ears to:",
    options: {
      A: "See",
      B: "Hear",
      C: "Smell",
      D: "Taste",
    },
    correctAnswer: "B",
    explanation: "Ears detect sound.",
  },
  {
    id: 1337,
    subject: "Social Studies",
    question: "A compass shows:",
    options: {
      A: "Time",
      B: "Direction",
      C: "Weight",
      D: "Temperature",
    },
    correctAnswer: "B",
    explanation: "A compass points North and shows cardinal directions.",
  },
  {
    id: 1338,
    subject: "CRE",
    question: "The Bible teaches us to ___ our parents.",
    options: {
      A: "Hate",
      B: "Obey",
      C: "Beat",
      D: "Ignore",
    },
    correctAnswer: "B",
    explanation: "Honour and obey your parents.",
  },
  {
    id: 1339,
    subject: "Agriculture",
    question: "Which animal barks?",
    options: {
      A: "Cat",
      B: "Dog",
      C: "Cow",
      D: "Goat",
    },
    correctAnswer: "B",
    explanation: "Dogs bark.",
  },
  {
    id: 1340,
    subject: "Music",
    question: "A drum is played by:",
    options: {
      A: "Blowing",
      B: "Hitting",
      C: "Plucking",
      D: "Shaking",
    },
    correctAnswer: "B",
    explanation: "Drums are struck.",
  },
  {
    id: 1341,
    subject: "Home Science",
    question: "We should wash fruits before:",
    options: {
      A: "Eating them",
      B: "Throwing them",
      C: "Buying them",
      D: "Looking at them",
    },
    correctAnswer: "A",
    explanation: "Washing removes dirt and chemicals.",
  },
  {
    id: 1342,
    subject: "Physical & Health Education",
    question: "Running helps to make our ___ strong.",
    options: {
      A: "Hair",
      B: "Heart and muscles",
      C: "Nails",
      D: "Teeth",
    },
    correctAnswer: "B",
    explanation: "Cardio exercise strengthens the heart.",
  },
  {
    id: 1343,
    subject: "ICT/Computer Studies",
    question: "Which part of the computer looks like a TV?",
    options: {
      A: "Mouse",
      B: "Monitor",
      C: "Keyboard",
      D: "CPU",
    },
    correctAnswer: "B",
    explanation: "The monitor has a screen.",
  },
  {
    id: 1344,
    subject: "Mathematics",
    question: "20 divided by 4 is:",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "10",
    },
    correctAnswer: "B",
    explanation: "$5 \\times 4 = 20$.",
  },
  {
    id: 1345,
    subject: "English",
    question: "A baby dog is called a:",
    options: {
      A: "Kitten",
      B: "Puppy",
      C: "Calf",
      D: "Cub",
    },
    correctAnswer: "B",
    explanation: "A puppy is a young dog.",
  },
  {
    id: 1346,
    subject: "Kiswahili",
    question: "Baba wa baba yangu ni:",
    options: {
      A: "Mjomba",
      B: "Babu",
      C: "Kaka",
      D: "Shangazi",
    },
    correctAnswer: "B",
    explanation: "Babu (Grandfather).",
  },
  {
    id: 1347,
    subject: "Science & Technology",
    question: "Ice is water in which state?",
    options: {
      A: "Liquid",
      B: "Solid",
      C: "Gas",
      D: "Steam",
    },
    correctAnswer: "B",
    explanation: "Ice is frozen (solid) water.",
  },
  {
    id: 1348,
    subject: "Social Studies",
    question: "The President lives in:",
    options: {
      A: "State House",
      B: "Parliament",
      C: "Court",
      D: "School",
    },
    correctAnswer: "A",
    explanation: "State House is the official residence.",
  },
  {
    id: 1349,
    subject: "CRE",
    question: "We go to church to:",
    options: {
      A: "Play",
      B: "Worship God",
      C: "Sleep",
      D: "Eat",
    },
    correctAnswer: "B",
    explanation: "Church is a place of worship.",
  },
  {
    id: 1350,
    subject: "Agriculture",
    question: "Which animal gives us eggs?",
    options: {
      A: "Cow",
      B: "Hen",
      C: "Dog",
      D: "Cat",
    },
    correctAnswer: "B",
    explanation: "Chickens (hens) lay eggs.",
  },
  {
    id: 1351,
    subject: "Music",
    question: "Which of these is a low sound?",
    options: {
      A: "Bird chirping",
      B: "Thunder",
      C: "Whistle",
      D: "Bell",
    },
    correctAnswer: "B",
    explanation: "Thunder is a low-pitched rumble.",
  },
  {
    id: 1352,
    subject: "Home Science",
    question: "A kitchen should be kept:",
    options: {
      A: "Dirty",
      B: "Clean",
      C: "Wet",
      D: "Dark",
    },
    correctAnswer: "B",
    explanation: "Hygiene is essential in the kitchen.",
  },
  {
    id: 1353,
    subject: "Physical & Health Education",
    question: "We use our ___ to kick a ball.",
    options: {
      A: "Hands",
      B: "Legs/Feet",
      C: "Head",
      D: "Nose",
    },
    correctAnswer: "B",
    explanation: "Football uses feet.",
  },
  {
    id: 1354,
    subject: "ICT/Computer Studies",
    question: "We use a printer to:",
    options: {
      A: "Type",
      B: "Get a hard copy on paper",
      C: "See pictures",
      D: "Play games",
    },
    correctAnswer: "B",
    explanation: "Printers produce hard copies.",
  },
  {
    id: 1355,
    subject: "Mathematics",
    question: "1 meter = ___ centimeters.",
    options: {
      A: "10",
      B: "100",
      C: "1000",
      D: "50",
    },
    correctAnswer: "B",
    explanation: "Standard metric conversion.",
  },
  {
    id: 1356,
    subject: "English",
    question: "Which is a colour?",
    options: {
      A: "Table",
      B: "Blue",
      C: "Walk",
      D: "Happy",
    },
    correctAnswer: "B",
    explanation: "Blue is a colour.",
  },
  {
    id: 1357,
    subject: "Kiswahili",
    question: "Mtu anayetibu meno ni:",
    options: {
      A: "Daktari wa macho",
      B: "Daktari wa meno",
      C: "Mwalimu",
      D: "Mpishi",
    },
    correctAnswer: "B",
    explanation: "Dentist (Daktari wa meno).",
  },
  {
    id: 1358,
    subject: "Science & Technology",
    question: "A car needs ___ to move.",
    options: {
      A: "Water",
      B: "Fuel",
      C: "Milk",
      D: "Sand",
    },
    correctAnswer: "B",
    explanation: "Fuel (petrol/diesel) provides energy.",
  },
  {
    id: 1359,
    subject: "Social Studies",
    question: "We should cross the road at the:",
    options: {
      A: "Corner",
      B: "Zebra crossing",
      C: "Middle",
      D: "Bush",
    },
    correctAnswer: "B",
    explanation: "Zebra crossings are safe points.",
  },
  {
    id: 1360,
    subject: "CRE",
    question: "God created the world in ___ days.",
    options: {
      A: "3",
      B: "6",
      C: "10",
      D: "1",
    },
    correctAnswer: "B",
    explanation: "Creation took 6 days.",
  },
  {
    id: 1361,
    subject: "Agriculture",
    question: "A young goat is called a:",
    options: {
      A: "Kid",
      B: "Lamb",
      C: "Calf",
      D: "Chick",
    },
    correctAnswer: "A",
    explanation: "A baby goat is a kid.",
  },
  {
    id: 1362,
    subject: "Music",
    question: "We use our ___ to sing.",
    options: {
      A: "Hands",
      B: "Voice",
      C: "Legs",
      D: "Ears",
    },
    correctAnswer: "B",
    explanation: "Singing uses the voice.",
  },
  {
    id: 1363,
    subject: "Home Science",
    question: "A house protects us from:",
    options: {
      A: "Food",
      B: "Rain and Sun",
      C: "Friends",
      D: "Clothes",
    },
    correctAnswer: "B",
    explanation: "Shelter provides protection from weather.",
  },
  {
    id: 1364,
    subject: "Physical & Health Education",
    question: "Jumping jacks are an:",
    options: {
      A: "Exercise",
      B: "Food",
      C: "Animal",
      D: "Book",
    },
    correctAnswer: "A",
    explanation: "Jumping jacks are a calisthenic exercise.",
  },
  {
    id: 1365,
    subject: "ICT/Computer Studies",
    question: "A laptop is a type of:",
    options: {
      A: "Car",
      B: "Computer",
      C: "Phone",
      D: "Table",
    },
    correctAnswer: "B",
    explanation: "A laptop is a portable computer.",
  },
  {
    id: 1366,
    subject: "Mathematics",
    question: "5 + 5 =",
    options: {
      A: "5",
      B: "10",
      C: "15",
      D: "0",
    },
    correctAnswer: "B",
    explanation: "Addition.",
  },
  {
    id: 1367,
    subject: "English",
    question: "A group of lions is a:",
    options: {
      A: "Herd",
      B: "Pride",
      C: "Flock",
      D: "School",
    },
    correctAnswer: "B",
    explanation: "Collective noun.",
  },
  {
    id: 1368,
    subject: "Kiswahili",
    question: "Kinyume cha 'Keti' ni:",
    options: {
      A: "Lala",
      B: "Simama",
      C: "Tembea",
      D: "Kimbia",
    },
    correctAnswer: "B",
    explanation: "Simama (Stand) is the opposite of Keti (Sit).",
  },
  {
    id: 1369,
    subject: "Science & Technology",
    question: "Which animal flies?",
    options: {
      A: "Dog",
      B: "Bird",
      C: "Cow",
      D: "Fish",
    },
    correctAnswer: "B",
    explanation: "Birds fly.",
  },
  {
    id: 1370,
    subject: "Social Studies",
    question: "Kenya is in:",
    options: {
      A: "Europe",
      B: "Africa",
      C: "Asia",
      D: "America",
    },
    correctAnswer: "B",
    explanation: "Continent location.",
  },
  {
    id: 1371,
    subject: "CRE",
    question: "Jesus died on the:",
    options: {
      A: "Cross",
      B: "Tree",
      C: "Road",
      D: "Water",
    },
    correctAnswer: "A",
    explanation: "Crucifixion.",
  },
  {
    id: 1372,
    subject: "Agriculture",
    question: "Farmers grow crops in the:",
    options: {
      A: "House",
      B: "Shamba/Farm",
      C: "Road",
      D: "River",
    },
    correctAnswer: "B",
    explanation: "Farm location.",
  },
  {
    id: 1373,
    subject: "Music",
    question: "A piano has ___ keys.",
    options: {
      A: "Black and White",
      B: "Red and Blue",
      C: "Green",
      D: "Yellow",
    },
    correctAnswer: "A",
    explanation: "Piano keys are black and white.",
  },
  {
    id: 1374,
    subject: "Home Science",
    question: "We sleep in the:",
    options: {
      A: "Kitchen",
      B: "Bedroom",
      C: "Bathroom",
      D: "Store",
    },
    correctAnswer: "B",
    explanation: "Room function.",
  },
  {
    id: 1375,
    subject: "Physical & Health Education",
    question: "Volleyball is played with a:",
    options: {
      A: "Bat",
      B: "Ball",
      C: "Stick",
      D: "Racket",
    },
    correctAnswer: "B",
    explanation: "Equipment.",
  },
  {
    id: 1376,
    subject: "ICT/Computer Studies",
    question: "The internet helps us to:",
    options: {
      A: "Cook",
      B: "Get information",
      C: "Wash clothes",
      D: "Sleep",
    },
    correctAnswer: "B",
    explanation: "Internet purpose.",
  },
  {
    id: 1377,
    subject: "Mathematics",
    question: "Which number is even?",
    options: {
      A: "1",
      B: "2",
      C: "3",
      D: "5",
    },
    correctAnswer: "B",
    explanation: "2 is even.",
  },
  {
    id: 1378,
    subject: "English",
    question: "A person who flies a plane is a:",
    options: {
      A: "Driver",
      B: "Pilot",
      C: "Captain",
      D: "Sailor",
    },
    correctAnswer: "B",
    explanation: "Pilot flies planes.",
  },
  {
    id: 1379,
    subject: "Kiswahili",
    question: "Mke wa baba ni:",
    options: {
      A: "Shangazi",
      B: "Mama",
      C: "Dada",
      D: "Bibi",
    },
    correctAnswer: "B",
    explanation: "Mama.",
  },
  {
    id: 1380,
    subject: "Science & Technology",
    question: "Which of these is a machine?",
    options: {
      A: "Tree",
      B: "Bicycle",
      C: "Dog",
      D: "Stone",
    },
    correctAnswer: "B",
    explanation: "A bicycle is a machine.",
  },
  {
    id: 1381,
    subject: "Social Studies",
    question: "A flag is a symbol of:",
    options: {
      A: "Unity",
      B: "Food",
      C: "Money",
      D: "School",
    },
    correctAnswer: "A",
    explanation: "National unity.",
  },
  {
    id: 1382,
    subject: "CRE",
    question: "Adam and Eve lived in the Garden of:",
    options: {
      A: "Gethsemane",
      B: "Eden",
      C: "Olives",
      D: "Egypt",
    },
    correctAnswer: "B",
    explanation: "Garden of Eden.",
  },
  {
    id: 1383,
    subject: "Agriculture",
    question: "Rain helps crops to:",
    options: {
      A: "Die",
      B: "Grow",
      C: "Dry",
      D: "Burn",
    },
    correctAnswer: "B",
    explanation: "Water allows growth.",
  },
  {
    id: 1384,
    subject: "Music",
    question: "We clap to the:",
    options: {
      A: "Rhythm",
      B: "Words",
      C: "Silence",
      D: "Air",
    },
    correctAnswer: "A",
    explanation: "Clapping to rhythm.",
  },
  {
    id: 1385,
    subject: "Home Science",
    question: "A clean body smells:",
    options: {
      A: "Bad",
      B: "Good",
      C: "Sour",
      D: "Dusty",
    },
    correctAnswer: "B",
    explanation: "Hygiene.",
  },
  {
    id: 1386,
    subject: "Physical & Health Education",
    question: "To win a race you must be:",
    options: {
      A: "Slow",
      B: "Fast",
      C: "Sleeping",
      D: "Eating",
    },
    correctAnswer: "B",
    explanation: "Speed wins races.",
  },
  {
    id: 1387,
    subject: "ICT/Computer Studies",
    question: "You can play ___ on a computer.",
    options: {
      A: "Football",
      B: "Games",
      C: "Cooking",
      D: "Swimming",
    },
    correctAnswer: "B",
    explanation: "Video games.",
  },
  {
    id: 1388,
    subject: "Mathematics",
    question: "Which is bigger: 10 or 5?",
    options: {
      A: "5",
      B: "10",
      C: "Equal",
      D: "None",
    },
    correctAnswer: "B",
    explanation: "Comparing numbers.",
  },
  {
    id: 1389,
    subject: "English",
    question: "A cat says:",
    options: {
      A: "Woof",
      B: "Meow",
      C: "Moo",
      D: "Quack",
    },
    correctAnswer: "B",
    explanation: "Animal sounds.",
  },
  {
    id: 1390,
    subject: "Kiswahili",
    question: "Mwalimu hutumia ___ kuandika ubaoni.",
    options: {
      A: "Chaki",
      B: "Kalamu",
      C: "Jiwe",
      D: "Mti",
    },
    correctAnswer: "A",
    explanation: "Chalk (Chaki).",
  },
  {
    id: 1391,
    subject: "Science & Technology",
    question: "The sun is hot.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
      D: "Cold",
    },
    correctAnswer: "A",
    explanation: "Sun emits heat.",
  },
  {
    id: 1392,
    subject: "Social Studies",
    question: "A map is a drawing of:",
    options: {
      A: "A person",
      B: "An area / Land",
      C: "A car",
      D: "A flower",
    },
    correctAnswer: "B",
    explanation: "Map definition.",
  },
  {
    id: 1393,
    subject: "CRE",
    question: "The Bible is a holy:",
    options: {
      A: "Book",
      B: "Paper",
      C: "Stone",
      D: "Tree",
    },
    correctAnswer: "A",
    explanation: "Holy Book.",
  },
  {
    id: 1394,
    subject: "Agriculture",
    question: "We eat the ___ of a carrot.",
    options: {
      A: "Leaf",
      B: "Root",
      C: "Flower",
      D: "Stem",
    },
    correctAnswer: "B",
    explanation: "Carrot is a root.",
  },
  {
    id: 1395,
    subject: "Music",
    question: "A guitar is played with:",
    options: {
      A: "Fingers",
      B: "Toes",
      C: "Nose",
      D: "Tongue",
    },
    correctAnswer: "A",
    explanation: "Strumming with fingers.",
  },
  {
    id: 1396,
    subject: "Home Science",
    question: "A needle has an:",
    options: {
      A: "Eye",
      B: "Ear",
      C: "Nose",
      D: "Mouth",
    },
    correctAnswer: "A",
    explanation: "Eye of a needle.",
  },
  {
    id: 1397,
    subject: "Physical & Health Education",
    question: "We use a ___ to skip.",
    options: {
      A: "Ball",
      B: "Rope",
      C: "Bat",
      D: "Net",
    },
    correctAnswer: "B",
    explanation: "Skipping rope.",
  },
  {
    id: 1398,
    subject: "ICT/Computer Studies",
    question: "A mouse has buttons.",
    options: {
      A: "True",
      B: "False",
      C: "Maybe",
      D: "No",
    },
    correctAnswer: "A",
    explanation: "Left and right buttons.",
  },
  {
    id: 1399,
    subject: "Mathematics",
    question: "3 + 2 =",
    options: {
      A: "4",
      B: "5",
      C: "6",
      D: "1",
    },
    correctAnswer: "B",
    explanation: "Addition.",
  },
  {
    id: 1400,
    subject: "English",
    question: "I ___ a book.",
    options: {
      A: "Read",
      B: "Eat",
      C: "Drink",
      D: "Fly",
    },
    correctAnswer: "A",
    explanation: "Reading books.",
  },
];
export default quizzes;
