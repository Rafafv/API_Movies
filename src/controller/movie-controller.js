var request = require("request");
let key = '1f54bd990f1cdfb230adb312546d765d';


exports.getUltimos = async (req, res, next) => {
    //console.log("teste");
    await request(`https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`, function(error, response, body) {
      res.json(body);
    });
}

exports.getBemAvaliados = async (req, res, next) => {
    
    await request(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`, function(error, response, body) {
      res.json(body);
    });
}

exports.getByID = async (req, res, next) => {
    const id = req.params.movieId;
    console.log("chamando");
    await request(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`, function(error, response, body) {
      res.json(body);
    });
}

exports.getVideo = async (req, res, next) => {
    const id = req.params.movieId;
    console.log("chamando");
    await request(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=en-US`, function(error, response, body) {
      res.json(body);
    });
}
