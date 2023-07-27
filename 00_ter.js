console.log(`================= Eligiblity Criteria for company =================\n`);
var eligiblityForInterview = function (gradScore, hscScore, sscScore, candidateName) {
   var result = gradScore >= 70 || hscScore >= 80 || sscScore >= 90 ? `Congrates ${candidateName} you are eligible for TCS interview` : `Unfortunately you are not eligible for interview`
   console.log(result);
}
eligiblityForInterview(80, 86, 90, "Anil")
eligiblityForInterview(70, 65, 55, "Nigonda")
eligiblityForInterview(60, 79, 88, "Ganesh")
console.log("********************** step no 2 *********************");



var maleMarriageEligibility = function (gender, age, boyName) {

   var result1 = (age >= 18) ? `Hey ${boyName} your eligible for marriage` : `Hey ${boyName}  your not eligible`

   console.log(result1);
}
maleMarriageEligibility("male", 25, "Billgates");
maleMarriageEligibility("male", 17, "stew jobs");

console.log("*****************  step no-3  ***********************");



var femalemarriageEligibility = function (gender, age, girlName) {

   var result2 = age >= 18 ? ` Hey ${girlName} your eligible for marriage` : `Hey ${girlName} your eligible for marriage`

   console.log(result2);
}
maleMarriageEligibility("female", 16, "jenifer");
maleMarriageEligibility("female", 27, "malinda");
