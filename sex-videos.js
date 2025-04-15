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
        shareLink.setSelectionRange(0, 99999); // For mobile browsers

        // Try modern clipboard API first
        if (navigator.clipboard) {
            navigator.clipboard.write(shareLink.value).then(() => {
                alert('Link copied to clipboard!');
            }).catch(err => {
                console.error('Clipboard API failed:', err);
                // Fallback to execCommand
                try {
                    document.execCommand('copy');
                    alert('Link copied to clipboard!');
                } catch (fallbackErr) {
                    console.error('ExecCommand failed:', fallbackErr);
                    alert('Failed to copy link. Please select and copy manually: ' + shareLink.value);
                }
            });
        } else {
            // Fallback for older browsers without clipboard API
            try {
                document.execCommand('copy');
                alert('Link copied to clipboard!');
            } catch (err) {
                console.error('ExecCommand failed:', err);
                alert('Failed to copy link. Please select and copy manually: ' + shareLink.value);
            }
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