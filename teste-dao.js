const userDao = require('./user-dao')

/*

userDao.getUserById(1, (err, users) => {
    if (err) {
      console.error('Erro ao buscar usuário')
    }
  })
*/
  let dados = {login:"bruno",senha:"1234",email:"bruno@gmail.com"}

  userDao.addUser(dados, (err, users) => {
    if (err) {
        console.error('Erro ao buscar usuário')
      }
  })
  