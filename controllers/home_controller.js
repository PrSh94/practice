module.exports.home = function(req,res){
    return res.end('<h1> Express is running Home page </h1>');
}

module.exports.profile = function(req,res){
    return res.end('<h1> Express is running Profile page </h1>');
}