var numCpus = require('os').cpus().length
var cluster = require('cluster')

cluster.setupMaster({exec: __dirname + '/server.js'})

for(var i=0; i < numCpus; i++){
	cluster.fork()
}
