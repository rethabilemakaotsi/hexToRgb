function convertHexToRgb() {
    
    var hexInput = document.getElementById('hexInput').value.trim();

    
    if (!/^#([0-9A-Fa-f]{3}){1,2}$/.test(hexInput)) {
      alert("Please enter a valid hex color code.");
      return;
    }

    
    hexInput = hexInput.replace('#', '');

    
    var bigint = parseInt(hexInput, 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    document.getElementById('result').innerHTML = `RGB: (${r}, ${g}, ${b})`;
  
}