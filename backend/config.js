module.exports = {
  secret: 'CECI EST UTILISE POUR SIGNER ET VERIFIER LES JETONS JWT, VOUS POUVEZ LE REMPLACER PAR VOTRE PROPRE CODE SECRET',
  expiresIn: '24h',
  portServer: '3000',
  clientDB: 'oracledb', // les valeurs autorisées 'sqlite' 'mssql', 'oracledb' et 'pg' --pg pour PostgreSQL --valeur par défaut 'mssql'
  versionDB: '3.1.2', // obligatoir pour la base de données PostgreSQL
  hostDB: 'localhost',
  userDB: 'webvax',
  passwordDB: 'DVL',
  databaseDB: 'ORCL',
  portDB: 1521,
  encryptDB: false,

  // hostDB: '146.148.117.230',
  // userDB: 'aevaweb',
  // passwordDB: 'Aeva@net-',
  // databaseDB: 'SUIPI7',
  // portDB: 1435,
}
