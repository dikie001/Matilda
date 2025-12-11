const quizzes =
[
  {
    "id": 1,
    "subject": "Mathematics",
    "grade": 5,
    "question": "What is the place value of the digit 7 in the number 47,302?",
    "options": {
      "A": "Hundreds",
      "B": "Thousands",
      "C": "Ten Thousands",
      "D": "Tens"
    },
    "correctAnswer": "B",
    "explanation": "Starting from the right, the places are Ones, Tens, Hundreds, Thousands, and Ten Thousands. The 7 is in the Thousands place."
  },
  {
    "id": 2,
    "subject": "English",
    "grade": 5,
    "question": "Choose the correct collective noun for a group of lions.",
    "options": {
      "A": "Herd",
      "B": "Pride",
      "C": "Flock",
      "D": "School"
    },
    "correctAnswer": "B",
    "explanation": "The correct collective noun for a group of lions is a 'pride'."
  },
  {
    "id": 3,
    "subject": "Kiswahili",
    "grade": 5,
    "question": "Chagua kiwakilishi nafsi sahihi cha kujaza pengo: ____ ni mwanafunzi.",
    "options": {
      "A": "Mimi",
      "B": "Wao",
      "C": "Sisi",
      "D": "Nyinyi"
    },
    "correctAnswer": "A",
    "explanation": "Kiwakilishi nafsi 'Mimi' (I) huendana na kitenzi 'ni' kwa umoja (I am a student)."
  },
  {
    "id": 4,
    "subject": "Science & Technology",
    "grade": 5,
    "question": "Which component of the soil is made up of decayed plant and animal matter?",
    "options": {
      "A": "Sand",
      "B": "Clay",
      "C": "Humus",
      "D": "Silt"
    },
    "correctAnswer": "C",
    "explanation": "Humus is the dark, organic material in soil formed from decomposed organisms, making the soil fertile."
  },
  {
    "id": 5,
    "subject": "Social Studies",
    "grade": 5,
    "question": "Which map feature is used to show the relationship between distances on the map and actual distances on the ground?",
    "options": {
      "A": "Compass Rose",
      "B": "Key/Legend",
      "C": "Scale",
      "D": "Title"
    },
    "correctAnswer": "C",
    "explanation": "The map scale indicates how much smaller the map is compared to the actual area it represents."
  },
  {
    "id": 6,
    "subject": "CRE",
    "grade": 5,
    "question": "In the Bible, who led the Israelites out of slavery in Egypt?",
    "options": {
      "A": "Abraham",
      "B": "David",
      "C": "Moses",
      "D": "Joshua"
    },
    "correctAnswer": "C",
    "explanation": "Moses was chosen by God to lead the Israelites from bondage in Egypt across the Red Sea."
  },
  {
    "id": 7,
    "subject": "Agriculture",
    "grade": 5,
    "question": "Which of the following is a tool primarily used for digging and loosening soil in a small vegetable garden?",
    "options": {
      "A": "Panga",
      "B": "Rake",
      "C": "Trowel",
      "D": "Watering can"
    },
    "correctAnswer": "C",
    "explanation": "A trowel is a small, hand-held tool with a curved blade used for digging small holes and transplanting seedlings."
  },
  {
    "id": 8,
    "subject": "Music",
    "grade": 5,
    "question": "In music, which term describes the speed or pace at which a piece of music is played?",
    "options": {
      "A": "Rhythm",
      "B": "Melody",
      "C": "Harmony",
      "D": "Tempo"
    },
    "correctAnswer": "D",
    "explanation": "Tempo is the Italian term used to denote the rate of speed of a musical piece."
  },
  {
    "id": 9,
    "subject": "Home Science",
    "grade": 5,
    "question": "Which of the following food groups is mainly responsible for bodybuilding and tissue repair?",
    "options": {
      "A": "Carbohydrates",
      "B": "Vitamins",
      "C": "Proteins",
      "D": "Fats"
    },
    "correctAnswer": "C",
    "explanation": "Proteins are essential for growth and repair of body tissues, hence they are known as bodybuilding foods."
  },
  {
    "id": 10,
    "subject": "Physical & Health Education (PHE)",
    "grade": 5,
    "question": "Which action is an example of a fundamental locomotor skill?",
    "options": {
      "A": "Catching a ball",
      "B": "Skipping",
      "C": "Balancing on one leg",
      "D": "Throwing a frisbee"
    },
    "correctAnswer": "B",
    "explanation": "Locomotor skills are movements that transport the body from one place to another, such as walking, running, skipping, and jumping."
  },
  {
    "id": 11,
    "subject": "ICT/Computer Studies",
    "grade": 5,
    "question": "What part of the computer is used to input text and commands?",
    "options": {
      "A": "Monitor",
      "B": "Printer",
      "C": "Keyboard",
      "D": "Speaker"
    },
    "correctAnswer": "C",
    "explanation": "The keyboard is the primary input device used to enter alphanumeric characters and commands into the computer."
  },
  {
    "id": 12,
    "subject": "Mathematics",
    "grade": 6,
    "question": "Calculate the perimeter of a rectangle with a length of 12 cm and a width of 5 cm.",
    "options": {
      "A": "17 cm",
      "B": "60 $\\text{cm}^2$",
      "C": "34 cm",
      "D": "24 cm"
    },
    "correctAnswer": "C",
    "explanation": "Perimeter is calculated as 2 $\\times$ (Length + Width). $2 \\times (12 \\text{ cm} + 5 \\text{ cm}) = 2 \\times 17 \\text{ cm} = 34 \\text{ cm}$."
  },
  {
    "id": 13,
    "subject": "English",
    "grade": 6,
    "question": "Identify the type of adjective used in the sentence: 'She bought three new books.'",
    "options": {
      "A": "Descriptive",
      "B": "Proper",
      "C": "Quantitative/Numeral",
      "D": "Demonstrative"
    },
    "correctAnswer": "C",
    "explanation": "The word 'three' is a numeral adjective as it specifies the exact number of books."
  },
  {
    "id": 14,
    "subject": "Kiswahili",
    "grade": 6,
    "question": "Tunga sentensi kwa kutumia neno 'kiongozi' kama nomino ya kawaida.",
    "options": {
      "A": "Kiongozi alihutubu mkutanoni.",
      "B": "Nairobi ni mji mkuu.",
      "C": "Yeye ni mwerevu sana.",
      "D": "Wao huenda shuleni."
    },
    "correctAnswer": "A",
    "explanation": "Nomino ya kawaida 'kiongozi' (leader) imetumika kama kiini cha sentensi katika jibu A. 'Nairobi' ni nomino ya pekee, 'Yeye' ni kiwakilishi, na 'Wao' ni kiwakilishi."
  },
  {
    "id": 15,
    "subject": "Science & Technology",
    "grade": 6,
    "question": "What is the main function of the stem in a plant?",
    "options": {
      "A": "Absorption of water and minerals",
      "B": "Production of food through photosynthesis",
      "C": "Transportation of water and nutrients",
      "D": "Reproduction through pollination"
    },
    "correctAnswer": "C",
    "explanation": "The stem supports the plant and transports water and nutrients between the roots and leaves."
  },
  {
    "id": 16,
    "subject": "Social Studies",
    "grade": 6,
    "question": "The three arms of the Kenyan government are the Executive, the Legislature, and the...",
    "options": {
      "A": "County Assembly",
      "B": "Judiciary",
      "C": "Civil Service",
      "D": "National Police Service"
    },
    "correctAnswer": "B",
    "explanation": "The three arms of the Government of Kenya are the Executive, the Legislature (Parliament), and the Judiciary."
  },
  {
    "id": 17,
    "subject": "CRE",
    "grade": 6,
    "question": "Which of the following is NOT one of the Ten Commandments given to Moses?",
    "options": {
      "A": "Honour your father and mother",
      "B": "You shall not steal",
      "C": "You shall not commit adultery",
      "D": "Give all your possessions to the poor"
    },
    "correctAnswer": "D",
    "explanation": "Giving all possessions to the poor is a concept taught by Jesus, but it is not one of the original Ten Commandments found in Exodus 20."
  },
  {
    "id": 18,
    "subject": "Agriculture",
    "grade": 6,
    "question": "Crop rotation is primarily practiced to achieve which of the following?",
    "options": {
      "A": "Increase pests in the soil",
      "B": "Maintain or improve soil fertility",
      "C": "Reduce the need for weeding",
      "D": "Increase soil erosion"
    },
    "correctAnswer": "B",
    "explanation": "Crop rotation involves growing different types of crops sequentially on the same land to improve soil health, optimize nutrients, and combat pests/weeds, thus maintaining soil fertility."
  },
  {
    "id": 19,
    "subject": "Music",
    "grade": 6,
    "question": "A piece of Kenyan folk music performed by a soloist followed by a group response is an example of what musical form?",
    "options": {
      "A": "Call and Response",
      "B": "Round",
      "C": "Canon",
      "D": "Symphony"
    },
    "correctAnswer": "A",
    "explanation": "Call and response is a common musical form in African and Kenyan folk music where a leader sings a phrase and a group answers immediately."
  },
  {
    "id": 20,
    "subject": "Home Science",
    "grade": 6,
    "question": "The safest method to extinguish a fire caused by cooking oil (grease fire) is by using:",
    "options": {
      "A": "Water",
      "B": "Flour",
      "C": "A fire blanket or baking soda/salt",
      "D": "Fanning the flame"
    },
    "correctAnswer": "C",
    "explanation": "Water should never be used on a grease fire as it can spread the oil and the fire. A fire blanket or smothering agents like baking soda or salt cut off oxygen."
  },
  {
    "id": 21,
    "subject": "Physical & Health Education (PHE)",
    "grade": 6,
    "question": "Which component of physical fitness focuses on the amount of force a muscle can produce?",
    "options": {
      "A": "Flexibility",
      "B": "Muscular strength",
      "C": "Endurance",
      "D": "Body composition"
    },
    "correctAnswer": "B",
    "explanation": "Muscular strength is defined as the maximum amount of force that a muscle can exert against resistance."
  },
  {
    "id": 22,
    "subject": "ICT/Computer Studies",
    "grade": 6,
    "question": "What is the term for sending and receiving electronic messages over the internet?",
    "options": {
      "A": "Vlogging",
      "B": "Blogging",
      "C": "Email",
      "D": "Gaming"
    },
    "correctAnswer": "C",
    "explanation": "Email (Electronic Mail) is the method of exchanging digital messages over the internet."
  },
  {
    "id": 23,
    "subject": "Mathematics",
    "grade": 5,
    "question": "Convert the fraction $3/4$ into a decimal.",
    "options": {
      "A": "0.34",
      "B": "0.75",
      "C": "3.4",
      "D": "4.3"
    },
    "correctAnswer": "B",
    "explanation": "To convert a fraction to a decimal, divide the numerator by the denominator: $3 \\div 4 = 0.75$."
  },
  {
    "id": 24,
    "subject": "English",
    "grade": 5,
    "question": "Which part of speech is the underlined word in the sentence: 'The cat slept **lazily** on the mat'?",
    "options": {
      "A": "Adjective",
      "B": "Noun",
      "C": "Adverb",
      "D": "Verb"
    },
    "correctAnswer": "C",
    "explanation": "The word 'lazily' describes how the cat slept (modifies the verb), making it an adverb."
  },
  {
    "id": 25,
    "subject": "Kiswahili",
    "grade": 5,
    "question": "Chagua nomino inayotokana na kitenzi 'lima'.",
    "options": {
      "A": "Kilimo",
      "B": "Kulima",
      "C": "Malima",
      "D": "Alilima"
    },
    "correctAnswer": "A",
    "explanation": "Nomino inayotokana na kitenzi 'lima' (cultivate/farm) ni 'kilimo' (agriculture)."
  },
  {
    "id": 26,
    "subject": "Science & Technology",
    "grade": 5,
    "question": "The process by which liquid water changes into water vapour is called:",
    "options": {
      "A": "Condensation",
      "B": "Precipitation",
      "C": "Evaporation",
      "D": "Infiltration"
    },
    "correctAnswer": "C",
    "explanation": "Evaporation is the transition of a substance from the liquid phase to the gaseous phase (water vapour)."
  },
  {
    "id": 27,
    "subject": "Social Studies",
    "grade": 5,
    "question": "Which Kenyan community is traditionally known for their pastoralist lifestyle and living near the Great Rift Valley?",
    "options": {
      "A": "Luo",
      "B": "Kikuyu",
      "C": "Maasai",
      "D": "Mijikenda"
    },
    "correctAnswer": "C",
    "explanation": "The Maasai are a well-known semi-nomadic community in Kenya and Tanzania, famous for their pastoralist culture and residing near the Rift Valley."
  },
  {
    "id": 28,
    "subject": "CRE",
    "grade": 5,
    "question": "The central message of Jesus' teachings, according to the Gospels, is primarily about the establishment of the:",
    "options": {
      "A": "Jewish temple",
      "B": "Roman Empire",
      "C": "Kingdom of God",
      "D": "Law of Moses"
    },
    "correctAnswer": "C",
    "explanation": "Jesus' core teaching was the 'Gospel of the Kingdom,' focusing on God's rule and reign."
  },
  {
    "id": 29,
    "subject": "Agriculture",
    "grade": 5,
    "question": "Which type of animal production is mainly concerned with rearing goats, sheep, and cattle for meat and milk?",
    "options": {
      "A": "Poultry farming",
      "B": "Horticulture",
      "C": "Pastoralism/Livestock farming",
      "D": "Apiculture"
    },
    "correctAnswer": "C",
    "explanation": "Pastoralism or Livestock farming involves the raising of domestic animals like cattle, goats, and sheep for products like meat, milk, and hides."
  },
  {
    "id": 30,
    "subject": "Music",
    "grade": 5,
    "question": "A musical instrument that produces sound by blowing air across an edge, like a flute, is classified as a:",
    "options": {
      "A": "Percussion instrument",
      "B": "String instrument",
      "C": "Wind instrument",
      "D": "Electronic instrument"
    },
    "correctAnswer": "C",
    "explanation": "Instruments that require air to produce sound, whether by the player's breath (flute) or bellows (accordion), are generally categorized as wind instruments."
  },
  {
    "id": 31,
    "subject": "Home Science",
    "grade": 5,
    "question": "Why is it important to wash hands with soap and running water before preparing food?",
    "options": {
      "A": "To remove bad odours from hands.",
      "B": "To make the food taste better.",
      "C": "To prevent the spread of germs and diseases.",
      "D": "To soften the skin on your hands."
    },
    "correctAnswer": "C",
    "explanation": "Handwashing is the most effective way to remove pathogenic microorganisms (germs) and prevent food-borne illnesses."
  },
  {
    "id": 32,
    "subject": "Physical & Health Education (PHE)",
    "grade": 5,
    "question": "During a relay race, what must the incoming runner pass to the outgoing runner?",
    "options": {
      "A": "A handkerchief",
      "B": "A whistle",
      "C": "A baton",
      "D": "A ball"
    },
    "correctAnswer": "C",
    "explanation": "A relay race involves a team of runners each completing a part of the distance and then passing a baton to the next runner."
  },
  {
    "id": 33,
    "subject": "ICT/Computer Studies",
    "grade": 5,
    "question": "Which key on the keyboard is used to create a large space (indentation) at the beginning of a paragraph?",
    "options": {
      "A": "Shift key",
      "B": "Enter key",
      "C": "Tab key",
      "D": "Caps Lock key"
    },
    "correctAnswer": "C",
    "explanation": "The Tab key moves the cursor several spaces to the right, typically used for indentation."
  },
  {
    "id": 34,
    "subject": "Mathematics",
    "grade": 6,
    "question": "Simplify the ratio $15:25$ to its lowest terms.",
    "options": {
      "A": "3:5",
      "B": "5:3",
      "C": "1:5",
      "D": "5:25"
    },
    "correctAnswer": "A",
    "explanation": "Find the greatest common divisor (GCD) of 15 and 25, which is 5. Divide both numbers by 5: $15 \\div 5 = 3$ and $25 \\div 5 = 5$, resulting in $3:5$."
  },
  {
    "id": 35,
    "subject": "English",
    "grade": 6,
    "question": "Identify the conjunction in the sentence: 'We went to the market, but we did not buy anything.'",
    "options": {
      "A": "We",
      "B": "Went",
      "C": "Market",
      "D": "But"
    },
    "correctAnswer": "D",
    "explanation": "A conjunction joins clauses or sentences. 'But' joins the two independent clauses in the sentence."
  },
  {
    "id": 36,
    "subject": "Kiswahili",
    "grade": 6,
    "question": "Kitenzi 'kula' kikiwekwa katika wakati ujao, umoja, nafsi ya tatu, huwa:",
    "options": {
      "A": "Nitakula",
      "B": "Utakula",
      "C": "Atakula",
      "D": "Mtula"
    },
    "correctAnswer": "C",
    "explanation": "Muundo wa wakati ujao ni: Kiwakilishi cha nafsi (A-) + kiambishi cha wakati (-ta-) + mzizi wa kitenzi (-kula) = Atakula (He/She will eat)."
  },
  {
    "id": 37,
    "subject": "Science & Technology",
    "grade": 6,
    "question": "Which of these materials is an excellent electrical insulator?",
    "options": {
      "A": "Copper wire",
      "B": "Aluminium foil",
      "C": "Plastic ruler",
      "D": "Iron nail"
    },
    "correctAnswer": "C",
    "explanation": "A plastic ruler, like all plastics, does not allow electric current to pass through easily, making it an excellent insulator. The others are conductors."
  },
  {
    "id": 38,
    "subject": "Social Studies",
    "grade": 6,
    "question": "What is the primary role of the National Government in Kenya's two-tier system of governance?",
    "options": {
      "A": "Managing all local market taxes.",
      "B": "Providing county roads and lighting.",
      "C": "Maintaining national security and defence.",
      "D": "Issuing business licenses at the ward level."
    },
    "correctAnswer": "C",
    "explanation": "National security and defence are exclusive functions of the National Government, while the others are generally functions of the County Governments."
  },
  {
    "id": 39,
    "subject": "CRE",
    "grade": 6,
    "question": "Jesus performed his first public miracle at a wedding in which location?",
    "options": {
      "A": "Bethlehem",
      "B": "Jerusalem",
      "C": "Cana of Galilee",
      "D": "Nazareth"
    },
    "correctAnswer": "C",
    "explanation": "Jesus turned water into wine at the wedding in Cana of Galilee, as recorded in the Gospel of John, chapter 2."
  },
  {
    "id": 40,
    "subject": "Agriculture",
    "grade": 6,
    "question": "Why is mulching an important practice in crop farming?",
    "options": {
      "A": "To increase the rate of water evaporation from the soil.",
      "B": "To attract more pests to the crops.",
      "C": "To conserve soil moisture and suppress weeds.",
      "D": "To reduce the amount of organic matter."
    },
    "correctAnswer": "C",
    "explanation": "Mulching, covering the soil surface with materials like straw or plastic, helps reduce water loss through evaporation and smothers weeds, thereby conserving moisture."
  },
  {
    "id": 41,
    "subject": "Music",
    "grade": 6,
    "question": "What is the standard name for a staff notation symbol that indicates the pitch of notes, often placed at the beginning of the staff?",
    "options": {
      "A": "Bar line",
      "B": "Time signature",
      "C": "Clef",
      "D": "Rest"
    },
    "correctAnswer": "C",
    "explanation": "A clef (e.g., Treble Clef, Bass Clef) is a musical symbol used to indicate which notes are represented by the lines and spaces on a musical staff."
  },
  {
    "id": 42,
    "subject": "Home Science",
    "grade": 6,
    "question": "When ironing a garment made of cotton, what is generally the recommended temperature setting?",
    "options": {
      "A": "Lowest heat setting (synthetic)",
      "B": "Medium heat setting (silk/wool)",
      "C": "High heat setting (linen/cotton)",
      "D": "It should not be ironed."
    },
    "correctAnswer": "C",
    "explanation": "Cotton is a natural fibre that can withstand high temperatures, so a high heat setting is typically required for effective ironing."
  },
  {
    "id": 43,
    "subject": "Physical & Health Education (PHE)",
    "grade": 6,
    "question": "In the game of soccer, what is the action of stopping a moving ball and bringing it under control called?",
    "options": {
      "A": "Heading",
      "B": "Tackling",
      "C": "Trapping/Controlling",
      "D": "Shooting"
    },
    "correctAnswer": "C",
    "explanation": "Trapping or controlling is the technique used to receive and control the ball using various parts of the body (feet, chest, or head)."
  },
  {
    "id": 44,
    "subject": "ICT/Computer Studies",
    "grade": 6,
    "question": "The process of starting up a computer is referred to as:",
    "options": {
      "A": "Logging in",
      "B": "Shutting down",
      "C": "Formatting",
      "D": "Booting"
    },
    "correctAnswer": "D",
    "explanation": "Booting is the initial set of operations that a computer system performs when electrical power is switched on, or when the system is reset."
  },
  {
    "id": 45,
    "subject": "Mathematics",
    "grade": 5,
    "question": "Find the smallest common multiple (LCM) of 4 and 6.",
    "options": {
      "A": "2",
      "B": "12",
      "C": "24",
      "D": "6"
    },
    "correctAnswer": "B",
    "explanation": "Multiples of 4 are 4, 8, **12**, 16, 20, 24... Multiples of 6 are 6, **12**, 18, 24... The smallest number they share is 12."
  },
  {
    "id": 46,
    "subject": "English",
    "grade": 5,
    "question": "Select the correct form of the verb in brackets: 'They **(go)** to the park every Sunday.'",
    "options": {
      "A": "Goes",
      "B": "Go",
      "C": "Going",
      "D": "Gone"
    },
    "correctAnswer": "B",
    "explanation": "The subject 'They' is plural, and the sentence is in the simple present tense (habitual action), requiring the base form 'go'."
  },
  {
    "id": 47,
    "subject": "Kiswahili",
    "grade": 5,
    "question": "Ni aina gani ya maneno hizi: haraka, polepole, vizuri?",
    "options": {
      "A": "Vivumishi",
      "B": "Viunganishi",
      "C": "Vitenzi",
      "D": "Vielezi"
    },
    "correctAnswer": "D",
    "explanation": "Maneno haya yanaeleza namna tendo lilifanyika (kwa haraka, kwa polepole, kwa uzuri), kwa hivyo ni Vielezi (Adverbs)."
  },
  {
    "id": 48,
    "subject": "Science & Technology",
    "grade": 5,
    "question": "Which sense organ is responsible for detecting sound vibrations?",
    "options": {
      "A": "Eye",
      "B": "Nose",
      "C": "Ear",
      "D": "Tongue"
    },
    "correctAnswer": "C",
    "explanation": "The ear is the sense organ used for hearing, which detects sound waves as vibrations."
  },
  {
    "id": 49,
    "subject": "Social Studies",
    "grade": 5,
    "question": "What is the name of the main traditional leadership structure among the Mijikenda people of the Kenyan coast?",
    "options": {
      "A": "Lich",
      "B": "Njuri Ncheke",
      "C": "Mbaraza/Kaya Elders",
      "D": "Orkoiyot"
    },
    "correctAnswer": "C",
    "explanation": "The Mijikenda were traditionally governed by councils of elders operating within the sacred forests called Kaya. The elders' council is often called a Mbaraza."
  },
  {
    "id": 50,
    "subject": "CRE",
    "grade": 5,
    "question": "According to the story of creation in Genesis, on which day did God create the sun, moon, and stars?",
    "options": {
      "A": "First day",
      "B": "Third day",
      "C": "Fourth day",
      "D": "Sixth day"
    },
    "correctAnswer": "C",
    "explanation": "Genesis 1:14-19 states that God created the lights in the sky (sun, moon, and stars) on the fourth day."
  },
  {
    "id": 51,
    "subject": "Agriculture",
    "grade": 5,
    "question": "Which disease in poultry farming is characterized by white watery diarrhoea and sudden high mortality, often preventable by vaccination?",
    "options": {
      "A": "Foot and Mouth Disease (FMD)",
      "B": "Newcastle Disease (NCD)",
      "C": "Coccidiosis",
      "D": "Rift Valley Fever (RVF)"
    },
    "correctAnswer": "B",
    "explanation": "Newcastle Disease is a highly contagious and fatal viral disease of birds, often managed through strict vaccination protocols."
  },
  {
    "id": 52,
    "subject": "Music",
    "grade": 5,
    "question": "In a song, a person singing alone is called a:",
    "options": {
      "A": "Duet",
      "B": "Choir",
      "C": "Soloist",
      "D": "Trio"
    },
    "correctAnswer": "C",
    "explanation": "A soloist is an individual performer, in this case, a singer who sings alone."
  },
  {
    "id": 53,
    "subject": "Home Science",
    "grade": 5,
    "question": "What is the primary reason for folding clothes neatly after washing and drying?",
    "options": {
      "A": "To make them easier to iron.",
      "B": "To save space and keep them wrinkle-free.",
      "C": "To air them completely.",
      "D": "To change their colour."
    },
    "correctAnswer": "B",
    "explanation": "Folding clothes correctly prevents wrinkles, making them ready to wear, and allows for organized storage, saving space."
  },
  {
    "id": 54,
    "subject": "Physical & Health Education (PHE)",
    "grade": 5,
    "question": "Before engaging in any strenuous physical activity, which part of the exercise routine is essential for preventing injury?",
    "options": {
      "A": "Cooling down",
      "B": "Stretching",
      "C": "Warming up",
      "D": "Rehydrating"
    },
    "correctAnswer": "C",
    "explanation": "Warming up prepares the muscles, heart, and lungs for exercise by gradually increasing blood flow and body temperature, reducing the risk of strains and injury."
  },
  {
    "id": 55,
    "subject": "ICT/Computer Studies",
    "grade": 5,
    "question": "Which of these is an example of an output device for a computer?",
    "options": {
      "A": "Mouse",
      "B": "Scanner",
      "C": "Monitor",
      "D": "Webcam"
    },
    "correctAnswer": "C",
    "explanation": "A monitor displays information (output) from the computer. The others are input devices."
  },
  {
    "id": 56,
    "subject": "Mathematics",
    "grade": 6,
    "question": "A packet of milk costs Ksh 65. If you buy 8 packets, how much change will you get from a Ksh 1000 note?",
    "options": {
      "A": "Ksh 520",
      "B": "Ksh 480",
      "C": "Ksh 420",
      "D": "Ksh 380"
    },
    "correctAnswer": "B",
    "explanation": "Total cost = $8 \\times 65 = \\text{Ksh } 520$. Change = $1000 - 520 = \\text{Ksh } 480$."
  },
  {
    "id": 57,
    "subject": "English",
    "grade": 6,
    "question": "Which phrase correctly completes the sentence: 'The cat jumped **...** the wall.'?",
    "options": {
      "A": "Over",
      "B": "In",
      "C": "On",
      "D": "Between"
    },
    "correctAnswer": "A",
    "explanation": "'Over' is the correct preposition to show movement from one side of the wall to the other."
  },
  {
    "id": 58,
    "subject": "Kiswahili",
    "grade": 6,
    "question": "Kibadala cha sentensi hii 'Yule mtoto **analia** kwa sauti' ni kipi?",
    "options": {
      "A": "Yule mtoto amelia kwa sauti.",
      "B": "Yule mtoto **hulia** kwa sauti.",
      "C": "Yule mtoto alilia kwa sauti.",
      "D": "Yule mtoto atalia kwa sauti."
    },
    "correctAnswer": "B",
    "explanation": "Kitenzi 'analia' kiko katika wakati endelevu. 'Hulia' huonyesha mazoea (Simple Present/Habitual), jambo ambalo ni miongoni mwa malengo ya kimsingi ya kubadili kauli."
  },
  {
    "id": 59,
    "subject": "Science & Technology",
    "grade": 6,
    "question": "Which of the following is a renewable source of energy?",
    "options": {
      "A": "Coal",
      "B": "Petroleum (Oil)",
      "C": "Solar energy",
      "D": "Natural gas"
    },
    "correctAnswer": "C",
    "explanation": "Solar energy (energy from the sun) is inexhaustible and regenerates naturally, making it a renewable source. The others are non-renewable fossil fuels."
  },
  {
    "id": 60,
    "subject": "Social Studies",
    "grade": 6,
    "question": "The equator passes through which major Kenyan town?",
    "options": {
      "A": "Mombasa",
      "B": "Nairobi",
      "C": "Kisumu",
      "D": "Nanyuki"
    },
    "correctAnswer": "D",
    "explanation": "Nanyuki is a town in Laikipia County, Kenya, that is located exactly on the equator line."
  },
  {
    "id": 61,
    "subject": "CRE",
    "grade": 6,
    "question": "The prophet who confronted King Ahab and the prophets of Baal on Mount Carmel was:",
    "options": {
      "A": "Elisha",
      "B": "Isaiah",
      "C": "Elijah",
      "D": "Jeremiah"
    },
    "correctAnswer": "C",
    "explanation": "Elijah challenged the 450 prophets of Baal to a contest on Mount Carmel to prove that the Lord is the true God (1 Kings 18)."
  },
  {
    "id": 62,
    "subject": "Agriculture",
    "grade": 6,
    "question": "What is the primary product obtained from apiculture?",
    "options": {
      "A": "Silk",
      "B": "Honey and wax",
      "C": "Fish",
      "D": "Mushroom"
    },
    "correctAnswer": "B",
    "explanation": "Apiculture is the practice of keeping bees, especially on a large scale. The main products are honey and beeswax."
  },
  {
    "id": 63,
    "subject": "Music",
    "grade": 6,
    "question": "Which term describes a musical composition created by arranging different notes into a pleasing sequence, often the main tune?",
    "options": {
      "A": "Rhythm",
      "B": "Melody",
      "C": "Timbre",
      "D": "Dynamics"
    },
    "correctAnswer": "B",
    "explanation": "Melody is a series of notes heard one after the other, forming a recognizable musical phrase or tune."
  },
  {
    "id": 64,
    "subject": "Home Science",
    "grade": 6,
    "question": "Which stitching technique is best used for mending a small tear on a dress to make it invisible?",
    "options": {
      "A": "Hemming stitch",
      "B": "Running stitch",
      "C": "Patching/Darning",
      "D": "Backstitch"
    },
    "correctAnswer": "C",
    "explanation": "Darning or patching involves weaving thread or applying a piece of fabric (patch) over a hole or tear, making it the most suitable method for mending tears."
  },
  {
    "id": 65,
    "subject": "Physical & Health Education (PHE)",
    "grade": 6,
    "question": "What is the primary health benefit of regular aerobic exercise, like running or cycling?",
    "options": {
      "A": "Increasing muscle size (bulk).",
      "B": "Improving cardiovascular (heart and lung) health.",
      "C": "Decreasing flexibility.",
      "D": "Reducing the need for sleep."
    },
    "correctAnswer": "B",
    "explanation": "Aerobic exercises are primarily designed to strengthen the heart and lungs, thereby improving cardiovascular fitness."
  },
  {
    "id": 66,
    "subject": "ICT/Computer Studies",
    "grade": 6,
    "question": "Which storage device can hold the largest amount of data (up to terabytes) and is typically found inside a desktop computer?",
    "options": {
      "A": "Floppy disk",
      "B": "CD-ROM",
      "C": "USB flash drive",
      "D": "Hard Disk Drive (HDD)/Solid State Drive (SSD)"
    },
    "correctAnswer": "D",
    "explanation": "Hard Disk Drives (HDDs) and Solid State Drives (SSDs) are the main internal storage units for modern computers and have the largest storage capacity (Terabytes) compared to the other options."
  },
  {
    "id": 67,
    "subject": "Mathematics",
    "grade": 5,
    "question": "A farmer harvested 345 sacks of maize and 289 sacks of beans. How many sacks did he harvest in total?",
    "options": {
      "A": "634",
      "B": "624",
      "C": "534",
      "D": "644"
    },
    "correctAnswer": "A",
    "explanation": "Total number of sacks = $345 + 289 = 634$."
  },
  {
    "id": 68,
    "subject": "English",
    "grade": 5,
    "question": "Which sentence uses an interrogative pronoun correctly?",
    "options": {
      "A": "The book is mine.",
      "B": "**Who** is coming to the party?",
      "C": "She runs fast.",
      "D": "I love that dog."
    },
    "correctAnswer": "B",
    "explanation": "An interrogative pronoun (Who, whom, whose, which, what) is used to ask a question. 'Who' asks about the subject."
  },
  {
    "id": 69,
    "subject": "Kiswahili",
    "grade": 5,
    "question": "Taja aina ya sentensi hii: 'Lala salama, mwanangu.'",
    "options": {
      "A": "Sentensi ya kuuliza",
      "B": "Sentensi ya kutoa amri/matamshi",
      "C": "Sentensi ya kusimulia",
      "D": "Sentensi ya kukanusha"
    },
    "correctAnswer": "B",
    "explanation": "Hii ni sentensi ya kutoa matamshi ya kuomba, kuamuru au kuelekeza. Katika muktadha huu, ni matamshi ya kheri/dua ('Sleep well, my child')."
  },
  {
    "id": 70,
    "subject": "Science & Technology",
    "grade": 5,
    "question": "Which of the following describes a living component (biotic factor) of an ecosystem?",
    "options": {
      "A": "Sunlight",
      "B": "Temperature",
      "C": "Water",
      "D": "A tree"
    },
    "correctAnswer": "D",
    "explanation": "Biotic factors are the living parts of the environment. A tree is a living organism."
  },
  {
    "id": 71,
    "subject": "Social Studies",
    "grade": 5,
    "question": "Why are mountains important physical features in East Africa?",
    "options": {
      "A": "They cause droughts.",
      "B": "They are main sources of many rivers.",
      "C": "They are the only places where farming is done.",
      "D": "They reduce rainfall."
    },
    "correctAnswer": "B",
    "explanation": "Highlands and mountains (like Mt. Kenya, Mt. Kilimanjaro) trap moisture, leading to rainfall and feeding major rivers, making them essential water sources."
  },
  {
    "id": 72,
    "subject": "CRE",
    "grade": 5,
    "question": "Who was the father of John the Baptist?",
    "options": {
      "A": "Joseph",
      "B": "Zechariah",
      "C": "Peter",
      "D": "Bartholomew"
    },
    "correctAnswer": "B",
    "explanation": "Zechariah, a priest, and his wife Elizabeth were the parents of John the Baptist, as told in the Gospel of Luke."
  },
  {
    "id": 73,
    "subject": "Agriculture",
    "grade": 5,
    "question": "The main reason for proper storage of farm produce like maize and beans is to prevent:",
    "options": {
      "A": "The soil from becoming infertile.",
      "B": "Attack by pests and spoilage.",
      "C": "Too much rain from falling.",
      "D": "The growth of trees."
    },
    "correctAnswer": "B",
    "explanation": "Proper storage protects the harvest from insect pests, rodents, and moisture-related spoilage (mould, rot), ensuring food security."
  },
  {
    "id": 74,
    "subject": "Music",
    "grade": 5,
    "question": "Which national symbol, apart from the flag, is a musical representation of a country's identity?",
    "options": {
      "A": "Coat of Arms",
      "B": "National Anthem",
      "C": "The President",
      "D": "Public Seal"
    },
    "correctAnswer": "B",
    "explanation": "The National Anthem is a patriotic musical composition officially adopted by a country to evoke and represent its history and identity."
  },
  {
    "id": 75,
    "subject": "Home Science",
    "grade": 5,
    "question": "Which of the following is considered a healthy snack choice for a child?",
    "options": {
      "A": "Packet of crisps (chips)",
      "B": "A sugary soda",
      "C": "Fresh orange and water",
      "D": "Chocolate bar"
    },
    "correctAnswer": "C",
    "explanation": "Fresh fruit and plain water provide essential nutrients and hydration without excessive sugar, salt, or unhealthy fats, making them the healthiest option."
  },
  {
    "id": 76,
    "subject": "Physical & Health Education (PHE)",
    "grade": 5,
    "question": "The skill of throwing a ball and the skill of batting a ball are examples of what category of motor skills?",
    "options": {
      "A": "Locomotor skills",
      "B": "Balance skills",
      "C": "Manipulative skills",
      "D": "Rhythmic skills"
    },
    "correctAnswer": "C",
    "explanation": "Manipulative skills involve controlling an object (e.g., throwing, catching, striking, kicking). Both throwing and batting involve controlling a ball."
  },
  {
    "id": 77,
    "subject": "ICT/Computer Studies",
    "grade": 5,
    "question": "What is the small blinking line on a screen that indicates where the next text will appear?",
    "options": {
      "A": "Pointer",
      "B": "Icon",
      "C": "Cursor",
      "D": "Menu"
    },
    "correctAnswer": "C",
    "explanation": "The cursor is the indicator used to show the current position for data entry or to identify a point of interaction on the screen."
  },
  {
    "id": 78,
    "subject": "Mathematics",
    "grade": 6,
    "question": "If a square garden has an area of $49 \text{ m}^2$, what is the length of one side?",
    "options": {
      "A": "7 m",
      "B": "14 m",
      "C": "9 m",
      "D": "24.5 m"
    },
    "correctAnswer": "A",
    "explanation": "The area of a square is Side $\\times$ Side. The number which, when multiplied by itself, gives 49 is 7. $\\sqrt{49} = 7 \text{ m}$."
  },
  {
    "id": 79,
    "subject": "English",
    "grade": 6,
    "question": "Choose the correctly punctuated sentence.",
    "options": {
      "A": "Kenya is a country in East Africa",
      "B": "Kenya is a country, in East Africa.",
      "C": "Kenya is a country in East Africa.",
      "D": "kenya is a country in east africa."
    },
    "correctAnswer": "C",
    "explanation": "The sentence begins with a capital letter ('Kenya') and ends with a full stop (period) to indicate completion. Option D lacks proper capitalization."
  },
  {
    "id": 80,
    "subject": "Kiswahili",
    "grade": 6,
    "question": "Neno 'mtu' liko katika ngeli gani ya nomino?",
    "options": {
      "A": "A-WA",
      "B": "KI-VI",
      "C": "U-ZI",
      "D": "LI-YA"
    },
    "correctAnswer": "A",
    "explanation": "'Mtu' (person, singular) na 'watu' (people, plural) ni nomino za ngeli ya A-WA."
  },
  {
    "id": 81,
    "subject": "Science & Technology",
    "grade": 6,
    "question": "Which state of matter has a definite volume but takes the shape of its container?",
    "options": {
      "A": "Solid",
      "B": "Gas",
      "C": "Plasma",
      "D": "Liquid"
    },
    "correctAnswer": "D",
    "explanation": "Liquids maintain a constant volume but flow to conform to the shape of the vessel they occupy."
  },
  {
    "id": 82,
    "subject": "Social Studies",
    "grade": 6,
    "question": "In Kenya, the primary role of the County Executive Committee is to:",
    "options": {
      "A": "Make laws for the county.",
      "B": "Interpret the laws.",
      "C": "Implement the county laws and policies.",
      "D": "Elect the County Governor."
    },
    "correctAnswer": "C",
    "explanation": "The County Executive Committee, led by the Governor, is the executive arm responsible for implementing county legislation and managing its administration."
  },
  {
    "id": 83,
    "subject": "CRE",
    "grade": 6,
    "question": "Which sacrament involves an outward sign of an inward grace, symbolized by being covered in water, marking entry into the Christian faith?",
    "options": {
      "A": "Confirmation",
      "B": "Holy Communion",
      "C": "Baptism",
      "D": "Marriage"
    },
    "correctAnswer": "C",
    "explanation": "Baptism uses water as a symbol of cleansing and a person's initiation into the Christian community."
  },
  {
    "id": 84,
    "subject": "Agriculture",
    "grade": 6,
    "question": "Weeding in a crop field is essential primarily to prevent:",
    "options": {
      "A": "Excessive rainfall.",
      "B": "Competition for nutrients, water, and sunlight.",
      "C": "Soil erosion by wind.",
      "D": "Attraction of pollinators."
    },
    "correctAnswer": "B",
    "explanation": "Weeds compete with the main crop for vital resources (nutrients, water, light), which reduces the crop yield."
  },
  {
    "id": 85,
    "subject": "Music",
    "grade": 6,
    "question": "What is the term for a smooth, connected style of performance in music?",
    "options": {
      "A": "Staccato",
      "B": "Pizzicato",
      "C": "Legato",
      "D": "Forte"
    },
    "correctAnswer": "C",
    "explanation": "Legato is an Italian musical term meaning 'tied together,' indicating that notes should be played smoothly and connectedly."
  },
  {
    "id": 86,
    "subject": "Home Science",
    "grade": 6,
    "question": "What is the primary function of carbohydrates in the human diet?",
    "options": {
      "A": "Building and repairing muscles.",
      "B": "Providing the body with energy.",
      "C": "Insulating the body against cold.",
      "D": "Producing hormones."
    },
    "correctAnswer": "B",
    "explanation": "Carbohydrates are the body's primary source of energy, fueling cellular activities."
  },
  {
    "id": 87,
    "subject": "Physical & Health Education (PHE)",
    "grade": 6,
    "question": "To maintain a healthy weight, the principle of 'energy balance' suggests that calorie intake should match:",
    "options": {
      "A": "Calorie intake of friends.",
      "B": "Calorie expenditure (energy used).",
      "C": "The amount of sleep one gets.",
      "D": "The number of meals eaten."
    },
    "correctAnswer": "B",
    "explanation": "Energy balance is achieved when the energy consumed from food (intake) equals the energy used by the body for metabolism and physical activity (expenditure)."
  },
  {
    "id": 88,
    "subject": "ICT/Computer Studies",
    "grade": 6,
    "question": "Which action is correct when safely removing a USB flash drive from a computer?",
    "options": {
      "A": "Simply pull it out quickly.",
      "B": "Click 'Eject' or 'Safely Remove Hardware' first.",
      "C": "Restart the computer first.",
      "D": "Turn off the computer's power switch."
    },
    "correctAnswer": "B",
    "explanation": "It is necessary to use the 'Safely Remove Hardware' feature to stop data transfer and prevent corruption of data on the flash drive."
  },
  {
    "id": 89,
    "subject": "Mathematics",
    "grade": 5,
    "question": "What is $25\%$ of 200?",
    "options": {
      "A": "50",
      "B": "100",
      "C": "25",
      "D": "75"
    },
    "correctAnswer": "A",
    "explanation": "To calculate 25% of 200, you can multiply $0.25 \\times 200$ or find $1/4$ of 200. $200 \\div 4 = 50$."
  },
  {
    "id": 90,
    "subject": "English",
    "grade": 5,
    "question": "Choose the antonym (opposite meaning) for the word **Generous**.",
    "options": {
      "A": "Kind",
      "B": "Selfish",
      "C": "Wealthy",
      "D": "Happy"
    },
    "correctAnswer": "B",
    "explanation": "Generous means giving freely. The opposite is selfish, meaning concerned excessively with oneself."
  },
  {
    "id": 91,
    "subject": "Kiswahili",
    "grade": 5,
    "question": "Methali: 'Haraka haraka **haina** baraka' inamaanisha nini?",
    "options": {
      "A": "Kufanya mambo polepole huleta shida.",
      "B": "Kukimbia sana hukufanya ushindi.",
      "C": "Kufanya mambo kwa pupa/haraka sana hakuna faida.",
      "D": "Baraka huja haraka."
    },
    "correctAnswer": "C",
    "explanation": "Methali hii inashauri mtu kufanya mambo kwa utulivu na uangalifu, kwani kufanya kwa pupa husababisha makosa au matokeo mabaya."
  },
  {
    "id": 92,
    "subject": "Science & Technology",
    "grade": 5,
    "question": "Which part of the human body acts as a pump to circulate blood?",
    "options": {
      "A": "Lungs",
      "B": "Liver",
      "C": "Heart",
      "D": "Kidneys"
    },
    "correctAnswer": "C",
    "explanation": "The heart is a muscular organ that pumps blood through the blood vessels of the circulatory system."
  },
  {
    "id": 93,
    "subject": "Social Studies",
    "grade": 5,
    "question": "What is the name of the official currency used in Kenya?",
    "options": {
      "A": "Tanzanian Shilling",
      "B": "Kenyan Shilling (Ksh)",
      "C": "Ugandan Shilling",
      "D": "Rand"
    },
    "correctAnswer": "B",
    "explanation": "The legal tender currency in Kenya is the Kenyan Shilling, abbreviated as Ksh."
  },
  {
    "id": 94,
    "subject": "CRE",
    "grade": 5,
    "question": "The book of Psalms in the Bible is mainly a collection of:",
    "options": {
      "A": "Laws",
      "B": "Prophecies",
      "C": "Letters",
      "D": "Hymns and prayers"
    },
    "correctAnswer": "D",
    "explanation": "The book of Psalms is a collection of 150 sacred songs or poems, many of which are prayers or hymns of praise."
  },
  {
    "id": 95,
    "subject": "Agriculture",
    "grade": 5,
    "question": "Which farm input is primarily used to kill insect pests that attack crops?",
    "options": {
      "A": "Fertilizer",
      "B": "Manure",
      "C": "Insecticide",
      "D": "Herbicide"
    },
    "correctAnswer": "C",
    "explanation": "Insecticides are chemical substances designed to kill insects. Herbicides kill weeds, and fertilizers/manure provide nutrients."
  },
  {
    "id": 96,
    "subject": "Music",
    "grade": 5,
    "question": "The three main primary colours used in visual arts and sometimes reflected in music/dance costume design are Red, Yellow, and:",
    "options": {
      "A": "Green",
      "B": "Purple",
      "C": "Blue",
      "D": "Orange"
    },
    "correctAnswer": "C",
    "explanation": "The primary colours in subtractive colour mixing (used in paint and pigment) are Red, Yellow, and Blue."
  },
  {
    "id": 97,
    "subject": "Home Science",
    "grade": 5,
    "question": "To prevent cross-contamination in the kitchen, you should use separate cutting boards for raw meat and:",
    "options": {
      "A": "Plates",
      "B": "Utensils",
      "C": "Cooked food or vegetables",
      "D": "Sinks"
    },
    "correctAnswer": "C",
    "explanation": "Cross-contamination is the transfer of bacteria from raw meat to ready-to-eat foods like cooked food, fruits, or vegetables. Using separate boards prevents this."
  },
  {
    "id": 98,
    "subject": "Physical & Health Education (PHE)",
    "grade": 5,
    "question": "What is the recommended proper posture for sitting at a desk while reading or writing?",
    "options": {
      "A": "Slouching forward with a curved back.",
      "B": "Sitting on the edge of the seat.",
      "C": "Sitting upright with the back against the chair backrest.",
      "D": "Lying sideways on the desk."
    },
    "correctAnswer": "C",
    "explanation": "Sitting upright with the back supported and feet flat on the floor is the recommended ergonomic posture to prevent back pain and strain."
  },
  {
    "id": 99,
    "subject": "ICT/Computer Studies",
    "grade": 5,
    "question": "What is the main danger of sharing your personal password with strangers online?",
    "options": {
      "A": "The computer will slow down.",
      "B": "You might lose your favourite games.",
      "C": "They can access your private information and accounts.",
      "D": "It will change your screen background."
    },
    "correctAnswer": "C",
    "explanation": "Sharing passwords compromises account security, allowing others unauthorized access to sensitive or private information."
  },
  {
    "id": 100,
    "subject": "Mathematics",
    "grade": 6,
    "question": "Calculate the area of a triangle with a base of 10 cm and a height of 8 cm.",
    "options": {
      "A": "80 $\\text{cm}^2$",
      "B": "40 $\\text{cm}^2$",
      "C": "18 $\\text{cm}^2$",
      "D": "36 $\\text{cm}^2$"
    },
    "correctAnswer": "B",
    "explanation": "The area of a triangle is $1/2 \\times \\text{base} \\times \\text{height}$. $1/2 \\times 10 \\text{ cm} \\times 8 \\text{ cm} = 40 \\text{ cm}^2$."
  },
  {
    "id": 101,
    "subject": "English",
    "grade": 6,
    "question": "Choose the word that means a person who writes a book.",
    "options": {
      "A": "Publisher",
      "B": "Illustrator",
      "C": "Author",
      "D": "Editor"
    },
    "correctAnswer": "C",
    "explanation": "An author is the writer of a book, article, or other text."
  },
  {
    "id": 102,
    "subject": "Kiswahili",
    "grade": 6,
    "question": "Kamilisha nahau: 'Kupiga maji' maana yake ni:",
    "options": {
      "A": "Kuogelea",
      "B": "Kupiga kelele",
      "C": "Kunywa pombe",
      "D": "Kufua nguo"
    },
    "correctAnswer": "C",
    "explanation": "Nahau 'Kupiga maji' kwa lugha ya sasa humaanisha kunywa pombe (to drink alcohol)."
  },
  {
    "id": 103,
    "subject": "Science & Technology",
    "grade": 6,
    "question": "A balanced diet provides all necessary nutrients in the correct amounts. Which of the following is essential for bone and teeth formation?",
    "options": {
      "A": "Iron",
      "B": "Vitamin C",
      "C": "Calcium and Vitamin D",
      "D": "Iodine"
    },
    "correctAnswer": "C",
    "explanation": "Calcium is the main mineral component of bones and teeth, and Vitamin D is necessary for the body to absorb calcium."
  },
  {
    "id": 104,
    "subject": "Social Studies",
    "grade": 6,
    "question": "The official language of instruction in Kenyan schools and the language of the National Assembly is:",
    "options": {
      "A": "Kalenjin",
      "B": "Kiswahili",
      "C": "Luo",
      "D": "English"
    },
    "correctAnswer": "B",
    "explanation": "While English is also official, Kiswahili is constitutionally recognized as the National Language and one of the two official languages, widely used in local administration and the National Assembly proceedings."
  },
  {
    "id": 105,
    "subject": "CRE",
    "grade": 6,
    "question": "Which book of the Bible narrates the story of the Israelites' journey through the wilderness after leaving Egypt?",
    "options": {
      "A": "Genesis",
      "B": "Exodus",
      "C": "Leviticus",
      "D": "Numbers"
    },
    "correctAnswer": "B",
    "explanation": "The book of Exodus details the Israelites' departure from Egypt and their initial wanderings in the desert."
  },
  {
    "id": 106,
    "subject": "Agriculture",
    "grade": 6,
    "question": "Which method is commonly used to remove foreign particles and large clumps from soil before planting seeds in a seedbed?",
    "options": {
      "A": "Irrigation",
      "B": "Pest control",
      "C": "Sieving/Sifting",
      "D": "Mulching"
    },
    "correctAnswer": "C",
    "explanation": "Sieving or sifting the soil helps to break up large lumps and remove stones, roots, and other debris, creating a fine tilth suitable for seedlings."
  },
  {
    "id": 107,
    "subject": "Music",
    "grade": 6,
    "question": "In music theory, what is the term for two or more notes sounding simultaneously, often producing a pleasant sound?",
    "options": {
      "A": "Rhythm",
      "B": "Harmony",
      "C": "Tempo",
      "D": "Timbre"
    },
    "correctAnswer": "B",
    "explanation": "Harmony is the use of simultaneous pitches (tones, notes), or chords."
  },
  {
    "id": 108,
    "subject": "Home Science",
    "grade": 6,
    "question": "A garment label reading 'Hand Wash Only' primarily advises against which cleaning method?",
    "options": {
      "A": "Using warm water",
      "B": "Using detergent",
      "C": "Using a washing machine",
      "D": "Drying in the sun"
    },
    "correctAnswer": "C",
    "explanation": "The label indicates the garment is too delicate for the agitation and harshness of a machine wash, requiring gentle hand washing."
  },
  {
    "id": 109,
    "subject": "Physical & Health Education (PHE)",
    "grade": 6,
    "question": "What is the common term for a sudden, painful, involuntary contraction of a muscle, often caused by fatigue or dehydration?",
    "options": {
      "A": "Sprain",
      "B": "Fracture",
      "C": "Cramp",
      "D": "Dislocation"
    },
    "correctAnswer": "C",
    "explanation": "A cramp is a sudden and involuntary muscle contraction or over-shortening; they are often temporary but painful."
  },
  {
    "id": 110,
    "subject": "ICT/Computer Studies",
    "grade": 6,
    "question": "Which of the following describes the function of a search engine like Google or Bing?",
    "options": {
      "A": "Creating digital drawings.",
      "B": "Sending private messages.",
      "C": "Finding information on the World Wide Web.",
      "D": "Storing large video files."
    },
    "correctAnswer": "C",
    "explanation": "A search engine is a software system designed to carry out web searches, which means finding information on the internet."
  },
  {
    "id": 111,
    "subject": "Mathematics",
    "grade": 5,
    "question": "If a line segment starts at 3 and ends at 9 on a number line, what is its length?",
    "options": {
      "A": "6 units",
      "B": "12 units",
      "C": "3 units",
      "D": "9 units"
    },
    "correctAnswer": "A",
    "explanation": "Length is calculated by subtracting the smaller value from the larger value: $9 - 3 = 6$ units."
  },
  {
    "id": 112,
    "subject": "English",
    "grade": 5,
    "question": "Identify the object pronoun in the sentence: 'The teacher praised **us** for our hard work.'",
    "options": {
      "A": "Teacher",
      "B": "Praised",
      "C": "Us",
      "D": "Work"
    },
    "correctAnswer": "C",
    "explanation": "An object pronoun (us, me, him, her, them) receives the action of the verb. 'Us' is the object of the verb 'praised'."
  },
  {
    "id": 113,
    "subject": "Kiswahili",
    "grade": 5,
    "question": "Chagua kivumishi kinachofaa: 'Mtoto **...** ameanguka.'",
    "options": {
      "A": "Mdogo",
      "B": "Wadogo",
      "C": "Midogo",
      "D": "Dogo"
    },
    "correctAnswer": "A",
    "explanation": "Kivumishi huafikiana na nomino. Nomino 'Mtoto' (umoja, ngeli ya A-WA) huafikiana na kivumishi 'mdogo'."
  },
  {
    "id": 114,
    "subject": "Science & Technology",
    "grade": 5,
    "question": "Which characteristic is unique to mammals among all animal groups?",
    "options": {
      "A": "Having scales",
      "B": "Laying eggs",
      "C": "Giving birth to live young and suckling them with milk",
      "D": "Breathing through gills"
    },
    "correctAnswer": "C",
    "explanation": "Mammals are defined by having mammary glands to produce milk for their young (suckling) and generally giving live birth (viviparous)."
  },
  {
    "id": 115,
    "subject": "Social Studies",
    "grade": 5,
    "question": "Which of these institutions is responsible for registering births and deaths in Kenya?",
    "options": {
      "A": "Kenya Revenue Authority (KRA)",
      "B": "Department of Civil Registration (CRD)",
      "C": "Independent Electoral and Boundaries Commission (IEBC)",
      "D": "National Treasury"
    },
    "correctAnswer": "B",
    "explanation": "The Department of Civil Registration (CRD) is mandated to register all births and deaths occurring in Kenya and issue corresponding certificates."
  },
  {
    "id": 116,
    "subject": "CRE",
    "grade": 5,
    "question": "Why did God command Noah to build an ark?",
    "options": {
      "A": "To travel to a new land.",
      "B": "To escape a great flood that would destroy the earth.",
      "C": "To house all the animals.",
      "D": "To fight a great battle."
    },
    "correctAnswer": "B",
    "explanation": "The Ark was built to preserve Noah, his family, and two of every kind of animal from the Great Flood (Genesis 6)."
  },
  {
    "id": 117,
    "subject": "Agriculture",
    "grade": 5,
    "question": "What is the primary product obtained from dairy farming?",
    "options": {
      "A": "Wool",
      "B": "Eggs",
      "C": "Milk",
      "D": "Honey"
    },
    "correctAnswer": "C",
    "explanation": "Dairy farming is a type of agriculture focused on the long-term production of milk, which is processed into dairy products."
  },
  {
    "id": 118,
    "subject": "Music",
    "grade": 5,
    "question": "Which movement or action is NOT used to accompany a folk song in a traditional Kenyan setting?",
    "options": {
      "A": "Clapping hands",
      "B": "Foot stomping/Dancing",
      "C": "Singing along (Chorus)",
      "D": "Playing a piano"
    },
    "correctAnswer": "D",
    "explanation": "Traditional Kenyan folk songs rely primarily on voices, indigenous instruments (drums, shakers, lyres), clapping, and body movement, not a Western instrument like the piano."
  },
  {
    "id": 119,
    "subject": "Home Science",
    "grade": 5,
    "question": "To treat a minor cut or scrape on the skin, what should be applied after cleaning the wound?",
    "options": {
      "A": "A thick paste of soil.",
      "B": "Antiseptic solution/cream and a bandage.",
      "C": "Cooking oil.",
      "D": "Nothing, just leave it open."
    },
    "correctAnswer": "B",
    "explanation": "After cleaning, applying an antiseptic (like iodine or spirit) kills germs, and a bandage protects the wound from further infection."
  },
  {
    "id": 120,
    "subject": "Physical & Health Education (PHE)",
    "grade": 5,
    "question": "Which skill involves running with short, quick steps while moving the arms in opposition to the legs?",
    "options": {
      "A": "Galloping",
      "B": "Skipping",
      "C": "Hopping",
      "D": "Sprinting"
    },
    "correctAnswer": "B",
    "explanation": "Skipping is a locomotor movement that combines a step and a hop on one foot, alternating feet (step-hop, step-hop)."
  },
  {
    "id": 121,
    "subject": "ICT/Computer Studies",
    "grade": 5,
    "question": "What is the term for a set of instructions that tell a computer what to do?",
    "options": {
      "A": "Hardware",
      "B": "Data",
      "C": "Software/Program",
      "D": "Monitor"
    },
    "correctAnswer": "C",
    "explanation": "Software is the collection of programs, procedures, and instructions that govern the operation of a computer system."
  },
  {
    "id": 122,
    "subject": "Mathematics",
    "grade": 6,
    "question": "A shirt costs Ksh 1,200. If it is sold at a $10\%$ discount, what is the selling price?",
    "options": {
      "A": "Ksh 120",
      "B": "Ksh 1080",
      "C": "Ksh 1320",
      "D": "Ksh 1000"
    },
    "correctAnswer": "B",
    "explanation": "Discount amount is $10\%$ of $1,200 = 120$. Selling Price = $1,200 - 120 = \text{Ksh } 1,080$."
  },
  {
    "id": 123,
    "subject": "English",
    "grade": 6,
    "question": "Identify the adverb of time in the sentence: 'We will visit the museum **tomorrow**.'",
    "options": {
      "A": "Visit",
      "B": "Museum",
      "C": "Tomorrow",
      "D": "We"
    },
    "correctAnswer": "C",
    "explanation": "Adverbs of time answer the question 'When?' 'Tomorrow' specifies when the action will happen."
  },
  {
    "id": 124,
    "subject": "Kiswahili",
    "grade": 6,
    "question": "Neno gani kati ya haya ni 'jina' la pekee (Proper Noun)?",
    "options": {
      "A": "Mto",
      "B": "Daktari",
      "C": "Simba",
      "D": "Mlima Kenya"
    },
    "correctAnswer": "D",
    "explanation": "Nomino ya pekee hutaja jina halisi la mtu, mahali, au kitu. 'Mlima Kenya' (Mount Kenya) ni jina maalum la mahali. Mengi ni nomino za kawaida."
  },
  {
    "id": 125,
    "subject": "Science & Technology",
    "grade": 6,
    "question": "A mixture of sand and iron filings can best be separated using which method?",
    "options": {
      "A": "Filtering",
      "B": "Decanting",
      "C": "Magnetism",
      "D": "Evaporation"
    },
    "correctAnswer": "C",
    "explanation": "Iron filings are magnetic, while sand is not. Therefore, a magnet can be used to attract and remove the iron filings from the sand."
  },
  {
    "id": 126,
    "subject": "Social Studies",
    "grade": 6,
    "question": "The historical site in Kenya known for the discovery of early human fossils by the Leakey family is located at:",
    "options": {
      "A": "Lamu Island",
      "B": "Gedi Ruins",
      "C": "Fort Jesus",
      "D": "Koobi Fora/Turkana Basin"
    },
    "correctAnswer": "D",
    "explanation": "Koobi Fora in the Turkana Basin is a globally significant palaeontological site where many hominin fossils have been excavated."
  },
  {
    "id": 127,
    "subject": "CRE",
    "grade": 6,
    "question": "During the Jewish feast of Passover, which important item did Jesus use to institute the sacrament of Holy Communion?",
    "options": {
      "A": "Oil and Wine",
      "B": "Bread and Wine/Grape juice",
      "C": "Water and Salt",
      "D": "A Lamb and Oil"
    },
    "correctAnswer": "B",
    "explanation": "At the Last Supper (a Passover meal), Jesus took bread, broke it, and offered a cup (wine/grape juice) to his disciples, establishing the Holy Communion."
  },
  {
    "id": 128,
    "subject": "Agriculture",
    "grade": 6,
    "question": "The primary role of a 'brooder' in poultry farming is to provide young chicks with:",
    "options": {
      "A": "Protection from rain.",
      "B": "A constant source of warmth/heat.",
      "C": "Unlimited food.",
      "D": "A place to lay eggs."
    },
    "correctAnswer": "B",
    "explanation": "A brooder is a heated enclosure used to raise young birds (chicks) from hatching until they can regulate their own body temperature, mimicking the mother hen's warmth."
  },
  {
    "id": 129,
    "subject": "Music",
    "grade": 6,
    "question": "The musical term **Pianissimo** (pp) instructs a musician to play or sing:",
    "options": {
      "A": "Very loud",
      "B": "At a medium volume",
      "C": "Very soft",
      "D": "With increasing speed"
    },
    "correctAnswer": "C",
    "explanation": "Pianissimo (pp) is an Italian term for dynamics that means 'very soft'."
  },
  {
    "id": 130,
    "subject": "Home Science",
    "grade": 6,
    "question": "A food item that is rich in Vitamin C is:",
    "options": {
      "A": "Cooking oil",
      "B": "Orange",
      "C": "Ugali (Maize meal)",
      "D": "Milk"
    },
    "correctAnswer": "B",
    "explanation": "Citrus fruits like oranges, lemons, and grapefruits are excellent sources of Vitamin C."
  },
  {
    "id": 131,
    "subject": "Physical & Health Education (PHE)",
    "grade": 6,
    "question": "What is the term for a movement that involves rotating a body part around a central axis, like twisting the waist?",
    "options": {
      "A": "Flexion",
      "B": "Extension",
      "C": "Rotation",
      "D": "Abduction"
    },
    "correctAnswer": "C",
    "explanation": "Rotation is the movement of a bone or limb around its axis, such as twisting the torso."
  },
  {
    "id": 132,
    "subject": "ICT/Computer Studies",
    "grade": 6,
    "question": "What does the abbreviation **URL** stand for in the context of the internet?",
    "options": {
      "A": "Universal Resource Link",
      "B": "User Registration List",
      "C": "Uniform Resource Locator",
      "D": "United Remote Login"
    },
    "correctAnswer": "C",
    "explanation": "URL stands for Uniform Resource Locator, which is the address used to access web pages."
  },
  {
    "id": 133,
    "subject": "Mathematics",
    "grade": 5,
    "question": "Round off 5,873 to the nearest hundred.",
    "options": {
      "A": "5,800",
      "B": "5,900",
      "C": "6,000",
      "D": "5,870"
    },
    "correctAnswer": "B",
    "explanation": "The hundreds digit is 8. The next digit (tens) is 7. Since 7 is 5 or greater, you round up the hundreds digit. $5,873$ becomes $5,900$."
  },
  {
    "id": 134,
    "subject": "English",
    "grade": 5,
    "question": "Complete the idiom: 'As quick as a **...**.'",
    "options": {
      "A": "Tortoise",
      "B": "Snail",
      "C": "Flash/Wink",
      "D": "Tree"
    },
    "correctAnswer": "C",
    "explanation": "The idiom is 'As quick as a flash' or 'As quick as a wink,' meaning extremely fast."
  },
  {
    "id": 135,
    "subject": "Kiswahili",
    "grade": 5,
    "question": "Chagua jina la mnyama anayefanana na ndovu (elephant) lakini ni mdogo na anaishi mitini.",
    "options": {
      "A": "Kifaru",
      "B": "Panya",
      "C": "Punda milia",
      "D": "Kitungule/Dendrohyrax"
    },
    "correctAnswer": "D",
    "explanation": "Kitungule au 'Dendrohyrax' (Tree Hyrax) ni mnyama mdogo anayeishi kwenye miti na ana uhusiano wa kifamilia na ndovu (elephants), ingawa hafanani kimuonekano sana na ndovu. Kwa CBC, hufundishwa kama mnyama mwenye uhusiano wa mbali na ndovu."
  },
  {
    "id": 136,
    "subject": "Science & Technology",
    "grade": 5,
    "question": "Which force pulls all objects towards the centre of the Earth?",
    "options": {
      "A": "Friction",
      "B": "Magnetic force",
      "C": "Gravity",
      "D": "Tension"
    },
    "correctAnswer": "C",
    "explanation": "Gravity is the natural force that attracts objects towards the centre of a massive body, like the Earth."
  },
  {
    "id": 137,
    "subject": "Social Studies",
    "grade": 5,
    "question": "A good citizen is expected to participate in which of the following civic duties?",
    "options": {
      "A": "Ignoring the law.",
      "B": "Respecting the rights of others.",
      "C": "Wasting water and electricity.",
      "D": "Littering the environment."
    },
    "correctAnswer": "B",
    "explanation": "Respecting the rights, feelings, and property of others is a fundamental duty of a responsible citizen."
  },
  {
    "id": 138,
    "subject": "CRE",
    "grade": 5,
    "question": "Which term best describes the agreement between God and humanity, as seen in the story of Noah and the rainbow?",
    "options": {
      "A": "Treaty",
      "B": "Covenant",
      "C": "Law",
      "D": "Prophecy"
    },
    "correctAnswer": "B",
    "explanation": "A covenant is a formal, solemn, and binding agreement. God's promise to never again destroy the earth by flood is known as the Noahic Covenant."
  },
  {
    "id": 139,
    "subject": "Agriculture",
    "grade": 5,
    "question": "What is the name for the small, temporary structure used to grow seedlings before transplanting them to the main field?",
    "options": {
      "A": "Shed",
      "B": "Silo",
      "C": "Seedbed/Nursery",
      "D": "Barn"
    },
    "correctAnswer": "C",
    "explanation": "A seedbed or nursery is a small area specially prepared for raising young plants (seedlings) until they are ready for permanent transplanting."
  },
  {
    "id": 140,
    "subject": "Music",
    "grade": 5,
    "question": "Which of these is a traditional Kenyan instrument made from a gourd and beads/shells, used for rhythmic accompaniment?",
    "options": {
      "A": "Guitar",
      "B": "Flute",
      "C": "Shaker/Isikuti",
      "D": "Trumpet"
    },
    "correctAnswer": "C",
    "explanation": "Many African instruments, including those in Kenya (like the Isikuti or various rattles/shakers), are classified as percussion and made from gourds, wood, or other natural materials."
  },
  {
    "id": 141,
    "subject": "Home Science",
    "grade": 5,
    "question": "A balanced diet should contain foods mainly from which of the following groups?",
    "options": {
      "A": "Only fats and oils.",
      "B": "Only proteins.",
      "C": "All food groups (carbohydrates, proteins, vitamins, minerals, fats).",
      "D": "Only sweet foods."
    },
    "correctAnswer": "C",
    "explanation": "A balanced diet includes foods from all the major food groups in the right proportions to provide all necessary nutrients."
  },
  {
    "id": 142,
    "subject": "Physical & Health Education (PHE)",
    "grade": 5,
    "question": "What is the primary benefit of good hygiene, such as daily bathing and brushing teeth?",
    "options": {
      "A": "To save water.",
      "B": "To ensure better sleep.",
      "C": "To prevent illness and feel good about oneself.",
      "D": "To avoid paying medical bills."
    },
    "correctAnswer": "C",
    "explanation": "Good hygiene is crucial for preventing the spread of germs and infection, which leads to better health and improves self-esteem."
  },
  {
    "id": 143,
    "subject": "ICT/Computer Studies",
    "grade": 5,
    "question": "Which key on a keyboard is used to erase a character to the left of the cursor?",
    "options": {
      "A": "Enter key",
      "B": "Spacebar",
      "C": "Backspace key",
      "D": "Shift key"
    },
    "correctAnswer": "C",
    "explanation": "The Backspace key is used to delete the character immediately to the left of the typing cursor."
  },
  {
    "id": 144,
    "subject": "Mathematics",
    "grade": 6,
    "question": "Convert the mixed number $2 \\frac{1}{5}$ to an improper fraction.",
    "options": {
      "A": "$11/5$",
      "B": "$3/5$",
      "C": "$2/5$",
      "D": "$10/5$"
    },
    "correctAnswer": "A",
    "explanation": "Multiply the whole number by the denominator: $2 \\times 5 = 10$. Add the numerator: $10 + 1 = 11$. Place over the denominator: $11/5$."
  },
  {
    "id": 145,
    "subject": "English",
    "grade": 6,
    "question": "Identify the degree of comparison of the adjective in the phrase: 'The **highest** mountain.'",
    "options": {
      "A": "Positive degree",
      "B": "Comparative degree",
      "C": "Superlative degree",
      "D": "Adverbial degree"
    },
    "correctAnswer": "C",
    "explanation": "The superlative degree (ending in -est or using 'most') is used to compare three or more things, indicating the maximum degree."
  },
  {
    "id": 146,
    "subject": "Kiswahili",
    "grade": 6,
    "question": "Chagua neno lenye maana kinyume cha 'anza'.",
    "options": {
      "A": "Kimbia",
      "B": "Maliza",
      "C": "Sema",
      "D": "Kuja"
    },
    "correctAnswer": "B",
    "explanation": "Neno 'anza' (to start/begin) kinyume chake ni 'maliza' (to finish/end)."
  },
  {
    "id": 147,
    "subject": "Science & Technology",
    "grade": 6,
    "question": "Which simple machine uses a stiff bar and a fulcrum to multiply force or change direction, such as a see-saw?",
    "options": {
      "A": "Inclined plane",
      "B": "Lever",
      "C": "Pulley",
      "D": "Wheel and axle"
    },
    "correctAnswer": "B",
    "explanation": "A lever is a simple machine consisting of a beam or rigid rod pivoted at a fixed hinge or fulcrum."
  },
  {
    "id": 148,
    "subject": "Social Studies",
    "grade": 6,
    "question": "What is the main physical feature that stretches from the Middle East through East Africa and contains many lakes and volcanoes?",
    "options": {
      "A": "Mount Kenya",
      "B": "Great Rift Valley",
      "C": "Lake Victoria",
      "D": "Tana River"
    },
    "correctAnswer": "B",
    "explanation": "The Great Rift Valley is a continuous geographic trench that runs through East Africa and is characterized by lakes and volcanic activity."
  },
  {
    "id": 149,
    "subject": "CRE",
    "grade": 6,
    "question": "The three gifts brought by the Wise Men (Magi) to baby Jesus were Gold, Frankincense, and:",
    "options": {
      "A": "Silver",
      "B": "Myrrh",
      "C": "Spices",
      "D": "Cloth"
    },
    "correctAnswer": "B",
    "explanation": "The Gospel of Matthew mentions the three gifts as gold, frankincense, and myrrh."
  },
  {
    "id": 150,
    "subject": "Agriculture",
    "grade": 6,
    "question": "The main component of animal feed that promotes fast growth and muscle development in young animals is:",
    "options": {
      "A": "Water",
      "B": "Fibre",
      "C": "Carbohydrates",
      "D": "Proteins"
    },
    "correctAnswer": "D",
    "explanation": "Proteins are the essential nutrient for building and repairing muscle, tissue, and promoting growth in animals."
  },
  {
    "id": 151,
    "subject": "Music",
    "grade": 6,
    "question": "In a piece of music, the symbol $\\mathbf{f}$ (forte) indicates a dynamic marking of:",
    "options": {
      "A": "Soft",
      "B": "Loud",
      "C": "Medium",
      "D": "Fast"
    },
    "correctAnswer": "B",
    "explanation": "Forte is an Italian musical term for dynamics that means 'loud' or 'strong'."
  },
  {
    "id": 152,
    "subject": "Home Science",
    "grade": 6,
    "question": "When storing foodstuffs, which method helps to prevent moisture uptake and attacks by weevils and other pests?",
    "options": {
      "A": "Storing in open sacks.",
      "B": "Storing in airtight containers.",
      "C": "Storing on the floor.",
      "D": "Storing next to kerosene."
    },
    "correctAnswer": "B",
    "explanation": "Airtight containers prevent moisture from entering and protect the food from pests, keeping it dry and safe."
  },
  {
    "id": 153,
    "subject": "Physical & Health Education (PHE)",
    "grade": 6,
    "question": "Which of the following is a key element of teamwork in physical education games?",
    "options": {
      "A": "Refusing to share equipment.",
      "B": "Blaming teammates for mistakes.",
      "C": "Communicating and cooperating with teammates.",
      "D": "Playing only for oneself."
    },
    "correctAnswer": "C",
    "explanation": "Communication and cooperation are essential for successful teamwork, enabling coordination and mutual support among players."
  },
  {
    "id": 154,
    "subject": "ICT/Computer Studies",
    "grade": 6,
    "question": "What is the function of the Recycle Bin in a computer's operating system?",
    "options": {
      "A": "To play video games.",
      "B": "To permanently delete all files.",
      "C": "To temporarily store deleted files.",
      "D": "To install new software."
    },
    "correctAnswer": "C",
    "explanation": "The Recycle Bin (or Trash) holds files that have been deleted, allowing them to be recovered before permanent removal."
  },
  {
    "id": 155,
    "subject": "Mathematics",
    "grade": 5,
    "question": "A packet contains 25 pencils. If a class needs 300 pencils in total, how many packets must be bought?",
    "options": {
      "A": "12",
      "B": "15",
      "C": "10",
      "D": "25"
    },
    "correctAnswer": "A",
    "explanation": "Divide the total number of pencils needed by the number of pencils per packet: $300 \\div 25 = 12$ packets."
  },
  {
    "id": 156,
    "subject": "English",
    "grade": 5,
    "question": "The plural form of the noun **child** is:",
    "options": {
      "A": "Childs",
      "B": "Children",
      "C": "Childen",
      "D": "Childses"
    },
    "correctAnswer": "B",
    "explanation": "The plural form of 'child' is an irregular plural noun, 'children'."
  },
  {
    "id": 157,
    "subject": "Kiswahili",
    "grade": 5,
    "question": "Kisawe cha neno **ghali** ni:",
    "options": {
      "A": "Ndefu",
      "B": "Bei rahisi",
      "C": "Thamani kubwa/Pesa nyingi",
      "D": "Fupi"
    },
    "correctAnswer": "C",
    "explanation": "Kisawe cha 'ghali' (expensive) ni kitu cha 'thamani kubwa' au kinachouzwa kwa 'pesa nyingi'."
  },
  {
    "id": 158,
    "subject": "Science & Technology",
    "grade": 5,
    "question": "Which process is responsible for the movement of air and is the basis of wind?",
    "options": {
      "A": "Radiation",
      "B": "Conduction",
      "C": "Convection",
      "D": "Insulation"
    },
    "correctAnswer": "C",
    "explanation": "Convection is the transfer of heat by the circulation or movement of a fluid (liquid or gas). In the atmosphere, warm air rises and cool air sinks, creating air currents (wind)."
  },
  {
    "id": 159,
    "subject": "Social Studies",
    "grade": 5,
    "question": "The first national leader of Kenya was:",
    "options": {
      "A": "Daniel Arap Moi",
      "B": "Jomo Kenyatta",
      "C": "Mwai Kibaki",
      "D": "Uhuru Kenyatta"
    },
    "correctAnswer": "B",
    "explanation": "Jomo Kenyatta was the first President of Kenya, serving from 1964 until his death in 1978."
  },
  {
    "id": 160,
    "subject": "CRE",
    "grade": 5,
    "question": "The story of the Prodigal Son primarily teaches us about God's:",
    "options": {
      "A": "Anger",
      "B": "Judgment",
      "C": "Forgiveness and love",
      "D": "Wealth"
    },
    "correctAnswer": "C",
    "explanation": "The parable of the Prodigal Son illustrates God's unconditional love, compassion, and willingness to forgive those who repent."
  },
  {
    "id": 161,
    "subject": "Agriculture",
    "grade": 5,
    "question": "Which type of plant is important for improving soil fertility by fixing nitrogen from the air into the soil?",
    "options": {
      "A": "Cereal crops (e.g., maize)",
      "B": "Tuber crops (e.g., potatoes)",
      "C": "Leguminous crops (e.g., beans, peas)",
      "D": "Vegetable crops (e.g., cabbage)"
    },
    "correctAnswer": "C",
    "explanation": "Leguminous plants (pulses) host nitrogen-fixing bacteria in their root nodules, which convert atmospheric nitrogen into a form usable by plants, naturally fertilizing the soil."
  },
  {
    "id": 162,
    "subject": "Music",
    "grade": 5,
    "question": "Which symbol is used to indicate silence for a certain duration in music notation?",
    "options": {
      "A": "Note",
      "B": "Staff",
      "C": "Rest",
      "D": "Clef"
    },
    "correctAnswer": "C",
    "explanation": "A rest is a musical notation symbol that indicates a period of silence in a piece of music."
  },
  {
    "id": 163,
    "subject": "Home Science",
    "grade": 5,
    "question": "What is the primary benefit of steaming vegetables compared to boiling them for a long time?",
    "options": {
      "A": "It makes them softer.",
      "B": "It saves electricity.",
      "C": "It helps to retain more nutrients and colour.",
      "D": "It adds more salt."
    },
    "correctAnswer": "C",
    "explanation": "Steaming cooks food with water vapour, minimizing the contact between the food and water, which reduces the loss of water-soluble vitamins and maintains colour."
  },
  {
    "id": 164,
    "subject": "Physical & Health Education (PHE)",
    "grade": 5,
    "question": "In the game of Rounders/Softball, what is the term for a successfully hit ball that allows the batter to run between posts?",
    "options": {
      "A": "Foul",
      "B": "Out",
      "C": "Rounder/Run",
      "D": "Strike"
    },
    "correctAnswer": "C",
    "explanation": "In Rounders, a 'rounder' is the term for a point scored when a player runs around all the bases after a successful hit."
  },
  {
    "id": 165,
    "subject": "ICT/Computer Studies",
    "grade": 5,
    "question": "The main screen that appears when a computer has finished starting up is called the:",
    "options": {
      "A": "Web page",
      "B": "Start Menu",
      "C": "Desktop",
      "D": "Control Panel"
    },
    "correctAnswer": "C",
    "explanation": "The Desktop is the main display area of the computer screen, containing icons, shortcuts, and the taskbar."
  },
  {
    "id": 166,
    "subject": "Mathematics",
    "grade": 6,
    "question": "Calculate the volume of a cuboid with length 10 cm, width 5 cm, and height 2 cm.",
    "options": {
      "A": "17 $\\text{cm}^3$",
      "B": "100 $\\text{cm}^3$",
      "C": "20 $\\text{cm}^3$",
      "D": "50 $\\text{cm}^3$"
    },
    "correctAnswer": "B",
    "explanation": "Volume of a cuboid = Length $\\times$ Width $\\times$ Height. $10 \\text{ cm} \\times 5 \\text{ cm} \\times 2 \\text{ cm} = 100 \\text{ cm}^3$."
  },
  {
    "id": 167,
    "subject": "English",
    "grade": 6,
    "question": "Which of the following sentences is in the passive voice?",
    "options": {
      "A": "The cat chased the mouse.",
      "B": "The mouse was chased by the cat.",
      "C": "The mouse ran away.",
      "D": "The cat is sleeping."
    },
    "correctAnswer": "B",
    "explanation": "In the passive voice, the subject (mouse) receives the action of the verb, and the sentence uses a form of 'to be' plus the past participle ('was chased')."
  },
  {
    "id": 168,
    "subject": "Kiswahili",
    "grade": 6,
    "question": "Chagua sentensi iliyo katika kauli ya kutenda (Active Voice).",
    "options": {
      "A": "Mlango ulifungwa na Peter.",
      "B": "Chakula kinaliwa.",
      "C": "Wanafunzi wamefanya kazi.",
      "D": "Mbwa huyo alionwa."
    },
    "correctAnswer": "C",
    "explanation": "Kauli ya kutenda (Active Voice) inaonyesha mtenda (Wanafunzi) akifanya kitendo moja kwa moja. Majibu mengine yako katika kauli ya kutendwa (Passive Voice)."
  },
  {
    "id": 169,
    "subject": "Science & Technology",
    "grade": 6,
    "question": "The process where plants make their own food using sunlight, water, and carbon dioxide is called:",
    "options": {
      "A": "Respiration",
      "B": "Transpiration",
      "C": "Photosynthesis",
      "D": "Germination"
    },
    "correctAnswer": "C",
    "explanation": "Photosynthesis is the process used by plants, algae and some bacteria to convert light energy, typically from the Sun, into chemical energy (food)."
  },
  {
    "id": 170,
    "subject": "Social Studies",
    "grade": 6,
    "question": "Which East African country shares its entire western border with Kenya?",
    "options": {
      "A": "Uganda",
      "B": "Tanzania",
      "C": "Ethiopia",
      "D": "Somalia"
    },
    "correctAnswer": "A",
    "explanation": "Uganda borders Kenya to the west, while Tanzania borders Kenya to the south, and Ethiopia/Somalia to the north/east respectively."
  },
  {
    "id": 171,
    "subject": "CRE",
    "grade": 6,
    "question": "Who was the first Christian martyr, stoned to death for preaching the Gospel in the book of Acts?",
    "options": {
      "A": "Peter",
      "B": "Paul",
      "C": "Stephen",
      "D": "Barnabas"
    },
    "correctAnswer": "C",
    "explanation": "Stephen was one of the seven deacons and is traditionally recognized as the first martyr of the Christian Church, as described in Acts 7."
  },
  {
    "id": 172,
    "subject": "Agriculture",
    "grade": 6,
    "question": "Which condition is necessary for seeds to germinate?",
    "options": {
      "A": "Complete darkness.",
      "B": "Very high temperatures (over 50°C).",
      "C": "Sufficient water, air, and warmth.",
      "D": "Presence of pests."
    },
    "correctAnswer": "C",
    "explanation": "Seeds require adequate moisture (water), oxygen (air), and a favourable temperature (warmth) to break dormancy and germinate."
  },
  {
    "id": 173,
    "subject": "Music",
    "grade": 6,
    "question": "A folk song usually tells a story, teaches a lesson, or is used to accompany a specific **...**.",
    "options": {
      "A": "Book",
      "B": "Ritual/Activity (e.g., harvesting)",
      "C": "Television show",
      "D": "Newspaper article"
    },
    "correctAnswer": "B",
    "explanation": "Folk songs are traditional songs often associated with communal work, rituals, ceremonies, or storytelling within a specific culture."
  },
  {
    "id": 174,
    "subject": "Home Science",
    "grade": 6,
    "question": "Why is it important to keep the floor clean and dry in the kitchen and bathroom?",
    "options": {
      "A": "To increase the temperature.",
      "B": "To prevent accidental slips and falls.",
      "C": "To attract rodents.",
      "D": "To make washing dishes easier."
    },
    "correctAnswer": "B",
    "explanation": "Wet or dirty floors are a major cause of slips, trips, and falls, especially in areas like kitchens and bathrooms."
  },
  {
    "id": 175,
    "subject": "Physical & Health Education (PHE)",
    "grade": 6,
    "question": "In the human body, ligaments are tissues that primarily connect:",
    "options": {
      "A": "Muscle to bone.",
      "B": "Bone to bone.",
      "C": "Muscle to muscle.",
      "D": "Nerve to muscle."
    },
    "correctAnswer": "B",
    "explanation": "Ligaments are tough, elastic bands of connective tissue that surround a joint to connect bone to bone, providing support and stability."
  },
  {
    "id": 176,
    "subject": "ICT/Computer Studies",
    "grade": 6,
    "question": "Which application software is primarily used to type, edit, and format documents like letters and reports?",
    "options": {
      "A": "Spreadsheet software (e.g., Excel)",
      "B": "Word processing software (e.g., MS Word)",
      "C": "Presentation software (e.g., PowerPoint)",
      "D": "Operating system (e.g., Windows)"
    },
    "correctAnswer": "B",
    "explanation": "Word processing software is designed for the production (including composition, editing, formatting, and printing) of text-based documents."
  },
  {
    "id": 177,
    "subject": "Mathematics",
    "grade": 5,
    "question": "What is the next number in the sequence: $1, 4, 9, 16, \dots$?",
    "options": {
      "A": "20",
      "B": "25",
      "C": "36",
      "D": "49"
    },
    "correctAnswer": "B",
    "explanation": "The sequence consists of square numbers: $1^2=1, 2^2=4, 3^2=9, 4^2=16$. The next is $5^2=25$."
  },
  {
    "id": 178,
    "subject": "English",
    "grade": 5,
    "question": "Identify the proper noun in the sentence: 'My friend **Susan** lives in **Nairobi**.'",
    "options": {
      "A": "Friend",
      "B": "Lives",
      "C": "My",
      "D": "Susan and Nairobi"
    },
    "correctAnswer": "D",
    "explanation": "Proper nouns name specific people, places, or things and are always capitalized. 'Susan' and 'Nairobi' are specific names."
  },
  {
    "id": 179,
    "subject": "Kiswahili",
    "grade": 5,
    "question": "Neno gani kati ya haya lina maana ya kitendawili (riddle)?",
    "options": {
      "A": "Hadithi",
      "B": "Shairi",
      "C": "Fumbo",
      "D": "Utendi"
    },
    "correctAnswer": "C",
    "explanation": "Kitendawili ni mfano wa fasihi simulizi. Neno 'fumbo' (puzzle/riddle) ni kisawe cha kitendawili."
  },
  {
    "id": 180,
    "subject": "Science & Technology",
    "grade": 5,
    "question": "Which of these devices converts electrical energy into light and heat energy?",
    "options": {
      "A": "Electric motor",
      "B": "Dry cell battery",
      "C": "Electric bulb/lamp",
      "D": "Speaker"
    },
    "correctAnswer": "C",
    "explanation": "An electric bulb uses electricity to produce light (and heat, especially in incandescent bulbs)."
  },
  {
    "id": 181,
    "subject": "Social Studies",
    "grade": 5,
    "question": "A resource that can be used again and again without being permanently depleted is known as a **...** resource.",
    "options": {
      "A": "Non-renewable",
      "B": "Renewable",
      "C": "Mineral",
      "D": "Fossil fuel"
    },
    "correctAnswer": "B",
    "explanation": "Renewable resources (like solar energy, wind, water) can be naturally replenished in a short period of time."
  },
  {
    "id": 182,
    "subject": "CRE",
    "grade": 5,
    "question": "Which character in the Old Testament was known for his great strength, derived from his long hair, before he was betrayed?",
    "options": {
      "A": "Goliath",
      "B": "Samson",
      "C": "Saul",
      "D": "David"
    },
    "correctAnswer": "B",
    "explanation": "Samson's extraordinary strength was connected to his vow (Nazirite vow) not to cut his hair (Judges 13-16)."
  },
  {
    "id": 183,
    "subject": "Agriculture",
    "grade": 5,
    "question": "What is the process of removing unwanted, excess shoots or buds from a growing crop plant?",
    "options": {
      "A": "Pruning",
      "B": "Transplanting",
      "C": "Harvesting",
      "D": "Irrigation"
    },
    "correctAnswer": "A",
    "explanation": "Pruning is the selective removal of plant parts (branches, buds, roots) to promote growth, improve shape, or remove dead wood."
  },
  {
    "id": 184,
    "subject": "Music",
    "grade": 5,
    "question": "In the solfa notation, what is the first note of the scale (Do, Re, Mi...)?",
    "options": {
      "A": "Re",
      "B": "Mi",
      "C": "Do",
      "D": "Fa"
    },
    "correctAnswer": "C",
    "explanation": "The solfa notation (Solfège) uses the syllable 'Do' as the starting note (Tonic) of the major scale."
  },
  {
    "id": 185,
    "subject": "Home Science",
    "grade": 5,
    "question": "To save energy when cooking, one should use a cooking pot that is the same size as the **...**.",
    "options": {
      "A": "Oven",
      "B": "Table",
      "C": "Stove/Burner",
      "D": "Spoon"
    },
    "correctAnswer": "C",
    "explanation": "Using a pot or pan that matches the size of the stove burner prevents heat from escaping around the edges, maximizing heat transfer and saving energy."
  },
  {
    "id": 186,
    "subject": "Physical & Health Education (PHE)",
    "grade": 5,
    "question": "Which sports kit is most appropriate for a football (soccer) match?",
    "options": {
      "A": "Swimsuit and goggles.",
      "B": "Tight jeans and a sweater.",
      "C": "Shorts, jersey, and shin guards.",
      "D": "Heavy jacket and boots."
    },
    "correctAnswer": "C",
    "explanation": "Soccer requires flexible clothing (shorts, jersey) and protective gear like shin guards for safety."
  },
  {
    "id": 187,
    "subject": "ICT/Computer Studies",
    "grade": 5,
    "question": "What is the process of putting data into a computer called?",
    "options": {
      "A": "Processing",
      "B": "Output",
      "C": "Input",
      "D": "Storage"
    },
    "correctAnswer": "C",
    "explanation": "Input is the process of feeding data or commands into a computer system using input devices like a keyboard or mouse."
  },
  {
    "id": 188,
    "subject": "Mathematics",
    "grade": 6,
    "question": "Calculate the average (mean) of the following numbers: 10, 15, 20, 25, 30.",
    "options": {
      "A": "15",
      "B": "20",
      "C": "25",
      "D": "100"
    },
    "correctAnswer": "B",
    "explanation": "Sum of numbers: $10 + 15 + 20 + 25 + 30 = 100$. Number of items: 5. Average = $100 \\div 5 = 20$."
  },
  {
    "id": 189,
    "subject": "English",
    "grade": 6,
    "question": "Which of the following is an example of an exclamation?",
    "options": {
      "A": "The sun is hot today.",
      "B": "How old are you?",
      "C": "Stop that noise!",
      "D": "They walked to the river."
    },
    "correctAnswer": "C",
    "explanation": "An exclamation is a sudden cry or remark, especially expressing surprise, anger, or pain, and is typically marked by an exclamation mark (!)."
  },
  {
    "id": 190,
    "subject": "Kiswahili",
    "grade": 6,
    "question": "Kamilisha kwa usahihi: 'Mwalimu **...** anafundisha vizuri sana.'",
    "options": {
      "A": "Wetangu",
      "B": "Wangu",
      "C": "Yangu",
      "D": "Langu"
    },
    "correctAnswer": "B",
    "explanation": "Kiambishi cha uyakinishi wa umiliki 'Wangu' (My) huafikiana na nomino 'Mwalimu' (ngeli ya A-WA) katika umoja."
  },
  {
    "id": 191,
    "subject": "Science & Technology",
    "grade": 6,
    "question": "The three main components of a fire (the 'Fire Triangle') are fuel, heat, and **...**.",
    "options": {
      "A": "Water",
      "B": "Smoke",
      "C": "Oxygen/Air",
      "D": "Carbon Dioxide"
    },
    "correctAnswer": "C",
    "explanation": "For a fire to burn, it requires three elements: fuel (something to burn), heat (to raise the temperature), and oxygen (to support combustion)."
  },
  {
    "id": 192,
    "subject": "Social Studies",
    "grade": 6,
    "question": "What does the green colour on the Kenyan national flag primarily represent?",
    "options": {
      "A": "The blood shed during the struggle.",
      "B": "Peace and unity.",
      "C": "Natural wealth and land.",
      "D": "The black people of Kenya."
    },
    "correctAnswer": "C",
    "explanation": "The colour green symbolizes the natural wealth, land, and resources of Kenya."
  },
  {
    "id": 193,
    "subject": "CRE",
    "grade": 6,
    "question": "Which apostle was known for initially doubting the resurrection of Jesus until he saw and touched Jesus' wounds?",
    "options": {
      "A": "Peter",
      "B": "John",
      "C": "Thomas",
      "D": "Matthew"
    },
    "correctAnswer": "C",
    "explanation": "Thomas, often called 'Doubting Thomas,' famously refused to believe Jesus had risen until he personally examined the wounds (John 20:24-29)."
  },
  {
    "id": 194,
    "subject": "Agriculture",
    "grade": 6,
    "question": "Which animal disease is caused by ticks and is characterized by high fever, weight loss, and often red urine (redwater fever)?",
    "options": {
      "A": "Foot and Mouth Disease (FMD)",
      "B": "East Coast Fever (ECF)",
      "C": "Contagious Bovine Pleuropneumonia (CBPP)",
      "D": "Rift Valley Fever (RVF)"
    },
    "correctAnswer": "B",
    "explanation": "East Coast Fever (Theileriosis) is a deadly disease of cattle, transmitted by ticks, causing severe sickness and often death in susceptible animals."
  },
  {
    "id": 195,
    "subject": "Music",
    "grade": 6,
    "question": "What is the name for the wooden instrument with metal keys (lamellae) that are plucked with the thumbs, common in East Africa?",
    "options": {
      "A": "Guitar",
      "B": "Saxophone",
      "C": "Thumb Piano/Kalimba/Mbira",
      "D": "Drum kit"
    },
    "correctAnswer": "C",
    "explanation": "The Thumb Piano, or Kalimba/Mbira, is an idiophone (instrument that vibrates to produce sound) that is played by plucking the metal tines with the thumbs."
  },
  {
    "id": 196,
    "subject": "Home Science",
    "grade": 6,
    "question": "When storing cleaned utensils, why should the drinking cups/glasses be placed upside down?",
    "options": {
      "A": "To save space in the cupboard.",
      "B": "To ensure they dry faster.",
      "C": "To prevent dust and insects from entering.",
      "D": "To avoid cracking the rims."
    },
    "correctAnswer": "C",
    "explanation": "Placing cups upside down is a hygienic practice that prevents airborne contaminants like dust and insects from settling inside the drinking surface."
  },
  {
    "id": 197,
    "subject": "Physical & Health Education (PHE)",
    "grade": 6,
    "question": "During a basketball game, dribbling the ball involves:",
    "options": {
      "A": "Carrying the ball with two hands.",
      "B": "Kicking the ball up the court.",
      "C": "Bouncing the ball continuously with one hand.",
      "D": "Throwing the ball over the opponent's head."
    },
    "correctAnswer": "C",
    "explanation": "Dribbling in basketball is the continuous, controlled bouncing of the ball using one hand at a time while moving."
  },
  {
    "id": 198,
    "subject": "ICT/Computer Studies",
    "grade": 6,
    "question": "In a web browser, what is the purpose of the 'Back' button?",
    "options": {
      "A": "To refresh the current page.",
      "B": "To go to the previous web page viewed.",
      "C": "To search for a new topic.",
      "D": "To print the current page."
    },
    "correctAnswer": "B",
    "explanation": "The 'Back' button navigates the user to the last page they visited in their browsing history."
  },
  {
    "id": 199,
    "subject": "Mathematics",
    "grade": 5,
    "question": "Calculate: $15 \\times (8 - 3)$.",
    "options": {
      "A": "15",
      "B": "75",
      "C": "120",
      "D": "12"
    },
    "correctAnswer": "B",
    "explanation": "Follow the order of operations (BODMAS/PEMDAS). First, calculate the bracket: $8 - 3 = 5$. Then multiply: $15 \\times 5 = 75$."
  },
  {
    "id": 200,
    "subject": "English",
    "grade": 5,
    "question": "Which sentence uses the correct form of 'there,' 'their,' or 'they're'?",
    "options": {
      "A": "Their going to the park.",
      "B": "The students left there books.",
      "C": "They're playing over there.",
      "D": "The dog ate they're bone."
    },
    "correctAnswer": "C",
    "explanation": "They're (they are) playing over there (location). 'There' indicates location, and 'They're' is the contraction for 'They are'."
  },
  {
    "id": 201,
    "subject": "Kiswahili",
    "grade": 5,
    "question": "Chagua neno lenye maana kinyume cha 'mgeni'.",
    "options": {
      "A": "Mgeni",
      "B": "Rafiki",
      "C": "Mwenyeji",
      "D": "Ndugu"
    },
    "correctAnswer": "C",
    "explanation": "'Mgeni' (guest/foreigner) kinyume chake ni 'mwenyeji' (host/local resident)."
  },
  {
    "id": 202,
    "subject": "Science & Technology",
    "grade": 5,
    "question": "The primary role of the kidney in the human body is to:",
    "options": {
      "A": "Pump blood around the body.",
      "B": "Filter waste products from the blood and produce urine.",
      "C": "Help in breathing.",
      "D": "Digest food."
    },
    "correctAnswer": "B",
    "explanation": "The kidneys are vital organs that filter blood to remove waste products, excess water, and other substances, which are then excreted as urine."
  },
  {
    "id": 203,
    "subject": "Social Studies",
    "grade": 5,
    "question": "Which of these is a major cause of deforestation (cutting down of trees) in Kenya?",
    "options": {
      "A": "Setting up game reserves.",
      "B": "Construction of roads.",
      "C": "Clearing forests for farming and settlement.",
      "D": "Protecting water catchment areas."
    },
    "correctAnswer": "C",
    "explanation": "Expansion of agriculture and human settlements are the leading drivers of forest loss in Kenya and globally."
  },
  {
    "id": 204,
    "subject": "CRE",
    "grade": 5,
    "question": "Jesus taught his disciples to pray by giving them the example of the **...**.",
    "options": {
      "A": "Psalms",
      "B": "Sermon on the Mount",
      "C": "Lord's Prayer ('Our Father')",
      "D": "Ten Commandments"
    },
    "correctAnswer": "C",
    "explanation": "The Lord's Prayer (Pater Noster) is the prayer Jesus taught his disciples when they asked him how to pray (Matthew 6:9-13)."
  },
  {
    "id": 205,
    "subject": "Agriculture",
    "grade": 5,
    "question": "Which term describes the practice of providing extra water to crops when rainfall is insufficient?",
    "options": {
      "A": "Drainage",
      "B": "Weeding",
      "C": "Irrigation",
      "D": "Fumigation"
    },
    "correctAnswer": "C",
    "explanation": "Irrigation is the artificial application of water to land or soil to assist in the growing of agricultural crops."
  },
  {
    "id": 206,
    "subject": "Music",
    "grade": 5,
    "question": "A **...** instrument produces sound primarily through the vibration of a stretched string, such as a guitar or violin.",
    "options": {
      "A": "Percussion",
      "B": "Brass",
      "C": "String",
      "D": "Woodwind"
    },
    "correctAnswer": "C",
    "explanation": "String instruments (chordophones) create sound by the vibration of strings stretched between two points."
  },
  {
    "id": 207,
    "subject": "Home Science",
    "grade": 5,
    "question": "What is the primary characteristic of a first aid kit for home use?",
    "options": {
      "A": "It should contain only pain killers.",
      "B": "It should be kept locked away and hidden.",
      "C": "It should be clearly labelled, easily accessible, and well-stocked.",
      "D": "It should only contain food supplies."
    },
    "correctAnswer": "C",
    "explanation": "A first aid kit must be immediately available (accessible) and clearly identifiable for use in an emergency, containing necessary supplies."
  },
  {
    "id": 208,
    "subject": "Physical & Health Education (PHE)",
    "grade": 5,
    "question": "Which disease is NOT prevented by proper hygiene and sanitation practices?",
    "options": {
      "A": "Cholera",
      "B": "Typhoid",
      "C": "Flu (influenza)",
      "D": "Fractures (broken bones)"
    },
    "correctAnswer": "D",
    "explanation": "Cholera, Typhoid, and the flu are often spread through poor sanitation and hygiene. Fractures are physical injuries caused by trauma, not pathogens."
  },
  {
    "id": 209,
    "subject": "ICT/Computer Studies",
    "grade": 5,
    "question": "Which of these is the safest password to use for online accounts?",
    "options": {
      "A": "123456",
      "B": "Your pet's name",
      "C": "Password",
      "D": "A mix of letters, numbers, and symbols"
    },
    "correctAnswer": "D",
    "explanation": "Strong passwords should be complex, combining uppercase and lowercase letters, numbers, and symbols to make them difficult to guess."
  },
  {
    "id": 210,
    "subject": "Mathematics",
    "grade": 6,
    "question": "What is the size of the angle shown by the minute hand of a clock moving from 12 to 3?",
    "options": {
      "A": "$45^{\\circ}$",
      "B": "$90^{\\circ}$",
      "C": "$180^{\\circ}$",
      "D": "$270^{\\circ}$"
    },
    "correctAnswer": "B",
    "explanation": "Moving from 12 to 3 is a quarter turn of the circle. $360^{\\circ} \\div 4 = 90^{\\circ}$ (a right angle)."
  },
  {
    "id": 211,
    "subject": "English",
    "grade": 6,
    "question": "Choose the correct form of the verb to complete the sentence: 'The whole class **(is/are)** excited for the trip.'",
    "options": {
      "A": "Are",
      "B": "Is",
      "C": "Be",
      "D": "Been"
    },
    "correctAnswer": "B",
    "explanation": "'Class' is a collective noun, which is treated as a single unit in this context, requiring the singular verb 'is'."
  },
  {
    "id": 212,
    "subject": "Kiswahili",
    "grade": 6,
    "question": "Kamilisha kifungu: 'Mwenda **pole** hajikwai, akijikwaa haanguki.'",
    "options": {
      "A": "Haraka",
      "B": "Pole",
      "C": "Wema",
      "D": "Mbali"
    },
    "correctAnswer": "B",
    "explanation": "Methali kamili ni: 'Mwenda **pole** hajikwai, akijikwaa haanguki.' Inamaanisha kufanya mambo kwa uangalifu huleta matokeo mazuri."
  },
  {
    "id": 213,
    "subject": "Science & Technology",
    "grade": 6,
    "question": "Which part of the flower attracts insects and birds for pollination?",
    "options": {
      "A": "Pistil",
      "B": "Stamen",
      "C": "Petals",
      "D": "Sepals"
    },
    "correctAnswer": "C",
    "explanation": "Petals are often brightly coloured and scented to attract pollinators like bees, birds, and insects."
  },
  {
    "id": 214,
    "subject": "Social Studies",
    "grade": 6,
    "question": "The main reason for conducting a national population census is to:",
    "options": {
      "A": "Count the number of animals in the country.",
      "B": "Determine the amount of rain that falls.",
      "C": "Collect data for planning and resource allocation.",
      "D": "Elect new political leaders."
    },
    "correctAnswer": "C",
    "explanation": "A census provides crucial demographic, social, and economic data used by the government for development planning, policy formulation, and equitable resource allocation."
  },
  {
    "id": 215,
    "subject": "CRE",
    "grade": 6,
    "question": "The three cardinal virtues often taught in Christianity are Faith, Hope, and **...**.",
    "options": {
      "A": "Pride",
      "B": "Anger",
      "C": "Love/Charity",
      "D": "Greed"
    },
    "correctAnswer": "C",
    "explanation": "The three theological virtues mentioned by Paul in 1 Corinthians 13:13 are faith, hope, and love (charity), with love being the greatest."
  },
  {
    "id": 216,
    "subject": "Agriculture",
    "grade": 6,
    "question": "Which of these is a non-chemical method of controlling pests on crops?",
    "options": {
      "A": "Using an insecticide spray.",
      "B": "Removing and crushing the pests by hand.",
      "C": "Applying fertilizer.",
      "D": "Irrigating the crops."
    },
    "correctAnswer": "B",
    "explanation": "Handpicking and destroying pests is a non-chemical (cultural/manual) method of pest control. Insecticides are chemical control."
  },
  {
    "id": 217,
    "subject": "Music",
    "grade": 6,
    "question": "In a musical score, what is the effect of a sharp ($\\#$) symbol placed before a note?",
    "options": {
      "A": "To lower the pitch of the note by a semitone.",
      "B": "To raise the pitch of the note by a semitone.",
      "C": "To cancel a previous sharp or flat.",
      "D": "To increase the duration of the note."
    },
    "correctAnswer": "B",
    "explanation": "A sharp ($\\#$) is an accidental symbol that raises the pitch of the note immediately following it by one semitone (half step)."
  },
  {
    "id": 218,
    "subject": "Home Science",
    "grade": 6,
    "question": "Which of the following is an example of a good saving habit?",
    "options": {
      "A": "Buying everything you see.",
      "B": "Spending all your pocket money immediately.",
      "C": "Putting aside a portion of money regularly in a secure place.",
      "D": "Borrowing money frequently."
    },
    "correctAnswer": "C",
    "explanation": "Saving involves setting aside money for future use. Putting aside a portion regularly builds this habit."
  },
  {
    "id": 219,
    "subject": "Physical & Health Education (PHE)",
    "grade": 6,
    "question": "What is the main danger of consuming illicit drugs and substances?",
    "options": {
      "A": "It makes you sleep better.",
      "B": "It improves school performance.",
      "C": "It causes serious health problems, addiction, and social issues.",
      "D": "It makes you very strong physically."
    },
    "correctAnswer": "C",
    "explanation": "Substance abuse is associated with severe risks, including physical and mental health decline, addiction, legal problems, and social instability."
  },
  {
    "id": 220,
    "subject": "ICT/Computer Studies",
    "grade": 6,
    "question": "In a word processing document, the function used to copy text from one location to another without deleting the original text is:",
    "options": {
      "A": "Cut",
      "B": "Paste",
      "C": "Copy",
      "D": "Undo"
    },
    "correctAnswer": "C",
    "explanation": "The 'Copy' function creates a duplicate of the selected text and places it on the clipboard, leaving the original text intact."
  },
  {
    "id": 221,
    "subject": "Mathematics",
    "grade": 5,
    "question": "Calculate the area of a square with a side length of $9 \text{ cm}$.",
    "options": {
      "A": "36 $\\text{cm}^2$",
      "B": "81 $\\text{cm}^2$",
      "C": "18 $\\text{cm}^2$",
      "D": "9 $\\text{cm}^2$"
    },
    "correctAnswer": "B",
    "explanation": "Area of a square = Side $\\times$ Side. $9 \\text{ cm} \\times 9 \\text{ cm} = 81 \\text{ cm}^2$."
  },
  {
    "id": 222,
    "subject": "English",
    "grade": 5,
    "question": "Identify the common noun in the sentence: 'The beautiful **river** flows gently.'",
    "options": {
      "A": "Beautiful",
      "B": "River",
      "C": "Flows",
      "D": "Gently"
    },
    "correctAnswer": "B",
    "explanation": "A common noun refers to a general class of people, places, or things. 'River' is a general name for a body of water."
  },
  {
    "id": 223,
    "subject": "Kiswahili",
    "grade": 5,
    "question": "Kamilisha usemi wa heshima: 'Wewe ni **...** sana.'",
    "options": {
      "A": "Mwerevu",
      "B": "Mjinga",
      "C": "Mtukutu",
      "D": "Mwovu"
    },
    "correctAnswer": "A",
    "explanation": "Kusifia mtu kwa 'mwerevu' (clever/intelligent) ni ishara ya kumheshimu, tofauti na matusi ('mjinga,' 'mtukutu,' 'mwovu')."
  },
  {
    "id": 224,
    "subject": "Science & Technology",
    "grade": 5,
    "question": "What is the name given to animals that eat both plants and meat?",
    "options": {
      "A": "Herbivores",
      "B": "Carnivores",
      "C": "Omnivores",
      "D": "Producers"
    },
    "correctAnswer": "C",
    "explanation": "Omnivores are animals whose diet consists of both plants and animal matter."
  },
  {
    "id": 225,
    "subject": "Social Studies",
    "grade": 5,
    "question": "The process where goods and services are exchanged for money is called:",
    "options": {
      "A": "Manufacturing",
      "B": "Farming",
      "C": "Trade/Commerce",
      "D": "Mining"
    },
    "correctAnswer": "C",
    "explanation": "Trade or Commerce involves the buying and selling of goods and services."
  },
  {
    "id": 226,
    "subject": "CRE",
    "grade": 5,
    "question": "Which Old Testament figure was swallowed by a great fish after trying to run away from God's command to preach to Nineveh?",
    "options": {
      "A": "Elisha",
      "B": "Jeremiah",
      "C": "Jonah",
      "D": "Daniel"
    },
    "correctAnswer": "C",
    "explanation": "The story of Jonah and the great fish is recounted in the book of Jonah (Jonah 1:17)."
  },
  {
    "id": 227,
    "subject": "Agriculture",
    "grade": 5,
    "question": "Which simple tool is most suitable for cutting soft materials like grass and small weeds in a garden bed?",
    "options": {
      "A": "Axe",
      "B": "Jembe (Hoe)",
      "C": "Sickle/Slasher",
      "D": "Plough"
    },
    "correctAnswer": "C",
    "explanation": "A sickle or slasher has a curved blade used for cutting tall grass and small weeds, especially when harvesting or clearing light brush."
  },
  {
    "id": 228,
    "subject": "Music",
    "grade": 5,
    "question": "The main role of the conductor in an orchestra or choir is to:",
    "options": {
      "A": "Play the loudest instrument.",
      "B": "Collect the money from the audience.",
      "C": "Direct the musicians and interpret the music.",
      "D": "Sing all the solo parts."
    },
    "correctAnswer": "C",
    "explanation": "A conductor leads the performance, coordinating the tempo, dynamics, and expression of the musical piece."
  },
  {
    "id": 229,
    "subject": "Home Science",
    "grade": 5,
    "question": "What is the immediate action to take when a child burns their hand with hot water?",
    "options": {
      "A": "Apply toothpaste or oil.",
      "B": "Cover the burn tightly with a dry bandage.",
      "C": "Run cold water over the burn for at least 10 minutes.",
      "D": "Pop any blisters that form."
    },
    "correctAnswer": "C",
    "explanation": "Cooling the burn with clean, cool (not ice-cold) running water immediately stops the burning process and reduces tissue damage and pain."
  },
  {
    "id": 230,
    "subject": "Physical & Health Education (PHE)",
    "grade": 5,
    "question": "Which of these is a non-contact sport?",
    "options": {
      "A": "Rugby",
      "B": "Boxing",
      "C": "Swimming",
      "D": "Wrestling"
    },
    "correctAnswer": "C",
    "explanation": "Swimming is a non-contact sport, meaning players do not come into direct physical contact with opponents as part of the game."
  },
  {
    "id": 231,
    "subject": "ICT/Computer Studies",
    "grade": 5,
    "question": "The physical parts of a computer system, such as the monitor and keyboard, are collectively called:",
    "options": {
      "A": "Software",
      "B": "Data",
      "C": "Hardware",
      "D": "Programs"
    },
    "correctAnswer": "C",
    "explanation": "Hardware refers to the tangible, physical components of a computer system."
  },
  {
    "id": 232,
    "subject": "Mathematics",
    "grade": 6,
    "question": "Convert $0.45$ into a percentage.",
    "options": {
      "A": "0.45%",
      "B": "4.5%",
      "C": "45%",
      "D": "450%"
    },
    "correctAnswer": "C",
    "explanation": "To convert a decimal to a percentage, multiply by 100: $0.45 \\times 100 = 45\%$."
  },
  {
    "id": 233,
    "subject": "English",
    "grade": 6,
    "question": "Which prefix can be added to the word 'happy' to mean the opposite?",
    "options": {
      "A": "Re-",
      "B": "Un-",
      "C": "Dis-",
      "D": "Mis-"
    },
    "correctAnswer": "B",
    "explanation": "The prefix 'un-' means 'not' or 'opposite of', making 'unhappy' the opposite of 'happy'."
  },
  {
    "id": 234,
    "subject": "Kiswahili",
    "grade": 6,
    "question": "Taja sehemu ya hotuba yenye jina la kitenzi (verbal noun) katika sentensi: '**Kusoma** kwake kumenifurahisha.'",
    "options": {
      "A": "Kwake",
      "B": "Kusoma",
      "C": "Kumenifurahisha",
      "D": "Mimi"
    },
    "correctAnswer": "B",
    "explanation": "Jina la kitenzi (Infinitive) huanza na kiambishi 'ku-' na hutumika kama nomino katika sentensi. Hapa, 'Kusoma' hutumika kama nomino/kiini (subject)."
  },
  {
    "id": 235,
    "subject": "Science & Technology",
    "grade": 6,
    "question": "A substance that dissolves completely in water is described as:",
    "options": {
      "A": "Insoluble",
      "B": "Floating",
      "C": "Submerged",
      "D": "Soluble"
    },
    "correctAnswer": "D",
    "explanation": "Soluble substances dissolve in a solvent (like water) to form a solution."
  },
  {
    "id": 236,
    "subject": "Social Studies",
    "grade": 6,
    "question": "Which of these is a major responsibility of a County Governor in Kenya?",
    "options": {
      "A": "Chairing the National Assembly.",
      "B": "Leading the National Security Council.",
      "C": "Overseeing the county's executive functions and development.",
      "D": "Interpreting the Constitution."
    },
    "correctAnswer": "C",
    "explanation": "The Governor is the chief executive officer of the county, responsible for the implementation of county legislation and managing its administration and development."
  },
  {
    "id": 237,
    "subject": "CRE",
    "grade": 6,
    "question": "What is the primary significance of the empty tomb for Christians?",
    "options": {
      "A": "It proved that Jesus was human.",
      "B": "It confirmed the resurrection of Jesus Christ.",
      "C": "It showed that the disciples stole the body.",
      "D": "It marked the end of the world."
    },
    "correctAnswer": "B",
    "explanation": "The empty tomb is the central evidence and symbol of Jesus' bodily resurrection from the dead."
  },
  {
    "id": 238,
    "subject": "Agriculture",
    "grade": 6,
    "question": "What is the main role of manure (animal waste) when applied to crops?",
    "options": {
      "A": "To repel pests.",
      "B": "To increase the soil's water-holding capacity and provide nutrients.",
      "C": "To compact the soil.",
      "D": "To increase soil acidity."
    },
    "correctAnswer": "B",
    "explanation": "Manure, an organic fertilizer, improves soil structure (water retention) and provides essential nutrients for plant growth."
  },
  {
    "id": 239,
    "subject": "Music",
    "grade": 6,
    "question": "The time signature $\\mathbf{4/4}$ in music means there are four beats in a measure, and the quarter note gets **...** beat(s).",
    "options": {
      "A": "Half",
      "B": "Two",
      "C": "One",
      "D": "Four"
    },
    "correctAnswer": "C",
    "explanation": "The bottom '4' indicates the quarter note (crotchet) gets one beat, and the top '4' indicates four beats per measure."
  },
  {
    "id": 240,
    "subject": "Home Science",
    "grade": 6,
    "question": "A mixture of rice, beans, and meat provides the body with which main nutrients?",
    "options": {
      "A": "Only fats and oils.",
      "B": "Mainly carbohydrates and proteins.",
      "C": "Only vitamins.",
      "D": "Mainly water."
    },
    "correctAnswer": "B",
    "explanation": "Rice provides carbohydrates (energy), while beans and meat provide proteins (bodybuilding), making this a meal rich in both."
  },
  {
    "id": 241,
    "subject": "Physical & Health Education (PHE)",
    "grade": 6,
    "question": "Which of these games is typically played by kicking or striking a ball with the foot?",
    "options": {
      "A": "Volleyball",
      "B": "Netball",
      "C": "Football (Soccer)",
      "D": "Basketball"
    },
    "correctAnswer": "C",
    "explanation": "Football (Soccer) is predominantly a game played using the feet to propel the ball."
  },
  {
    "id": 242,
    "subject": "ICT/Computer Studies",
    "grade": 6,
    "question": "What is the main purpose of a firewall in a computer network?",
    "options": {
      "A": "To block all internet access.",
      "B": "To print documents faster.",
      "C": "To protect the network from unauthorized access and attacks.",
      "D": "To increase the speed of the computer."
    },
    "correctAnswer": "C",
    "explanation": "A firewall acts as a barrier, controlling incoming and outgoing network traffic based on security rules to protect the system."
  },
  {
    "id": 243,
    "subject": "Mathematics",
    "grade": 5,
    "question": "How many centimeters are there in $4.5$ metres?",
    "options": {
      "A": "45 cm",
      "B": "450 cm",
      "C": "4500 cm",
      "D": "0.045 cm"
    },
    "correctAnswer": "B",
    "explanation": "Since $1 \text{ metre} = 100 \text{ cm}$, multiply $4.5$ by 100: $4.5 \\times 100 = 450 \text{ cm}$."
  },
  {
    "id": 244,
    "subject": "English",
    "grade": 5,
    "question": "Choose the correct preposition to complete the sentence: 'The book is **...** the table.'",
    "options": {
      "A": "Under",
      "B": "On",
      "C": "By",
      "D": "From"
    },
    "correctAnswer": "B",
    "explanation": "'On' is the correct preposition to show that the book is resting on the surface of the table."
  },
  {
    "id": 245,
    "subject": "Kiswahili",
    "grade": 5,
    "question": "Ni nomino gani kati ya hizi ambayo haina umoja au wingi (Isiyohesabika)?",
    "options": {
      "A": "Mti",
      "B": "Sukari",
      "C": "Viti",
      "D": "Mayai"
    },
    "correctAnswer": "B",
    "explanation": "Nomino isiyohesabika (Uncountable noun) haina umoja wala wingi. 'Sukari' (Sugar) huhesabiwa kwa kutumia kipimo, sio kwa vipande."
  },
  {
    "id": 246,
    "subject": "Science & Technology",
    "grade": 5,
    "question": "Which of these is a major cause of water pollution in a river near a town?",
    "options": {
      "A": "Rainfall",
      "B": "Disposing of untreated sewage and factory waste.",
      "C": "Evaporation of water.",
      "D": "Planting trees near the river bank."
    },
    "correctAnswer": "B",
    "explanation": "The discharge of raw sewage and industrial waste directly into water bodies introduces harmful contaminants, causing pollution."
  },
  {
    "id": 247,
    "subject": "Social Studies",
    "grade": 5,
    "question": "What is the name of the legislative body of the Kenyan national government?",
    "options": {
      "A": "The Cabinet",
      "B": "The Supreme Court",
      "C": "The Parliament (National Assembly and Senate)",
      "D": "The Presidency"
    },
    "correctAnswer": "C",
    "explanation": "Parliament, consisting of the National Assembly and the Senate, is the legislative arm responsible for making laws."
  },
  {
    "id": 248,
    "subject": "CRE",
    "grade": 5,
    "question": "The story of creation, the fall of man, and the flood are found in which book of the Bible?",
    "options": {
      "A": "Exodus",
      "B": "Genesis",
      "C": "Numbers",
      "D": "Deuteronomy"
    },
    "correctAnswer": "B",
    "explanation": "Genesis is the first book of the Bible, detailing the beginning of the world and humanity."
  },
  {
    "id": 249,
    "subject": "Agriculture",
    "grade": 5,
    "question": "Which animal is primarily kept for the production of eggs?",
    "options": {
      "A": "Goat",
      "B": "Cow",
      "C": "Laying chicken/Hen",
      "D": "Pig"
    },
    "correctAnswer": "C",
    "explanation": "Laying chickens (hens) are birds kept in poultry farming specifically for commercial egg production."
  },
  {
    "id": 250,
    "subject": "Music",
    "grade": 5,
    "question": "What is the term for the organization of musical sounds and silences in time, often repeated in patterns?",
    "options": {
      "A": "Pitch",
      "B": "Rhythm",
      "C": "Texture",
      "D": "Harmony"
    },
    "correctAnswer": "B",
    "explanation": "Rhythm is the placement of sounds in time, or the pattern of short and long notes/rests."
  },
  {
    "id": 251,
    "subject": "Home Science",
    "grade": 5,
    "question": "What is the best way to clean and disinfect a kitchen surface where raw meat has been prepared?",
    "options": {
      "A": "Wipe with a dry cloth.",
      "B": "Wash with hot soapy water and a disinfectant.",
      "C": "Rinse with cold water only.",
      "D": "Leave it overnight."
    },
    "correctAnswer": "B",
    "explanation": "Hot soapy water removes grease and visible particles, and disinfectant kills bacteria like Salmonella and E. coli from raw meat."
  },
  {
    "id": 252,
    "subject": "Physical & Health Education (PHE)",
    "grade": 5,
    "question": "The three main food groups needed for good health are energy-giving, bodybuilding, and **...** foods.",
    "options": {
      "A": "Sweet",
      "B": "Fried",
      "C": "Protective (Vitamin/Mineral)",
      "D": "Processed"
    },
    "correctAnswer": "C",
    "explanation": "The three main groups are Energy-giving (Carbohydrates/Fats), Bodybuilding (Proteins), and Protective (Vitamins/Minerals)."
  },
  {
    "id": 253,
    "subject": "ICT/Computer Studies",
    "grade": 5,
    "question": "A small picture on the computer screen that represents a program or file is called a(n):",
    "options": {
      "A": "Folder",
      "B": "Window",
      "C": "Icon",
      "D": "Cursor"
    },
    "correctAnswer": "C",
    "explanation": "An icon is a small graphical representation of a program, file, or function on a computer screen."
  },
  {
    "id": 254,
    "subject": "Mathematics",
    "grade": 6,
    "question": "What is the value of $7^2$?",
    "options": {
      "A": "14",
      "B": "49",
      "C": "7",
      "D": "72"
    },
    "correctAnswer": "B",
    "explanation": "The square of a number ($7^2$) means multiplying the number by itself: $7 \\times 7 = 49$."
  },
  {
    "id": 255,
    "subject": "English",
    "grade": 6,
    "question": "Choose the correct homophone to complete the sentence: 'I have to buy new shoes **...**.'",
    "options": {
      "A": "Too",
      "B": "Two",
      "C": "To",
      "D": "Toe"
    },
    "correctAnswer": "A",
    "explanation": "'Too' means 'also' or 'in addition' and is the correct homophone here, completing the sentence 'I have to buy new shoes also.'"
  },
  {
    "id": 256,
    "subject": "Kiswahili",
    "grade": 6,
    "question": "Kamilisha methali: '**Subira** huvuta heri.'",
    "options": {
      "A": "Hasira",
      "B": "Subira",
      "C": "Kazi",
      "D": "Mali"
    },
    "correctAnswer": "B",
    "explanation": "Methali kamili ni: 'Subira huvuta heri.' Inasisitiza umuhimu wa kuwa na uvumilivu."
  },
  {
    "id": 257,
    "subject": "Science & Technology",
    "grade": 6,
    "question": "The primary component of air needed by humans and animals for respiration is:",
    "options": {
      "A": "Nitrogen",
      "B": "Carbon Dioxide",
      "C": "Oxygen",
      "D": "Argon"
    },
    "correctAnswer": "C",
    "explanation": "Oxygen is essential for the process of cellular respiration, which produces energy in the body."
  },
  {
    "id": 258,
    "subject": "Social Studies",
    "grade": 6,
    "question": "The major difference between a local trade and an international trade is that international trade involves goods exchanged between **...**.",
    "options": {
      "A": "Villages and towns.",
      "B": "Different countries.",
      "C": "Farmers and consumers.",
      "D": "One shop and another."
    },
    "correctAnswer": "B",
    "explanation": "International trade is the exchange of capital, goods, and services across national borders."
  },
  {
    "id": 259,
    "subject": "CRE",
    "grade": 6,
    "question": "Which of Jesus' parables describes a man planting seed that grows secretly, illustrating the gradual nature of the Kingdom of God?",
    "options": {
      "A": "The Prodigal Son",
      "B": "The Mustard Seed",
      "C": "The Growing Seed",
      "D": "The Sower"
    },
    "correctAnswer": "C",
    "explanation": "The Parable of the Growing Seed (Mark 4:26-29) describes the seed growing without the farmer's intervention, emphasizing the mysterious and gradual growth of God's Kingdom."
  },
  {
    "id": 260,
    "subject": "Agriculture",
    "grade": 6,
    "question": "Which characteristic of soil is primarily determined by the size of the soil particles (sand, silt, and clay)?",
    "options": {
      "A": "Soil temperature",
      "B": "Soil colour",
      "C": "Soil texture",
      "D": "Soil $\\text{pH}$"
    },
    "correctAnswer": "C",
    "explanation": "Soil texture is the classification of the soil based on the proportional content of particles of various sizes, such as sand, silt, and clay."
  },
  {
    "id": 261,
    "subject": "Music",
    "grade": 6,
    "question": "The musical term for the quality of sound that allows us to distinguish between different instruments or voices (e.g., a trumpet versus a flute) is:",
    "options": {
      "A": "Pitch",
      "B": "Timbre",
      "C": "Rhythm",
      "D": "Duration"
    },
    "correctAnswer": "B",
    "explanation": "Timbre, often called 'tone colour,' is the characteristic quality of a sound, independent of pitch and loudness."
  },
  {
    "id": 262,
    "subject": "Home Science",
    "grade": 6,
    "question": "Which of the following is a symptom of severe dehydration (lack of water) in the body?",
    "options": {
      "A": "Very clear urine.",
      "B": "Feeling very energetic.",
      "C": "Feeling thirsty, dry mouth, and passing dark, concentrated urine.",
      "D": "High fever with no sweat."
    },
    "correctAnswer": "C",
    "explanation": "Symptoms of dehydration include thirst, dry mucous membranes (mouth), and the body conserving water, resulting in darker urine."
  },
  {
    "id": 263,
    "subject": "Physical & Health Education (PHE)",
    "grade": 6,
    "question": "When playing handball, a player can hold the ball for a maximum of **...** seconds before passing, bouncing, or shooting.",
    "options": {
      "A": "10",
      "B": "5",
      "C": "3",
      "D": "7"
    },
    "correctAnswer": "C",
    "explanation": "In team handball, a player is allowed to hold the ball for a maximum of 3 seconds before taking action."
  },
  {
    "id": 264,
    "subject": "ICT/Computer Studies",
    "grade": 6,
    "question": "A program used to view, manage, capture, and edit digital photographs is generally called a(n):",
    "options": {
      "A": "Web browser",
      "B": "Image/Photo editor",
      "C": "Antivirus software",
      "D": "Operating system"
    },
    "correctAnswer": "B",
    "explanation": "Image or photo editing software is designed to manipulate and enhance digital photographs."
  },
  {
    "id": 265,
    "subject": "Mathematics",
    "grade": 5,
    "question": "What is the perimeter of a regular pentagon whose side length is $6 \text{ cm}$?",
    "options": {
      "A": "30 cm",
      "B": "24 cm",
      "C": "36 cm",
      "D": "60 cm"
    },
    "correctAnswer": "A",
    "explanation": "A pentagon has 5 sides. Perimeter = $5 \\times \\text{side length}$. $5 \\times 6 \\text{ cm} = 30 \text{ cm}$."
  },
  {
    "id": 266,
    "subject": "English",
    "grade": 5,
    "question": "Change the following sentence into the past tense: 'He **walks** to school.'",
    "options": {
      "A": "He walk to school.",
      "B": "He will walk to school.",
      "C": "He walked to school.",
      "D": "He is walking to school."
    },
    "correctAnswer": "C",
    "explanation": "The simple past tense of the verb 'walks' is 'walked'."
  },
  {
    "id": 267,
    "subject": "Kiswahili",
    "grade": 5,
    "question": "Neno gani halitoi sauti ya 'f' (fau) likitamkwa?",
    "options": {
      "A": "Faru",
      "B": "Paa",
      "C": "Fisi",
      "D": "Funguo"
    },
    "correctAnswer": "B",
    "explanation": "'Faru', 'Fisi', na 'Funguo' zote zina sauti ya 'f' (fau). 'Paa' inatoa sauti ya 'p' (pa)."
  },
  {
    "id": 268,
    "subject": "Science & Technology",
    "grade": 5,
    "question": "Which characteristic is common to all insects?",
    "options": {
      "A": "Having four legs.",
      "B": "Having a backbone (vertebrates).",
      "C": "Having three body parts and six legs.",
      "D": "Having wings."
    },
    "correctAnswer": "C",
    "explanation": "Insects are defined by a three-part body (head, thorax, abdomen) and typically three pairs of legs (six legs total)."
  },
  {
    "id": 269,
    "subject": "Social Studies",
    "grade": 5,
    "question": "What is the highest-ranking administrator in a sub-county in the Kenyan national government administration?",
    "options": {
      "A": "County Governor",
      "B": "Ward Administrator",
      "C": "Deputy County Commissioner (DCC)",
      "D": "Chief"
    },
    "correctAnswer": "C",
    "explanation": "The Deputy County Commissioner (DCC) is the representative of the National Government at the Sub-County level, immediately below the County Commissioner."
  },
  {
    "id": 270,
    "subject": "CRE",
    "grade": 5,
    "question": "Which prophet is known for predicting the birth of Jesus in Bethlehem, long before it happened?",
    "options": {
      "A": "Isaiah",
      "B": "Micah",
      "C": "Malachi",
      "D": "Amos"
    },
    "correctAnswer": "B",
    "explanation": "The prophet Micah specifically prophesied that the Messiah would be born in Bethlehem (Micah 5:2)."
  },
  {
    "id": 271,
    "subject": "Agriculture",
    "grade": 5,
    "question": "The main reason for proper disposal of dead livestock animals is to prevent the spread of **...**.",
    "options": {
      "A": "Wealth",
      "B": "Diseases and pests",
      "C": "Rainfall",
      "D": "Sunshine"
    },
    "correctAnswer": "B",
    "explanation": "Improper disposal of carcasses can attract pests and vultures and allow harmful pathogens to spread to other animals or humans."
  },
  {
    "id": 272,
    "subject": "Music",
    "grade": 5,
    "question": "Which of these is a percussion instrument that produces sound by striking a stretched membrane (skin)?",
    "options": {
      "A": "Maracas",
      "B": "Drum",
      "C": "Guitar",
      "D": "Recorder"
    },
    "correctAnswer": "B",
    "explanation": "A drum (membranophone) is a musical instrument played by striking an animal skin or synthetic membrane."
  },
  {
    "id": 273,
    "subject": "Home Science",
    "grade": 5,
    "question": "The three R's of waste management are Reduce, Reuse, and **...**.",
    "options": {
      "A": "Run",
      "B": "Recreate",
      "C": "Recycle",
      "D": "Remove"
    },
    "correctAnswer": "C",
    "explanation": "The 3 R's are Reduce (less waste generation), Reuse (use items again), and Recycle (convert waste into reusable material)."
  },
  {
    "id": 274,
    "subject": "Physical & Health Education (PHE)",
    "grade": 5,
    "question": "Why is it important to wear clean and dry sports attire during physical activities?",
    "options": {
      "A": "To slow down your running speed.",
      "B": "To increase the smell of sweat.",
      "C": "To prevent skin infections and maintain hygiene.",
      "D": "To make the clothes last longer."
    },
    "correctAnswer": "C",
    "explanation": "Sweat and moisture in used attire can encourage bacterial and fungal growth, leading to infections. Clean, dry attire is hygienic."
  },
  {
    "id": 275,
    "subject": "ICT/Computer Studies",
    "grade": 5,
    "question": "What is the danger of clicking on an email link that promises you a large amount of money for free?",
    "options": {
      "A": "It will send you a lot of money.",
      "B": "It is likely a scam (phishing) to steal your information or install a virus.",
      "C": "It will make your computer very fast.",
      "D": "It will improve your eyesight."
    },
    "correctAnswer": "B",
    "explanation": "Such emails are often phishing attempts or malware distribution tools designed to deceive users and compromise their security."
  },
  {
    "id": 276,
    "subject": "Mathematics",
    "grade": 6,
    "question": "Find the next two terms in the sequence: $1/2, 1, 1 \\frac{1}{2}, 2, \dots$",
    "options": {
      "A": "$2 \\frac{1}{2}, 3$",
      "B": "$2 \\frac{1}{2}, 3 \\frac{1}{2}$",
      "C": "$2, 2 \\frac{1}{2}$",
      "D": "$3, 4$"
    },
    "correctAnswer": "A",
    "explanation": "The sequence adds $1/2$ (or 0.5) to the previous term. $2 + 1/2 = 2 \\frac{1}{2}$. $2 \\frac{1}{2} + 1/2 = 3$."
  },
  {
    "id": 277,
    "subject": "English",
    "grade": 6,
    "question": "Identify the conjunction used to show a choice between two alternatives: 'You can have an apple **...** a banana.'",
    "options": {
      "A": "And",
      "B": "But",
      "C": "Or",
      "D": "So"
    },
    "correctAnswer": "C",
    "explanation": "The coordinating conjunction 'or' is used to present an alternative or choice."
  },
  {
    "id": 278,
    "subject": "Kiswahili",
    "grade": 6,
    "question": "Nomino ya 'maji' iko katika ngeli gani?",
    "options": {
      "A": "A-WA",
      "B": "KI-VI",
      "C": "U-YA",
      "D": "YA-YA"
    },
    "correctAnswer": "D",
    "explanation": "'Maji' (water) ni nomino isiyohesabika, na huafikiana na kiambishi '-ya-' katika wingi (ambapo 'maji' huwa ma-ji). Kwa hiyo, ngeli yake ni YA-YA."
  },
  {
    "id": 279,
    "subject": "Science & Technology",
    "grade": 6,
    "question": "Which method is the most appropriate way to dispose of broken glass or sharp objects at home?",
    "options": {
      "A": "Throwing them loosely into the dustbin.",
      "B": "Wrapping them carefully in thick paper or a box before disposal.",
      "C": "Burning them in a fire.",
      "D": "Burying them shallowly in the garden."
    },
    "correctAnswer": "B",
    "explanation": "Sharp objects must be carefully wrapped or placed in a hard container to prevent injury to sanitation workers or family members."
  },
  {
    "id": 280,
    "subject": "Social Studies",
    "grade": 6,
    "question": "What is the primary significance of the Constitution of Kenya?",
    "options": {
      "A": "It lists all the national parks.",
      "B": "It is the supreme law of the country.",
      "C": "It is a collection of all Kenyan folk tales.",
      "D": "It lists the winners of all past elections."
    },
    "correctAnswer": "B",
    "explanation": "The Constitution of Kenya is the fundamental law that establishes the structure of government and guarantees the rights of citizens."
  },
  {
    "id": 281,
    "subject": "CRE",
    "grade": 6,
    "question": "The Beatitudes (Blessed are the...) were taught by Jesus as part of which major sermon?",
    "options": {
      "A": "Sermon on the Plain",
      "B": "Sermon on the Mount",
      "C": "Sermon on the Last Day",
      "D": "Parable of the Sower"
    },
    "correctAnswer": "B",
    "explanation": "The Beatitudes are found at the beginning of Jesus' most famous teaching discourse, the Sermon on the Mount (Matthew 5:3-12)."
  },
  {
    "id": 282,
    "subject": "Agriculture",
    "grade": 6,
    "question": "The main benefit of building terraces or bunds on hilly farmlands is to:",
    "options": {
      "A": "Increase the wind speed.",
      "B": "Control soil erosion and conserve water.",
      "C": "Attract wild animals.",
      "D": "Make the soil drier."
    },
    "correctAnswer": "B",
    "explanation": "Terracing is a method of farming used on steep terrain to slow down the flow of water, preventing soil loss (erosion) and allowing water to soak in (conservation)."
  },
  {
    "id": 283,
    "subject": "Music",
    "grade": 6,
    "question": "Which of these instruments belongs to the woodwind family?",
    "options": {
      "A": "Cello",
      "B": "Flute",
      "C": "Trumpet",
      "D": "Timpani"
    },
    "correctAnswer": "B",
    "explanation": "The flute, although modern versions are often made of metal, is historically and classically categorized as a woodwind instrument."
  },
  {
    "id": 284,
    "subject": "Home Science",
    "grade": 6,
    "question": "What is the main advantage of using a pressure cooker over an ordinary saucepan?",
    "options": {
      "A": "It uses more fuel.",
      "B": "It cooks food faster by raising the boiling point of water.",
      "C": "It makes food taste worse.",
      "D": "It can only cook meat."
    },
    "correctAnswer": "B",
    "explanation": "Pressure cookers seal steam, increasing pressure inside, which raises the boiling point of water and cooks food significantly faster."
  },
  {
    "id": 285,
    "subject": "Physical & Health Education (PHE)",
    "grade": 6,
    "question": "Which activity is an example of a flexibility exercise?",
    "options": {
      "A": "Lifting heavy weights.",
      "B": "Sitting and reaching for your toes (stretching).",
      "C": "Sprinting a short distance.",
      "D": "A long-distance run."
    },
    "correctAnswer": "B",
    "explanation": "Flexibility exercises involve stretching muscles and joints to increase the range of movement, such as the sit-and-reach stretch."
  },
  {
    "id": 286,
    "subject": "ICT/Computer Studies",
    "grade": 6,
    "question": "What is the purpose of using the 'Save As' command instead of 'Save'?",
    "options": {
      "A": "To open a new file.",
      "B": "To create a copy of the file under a new name or location.",
      "C": "To print the document.",
      "D": "To permanently delete the file."
    },
    "correctAnswer": "B",
    "explanation": "'Save As' allows the user to specify a new filename or a new storage location for the current document, effectively creating a copy."
  },
  {
    "id": 287,
    "subject": "Mathematics",
    "grade": 5,
    "question": "What is the difference between $3.75$ and $1.50$?",
    "options": {
      "A": "2.25",
      "B": "5.25",
      "C": "4.25",
      "D": "1.25"
    },
    "correctAnswer": "A",
    "explanation": "Difference means subtraction: $3.75 - 1.50 = 2.25$."
  },
  {
    "id": 288,
    "subject": "English",
    "grade": 5,
    "question": "Identify the demonstrative adjective in the sentence: '**This** pen is mine.'",
    "options": {
      "A": "Pen",
      "B": "Is",
      "C": "Mine",
      "D": "This"
    },
    "correctAnswer": "D",
    "explanation": "Demonstrative adjectives (this, that, these, those) point out specific nouns. 'This' points out the 'pen'."
  },
  {
    "id": 289,
    "subject": "Kiswahili",
    "grade": 5,
    "question": "Neno 'mtoto' likiwa katika wingi huwa:",
    "options": {
      "A": "Vitoto",
      "B": "Watoto",
      "C": "Mitoto",
      "D": "Jitoto"
    },
    "correctAnswer": "B",
    "explanation": "Nomino ya ngeli ya A-WA. Umoja ni 'mtoto', wingi ni 'watoto'."
  },
  {
    "id": 290,
    "subject": "Science & Technology",
    "grade": 5,
    "question": "Which tool is commonly used to measure the mass of an object in the science laboratory?",
    "options": {
      "A": "Thermometer",
      "B": "Measuring cylinder",
      "C": "Beam balance/Scale",
      "D": "Ruler"
    },
    "correctAnswer": "C",
    "explanation": "A beam balance (or scale/weighing machine) is used to determine the mass of an object."
  },
  {
    "id": 291,
    "subject": "Social Studies",
    "grade": 5,
    "question": "The primary role of the traffic police in Kenya is to:",
    "options": {
      "A": "Collect taxes.",
      "B": "Control and manage road safety and traffic flow.",
      "C": "Elect political leaders.",
      "D": "Clean the streets."
    },
    "correctAnswer": "B",
    "explanation": "Traffic police are responsible for enforcing traffic laws, directing traffic, and ensuring safety on the roads."
  },
  {
    "id": 292,
    "subject": "CRE",
    "grade": 5,
    "question": "Why did Jesus often use parables (short stories) in his teaching?",
    "options": {
      "A": "To confuse his listeners.",
      "B": "To make his teachings easy to understand and relatable.",
      "C": "To show off his knowledge.",
      "D": "To avoid speaking to anyone."
    },
    "correctAnswer": "B",
    "explanation": "Parables used familiar, everyday imagery (like farming) to explain complex spiritual truths in a simple, memorable way."
  },
  {
    "id": 293,
    "subject": "Agriculture",
    "grade": 5,
    "question": "The process of removing weeds from a garden is called **...**.",
    "options": {
      "A": "Harvesting",
      "B": "Weeding",
      "C": "Plowing",
      "D": "Sowing"
    },
    "correctAnswer": "B",
    "explanation": "Weeding is the manual or chemical removal of unwanted plants (weeds) from a field or garden."
  },
  {
    "id": 294,
    "subject": "Music",
    "grade": 5,
    "question": "The speed of a song that is played 'quickly' is often marked by the Italian term:",
    "options": {
      "A": "Largo",
      "B": "Andante",
      "C": "Allegro",
      "D": "Adagio"
    },
    "correctAnswer": "C",
    "explanation": "Allegro is a tempo marking meaning fast, quick, and bright."
  },
  {
    "id": 295,
    "subject": "Home Science",
    "grade": 5,
    "question": "Which of the following is the best way to save water while brushing your teeth?",
    "options": {
      "A": "Leaving the tap running while brushing.",
      "B": "Turning the tap off until you need to rinse.",
      "C": "Brushing your teeth in the kitchen sink.",
      "D": "Brushing only once a day."
    },
    "correctAnswer": "B",
    "explanation": "Turning the tap off while brushing is a key water-saving measure, preventing unnecessary water wastage."
  },
  {
    "id": 296,
    "subject": "Physical & Health Education (PHE)",
    "grade": 5,
    "question": "Which game requires a player to hit a ball over a high net with their hand or arm, preventing the opposing team from returning it?",
    "options": {
      "A": "Football (Soccer)",
      "B": "Basketball",
      "C": "Volleyball",
      "D": "Hockey"
    },
    "correctAnswer": "C",
    "explanation": "Volleyball is characterized by hitting a ball over a net using the hands and arms, trying to score points when the ball lands in the opponent's court."
  },
  {
    "id": 297,
    "subject": "ICT/Computer Studies",
    "grade": 5,
    "question": "When drawing a picture using drawing software, which tool is used to fill a closed shape entirely with a single colour?",
    "options": {
      "A": "Pencil tool",
      "B": "Eraser tool",
      "C": "Fill/Paint Bucket tool",
      "D": "Text tool"
    },
    "correctAnswer": "C",
    "explanation": "The Fill or Paint Bucket tool allows a user to fill an enclosed area or selected object with a chosen colour or pattern."
  }]


  export default quizzes