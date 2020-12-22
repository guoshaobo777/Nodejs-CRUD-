// 添加用户返回的数据模型
exports.jsonWriteAdd = (req, res, result) => {
  if (typeof result === 'undefined') {
    res.json({
      code: '1', msg: '添加用户操作失败'
    })
  } else {
    res.json(
      result = {
        status: 200,
        msg: '添加用户操作成功',
        addData: req.body
      }
    )
  }
}

// 查询所有用户用户返回的数据模型
exports.jsonWriteGet = (req, res, result) => {
  if (typeof result === 'undefined') {
    res.json({
      code: '1', msg: '查询所有用户操作失败'
    })
  } else {
    res.json(
      result = {
        status: 200,
        msg: '查询所有用户操作成功',
        allData: result
      }
    )
  }
}

// 查询单个用户返回的数据模型
exports.jsonWriteGetOne = (req, res, result) => {
  if (typeof result === 'undefined') {
    res.json({
      code: '1', msg: '查询单个用户操作失败'
    })
  } else {
    res.json(
      result = {
        status: 200,
        msg: '查询单个用户操作成功',
        oneData: result
      }
    )
  }
}

// 删除用户返回的数据模型
exports.jsonWriteDel = (req, res, result) => {
  if (typeof result === 'undefined') {
    res.json({
      code: '1', msg: '删除用户操作失败'
    })
  } else {
    res.json(
      result = {
        status: 200,
        msg: '删除用户操作成功',
        delId: req.body
      }
    )
  }
}

// 修改用户用户返回的数据模型
exports.jsonWriteEdit = (req, res, result) => {
  if (typeof result === 'undefined') {
    res.json({
      code: '1', msg: '修改用户操作失败'
    })
  } else {
    res.json(
      result = {
        status: 200,
        msg: '修改用户操作成功',
        allData: req.body
      }
    )
  }
}
