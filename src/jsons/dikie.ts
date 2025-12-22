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
    }
]