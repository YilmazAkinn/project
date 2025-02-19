document.addEventListener('DOMContentLoaded', () => {
    const actionButton = document.querySelector('.action-button');
    const logo = document.querySelector('.logo');
    
    // Button animation
    actionButton.addEventListener('mouseover', () => {
        actionButton.style.transform = 'translateY(-2px)';
        actionButton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
    });

    actionButton.addEventListener('mouseout', () => {
        actionButton.style.transform = 'translateY(0)';
        actionButton.style.boxShadow = 'none';
    });

    // Logo animation
    logo.addEventListener('click', () => {
        logo.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            logo.style.transform = 'rotate(0deg)';
        }, 500);
    });
}); 