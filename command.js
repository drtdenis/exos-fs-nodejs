const  { readFileSync , writeFileSync }  =  require ( 'fs' )

// Lire le contenu du fichier original.txt et l'assigner à txt
const txt = readFileSync('./original.txt', 'utf-8')

/*
  Avant de copier nous pouvons effectuer un traitement sur la variable txt, 
  extraire ou rajouter des élements à copier
*/

// Ecrire le contenu de la variable txt dans copy.txt
writeFileSync('./copy.txt', txt)

if (process.argv.length != 4) {
  console.log(`usage: node command.js readFileSync writeFileSync`)
  process.exit(1) // exit the program with code status 1
}
let name = process.argv[2]
console.log(`ok fichiercopié`)


// node command.js readFileSync writeFileSync