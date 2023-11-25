const fs = require('fs');

const input = fs.readFileSync('./test_input.txt').toString().split(/\r\n/g).map(e => e.split(' '));

// console.table(input);

function buildTree(arr) {
    const tree = new Map();
    tree.set('/', new Map());
    const commands = arr.filter(e => e[0] === '$');
    const directories = arr.filter(e => e[0] === 'dir');
    const files = arr.filter(e => !isNaN(parseInt(e[0]))).map(e => e[1].split('.'));

    let currentDirectory = '/';
    let previousDirectory = '';
    for (let index = 0; index < arr.length; index++) {
        let next = index + 1;
        const line = arr[index];
        // console.log(line);

        switch (line[1]) {
            case 'ls':
                const contents = [];
                while (arr[next] && arr[next][0] !== '$') {
                    if (arr[next][0] === 'dir') {
                        // const folder = new Map();
                        // folder.set(arr[next][1], []);
                        // contents.push(folder);
                        // getContents(arr, arr[next][1]);
                        // console.log(folders);
                        // console.log(getContents(arr, arr[next][1]));
                        tree.set(currentDirectory, getContents(arr, arr[next][1]));
                        break;
                    } else {
                        contents.push(arr[next]);
                    }
                    next++;
                    index++;
                }
                // const contents = new Map().set(currentDirectory, files);
                break;
            case 'cd':
                if (line[2] !== '..') {
                    previousDirectory = currentDirectory;
                    currentDirectory = line[2];
                    tree.set(currentDirectory, []);
                } else {
                    currentDirectory = previousDirectory;
                }
                break;
            default:
                break;
        }
    }

    console.log(tree);
}

function getContents(arr, dir) {
    let index;
    let next;
    const contents = [];
    arr.forEach((e, i) => {
        if (e[0] === '$' && e[1] === 'cd' && e[2] === dir) {
            index = i + 1;
            next = i + 2;
            return;
        }
    });
    // console.log(arr);

    for (index; index < arr.length; index++) {
        const line = arr[index];

        while (arr[next] && arr[next][0] !== '$') {
            // console.log(next);
            if (arr[next][0] === 'dir') {
                // const folder = new Map();
                // folder.set(arr[next][1], []);
                contents.push(getContents(arr, arr[next][1]));
                // console.log(getContents(arr, arr[next][1]));
                // getContents(arr, arr[next][1]);
            } else {
                contents.push(arr[next]);
            }
            // console.log({ contents });
            next++;
            index++;
        }
    }
    console.log(contents);
    // console.log(arr[next][0]);
    return contents;

}

buildTree(input);
