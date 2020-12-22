const models = require('../db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../sqlMap')
const modl = require('./resmodles')
// 连接数据库
const conn = mysql.createConnection(models.mysql)
conn.connect()

// 接口：增加信息
router.post('/addStu', (req, res) => {
  const sql = $sql.Stu.add
  const params = req.body
  console.log('添加', params)
  conn.query(sql, [params.name, params.url, params.alexa, params.country], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      modl.jsonWriteAdd(req, res, result)
    }
  })
})

// 接口：查询全部
router.get('/showStu', (req, res) => {
  const sql = $sql.Stu.show
  const params = req.body
  console.log(params)
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      modl.jsonWriteGet(req, res, result)
    }
  })
})

// 接口：查询单条数据
router.get('/showStu/:id', (req, res) => {
  const params = req.query
  const sql = `select * from websites where id = ${req.params.id}`
  // const sql = 'select * from websites where id = ?'
  // const sql = $sql.Stu.oneShow
  console.log(params)
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      modl.jsonWriteGetOne(req, res, result)
    }
  })
})

// 接口：删除信息
router.post('/delStu', (req, res) => {
  const sql = $sql.Stu.del
  const params = req.body
  console.log('删除', params)
  conn.query(sql, [params.id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      modl.jsonWriteDel(req, res, result)
    }
  })
})

// 接口：修改信息
router.post('/updateStu', (req, res) => {
  const sql = $sql.Stu.update
  const params = req.body
  console.log('修改', params)
  conn.query(sql, [params.name, params.url, params.alexa, params.country, params.id], function (err, result) {
    if (err) {
      console.log(err)
    }
    if (result) {
      modl.jsonWriteEdit(req, res, result)
    }
  })
})

module.exports = router
