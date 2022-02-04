// problem - 1: anaToVori
function anaToVori(ana) {
    // check if parameter is a positive number
    if (typeof ana == 'number' && ana >= 0) {
        return ana / 16;    // 1 vori = 16 ana
    }
    else {      // else send error
        return "Invalid Parameter! Please Pass A Positive Number as Aana";
    }
}

// problem - 2: pandaCost
function pandaCost(noOfShingara, noOfShomucha, noOfJilapi) {
    // items' unit proce
    const shingaraPrice = 7;
    const shomuchaPrice = 10;
    const jilapiPrice = 15;

    // check if any of the parameters is not a positive integer number to send error
    if (typeof noOfShingara != 'number' || typeof noOfShomucha != 'number' || typeof noOfJilapi != 'number'
        || noOfShingara < 0 || noOfShomucha < 0 || noOfJilapi < 0
        || !Number.isInteger(noOfShingara) || !Number.isInteger(noOfShomucha) || !Number.isInteger(noOfJilapi)) {

        return "Invalid Parameter! Please Pass Positive Integer Numbers for Each Items";
    }

    return (shingaraPrice * noOfShingara) + (shomuchaPrice * noOfShomucha) + (jilapiPrice * noOfJilapi);
}

// problem - 3: picnicBudget
function picnicBudget(numberOfPeople) {
    var totalCost = 0;

    // check if parameter is not a positive integer number to send error
    if (typeof (numberOfPeople) != 'number' || numberOfPeople < 0 || !Number.isInteger(numberOfPeople)) {
        return "Invalid Parameter! Please Pass A Positive Integer Number";
    }


    if (numberOfPeople <= 100) {    // 100 or less people
        totalCost = numberOfPeople * 5000;
    }
    else if (numberOfPeople > 100 && numberOfPeople <= 200) {   // 101-200 people

        totalCost = 100 * 5000;     // cost for first 100 people
        totalCost += (numberOfPeople - 100) * 4000; // added cost for remaining people
    }
    else if (numberOfPeople > 200) {    // 201 or more people

        totalCost = 100 * 5000;     // cost for first 100 people
        totalCost += 100 * 4000;     // added cost for next 100 people
        totalCost += (numberOfPeople - 200) * 3000; // added cost for remaining people
    }
    return totalCost;
}

// problem - 4: oddFriend
function oddFriend(names) {

    // check if parameter is not an array or empty to send error
    if (typeof (names) != 'object' || names.length == 0) {
        return "Invalid Parameter! Please Pass An Array of Strings."
    }

    for (const name of names) {
        if (name.length % 2 == 1) { // if odd name length found
            return name;
        }
    }
    return "No Odd Friend Found";   // if no odd name length found in array
}