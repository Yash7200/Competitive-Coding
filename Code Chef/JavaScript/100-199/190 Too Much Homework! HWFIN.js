let input = '';
process.stdin.on('data', (data) => input += data);

process.stdin.on('end', () => {
    const [finishedQuestions, questionsPerSheet] = input.trim().split(' ').map(Number);
    
    const laterFinishedQuestions = questionsPerSheet * 10;
    const totalQuestionsTried = finishedQuestions + laterFinishedQuestions;
    
    const canGetFullScore = (totalQuestionsTried >= 100) ? 'Yes': 'No';
    console.log(canGetFullScore);
});
