module.exports = {
    getNames: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.get_names().then(products => {
            res.status(200).send(products);
        })
    },
    getName: (req, res) => {
        let { id } = req.params;
        const dbInstance = req.app.get('db');
        dbInstance.get_name(id).then(prod => {
            res.status(200).send(prod);
        })
    },
    createNames: (req, res) => {
        let { firstname, lastname, age } = req.body;
        const dbInstance = req.app.get('db');
        let newName = {
            firstname,
            lastname, 
            age,
        };
        dbInstance.create_name(newName).then(p => {
            res.status(200).send(p);
        });
    }, 
    updateNames: (req, res) => {
        let { id } = req.params;
        let { firstname, lastname, age } = req.body;
        const dbInstance = req.app.get('db');
        let newName = {
            id,
            firstname, 
            lastname,
            age,
        };
        dbInstance.update_name(newName).then(p => {
            res.status(200).send(p);
        })
    },
    deleteName: (req, res) => {
        let { id } = req.params;
        const dbInstance = req.app.get('db');
        dbInstance.delete_name(id).then(p => {
            res.status(200).send(p);
        })
    }
}