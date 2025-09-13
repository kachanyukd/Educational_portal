document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.getElementById('details');
  const charCount = document.getElementById('char-count');
  const maxLength = textarea.getAttribute('maxlength');

  textarea.addEventListener('input', () => {
    const remaining = maxLength - textarea.value.length;
    charCount.textContent = `Залишилось символів: ${remaining}`;
  });

  const form = document.getElementById('feedback-form');
  const emailInput = document.getElementById('parent-email');

  form.addEventListener('submit', (e) => {
    const emailValue = emailInput.value.trim();
    if (!emailValue.endsWith('@gmail.com')) {
      e.preventDefault(); 
      alert('E-mail повинен закінчуватися на @gmail.com');
      emailInput.focus();
      return false;
    }
  });
});
