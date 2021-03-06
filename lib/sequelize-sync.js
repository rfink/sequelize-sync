
/**
 * Run the given function after the callback is called (iters) times
 */
function after(iters, done) {
  return function() {
    if (--iters) {
      return;
    }

    return done.apply(null, arguments);
  };
}

/**
 * Get models from sequelize
 */
function getModels(sequelize) {
  if (sequelize.models) {
    return sequelize.models;
  }

  var response = {};
  sequelize.daoFactoryManager.daos.forEach(function(dao) {
    response[dao.name] = dao;
  });

  return response;
}

module.exports = function sync(sequelize, opts, done) {
  var models = getModels(sequelize);
  var keys = Object.keys(models);
  var complete;

  /**
   * Called when finished syncing
   */
  function finished() {
    return done(null, keys);
  }

  if (Array.isArray(opts.models)) {
    keys = opts.models;
  } else if (opts.models && opts.models.length) {
    keys = opts.models.split(',');
  }

  complete = after(keys.length, finished);

  if (opts.drop) {
    return sequelize.drop({
      force: opts.force,
      logging: opts.dumpSql || false
    })
      .success(finished)
      .error(done);
  }

  return keys.forEach(function(key) {
    return sequelize.model(key)
      .sync({ force: opts.force, logging: opts.dumpSql || false })
      .success(complete)
      .error(done);
  });
};
