const responseData = (res, data, status, functionCall = null, message = null, result = true)  => {
    return res.status(status).json({
      result,
      status,
      message,
      functionCall,
      data,
    });
}

module.exports = {
    responseData
}