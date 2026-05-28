// ==========================================
// CardioSanskriti - Core Application Script
// ==========================================

// 1. Concept Explorer Database
const conceptData = {
    hridaya: {
        title: "Hṛdaya (हृदय)",
        translit: "हृदय • hṛ-da-ya",
        verse: "हृ हरणे, दा दाने, यङ् यमने।",
        translation: '"Hṛ = to receive; Da = to give; Ya = to control or circulate."',
        description: "The word Hṛdaya in ancient Indian texts (such as the Upanishads and Ayurvedic treatises like Charaka Samhita) is a perfect functional explanation of the heart's physiological loop. The ancient grammarians combined three action verbs into a single noun to explain its mechanical purpose.",
        science: "This etymology is a direct precursor to the modern cardiac cycle. 'Hṛ' (receiving) represents diastole and venous return (filling of the chambers). 'Da' (giving) represents systole and cardiac output (pumping blood to the systemic circulation). 'Ya' (circulating/regulating) maps to systemic arterial resistance and cardiac autonomic regulation via the vagus nerve and cardiac plexuses.",
        visualState: "Rhythmic Pumping (60-80 BPM)",
        beatSpeed: "1.2s"
    },
    dhamani: {
        title: "Dhamanī (धमनी)",
        translit: "धमनी • dha-ma-nī",
        verse: "धमनात् धमनीः।",
        translation: '"Because of pulsation or blowing, they are called Dhamanīs."',
        description: "In Ayurvedic anatomy, Dhamanīs are vessels that originate from the heart and pulsate with life energy. Sushruta described that ten major Dhamanīs go upwards, ten go downwards, and four spread laterally, distributing nutrients and life-force throughout the body.",
        science: "The description of pulsation ('Dhamana') directly identifies these vessels as arteries. In modern physiology, arteries receive high-pressure, oxygenated blood ejected from the left ventricle. Their muscular walls stretch and recoil, creating the palpable pulse wave that ancient physicians monitored as a diagnostic tool.",
        visualState: "Arterial Pulse Wave Active",
        beatSpeed: "0.8s"
    },
    sira: {
        title: "Sirā (सिरा)",
        translit: "सिरा • si-rā",
        verse: "सरणात् सिराः।",
        translation: '"Because they allow continuous, steady flow, they are called Sirās."',
        description: "Sirās are defined as channels of passive flow, responsible for collecting fluids and returning them back to the center (Hridaya). Unlike the throbbing Dhamanīs, Sirās are described as calm, steady, and colored dark-blue or red-brown depending on their state.",
        science: "The description of steady, non-pulsatile flow ('Sarana') aligns with the venous system. Veins collect deoxygenated blood from the capillaries and transport it back to the right atrium of the heart under low pressure. The dark-blue description matches the appearance of superficial veins carrying deoxygenated blood.",
        visualState: "Venous Return Active",
        beatSpeed: "1.6s"
    },
    prana: {
        title: "Prāṇa-Vāyu (प्राणवायु)",
        translit: "प्राणवायु • prā-ṇa vā-yu",
        verse: "प्राणो हि हृदयं समाश्रितः।",
        translation: '"The vital life force, Prāṇa, is centered in the Hṛdaya."',
        description: "Prāṇa is the cosmic life-breath. In Sanskrit texts, it is described as entering the body through the breath and immediately localizing in the heart. The heart then pumps this Prāṇa-infused fluid (Rasa) throughout the tissues to sustain life.",
        science: "This is a poetic description of oxygenation. Modern biology explains that atmospheric oxygen (Prāna) enters the lungs, binds to hemoglobin in the pulmonary capillaries, and is brought to the left heart. The heart then distributes this oxygenated blood to all cells for cellular respiration.",
        visualState: "Oxygen Exchange Active",
        beatSpeed: "1.0s"
    }
};

// 2. Blog Articles Content
const articlesData = {
    "1": {
        title: "The Etymology of Hṛdaya: The Threefold Cardiovascular Cycle",
        date: "May 24, 2026",
        tag: "Etymology & Physiology",
        content: `
            <p>One of the most intriguing aspects of ancient Sanskrit anatomical texts is how they embedded complex physiological functions directly into linguistic structures. A premier example of this is the word for heart: <strong>Hṛdaya (हृदय)</strong>.</p>
            
            <p>Long before the invention of stethoscopes or the detailed mapping of the circulatory system by William Harvey, ancient Indian grammarians and physicians understood the heart not merely as an organ of emotion, but as a mechanical pump that operates in a precise, three-stage cycle. The word itself is composed of three active Sanskrit roots:</p>
            
            <blockquote>
                <strong>हृ (Hṛ)</strong> - meaning "to fetch," "to draw in," or "to receive."<br>
                <strong>दा (Da)</strong> - meaning "to give," "to bestow," or "to output."<br>
                <strong>य (Ya)</strong> - meaning "to regulate," "to move," or "to control."
            </blockquote>
            
            <h3>Diastole, Venous Return, and 'Hṛ'</h3>
            <p>In modern cardiology, the cardiac cycle begins with **venous return** during **diastole**. The superior and inferior vena cava draw blood back from the body into the right atrium, while the pulmonary veins return oxygenated blood to the left atrium. This process of drawing back and filling the heart is precisely what the root <em>Hṛ</em> describes. The heart acts as a receiving chamber, gathering blood from every corner of the body.</p>
            
            <h3>Systole, Cardiac Output, and 'Da'</h3>
            <p>Once the ventricles are filled, the heart undergoes contraction—**systole**. The heart forcefully ejects (or "gives") blood into the aorta and pulmonary artery to nourish cells. This phase of active output is represented by the root <em>Da</em>. It is the heart's act of giving life-sustaining blood back to the tissues.</p>
            
            <h3>Autonomic Regulation and 'Ya'</h3>
            <p>The third element, <em>Ya</em>, denotes rhythm, movement, and regulatory control. In modern terms, the heart is not an unregulated pump; it is carefully modulated by the cardiac conduction system (starting at the sinoatrial node) and the autonomic nervous system (sympathetic and parasympathetic nerves). This regulation maintains blood pressure, coordinates chamber contractions, and adapts the pulse rate to physical demands. This constant, governing circulation is represented by <em>Ya</em>.</p>
            
            <p>By compiling these actions into a single word, Sanskrit texts created an elegant mnemonic for the cardiac cycle. Every time a student spoke the word <strong>Hṛdaya</strong>, they recited the cardiac rhythm: <em>Receive, Give, Control.</em></p>
        `
    },
    "2": {
        title: "Sushruta Samhita and the Channels of Circulation (Srotas)",
        date: "May 20, 2026",
        tag: "Anatomical Mapping",
        content: `
            <p>The <strong>Sushruta Samhita</strong>, written by the sage Sushruta around the 6th century BCE, is widely celebrated as one of the founding texts of surgery. However, its anatomical section, the <em>Sharira Sthāna</em>, contains profound observations on the vascular system that warrant equal praise.</p>
            
            <p>Sushruta classified the conduits in the human body into three primary types based on their physical behavior and the nature of the fluid they transport: **Dhamanīs**, **Sirās**, and **Srotas**.</p>
            
            <h3>Dhamanīs: The Pulsating Arteries</h3>
            <p>Sushruta identified 24 major Dhamanīs originating from the navel or heart. He described them as vessels that "blow" or "pulse" (<em>Dhamana</em>). They carry nutrients (Rasa) and vital energy upward, downward, and outward to all parts of the body.</p>
            <p>When cross-referenced with modern physiology, Dhamanīs correlate directly to the arterial system. Arteries have thick, muscular walls that expand and contract under high pressure. This pressure wave, generated by the left ventricle, is felt as a pulse—a physical manifestation of the ancient term <em>Dhamana</em>.</p>
            
            <h3>Sirās: The Returning Veins</h3>
            <p>In contrast, Sushruta described Sirās as channels characterized by steady, non-pulsating flow (<em>Sarana</em>). There are 700 Sirās cataloged in the text, colored depending on the humor they carry. He noted that their flow is passive, carrying blood back to the center.</p>
            <p>This is a remarkably accurate description of the venous system. Veins operate under low pressure, lacks arterial pulsation, and rely on skeletal muscle pumps and respiratory pressure to return blood back to the heart. Their dark appearance due to low-oxygen blood also matches Sushruta's notes on their color.</p>
            
            <h3>Srotas: The Micro-Circulation Channels</h3>
            <p>Beyond these visible vessels, the texts outline <em>Srotas</em>—innumerable microscopic pores and channels that allow fluids to filter into tissues. In modern medical terminology, this matches the capillary beds, lymphatic system, and cellular membranes where actual gas and nutrient exchange occurs. Without Srotas, the tissues (Dhatus) would starve, a concept that mirrors the modern understanding of microvascular perfusion.</p>
            
            <p>By examining these ancient Sanskrit definitions, high schoolers and medical students alike can appreciate that the fundamentals of vascular transport were conceptualized long before the microscopic era.</p>
        `
    },
    "3": {
        title: "The Marma Points: Ancient Cardiac Trauma Zones",
        date: "May 15, 2026",
        tag: "Traumatology & Emergencies",
        content: `
            <p>In Sanskrit, the word <strong>Marma (मर्म)</strong> translates to a vulnerable, vital, or hidden point. In the *Sushruta Samhita*, 107 Marma points are defined across the human body—junctions where muscles, blood vessels, ligaments, bones, and joints meet, and where life force (*Prana*) is heavily concentrated.</p>
            
            <p>Of these, Sushruta categorized certain points as **Sadya Pranahara Marma**—points where trauma leads to immediate, rapid death. Right at the top of this dangerous list sits the **Hridaya Marma** (the chest/heart zone).</p>
            
            <h3>Anatomy of the Hridaya Marma</h3>
            <p>Sushruta placed the Hridaya Marma in the center of the thorax, between the breasts and just above the pit of the stomach. He warned that any penetrating injury, compression, or severe impact to this area would result in immediate death.</p>
            
            <h3>Correlations with Modern Thoracic Trauma</h3>
            <p>If we examine this through the lens of modern emergency medicine and cardiothoracic surgery, Sushruta’s warnings are anatomically precise. The chest area contains the heart, the ascending aorta, the pulmonary arteries, and the pericardium. A blunt or penetrating trauma to this zone is catastrophic due to several conditions:</p>
            
            <ul>
                <li><strong>Cardiac Tamponade:</strong> A minor rupture of the coronary vessels can fill the pericardial sac with blood, compressing the heart so it cannot expand and pump, leading to rapid cardiac arrest.</li>
                <li><strong>Aortic Dissection/Rupture:</strong> High-velocity trauma to the chest can tear the aorta, causing massive internal bleeding and fatal hemorrhagic shock within seconds.</li>
                <li><strong>Commotio Cordis:</strong> A sudden blow to the chest at a critical millisecond in the cardiac cycle (the T-wave) can trigger ventricular fibrillation (lethal rhythm) even without structural damage.</li>
            </ul>
            
            <p>Sushruta's classification of the heart area as a *Sadya Pranahara Marma* shows that ancient surgeons possessed acute clinical awareness of thoracic vulnerability, using it to warn soldiers on the battlefield and guide surgeons away from high-risk incisions.</p>
        `
    }
};

// 3. Podcast Episodes Database
const podcastEpisodes = [
    {
        id: "1",
        title: "Ep 1: The Etymological Heart (Hridaya)",
        author: "CardioSanskriti Podcast • Hosted by Suhrut",
        duration: "12:34",
        durationSec: 754,
        file: "mock_ep1.mp3"
    },
    {
        id: "2",
        title: "Ep 2: Blood Circulation Pathways in Sushruta Samhita",
        author: "CardioSanskriti Podcast • Hosted by Suhrut",
        duration: "15:42",
        durationSec: 942,
        file: "mock_ep2.mp3"
    },
    {
        id: "3",
        title: "Ep 3: Emergency Medicine & The Thoracic Marmas",
        author: "CardioSanskriti Podcast • Hosted by Suhrut",
        duration: "10:15",
        durationSec: 615,
        file: "mock_ep3.mp3"
    }
];

// 4. Mock Initial Discussion Feed
const initialFeed = [
    {
        id: 1,
        author: "Prof. Raghavan Shastri",
        avatar: "RS",
        type: "share",
        message: "Excellent initiative, Suhrut! To add to your Concept Explorer, the Atharvaveda mentions 'Hridaya Lalapyate' when describing the nervous system's connection to heart activity. This matches modern autonomic regulation.",
        date: "May 25, 2026",
        timestamp: Date.now() - 3600000 * 24
    },
    {
        id: 2,
        author: "Dr. Amanda Chen (Cardiologist)",
        avatar: "AC",
        type: "appreciate",
        message: "As a cardiologist, I am thoroughly impressed by this synthesis. The mapping of Hṛ-Da-Ya to Venous Return, Systole, and Autonomic regulation is brilliant and a great educational tool for medical students.",
        date: "May 24, 2026",
        timestamp: Date.now() - 3600000 * 30
    },
    {
        id: 3,
        author: "Aditya Mehta",
        avatar: "AM",
        type: "critique",
        message: "In your upcoming article, you should clarify that while Sushruta maps well to structural anatomy, the spiritual heart (Anahata Chakra) mentioned in yoga texts shouldn't be confused with the biological organ. Looking forward to more!",
        date: "May 23, 2026",
        timestamp: Date.now() - 3600000 * 48
    },
    {
        id: 4,
        author: "Meera Nair",
        avatar: "MN",
        type: "comment",
        message: "I love the podcast UI! The explanation in Episode 1 of the Sanskrit roots was very clear and easy to understand even for non-Sanskrit speakers.",
        date: "May 22, 2026",
        timestamp: Date.now() - 3600000 * 60
    }
];

// ==========================================
// Application Logic State Controllers
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    
    // NAVIGATION HIGHLIGHTS
    setupNavigation();
    
    // CONCEPT EXPLORER
    setupConceptExplorer();
    
    // BLOG MODALS
    setupBlogModals();
    
    // PODCAST PLAYER
    setupPodcastPlayer();
    
    // DISCUSSION SYSTEM
    setupDiscussionBoard();
});

// Navigation Active Underlines
function setupNavigation() {
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
}

// Concept Explorer Controller
function setupConceptExplorer() {
    const termButtons = document.querySelectorAll("#explorer-terms .concept-btn");
    const displayTitle = document.getElementById("display-title");
    const displayTranslit = document.getElementById("display-translit");
    const displayVerse = document.getElementById("display-verse");
    const displayVerseTrans = document.getElementById("display-verse-translation");
    const displayDesc = document.getElementById("display-desc");
    const displayScience = document.getElementById("display-science");
    const visualState = document.getElementById("display-visual-state");
    const heartIcon = document.getElementById("heart-icon-beat");

    termButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Toggle active state
            termButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const conceptId = btn.getAttribute("data-concept");
            const data = conceptData[conceptId];
            
            if (data) {
                // Animate transition out
                const displayPanel = document.getElementById("concept-display-panel");
                displayPanel.style.opacity = 0;
                displayPanel.style.transform = "translateY(10px)";
                
                setTimeout(() => {
                    // Update content
                    displayTitle.textContent = data.title;
                    displayTranslit.textContent = data.translit;
                    displayVerse.textContent = data.verse;
                    displayVerseTrans.textContent = data.translation;
                    displayDesc.textContent = data.description;
                    displayScience.textContent = data.science;
                    visualState.textContent = data.visualState;
                    
                    // Modify Heart pulse animation speed
                    heartIcon.style.animationDuration = data.beatSpeed;
                    
                    // Animate transition in
                    displayPanel.style.transition = "opacity 0.4s ease, transform 0.4s ease";
                    displayPanel.style.opacity = 1;
                    displayPanel.style.transform = "translateY(0)";
                }, 200);
            }
        });
    });
}

// Blog Articles Modal Controller
function setupBlogModals() {
    const modal = document.getElementById("article-modal");
    const closeBtn = document.getElementById("btn-modal-close");
    const readLinks = document.querySelectorAll(".blog-card-link");
    
    const mTitle = document.getElementById("modal-article-title");
    const mDate = document.getElementById("modal-article-date");
    const mTag = document.getElementById("modal-article-tag");
    const mText = document.getElementById("modal-article-text");

    readLinks.forEach(link => {
        link.addEventListener("click", () => {
            const articleId = link.getAttribute("data-article");
            const article = articlesData[articleId];
            
            if (article) {
                mTitle.textContent = article.title;
                mDate.textContent = article.date;
                mTag.textContent = article.tag;
                mText.innerHTML = article.content;
                
                modal.style.display = "flex";
                document.body.style.overflow = "hidden"; // Disable scroll background
            }
        });
    });
    
    // Close on click close button
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    });
    
    // Close on click outside modal content
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto";
        }
    });
}

// Simulated Audio Player Controller
function setupPodcastPlayer() {
    let currentEpisodeIndex = 0;
    let isPlaying = false;
    let playInterval = null;
    let elapsedSeconds = 0;
    
    const pTitle = document.getElementById("player-title");
    const pAuthor = document.getElementById("player-author");
    const timeCurrent = document.getElementById("time-current");
    const timeDuration = document.getElementById("time-duration");
    const playBtn = document.getElementById("btn-player-play");
    const playIconSvg = document.getElementById("play-icon-svg");
    const progressBar = document.getElementById("progress-bar");
    const progressFill = document.getElementById("progress-fill");
    const progressKnob = document.getElementById("progress-knob");
    
    const episodeRows = document.querySelectorAll(".episode-row");

    // Format seconds into MM:SS
    function formatTime(secs) {
        const m = Math.floor(secs / 60);
        const s = Math.floor(secs % 60);
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    // Load episode details
    function loadEpisode(index) {
        currentEpisodeIndex = index;
        const ep = podcastEpisodes[index];
        pTitle.textContent = ep.title;
        pAuthor.textContent = ep.author;
        timeDuration.textContent = ep.duration;
        
        // Reset timers
        resetPlayer();
        
        // Highlight in playlist row
        episodeRows.forEach((row, idx) => {
            if (idx === index) {
                row.classList.add("active");
                row.querySelector(".play-indicator-small").innerHTML = isPlaying ? "&#9612;&#9612;" : "&#9658;";
            } else {
                row.classList.remove("active");
                row.querySelector(".play-indicator-small").innerHTML = "&#9658;";
            }
        });
    }

    function resetPlayer() {
        elapsedSeconds = 0;
        timeCurrent.textContent = "0:00";
        progressFill.style.width = "0%";
        progressKnob.style.left = "0%";
        
        if (isPlaying) {
            startTimer();
        } else {
            clearInterval(playInterval);
        }
    }

    // Timer operations
    function startTimer() {
        clearInterval(playInterval);
        const ep = podcastEpisodes[currentEpisodeIndex];
        
        playInterval = setInterval(() => {
            if (elapsedSeconds < ep.durationSec) {
                elapsedSeconds++;
                timeCurrent.textContent = formatTime(elapsedSeconds);
                
                // Update slider percentages
                const percentage = (elapsedSeconds / ep.durationSec) * 100;
                progressFill.style.width = `${percentage}%`;
                progressKnob.style.left = `${percentage}%`;
            } else {
                // End of track, trigger Next
                handleNext();
            }
        }, 1000);
    }

    function togglePlay() {
        isPlaying = !isPlaying;
        if (isPlaying) {
            // Render Pause Icon
            playIconSvg.innerHTML = `<path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>`;
            startTimer();
        } else {
            // Render Play Icon
            playIconSvg.innerHTML = `<path d="M11.596 8.697l-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>`;
            clearInterval(playInterval);
        }
        
        // Update currently active row play indicator icon
        const activeRow = document.querySelector(".episode-row.active");
        if (activeRow) {
            activeRow.querySelector(".play-indicator-small").innerHTML = isPlaying ? "&#9612;&#9612;" : "&#9658;";
        }
    }

    function handleNext() {
        let newIdx = currentEpisodeIndex + 1;
        if (newIdx >= podcastEpisodes.length) newIdx = 0;
        loadEpisode(newIdx);
    }

    function handlePrev() {
        let newIdx = currentEpisodeIndex - 1;
        if (newIdx < 0) newIdx = podcastEpisodes.length - 1;
        loadEpisode(newIdx);
    }

    // Listeners
    playBtn.addEventListener("click", togglePlay);
    document.getElementById("btn-player-next").addEventListener("click", handleNext);
    document.getElementById("btn-player-prev").addEventListener("click", handlePrev);

    episodeRows.forEach((row, idx) => {
        row.addEventListener("click", () => {
            if (currentEpisodeIndex === idx) {
                togglePlay();
            } else {
                isPlaying = true;
                playIconSvg.innerHTML = `<path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"/>`;
                loadEpisode(idx);
            }
        });
    });

    // Clicking / Scrubbing on Progress Bar
    progressBar.addEventListener("click", (e) => {
        const ep = podcastEpisodes[currentEpisodeIndex];
        const rect = progressBar.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;
        let percentage = clickX / width;
        if (percentage < 0) percentage = 0;
        if (percentage > 1) percentage = 1;

        elapsedSeconds = Math.floor(percentage * ep.durationSec);
        timeCurrent.textContent = formatTime(elapsedSeconds);
        progressFill.style.width = `${percentage * 100}%`;
        progressKnob.style.left = `${percentage * 100}%`;

        if (isPlaying) {
            startTimer();
        }
    });
}

// 5. Discussion / Feedback System
function setupDiscussionBoard() {
    let feedItems = [];
    let activeType = "appreciate";
    let activeFilter = "all";

    const feedbackForm = document.getElementById("discussion-form");
    const categoryButtons = document.querySelectorAll(".category-selector .cat-btn");
    const authorInput = document.getElementById("input-author");
    const messageInput = document.getElementById("input-message");
    
    const feedListContainer = document.getElementById("feed-items-list");
    const filterButtons = document.querySelectorAll(".forum-filters .filter-btn");

    // Stats elements
    const statAppreciate = document.getElementById("stat-appreciate");
    const statComment = document.getElementById("stat-comment");
    const statCritique = document.getElementById("stat-critique");
    const statShare = document.getElementById("stat-share");

    // Load from LocalStorage or Fallback to Initial Mock
    function initFeed() {
        const storedFeed = localStorage.getItem("cardiosanskriti_feed");
        if (storedFeed) {
            feedItems = JSON.parse(storedFeed);
        } else {
            feedItems = [...initialFeed];
            localStorage.setItem("cardiosanskriti_feed", JSON.stringify(feedItems));
        }
        renderFeed();
        updateStats();
    }

    // Category Selector
    categoryButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            categoryButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeType = btn.getAttribute("data-type");
        });
    });

    // Filter Buttons
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeFilter = btn.getAttribute("data-filter");
            renderFeed();
        });
    });

    // Form Submission
    feedbackForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const nameVal = authorInput.value.trim();
        const msgVal = messageInput.value.trim();
        
        if (!nameVal || !msgVal) return;

        // Generate initials for avatar
        let avatarInitials = "";
        const parts = nameVal.split(" ");
        if (parts.length > 1) {
            avatarInitials = (parts[0][0] + parts[1][0]).toUpperCase();
        } else {
            avatarInitials = nameVal.substring(0, 2).toUpperCase();
        }

        const newFeedback = {
            id: Date.now(),
            author: nameVal,
            avatar: avatarInitials,
            type: activeType,
            message: msgVal,
            date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
            timestamp: Date.now()
        };

        // Update database
        feedItems.unshift(newFeedback);
        localStorage.setItem("cardiosanskriti_feed", JSON.stringify(feedItems));

        // Reset fields
        authorInput.value = "";
        messageInput.value = "";
        
        // Refresh display
        renderFeed();
        updateStats();

        // Optional scroll to top of feed
        feedListContainer.scrollTop = 0;
    });

    // Render Feed list onto HTML
    function renderFeed() {
        feedListContainer.innerHTML = "";

        const filtered = feedItems.filter(item => {
            if (activeFilter === "all") return true;
            return item.type === activeFilter;
        });

        if (filtered.length === 0) {
            feedListContainer.innerHTML = `<div style="text-align: center; color: var(--text-secondary); padding: 3rem 1rem;">No contributions found for this category yet. Be the first to share!</div>`;
            return;
        }

        filtered.forEach(item => {
            const feedItemDiv = document.createElement("div");
            feedItemDiv.className = "feed-item";
            feedItemDiv.setAttribute("data-id", item.id);
            
            // Format category badge text
            let categoryLabel = item.type;
            if (item.type === "appreciate") categoryLabel = "👏 Appreciation";
            if (item.type === "comment") categoryLabel = "💬 Comment";
            if (item.type === "critique") categoryLabel = "⚠️ Critique";
            if (item.type === "share") categoryLabel = "📚 Shared Info";

            feedItemDiv.innerHTML = `
                <div class="feed-item-header">
                    <div class="feed-user">
                        <div class="user-avatar">${item.avatar}</div>
                        <span class="user-name">${item.author}</span>
                    </div>
                    <span class="feed-badge ${item.type}">${categoryLabel}</span>
                </div>
                <div class="feed-body">${escapeHTML(item.message)}</div>
                <div class="feed-date">${item.date}</div>
            `;
            
            feedListContainer.appendChild(feedItemDiv);
        });
    }

    // Helper to escape HTML characters
    function escapeHTML(str) {
        return str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // Update Counter Panels
    function updateStats() {
        const counts = {
            appreciate: 0,
            comment: 0,
            critique: 0,
            share: 0
        };

        feedItems.forEach(item => {
            if (counts[item.type] !== undefined) {
                counts[item.type]++;
            }
        });

        statAppreciate.textContent = counts.appreciate;
        statComment.textContent = counts.comment;
        statCritique.textContent = counts.critique;
        statShare.textContent = counts.share;
    }

    // Trigger Initial load
    initFeed();
}
