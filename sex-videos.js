// Share button functionality
document.querySelectorAll('.share-btn').forEach(button => {
    button.addEventListener('click', function() {
        const shareBox = this.closest('.video-details').querySelector('.share-box');
        shareBox.style.display = shareBox.style.display === 'none' ? 'flex' : 'none';
    });
});

// Copy button functionality
document.querySelectorAll('.copy-btn').forEach(button => {
    button.addEventListener('click', function() {
        const shareLink = this.closest('.share-box').querySelector('.share-link');
        shareLink.select();
        try {
            navigator.clipboard.write(shareLink.value).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                console.error('Copy failed:', err);
                alert('Failed to copy link. Please copy manually.');
            });
        } catch (err) {
            console.error('Copy failed:', err);
            alert('Failed to copy link. Please copy manually.');
        }
    });
});

// Download button functionality
document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', function() {
        const videoSrc = this.closest('.video-card').querySelector('video source').getAttribute('src');
        const link = document.createElement('a');
        link.href = videoSrc;
        link.download = videoSrc.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});