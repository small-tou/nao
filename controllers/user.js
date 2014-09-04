var User = new BaseModel("users");
var UserDefine = new BaseModel("userdefines");
var UUID = require("node-uuid");
module.exports = {
    "/add": {
        post: function() {
            return function(req, res, next) {
                req.body.uuid = UUID.v4();
                User.findAll().where({
                    uid: req.body.uid,
                    login_platform: req.body.login_platform
                }).done(function(error, users) {
                    if (users && users.length) {
                        var result = {
                            is_success: 1
                        }
                        if (error) {
                            result.is_success = 0;
                        } else {
                            result.data = users[0];
                        }
                        res.send(result);
                    } else {
                        User.add(req.body).done(function(error, user) {
                            var result = {
                                is_success: 1
                            }
                            if (error) {
                                result.is_success = 0;
                            } else {
                                result.data = user;
                            }
                            res.send(result);
                        })
                    }
                })

            }
        }
    }

}