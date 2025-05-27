// GTM Demo Site - Event Tracking Script

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Main CTA button click tracking
    const mainCtaButton = document.getElementById('main-cta-button');
    if (mainCtaButton) {
        mainCtaButton.addEventListener('click', function () {
            console.log('Main CTA button clicked');
            // Placeholder for GTM dataLayer push
            // dataLayer.push({ 'event': 'cta_click', 'cta_text': 'สนใจทดลองใช้เลย!' });
        });
    }

    // Feature buttons click tracking
    const featureButtons = document.querySelectorAll('[id^="feature"]');
    featureButtons.forEach(button => {
        button.addEventListener('click', function () {
            const featureId = this.id;
            const featureTitle = this.closest('.card').querySelector('.card-title').textContent;
            console.log(`Feature button clicked: ${featureId} - ${featureTitle}`);
            // Placeholder for GTM dataLayer push
            // dataLayer.push({ 'event': 'feature_click', 'feature_id': featureId, 'feature_title': featureTitle });
        });
    });

    // Newsletter form submission tracking
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function () {
            console.log('Newsletter form submitted');
            // Form submission event will be tracked via GTM form submit listener
        });
    }

    // Privacy policy button click tracking
    const privacyButton = document.getElementById('privacy-btn');
    if (privacyButton) {
        privacyButton.addEventListener('click', function () {
            console.log('Privacy policy accepted');
            // Placeholder for GTM dataLayer push
            // dataLayer.push({ 'event': 'privacy_accepted' });
        });
    }

    // External link click tracking
    const gtmWebsiteLink = document.getElementById('gtm-website-link');
    if (gtmWebsiteLink) {
        gtmWebsiteLink.addEventListener('click', function () {
            console.log('External link clicked');
            // External links will be tracked via GTM link click listener
        });
    }
});
