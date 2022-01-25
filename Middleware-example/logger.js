const logger = (req, res, next) => {
   
    const method = req.method;
    const url = req.url;
    console.log(method, url, 'Testing log');
    next();
}

module.exports = logger