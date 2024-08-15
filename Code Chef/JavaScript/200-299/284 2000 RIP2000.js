process.stdin.setEncoding("utf-8");

const countNotesOf500 = (notesOf2000) => {
    const notesOf500 = (2000 * notesOf2000)/500;
    console.log(notesOf500);
};

process.stdin.on("data", (input) => {
    const notesOf2000 = Number(input.trim());
    countNotesOf500(notesOf2000);
});