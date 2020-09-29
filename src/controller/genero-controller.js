var request = require("request");
let key = '1f54bd990f1cdfb230adb312546d765d';

exports.get = async (req, res, next) => {
    //console.log("teste");
    await request(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=en-US`, function(error, response, body) {
      res.json(body);
    });
}