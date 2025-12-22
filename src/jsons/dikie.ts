import type { QuizType } from "@/pages/ANN/GavinQuickQuiz"

export const quizData: QuizType[] = [
    {
        "id": 1,
        "subject": "System Design Communication",
        "question": "A Product Manager asks why switching from a Monolith to Microservices will slow down feature delivery initially. What is the most accurate non-technical analogy?",
        "options": {
            "A": "It's like moving from a small house to a mansion; it just takes longer to clean.",
            "B": "It's like changing from a single chef in a kitchen to five chefs in separate kitchens; coordination takes time to set up.",
            "C": "It won't slow us down; microservices are actually faster.",
            "D": "It's because the latency between services increases the RTT."
        },
        "correctAnswer": "B",
        "explanation": "This analogy highlights the overhead of coordination and infrastructure ('separate kitchens') required before efficiency is gained."
    },
    {
        "id": 2,
        "subject": "Code Review Etiquette",
        "question": "You find a critical logic error in a senior engineer's PR. What is the most constructive comment?",
        "options": {
            "A": "This will crash in production. Fix it.",
            "B": "Why did you use this loop here? It's wrong.",
            "C": "I noticed this edge case might cause a crash. Could we add a test or a guard clause here?",
            "D": "I am blocking this PR until line 45 is changed."
        },
        "correctAnswer": "C",
        "explanation": "Option C is objective ('I noticed'), focuses on the code not the person, and suggests a solution collaboratively."
    },
    {
        "id": 3,
        "subject": "Stakeholder Management",
        "question": "The CEO asks for a feature 'ASAP' that requires significant refactoring. How do you handle this?",
        "options": {
            "A": "Say yes, then work overtime to hack it together.",
            "B": "Say no immediately; the code quality is more important.",
            "C": "Explain the 'Technical Debt' trade-off: We can ship fast now, but future features will take 2x longer.",
            "D": "Tell them to talk to the CTO."
        },
        "correctAnswer": "C",
        "explanation": "This communicates the business consequence (trade-off) of a technical decision, empowering the stakeholder to choose."
    },
    {
        "id": 4,
        "subject": "Frontend Concepts (React)",
        "question": "How would you explain the `useEffect` hook to a junior developer who thinks it's just 'lifecycle methods'?",
        "options": {
            "A": "It's exactly like componentDidMount and componentDidUpdate combined.",
            "B": "It's a way to synchronize your component with an external system (like a server or DOM) based on state changes.",
            "C": "It makes things happen after the screen paints.",
            "D": "It runs the code every time the variable changes."
        },
        "correctAnswer": "B",
        "explanation": "Option B is the mental model the React team recommends; it focuses on 'synchronization' rather than just timing."
    },
    {
        "id": 5,
        "subject": "Backend Architecture",
        "question": "A client asks why you chose a NoSQL database over SQL. Which justification is most persuasive?",
        "options": {
            "A": "NoSQL is newer and faster.",
            "B": "SQL is legacy tech and we don't want to use old stuff.",
            "C": "Your data structure is unstructured and evolves rapidly; NoSQL offers the schema flexibility we need.",
            "D": "Google uses NoSQL, so we should too."
        },
        "correctAnswer": "C",
        "explanation": "This links the technical choice directly to the specific nature of the client's data (business requirement)."
    },
    {
        "id": 6,
        "subject": "DevOps Culture",
        "question": "What is the primary communication goal of a 'Blameless Post-Mortem'?",
        "options": {
            "A": "To find out who pushed the bad code so they don't do it again.",
            "B": "To apologize to the customers.",
            "C": "To identify the process failure that allowed the error to happen, not the person.",
            "D": "To determine who pays for the downtime."
        },
        "correctAnswer": "C",
        "explanation": "Blameless cultures focus on systemic improvements (processes/guardrails) rather than individual punishment."
    },
    {
        "id": 7,
        "subject": "API Design",
        "question": "You are deprecating a public API endpoint. What is the most professional communication strategy?",
        "options": {
            "A": "Delete the endpoint and update the documentation.",
            "B": "Email the users the day before removing it.",
            "C": "Mark it 'deprecated' in headers, provide a 'Sunset' date, and offer a migration guide months in advance.",
            "D": "Redirect the old endpoint to the new one silently."
        },
        "correctAnswer": "C",
        "explanation": "This respects the user's need for stability and gives them actionable steps and a timeline."
    },
    {
        "id": 8,
        "subject": "Agile Methodology",
        "question": "In a Daily Stand-up, you are stuck on a bug. What is the most effective update?",
        "options": {
            "A": "I'm still working on the bug.",
            "B": "I tried X and Y, but it's still failing. I need 15 mins with a senior dev after this meeting.",
            "C": "The code is messy so it's taking a while.",
            "D": "I will finish it today."
        },
        "correctAnswer": "B",
        "explanation": "This is specific about the blocker and explicitly asks for the resources needed to unblock, which is the point of a stand-up."
    },
    {
        "id": 9,
        "subject": "Security",
        "question": "A non-technical founder asks why we can't just store passwords in the database if we trust our employees. You answer:",
        "options": {
            "A": "It's illegal.",
            "B": "If we get hacked, hashed passwords protect our users; plain text exposes them everywhere.",
            "C": "Hashing is just standard practice.",
            "D": "We can, but it's bad style."
        },
        "correctAnswer": "B",
        "explanation": "This explains the 'threat model' (getting hacked) and the specific protection (limiting exposure) in plain English."
    },
    {
        "id": 10,
        "subject": "Negotiation",
        "question": "Product wants a feature that requires a library with a restrictive license (GPL). How do you communicate the blocker?",
        "options": {
            "A": "We can't use this, it's illegal.",
            "B": "I refuse to implement this.",
            "C": "Using this library forces us to open-source our entire proprietary codebase. We need to find an MIT/Apache alternative.",
            "D": "The license is bad."
        },
        "correctAnswer": "C",
        "explanation": "This explains the specific legal/business consequence (forced open-sourcing) rather than just saying 'no'."
    },
    {
        "id": 11,
        "subject": "JavaScript (Technical)",
        "question": "Explain 'Closures' to a Python developer learning JS.",
        "options": {
            "A": "It's a function inside a function.",
            "B": "It's when a function 'remembers' its lexical scope even when executed outside that scope.",
            "C": "It's a way to make private variables.",
            "D": "It's like a class method."
        },
        "correctAnswer": "B",
        "explanation": "This is the precise technical definition. While C is a use-case, B defines the mechanism."
    },
    {
        "id": 12,
        "subject": "Git Workflow",
        "question": "You accidentally committed secrets (API keys) to a public repo. What is the FIRST communication step?",
        "options": {
            "A": "Delete the repo immediately.",
            "B": "Force push a rewrite of history.",
            "C": "Revoke/Rotate the keys immediately, then rewrite history.",
            "D": "Email GitHub support."
        },
        "correctAnswer": "C",
        "explanation": "Security first. The keys are already compromised (bots scan public repos instantly). Revoking is the only safety; cleaning up comes second."
    },
    {
        "id": 13,
        "subject": "Performance Optimization",
        "question": "A user complains the site is slow. You find the 'Time to First Byte' (TTFB) is high. How do you explain this to the client?",
        "options": {
            "A": "Your internet is slow.",
            "B": "The server is taking too long to think before sending data; we need to optimize the database queries.",
            "C": "The JavaScript bundle is too large.",
            "D": "We need a CDN."
        },
        "correctAnswer": "B",
        "explanation": "High TTFB specifically indicates server-side processing delay, not client-side rendering or network bandwidth."
    },
    {
        "id": 14,
        "subject": "Mentorship",
        "question": "A junior dev asks a question that is easily Google-able. How do you respond to encourage growth?",
        "options": {
            "A": "Just Google it.",
            "B": "Here is the answer.",
            "C": "What search terms have you tried so far? Let's refine your search query together.",
            "D": "Don't bother me with easy stuff."
        },
        "correctAnswer": "C",
        "explanation": "This teaches the skill of 'how to find answers' (unblocking them forever) rather than just giving the answer."
    },
    {
        "id": 15,
        "subject": "Database Design",
        "question": "When would you advocate for Denormalization (duplicating data) in a SQL database?",
        "options": {
            "A": "Never, it violates 3rd Normal Form.",
            "B": "When read performance is critical and expensive JOINS are slowing down the app.",
            "C": "When we want to save disk space.",
            "D": "When we are lazy to write JOIN queries."
        },
        "correctAnswer": "B",
        "explanation": "Denormalization is a deliberate trade-off: sacrificing write speed/storage efficiency for faster read performance."
    },
    {
        "id": 16,
        "subject": "Testing",
        "question": "The QA team reports a bug you cannot reproduce. What is the most collaborative response?",
        "options": {
            "A": "It works on my machine.",
            "B": "Close the ticket as 'Cannot Reproduce'.",
            "C": "Can we hop on a call? I'd like to watch you trigger it so I can see the environment state.",
            "D": "You are doing it wrong."
        },
        "correctAnswer": "C",
        "explanation": "This shows ownership and acknowledges that environment differences are real, moving from defensive to investigative."
    },
    {
        "id": 17,
        "subject": "Cloud Computing",
        "question": "Explain 'Serverless' to a finance director.",
        "options": {
            "A": "There are no servers anymore.",
            "B": "We pay for the code execution time only when it runs, rather than paying for a server to sit idle 24/7.",
            "C": "It's like Docker but managed by AWS.",
            "D": "It is a cloud architecture pattern."
        },
        "correctAnswer": "B",
        "explanation": "This frames the technical concept in terms of cost-efficiency and utility, which speaks the Finance Director's language."
    },
    {
        "id": 18,
        "subject": "REST API",
        "question": "What is the semantic difference between PUT and PATCH?",
        "options": {
            "A": "There is no difference.",
            "B": "PUT replaces the entire resource; PATCH updates only the specified fields.",
            "C": "PATCH creates a new resource; PUT updates it.",
            "D": "PUT is secure; PATCH is not."
        },
        "correctAnswer": "B",
        "explanation": "This distinction is crucial for idempotency and bandwidth optimization in API design."
    },
    {
        "id": 19,
        "subject": "Accessibility (a11y)",
        "question": "Why should we use semantic HTML (like <button>) instead of a <div> with an onClick handler?",
        "options": {
            "A": "It looks better.",
            "B": "Semantic HTML gives us keyboard navigation and screen reader support for free.",
            "C": "Divs are slower.",
            "D": "React prefers buttons."
        },
        "correctAnswer": "B",
        "explanation": "This highlights the functional inclusion benefit (Accessibility) rather than just style or framework preference."
    },
    {
        "id": 20,
        "subject": "Error Handling",
        "question": "Your API throws a 500 error. What should the client-facing error message say?",
        "options": {
            "A": "Database Connection Failed: Error 0x553...",
            "B": "NullReferenceException at line 40.",
            "C": "Something went wrong on our end. Please try again later.",
            "D": "You sent bad data."
        },
        "correctAnswer": "C",
        "explanation": "Security practice: Never leak internal stack traces or infrastructure details to the client. Acknowledge the error without exposing internals."
    },
    {
        "id": 21,
        "subject": "CSS Architecture",
        "question": "A designer asks why you can't just use `!important` to fix a styling bug.",
        "options": {
            "A": "It is bad practice.",
            "B": "It breaks the 'Cascade' in CSS, making it nearly impossible to override that style later without more !importants.",
            "C": "It makes the file size bigger.",
            "D": "The browser ignores it."
        },
        "correctAnswer": "B",
        "explanation": "This explains the long-term maintainability cost (the 'specificity war') rather than just stating a rule."
    },
    {
        "id": 22,
        "subject": "Distributed Systems",
        "question": "What does the 'P' in CAP Theorem stand for, and why is it usually non-negotiable in distributed systems?",
        "options": {
            "A": "Performance; we always need speed.",
            "B": "Partition Tolerance; networks fail, so the system must function even if messages are lost between nodes.",
            "C": "Persistence; data must be saved.",
            "D": "Privacy; data must be secure."
        },
        "correctAnswer": "B",
        "explanation": "In a distributed system, you cannot guarantee the network is 100% reliable, so Partition Tolerance is a reality you must design around."
    },
    {
        "id": 23,
        "subject": "Interviewing",
        "question": "In a behavioral interview, you are asked about a time you failed. What is the best structure for your answer?",
        "options": {
            "A": "Say you never fail.",
            "B": "Blame the manager for unclear requirements.",
            "C": "Describe the situation, admit the mistake, explain what you learned, and how you changed your process to prevent recurrence.",
            "D": "Talk about a failure that was actually a success."
        },
        "correctAnswer": "C",
        "explanation": "This demonstrates self-reflection, accountability, and a growth mindset."
    },
    {
        "id": 24,
        "subject": "CI/CD",
        "question": "Why do we favor 'Continuous Integration' (merging often) over 'Long-lived feature branches'?",
        "options": {
            "A": "It looks like we are working harder.",
            "B": "It avoids 'Merge Hell' where conflicts become too complex to resolve safely.",
            "C": "It makes the git graph look prettier.",
            "D": "It's the only way to use Jenkins."
        },
        "correctAnswer": "B",
        "explanation": "Frequent integration minimizes the divergence between branches, reducing the risk and complexity of conflicts."
    },
    {
        "id": 25,
        "subject": "Technical Leadership",
        "question": "The team is arguing over Tabs vs Spaces for 30 minutes. As a lead, what do you do?",
        "options": {
            "A": "Let them argue; it's healthy debate.",
            "B": "Pick one arbitrarily, add a Linter/Prettier rule to the repo, and move the team to more important topics.",
            "C": "Schedule a meeting to discuss it further.",
            "D": "Use tabs because they save bytes."
        },
        "correctAnswer": "B",
        "explanation": "This is a 'bikeshedding' issue. A leader resolves low-impact/high-opinion disputes quickly using automation so the team focuses on value."
    },
    {
        "id": 26,
        "subject": "Networking",
        "question": "Explain DNS to a non-technical person.",
        "options": {
            "A": "It resolves IP addresses.",
            "B": "It's the phonebook of the internet; it turns a name like 'google.com' into the number (IP) the computer needs to call.",
            "C": "It is a Domain Name Server.",
            "D": "It connects your wifi."
        },
        "correctAnswer": "B",
        "explanation": "The 'phonebook' analogy is the gold standard for explaining the mapping of human-readable names to machine-readable addresses."
    },
    {
        "id": 27,
        "subject": "Cybersecurity",
        "question": "What is a 'Man-in-the-Middle' (MitM) attack?",
        "options": {
            "A": "When a hacker guesses your password.",
            "B": "When an attacker intercepts communication between two parties who believe they are talking directly to each other.",
            "C": "When a server crashes.",
            "D": "When someone looks over your shoulder at your screen."
        },
        "correctAnswer": "B",
        "explanation": "This describes the interception mechanism. It emphasizes the need for encryption (HTTPS) to prevent reading the intercepted data."
    },
    {
        "id": 28,
        "subject": "React Patterns",
        "question": "What is the primary problem with 'Prop Drilling'?",
        "options": {
            "A": "It makes the code run slowly.",
            "B": "It passes data through intermediate components that don't need it, coupling them to data they shouldn't care about.",
            "C": "It is not allowed in Redux.",
            "D": "It causes infinite loops."
        },
        "correctAnswer": "B",
        "explanation": "This highlights the architectural issue (coupling/maintenance) rather than just 'it's annoying'."
    },
    {
        "id": 29,
        "subject": "Data Structures",
        "question": "When would you use a Set instead of an Array?",
        "options": {
            "A": "When you need ordered elements.",
            "B": "When you need to store key-value pairs.",
            "C": "When you need to ensure all values are unique and want O(1) lookup time.",
            "D": "When you need to sort items."
        },
        "correctAnswer": "C",
        "explanation": "Uniqueness and constant-time lookup are the two distinct advantages of a Hash Set over an Array."
    },
    {
        "id": 30,
        "subject": "Estimation",
        "question": "A stakeholder asks 'How long will this take?' You are unsure. What is the best answer?",
        "options": {
            "A": "2 weeks.",
            "B": "I don't know.",
            "C": "I need to investigate the complexity first. I can give you a rough estimate by EOD tomorrow.",
            "D": "It depends."
        },
        "correctAnswer": "C",
        "explanation": "This manages expectations, commits to a timeline for the *answer* (not the work), and avoids making up a fake number."
    },
    {
        "id": 31,
        "subject": "Software Testing",
        "question": "What is the difference between Unit Testing and Integration Testing?",
        "options": {
            "A": "Unit tests check individual functions in isolation; Integration tests check how modules work together.",
            "B": "Unit tests are for backend; Integration tests are for frontend.",
            "C": "Integration tests are manual; Unit tests are automated.",
            "D": "There is no difference."
        },
        "correctAnswer": "A",
        "explanation": "This accurately defines the scope: isolation vs. interaction."
    },
    {
        "id": 32,
        "subject": "Async Programming",
        "question": "What is the risk of using `await` inside a `forEach` loop in JavaScript?",
        "options": {
            "A": "It throws a syntax error.",
            "B": "`forEach` does not wait for promises. The loop will finish before the async operations complete.",
            "C": "It runs too slowly.",
            "D": "It blocks the main thread."
        },
        "correctAnswer": "B",
        "explanation": "This is a common 'gotcha'. You should use `for...of` or `Promise.all` with `map` instead."
    },
    {
        "id": 33,
        "subject": "Documentation",
        "question": "What is the most valuable thing to include in a README?",
        "options": {
            "A": "The license text.",
            "B": "A list of contributors.",
            "C": "Instructions on how to install, run, and use the project locally.",
            "D": "The history of the project."
        },
        "correctAnswer": "C",
        "explanation": "Developer Experience (DX) is priority #1. If they can't run it, the rest doesn't matter."
    },
    {
        "id": 34,
        "subject": "Refactoring",
        "question": "When is the *wrong* time to refactor code?",
        "options": {
            "A": "When you are fixing a bug in that file.",
            "B": "When you are implementing a new feature in that file.",
            "C": "Right before a major release deadline without adequate testing time.",
            "D": "During a sprint."
        },
        "correctAnswer": "C",
        "explanation": "Refactoring carries regression risk. Doing it right before a deadline is high-risk/low-reward behavior."
    },
    {
        "id": 35,
        "subject": "Browser Mechanics",
        "question": "What is the 'Critical Rendering Path'?",
        "options": {
            "A": "The sequence of steps the browser takes to convert HTML, CSS, and JS into actual pixels on the screen.",
            "B": "The path usually taken by a user.",
            "C": "The server connection route.",
            "D": "The React Virtual DOM."
        },
        "correctAnswer": "A",
        "explanation": "Understanding this path (DOM -> CSSOM -> Render Tree -> Layout -> Paint) is essential for performance optimization."
    },
    {
        "id": 36,
        "subject": "Ethics",
        "question": "You discover a data leak that exposes user emails. Management says 'Keep it quiet.' What do you do?",
        "options": {
            "A": "Keep it quiet.",
            "B": "Post it on Twitter immediately.",
            "C": "Escalate internally to the Data Protection Officer or Legal, citing GDPR/Compliance risks.",
            "D": "Quit."
        },
        "correctAnswer": "C",
        "explanation": "This is the professional escalation path. It leverages legal compliance to force the right ethical action."
    },
    {
        "id": 37,
        "subject": "Terminal/CLI",
        "question": "What does the command `rm -rf /` do, and why is it a meme?",
        "options": {
            "A": "It restarts the computer.",
            "B": "It recursively forces the deletion of everything in the root directory, effectively wiping the system.",
            "C": "It runs a file check.",
            "D": "It refreshes the RAM."
        },
        "correctAnswer": "B",
        "explanation": "This is the ultimate destructive command in Unix. Knowing it prevents accidental catastrophe."
    },
    {
        "id": 38,
        "subject": "TypeScript",
        "question": "What is the benefit of using `unknown` over `any` in TypeScript?",
        "options": {
            "A": "They are the same.",
            "B": "`any` disables type checking; `unknown` forces you to check the type before using it (type narrowing).",
            "C": "`unknown` is faster.",
            "D": "`any` is deprecated."
        },
        "correctAnswer": "B",
        "explanation": "`unknown` is the type-safe counterpart to `any`, enforcing safety checks before operations."
    },
    {
        "id": 39,
        "subject": "Remote Work",
        "question": "You are working remotely and your internet goes down during a critical deploy. What do you do?",
        "options": {
            "A": "Wait for it to come back.",
            "B": "Immediately tether to your phone hotspot and notify the team of the connectivity issue.",
            "C": "Go to a cafe.",
            "D": "Go to sleep."
        },
        "correctAnswer": "B",
        "explanation": "Communication and redundancy. Notify first, then restore connection."
    },
    {
        "id": 40,
        "subject": "HTTP",
        "question": "What does a 401 Unauthorized status code really mean?",
        "options": {
            "A": "You don't have permission to view this resource.",
            "B": "You are not logged in (Unauthenticated).",
            "C": "The server is broken.",
            "D": "The page is missing."
        },
        "correctAnswer": "B",
        "explanation": "This is a common confusion. 401 means 'Who are you?' (Authentication). 403 Forbidden means 'I know who you are, but you can't come in' (Authorization)."
    },
    {
        "id": 41,
        "subject": "Mobile Dev",
        "question": "Why is 'Native' usually faster than 'Hybrid/WebView' apps?",
        "options": {
            "A": "Native apps communicate directly with the OS/Hardware; Hybrid apps run inside a browser bridge.",
            "B": "Apple likes Native better.",
            "C": "Native code is C++.",
            "D": "Hybrid apps require internet."
        },
        "correctAnswer": "A",
        "explanation": "The abstraction layer (bridge) in hybrid apps introduces the performance overhead."
    },
    {
        "id": 42,
        "subject": "Design Patterns",
        "question": "What is the main advantage of the 'Singleton' pattern?",
        "options": {
            "A": "It makes testing easy.",
            "B": "It ensures a class has only one instance and provides a global point of access to it.",
            "C": "It makes code faster.",
            "D": "It avoids using classes."
        },
        "correctAnswer": "B",
        "explanation": "Useful for things like Database Connections or Logging services where multiple instances are dangerous or wasteful."
    },
    {
        "id": 43,
        "subject": "Requirements Gathering",
        "question": "A stakeholder gives a vague requirement: 'Make it user-friendly.' What is your response?",
        "options": {
            "A": "Okay, I will use bright colors.",
            "B": "Who is the user, and what specific task are they struggling to complete right now?",
            "C": "I will simplify the menu.",
            "D": "Sure."
        },
        "correctAnswer": "B",
        "explanation": "This turns a subjective request into objective user personas and user stories."
    },
    {
        "id": 44,
        "subject": "Docker",
        "question": "Why does 'It works on my machine' happen, and how does Docker fix it?",
        "options": {
            "A": "Different developers have different skill levels.",
            "B": "Environment discrepancies (OS, dependencies). Docker packages the environment with the code.",
            "C": "Docker makes code run faster.",
            "D": "Docker is a virtual machine."
        },
        "correctAnswer": "B",
        "explanation": "Containerization isolates the software from the host infrastructure, ensuring consistency."
    },
    {
        "id": 45,
        "subject": "Caching",
        "question": "What is 'Cache Invalidation' and why is it hard?",
        "options": {
            "A": "It is deleting files.",
            "B": "It is knowing exactly when stored data is stale and needs to be refreshed without refreshing it too often.",
            "C": "It is compressing data.",
            "D": "It is encrypting the cache."
        },
        "correctAnswer": "B",
        "explanation": "It is one of the two 'hard things in Computer Science' because it requires perfect knowledge of data state changes."
    },
    {
        "id": 46,
        "subject": "Scalability",
        "question": "What is the difference between Vertical Scaling and Horizontal Scaling?",
        "options": {
            "A": "Vertical is adding more RAM/CPU to one machine; Horizontal is adding more machines.",
            "B": "Vertical is database; Horizontal is server.",
            "C": "Vertical is cheaper.",
            "D": "Horizontal is upgrading the CPU."
        },
        "correctAnswer": "A",
        "explanation": "Scaling Up (Vertical) vs Scaling Out (Horizontal). Horizontal allows for infinite scale but requires distributed logic."
    },
    {
        "id": 47,
        "subject": "Communication",
        "question": "You broke the build on Friday at 5 PM. What do you do?",
        "options": {
            "A": "Go home and fix it Monday.",
            "B": "Revert the commit immediately, ensure the build passes, then go home.",
            "C": "Leave a note on Slack.",
            "D": "Turn off your phone."
        },
        "correctAnswer": "B",
        "explanation": "Never leave a broken build over the weekend. Revert is the fastest path to stability."
    },
    {
        "id": 48,
        "subject": "Authentication",
        "question": "Why should you never store JWTs (JSON Web Tokens) in LocalStorage?",
        "options": {
            "A": "It's too small.",
            "B": "LocalStorage is accessible by any JavaScript running on the page, making it vulnerable to XSS attacks.",
            "C": "Cookies are faster.",
            "D": "It doesn't work on mobile."
        },
        "correctAnswer": "B",
        "explanation": "HttpOnly cookies are preferred because JS cannot read them, neutralizing XSS credential theft."
    },
    {
        "id": 49,
        "subject": "Productivity",
        "question": "What is 'Context Switching' and why is it bad for devs?",
        "options": {
            "A": "Switching between text editors.",
            "B": "The mental cost of stopping one task to start another, requiring 20+ mins to regain focus.",
            "C": "Changing teams.",
            "D": "Using two monitors."
        },
        "correctAnswer": "B",
        "explanation": "Protecting deep work time is essential because the 'ramp up' time after an interruption is expensive."
    },
    {
        "id": 50,
        "subject": "Open Source",
        "question": "You want to contribute to an Open Source project. What is the best first step?",
        "options": {
            "A": "Rewrite the whole codebase.",
            "B": "Read the CONTRIBUTING.md and look for 'Good First Issue' tags.",
            "C": "Email the maintainer.",
            "D": "Push code directly to main."
        },
        "correctAnswer": "B",
        "explanation": "Respect the maintainer's process and start small to build trust."
    },
    {
        "id": 51,
        "subject": "Career Growth",
        "question": "What is the difference between a Senior and a Junior engineer?",
        "options": {
            "A": "Seniors type faster.",
            "B": "Seniors know all the syntax.",
            "C": "Seniors handle ambiguity, design systems, and unblock others; Juniors execute defined tasks.",
            "D": "Seniors are older."
        },
        "correctAnswer": "C",
        "explanation": "Seniority is about autonomy, scope of influence, and handling the unknown, not just coding speed."
    },
    {
        "id": 52,
        "subject": "SQL",
        "question": "What is a SQL Injection attack?",
        "options": {
            "A": "Inserting too much data.",
            "B": "Inserting malicious SQL code into input fields to manipulate the backend database.",
            "C": "A database virus.",
            "D": "Forgetting to close a connection."
        },
        "correctAnswer": "B",
        "explanation": "Input sanitization or using Prepared Statements prevents the database from executing user input as code."
    },
    {
        "id": 53,
        "subject": "Networking",
        "question": "What is the difference between TCP and UDP?",
        "options": {
            "A": "TCP is reliable and ordered (email, web); UDP is fast but unreliable (streaming, gaming).",
            "B": "UDP is reliable; TCP is fast.",
            "C": "They are the same.",
            "D": "TCP is for wireless only."
        },
        "correctAnswer": "A",
        "explanation": "TCP does a 'handshake' to guarantee delivery. UDP just fires data ('fire and forget')."
    },
    {
        "id": 54,
        "subject": "Version Control",
        "question": "What is 'Git Rebase' vs 'Git Merge'?",
        "options": {
            "A": "Merge rewrites history; Rebase preserves it.",
            "B": "Merge preserves history (truth); Rebase rewrites history for a cleaner linear log.",
            "C": "Rebase is for sharing code.",
            "D": "Merge is deprecated."
        },
        "correctAnswer": "B",
        "explanation": "Teams choose rebase for a clean history, but it alters commit hashes, which can be dangerous on shared branches."
    },
    {
        "id": 55,
        "subject": "System Design",
        "question": "What is a Load Balancer?",
        "options": {
            "A": "A heavy server.",
            "B": "A device that distributes network traffic across multiple servers to prevent any single server from becoming overwhelmed.",
            "C": "A power supply unit.",
            "D": "A database tool."
        },
        "correctAnswer": "B",
        "explanation": "Essential for horizontal scaling and high availability."
    },
    {
        "id": 56,
        "subject": "UX/UI",
        "question": "What is 'Dark Mode' implementation strategy?",
        "options": {
            "A": "Invert all colors.",
            "B": "Use CSS variables (Custom Properties) to define semantic colors (bg-primary, text-main) and switch values based on media query.",
            "C": "Make two separate websites.",
            "D": "Use JavaScript to change inline styles."
        },
        "correctAnswer": "B",
        "explanation": "CSS variables allow for a maintainable, centralized theme switch without code duplication."
    },
    {
        "id": 57,
        "subject": "Architecture",
        "question": "What is 'Loose Coupling'?",
        "options": {
            "A": "Bad code.",
            "B": "Components that have little knowledge of each other, allowing them to be changed independently.",
            "C": "Components that rely heavily on each other.",
            "D": "Connecting cables loosely."
        },
        "correctAnswer": "B",
        "explanation": "High cohesion and loose coupling are the goals of good software architecture to ensure maintainability."
    },
    {
        "id": 58,
        "subject": "Python",
        "question": "What is the GIL (Global Interpreter Lock)?",
        "options": {
            "A": "A security feature.",
            "B": "A mutex that allows only one thread to hold control of the Python interpreter, limiting true parallelism.",
            "C": "A library manager.",
            "D": "A database lock."
        },
        "correctAnswer": "B",
        "explanation": "This is why Python multi-threading doesn't improve performance for CPU-bound tasks (multiprocessing is used instead)."
    },
    {
        "id": 59,
        "subject": "Communication",
        "question": "You disagree with the CTO's technical choice. How do you voice it?",
        "options": {
            "A": "Gossip to coworkers.",
            "B": "Stay silent.",
            "C": "Write a document outlining the pros/cons and risks of their choice vs alternatives, and discuss it in private.",
            "D": "Argue in the all-hands meeting."
        },
        "correctAnswer": "C",
        "explanation": "'Disagree and commit' is the goal, but first, provide a data-driven, respectful counter-argument."
    },
    {
        "id": 60,
        "subject": "Web Standards",
        "question": "What is the difference between LocalStorage, SessionStorage, and Cookies?",
        "options": {
            "A": "Cookies are sent to the server with every request; LocalStorage persists until deleted; SessionStorage clears when the tab closes.",
            "B": "They are all the same.",
            "C": "LocalStorage is sent to the server.",
            "D": "Cookies are larger."
        },
        "correctAnswer": "A",
        "explanation": "Understanding the data lifecycle and transmission overhead is key for storage decisions."
    },
    {
        "id": 61,
        "subject": "DevOps",
        "question": "What is 'Infrastructure as Code' (IaC)?",
        "options": {
            "A": "Writing code to build apps.",
            "B": "Managing servers and networks through definition files (like Terraform) rather than manual configuration.",
            "C": "Putting servers in the office.",
            "D": "Coding in the cloud."
        },
        "correctAnswer": "B",
        "explanation": "IaC allows you to version control your infrastructure, making it reproducible and reducing human error."
    },
    {
        "id": 62,
        "subject": "Testing",
        "question": "What is 'Mocking' in tests?",
        "options": {
            "A": "Making fun of the code.",
            "B": "Simulating the behavior of real objects (like a database or API) to test a component in isolation.",
            "C": "Running tests in production.",
            "D": "Writing fake tests."
        },
        "correctAnswer": "B",
        "explanation": "Mocks ensure your unit test doesn't fail just because the network is down."
    },
    {
        "id": 63,
        "subject": "Algorithm Analysis",
        "question": "What does Big O notation describe?",
        "options": {
            "A": "How fast the code runs in seconds.",
            "B": "How the runtime/space requirements grow as the input size grows (Worst Case).",
            "C": "How many lines of code.",
            "D": "How difficult the code is."
        },
        "correctAnswer": "B",
        "explanation": "It's about the *rate of growth* (scalability), not the absolute speed."
    },
    {
        "id": 64,
        "subject": "Security",
        "question": "What is CORS (Cross-Origin Resource Sharing)?",
        "options": {
            "A": "A virus.",
            "B": "A browser security feature that restricts web pages from making requests to a different domain than the one that served the page.",
            "C": "A database query.",
            "D": "A style sheet."
        },
        "correctAnswer": "B",
        "explanation": "Developers often hate CORS errors, but it prevents malicious sites from stealing your data."
    },
    {
        "id": 65,
        "subject": "Functional Programming",
        "question": "What is a 'Pure Function'?",
        "options": {
            "A": "A function with no bugs.",
            "B": "A function that always returns the same output for the same input and has no side effects.",
            "C": "A function that uses `this`.",
            "D": "A short function."
        },
        "correctAnswer": "B",
        "explanation": "Pure functions are predictable and easy to test."
    },
    {
        "id": 66,
        "subject": "Linux",
        "question": "What does `chmod 777` do?",
        "options": {
            "A": "Deletes the file.",
            "B": "Gives Read, Write, and Execute permissions to Everyone (User, Group, Others).",
            "C": "Locks the file.",
            "D": "Hides the file."
        },
        "correctAnswer": "B",
        "explanation": "It is often used as a lazy fix for permission errors but is a major security risk."
    },
    {
        "id": 67,
        "subject": "Mobile Dev",
        "question": "What is 'Responsive Design'?",
        "options": {
            "A": "Design that responds to voice.",
            "B": "Designing a UI that adapts its layout to different screen sizes (Mobile, Tablet, Desktop).",
            "C": "Fast design.",
            "D": "Using React Native."
        },
        "correctAnswer": "B",
        "explanation": "Usually achieved via CSS Media Queries."
    },
    {
        "id": 68,
        "subject": "Product Management",
        "question": "What is an MVP (Minimum Viable Product)?",
        "options": {
            "A": "The best product.",
            "B": "The version of a new product with just enough features to satisfy early customers and provide feedback.",
            "C": "A prototype that doesn't work.",
            "D": "The most valuable player."
        },
        "correctAnswer": "B",
        "explanation": "The goal is learning/validation with minimal effort, not perfection."
    },
    {
        "id": 69,
        "subject": "Database",
        "question": "What is an Index in a database?",
        "options": {
            "A": "The table of contents.",
            "B": "A data structure that improves the speed of data retrieval operations at the cost of additional writes/storage.",
            "C": "The primary key.",
            "D": "A list of users."
        },
        "correctAnswer": "B",
        "explanation": "Indexes make reads fast (lookup) but writes slow (updating the index)."
    },
    {
        "id": 70,
        "subject": "Soft Skills",
        "question": "A coworker is constantly interrupting you in meetings. How do you handle it?",
        "options": {
            "A": "Shout at them.",
            "B": "Stop going to meetings.",
            "C": "Pull them aside privately and say: 'I feel undervalued when I'm interrupted. Can you let me finish my thought next time?'",
            "D": "Interrupt them back."
        },
        "correctAnswer": "C",
        "explanation": "Use 'I' statements to express impact without being aggressive."
    },
    {
        "id": 71,
        "subject": "Web Performance",
        "question": "What is 'Lazy Loading'?",
        "options": {
            "A": "Code that runs slowly.",
            "B": "Deferring the loading of non-critical resources (images, scripts) until they are needed (e.g., when scrolling into view).",
            "C": "Lazy developers.",
            "D": "Server caching."
        },
        "correctAnswer": "B",
        "explanation": "This improves initial load time and saves bandwidth."
    },
    {
        "id": 72,
        "subject": "Graph Theory",
        "question": "What is the difference between a Tree and a Graph?",
        "options": {
            "A": "A Tree has no cycles; a Graph can have cycles.",
            "B": "A Graph is always directed.",
            "C": "A Tree is for UI; Graph is for data.",
            "D": "They are the same."
        },
        "correctAnswer": "A",
        "explanation": "A Tree is a specific type of Graph (connected, acyclic)."
    },
    {
        "id": 73,
        "subject": "HTTP",
        "question": "What is HTTPS and how does it differ from HTTP?",
        "options": {
            "A": "It's faster.",
            "B": "It uses TLS/SSL to encrypt the communication channel, preventing eavesdropping.",
            "C": "It is for payments only.",
            "D": "It uses port 80."
        },
        "correctAnswer": "B",
        "explanation": "HTTP is plaintext (readable by anyone on the wifi); HTTPS is encrypted."
    },
    {
        "id": 74,
        "subject": "Career",
        "question": "What is 'Imposter Syndrome'?",
        "options": {
            "A": "Being unqualified.",
            "B": "The internal psychological experience of feeling like a fraud despite evidence of your competence.",
            "C": "Lying on a resume.",
            "D": "Being a junior dev."
        },
        "correctAnswer": "B",
        "explanation": "Very common in tech. Recognizing it helps manage it."
    },
    {
        "id": 75,
        "subject": "Git",
        "question": "What is a 'Merge Conflict'?",
        "options": {
            "A": "When git crashes.",
            "B": "When two branches have changed the same line of a file, and git cannot automatically determine which one is correct.",
            "C": "When the server is down.",
            "D": "When you have too many branches."
        },
        "correctAnswer": "B",
        "explanation": "Requires human intervention to decide the final code."
    },
    {
        "id": 76,
        "subject": "API",
        "question": "What is GraphQL?",
        "options": {
            "A": "A graph database.",
            "B": "A query language for APIs that allows the client to request exactly the data it needs, avoiding over-fetching.",
            "C": "A charting library.",
            "D": "A SQL replacement."
        },
        "correctAnswer": "B",
        "explanation": "REST sends fixed data; GraphQL lets you 'order' specific fields."
    },
    {
        "id": 77,
        "subject": "Clean Code",
        "question": "What does DRY stand for?",
        "options": {
            "A": "Do Repeat Yourself.",
            "B": "Don't Repeat Yourself.",
            "C": "Data Reliability Yield.",
            "D": "Don't Return Yield."
        },
        "correctAnswer": "B",
        "explanation": "Every piece of knowledge must have a single, unambiguous representation within a system."
    },
    {
        "id": 78,
        "subject": "Architecture",
        "question": "What is a 'Monolith'?",
        "options": {
            "A": "A stone statue.",
            "B": "A software architecture where the UI, logic, and data access code are all in a single codebase/deployable unit.",
            "C": "A database.",
            "D": "A single server."
        },
        "correctAnswer": "B",
        "explanation": "Easy to start, hard to scale (people and tech) later."
    },
    {
        "id": 79,
        "subject": "JavaScript",
        "question": "What is the Event Loop?",
        "options": {
            "A": "A while loop.",
            "B": "The mechanism that allows JavaScript (single-threaded) to perform non-blocking I/O operations by offloading operations to the browser/system kernel.",
            "C": "An event listener.",
            "D": "A bug."
        },
        "correctAnswer": "B",
        "explanation": "This is how JS handles async code without freezing the UI."
    },
    {
        "id": 80,
        "subject": "Security",
        "question": "What is Two-Factor Authentication (2FA)?",
        "options": {
            "A": "Two passwords.",
            "B": "Something you know (password) + Something you have (phone/token).",
            "C": "Logging in twice.",
            "D": "Using email and username."
        },
        "correctAnswer": "B",
        "explanation": "Drastically increases security because stealing a password isn't enough."
    },
    {
        "id": 81,
        "subject": "Testing",
        "question": "What is TDD (Test Driven Development)?",
        "options": {
            "A": "Testing after coding.",
            "B": "Writing the test fails first, then writing just enough code to pass the test, then refactoring.",
            "C": "Testing the database.",
            "D": "Automated QA."
        },
        "correctAnswer": "B",
        "explanation": "Red -> Green -> Refactor cycle."
    },
    {
        "id": 82,
        "subject": "Networking",
        "question": "What is localhost?",
        "options": {
            "A": "The internet.",
            "B": "The computer you are currently using (IP 127.0.0.1).",
            "C": "A server in the cloud.",
            "D": "A hosting provider."
        },
        "correctAnswer": "B",
        "explanation": "Home, sweet home."
    },
    {
        "id": 83,
        "subject": "Browser",
        "question": "What are Cookies used for?",
        "options": {
            "A": "Eating.",
            "B": "Storing small pieces of data (like session IDs) on the client side to track state.",
            "C": "Running scripts.",
            "D": "Styling pages."
        },
        "correctAnswer": "B",
        "explanation": "HTTP is stateless; cookies allow state (like 'I am logged in') to persist."
    },
    {
        "id": 84,
        "subject": "Communication",
        "question": "A designer gives you a design that is technically impossible. What do you say?",
        "options": {
            "A": "This is stupid.",
            "B": "No.",
            "C": "I can't do this exactly as drawn because of [X constraint], but here is a similar alternative that is feasible.",
            "D": "I'll try (and fail)."
        },
        "correctAnswer": "C",
        "explanation": "Offer solutions, don't just state problems. Collaborate on the compromise."
    },
    {
        "id": 85,
        "subject": "Cloud",
        "question": "What is S3 (Simple Storage Service)?",
        "options": {
            "A": "A database.",
            "B": "Object storage for files (images, backups, logs).",
            "C": "A virtual machine.",
            "D": "A CDN."
        },
        "correctAnswer": "B",
        "explanation": "It stores 'blobs' (objects), not rows of data."
    },
    {
        "id": 86,
        "subject": "Git",
        "question": "What is a Pull Request (PR)?",
        "options": {
            "A": "Downloading code.",
            "B": "A request to merge your changes into the main branch, usually triggering a code review.",
            "C": "Asking for help.",
            "D": "Updating your computer."
        },
        "correctAnswer": "B",
        "explanation": "The core of collaborative coding workflows."
    },
    {
        "id": 87,
        "subject": "Programming",
        "question": "What is an IDE?",
        "options": {
            "A": "I Don't Eat.",
            "B": "Integrated Development Environment (like VS Code, IntelliJ) that provides tools for coding.",
            "C": "Internet Data Exchange.",
            "D": "Image Design Editor."
        },
        "correctAnswer": "B",
        "explanation": "Combines editor, debugger, and terminal."
    },
    {
        "id": 88,
        "subject": "Security",
        "question": "What is Hashing?",
        "options": {
            "A": "Encryption.",
            "B": "One-way transformation of data into a fixed string. You cannot get the original data back.",
            "C": "Compression.",
            "D": "Scrambling eggs."
        },
        "correctAnswer": "B",
        "explanation": "Encryption is reversible (with a key); Hashing is not. This is why we hash passwords."
    },
    {
        "id": 89,
        "subject": "Agile",
        "question": "What is a 'Sprint'?",
        "options": {
            "A": "Running fast.",
            "B": "A set period of time (usually 2 weeks) during which specific work has to be completed.",
            "C": "A meeting.",
            "D": "A type of code."
        },
        "correctAnswer": "B",
        "explanation": "The basic unit of time in Scrum."
    },
    {
        "id": 90,
        "subject": "API",
        "question": "What is JSON?",
        "options": {
            "A": "JavaScript Object Notation - a lightweight data interchange format.",
            "B": "Java Standard Object Network.",
            "C": "Just Some Other Name.",
            "D": "A database."
        },
        "correctAnswer": "A",
        "explanation": "The standard language of modern APIs."
    },
    {
        "id": 91,
        "subject": "Frontend",
        "question": "What is the DOM?",
        "options": {
            "A": "Document Object Model - the browser's representation of the page structure.",
            "B": "Data Object Mode.",
            "C": "Domain of Master.",
            "D": "A database."
        },
        "correctAnswer": "A",
        "explanation": "It's the tree of objects that JavaScript interacts with to change the UI."
    },
    {
        "id": 92,
        "subject": "Backend",
        "question": "What is an ORM (Object Relational Mapper)?",
        "options": {
            "A": "A database driver.",
            "B": "A library that lets you interact with your database using code objects instead of writing raw SQL.",
            "C": "A server.",
            "D": "A type of SQL."
        },
        "correctAnswer": "B",
        "explanation": "E.g., Prisma, Hibernate, TypeORM. Increases dev speed but hides complexity."
    },
    {
        "id": 93,
        "subject": "Networking",
        "question": "What is an IP Address?",
        "options": {
            "A": "A physical address.",
            "B": "A unique string of numbers separated by periods that identifies each computer using the Internet Protocol.",
            "C": "A website name.",
            "D": "A password."
        },
        "correctAnswer": "B",
        "explanation": "The digital address for routing data."
    },
    {
        "id": 94,
        "subject": "Software Principles",
        "question": "What is YAGNI?",
        "options": {
            "A": "You Ain't Gonna Need It.",
            "B": "You Are Going Now Indeed.",
            "C": "Yield All Good New Ideas.",
            "D": "Yet Another Great New Interface."
        },
        "correctAnswer": "A",
        "explanation": "Don't build features for the future that you don't need yet. Focus on the now."
    },
    {
        "id": 95,
        "subject": "Mobile",
        "question": "What is an SDK?",
        "options": {
            "A": "Software Development Kit.",
            "B": "Source Data Key.",
            "C": "System Design Kit.",
            "D": "Safe Data Keeper."
        },
        "correctAnswer": "A",
        "explanation": "A collection of tools to build software for a specific platform."
    },
    {
        "id": 96,
        "subject": "Cloud",
        "question": "What is a Virtual Machine (VM)?",
        "options": {
            "A": "A fake computer.",
            "B": "An emulation of a computer system that runs an OS like a physical computer.",
            "C": "A robot.",
            "D": "A video game."
        },
        "correctAnswer": "B",
        "explanation": "Allows multiple OSs to run on one physical server."
    },
    {
        "id": 97,
        "subject": "Coding",
        "question": "What is a 'Bug'?",
        "options": {
            "A": "An insect.",
            "B": "An error, flaw, or fault in a computer program that causes it to produce an incorrect result.",
            "C": "A feature.",
            "D": "A virus."
        },
        "correctAnswer": "B",
        "explanation": "The term comes from a literal moth found in an early computer."
    },
    {
        "id": 98,
        "subject": "Communication",
        "question": "How do you handle a code review where the reviewer is being rude?",
        "options": {
            "A": "Attack them back.",
            "B": "Ignore the review.",
            "C": "Address the behavior: 'I appreciate the feedback, but the tone feels personal. Can we focus on the code?'",
            "D": "Cry."
        },
        "correctAnswer": "C",
        "explanation": "Set boundaries professionally."
    },
    {
        "id": 99,
        "subject": "DevOps",
        "question": "What is 'Uptime'?",
        "options": {
            "A": "Time you are awake.",
            "B": "The measure of time a machine/system has been working and available.",
            "C": "Time to boot up.",
            "D": "Time spent coding."
        },
        "correctAnswer": "B",
        "explanation": "Usually measured in 'nines' (e.g., 99.9% uptime)."
    },
    {
        "id": 100,
        "subject": "General",
        "question": "What is Open Source Software?",
        "options": {
            "A": "Software that costs money.",
            "B": "Software with source code that anyone can inspect, modify, and enhance.",
            "C": "Software that is insecure.",
            "D": "Software without a license."
        },
        "correctAnswer": "B",
        "explanation": "The foundation of the modern web (Linux, React, Python, etc.)."
    },
    {
        "id": 101,
        "subject": "System Design",
        "question": "A stakeholder asks: 'Why can't we just add more servers to the database to make it faster?' How do you explain the limitation?",
        "options": {
            "A": "We can, but it costs too much money.",
            "B": "Databases are hard to scale horizontally (adding machines) because keeping data consistent across many machines is complex (CAP theorem). We usually scale them vertically (bigger machine) first.",
            "C": "Servers are sold out.",
            "D": "The database doesn't support it."
        },
        "correctAnswer": "B",
        "explanation": "This explains the fundamental difference between stateless app servers (easy to add) and stateful databases (hard to coordinate)."
    },
    {
        "id": 102,
        "subject": "Soft Skills",
        "question": "You realize you will miss a deadline promised to a client. When is the best time to tell them?",
        "options": {
            "A": "After the deadline passes, so you have a solution ready.",
            "B": "The moment you realize the risk, even if you don't have a new date yet.",
            "C": "On the day of the deadline.",
            "D": "Never, just work weekends to hide it."
        },
        "correctAnswer": "B",
        "explanation": "Bad news must travel fast. Early communication gives the stakeholder time to adjust their own plans (manage expectations)."
    },
    {
        "id": 103,
        "subject": "React Performance",
        "question": "When should you use `useMemo`?",
        "options": {
            "A": "For every variable.",
            "B": "To cache expensive calculations so they don't re-run on every render unless dependencies change.",
            "C": "To store state.",
            "D": "To make API calls."
        },
        "correctAnswer": "B",
        "explanation": "Premature optimization is bad. `useMemo` has overhead; only use it for computationally heavy operations or referential equality."
    },
    {
        "id": 104,
        "subject": "Security",
        "question": "What is XSS (Cross-Site Scripting)?",
        "options": {
            "A": "When a hacker injects malicious JavaScript into your webpage that runs in other users' browsers.",
            "B": "When the CSS is broken.",
            "C": "When a server hacks another server.",
            "D": "A database error."
        },
        "correctAnswer": "A",
        "explanation": "This allows attackers to steal cookies, session tokens, or deface websites."
    },
    {
        "id": 105,
        "subject": "Project Management",
        "question": "What is 'Brooks's Law'?",
        "options": {
            "A": "Adding manpower to a late software project makes it later.",
            "B": "Software is always late.",
            "C": "More developers = Faster delivery.",
            "D": "Code expands to fill the memory available."
        },
        "correctAnswer": "A",
        "explanation": "New people require onboarding, which consumes the time of the existing productive people, slowing net velocity initially."
    },
    {
        "id": 106,
        "subject": "Git Strategy",
        "question": "What is 'Cherry-picking' in Git?",
        "options": {
            "A": "Selecting the best developers.",
            "B": "Applying the changes introduced by some existing commits to a different branch.",
            "C": "Deleting a branch.",
            "D": "Picking a fruit."
        },
        "correctAnswer": "B",
        "explanation": "Useful when you want to port a specific hotfix from `main` to a release branch without merging all of `main`."
    },
    {
        "id": 107,
        "subject": "API Design",
        "question": "What does 'Idempotency' mean in an API context?",
        "options": {
            "A": "The API is fast.",
            "B": "Making the same request multiple times has the same effect as making it once.",
            "C": "The API is secure.",
            "D": "The API returns ID numbers."
        },
        "correctAnswer": "B",
        "explanation": "Crucial for payment processing. Charging $10 twice should only result in one $10 charge if the request is idempotent."
    },
    {
        "id": 108,
        "subject": "Testing",
        "question": "What is 'Regression Testing'?",
        "options": {
            "A": "Testing code that goes backwards.",
            "B": "Verifying that recent code changes haven't broken existing features.",
            "C": "Testing user logins.",
            "D": "Manual testing."
        },
        "correctAnswer": "B",
        "explanation": "Ensures that 'fixing bug A' didn't create 'bug B'."
    },
    {
        "id": 109,
        "subject": "CSS",
        "question": "What is the Box Model?",
        "options": {
            "A": "A flexbox container.",
            "B": "The foundation of layout: Content + Padding + Border + Margin.",
            "C": "A grid system.",
            "D": "A way to package code."
        },
        "correctAnswer": "B",
        "explanation": "Understanding how these four layers add up to the total element size is essential for CSS layout."
    },
    {
        "id": 110,
        "subject": "Leadership",
        "question": "A junior engineer deletes the production database. How do you react?",
        "options": {
            "A": "Fire them.",
            "B": "Restore the backup, then fix the system permissions so a junior can't do that again (Systemic Fix).",
            "C": "Yell at them in public.",
            "D": "Hide it."
        },
        "correctAnswer": "B",
        "explanation": "This is a failure of guardrails, not the individual. Restrict permissions and automate safety."
    },
    {
        "id": 111,
        "subject": "Database",
        "question": "What is the difference between SQL (Relational) and NoSQL (Document)?",
        "options": {
            "A": "SQL is structured/schema-based (Tables); NoSQL is flexible/schema-less (JSON/Documents).",
            "B": "SQL is faster.",
            "C": "NoSQL is older.",
            "D": "They are the same."
        },
        "correctAnswer": "A",
        "explanation": "Use SQL for rigid, related data (finance). Use NoSQL for unstructured, rapid-growth data (social media feeds)."
    },
    {
        "id": 112,
        "subject": "JavaScript",
        "question": "What is 'Hoisting'?",
        "options": {
            "A": "Lifting a server.",
            "B": "JavaScript's default behavior of moving declarations to the top of the current scope before code execution.",
            "C": "A CSS animation.",
            "D": "Uploading files."
        },
        "correctAnswer": "B",
        "explanation": "This allows you to use functions before you declare them in the code."
    },
    {
        "id": 113,
        "subject": "Cloud Architecture",
        "question": "What is a 'Circuit Breaker' pattern?",
        "options": {
            "A": "A way to stop electricity.",
            "B": "A design pattern that detects failures and encapsulates the logic of preventing a failure from constantly recurring (stopping cascading failures).",
            "C": "A firewall.",
            "D": "A load balancer."
        },
        "correctAnswer": "B",
        "explanation": "If Service A is down, Service B should stop calling it immediately to prevent Service B from crashing too."
    },
    {
        "id": 114,
        "subject": "Communication",
        "question": "How do you say 'No' to a feature request from a CEO without saying 'No'?",
        "options": {
            "A": "We can do that, but it will delay the Launch by 2 weeks. Is that an acceptable trade-off?",
            "B": "That's a bad idea.",
            "C": "Maybe later.",
            "D": "I am too busy."
        },
        "correctAnswer": "A",
        "explanation": "Present the cost/consequence. Let them make the business decision based on the constraints you provided."
    },
    {
        "id": 115,
        "subject": "Algorithms",
        "question": "What is a Stack vs a Queue?",
        "options": {
            "A": "Stack is LIFO (Last In First Out); Queue is FIFO (First In First Out).",
            "B": "Stack is FIFO; Queue is LIFO.",
            "C": "Stack is for memory; Queue is for disk.",
            "D": "They are the same."
        },
        "correctAnswer": "A",
        "explanation": "Stack = Plate dispenser. Queue = Line at a store."
    },
    {
        "id": 116,
        "subject": "Web Security",
        "question": "What is CSRF (Cross-Site Request Forgery)?",
        "options": {
            "A": "Forging a signature.",
            "B": "An attack that tricks the victim into submitting a malicious request (like money transfer) to a web app they are authenticated in.",
            "C": "Stealing a password.",
            "D": "Hacking wifi."
        },
        "correctAnswer": "B",
        "explanation": "It abuses the trust a browser has in the user's cookies. Prevented with Anti-CSRF tokens."
    },
    {
        "id": 117,
        "subject": "DevOps",
        "question": "What is Blue/Green Deployment?",
        "options": {
            "A": "Using colors.",
            "B": "Running two identical environments. One is live (Blue). You deploy to the idle one (Green), test it, then switch traffic.",
            "C": "Deploying only on Mondays.",
            "D": "A testing strategy."
        },
        "correctAnswer": "B",
        "explanation": "Allows zero-downtime deployments and instant rollback (just switch traffic back to Blue)."
    },
    {
        "id": 118,
        "subject": "TypeScript",
        "question": "What is an Interface?",
        "options": {
            "A": "A UI component.",
            "B": "A contract that defines the shape of an object (properties and types) without implementing behavior.",
            "C": "A class.",
            "D": "A variable."
        },
        "correctAnswer": "B",
        "explanation": "Interfaces enforce structure. 'This object MUST have a name (string) and age (number).'"
    },
    {
        "id": 119,
        "subject": "Code Quality",
        "question": "What is 'Dead Code'?",
        "options": {
            "A": "Code that doesn't run fast.",
            "B": "Code that is never executed or used in the application.",
            "C": "Code written by a developer who left.",
            "D": "Comments."
        },
        "correctAnswer": "B",
        "explanation": "It bloats the codebase and confuses readers. It should be deleted."
    },
    {
        "id": 120,
        "subject": "Career",
        "question": "You feel burnt out. What is the professional step?",
        "options": {
            "A": "Quit without notice.",
            "B": "Stop working but stay online.",
            "C": "Speak to your manager about workload management and take PTO.",
            "D": "Work harder."
        },
        "correctAnswer": "C",
        "explanation": "Burnout is a health/capacity issue. Communicating it allows the team to rebalance load."
    },
    {
        "id": 121,
        "subject": "Mobile",
        "question": "What is the App Store Review Process?",
        "options": {
            "A": "Automated checking.",
            "B": "Apple/Google manual and automated review of your app against guidelines before it can be published.",
            "C": "User reviews.",
            "D": "Testing code."
        },
        "correctAnswer": "B",
        "explanation": "A critical release bottleneck. You cannot deploy mobile updates instantly like web updates."
    },
    {
        "id": 122,
        "subject": "Networking",
        "question": "What is Latency vs Bandwidth?",
        "options": {
            "A": "Latency is speed; Bandwidth is size.",
            "B": "Latency is the delay (time to travel); Bandwidth is the capacity (amount of data per second).",
            "C": "They are the same.",
            "D": "Latency is for gaming."
        },
        "correctAnswer": "B",
        "explanation": "A wide pipe (high bandwidth) can still have a long travel time (high latency)."
    },
    {
        "id": 123,
        "subject": "React",
        "question": "What is the Virtual DOM?",
        "options": {
            "A": "A fake browser.",
            "B": "A lightweight copy of the real DOM. React updates this first, compares changes (diffing), and efficiently updates the real DOM.",
            "C": "A database.",
            "D": "A VR headset."
        },
        "correctAnswer": "B",
        "explanation": "Direct DOM manipulation is slow. The Virtual DOM optimizes this by batching updates."
    },
    {
        "id": 124,
        "subject": "System Design",
        "question": "What is Horizontal Scaling vs Vertical Scaling?",
        "options": {
            "A": "Horizontal = More machines; Vertical = Bigger machine.",
            "B": "Horizontal = Bigger machine; Vertical = More machines.",
            "C": "Horizontal = Database; Vertical = API.",
            "D": "Vertical is better."
        },
        "correctAnswer": "A",
        "explanation": "Horizontal (Scale Out) is preferred for modern cloud systems. Vertical (Scale Up) hits a hardware limit."
    },
    {
        "id": 125,
        "subject": "Conflict Resolution",
        "question": "Two seniors have a 'Religious War' (e.g., VIM vs Emacs) in the team chat. It's distracting. You are the Lead. What do you do?",
        "options": {
            "A": "Join the debate.",
            "B": "Delete the channel.",
            "C": "Intervene politely: 'Let's take this to DM or lunch. We have a release to focus on.'",
            "D": "Report them to HR."
        },
        "correctAnswer": "C",
        "explanation": "De-escalate and redirect focus to work without stifling culture completely."
    },
    {
        "id": 126,
        "subject": "Operating Systems",
        "question": "What is a Thread?",
        "options": {
            "A": "A piece of string.",
            "B": "The smallest sequence of programmed instructions that can be managed independently by a scheduler.",
            "C": "A complete program.",
            "D": "A CPU core."
        },
        "correctAnswer": "B",
        "explanation": "A Process contains one or more Threads. Threads share memory; Processes do not."
    },
    {
        "id": 127,
        "subject": "Python",
        "question": "What is a Decorator?",
        "options": {
            "A": "A design pattern.",
            "B": "A function that takes another function and extends its behavior without explicitly modifying it (`@wrapper`).",
            "C": "A CSS style.",
            "D": "A comment."
        },
        "correctAnswer": "B",
        "explanation": "Commonly used for logging, access control, or caching."
    },
    {
        "id": 128,
        "subject": "Encryption",
        "question": "What is Symmetric vs Asymmetric Encryption?",
        "options": {
            "A": "Symmetric uses the same key for encryption/decryption. Asymmetric uses a public key to encrypt and private key to decrypt.",
            "B": "Symmetric is slower.",
            "C": "Asymmetric is for databases.",
            "D": "Symmetric uses two keys."
        },
        "correctAnswer": "A",
        "explanation": "Symmetric = Fast, key sharing is risky. Asymmetric (RSA) = Secure key exchange, slower."
    },
    {
        "id": 129,
        "subject": "Microservices",
        "question": "What is the main disadvantage of Microservices?",
        "options": {
            "A": "They are too fast.",
            "B": "Complexity. You now have network latency, distributed data consistency issues, and deployment orchestration challenges.",
            "C": "They are old technology.",
            "D": "They use too much RAM."
        },
        "correctAnswer": "B",
        "explanation": "Don't use microservices just because they are trendy. The operational overhead is massive."
    },
    {
        "id": 130,
        "subject": "Resume/Interview",
        "question": "What is the STAR method?",
        "options": {
            "A": "A coding pattern.",
            "B": "Situation, Task, Action, Result - a structure for answering behavioral interview questions.",
            "C": "Start, Test, Act, Retry.",
            "D": "A constellation."
        },
        "correctAnswer": "B",
        "explanation": "Focus heavily on the 'Action' (what YOU did) and 'Result' (the metric/outcome)."
    },
    {
        "id": 131,
        "subject": "HTTP",
        "question": "What is a 502 Bad Gateway?",
        "options": {
            "A": "Server error.",
            "B": "The server, while acting as a gateway/proxy, received an invalid response from the upstream server.",
            "C": "Not Found.",
            "D": "Permission Denied."
        },
        "correctAnswer": "B",
        "explanation": "Usually means the Load Balancer (Nginx) can't talk to the App Server (Node/Python)."
    },
    {
        "id": 132,
        "subject": "Design Patterns",
        "question": "What is the Observer Pattern?",
        "options": {
            "A": "Looking at code.",
            "B": "A subscription mechanism to notify multiple objects about any events that happen to the object they are observing.",
            "C": "A database trigger.",
            "D": "A singleton."
        },
        "correctAnswer": "B",
        "explanation": "The basis of event listeners and RxJS."
    },
    {
        "id": 133,
        "subject": "Code Review",
        "question": "A PR is huge (1000+ lines). What do you do?",
        "options": {
            "A": "Approve it without reading.",
            "B": "Reject it and ask the author to split it into smaller, logical PRs.",
            "C": "Spend 5 hours reviewing it.",
            "D": "Ask ChatGPT to review it."
        },
        "correctAnswer": "B",
        "explanation": "Large PRs hide bugs. Review fatigue sets in. Smaller PRs are safer and faster to review."
    },
    {
        "id": 134,
        "subject": "Browser Storage",
        "question": "When does SessionStorage expire?",
        "options": {
            "A": "Never.",
            "B": "When the page session ends (tab/window is closed).",
            "C": "After 24 hours.",
            "D": "When the computer restarts."
        },
        "correctAnswer": "B",
        "explanation": "Unlike LocalStorage (persistent), SessionStorage is tied to the window lifespan."
    },
    {
        "id": 135,
        "subject": "Distributed Systems",
        "question": "What is 'Eventual Consistency'?",
        "options": {
            "A": "The system is unreliable.",
            "B": "Updates will propagate through the system and all nodes will eventually see the same data, but not immediately.",
            "C": "Data is lost.",
            "D": "The database is slow."
        },
        "correctAnswer": "B",
        "explanation": "Common in NoSQL (Cassandra/DynamoDB). We trade immediate consistency for high availability."
    },
    {
        "id": 136,
        "subject": "CSS",
        "question": "What does `z-index` do?",
        "options": {
            "A": "Zooms the page.",
            "B": "Controls the vertical stacking order of elements (which one is on top).",
            "C": "Changes the font size.",
            "D": "Aligns text."
        },
        "correctAnswer": "B",
        "explanation": "Only works on positioned elements (relative, absolute, fixed, sticky)."
    },
    {
        "id": 137,
        "subject": "Linux/Unix",
        "question": "What is `grep` used for?",
        "options": {
            "A": "Installing packages.",
            "B": "Searching plain-text data sets for lines that match a regular expression.",
            "C": "Deleting files.",
            "D": "Copying files."
        },
        "correctAnswer": "B",
        "explanation": "Essential for searching logs. `grep 'error' /var/log/syslog`."
    },
    {
        "id": 138,
        "subject": "Software Engineering",
        "question": "What is 'Rubber Ducking'?",
        "options": {
            "A": "Taking a bath.",
            "B": "Explaining your code line-by-line to an inanimate object (or coworker) to find a bug.",
            "C": "Writing bad code.",
            "D": "Using a flexible layout."
        },
        "correctAnswer": "B",
        "explanation": "The act of speaking the problem aloud forces your brain to slow down, often revealing the solution."
    },
    {
        "id": 139,
        "subject": "API",
        "question": "What is a Webhook?",
        "options": {
            "A": "A fishing tool.",
            "B": "A way for an app to provide other applications with real-time information (Push) rather than polling.",
            "C": "A database connection.",
            "D": "A REST endpoint."
        },
        "correctAnswer": "B",
        "explanation": "Don't ask 'Is it done yet?' every second (Polling). Let the server tell you 'It's done' (Webhook)."
    },
    {
        "id": 140,
        "subject": "Negotiation",
        "question": "Product adds scope creep mid-sprint. You answer:",
        "options": {
            "A": "Sure.",
            "B": "We can add this, but we must remove something of equal size from the current sprint to finish on time.",
            "C": "No way.",
            "D": "I'll do it tonight."
        },
        "correctAnswer": "B",
        "explanation": "Zero-sum game. Maintain the balance of velocity vs scope."
    },
    {
        "id": 141,
        "subject": "Security",
        "question": "Why use 'Prepared Statements' in SQL?",
        "options": {
            "A": "They are faster.",
            "B": "They prevent SQL Injection by separating the query structure from the data.",
            "C": "They are easier to write.",
            "D": "They use less memory."
        },
        "correctAnswer": "B",
        "explanation": "The database treats user input as data, never as executable code."
    },
    {
        "id": 142,
        "subject": "Git",
        "question": " What is `git stash`?",
        "options": {
            "A": "Deleting code.",
            "B": "Temporarily shelving (saving) changes so you can work on a different branch without committing.",
            "C": "Pushing to remote.",
            "D": "Hiding secrets."
        },
        "correctAnswer": "B",
        "explanation": "Great for 'Wait, I need to fix a bug on main quickly' moments."
    },
    {
        "id": 143,
        "subject": "Data Structures",
        "question": "What is a Linked List?",
        "options": {
            "A": "A URL.",
            "B": "A linear data structure where elements are not stored in contiguous memory locations; each element points to the next.",
            "C": "An array.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "Great for insertion/deletion, bad for random access (you have to traverse from the start)."
    },
    {
        "id": 144,
        "subject": "DevOps",
        "question": "What is 'Containerization' (Docker)?",
        "options": {
            "A": "Shipping boxes.",
            "B": "Bundling code + libraries + dependencies into a single lightweight unit that runs anywhere.",
            "C": "Virtual Machines.",
            "D": "Zipping files."
        },
        "correctAnswer": "B",
        "explanation": "Solves dependency hell."
    },
    {
        "id": 145,
        "subject": "Testing",
        "question": "What is 'Code Coverage'?",
        "options": {
            "A": "Lines of code.",
            "B": "A metric measuring the percentage of your code that is executed/tested by your test suite.",
            "C": "Documentation.",
            "D": "Code comments."
        },
        "correctAnswer": "B",
        "explanation": "High coverage doesn't guarantee no bugs, but low coverage guarantees untested logic."
    },
    {
        "id": 146,
        "subject": "Frontend",
        "question": "What is 'Semantic Versioning' (SemVer e.g., 2.1.0)?",
        "options": {
            "A": "Random numbers.",
            "B": "Major.Minor.Patch. Major = Breaking changes. Minor = New features (compatible). Patch = Bug fixes.",
            "C": "Date based versioning.",
            "D": "Alphabetical."
        },
        "correctAnswer": "B",
        "explanation": "Allows consumers to know if it's safe to upgrade."
    },
    {
        "id": 147,
        "subject": "Performance",
        "question": "What is a CDN (Content Delivery Network)?",
        "options": {
            "A": "A TV network.",
            "B": "A geographically distributed network of servers that serve static content (images/CSS) from the location closest to the user.",
            "C": "A database.",
            "D": "A backup drive."
        },
        "correctAnswer": "B",
        "explanation": "Reduces latency. A user in London gets the image from a London server, not the origin server in New York."
    },
    {
        "id": 148,
        "subject": "Career",
        "question": "How do you ask for a raise?",
        "options": {
            "A": "Demand it.",
            "B": "Document your achievements, quantify your impact ($ saved/earned), and present a business case for your new value.",
            "C": "Threaten to leave.",
            "D": "Wait for the review."
        },
        "correctAnswer": "B",
        "explanation": "Make it a business transaction based on value, not need."
    },
    {
        "id": 149,
        "subject": "JavaScript",
        "question": "What is `this` keyword in JavaScript?",
        "options": {
            "A": "The current file.",
            "B": "It refers to the object that is executing the current function (context).",
            "C": "The previous variable.",
            "D": "The global window."
        },
        "correctAnswer": "B",
        "explanation": "The value of `this` depends on *how* the function is called, not where it is defined (unless using arrow functions)."
    },
    {
        "id": 150,
        "subject": "Architecture",
        "question": "What is MVC?",
        "options": {
            "A": "Most Valuable Coder.",
            "B": "Model View Controller - a design pattern separating data, UI, and logic.",
            "C": "Make View Code.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "Separation of concerns allows frontend and backend to evolve independently."
    },
    {
        "id": 151,
        "subject": "Python",
        "question": "What is a List Comprehension?",
        "options": {
            "A": "A way to understand lists.",
            "B": "A concise way to create lists using a single line of code (e.g., `[x*2 for x in range(10)]`).",
            "C": "A database query.",
            "D": "A sorting algorithm."
        },
        "correctAnswer": "B",
        "explanation": "Pythonic way to transform lists without verbose `for` loops."
    },
    {
        "id": 152,
        "subject": "Web",
        "question": "What is Accessibility (a11y)?",
        "options": {
            "A": "Making sites load fast.",
            "B": "Designing software so it can be used by people with disabilities (Screen readers, keyboard nav).",
            "C": "Availability.",
            "D": "Security."
        },
        "correctAnswer": "B",
        "explanation": "Inclusive design is a professional requirement, not a bonus."
    },
    {
        "id": 153,
        "subject": "Cloud",
        "question": "What is 'Auto-scaling'?",
        "options": {
            "A": "Making images bigger.",
            "B": "Automatically adding/removing servers based on current traffic load.",
            "C": "Automatic updates.",
            "D": "Database backup."
        },
        "correctAnswer": "B",
        "explanation": "Saves money at night (scale down) and prevents crashes during spikes (scale up)."
    },
    {
        "id": 154,
        "subject": "Agile",
        "question": "What is a 'User Story'?",
        "options": {
            "A": "A fairy tale.",
            "B": "A description of a feature from the end-user perspective: 'As a [user], I want [goal] so that [benefit].'",
            "C": "A bug report.",
            "D": "Technical documentation."
        },
        "correctAnswer": "B",
        "explanation": "Focuses on the *value* to the user, not the *implementation* details."
    },
    {
        "id": 155,
        "subject": "Database",
        "question": "What is a Primary Key?",
        "options": {
            "A": "The first column.",
            "B": "A unique identifier for a record in a database table.",
            "C": "A password.",
            "D": "The biggest number."
        },
        "correctAnswer": "B",
        "explanation": "Must be unique and not null."
    },
    {
        "id": 156,
        "subject": "Communication",
        "question": "Explain 'Technical Debt' to a Client.",
        "options": {
            "A": "Our code is bad.",
            "B": "It's like not doing the dishes. You can cook faster now by ignoring them, but eventually, the kitchen becomes unusable until you clean up.",
            "C": "We owe money.",
            "D": "It's a bug."
        },
        "correctAnswer": "B",
        "explanation": "The 'Kitchen' analogy perfectly conveys the trade-off between speed now vs. slowdown later."
    },
    {
        "id": 157,
        "subject": "Mobile",
        "question": "What is an APK?",
        "options": {
            "A": "A primary key.",
            "B": "Android Package Kit - the file format used to distribute and install apps on Android.",
            "C": "Apple Package.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "The executable file for Android."
    },
    {
        "id": 158,
        "subject": "Security",
        "question": "What is 2FA vs MFA?",
        "options": {
            "A": "They are the same.",
            "B": "2FA is exactly two factors; MFA is Multi-Factor (two or more).",
            "C": "MFA is less secure.",
            "D": "2FA is for banks only."
        },
        "correctAnswer": "B",
        "explanation": "All 2FA is MFA, but not all MFA is 2FA."
    },
    {
        "id": 159,
        "subject": "Git",
        "question": "What is `.gitignore`?",
        "options": {
            "A": "A command to ignore errors.",
            "B": "A file that tells Git which files/directories to NOT track (e.g., node_modules, secrets).",
            "C": "A list of banned users.",
            "D": "A backup file."
        },
        "correctAnswer": "B",
        "explanation": "Essential for keeping repositories clean and secure."
    },
    {
        "id": 160,
        "subject": "JavaScript",
        "question": "What is a Promise?",
        "options": {
            "A": "A guarantee code will work.",
            "B": "An object representing the eventual completion (or failure) of an asynchronous operation.",
            "C": "A callback.",
            "D": "A variable."
        },
        "correctAnswer": "B",
        "explanation": "Resolves to a value in the future. States: Pending, Fulfilled, Rejected."
    },
    {
        "id": 161,
        "subject": "API",
        "question": "What is Rate Limiting?",
        "options": {
            "A": "Slowing down the internet.",
            "B": "Restricting the number of requests a user/client can make to an API within a timeframe to prevent abuse.",
            "C": "Limiting database size.",
            "D": "Closing the server."
        },
        "correctAnswer": "B",
        "explanation": "Protects against DDoS and resource exhaustion."
    },
    {
        "id": 162,
        "subject": "Data Structures",
        "question": "What is a Hash Map (Dictionary)?",
        "options": {
            "A": "A list of words.",
            "B": "A structure that maps keys to values, offering O(1) average lookup time.",
            "C": "A map of the world.",
            "D": "An ordered list."
        },
        "correctAnswer": "B",
        "explanation": "The most useful data structure for fast lookups."
    },
    {
        "id": 163,
        "subject": "Testing",
        "question": "What is End-to-End (E2E) Testing?",
        "options": {
            "A": "Testing the backend only.",
            "B": "Testing the entire application flow from start to finish (e.g., simulating a user clicking buttons) like a real user.",
            "C": "Testing the end of the code.",
            "D": "Unit testing."
        },
        "correctAnswer": "B",
        "explanation": "Tools like Cypress/Playwright. Slow but high confidence."
    },
    {
        "id": 164,
        "subject": "Frontend",
        "question": "What is 'Single Page Application' (SPA)?",
        "options": {
            "A": "A website with one paragraph.",
            "B": "A web app that loads a single HTML page and dynamically updates content as the user interacts, without reloading.",
            "C": "A PDF.",
            "D": "A static site."
        },
        "correctAnswer": "B",
        "explanation": "React/Vue/Angular apps. Feels like a native app."
    },
    {
        "id": 165,
        "subject": "Networking",
        "question": "What is SSH (Secure Shell)?",
        "options": {
            "A": "A shell on the beach.",
            "B": "A protocol for securely operating network services (like logging into a remote server) over an unsecured network.",
            "C": "A secure website.",
            "D": "A database tool."
        },
        "correctAnswer": "B",
        "explanation": "The standard way to manage remote Linux servers."
    },
    {
        "id": 166,
        "subject": "Soft Skills",
        "question": "You made a mistake that caused downtime. How do you apologize?",
        "options": {
            "A": "Don't apologize.",
            "B": "I'm sorry, I won't do it again.",
            "C": "Own it: 'I deployed a bad config. I have reverted it. Here is my plan to add a check so this specific error cannot happen again.'",
            "D": "Blame the tools."
        },
        "correctAnswer": "C",
        "explanation": "Apologies are cheap; remediation plans build trust."
    },
    {
        "id": 167,
        "subject": "Architecture",
        "question": "What is 'Scalability'?",
        "options": {
            "A": "Making things big.",
            "B": "The capability of a system to handle a growing amount of work by adding resources.",
            "C": "Measuring weight.",
            "D": "Code quality."
        },
        "correctAnswer": "B",
        "explanation": "Can your system handle 10x traffic if we give it 10x hardware?"
    },
    {
        "id": 168,
        "subject": "SQL",
        "question": "What does JOIN do?",
        "options": {
            "A": "Connects to the database.",
            "B": "Combines rows from two or more tables based on a related column between them.",
            "C": "Logs in.",
            "D": "Deletes data."
        },
        "correctAnswer": "B",
        "explanation": "The power of relational databases."
    },
    {
        "id": 169,
        "subject": "DevOps",
        "question": "What is Continuous Deployment?",
        "options": {
            "A": "Deploying once a year.",
            "B": "Every change that passes the automated tests is deployed to production automatically.",
            "C": "Deploying on Fridays.",
            "D": "Manual uploading."
        },
        "correctAnswer": "B",
        "explanation": "The ultimate goal of DevOps speed."
    },
    {
        "id": 170,
        "subject": "Performance",
        "question": "What is Minification?",
        "options": {
            "A": "Making images smaller.",
            "B": "Removing unnecessary characters (whitespace, comments) from code to reduce file size without changing functionality.",
            "C": "Zipping files.",
            "D": "Deleting code."
        },
        "correctAnswer": "B",
        "explanation": "Essential for JS/CSS delivery speed."
    },
    {
        "id": 171,
        "subject": "JavaScript",
        "question": "What is JSON.parse()?",
        "options": {
            "A": "Turning an Object into a String.",
            "B": "Turning a JSON String into a JavaScript Object.",
            "C": "Reading a file.",
            "D": "Sending data."
        },
        "correctAnswer": "B",
        "explanation": "Opposite of JSON.stringify()."
    },
    {
        "id": 172,
        "subject": "Browser",
        "question": "What is the Console?",
        "options": {
            "A": "A gaming device.",
            "B": "A browser tool for developers to view logs, run JS, and debug errors.",
            "C": "The address bar.",
            "D": "The settings menu."
        },
        "correctAnswer": "B",
        "explanation": "Every developer's first debugging step."
    },
    {
        "id": 173,
        "subject": "System Design",
        "question": "What is Database Sharding?",
        "options": {
            "A": "Breaking glass.",
            "B": "Splitting a large database into smaller, faster, more easily managed parts called data shards.",
            "C": "Backing up data.",
            "D": "Encrypting data."
        },
        "correctAnswer": "B",
        "explanation": "Horizontal scaling for databases."
    },
    {
        "id": 174,
        "subject": "CSS",
        "question": "What is Flexbox?",
        "options": {
            "A": "A gym.",
            "B": "A CSS layout module for arranging items in rows or columns efficiently.",
            "C": "A JavaScript library.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "Replaced 'float' layouts."
    },
    {
        "id": 175,
        "subject": "Career",
        "question": "What is the best way to learn a new technology?",
        "options": {
            "A": "Watch 100 hours of videos.",
            "B": "Build something with it.",
            "C": "Read the docs only.",
            "D": "Guess."
        },
        "correctAnswer": "B",
        "explanation": "Tutorial hell is real. Application cements knowledge."
    },
    {
        "id": 176,
        "subject": "Git",
        "question": "What is `git clone`?",
        "options": {
            "A": "Making a branch.",
            "B": "Copying a repository from a remote source (like GitHub) to your local machine.",
            "C": "Backing up.",
            "D": "Copying a file."
        },
        "correctAnswer": "B",
        "explanation": "The start of any project contribution."
    },
    {
        "id": 177,
        "subject": "Security",
        "question": "What is Social Engineering?",
        "options": {
            "A": "Building social networks.",
            "B": "Manipulating people into giving up confidential information (hacking the human).",
            "C": "Coding efficiently.",
            "D": "Network admin."
        },
        "correctAnswer": "B",
        "explanation": "No firewall can stop an employee giving their password to a fake IT support caller."
    },
    {
        "id": 178,
        "subject": "API",
        "question": "What is an Endpoint?",
        "options": {
            "A": "The end of the code.",
            "B": "A specific URL where an API can be accessed by a client application.",
            "C": "A database table.",
            "D": "A server error."
        },
        "correctAnswer": "B",
        "explanation": "E.g., GET /api/users."
    },
    {
        "id": 179,
        "subject": "Backend",
        "question": "What is Node.js?",
        "options": {
            "A": "A frontend library.",
            "B": "A JavaScript runtime built on Chrome's V8 engine that lets you run JS on the server.",
            "C": "A database.",
            "D": "A text editor."
        },
        "correctAnswer": "B",
        "explanation": "Allowed JS to go 'Full Stack'."
    },
    {
        "id": 180,
        "subject": "Productivity",
        "question": "What is Pomodoro?",
        "options": {
            "A": "A pasta sauce.",
            "B": "A time management technique: 25 mins work, 5 mins break.",
            "C": "A coding style.",
            "D": "A server."
        },
        "correctAnswer": "B",
        "explanation": "Helps maintain focus and prevent burnout."
    },
    {
        "id": 181,
        "subject": "Testing",
        "question": "What is a 'Flaky Test'?",
        "options": {
            "A": "A test for pastry.",
            "B": "A test that sometimes passes and sometimes fails without any code changes.",
            "C": "A slow test.",
            "D": "A unit test."
        },
        "correctAnswer": "B",
        "explanation": "The enemy of CI trust. Usually caused by timing issues or external dependencies."
    },
    {
        "id": 182,
        "subject": "Web",
        "question": "What is `404 Not Found`?",
        "options": {
            "A": "Server crashed.",
            "B": "The server cannot find the requested resource.",
            "C": "Permission denied.",
            "D": "Success."
        },
        "correctAnswer": "B",
        "explanation": "The most famous error."
    },
    {
        "id": 183,
        "subject": "Code Quality",
        "question": "What is 'Spaghetti Code'?",
        "options": {
            "A": "Italian code.",
            "B": "Code with a complex and tangled control structure.",
            "C": "Short code.",
            "D": "Good code."
        },
        "correctAnswer": "B",
        "explanation": "Hard to read, maintain, and debug."
    },
    {
        "id": 184,
        "subject": "Cloud",
        "question": "What is AWS?",
        "options": {
            "A": "A Website Service.",
            "B": "Amazon Web Services - a cloud computing platform.",
            "C": "A Web Socket.",
            "D": "Another Web Site."
        },
        "correctAnswer": "B",
        "explanation": "The market leader in cloud infrastructure."
    },
    {
        "id": 185,
        "subject": "Leadership",
        "question": "What is 'Servant Leadership'?",
        "options": {
            "A": "Making coffee.",
            "B": "A philosophy where the leader's goal is to serve the team (remove blockers, empower), not command them.",
            "C": "Being a boss.",
            "D": "Working alone."
        },
        "correctAnswer": "B",
        "explanation": "Highly effective in engineering management."
    },
    {
        "id": 186,
        "subject": "Frontend",
        "question": "What is NPM?",
        "options": {
            "A": "No Project Manager.",
            "B": "Node Package Manager - the default package manager for JavaScript.",
            "C": "New Programming Mode.",
            "D": "Network Protocol Map."
        },
        "correctAnswer": "B",
        "explanation": "The world's largest software registry."
    },
    {
        "id": 187,
        "subject": "Architecture",
        "question": "What is an API Gateway?",
        "options": {
            "A": "A door.",
            "B": "A server that acts as an entry point for a system, routing requests to appropriate microservices.",
            "C": "A database.",
            "D": "A firewall."
        },
        "correctAnswer": "B",
        "explanation": "Handles cross-cutting concerns like Auth, Rate Limiting, and Routing."
    },
    {
        "id": 188,
        "subject": "Communication",
        "question": "You are blocked by another team. What do you do?",
        "options": {
            "A": "Wait.",
            "B": "Communicate the blocker clearly to your lead/manager and the other team immediately.",
            "C": "Complain.",
            "D": "Go home."
        },
        "correctAnswer": "B",
        "explanation": "Active unblocking is a key skill."
    },
    {
        "id": 189,
        "subject": "Mobile",
        "question": "What is React Native?",
        "options": {
            "A": "React for the web.",
            "B": "A framework for building native apps using React (JavaScript).",
            "C": "A database.",
            "D": "A testing tool."
        },
        "correctAnswer": "B",
        "explanation": "Write once, run on iOS and Android."
    },
    {
        "id": 190,
        "subject": "Security",
        "question": "What is 'Least Privilege'?",
        "options": {
            "A": "Being mean.",
            "B": "Granting users/programs only the permissions essential to perform their work.",
            "C": "Giving admin access to everyone.",
            "D": "A database rule."
        },
        "correctAnswer": "B",
        "explanation": "Minimizes damage if an account is compromised."
    },
    {
        "id": 191,
        "subject": "Coding",
        "question": "What is a Variable?",
        "options": {
            "A": "Something that changes.",
            "B": "A container for storing data values.",
            "C": "A function.",
            "D": "A loop."
        },
        "correctAnswer": "B",
        "explanation": "The basic unit of storage in code."
    },
    {
        "id": 192,
        "subject": "Python",
        "question": "What is `pip`?",
        "options": {
            "A": "A sound.",
            "B": "The package installer for Python.",
            "C": "A game.",
            "D": "A variable."
        },
        "correctAnswer": "B",
        "explanation": "Equivalent to NPM for JS."
    },
    {
        "id": 193,
        "subject": "Networking",
        "question": "What is a Port?",
        "options": {
            "A": "A wine.",
            "B": "A communication endpoint; a number identifying a specific process/service (e.g., 80 for HTTP).",
            "C": "A cable.",
            "D": "A screen."
        },
        "correctAnswer": "B",
        "explanation": "IP gets you to the house; Port gets you to the specific room."
    },
    {
        "id": 194,
        "subject": "Browser",
        "question": "What is Cache?",
        "options": {
            "A": "Money.",
            "B": "A hardware or software component that stores data so that future requests for that data can be served faster.",
            "C": "A cookie.",
            "D": "A trash can."
        },
        "correctAnswer": "B",
        "explanation": "Speed is king."
    },
    {
        "id": 195,
        "subject": "Interview",
        "question": "What is 'Big O' of accessing an array by index?",
        "options": {
            "A": "O(n)",
            "B": "O(1)",
            "C": "O(log n)",
            "D": "O(n^2)"
        },
        "correctAnswer": "B",
        "explanation": "Instant access because we know the memory address."
    },
    {
        "id": 196,
        "subject": "DevOps",
        "question": "What is Log Aggregation?",
        "options": {
            "A": "Cutting wood.",
            "B": "Collecting logs from multiple services into a central searchable location (like Splunk/ELK).",
            "C": "Deleting logs.",
            "D": "Writing code."
        },
        "correctAnswer": "B",
        "explanation": "Essential for debugging distributed systems."
    },
    {
        "id": 197,
        "subject": "Soft Skills",
        "question": "What is Empathy in Engineering?",
        "options": {
            "A": "Being nice.",
            "B": "Understanding the feelings/needs of the user (UX) and your teammates (DX).",
            "C": "Writing comments.",
            "D": "Weakness."
        },
        "correctAnswer": "B",
        "explanation": "Good software solves human problems. You need empathy to understand the problem."
    },
    {
        "id": 198,
        "subject": "Git",
        "question": "What is `git commit`?",
        "options": {
            "A": "Saving file changes to the local repository with a message describing the change.",
            "B": "Uploading code.",
            "C": "Downloading code.",
            "D": "Merging branches."
        },
        "correctAnswer": "A",
        "explanation": "A snapshot of your project."
    },
    {
        "id": 199,
        "subject": "Web",
        "question": "What is HTML?",
        "options": {
            "A": "How To Make Lasagna.",
            "B": "HyperText Markup Language - the standard markup language for documents designed to be displayed in a web browser.",
            "C": "High Tech Make Language.",
            "D": "Programming language."
        },
        "correctAnswer": "B",
        "explanation": "The skeleton of the web."
    },
    {
        "id": 200,
        "subject": "Final",
        "question": "What is the most important skill for a developer?",
        "options": {
            "A": "Typing fast.",
            "B": "Problem Solving.",
            "C": "Memorizing syntax.",
            "D": "Using Linux."
        },
        "correctAnswer": "B",
        "explanation": "Languages change; the ability to break down complex problems remains."
    },
    {
        "id": 201,
        "subject": "System Design",
        "question": "What is the 'Thundering Herd' problem?",
        "options": {
            "A": "Too many users signing up at once.",
            "B": "When a large number of processes/users waiting for an event are awoken at once, causing a sudden spike in resource usage (CPU/Network) that crashes the system.",
            "C": "A database migration error.",
            "D": "Loud server fans."
        },
        "correctAnswer": "B",
        "explanation": "Common in caching. When a cache expires, thousands of requests hit the database simultaneously before the cache is repopulated."
    },
    {
        "id": 202,
        "subject": "Soft Skills",
        "question": "You are explaining 'Technical Debt' to a CFO. What is the most effective financial analogy?",
        "options": {
            "A": "It's like a messy room.",
            "B": "It's like taking out a loan. You get the capital (speed) now, but you pay interest (slower development) on it until the principal is repaid (refactoring).",
            "C": "It's bad code.",
            "D": "It's an operational expense."
        },
        "correctAnswer": "B",
        "explanation": "CFOs understand interest and principal. It frames the refactoring work as 'paying down debt' to stop losing money on interest."
    },
    {
        "id": 203,
        "subject": "Database",
        "question": "What is ACID compliance?",
        "options": {
            "A": "A chemical test.",
            "B": "Atomicity, Consistency, Isolation, Durability - properties that guarantee database transactions are processed reliably.",
            "C": "Automatic Cloud Integration Data.",
            "D": "A NoSQL feature."
        },
        "correctAnswer": "B",
        "explanation": "Essential for financial systems where partial updates (e.g., money deducted but not credited) are unacceptable."
    },
    {
        "id": 204,
        "subject": "Architecture",
        "question": "What is the 'Backends for Frontends' (BFF) pattern?",
        "options": {
            "A": "Making friends with backend devs.",
            "B": "Creating separate backend services for specific frontend interfaces (e.g., one API for Mobile, one for Web) to optimize data delivery.",
            "C": "A single monolithic API.",
            "D": "Direct database access."
        },
        "correctAnswer": "B",
        "explanation": "Prevents over-fetching on mobile devices by tailoring the API response specifically to the mobile UI needs."
    },
    {
        "id": 205,
        "subject": "React",
        "question": "Why is mutating state directly in React (e.g., `this.state.count = 5`) bad?",
        "options": {
            "A": "It throws an error.",
            "B": "It does not trigger a re-render because React compares references. You must use `setState` or hooks to notify React of the update.",
            "C": "It is slow.",
            "D": "It deletes the state."
        },
        "correctAnswer": "B",
        "explanation": "React relies on immutability/setters to detect changes and schedule updates."
    },
    {
        "id": 206,
        "subject": "Security",
        "question": "What is 'Salt' in password hashing?",
        "options": {
            "A": "Flavoring for code.",
            "B": "Random data added to the password before hashing to ensure that identical passwords result in different hashes, defeating Rainbow Table attacks.",
            "C": "Encryption key.",
            "D": "Pepper."
        },
        "correctAnswer": "B",
        "explanation": "Without salt, two users with the password 'password123' would have the same hash, making them easy to crack in bulk."
    },
    {
        "id": 207,
        "subject": "Networking",
        "question": "What is the difference between IPv4 and IPv6?",
        "options": {
            "A": "IPv6 is just faster.",
            "B": "IPv4 uses 32-bit addresses (ran out of space); IPv6 uses 128-bit addresses (virtually infinite space).",
            "C": "IPv4 is for wifi.",
            "D": "IPv6 is for mobile only."
        },
        "correctAnswer": "B",
        "explanation": "The internet ran out of IPv4 addresses. IPv6 solves the address exhaustion problem."
    },
    {
        "id": 208,
        "subject": "DevOps",
        "question": "What is 'Canary Deployment'?",
        "options": {
            "A": "Releasing to a coal mine.",
            "B": "Rolling out a new feature to a small subset of users (e.g., 5%) to test stability before rolling it out to everyone.",
            "C": "Deploying at night.",
            "D": "Using birds."
        },
        "correctAnswer": "B",
        "explanation": "Limits the 'blast radius' of a bad deploy. If the 5% crash, you rollback without affecting the other 95%."
    },
    {
        "id": 209,
        "subject": "Communication",
        "question": "A junior dev asks for help, but you are swamped. What is the best response?",
        "options": {
            "A": "Ignore them.",
            "B": "Help them immediately and miss your deadline.",
            "C": "'I am heads-down on a critical task right now. Can you write down your specific question and what you've tried, and we can look at it at 4 PM?'",
            "D": "Ask someone else."
        },
        "correctAnswer": "C",
        "explanation": "Sets boundaries while still being supportive. Asking them to write it down often helps them solve it themselves (Rubber Ducking)."
    },
    {
        "id": 210,
        "subject": "Git",
        "question": "What is `git bisect`?",
        "options": {
            "A": "Cutting a repo in half.",
            "B": "A binary search tool used to find the specific commit that introduced a bug.",
            "C": "Merging two branches.",
            "D": "Deleting history."
        },
        "correctAnswer": "B",
        "explanation": "The fastest way to debug regressions in a large codebase. 'It worked here, broken here, git finds the middle'."
    },
    {
        "id": 211,
        "subject": "Algorithms",
        "question": "Why is Quicksort preferred over Bubblesort?",
        "options": {
            "A": "Bubblesort is O(n^2) average; Quicksort is O(n log n) average.",
            "B": "Bubblesort is too hard to write.",
            "C": "Quicksort uses less memory.",
            "D": "Bubblesort pops."
        },
        "correctAnswer": "A",
        "explanation": "Efficiency classes matter. O(n^2) is unusable for large datasets."
    },
    {
        "id": 212,
        "subject": "API",
        "question": "What is the difference between Authentication (AuthN) and Authorization (AuthZ)?",
        "options": {
            "A": "AuthN is who you are; AuthZ is what you are allowed to do.",
            "B": "AuthN is passwords; AuthZ is usernames.",
            "C": "AuthN is secure; AuthZ is public.",
            "D": "They are the same."
        },
        "correctAnswer": "A",
        "explanation": "Identity (AuthN) vs Permissions (AuthZ). You can be Authenticated (logged in) but not Authorized (admin access)."
    },
    {
        "id": 213,
        "subject": "Cloud",
        "question": "What is 'Vendor Lock-in'?",
        "options": {
            "A": "Security door.",
            "B": "Building your system so deeply using proprietary tools of one cloud provider (e.g., AWS DynamoDB) that migrating to another (Azure/GCP) becomes prohibitively expensive.",
            "C": "Signing a contract.",
            "D": "Buying software."
        },
        "correctAnswer": "B",
        "explanation": "A strategic risk to consider when choosing managed services vs open standards (like Postgres/Docker)."
    },
    {
        "id": 214,
        "subject": "Testing",
        "question": "What is 'Fuzz Testing'?",
        "options": {
            "A": "Testing with fuzzy logic.",
            "B": "Inputting massive amounts of random data ('fuzz') to the system to attempt to make it crash.",
            "C": "UI testing.",
            "D": "Unit testing."
        },
        "correctAnswer": "B",
        "explanation": "Great for finding edge cases and security vulnerabilities that humans wouldn't think to test."
    },
    {
        "id": 215,
        "subject": "JavaScript",
        "question": "What is a Closure?",
        "options": {
            "A": "The end of a function.",
            "B": "The combination of a function bundled together with references to its surrounding state (lexical environment).",
            "C": "A database connection.",
            "D": "Closing a tag."
        },
        "correctAnswer": "B",
        "explanation": "This allows a function to access variables from an outer function that has already returned."
    },
    {
        "id": 216,
        "subject": "Leadership",
        "question": "What is the 'Bus Factor'?",
        "options": {
            "A": "Transportation cost.",
            "B": "The number of team members that can be hit by a bus (or quit) before the project stalls due to lack of knowledge.",
            "C": "Server load.",
            "D": "API latency."
        },
        "correctAnswer": "B",
        "explanation": "A risk metric. If only one person knows how the billing code works, your Bus Factor is 1 (Dangerous)."
    },
    {
        "id": 217,
        "subject": "Distributed Systems",
        "question": "What is a 'Race Condition'?",
        "options": {
            "A": "Code running too fast.",
            "B": "When a system's behavior depends on the sequence or timing of other uncontrollable events (e.g., two threads trying to update the same variable).",
            "C": "A contest.",
            "D": "Network lag."
        },
        "correctAnswer": "B",
        "explanation": "Hard to debug because they are timing-dependent and often don't happen locally."
    },
    {
        "id": 218,
        "subject": "Productivity",
        "question": "What is 'Yak Shaving'?",
        "options": {
            "A": "Grooming animals.",
            "B": "A series of small tasks that must be performed before the project you actually want to do can be started.",
            "C": "Coding fast.",
            "D": "Cleaning code."
        },
        "correctAnswer": "B",
        "explanation": "I want to deploy -> I need to update packages -> I need to update Node -> I need to update my OS -> Now I'm shaving a yak."
    },
    {
        "id": 219,
        "subject": "HTTP",
        "question": "What is the purpose of the `OPTIONS` method in HTTP?",
        "options": {
            "A": "To choose a file.",
            "B": "Used by browsers for CORS pre-flight requests to check which methods are allowed by the server.",
            "C": "To configure the server.",
            "D": "To delete data."
        },
        "correctAnswer": "B",
        "explanation": "The browser asks 'Can I send a POST request here?' before actually sending the POST request."
    },
    {
        "id": 220,
        "subject": "Design Patterns",
        "question": "What is the 'Factory Pattern'?",
        "options": {
            "A": "Making code in a factory.",
            "B": "A creational pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.",
            "C": "A singleton.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "Decouples the instantiation logic from the usage logic."
    },
    {
        "id": 221,
        "subject": "SQL",
        "question": "What is the difference between `DELETE` and `TRUNCATE`?",
        "options": {
            "A": "DELETE removes rows one by one and logs them (can be rolled back); TRUNCATE drops the table data instantly (faster, harder to rollback).",
            "B": "They are the same.",
            "C": "TRUNCATE is slower.",
            "D": "DELETE drops the table structure."
        },
        "correctAnswer": "A",
        "explanation": "Use TRUNCATE to wipe a table clean fast. Use DELETE for specific rows."
    },
    {
        "id": 222,
        "subject": "Mobile",
        "question": "What is 'Deep Linking'?",
        "options": {
            "A": "Linking to the dark web.",
            "B": "Using a URI (e.g., `twitter://`) that opens a specific page inside a mobile app instead of a website.",
            "C": "SEO optimization.",
            "D": "Linking databases."
        },
        "correctAnswer": "B",
        "explanation": "Essential for UX transparency between web and app."
    },
    {
        "id": 223,
        "subject": "Communication",
        "question": "You disagree with a code review comment. How do you respond?",
        "options": {
            "A": "Do what they say anyway.",
            "B": "Explain your reasoning with evidence (links/docs) and ask: 'Do you think this approach outweighs the benefits?'",
            "C": "Ignore it.",
            "D": "Tell them they are wrong."
        },
        "correctAnswer": "B",
        "explanation": "Turn the disagreement into a discussion about trade-offs."
    },
    {
        "id": 224,
        "subject": "Security",
        "question": "What is 'Dependency Hell'?",
        "options": {
            "A": "Being lonely.",
            "B": "When software relies on specific versions of other software packages, creating conflicts (Package A needs Lib v1, Package B needs Lib v2).",
            "C": "A virus.",
            "D": "A database lock."
        },
        "correctAnswer": "B",
        "explanation": "Solved by Containerization (Docker) and better package managers."
    },
    {
        "id": 225,
        "subject": "Frontend",
        "question": "What is 'Debouncing'?",
        "options": {
            "A": "Bouncing a ball.",
            "B": "Limiting the rate at which a function fires. The function will only execute after a specified time has passed since the last call.",
            "C": "Removing bugs.",
            "D": "Cleaning CSS."
        },
        "correctAnswer": "B",
        "explanation": "Crucial for search bars. Wait for the user to *stop* typing before hitting the API."
    },
    {
        "id": 226,
        "subject": "Architecture",
        "question": "What is 'Dependency Injection'?",
        "options": {
            "A": "A security flaw.",
            "B": "A technique where an object receives other objects that it depends on (dependencies) passed in, rather than creating them itself.",
            "C": "Installing NPM packages.",
            "D": "A database query."
        },
        "correctAnswer": "B",
        "explanation": "Makes code testable. You can inject a 'Fake Database' for testing instead of the 'Real Database'."
    },
    {
        "id": 227,
        "subject": "DevOps",
        "question": "What is 'Orchestration' (Kubernetes)?",
        "options": {
            "A": "Writing music.",
            "B": "Automating the deployment, scaling, and management of containerized applications.",
            "C": "Running a script.",
            "D": "Testing code."
        },
        "correctAnswer": "B",
        "explanation": "Docker runs the container; Kubernetes decides *where* it runs and *how many* run."
    },
    {
        "id": 228,
        "subject": "Career",
        "question": "What is the 'T-Shaped' Developer model?",
        "options": {
            "A": "A developer who likes tea.",
            "B": "Deep knowledge in one area (Vertical bar) and broad knowledge across many areas (Horizontal bar).",
            "C": "A developer who stands straight.",
            "D": "Knowing only one thing."
        },
        "correctAnswer": "B",
        "explanation": "The ideal modern engineer profile. Specialist in one thing, generalist in the rest."
    },
    {
        "id": 229,
        "subject": "Web",
        "question": "What is WebSocket used for?",
        "options": {
            "A": "Standard web browsing.",
            "B": "Full-duplex communication channels over a single TCP connection (Real-time chat, live feeds).",
            "C": "Securing sockets.",
            "D": "Database storage."
        },
        "correctAnswer": "B",
        "explanation": "HTTP is request-response. WebSockets are persistent open channels for two-way data."
    },
    {
        "id": 230,
        "subject": "Python",
        "question": "What is `__init__`?",
        "options": {
            "A": "A system command.",
            "B": "The constructor method in Python classes, run when a new object is instantiated.",
            "C": "A variable.",
            "D": "An error."
        },
        "correctAnswer": "B",
        "explanation": "Initializes the object's state."
    },
    {
        "id": 231,
        "subject": "Data",
        "question": "What is ETL?",
        "options": {
            "A": "Extract, Transform, Load.",
            "B": "Estimate Time Left.",
            "C": "Error Tracking Log.",
            "D": "Encrypted Text Layer."
        },
        "correctAnswer": "A",
        "explanation": "The standard process for data pipelines and warehousing."
    },
    {
        "id": 232,
        "subject": "Performance",
        "question": "What is 'Tree Shaking'?",
        "options": {
            "A": "Shaking the monitor.",
            "B": "A build step that removes unused code from the final bundle to reduce file size.",
            "C": "Optimizing images.",
            "D": "Organizing folders."
        },
        "correctAnswer": "B",
        "explanation": "You import a huge library but only use one function; Tree Shaking removes the rest."
    },
    {
        "id": 233,
        "subject": "Negotiation",
        "question": "Product wants a fixed deadline for a complex research task. How do you respond?",
        "options": {
            "A": "Give a fake date.",
            "B": "Say 'It's done when it's done.'",
            "C": "Propose a 'Time-boxed Spike': 'Let's spend 2 days investigating. At the end, I will tell you if it's possible and give a better estimate.'",
            "D": "Say 2 weeks."
        },
        "correctAnswer": "C",
        "explanation": "A Spike buys knowledge. You cannot estimate the unknown."
    },
    {
        "id": 234,
        "subject": "Linux",
        "question": "What is `sudo`?",
        "options": {
            "A": "SuperUser DO - executes a command with administrative (root) privileges.",
            "B": "A pseudocode generator.",
            "C": "System Update.",
            "D": "Sustainable Development."
        },
        "correctAnswer": "A",
        "explanation": "With great power comes great responsibility."
    },
    {
        "id": 235,
        "subject": "Quality Assurance",
        "question": "What is 'Smoke Testing'?",
        "options": {
            "A": "Looking for fire.",
            "B": "Preliminary testing to reveal simple failures severe enough to reject a release (e.g., 'Does the app even turn on?').",
            "C": "Performance testing.",
            "D": "Testing in the cloud."
        },
        "correctAnswer": "B",
        "explanation": "If the smoke test fails, don't bother with the deep tests."
    },
    {
        "id": 236,
        "subject": "Agile",
        "question": "What is 'Velocity' in Scrum?",
        "options": {
            "A": "Speed of code.",
            "B": "The amount of work (story points) a team completes during a sprint.",
            "C": "Running fast.",
            "D": "A physics term."
        },
        "correctAnswer": "B",
        "explanation": "Used for planning capacity, not for judging individual performance."
    },
    {
        "id": 237,
        "subject": "Security",
        "question": "What is 'Zero Trust' architecture?",
        "options": {
            "A": "Trusting no one.",
            "B": "A security model that requires all users/devices to be authenticated and authorized, regardless of whether they are inside or outside the organization's network.",
            "C": "No passwords.",
            "D": "VPN only."
        },
        "correctAnswer": "B",
        "explanation": "Old model: 'Trust inside the firewall.' Zero Trust: 'Verify explicitly everywhere.'"
    },
    {
        "id": 238,
        "subject": "CSS",
        "question": "What is `rem` vs `em` units?",
        "options": {
            "A": "rem is relative to the root (html) font-size; em is relative to the parent element's font-size.",
            "B": "They are the same.",
            "C": "em is for margins.",
            "D": "rem is deprecated."
        },
        "correctAnswer": "A",
        "explanation": "`rem` is preferred for consistency. `em` compounds (parent * child) which can get messy."
    },
    {
        "id": 239,
        "subject": "Git",
        "question": "What is `git blame`?",
        "options": {
            "A": "Insulting coworkers.",
            "B": "Shows what revision and author last modified each line of a file.",
            "C": "Deleting history.",
            "D": "Reporting bugs."
        },
        "correctAnswer": "B",
        "explanation": "Useful for finding context: 'Why was this line changed 3 years ago?'"
    },
    {
        "id": 240,
        "subject": "Architecture",
        "question": "What is 'Caching'?",
        "options": {
            "A": "Hiding money.",
            "B": "Storing data in a temporary storage area so it can be retrieved faster than hitting the original source (DB/API).",
            "C": "Deleting data.",
            "D": "Encrypting data."
        },
        "correctAnswer": "B",
        "explanation": "The fastest query is the one you don't make."
    },
    {
        "id": 241,
        "subject": "Coding",
        "question": "What is 'Refactoring'?",
        "options": {
            "A": "Changing functionality.",
            "B": "Restructuring existing computer code without changing its external behavior.",
            "C": "Adding features.",
            "D": "Fixing bugs."
        },
        "correctAnswer": "B",
        "explanation": "Cleaning up the kitchen without cooking a new meal."
    },
    {
        "id": 242,
        "subject": "Leadership",
        "question": "What is Psychological Safety?",
        "options": {
            "A": "Wearing a helmet.",
            "B": "A belief that one will not be punished or humiliated for speaking up with ideas, questions, concerns, or mistakes.",
            "C": "Being happy.",
            "D": "A safety drill."
        },
        "correctAnswer": "B",
        "explanation": "The #1 predictor of high-performing teams (Google Project Aristotle)."
    },
    {
        "id": 243,
        "subject": "Web",
        "question": "What is a 'Cookie'?",
        "options": {
            "A": "A snack.",
            "B": "Small data stored on the user's computer by the web browser while browsing a website.",
            "C": "A virus.",
            "D": "A server."
        },
        "correctAnswer": "B",
        "explanation": "Used for session management, personalization, and tracking."
    },
    {
        "id": 244,
        "subject": "Networking",
        "question": "What is DHCP?",
        "options": {
            "A": "Dynamic Host Configuration Protocol - automatically assigns IP addresses to devices on a network.",
            "B": "Data Host Control.",
            "C": "Domain Host.",
            "D": "A router."
        },
        "correctAnswer": "A",
        "explanation": "Without it, you'd have to manually type an IP for every device you connect to wifi."
    },
    {
        "id": 245,
        "subject": "Security",
        "question": "What is Public Key Infrastructure (PKI)?",
        "options": {
            "A": "A key store.",
            "B": "The set of roles, policies, and hardware needed to create, manage, distribute, use, store, and revoke digital certificates.",
            "C": "A database.",
            "D": "A password manager."
        },
        "correctAnswer": "B",
        "explanation": "The backbone of SSL/TLS and HTTPS."
    },
    {
        "id": 246,
        "subject": "Mobile",
        "question": "What is 'Sandbox' in app development?",
        "options": {
            "A": "A playground.",
            "B": "A security mechanism for separating running programs, preventing them from reading each other's data.",
            "C": "A testing tool.",
            "D": "A beach."
        },
        "correctAnswer": "B",
        "explanation": "Why an iOS app can't steal your banking app's data."
    },
    {
        "id": 247,
        "subject": "Testing",
        "question": "What is A/B Testing?",
        "options": {
            "A": "Testing alphabet.",
            "B": "Comparing two versions of a webpage/app against each other to determine which one performs better.",
            "C": "Unit testing.",
            "D": "Beta testing."
        },
        "correctAnswer": "B",
        "explanation": "Data-driven decision making for UI/UX."
    },
    {
        "id": 248,
        "subject": "Interview",
        "question": "What is the difference between TCP and IP?",
        "options": {
            "A": "IP defines *where* data goes (address); TCP defines *how* data gets there reliably (delivery).",
            "B": "They are the same.",
            "C": "IP is for email.",
            "D": "TCP is a website."
        },
        "correctAnswer": "A",
        "explanation": "Together they form the internet protocol suite (TCP/IP)."
    },
    {
        "id": 249,
        "subject": "Cloud",
        "question": "What is 'Latency'?",
        "options": {
            "A": "Speed.",
            "B": "The time delay between the cause and the effect of some physical change in the system being observed.",
            "C": "Bandwidth.",
            "D": "Error rate."
        },
        "correctAnswer": "B",
        "explanation": "Low latency = snappy feel."
    },
    {
        "id": 250,
        "subject": "Data Structures",
        "question": "What is a Binary Tree?",
        "options": {
            "A": "A tree with two leaves.",
            "B": "A tree data structure in which each node has at most two children (left and right).",
            "C": "A database.",
            "D": "A sorting algorithm."
        },
        "correctAnswer": "B",
        "explanation": "Basis for Binary Search Trees (BST)."
    },
    {
        "id": 251,
        "subject": "Communication",
        "question": "You are leading a meeting and it's going off-topic. What do you do?",
        "options": {
            "A": "Let it ride.",
            "B": "End the meeting.",
            "C": "'This is an interesting discussion, but let's take it offline so we can get through the agenda items for today.'",
            "D": "Shout 'Focus!'."
        },
        "correctAnswer": "C",
        "explanation": "Respect the time of the other attendees."
    },
    {
        "id": 252,
        "subject": "DevOps",
        "question": "What is GitOps?",
        "options": {
            "A": "Using Git.",
            "B": "Using Git repositories as the single source of truth for infrastructure definitions (IaC) and application code.",
            "C": "GitHub actions.",
            "D": "Coding."
        },
        "correctAnswer": "B",
        "explanation": "If you want to change the server, you make a PR, not a manual change."
    },
    {
        "id": 253,
        "subject": "SQL",
        "question": "What is Normalization?",
        "options": {
            "A": "Making things normal.",
            "B": "Organizing data in a database to reduce redundancy and improve data integrity.",
            "C": "Deleting data.",
            "D": "Backing up."
        },
        "correctAnswer": "B",
        "explanation": "Don't store the user's address in 5 different tables."
    },
    {
        "id": 254,
        "subject": "Frontend",
        "question": "What is 'Hydration' in SSR?",
        "options": {
            "A": "Drinking water.",
            "B": "The process of attaching event listeners to the static HTML served by the server to make it interactive on the client.",
            "C": "Loading CSS.",
            "D": "Refreshing the page."
        },
        "correctAnswer": "B",
        "explanation": "Server sends HTML (fast paint); Client adds JS (interaction)."
    },
    {
        "id": 255,
        "subject": "Career",
        "question": "What is the 'Bus Factor'?",
        "options": {
            "A": "Transportation.",
            "B": "The minimum number of team members that have to suddenly disappear from a project before the project stalls due to lack of knowledgeable personnel.",
            "C": "A coding style.",
            "D": "A metric for speed."
        },
        "correctAnswer": "B",
        "explanation": "A risk management metric. You want a high bus factor."
    },
    {
        "id": 256,
        "subject": "Architecture",
        "question": "What is a 'Reverse Proxy'?",
        "options": {
            "A": "A hacker tool.",
            "B": "A server that sits in front of web servers and forwards client requests to those web servers (e.g., Nginx).",
            "C": "A database.",
            "D": "A firewall."
        },
        "correctAnswer": "B",
        "explanation": "Handles SSL termination, Load Balancing, and Caching."
    },
    {
        "id": 257,
        "subject": "JavaScript",
        "question": "What is `undefined` vs `null`?",
        "options": {
            "A": "Same thing.",
            "B": "`undefined` means a variable has been declared but not defined. `null` is an assignment value representing no value.",
            "C": "`null` is an error.",
            "D": "`undefined` is an object."
        },
        "correctAnswer": "B",
        "explanation": "System-level missing value vs User-level empty value."
    },
    {
        "id": 258,
        "subject": "Soft Skills",
        "question": "How do you give constructive feedback?",
        "options": {
            "A": "Be blunt.",
            "B": "Be vague.",
            "C": "Be specific, actionable, and timely. Focus on the work, not the person.",
            "D": "Wait for the annual review."
        },
        "correctAnswer": "C",
        "explanation": "SBI Model: Situation, Behavior, Impact."
    },
    {
        "id": 259,
        "subject": "Security",
        "question": "What is 'Encryption at Rest'?",
        "options": {
            "A": "Sleeping security.",
            "B": "Encrypting data when it is stored on disk (database/files) so if the hard drive is stolen, the data is unreadable.",
            "C": "HTTPS.",
            "D": "Password hashing."
        },
        "correctAnswer": "B",
        "explanation": "Protects against physical theft of servers."
    },
    {
        "id": 260,
        "subject": "Performance",
        "question": "What is 'Code Splitting'?",
        "options": {
            "A": "Breaking monitors.",
            "B": "Splitting code into various bundles which can then be loaded on demand or in parallel.",
            "C": "Refactoring.",
            "D": "Deleting code."
        },
        "correctAnswer": "B",
        "explanation": "Don't send the Admin Dashboard code to the Homepage user."
    },
    {
        "id": 261,
        "subject": "Git",
        "question": "What is `HEAD` in git?",
        "options": {
            "A": "The leader.",
            "B": "A reference to the current commit you are viewing/working on.",
            "C": "The main branch.",
            "D": "The server."
        },
        "correctAnswer": "B",
        "explanation": "Detached HEAD means you are looking at a commit, not a branch tip."
    },
    {
        "id": 262,
        "subject": "Web",
        "question": "What is a PWA (Progressive Web App)?",
        "options": {
            "A": "A slow website.",
            "B": "A website that looks and behaves like a mobile app (offline mode, push notifications, installable).",
            "C": "A native app.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "Bridging the gap between Web and Native."
    },
    {
        "id": 263,
        "subject": "Backend",
        "question": "What is 'Pagination'?",
        "options": {
            "A": "Writing books.",
            "B": "Dividing a large dataset into smaller chunks (pages) to serve to the client.",
            "C": "Database indexing.",
            "D": "Sorting."
        },
        "correctAnswer": "B",
        "explanation": "Don't return 1 million rows in one API call. Return 50."
    },
    {
        "id": 264,
        "subject": "Architecture",
        "question": "What is 'Keep It Simple, Stupid' (KISS)?",
        "options": {
            "A": "Being rude.",
            "B": "A design principle stating that systems work best if they are kept simple rather than made complex.",
            "C": "Writing bad code.",
            "D": "Using old tech."
        },
        "correctAnswer": "B",
        "explanation": "Complexity is the enemy of reliability."
    },
    {
        "id": 265,
        "subject": "Testing",
        "question": "What is 'Black Box Testing'?",
        "options": {
            "A": "Testing flight recorders.",
            "B": "Testing without knowing the internal structure/code. Focusing on inputs and outputs.",
            "C": "Unit testing.",
            "D": "White box testing."
        },
        "correctAnswer": "B",
        "explanation": "Testing as a user would."
    },
    {
        "id": 266,
        "subject": "Security",
        "question": "What is OAUTH?",
        "options": {
            "A": "An author.",
            "B": "An open standard for access delegation (e.g., Log in with Google).",
            "C": "A password.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "Allows you to grant a website access to your information on another website without giving them your password."
    },
    {
        "id": 267,
        "subject": "Career",
        "question": "What is 'Burnout'?",
        "options": {
            "A": "Working hard.",
            "B": "A state of emotional, physical, and mental exhaustion caused by excessive and prolonged stress.",
            "C": "A fire.",
            "D": "Being tired."
        },
        "correctAnswer": "B",
        "explanation": "A career killer. Requires recovery time."
    },
    {
        "id": 268,
        "subject": "System Design",
        "question": "What is 'Throughput'?",
        "options": {
            "A": "Latency.",
            "B": "The number of requests a system can handle per second (RPS).",
            "C": "Bandwidth.",
            "D": "Error rate."
        },
        "correctAnswer": "B",
        "explanation": "How wide is the pipe?"
    },
    {
        "id": 269,
        "subject": "Communication",
        "question": "How do you explain 'API' to a non-technical person?",
        "options": {
            "A": "It's a coding interface.",
            "B": "It's like a waiter in a restaurant. You (the user) give the waiter your order, the waiter takes it to the kitchen (system), and brings you back the food.",
            "C": "It's HTTP.",
            "D": "It's a database."
        },
        "correctAnswer": "B",
        "explanation": "The Waiter Analogy is standard."
    },
    {
        "id": 270,
        "subject": "Mobile",
        "question": "What is 'Push Notification'?",
        "options": {
            "A": "Email.",
            "B": "A message sent from a server to a client application (even when the app is closed).",
            "C": "A text message.",
            "D": "A database update."
        },
        "correctAnswer": "B",
        "explanation": "Re-engagement tool."
    },
    {
        "id": 271,
        "subject": "Linux",
        "question": "What is `cron`?",
        "options": {
            "A": "A monster.",
            "B": "A time-based job scheduler in Unix-like operating systems.",
            "C": "A clock.",
            "D": "A virus."
        },
        "correctAnswer": "B",
        "explanation": "Running scripts automatically at specific times."
    },
    {
        "id": 272,
        "subject": "DevOps",
        "question": "What is a 'Build Pipeline'?",
        "options": {
            "A": "Construction work.",
            "B": "Automated set of processes that compile, test, and deploy code.",
            "C": "A gas pipe.",
            "D": "Writing code."
        },
        "correctAnswer": "B",
        "explanation": "The assembly line for software."
    },
    {
        "id": 273,
        "subject": "Code Quality",
        "question": "What is 'Linting'?",
        "options": {
            "A": "Cleaning clothes.",
            "B": "Running a program that analyzes code for potential errors and stylistic issues.",
            "C": "Compiling.",
            "D": "Testing."
        },
        "correctAnswer": "B",
        "explanation": "Catching typos and style violations before they hit the repo."
    },
    {
        "id": 274,
        "subject": "Network",
        "question": "What is a 'Firewall'?",
        "options": {
            "A": "A wall on fire.",
            "B": "A network security system that monitors and controls incoming and outgoing network traffic.",
            "C": "Antivirus.",
            "D": "A password."
        },
        "correctAnswer": "B",
        "explanation": "The bouncer of the network."
    },
    {
        "id": 275,
        "subject": "Web",
        "question": "What is 'Responsive Design'?",
        "options": {
            "A": "Fast website.",
            "B": "Web design that adapts to different screen sizes and devices.",
            "C": "Good colors.",
            "D": "Native app."
        },
        "correctAnswer": "B",
        "explanation": "One code base, many devices."
    },
    {
        "id": 276,
        "subject": "SQL",
        "question": "What is a 'Foreign Key'?",
        "options": {
            "A": "A key from another country.",
            "B": "A field in a table that links to the Primary Key of another table.",
            "C": "A password.",
            "D": "A index."
        },
        "correctAnswer": "B",
        "explanation": "Creates the relationship in Relational Databases."
    },
    {
        "id": 277,
        "subject": "Agile",
        "question": "What is 'Backlog Grooming'?",
        "options": {
            "A": "Cleaning the office.",
            "B": "Reviewing and prioritizing items in the backlog to ensure they are ready for future sprints.",
            "C": "Deleting tasks.",
            "D": "A meeting."
        },
        "correctAnswer": "B",
        "explanation": "Preparation work."
    },
    {
        "id": 278,
        "subject": "Leadership",
        "question": "What is 'Imposter Syndrome'?",
        "options": {
            "A": "Being a fake.",
            "B": "Feeling like you aren't as competent as others perceive you to be.",
            "C": "Lying.",
            "D": "Being new."
        },
        "correctAnswer": "B",
        "explanation": "Very common in tech."
    },
    {
        "id": 279,
        "subject": "Cloud",
        "question": "What is SaaS?",
        "options": {
            "A": "Software as a Service.",
            "B": "System as a Server.",
            "C": "Storage as a System.",
            "D": "Safe and Secure."
        },
        "correctAnswer": "A",
        "explanation": "Licensing software via subscription (e.g., Slack, Gmail)."
    },
    {
        "id": 280,
        "subject": "Coding",
        "question": "What is Recursion?",
        "options": {
            "A": "A loop.",
            "B": "A function calling itself.",
            "C": "A bug.",
            "D": "A crash."
        },
        "correctAnswer": "B",
        "explanation": "Useful for traversing trees/graphs. Must have a base case to avoid stack overflow."
    },
    {
        "id": 281,
        "subject": "Security",
        "question": "What is HTTPS?",
        "options": {
            "A": "Hyper Text Transfer Protocol Secure.",
            "B": "Faster HTTP.",
            "C": "Slow HTTP.",
            "D": "A website."
        },
        "correctAnswer": "A",
        "explanation": "Encrypted communication."
    },
    {
        "id": 282,
        "subject": "Performance",
        "question": "What is 'Optimization'?",
        "options": {
            "A": "Writing code.",
            "B": "Making a system as effective or functional as possible (faster, smaller).",
            "C": "Deleting features.",
            "D": "Testing."
        },
        "correctAnswer": "B",
        "explanation": "Improving efficiency."
    },
    {
        "id": 283,
        "subject": "API",
        "question": "What is SOAP?",
        "options": {
            "A": "Cleaning agent.",
            "B": "Simple Object Access Protocol - an older, XML-based messaging protocol.",
            "C": "A database.",
            "D": "A REST replacement."
        },
        "correctAnswer": "B",
        "explanation": "Heavyweight compared to REST/JSON. Still used in enterprise."
    },
    {
        "id": 284,
        "subject": "Architecture",
        "question": "What is 'Scalability'?",
        "options": {
            "A": "Weighing code.",
            "B": "The ability of a system to handle increased load.",
            "C": "Writing good code.",
            "D": "Security."
        },
        "correctAnswer": "B",
        "explanation": "Growth potential."
    },
    {
        "id": 285,
        "subject": "Python",
        "question": "What is a 'Tuple'?",
        "options": {
            "A": "A list.",
            "B": "An immutable (unchangeable) ordered list of elements.",
            "C": "A dictionary.",
            "D": "A loop."
        },
        "correctAnswer": "B",
        "explanation": "Like a list, but you can't change it."
    },
    {
        "id": 286,
        "subject": "Testing",
        "question": "What is 'UAT'?",
        "options": {
            "A": "Unit Automated Test.",
            "B": "User Acceptance Testing - final testing by the end user/client.",
            "C": "Under A Tree.",
            "D": "Integration testing."
        },
        "correctAnswer": "B",
        "explanation": "The final sign-off."
    },
    {
        "id": 287,
        "subject": "Git",
        "question": "What is `git pull`?",
        "options": {
            "A": "Deleting code.",
            "B": "Fetching changes from a remote repository and merging them into the current branch.",
            "C": "Uploading code.",
            "D": "Saving code."
        },
        "correctAnswer": "B",
        "explanation": "Get the latest code."
    },
    {
        "id": 288,
        "subject": "Soft Skills",
        "question": "What is 'Active Listening'?",
        "options": {
            "A": "Hearing sound.",
            "B": "Fully concentrating, understanding, responding, and remembering what is being said.",
            "C": "Waiting to speak.",
            "D": "Ignoring."
        },
        "correctAnswer": "B",
        "explanation": "Crucial for requirement gathering."
    },
    {
        "id": 289,
        "subject": "Web",
        "question": "What is a URL?",
        "options": {
            "A": "Uniform Resource Locator.",
            "B": "User Real Link.",
            "C": "Universal Request Line.",
            "D": "A website."
        },
        "correctAnswer": "A",
        "explanation": "The address of a resource."
    },
    {
        "id": 290,
        "subject": "Database",
        "question": "What is a Query?",
        "options": {
            "A": "A question.",
            "B": "A request for data or information from a database table.",
            "C": "A server.",
            "D": "A file."
        },
        "correctAnswer": "B",
        "explanation": "Asking the database."
    },
    {
        "id": 291,
        "subject": "Architecture",
        "question": "What is 'High Availability'?",
        "options": {
            "A": "Always online.",
            "B": "Systems designed to be durable and likely to operate continuously without failure for a long time.",
            "C": "Fast internet.",
            "D": "Big servers."
        },
        "correctAnswer": "B",
        "explanation": "Minimizing downtime."
    },
    {
        "id": 292,
        "subject": "Security",
        "question": "What is a 'DDOS' attack?",
        "options": {
            "A": "Distributed Denial of Service.",
            "B": "Deleting Data On Server.",
            "C": "Direct Denial.",
            "D": "A virus."
        },
        "correctAnswer": "A",
        "explanation": "Overwhelming a server with traffic."
    },
    {
        "id": 293,
        "subject": "Mobile",
        "question": "What is iOS?",
        "options": {
            "A": "Internet OS.",
            "B": "Apple's mobile operating system.",
            "C": "Android.",
            "D": "A phone."
        },
        "correctAnswer": "B",
        "explanation": "Runs on iPhone/iPad."
    },
    {
        "id": 294,
        "subject": "DevOps",
        "question": "What is 'Version Control'?",
        "options": {
            "A": "Controlling people.",
            "B": "Systems responsible for managing changes to computer programs/documents (e.g., Git).",
            "C": "Backups.",
            "D": "Writing code."
        },
        "correctAnswer": "B",
        "explanation": "The time machine for code."
    },
    {
        "id": 295,
        "subject": "Frontend",
        "question": "What is 'Bootstrap'?",
        "options": {
            "A": "Shoes.",
            "B": "A popular CSS framework for developing responsive, mobile-first websites.",
            "C": "A backend tool.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "Rapid UI development."
    },
    {
        "id": 296,
        "subject": "Career",
        "question": "What is a 'Stack'?",
        "options": {
            "A": "Pancakes.",
            "B": "The combination of technologies used to build an application (e.g., MERN).",
            "C": "A pile of papers.",
            "D": "A server."
        },
        "correctAnswer": "B",
        "explanation": "Full Stack = Frontend + Backend + DB."
    },
    {
        "id": 297,
        "subject": "Networking",
        "question": "What is LAN?",
        "options": {
            "A": "Local Area Network.",
            "B": "Large Area Network.",
            "C": "Long Area Net.",
            "D": "Wifi."
        },
        "correctAnswer": "A",
        "explanation": "Network in a small area (home/office)."
    },
    {
        "id": 298,
        "subject": "Coding",
        "question": "What is 'Compilation'?",
        "options": {
            "A": "Writing code.",
            "B": "Transforming source code into machine code.",
            "C": "Running code.",
            "D": "Testing."
        },
        "correctAnswer": "B",
        "explanation": "Turning human readable text into machine instructions."
    },
    {
        "id": 299,
        "subject": "Data",
        "question": "What is Big Data?",
        "options": {
            "A": "Large files.",
            "B": "Data sets that are too large or complex to be dealt with by traditional data-processing software.",
            "C": "A database.",
            "D": "Cloud."
        },
        "correctAnswer": "B",
        "explanation": "Volume, Velocity, Variety."
    },
    {
        "id": 300,
        "subject": "Communication",
        "question": "Why is 'Documentation' important?",
        "options": {
            "A": "It isn't.",
            "B": "It ensures knowledge transfer, maintainability, and onboarding efficiency.",
            "C": "To look busy.",
            "D": "For legal reasons."
        },
        "correctAnswer": "B",
        "explanation": "Code tells you how; Docs tell you why."
    },
    {
        "id": 301,
        "subject": "Kubernetes",
        "question": "What is a 'Pod' in Kubernetes?",
        "options": {
            "A": "A small whale.",
            "B": "The smallest deployable unit in K8s, representing a single instance of a running process (one or more containers).",
            "C": "A server.",
            "D": "A storage unit."
        },
        "correctAnswer": "B",
        "explanation": "Containers live inside Pods. K8s scales Pods, not containers directly."
    },
    {
        "id": 302,
        "subject": "GraphQL",
        "question": "What is the 'N+1 Problem' in GraphQL?",
        "options": {
            "A": "A math error.",
            "B": "A performance issue where fetching a list of items (1 query) triggers a separate database query for each item's related data (N queries).",
            "C": "Too many users.",
            "D": "A schema error."
        },
        "correctAnswer": "B",
        "explanation": "Solved by using 'DataLoaders' to batch requests."
    },
    {
        "id": 303,
        "subject": "Next.js",
        "question": "What is Static Site Generation (SSG)?",
        "options": {
            "A": "Websites that don't move.",
            "B": "Pre-rendering pages at build time. The HTML is generated once and reused for each request.",
            "C": "Server Side Rendering.",
            "D": "Client Side Rendering."
        },
        "correctAnswer": "B",
        "explanation": "Fastest performance because the server just serves a file, no computation per request."
    },
    {
        "id": 304,
        "subject": "Distributed Systems",
        "question": "What is 'Distributed Tracing'?",
        "options": {
            "A": "Drawing lines.",
            "B": "A method used to track and profile application requests as they flow through distributed microservices.",
            "C": "Logging.",
            "D": "Debugging locally."
        },
        "correctAnswer": "B",
        "explanation": "Essential for debugging 'Why was this request slow?' when it hit 10 different services."
    },
    {
        "id": 305,
        "subject": "Security",
        "question": "What is 'JWT' (JSON Web Token)?",
        "options": {
            "A": "JavaScript Web Text.",
            "B": "A compact, URL-safe means of representing claims to be transferred between two parties.",
            "C": "A password.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "Stateless auth. The server doesn't need to store the session; it just verifies the signature."
    },
    {
        "id": 306,
        "subject": "React",
        "question": "What is a 'Higher-Order Component' (HOC)?",
        "options": {
            "A": "A tall component.",
            "B": "A function that takes a component and returns a new component (for reusing logic).",
            "C": "A parent component.",
            "D": "A state manager."
        },
        "correctAnswer": "B",
        "explanation": "A pattern for reusing component logic (e.g., `withAuth(ProfilePage)`)."
    },
    {
        "id": 307,
        "subject": "Database",
        "question": "What is 'Replication'?",
        "options": {
            "A": "Copying data from one database server to another to ensure redundancy and high availability.",
            "B": "Backups.",
            "C": "Deleting data.",
            "D": "Sharding."
        },
        "correctAnswer": "A",
        "explanation": "If the primary DB fails, the replica takes over."
    },
    {
        "id": 308,
        "subject": "Leadership",
        "question": "What is 'Delegation'?",
        "options": {
            "A": "Being lazy.",
            "B": "Entrusting a task or responsibility to another person (usually a junior) to help them grow.",
            "C": "Ordering food.",
            "D": "Ignoring work."
        },
        "correctAnswer": "B",
        "explanation": "Crucial for scaling yourself as a leader."
    },
    {
        "id": 309,
        "subject": "API",
        "question": "What is gRPC?",
        "options": {
            "A": "Google RPC.",
            "B": "A high-performance RPC framework that uses Protocol Buffers (binary) instead of JSON.",
            "C": "A REST API.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "Faster and lighter than REST, often used for internal microservice communication."
    },
    {
        "id": 310,
        "subject": "Architecture",
        "question": "What is 'Event-Driven Architecture'?",
        "options": {
            "A": "Planning events.",
            "B": "An architecture where services communicate by emitting and reacting to events (messages) rather than direct requests.",
            "C": "A monolithic app.",
            "D": "A calendar app."
        },
        "correctAnswer": "B",
        "explanation": "Decouples services. Service A says 'UserSignedUp', Service B hears it and sends email."
    },
    {
        "id": 311,
        "subject": "Testing",
        "question": "What is 'Chaos Engineering'?",
        "options": {
            "A": "Creating bugs.",
            "B": "The discipline of experimenting on a system (e.g., turning off servers randomly) to build confidence in its capability to withstand turbulent conditions.",
            "C": "Poor management.",
            "D": "Writing bad code."
        },
        "correctAnswer": "B",
        "explanation": "Netflix 'Chaos Monkey'. Break it on purpose to ensure it auto-heals."
    },
    {
        "id": 312,
        "subject": "Career",
        "question": "What is 'Mentorship'?",
        "options": {
            "A": "Teaching.",
            "B": "A professional relationship in which a more experienced person guides a less experienced one.",
            "C": "Bossing around.",
            "D": "Friendship."
        },
        "correctAnswer": "B",
        "explanation": "The fastest way to grow your career."
    },
    {
        "id": 313,
        "subject": "Web",
        "question": "What is WebAssembly (Wasm)?",
        "options": {
            "A": "A new framework.",
            "B": "A binary instruction format that allows code written in languages like C++/Rust to run in the browser at near-native speed.",
            "C": "JavaScript.",
            "D": "HTML5."
        },
        "correctAnswer": "B",
        "explanation": "Bringing high-performance computing (games, video editing) to the web."
    },
    {
        "id": 314,
        "subject": "Security",
        "question": "What is 'Encryption in Transit'?",
        "options": {
            "A": "Encrypting cars.",
            "B": "Encrypting data while it is moving between two points (e.g., Browser to Server) using TLS/SSL.",
            "C": "Database encryption.",
            "D": "VPN."
        },
        "correctAnswer": "B",
        "explanation": "Prevents interception (MitM attacks)."
    },
    {
        "id": 315,
        "subject": "DevOps",
        "question": "What is 'Observability'?",
        "options": {
            "A": "Looking at screens.",
            "B": "The ability to understand the internal state of a system based on its external outputs (Logs, Metrics, Traces).",
            "C": "Monitoring.",
            "D": "Testing."
        },
        "correctAnswer": "B",
        "explanation": "Monitoring tells you the system is down; Observability tells you *why*."
    },
    {
        "id": 316,
        "subject": "Python",
        "question": "What is a 'Virtual Environment'?",
        "options": {
            "A": "VR.",
            "B": "An isolated environment for Python projects so dependencies don't conflict with system-wide packages.",
            "C": "A virtual machine.",
            "D": "A docker container."
        },
        "correctAnswer": "B",
        "explanation": "Always use `venv` or `conda` to keep projects clean."
    },
    {
        "id": 317,
        "subject": "Data",
        "question": "What is Redis?",
        "options": {
            "A": "A color.",
            "B": "An in-memory data structure store, used as a database, cache, and message broker.",
            "C": "A relational database.",
            "D": "A frontend tool."
        },
        "correctAnswer": "B",
        "explanation": "Extremely fast because it runs in RAM."
    },
    {
        "id": 318,
        "subject": "Networking",
        "question": "What is a VPN?",
        "options": {
            "A": "Virtual Private Network.",
            "B": "Very Private Net.",
            "C": "Visual Protocol Node.",
            "D": "Virus Protection."
        },
        "correctAnswer": "A",
        "explanation": "Creates a secure tunnel over a public network."
    },
    {
        "id": 319,
        "subject": "Mobile",
        "question": "What is 'Flutter'?",
        "options": {
            "A": "A bird.",
            "B": "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
            "C": "A database.",
            "D": "A testing tool."
        },
        "correctAnswer": "B",
        "explanation": "Competitor to React Native, uses Dart language."
    },
    {
        "id": 320,
        "subject": "Soft Skills",
        "question": "What is 'Stakeholder Management'?",
        "options": {
            "A": "Managing servers.",
            "B": "The process of maintaining good relationships with the people who have the most impact on your work (Boss, PM, Client).",
            "C": "Coding.",
            "D": "Eating steak."
        },
        "correctAnswer": "B",
        "explanation": "Engineering is easy; people are hard."
    },
    {
        "id": 321,
        "subject": "Git",
        "question": "What is a 'Fork'?",
        "options": {
            "A": "Cutlery.",
            "B": "A copy of a repository that you manage. Allows you to experiment without affecting the original project.",
            "C": "A branch.",
            "D": "A commit."
        },
        "correctAnswer": "B",
        "explanation": "Standard for Open Source contributions."
    },
    {
        "id": 322,
        "subject": "Frontend",
        "question": "What is 'Tailwind CSS'?",
        "options": {
            "A": "A wind.",
            "B": "A utility-first CSS framework that allows you to build designs directly in your markup.",
            "C": "A JavaScript library.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "Rapid styling without writing custom CSS files."
    },
    {
        "id": 323,
        "subject": "Cloud",
        "question": "What is 'Lambda' (AWS)?",
        "options": {
            "A": "A greek letter.",
            "B": "A serverless compute service that runs your code in response to events and automatically manages resources.",
            "C": "A database.",
            "D": "A virtual machine."
        },
        "correctAnswer": "B",
        "explanation": "No servers to manage. Pay per millisecond."
    },
    {
        "id": 324,
        "subject": "JavaScript",
        "question": "What is 'Async/Await'?",
        "options": {
            "A": "Waiting for code.",
            "B": "Syntactic sugar built on top of Promises that makes asynchronous code look and behave like synchronous code.",
            "C": "A slow function.",
            "D": "An error."
        },
        "correctAnswer": "B",
        "explanation": "Makes reading async code much easier."
    },
    {
        "id": 325,
        "subject": "Architecture",
        "question": "What is 'Domain Driven Design' (DDD)?",
        "options": {
            "A": "Buying domains.",
            "B": "An approach to software development that centers the design on the core domain and domain logic.",
            "C": "Designing UIs.",
            "D": "Database design."
        },
        "correctAnswer": "B",
        "explanation": "Aligning the code structure with the business reality."
    },
    {
        "id": 326,
        "subject": "Security",
        "question": "What is 'Penetration Testing'?",
        "options": {
            "A": "Testing pens.",
            "B": "A simulated cyberattack against your computer system to check for exploitable vulnerabilities.",
            "C": "Unit testing.",
            "D": "Code review."
        },
        "correctAnswer": "B",
        "explanation": "Ethical hacking."
    },
    {
        "id": 327,
        "subject": "Performance",
        "question": "What is 'Server Side Rendering' (SSR)?",
        "options": {
            "A": "Rendering on the client.",
            "B": "Generating the full HTML for a page on the server in response to a navigation request.",
            "C": "A database.",
            "D": "Caching."
        },
        "correctAnswer": "B",
        "explanation": "Better for SEO and initial load speed than Client Side Rendering."
    },
    {
        "id": 328,
        "subject": "Data Structures",
        "question": "What is a Graph?",
        "options": {
            "A": "A chart.",
            "B": "A non-linear data structure consisting of nodes (vertices) and edges.",
            "C": "A table.",
            "D": "A list."
        },
        "correctAnswer": "B",
        "explanation": "Social networks are Graphs (People = Nodes, Friendships = Edges)."
    },
    {
        "id": 329,
        "subject": "Communication",
        "question": "What is 'Managing Up'?",
        "options": {
            "A": "Being bossy.",
            "B": "Proactively communicating with your manager to make their job easier (and yours better).",
            "C": "Getting promoted.",
            "D": "Quitting."
        },
        "correctAnswer": "B",
        "explanation": "Don't wait to be managed. Manage the relationship."
    },
    {
        "id": 330,
        "subject": "DevOps",
        "question": "What is 'Terraform'?",
        "options": {
            "A": "A video game.",
            "B": "An infrastructure-as-code tool for building, changing, and versioning infrastructure safely and efficiently.",
            "C": "A database.",
            "D": "A cloud provider."
        },
        "correctAnswer": "B",
        "explanation": "Define your AWS/Azure/GCP resources in code."
    },
    {
        "id": 331,
        "subject": "SQL",
        "question": "What is an 'Outer Join'?",
        "options": {
            "A": "Joining outside.",
            "B": "Returns all records when there is a match in either left or right table record.",
            "C": "Inner join.",
            "D": "Deleting data."
        },
        "correctAnswer": "B",
        "explanation": "Includes unmatched rows."
    },
    {
        "id": 332,
        "subject": "Career",
        "question": "What is 'Networking' (Social)?",
        "options": {
            "A": "Connecting cables.",
            "B": "Building professional relationships to exchange information and develop contacts.",
            "C": "Using LinkedIn.",
            "D": "Internet."
        },
        "correctAnswer": "B",
        "explanation": "Who you know matters as much as what you know."
    },
    {
        "id": 333,
        "subject": "Mobile",
        "question": "What is 'Swift'?",
        "options": {
            "A": "Fast.",
            "B": "A powerful and intuitive programming language for iOS, iPadOS, macOS, tvOS, and watchOS.",
            "C": "A bird.",
            "D": "Android language."
        },
        "correctAnswer": "B",
        "explanation": "Replaced Objective-C."
    },
    {
        "id": 334,
        "subject": "System Design",
        "question": "What is a 'Message Queue' (RabbitMQ/Kafka)?",
        "options": {
            "A": "A chat room.",
            "B": "A form of asynchronous service-to-service communication used in serverless and microservices architectures.",
            "C": "A database.",
            "D": "A load balancer."
        },
        "correctAnswer": "B",
        "explanation": "Decouples producers from consumers. Buffer traffic spikes."
    },
    {
        "id": 335,
        "subject": "React",
        "question": "What is 'Redux'?",
        "options": {
            "A": "A reducer.",
            "B": "A predictable state container for JavaScript apps (Global State Management).",
            "C": "A database.",
            "D": "A backend."
        },
        "correctAnswer": "B",
        "explanation": "Centralizes application state."
    },
    {
        "id": 336,
        "subject": "Security",
        "question": "What is 'Hashing' vs 'Encryption'?",
        "options": {
            "A": "Same thing.",
            "B": "Encryption is two-way (can decrypt); Hashing is one-way (cannot retrieve original data).",
            "C": "Hashing is reversible.",
            "D": "Encryption is for passwords."
        },
        "correctAnswer": "B",
        "explanation": "Passwords should be hashed. Messages should be encrypted."
    },
    {
        "id": 337,
        "subject": "Web",
        "question": "What is 'Localhost'?",
        "options": {
            "A": "The internet.",
            "B": "The default name describing the local computer address (loopback address 127.0.0.1).",
            "C": "A server.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "There's no place like 127.0.0.1."
    },
    {
        "id": 338,
        "subject": "Testing",
        "question": "What is 'Mocking'?",
        "options": {
            "A": "Making fun.",
            "B": "Creating objects that simulate the behavior of real objects for testing purposes.",
            "C": "Running production code.",
            "D": "Deploying."
        },
        "correctAnswer": "B",
        "explanation": "Don't hit the real credit card API in your tests."
    },
    {
        "id": 339,
        "subject": "Productivity",
        "question": "What is 'Deep Work'?",
        "options": {
            "A": "Working underground.",
            "B": "Professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limit.",
            "C": "Working at night.",
            "D": "Easy work."
        },
        "correctAnswer": "B",
        "explanation": "Where real coding happens."
    },
    {
        "id": 340,
        "subject": "Git",
        "question": "What is `git branch`?",
        "options": {
            "A": "A tree.",
            "B": "A command to list, create, or delete branches.",
            "C": "A commit.",
            "D": "A repository."
        },
        "correctAnswer": "B",
        "explanation": "Branches allow parallel development."
    },
    {
        "id": 341,
        "subject": "DevOps",
        "question": "What is 'SRE'?",
        "options": {
            "A": "Super Real Engineer.",
            "B": "Site Reliability Engineering.",
            "C": "System Reset Error.",
            "D": "Server Reboot Engine."
        },
        "correctAnswer": "B",
        "explanation": "Applying software engineering principles to operations/infrastructure problems."
    },
    {
        "id": 342,
        "subject": "Architecture",
        "question": "What is 'Middleware'?",
        "options": {
            "A": "Software that lies between an operating system and the applications running on it (or between request and response in web frameworks).",
            "B": "Hardware.",
            "C": "A database.",
            "D": "A frontend."
        },
        "correctAnswer": "A",
        "explanation": "The 'glue' of software."
    },
    {
        "id": 343,
        "subject": "Cloud",
        "question": "What is 'Elasticity'?",
        "options": {
            "A": "Rubber bands.",
            "B": "The degree to which a system is able to adapt to workload changes by provisioning and de-provisioning resources in an autonomic manner.",
            "C": "Cost.",
            "D": "Speed."
        },
        "correctAnswer": "B",
        "explanation": "Scale up when busy, scale down when quiet."
    },
    {
        "id": 344,
        "subject": "JavaScript",
        "question": "What is `NaN`?",
        "options": {
            "A": "Bread.",
            "B": "Not-a-Number (a property of the global object).",
            "C": "A number.",
            "D": "Null."
        },
        "correctAnswer": "B",
        "explanation": "Result of invalid math operations (e.g., 5 * 'apple')."
    },
    {
        "id": 345,
        "subject": "Data",
        "question": "What is 'Data Warehouse'?",
        "options": {
            "A": "A building.",
            "B": "A large store of data accumulated from a wide range of sources within a company and used to guide management decisions.",
            "C": "A database.",
            "D": "A backup."
        },
        "correctAnswer": "B",
        "explanation": "Optimized for analysis (OLAP), not transactions (OLTP)."
    },
    {
        "id": 346,
        "subject": "Security",
        "question": "What is 'Phishing'?",
        "options": {
            "A": "Fishing.",
            "B": "The fraudulent practice of sending emails purporting to be from reputable companies to induce individuals to reveal personal information.",
            "C": "Hacking.",
            "D": "Coding."
        },
        "correctAnswer": "B",
        "explanation": "Social engineering attack."
    },
    {
        "id": 347,
        "subject": "Networking",
        "question": "What is 'Bandwidth'?",
        "options": {
            "A": "Width of a band.",
            "B": "The maximum rate of data transfer across a given path.",
            "C": "Speed.",
            "D": "Latency."
        },
        "correctAnswer": "B",
        "explanation": "Capacity, not speed."
    },
    {
        "id": 348,
        "subject": "Communication",
        "question": "How do you handle a mistake?",
        "options": {
            "A": "Hide it.",
            "B": "Admit it quickly, fix it, and learn from it.",
            "C": "Blame others.",
            "D": "Quit."
        },
        "correctAnswer": "B",
        "explanation": "Ownership is a senior trait."
    },
    {
        "id": 349,
        "subject": "Mobile",
        "question": "What is 'Android'?",
        "options": {
            "A": "A robot.",
            "B": "A mobile operating system based on a modified version of the Linux kernel.",
            "C": "iOS.",
            "D": "A phone."
        },
        "correctAnswer": "B",
        "explanation": "Open source OS by Google."
    },
    {
        "id": 350,
        "subject": "API",
        "question": "What is 'Status Code 200'?",
        "options": {
            "A": "Error.",
            "B": "OK (Success).",
            "C": "Not Found.",
            "D": "Server Error."
        },
        "correctAnswer": "B",
        "explanation": "Everything is fine."
    },
    {
        "id": 351,
        "subject": "Linux",
        "question": "What is `ls`?",
        "options": {
            "A": "Loss.",
            "B": "List directory contents.",
            "C": "Less.",
            "D": "Last."
        },
        "correctAnswer": "B",
        "explanation": "The most used command."
    },
    {
        "id": 352,
        "subject": "Design Patterns",
        "question": "What is 'MVC'?",
        "options": {
            "A": "Model View Controller.",
            "B": "Make View Code.",
            "C": "Move Value Check.",
            "D": "A database."
        },
        "correctAnswer": "A",
        "explanation": "Separation of concerns."
    },
    {
        "id": 353,
        "subject": "Testing",
        "question": "What is 'Unit Testing'?",
        "options": {
            "A": "Testing the whole app.",
            "B": "Testing individual units or components of a software.",
            "C": "Manual testing.",
            "D": "Integration testing."
        },
        "correctAnswer": "B",
        "explanation": "Smallest scope of testing."
    },
    {
        "id": 354,
        "subject": "Web",
        "question": "What is 'CSS'?",
        "options": {
            "A": "Cascading Style Sheets.",
            "B": "Computer Style Sheets.",
            "C": "Creative Style System.",
            "D": "Coding Style Sheets."
        },
        "correctAnswer": "A",
        "explanation": "Makes the web look good."
    },
    {
        "id": 355,
        "subject": "Database",
        "question": "What is 'CRUD'?",
        "options": {
            "A": "Bad code.",
            "B": "Create, Read, Update, Delete.",
            "C": "Create, Run, Update, Do.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "The 4 basic functions of persistent storage."
    },
    {
        "id": 356,
        "subject": "Career",
        "question": "What is a 'Full Stack Developer'?",
        "options": {
            "A": "A developer who eats a lot.",
            "B": "Someone who can work on both the front-end (client) and back-end (server) portions of an application.",
            "C": "A designer.",
            "D": "A manager."
        },
        "correctAnswer": "B",
        "explanation": "Jack of all trades."
    },
    {
        "id": 357,
        "subject": "Security",
        "question": "What is 'SSL'?",
        "options": {
            "A": "Secure Sockets Layer.",
            "B": "Super Safe Link.",
            "C": "System Secure Level.",
            "D": "A lock."
        },
        "correctAnswer": "A",
        "explanation": "The predecessor to TLS."
    },
    {
        "id": 358,
        "subject": "Git",
        "question": "What is `git push`?",
        "options": {
            "A": "Pushing buttons.",
            "B": "Uploading local repository content to a remote repository.",
            "C": "Downloading code.",
            "D": "Deleting code."
        },
        "correctAnswer": "B",
        "explanation": "Sharing your work."
    },
    {
        "id": 359,
        "subject": "DevOps",
        "question": "What is 'Continuous Integration'?",
        "options": {
            "A": "Working all the time.",
            "B": "The practice of merging all developers' working copies to a shared mainline several times a day.",
            "C": "Deploying.",
            "D": "Testing."
        },
        "correctAnswer": "B",
        "explanation": "Detects integration errors early."
    },
    {
        "id": 360,
        "subject": "Agile",
        "question": "What is 'Kanban'?",
        "options": {
            "A": "A city.",
            "B": "A visual method for managing work (Boards, Lists, Cards).",
            "C": "A coding language.",
            "D": "A meeting."
        },
        "correctAnswer": "B",
        "explanation": "Focuses on flow and limiting Work In Progress (WIP)."
    },
    {
        "id": 361,
        "subject": "Performance",
        "question": "What is 'Lazy Loading'?",
        "options": {
            "A": "Being lazy.",
            "B": "Loading resources only when they are required.",
            "C": "Loading everything at once.",
            "D": "A slow server."
        },
        "correctAnswer": "B",
        "explanation": "Improves initial load time."
    },
    {
        "id": 362,
        "subject": "Networking",
        "question": "What is 'DNS'?",
        "options": {
            "A": "Do Not Sleep.",
            "B": "Domain Name System - translates domain names to IP addresses.",
            "C": "Data Network System.",
            "D": "A server."
        },
        "correctAnswer": "B",
        "explanation": "The phonebook of the internet."
    },
    {
        "id": 363,
        "subject": "Soft Skills",
        "question": "What is 'Emotional Intelligence' (EQ)?",
        "options": {
            "A": "Being smart.",
            "B": "The ability to understand, use, and manage your own emotions in positive ways.",
            "C": "Crying.",
            "D": "Being angry."
        },
        "correctAnswer": "B",
        "explanation": "Critical for leadership and teamwork."
    },
    {
        "id": 364,
        "subject": "Architecture",
        "question": "What is 'Monolithic Architecture'?",
        "options": {
            "A": "A statue.",
            "B": "A unified model for the design of a software program (all in one).",
            "C": "Microservices.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "Simple to deploy, hard to scale."
    },
    {
        "id": 365,
        "subject": "JavaScript",
        "question": "What is `npm`?",
        "options": {
            "A": "Node Package Manager.",
            "B": "No Problem Man.",
            "C": "New Package Mode.",
            "D": "A database."
        },
        "correctAnswer": "A",
        "explanation": "Manages dependencies."
    },
    {
        "id": 366,
        "subject": "SQL",
        "question": "What is a 'Table'?",
        "options": {
            "A": "Furniture.",
            "B": "A collection of related data held in a structured format within a database.",
            "C": "A list.",
            "D": "A file."
        },
        "correctAnswer": "B",
        "explanation": "Columns and Rows."
    },
    {
        "id": 367,
        "subject": "Testing",
        "question": "What is 'Integration Testing'?",
        "options": {
            "A": "Testing math.",
            "B": "Testing where individual units are combined and tested as a group.",
            "C": "Unit testing.",
            "D": "Manual testing."
        },
        "correctAnswer": "B",
        "explanation": "Ensures modules work together."
    },
    {
        "id": 368,
        "subject": "Security",
        "question": "What is 'Encryption'?",
        "options": {
            "A": "Hiding.",
            "B": "The process of converting information or data into a code, especially to prevent unauthorized access.",
            "C": "Deleting.",
            "D": "Locking."
        },
        "correctAnswer": "B",
        "explanation": "Confidentiality."
    },
    {
        "id": 369,
        "subject": "Frontend",
        "question": "What is 'DOM'?",
        "options": {
            "A": "Document Object Model.",
            "B": "Data On Monitor.",
            "C": "Disk Operating Mode.",
            "D": "A person."
        },
        "correctAnswer": "A",
        "explanation": "The interface between JS and HTML."
    },
    {
        "id": 370,
        "subject": "Cloud",
        "question": "What is 'IaaS'?",
        "options": {
            "A": "Internet as a Service.",
            "B": "Infrastructure as a Service (e.g., EC2).",
            "C": "Info as a Service.",
            "D": "Apple."
        },
        "correctAnswer": "B",
        "explanation": "Rent raw servers."
    },
    {
        "id": 371,
        "subject": "Mobile",
        "question": "What is 'Kotlin'?",
        "options": {
            "A": "A ketchup brand.",
            "B": "A programming language used for Android development.",
            "C": "A database.",
            "D": "An iOS tool."
        },
        "correctAnswer": "B",
        "explanation": "Replaced Java for Android."
    },
    {
        "id": 372,
        "subject": "Career",
        "question": "What is 'LinkedIn'?",
        "options": {
            "A": "A game.",
            "B": "A professional networking site.",
            "C": "A dating site.",
            "D": "A coding tool."
        },
        "correctAnswer": "B",
        "explanation": "Where recruiters live."
    },
    {
        "id": 373,
        "subject": "Git",
        "question": "What is `git status`?",
        "options": {
            "A": "Checking Facebook.",
            "B": "Displays the state of the working directory and the staging area.",
            "C": "Deleting files.",
            "D": "Saving code."
        },
        "correctAnswer": "B",
        "explanation": "Check before you commit."
    },
    {
        "id": 374,
        "subject": "Data Structures",
        "question": "What is a 'Queue'?",
        "options": {
            "A": "A line.",
            "B": "A First-In-First-Out (FIFO) data structure.",
            "C": "A stack.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "Like a line at a store."
    },
    {
        "id": 375,
        "subject": "DevOps",
        "question": "What is 'Docker'?",
        "options": {
            "A": "Pants.",
            "B": "A platform for developing, shipping, and running applications in containers.",
            "C": "A boat.",
            "D": "A server."
        },
        "correctAnswer": "B",
        "explanation": "Standard for containers."
    },
    {
        "id": 376,
        "subject": "Communication",
        "question": "What is 'Over-communication'?",
        "options": {
            "A": "Talking too much.",
            "B": "Communicating more than necessary to ensure clarity, especially in remote teams.",
            "C": "Spam.",
            "D": "Bad."
        },
        "correctAnswer": "B",
        "explanation": "Better to say it twice than have it misunderstood."
    },
    {
        "id": 377,
        "subject": "Web",
        "question": "What is 'HTTP'?",
        "options": {
            "A": "Hypertext Transfer Protocol.",
            "B": "High Tech Transfer Program.",
            "C": "HTML.",
            "D": "A website."
        },
        "correctAnswer": "A",
        "explanation": "The protocol of the web."
    },
    {
        "id": 378,
        "subject": "System Design",
        "question": "What is 'Load Balancing'?",
        "options": {
            "A": "Weighing scales.",
            "B": "Distributing network traffic across multiple servers.",
            "C": "Coding.",
            "D": "Testing."
        },
        "correctAnswer": "B",
        "explanation": "Prevents overload."
    },
    {
        "id": 379,
        "subject": "Python",
        "question": "What is `print()`?",
        "options": {
            "A": "A printer.",
            "B": "A function that outputs text to the console.",
            "C": "A variable.",
            "D": "An error."
        },
        "correctAnswer": "B",
        "explanation": "Basic output."
    },
    {
        "id": 380,
        "subject": "Security",
        "question": "What is 'Vulnerability'?",
        "options": {
            "A": "Being sad.",
            "B": "A weakness which can be exploited by a cyber attack.",
            "C": "Strong code.",
            "D": "A firewall."
        },
        "correctAnswer": "B",
        "explanation": "A hole in the armor."
    },
    {
        "id": 381,
        "subject": "Agile",
        "question": "What is a 'Stand-up'?",
        "options": {
            "A": "Comedy.",
            "B": "A daily short meeting to discuss progress and blockers.",
            "C": "Standing up.",
            "D": "A presentation."
        },
        "correctAnswer": "B",
        "explanation": "Daily synchronization."
    },
    {
        "id": 382,
        "subject": "Linux",
        "question": "What is `cd`?",
        "options": {
            "A": "A disk.",
            "B": "Change Directory.",
            "C": "Create Directory.",
            "D": "Copy Data."
        },
        "correctAnswer": "B",
        "explanation": "Navigation."
    },
    {
        "id": 383,
        "subject": "Frontend",
        "question": "What is 'UX'?",
        "options": {
            "A": "User Experience.",
            "B": "User Xylophone.",
            "C": "Under Xray.",
            "D": "Code."
        },
        "correctAnswer": "A",
        "explanation": "How it feels."
    },
    {
        "id": 384,
        "subject": "Career",
        "question": "What is a 'Portfolio'?",
        "options": {
            "A": "A bag.",
            "B": "A collection of work samples to show potential employers.",
            "C": "A resume.",
            "D": "A stock market."
        },
        "correctAnswer": "B",
        "explanation": "Proof of skills."
    },
    {
        "id": 385,
        "subject": "API",
        "question": "What is 'JSON'?",
        "options": {
            "A": "A person.",
            "B": "JavaScript Object Notation.",
            "C": "Java Source.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "Data format."
    },
    {
        "id": 386,
        "subject": "Architecture",
        "question": "What is 'Microservices'?",
        "options": {
            "A": "Small computers.",
            "B": "An architectural style that structures an application as a collection of services.",
            "C": "One big app.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "Complex but scalable."
    },
    {
        "id": 387,
        "subject": "Git",
        "question": "What is `git init`?",
        "options": {
            "A": "Initializing a new Git repository.",
            "B": "Starting computer.",
            "C": "Deleting repo.",
            "D": "Uploading."
        },
        "correctAnswer": "A",
        "explanation": "Start here."
    },
    {
        "id": 388,
        "subject": "Testing",
        "question": "What is a 'Bug Report'?",
        "options": {
            "A": "An insect list.",
            "B": "A document describing a software defect.",
            "C": "A fix.",
            "D": "Code."
        },
        "correctAnswer": "B",
        "explanation": "Communication of defects."
    },
    {
        "id": 389,
        "subject": "Soft Skills",
        "question": "What is 'Time Management'?",
        "options": {
            "A": "Wearing a watch.",
            "B": "The process of organizing and planning how to divide your time between specific activities.",
            "C": "Working fast.",
            "D": "Being late."
        },
        "correctAnswer": "B",
        "explanation": "Essential for productivity."
    },
    {
        "id": 390,
        "subject": "Data",
        "question": "What is 'Backup'?",
        "options": {
            "A": "Going back.",
            "B": "A copy of data taken and stored elsewhere so that it may be used to restore the original after a data loss event.",
            "C": "Deleting.",
            "D": "Coding."
        },
        "correctAnswer": "B",
        "explanation": "Insurance for data."
    },
    {
        "id": 391,
        "subject": "Web",
        "question": "What is 'IP'?",
        "options": {
            "A": "Intellectual Property.",
            "B": "Internet Protocol.",
            "C": "Internal Port.",
            "D": "Address."
        },
        "correctAnswer": "B",
        "explanation": "The rules of the internet."
    },
    {
        "id": 392,
        "subject": "Security",
        "question": "What is 'Malware'?",
        "options": {
            "A": "Bad wear.",
            "B": "Malicious Software.",
            "C": "A hardware.",
            "D": "A User."
        },
        "correctAnswer": "B",
        "explanation": "Viruses, worms, trojans."
    },
    {
        "id": 393,
        "subject": "DevOps",
        "question": "What is 'Monitoring'?",
        "options": {
            "A": "Watching TV.",
            "B": "The process of collecting, analyzing, and using information to track applications and infrastructure.",
            "C": "Coding.",
            "D": "Testing."
        },
        "correctAnswer": "B",
        "explanation": "Keeping the lights on."
    },
    {
        "id": 394,
        "subject": "JavaScript",
        "question": "What is a 'Callback'?",
        "options": {
            "A": "A phone call.",
            "B": "A function passed as an argument to another function.",
            "C": "A variable.",
            "D": "An error."
        },
        "correctAnswer": "B",
        "explanation": "Basis of async JS."
    },
    {
        "id": 395,
        "subject": "Mobile",
        "question": "What is 'App Store'?",
        "options": {
            "A": "A shop.",
            "B": "A digital distribution platform for mobile apps.",
            "C": "A website.",
            "D": "A database."
        },
        "correctAnswer": "B",
        "explanation": "Where you get apps."
    },
    {
        "id": 396,
        "subject": "Networking",
        "question": "What is 'Wifi'?",
        "options": {
            "A": "Magic.",
            "B": "A wireless networking technology.",
            "C": "A cable.",
            "D": "A server."
        },
        "correctAnswer": "B",
        "explanation": "Radio waves for internet."
    },
    {
        "id": 397,
        "subject": "Career",
        "question": "What is a 'Resume'?",
        "options": {
            "A": "To continue.",
            "B": "A document used to present your background, skills, and accomplishments.",
            "C": "A job.",
            "D": "A portfolio."
        },
        "correctAnswer": "B",
        "explanation": "Your ticket to an interview."
    },
    {
        "id": 398,
        "subject": "Performance",
        "question": "What is 'Compression'?",
        "options": {
            "A": "Squeezing.",
            "B": "Encoding information using fewer bits than the original representation.",
            "C": "Deleting.",
            "D": "Coding."
        },
        "correctAnswer": "B",
        "explanation": "Makes files smaller."
    },
    {
        "id": 399,
        "subject": "Data Structures",
        "question": "What is a 'Stack'?",
        "options": {
            "A": "A pile.",
            "B": "A Last-In-First-Out (LIFO) data structure.",
            "C": "A queue.",
            "D": "A list."
        },
        "correctAnswer": "B",
        "explanation": "Like a stack of plates."
    },
    {
        "id": 400,
        "subject": "Final",
        "question": "What is 'Code'?",
        "options": {
            "A": "Secret message.",
            "B": "Instructions for a computer.",
            "C": "A password.",
            "D": "A game."
        },
        "correctAnswer": "B",
        "explanation": "The language of machines."
    }
]