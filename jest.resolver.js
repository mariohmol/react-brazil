module.exports = (request, options) =>
  options.defaultResolver(request.replace(/^node:/, ''), options);
