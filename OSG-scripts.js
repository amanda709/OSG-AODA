// JavaScript Document
//Left menu
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'active' class from all menu items
            menuItems.forEach(menu => menu.classList.remove('active'));
            
            // Add 'active' class to the clicked menu item
            item.classList.add('active');

            // Update the content area
            const content = document.querySelector('.content');
            content.innerHTML = `<h1>${item.textContent}</h1><p>You are viewing the ${item.textContent} section.</p>`;
        });
    });