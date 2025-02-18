document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class '.review-more .elementor-widget-container'
    const descriptions = document.querySelectorAll('.review-more .elementor-widget-container');

    descriptions.forEach((description) => {
        // Create a button dynamically
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = 'Read More';
        toggleBtn.classList.add('toggle-btn');
        
        // Button Styles
        Object.assign(toggleBtn.style, {
            marginTop: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '4px'
        });

        // Insert the button after the description
        description.parentNode.insertBefore(toggleBtn, description.nextSibling);

        // Apply initial styles to the description
        description.style.maxHeight = '60px'; // Adjust height to your requirement
        description.style.overflow = 'hidden';
        description.style.transition = 'max-height 0.3s ease-in-out';

        // Add click event listener to the button
        toggleBtn.addEventListener('click', () => {
            const isExpanded = description.classList.contains('expanded');

            if (isExpanded) {
                description.style.maxHeight = '60px'; // Collapse
                toggleBtn.textContent = 'Read More';
                description.classList.remove('expanded');
                toggleBtn.classList.remove('btn-expand'); // Remove class from button
            } else {
                description.style.maxHeight = '1000px'; // Expand
                toggleBtn.textContent = 'Less';
                description.classList.add('expanded');
                toggleBtn.classList.add('btn-expand'); // Add class to button when expanded
            }
        });
    });
});
