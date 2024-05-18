window.onload = function() {
    const link = document.createElement('a');
    link.href = 'lolBad.txt';
    link.download = 'lolBad.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
