'user strict';



document.getElementById('create-movie').addEventListener('click', function () {
    //Movie Title Input
    var movieTitleInput = document.getElementById('MovieTitle');
    var movieTitleValue = movieTitleInput.value

    //Movie Length Input
    var movieLengthInput = document.getElementById('MovieLength');
    var movieLengthValue = movieLengthInput.value

    //Movie Genre Input
    var movieGenreInput = document.getElementById('MovieGenre');
    var movieGenreIndex = movieGenreInput.selectedIndex;
    var movieGenreValue = movieGenreInput.options[movieGenreIndex].value

    //error text
    var inputError = document.querySelector("#error-movie");

    var error = {
        OK: 'OK',
        Insert_Title: 'Please Insert Movie Title',
        Insert_Length: 'Please Insert Movie Length',
        Insert_Genre: 'Please Insert Movie Genre'
    }

    if (movieTitleValue === '' || movieLengthValue === '' || movieGenreValue == movieGenreIndex) {
        inputError.innerHTML = "<p>" + error.Insert_Title + "</p>";
        inputError.innerHTML += "<p>" + error.Insert_Length + "</p>";
        inputError.innerHTML += "<p>" + error.Insert_Genre + "</p>";
    }
    if (movieTitleValue !== '') {
        document.getElementsByTagName('p')[0].innerHTML = '';
    }
    if (movieLengthValue != '') {
        document.getElementsByTagName('p')[1].innerHTML = '';
    }
    if (movieLengthValue != movieGenreIndex) {
        document.getElementsByTagName('p')[2].innerHTML = '';
    }

});