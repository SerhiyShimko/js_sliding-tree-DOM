'use strict';

const li = Array.from(document.querySelectorAll('li'));

for (const list of li) {
  const span = document.createElement('span');

  if (list.firstChild.nodeType === 3) {
    span.textContent = list.firstChild.textContent.trim();
    list.removeChild(list.firstChild);
  }

  list.prepend(span);

  span.addEventListener('click', (eve) => {
    const spanTarget = eve.target;

    if (spanTarget instanceof HTMLElement) {
      const next = list.querySelector('ul');

      if (next instanceof HTMLElement) {
        if (next.hasAttribute('hidden')) {
          next.removeAttribute('hidden');

          return;
        }
        next.setAttribute('hidden', '');
      }
    }
  });
}
