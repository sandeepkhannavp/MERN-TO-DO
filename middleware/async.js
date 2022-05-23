const asyncWrapper = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next)
    } catch (error) {
      next(error) //we are passing it to the next middleware -- see which in app.js it is the error-handler middleware
    }
  }
}

module.exports = asyncWrapper
