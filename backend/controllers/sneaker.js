const data = require('../data.json');

exports.getSneakers = (req, res) => {
    const sneakers = data.sneakers;
    res.json(sneakers);
}

exports.getSneaker = (req, res) => {
    const id = parseInt(req.params.id);
    const sneakers = data.sneakers;
    const sneaker = sneakers.find(s => s.id === id);
    if(!sneaker) {
        res.status(404).json({ message: "Sneaker not found" });
    } else {
        res.status(200).json(sneaker);
    }
}
