db.cafes.drop()

db.cafes.insertOne(
    {
        tipo: 'espresso',
        ingredientes: ['vainilla', 'canela'],
        peso: 120,
        intensidad: 'media',
        tipoPrecio: [{ tipo: 'efectivo', precio: 570 }, { tipo: 'tarjeta', precio: 950 }],
        contieneLeche: true,
        tostador: {
            localidad: 'Avellaneda',
            nombre: 'TostadosPepe',
            cuit: '23135351'
        }
    }
)
db.cafes.insertOne(
    {
        tipo: 'descafeinado',
        ingredientes: ['vainilla', 'canela'],
        peso: 100,
        intensidad: 'baja',
        tipoPrecio: [{ tipo: 'efectivo', precio: 500 }, { tipo: 'tarjeta', precio: 850 }],
        contieneLeche: true,
        tostador: {
            localidad: 'Adrogue',
            nombre: 'TostadosPepe1',
            cuit: '331353132'
        }
    }
)
db.cafes.insertOne(
    {
        tipo: 'filtrado',
        ingredientes: ['chocolate', 'canela'],
        peso: 130,
        intensidad: 'baja',
        tipoPrecio: [{ tipo: 'efectivo', precio: 300 }, { tipo: 'tarjeta', precio: 750 }],
        contieneLeche: true,
        tostador: {
            localidad: 'Soldati',
            nombre: 'tosta1',
            cuit: '1353134'
        }
    }
)
db.cafes.insertOne(
    {
        tipo: 'cold brew',
        ingredientes: ['vainilla', 'caramelo'],
        peso: 160,
        intensidad: 'alta',
        tipoPrecio: [{ tipo: 'efectivo', precio: 700 }, { tipo: 'tarjeta', precio: 650 }],
        contieneLeche: true,
        tostador: {
            localidad: 'santos',
            nombre: 'TostadosPepe',
            cuit: '23135351'
        }
    }
)
db.cafes.insertOne(
    {
        tipo: 'cold brew',
        ingredientes: ['vainilla', 'caramelo', 'chocolate'],
        peso: 230,
        intensidad: 'alta',
        tipoPrecio: [{ tipo: 'efectivo', precio: 780 }, { tipo: 'tarjeta', precio: 650 }],
        contieneLeche: true,
        tostador: {
            localidad: 'san Avellaneda',
            nombre: 'TostadosPepe',
            cuit: '23135351'
        }
    }
)
