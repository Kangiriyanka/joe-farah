document.addEventListener('DOMContentLoaded', () => {
  // For every code block
  document.querySelectorAll('.astro-code').forEach(block => {
    // 1. Create the wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'code-wrapper';
    
    // 2. Wrap the block
    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(block);

    const button = document.createElement('button');
    button.className = 'copy-btn';
    button.setAttribute('aria-label', 'Copy code');
    
    // Saves alot of time lol
    const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>`;
    const checkIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    
    button.innerHTML = copyIcon;
    
    button.onclick = async () => {
      const code = block.querySelector('code')?.innerText ?? block.innerText;
      // writeText does the actual copy
      // await -> wait for the copy to finish before showing the check icon
      await navigator.clipboard.writeText(code);
      button.innerHTML = checkIcon;
      setTimeout(() => button.innerHTML = copyIcon, 1000);
    };
    
    // 3. Append to wrapper (the stable parent)
    wrapper.appendChild(button);
  });
});