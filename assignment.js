console.log("hello".length);

// problem - 1: ana to vori
function anaToVori(ana) {
    return ana / 16;
}

// problem - 2: pandaCost
function pandaCost(noOfShingara, noOfShomucha, noOfJilapi) {
    const shingaraPrice = 7;
    const shomuchaPrice = 10;
    const jilapiPrice = 15;
    return (shingaraPrice * noOfShingara) + (shomuchaPrice * noOfShomucha) + (jilapiPrice * noOfJilapi);
}

// problem - 3: picnicBudget
function picnicBudget(numberOfPeople) {
    var totalCost = 0;
    if (numberOfPeople <= 100) {
        totalCost = numberOfPeople * 5000;
    }
    else if (numberOfPeople > 100 && numberOfPeople <= 200) {
        totalCost = 100 * 5000;
        totalCost += (numberOfPeople - 100) * 4000;
    }
    else if (numberOfPeople > 200) {
        totalCost = 100 * 5000;
        totalCost = 100 * 4000;
        totalCost += (numberOfPeople - 200) * 3000;
    }
    return totalCost;
}

// problem - 4: oddFriend
function oddFriend(names) {
    for (const name of names) {
        if (name.length % 2 == 1) {
            return name;
        }
    }
    return "No Odd Friend Found";
}