$(document).ready(function () {

    $("button").on("click", function () {
        let value = $("input").val();
        // let apiUrl= `https://api.giphy.com/v1/gifs/search?q=${value}&limit=1&api_key=8WuA0cvYuycdixljgzQ5VcBzvngl1Sgy`
        // $.ajax(apiUrl).done((res)=>{
        //   const urlImage=  res.data[0].images.fixed_height_small.url
        //   console.log(res.data[0].images.fixed_height_small.url)
        //   let html = `<img src="${urlImage} class="item">` +
        //   '<div class="cancel">X</div>' +
        //   '</img>';
        let apiword = "https://random-word-api.herokuapp.com/word?number=1"
        $.ajax(apiword).done((res)=>{
           var wrr= res[0]
           let api = `https://api.giphy.com/v1/gifs/search?q=${wrr}&limit=1&api_key=lWlGd4qH73vTrdAFuB76srVlJ5rrTluF`
           $.ajax(api).done((res)=>{
           const url =res.data[0].images.downsized_large.url;
           let html = '<div class="item">' +
              '<div class="cancel">X</div>' +
              `<img src=${url}/> `
              '</div>';
              $("#todo-container").append(html)
              log.console(wrr)
           })

      $("#todo-container").append(html)
        })
        // let html = `<div class="item">` +
        //     '<div class="cancel">X</div>' +
        //     value +
        //     '</div>';

        // $("#todo-container").append(html)


    })

    $("#todo-container").on("click", ".cancel", function () {
        $(this).parent().remove();
    })


})