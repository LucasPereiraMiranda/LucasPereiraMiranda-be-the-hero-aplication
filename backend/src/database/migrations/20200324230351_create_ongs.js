

/*criando a tabela, o que deve-se fazer?*/ 
exports.up = function(knex) {
    return knex.schema.createTable('ongs',(table)=>{
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf',2).notNullable();
    })
};

/*caso de algum error ao criar a tabel, o que fazer?*/
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
