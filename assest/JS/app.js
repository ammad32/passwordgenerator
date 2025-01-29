const lengthInput = document.getElementById('length');
    const uppercaseCheckbox = document.getElementById('uppercase');
    const lowercaseCheckbox = document.getElementById('lowercase');
    const numbersCheckbox = document.getElementById('numbers');
    const symbolsCheckbox = document.getElementById('symbols');
    const generateButton = document.getElementById('generate');
    const passwordDisplay = document.getElementById('password');
    const copyButton = document.getElementById('copy');

    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';


function generatePassword() {
      const length = parseInt(lengthInput.value);
      let charSet = '';

      if (uppercaseCheckbox.checked) {
        charSet += uppercaseChars;
      }
      if (lowercaseCheckbox.checked) {
        charSet += lowercaseChars;
      }
      if (numbersCheckbox.checked) {
        charSet += numberChars;
      }
      if (symbolsCheckbox.checked) {
        charSet += symbolChars;
      }

      if (charSet === '') {
        return '';
      }

      let password = '';
      for (let i = 0; i < length; i++) {
        password += charSet.charAt(Math.floor(Math.random() * charSet.length));
      }
      return password;
    }

    function updatePassword() {
      passwordDisplay.textContent = generatePassword();
    }

    generateButton.addEventListener('click', updatePassword);

    copyButton.addEventListener('click', () => {
      navigator.clipboard.writeText(passwordDisplay.textContent);
      copyButton.textContent = '✓';
      setTimeout(() => {
        copyButton.textContent = '📋';
      }, 2000);
    });

    updatePassword();



