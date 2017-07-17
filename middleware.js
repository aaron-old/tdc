module.exports = (db) => {

    return {
        requireAuthentication: function (req, res, next) {
            let token = req.get("Auth");

            if(token) {
                db.User.findByToken(token).then((user) => {
                    req.user = user.clean();
                    next();
                }, () => {
                    res.status(401).send();
                });
            }
        }
    }
};
