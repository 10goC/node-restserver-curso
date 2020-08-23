// ==================
// Puerto
// ==================
process.env.PORT = process.env.PORT || 3000;

// ==================
// Entorno
// ==================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// ==================
// URL conexión BD
// ==================
process.env.URLDB = process.env.NODE_ENV === 'dev' ?
    'mongodb://localhost:27017/cafe' :
    'mongodb+srv://curykdiego:dHb2nQAUZHQbMc7Z@cluster0.ueqgg.mongodb.net/cafe?retryWrites=true&w=majority';
