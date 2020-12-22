// sqlMap.js  sql语句
const sqlMap = {
  Stu: {
    add: 'INSERT INTO websites(id,name,url,alexa,country) VALUES(0,?,?,?,?)',
    show: 'select * from websites',
    del: 'delete from websites where id = ?',
    update: 'update websites set name = ?,url = ?,alexa = ?,country = ? where id = ?'
  }
}

module.exports = sqlMap
