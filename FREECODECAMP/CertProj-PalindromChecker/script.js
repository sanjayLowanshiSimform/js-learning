const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById('result');

checkButton.addEventListener("click", () => {
  const inputValue = textInput.value;

  if (inputValue === "") {
    alert(('Please input a proper value!!'));
    return;
  }

  const stringWithoutSpaces = inputValue.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const splitItem = stringWithoutSpaces.split("");
  const revItem = splitItem.slice().reverse();
  const joinItem = revItem.join("");

  const isPalindrome = stringWithoutSpaces === joinItem;

  result.innerText = `${inputValue} ${isPalindrome ? "is" : "is not"} a palindrome`;
});
