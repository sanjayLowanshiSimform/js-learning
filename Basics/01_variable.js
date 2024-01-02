// Variables in Js and its types
const accountId = 14456; // const cannot be changrd once declared.
let accountEmail = "sanjay@gmail.com"; // used mostly
var accountPswd = "1234"; // dont't use, create scope problems
accountCity = "Nashik"; // not recommended.
let accountState; // if there's no value assigned to an var, then it will be undefined var.

console.log("accountId");
console.log(accountId);
console.table([
  accountId,
  accountEmail,
  accountPswd,
  accountCity,
  accountState,
]);

accountEmail = "sl@js.com";
accountPswd = "jslearn";
accountCity = "Ahmedabad";

/*
NOTE : Prefer Not to use Var, because of issues in block scope & functional scope.
*/

console.table([
  accountId,
  accountEmail,
  accountPswd,
  accountCity,
  accountState,
]);
