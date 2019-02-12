

// puerto

process.env.PORT = process.env.PORT || 3000;


//entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'env'


// base de datos

let urlDB ='mongodb://admin:k123456@ds113765.mlab.com:13765/elesedb'
if( process.env.NODE_ENV === 'env'){
    urlDB = 'mongodb://localhost:27017/elesedb';
}
process.env.URLDB = urlDB