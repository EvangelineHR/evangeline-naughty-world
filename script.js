// Show age warning popup on page load
document.addEventListener('DOMContentLoaded', function() {
    const ageWarning = document.getElementById('ageWarning');
    const pageContent = document.getElementById('pageContent');
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');

    if (ageWarning && pageContent) {
        ageWarning.style.display = 'flex'; // Show popup
        pageContent.style.display = 'none'; // Hide content initially

        yesBtn.addEventListener('click', function() {
            ageWarning.style.display = 'none';
            pageContent.style.display = 'block';
        });

        noBtn.addEventListener('click', function() {
            window.location.href = 'https://www.google.com';
        });
    }
});

// Toggle hamburger menu on all pages
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
});

// Read More button toggle (only for index.html)
if (document.getElementById('readMoreBtn')) {
    document.getElementById('readMoreBtn').addEventListener('click', function() {
        const moreText = document.getElementById('moreText');
        if (moreText.classList.contains('hidden')) {
            moreText.classList.remove('hidden');
            this.textContent = 'Read Less';
        } else {
            moreText.classList.add('hidden');
            this.textContent = 'Read More';
        }
    });
}

// Toggle language button for sunday-office-fuck.html
if (document.getElementById('toggleLangBtn')) {
    document.getElementById('toggleLangBtn').addEventListener('click', function() {
        const englishStory = document.getElementById('englishStory');
        const tamilStory = document.getElementById('tamilStory');
        if (englishStory.style.display !== 'none') {
            englishStory.style.display = 'none';
            tamilStory.style.display = 'block';
            this.textContent = 'Toggle English';
        } else {
            englishStory.style.display = 'block';
            tamilStory.style.display = 'none';
            this.textContent = 'தமிழில் கதை';
        }
    });
}
