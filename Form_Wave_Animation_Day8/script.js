const labels = document.querySelectorAll('.form-control label');

// Loop through each label element
labels.forEach(label => {
    label.innerHTML = label.innerText
    .split('')
    .map((letter, idx) => `<span style="transition-delay: ${idx * 50}ms">${letter}</span>`)
    .join('');
});