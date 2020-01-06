var exec = require('child_process').exec;

var cmdStr = 'buster generate';

exec(cmdStr, function(err,stdout,stderr){

    if(err) {

        console.log('error:'+stderr);

    } else {
        console.log(stdout);

        var cpfile = 'cp -a /Users/zakwu/workspace/zakwu.github.io/static/* /Users/zakwu/workspace/blog-static'
        exec(cpfile, function (err,stdout,stderr) {
            console.log('cp ok!')
            console.log('exit;')
        })
    }

});
