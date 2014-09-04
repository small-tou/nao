var InfoModel = new BaseModel("infos")
module.exports = {
    "/": {
        get: function() {
            return function(req, res, next) {
                var frompointx = req.query.frompointx;
                var topointx = req.query.topointx;
                var frompointy = req.query.frompointy;
                var topointy = req.query.topointy;

                InfoModel.findAll().where(["longitude>? and longitude<? and latitude>? and latitude<?",frompointx,topointx,frompointy,topointy]).done(function(error,infos){
                    res.send(infos)
                })
            }
        }
    },
    "/add": {
        post: function() {
            return function(req,res){
                InfoModel.add(req.body).done(function(error,info){
                    res.send(info)
                })
            }

        }
    }
}