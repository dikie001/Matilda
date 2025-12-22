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
    }
]