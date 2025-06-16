let input = '';
process.stdin.on('data',(data) => input += data);

process.stdin.on('end', () => {
    const char = input.trim();
    const vowels = ['A','E', 'I', 'O', 'U'];
    
    (vowels.includes(char)) ? console.log('Vowel') : console.log('Consonant');
});
