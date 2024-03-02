const youtubedl = require('youtube-dl-exec');

// This error will be swallowed because of line 14 in index.js
youtubedl(
    'https://www.youtube.com/watch?v=2Z4m4lnjxkY',
    {
        dumpSingleJson: true,
        noCheckCertificates: true,
        noWarnings: true,
        preferFreeFormats: true
    }
).then(output => { console.log(output) });

// this will forward stdout/stderr from spawn, so you can see why it's failing.
const subprocess = youtubedl.exec('https://www.youtube.com/watch?v=2Z4m4lnjxkY',
    {
        dumpSingleJson: true,
        noCheckCertificates: true,
        noWarnings: true,
        preferFreeFormats: true
    }
);

subprocess.stdout.pipe(process.stdout);
subprocess.stderr.pipe(process.stderr);