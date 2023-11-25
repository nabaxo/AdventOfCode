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
    // let tree = directories[0][1].map(e => {
    //     // console.log({ e });
    //     if (e[0] === 'dir') {
    //         return directories.filter(f => f[0] === e[1]);
    //     }
    //     return e;
    // });

    // tree.forEach(element => {
    //     if (Array.isArray(element[0])) {
    //         element[0].forEach(f => {
    //             console.log({ f });
    //             // if (Array.isArray(f)) {
    //             //     const dir = recursiveBullshit(f, directories);
    //             //     console.log({ dir });
    //             // }
    //         });
    //     } else {
    //         // console.log(element);
    //     }
    // });

    console.log(tree);
}

function getContents(arr, dir) {
    let index;
    let next;
    const contents = [];
    arr.forEach((e, i) => {
        if (e[0] === '$' && e[1] === 'cd' && e[2] === dir) {
            index = i + 2;
            next = i + 3;
            return;
        }
    });
    console.log({ index, next });

    for (index; index < arr.length; index++) {
        const line = arr[index];

        while (arr[next] && arr[next][0] !== '$') {
            if (arr[next][0] === 'dir') {
                contents.push(getContents(arr, arr[next][1]));
            } else {
                contents.push(arr[next]);
            }
        }
        next++;
        index++;
    }

    return new Map().set(dir, contents);

}


buildTree(input);
