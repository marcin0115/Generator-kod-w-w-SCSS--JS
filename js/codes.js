const btn = document.querySelector('button');
const section = document.querySelector('.codes');

const chars = '0123456789ABCDEFGHIJ';
const codesNumber = 10;
const charsNumber = 8;

const generateCode = ()=> {
    section.textContent = "";
    for(let i=0; i<codesNumber; i++) {
        let code = '';
        for(let i=0; i<charsNumber; i++) {
            const index = Math.floor(Math.random()*chars.length);
            code += chars[index];
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
}

btn.addEventListener('click', generateCode)