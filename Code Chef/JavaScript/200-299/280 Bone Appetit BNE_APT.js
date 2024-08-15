process.stdin.setEncoding("utf-8");

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.split(" ").map(Number));
    return intArray;
}

const countTreats = (people, treats) => {
    const [peopleInBones, peopleInBlood] = people;
    const [treatsByBones, treatsByBlood] = treats;
    
    const totalTreats = (peopleInBones * treatsByBones) + (peopleInBlood * treatsByBlood);
    console.log(totalTreats);
    
}

process.stdin.on("data", (input) => {
    const [people, treats] = strToInt(input.trim().split("\n"));
    
    countTreats(people, treats);
});