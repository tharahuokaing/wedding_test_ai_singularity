/**
 * Toggle expansion or collapse of the detailed testing schedule timeline
 * មុខងារពន្លាត ឬបង្រួមបង្ហាញកម្មវិធីតេស្តលម្អិត (Khmer & English)
 */
function toggleProgram() {
    const timeline = document.getElementById('weddingTimeline');
    const toggleBtn = document.querySelector('.btn-program-toggle');
    
    if (timeline) {
        if (timeline.classList.contains('collapsed')) {
            timeline.classList.remove('collapsed');
            if (toggleBtn) {
                toggleBtn.setAttribute('aria-expanded', 'true');
                toggleBtn.innerHTML = `
                    📋 សូមចុចទីនេះដើម្បីបិទកម្មវិធីវិញ<br>
                    <small style="font-weight: normal; font-size: 12px;">(Click to Collapse Testing Schedule)</small>
                `;
            }
        } else {
            timeline.classList.add('collapsed');
            if (toggleBtn) {
                toggleBtn.setAttribute('aria-expanded', 'false');
                toggleBtn.innerHTML = `
                    🤖 សូមចុចទីនេះដើម្បីមើលរបៀបវារៈ និងកម្មវិធីតេស្តលម្អិត<br>
                    <small style="font-weight: normal; font-size: 12px;">(Click to View Detailed Testing Agenda &amp; Schedule)</small>
                `;
            }
        }
    }
}

/**
 * Control visibility of the "Scroll to Top" button when scrolling down
 * មុខងារគ្រប់គ្រងការបង្ហាញប៊ូតុង "ទៅកំពូល" នៅពេលទាញ Scroll ចុះក្រោម (Khmer & English)
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
 * Smoothly scroll the page back to the top
 * មុខងាររុញទំព័រត្រឡប់ទៅផ្នែកខាងលើបង្អស់ដោយរលូន (Khmer & English)
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Open Huokaing Thara's official AI system web portal in a new tab
 * មុខងារបើកទៅកាន់គេហទំព័រប្រព័ន្ធ AI ផ្លូវការរបស់លោក ហួកាំង ថារ៉ា
 * Opens the official Sentient AI Interface system in a new browser tab.
 */
function openAiSystem() {
    window.open("https://tharahuokaing.github.io/ai/", "_blank", "noopener,noreferrer");
}

/**
 * Open Huokaing Thara's AGI vs. Sentience comparison platform in a new tab
 * មុខងារបើកទៅកាន់គេហទំព័រប្រៀបធៀបរវាង AGI និង Sentience របស់លោក ហួកាំង ថារ៉ា
 * Opens the specialized AGI vs. Sentience paradigm comparison platform in a new browser tab.
 */
function openAgiSentientSystem() {
    window.open("https://tharahuokaing.github.io/agi_sentient/", "_blank", "noopener,noreferrer");
}
