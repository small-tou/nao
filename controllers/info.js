var InfoModel = new BaseModel("infos")
module.exports = {
    "/": {
        get: function() {
            return function(req, res, next) {

                InfoModel.findAll().where({uuid:req.query.uuid}).done(function(error,infos){
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