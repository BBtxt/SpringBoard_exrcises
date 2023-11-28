$(".movie-rating").on("submit", function (event) {
    event.preventDefault();
    const movie = $(this).find("move-input").eq(0).val();
    const rating = $(this).find("input[type=number]").eq(1).val();
    console.log(movie, rating);
    $(".movie-list").append(`<li>${movie} - ${rating}</li>`);
    $(this).find("input").val("");});