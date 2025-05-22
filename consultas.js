//script de datos "data.js"
//punto 1) "Crear el script .js con la creación de la base de datos y las colecciones."
// crear bd :
// use cafeteria
//cargar las colecciones

//punto 1
load("data.js");

//punto 2 : 
cafeteria > db.cafes.find({ ingredientes: { $eq: 'chocolate' } }).count()

//punto 3 :
cafeteria > db.cafes.find({ tipo: { $eq: 'cold brew' }, ingredientes: { $eq: 'vainilla' } }).count()

//punto 4 :
cafeteria > db.cafes.find({ intensidad: { $eq: 'media' } }, { tipo: 1, peso: 1 })

//punto 5 :
cafeteria > db.cafes.find({ peso: { $gte: 200, $lte: 260 } }, { tipo: 1, peso: 1, intensidad: 1 })

//punto 6 : 
cafeteria > db.cafes.aggregate([{ $match: { 'tostador.localidad': { $regex: 'san' } } }, { $sort: { peso: -1 } }])

//punto 7 :
cafeteria > db.cafes.aggregate([{ $group: { _id: '$tipo', pesoTotal: { $sum: '$peso' } } }])

//punto 8 :
cafeteria > db.cafes.updateMany({ intensidad: { $eq: 'alta' } }, { $push: { ingredientes: 'whysky' } })

//punto 9 :
cafeteria > db.cafes.updateMany({ peso: { $gte: 200, $lte: 260 } }, { $inc: { peso: 10 } })

//punto 10 :
cafeteria > db.cafes.deleteMany({ peso: { $lte: 210 } })