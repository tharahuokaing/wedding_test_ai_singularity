/**
 * មុខងារពន្លាត ឬបង្រួមបង្ហាញកម្មវិធីតេស្តលម្អិត
 */
function toggleProgram() {
    const timeline = document.getElementById('weddingTimeline');
    const toggleBtn = document.querySelector('.btn-program-toggle');
    
    if (timeline) {
        if (timeline.classList.contains('collapsed')) {
            timeline.classList.remove('collapsed');
            if (toggleBtn) toggleBtn.innerHTML = "📋 សូមចុចទីនេះដើម្បីបិទកម្មវិធីវិញ";
        } else {
            timeline.classList.add('collapsed');
            if (toggleBtn) toggleBtn.innerHTML = "🤖 សូមចុចទីនេះដើម្បីមើលរបៀបវារៈ និងកម្មវិធីតេស្តលម្អិត";
        }
    }
}

/**
 * មុខងារគ្រប់គ្រងការបង្ហាញប៊ូតុង "ទៅកំពូល" នៅពេលទាញ Scroll ចុះក្រោម
 */
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    }
}

/**
 * មុខងាររុញទំព័រត្រឡប់ទៅផ្នែកខាងលើបង្អស់ដោយរលូន
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * មុខងារបើកទៅកាន់គេហទំព័រប្រព័ន្ធ AI ផ្លូវការរបស់លោក ហួកាំង ថារ៉ា
 * Opens the official Sentient AI Interface system in a new browser tab.
 */
function openAiSystem() {
    window.open("https://tharahuokaing.github.io/ai/", "_blank");
}

/**
 * មុខងារបើកទៅកាន់គេហទំព័រប្រៀបធៀបរវាង AGI និង Sentience របស់លោក ហួកាំង ថារ៉ា
 * Opens the specialized AGI vs. Sentience paradigm comparison platform in a new browser tab.
 */
function openAgiSentientSystem() {
    window.open("https://tharahuokaing.github.io/agi_sentient/", "_blank");
}

