const readFile = require('util').promisify(require('fs').readFile)

document.write('sdfsdfsddsf')

async function main() {
    const text = await readFile('/proc/cpuinfo', 'utf-8')
    document.write(text)
}
main()