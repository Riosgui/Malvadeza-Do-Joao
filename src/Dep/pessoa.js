function pessoa (req, res) {
    console.log(req.body);
    res.json({
        "statusCode": 200
    })
}

export default pessoa;