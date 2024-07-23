//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);

    }

    average() {
        let total = 0;
        for (let i = 0; i < this.scores.length; i++) {
            total = this.scores[i] + total;
        }
        return Math.round((total/this.scores.length)*10)/10;
    }
    status() {
        let ave = this.average();
        let status = "";
        if (ave > 90) {
            status = "Accepted";
        } else if (ave >= 80) {
            status = "Reserve";
        } else if (ave >= 70) {
            status = "Probationary";
        } else {
            status = "Rejected"
        }
        return status;
    }
}



let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let merryMaltese = new CrewCandidate("Merry Maltese", 225, [75, 78, 62]);
let gladGator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);


//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

bubbaBear.addScore(83);
console.log(bubbaBear)

console.log(bubbaBear.average())

while (gladGator.status() != "Accepted") {
   gladGator.addScore(100);
}
console.log(`${gladGator.name} earned an average test score of ${gladGator.average()}% and has a status of ${gladGator.status()}.`)


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.