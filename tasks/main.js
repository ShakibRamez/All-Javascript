function checkAge() {
      const age = document.getElementById('ageInput').value;
      const result = document.getElementById('result');

      if (age === '') {
        result.textContent = 'Please enter your age.';
        result.style.color = 'red';
        return;
      }

      if (age < 18) {
        result.textContent = 'You are underaged!';
        result.style.color = 'orange';
      } else {
        result.textContent = 'You are an adult!';
        result.style.color = 'green';
      }
    };