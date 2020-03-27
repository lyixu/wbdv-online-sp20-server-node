const usersDao = require('../daos/users.dao.server')

module.exports = (app) => {

    setSession = (req, res) => {
        const name = req.params.name
        const value = req.params.value
        req.session[name] = value
        res.send(req.session)
    }

    getSession = (req, res) => {
        const name = req.params.name
        const value = req.session[name]
        res.send(value)
    }

    resetSession = (req, res) => {
        req.session.destroy()
        res.status(200)
    }

    login = (req, res) => {
        const username = req.body.username;
        const password = req.body.password;
        usersDao.findUserByCredentials(username, password)
            .then(user => {
                if(user) {
                    req.session['currentUser'] = user
                    res.send(user)
                } else {
                    res.sendStatus(403)
                }
            })
    }

    register = (req, res) => {
        const newUser = req.body;
        usersDao.createUser(newUser)
            .then(actualUser => {
                req.session['currentUser'] = actualUser
                res.json(actualUser)
            })
    }

    currentUser = (req, res) => {
        res.json(req.session["currentUser"])
    }

    logout = (req, res) => {
        req.session.destroy()
        res.send(200)
    }

    app.get('/api/session/set/:name/:value',
        setSession);

    app.get('/api/session/get/:name',
        getSession);

    app.get('/api/session/reset',
        resetSession);

    app.post('/api/register', register)
    app.post('/api/login', login)
    app.post('/api/currentUser', currentUser)
    app.post('/api/logout', logout)

}
