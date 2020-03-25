const connection = require('../database/connection');

module.exports = {
    
    /*list all incidents contained in database*/
    async index(req,res){
        
        const { page = 1} = req.query;

        const [count] = await connection('incidents')
            .count();

        const incidents = await connection('incidents')
            .join('ongs','ongs.id','=','incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)    
            .select(['incidents.*',
                'ongs.name',
                'ongs.email',
                'ongs.whatsapp',
                'ongs.city',
                'ongs.uf']);
        
        res.header('X-Total-Count',count['count(*)']);
        
        return res.json(incidents);
    },

    /*adding any incident in database*/
    async create(req,res){
        /*id is incremental*/
        console.log('cheguei aqui');
        const {title, description, value} = req.body;
        const ong_id = req.headers.authorization;
        
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return res.json({id});
    },

    /*remove one incident in database*/
    async delete(req,res){
        
        const { id } = req.params;
        const ong_id = req.headers.authorization;
        const incident = await connection('incidents')
            .select('ong_id')
            .where('id',id)
            .first();
            
        
        if(incident.ong_id != ong_id){
            /* 401 : without authorization */
            return res.status(401).json({error:'Operation not permited'});
        }

        await connection('incidents').where('id',id).delete();
        /* 204 : success but dont content */
        return res.status(204).send();
    }
}