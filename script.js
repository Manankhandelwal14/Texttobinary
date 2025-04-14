const inputText = document.getElementById('inputText');
const output = document.getElementById('output');
const convertBtn = document.getElementById('convertBtn');
const clearBtn = document.getElementById('clearBtn');
const copyBtn = document.getElementById('copyBtn');

// Convert text to binary function
function textToBinary(text) {
    return text.split('').map(char => {
        // Convert each character to its ASCII code, then to binary
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
}

// Event listeners
convertBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (text.trim() === '') {
        output.textContent = 'Please enter some text to convert.';
        return;
    }
    
    const binaryResult = textToBinary(text);
    output.textContent = binaryResult;
    output.classList.add('pulse');
    setTimeout(() => output.classList.remove('pulse'), 400);
});

clearBtn.addEventListener('click', () => {
    inputText.value = '';
    output.textContent = '';
});

copyBtn.addEventListener('click', () => {
    if (output.textContent.trim() === '') {
        return;
    }
    
    const textarea = document.createElement('textarea');
    textarea.value = output.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    
    copyBtn.innerHTML = `
        <svg class="icon" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        Copied!
    `;
    setTimeout(() => {
        copyBtn.innerHTML = `
            <svg class="icon" viewBox="0 0 24 24">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
            Copy Result
        `;
    }, 2000);
});

inputText.addEventListener('input', () => {
    const text = inputText.value;
    if (text.trim() === '') {
        output.textContent = '';
        return;
    }
    
    const binaryResult = textToBinary(text);
    output.textContent = binaryResult;
});
