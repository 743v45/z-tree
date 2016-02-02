
## installation

```
$ git clone https://github.com/zyvas/z-tree.git
$ npm install 
```

Usage

```
tree.dirJSON('/tmp', function(err, data) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

// {
//   name: 'tmp',
//   type: 'directory',
//   child: [
//     {
//       name: 'mysql.sock',
//       type: 'file'
//     }, {
//       name: 'com.apple.launchd.xxxxxx',
//       type: 'directory',
//       child: [Object]
//     }, 
//     balabala...
//   ]
// }
```
