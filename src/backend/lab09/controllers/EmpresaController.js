const EmpresaDAO = require('../daos/EmpresaDAO');

class EmpresaController {
    index(req, res) {
        EmpresaDAO.findAll(req.query.nome, (err, jogos) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json(jogos);
        });
    }

    show(req, res) {
        const id = req.params.id;
        EmpresaDAO.findById(id, (err, jogo) => {
            if (err) return res.status(500).json({ error: err.message });
            if (jogo) {
                res.json(jogo);
            } else {
                res.status(404).json('Empresa não encontrada.');
            }
        });
    }
}

module.exports = new EmpresaController;