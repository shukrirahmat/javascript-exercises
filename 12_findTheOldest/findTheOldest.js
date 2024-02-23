const findTheOldest = function(people) {
    const date = new Date();
    const thisYear = date.getFullYear();
    return people
        .reduce((oldest,current) => {
                let oldestAge;
                let currentAge;
                if ('yearOfDeath' in oldest) {
                    oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
                } else {
                    oldestAge = thisYear - oldest.yearOfBirth;
                }
                if ('yearOfDeath' in current) {
                    currentAge = current.yearOfDeath - current.yearOfBirth;
                } else {
                    currentAge = thisYear - current.yearOfBirth;
                }
                return currentAge > oldestAge? current : oldest;
        })
};

// Do not edit below this line
module.exports = findTheOldest;
