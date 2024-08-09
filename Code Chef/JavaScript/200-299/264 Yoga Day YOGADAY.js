//Problem Simplification:
    //There're 12 poses in Surya Namaskar.
    //Chef does many poses so count the no. of complete Surya Namaskar that Chef did.

//Logic:
    //We will receive single integer as string.
    //To convert string to integer, use Number function & use trim method inside it to remove space around it.
    //Create function containing core logic to solve problem.
    //In function declaration, create variable which will hold the no. of rounds of Surya Namaskar Chef did.
    //To count rounds of Surya Namaskar divide poses by 12 & convert the result into integer using parseInt because poses may not return 0 as reminder always.
    //Print the rounds of Surya Namaskar

process.stdin.setEncoding("utf-8");

const countRoundsOfSuryaNamaskar = (poses) => {
    const roundsOfSuryaNamaskar = parseInt(poses / 12);
    console.log(roundsOfSuryaNamaskar);
}

process.stdin.on("data", (input) => {
    const poses = Number(input.trim());
    
    countRoundsOfSuryaNamaskar(poses);
});