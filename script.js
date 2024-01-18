const paragraphs = [
    "Climate change poses a grave threat to our planet, with rising temperatures, melting ice caps, and extreme weather events becoming more frequent. Urgent global action is essential to mitigate the impact and transition to sustainable practices. Governments, industries, and individuals must collaborate to reduce carbon emissions, protect ecosystems and embrace renewable energy sources to ensure a sustainable and resilient future for generations to come.",
    "Advancements in technology have revolutionized education, transforming traditional classrooms into dynamic learning environments. The integration of interactive tools and online resources has made education more accessible and engaging. Students now have the opportunity to explore subjects through immersive experiences, fostering a deeper understanding of complex concepts. However, the rapid pace of technological change also challenges educators to adapt",
    "The concept of artificial intelligence has sparked intense debates globally. Advocates emphasize its potential to revolutionize industries, streamline processes, and enhance convenience. Conversely, skeptics raise concerns about job displacement, ethical implications, and potential misuse. As AI continues to advance, striking a balance between innovation and responsible implementation becomes paramount, requiring careful consideration of societal",
    "Climate change, driven by human activities, poses an unprecedented threat to our planet. Rising global temperatures, melting ice caps, and extreme weather events are clear indicators of the urgent need for action. Sustainable practices, renewable energy, and international cooperation are crucial in mitigating the impact. It's a collective responsibility to safeguard the environment and ensure a sustainable future for generations to come.",
    "The intricate dance of ecosystems hinges on delicate balances, where flora and fauna coalesce in harmonious symphony. Amidst the vast canvas of nature, climate change emerges as a formidable disruptor, challenging this equilibrium. As temperatures rise, habitats transform, imperiling countless species. Urgent global collaboration is imperative, as we navigate the daunting task of preserving biodiversity and safeguarding the interconnected web of life that sustains our planet.",
    "The Earth's climate is undergoing significant changes due to human activities, leading to concerns about rising temperatures and extreme weather events. Efforts to mitigate climate change include transitioning to renewable energy sources, promoting sustainable practices, and raising awareness. International cooperation is crucial in addressing this global issue, as nations work together to implement effective policies and reduce carbon emissions. ",
    "Renewable energy is transforming the global landscape, offering sustainable alternatives to traditional fossil fuels. Solar and wind power, in particular, have gained prominence, harnessing the Earth's natural resources. As countries strive to reduce carbon emissions and combat climate change, investments in renewable technologies have surged. The shift towards cleaner energy sources not only addresses environmental concerns but also fosters innovation",
    "The rapid advancement of technology continues to reshape our daily lives, impacting communication, work, and entertainment. Artificial intelligence, in particular, plays a pivotal role, revolutionizing industries and sparking ethical debates. Climate change remains a pressing global concern, prompting calls for sustainable practices and renewable energy solutions. In healthcare, breakthroughs in genetic research hold promise for personalized treatments. Society grapples with these complex issues",
    "The impact of climate change is increasingly evident, with rising temperatures, extreme weather events, and melting ice caps. Governments and individuals must prioritize sustainable practices to mitigate further damage. Clean energy solutions, conservation efforts, and policy changes are essential to safeguard the planet's future. By fostering a global commitment to environmental responsibility, we can work towards a more sustainable and resilient world for generations to come.",
    "The marvels of artificial intelligence continue to reshape industries, from healthcare to finance. In medicine, AI assists in diagnostics and drug discovery, offering unprecedented efficiency. Meanwhile, financial sectors leverage AI for risk assessment and fraud detection. These advancements underscore a transformative era where technology converges with human expertise, unlocking new possibilities and challenges across diverse fields.",
    "Renewable energy sources play a pivotal role in addressing environmental concerns. Solar and wind power, for instance, offer sustainable alternatives to traditional fossil fuels, reducing greenhouse gas emissions. Governments and industries worldwide are investing in innovative technologies to harness clean energy, fostering a transition towards a more environmentally friendly and sustainable future. ",
    "Renewable energy sources, such as solar and wind power, play a pivotal role in addressing the global energy crisis. Harnessing these sustainable alternatives not only mitigates environmental impact but also promotes energy independence. Governments and businesses worldwide are investing in innovative technologies to increase the share of renewables in their energy portfolios, paving the way for a cleaner and more sustainable future.",
    "Artificial intelligence (AI) continues to revolutionize industries, from healthcare to finance. Its ability to analyze vast datasets and make data-driven decisions has led to groundbreaking innovations. However, ethical concerns regarding privacy and job displacement persist. Striking a balance between technological advancement and ethical considerations remains a critical challenge for the widespread adoption of AI in a rapidly evolving digital landscape.",
    "Climate change poses a formidable threat to our planet, triggering severe weather events, rising sea levels, and ecological imbalance. Urgent action is imperative to mitigate its impact and transition to sustainable practices. Governments, industries, and individuals must collaborate to reduce carbon emissions, embrace renewable energy, and foster environmental stewardship. The fate of our planet rests on our collective commitment to address this pressing global challenge.",
    "The rapid evolution of technology has reshaped our daily lives, fostering connectivity and convenience. Social media platforms enable instant communication, while advanced healthcare technologies enhance diagnostics. However, concerns about privacy and digital addiction persist. Striking a balance between technological integration and societal well-being is crucial.",
    "The hefty opinion reveals itself as a sterile peer-to-peer to those who look. This could be, or perhaps the watch of a diamond becomes a bosom baboon. In recent years, some posit the unstuffed road to be less than altern. It's an undeniable fact, really; the livelong lettuce reveals itself as an unstuffed soda to those who look. In ancient times a bit is a balance's season. The popcorn of a morning becomes a moonless beauty.",
    "In the vast realm of programming, developers grapple with topics ranging from fundamental algorithms and data structures to advanced machine learning and artificial intelligence. The evolution of programming languages, debugging techniques, version control systems, and software design patterns constantly shape the developer landscape. ",
    "Programming encompasses a vast array of topics, from fundamental concepts like variables, loops, and conditionals, to advanced subjects like machine learning, algorithms, and data structures. Languages such as Python, Java, and C++ are crucial, while web development involves HTML, CSS, and JavaScript. DevOps practices, version control with Git, and cloud computing are essential for efficient collaboration and deployment. ",
    "Electric vehicles (EVs) represent a pivotal shift in transportation, addressing environmental concerns and reducing dependency on fossil fuels. Their widespread adoption promises cleaner air, lower greenhouse gas emissions, and reduced reliance on finite resources. Advances in battery technology, charging infrastructure, and government incentives are driving the EV revolution, paving the way for a sustainable and efficient future in the automotive industry.",
];

const typingText = document.querySelector(".typing-text p")
const inpField = document.querySelector(".wrapper .input-field")
const tryAgainBtn = document.querySelector(".content button")
const timeTag = document.querySelector(".time span b")
const mistakeTag = document.querySelector(".mistake span")
const wpmTag = document.querySelector(".wpm span")
const cpmTag = document.querySelector(".cpm span")

let timer;
let maxTime = 60;
let timeLeft = maxTime;
let charIndex = mistakes = isTyping = 0;

function loadParagraph() {
    const ranIndex = Math.floor(Math.random() * paragraphs.length);
    typingText.innerHTML = "";
    paragraphs[ranIndex].split("").forEach(char => {
        console.log(char);
        let span = `<span>${char}</span>`
        typingText.innerHTML += span;
    });
    typingText.querySelectorAll("span")[0].classList.add("active");
    document.addEventListener("keydown", () => inpField.focus());
    typingText.addEventListener("click", () => inpField.focus());
}

function initTyping() {
    let characters = typingText.querySelectorAll("span");
    let typedChar = inpField.value.split("")[charIndex];
    if (charIndex < characters.length - 1 && timeLeft > 0) {
        if (!isTyping) {
            timer = setInterval(initTimer, 1000);
            isTyping = true;
        }
        if (typedChar == null) {
            if (charIndex > 0) {
                charIndex--;
                if (characters[charIndex].classList.contains("incorrect")) {
                    mistakes--;
                }
                characters[charIndex].classList.remove("correct", "incorrect");
            }
        } else {
            if (characters[charIndex].innerText == typedChar) {
                characters[charIndex].classList.add("correct");
            } else {
                mistakes++;
                characters[charIndex].classList.add("incorrect");
            }
            charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");

        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpm = wpm < 0 || !wpm || wpm === Infinity ? 0: wpm;

        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        clearInterval(timer);
        inpField.value = "";
    }
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timeTag.innerText = timeLeft;
        let wpm = Math.round(((charIndex - mistakes) / 5) / (maxTime - timeLeft) * 60);
        wpmTag.innerText = wpm;
    } else {
        clearInterval(timer);
    }
}

function resetGame() {
    loadParagraph();
    clearInterval(timer);
    timeLeft = maxTime;
    charIndex = mistakes = isTyping = 0;
    inpField.value = "";
    timeTag.innerText = timeLeft;
    wpmTag.innerText = 0;
    mistakeTag.innerText = 0;
    cpmTag.innerText = 0;
}

loadParagraph();
inpField.addEventListener("input", initTyping);
tryAgainBtn.addEventListener("click", resetGame);