// JavaScript Document

function loadMenu(menuFilePath, targetElementId) {
    fetch(menuFilePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load menu: ${response.statusText}`);
            }
            return response.text();
        })
        .then(menuHTML => {
            document.getElementById(targetElementId).innerHTML = menuHTML;
        })
        .catch(err => console.error(err));
}