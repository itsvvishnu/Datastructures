function requireAll(r) { r.keys().forEach(r); } 

requireAll(require.context('./structures', true, /\.ts|js$/));



