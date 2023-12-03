$(".gif-form").on("submit",  async function (event) {
  event.preventDefault(); // Prevents the default form submission
  var inputValue = $(this).find('input[name="gif"]').val(); // Grabs Value from Input
  const gifSrc = await getGifs(inputValue);

  let liElement = $('<li>');
  let imageElement = $('<img>', {
    src: gifSrc,
    alt: inputValue,
  });
  liElement.append(imageElement);
  $(".gif-list").append(liElement);

});

async function getGifs(query) {
  const numGenerator = Math.floor(Math.random() * 50);

  const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      q: query,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  const gifUrl = response.data.data[numGenerator].images.original.url;
  return gifUrl;
}

$('.clear-btn').on('click', function() {
    $('.gif-list').empty();
  });