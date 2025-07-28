const select = document.getElementById("selectItem");
const items = document.querySelectorAll(".content-item");

select.addEventListener("change", function () {
  const selected = this.value;

  // တစ်ခုမှ မရွေးရသေးဘူးဆိုရင် => အကုန်ပြထား
  if (!selected) {
    items.forEach(item => item.style.display = "block");
  } else {
    // တစ်ခုရွေးလိုက်ရင် => အဲ့တစ်ခုပဲပြ
    items.forEach(item => {
      item.style.display = (item.id === selected) ? "block" : "none";
    });
  }
});

function triggerGoogleTranslate(langCode) {
  const select = document.querySelector('.goog-te-combo');
  if (!select) return;
  select.value = langCode;
  select.dispatchEvent(new Event('change'));
}

// Elements
const btn = document.getElementById('selectedLang');
const langList = document.getElementById('langList');

// Toggle dropdown visibility on button click
btn.addEventListener('click', () => {
  langList.style.display = (langList.style.display === 'block') ? 'none' : 'block';
});

// Handle language selection from dropdown list
langList.addEventListener('click', e => {
  if (e.target.tagName === 'LI') {
    const langCode = e.target.getAttribute('data-lang');  // e.g. 'my', 'en', 'zh-CN', 'th'
    const langName = e.target.textContent;

    // Update button text to selected language
    btn.textContent = `Language: ${langName} ▼`;

    // Hide dropdown menu
    langList.style.display = 'none';

    // Trigger Google Translate language change
    triggerGoogleTranslate(langCode);
  }
});

// Hide dropdown if clicking outside
window.addEventListener('click', e => {
  const dropdown = document.getElementById('languageDropdown');
  if (!dropdown.contains(e.target)) {
    langList.style.display = 'none';
  }
});

// Function to trigger Google Translate dropdown change with retry logic
function triggerGoogleTranslate(lang) {
  const select = document.querySelector('.goog-te-combo');
  if (!select) {
    // Retry after 500ms if Google Translate dropdown not loaded yet
    setTimeout(() => triggerGoogleTranslate(lang), 500);
  } else {
    select.value = lang;
    // Dispatch 'change' event with bubbles: true so Google Translate detects the change
    select.dispatchEvent(new Event('change', { bubbles: true }));
  }
}



