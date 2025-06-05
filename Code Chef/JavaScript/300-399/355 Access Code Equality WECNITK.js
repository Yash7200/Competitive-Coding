let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const code = 'WECNITK';
    input = input.trim();
    
    const msg = (code === input) ? 'Welcome to Web Club!' : 'Access denied';
    console.log(msg);
});
