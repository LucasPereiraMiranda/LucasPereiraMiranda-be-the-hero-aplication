const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {

    /*list all ongs in database*/
    async index(req,res){
        const ongs = await connection('ongs').select('*');
        return res.json(ongs);
    },

    /*add ong in database*/
    async create(req,res){
        const { name, email, whatsapp, city, uf} = req.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        // retorna o id pois ele sera usado como um item importante para o login na aplicacao
        return res.json({id});
    }
}