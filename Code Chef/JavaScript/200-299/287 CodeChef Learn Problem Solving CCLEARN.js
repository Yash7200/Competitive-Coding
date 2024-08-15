process.stdin.setEncoding('utf8');

const countTotalCourses = (languages) => {
    const totalCourses = languages * 2;
    console.log(totalCourses);
};

process.stdin.on('data', (input) => {
   const languages = Number(input.trim()); 
   countTotalCourses(languages);
});