console.log('Swapping Variables within Objects');

let RemarBacadon = {
  FirstName: "Remar",
  SecondName: "Gabriel",
  MiddleName: "Espaldon",
  LastName: "Bacadon",
  EyeColor: "Black Eyes",
  HairColor: "Black",
  BodyAppearance: "Fat",
  Age: '16',
  MadeIn: "Phillippines",
  Author: "Parents",
  Height: "5 feet, 8 inches",
  SocialSkill: null,
  Weight: "210",
  male: true,
  female: false,
  Asian: true,
  spouse: "none",
}

let RobotnikKun = {
  FirstName: "Robotnik",
  LastName: "Kun",
}

let memory = RemarBacadon.FirstName;
RemarBacadon.FirstName = RobotnikKun.FirstName
RobotnikKun.FirstName = memory

console.log("Remar's first name is " + RemarBacadon.FirstName);
console.log("Robotnik's first name is " + RobotnikKun.FirstName);
