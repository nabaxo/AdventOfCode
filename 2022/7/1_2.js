const fs = require('fs');

const input = fs.readFileSync('./test_input.txt').toString().split(/\r\n/g).map(e => e.split(' '));

// console.table(input);

function buildTree(arr) {
    const directories = [];

    let currentDirectory = '/';
    let previousDirectory = '';
    for (let index = 0; index < arr.length; index++) {
        let next = index + 1;
        const line = arr[index];
        // console.log(line);
        if (line[1] === 'ls') {
            const files = [];
            while (arr[next] && arr[next][0] !== '$') {
                files.push(arr[next]);
                next++;
                index++;
            }
            const contents = [currentDirectory, files];
            directories.push(contents);
        }
        else if (line[1] === 'cd') {
            if (line[2] !== '..') {
                previousDirectory = currentDirectory;
                currentDirectory = line[2];
            } else {
                currentDirectory = previousDirectory;
            }
        }
    }

    let tree = directories[0][1].map(e => recursiveBullshit(directories, e));

    tree = tree.map(e => {
        if (Array.isArray(e[0][1])) {
            const dir = e[0][1];
            const t = dir.map(g => recursiveBullshit(directories, g));
            // console.log({ t });
            return t;
        } else {
            return e;
        }
    });

    return tree;
}

function recursiveBullshit(dirs, arr) {
    if (arr[0] === 'dir') {
        return dirs.filter(f => f[0] === arr[1]);
    } else {
        return arr;
    }
}


const tree = buildTree(input);

console.log({ tree });
