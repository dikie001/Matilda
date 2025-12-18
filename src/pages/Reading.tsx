import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  ChevronLeft,
  ChevronRight,
  FileText,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";
import { useState } from "react";

type LevelKey = "Beginner" | "Junior" | "Super Reader" | "Story Time";

interface Lesson {
  word: string;
  sentence?: string;
  paragraph?: string;
}

const LESSON_DATA: Record<LevelKey, Lesson[]> = {
  Beginner: [
    { word: "Cat", sentence: "The cat is on the mat." },
    { word: "Sun", sentence: "The sun is big and hot." },
    { word: "Dog", sentence: "My dog likes to run." },
    { word: "Apple", sentence: "I eat a red apple." },
    { word: "Ball", sentence: "Throw the blue ball." },
    { word: "Fish", sentence: "The fish swims fast." },
    { word: "Hat", sentence: "I wear a yellow hat." },
    { word: "Cup", sentence: "Drink milk from the cup." },
    { word: "Bird", sentence: "The bird can fly high." },
    { word: "Tree", sentence: "The green tree is tall." },
    { word: "Frog", sentence: "The green frog can jump." },
    { word: "Milk", sentence: "I drink milk every day." },
    { word: "Cake", sentence: "The cake is very sweet." },
    { word: "Bed", sentence: "I sleep in my bed." },
    { word: "Book", sentence: "I read a fun book." },
    { word: "Ship", sentence: "The ship is on the sea." },
    { word: "Duck", sentence: "The duck says quack quack." },
    { word: "Bear", sentence: "The brown bear is big." },
    { word: "Shoe", sentence: "I put on my shoe." },
    { word: "Star", sentence: "Look at the bright star." },
    { word: "Moon", sentence: "The moon shines at night." },
    { word: "Cow", sentence: "The cow gives us milk." },
    { word: "Rain", sentence: "I like to play in rain." },
    { word: "Leaf", sentence: "The leaf fell from tree." },
    { word: "Boat", sentence: "The boat floats on water." },
    { word: "Bike", sentence: "I ride my new bike." },
    { word: "Lamp", sentence: "Turn on the small lamp." },
    { word: "Kite", sentence: "My kite flies very high." },
    { word: "Egg", sentence: "I eat one white egg." },
    { word: "Door", sentence: "Please open the blue door." },
    { word: "Pig", sentence: "The pink pig is messy." },
    { word: "Ant", sentence: "The tiny ant finds food." },
    { word: "Bee", sentence: "The bee makes sweet honey." },
    { word: "Box", sentence: "Put toys in the box." },
    { word: "Bus", sentence: "The yellow bus stops here." },
    { word: "Jar", sentence: "The jam is in the jar." },
    { word: "Key", sentence: "Use the key for the lock." },
    { word: "Map", sentence: "Look at the paper map." },
    { word: "Net", sentence: "Catch the bug in a net." },
    { word: "Owl", sentence: "The owl says hoo hoo." },
    { word: "Pen", sentence: "Write with a blue pen." },
    { word: "Rat", sentence: "The rat is very fast." },
    { word: "Sky", sentence: "The sky is very blue." },
    { word: "Toy", sentence: "Play with your favorite toy." },
    { word: "Van", sentence: "The white van is fast." },
    { word: "Web", sentence: "The spider made a web." },
    { word: "Zoo", sentence: "We see lions at the zoo." },
    { word: "Bag", sentence: "Put the book in my bag." },
    { word: "Bat", sentence: "The bat flies at night." },
    { word: "Can", sentence: "I can kick the ball." },
    { word: "Dad", sentence: "My dad is very tall." },
    { word: "Fan", sentence: "Turn on the cool fan." },
    { word: "Gum", sentence: "I like to chew gum." },
    { word: "Hen", sentence: "The hen laid an egg." },
    { word: "Ice", sentence: "The ice is very cold." },
    { word: "Jet", sentence: "The jet flies very fast." },
    { word: "Leg", sentence: "Stand on your left leg." },
    { word: "Mat", sentence: "Sit down on the mat." },
    { word: "Nap", sentence: "The baby takes a nap." },
    { word: "Pan", sentence: "Cook eggs in the pan." },
    { word: "Red", sentence: "The rose is deep red." },
    { word: "Sit", sentence: "Sit in the big chair." },
    { word: "Ten", sentence: "I have ten small toes." },
    { word: "Up", sentence: "Look up at the birds." },
    { word: "Wet", sentence: "The grass is very wet." },
    { word: "Yak", sentence: "The yak has long hair." },
    { word: "Zip", sentence: "Zip up your warm coat." },
    { word: "Axe", sentence: "The axe cuts the wood." },
    { word: "Boy", sentence: "The boy plays in mud." },
    { word: "Cap", sentence: "I wear a red cap." },
    { word: "Dig", sentence: "Dig a hole for seeds." },
    { word: "Ear", sentence: "I hear with my ear." },
    { word: "Fox", sentence: "The fox has a tail." },
    { word: "Gas", sentence: "The car needs some gas." },
    { word: "Hot", sentence: "The soup is very hot." },
    { word: "Ink", sentence: "The ink is on paper." },
    { word: "Joy", sentence: "I jump for pure joy." },
    { word: "Kid", sentence: "The kid likes to play." },
    { word: "Log", sentence: "The frog is on a log." },
    { word: "Mom", sentence: "I love my kind mom." },
    { word: "New", sentence: "I have a new shirt." },
    { word: "Off", sentence: "Turn off the bright light." },
    { word: "Pot", sentence: "The plant is in a pot." },
    { word: "Run", sentence: "Run as fast as you can." },
    { word: "Six", sentence: "I see six little bugs." },
    { word: "Top", sentence: "Spin the blue toy top." },
    { word: "Use", sentence: "Use the spoon for soup." },
    { word: "Win", sentence: "I want to win the race." },
    { word: "Box", sentence: "The box is very heavy." },
    { word: "Yam", sentence: "I eat a sweet yam." },
    { word: "Arm", sentence: "Lift up your right arm." },
    { word: "Bee", sentence: "The bee sits on a bud." },
    { word: "Car", sentence: "The red car goes fast." },
    { word: "Dot", sentence: "The ladybug has a dot." },
    { word: "Eat", sentence: "Eat your green peas now." },
    { word: "Fly", sentence: "The fly is on the wall." },
    { word: "Get", sentence: "Go get your warm hat." },
    { word: "Hug", sentence: "Give your mom a hug." },
    { word: "Ill", sentence: "The poor cat feels ill." },
    { word: "Jam", sentence: "I like grape jam best." },
    { word: "Kit", sentence: "The kit has many tools." },
    { word: "Lip", sentence: "The red paint is on lip." },
    { word: "Mud", sentence: "The pig likes the mud." },
    { word: "Not", sentence: "That is not my book." },
    { word: "Old", sentence: "The old tree is tall." },
    { word: "Pet", sentence: "I have a pet rabbit." },
    { word: "Rub", sentence: "Rub your hands to warm." },
    { word: "Sun", sentence: "The sun sets in west." },
    { word: "Two", sentence: "I have two brown eyes." },
    { word: "Vet", sentence: "The vet helps the dog." },
    { word: "Wig", sentence: "The clown has a wig." },
    { word: "Yes", sentence: "Yes I can help you." },
    { word: "Ant", sentence: "The ant is very small." },
    { word: "Bed", sentence: "Go to bed and sleep." },
    { word: "Cry", sentence: "Do not cry little baby." },
    { word: "Day", sentence: "It is a sunny day." },
    { word: "End", sentence: "This is the very end." },
    { word: "Fix", sentence: "Fix the broken blue toy." },
    { word: "Gum", sentence: "Chew the gum very slow." },
    { word: "Hat", sentence: "Put the hat on head." },
    { word: "Ivy", sentence: "The green ivy grows up." },
    { word: "Jet", sentence: "The jet is in the sky." },
    { word: "Ken", sentence: "Ken is a nice boy." },
    { word: "Lid", sentence: "Put the lid on the jar." },
    { word: "Mix", sentence: "Mix the red and blue." },
    { word: "Nut", sentence: "The squirrel has a nut." },
    { word: "One", sentence: "I see one little bird." },
    { word: "Pup", sentence: "The pup is very cute." },
    { word: "Rat", sentence: "The rat ran in the barn." },
    { word: "Sad", sentence: "The boy felt very sad." },
    { word: "Tea", sentence: "Drink the hot lemon tea." },
    { word: "Urn", sentence: "The tea is in the urn." },
    { word: "Van", sentence: "The van is by the gate." },
    { word: "Wax", sentence: "The candle is made of wax." },
    { word: "Yak", sentence: "The yak lives on hill." },
    { word: "Zoo", sentence: "Let us go to the zoo." },
    { word: "Big", sentence: "The elephant is very big." },
    { word: "Cut", sentence: "Cut the paper with care." },
    { word: "Dry", sentence: "The towel is very dry." },
    { word: "Eye", sentence: "I close my left eye." },
    { word: "Far", sentence: "The star is very far." },
    { word: "Guy", sentence: "He is a very nice guy." },
    { word: "Hop", sentence: "The frog can hop far." },
    { word: "Ice", sentence: "Put ice in the water." },
    { word: "Job", sentence: "I did a very good job." },
    { word: "Key", sentence: "The key is on the table." },
    { word: "Low", sentence: "The sun is very low." },
    { word: "Mop", sentence: "Mop the dirty floor now." },
    { word: "New", sentence: "The new shoes are red." },
    { word: "Owl", sentence: "The owl is in the tree." },
    { word: "Pat", sentence: "Pat the dog on his back." },
    { word: "Raw", sentence: "The fish is very raw." },
    { word: "Saw", sentence: "I saw a big blue bird." },
    { word: "Toe", sentence: "I stubbed my little toe." },
    { word: "Use", sentence: "Use your quiet voice." },
    { word: "Via", sentence: "Go via the dirt road." },
    { word: "Way", sentence: "Show me the right way." },
    { word: "Yum", sentence: "The cake is so yum." },
    { word: "Age", sentence: "What is your current age." },
    { word: "Box", sentence: "Open the heavy wooden box." },
    { word: "Car", sentence: "The blue car is fast." },
    { word: "Dew", sentence: "The dew is on the leaf." },
    { word: "Elf", sentence: "The elf has a tiny hat." },
    { word: "Fin", sentence: "The fish has a sharp fin." },
    { word: "Gem", sentence: "The gem is very bright." },
    { word: "Hum", sentence: "I like to hum a song." },
    { word: "Its", sentence: "The cat licks its paw." },
    { word: "Jog", sentence: "I jog in the morning." },
    { word: "Kid", sentence: "The kid has a toy car." },
  ],
  Junior: [
    { word: "Garden", sentence: "We plant seeds in the garden." },
    { word: "School", sentence: "I learn many things at school." },
    { word: "Rocket", sentence: "The rocket flies to the stars." },
    { word: "Friend", sentence: "I share toys with my friend." },
    { word: "Orange", sentence: "An orange is juicy and sweet." },
    { word: "Bridge", sentence: "The cars drive across the bridge." },
    { word: "Turtle", sentence: "A turtle carries its own house." },
    { word: "Castle", sentence: "The king lives in a castle." },
    { word: "Forest", sentence: "Many animals live in the forest." },
    { word: "Helper", sentence: "Be a good helper at home." },
    { word: "Window", sentence: "I look out the bedroom window." },
    { word: "Planet", sentence: "Earth is a very beautiful planet." },
    { word: "Dinner", sentence: "We eat dinner with our family." },
    { word: "Spring", sentence: "Flowers start to grow in spring." },
    { word: "Winter", sentence: "It is cold during the winter." },
    { word: "Summer", sentence: "We go to the beach in summer." },
    { word: "Monkey", sentence: "The monkey swings on the vine." },
    { word: "Cheese", sentence: "I like yellow cheese on bread." },
    { word: "Yellow", sentence: "The happy sun is bright yellow." },
    { word: "Pencil", sentence: "Use a pencil to draw a cat." },
    { word: "Button", sentence: "Push the button to start the game." },
    { word: "Rabbit", sentence: "The rabbit hops in the grass." },
    { word: "Market", sentence: "We buy fresh fruit at the market." },
    { word: "Better", sentence: "I am getting better at reading." },
    { word: "Always", sentence: "I always wash my hands now." },
    { word: "Before", sentence: "Brush your teeth before you sleep." },
    { word: "Cloudy", sentence: "The sky is very cloudy today." },
    { word: "Farmer", sentence: "The farmer drives a big tractor." },
    { word: "Grapes", sentence: "I love eating green sweet grapes." },
    { word: "Island", sentence: "The island is in the ocean." },
    { word: "Kitchen", sentence: "Mom is cooking in the kitchen." },
    { word: "Ladder", sentence: "Climb up the ladder to the top." },
    { word: "Morning", sentence: "Eat your breakfast in the morning." },
    { word: "Number", sentence: "Pick your favorite lucky number." },
    { word: "Person", sentence: "You are a very kind person." },
    { word: "Rabbit", sentence: "The rabbit has very long ears." },
    { word: "Silver", sentence: "The moon looks like silver." },
    { word: "Ticket", sentence: "Hold your ticket for the movie." },
    { word: "Useful", sentence: "A map is useful for travel." },
    { word: "Village", sentence: "They live in a small village." },

    { word: "Apple", sentence: "I eat an apple every day." },
    { word: "Balloon", sentence: "The red balloon floats up." },
    { word: "Butterfly", sentence: "The butterfly has pretty wings." },
    { word: "Chair", sentence: "Sit on the chair quietly." },
    { word: "Doctor", sentence: "The doctor helps sick people." },
    { word: "Elephant", sentence: "The elephant is very big." },
    { word: "Family", sentence: "I love my family." },
    { word: "Grass", sentence: "The grass is soft and green." },
    { word: "House", sentence: "My house has a blue door." },
    { word: "Ice", sentence: "Ice is very cold." },
    { word: "Juice", sentence: "I drink orange juice." },
    { word: "Kitten", sentence: "The kitten is small and cute." },
    { word: "Lamp", sentence: "Turn on the lamp at night." },
    { word: "Milk", sentence: "Milk makes bones strong." },
    { word: "Nest", sentence: "The bird sleeps in a nest." },
    { word: "Ocean", sentence: "Fish live in the ocean." },
    { word: "Paper", sentence: "Fold the paper in half." },
    { word: "Queen", sentence: "The queen wears a crown." },
    { word: "Rain", sentence: "Rain falls from dark clouds." },
    { word: "Star", sentence: "A star shines at night." },
    { word: "Table", sentence: "Put the book on the table." },
    { word: "Umbrella", sentence: "Use an umbrella in the rain." },
    { word: "Van", sentence: "We ride in a school van." },
    { word: "Water", sentence: "Drink water to stay healthy." },
    { word: "Box", sentence: "The toy is in the box." },
    { word: "Yogurt", sentence: "I eat yogurt for breakfast." },
    { word: "Zoo", sentence: "We saw lions at the zoo." },
  ],
  "Super Reader": [
    { word: "Adventure", sentence: "Let's go on a forest adventure." },
    { word: "Mountain", sentence: "The snowy mountain is very tall." },
    { word: "Universe", sentence: "The universe is full of mysteries." },
    { word: "Dinosaur", sentence: "The huge dinosaur lived long ago." },
    { word: "Astronaut", sentence: "An astronaut travels into outer space." },
    { word: "Treasure", sentence: "The pirates found the gold treasure." },
    { word: "Invisible", sentence: "The wind is strong but invisible." },
    { word: "Celebrate", sentence: "We celebrate birthdays with big cakes." },
    { word: "Different", sentence: "Every person is special and different." },
    { word: "Experience", sentence: "Camping was a very fun experience." },
    { word: "Lightning", sentence: "Lightning flashes during a loud storm." },
    { word: "Skeleton", sentence: "The skeleton protects our soft organs." },
    { word: "Vegetable", sentence: "Eating a vegetable makes you strong." },
    { word: "Yesterday", sentence: "Yesterday we went to the local zoo." },
    { word: "Knowledge", sentence: "Reading books gives us great knowledge." },
    {
      word: "Beautiful",
      sentence: "The butterfly has beautiful colorful wings.",
    },
    { word: "Discovery", sentence: "The scientist made a new discovery." },
    { word: "Gymnastics", sentence: "She practices gymnastics after school." },
    { word: "Horizontal", sentence: "A flat line is called horizontal." },
    { word: "Imagine", sentence: "Imagine you are flying in the sky." },

    { word: "Explorer", sentence: "The explorer sailed across the ocean." },
    { word: "Whisper", sentence: "Please whisper inside the library." },
    { word: "Powerful", sentence: "The lion is strong and powerful." },
    { word: "Journey", sentence: "Our journey took many days." },
    { word: "Brilliant", sentence: "She had a brilliant idea." },
    { word: "Courage", sentence: "It takes courage to try again." },
    { word: "Energy", sentence: "Running gives me lots of energy." },
    { word: "Festival", sentence: "The town hosted a fun festival." },
    { word: "Gravity", sentence: "Gravity pulls objects to the ground." },
    { word: "Harmony", sentence: "The choir sang in perfect harmony." },
    { word: "Island", sentence: "We saw an island in the distance." },
    { word: "Justice", sentence: "Justice means being fair to all." },
    { word: "Kingdom", sentence: "The castle ruled the kingdom." },
    { word: "Library", sentence: "The library is quiet and calm." },
    { word: "Machine", sentence: "The machine helps us work faster." },
    { word: "Nature", sentence: "Nature is full of beauty." },
    { word: "Ocean", sentence: "The ocean waves were loud." },
    { word: "Pattern", sentence: "I noticed a pattern in the tiles." },
    { word: "Quickly", sentence: "She quickly finished her homework." },
    { word: "Rescue", sentence: "The team came to rescue the dog." },

    { word: "Science", sentence: "Science helps us understand the world." },
    { word: "Teacher", sentence: "The teacher explained the lesson." },
    { word: "Uniform", sentence: "We wear a uniform to school." },
    { word: "Victory", sentence: "The team celebrated their victory." },
    { word: "Weather", sentence: "The weather is sunny today." },
    { word: "Xylophone", sentence: "He played music on the xylophone." },
    { word: "Youthful", sentence: "The puppy looks youthful and happy." },
    { word: "Zookeeper", sentence: "The zookeeper feeds the animals." },

    { word: "Balance", sentence: "She kept her balance on the beam." },
    { word: "Compass", sentence: "The compass shows north." },
    { word: "Desert", sentence: "The desert is hot and dry." },
    { word: "Engine", sentence: "The engine powers the car." },
    { word: "Floating", sentence: "The boat is floating on water." },
    { word: "Glacier", sentence: "A glacier moves very slowly." },
    { word: "Helmet", sentence: "Wear a helmet when riding." },
    { word: "Invention", sentence: "The invention changed our lives." },
    { word: "Jungle", sentence: "The jungle is full of animals." },
    { word: "Lantern", sentence: "The lantern lit the path." },

    { word: "Magnet", sentence: "A magnet sticks to metal." },
    { word: "Nervous", sentence: "He felt nervous before speaking." },
    { word: "Orbit", sentence: "The moon stays in orbit." },
    { word: "Planet", sentence: "Earth is a blue planet." },
    { word: "Quiet", sentence: "Please be quiet in class." },
    { word: "Rocket", sentence: "The rocket blasted into space." },
    { word: "Shadow", sentence: "My shadow followed me." },
    { word: "Tunnel", sentence: "The train entered the tunnel." },
    { word: "Useful", sentence: "This tool is very useful." },
    { word: "Village", sentence: "They live in a small village." },

    { word: "Waterfall", sentence: "The waterfall is loud and tall." },
    { word: "Excellent", sentence: "You did an excellent job." },
    { word: "Yawning", sentence: "The cat kept yawning." },
    { word: "Zealous", sentence: "She was zealous about learning." },
  ],
  "Story Time": [
    {
      word: "Morning Magic",
      paragraph:
        "The golden sun peeks through my bedroom window. It wakes up the birds who start to sing a happy song. I jump out of my cozy bed and put on my soft slippers. Today is going to be a wonderful day full of magic and fun!",
    },
    {
      word: "Ocean Friends",
      paragraph:
        "Deep under the blue waves, a little fish swims through the coral. She sees a big whale waving its tail. They play hide and seek behind the tall green seaweed. The ocean is full of beautiful friends and hidden treasures.",
    },
    {
      word: "The Magic Garden",
      paragraph:
        "In the middle of the park is a secret garden. The flowers there can talk and tell funny stories. If you listen very closely, you can hear the roses laughing at the bees. It is the most beautiful place in the whole world.",
    },
    {
      word: "The Friendly Cloud",
      paragraph:
        "High in the sky floats a soft white cloud. It slowly changes its shape into a bunny and then a ship. Children below point and laugh with joy. The cloud smiles as it drifts across the blue sky.",
    },
    {
      word: "Nighttime Stars",
      paragraph:
        "When the sun goes to sleep, the stars come out to play. They twinkle and shine like tiny lights in the dark sky. The moon watches over them quietly. Night feels calm and peaceful.",
    },
    {
      word: "The Brave Little Bird",
      paragraph:
        "A small bird sits on a tall tree branch. She is scared but wants to fly. She takes a deep breath and jumps. Soon she is flying high and feeling very proud.",
    },
    {
      word: "Rainy Day Fun",
      paragraph:
        "Raindrops tap softly on the window. Puddles form on the ground outside. I put on my boots and jump splash splash splash. Rainy days can be fun too.",
    },
    {
      word: "The Lost Teddy",
      paragraph:
        "A little teddy bear falls under the bed. He feels lonely in the dark. Soon a small hand reaches down and picks him up. Teddy is happy to be home again.",
    },
    {
      word: "The Busy Ant",
      paragraph:
        "An ant carries a crumb bigger than its head. It walks slowly but never gives up. Other ants cheer and help along the way. Together they reach their home.",
    },
    {
      word: "The Happy Playground",
      paragraph:
        "Children laugh as they run across the playground. Swings fly high and slides go fast. The air is full of joy and noise. Everyone goes home smiling.",
    },
  ],
};

const Reading = () => {
  const [level, setLevel] = useState<LevelKey>("Beginner");
  const [index, setIndex] = useState(0);
  //   const [isSpeaking, setIsSpeaking] = useState<string | null>(null);
  const [activeWord, setActiveWord] = useState<string | null>(null);

  const lessons = LESSON_DATA[level];
  const current = lessons[index];

  const speak = (text: string, rate = 0.6) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = rate;
    utterance.pitch = 1.1;
    // utterance.onstart = () => setIsSpeaking(text);
    utterance.onend = () => {
      //   setIsSpeaking(null);
      setActiveWord(null);
    };
    window.speechSynthesis.speak(utterance);
  };

  const speakWithHighlight = (text: string, rate = 0.6) => {
    const words = text.split(/\s+/);
    speak(text, rate);
    words.forEach((word, i) => {
      setTimeout(() => {
        setActiveWord(word.replace(/[.,!?;]/g, ""));
      }, i * (level === "Story Time" ? 400 : 500));
    });
  };

  const nextLesson = () => index < lessons.length - 1 && setIndex(index + 1);
  const prevLesson = () => index > 0 && setIndex(index - 1);

  return (
    <div className="flex h-screen w-full bg-[#F8FAFC] font-sans text-slate-900 overflow-hidden">
      {/* SIDEBAR */}
      <aside className="hidden md:flex w-72 flex-col bg-white border-r-4 border-slate-100 p-6 shadow-sm overflow-y-auto">
        <div className="mb-10 flex items-center gap-3 rounded-2xl bg-indigo-50 p-4">
          <BookOpen className="h-6 w-6 text-indigo-600" />
          <span className="font-black uppercase tracking-tight text-indigo-900">
            Reader
          </span>
        </div>

        <nav className="flex-1 space-y-3">
          {(Object.keys(LESSON_DATA) as LevelKey[]).map((l) => (
            <button
              key={l}
              onClick={() => {
                setLevel(l);
                setIndex(0);
              }}
              className={`w-full rounded-2xl p-4 text-left transition-all border-b-4 active:translate-y-1 ${
                level === l
                  ? "bg-indigo-600 text-white border-indigo-800 shadow-lg"
                  : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <div className="text-[10px] font-black uppercase opacity-60">
                Level
              </div>
              <div className="font-bold text-lg flex items-center gap-2">
                {l === "Story Time" && <FileText className="h-4 w-4" />}
                {l}
              </div>
            </button>
          ))}
        </nav>

        <div className="rounded-3xl bg-amber-50 p-5 border-b-4 border-amber-100 mt-6">
          <Trophy className="mb-2 h-6 w-6 text-amber-500" />
          <p className="text-sm font-bold text-amber-900 leading-tight">
            Great job kiddo!!
          </p>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex flex-1 flex-col relative h-full">
        {/* Back Button */}
        <div className="absolute top-4 left-8 z-10">
          <Button
            variant="ghost"
            className="flex items-center gap-2 font-bold rounded-2xl text-slate-500 hover:text-blue-600/20 transition-colors"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
        </div>

        {/* Progress Header */}
        <header className="flex h-20 items-end justify-between px-8 mt-2 pb-2">
          <div className="h-3 flex-1 max-w-md bg-slate-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-green-500"
              initial={{ width: 0 }}
              animate={{ width: `${((index + 1) / lessons.length) * 100}%` }}
              transition={{ type: "spring", stiffness: 50 }}
            />
          </div>
          <div className="ml-4 font-black text-slate-400">
            {index + 1} <span className="opacity-30">/</span> {lessons.length}
          </div>
        </header>

        {/* LEARNING AREA */}
        <section className="flex-1 flex items-center justify-center p-4 md:px-12 md:pb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${level}-${index}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="h-full w-full max-w-4xl"
            >
              <Card className="h-full w-full flex flex-col rounded-[2.5rem] border-0 bg-white shadow-2xl border-b-[10px] border-slate-100 overflow-hidden">
                <CardContent className="flex-1 flex flex-col items-center justify-center py-4 px-2 md:p-4 space-y-4">
                  {/* TITLE */}
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => speak(current.word)}
                    className="flex flex-col items-center group"
                  >
                    <h2
                      className={`text-center mb-2 -mt-2 font-black tracking-tighter transition-colors ${
                        level === "Story Time"
                          ? "text-4xl md:text-5xl text-indigo-600"
                          : "text-6xl md:text-8xl text-slate-900"
                      }`}
                    >
                      {current.word}
                    </h2>
                  </motion.button>

                  {/* CONTENT (Sentence OR Paragraph) */}
                  <div className="w-full">
                    {current.paragraph ? (
                      <motion.div
                        onClick={() =>
                          speakWithHighlight(current.paragraph!, 0.6)
                        }
                        className="cursor-pointer rounded-3xl bg-amber-50/50 p-6 md:p-8 border-4 border-dashed border-amber-100 hover:bg-amber-50 transition-all"
                      >
                        <div className="flex flex-wrap justify-center gap-x-2 gap-y-1 leading-relaxed">
                          {current.paragraph.split(" ").map((word, i) => (
                            <motion.span
                              key={i}
                              animate={{
                                color:
                                  activeWord === word.replace(/[.,!?;]/g, "")
                                    ? "#d97706"
                                    : "#475569",
                                scale:
                                  activeWord === word.replace(/[.,!?;]/g, "")
                                    ? 1.1
                                    : 1,
                              }}
                              className="text-lg md:text-2xl font-bold transition-all"
                            >
                              {word}
                            </motion.span>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center justify-center gap-2 text-amber-500">
                          <FileText className="h-4 w-4" />
                          <span className="text-[10px] font-black uppercase tracking-widest">
                            Read Story
                          </span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        onClick={() => speakWithHighlight(current.sentence!)}
                        className="cursor-pointer rounded-[2rem] bg-indigo-50/50 p-8 border-4 border-dashed border-indigo-100 hover:bg-indigo-50 transition-all text-center"
                      >
                        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
                          {current.sentence?.split(" ").map((word, i) => (
                            <motion.span
                              key={i}
                              animate={{
                                scale:
                                  activeWord === word.replace(/[.,]/g, "")
                                    ? 1.2
                                    : 1,
                                color:
                                  activeWord === word.replace(/[.,]/g, "")
                                    ? "#4f46e5"
                                    : "#1e293b",
                              }}
                              className="text-3xl md:text-5xl font-extrabold"
                            >
                              {word}
                            </motion.span>
                          ))}
                        </div>
                        <div className="mt-4 flex items-center justify-center gap-2 text-indigo-400">
                          <Sparkles className="h-4 w-4" />
                          <span className="text-[10px] font-black uppercase tracking-widest">
                            Tap to read
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </section>

        {/* NAVIGATION BAR */}
        <footer className="h-28 flex items-center justify-between px-8 md:px-20 bg-white/50 backdrop-blur-sm">
          <Button
            variant="ghost"
            onClick={prevLesson}
            disabled={index === 0}
            className="h-14 w-14 rounded-full border-2 border-slate-200 bg-white disabled:opacity-20 shadow-sm"
          >
            <ChevronLeft className="h-6 w-6 text-slate-600" />
          </Button>

          <div className="flex items-center gap-4">
            <Star className="h-5 w-5 fill-amber-400 text-amber-400 animate-pulse" />
            <span className="hidden sm:block font-black text-slate-400 uppercase text-[10px] tracking-widest">
              Keep going kiddo!
            </span>
            <Star className="h-5 w-5 fill-amber-400 text-amber-400 animate-pulse" />
          </div>

          <Button
            onClick={nextLesson}
            disabled={index === lessons.length - 1}
            className="h-16 px-10 rounded-2xl bg-green-500 text-white shadow-[0_6px_0_0_#15803d] hover:bg-green-600 active:translate-y-1 active:shadow-none transition-all flex items-center gap-3"
          >
            <span className="text-lg font-black uppercase tracking-tight">
              Next
            </span>
            <ChevronRight className="h-6 w-6" />
          </Button>
        </footer>
      </main>
    </div>
  );
};

export default Reading;
