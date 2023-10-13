function processFile() {
    const fileInput = document.getElementById('textFileInput');
    const resultsSection = document.getElementById('resultsSection');
    const downloadLink = document.getElementById('downloadLink');
  
    if (fileInput.files.length === 0) {
      alert('Please select a text file first.');
      return;
    }
  
    const file = fileInput.files[0];
    const reader = new FileReader();
  
    reader.onload = function(event) {
      const fileContent = event.target.result;
      // Here you can process the file content as needed.
      // For this example, we'll just display a dummy result.
      const dummyResult = 'This is a sample result.\nNeed to give a dynamic output.';
      
      // Display the results and show the download button
      resultsSection.style.display = 'block';
      const resultsParagraph = document.createElement('p');
      resultsParagraph.textContent = dummyResult;
      resultsSection.appendChild(resultsParagraph);
      downloadLink.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(dummyResult);
      downloadLink.style.display = 'block';
    };
  
    reader.readAsText(file);
  }
  