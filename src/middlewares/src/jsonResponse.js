const response = ((data) => {
  const result = { success: true, message: data };
  return result;
});

const assignJsonResponse = ((req, res, next) => {
  Object.assign(res, {
    jsonResponse: ((data, statusCode = 200) => res.status(statusCode).json(response(data))),
  });
  next();
});

module.exports = assignJsonResponse;
