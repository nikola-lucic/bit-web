'user strict';

var movie = new Movie(movieTitleValue, movieLengthValue, movieGenreValue);
var movieList = [];
movieList.push(movie.this.movieListGenerator());

function Movie(title, length, genre) {
    this.movieTitleValue = movieTitleValue;
    this.movieLengthValue = movieLengthValue;
    this.movieGenreShortName = function () {
        var storage = this.movieGenreValue[0] + this.movieGenreValue[-1];
        return storage.toUpperCase(this.movieGenre);
    };
    this.movieListGenerator = function () {
        return this.movieTitleValue + ', ' + this.movieLengthValue + ' ,' + this.getGen();
    }
};