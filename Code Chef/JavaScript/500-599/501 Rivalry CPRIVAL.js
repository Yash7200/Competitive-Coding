process.stdin.setEncoding('utf-8');

const strToInt = (strArray) => {
    const intArray = strArray.map((strItem) => strItem.trim().split(' ').map(Number));
    
    return intArray;
};

const whoHasHigherRating = (DominaterRating, EveruleRating, DominaterRatingChange, EveruleRatingChange) => {
    const DominaterFinalRating = DominaterRating + DominaterRatingChange;
    const EveruleFinalRating = EveruleRating + EveruleRatingChange;
    
    (DominaterFinalRating > EveruleFinalRating)
        ? console.log("Dominater")
        : console.log("Everule");
};

process.stdin.on('data', (input) => {
    const [ratings, changeInRating] = strToInt(input.trim().split('\n'));
    
    const [DominaterRating, EveruleRating] = ratings;
    const [DominaterRatingChange, EveruleRatingChange] = changeInRating;
    
    whoHasHigherRating(DominaterRating, EveruleRating, DominaterRatingChange, EveruleRatingChange);
});