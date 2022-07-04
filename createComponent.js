const fs = require("fs")
const data = process.argv
const folder = process.env.INIT_CWD

if (data.length === 3) {
    const nameComponent = data[2].charAt(0).toUpperCase() + data[2].slice(1);
    console.log(`> Create components: ${nameComponent}`)
    const newFiles = [{
        fileName: 'design.tsx',
        content: 'import styled from "styled-components";\n\nexport const Container = styled.div``;\n'
    }, {
        fileName: 'types.ts',
        content: `// TYPES FOR ${nameComponent}

export interface I${nameComponent} {}
`
    }, {
        fileName: 'index.tsx',
        content: `import { I${nameComponent} } from "./types";

const ${nameComponent}: React.FC<I${nameComponent}> = () => {
    // BODY OF COMPONENT
    return (
        <p>${nameComponent} is alive.</p>
    )
}

export { ${nameComponent} }`
    }];

    const generateFiles = (files) => {
        const rootFolder = `${folder}/${nameComponent}`
        if (!fs.existsSync(rootFolder)) {
            fs.mkdir(rootFolder, (err) => {
                if (err) throw err;
                for (const item of files) {
                    fs.writeFile(`${rootFolder}/${item.fileName}`, item.content, function (err) {
                        if (err) throw err;
                        console.log(`> ${item.fileName} file is create.`);
                    });
                }
            });
        }
    }

    generateFiles(newFiles);
} else {
    console.log(">>>")
    console.log(">")
    console.log("> Only pass one text and without spaces.")
    console.log(">")
    console.log(">>>")
}

