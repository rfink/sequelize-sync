
/* ~ Deps ~ */

/*global it*/
/*global describe*/

var should = require('should');
var sequelize = require('./lib/sequelize.js');
var sync = require('..');

/**
 * Error handler
 */
function onError(err) {
  console.error(err.stack);
  throw err;
}

describe('Sequelize-sync test suite', function() {
  it('should sync models correctly and then destroy them', function(done) {
    var opts = {};
    opts.force = true;

    sync(sequelize, opts, function(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.length(3);

      sequelize.model('testTable1')
        .findAll()
        .then(function(models) {
          models.should.have.length(0);
          sequelize.model('testTable2')
            .findAll()
            .then(function(models) {
              models.should.have.length(0);
              opts.drop = true;
              sync(sequelize, opts, function(err, res) {
                should.not.exist(err);
                should.exist(res);
                return done();
              });
            })
            .catch(onError);
        })
        .catch(onError);
    });
  });

  it('should correct narrow down the models', function(done) {
    var opts = {};
    opts.force = true;
    opts.models = 'TestTable1,TestTable2';

    sync(sequelize, opts, function(err, res) {
      should.not.exist(err);
      should.exist(res);
      res.should.have.length(2);

      return done();
    });
  });
});
