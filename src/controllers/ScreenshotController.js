


module.exports = {
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;
        //gera 4 bytes de caracteres decimais
        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        })

        return response.send({ id });
    }
};
