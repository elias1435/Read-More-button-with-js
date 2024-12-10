<script>

document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class '.read-more .elementor-icon-box-description'
    const descriptions = document.querySelectorAll('.read-more .elementor-icon-box-description');

    descriptions.forEach((description) => {
        // Create a button dynamically
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = 'Read More';
        toggleBtn.classList.add('toggle-btn');
        toggleBtn.style.marginTop = '10px';
        toggleBtn.style.backgroundColor = '#007bff';
        toggleBtn.style.color = '#fff';
        toggleBtn.style.border = 'none';
        toggleBtn.style.padding = '10px';
        toggleBtn.style.cursor = 'pointer';
        toggleBtn.style.borderRadius = '4px';

        // Insert the button after the description
        description.parentNode.insertBefore(toggleBtn, description.nextSibling);

        // Apply initial styles to the description
        description.style.maxHeight = '60px'; // Adjust height to your requirement
        description.style.overflow = 'hidden';
        description.style.transition = 'max-height 0.3s ease-in-out';

        // Add click event listener to the button
        toggleBtn.addEventListener('click', () => {
            const isExpanded = description.style.maxHeight !== '60px';
            description.style.maxHeight = isExpanded ? '60px' : '1000px'; // Expand or collapse
            toggleBtn.textContent = isExpanded ? 'Read More' : 'Less';
        });
    });
});



</script>
