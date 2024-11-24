function fetchData() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'data.txt', true);
    xhr.onload = function() {
        if (xhr.status == 200) {
            // Replace new line characters with <br> tags
            var formattedText = xhr.responseText.replace(/\r?\n/g, '<br>');
            document.getElementById('content').innerHTML = formattedText;
        } else {
            console.error('Error fetching data');
        }
    };
    xhr.send();
}
