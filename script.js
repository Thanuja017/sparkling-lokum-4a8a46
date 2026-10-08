/* ---------------- PAGINATION ---------------- */

let currentPage = 1;
const toolsPerPage = 10;

/* ---------------- TOOL DATA ---------------- */

const tools = [
  /* WRITING */

  {
    name: "Writesonic",
    category: "Writing",
    price: "Premium",
    rating: 4.2,
    desc: "AI content generator for blogs and marketing.",
    link: "https://writesonic.com",
  },

  {
    name: "Copy.ai",
    category: "Writing",
    price: "Premium",
    rating: 4.0,
    desc: "Generate ads, marketing copy and emails.",
    link: "https://www.copy.ai",
  },

  {
    name: "Grammarly",
    category: "Writing",
    price: "Premium",
    rating: 4.5,
    desc: "AI grammar and writing assistant.",
    link: "https://www.grammarly.com",
  },

  {
    name: "Rytr",
    category: "Writing",
    price: "Free",
    rating: 4.1,
    desc: "Lightweight AI writing assistant.",
    link: "https://rytr.me",
  },

  /* IMAGE */

  {
    name: "Midjourney",
    category: "Image",
    price: "Paid",
    rating: 4.8,
    desc: "Generate high-quality AI artwork.",
    link: "https://www.midjourney.com",
  },

  {
    name: "DALL-E",
    category: "Image",
    price: "Premium",
    rating: 4.7,
    desc: "Create images from text prompts.",
    link: "https://openai.com/dall-e",
  },

  {
    name: "NightCafe",
    category: "Image",
    price: "Free",
    rating: 4.0,
    desc: "AI art generator community platform.",
    link: "https://creator.nightcafe.studio",
  },

  {
    name: "Leonardo AI",
    category: "Image",
    price: "Premium",
    rating: 4.4,
    desc: "Game asset and art generation AI.",
    link: "https://leonardo.ai",
  },

  /* CODE */

  {
    name: "GitHub Copilot",
    category: "Code",
    price: "Paid",
    rating: 4.6,
    desc: "AI pair programmer for developers.",
    link: "https://github.com/features/copilot",
  },

  {
    name: "Tabnine",
    category: "Code",
    price: "Premium",
    rating: 4.1,
    desc: "AI coding autocomplete assistant.",
    link: "https://www.tabnine.com",
  },

  {
    name: "Codeium",
    category: "Code",
    price: "Free",
    rating: 4.3,
    desc: "Free AI coding assistant.",
    link: "https://codeium.com",
  },

  /* VIDEO */

  {
    name: "Runway ML",
    category: "Video",
    price: "Premium",
    rating: 4.5,
    desc: "AI video generation and editing.",
    link: "https://runwayml.com",
  },

  {
    name: "Synthesia",
    category: "Video",
    price: "Paid",
    rating: 4.6,
    desc: "Create AI avatar videos.",
    link: "https://www.synthesia.io",
  },

  {
    name: "Pictory",
    category: "Video",
    price: "Premium",
    rating: 4.1,
    desc: "Convert blog posts into videos.",
    link: "https://pictory.ai",
  },

  {
    name: "Luma AI",
    category: "Video",
    price: "Free",
    rating: 4.2,
    desc: "3D scene and AI video creation.",
    link: "https://lumalabs.ai",
  },

  /* AUDIO */

  {
    name: "ElevenLabs",
    category: "Audio",
    price: "Premium",
    rating: 4.6,
    desc: "Ultra realistic AI voice generation.",
    link: "https://elevenlabs.io",
  },

  {
    name: "PlayHT",
    category: "Audio",
    price: "Premium",
    rating: 4.2,
    desc: "Text-to-speech voice generator.",
    link: "https://play.ht",
  },

  {
    name: "Murf AI",
    category: "Audio",
    price: "Paid",
    rating: 4.4,
    desc: "Professional AI voiceovers.",
    link: "https://murf.ai",
  },

  {
    name: "Voicemod AI",
    category: "Audio",
    price: "Free",
    rating: 4.0,
    desc: "Real-time AI voice changer.",
    link: "https://www.voicemod.net",
  },

  /* PRODUCTIVITY */

  {
    name: "Notion AI",
    category: "Productivity",
    price: "Premium",
    rating: 4.4,
    desc: "AI assistant inside Notion workspace.",
    link: "https://www.notion.so/product/ai",
  },

  {
    name: "Tome AI",
    category: "Productivity",
    price: "Premium",
    rating: 4.2,
    desc: "AI powered presentation creator.",
    link: "https://tome.app",
  },

  {
    name: "Taskade",
    category: "Productivity",
    price: "Free",
    rating: 4.1,
    desc: "AI powered team productivity tool.",
    link: "https://www.taskade.com",
  },

  /* CHATBOTS */

  {
    name: "ChatGPT",
    category: "Chatbot",
    price: "Premium",
    rating: 4.8,
    desc: "Advanced conversational AI assistant.",
    link: "https://chat.openai.com",
  },

  {
    name: "Claude",
    category: "Chatbot",
    price: "Premium",
    rating: 4.7,
    desc: "Anthropic AI assistant.",
    link: "https://claude.ai",
  },

  {
    name: "Gemini",
    category: "Chatbot",
    price: "Free",
    rating: 4.6,
    desc: "Google AI assistant.",
    link: "https://gemini.google.com",
  },

  {
    name: "Character AI",
    category: "Chatbot",
    price: "Free",
    rating: 4.3,
    desc: "Create and chat with AI characters.",
    link: "https://character.ai",
  },
];

/* ---------------- GENERATE EXTRA TOOLS ---------------- */

const categories = [
  "Writing",
  "Image",
  "Code",
  "Video",
  "Audio",
  "Productivity",
  "Chatbot",
];
const prices = ["Free", "Premium", "Paid"];

for (let i = 1; i <= 100; i++) {
  tools.push({
    name: "AI Tool " + i,
    category: categories[i % categories.length],
    price: prices[i % prices.length],
    rating: Number((Math.random() * 5).toFixed(1)),
    desc: "Example AI tool for pagination testing.",
    link: "https://example.com/tool" + i,
  });
}

/* ---------------- FILTER STATES ---------------- */

let category = "All";
let price = "All";

/* ---------------- DOM ELEMENTS ---------------- */

const container = document.getElementById("toolsContainer");
const searchBar = document.getElementById("searchBar");
const toolCount = document.getElementById("toolCount");
const pagination = document.getElementById("pagination");

/* ---------------- STAR GENERATOR ---------------- */

function generateStars(rating) {
  let stars = "";
  let fullStars = Math.floor(rating);

  for (let i = 0; i < fullStars; i++) stars += "★";
  for (let i = fullStars; i < 5; i++) stars += "☆";

  return stars;
}

/* ---------------- DISPLAY TOOLS ---------------- */

function displayTools() {
  container.innerHTML = "";

  const search = searchBar.value.toLowerCase();

  const filtered = tools.filter((tool) => {
    return (
      (category === "All" || tool.category === category) &&
      (price === "All" || tool.price === price) &&
      tool.name.toLowerCase().includes(search)
    );
  });

  const start = (currentPage - 1) * toolsPerPage;
  const end = start + toolsPerPage;

  const paginatedTools = filtered.slice(start, end);

  paginatedTools.forEach((tool) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `

<h3>${tool.name}</h3>
<p>${tool.desc}</p>

<div class="tags">
<span class="tag">${tool.category}</span>
<span class="tag">${tool.price}</span>
</div>

<div class="rating">
${generateStars(tool.rating)}
<span>${tool.rating}</span>
</div>

<a class="visit" href="${tool.link}" target="_blank">
Visit Website →
</a>

`;

    container.appendChild(card);
  });

  toolCount.innerText = filtered.length + " AI tools available";

  renderPagination(filtered.length);
}

/* ---------------- PAGINATION ---------------- */

function renderPagination(totalTools) {
  const totalPages = Math.ceil(totalTools / toolsPerPage);

  pagination.innerHTML = "";

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");

    btn.innerText = i;

    if (i === currentPage) {
      btn.style.background = "#38bdf8";
      btn.style.color = "black";
    }

    btn.onclick = () => {
      currentPage = i;
      displayTools();
    };

    pagination.appendChild(btn);
  }
}

/* ---------------- FILTER FUNCTIONS ---------------- */

function filterCategory(cat, btn) {
  category = cat;
  currentPage = 1;

  document
    .querySelectorAll(".categories .filter-btn")
    .forEach((b) => b.classList.remove("active"));

  btn.classList.add("active");

  displayTools();
}

function filterPrice(p, btn) {
  price = p;
  currentPage = 1;

  document
    .querySelectorAll(".pricing .filter-btn")
    .forEach((b) => b.classList.remove("active"));

  btn.classList.add("active");

  displayTools();
}

/* ---------------- RESET FILTERS ---------------- */

function resetFilters() {
  category = "All";
  price = "All";
  currentPage = 1;

  document
    .querySelectorAll(".filter-btn")
    .forEach((btn) => btn.classList.remove("active"));

  displayTools();
}

/* ---------------- SEARCH EVENT ---------------- */

searchBar.addEventListener("keyup", displayTools);

/* ---------------- INITIAL LOAD ---------------- */

displayTools();
