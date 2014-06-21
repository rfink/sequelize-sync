sequelize-sync
==============

Simple bash script to sync/drop all models from sequelize to the database.  Also can
supply list of models to sync/drop.

Usage
==============

To install sequelize-sync, simply do:

```
    (sudo) npm install -g sequelize-sync
```

That's pretty much it.  You need to point it to a node module that exports a connection
to sequelize, with you models already attached.  This may change in the future, I may
add the ability to just point to a module and a directory for models.  The options
are as follows:

* --sequelize (-s) - Give the path to the sequelize module (i.e. ~/my-module/lib/common/sequelize.js
* --force (-f) - Force the schema change (drop and recreate)
* --dump-sql (-d) - Dump the sql to the screen (can be used in conjunction with other options)
* --models (-m) - Give a comma separate list of models to sync/drop
* --drop (-x) - Drop the schemas instead of creating

I noticed I had been creating a bash script to do this for every one of my sequelize related
projects, so I decided to create this handy library.

Testing
==============

Uses mocha and should.  Installs sequelize and sqlite3 node modules, make sure you have
sqlite3 installed.  Run `npm test`.

License
==============
MIT license, have at it.
