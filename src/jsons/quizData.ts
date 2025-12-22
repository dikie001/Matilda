import type { QuizType } from "@/pages/ANN/GavinQuickQuiz"

const quizData: QuizType[] = [
  {
    "id": 1,
    "subject": "Mathematics",
    "question": "What is the place value of digit 6 in the number 468,902?",
    "options": { "A": "Thousands", "B": "Ten thousands", "C": "Hundreds", "D": "Tens" },
    "correctAnswer": "B",
    "explanation": "In 468,902, the digit 6 is in the ten thousands position."
  },
  {
    "id": 2,
    "subject": "Mathematics",
    "question": "Work out: 3/4 + 1/8",
    "options": { "A": "4/12", "B": "7/8", "C": "1/2", "D": "5/8" },
    "correctAnswer": "B",
    "explanation": "LCM of 4 and 8 is 8. (6/8) + (1/8) = 7/8."
  },
  {
    "id": 3,
    "subject": "English",
    "question": "Choose the correct collective noun: A ________ of bees flew out of the hive.",
    "options": { "A": "Herd", "B": "Swarm", "C": "Pack", "D": "Troop" },
    "correctAnswer": "B",
    "explanation": "A group of bees is called a swarm."
  },
  {
    "id": 4,
    "subject": "Kiswahili",
    "question": "Kinyume cha neno 'shuka' ni ________.",
    "options": { "A": "Pandisha", "B": "Panda", "C": "Teremka", "D": "Simama" },
    "correctAnswer": "B",
    "explanation": "Kinyume cha shuka (go down) ni panda (climb/go up)."
  },
  {
    "id": 5,
    "subject": "Science and Technology",
    "question": "Which of the following is a function of the roots in a plant?",
    "options": { "A": "Making food", "B": "Breathing", "C": "Absorption of water", "D": "Producing seeds" },
    "correctAnswer": "C",
    "explanation": "Roots absorb water and mineral salts from the soil."
  },
  {
    "id": 6,
    "subject": "Social Studies",
    "question": "The main line of latitude that divides the earth into two equal halves is the ________.",
    "options": { "A": "Prime Meridian", "B": "Tropic of Cancer", "C": "Equator", "D": "Tropic of Capricorn" },
    "correctAnswer": "C",
    "explanation": "The Equator is at 0 degrees latitude."
  },
  {
    "id": 7,
    "subject": "Agriculture",
    "question": "Which soil type has the highest water retention capacity?",
    "options": { "A": "Sand", "B": "Loam", "C": "Clay", "D": "Silt" },
    "correctAnswer": "C",
    "explanation": "Clay soil has fine particles that hold water well."
  },
  {
    "id": 8,
    "subject": "CRE",
    "question": "Who among the following was the first king of Israel?",
    "options": { "A": "David", "B": "Solomon", "C": "Saul", "D": "Samuel" },
    "correctAnswer": "C",
    "explanation": "Saul was anointed as the first king of Israel."
  },
  {
    "id": 9,
    "subject": "Homescience",
    "question": "Which of the following is a sign of puberty in boys only?",
    "options": { "A": "Growth of pubic hair", "B": "Deepening of voice", "C": "Increase in height", "D": "Development of breasts" },
    "correctAnswer": "B",
    "explanation": "Deepening of voice is a specific change in boys during puberty."
  },
  {
    "id": 10,
    "subject": "PE",
    "question": "In athletics, the start command for long distance races is ________.",
    "options": { "A": "On your marks, Get set, Go", "B": "On your marks, Go", "C": "Ready, Go", "D": "Get set, Go" },
    "correctAnswer": "B",
    "explanation": "Long distance races use a standing start: 'On your marks' then the gun/whistle."
  },
  {
    "id": 11,
    "subject": "Mathematics",
    "question": "Calculate the area of a rectangle measuring 12cm by 8cm.",
    "options": { "A": "20 cm2", "B": "40 cm2", "C": "96 cm2", "D": "84 cm2" },
    "correctAnswer": "C",
    "explanation": "Area = Length x Width (12 x 8 = 96)."
  },
  {
    "id": 12,
    "subject": "Mathematics",
    "question": "Convert 3.5 km into meters.",
    "options": { "A": "350m", "B": "3500m", "C": "35m", "D": "35000m" },
    "correctAnswer": "B",
    "explanation": "1 km = 1000m. 3.5 x 1000 = 3500m."
  },
  {
    "id": 13,
    "subject": "English",
    "question": "Which sentence is punctuated correctly?",
    "options": { "A": "Where are you going.", "B": "I bought apples oranges and bananas.", "C": "Wow! That is amazing.", "D": "hes my brother." },
    "correctAnswer": "C",
    "explanation": "Option C uses the exclamation mark correctly for emotion."
  },
  {
    "id": 14,
    "subject": "Kiswahili",
    "question": "Tegua kitendawili: 'Nyumba yangu haina mlango'.",
    "options": { "A": "Nazi", "B": "Yai", "C": "Chungwa", "D": "Nanasi" },
    "correctAnswer": "B",
    "explanation": "Yai ni jibu sahihi kwa nyumba isiyo na mlango."
  },
  {
    "id": 15,
    "subject": "Science and Technology",
    "question": "Which part of a computer is used to display information?",
    "options": { "A": "CPU", "B": "Keyboard", "C": "Monitor", "D": "Mouse" },
    "correctAnswer": "C",
    "explanation": "The monitor (screen) displays output."
  },
  {
    "id": 16,
    "subject": "Social Studies",
    "question": "The headquarters of the East African Community (EAC) is located in ________.",
    "options": { "A": "Nairobi", "B": "Kampala", "C": "Arusha", "D": "Dodoma" },
    "correctAnswer": "C",
    "explanation": "The EAC headquarters are in Arusha, Tanzania."
  },
  {
    "id": 17,
    "subject": "Agriculture",
    "question": "Which of the following is a climbing crop?",
    "options": { "A": "Maize", "B": "Passion fruit", "C": "Carrot", "D": "Sorghum" },
    "correctAnswer": "B",
    "explanation": "Passion fruit plants are vines that climb."
  },
  {
    "id": 18,
    "subject": "CRE",
    "question": "The story of the Good Samaritan teaches us to be ________.",
    "options": { "A": "Selfish", "B": "Rich", "C": "Kind to neighbors", "D": "Proud" },
    "correctAnswer": "C",
    "explanation": "It teaches compassion and kindness to everyone."
  },
  {
    "id": 19,
    "subject": "Homescience",
    "question": "Which of the following is a common communicable disease?",
    "options": { "A": "Diabetes", "B": "Tuberculosis", "C": "Cancer", "D": "Asthma" },
    "correctAnswer": "B",
    "explanation": "Tuberculosis (TB) can be spread from person to person."
  },
  {
    "id": 20,
    "subject": "PE",
    "question": "Which game is played with a stick and a ball?",
    "options": { "A": "Netball", "B": "Hockey", "C": "Volleyball", "D": "Handball" },
    "correctAnswer": "B",
    "explanation": "Field hockey is played using a stick to hit a ball."
  },
  {
    "id": 21,
    "subject": "Mathematics",
    "question": "Find the volume of a cube with a side length of 4cm.",
    "options": { "A": "16 cm3", "B": "64 cm3", "C": "12 cm3", "D": "24 cm3" },
    "correctAnswer": "B",
    "explanation": "Volume of cube = side x side x side (4x4x4=64)."
  },
  {
    "id": 22,
    "subject": "Mathematics",
    "question": "Round off 9,875 to the nearest hundred.",
    "options": { "A": "9,800", "B": "9,900", "C": "10,000", "D": "9,880" },
    "correctAnswer": "B",
    "explanation": "The tens digit is 7, so we round up the hundreds digit (8 becomes 9)."
  },
  {
    "id": 23,
    "subject": "English",
    "question": "Identify the verb in the sentence: 'The cat sleeps on the mat.'",
    "options": { "A": "Cat", "B": "Sleeps", "C": "Mat", "D": "On" },
    "correctAnswer": "B",
    "explanation": "Sleeps is the action word."
  },
  {
    "id": 24,
    "subject": "Kiswahili",
    "question": "Kisawe cha neno 'rafiki' ni ________.",
    "options": { "A": "Adui", "B": "Mwandani", "C": "Jirani", "D": "Mgeni" },
    "correctAnswer": "B",
    "explanation": "Mwandani ni neno jingine lenye maana sawa na rafiki."
  },
  {
    "id": 25,
    "subject": "Science and Technology",
    "question": "Which state of matter has a definite shape and volume?",
    "options": { "A": "Gas", "B": "Liquid", "C": "Solid", "D": "Plasma" },
    "correctAnswer": "C",
    "explanation": "Solids maintain a fixed shape and volume."
  },
  {
    "id": 26,
    "subject": "Social Studies",
    "question": "Which colour on the Kenyan flag represents the people?",
    "options": { "A": "Green", "B": "Red", "C": "White", "D": "Black" },
    "correctAnswer": "D",
    "explanation": "Black represents the indigenous people of Kenya."
  },
  {
    "id": 27,
    "subject": "Agriculture",
    "question": "Removing excess seedlings from a nursery bed is called ________.",
    "options": { "A": "Pruning", "B": "Thinning", "C": "Weeding", "D": "Harvesting" },
    "correctAnswer": "B",
    "explanation": "Thinning reduces overcrowding to allow healthy growth."
  },
  {
    "id": 28,
    "subject": "CRE",
    "question": "The commandment 'Do not steal' teaches respect for ________.",
    "options": { "A": "Life", "B": "Parents", "C": "Property", "D": "God" },
    "correctAnswer": "C",
    "explanation": "Not stealing means respecting what belongs to others."
  },
  {
    "id": 29,
    "subject": "Homescience",
    "question": "Which nutrient provides the body with energy?",
    "options": { "A": "Vitamins", "B": "Carbohydrates", "C": "Proteins", "D": "Minerals" },
    "correctAnswer": "B",
    "explanation": "Carbohydrates are the main energy giving foods."
  },
  {
    "id": 30,
    "subject": "PE",
    "question": "A standard football match lasts for ________ minutes.",
    "options": { "A": "60", "B": "80", "C": "90", "D": "100" },
    "correctAnswer": "C",
    "explanation": "A full match has two halves of 45 minutes each."
  },
  {
    "id": 31,
    "subject": "Mathematics",
    "question": "Which of these is a prime number?",
    "options": { "A": "9", "B": "15", "C": "17", "D": "21" },
    "correctAnswer": "C",
    "explanation": "17 has only two factors: 1 and itself."
  },
  {
    "id": 32,
    "subject": "Mathematics",
    "question": "What is the square root of 81?",
    "options": { "A": "8", "B": "9", "C": "7", "D": "11" },
    "correctAnswer": "B",
    "explanation": "9 x 9 = 81."
  },
  {
    "id": 33,
    "subject": "English",
    "question": "Complete the simile: As busy as a ________.",
    "options": { "A": "Cat", "B": "Bee", "C": "Bird", "D": "Bat" },
    "correctAnswer": "B",
    "explanation": "The standard simile is 'busy as a bee'."
  },
  {
    "id": 34,
    "subject": "Kiswahili",
    "question": "Andika wingi wa sentensi: 'Mtoto analia'.",
    "options": { "A": "Watoto wanalia", "B": "Mtoto wanalia", "C": "Watoto analia", "D": "Mitoto inalia" },
    "correctAnswer": "A",
    "explanation": "Wingi wa 'mtoto' ni 'watoto' na 'analia' ni 'wanalia'."
  },
  {
    "id": 35,
    "subject": "Science and Technology",
    "question": "The green coloring matter in plants is known as ________.",
    "options": { "A": "Starch", "B": "Chlorophyll", "C": "Carbon", "D": "Nitrogen" },
    "correctAnswer": "B",
    "explanation": "Chlorophyll gives plants their green color and helps in photosynthesis."
  },
  {
    "id": 36,
    "subject": "Social Studies",
    "question": "Who is the head of the county government in Kenya?",
    "options": { "A": "Senator", "B": "President", "C": "Governor", "D": "MP" },
    "correctAnswer": "C",
    "explanation": "The Governor heads the County Executive Committee."
  },
  {
    "id": 37,
    "subject": "Agriculture",
    "question": "Which domestic animal is mainly kept for security?",
    "options": { "A": "Cat", "B": "Dog", "C": "Sheep", "D": "Cow" },
    "correctAnswer": "B",
    "explanation": "Dogs are commonly used to guard homes and livestock."
  },
  {
    "id": 38,
    "subject": "CRE",
    "question": "The Last Supper was a celebration of which Jewish festival?",
    "options": { "A": "Pentecost", "B": "Passover", "C": "Easter", "D": "Tabernacles" },
    "correctAnswer": "B",
    "explanation": "Jesus celebrated the Passover with his disciples."
  },
  {
    "id": 39,
    "subject": "Homescience",
    "question": "Which stitch is used to prevent edges from fraying?",
    "options": { "A": "Running stitch", "B": "Hemming stitch", "C": "Overcasting stitch", "D": "Chain stitch" },
    "correctAnswer": "C",
    "explanation": "Overcasting secures the raw edges of fabric."
  },
  {
    "id": 40,
    "subject": "PE",
    "question": "In netball, how many players are on the court per team?",
    "options": { "A": "5", "B": "7", "C": "11", "D": "6" },
    "correctAnswer": "B",
    "explanation": "A netball team consists of 7 players on court."
  },
  {
    "id": 41,
    "subject": "Mathematics",
    "question": "Simplify: 4a + 3b - 2a + b",
    "options": { "A": "6a + 4b", "B": "2a + 2b", "C": "2a + 4b", "D": "6a + 2b" },
    "correctAnswer": "C",
    "explanation": "Combine like terms: (4a - 2a) + (3b + b) = 2a + 4b."
  },
  {
    "id": 42,
    "subject": "Mathematics",
    "question": "How many minutes are there in 2 and a half hours?",
    "options": { "A": "120", "B": "150", "C": "180", "D": "90" },
    "correctAnswer": "B",
    "explanation": "2 hours = 120 mins, half hour = 30 mins. Total = 150."
  },
  {
    "id": 43,
    "subject": "English",
    "question": "Choose the correctly spelled word.",
    "options": { "A": "Recieve", "B": "Receive", "C": "Receve", "D": "Ricieve" },
    "correctAnswer": "B",
    "explanation": "'Receive' follows the 'i before e except after c' rule."
  },
  {
    "id": 44,
    "subject": "Kiswahili",
    "question": "Akisami 1/3 kwa maneno ni ________.",
    "options": { "A": "Robo", "B": "Nusu", "C": "Theluthi", "D": "Sudusi" },
    "correctAnswer": "C",
    "explanation": "1/3 inaitwa theluthi."
  },
  {
    "id": 45,
    "subject": "Science and Technology",
    "question": "Which planet is known as the Red Planet?",
    "options": { "A": "Venus", "B": "Jupiter", "C": "Mars", "D": "Saturn" },
    "correctAnswer": "C",
    "explanation": "Mars appears red due to iron oxide on its surface."
  },
  {
    "id": 46,
    "subject": "Social Studies",
    "question": "Which community in Kenya is known for practicing pastoralism?",
    "options": { "A": "Agikuyu", "B": "Maasai", "C": "Abagusii", "D": "Mijikenda" },
    "correctAnswer": "B",
    "explanation": "The Maasai are traditionally nomadic pastoralists."
  },
  {
    "id": 47,
    "subject": "Agriculture",
    "question": "Which tool is used for digging hard ground?",
    "options": { "A": "Rake", "B": "Mattock", "C": "Panga", "D": "Slashing" },
    "correctAnswer": "B",
    "explanation": "A mattock has a heavy blade suitable for hard earth."
  },
  {
    "id": 48,
    "subject": "CRE",
    "question": "God created the world in how many days?",
    "options": { "A": "5", "B": "6", "C": "7", "D": "40" },
    "correctAnswer": "B",
    "explanation": "Creation took 6 days, and He rested on the 7th."
  },
  {
    "id": 49,
    "subject": "Homescience",
    "question": "Improvised abrasives for cleaning kitchen tools can include ________.",
    "options": { "A": "Plastic", "B": "Egg shells", "C": "Paper", "D": "Cotton" },
    "correctAnswer": "B",
    "explanation": "Crushed egg shells can be used as a scouring agent."
  },
  {
    "id": 50,
    "subject": "PE",
    "question": "Which of these is a warm-up activity?",
    "options": { "A": "Sprinting 100m", "B": "Jogging slowly", "C": "Sleeping", "D": "Sitting" },
    "correctAnswer": "B",
    "explanation": "Jogging slowly raises body temperature gradually."
  },
  {
    "id": 51,
    "subject": "Mathematics",
    "question": "Which angle is 90 degrees?",
    "options": { "A": "Acute", "B": "Obtuse", "C": "Right angle", "D": "Reflex" },
    "correctAnswer": "C",
    "explanation": "A right angle measures exactly 90 degrees."
  },
  {
    "id": 52,
    "subject": "Mathematics",
    "question": "If a dozen eggs cost sh. 120, what is the cost of one egg?",
    "options": { "A": "sh. 10", "B": "sh. 12", "C": "sh. 15", "D": "sh. 20" },
    "correctAnswer": "A",
    "explanation": "A dozen is 12. 120 divided by 12 equals 10."
  },
  {
    "id": 53,
    "subject": "English",
    "question": "The past tense of 'go' is ________.",
    "options": { "A": "Goed", "B": "Gone", "C": "Went", "D": "Going" },
    "correctAnswer": "C",
    "explanation": "'Go' is an irregular verb. The past tense is 'went'."
  },
  {
    "id": 54,
    "subject": "Kiswahili",
    "question": "Mtu anayetibu wagonjwa anaitwa ________.",
    "options": { "A": "Mwalimu", "B": "Daktari", "C": "Seremala", "D": "Mkulima" },
    "correctAnswer": "B",
    "explanation": "Daktari (doctor) ndiye hutibu wagonjwa."
  },
  {
    "id": 55,
    "subject": "Science and Technology",
    "question": "Which tooth is used for tearing food?",
    "options": { "A": "Incisor", "B": "Molar", "C": "Canine", "D": "Premolar" },
    "correctAnswer": "C",
    "explanation": "Canines are pointed and used for tearing."
  },
  {
    "id": 56,
    "subject": "Social Studies",
    "question": "The main crop grown in Mwea Irrigation Scheme is ________.",
    "options": { "A": "Maize", "B": "Rice", "C": "Wheat", "D": "Cotton" },
    "correctAnswer": "B",
    "explanation": "Mwea is famous for rice production."
  },
  {
    "id": 57,
    "subject": "Agriculture",
    "question": "Mulching helps to conserve ________ in the soil.",
    "options": { "A": "Air", "B": "Moisture", "C": "Light", "D": "Stones" },
    "correctAnswer": "B",
    "explanation": "Mulch covers the soil preventing evaporation."
  },
  {
    "id": 58,
    "subject": "CRE",
    "question": "Moses received the Ten Commandments on Mount ________.",
    "options": { "A": "Carmel", "B": "Sinai", "C": "Olive", "D": "Kenya" },
    "correctAnswer": "B",
    "explanation": "The covenant was made at Mt. Sinai."
  },
  {
    "id": 59,
    "subject": "Homescience",
    "question": "We should wash our hands ________ visiting the toilet.",
    "options": { "A": "Before", "B": "After", "C": "While", "D": "Never" },
    "correctAnswer": "B",
    "explanation": "Hygiene dictates washing hands after using the toilet."
  },
  {
    "id": 60,
    "subject": "PE",
    "question": "In volleyball, the skill of receiving the ball with joined forearms is called ________.",
    "options": { "A": "Digging", "B": "Setting", "C": "Spiking", "D": "Serving" },
    "correctAnswer": "A",
    "explanation": "The 'dig' or 'bump' uses the forearms."
  },
  {
    "id": 61,
    "subject": "Mathematics",
    "question": "What is 25% as a fraction?",
    "options": { "A": "1/2", "B": "1/5", "C": "1/4", "D": "3/4" },
    "correctAnswer": "C",
    "explanation": "25/100 simplifies to 1/4."
  },
  {
    "id": 62,
    "subject": "Mathematics",
    "question": "The perimeter of a square is 20cm. What is the length of one side?",
    "options": { "A": "4cm", "B": "5cm", "C": "10cm", "D": "2cm" },
    "correctAnswer": "B",
    "explanation": "Perimeter = 4 x side. 20 / 4 = 5cm."
  },
  {
    "id": 63,
    "subject": "English",
    "question": "Select the pronoun: 'Sarah and I went to the market.'",
    "options": { "A": "Sarah", "B": "Market", "C": "I", "D": "Went" },
    "correctAnswer": "C",
    "explanation": "'I' is the pronoun replacing the speaker's name."
  },
  {
    "id": 64,
    "subject": "Kiswahili",
    "question": "Jaza pengo: Mtoto ________ anacheza.",
    "options": { "A": "yule", "B": "zule", "C": "kule", "D": "pale" },
    "correctAnswer": "A",
    "explanation": "Vivumishi vya kuonyesha: 'Mtoto yule'."
  },
  {
    "id": 65,
    "subject": "Science and Technology",
    "question": "The main source of light on Earth is the ________.",
    "options": { "A": "Moon", "B": "Sun", "C": "Stars", "D": "Fire" },
    "correctAnswer": "B",
    "explanation": "The sun provides natural light and heat."
  },
  {
    "id": 66,
    "subject": "Social Studies",
    "question": "The legislative arm of the government is called ________.",
    "options": { "A": "Judiciary", "B": "Executive", "C": "Parliament", "D": "Police" },
    "correctAnswer": "C",
    "explanation": "Parliament makes the laws."
  },
  {
    "id": 67,
    "subject": "Agriculture",
    "question": "Erosion caused by rain drops hitting bare ground is called ________.",
    "options": { "A": "Sheet erosion", "B": "Splash erosion", "C": "Gulley erosion", "D": "Rill erosion" },
    "correctAnswer": "B",
    "explanation": "Splash erosion is the initial impact of raindrops."
  },
  {
    "id": 68,
    "subject": "CRE",
    "question": "The three Hebrew men thrown into the fire were Shadrach, Meshach and ________.",
    "options": { "A": "Daniel", "B": "Abednego", "C": "Job", "D": "Jonah" },
    "correctAnswer": "B",
    "explanation": "Abednego was the third man in the furnace."
  },
  {
    "id": 69,
    "subject": "Homescience",
    "question": "A needle is used for ________.",
    "options": { "A": "Cutting", "B": "Sewing", "C": "Ironing", "D": "Pinning" },
    "correctAnswer": "B",
    "explanation": "Needles are the primary tool for sewing."
  },
  {
    "id": 70,
    "subject": "PE",
    "question": "The relay race baton is passed inside the ________.",
    "options": { "A": "Finish line", "B": "Change-over zone", "C": "Starting block", "D": "Field" },
    "correctAnswer": "B",
    "explanation": "The baton exchange must happen within the 20m zone."
  },
  {
    "id": 71,
    "subject": "Mathematics",
    "question": "Subtract: 1000 - 455",
    "options": { "A": "545", "B": "645", "C": "555", "D": "655" },
    "correctAnswer": "A",
    "explanation": "1000 minus 455 equals 545."
  },
  {
    "id": 72,
    "subject": "Mathematics",
    "question": "Which of these is a multiple of 6?",
    "options": { "A": "15", "B": "20", "C": "24", "D": "32" },
    "correctAnswer": "C",
    "explanation": "6 x 4 = 24."
  },
  {
    "id": 73,
    "subject": "English",
    "question": "What is the opposite of 'Ancient'?",
    "options": { "A": "Old", "B": "Modern", "C": "Antique", "D": "Past" },
    "correctAnswer": "B",
    "explanation": "Ancient means very old; Modern means new/recent."
  },
  {
    "id": 74,
    "subject": "Kiswahili",
    "question": "Kanusha: 'Mimi ninasoma.'",
    "options": { "A": "Mimi sitasoma", "B": "Mimi sikusoma", "C": "Mimi sisomi", "D": "Mimi sijasoma" },
    "correctAnswer": "C",
    "explanation": "Wakati uliopo (na) ukanushwa kwa (si...i). Sisomi."
  },
  {
    "id": 75,
    "subject": "Science and Technology",
    "question": "The organ used for breathing in fish is ________.",
    "options": { "A": "Lungs", "B": "Skin", "C": "Gills", "D": "Mouth" },
    "correctAnswer": "C",
    "explanation": "Fish extract oxygen from water using gills."
  },
  {
    "id": 76,
    "subject": "Social Studies",
    "question": "The first President of Kenya was ________.",
    "options": { "A": "Daniel Moi", "B": "Jomo Kenyatta", "C": "Mwai Kibaki", "D": "Uhuru Kenyatta" },
    "correctAnswer": "B",
    "explanation": "Mzee Jomo Kenyatta became president in 1964."
  },
  {
    "id": 77,
    "subject": "Agriculture",
    "question": "Which farm record shows the money spent and received?",
    "options": { "A": "Production record", "B": "Health record", "C": "Financial record", "D": "Breeding record" },
    "correctAnswer": "C",
    "explanation": "Financial records track income and expenses."
  },
  {
    "id": 78,
    "subject": "CRE",
    "question": "Jesus was baptized in River ________.",
    "options": { "A": "Nile", "B": "Jordan", "C": "Tana", "D": "Euphrates" },
    "correctAnswer": "B",
    "explanation": "John the Baptist baptized Jesus in the Jordan."
  },
  {
    "id": 79,
    "subject": "Homescience",
    "question": "To put out a fire caused by petrol, use ________.",
    "options": { "A": "Water", "B": "Sand", "C": "Petrol", "D": "Oil" },
    "correctAnswer": "B",
    "explanation": "Water spreads oil fires; sand starves oxygen."
  },
  {
    "id": 80,
    "subject": "PE",
    "question": "Dribbling is a skill mainly used in ________.",
    "options": { "A": "Swimming", "B": "Football", "C": "Volleyball", "D": "Tennis" },
    "correctAnswer": "B",
    "explanation": "Moving the ball with feet (soccer) or hands (basketball)."
  },
  {
    "id": 81,
    "subject": "Mathematics",
    "question": "Multiply: 15 x 100",
    "options": { "A": "150", "B": "1500", "C": "15000", "D": "1050" },
    "correctAnswer": "B",
    "explanation": "Add two zeros to 15."
  },
  {
    "id": 82,
    "subject": "Mathematics",
    "question": "Write 'Two thousand and four' in figures.",
    "options": { "A": "2004", "B": "2040", "C": "20004", "D": "2400" },
    "correctAnswer": "A",
    "explanation": "2000 + 4 = 2004."
  },
  {
    "id": 83,
    "subject": "English",
    "question": "A person who writes books is called an ________.",
    "options": { "A": "Editor", "B": "Author", "C": "Actor", "D": "Artist" },
    "correctAnswer": "B",
    "explanation": "An author writes books."
  },
  {
    "id": 84,
    "subject": "Kiswahili",
    "question": "Jina la heshima kwa baba wa baba yako ni ________.",
    "options": { "A": "Mjomba", "B": "Babu", "C": "Shangazi", "D": "Kakangu" },
    "correctAnswer": "B",
    "explanation": "Baba wa baba ni Babu (Grandfather)."
  },
  {
    "id": 85,
    "subject": "Science and Technology",
    "question": "Which of these materials is a conductor of electricity?",
    "options": { "A": "Wood", "B": "Plastic", "C": "Copper wire", "D": "Rubber" },
    "correctAnswer": "C",
    "explanation": "Metals like copper conduct electricity."
  },
  {
    "id": 86,
    "subject": "Social Studies",
    "question": "Tourism is often called an 'invisible' ________.",
    "options": { "A": "Import", "B": "Export", "C": "Factory", "D": "Market" },
    "correctAnswer": "B",
    "explanation": "Tourism earns foreign exchange like an export."
  },
  {
    "id": 87,
    "subject": "Agriculture",
    "question": "A young goat is called a ________.",
    "options": { "A": "Kid", "B": "Lamb", "C": "Calf", "D": "Chick" },
    "correctAnswer": "A",
    "explanation": "Kid is the term for a young goat."
  },
  {
    "id": 88,
    "subject": "CRE",
    "question": "The holy book for Muslims is called ________.",
    "options": { "A": "Bible", "B": "Quran", "C": "Vedas", "D": "Torah" },
    "correctAnswer": "B",
    "explanation": "The Quran is the central text of Islam."
  },
  {
    "id": 89,
    "subject": "Homescience",
    "question": "Foods like eggs, meat, and beans are rich in ________.",
    "options": { "A": "Proteins", "B": "Fats", "C": "Vitamins", "D": "Sugar" },
    "correctAnswer": "A",
    "explanation": "These are body-building foods (proteins)."
  },
  {
    "id": 90,
    "subject": "PE",
    "question": "The Olympic games are held every ________ years.",
    "options": { "A": "2", "B": "3", "C": "4", "D": "5" },
    "correctAnswer": "C",
    "explanation": "Summer Olympics occur every 4 years."
  },
  {
    "id": 91,
    "subject": "Mathematics",
    "question": "How many grams are in 1 kilogram?",
    "options": { "A": "10", "B": "100", "C": "1000", "D": "10000" },
    "correctAnswer": "C",
    "explanation": "Kilo means 1000."
  },
  {
    "id": 92,
    "subject": "Mathematics",
    "question": "What is the next number in the sequence: 2, 4, 6, 8, ...?",
    "options": { "A": "9", "B": "10", "C": "11", "D": "12" },
    "correctAnswer": "B",
    "explanation": "Add 2 to the previous number."
  },
  {
    "id": 93,
    "subject": "English",
    "question": "The comparative form of 'good' is ________.",
    "options": { "A": "Gooder", "B": "Better", "C": "Best", "D": "Goodest" },
    "correctAnswer": "B",
    "explanation": "Good -> Better -> Best."
  },
  {
    "id": 94,
    "subject": "Kiswahili",
    "question": "Kamilisha methali: Haraka haraka haina ________.",
    "options": { "A": "Baraka", "B": "Kazi", "C": "Chakula", "D": "Mwisho" },
    "correctAnswer": "A",
    "explanation": "Methali inafundisha kutopania mambo."
  },
  {
    "id": 95,
    "subject": "Science and Technology",
    "question": "Which animal lays eggs?",
    "options": { "A": "Cow", "B": "Hen", "C": "Dog", "D": "Cat" },
    "correctAnswer": "B",
    "explanation": "Birds (hens) reproduce by laying eggs."
  },
  {
    "id": 96,
    "subject": "Social Studies",
    "question": "The National Anthem of Kenya is sung in which two languages?",
    "options": { "A": "English and French", "B": "Kiswahili and English", "C": "Kiswahili and German", "D": "English and Kikuyu" },
    "correctAnswer": "B",
    "explanation": "These are the two official languages."
  },
  {
    "id": 97,
    "subject": "Agriculture",
    "question": "Which of these is a legume?",
    "options": { "A": "Maize", "B": "Bean", "C": "Potato", "D": "Cabbage" },
    "correctAnswer": "B",
    "explanation": "Beans are legumes (nitrogen fixing)."
  },
  {
    "id": 98,
    "subject": "CRE",
    "question": "Who betrayed Jesus?",
    "options": { "A": "Peter", "B": "Judas Iscariot", "C": "James", "D": "John" },
    "correctAnswer": "B",
    "explanation": "Judas betrayed Jesus for 30 silver coins."
  },
  {
    "id": 99,
    "subject": "Homescience",
    "question": "A balanced diet must contain ________ groups of food.",
    "options": { "A": "All", "B": "Two", "C": "Three", "D": "Five" },
    "correctAnswer": "A",
    "explanation": "It must contain carbs, proteins, vitamins, etc."
  },
  {
    "id": 100,
    "subject": "PE",
    "question": "A goalkeeper in football can handle the ball within the ________.",
    "options": { "A": "Center circle", "B": "Penalty box", "C": "Whole field", "D": "Corner arc" },
    "correctAnswer": "B",
    "explanation": "The 18-yard box is where the keeper can use hands."
  },
  {
    "id": 101,
    "subject": "Mathematics",
    "question": "3/5 of a number is 15. What is the number?",
    "options": { "A": "20", "B": "25", "C": "30", "D": "15" },
    "correctAnswer": "B",
    "explanation": "If 3 parts = 15, 1 part = 5. Total (5 parts) = 25."
  },
  {
    "id": 102,
    "subject": "Mathematics",
    "question": "Which shape has 3 sides?",
    "options": { "A": "Square", "B": "Triangle", "C": "Rectangle", "D": "Circle" },
    "correctAnswer": "B",
    "explanation": "Tri = three."
  },
  {
    "id": 103,
    "subject": "English",
    "question": "The plural of 'Child' is ________.",
    "options": { "A": "Childs", "B": "Children", "C": "Childrens", "D": "Childes" },
    "correctAnswer": "B",
    "explanation": "Irregular plural form."
  },
  {
    "id": 104,
    "subject": "Kiswahili",
    "question": "Neno 'kiti' liko katika ngeli gani?",
    "options": { "A": "M-WA", "B": "KI-VI", "C": "U-I", "D": "LI-YA" },
    "correctAnswer": "B",
    "explanation": "Kiti (singular) - Viti (plural) = KI-VI."
  },
  {
    "id": 105,
    "subject": "Science and Technology",
    "question": "Water freezes at ________ degrees Celsius.",
    "options": { "A": "100", "B": "0", "C": "10", "D": "50" },
    "correctAnswer": "B",
    "explanation": "0°C is the freezing point of water."
  },
  {
    "id": 106,
    "subject": "Social Studies",
    "question": "Coffee in Kenya is mainly grown for ________.",
    "options": { "A": "Export", "B": "Animals", "C": "Medicine", "D": "Decoration" },
    "correctAnswer": "A",
    "explanation": "It is a major cash crop for export."
  },
  {
    "id": 107,
    "subject": "Agriculture",
    "question": "The removal of weeds is called ________.",
    "options": { "A": "Planting", "B": "Weeding", "C": "Harvesting", "D": "Watering" },
    "correctAnswer": "B",
    "explanation": "Weeding removes unwanted plants."
  },
  {
    "id": 108,
    "subject": "CRE",
    "question": "The parents of Samuel were Elkanah and ________.",
    "options": { "A": "Mary", "B": "Hannah", "C": "Sarah", "D": "Elizabeth" },
    "correctAnswer": "B",
    "explanation": "Hannah prayed for a child and got Samuel."
  },
  {
    "id": 109,
    "subject": "Homescience",
    "question": "Which material is used to make shoes?",
    "options": { "A": "Paper", "B": "Leather", "C": "Glass", "D": "Leaves" },
    "correctAnswer": "B",
    "explanation": "Leather is durable and suitable for footwear."
  },
  {
    "id": 110,
    "subject": "PE",
    "question": "In swimming, the stroke done on the back is ________.",
    "options": { "A": "Freestyle", "B": "Backstroke", "C": "Breaststroke", "D": "Butterfly" },
    "correctAnswer": "B",
    "explanation": "The name describes the position (on back)."
  },
  {
    "id": 111,
    "subject": "Mathematics",
    "question": "Convert 200 cents to shillings.",
    "options": { "A": "Sh. 1", "B": "Sh. 2", "C": "Sh. 20", "D": "Sh. 200" },
    "correctAnswer": "B",
    "explanation": "100 cents = 1 shilling."
  },
  {
    "id": 112,
    "subject": "Mathematics",
    "question": "What is the value of 7 squared?",
    "options": { "A": "14", "B": "49", "C": "21", "D": "70" },
    "correctAnswer": "B",
    "explanation": "7 x 7 = 49."
  },
  {
    "id": 113,
    "subject": "English",
    "question": "Which word is an adjective? 'The huge elephant.'",
    "options": { "A": "The", "B": "Huge", "C": "Elephant", "D": "Run" },
    "correctAnswer": "B",
    "explanation": "Huge describes the noun (elephant)."
  },
  {
    "id": 114,
    "subject": "Kiswahili",
    "question": "Andika kwa tarakimu: Mia tano na mbili.",
    "options": { "A": "502", "B": "520", "C": "5002", "D": "52" },
    "correctAnswer": "A",
    "explanation": "Mia tano (500) + mbili (2) = 502."
  },
  {
    "id": 115,
    "subject": "Science and Technology",
    "question": "The force that pulls objects towards the earth is ________.",
    "options": { "A": "Friction", "B": "Gravity", "C": "Magnetism", "D": "Wind" },
    "correctAnswer": "B",
    "explanation": "Gravity is the attractive force of the earth."
  },
  {
    "id": 116,
    "subject": "Social Studies",
    "question": "Masoko is the Swahili word for ________.",
    "options": { "A": "Schools", "B": "Markets", "C": "Hospitals", "D": "Churches" },
    "correctAnswer": "B",
    "explanation": "Masoko (plural for Soko) means Markets."
  },
  {
    "id": 117,
    "subject": "Agriculture",
    "question": "A rake is used for ________.",
    "options": { "A": "Digging", "B": "Collecting trash", "C": "Cutting trees", "D": "Watering" },
    "correctAnswer": "B",
    "explanation": "Rakes gather leaves and light debris."
  },
  {
    "id": 118,
    "subject": "CRE",
    "question": "David killed Goliath using a ________.",
    "options": { "A": "Sword", "B": "Sling and stone", "C": "Spear", "D": "Gun" },
    "correctAnswer": "B",
    "explanation": "He used a sling to hit Goliath."
  },
  {
    "id": 119,
    "subject": "Homescience",
    "question": "A first aid kit must contain ________.",
    "options": { "A": "Toys", "B": "Bandages", "C": "Sweets", "D": "Books" },
    "correctAnswer": "B",
    "explanation": "Bandages are essential for covering wounds."
  },
  {
    "id": 120,
    "subject": "PE",
    "question": "The highest award in the Olympics is the ________ medal.",
    "options": { "A": "Silver", "B": "Gold", "C": "Bronze", "D": "Copper" },
    "correctAnswer": "B",
    "explanation": "Gold is for 1st place."
  },
  {
    "id": 121,
    "subject": "Mathematics",
    "question": "Write the Roman numeral for 10.",
    "options": { "A": "V", "B": "X", "C": "L", "D": "C" },
    "correctAnswer": "B",
    "explanation": "X represents 10."
  },
  {
    "id": 122,
    "subject": "Mathematics",
    "question": "Add: 0.5 + 0.2",
    "options": { "A": "0.7", "B": "0.3", "C": "0.52", "D": "7.0" },
    "correctAnswer": "A",
    "explanation": "5 tenths + 2 tenths = 7 tenths."
  },
  {
    "id": 123,
    "subject": "English",
    "question": "A baby dog is called a ________.",
    "options": { "A": "Kitten", "B": "Puppy", "C": "Cub", "D": "Calf" },
    "correctAnswer": "B",
    "explanation": "Puppy is the young of a dog."
  },
  {
    "id": 124,
    "subject": "Kiswahili",
    "question": "Chagua kiunganishi: Baba ________ mama.",
    "options": { "A": "na", "B": "kwa", "C": "cha", "D": "la" },
    "correctAnswer": "A",
    "explanation": "'Na' huunganisha nomino mbili."
  },
  {
    "id": 125,
    "subject": "Science and Technology",
    "question": "Which of these is a non-living thing?",
    "options": { "A": "Tree", "B": "Stone", "C": "Cat", "D": "Man" },
    "correctAnswer": "B",
    "explanation": "Stones do not grow, breathe, or reproduce."
  },
  {
    "id": 126,
    "subject": "Social Studies",
    "question": "Kenya gained independence in the year ________.",
    "options": { "A": "1963", "B": "1978", "C": "1990", "D": "2000" },
    "correctAnswer": "A",
    "explanation": "December 12, 1963."
  },
  {
    "id": 127,
    "subject": "Agriculture",
    "question": "Chicken kept for meat are called ________.",
    "options": { "A": "Layers", "B": "Broilers", "C": "Kienyeji", "D": "Cocks" },
    "correctAnswer": "B",
    "explanation": "Broilers are reared specifically for meat production."
  },
  {
    "id": 128,
    "subject": "CRE",
    "question": "The first book of the Bible is ________.",
    "options": { "A": "Exodus", "B": "Genesis", "C": "Matthew", "D": "Psalms" },
    "correctAnswer": "B",
    "explanation": "Genesis means origin/beginning."
  },
  {
    "id": 129,
    "subject": "Homescience",
    "question": "We brush our teeth to prevent ________.",
    "options": { "A": "Hunger", "B": "Tooth decay", "C": "Thirst", "D": "Sleep" },
    "correctAnswer": "B",
    "explanation": "Removing plaque prevents cavities."
  },
  {
    "id": 130,
    "subject": "PE",
    "question": "A referee uses a ________ to control a football match.",
    "options": { "A": "Bell", "B": "Whistle", "C": "Drum", "D": "Phone" },
    "correctAnswer": "B",
    "explanation": "The whistle signals fouls, starts, and stops."
  },
  {
    "id": 131,
    "subject": "Mathematics",
    "question": "Divide 48 by 6.",
    "options": { "A": "7", "B": "8", "C": "9", "D": "6" },
    "correctAnswer": "B",
    "explanation": "8 x 6 = 48."
  },
  {
    "id": 132,
    "subject": "Mathematics",
    "question": "What is the perimeter of a rectangle with L=10, W=5?",
    "options": { "A": "15", "B": "30", "C": "50", "D": "25" },
    "correctAnswer": "B",
    "explanation": "2 x (10 + 5) = 30."
  },
  {
    "id": 133,
    "subject": "English",
    "question": "Choose the correct preposition: The book is ________ the table.",
    "options": { "A": "In", "B": "On", "C": "At", "D": "To" },
    "correctAnswer": "B",
    "explanation": "On indicates surface contact."
  },
  {
    "id": 134,
    "subject": "Kiswahili",
    "question": "Mnyama gani ana shingo ndefu?",
    "options": { "A": "Simba", "B": "Twiga", "C": "Tembo", "D": "Fisi" },
    "correctAnswer": "B",
    "explanation": "Twiga anasifika kwa shingo ndefu."
  },
  {
    "id": 135,
    "subject": "Science and Technology",
    "question": "The main computer brain is called the ________.",
    "options": { "A": "CPU", "B": "Mouse", "C": "Screen", "D": "Disk" },
    "correctAnswer": "A",
    "explanation": "Central Processing Unit processes data."
  },
  {
    "id": 136,
    "subject": "Social Studies",
    "question": "Mount Kenya is a ________ mountain.",
    "options": { "A": "Volcanic", "B": "Block", "C": "Fold", "D": "Residual" },
    "correctAnswer": "A",
    "explanation": "It was formed by volcanic activity."
  },
  {
    "id": 137,
    "subject": "Agriculture",
    "question": "Compost manure is made from ________.",
    "options": { "A": "Chemicals", "B": "Plant remains", "C": "Plastic", "D": "Stones" },
    "correctAnswer": "B",
    "explanation": "Decomposed organic matter makes compost."
  },
  {
    "id": 138,
    "subject": "CRE",
    "question": "Jesus fed 5000 people with ________.",
    "options": { "A": "5 loaves and 2 fish", "B": "2 loaves and 5 fish", "C": "Manna", "D": "Bread only" },
    "correctAnswer": "A",
    "explanation": "Miracle of 5 loaves and 2 fish."
  },
  {
    "id": 139,
    "subject": "Homescience",
    "question": "Dirty hair can keep ________.",
    "options": { "A": "Lice", "B": "Ants", "C": "Spiders", "D": "Flies" },
    "correctAnswer": "A",
    "explanation": "Lice thrive in dirty, unkempt hair."
  },
  {
    "id": 140,
    "subject": "PE",
    "question": "Physical fitness helps our bodies to be ________.",
    "options": { "A": "Weak", "B": "Healthy", "C": "Sick", "D": "Tired" },
    "correctAnswer": "B",
    "explanation": "Exercise promotes health."
  },
  {
    "id": 141,
    "subject": "Mathematics",
    "question": "1/2 + 1/2 = ?",
    "options": { "A": "1/4", "B": "1", "C": "2", "D": "1/2" },
    "correctAnswer": "B",
    "explanation": "Two halves make a whole."
  },
  {
    "id": 142,
    "subject": "Mathematics",
    "question": "How many sides does a pentagon have?",
    "options": { "A": "4", "B": "5", "C": "6", "D": "8" },
    "correctAnswer": "B",
    "explanation": "Penta means 5."
  },
  {
    "id": 143,
    "subject": "English",
    "question": "The boy ________ to school yesterday.",
    "options": { "A": "Walk", "B": "Walked", "C": "Walks", "D": "Walking" },
    "correctAnswer": "B",
    "explanation": "Past tense of walk."
  },
  {
    "id": 144,
    "subject": "Kiswahili",
    "question": "Chagua neno sahihi: ________ amekuja.",
    "options": { "A": "Kiti", "B": "Mgeni", "C": "Miti", "D": "Majani" },
    "correctAnswer": "B",
    "explanation": "Mgeni (A-WA ngeli) ndiye 'amekuja'."
  },
  {
    "id": 145,
    "subject": "Science and Technology",
    "question": "We use our ears to ________.",
    "options": { "A": "See", "B": "Hear", "C": "Smell", "D": "Taste" },
    "correctAnswer": "B",
    "explanation": "Ears are organs for hearing."
  },
  {
    "id": 146,
    "subject": "Social Studies",
    "question": "Lake Victoria is shared by Kenya, Uganda and ________.",
    "options": { "A": "Sudan", "B": "Tanzania", "C": "Rwanda", "D": "Somalia" },
    "correctAnswer": "B",
    "explanation": "These 3 countries border the lake."
  },
  {
    "id": 147,
    "subject": "Agriculture",
    "question": "A jembe is mainly used for ________.",
    "options": { "A": "Digging", "B": "Cutting", "C": "Watering", "D": "Pruning" },
    "correctAnswer": "A",
    "explanation": "Jembe (hoe) is a primary digging tool."
  },
  {
    "id": 148,
    "subject": "CRE",
    "question": "The wife of Abraham was ________.",
    "options": { "A": "Sarah", "B": "Ruth", "C": "Mary", "D": "Eve" },
    "correctAnswer": "A",
    "explanation": "Sarah gave birth to Isaac."
  },
  {
    "id": 149,
    "subject": "Homescience",
    "question": "A broom is used for ________.",
    "options": { "A": "Dusting", "B": "Sweeping", "C": "Mopping", "D": "Scrubbing" },
    "correctAnswer": "B",
    "explanation": "Sweeping floors."
  },
  {
    "id": 150,
    "subject": "PE",
    "question": "How many laps make a 400m race on a standard track?",
    "options": { "A": "1", "B": "2", "C": "4", "D": "12" },
    "correctAnswer": "A",
    "explanation": "One full lap is 400m."
  },
  {
    "id": 151,
    "subject": "Mathematics",
    "question": "What is 10 x 10?",
    "options": { "A": "20", "B": "100", "C": "1000", "D": "101" },
    "correctAnswer": "B",
    "explanation": "Multiplication."
  },
  {
    "id": 152,
    "subject": "Mathematics",
    "question": "Which number is even?",
    "options": { "A": "3", "B": "8", "C": "7", "D": "11" },
    "correctAnswer": "B",
    "explanation": "Divisible by 2."
  },
  {
    "id": 153,
    "subject": "English",
    "question": "A female lion is called a ________.",
    "options": { "A": "Tiger", "B": "Lioness", "C": "Leopard", "D": "Cat" },
    "correctAnswer": "B",
    "explanation": "Lioness denotes female."
  },
  {
    "id": 154,
    "subject": "Kiswahili",
    "question": "Wingi wa 'Jicho' ni ________.",
    "options": { "A": "Majicho", "B": "Macho", "C": "Jicho", "D": "Vijicho" },
    "correctAnswer": "B",
    "explanation": "Ngeli ya LI-YA (Jicho - Macho)."
  },
  {
    "id": 155,
    "subject": "Science and Technology",
    "question": "A cow is a ________ because it eats grass.",
    "options": { "A": "Carnivore", "B": "Herbivore", "C": "Omnivore", "D": "Insectivore" },
    "correctAnswer": "B",
    "explanation": "Herbivores eat plants."
  },
  {
    "id": 156,
    "subject": "Social Studies",
    "question": "The capital city of Kenya is ________.",
    "options": { "A": "Mombasa", "B": "Nairobi", "C": "Kisumu", "D": "Nakuru" },
    "correctAnswer": "B",
    "explanation": "Nairobi is the capital."
  },
  {
    "id": 157,
    "subject": "Agriculture",
    "question": "Watering crops during dry season is called ________.",
    "options": { "A": "Irrigation", "B": "Flooding", "C": "Drainage", "D": "Rainfall" },
    "correctAnswer": "A",
    "explanation": "Irrigation supplies water artificially."
  },
  {
    "id": 158,
    "subject": "CRE",
    "question": "Adam and Eve lived in the Garden of ________.",
    "options": { "A": "Gethsemane", "B": "Eden", "C": "Olive", "D": "Paradise" },
    "correctAnswer": "B",
    "explanation": "Garden of Eden."
  },
  {
    "id": 159,
    "subject": "Homescience",
    "question": "We should keep medicine out of reach of ________.",
    "options": { "A": "Adults", "B": "Children", "C": "Doctors", "D": "Nurses" },
    "correctAnswer": "B",
    "explanation": "Safety precaution to prevent poisoning."
  },
  {
    "id": 160,
    "subject": "PE",
    "question": "Kicking the ball into the net scores a ________.",
    "options": { "A": "Point", "B": "Goal", "C": "Try", "D": "Run" },
    "correctAnswer": "B",
    "explanation": "In football, it's a goal."
  },
  {
    "id": 161,
    "subject": "Mathematics",
    "question": "What is 100 divided by 4?",
    "options": { "A": "20", "B": "25", "C": "24", "D": "30" },
    "correctAnswer": "B",
    "explanation": "4 quarters make 100."
  },
  {
    "id": 162,
    "subject": "Mathematics",
    "question": "Name the shape of a ball.",
    "options": { "A": "Circle", "B": "Sphere", "C": "Cube", "D": "Cone" },
    "correctAnswer": "B",
    "explanation": "3D round object."
  },
  {
    "id": 163,
    "subject": "English",
    "question": "He drove the car ________.",
    "options": { "A": "Careful", "B": "Carefully", "C": "Care", "D": "Caring" },
    "correctAnswer": "B",
    "explanation": "Adverb modifying 'drove'."
  },
  {
    "id": 164,
    "subject": "Kiswahili",
    "question": "Mtoto wa ng'ombe anaitwa ________.",
    "options": { "A": "Ndama", "B": "Kifaranga", "C": "Mwanakondoo", "D": "Mtoto" },
    "correctAnswer": "A",
    "explanation": "Ndama is a calf."
  },
  {
    "id": 165,
    "subject": "Science and Technology",
    "question": "Which cloud type brings rain?",
    "options": { "A": "Cirrus", "B": "Nimbus", "C": "Stratus", "D": "Cumulus" },
    "correctAnswer": "B",
    "explanation": "Nimbus clouds are rain-bearing."
  },
  {
    "id": 166,
    "subject": "Social Studies",
    "question": "The currency used in Kenya is the ________.",
    "options": { "A": "Dollar", "B": "Shilling", "C": "Pound", "D": "Euro" },
    "correctAnswer": "B",
    "explanation": "Kenya Shilling (KES)."
  },
  {
    "id": 167,
    "subject": "Agriculture",
    "question": "Gumboots protect the farmer's ________.",
    "options": { "A": "Hands", "B": "Feet", "C": "Head", "D": "Eyes" },
    "correctAnswer": "B",
    "explanation": "Protective footwear."
  },
  {
    "id": 168,
    "subject": "CRE",
    "question": "Noah built an ________.",
    "options": { "A": "Ark", "B": "Alt", "C": "Aeroplane", "D": "Army" },
    "correctAnswer": "A",
    "explanation": "Ark to survive the flood."
  },
  {
    "id": 169,
    "subject": "Homescience",
    "question": "Which item is used to cut nails?",
    "options": { "A": "Knife", "B": "Nail cutter", "C": "Razor", "D": "Scissors" },
    "correctAnswer": "B",
    "explanation": "Specific tool for hygiene."
  },
  {
    "id": 170,
    "subject": "PE",
    "question": "We use a racket to play ________.",
    "options": { "A": "Football", "B": "Tennis", "C": "Rugby", "D": "Basketball" },
    "correctAnswer": "B",
    "explanation": "Tennis uses rackets."
  },
  {
    "id": 171,
    "subject": "Mathematics",
    "question": "How many hours in a day?",
    "options": { "A": "12", "B": "24", "C": "48", "D": "60" },
    "correctAnswer": "B",
    "explanation": "Full rotation of earth."
  },
  {
    "id": 172,
    "subject": "Mathematics",
    "question": "Subtract: 50 - 15",
    "options": { "A": "45", "B": "35", "C": "25", "D": "30" },
    "correctAnswer": "B",
    "explanation": "Basic subtraction."
  },
  {
    "id": 173,
    "subject": "English",
    "question": "Which is a conjunction? 'Bread and butter'.",
    "options": { "A": "Bread", "B": "And", "C": "Butter", "D": "Eat" },
    "correctAnswer": "B",
    "explanation": "And joins the words."
  },
  {
    "id": 174,
    "subject": "Kiswahili",
    "question": "Tunda lenye rangi ya manjano ni ________.",
    "options": { "A": "Parachichi", "B": "Ndizi mbivu", "C": "Tufaha", "D": "Zabibu" },
    "correctAnswer": "B",
    "explanation": "Ripe bananas are yellow."
  },
  {
    "id": 175,
    "subject": "Science and Technology",
    "question": "The skeleton provides ________ to the body.",
    "options": { "A": "Food", "B": "Support", "C": "Blood", "D": "Water" },
    "correctAnswer": "B",
    "explanation": "Structural framework."
  },
  {
    "id": 176,
    "subject": "Social Studies",
    "question": "Jamhuri Day is celebrated on ________.",
    "options": { "A": "1st June", "B": "12th December", "C": "20th October", "D": "1st May" },
    "correctAnswer": "B",
    "explanation": "Republic Day."
  },
  {
    "id": 177,
    "subject": "Agriculture",
    "question": "Bees give us ________.",
    "options": { "A": "Milk", "B": "Honey", "C": "Eggs", "D": "Meat" },
    "correctAnswer": "B",
    "explanation": "Honey production."
  },
  {
    "id": 178,
    "subject": "CRE",
    "question": "The son of God is ________.",
    "options": { "A": "Peter", "B": "Jesus", "C": "Paul", "D": "John" },
    "correctAnswer": "B",
    "explanation": "Central Christian belief."
  },
  {
    "id": 179,
    "subject": "Homescience",
    "question": "Ironing clothes removes ________.",
    "options": { "A": "Dirt", "B": "Creases", "C": "Color", "D": "Buttons" },
    "correctAnswer": "B",
    "explanation": "Smooths the fabric."
  },
  {
    "id": 180,
    "subject": "PE",
    "question": "The leader of a sports team is the ________.",
    "options": { "A": "Coach", "B": "Captain", "C": "Referee", "D": "Fan" },
    "correctAnswer": "B",
    "explanation": "Player leader."
  },
  {
    "id": 181,
    "subject": "Mathematics",
    "question": "7 x 8 = ?",
    "options": { "A": "54", "B": "56", "C": "49", "D": "64" },
    "correctAnswer": "B",
    "explanation": "Multiplication table."
  },
  {
    "id": 182,
    "subject": "Mathematics",
    "question": "What is 0.1 as a fraction?",
    "options": { "A": "1/10", "B": "1/100", "C": "1/1", "D": "10/1" },
    "correctAnswer": "A",
    "explanation": "One tenth."
  },
  {
    "id": 183,
    "subject": "English",
    "question": "The sun rises in the ________.",
    "options": { "A": "West", "B": "East", "C": "North", "D": "South" },
    "correctAnswer": "B",
    "explanation": "Direction of sunrise."
  },
  {
    "id": 184,
    "subject": "Kiswahili",
    "question": "Chagua kivumishi: Msichana ________.",
    "options": { "A": "kimbia", "B": "mrembo", "C": "lala", "D": "cheza" },
    "correctAnswer": "B",
    "explanation": "Mrembo describes Msichana."
  },
  {
    "id": 185,
    "subject": "Science and Technology",
    "question": "Boiling water kills ________.",
    "options": { "A": "Germs", "B": "Taste", "C": "Color", "D": "Minerals" },
    "correctAnswer": "A",
    "explanation": "Sterilization method."
  },
  {
    "id": 186,
    "subject": "Social Studies",
    "question": "A compass shows ________.",
    "options": { "A": "Time", "B": "Direction", "C": "Weight", "D": "Temperature" },
    "correctAnswer": "B",
    "explanation": "Navigation tool."
  },
  {
    "id": 187,
    "subject": "Agriculture",
    "question": "Cows are kept in a ________.",
    "options": { "A": "Sty", "B": "Shed", "C": "Hutch", "D": "Kennel" },
    "correctAnswer": "B",
    "explanation": "Cattle shed."
  },
  {
    "id": 188,
    "subject": "CRE",
    "question": "The Bible has ________ testaments.",
    "options": { "A": "1", "B": "2", "C": "3", "D": "4" },
    "correctAnswer": "B",
    "explanation": "Old and New."
  },
  {
    "id": 189,
    "subject": "Homescience",
    "question": "We wear gumboots when it is ________.",
    "options": { "A": "Hot", "B": "Muddy", "C": "Dry", "D": "Windy" },
    "correctAnswer": "B",
    "explanation": "Protection from mud/water."
  },
  {
    "id": 190,
    "subject": "PE",
    "question": "Sprinting is running ________.",
    "options": { "A": "Slowly", "B": "Fast", "C": "Backwards", "D": "Sideways" },
    "correctAnswer": "B",
    "explanation": "High speed running."
  },
  {
    "id": 191,
    "subject": "Mathematics",
    "question": "20 + 20 + 20 = ?",
    "options": { "A": "40", "B": "60", "C": "80", "D": "100" },
    "correctAnswer": "B",
    "explanation": "Repeated addition."
  },
  {
    "id": 192,
    "subject": "Mathematics",
    "question": "Which coin has the highest value?",
    "options": { "A": "5 bob", "B": "20 bob", "C": "10 bob", "D": "1 bob" },
    "correctAnswer": "B",
    "explanation": "20 shillings is largest coin."
  },
  {
    "id": 193,
    "subject": "English",
    "question": "Opposite of 'Happy' is ________.",
    "options": { "A": "Joyful", "B": "Sad", "C": "Glad", "D": "Excited" },
    "correctAnswer": "B",
    "explanation": "Antonym."
  },
  {
    "id": 194,
    "subject": "Kiswahili",
    "question": "Salamu ya asubuhi ni ________.",
    "options": { "A": "Masalkheri", "B": "Sabalkheri", "C": "Lala salama", "D": "Kwaheri" },
    "correctAnswer": "B",
    "explanation": "Good morning."
  },
  {
    "id": 195,
    "subject": "Science and Technology",
    "question": "A wheelbarrow is a simple ________.",
    "options": { "A": "Animal", "B": "Machine", "C": "Plant", "D": "House" },
    "correctAnswer": "B",
    "explanation": "Makes work easier."
  },
  {
    "id": 196,
    "subject": "Social Studies",
    "question": "Fish are caught in ________.",
    "options": { "A": "Forests", "B": "Water bodies", "C": "Mountains", "D": "Deserts" },
    "correctAnswer": "B",
    "explanation": "Habitat of fish."
  },
  {
    "id": 197,
    "subject": "Agriculture",
    "question": "Pigs are kept in a ________.",
    "options": { "A": "Shed", "B": "Sty", "C": "Stable", "D": "Coop" },
    "correctAnswer": "B",
    "explanation": "Pig sty."
  },
  {
    "id": 198,
    "subject": "CRE",
    "question": "Christmas celebrates the birth of ________.",
    "options": { "A": "Moses", "B": "Jesus", "C": "David", "D": "Noah" },
    "correctAnswer": "B",
    "explanation": "Dec 25th."
  },
  {
    "id": 199,
    "subject": "Homescience",
    "question": "We use a towel to ________.",
    "options": { "A": "Wash", "B": "Dry our body", "C": "Scrub", "D": "Sleep" },
    "correctAnswer": "B",
    "explanation": "Absorbs water."
  },
  {
    "id": 200,
    "subject": "PE",
    "question": "Rugby players use an ________ ball.",
    "options": { "A": "Round", "B": "Oval", "C": "Square", "D": "Flat" },
    "correctAnswer": "B",
    "explanation": "Egg shaped ball."
  },
  {
    "id": 201,
    "subject": "Mathematics",
    "question": "What is the total value of digit 5 in the number 254,300?",
    "options": { "A": "500", "B": "5,000", "C": "50,000", "D": "50" },
    "correctAnswer": "C",
    "explanation": "The digit 5 is in the ten thousands place."
  },
  {
    "id": 202,
    "subject": "Mathematics",
    "question": "Work out: 4.25 + 1.63",
    "options": { "A": "5.88", "B": "6.88", "C": "5.85", "D": "5.78" },
    "correctAnswer": "A",
    "explanation": "Align decimal points and add: 4.25 + 1.63 = 5.88."
  },
  {
    "id": 203,
    "subject": "English",
    "question": "Choose the correct homophone: 'I ________ a letter to my friend.'",
    "options": { "A": "Right", "B": "Rite", "C": "Wrote", "D": "Rot" },
    "correctAnswer": "C",
    "explanation": "Wrote is the past tense of write."
  },
  {
    "id": 204,
    "subject": "Kiswahili",
    "question": "Tegua kitendawili: 'Kuku wangu hutaga miibani'.",
    "options": { "A": "Nanasi", "B": "Chungwa", "C": "Embe", "D": "Ndizi" },
    "correctAnswer": "A",
    "explanation": "Nanasi ni tunda lenye miiba."
  },
  {
    "id": 205,
    "subject": "Science and Technology",
    "question": "Which blood vessels carry blood away from the heart?",
    "options": { "A": "Veins", "B": "Arteries", "C": "Capillaries", "D": "Valves" },
    "correctAnswer": "B",
    "explanation": "Arteries carry oxygenated blood away from the heart."
  },
  {
    "id": 206,
    "subject": "Social Studies",
    "question": "The national motto of Kenya is ________.",
    "options": { "A": "Nyayo", "B": "Harambee", "C": "Amani", "D": "Umoja" },
    "correctAnswer": "B",
    "explanation": "Harambee means 'pulling together'."
  },
  {
    "id": 207,
    "subject": "Agriculture",
    "question": "Which of the following is a tuber crop?",
    "options": { "A": "Maize", "B": "Sweet potato", "C": "Bean", "D": "Tomato" },
    "correctAnswer": "B",
    "explanation": "Sweet potatoes store food in underground tubers."
  },
  {
    "id": 208,
    "subject": "CRE",
    "question": "The parents of John the Baptist were Zechariah and ________.",
    "options": { "A": "Mary", "B": "Elizabeth", "C": "Martha", "D": "Salome" },
    "correctAnswer": "B",
    "explanation": "Elizabeth was the mother of John the Baptist."
  },
  {
    "id": 209,
    "subject": "Homescience",
    "question": "Which method of cooking involves cooking food in hot fat/oil?",
    "options": { "A": "Boiling", "B": "Frying", "C": "Steaming", "D": "Baking" },
    "correctAnswer": "B",
    "explanation": "Frying uses hot oil."
  },
  {
    "id": 210,
    "subject": "PE",
    "question": "The standard length of an athletics track is ________ meters.",
    "options": { "A": "200", "B": "300", "C": "400", "D": "500" },
    "correctAnswer": "C",
    "explanation": "Standard tracks are 400m long."
  },
  {
    "id": 211,
    "subject": "Mathematics",
    "question": "Convert 3/4 to a decimal.",
    "options": { "A": "0.25", "B": "0.50", "C": "0.75", "D": "0.40" },
    "correctAnswer": "C",
    "explanation": "3 divided by 4 equals 0.75."
  },
  {
    "id": 212,
    "subject": "Mathematics",
    "question": "What is the HCF of 12 and 18?",
    "options": { "A": "3", "B": "6", "C": "9", "D": "36" },
    "correctAnswer": "B",
    "explanation": "Factors of 12 (1,2,3,4,6,12), 18 (1,2,3,6,9,18). Highest is 6."
  },
  {
    "id": 213,
    "subject": "English",
    "question": "Which sentence is in the Future Tense?",
    "options": { "A": "I am eating.", "B": "I will eat.", "C": "I ate.", "D": "I eat." },
    "correctAnswer": "B",
    "explanation": "'Will' indicates future action."
  },
  {
    "id": 214,
    "subject": "Kiswahili",
    "question": "Kisawe cha neno 'barabara' ni ________.",
    "options": { "A": "Njia", "B": "Mto", "C": "Shamba", "D": "Jumba" },
    "correctAnswer": "A",
    "explanation": "Barabara na njia zina maana sawa."
  },
  {
    "id": 215,
    "subject": "Science and Technology",
    "question": "Which part of a flower produces pollen grains?",
    "options": { "A": "Petal", "B": "Stigma", "C": "Anther", "D": "Sepal" },
    "correctAnswer": "C",
    "explanation": "The anther produces pollen."
  },
  {
    "id": 216,
    "subject": "Social Studies",
    "question": "The rotation of the earth causes ________.",
    "options": { "A": "Seasons", "B": "Day and night", "C": "Eclipse", "D": "Tides" },
    "correctAnswer": "B",
    "explanation": "Rotation on its axis causes day and night cycles."
  },
  {
    "id": 217,
    "subject": "Agriculture",
    "question": "Which animal provides mohair?",
    "options": { "A": "Sheep", "B": "Angora Goat", "C": "Rabbit", "D": "Camel" },
    "correctAnswer": "B",
    "explanation": "Angora goats produce mohair fiber."
  },
  {
    "id": 218,
    "subject": "CRE",
    "question": "The first King of Israel was rejected because of ________.",
    "options": { "A": "Disobedience", "B": "Theft", "C": "Murder", "D": "Lying" },
    "correctAnswer": "A",
    "explanation": "Saul disobeyed God's command regarding Amalekites."
  },
  {
    "id": 219,
    "subject": "Homescience",
    "question": "Which type of fuel is obtained from trees?",
    "options": { "A": "Gas", "B": "Kerosene", "C": "Charcoal", "D": "Electricity" },
    "correctAnswer": "C",
    "explanation": "Charcoal is made by burning wood."
  },
  {
    "id": 220,
    "subject": "PE",
    "question": "In football, a penalty kick is taken ________ yards from the goal line.",
    "options": { "A": "10", "B": "12", "C": "18", "D": "6" },
    "correctAnswer": "B",
    "explanation": "12 yards (approx 11 meters) is the penalty spot."
  },
  {
    "id": 221,
    "subject": "Mathematics",
    "question": "Calculate the area of a triangle with base 10cm and height 8cm.",
    "options": { "A": "80 cm2", "B": "40 cm2", "C": "18 cm2", "D": "36 cm2" },
    "correctAnswer": "B",
    "explanation": "Area = 1/2 x base x height (0.5 x 10 x 8 = 40)."
  },
  {
    "id": 222,
    "subject": "Mathematics",
    "question": "If x + 5 = 12, what is x?",
    "options": { "A": "17", "B": "6", "C": "7", "D": "8" },
    "correctAnswer": "C",
    "explanation": "12 - 5 = 7."
  },
  {
    "id": 223,
    "subject": "English",
    "question": "Complete the proverb: 'A stitch in time saves ________.'",
    "options": { "A": "Money", "B": "Nine", "C": "Time", "D": "Energy" },
    "correctAnswer": "B",
    "explanation": "Common proverb: A stitch in time saves nine."
  },
  {
    "id": 224,
    "subject": "Kiswahili",
    "question": "Chagua neno la heshima: ________ amekuja kututembelea.",
    "options": { "A": "Huyu", "B": "Huyo", "C": "Hayati", "D": "Mwendazake" },
    "correctAnswer": "A",
    "explanation": "Huyu (kwa mtu aliye hai na karibu)."
  },
  {
    "id": 225,
    "subject": "Science and Technology",
    "question": "The liquid part of blood is called ________.",
    "options": { "A": "Red cells", "B": "White cells", "C": "Plasma", "D": "Platelets" },
    "correctAnswer": "C",
    "explanation": "Plasma is the liquid carrier in blood."
  },
  {
    "id": 226,
    "subject": "Social Studies",
    "question": "Vasco da Gama built a pillar in which town?",
    "options": { "A": "Mombasa", "B": "Malindi", "C": "Lamu", "D": "Kilifi" },
    "correctAnswer": "B",
    "explanation": "The Vasco da Gama pillar is in Malindi."
  },
  {
    "id": 227,
    "subject": "Agriculture",
    "question": "Rotating crops helps to control ________.",
    "options": { "A": "Rainfall", "B": "Sunlight", "C": "Pests and diseases", "D": "Wind" },
    "correctAnswer": "C",
    "explanation": "Breaks the life cycle of pests."
  },
  {
    "id": 228,
    "subject": "CRE",
    "question": "The skill of making covenants was practiced by ________.",
    "options": { "A": "Noah", "B": "Adam", "C": "Abraham", "D": "Cain" },
    "correctAnswer": "C",
    "explanation": "Abraham is known as the father of covenants."
  },
  {
    "id": 229,
    "subject": "Homescience",
    "question": "Which vitamin prevents night blindness?",
    "options": { "A": "Vitamin A", "B": "Vitamin B", "C": "Vitamin C", "D": "Vitamin D" },
    "correctAnswer": "A",
    "explanation": "Vitamin A is essential for eye health."
  },
  {
    "id": 230,
    "subject": "PE",
    "question": "The 'crouch' position is used in starting which race?",
    "options": { "A": "Marathon", "B": "Sprints", "C": "Walking race", "D": "Cross country" },
    "correctAnswer": "B",
    "explanation": "Sprints use the crouch start."
  },
  {
    "id": 231,
    "subject": "Mathematics",
    "question": "Which of these is a reflex angle?",
    "options": { "A": "45 degrees", "B": "90 degrees", "C": "180 degrees", "D": "270 degrees" },
    "correctAnswer": "D",
    "explanation": "Reflex angles are greater than 180 degrees."
  },
  {
    "id": 232,
    "subject": "Mathematics",
    "question": "Express 3/100 as a percentage.",
    "options": { "A": "30%", "B": "3%", "C": "0.3%", "D": "300%" },
    "correctAnswer": "B",
    "explanation": "Per cent means per 100."
  },
  {
    "id": 233,
    "subject": "English",
    "question": "The plural of 'Sheep' is ________.",
    "options": { "A": "Sheeps", "B": "Sheep", "C": "Shoop", "D": "Ship" },
    "correctAnswer": "B",
    "explanation": "Sheep stays the same in plural."
  },
  {
    "id": 234,
    "subject": "Kiswahili",
    "question": "Jaza pengo: Umoja ni nguvu utengano ni ________.",
    "options": { "A": "Mauti", "B": "Udhaifu", "C": "Hasara", "D": "Ujinga" },
    "correctAnswer": "B",
    "explanation": "Methali: Utengano ni udhaifu."
  },
  {
    "id": 235,
    "subject": "Science and Technology",
    "question": "Which animal is an invertebrate?",
    "options": { "A": "Frog", "B": "Snake", "C": "Snail", "D": "Fish" },
    "correctAnswer": "C",
    "explanation": "Snails do not have a backbone."
  },
  {
    "id": 236,
    "subject": "Social Studies",
    "question": "The equator passes through which town in Kenya?",
    "options": { "A": "Nanyuki", "B": "Nakuru", "C": "Eldoret", "D": "Naivasha" },
    "correctAnswer": "A",
    "explanation": "Nanyuki is a famous equator town."
  },
  {
    "id": 237,
    "subject": "Agriculture",
    "question": "Which of these is a biting and chewing pest?",
    "options": { "A": "Aphid", "B": "Locust", "C": "Mosquito", "D": "Mite" },
    "correctAnswer": "B",
    "explanation": "Locusts bite and chew leaves."
  },
  {
    "id": 238,
    "subject": "CRE",
    "question": "Which disciple doubted the resurrection of Jesus?",
    "options": { "A": "Thomas", "B": "Peter", "C": "John", "D": "Matthew" },
    "correctAnswer": "A",
    "explanation": "Doubting Thomas needed to see the wounds."
  },
  {
    "id": 239,
    "subject": "Homescience",
    "question": "Lack of Iron in the diet causes ________.",
    "options": { "A": "Rickets", "B": "Scurvy", "C": "Anaemia", "D": "Kwashiorkor" },
    "correctAnswer": "C",
    "explanation": "Iron deficiency leads to Anaemia."
  },
  {
    "id": 240,
    "subject": "PE",
    "question": "Which is not a field event in athletics?",
    "options": { "A": "Long jump", "B": "Shot put", "C": "100m sprint", "D": "Javelin" },
    "correctAnswer": "C",
    "explanation": "100m sprint is a track event."
  },
  {
    "id": 241,
    "subject": "Mathematics",
    "question": "Find the product of 12 and 12.",
    "options": { "A": "24", "B": "144", "C": "120", "D": "122" },
    "correctAnswer": "B",
    "explanation": "12 squared is 144."
  },
  {
    "id": 242,
    "subject": "Mathematics",
    "question": "How many days are in a leap year?",
    "options": { "A": "365", "B": "366", "C": "364", "D": "360" },
    "correctAnswer": "B",
    "explanation": "Leap years have one extra day (Feb 29)."
  },
  {
    "id": 243,
    "subject": "English",
    "question": "Which word is a synonym for 'Fast'?",
    "options": { "A": "Slow", "B": "Quick", "C": "Lazy", "D": "Calm" },
    "correctAnswer": "B",
    "explanation": "Quick means fast."
  },
  {
    "id": 244,
    "subject": "Kiswahili",
    "question": "Mtu anayefinyanga vyungu anaitwa ________.",
    "options": { "A": "Seremala", "B": "Mwashi", "C": "Mfinyanzi", "D": "Mhunzi" },
    "correctAnswer": "C",
    "explanation": "Mfinyanzi hufanya kazi ya udongo."
  },
  {
    "id": 245,
    "subject": "Science and Technology",
    "question": "Which simple machine consists of a grooved wheel and a rope?",
    "options": { "A": "Lever", "B": "Pulley", "C": "Inclined plane", "D": "Wedge" },
    "correctAnswer": "B",
    "explanation": "Description of a pulley."
  },
  {
    "id": 246,
    "subject": "Social Studies",
    "question": "The smallest county in Kenya by size is ________.",
    "options": { "A": "Nairobi", "B": "Mombasa", "C": "Lamu", "D": "Vihiga" },
    "correctAnswer": "B",
    "explanation": "Mombasa County is geographically the smallest."
  },
  {
    "id": 247,
    "subject": "Agriculture",
    "question": "The tool used for shearing sheep is called ________.",
    "options": { "A": "Secateurs", "B": "Wool shears", "C": "Knife", "D": "Scissors" },
    "correctAnswer": "B",
    "explanation": "Specialized shears for wool."
  },
  {
    "id": 248,
    "subject": "CRE",
    "question": "Who helped Jesus carry the cross?",
    "options": { "A": "Simon of Cyrene", "B": "Peter", "C": "Joseph", "D": "Nicodemus" },
    "correctAnswer": "A",
    "explanation": "Simon was compelled to carry the cross."
  },
  {
    "id": 249,
    "subject": "Homescience",
    "question": "A method of preserving meat by drying is ________.",
    "options": { "A": "Canning", "B": "Sun drying", "C": "Freezing", "D": "Boiling" },
    "correctAnswer": "B",
    "explanation": "Removing moisture via sun."
  },
  {
    "id": 250,
    "subject": "PE",
    "question": "The passing of the baton in relays is a ________ skill.",
    "options": { "A": "Throwing", "B": "Kicking", "C": "Team", "D": "Jumping" },
    "correctAnswer": "C",
    "explanation": "Relays rely on teamwork."
  },
  {
    "id": 251,
    "subject": "Mathematics",
    "question": "What is the square root of 144?",
    "options": { "A": "11", "B": "12", "C": "13", "D": "14" },
    "correctAnswer": "B",
    "explanation": "12 x 12 = 144."
  },
  {
    "id": 252,
    "subject": "Mathematics",
    "question": "Simplify: 12/16",
    "options": { "A": "3/4", "B": "1/2", "C": "2/3", "D": "5/8" },
    "correctAnswer": "A",
    "explanation": "Divide both by 4."
  },
  {
    "id": 253,
    "subject": "English",
    "question": "The young one of a cat is a ________.",
    "options": { "A": "Puppy", "B": "Kitten", "C": "Cub", "D": "Kid" },
    "correctAnswer": "B",
    "explanation": "Kitten is a baby cat."
  },
  {
    "id": 254,
    "subject": "Kiswahili",
    "question": "Kanusha: 'Yeye anakula'.",
    "options": { "A": "Yeye hali", "B": "Yeye hakuli", "C": "Yeye hasili", "D": "Yeye hakula" },
    "correctAnswer": "A",
    "explanation": "Kanushi la 'anakula' ni 'hali'."
  },
  {
    "id": 255,
    "subject": "Science and Technology",
    "question": "Which tooth is used for grinding food?",
    "options": { "A": "Incisor", "B": "Canine", "C": "Molar", "D": "Milk tooth" },
    "correctAnswer": "C",
    "explanation": "Molars have flat tops for grinding."
  },
  {
    "id": 256,
    "subject": "Social Studies",
    "question": "Who was the leader of the Mau Mau rebellion?",
    "options": { "A": "Dedan Kimathi", "B": "Jomo Kenyatta", "C": "Tom Mboya", "D": "Mekatilili" },
    "correctAnswer": "A",
    "explanation": "Dedan Kimathi led the forest fighters."
  },
  {
    "id": 257,
    "subject": "Agriculture",
    "question": "Which soil has the largest particles?",
    "options": { "A": "Clay", "B": "Sand", "C": "Loam", "D": "Silt" },
    "correctAnswer": "B",
    "explanation": "Sand has coarse, large particles."
  },
  {
    "id": 258,
    "subject": "CRE",
    "question": "The town where Jesus was born is ________.",
    "options": { "A": "Nazareth", "B": "Jerusalem", "C": "Bethlehem", "D": "Jericho" },
    "correctAnswer": "C",
    "explanation": "Jesus was born in Bethlehem."
  },
  {
    "id": 259,
    "subject": "Homescience",
    "question": "Which fabric is best for school uniforms?",
    "options": { "A": "Silk", "B": "Cotton", "C": "Wool", "D": "Nylon" },
    "correctAnswer": "B",
    "explanation": "Cotton is durable and absorbent."
  },
  {
    "id": 260,
    "subject": "PE",
    "question": "How many players are in a handball team?",
    "options": { "A": "5", "B": "6", "C": "7", "D": "11" },
    "correctAnswer": "C",
    "explanation": "7 players including the goalkeeper."
  },
  {
    "id": 261,
    "subject": "Mathematics",
    "question": "Multiply 0.5 x 10",
    "options": { "A": "0.50", "B": "5", "C": "50", "D": "0.05" },
    "correctAnswer": "B",
    "explanation": "Move decimal point one place to right."
  },
  {
    "id": 262,
    "subject": "Mathematics",
    "question": "Volume of a cuboid = ________.",
    "options": { "A": "L + W + H", "B": "L x W", "C": "L x W x H", "D": "L x H" },
    "correctAnswer": "C",
    "explanation": "Formula for volume."
  },
  {
    "id": 263,
    "subject": "English",
    "question": "Choose the abstract noun: 'Honesty is the best policy.'",
    "options": { "A": "Policy", "B": "Best", "C": "Honesty", "D": "Is" },
    "correctAnswer": "C",
    "explanation": "Honesty is a quality/concept, not physical."
  },
  {
    "id": 264,
    "subject": "Kiswahili",
    "question": "Tunda la 'Mbuyu' linaitwa ________.",
    "options": { "A": "Bungo", "B": "Mabuyu", "C": "Ubuyu", "D": "Nazi" },
    "correctAnswer": "A",
    "explanation": "Tunda la mbuyu ni bungo."
  },
  {
    "id": 265,
    "subject": "Science and Technology",
    "question": "Sound travels fastest in ________.",
    "options": { "A": "Gases", "B": "Liquids", "C": "Solids", "D": "Vacuum" },
    "correctAnswer": "C",
    "explanation": "Molecules are packed tightly in solids."
  },
  {
    "id": 266,
    "subject": "Social Studies",
    "question": "Which country borders Kenya to the North?",
    "options": { "A": "Tanzania", "B": "Ethiopia", "C": "Uganda", "D": "Somalia" },
    "correctAnswer": "B",
    "explanation": "Ethiopia is to the North."
  },
  {
    "id": 267,
    "subject": "Agriculture",
    "question": "The gestation period of a cow is ________ months.",
    "options": { "A": "3", "B": "5", "C": "9", "D": "12" },
    "correctAnswer": "C",
    "explanation": "Cows carry pregnancy for 9 months."
  },
  {
    "id": 268,
    "subject": "CRE",
    "question": "The parable of the Sower teaches about ________.",
    "options": { "A": "Farming", "B": "Hearing God's word", "C": "Fishing", "D": "Money" },
    "correctAnswer": "B",
    "explanation": "How different hearts receive the Word."
  },
  {
    "id": 269,
    "subject": "Homescience",
    "question": "Loose buttons should be ________.",
    "options": { "A": "Thrown away", "B": "Glued", "C": "Stitched", "D": "Pinned" },
    "correctAnswer": "C",
    "explanation": "Mending involves stitching."
  },
  {
    "id": 270,
    "subject": "PE",
    "question": "The tool used to measure time in sports is a ________.",
    "options": { "A": "Clock", "B": "Stopwatch", "C": "Alarm", "D": "Tape measure" },
    "correctAnswer": "B",
    "explanation": "Precise timing tool."
  },
  {
    "id": 271,
    "subject": "Mathematics",
    "question": "How many centimeters make 1 meter?",
    "options": { "A": "10", "B": "100", "C": "1000", "D": "50" },
    "correctAnswer": "B",
    "explanation": "Centi means 100."
  },
  {
    "id": 272,
    "subject": "Mathematics",
    "question": "Which fraction is equivalent to 1/2?",
    "options": { "A": "2/4", "B": "1/3", "C": "2/5", "D": "3/5" },
    "correctAnswer": "A",
    "explanation": "2/4 simplifies to 1/2."
  },
  {
    "id": 273,
    "subject": "English",
    "question": "She is suffering ________ malaria.",
    "options": { "A": "Of", "B": "From", "C": "By", "D": "With" },
    "correctAnswer": "B",
    "explanation": "Correct preposition: suffering from."
  },
  {
    "id": 274,
    "subject": "Kiswahili",
    "question": "Andika wingi: 'Kioo kimevunjika'.",
    "options": { "A": "Vioo vimevunjika", "B": "Mioo imevunjika", "C": "Kioo zimevunjika", "D": "Vioo zimevunjika" },
    "correctAnswer": "A",
    "explanation": "Ngeli ya KI-VI."
  },
  {
    "id": 275,
    "subject": "Science and Technology",
    "question": "The main source of heat in the solar system is ________.",
    "options": { "A": "Moon", "B": "Earth", "C": "Sun", "D": "Mars" },
    "correctAnswer": "C",
    "explanation": "The Sun is the star that provides heat."
  },
  {
    "id": 276,
    "subject": "Social Studies",
    "question": "The colour white on the National Flag stands for ________.",
    "options": { "A": "Peace", "B": "Blood", "C": "Land", "D": "People" },
    "correctAnswer": "A",
    "explanation": "White symbolizes peace."
  },
  {
    "id": 277,
    "subject": "Agriculture",
    "question": "Which of these is a cash crop?",
    "options": { "A": "Tea", "B": "Beans", "C": "Maize", "D": "Kales" },
    "correctAnswer": "A",
    "explanation": "Tea is grown primarily for sale."
  },
  {
    "id": 278,
    "subject": "CRE",
    "question": "The first martyr in the Bible was ________.",
    "options": { "A": "Peter", "B": "Stephen", "C": "Paul", "D": "James" },
    "correctAnswer": "B",
    "explanation": "Stephen was stoned to death for his faith."
  },
  {
    "id": 279,
    "subject": "Homescience",
    "question": "We should not share personal items like ________.",
    "options": { "A": "Books", "B": "Toothbrushes", "C": "Chairs", "D": "Desks" },
    "correctAnswer": "B",
    "explanation": "To prevent spread of germs."
  },
  {
    "id": 280,
    "subject": "PE",
    "question": "In netball, a player cannot hold the ball for more than ________ seconds.",
    "options": { "A": "2", "B": "3", "C": "4", "D": "5" },
    "correctAnswer": "B",
    "explanation": "3 second rule in netball."
  },
  {
    "id": 281,
    "subject": "Mathematics",
    "question": "Find the perimeter of a rectangle 6cm by 4cm.",
    "options": { "A": "10cm", "B": "20cm", "C": "24cm", "D": "12cm" },
    "correctAnswer": "B",
    "explanation": "2(6+4) = 20."
  },
  {
    "id": 282,
    "subject": "Mathematics",
    "question": "Which number is divisible by 5?",
    "options": { "A": "23", "B": "34", "C": "45", "D": "51" },
    "correctAnswer": "C",
    "explanation": "Ends in 0 or 5."
  },
  {
    "id": 283,
    "subject": "English",
    "question": "A group of lions is called a ________.",
    "options": { "A": "Herd", "B": "Pride", "C": "Flock", "D": "School" },
    "correctAnswer": "B",
    "explanation": "Pride of lions."
  },
  {
    "id": 284,
    "subject": "Kiswahili",
    "question": "Kinyume cha 'lala' ni ________.",
    "options": { "A": "Simama", "B": "Amka", "C": "Kimbia", "D": "Keti" },
    "correctAnswer": "B",
    "explanation": "Wake up is opposite of sleep."
  },
  {
    "id": 285,
    "subject": "Science and Technology",
    "question": "Digestion of food starts in the ________.",
    "options": { "A": "Stomach", "B": "Mouth", "C": "Gullet", "D": "Small intestines" },
    "correctAnswer": "B",
    "explanation": "Saliva and chewing begin digestion."
  },
  {
    "id": 286,
    "subject": "Social Studies",
    "question": "The Great Rift Valley was formed by ________.",
    "options": { "A": "Faulting", "B": "Folding", "C": "Erosion", "D": "Volcanicity" },
    "correctAnswer": "A",
    "explanation": "Tectonic plates pulling apart (faulting)."
  },
  {
    "id": 287,
    "subject": "Agriculture",
    "question": "Manure from poultry is called ________.",
    "options": { "A": "Farmyard manure", "B": "Compost", "C": "Chicken droppings", "D": "Green manure" },
    "correctAnswer": "C",
    "explanation": "Specific term for bird waste."
  },
  {
    "id": 288,
    "subject": "CRE",
    "question": "God asked Abraham to sacrifice his son ________.",
    "options": { "A": "Ishmael", "B": "Isaac", "C": "Jacob", "D": "Esau" },
    "correctAnswer": "B",
    "explanation": "Test of faith with Isaac."
  },
  {
    "id": 289,
    "subject": "Homescience",
    "question": "The best place to store milk is ________.",
    "options": { "A": "In a cupboard", "B": "In the sun", "C": "In a cool dry place", "D": "On the table" },
    "correctAnswer": "C",
    "explanation": "Coolness prevents spoilage."
  },
  {
    "id": 290,
    "subject": "PE",
    "question": "A football match is started by a ________.",
    "options": { "A": "Corner kick", "B": "Kick off", "C": "Throw in", "D": "Goal kick" },
    "correctAnswer": "B",
    "explanation": "Kick off from the center."
  },
  {
    "id": 291,
    "subject": "Mathematics",
    "question": "If a=3, what is 2a + 1?",
    "options": { "A": "4", "B": "6", "C": "7", "D": "5" },
    "correctAnswer": "C",
    "explanation": "2(3) + 1 = 7."
  },
  {
    "id": 292,
    "subject": "Mathematics",
    "question": "Which represents a right angle?",
    "options": { "A": "45 deg", "B": "90 deg", "C": "180 deg", "D": "360 deg" },
    "correctAnswer": "B",
    "explanation": "90 degrees."
  },
  {
    "id": 293,
    "subject": "English",
    "question": "The past participle of 'eat' is ________.",
    "options": { "A": "Ate", "B": "Eaten", "C": "Eating", "D": "Eated" },
    "correctAnswer": "B",
    "explanation": "Eat, Ate, Eaten."
  },
  {
    "id": 294,
    "subject": "Kiswahili",
    "question": "Mtu anayeuza dukani ni ________.",
    "options": { "A": "Mteja", "B": "Muuzaji", "C": "Daktari", "D": "Mwalimu" },
    "correctAnswer": "B",
    "explanation": "Shopkeeper."
  },
  {
    "id": 295,
    "subject": "Science and Technology",
    "question": "Which of these is a water-borne disease?",
    "options": { "A": "Malaria", "B": "Cholera", "C": "Flu", "D": "Measles" },
    "correctAnswer": "B",
    "explanation": "Cholera spreads through dirty water."
  },
  {
    "id": 296,
    "subject": "Social Studies",
    "question": "Members of Parliament meet in ________.",
    "options": { "A": "State House", "B": "Parliament buildings", "C": "Court", "D": "Church" },
    "correctAnswer": "B",
    "explanation": "National Assembly location."
  },
  {
    "id": 297,
    "subject": "Agriculture",
    "question": "A pangas is used for ________.",
    "options": { "A": "Digging", "B": "Cutting bush", "C": "Watering", "D": "Milking" },
    "correctAnswer": "B",
    "explanation": "Cutting vegetation."
  },
  {
    "id": 298,
    "subject": "CRE",
    "question": "Who was the brother of Moses?",
    "options": { "A": "Aaron", "B": "Joshua", "C": "Caleb", "D": "David" },
    "correctAnswer": "A",
    "explanation": "Aaron was his spokesperson."
  },
  {
    "id": 299,
    "subject": "Homescience",
    "question": "We use a thimble to protect the ________.",
    "options": { "A": "Eye", "B": "Finger", "C": "Needle", "D": "Cloth" },
    "correctAnswer": "B",
    "explanation": "Finger protection during sewing."
  },
  {
    "id": 300,
    "subject": "PE",
    "question": "Which game uses a net?",
    "options": { "A": "Volleyball", "B": "Rugby", "C": "Swimming", "D": "Boxing" },
    "correctAnswer": "A",
    "explanation": "Volleyball has a central net."
  },
  {
    "id": 301,
    "subject": "Mathematics",
    "question": "Subtract 0.2 from 1.0",
    "options": { "A": "0.8", "B": "0.2", "C": "1.2", "D": "0.9" },
    "correctAnswer": "A",
    "explanation": "1.0 - 0.2 = 0.8."
  },
  {
    "id": 302,
    "subject": "Mathematics",
    "question": "Identify the odd number.",
    "options": { "A": "20", "B": "22", "C": "25", "D": "28" },
    "correctAnswer": "C",
    "explanation": "Not divisible by 2."
  },
  {
    "id": 303,
    "subject": "English",
    "question": "The boy ran ________.",
    "options": { "A": "Quick", "B": "Fastly", "C": "Quickly", "D": "Faster" },
    "correctAnswer": "C",
    "explanation": "Adverb describing ran."
  },
  {
    "id": 304,
    "subject": "Kiswahili",
    "question": "Jaza pengo: ________ alipika chakula.",
    "options": { "A": "Miti", "B": "Mama", "C": "Kiti", "D": "Mlima" },
    "correctAnswer": "B",
    "explanation": "Mama (person) cooks."
  },
  {
    "id": 305,
    "subject": "Science and Technology",
    "question": "We see with our ________.",
    "options": { "A": "Nose", "B": "Eyes", "C": "Ears", "D": "Skin" },
    "correctAnswer": "B",
    "explanation": "Sense of sight."
  },
  {
    "id": 306,
    "subject": "Social Studies",
    "question": "Kenya is divided into ________ counties.",
    "options": { "A": "40", "B": "47", "C": "50", "D": "10" },
    "correctAnswer": "B",
    "explanation": "47 Counties structure."
  },
  {
    "id": 307,
    "subject": "Agriculture",
    "question": "Which animal pulls a plough?",
    "options": { "A": "Cat", "B": "Ox", "C": "Goat", "D": "Dog" },
    "correctAnswer": "B",
    "explanation": "Oxen are draught animals."
  },
  {
    "id": 308,
    "subject": "CRE",
    "question": "The Bible is divided into ________ books.",
    "options": { "A": "39", "B": "27", "C": "66", "D": "100" },
    "correctAnswer": "C",
    "explanation": "Total books in Bible."
  },
  {
    "id": 309,
    "subject": "Homescience",
    "question": "Socks are worn on the ________.",
    "options": { "A": "Hands", "B": "Feet", "C": "Head", "D": "Knees" },
    "correctAnswer": "B",
    "explanation": "Footwear."
  },
  {
    "id": 310,
    "subject": "PE",
    "question": "A marathon is a ________ race.",
    "options": { "A": "Short", "B": "Long distance", "C": "Sprint", "D": "Relay" },
    "correctAnswer": "B",
    "explanation": "42km is long distance."
  },
  {
    "id": 311,
    "subject": "Mathematics",
    "question": "What is 7 squared?",
    "options": { "A": "14", "B": "49", "C": "21", "D": "56" },
    "correctAnswer": "B",
    "explanation": "7 x 7."
  },
  {
    "id": 312,
    "subject": "Mathematics",
    "question": "Which shape is round?",
    "options": { "A": "Triangle", "B": "Square", "C": "Circle", "D": "Rectangle" },
    "correctAnswer": "C",
    "explanation": "Circular shape."
  },
  {
    "id": 313,
    "subject": "English",
    "question": "Plural of 'Tooth' is ________.",
    "options": { "A": "Tooths", "B": "Teeth", "C": "Teeths", "D": "Tooth" },
    "correctAnswer": "B",
    "explanation": "Irregular plural."
  },
  {
    "id": 314,
    "subject": "Kiswahili",
    "question": "Jina la soko ni ________.",
    "options": { "A": "Chokaa", "B": "Sokoni", "C": "Marikiti", "D": "Duka" },
    "correctAnswer": "C",
    "explanation": "Marikiti is market."
  },
  {
    "id": 315,
    "subject": "Science and Technology",
    "question": "Plants lose water through ________.",
    "options": { "A": "Roots", "B": "Leaves", "C": "Flowers", "D": "Seeds" },
    "correctAnswer": "B",
    "explanation": "Transpiration via stomata."
  },
  {
    "id": 316,
    "subject": "Social Studies",
    "question": "The Maasai live in a ________.",
    "options": { "A": "Igloo", "B": "Manyatta", "C": "Flat", "D": "Cave" },
    "correctAnswer": "B",
    "explanation": "Traditional house."
  },
  {
    "id": 317,
    "subject": "Agriculture",
    "question": "Seeds are planted in the ________.",
    "options": { "A": "Air", "B": "Soil", "C": "Water", "D": "Stone" },
    "correctAnswer": "B",
    "explanation": "Medium for growth."
  },
  {
    "id": 318,
    "subject": "CRE",
    "question": "Who killed Goliath?",
    "options": { "A": "Saul", "B": "David", "C": "Samuel", "D": "Jonathan" },
    "correctAnswer": "B",
    "explanation": "David and Goliath."
  },
  {
    "id": 319,
    "subject": "Homescience",
    "question": "Bathing daily keeps us ________.",
    "options": { "A": "Dirty", "B": "Clean", "C": "Sick", "D": "Sad" },
    "correctAnswer": "B",
    "explanation": "Personal hygiene."
  },
  {
    "id": 320,
    "subject": "PE",
    "question": "High jump involves jumping ________ a bar.",
    "options": { "A": "Under", "B": "Over", "C": "Through", "D": "Beside" },
    "correctAnswer": "B",
    "explanation": "Going over height."
  },
  {
    "id": 321,
    "subject": "Mathematics",
    "question": "Which is greater? 1/2 or 1/4?",
    "options": { "A": "1/4", "B": "1/2", "C": "Equal", "D": "None" },
    "correctAnswer": "B",
    "explanation": "Half is bigger than quarter."
  },
  {
    "id": 322,
    "subject": "Mathematics",
    "question": "Add 15 + 25.",
    "options": { "A": "30", "B": "40", "C": "50", "D": "35" },
    "correctAnswer": "B",
    "explanation": "Simple addition."
  },
  {
    "id": 323,
    "subject": "English",
    "question": "A dog barks, a cat ________.",
    "options": { "A": "Roars", "B": "Meows", "C": "Moos", "D": "Bleats" },
    "correctAnswer": "B",
    "explanation": "Animal sounds."
  },
  {
    "id": 324,
    "subject": "Kiswahili",
    "question": "Mke wa mjomba ni ________.",
    "options": { "A": "Shangazi", "B": "Mkaza mjomba", "C": "Mama", "D": "Dada" },
    "correctAnswer": "B",
    "explanation": "Aunt via uncle."
  },
  {
    "id": 325,
    "subject": "Science and Technology",
    "question": "Fish breath through ________.",
    "options": { "A": "Lungs", "B": "Gills", "C": "Skin", "D": "Nose" },
    "correctAnswer": "B",
    "explanation": "Aquatic breathing."
  },
  {
    "id": 326,
    "subject": "Social Studies",
    "question": "Coffee is a ________ crop.",
    "options": { "A": "Food", "B": "Cash", "C": "Weed", "D": "Flower" },
    "correctAnswer": "B",
    "explanation": "Sold for money."
  },
  {
    "id": 327,
    "subject": "Agriculture",
    "question": "Weeding is removing ________ plants.",
    "options": { "A": "Good", "B": "Unwanted", "C": "Big", "D": "Small" },
    "correctAnswer": "B",
    "explanation": "Definition of weed."
  },
  {
    "id": 328,
    "subject": "CRE",
    "question": "Creation took ________ days.",
    "options": { "A": "5", "B": "6", "C": "7", "D": "10" },
    "correctAnswer": "B",
    "explanation": "Genesis account."
  },
  {
    "id": 329,
    "subject": "Homescience",
    "question": "Dirty nails carry ________.",
    "options": { "A": "Food", "B": "Germs", "C": "Water", "D": "Soap" },
    "correctAnswer": "B",
    "explanation": "Hygiene risk."
  },
  {
    "id": 330,
    "subject": "PE",
    "question": "Rugby ball is ________ shaped.",
    "options": { "A": "Round", "B": "Oval", "C": "Square", "D": "Flat" },
    "correctAnswer": "B",
    "explanation": "Egg shape."
  },
  {
    "id": 331,
    "subject": "Mathematics",
    "question": "How many minutes in 1 hour?",
    "options": { "A": "30", "B": "60", "C": "90", "D": "100" },
    "correctAnswer": "B",
    "explanation": "Standard time."
  },
  {
    "id": 332,
    "subject": "Mathematics",
    "question": "Value of 5 in 500.",
    "options": { "A": "Ones", "B": "Tens", "C": "Hundreds", "D": "Thousands" },
    "correctAnswer": "C",
    "explanation": "Place value."
  },
  {
    "id": 333,
    "subject": "English",
    "question": "Opposite of 'Rich'.",
    "options": { "A": "Wealthy", "B": "Poor", "C": "Kind", "D": "Happy" },
    "correctAnswer": "B",
    "explanation": "Antonym."
  },
  {
    "id": 334,
    "subject": "Kiswahili",
    "question": "Jicho moja, ________ mawili.",
    "options": { "A": "Macho", "B": "Jicho", "C": "Vijicho", "D": "Majicho" },
    "correctAnswer": "A",
    "explanation": "Plural form."
  },
  {
    "id": 335,
    "subject": "Science and Technology",
    "question": "A magnet attracts ________.",
    "options": { "A": "Wood", "B": "Iron", "C": "Plastic", "D": "Glass" },
    "correctAnswer": "B",
    "explanation": "Magnetic material."
  },
  {
    "id": 336,
    "subject": "Social Studies",
    "question": "The President leads the ________.",
    "options": { "A": "County", "B": "Country", "C": "Village", "D": "School" },
    "correctAnswer": "B",
    "explanation": "Head of State."
  },
  {
    "id": 337,
    "subject": "Agriculture",
    "question": "A young goat is a ________.",
    "options": { "A": "Kid", "B": "Lamb", "C": "Calf", "D": "Chick" },
    "correctAnswer": "A",
    "explanation": "Offspring name."
  },
  {
    "id": 338,
    "subject": "CRE",
    "question": "Jesus died on the ________.",
    "options": { "A": "Tree", "B": "Cross", "C": "Chair", "D": "Bed" },
    "correctAnswer": "B",
    "explanation": "Crucifixion."
  },
  {
    "id": 339,
    "subject": "Homescience",
    "question": "We eat using a ________.",
    "options": { "A": "Spade", "B": "Spoon", "C": "Panga", "D": "Rake" },
    "correctAnswer": "B",
    "explanation": "Cutlery."
  },
  {
    "id": 340,
    "subject": "PE",
    "question": "Referees use a ________.",
    "options": { "A": "Bell", "B": "Whistle", "C": "Horn", "D": "Drum" },
    "correctAnswer": "B",
    "explanation": "Signal tool."
  },
  {
    "id": 341,
    "subject": "Mathematics",
    "question": "Multiply 8 x 0.",
    "options": { "A": "8", "B": "0", "C": "80", "D": "1" },
    "correctAnswer": "B",
    "explanation": "Zero property."
  },
  {
    "id": 342,
    "subject": "Mathematics",
    "question": "Subtract 100 - 50.",
    "options": { "A": "50", "B": "40", "C": "60", "D": "10" },
    "correctAnswer": "A",
    "explanation": "Basic subtraction."
  },
  {
    "id": 343,
    "subject": "English",
    "question": "A person who teaches is a ________.",
    "options": { "A": "Doctor", "B": "Teacher", "C": "Driver", "D": "Pilot" },
    "correctAnswer": "B",
    "explanation": "Profession."
  },
  {
    "id": 344,
    "subject": "Kiswahili",
    "question": "Rangi ya damu ni ________.",
    "options": { "A": "Nyeusi", "B": "Nyekundu", "C": "Nyeupe", "D": "Kijani" },
    "correctAnswer": "B",
    "explanation": "Red colour."
  },
  {
    "id": 345,
    "subject": "Science and Technology",
    "question": "Rain comes from ________.",
    "options": { "A": "Trees", "B": "Clouds", "C": "Soil", "D": "Sun" },
    "correctAnswer": "B",
    "explanation": "Water cycle."
  },
  {
    "id": 346,
    "subject": "Social Studies",
    "question": "The National Anthem is a ________.",
    "options": { "A": "Poem", "B": "Prayer", "C": "Story", "D": "News" },
    "correctAnswer": "B",
    "explanation": "Prayer for the nation."
  },
  {
    "id": 347,
    "subject": "Agriculture",
    "question": "Soil provides plants with ________.",
    "options": { "A": "Light", "B": "Nutrients", "C": "Leaves", "D": "Fruits" },
    "correctAnswer": "B",
    "explanation": "Food for plants."
  },
  {
    "id": 348,
    "subject": "CRE",
    "question": "Adam's wife was ________.",
    "options": { "A": "Eve", "B": "Mary", "C": "Ruth", "D": "Sarah" },
    "correctAnswer": "A",
    "explanation": "First woman."
  },
  {
    "id": 349,
    "subject": "Homescience",
    "question": "Fruits should be ________ before eating.",
    "options": { "A": "Cooked", "B": "Washed", "C": "Painted", "D": "Hidden" },
    "correctAnswer": "B",
    "explanation": "Hygiene."
  },
  {
    "id": 350,
    "subject": "PE",
    "question": "Soccer is played with ________.",
    "options": { "A": "Hands", "B": "Feet", "C": "Stick", "D": "Bat" },
    "correctAnswer": "B",
    "explanation": "Football."
  },
  {
    "id": 351,
    "subject": "Mathematics",
    "question": "Divide 20 by 5.",
    "options": { "A": "5", "B": "4", "C": "10", "D": "2" },
    "correctAnswer": "B",
    "explanation": "4 x 5 = 20."
  },
  {
    "id": 352,
    "subject": "Mathematics",
    "question": "Number after 99.",
    "options": { "A": "98", "B": "100", "C": "101", "D": "90" },
    "correctAnswer": "B",
    "explanation": "Counting."
  },
  {
    "id": 353,
    "subject": "English",
    "question": "Past tense of 'Run'.",
    "options": { "A": "Runned", "B": "Ran", "C": "Running", "D": "Runs" },
    "correctAnswer": "B",
    "explanation": "Irregular verb."
  },
  {
    "id": 354,
    "subject": "Kiswahili",
    "question": "Mtoto wa kuku.",
    "options": { "A": "Kifaranga", "B": "Ndama", "C": "Mwanakondoo", "D": "Orio" },
    "correctAnswer": "A",
    "explanation": "Chick."
  },
  {
    "id": 355,
    "subject": "Science and Technology",
    "question": "Sun rises in the ________.",
    "options": { "A": "West", "B": "East", "C": "North", "D": "South" },
    "correctAnswer": "B",
    "explanation": "Direction."
  },
  {
    "id": 356,
    "subject": "Social Studies",
    "question": "Our country is ________.",
    "options": { "A": "Uganda", "B": "Kenya", "C": "Tanzania", "D": "Somalia" },
    "correctAnswer": "B",
    "explanation": "Nationality."
  },
  {
    "id": 357,
    "subject": "Agriculture",
    "question": "We get milk from ________.",
    "options": { "A": "Hens", "B": "Cows", "C": "Dogs", "D": "Cats" },
    "correctAnswer": "B",
    "explanation": "Dairy."
  },
  {
    "id": 358,
    "subject": "CRE",
    "question": "Moses led Israelites from ________.",
    "options": { "A": "Canaan", "B": "Egypt", "C": "Rome", "D": "Sodom" },
    "correctAnswer": "B",
    "explanation": "Exodus."
  },
  {
    "id": 359,
    "subject": "Homescience",
    "question": "A needle is for ________.",
    "options": { "A": "Digging", "B": "Sewing", "C": "Writing", "D": "Cooking" },
    "correctAnswer": "B",
    "explanation": "Tool function."
  },
  {
    "id": 360,
    "subject": "PE",
    "question": "We run on a ________.",
    "options": { "A": "Track", "B": "Pool", "C": "Net", "D": "Goal" },
    "correctAnswer": "A",
    "explanation": "Athletics surface."
  },
  {
    "id": 361,
    "subject": "Mathematics",
    "question": "10 plus 5.",
    "options": { "A": "10", "B": "15", "C": "20", "D": "50" },
    "correctAnswer": "B",
    "explanation": "Addition."
  },
  {
    "id": 362,
    "subject": "Mathematics",
    "question": "Sides of a triangle.",
    "options": { "A": "2", "B": "3", "C": "4", "D": "5" },
    "correctAnswer": "B",
    "explanation": "Shape property."
  },
  {
    "id": 363,
    "subject": "English",
    "question": "Opposite of 'Boy'.",
    "options": { "A": "Man", "B": "Girl", "C": "Baby", "D": "Lady" },
    "correctAnswer": "B",
    "explanation": "Gender."
  },
  {
    "id": 364,
    "subject": "Kiswahili",
    "question": "Kiti ni cha ________.",
    "options": { "A": "Kulala", "B": "Kukalia", "C": "Kula", "D": "Kupika" },
    "correctAnswer": "B",
    "explanation": "Function of chair."
  },
  {
    "id": 365,
    "subject": "Science and Technology",
    "question": "Water has ________ color.",
    "options": { "A": "Blue", "B": "No", "C": "White", "D": "Red" },
    "correctAnswer": "B",
    "explanation": "Colorless."
  },
  {
    "id": 366,
    "subject": "Social Studies",
    "question": "Policemen keep ________.",
    "options": { "A": "Money", "B": "Order", "C": "Food", "D": "Animals" },
    "correctAnswer": "B",
    "explanation": "Law and order."
  },
  {
    "id": 367,
    "subject": "Agriculture",
    "question": "Farmers grow ________.",
    "options": { "A": "Cars", "B": "Crops", "C": "Stones", "D": "Clothes" },
    "correctAnswer": "B",
    "explanation": "Farming."
  },
  {
    "id": 368,
    "subject": "CRE",
    "question": "We pray to ________.",
    "options": { "A": "Satan", "B": "God", "C": "Man", "D": "Trees" },
    "correctAnswer": "B",
    "explanation": "Worship."
  },
  {
    "id": 369,
    "subject": "Homescience",
    "question": "Bread is made from ________.",
    "options": { "A": "Sand", "B": "Wheat flour", "C": "Rice", "D": "Maize" },
    "correctAnswer": "B",
    "explanation": "Baking ingredient."
  },
  {
    "id": 370,
    "subject": "PE",
    "question": "Winning team gets a ________.",
    "options": { "A": "Penalty", "B": "Trophy", "C": "Card", "D": "Whistle" },
    "correctAnswer": "B",
    "explanation": "Award."
  },
  {
    "id": 371,
    "subject": "Mathematics",
    "question": "Double of 2.",
    "options": { "A": "2", "B": "4", "C": "6", "D": "8" },
    "correctAnswer": "B",
    "explanation": "2 x 2."
  },
  {
    "id": 372,
    "subject": "Mathematics",
    "question": "Half of 10.",
    "options": { "A": "2", "B": "5", "C": "10", "D": "20" },
    "correctAnswer": "B",
    "explanation": "10 / 2."
  },
  {
    "id": 373,
    "subject": "English",
    "question": "A cat says ________.",
    "options": { "A": "Woof", "B": "Meow", "C": "Moo", "D": "Baa" },
    "correctAnswer": "B",
    "explanation": "Sound."
  },
  {
    "id": 374,
    "subject": "Kiswahili",
    "question": "Baba wa baba.",
    "options": { "A": "Mjomba", "B": "Babu", "C": "Kaka", "D": "Dada" },
    "correctAnswer": "B",
    "explanation": "Grandfather."
  },
  {
    "id": 375,
    "subject": "Science and Technology",
    "question": "Birds have ________.",
    "options": { "A": "Fur", "B": "Feathers", "C": "Scales", "D": "Hair" },
    "correctAnswer": "B",
    "explanation": "Body covering."
  },
  {
    "id": 376,
    "subject": "Social Studies",
    "question": "The flag has ________ colors.",
    "options": { "A": "2", "B": "4", "C": "6", "D": "8" },
    "correctAnswer": "B",
    "explanation": "Black, Red, Green, White."
  },
  {
    "id": 377,
    "subject": "Agriculture",
    "question": "Bees make ________.",
    "options": { "A": "Milk", "B": "Honey", "C": "Oil", "D": "Water" },
    "correctAnswer": "B",
    "explanation": "Product."
  },
  {
    "id": 378,
    "subject": "CRE",
    "question": "Noah built an ________.",
    "options": { "A": "Ark", "B": "Car", "C": "House", "D": "Road" },
    "correctAnswer": "A",
    "explanation": "Flood story."
  },
  {
    "id": 379,
    "subject": "Homescience",
    "question": "Brooms are for ________.",
    "options": { "A": "Cooking", "B": "Sweeping", "C": "Washing", "D": "Ironing" },
    "correctAnswer": "B",
    "explanation": "Cleaning."
  },
  {
    "id": 380,
    "subject": "PE",
    "question": "We swim in a ________.",
    "options": { "A": "Field", "B": "Pool", "C": "Court", "D": "Track" },
    "correctAnswer": "B",
    "explanation": "Venue."
  },
  {
    "id": 381,
    "subject": "Mathematics",
    "question": "100 cents = ________ shilling.",
    "options": { "A": "1", "B": "10", "C": "100", "D": "1000" },
    "correctAnswer": "A",
    "explanation": "Currency conversion."
  },
  {
    "id": 382,
    "subject": "Mathematics",
    "question": "Shape with 4 equal sides.",
    "options": { "A": "Rectangle", "B": "Square", "C": "Triangle", "D": "Circle" },
    "correctAnswer": "B",
    "explanation": "Geometry."
  },
  {
    "id": 383,
    "subject": "English",
    "question": "Book is for ________.",
    "options": { "A": "Eating", "B": "Reading", "C": "Playing", "D": "Wearing" },
    "correctAnswer": "B",
    "explanation": "Usage."
  },
  {
    "id": 384,
    "subject": "Kiswahili",
    "question": "Mwalimu hufundisha ________.",
    "options": { "A": "Wagonjwa", "B": "Wanafunzi", "C": "Wafugaji", "D": "Madereva" },
    "correctAnswer": "B",
    "explanation": "Students."
  },
  {
    "id": 385,
    "subject": "Science and Technology",
    "question": "Cows eat ________.",
    "options": { "A": "Meat", "B": "Grass", "C": "Stones", "D": "Wood" },
    "correctAnswer": "B",
    "explanation": "Herbivore."
  },
  {
    "id": 386,
    "subject": "Social Studies",
    "question": "Capital city is ________.",
    "options": { "A": "Kisumu", "B": "Nairobi", "C": "Mombasa", "D": "Nakuru" },
    "correctAnswer": "B",
    "explanation": "Capital of Kenya."
  },
  {
    "id": 387,
    "subject": "Agriculture",
    "question": "A hoe is a ________.",
    "options": { "A": "Jembe", "B": "Panga", "C": "Rake", "D": "Slasher" },
    "correctAnswer": "A",
    "explanation": "Tool translation."
  },
  {
    "id": 388,
    "subject": "CRE",
    "question": "Church is for ________.",
    "options": { "A": "Sleeping", "B": "Worship", "C": "Playing", "D": "Eating" },
    "correctAnswer": "B",
    "explanation": "Holy place."
  },
  {
    "id": 389,
    "subject": "Homescience",
    "question": "Soap is for ________.",
    "options": { "A": "Eating", "B": "Washing", "C": "Cooking", "D": "Writing" },
    "correctAnswer": "B",
    "explanation": "Cleaning agent."
  },
  {
    "id": 390,
    "subject": "PE",
    "question": "Balls are ________ shape.",
    "options": { "A": "Square", "B": "Round", "C": "Triangle", "D": "Flat" },
    "correctAnswer": "B",
    "explanation": "Sphere."
  },
  {
    "id": 391,
    "subject": "Mathematics",
    "question": "1 + 1 = ?",
    "options": { "A": "1", "B": "2", "C": "3", "D": "11" },
    "correctAnswer": "B",
    "explanation": "Addition."
  },
  {
    "id": 392,
    "subject": "Mathematics",
    "question": "3 - 1 = ?",
    "options": { "A": "1", "B": "2", "C": "3", "D": "4" },
    "correctAnswer": "B",
    "explanation": "Subtraction."
  },
  {
    "id": 393,
    "subject": "English",
    "question": "Sun is ________.",
    "options": { "A": "Cold", "B": "Hot", "C": "Wet", "D": "Dark" },
    "correctAnswer": "B",
    "explanation": "Adjective."
  },
  {
    "id": 394,
    "subject": "Kiswahili",
    "question": "Maji ni ya ________.",
    "options": { "A": "Kunywa", "B": "Kula", "C": "Kushona", "D": "Kulima" },
    "correctAnswer": "A",
    "explanation": "Drink."
  },
  {
    "id": 395,
    "subject": "Science and Technology",
    "question": "Ice is ________.",
    "options": { "A": "Hot", "B": "Cold", "C": "Warm", "D": "Gas" },
    "correctAnswer": "B",
    "explanation": "Temperature."
  },
  {
    "id": 396,
    "subject": "Social Studies",
    "question": "School is for ________.",
    "options": { "A": "Learning", "B": "Fighting", "C": "Sleeping", "D": "Farming" },
    "correctAnswer": "A",
    "explanation": "Education."
  },
  {
    "id": 397,
    "subject": "Agriculture",
    "question": "Rain helps crops ________.",
    "options": { "A": "Die", "B": "Grow", "C": "Cry", "D": "Sleep" },
    "correctAnswer": "B",
    "explanation": "Growth."
  },
  {
    "id": 398,
    "subject": "CRE",
    "question": "Bible is a ________ book.",
    "options": { "A": "Bad", "B": "Holy", "C": "Story", "D": "Math" },
    "correctAnswer": "B",
    "explanation": "Sacred text."
  },
  {
    "id": 399,
    "subject": "Homescience",
    "question": "Fire is ________.",
    "options": { "A": "Cold", "B": "Hot", "C": "Wet", "D": "Soft" },
    "correctAnswer": "B",
    "explanation": "Danger/Heat."
  },
  {
    "id": 400,
    "subject": "PE",
    "question": "Running makes us ________.",
    "options": { "A": "Weak", "B": "Fit", "C": "Sick", "D": "Sad" },
    "correctAnswer": "B",
    "explanation": "Health benefit."
  },
  {
    "id": 401,
    "subject": "Mathematics",
    "question": "Which digit is in the tenths place in 45.67?",
    "options": { "A": "4", "B": "5", "C": "6", "D": "7" },
    "correctAnswer": "C",
    "explanation": "In 45.67, 6 is immediately after the decimal point."
  },
  {
    "id": 402,
    "subject": "Mathematics",
    "question": "Work out: 3/4 - 1/2",
    "options": { "A": "1/2", "B": "1/4", "C": "2/2", "D": "1/8" },
    "correctAnswer": "B",
    "explanation": "Convert 1/2 to 2/4. Then 3/4 - 2/4 = 1/4."
  },
  {
    "id": 403,
    "subject": "English",
    "question": "Which word is a synonym of 'Wealthy'?",
    "options": { "A": "Poor", "B": "Rich", "C": "Weak", "D": "Sick" },
    "correctAnswer": "B",
    "explanation": "Wealthy means having a lot of money (Rich)."
  },
  {
    "id": 404,
    "subject": "Kiswahili",
    "question": "Kisawe cha 'Osha' ni ________.",
    "options": { "A": "Piga", "B": "Safisha", "C": "Chafua", "D": "Anika" },
    "correctAnswer": "B",
    "explanation": "Osha na safisha zina maana sawa (Clean/Wash)."
  },
  {
    "id": 405,
    "subject": "Science and Technology",
    "question": "Which part of the computer is used for typing?",
    "options": { "A": "Mouse", "B": "Monitor", "C": "Keyboard", "D": "Printer" },
    "correctAnswer": "C",
    "explanation": "The keyboard has keys for typing input."
  },
  {
    "id": 406,
    "subject": "Social Studies",
    "question": "The main airport in Kenya is called ________.",
    "options": { "A": "Moi International", "B": "Kisumu Airport", "C": "JKIA", "D": "Wilson Airport" },
    "correctAnswer": "C",
    "explanation": "Jomo Kenyatta International Airport is the main hub."
  },
  {
    "id": 407,
    "subject": "Agriculture",
    "question": "Which tool is used for carrying manure?",
    "options": { "A": "Wheelbarrow", "B": "Jembe", "C": "Panga", "D": "Rake" },
    "correctAnswer": "A",
    "explanation": "A wheelbarrow carries heavy loads like manure."
  },
  {
    "id": 408,
    "subject": "CRE",
    "question": "The story of creation is found in the book of ________.",
    "options": { "A": "Exodus", "B": "Genesis", "C": "Leviticus", "D": "Numbers" },
    "correctAnswer": "B",
    "explanation": "Genesis chapters 1 and 2 details creation."
  },
  {
    "id": 409,
    "subject": "Homescience",
    "question": "We use a ________ to trim fingernails.",
    "options": { "A": "Knife", "B": "Razor blade", "C": "Nail cutter", "D": "Scissors" },
    "correctAnswer": "C",
    "explanation": "Nail cutters are designed safely for nails."
  },
  {
    "id": 410,
    "subject": "PE",
    "question": "Which of these is a track event?",
    "options": { "A": "Shot put", "B": "High jump", "C": "100m race", "D": "Javelin" },
    "correctAnswer": "C",
    "explanation": "Running events happen on the track."
  },
  {
    "id": 411,
    "subject": "Mathematics",
    "question": "Convert 5000m to kilometers.",
    "options": { "A": "50km", "B": "5km", "C": "0.5km", "D": "500km" },
    "correctAnswer": "B",
    "explanation": "1000m = 1km. 5000/1000 = 5km."
  },
  {
    "id": 412,
    "subject": "Mathematics",
    "question": "What is the product of 9 and 6?",
    "options": { "A": "54", "B": "15", "C": "45", "D": "63" },
    "correctAnswer": "A",
    "explanation": "9 multiplied by 6 is 54."
  },
  {
    "id": 413,
    "subject": "English",
    "question": "The plural of 'Knife' is ________.",
    "options": { "A": "Knifes", "B": "Knives", "C": "Knive", "D": "Nifes" },
    "correctAnswer": "B",
    "explanation": "Words ending in 'fe' change to 'ves'."
  },
  {
    "id": 414,
    "subject": "Kiswahili",
    "question": "Jaza pengo: ________ anakimbia.",
    "options": { "A": "Gari", "B": "Mtoto", "C": "Miti", "D": "Mawe" },
    "correctAnswer": "B",
    "explanation": "Mtoto (Living thing) runs."
  },
  {
    "id": 415,
    "subject": "Science and Technology",
    "question": "Which animal lives in water?",
    "options": { "A": "Lion", "B": "Fish", "C": "Eagle", "D": "Goat" },
    "correctAnswer": "B",
    "explanation": "Fish are aquatic animals."
  },
  {
    "id": 416,
    "subject": "Social Studies",
    "question": "Citizens of Kenya must be ________ years and above to vote.",
    "options": { "A": "16", "B": "18", "C": "21", "D": "35" },
    "correctAnswer": "B",
    "explanation": "Voting age is 18."
  },
  {
    "id": 417,
    "subject": "Agriculture",
    "question": "Which soil is best for modeling?",
    "options": { "A": "Sand", "B": "Loam", "C": "Clay", "D": "Silt" },
    "correctAnswer": "C",
    "explanation": "Clay is sticky and holds shape well."
  },
  {
    "id": 418,
    "subject": "CRE",
    "question": "Who was the father of Solomon?",
    "options": { "A": "Saul", "B": "David", "C": "Samuel", "D": "Jesse" },
    "correctAnswer": "B",
    "explanation": "David was Solomon's father."
  },
  {
    "id": 419,
    "subject": "Homescience",
    "question": "Legumes are a source of ________.",
    "options": { "A": "Vitamins", "B": "Proteins", "C": "Fats", "D": "Water" },
    "correctAnswer": "B",
    "explanation": "Beans and peas provide proteins."
  },
  {
    "id": 420,
    "subject": "PE",
    "question": "In volleyball, a team can touch the ball ________ times before returning it.",
    "options": { "A": "2", "B": "3", "C": "4", "D": "5" },
    "correctAnswer": "B",
    "explanation": "Maximum of 3 touches."
  },
  {
    "id": 421,
    "subject": "Mathematics",
    "question": "Find the area of a square with side 6cm.",
    "options": { "A": "24 cm2", "B": "36 cm2", "C": "12 cm2", "D": "30 cm2" },
    "correctAnswer": "B",
    "explanation": "Area = side x side (6 x 6 = 36)."
  },
  {
    "id": 422,
    "subject": "Mathematics",
    "question": "What is the Roman Numeral for 5?",
    "options": { "A": "I", "B": "V", "C": "X", "D": "L" },
    "correctAnswer": "B",
    "explanation": "V represents 5."
  },
  {
    "id": 423,
    "subject": "English",
    "question": "Choose the correct preposition: The cat jumped ________ the table.",
    "options": { "A": "In", "B": "Over", "C": "Through", "D": "With" },
    "correctAnswer": "B",
    "explanation": "Over indicates movement across the top."
  },
  {
    "id": 424,
    "subject": "Kiswahili",
    "question": "Tegua kitendawili: 'Popo mbili zavuka mto'.",
    "options": { "A": "Miguu", "B": "Macho", "C": "Masikio", "D": "Mikono" },
    "correctAnswer": "B",
    "explanation": "Macho (two eyes) looking across."
  },
  {
    "id": 425,
    "subject": "Science and Technology",
    "question": "Which planet is closest to the sun?",
    "options": { "A": "Venus", "B": "Mercury", "C": "Earth", "D": "Mars" },
    "correctAnswer": "B",
    "explanation": "Mercury is the first planet."
  },
  {
    "id": 426,
    "subject": "Social Studies",
    "question": "Which color represents vegetation on the flag?",
    "options": { "A": "Black", "B": "Red", "C": "Green", "D": "White" },
    "correctAnswer": "C",
    "explanation": "Green stands for land and agriculture."
  },
  {
    "id": 427,
    "subject": "Agriculture",
    "question": "Watering cans are used for ________.",
    "options": { "A": "Irrigation", "B": "Weeding", "C": "Harvesting", "D": "Pruning" },
    "correctAnswer": "A",
    "explanation": "Manual irrigation of nursery beds."
  },
  {
    "id": 428,
    "subject": "CRE",
    "question": "The first miracle of Jesus was turning water into ________.",
    "options": { "A": "Milk", "B": "Wine", "C": "Tea", "D": "Juice" },
    "correctAnswer": "B",
    "explanation": "Performed at Cana."
  },
  {
    "id": 429,
    "subject": "Homescience",
    "question": "We should wash fruits to remove ________.",
    "options": { "A": "Taste", "B": "Dirt and chemicals", "C": "Color", "D": "Seeds" },
    "correctAnswer": "B",
    "explanation": "Safety and hygiene."
  },
  {
    "id": 430,
    "subject": "PE",
    "question": "The 'Start' command for sprints is ________.",
    "options": { "A": "Go", "B": "On your marks, Get Set, Go", "C": "Run", "D": "Ready, Set" },
    "correctAnswer": "B",
    "explanation": "Standard crouch start sequence."
  },
  {
    "id": 431,
    "subject": "Mathematics",
    "question": "Add: 245 + 155",
    "options": { "A": "300", "B": "400", "C": "390", "D": "410" },
    "correctAnswer": "B",
    "explanation": "245 + 155 = 400."
  },
  {
    "id": 432,
    "subject": "Mathematics",
    "question": "How many degrees in a right angle?",
    "options": { "A": "45", "B": "90", "C": "180", "D": "360" },
    "correctAnswer": "B",
    "explanation": "Definition of right angle."
  },
  {
    "id": 433,
    "subject": "English",
    "question": "The opposite of 'Sharp' is ________.",
    "options": { "A": "Pointy", "B": "Blunt", "C": "Hard", "D": "Soft" },
    "correctAnswer": "B",
    "explanation": "Blunt means not sharp."
  },
  {
    "id": 434,
    "subject": "Kiswahili",
    "question": "Wingi wa 'Mtu' ni ________.",
    "options": { "A": "Watu", "B": "Mitu", "C": "Kitu", "D": "Matu" },
    "correctAnswer": "A",
    "explanation": "M-WA ngeli (Mtu-Watu)."
  },
  {
    "id": 435,
    "subject": "Science and Technology",
    "question": "Roots help to ________ the plant.",
    "options": { "A": "Feed", "B": "Anchor", "C": "Move", "D": "Color" },
    "correctAnswer": "B",
    "explanation": "Roots hold the plant firmly in soil."
  },
  {
    "id": 436,
    "subject": "Social Studies",
    "question": "The currency of Uganda is the ________.",
    "options": { "A": "Shilling", "B": "Dollar", "C": "Pound", "D": "Euro" },
    "correctAnswer": "A",
    "explanation": "Uganda Shilling (UGX)."
  },
  {
    "id": 437,
    "subject": "Agriculture",
    "question": "A chicken house is called a ________.",
    "options": { "A": "Kennel", "B": "Coop", "C": "Hutch", "D": "Sty" },
    "correctAnswer": "B",
    "explanation": "Standard term for poultry housing."
  },
  {
    "id": 438,
    "subject": "CRE",
    "question": "Jesus had ________ disciples.",
    "options": { "A": "10", "B": "12", "C": "7", "D": "3" },
    "correctAnswer": "B",
    "explanation": "The twelve apostles."
  },
  {
    "id": 439,
    "subject": "Homescience",
    "question": "Which of these is a personal item?",
    "options": { "A": "Plate", "B": "Handkerchief", "C": "Chair", "D": "Table" },
    "correctAnswer": "B",
    "explanation": "Not shared for hygiene reasons."
  },
  {
    "id": 440,
    "subject": "PE",
    "question": "Football players wear ________ on their feet.",
    "options": { "A": "Sandals", "B": "Boots", "C": "Slippers", "D": "Heels" },
    "correctAnswer": "B",
    "explanation": "Studded boots for grip."
  },
  {
    "id": 441,
    "subject": "Mathematics",
    "question": "What is 1000 - 1?",
    "options": { "A": "900", "B": "999", "C": "990", "D": "1001" },
    "correctAnswer": "B",
    "explanation": "One less than a thousand."
  },
  {
    "id": 442,
    "subject": "Mathematics",
    "question": "Divide 64 by 8.",
    "options": { "A": "6", "B": "8", "C": "7", "D": "9" },
    "correctAnswer": "B",
    "explanation": "8 x 8 = 64."
  },
  {
    "id": 443,
    "subject": "English",
    "question": "A person who flies a plane is a ________.",
    "options": { "A": "Driver", "B": "Pilot", "C": "Captain", "D": "Rider" },
    "correctAnswer": "B",
    "explanation": "Pilot operates aircraft."
  },
  {
    "id": 444,
    "subject": "Kiswahili",
    "question": "Mtoto wa simba anaitwa ________.",
    "options": { "A": "Kinyemere", "B": "Shibli", "C": "Ndama", "D": "Kilebu" },
    "correctAnswer": "B",
    "explanation": "Shibli ni mtoto wa simba."
  },
  {
    "id": 445,
    "subject": "Science and Technology",
    "question": "The sun gives us light and ________.",
    "options": { "A": "Rain", "B": "Heat", "C": "Wind", "D": "Cold" },
    "correctAnswer": "B",
    "explanation": "Solar energy provides heat."
  },
  {
    "id": 446,
    "subject": "Social Studies",
    "question": "We sing the National Anthem while ________.",
    "options": { "A": "Sitting", "B": "Standing", "C": "Walking", "D": "Running" },
    "correctAnswer": "B",
    "explanation": "Standing at attention is a sign of respect."
  },
  {
    "id": 447,
    "subject": "Agriculture",
    "question": "Removing excess branches is called ________.",
    "options": { "A": "Pruning", "B": "Thinning", "C": "Weeding", "D": "Digging" },
    "correctAnswer": "A",
    "explanation": "Pruning shapes the tree."
  },
  {
    "id": 448,
    "subject": "CRE",
    "question": "The Bible has two parts: Old and ________ Testament.",
    "options": { "A": "Future", "B": "New", "C": "Past", "D": "Modern" },
    "correctAnswer": "B",
    "explanation": "New Testament follows the Old."
  },
  {
    "id": 449,
    "subject": "Homescience",
    "question": "We sleep in the ________.",
    "options": { "A": "Kitchen", "B": "Bedroom", "C": "Bathroom", "D": "Store" },
    "correctAnswer": "B",
    "explanation": "Room for resting."
  },
  {
    "id": 450,
    "subject": "PE",
    "question": "Which game is played on a court?",
    "options": { "A": "Football", "B": "Basketball", "C": "Swimming", "D": "Golf" },
    "correctAnswer": "B",
    "explanation": "Basketball uses a hard court."
  },
  {
    "id": 451,
    "subject": "Mathematics",
    "question": "Identify the obtuse angle.",
    "options": { "A": "30 degrees", "B": "90 degrees", "C": "120 degrees", "D": "180 degrees" },
    "correctAnswer": "C",
    "explanation": "Between 90 and 180 degrees."
  },
  {
    "id": 452,
    "subject": "Mathematics",
    "question": "What is 10% of 100?",
    "options": { "A": "1", "B": "10", "C": "100", "D": "50" },
    "correctAnswer": "B",
    "explanation": "10/100 x 100 = 10."
  },
  {
    "id": 453,
    "subject": "English",
    "question": "The past tense of 'Drink' is ________.",
    "options": { "A": "Drank", "B": "Drunk", "C": "Drinked", "D": "Drinking" },
    "correctAnswer": "A",
    "explanation": "Drink -> Drank -> Drunk."
  },
  {
    "id": 454,
    "subject": "Kiswahili",
    "question": "Neno 'Mwalimu' liko katika ngeli ya ________.",
    "options": { "A": "KI-VI", "B": "M-WA", "C": "LI-YA", "D": "U-I" },
    "correctAnswer": "B",
    "explanation": "Mwalimu-Walimu (M-WA)."
  },
  {
    "id": 455,
    "subject": "Science and Technology",
    "question": "Which of these conducts electricity?",
    "options": { "A": "Rubber", "B": "Copper wire", "C": "Plastic", "D": "Wood" },
    "correctAnswer": "B",
    "explanation": "Metals like copper are conductors."
  },
  {
    "id": 456,
    "subject": "Social Studies",
    "question": "The head of a school is the ________.",
    "options": { "A": "Prefect", "B": "Headteacher", "C": "Cook", "D": "Parent" },
    "correctAnswer": "B",
    "explanation": "School administrator."
  },
  {
    "id": 457,
    "subject": "Agriculture",
    "question": "Maize is a ________ crop.",
    "options": { "A": "Cereal", "B": "Legume", "C": "Fruit", "D": "Tuber" },
    "correctAnswer": "A",
    "explanation": "Grain crop."
  },
  {
    "id": 458,
    "subject": "CRE",
    "question": "The Good Samaritan helped a ________ man.",
    "options": { "A": "Rich", "B": "Injured", "C": "Happy", "D": "Sleeping" },
    "correctAnswer": "B",
    "explanation": "Man beaten by robbers."
  },
  {
    "id": 459,
    "subject": "Homescience",
    "question": "Ironing makes clothes look ________.",
    "options": { "A": "Old", "B": "Neat", "C": "Dirty", "D": "Wet" },
    "correctAnswer": "B",
    "explanation": "Removes wrinkles."
  },
  {
    "id": 460,
    "subject": "PE",
    "question": "A relay race uses a ________.",
    "options": { "A": "Ball", "B": "Baton", "C": "Racket", "D": "Net" },
    "correctAnswer": "B",
    "explanation": "Passed between runners."
  },
  {
    "id": 461,
    "subject": "Mathematics",
    "question": "Subtract: 5.5 - 2.5",
    "options": { "A": "3.0", "B": "2.0", "C": "4.0", "D": "3.5" },
    "correctAnswer": "A",
    "explanation": "5.5 minus 2.5 is 3."
  },
  {
    "id": 462,
    "subject": "Mathematics",
    "question": "How many meters in 1km?",
    "options": { "A": "100", "B": "1000", "C": "10", "D": "500" },
    "correctAnswer": "B",
    "explanation": "Kilo means thousand."
  },
  {
    "id": 463,
    "subject": "English",
    "question": "A place where books are kept is a ________.",
    "options": { "A": "Kitchen", "B": "Library", "C": "Field", "D": "Shop" },
    "correctAnswer": "B",
    "explanation": "Library stores books."
  },
  {
    "id": 464,
    "subject": "Kiswahili",
    "question": "Chagua kivumishi: Kijana ________.",
    "options": { "A": "kimbia", "B": "mrefu", "C": "lala", "D": "kula" },
    "correctAnswer": "B",
    "explanation": "Mrefu describes Kijana."
  },
  {
    "id": 465,
    "subject": "Science and Technology",
    "question": "Humans breathe in ________.",
    "options": { "A": "Carbon dioxide", "B": "Oxygen", "C": "Dust", "D": "Smoke" },
    "correctAnswer": "B",
    "explanation": "Essential gas for life."
  },
  {
    "id": 466,
    "subject": "Social Studies",
    "question": "Kenya is in which continent?",
    "options": { "A": "Asia", "B": "Africa", "C": "Europe", "D": "America" },
    "correctAnswer": "B",
    "explanation": "East Africa."
  },
  {
    "id": 467,
    "subject": "Agriculture",
    "question": "We use a slasher to ________.",
    "options": { "A": "Dig", "B": "Cut tall grass", "C": "Plant", "D": "Water" },
    "correctAnswer": "B",
    "explanation": "Clearing vegetation."
  },
  {
    "id": 468,
    "subject": "CRE",
    "question": "Who built the ark?",
    "options": { "A": "Moses", "B": "Noah", "C": "Adam", "D": "David" },
    "correctAnswer": "B",
    "explanation": "To survive the flood."
  },
  {
    "id": 469,
    "subject": "Homescience",
    "question": "We use a towel to ________.",
    "options": { "A": "Clean shoes", "B": "Dry the body", "C": "Wash dishes", "D": "Cover food" },
    "correctAnswer": "B",
    "explanation": "Absorbs water after bath."
  },
  {
    "id": 470,
    "subject": "PE",
    "question": "A standard football team has ________ players.",
    "options": { "A": "7", "B": "11", "C": "10", "D": "15" },
    "correctAnswer": "B",
    "explanation": "11 players per side."
  },
  {
    "id": 471,
    "subject": "Mathematics",
    "question": "Multiply 12 by 5.",
    "options": { "A": "50", "B": "60", "C": "55", "D": "70" },
    "correctAnswer": "B",
    "explanation": "12 x 5 = 60."
  },
  {
    "id": 472,
    "subject": "Mathematics",
    "question": "Name a 3-sided shape.",
    "options": { "A": "Square", "B": "Triangle", "C": "Circle", "D": "Oval" },
    "correctAnswer": "B",
    "explanation": "Tri = three."
  },
  {
    "id": 473,
    "subject": "English",
    "question": "The baby is ________.",
    "options": { "A": "Crying", "B": "Cry", "C": "Cried", "D": "Cries" },
    "correctAnswer": "A",
    "explanation": "Present continuous tense."
  },
  {
    "id": 474,
    "subject": "Kiswahili",
    "question": "Kinyume cha 'Cheka' ni ________.",
    "options": { "A": "Lia", "B": "Tabasamu", "C": "Imba", "D": "Sema" },
    "correctAnswer": "A",
    "explanation": "Laugh vs Cry."
  },
  {
    "id": 475,
    "subject": "Science and Technology",
    "question": "Which organ pumps blood?",
    "options": { "A": "Lung", "B": "Heart", "C": "Stomach", "D": "Brain" },
    "correctAnswer": "B",
    "explanation": "Circulatory system center."
  },
  {
    "id": 476,
    "subject": "Social Studies",
    "question": "The National Language of Kenya is ________.",
    "options": { "A": "English", "B": "Kiswahili", "C": "French", "D": "German" },
    "correctAnswer": "B",
    "explanation": "Kiswahili is the national language."
  },
  {
    "id": 477,
    "subject": "Agriculture",
    "question": "Cows give us ________ and meat.",
    "options": { "A": "Eggs", "B": "Milk", "C": "Wool", "D": "Honey" },
    "correctAnswer": "B",
    "explanation": "Dairy product."
  },
  {
    "id": 478,
    "subject": "CRE",
    "question": "Christmas is celebrated in ________.",
    "options": { "A": "April", "B": "December", "C": "January", "D": "August" },
    "correctAnswer": "B",
    "explanation": "December 25th."
  },
  {
    "id": 479,
    "subject": "Homescience",
    "question": "Using a dirty handkerchief spreads ________.",
    "options": { "A": "Health", "B": "Germs", "C": "Wealth", "D": "Joy" },
    "correctAnswer": "B",
    "explanation": "Hygiene risk."
  },
  {
    "id": 480,
    "subject": "PE",
    "question": "Warm up exercises prevent ________.",
    "options": { "A": "Injuries", "B": "Winning", "C": "Sweating", "D": "Running" },
    "correctAnswer": "A",
    "explanation": "Prepares muscles."
  },
  {
    "id": 481,
    "subject": "Mathematics",
    "question": "20 divided by 4.",
    "options": { "A": "4", "B": "5", "C": "6", "D": "10" },
    "correctAnswer": "B",
    "explanation": "4 x 5 = 20."
  },
  {
    "id": 482,
    "subject": "Mathematics",
    "question": "Which is an even number?",
    "options": { "A": "3", "B": "4", "C": "5", "D": "7" },
    "correctAnswer": "B",
    "explanation": "Divisible by 2."
  },
  {
    "id": 483,
    "subject": "English",
    "question": "Comparative of 'Big'.",
    "options": { "A": "Biggest", "B": "Bigger", "C": "More big", "D": "Big" },
    "correctAnswer": "B",
    "explanation": "Big, Bigger, Biggest."
  },
  {
    "id": 484,
    "subject": "Kiswahili",
    "question": "Wingi wa 'Jicho'.",
    "options": { "A": "Majicho", "B": "Macho", "C": "Vijicho", "D": "Jicho" },
    "correctAnswer": "B",
    "explanation": "LI-YA (Jicho-Macho)."
  },
  {
    "id": 485,
    "subject": "Science and Technology",
    "question": "Green plants make their own ________.",
    "options": { "A": "Water", "B": "Food", "C": "Soil", "D": "Air" },
    "correctAnswer": "B",
    "explanation": "Photosynthesis."
  },
  {
    "id": 486,
    "subject": "Social Studies",
    "question": "Lake Victoria is a source of ________.",
    "options": { "A": "Salt", "B": "Fish", "C": "Gold", "D": "Oil" },
    "correctAnswer": "B",
    "explanation": "Fishing industry."
  },
  {
    "id": 487,
    "subject": "Agriculture",
    "question": "A young sheep is a ________.",
    "options": { "A": "Kid", "B": "Lamb", "C": "Calf", "D": "Chick" },
    "correctAnswer": "B",
    "explanation": "Lamb."
  },
  {
    "id": 488,
    "subject": "CRE",
    "question": "David used a ________ to kill Goliath.",
    "options": { "A": "Gun", "B": "Sling", "C": "Spear", "D": "Knife" },
    "correctAnswer": "B",
    "explanation": "Sling and stone."
  },
  {
    "id": 489,
    "subject": "Homescience",
    "question": "We brush teeth after ________.",
    "options": { "A": "Sleeping", "B": "Meals", "C": "Playing", "D": "Walking" },
    "correctAnswer": "B",
    "explanation": "Dental hygiene."
  },
  {
    "id": 490,
    "subject": "PE",
    "question": "The leader of a team is the ________.",
    "options": { "A": "Coach", "B": "Captain", "C": "Ref", "D": "Fan" },
    "correctAnswer": "B",
    "explanation": "Player leader."
  },
  {
    "id": 491,
    "subject": "Mathematics",
    "question": "Value of 3 in 300.",
    "options": { "A": "Tens", "B": "Hundreds", "C": "Ones", "D": "Thousands" },
    "correctAnswer": "B",
    "explanation": "Place value."
  },
  {
    "id": 492,
    "subject": "Mathematics",
    "question": "1/2 + 1/2 = ?",
    "options": { "A": "1/4", "B": "1", "C": "2", "D": "0" },
    "correctAnswer": "B",
    "explanation": "One whole."
  },
  {
    "id": 493,
    "subject": "English",
    "question": "He drove ________.",
    "options": { "A": "Slow", "B": "Slowly", "C": "Slower", "D": "Slowed" },
    "correctAnswer": "B",
    "explanation": "Adverb."
  },
  {
    "id": 494,
    "subject": "Kiswahili",
    "question": "Babu ni baba wa ________.",
    "options": { "A": "Kaka", "B": "Baba", "C": "Dada", "D": "Mama" },
    "correctAnswer": "B",
    "explanation": "Grandfather."
  },
  {
    "id": 495,
    "subject": "Science and Technology",
    "question": "A car needs ________ to move.",
    "options": { "A": "Water", "B": "Fuel", "C": "Milk", "D": "Tea" },
    "correctAnswer": "B",
    "explanation": "Energy source."
  },
  {
    "id": 496,
    "subject": "Social Studies",
    "question": "Madaraka Day is on ________.",
    "options": { "A": "1st June", "B": "20th Oct", "C": "12th Dec", "D": "1st May" },
    "correctAnswer": "A",
    "explanation": "Self-governance day."
  },
  {
    "id": 497,
    "subject": "Agriculture",
    "question": "Tea is a ________ crop.",
    "options": { "A": "Food", "B": "Cash", "C": "Weed", "D": "Root" },
    "correctAnswer": "B",
    "explanation": "Export crop."
  },
  {
    "id": 498,
    "subject": "CRE",
    "question": "The mother of Jesus.",
    "options": { "A": "Elizabeth", "B": "Mary", "C": "Sarah", "D": "Ruth" },
    "correctAnswer": "B",
    "explanation": "Virgin Mary."
  },
  {
    "id": 499,
    "subject": "Homescience",
    "question": "Shoes protect our ________.",
    "options": { "A": "Hands", "B": "Feet", "C": "Eyes", "D": "Ears" },
    "correctAnswer": "B",
    "explanation": "Footwear."
  },
  {
    "id": 500,
    "subject": "PE",
    "question": "We use a racket for ________.",
    "options": { "A": "Football", "B": "Tennis", "C": "Rugby", "D": "Swimming" },
    "correctAnswer": "B",
    "explanation": "Tennis equipment."
  },
  {
    "id": 501,
    "subject": "Mathematics",
    "question": "Calculate: 100 x 0.",
    "options": { "A": "100", "B": "0", "C": "10", "D": "1" },
    "correctAnswer": "B",
    "explanation": "Any number times zero is zero."
  },
  {
    "id": 502,
    "subject": "Mathematics",
    "question": "What is the perimeter of a triangle with sides 3cm, 4cm, 5cm?",
    "options": { "A": "10cm", "B": "12cm", "C": "15cm", "D": "20cm" },
    "correctAnswer": "B",
    "explanation": "3 + 4 + 5 = 12."
  },
  {
    "id": 503,
    "subject": "English",
    "question": "Choose the noun: 'He runs fast.'",
    "options": { "A": "He", "B": "Runs", "C": "Fast", "D": "None" },
    "correctAnswer": "A",
    "explanation": "He is a pronoun (functioning as noun subject)."
  },
  {
    "id": 504,
    "subject": "Kiswahili",
    "question": "Chombo cha usafiri majini.",
    "options": { "A": "Gari", "B": "Meli", "C": "Ndege", "D": "Baiskeli" },
    "correctAnswer": "B",
    "explanation": "Ship/Boat."
  },
  {
    "id": 505,
    "subject": "Science and Technology",
    "question": "Which animal lays eggs?",
    "options": { "A": "Cow", "B": "Hen", "C": "Cat", "D": "Dog" },
    "correctAnswer": "B",
    "explanation": "Poultry."
  },
  {
    "id": 506,
    "subject": "Social Studies",
    "question": "The equator divides the earth into ________.",
    "options": { "A": "North and South", "B": "East and West", "C": "Up and Down", "D": "Big and Small" },
    "correctAnswer": "A",
    "explanation": "Hemispheres."
  },
  {
    "id": 507,
    "subject": "Agriculture",
    "question": "Farmers plant seeds in the ________.",
    "options": { "A": "Air", "B": "Soil", "C": "Water", "D": "Fire" },
    "correctAnswer": "B",
    "explanation": "Growth medium."
  },
  {
    "id": 508,
    "subject": "CRE",
    "question": "Zacchaeus was a ________.",
    "options": { "A": "Fisherman", "B": "Tax collector", "C": "Shepherd", "D": "Carpenter" },
    "correctAnswer": "B",
    "explanation": "Short man in sycamore tree."
  },
  {
    "id": 509,
    "subject": "Homescience",
    "question": "A balanced diet prevents ________.",
    "options": { "A": "Health", "B": "Diseases", "C": "Growth", "D": "Sleep" },
    "correctAnswer": "B",
    "explanation": "Nutritional diseases."
  },
  {
    "id": 510,
    "subject": "PE",
    "question": "Penalty kick is used in ________.",
    "options": { "A": "Swimming", "B": "Football", "C": "Tennis", "D": "Golf" },
    "correctAnswer": "B",
    "explanation": "Soccer foul penalty."
  },
  {
    "id": 511,
    "subject": "Mathematics",
    "question": "What is 8 plus 7?",
    "options": { "A": "14", "B": "15", "C": "16", "D": "13" },
    "correctAnswer": "B",
    "explanation": "Addition."
  },
  {
    "id": 512,
    "subject": "Mathematics",
    "question": "Shape of an egg.",
    "options": { "A": "Circle", "B": "Oval", "C": "Square", "D": "Triangle" },
    "correctAnswer": "B",
    "explanation": "Oval shape."
  },
  {
    "id": 513,
    "subject": "English",
    "question": "Past tense of 'Go'.",
    "options": { "A": "Gone", "B": "Went", "C": "Going", "D": "Goed" },
    "correctAnswer": "B",
    "explanation": "Irregular verb."
  },
  {
    "id": 514,
    "subject": "Kiswahili",
    "question": "Mtu anayetibu.",
    "options": { "A": "Mwalimu", "B": "Daktari", "C": "Mpishi", "D": "Dereva" },
    "correctAnswer": "B",
    "explanation": "Doctor."
  },
  {
    "id": 515,
    "subject": "Science and Technology",
    "question": "We hear with ________.",
    "options": { "A": "Eyes", "B": "Ears", "C": "Nose", "D": "Skin" },
    "correctAnswer": "B",
    "explanation": "Sense of hearing."
  },
  {
    "id": 516,
    "subject": "Social Studies",
    "question": "Our continent is ________.",
    "options": { "A": "Asia", "B": "Africa", "C": "Europe", "D": "America" },
    "correctAnswer": "B",
    "explanation": "Location."
  },
  {
    "id": 517,
    "subject": "Agriculture",
    "question": "Goats eat ________.",
    "options": { "A": "Meat", "B": "Leaves/Grass", "C": "Stones", "D": "Sand" },
    "correctAnswer": "B",
    "explanation": "Herbivore."
  },
  {
    "id": 518,
    "subject": "CRE",
    "question": "Jesus was born in ________.",
    "options": { "A": "Nairobi", "B": "Bethlehem", "C": "Rome", "D": "Egypt" },
    "correctAnswer": "B",
    "explanation": "Nativity."
  },
  {
    "id": 519,
    "subject": "Homescience",
    "question": "Bathing requires ________.",
    "options": { "A": "Oil", "B": "Water and Soap", "C": "Mud", "D": "Sand" },
    "correctAnswer": "B",
    "explanation": "Cleaning agents."
  },
  {
    "id": 520,
    "subject": "PE",
    "question": "Winning team gets a ________.",
    "options": { "A": "Card", "B": "Trophy", "C": "Whistle", "D": "Ball" },
    "correctAnswer": "B",
    "explanation": "Prize."
  },
  {
    "id": 521,
    "subject": "Mathematics",
    "question": "30 - 10 = ?",
    "options": { "A": "10", "B": "20", "C": "40", "D": "15" },
    "correctAnswer": "B",
    "explanation": "Subtraction."
  },
  {
    "id": 522,
    "subject": "Mathematics",
    "question": "Sides of a square.",
    "options": { "A": "3", "B": "4", "C": "5", "D": "6" },
    "correctAnswer": "B",
    "explanation": "Four equal sides."
  },
  {
    "id": 523,
    "subject": "English",
    "question": "Plural of 'Man'.",
    "options": { "A": "Mans", "B": "Men", "C": "Mens", "D": "Manes" },
    "correctAnswer": "B",
    "explanation": "Irregular plural."
  },
  {
    "id": 524,
    "subject": "Kiswahili",
    "question": "Hodi hodi! Jibu ni ________.",
    "options": { "A": "Asante", "B": "Karibu", "C": "Kwaheri", "D": "Jambo" },
    "correctAnswer": "B",
    "explanation": "Welcome."
  },
  {
    "id": 525,
    "subject": "Science and Technology",
    "question": "Ice is ________ water.",
    "options": { "A": "Hot", "B": "Frozen", "C": "Gas", "D": "Dirty" },
    "correctAnswer": "B",
    "explanation": "Solid state."
  },
  {
    "id": 526,
    "subject": "Social Studies",
    "question": "Police station is for ________.",
    "options": { "A": "Fun", "B": "Security", "C": "Eating", "D": "Shopping" },
    "correctAnswer": "B",
    "explanation": "Law enforcement."
  },
  {
    "id": 527,
    "subject": "Agriculture",
    "question": "Weeding is removing ________.",
    "options": { "A": "Crops", "B": "Bad plants", "C": "Soil", "D": "Water" },
    "correctAnswer": "B",
    "explanation": "Weeds."
  },
  {
    "id": 528,
    "subject": "CRE",
    "question": "We pray in ________.",
    "options": { "A": "Church", "B": "Market", "C": "River", "D": "Road" },
    "correctAnswer": "A",
    "explanation": "Place of worship."
  },
  {
    "id": 529,
    "subject": "Homescience",
    "question": "Comb is for ________.",
    "options": { "A": "Teeth", "B": "Hair", "C": "Nails", "D": "Shoes" },
    "correctAnswer": "B",
    "explanation": "Grooming."
  },
  {
    "id": 530,
    "subject": "PE",
    "question": "Running fast is ________.",
    "options": { "A": "Jogging", "B": "Sprinting", "C": "Walking", "D": "Sleeping" },
    "correctAnswer": "B",
    "explanation": "Speed running."
  },
  {
    "id": 531,
    "subject": "Mathematics",
    "question": "5 x 5 = ?",
    "options": { "A": "10", "B": "25", "C": "20", "D": "15" },
    "correctAnswer": "B",
    "explanation": "Multiplication."
  },
  {
    "id": 532,
    "subject": "Mathematics",
    "question": "10 / 2 = ?",
    "options": { "A": "2", "B": "5", "C": "10", "D": "20" },
    "correctAnswer": "B",
    "explanation": "Division."
  },
  {
    "id": 533,
    "subject": "English",
    "question": "Opposite of 'Happy'.",
    "options": { "A": "Sad", "B": "Glad", "C": "Good", "D": "Fine" },
    "correctAnswer": "A",
    "explanation": "Antonym."
  },
  {
    "id": 534,
    "subject": "Kiswahili",
    "question": "Baba wa mama.",
    "options": { "A": "Mjomba", "B": "Babu", "C": "Kaka", "D": "Dada" },
    "correctAnswer": "B",
    "explanation": "Grandfather."
  },
  {
    "id": 535,
    "subject": "Science and Technology",
    "question": "Water boils at ________.",
    "options": { "A": "0 deg", "B": "100 deg", "C": "50 deg", "D": "10 deg" },
    "correctAnswer": "B",
    "explanation": "Boiling point."
  },
  {
    "id": 536,
    "subject": "Social Studies",
    "question": "Kenya flag has ________ colors.",
    "options": { "A": "2", "B": "4", "C": "3", "D": "5" },
    "correctAnswer": "B",
    "explanation": "Black, Red, Green, White."
  },
  {
    "id": 537,
    "subject": "Agriculture",
    "question": "Rain is water from ________.",
    "options": { "A": "Ground", "B": "Sky", "C": "Tap", "D": "Sea" },
    "correctAnswer": "B",
    "explanation": "Precipitation."
  },
  {
    "id": 538,
    "subject": "CRE",
    "question": "Holy book.",
    "options": { "A": "Bible", "B": "Storybook", "C": "News", "D": "Map" },
    "correctAnswer": "A",
    "explanation": "Christian text."
  },
  {
    "id": 539,
    "subject": "Homescience",
    "question": "Kitchen is for ________.",
    "options": { "A": "Sleeping", "B": "Cooking", "C": "Bathing", "D": "Playing" },
    "correctAnswer": "B",
    "explanation": "Food preparation."
  },
  {
    "id": 540,
    "subject": "PE",
    "question": "Ball used in rugby.",
    "options": { "A": "Round", "B": "Oval", "C": "Square", "D": "Flat" },
    "correctAnswer": "B",
    "explanation": "Egg shaped."
  },
  {
    "id": 541,
    "subject": "Mathematics",
    "question": "100 + 100",
    "options": { "A": "100", "B": "200", "C": "300", "D": "400" },
    "correctAnswer": "B",
    "explanation": "Addition."
  },
  {
    "id": 542,
    "subject": "Mathematics",
    "question": "Half of 4",
    "options": { "A": "1", "B": "2", "C": "3", "D": "4" },
    "correctAnswer": "B",
    "explanation": "Division."
  },
  {
    "id": 543,
    "subject": "English",
    "question": "Sun is ________.",
    "options": { "A": "Cold", "B": "Hot", "C": "Dark", "D": "Wet" },
    "correctAnswer": "B",
    "explanation": "Description."
  },
  {
    "id": 544,
    "subject": "Kiswahili",
    "question": "Jina la nchi yetu.",
    "options": { "A": "Uganda", "B": "Kenya", "C": "Tanzania", "D": "Somalia" },
    "correctAnswer": "B",
    "explanation": "Country name."
  },
  {
    "id": 545,
    "subject": "Science and Technology",
    "question": "Fish live in ________.",
    "options": { "A": "Air", "B": "Water", "C": "Soil", "D": "Fire" },
    "correctAnswer": "B",
    "explanation": "Habitat."
  },
  {
    "id": 546,
    "subject": "Social Studies",
    "question": "President is leader of ________.",
    "options": { "A": "School", "B": "Country", "C": "Home", "D": "Class" },
    "correctAnswer": "B",
    "explanation": "National leader."
  },
  {
    "id": 547,
    "subject": "Agriculture",
    "question": "We eat ________.",
    "options": { "A": "Stones", "B": "Food", "C": "Wood", "D": "Grass" },
    "correctAnswer": "B",
    "explanation": "Nutrition."
  },
  {
    "id": 548,
    "subject": "CRE",
    "question": "God created ________.",
    "options": { "A": "Cars", "B": "World", "C": "Phones", "D": "Houses" },
    "correctAnswer": "B",
    "explanation": "Creation."
  },
  {
    "id": 549,
    "subject": "Homescience",
    "question": "Broom sweeps ________.",
    "options": { "A": "Air", "B": "Floor", "C": "Water", "D": "Table" },
    "correctAnswer": "B",
    "explanation": "Cleaning."
  },
  {
    "id": 550,
    "subject": "PE",
    "question": "We kick ________.",
    "options": { "A": "Ball", "B": "Stone", "C": "Wall", "D": "Car" },
    "correctAnswer": "A",
    "explanation": "Sport action."
  },
  {
    "id": 551,
    "subject": "Mathematics",
    "question": "0 + 5",
    "options": { "A": "0", "B": "5", "C": "10", "D": "50" },
    "correctAnswer": "B",
    "explanation": "Identity property."
  },
  {
    "id": 552,
    "subject": "Mathematics",
    "question": "Triangle has ________ sides.",
    "options": { "A": "2", "B": "3", "C": "4", "D": "5" },
    "correctAnswer": "B",
    "explanation": "Shape."
  },
  {
    "id": 553,
    "subject": "English",
    "question": "Cat says ________.",
    "options": { "A": "Woof", "B": "Meow", "C": "Moo", "D": "Baa" },
    "correctAnswer": "B",
    "explanation": "Sound."
  },
  {
    "id": 554,
    "subject": "Kiswahili",
    "question": "Maji ya ________.",
    "options": { "A": "Kula", "B": "Kunywa", "C": "Kushona", "D": "Kulima" },
    "correctAnswer": "B",
    "explanation": "Drinking."
  },
  {
    "id": 555,
    "subject": "Science and Technology",
    "question": "Cows have ________ legs.",
    "options": { "A": "2", "B": "4", "C": "6", "D": "8" },
    "correctAnswer": "B",
    "explanation": "Quadruped."
  },
  {
    "id": 556,
    "subject": "Social Studies",
    "question": "Teacher teaches in ________.",
    "options": { "A": "Hospital", "B": "School", "C": "Farm", "D": "Shop" },
    "correctAnswer": "B",
    "explanation": "Workplace."
  },
  {
    "id": 557,
    "subject": "Agriculture",
    "question": "Hens give ________.",
    "options": { "A": "Milk", "B": "Eggs", "C": "Honey", "D": "Wool" },
    "correctAnswer": "B",
    "explanation": "Poultry product."
  },
  {
    "id": 558,
    "subject": "CRE",
    "question": "Adam and ________.",
    "options": { "A": "Mary", "B": "Eve", "C": "Ruth", "D": "Sarah" },
    "correctAnswer": "B",
    "explanation": "First couple."
  },
  {
    "id": 559,
    "subject": "Homescience",
    "question": "Knife cuts ________.",
    "options": { "A": "Water", "B": "Food", "C": "Air", "D": "Stone" },
    "correctAnswer": "B",
    "explanation": "Tool usage."
  },
  {
    "id": 560,
    "subject": "PE",
    "question": "Netball has ________ players.",
    "options": { "A": "5", "B": "7", "C": "11", "D": "10" },
    "correctAnswer": "B",
    "explanation": "Team size."
  },
  {
    "id": 561,
    "subject": "Mathematics",
    "question": "2 x 2",
    "options": { "A": "2", "B": "4", "C": "6", "D": "8" },
    "correctAnswer": "B",
    "explanation": "Multiplication."
  },
  {
    "id": 562,
    "subject": "Mathematics",
    "question": "Number 1",
    "options": { "A": "One", "B": "Two", "C": "Three", "D": "Four" },
    "correctAnswer": "A",
    "explanation": "Word form."
  },
  {
    "id": 563,
    "subject": "English",
    "question": "Boy is ________.",
    "options": { "A": "She", "B": "He", "C": "It", "D": "They" },
    "correctAnswer": "B",
    "explanation": "Pronoun."
  },
  {
    "id": 564,
    "subject": "Kiswahili",
    "question": "Mama anapika ________.",
    "options": { "A": "Maji", "B": "Chakula", "C": "Hewa", "D": "Miti" },
    "correctAnswer": "B",
    "explanation": "Cooking food."
  },
  {
    "id": 565,
    "subject": "Science and Technology",
    "question": "Birds fly in ________.",
    "options": { "A": "Water", "B": "Air", "C": "Ground", "D": "Fire" },
    "correctAnswer": "B",
    "explanation": "Flight."
  },
  {
    "id": 566,
    "subject": "Social Studies",
    "question": "Flag has ________ colors.",
    "options": { "A": "1", "B": "4", "C": "10", "D": "2" },
    "correctAnswer": "B",
    "explanation": "National symbol."
  },
  {
    "id": 567,
    "subject": "Agriculture",
    "question": "Dig with ________.",
    "options": { "A": "Spoon", "B": "Jembe", "C": "Knife", "D": "Pen" },
    "correctAnswer": "B",
    "explanation": "Tool."
  },
  {
    "id": 568,
    "subject": "CRE",
    "question": "Jesus died on ________.",
    "options": { "A": "Bed", "B": "Cross", "C": "Chair", "D": "Table" },
    "correctAnswer": "B",
    "explanation": "Crucifixion."
  },
  {
    "id": 569,
    "subject": "Homescience",
    "question": "Wash hands with ________.",
    "options": { "A": "Mud", "B": "Soap", "C": "Oil", "D": "Sand" },
    "correctAnswer": "B",
    "explanation": "Hygiene."
  },
  {
    "id": 570,
    "subject": "PE",
    "question": "Run on ________.",
    "options": { "A": "Roof", "B": "Track", "C": "Water", "D": "Bed" },
    "correctAnswer": "B",
    "explanation": "Athletics."
  },
  {
    "id": 571,
    "subject": "Mathematics",
    "question": "10 - 5",
    "options": { "A": "2", "B": "5", "C": "10", "D": "15" },
    "correctAnswer": "B",
    "explanation": "Subtraction."
  },
  {
    "id": 572,
    "subject": "Mathematics",
    "question": "Circle is ________.",
    "options": { "A": "Square", "B": "Round", "C": "Pointy", "D": "Flat" },
    "correctAnswer": "B",
    "explanation": "Shape."
  },
  {
    "id": 573,
    "subject": "English",
    "question": "Opposite of Up.",
    "options": { "A": "Left", "B": "Down", "C": "Right", "D": "High" },
    "correctAnswer": "B",
    "explanation": "Direction."
  },
  {
    "id": 574,
    "subject": "Kiswahili",
    "question": "Kula ________.",
    "options": { "A": "Maji", "B": "Chakula", "C": "Hewa", "D": "Miti" },
    "correctAnswer": "B",
    "explanation": "Eat food."
  },
  {
    "id": 575,
    "subject": "Science and Technology",
    "question": "Eyes are for ________.",
    "options": { "A": "Hearing", "B": "Seeing", "C": "Smelling", "D": "Tasting" },
    "correctAnswer": "B",
    "explanation": "Sight."
  },
  {
    "id": 576,
    "subject": "Social Studies",
    "question": "School is for ________.",
    "options": { "A": "Learning", "B": "Sleeping", "C": "Fighting", "D": "Dancing" },
    "correctAnswer": "A",
    "explanation": "Education."
  },
  {
    "id": 577,
    "subject": "Agriculture",
    "question": "Plants grow in ________.",
    "options": { "A": "Sky", "B": "Soil", "C": "Box", "D": "Pocket" },
    "correctAnswer": "B",
    "explanation": "Nature."
  },
  {
    "id": 578,
    "subject": "CRE",
    "question": "Pray to ________.",
    "options": { "A": "Man", "B": "God", "C": "Tree", "D": "Sun" },
    "correctAnswer": "B",
    "explanation": "Faith."
  },
  {
    "id": 579,
    "subject": "Homescience",
    "question": "Sleep in ________.",
    "options": { "A": "Kitchen", "B": "Bedroom", "C": "Class", "D": "Bus" },
    "correctAnswer": "B",
    "explanation": "Rest."
  },
  {
    "id": 580,
    "subject": "PE",
    "question": "Kick ________.",
    "options": { "A": "Ball", "B": "Friend", "C": "Wall", "D": "Dog" },
    "correctAnswer": "A",
    "explanation": "Game."
  },
  {
    "id": 581,
    "subject": "Mathematics",
    "question": "1 + 2",
    "options": { "A": "2", "B": "3", "C": "4", "D": "5" },
    "correctAnswer": "B",
    "explanation": "Sum."
  },
  {
    "id": 582,
    "subject": "Mathematics",
    "question": "Square has ________ corners.",
    "options": { "A": "2", "B": "4", "C": "3", "D": "5" },
    "correctAnswer": "B",
    "explanation": "Geometry."
  },
  {
    "id": 583,
    "subject": "English",
    "question": "Girl is ________.",
    "options": { "A": "He", "B": "She", "C": "It", "D": "They" },
    "correctAnswer": "B",
    "explanation": "Pronoun."
  },
  {
    "id": 584,
    "subject": "Kiswahili",
    "question": "Lala ________.",
    "options": { "A": "Mchana", "B": "Usiku", "C": "Asubuhi", "D": "Jioni" },
    "correctAnswer": "B",
    "explanation": "Sleep at night."
  },
  {
    "id": 585,
    "subject": "Science and Technology",
    "question": "Nose is for ________.",
    "options": { "A": "Seeing", "B": "Smelling", "C": "Eating", "D": "Walking" },
    "correctAnswer": "B",
    "explanation": "Scent."
  },
  {
    "id": 586,
    "subject": "Social Studies",
    "question": "Family lives in ________.",
    "options": { "A": "School", "B": "House", "C": "Car", "D": "Shop" },
    "correctAnswer": "B",
    "explanation": "Home."
  },
  {
    "id": 587,
    "subject": "Agriculture",
    "question": "Water crops.",
    "options": { "A": "Irrigation", "B": "Digging", "C": "Cutting", "D": "Eating" },
    "correctAnswer": "A",
    "explanation": "Farming."
  },
  {
    "id": 588,
    "subject": "CRE",
    "question": "Love your ________.",
    "options": { "A": "Enemy", "B": "Neighbor", "C": "Money", "D": "Car" },
    "correctAnswer": "B",
    "explanation": "Commandment."
  },
  {
    "id": 589,
    "subject": "Homescience",
    "question": "Cook food.",
    "options": { "A": "Raw", "B": "Boil", "C": "Dirty", "D": "Cold" },
    "correctAnswer": "B",
    "explanation": "Cooking method."
  },
  {
    "id": 590,
    "subject": "PE",
    "question": "Play game.",
    "options": { "A": "Work", "B": "Fun", "C": "Sad", "D": "Sleep" },
    "correctAnswer": "B",
    "explanation": "Activity."
  },
  {
    "id": 591,
    "subject": "Mathematics",
    "question": "2 + 2",
    "options": { "A": "2", "B": "4", "C": "6", "D": "8" },
    "correctAnswer": "B",
    "explanation": "Sum."
  },
  {
    "id": 592,
    "subject": "Mathematics",
    "question": "5 - 1",
    "options": { "A": "3", "B": "4", "C": "5", "D": "6" },
    "correctAnswer": "B",
    "explanation": "Subtract."
  },
  {
    "id": 593,
    "subject": "English",
    "question": "Big ________.",
    "options": { "A": "Small", "B": "Large", "C": "Tiny", "D": "Little" },
    "correctAnswer": "B",
    "explanation": "Synonym."
  },
  {
    "id": 594,
    "subject": "Kiswahili",
    "question": "Kimbia ________.",
    "options": { "A": "Pole", "B": "Haraka", "C": "Lala", "D": "Kula" },
    "correctAnswer": "B",
    "explanation": "Run fast."
  },
  {
    "id": 595,
    "subject": "Science and Technology",
    "question": "Fire is ________.",
    "options": { "A": "Cold", "B": "Hot", "C": "Wet", "D": "Soft" },
    "correctAnswer": "B",
    "explanation": "Heat."
  },
  {
    "id": 596,
    "subject": "Social Studies",
    "question": "City ________.",
    "options": { "A": "Village", "B": "Town", "C": "Farm", "D": "Bush" },
    "correctAnswer": "B",
    "explanation": "Urban."
  },
  {
    "id": 597,
    "subject": "Agriculture",
    "question": "Cow eats ________.",
    "options": { "A": "Meat", "B": "Grass", "C": "Milk", "D": "Egg" },
    "correctAnswer": "B",
    "explanation": "Food."
  },
  {
    "id": 598,
    "subject": "CRE",
    "question": "God is ________.",
    "options": { "A": "Bad", "B": "Good", "C": "Small", "D": "Weak" },
    "correctAnswer": "B",
    "explanation": "Attribute."
  },
  {
    "id": 599,
    "subject": "Homescience",
    "question": "Clean clothes.",
    "options": { "A": "Wash", "B": "Dirty", "C": "Tear", "D": "Burn" },
    "correctAnswer": "A",
    "explanation": "Laundry."
  },
  {
    "id": 600,
    "subject": "PE",
    "question": "Jump ________.",
    "options": { "A": "Low", "B": "High", "C": "Sit", "D": "Sleep" },
    "correctAnswer": "B",
    "explanation": "Action."
  }
]

export default quizData