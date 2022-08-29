export default function (plop) {
    // controller generator
    plop.setGenerator('page', {
        description: 'React app page',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'Page name (exclude the word "Page"):',
            },
            {
                type: 'input',
                name: 'path',
                message: 'Page path (ex: "/settings"):',
            },
        ],
        actions: [
            {
                type: 'add',
                path: 'src/pages/{{name}}Page.tsx',
                templateFile: 'plop-templates/page.hbs',
            },
            {
                type: 'modify',
                path: 'src/index.tsx',
                pattern: "'react-router-dom';",
                templateFile: 'plop-templates/router-import-update.hbs',
            },
            {
                type: 'modify',
                path: 'src/index.tsx',
                pattern: '<Routes>',
                templateFile: 'plop-templates/router-update.hbs',
            },
        ],
    });
}
