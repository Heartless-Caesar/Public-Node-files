const authorize = (req, res, next) => {
    
    const { user } = req.query;

    if(user === 'John'){
        req.user = { name : 'John', id : 1}
    }else{
        res.status(401).send('Unauthorized');
    }

    next();
}

module.exports = authorize