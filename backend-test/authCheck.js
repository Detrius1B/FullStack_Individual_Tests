function authClient(req, res, next) {
    if (req.client == null) {
        res.status(403)
        return res.send('you need to sign in')
    }

    next()
}

module.exports = authClient