import type { QuizType } from "@/pages/LINCOLN/LincolnQuickQuiz";

export const quizData: QuizType[] = [
    {
        id: 1,
        subject: "Vocabulary",
        question: "What is the meaning of the word 'obfuscate'?",
        options: { A: "To make clear", B: "To render obscure or unclear", C: "To build rapidly", D: "To delete permanently" },
        correctAnswer: "B",
        explanation: "To obfuscate means to make something difficult to understand, often used in coding to describe hiding logic."
    },
    {
        id: 2,
        subject: "Computer Science",
        question: "In the CAP theorem, what does the 'P' stand for?",
        options: { A: "Persistence", B: "Performance", C: "Partition Tolerance", D: "Protocol" },
        correctAnswer: "C",
        explanation: "CAP stands for Consistency, Availability, and Partition Tolerance."
    },
    {
        id: 3,
        subject: "Public Speaking",
        question: "Which rhetorical device involves repeating a word or phrase at the beginning of successive clauses?",
        options: { A: "Epistrophe", B: "Anaphora", C: "Hyperbole", D: "Metaphor" },
        correctAnswer: "B",
        explanation: "Anaphora is the repetition of a word/phrase at the beginning of successive clauses (e.g., 'I have a dream')."
    },
    {
        id: 4,
        subject: "Tech Lingo",
        question: "What does 'Idempotency' mean in the context of REST APIs?",
        options: { A: "Making multiple identical requests has the same effect as making a single request", B: "The API creates a unique ID for every user", C: "The server responds faster to repeated requests", D: "The API is available 99.9% of the time" },
        correctAnswer: "A", explanation: "An idempotent operation produces the same result regardless of how many times it is executed."
    },
    {
        id: 5,
        subject: "Vocabulary",
        question: "Which word is a synonym for 'brief and to the point'?",
        options: { A: "Loquacious", B: "Succinct", C: "Circuitous", D: "Prolix" },
        correctAnswer: "B",
        explanation: "Succinct means briefly and clearly expressed."
    },
    {
        id: 6,
        subject: "Software Engineering",
        question: "Which design pattern restricts the instantiation of a class to one 'single' instance?",
        options: { A: "Factory", B: "Observer", C: "Singleton", D: "Decorator" },
        correctAnswer: "C",
        explanation: "The Singleton pattern ensures a class has only one instance and provides a global point of access to it."
    },
    {
        id: 7,
        subject: "General Knowledge",
        question: "What is the 'Pareto Principle' often applied in productivity?",
        options: { A: "Work expands to fill the time available", B: "80% of consequences come from 20% of causes", C: "Anything that can go wrong will go wrong", D: "The simplest solution is usually the correct one" },
        correctAnswer: "B",
        explanation: "Also known as the 80/20 rule."
    },
    {
        id: 8,
        subject: "Public Speaking",
        question: "What is 'glossophobia'?",
        options: { A: "Fear of shiny objects", B: "Fear of public speaking", C: "Fear of forgetting words", D: "Fear of microphones" },
        correctAnswer: "B",
        explanation: "Glossophobia is the technical term for the fear of public speaking."
    },
    {
        id: 9,
        subject: "Tech Lingo",
        question: "What does 'container orchestration' refer to?",
        options: { A: "Writing musical code", B: "Managing the lifecycles of containers (e.g., Kubernetes)", C: "Compressing files into a ZIP", D: "Designing UI containers" },
        correctAnswer: "B",
        explanation: "Tools like Kubernetes automate the deployment, scaling, and management of containerized applications."
    },
    {
        id: 10,
        subject: "Vocabulary",
        question: "What does 'ubiquitous' mean?",
        options: { A: "Rare and unique", B: "Present, appearing, or found everywhere", C: "Hidden or secretive", D: "Expensive and luxurious" },
        correctAnswer: "B",
        explanation: "Something ubiquitous is omnipresent, like 'ubiquitous computing'."
    },
    {
        id: 11,
        subject: "Software Engineering",
        question: "What is the time complexity of a binary search on a sorted array?",
        options: { A: "O(n)", B: "O(n^2)", C: "O(log n)", D: "O(1)" },
        correctAnswer: "C",
        explanation: "Binary search divides the search interval in half repeatedly, resulting in logarithmic time complexity."
    },
    {
        id: 12,
        subject: "Communication",
        question: "In communication, what does 'active listening' primarily involve?",
        options: { A: "Thinking about your response while the other speaks", B: "Fully concentrating, understanding, responding, and remembering", C: "Nodding continuously", D: "Interrupting to show engagement" },
        correctAnswer: "B",
        explanation: "Active listening requires full engagement with the speaker rather than passive hearing."
    },
    {
        id: 13,
        subject: "Tech Lingo",
        question: "What is 'technical debt'?",
        options: { A: "Money owed to software vendors", B: "The implied cost of future reworking required when choosing an easy solution now instead of a better approach", C: "The cost of cloud servers", D: "Salaries paid to developers" },
        correctAnswer: "B",
        explanation: "Technical debt accumulates when code is written for speed over quality, requiring refactoring later."
    },
    {
        id: 14,
        subject: "Vocabulary",
        question: "The word 'esoteric' describes knowledge that is...",
        options: { A: "Common sense", B: "Intended for or likely to be understood by only a small number of people", C: "Relating to history", D: "False or misleading" },
        correctAnswer: "B",
        explanation: "Esoteric knowledge is specialized and obscure."
    },
    {
        id: 15,
        subject: "Software Engineering",
        question: "What does 'ACID' stand for in database transactions?",
        options: { A: "Atomicity, Consistency, Isolation, Durability", B: "Access, Control, Identification, Data", C: "Async, Callback, Interface, Dependency", D: "Availability, Consistency, Integrity, Distributed" },
        correctAnswer: "A", explanation: "ACID properties ensure reliable processing of database transactions."
    },
    {
        id: 16,
        subject: "General Knowledge",
        question: "Who is considered the 'father of the computer' for his design of the Analytical Engine?",
        options: { A: "Alan Turing", B: "Charles Babbage", C: "Ada Lovelace", D: "John von Neumann" },
        correctAnswer: "B",
        explanation: "Charles Babbage conceptualized the first automatic digital computer."
    },
    {
        id: 17,
        subject: "Public Speaking",
        question: "What is the 'rule of three' in writing and speaking?",
        options: { A: "Never speak for more than 3 minutes", B: "Concepts or ideas presented in threes are more interesting, enjoyable, and memorable", C: "Look at three people in the audience", D: "Use only three slides" },
        correctAnswer: "B",
        explanation: "Triads (e.g., 'Life, liberty, and the pursuit of happiness') are rhythmically pleasing and memorable."
    },
    {
        id: 18,
        subject: "Tech Lingo",
        question: "What is 'Blue/Green Deployment'?",
        options: { A: "Using only blue and green colors in UI", B: "A release management strategy that reduces downtime by running two identical production environments", C: "Deploying only on weekends", D: "A security protocol for hackers" },
        correctAnswer: "B",
        explanation: "One environment (Blue) is live, while the other (Green) is updated. Traffic is switched once Green is ready."
    },
    {
        id: 19,
        subject: "Vocabulary",
        question: "If someone is 'pragmatic', they are...",
        options: { A: "Dreamy and idealistic", B: "Dealing with things sensibly and realistically", C: "Arrogant and rude", D: "Slow and lethargic" },
        correctAnswer: "B",
        explanation: "Pragmatism focuses on practical application rather than theory."
    },
    {
        id: 20,
        subject: "Software Engineering",
        question: "In SOLID principles, what does 'L' stand for?",
        options: { A: "Liskov Substitution Principle", B: "Loop Invariant Principle", C: "Least Privilege Principle", D: "Latency Reduction Principle" },
        correctAnswer: "A", 
        explanation: "The Liskov Substitution Principle states that objects of a superclass should be replaceable with objects of its subclasses."
    },
    {
        id: 21,
        subject: "Communication",
        question: "What is a 'straw man' argument?",
        options: { A: "An argument that is strong and flexible", B: "Refuting an argument different from the one actually under discussion", C: "An argument made by a farmer", D: "A preliminary draft of a speech" },
        correctAnswer: "B",
        explanation: "A straw man involves misrepresenting an opponent's position to make it easier to attack."
    },
    {
        id: 22,
        subject: "Tech Lingo",
        question: "What is 'Dead Code'?",
        options: { A: "Code that crashes the system", B: "Code that is executed but produces the wrong result", C: "Code that is never executed in the running program", D: "Code written in a dead language like Latin" },
        correctAnswer: "C",
        explanation: "Dead code takes up space but contributes nothing to the program's execution."
    },
    {
        id: 23,
        subject: "Vocabulary",
        question: "What is the meaning of 'ephemeral'?",
        options: { A: "Lasting for a very short time", B: "Eternal", C: "Solid as a rock", D: "Complex" },
        correctAnswer: "A", explanation: "Ephemeral means short-lived, often used in tech for 'ephemeral storage' or 'ephemeral keys'."
    },
    {
        id: 24,
        subject: "Software Engineering",
        question: "What is 'memoization'?",
        options: { A: "Writing comments in code", B: "An optimization technique storing results of expensive function calls", C: "Memorizing syntax", D: "Sending memos to the team" },
        correctAnswer: "B",
        explanation: "Memoization caches the return value of a function based on its input parameters."
    },
    {
        id: 25,
        subject: "General Knowledge",
        question: "What is the 'Socratic Method'?",
        options: { A: "Lecturing without interruption", B: "Asking and answering questions to stimulate critical thinking", C: "Memorizing facts", D: "Physical exercise for the brain" },
        correctAnswer: "B",
        explanation: "It relies on cooperative argumentative dialogue."
    },
    {
        id: 26,
        subject: "Public Speaking",
        question: "What does 'prosody' refer to in speech?",
        options: { A: "The content of the speech", B: "The patterns of rhythm and sound used in speech (pitch, tone, stress)", C: "The hand gestures used", D: "The dress code of the speaker" },
        correctAnswer: "B",
        explanation: "Prosody turns a robotic voice into an expressive, human one."
    },
    {
        id: 27,
        subject: "Tech Lingo",
        question: "What is a 'Zero Day' vulnerability?",
        options: { A: "A bug fixed on the first day", B: "A flaw known to the vendor for zero days (hackers found it before the fix)", C: "A virus that does zero damage", D: "Software with zero bugs" },
        correctAnswer: "B",
        explanation: "It creates a 'zero-day' gap where the software is vulnerable until patched."
    },
    {
        id: 28,
        subject: "Vocabulary",
        question: "Which word is the opposite of 'benevolent'?",
        options: { A: "Malevolent", B: "Ambivalent", C: "Equivalent", D: "Prevalent" },
        correctAnswer: "A", explanation: "Benevolent means kind/well-meaning; Malevolent means having a wish to do evil."
    },
    {
        id: 29,
        subject: "Software Engineering",
        question: "What is the primary difference between TCP and UDP?",
        options: { A: "TCP is connectionless, UDP is connection-oriented", B: "TCP guarantees delivery (reliable), UDP does not (faster)", C: "UDP is for text, TCP is for video", D: "They are the same" },
        correctAnswer: "B",
        explanation: "TCP ensures packets arrive in order; UDP sends them without verification (fire and forget)."
    },
    {
        id: 30,
        subject: "Communication",
        question: "What does 'nuance' mean?",
        options: { A: "A loud noise", B: "A subtle difference in or shade of meaning, expression, or sound", C: "A new occurrence", D: "A complete contradiction" },
        correctAnswer: "B",
        explanation: "Understanding nuance is critical for high-level communication and reading between the lines."
    },
    {
        id: 31,
        subject: "Tech Lingo",
        question: "What does 'SaaS' stand for?",
        options: { A: "System as a Server", B: "Software as a Service", C: "Storage as a Service", D: "Security as a Shield" },
        correctAnswer: "B",
        explanation: "SaaS is a software distribution model where a third-party provider hosts applications (e.g., Google Docs)."
    },
    {
        id: 32,
        subject: "Vocabulary",
        question: "What does 'paradigm shift' mean?",
        options: { A: "Moving a database", B: "A fundamental change in approach or underlying assumptions", C: "Typing errors", D: "A small adjustment" },
        correctAnswer: "B",
        explanation: "Often used in tech when moving from one major architecture to another (e.g., monolith to microservices)."
    },
    {
        id: 33,
        subject: "Software Engineering",
        question: "In Git, what does 'rebase' do?",
        options: { A: "Deletes the repository", B: "Moves or combines a sequence of commits to a new base commit", C: "Renames the base folder", D: "Creates a backup" },
        correctAnswer: "B",
        explanation: "Rebasing rewrites history to create a linear progression of commits."
    },
    {
        id: 34,
        subject: "General Knowledge",
        question: "What is the 'Dunning-Kruger Effect'?",
        options: { A: "Smart people think they are dumb", B: "A cognitive bias where people with low ability overestimate their competence", C: "The tendency to forget names", D: "The fear of success" },
        correctAnswer: "B",
        explanation: "It explains why beginners often feel confident while experts feel unsure."
    },
    {
        id: 35,
        subject: "Public Speaking",
        question: "What is 'Ethos' in rhetoric?",
        options: { A: "Appeal to emotion", B: "Appeal to logic", C: "Appeal to ethics/credibility", D: "Appeal to popularity" },
        correctAnswer: "C",
        explanation: "Ethos involves establishing the speaker's authority and character."
    },
    {
        id: 36,
        subject: "Tech Lingo",
        question: "What is a 'headless' CMS?",
        options: { A: "A CMS with no administrator", B: "A backend-only content management system accessible via API", C: "A broken website", D: "A CMS for virtual reality" },
        correctAnswer: "B",
        explanation: "It provides content via API without dictating the frontend presentation."
    },
    {
        id: 37,
        subject: "Vocabulary",
        question: "If a solution is 'agnostic' in IT, what does it mean?",
        options: { A: "It doesn't believe in God", B: "It is not tied to a specific system, device, or platform", C: "It is unsure of the answer", D: "It is written in Python" },
        correctAnswer: "B",
        explanation: "For example, 'platform-agnostic' software runs on Windows, Mac, and Linux."
    },
    {
        id: 38,
        subject: "Software Engineering",
        question: "What is 'Dependency Injection'?",
        options: { A: "A security vulnerability", B: "A design pattern where dependencies are provided to a component rather than created by it", C: "Installing libraries via npm", D: "Injecting code into a database" },
        correctAnswer: "B",
        explanation: "It decouples the creation of dependencies from the behavior of the class."
    },
    {
        id: 39,
        subject: "Communication",
        question: "What is 'code-switching' in linguistics?",
        options: { A: "Changing programming languages", B: "Alternating between two or more languages or varieties of language in conversation", C: "Changing passwords", D: "Translating text" },
        correctAnswer: "B",
        explanation: "Common in multilingual environments or adapting speech style to fit a social setting."
    },
    {
        id: 40,
        subject: "Tech Lingo",
        question: "What is 'GraphQL'?",
        options: { A: "A database visualizer", B: "A query language for APIs", C: "A graphing calculator", D: "A SQL extension" },
        correctAnswer: "B",
        explanation: "It allows clients to request exactly the data they need, unlike standard REST."
    },
    {
        id: 41,
        subject: "Vocabulary",
        question: "What does 'mitigate' mean?",
        options: { A: "To make less severe, serious, or painful", B: "To investigate thoroughly", C: "To initiate a lawsuit", D: "To combine two things" },
        correctAnswer: "A", explanation: "In tech, we 'mitigate' risks or bugs."
    },
    {
        id: 42,
        subject: "Software Engineering",
        question: "What is the purpose of a 'foreign key' in SQL?",
        options: { A: "To encrypt the table", B: "To unlock the database", C: "To link two tables together based on a common column", D: "To access foreign websites" },
        correctAnswer: "C",
        explanation: "It ensures referential integrity between the data in two tables."
    },
    {
        id: 43,
        subject: "General Knowledge",
        question: "What is 'Moore's Law'?",
        options: { A: "The speed of internet doubles every year", B: "The number of transistors on a microchip doubles about every two years", C: "Hard drive prices increase over time", D: "Batteries degrade by 10% annually" },
        correctAnswer: "B",
        explanation: "It is an observation that has driven the semiconductor industry for decades."
    },
    {
        id: 44,
        subject: "Public Speaking",
        question: "What is 'inflection'?",
        options: { A: "A grammatical error", B: "Modulation of intonation or pitch in the voice", C: "Making a hand gesture", D: "Pausing for effect" },
        correctAnswer: "B",
        explanation: "Avoiding a monotone delivery requires good inflection."
    },
    {
        id: 45,
        subject: "Tech Lingo",
        question: "What is 'Dark Mode' actually called in UI design theory?",
        options: { A: "Night Vision", B: "Negative Contrast Polarity", C: "Low Light UI", D: "Blackout Scheme" },
        correctAnswer: "B",
        explanation: "Positive contrast is dark text on light; negative contrast is light text on dark."
    },
    {
        id: 46,
        subject: "Vocabulary",
        question: "What does 'caveat' mean?",
        options: { A: "A type of fish", B: "A warning or proviso of specific stipulations, conditions, or limitations", C: "An empty space", D: "A strong agreement" },
        correctAnswer: "B",
        explanation: "Often used as 'One caveat to this solution is...'"
    },
    {
        id: 47,
        subject: "Software Engineering",
        question: "What is a 'race condition'?",
        options: { A: "A competition between developers", B: "When a system attempts to perform two or more operations at the same time, causing a bug", C: "Network latency", D: "Overclocking a CPU" },
        correctAnswer: "B",
        explanation: "It occurs when the timing of events creates unexpected behavior."
    },
    {
        id: 48,
        subject: "Communication",
        question: "What is 'jargon'?",
        options: { A: "A type of bird", B: "Special words or expressions that are used by a particular profession and are difficult for others to understand", C: "Slang used by teenagers", D: "Incorrect grammar" },
        correctAnswer: "B",
        explanation: "Tech has a lot of jargon (e.g., 'refactor', 'push', 'commit')."
    },
    {
        id: 49,
        subject: "Tech Lingo",
        question: "What is 'Latency'?",
        options: { A: "The bandwidth of a connection", B: "The delay before a transfer of data begins following an instruction", C: "The cost of internet", D: "The storage capacity" },
        correctAnswer: "B",
        explanation: "Low latency is crucial for real-time applications."
    },
    {
        id: 50,
        subject: "Vocabulary",
        question: "What is the meaning of 'redundant'?",
        options: { A: "Useful and necessary", B: "No longer needed or useful; superfluous", C: "Returning again", D: "Bright and colorful" },
        correctAnswer: "B",
        explanation: "In tech, redundancy can be good (backups), but 'redundant code' is bad."
    },
    {
        id: 51,
        subject: "Software Engineering",
        question: "What is the 'DRY' principle?",
        options: { A: "Do Repeat Yourself", B: "Don't Repeat Yourself", C: "Data Reliability Yield", D: "Design Review Yearly" },
        correctAnswer: "B",
        explanation: "DRY aims to reduce repetition of software patterns."
    },
    {
        id: 52,
        subject: "General Knowledge",
        question: "What is 'Occam's Razor'?",
        options: { A: "A grooming tool", B: "The principle that the simplest explanation is usually the best one", C: "A physics law about cutting edge technology", D: "A debate technique" },
        correctAnswer: "B",
        explanation: "When faced with competing hypotheses, choose the one with the fewest assumptions."
    },
    {
        id: 53,
        subject: "Public Speaking",
        question: "What is an 'impromptu' speech?",
        options: { A: "A speech read from a script", B: "A speech given without preparation", C: "A speech memorized perfectly", D: "A speech with visual aids" },
        correctAnswer: "B",
        explanation: "Impromptu speaking tests your ability to think on your feet."
    },
    {
        id: 54,
        subject: "Tech Lingo",
        question: "What is 'Phishing'?",
        options: { A: "A digital card game", B: "The fraudulent practice of sending emails purporting to be from reputable companies", C: "Searching for files", D: "Optimizing code" },
        correctAnswer: "B",
        explanation: "It aims to induce individuals to reveal personal information."
    },
    {
        id: 55,
        subject: "Vocabulary",
        question: "What does 'granular' mean in data analysis?",
        options: { A: "Rough texture", B: "Characterized by a high level of detail", C: "Made of sand", D: "Large and vague" },
        correctAnswer: "B",
        explanation: "Granular data is detailed; coarse data is summarized."
    },
    {
        id: 56,
        subject: "Software Engineering",
        question: "What is 'polymorphism' in OOP?",
        options: { A: "A shape with many sides", B: "The ability of an object to take on many forms", C: "Using multiple programming languages", D: " encrypting data multiple times" },
        correctAnswer: "B",
        explanation: "It allows a child class to provide a specific implementation of a method already provided by its parent."
    },
    {
        id: 57,
        subject: "Communication",
        question: "What is 'body language' technically called?",
        options: { A: "Kinesics", B: "Semantics", C: "Phonetics", D: "Chronemics" },
        correctAnswer: "A", explanation: "Kinesics allows us to interpret non-verbal communication."
    },
    {
        id: 58,
        subject: "Tech Lingo",
        question: "What is an 'MVP' in startup/agile terms?",
        options: { A: "Most Valuable Player", B: "Minimum Viable Product", C: "Maximum Virtual Performance", D: "Main Variable Point" },
        correctAnswer: "B",
        explanation: "A product with just enough features to satisfy early customers and provide feedback."
    },
    {
        id: 59,
        subject: "Vocabulary",
        question: "What is a 'synopsis'?",
        options: { A: "A medical diagnosis", B: "A brief summary or general survey of something", C: "A type of meeting", D: "A collaborative effort" },
        correctAnswer: "B",
        explanation: "Developers often write a synopsis of a project."
    },
    {
        id: 60,
        subject: "Software Engineering",
        question: "What is 'Hash Collision'?",
        options: { A: "Two cars crashing", B: "When two distinct inputs produce the same hash output", C: "A syntax error in a hash map", D: "When a hash tag trends" },
        correctAnswer: "B",
        explanation: "Collisions must be handled in hash tables to prevent data loss."
    },
    {
        id: 61,
        subject: "General Knowledge",
        question: "What does 'STEM' stand for?",
        options: { A: "System, Tech, Energy, Motion", B: "Science, Technology, Engineering, Mathematics", C: "Statistics, Theory, Economics, Management", D: "Society, Teaching, English, Music" },
        correctAnswer: "B",
        explanation: "The academic disciplines of science, technology, engineering, and mathematics."
    },
    {
        id: 62,
        subject: "Public Speaking",
        question: "What is a 'hook' in a presentation?",
        options: { A: "A curved tool", B: "An opening statement designed to grab the audience's attention", C: "A logical fallacy", D: "The conclusion" },
        correctAnswer: "B",
        explanation: "Examples include a surprising stat, a question, or a story."
    },
    {
        id: 63,
        subject: "Tech Lingo",
        question: "What is 'Edge Computing'?",
        options: { A: "Latest cutting-edge technology", B: "Computing that creates sharp images", C: "Processing data near the source of data generation rather than a centralized cloud", D: "Browsing with Microsoft Edge" },
        correctAnswer: "C",
        explanation: "It reduces latency by keeping processing closer to the user."
    },
    {
        id: 64,
        subject: "Vocabulary",
        question: "What does 'verbose' mean?",
        options: { A: "Using or expressed in more words than are needed", B: "Silent", C: "Action-oriented", D: "Visually appealing" },
        correctAnswer: "A", explanation: "Verbose logging provides a lot of detail."
    },
    {
        id: 65,
        subject: "Software Engineering",
        question: "What is a 'closure' in JavaScript?",
        options: { A: "The end of a program", B: "A function bundled together with references to its surrounding state", C: "A closing HTML tag", D: "A database connection closer" },
        correctAnswer: "B",
        explanation: "Closures allow functions to access variables from an enclosing scope even after that scope has finished."
    },
    {
        id: 66,
        subject: "Communication",
        question: "What is 'feedback loop'?",
        options: { A: "A repeating sound", B: "A system where outputs are circled back as inputs", C: "An endless meeting", D: "A coding error" },
        correctAnswer: "B",
        explanation: "In communication, it ensures the message was received and understood."
    },
    {
        id: 67,
        subject: "Tech Lingo",
        question: "What is 'Blockchain' fundamentally?",
        options: { A: "A type of cryptocurrency", B: "A distributed, immutable digital ledger", C: "A chain of server racks", D: "A blocking software" },
        correctAnswer: "B",
        explanation: "It records transactions across many computers so the record cannot be altered retroactively."
    },
    {
        id: 68,
        subject: "Vocabulary",
        question: "What does 'scrupulous' mean?",
        options: { A: "Dirty and messy", B: "Diligent, thorough, and extremely attentive to details", C: "Careless", D: "Fast" },
        correctAnswer: "B",
        explanation: "A scrupulous code reviewer catches every bug."
    },
    {
        id: 69,
        subject: "Software Engineering",
        question: "What is 'Continuous Integration' (CI)?",
        options: { A: "Continuously hiring developers", B: "The practice of merging all developers' working copies to a shared mainline several times a day", C: "Never turning off the server", D: "Integrating hardware components" },
        correctAnswer: "B",
        explanation: "CI helps detect integration errors as quickly as possible."
    },
    {
        id: 70,
        subject: "General Knowledge",
        question: "What is 'Game Theory'?",
        options: { A: "The study of video games", B: "The study of mathematical models of strategic interaction among rational decision-makers", C: "How to win sports", D: "A theory about having fun" },
        correctAnswer: "B",
        explanation: "It is used in economics, CS, and politics."
    },
    {
        id: 71,
        subject: "Public Speaking",
        question: "What is 'cadence'?",
        options: { A: "A military march", B: "A rhythmic sequence or flow of sounds in language", C: "The volume of speech", D: "The topic of speech" },
        correctAnswer: "B",
        explanation: "Good cadence prevents the audience from getting bored."
    },
    {
        id: 72,
        subject: "Tech Lingo",
        question: "What is a 'Botnet'?",
        options: { A: "A network for robots", B: "A network of private computers infected with malicious software and controlled as a group", C: "A fishing net", D: "An internet provider" },
        correctAnswer: "B",
        explanation: "Botnets are often used for DDoS attacks."
    },
    {
        id: 73,
        subject: "Vocabulary",
        question: "What does 'manifest' mean as a verb?",
        options: { A: "To hide", B: "To display or show (a quality or feeling) by one's acts or appearance", C: "To create a list", D: "To destroy" },
        correctAnswer: "B",
        explanation: "Bugs can manifest in production."
    },
    {
        id: 74,
        subject: "Software Engineering",
        question: "What is 'refactoring'?",
        options: { A: "Changing the functionality of code", B: "Restructuring existing computer code without changing its external behavior", C: "Factory reset", D: "Writing code from scratch" },
        correctAnswer: "B",
        explanation: "Refactoring improves readability and reduces complexity."
    },
    {
        id: 75,
        subject: "Communication",
        question: "What is 'empathy'?",
        options: { A: "Feeling pity for someone", B: "The ability to understand and share the feelings of another", C: "Ignoring emotions", D: "Agreeing with everything" },
        correctAnswer: "B",
        explanation: "Crucial for UX design and team management."
    },
    {
        id: 76,
        subject: "Tech Lingo",
        question: "What is 'IoT'?",
        options: { A: "Input on Tape", B: "Internet of Things", C: "Index of Tables", D: "Internal office Tech" },
        correctAnswer: "B",
        explanation: "The network of physical objects ('things') embedded with sensors and software."
    },
    {
        id: 77,
        subject: "Vocabulary",
        question: "What does 'robust' mean in software?",
        options: { A: "Fat", B: "Able to withstand or overcome adverse conditions", C: "Slow", D: "User-friendly" },
        correctAnswer: "B",
        explanation: "Robust software doesn't crash easily."
    },
    {
        id: 78,
        subject: "Software Engineering",
        question: "What is a 'memory leak'?",
        options: { A: "Water in the computer", B: "When a computer program incorrectly manages memory allocations", C: "Forgetting passwords", D: "Hacking memory" },
        correctAnswer: "B",
        explanation: "Memory that is no longer needed is not released, eventually consuming all available RAM."
    },
    {
        id: 79,
        subject: "General Knowledge",
        question: "What is the 'Turing Test'?",
        options: { A: "A driving test", B: "A test of a machine's ability to exhibit intelligent behavior equivalent to, or indistinguishable from, that of a human", C: "A math exam", D: "A test for computer speed" },
        correctAnswer: "B",
        explanation: "Proposed by Alan Turing in 1950."
    },
    {
        id: 80,
        subject: "Public Speaking",
        question: "What is 'Logos'?",
        options: { A: "Brand images", B: "Appeal to logic and reason", C: "Legos", D: "Appeal to authority" },
        correctAnswer: "B",
        explanation: "Using data, facts, and statistics to persuade."
    },
    {
        id: 81,
        subject: "Tech Lingo",
        question: "What is 'Virtualization'?",
        options: { A: "Wearing VR headsets", B: "Creating a virtual version of something, like a server or storage device", C: "Fake news", D: "Online gaming" },
        correctAnswer: "B",
        explanation: "It allows multiple OS instances to run on a single physical machine."
    },
    {
        id: 82,
        subject: "Vocabulary",
        question: "What does 'deprecated' mean?",
        options: { A: "Appreciated greatly", B: "Recommended against; obsolete", C: "New and improved", D: "Broken" },
        correctAnswer: "B",
        explanation: "Deprecated features may be removed in future versions."
    },
    {
        id: 83,
        subject: "Software Engineering",
        question: "What is 'recursion'?",
        options: { A: "A curse", B: "A method where the solution to a problem depends on solutions to smaller instances of the same problem", C: "Looping forever", D: "Writing cursive" },
        correctAnswer: "B",
        explanation: "A function calling itself."
    },
    {
        id: 84,
        subject: "Communication",
        question: "What is a 'euphemism'?",
        options: { A: "A harsh insult", B: "A mild or indirect word substituted for one considered to be too harsh or blunt", C: "A compliment", D: "A lie" },
        correctAnswer: "B",
        explanation: "e.g., 'let go' instead of 'fired'."
    },
    {
        id: 85,
        subject: "Tech Lingo",
        question: "What is 'Big Data'?",
        options: { A: "A large font size", B: "Data sets that are too large or complex to be dealt with by traditional data-processing software", C: "Expensive internet", D: "Global databases" },
        correctAnswer: "B",
        explanation: "Characterized by volume, velocity, and variety."
    },
    {
        id: 86,
        subject: "Vocabulary",
        question: "What does 'nascent' mean?",
        options: { A: "Smelly", B: "Just coming into existence and beginning to display signs of future potential", C: "Old and dying", D: "Common" },
        correctAnswer: "B",
        explanation: "e.g., 'nascent technology'."
    },
    {
        id: 87,
        subject: "Software Engineering",
        question: "What is 'idempotent'?",
        options: { A: "Powerful", B: "Denoting an element of a set which is unchanged when multiplied by itself", C: "Random", D: "Slow" },
        correctAnswer: "B",
        explanation: "In API terms, calling it multiple times has the same effect as calling it once."
    },
    {
        id: 88,
        subject: "General Knowledge",
        question: "What is the 'Golden Ratio'?",
        options: { A: "The perfect amount of coffee", B: "Approximately 1.618, often found in nature and art", C: "50/50 split", D: "100%" },
        correctAnswer: "B",
        explanation: "It creates aesthetically pleasing compositions."
    },
    {
        id: 89,
        subject: "Public Speaking",
        question: "What is 'Pathos'?",
        options: { A: "A road", B: "Appeal to emotion", C: "Appeal to logic", D: "Appeal to ethics" },
        correctAnswer: "B",
        explanation: "Moving the audience emotionally."
    },
    {
        id: 90,
        subject: "Tech Lingo",
        question: "What is 'Open Source'?",
        options: { A: "Software with source code that anyone can inspect, modify, and enhance", B: "Software that is free but closed", C: "An open door policy", D: "Unsecured code" },
        correctAnswer: "A", explanation: "Examples include Linux, Python, and React."
    },
    {
        id: 91,
        subject: "Vocabulary",
        question: "What does 'anomaly' mean?",
        options: { A: "Standard procedure", B: "Something that deviates from what is standard, normal, or expected", C: "A sea creature", D: "A naming convention" },
        correctAnswer: "B",
        explanation: "Anomaly detection is big in AI/Security."
    },
    {
        id: 92,
        subject: "Software Engineering",
        question: "What is a 'stack trace'?",
        options: { A: "Tracing paper", B: "A report of the active stack frames at a certain point in time during the execution of a program", C: "Stacking boxes", D: "A database log" },
        correctAnswer: "B",
        explanation: "Used for debugging to see where an error occurred."
    },
    {
        id: 93,
        subject: "Communication",
        question: "What is 'non-verbal communication'?",
        options: { A: "Telepathy", B: "Communication without words (gestures, facial expressions)", C: "Writing emails", D: "Speaking quietly" },
        correctAnswer: "B",
        explanation: "It often conveys more meaning than words."
    },
    {
        id: 94,
        subject: "Tech Lingo",
        question: "What is 'Scalability'?",
        options: { A: "Weighing a server", B: "The capacity to be changed in size or scale", C: "Climbing walls", D: "Screen resolution" },
        correctAnswer: "B",
        explanation: "The ability of a system to handle a growing amount of work."
    },
    {
        id: 95,
        subject: "Vocabulary",
        question: "What does 'iterate' mean?",
        options: { A: "To eat", B: "To perform or utter repeatedly", C: "To stop", D: "To delete" },
        correctAnswer: "B",
        explanation: "We iterate on product versions."
    },
    {
        id: 96,
        subject: "Software Engineering",
        question: "What is a 'pull request' (PR)?",
        options: { A: "Asking to leave the team", B: "A method of submitting contributions to an open development project", C: "Downloading a file", D: "Requesting data from a server" },
        correctAnswer: "B",
        explanation: "It lets you tell others about changes you've pushed to a branch in a repository."
    },
    {
        id: 97,
        subject: "General Knowledge",
        question: "What is 'entropy' in information theory?",
        options: { A: "Order", B: "A measure of the impurity or disorder", C: "Heat", D: "Speed" },
        correctAnswer: "B",
        explanation: "High entropy means high uncertainty."
    },
    {
        id: 98,
        subject: "Public Speaking",
        question: "What is 'Stage Fright'?",
        options: { A: "Fear of stages", B: "Performance anxiety", C: "A play", D: "Lighting effects" },
        correctAnswer: "B",
        explanation: "Physiological arousal in response to a performance."
    },
    {
        id: 99,
        subject: "Tech Lingo",
        question: "What is '2FA'?",
        options: { A: "Two Fast Answers", B: "Two-Factor Authentication", C: "Second First Attempt", D: "Double File Access" },
        correctAnswer: "B",
        explanation: "Security process in which users provide two different authentication factors."
    },
    {
        id: 100,
        subject: "Vocabulary",
        question: "What does 'salient' mean?",
        options: { A: "Salty", B: "Most noticeable or important", C: "Hidden", D: "Quiet" },
        correctAnswer: "B",
        explanation: "e.g., 'The salient points of the argument.'"
    },

    {
        id: 101,
        subject: "Vocabulary",
        question: "What does 'ameliorate' mean?",
        options: { A: "To make something bad better", B: "To worsen a situation", C: "To freeze", D: "To calculate" },
        correctAnswer: "A", explanation: "Software patches are designed to ameliorate bugs and security flaws."
    },
    {
        id: 102,
        subject: "Software Engineering",
        question: "What is the worst-case time complexity of Quicksort?",
        options: { A: "O(n log n)", B: "O(n)", C: "O(n^2)", D: "O(log n)" },
        correctAnswer: "C",
        explanation: "While usually O(n log n), Quicksort degrades to O(n^2) if the pivot selection is poor (e.g., already sorted array)."
    },
    {
        id: 103,
        subject: "Tech Lingo",
        question: "What does 'VPN' stand for?",
        options: { A: "Virtual Public Network", B: "Verified Private Node", C: "Virtual Private Network", D: "Variable Protocol Number" },
        correctAnswer: "C",
        explanation: "A VPN extends a private network across a public network."
    },
    {
        id: 104,
        subject: "Communication",
        question: "What is the 'STAR' method used for in interviews?",
        options: { A: "Situation, Task, Action, Result", B: "Stop, Think, Act, Review", C: "Speak, Talk, Ask, Respond", D: "Standard Tech Assessment Review" },
        correctAnswer: "A", explanation: "It is a structured manner of responding to behavioral interview questions."
    },
    {
        id: 105,
        subject: "General Knowledge",
        question: "What is 'Schrödinger's cat'?",
        options: { A: "A famous cartoon", B: "A thought experiment illustrating quantum superposition", C: "A coding paradigm", D: "A virus" },
        correctAnswer: "B",
        explanation: "It illustrates the paradox where a cat is simultaneously alive and dead until observed."
    },
    {
        id: 106,
        subject: "Software Engineering",
        question: "What is 'rubber duck debugging'?",
        options: { A: "Using a waterproof keyboard", B: "Explaining code line-by-line to an inanimate object to find bugs", C: "A specific debugging tool", D: "Testing only in the bath" },
        correctAnswer: "B",
        explanation: "Verbalizing the problem often helps the human brain process it differently and find the solution."
    },
    {
        id: 107,
        subject: "Vocabulary",
        question: "What does 'quintessential' mean?",
        options: { A: "Representing the most perfect or typical example of a quality or class", B: "Having five parts", C: "Essential for survival", D: "Quiet and reserved" },
        correctAnswer: "A", explanation: "e.g., 'He is the quintessential software engineer.'"
    },
    {
        id: 108,
        subject: "Tech Lingo",
        question: "What is 'bloatware'?",
        options: { A: "Software that helps you lose weight", B: "Software that is swollen", C: "Unwanted software included on a new computer or mobile device", D: "Cloud storage" },
        correctAnswer: "C",
        explanation: "It takes up space and resources with little value to the user."
    },
    {
        id: 109,
        subject: "Software Engineering",
        question: "What does 'HTTP' stand for?",
        options: { A: "HyperText Transfer Protocol", B: "High Tech Transfer Path", C: "HyperText Transmission Process", D: "Home Tool Transfer Program" },
        correctAnswer: "A", explanation: "The foundation of data communication for the World Wide Web."
    },
    {
        id: 110,
        subject: "Communication",
        question: "What is 'tact'?",
        options: { A: "A type of glue", B: "Adroitness and sensitivity in dealing with others or difficult issues", C: "Technical knowledge", D: "Military strategy" },
        correctAnswer: "B",
        explanation: "Vital for delivering negative feedback without causing offense."
    },
    {
        id: 111,
        subject: "Vocabulary",
        question: "What is a 'misnomer'?",
        options: { A: "A wrong or inaccurate name or designation", B: "A missing number", C: "A mistake in code", D: "A missed opportunity" },
        correctAnswer: "A", explanation: "Calling a Koala a 'bear' is a misnomer; it is a marsupial."
    },
    {
        id: 112,
        subject: "Software Engineering",
        question: "What is a 'deadlock'?",
        options: { A: "A broken lock", B: "A situation where two processes are each waiting for the other to release a resource", C: "A secure encryption", D: "A crashed server" },
        correctAnswer: "B",
        explanation: "Neither process can proceed, freezing the application."
    },
    {
        id: 113,
        subject: "Tech Lingo",
        question: "What is 'gamification'?",
        options: { A: "Playing video games at work", B: "The application of game-design elements and principles in non-game contexts", C: "Creating a game engine", D: "Cheating" },
        correctAnswer: "B",
        explanation: "Used to increase user engagement (e.g., points, badges, leaderboards)."
    },
    {
        id: 114,
        subject: "General Knowledge",
        question: "What is 'confirmation bias'?",
        options: { A: "Confirming your email address", B: "The tendency to interpret new evidence as confirmation of one's existing beliefs", C: "Being biased against confirmation", D: "A legal term" },
        correctAnswer: "B",
        explanation: "It prevents objective analysis of data."
    },
    {
        id: 115,
        subject: "Software Engineering",
        question: "What is 'CRUD'?",
        options: { A: "Create, Read, Update, Delete", B: "Code, Run, User, Debug", C: "Compile, Run, Update, Deploy", D: "Create, React, Undo, Done" },
        correctAnswer: "A", explanation: "The four basic functions of persistent storage."
    },
    {
        id: 116,
        subject: "Vocabulary",
        question: "What does 'lucid' mean?",
        options: { A: "Lucky", B: "Expressed clearly; easy to understand", C: "Loose", D: "Crazy" },
        correctAnswer: "B",
        explanation: "Clear code and clear documentation should be lucid."
    },
    {
        id: 117,
        subject: "Communication",
        question: "What is an 'elevator pitch'?",
        options: { A: "Selling elevators", B: "A speech given in an elevator", C: "A succinct and persuasive sales pitch", D: "Pitching a tent" },
        correctAnswer: "C",
        explanation: "Short enough to be delivered in the time it takes to ride an elevator (approx. 30 seconds)."
    },
    {
        id: 118,
        subject: "Tech Lingo",
        question: "What is 'UX'?",
        options: { A: "User Xenophobia", B: "User Experience", C: "Under Xylophone", D: "Unix Exchange" },
        correctAnswer: "B",
        explanation: "Focuses on the overall experience of a person using a product."
    },
    {
        id: 119,
        subject: "Software Engineering",
        question: "What is a 'mixin'?",
        options: { A: "A kitchen appliance", B: "A class containing methods that can be used by other classes without inheriting from it", C: "Mixing audio", D: "A cocktail" },
        correctAnswer: "B",
        explanation: "Promotes code reuse in OOP."
    },
    {
        id: 120,
        subject: "Vocabulary",
        question: "What does 'draconian' mean?",
        options: { A: "Relating to dragons", B: "(Of laws or their application) excessively harsh and severe", C: "Magical", D: "Ancient" },
        correctAnswer: "B",
        explanation: "e.g., 'The company's internet usage policy was draconian.'"
    },
    {
        id: 121,
        subject: "General Knowledge",
        question: "What is the 'Internet of Nano Things' (IoNT)?",
        options: { A: "Internet for ants", B: "Interconnected nanodevices used for medical or military purposes", C: "A very small router", D: "A fictional concept" },
        correctAnswer: "B",
        explanation: "The next evolution of IoT at a microscopic scale."
    },
    {
        id: 122,
        subject: "Software Engineering",
        question: "What is 'tree shaking'?",
        options: { A: "Shaking a physical tree", B: "A term used in JavaScript context for dead code elimination", C: "Rebalancing a binary tree", D: "Debugging a tree structure" },
        correctAnswer: "B",
        explanation: "It removes unused modules from the final bundle."
    },
    {
        id: 123,
        subject: "Tech Lingo",
        question: "What is 'churn rate'?",
        options: { A: "The speed of making butter", B: "The rate at which customers stop doing business with an entity", C: "The speed of a hard drive", D: "The rate of hiring" },
        correctAnswer: "B",
        explanation: "Crucial metric for SaaS companies."
    },
    {
        id: 124,
        subject: "Communication",
        question: "What is 'rapport'?",
        options: { A: "A police report", B: "A close and harmonious relationship in which people understand each other's feelings", C: "A knock on the door", D: "A disagreement" },
        correctAnswer: "B",
        explanation: "Building rapport is essential for teamwork and client relations."
    },
    {
        id: 125,
        subject: "Vocabulary",
        question: "What does 'myriad' mean?",
        options: { A: "A specific type of pyramid", B: "A countless or extremely great number", C: "A mirror", D: "A mistake" },
        correctAnswer: "B",
        explanation: "e.g., 'There are a myriad of solutions to this problem.'"
    },
    {
        id: 126,
        subject: "Software Engineering",
        question: "What is 'ORM'?",
        options: { A: "Object-Relational Mapping", B: "Only Read Memory", C: "Operational Resource Management", D: "Object Random Memory" },
        correctAnswer: "A", explanation: "Allows querying a database using an object-oriented paradigm (e.g., Hibernate, Prisma)."
    },
    {
        id: 127,
        subject: "General Knowledge",
        question: "What is the 'Hippocratic Oath'?",
        options: { A: "An oath taken by software engineers", B: "An oath taken by hippos", C: "An oath historically taken by physicians to do no harm", D: "A legal contract" },
        correctAnswer: "C",
        explanation: "Ethical standards often referenced in discussions about AI safety."
    },
    {
        id: 128,
        subject: "Tech Lingo",
        question: "What is a 'unicorn' in business?",
        options: { A: "A mythical creature", B: "A privately held startup company valued at over $1 billion", C: "A rare employee", D: "A unique software bug" },
        correctAnswer: "B",
        explanation: "A term coined by Aileen Lee in 2013."
    },
    {
        id: 129,
        subject: "Vocabulary",
        question: "What does 'visceral' mean?",
        options: { A: "Relating to vision", B: "Relating to deep inward feelings rather than to the intellect", C: "Transparent", D: "Virtual" },
        correctAnswer: "B",
        explanation: "A 'visceral reaction' is gut-level and emotional."
    },
    {
        id: 130,
        subject: "Software Engineering",
        question: "What is 'duck typing'?",
        options: { A: "Typing like a duck", B: "If it walks like a duck and quacks like a duck, then it must be a duck", C: "Typing on a rubber keyboard", D: "A game" },
        correctAnswer: "B",
        explanation: "In dynamic languages, an object's suitability is determined by the presence of certain methods, not its actual type."
    },
    {
        id: 131,
        subject: "Communication",
        question: "What is 'constructive criticism'?",
        options: { A: "Criticism designed to destroy confidence", B: "Criticism given to help improve the outcome", C: "Criticism about construction work", D: "Silence" },
        correctAnswer: "B",
        explanation: "It focuses on the work, not the person, and offers solutions."
    },
    {
        id: 132,
        subject: "Tech Lingo",
        question: "What is 'White Hat' hacking?",
        options: { A: "Wearing a white hat while coding", B: "Ethical security hacking to identify vulnerabilities", C: "Hacking for evil", D: "Hacking in winter" },
        correctAnswer: "B",
        explanation: "Opposite of 'Black Hat' (malicious)."
    },
    {
        id: 133,
        subject: "Vocabulary",
        question: "What does 'quid pro quo' mean?",
        options: { A: "Status quo", B: "A favor or advantage granted or expected in return for something", C: "Quiet professional", D: "Quality product" },
        correctAnswer: "B",
        explanation: "Latin for 'something for something'."
    },
    {
        id: 134,
        subject: "Software Engineering",
        question: "What is 'big-endian' vs 'little-endian'?",
        options: { A: "Sizes of databases", B: "The order of bytes in computer memory", C: "Front-end vs Back-end", D: "Large vs Small codebases" },
        correctAnswer: "B",
        explanation: "Big-endian stores the most significant byte first; little-endian stores the least significant byte first."
    },
    {
        id: 135,
        subject: "General Knowledge",
        question: "What is the 'Singularity' in futurism?",
        options: { A: "A black hole", B: "A hypothetical point in time when technological growth becomes uncontrollable and irreversible", C: "Being single", D: "A single line of code" },
        correctAnswer: "B",
        explanation: "Often associated with the emergence of superintelligence."
    },
    {
        id: 136,
        subject: "Tech Lingo",
        question: "What is 'vaporware'?",
        options: { A: "Hardware for vaping", B: "Software or hardware that has been advertised but is not yet available to buy", C: "Cloud software", D: "Deleted software" },
        correctAnswer: "B",
        explanation: "Often implies it may never actually be released."
    },
    {
        id: 137,
        subject: "Software Engineering",
        question: "What is 'JWT'?",
        options: { A: "Java Web Token", B: "JSON Web Token", C: "JavaScript Web Tool", D: "Just Write Text" },
        correctAnswer: "B",
        explanation: "A compact, URL-safe means of representing claims to be transferred between two parties."
    },
    {
        id: 138,
        subject: "Vocabulary",
        question: "What does 'superfluous' mean?",
        options: { A: "Amazing", B: "Unnecessary, especially through being more than enough", C: "Fluid", D: "Superior" },
        correctAnswer: "B",
        explanation: "Similar to redundant."
    },
    {
        id: 139,
        subject: "Communication",
        question: "What is 'connotative' meaning?",
        options: { A: "The dictionary definition", B: "The idea or feeling that a word invokes in addition to its literal meaning", C: "A connection", D: "A contradiction" },
        correctAnswer: "B",
        explanation: "Denotative is literal; connotative is emotional/associative."
    },
    {
        id: 140,
        subject: "Software Engineering",
        question: "What is 'NoSQL'?",
        options: { A: "No SQL allowed", B: "Not Only SQL", C: "New SQL", D: "Negative SQL" },
        correctAnswer: "B",
        explanation: "A class of database management systems that do not follow all of the rules of a relational DBMS."
    },
    {
        id: 141,
        subject: "Tech Lingo",
        question: "What is 'biohacking'?",
        options: { A: "Hacking biology textbooks", B: "Do-it-yourself biology to improve performance/health", C: "Hacking with plants", D: "Computer virus" },
        correctAnswer: "B",
        explanation: "Includes things like implanting chips or optimizing diet for brain function."
    },
    {
        id: 142,
        subject: "Vocabulary",
        question: "What does 'abate' mean?",
        options: { A: "To bait a hook", B: "To (of something perceived as hostile) become less intense or widespread", C: "To argue", D: "To assist" },
        correctAnswer: "B",
        explanation: "e.g., 'The storm suddenly abated.'"
    },
    {
        id: 143,
        subject: "Software Engineering",
        question: "What is 'linting'?",
        options: { A: "Cleaning the screen", B: "Running a program that analyzes code for potential errors", C: "Linking libraries", D: "Printing code" },
        correctAnswer: "B",
        explanation: "Tools like ESLint help enforce coding standards."
    },
    {
        id: 144,
        subject: "General Knowledge",
        question: "What is 'Gantt Chart'?",
        options: { A: "A pie chart", B: "A type of bar chart that illustrates a project schedule", C: "A stock market chart", D: "A medical chart" },
        correctAnswer: "B",
        explanation: "Essential for project management."
    },
    {
        id: 145,
        subject: "Public Speaking",
        question: "What is a 'rhetorical question'?",
        options: { A: "A question asked in order to create a dramatic effect or to make a point rather than to get an answer", B: "A difficult question", C: "A question about history", D: "A multiple choice question" },
        correctAnswer: "A", explanation: "e.g., 'Do you want to be a failure for the rest of your life?'"
    },
    {
        id: 146,
        subject: "Tech Lingo",
        question: "What is 'fiat currency'?",
        options: { A: "Money backed by gold", B: "Money backed by government decree, not physical commodity", C: "Car money", D: "Digital Bitcoin" },
        correctAnswer: "B",
        explanation: "The US Dollar and Euro are fiat currencies; Crypto is often seen as an alternative."
    },
    {
        id: 147,
        subject: "Vocabulary",
        question: "What does 'cursory' mean?",
        options: { A: "Hasty and therefore not thorough or detailed", B: "Using bad language", C: "Relating to a cursor", D: "Detailed and slow" },
        correctAnswer: "A", explanation: "A 'cursory glance' at the logs might miss the error."
    },
    {
        id: 148,
        subject: "Software Engineering",
        question: "What is 'A/B Testing'?",
        options: { A: "Testing blood type", B: "Comparing two versions of a webpage/app to see which one performs better", C: "Alpha/Beta testing", D: "Testing the alphabet" },
        correctAnswer: "B",
        explanation: "A data-driven method for optimization."
    },
    {
        id: 149,
        subject: "Tech Lingo",
        question: "What is 'Ransomware'?",
        options: { A: "Software that steals hardware", B: "Malware that threatens to publish the victim's data or perpetually block access to it unless a ransom is paid", C: "Expensive software", D: "Backup software" },
        correctAnswer: "B",
        explanation: "WannaCry was a famous ransomware attack."
    },
    {
        id: 150,
        subject: "Vocabulary",
        question: "What does 'zenith' mean?",
        options: { A: "The lowest point", B: "The time at which something is most powerful or successful", C: "A TV brand", D: "Zero" },
        correctAnswer: "B",
        explanation: "The opposite of 'nadir'."
    },
    {
        id: 151,
        subject: "Software Engineering",
        question: "What is 'currying' in functional programming?",
        options: { A: "Cooking spicy food", B: "Converting a function that takes multiple arguments into a sequence of functions that each take a single argument", C: "Cleaning code", D: "Running code quickly" },
        correctAnswer: "B",
        explanation: "e.g., f(a, b) becomes f(a)(b)."
    },
    {
        id: 152,
        subject: "Communication",
        question: "What is 'passive-aggressive' behavior?",
        options: { A: "Being physically violent", B: "Indirect expression of hostility", C: "Being very quiet", D: "Being openly angry" },
        correctAnswer: "B",
        explanation: "e.g., giving the 'silent treatment' or procrastination to annoy others."
    },
    {
        id: 153,
        subject: "General Knowledge",
        question: "What is 'machine learning'?",
        options: { A: "Teaching robots to walk", B: "A subset of AI where computers learn from data without being explicitly programmed for specific tasks", C: "Learning how to build machines", D: "Hardware manufacturing" },
        correctAnswer: "B",
        explanation: "It relies on patterns and inference."
    },
    {
        id: 154,
        subject: "Tech Lingo",
        question: "What is 'Clickbait'?",
        options: { A: "A fishing lure", B: "Content whose main purpose is to attract attention and encourage visitors to click on a link", C: "A mouse setting", D: "Online shopping" },
        correctAnswer: "B",
        explanation: "Often sensationalized or misleading."
    },
    {
        id: 155,
        subject: "Vocabulary",
        question: "What does 'aesthetic' mean?",
        options: { A: "Concerned with beauty or the appreciation of beauty", B: "Athletic", C: "Numbness", D: "Medical" },
        correctAnswer: "A", explanation: "UI design is heavily concerned with aesthetics."
    },
    {
        id: 156,
        subject: "Software Engineering",
        question: "What is a 'Daemon'?",
        options: { A: "A demon", B: "A computer program that runs as a background process", C: "A virus", D: "A user interface" },
        correctAnswer: "B",
        explanation: "Usually handles system tasks like printing or scheduling."
    },
    {
        id: 157,
        subject: "Tech Lingo",
        question: "What is 'Deep Fake'?",
        options: { A: "A lie", B: "Synthetic media in which a person in an existing image or video is replaced with someone else's likeness", C: "Deep diving", D: "Fake news" },
        correctAnswer: "B",
        explanation: "Uses deep learning/AI."
    },
    {
        id: 158,
        subject: "Vocabulary",
        question: "What does 'brevity' mean?",
        options: { A: "Courage", B: "Concise and exact use of words in writing or speech", C: "Length", D: "Breadth" },
        correctAnswer: "B",
        explanation: "'Brevity is the soul of wit.'"
    },
    {
        id: 159,
        subject: "Communication",
        question: "What is 'open-ended question'?",
        options: { A: "A question that can be answered with 'Yes' or 'No'", B: "A question that cannot be answered with a simple 'Yes' or 'No'", C: "A question without an end", D: "A statement" },
        correctAnswer: "B",
        explanation: "Promotes discussion (e.g., 'How do you feel about this?')."
    },
    {
        id: 160,
        subject: "Software Engineering",
        question: "What is 'responsive design'?",
        options: { A: "Design that talks back", B: "Web design that renders well on a variety of devices and window or screen sizes", C: "Fast design", D: "Database design" },
        correctAnswer: "B",
        explanation: "Using media queries to adapt to mobile vs desktop."
    },
    {
        id: 161,
        subject: "General Knowledge",
        question: "What is 'cryptography'?",
        options: { A: "Study of tombs", B: "Practice and study of techniques for secure communication", C: "Writing maps", D: "Virtual currency" },
        correctAnswer: "B",
        explanation: "From Greek 'kryptos' (hidden)."
    },
    {
        id: 162,
        subject: "Tech Lingo",
        question: "What is 'Agile'?",
        options: { A: "Gymnastics", B: "An iterative approach to project management and software development", C: "Fast coding", D: "A programming language" },
        correctAnswer: "B",
        explanation: "Focuses on flexibility, collaboration, and customer feedback."
    },
    {
        id: 163,
        subject: "Vocabulary",
        question: "What does 'innocuous' mean?",
        options: { A: "Not harmful or offensive", B: "Guilty", C: "Inoculated", D: "Innovative" },
        correctAnswer: "A", explanation: "Something that looks dangerous but is actually innocuous."
    },
    {
        id: 164,
        subject: "Software Engineering",
        question: "What is 'load balancing'?",
        options: { A: "Weighing scales", B: "Distributing network traffic across a pool of servers", C: "Managing budget", D: "Balancing equations" },
        correctAnswer: "B",
        explanation: "Ensures no single server bears too much demand."
    },
    {
        id: 165,
        subject: "Communication",
        question: "What is 'articulate'?",
        options: { A: "To bend joints", B: "Having or showing the ability to speak fluently and coherently", C: "To draw", D: "To shout" },
        correctAnswer: "B",
        explanation: "A key skill for senior engineers."
    },
    {
        id: 166,
        subject: "Tech Lingo",
        question: "What is 'disruptive technology'?",
        options: { A: "Technology that breaks often", B: "Innovation that significantly alters the way that consumers, industries, or businesses operate", C: "Loud technology", D: "Illegal technology" },
        correctAnswer: "B",
        explanation: "Examples: The smartphone, Uber, Netflix."
    },
    {
        id: 167,
        subject: "Vocabulary",
        question: "What does 'meticulous' mean?",
        options: { A: "Showing great attention to detail; very careful and precise", B: "Metallic", C: "Careless", D: "Fast" },
        correctAnswer: "A", explanation: "Meticulous testing prevents bugs."
    },
    {
        id: 168,
        subject: "Software Engineering",
        question: "What is 'pair programming'?",
        options: { A: "Coding with a fruit", B: "Two programmers sharing a single workstation", C: "Programming two computers", D: "Dual monitors" },
        correctAnswer: "B",
        explanation: "One drives (types), the other navigates (reviews)."
    },
    {
        id: 169,
        subject: "General Knowledge",
        question: "What is 'Deep Learning'?",
        options: { A: "Studying hard", B: "A subset of machine learning based on artificial neural networks", C: "Scuba diving", D: "Philosophy" },
        correctAnswer: "B",
        explanation: "It mimics the human brain's connectivity."
    },
    {
        id: 170,
        subject: "Tech Lingo",
        question: "What is 'Geofencing'?",
        options: { A: "Building fences", B: "A virtual perimeter for a real-world geographic area", C: "Earth science", D: "Global defense" },
        correctAnswer: "B",
        explanation: "Triggers an action when a device enters a set location."
    },
    {
        id: 171,
        subject: "Vocabulary",
        question: "What does 'empirical' mean?",
        options: { A: "Based on observation or experience rather than theory or pure logic", B: "Royal", C: "Round", D: "Emotional" },
        correctAnswer: "A", explanation: "We need empirical data to prove the system is faster."
    },
    {
        id: 172,
        subject: "Software Engineering",
        question: "What is 'regression testing'?",
        options: { A: "Going back in time", B: "Re-running functional and non-functional tests to ensure that previously developed and tested software still performs after a change", C: "Psychological testing", D: "Testing new features only" },
        correctAnswer: "B",
        explanation: "Ensures new code didn't break old code."
    },
    {
        id: 173,
        subject: "Communication",
        question: "What is 'negotiation'?",
        options: { A: "Surrender", B: "Discussion aimed at reaching an agreement", C: "Arguing", D: "Ignoring" },
        correctAnswer: "B",
        explanation: "Crucial for salary discussions and feature prioritization."
    },
    {
        id: 174,
        subject: "Tech Lingo",
        question: "What is 'Freemium'?",
        options: { A: "Free aluminum", B: "A pricing strategy by which a product is provided free of charge, but money is charged for additional features", C: "Totally free", D: "Expensive" },
        correctAnswer: "B",
        explanation: "e.g., Spotify, Dropbox."
    },
    {
        id: 175,
        subject: "Vocabulary",
        question: "What does 'prolific' mean?",
        options: { A: "Present in large numbers or quantities; plentiful", B: "Professional", C: "Lazy", D: "Specific" },
        correctAnswer: "A", explanation: "A prolific coder writes a lot of code."
    },
    {
        id: 176,
        subject: "Software Engineering",
        question: "What is a 'Sandbox'?",
        options: { A: "A play area", B: "An isolated environment for testing changes without affecting the live system", C: "A desert", D: "A storage box" },
        correctAnswer: "B",
        explanation: "Safe place to experiment."
    },
    {
        id: 177,
        subject: "General Knowledge",
        question: "What is 'Net Neutrality'?",
        options: { A: "The internet is beige", B: "The principle that ISPs should enable access to all content and applications regardless of the source, without favoring or blocking particular products", C: "Free internet for all", D: "Switzerland's internet" },
        correctAnswer: "B",
        explanation: "Ensures a level playing field."
    },
    {
        id: 178,
        subject: "Tech Lingo",
        question: "What is 'catfishing'?",
        options: { A: "Fishing for cats", B: "Luring someone into a relationship by means of a fictional online persona", C: "Eating fish", D: "Coding in C#" },
        correctAnswer: "B",
        explanation: "A social engineering risk."
    },
    {
        id: 179,
        subject: "Vocabulary",
        question: "What does 'tenuous' mean?",
        options: { A: "Very weak or slight", B: "Strong", C: "Ten years", D: "Tender" },
        correctAnswer: "A", explanation: "e.g., 'A tenuous connection to the server.'"
    },
    {
        id: 180,
        subject: "Software Engineering",
        question: "What is 'deprecated'?",
        options: { A: "Approved", B: "Discouraged from use, typically because it has been superseded", C: "Deleted", D: "Appreciated" },
        correctAnswer: "B",
        explanation: "It still works but will likely be removed later."
    },
    {
        id: 181,
        subject: "Communication",
        question: "What is 'jargon'?",
        options: { A: "A jar", B: "Special words or expressions that are used by a particular profession and are difficult for others to understand", C: "Slang", D: "Joke" },
        correctAnswer: "B",
        explanation: "Avoid jargon when speaking to non-technical stakeholders."
    },
    {
        id: 182,
        subject: "Tech Lingo",
        question: "What is 'churn'?",
        options: { A: "Making butter", B: "The percentage of subscribers who discontinue their subscriptions", C: "Fast processing", D: "Slow internet" },
        correctAnswer: "B",
        explanation: "High churn is bad for business."
    },
    {
        id: 183,
        subject: "Vocabulary",
        question: "What does 'cacophony' mean?",
        options: { A: "A harsh, discordant mixture of sounds", B: "A symphony", C: "A fake phone", D: "Silence" },
        correctAnswer: "A", explanation: "A noisy office can be a cacophony."
    },
    {
        id: 184,
        subject: "Software Engineering",
        question: "What is 'throughput'?",
        options: { A: "Putting things through", B: "The amount of material or items passing through a system or process", C: "Input only", D: "Output only" },
        correctAnswer: "B",
        explanation: "In networks, how much data can be transferred."
    },
    {
        id: 185,
        subject: "General Knowledge",
        question: "What is 'Open Data'?",
        options: { A: "Unlocked files", B: "Data that can be freely used, re-used and redistributed by anyone", C: "Public Wi-Fi", D: "Hacked data" },
        correctAnswer: "B",
        explanation: "Promotes transparency."
    },
    {
        id: 186,
        subject: "Tech Lingo",
        question: "What is 'Dark Web'?",
        options: { A: "The internet at night", B: "Part of the World Wide Web that is only accessible by means of special software", C: "A black screen", D: "Offline mode" },
        correctAnswer: "B",
        explanation: "Often associated with illegal activity but also privacy."
    },
    {
        id: 187,
        subject: "Vocabulary",
        question: "What does 'elucidate' mean?",
        options: { A: "To make (something) clear; explain", B: "To confuse", C: "To lose", D: "To date" },
        correctAnswer: "A", explanation: "Can you elucidate the logic in this function?"
    },
    {
        id: 188,
        subject: "Software Engineering",
        question: "What is 'boilerplate code'?",
        options: { A: "Hot code", B: "Sections of code that have to be included in many places with little or no alteration", C: "Boiling plates", D: "Unique code" },
        correctAnswer: "B",
        explanation: "Reduces efficiency; frameworks often try to reduce boilerplate."
    },
    {
        id: 189,
        subject: "Communication",
        question: "What is 'cold calling'?",
        options: { A: "Calling in winter", B: "Soliciting business from potential customers who have had no prior contact with the salesperson", C: "Calling with a cold", D: "Ignoring calls" },
        correctAnswer: "B",
        explanation: "A difficult sales technique."
    },
    {
        id: 190,
        subject: "Tech Lingo",
        question: "What is 'Firmware'?",
        options: { A: "Soft hardware", B: "Permanent software programmed into a read-only memory", C: "Company wear", D: "Firewall" },
        correctAnswer: "B",
        explanation: "Software that controls the hardware (e.g., BIOS, router firmware)."
    },
    {
        id: 191,
        subject: "Vocabulary",
        question: "What does 'austere' mean?",
        options: { A: "Severe or strict in manner, attitude, or appearance", B: "Australian", C: "Rich", D: "Colorful" },
        correctAnswer: "A", explanation: "An austere user interface is very plain."
    },
    {
        id: 192,
        subject: "Software Engineering",
        question: "What is 'Scrum'?",
        options: { A: "Rugby", B: "A framework for project management that emphasizes teamwork, accountability and iterative progress", C: "Debris", D: "A coding language" },
        correctAnswer: "B",
        explanation: "A subset of Agile."
    },
    {
        id: 193,
        subject: "General Knowledge",
        question: "What is 'Crowdsourcing'?",
        options: { A: "A large gathering", B: "Obtaining information or input into a task by enlisting the services of a large number of people", C: "Farming", D: "Selling to crowds" },
        correctAnswer: "B",
        explanation: "Wikipedia is a result of crowdsourcing."
    },
    {
        id: 194,
        subject: "Tech Lingo",
        question: "What is 'Pharming'?",
        options: { A: "Digital agriculture", B: "Directing internet users to a bogus website which mimics the appearance of a legitimate one", C: "Pharmacy tech", D: "Gaming" },
        correctAnswer: "B",
        explanation: "More sophisticated than phishing."
    },
    {
        id: 195,
        subject: "Vocabulary",
        question: "What does 'pervasive' mean?",
        options: { A: "Spreading widely throughout an area or a group of people", B: "Persuasive", C: "Private", D: "Perfect" },
        correctAnswer: "A", explanation: "Computing is now pervasive."
    },
    {
        id: 196,
        subject: "Software Engineering",
        question: "What is 'latency'?",
        options: { A: "Being late", B: "The delay before a transfer of data begins following an instruction", C: "Lateral movement", D: "Latest version" },
        correctAnswer: "B",
        explanation: "Low latency is good."
    },
    {
        id: 197,
        subject: "Communication",
        question: "What is 'brainstorming'?",
        options: { A: "Having a headache", B: "Group discussion to produce ideas or solve problems", C: "Weather forecasting", D: "Brain surgery" },
        correctAnswer: "B",
        explanation: "Quantity over quality is often encouraged in the initial phase."
    },
    {
        id: 198,
        subject: "Tech Lingo",
        question: "What is 'White paper'?",
        options: { A: "Blank paper", B: "A persuasive, authoritative, in-depth report on a specific topic", C: "Printing paper", D: "Legal document" },
        correctAnswer: "B",
        explanation: "Often used in crypto and B2B tech to explain a product's philosophy."
    },
    {
        id: 199,
        subject: "Vocabulary",
        question: "What does 'ubiquitous' mean?",
        options: { A: "Present, appearing, or found everywhere", B: "Unique", C: "Ugly", D: "Useful" },
        correctAnswer: "A", explanation: "Smartphones are ubiquitous."
    },
    {
        id: 200,
        subject: "Software Engineering",
        question: "What is 'semantic versioning'?",
        options: { A: "Versioning with words", B: "A versioning scheme using Major.Minor.Patch (e.g., 1.0.2)", C: "Random numbers", D: "Date-based versioning" },
        correctAnswer: "B",
        explanation: "Helps manage dependencies."
    },
    {
        id: 201,
        subject: "General Knowledge",
        question: "What is 'IP Intellectual Property'?",
        options: { A: "Internet Protocol", B: "Intangible property that is the result of creativity (patents, copyrights)", C: "Intelligent Person", D: "Internal Process" },
        correctAnswer: "B",
        explanation: "Software code can be IP."
    },
    {
        id: 202,
        subject: "Tech Lingo",
        question: "What is 'On-premise'?",
        options: { A: "On a promise", B: "Software installed and run on computers on the premises of the person or organization", C: "In the cloud", D: "On vacation" },
        correctAnswer: "B",
        explanation: "Opposite of Cloud/SaaS."
    },
    {
        id: 203,
        subject: "Vocabulary",
        question: "What does 'idiosyncrasy' mean?",
        options: { A: "A mode of behavior or way of thought peculiar to an individual", B: "Idiocy", C: "Synchronizing", D: "Identity" },
        correctAnswer: "A", explanation: "Every programming language has its idiosyncrasies."
    },
    {
        id: 204,
        subject: "Software Engineering",
        question: "What is 'concatenation'?",
        options: { A: "Cutting", B: "Linking things together in a series", C: "Concentrating", D: "Calculating" },
        correctAnswer: "B",
        explanation: "Joining strings: 'Hello' + 'World'."
    },
    {
        id: 205,
        subject: "Communication",
        question: "What is 'verbal garbage'?",
        options: { A: "Trash talking", B: "Filler words like 'um', 'uh', 'like' that reduce clarity", C: "Swearing", D: "Lying" },
        correctAnswer: "B",
        explanation: "Reducing this makes you sound more confident."
    },
    {
        id: 206,
        subject: "Tech Lingo",
        question: "What is 'Zero-day exploit'?",
        options: { A: "A cyber attack that occurs on the same day a weakness is discovered", B: "A holiday", C: "A failed exploit", D: "A test" },
        correctAnswer: "A", explanation: "Developers have had 'zero days' to fix it."
    },
    {
        id: 207,
        subject: "Vocabulary",
        question: "What does 'nefarious' mean?",
        options: { A: "(Typically of an action or activity) wicked or criminal", B: "Necessary", C: "Near", D: "Famous" },
        correctAnswer: "A", explanation: "Nefarious actors on the network."
    },
    {
        id: 208,
        subject: "Software Engineering",
        question: "What is 'serverless'?",
        options: { A: "No servers exist", B: "A cloud execution model where the cloud provider runs the server, and dynamically manages the allocation of machine resources", C: "Offline", D: "Peer to peer" },
        correctAnswer: "B",
        explanation: "You focus on code, not infrastructure (e.g., AWS Lambda)."
    },
    {
        id: 209,
        subject: "General Knowledge",
        question: "What is 'planned obsolescence'?",
        options: { A: "Planning a holiday", B: "A policy of producing consumer goods that rapidly become obsolete and so require replacing", C: "Recycling", D: "Software updates" },
        correctAnswer: "B",
        explanation: "Why phones slow down after 2 years."
    },
    {
        id: 210,
        subject: "Tech Lingo",
        question: "What is 'Augmented Reality' (AR)?",
        options: { A: "Fake reality", B: "An interactive experience where real-world objects are enhanced by computer-generated perceptual information", C: "Virtual Reality", D: "Dreams" },
        correctAnswer: "B",
        explanation: "Pokemon Go is a famous example."
    },
    {
        id: 211,
        subject: "Vocabulary",
        question: "What does 'facade' mean in English?",
        options: { A: "The face of a building; an outward appearance that is maintained to conceal a less pleasant reality", B: "A face mask", C: "A fact", D: "A decade" },
        correctAnswer: "A", explanation: "Also a design pattern in coding (Facade Pattern)."
    },
    {
        id: 212,
        subject: "Software Engineering",
        question: "What is 'Docker'?",
        options: { A: "A person who works at a dock", B: "A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers", C: "A pants brand", D: "A document editor" },
        correctAnswer: "B",
        explanation: "Solves 'it works on my machine' problem."
    },
    {
        id: 213,
        subject: "Communication",
        question: "What is 'Devil's Advocate'?",
        options: { A: "A lawyer", B: "A person who expresses a contentious opinion in order to provoke debate or test the strength of the opposing arguments", C: "A bad person", D: "A judge" },
        correctAnswer: "B",
        explanation: "Useful for stress-testing ideas."
    },
    {
        id: 214,
        subject: "Tech Lingo",
        question: "What is 'Spoofing'?",
        options: { A: "Making fun of someone", B: "A situation in which a person or program successfully identifies as another by falsifying data", C: "Spying", D: "Speeding" },
        correctAnswer: "B",
        explanation: "e.g., Caller ID spoofing."
    },
    {
        id: 215,
        subject: "Vocabulary",
        question: "What does 'egregious' mean?",
        options: { A: "Outstandingly bad; shocking", B: "Excellent", C: "Equal", D: "Early" },
        correctAnswer: "A", explanation: "An egregious error in the code caused the crash."
    },
    {
        id: 216,
        subject: "Software Engineering",
        question: "What is 'Microservices'?",
        options: { A: "Small waiters", B: "An architectural style that structures an application as a collection of services", C: "Microchips", D: "One large service" },
        correctAnswer: "B",
        explanation: "Opposite of Monolith."
    },
    {
        id: 217,
        subject: "General Knowledge",
        question: "What is 'Quantum Computing'?",
        options: { A: "Fast PCs", B: "Computing using quantum states (superposition, entanglement) to solve problems too complex for classical computers", C: "Small computers", D: "Theory only" },
        correctAnswer: "B",
        explanation: "Uses Qubits instead of bits."
    },
    {
        id: 218,
        subject: "Tech Lingo",
        question: "What is 'SDK'?",
        options: { A: "Software Development Kit", B: "Standard Design Key", C: "System Data Kernel", D: "Safe Data Keeper" },
        correctAnswer: "A", explanation: "Tools provided by hardware/software vendors to allow you to build on their platform."
    },
    {
        id: 219,
        subject: "Vocabulary",
        question: "What does 'juxtapose' mean?",
        options: { A: "To place or deal with close together for contrasting effect", B: "To judge", C: "To justify", D: "To pose" },
        correctAnswer: "A", explanation: "Juxtaposing two design mockups helps choose the best one."
    },
    {
        id: 220,
        subject: "Software Engineering",
        question: "What is 'mocking' in testing?",
        options: { A: "Laughing at code", B: "Creating objects that simulate the behavior of real objects", C: "Copying code", D: "Deleting code" },
        correctAnswer: "B",
        explanation: "Used to isolate the unit being tested."
    },
    {
        id: 221,
        subject: "Communication",
        question: "What is 'paralanguage'?",
        options: { A: "Two languages", B: "Non-lexical component of communication by speech, for example intonation, pitch and speed", C: "Computer language", D: "Sign language" },
        correctAnswer: "B",
        explanation: "It's not what you said, it's how you said it."
    },
    {
        id: 222,
        subject: "Tech Lingo",
        question: "What is 'Metadata'?",
        options: { A: "Data about data", B: "Big data", C: "Facebook data", D: "Wrong data" },
        correctAnswer: "A", explanation: "e.g., the date a photo was taken is metadata."
    },
    {
        id: 223,
        subject: "Vocabulary",
        question: "What does 'dogmatic' mean?",
        options: { A: "Inclined to lay down principles as incontrovertibly true", B: "Like a dog", C: "Flexible", D: "Automatic" },
        correctAnswer: "A", explanation: "Don't be dogmatic about using one specific tech stack; be pragmatic."
    },
    {
        id: 224,
        subject: "Software Engineering",
        question: "What is 'recursion'?",
        options: { A: "A function that calls itself", B: "A loop", C: "A crash", D: "A database" },
        correctAnswer: "A", explanation: "Requires a base case to stop."
    },
    {
        id: 225,
        subject: "General Knowledge",
        question: "What is 'GDP'?",
        options: { A: "General Data Protection", B: "Gross Domestic Product", C: "Global Data Point", D: "Great Development Plan" },
        correctAnswer: "B",
        explanation: "Measure of a country's economic activity."
    },
    {
        id: 226,
        subject: "Tech Lingo",
        question: "What is 'cookie' in web?",
        options: { A: "A snack", B: "A small piece of data stored on the user's computer by the web browser", C: "A virus", D: "A button" },
        correctAnswer: "B",
        explanation: "Used for session management and tracking."
    },
    {
        id: 227,
        subject: "Vocabulary",
        question: "What does 'exacerbate' mean?",
        options: { A: "To make (a problem, bad situation, or negative feeling) worse", B: "To improve", C: "To exit", D: "To exact" },
        correctAnswer: "A", explanation: "Poor error handling can exacerbate the issue."
    },
    {
        id: 228,
        subject: "Software Engineering",
        question: "What is 'SQL Injection'?",
        options: { A: "A medical procedure", B: "A code injection technique used to attack data-driven applications", C: "Inserting data fast", D: "A database upgrade" },
        correctAnswer: "B",
        explanation: "Prevented by using prepared statements."
    },
    {
        id: 229,
        subject: "Communication",
        question: "What is 'assertiveness'?",
        options: { A: "Aggression", B: "Confident and forceful behavior", C: "Passiveness", D: "Fear" },
        correctAnswer: "B",
        explanation: "The balance between passive and aggressive."
    },
    {
        id: 230,
        subject: "Tech Lingo",
        question: "What is 'beta'?",
        options: { A: "The second letter of Greek alphabet", B: "A pre-release phase of software", C: "Better", D: "A fish" },
        correctAnswer: "B",
        explanation: "Feature complete but likely contains bugs."
    },
    {
        id: 231,
        subject: "Vocabulary",
        question: "What does 'ambiguous' mean?",
        options: { A: "Open to more than one interpretation; having a double meaning", B: "Clear", C: "Ambitious", D: "Large" },
        correctAnswer: "A", explanation: "Ambiguous requirements lead to bad software."
    },
    {
        id: 232,
        subject: "Software Engineering",
        question: "What is 'inheritance'?",
        options: { A: "Getting money", B: "A mechanism where a new class is derived from an existing class", C: "Sharing code", D: "Buying code" },
        correctAnswer: "B",
        explanation: "Key concept in OOP."
    },
    {
        id: 233,
        subject: "General Knowledge",
        question: "What is 'ROI'?",
        options: { A: "Return On Investment", B: "Rate Of Interest", C: "Risk Of Injury", D: "Real Object Interface" },
        correctAnswer: "A", explanation: "Is this feature worth the cost to build?"
    },
    {
        id: 234,
        subject: "Tech Lingo",
        question: "What is 'bandwidth'?",
        options: { A: "A rubber band", B: "The maximum data transfer rate of a network or internet connection", C: "Music band width", D: "Radio frequency" },
        correctAnswer: "B",
        explanation: "Also used metaphorically for mental capacity."
    },
    {
        id: 235,
        subject: "Vocabulary",
        question: "What does 'nascent' mean?",
        options: { A: "Just coming into existence and beginning to display signs of future potential", B: "Nasty", C: "Native", D: "Natural" },
        correctAnswer: "A", explanation: "Nascent technology."
    },
    {
        id: 236,
        subject: "Software Engineering",
        question: "What is 'abstraction'?",
        options: { A: "Art", B: "Hiding complex implementation details and showing only the necessary features of an object", C: "Distraction", D: "Subtraction" },
        correctAnswer: "B",
        explanation: "Allows managing complexity."
    },
    {
        id: 237,
        subject: "Communication",
        question: "What is 'soft skills'?",
        options: { A: "Easy skills", B: "Non-technical skills that enable someone to interact effectively and harmoniously with others", C: "Software skills", D: "Physical skills" },
        correctAnswer: "B",
        explanation: "Communication, empathy, teamwork."
    },
    {
        id: 238,
        subject: "Tech Lingo",
        question: "What is 'cache'?",
        options: { A: "Money", B: "A hardware or software component that stores data so that future requests for that data can be served faster", C: "Trash", D: "Hidden" },
        correctAnswer: "B",
        explanation: "Clearing cache often fixes browser issues."
    },
    {
        id: 239,
        subject: "Vocabulary",
        question: "What does 'paradigm' mean?",
        options: { A: "A typical example or pattern of something; a model", B: "Two dimes", C: "A paradise", D: "A shape" },
        correctAnswer: "A", explanation: "Programming paradigms include OOP and Functional."
    },
    {
        id: 240,
        subject: "Software Engineering",
        question: "What is 'encapsulation'?",
        options: { A: "Medical capsule", B: "Bundling data and methods that operate on that data within one unit", C: "Encryption", D: "Encoding" },
        correctAnswer: "B",
        explanation: "Protects object integrity."
    },
    {
        id: 241,
        subject: "General Knowledge",
        question: "What is 'KPI'?",
        options: { A: "Key Performance Indicator", B: "Keep People Interested", C: "Key Process Input", D: "Knowledge Per Inch" },
        correctAnswer: "A", explanation: "Metric to evaluate success."
    },
    {
        id: 242,
        subject: "Tech Lingo",
        question: "What is 'firewall'?",
        options: { A: "A wall of fire", B: "A network security system that monitors and controls incoming and outgoing network traffic", C: "Antivirus", D: "Heater" },
        correctAnswer: "B",
        explanation: "First line of defense."
    },
    {
        id: 243,
        subject: "Vocabulary",
        question: "What does 'tangential' mean?",
        options: { A: "Diverging from a previous course or line; touching slightly", B: "Orange", C: "Touching", D: "Tasteful" },
        correctAnswer: "A", explanation: "Going off on a tangential topic during a meeting."
    },
    {
        id: 244,
        subject: "Software Engineering",
        question: "What is 'refactoring'?",
        options: { A: "Factory reset", B: "Restructuring existing computer code without changing its external behavior", C: "Rewriting", D: "Redoing" },
        correctAnswer: "B",
        explanation: "Improves readability and maintainability."
    },
    {
        id: 245,
        subject: "Communication",
        question: "What is 'active listening'?",
        options: { A: "Listening while running", B: "Fully concentrating, understanding, responding and then remembering what is being said", C: "Hearing", D: "Talking" },
        correctAnswer: "B",
        explanation: "Opposite of passive hearing."
    },
    {
        id: 246,
        subject: "Tech Lingo",
        question: "What is 'GUI'?",
        options: { A: "Sticky", B: "Graphical User Interface", C: "General User Info", D: "Gaming UI" },
        correctAnswer: "B",
        explanation: "Pronounced 'gooey'."
    },
    {
        id: 247,
        subject: "Vocabulary",
        question: "What does 'cognizant' mean?",
        options: { A: "Having knowledge or being aware of", B: "Thinking", C: "Cogwheel", D: "Recognizable" },
        correctAnswer: "A", explanation: "Be cognizant of the risks."
    },
    {
        id: 248,
        subject: "Software Engineering",
        question: "What is 'bootstrap'?",
        options: { A: "A shoe", B: "A free and open-source CSS framework directed at responsive, mobile-first front-end web development", C: "A trap", D: "A map" },
        correctAnswer: "B",
        explanation: "Also refers to starting a computer (booting)."
    },
    {
        id: 249,
        subject: "General Knowledge",
        question: "What is 'NDA'?",
        options: { A: "No Data Available", B: "Non-Disclosure Agreement", C: "New Date Announced", D: "National Defense Agency" },
        correctAnswer: "B",
        explanation: "Legal contract to keep secrets."
    },
    {
        id: 250,
        subject: "Tech Lingo",
        question: "What is '404'?",
        options: { A: "Area code", B: "HTTP status code for 'Not Found'", C: "A number", D: "Speed limit" },
        correctAnswer: "B",
        explanation: "The page you requested does not exist."
    }
]