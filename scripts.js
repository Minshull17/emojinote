function writeToClipboard(text) {
    // Create a hidden textarea element
    var textarea = document.createElement("textarea");
  
    // Set the textarea to be invisible
    textarea.style.position = "absolute";
    textarea.style.left = "-9999px";
    textarea.style.top = "0";
  
    // Set the text to write to the clipboard
    textarea.value = text;
  
    // Add the textarea to the page
    document.body.appendChild(textarea);
  
    // Select the text in the textarea
    textarea.select();
  
    // Copy the selected text to the clipboard
    document.execCommand("copy");
  
    // Remove the textarea from the page
    document.body.removeChild(textarea);
  }