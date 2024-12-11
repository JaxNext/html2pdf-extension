chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: generatePDF
  });
});

function generatePDF() {
  // Get the current page title for the filename
  const filename = document.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.pdf';

  // Create print media style
  const style = document.createElement('style');
  style.textContent = `
    @media print {
      @page { margin: 1cm; }
      body { margin: 0; }
    }
  `;
  document.head.appendChild(style);

  // Use the browser's built-in PDF generation
  window.print();
} 