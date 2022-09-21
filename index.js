const names = ['jacob', 'james', 'jon'];

function renderNames(myNames) {
    const list = document.getElementById('list');
    for (let name of myNames) {
        const div = document.createElement('div');
        div.textContent = name;
        list.appendChild(div);
    }
    
}

function clearNames() {
    const list = document.getElementById('list');
    while (list.childNodes.length > 0) {
        list.removeChild(list.firstChild);
    }
}

function submitClicked() {
    const text = document.getElementById('text-input').value;
    clearNames();
    const filteredNames = names.filter((item) => {
        return item.includes(text);
    });
    renderNames(filteredNames);
}

renderNames(names);
