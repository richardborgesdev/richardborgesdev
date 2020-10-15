# Algoritmos
## Desafios
1. https://www.codewars.com/

# Carreira
## livros
1. [Dicas de carreira para devs](https://leanpub.com/dicas-carreira-devs) ([eminetto](https://github.com/eminetto))
1. [14 inspiring books to grow your career](https://www.atlassian.com/blog/inside-atlassian/14-inspiring-books-to-grow-your-career) (atlassian)
## vídeos
1. [5 dicas incríveis para melhorar seus skills em programação](https://youtu.be/3AbREg8ZNxs)

# CSS
## sites
1. http://flexboxfroggy.com/

# Engenharia de software
## artigos
1. [TDD](http://tdd.caelum.com.br/) (caelum)
## cursos
1. [TDD](https://pt.coursera.org/learn/tdd-desenvolvimento-de-software-guiado-por-testes) (coursera)

# Front-ops
## artigos
1. [Summary of Webpack 4 Fundamentals by Sean Larkin (Part 1 of 4: Why Webpack?)](https://medium.com/@j_lim_j/summary-of-webpack-4-fundamentals-by-sean-larkin-part-1-of-4-why-webpack-e9112d81a588) (Lim, 2018)

# Git
* https://learngitbranching.js.org/

# Javascript
## artigos
1. [ryanmcdermott/clean-code-javascript](https://github.com/ryanmcdermott/clean-code-javascript#table-of-contents)
1. [typescript o guia definitivo](https://medium.com/@oieduardorabelo/typescript-o-guia-definitivo-1a63b04259cc)
1. [gerenciamento de memória](https://medium.com/reactbrasil/como-o-javascript-funciona-gerenciamento-de-mem%C3%B3ria-como-lidar-com-4-vazamentos-comuns-de-5cfa341b9e39)
1. [understanding design patterns in javascript](https://blog.bitsrc.io/understanding-design-patterns-in-javascript-13345223f2dd) (Sukhjinder Arora
)
1. [Understanding Execution Context and Execution Stack in Javascript](https://blog.bitsrc.io/understanding-execution-context-and-execution-stack-in-javascript-1c9ea8642dd0) (Sukhjinder Arora)
## cursos
1. [node js para iniciantes (Erick Wendel)](https://cursos.nodebr.org/p/node-js-para-iniciantes-nodebr)
1. [Mastering Async JavaScript](https://frontarm.com/courses/async-javascript/promises/why-async/) (frontarm)
## sites
1. [exploringjs (Dr. Axel Rauschmayer)](http://exploringjs.com/)

# Vuejs
## artigos
1. https://medium.com/@anthonygore/vue-development-in-2019-what-you-need-to-know-2170942f0e54
## cursos
1. https://www.vuemastery.com
1. https://vueschool.io
1. https://courses.vuejsdevelopers.com
1. [vueschool/vue-js-performance](https://vueschool.io/articles/series/vue-js-performance/)

# Time
## artigos
1. [why your huge tech team isn’t delivering](https://blog.usejournal.com/why-your-huge-tech-team-isnt-delivering-3851be27712c) (Roger Nesbitt
)

# UX
## artigos
1. [Users Don’t Want Filters, They Want Better Content](https://medium.com/@hopper_travel/users-dont-want-filters-they-want-better-content-3146f650b8f6) (Hopper)

# Tooling
* https://www.markdownguide.org
* Visual Studio code
    * settings.json
    ```json
    {
        "workbench.startupEditor": "newUntitledFile",
        "eslint.enable": true,
        "eslint.alwaysShowStatus": true,
        "eslint.validate": [
            "javascript",
            "javascriptreact",
            {
                "language": "vue",
            },
            {
                "language": "html",
            }
        ],
        "eslint.options": {
            "extensions": [
                ".js",
                ".jsx",
                ".ts",
                ".tsx",
                ".vue"
            ]
        },
        "editor.minimap.enabled": false,
        "editor.rulers": [
            100
        ],
        "editor.renderWhitespace": "all",
        "files.watcherExclude": {
            "**/.git/objects/**": true,
            "**/.git/subtree-cache/**": true,
            "**/node_modules/*/**": true
        },
        "workbench.editor.enablePreview": false,
        "editor.tabSize": 2,
        "editor.codeActionsOnSave": {
            "source.fixAll.eslint": true
        },
        "javascript.updateImportsOnFileMove.enabled": "always",
        "editor.fontSize": 12,
        "diffEditor.ignoreTrimWhitespace": false,
        "eslint.format.enable": true
    }
    ```
    * keybindings.json
    ```json
    [
        {
            "key": "ctrl+shift+down",
            "command": "editor.action.copyLinesUpAction",
            "when": "editorTextFocus && !editorReadonly"
        },
        {
            "key": "ctrl+shift+alt+up",
            "command": "-editor.action.copyLinesUpAction",
            "when": "editorTextFocus && !editorReadonly"
        },
        {
            "key": "ctrl+alt+u",
            "command": "editor.action.transformToUppercase"
        },
        {
            "key": "ctrl+alt+l",
            "command": "editor.action.transformToLowercase"
        }
    ]
    ```
# Outros
1. [free ebooks for web designers web developers](https://medium.com/web-development-zone/top-free-ebooks-for-web-designers-web-developers-f8c6a70465ad)
1. [vercel](https://vercel.com/home#get-started)

# links to organize
1. https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4
1. https://medium.com/@fagnerbrack/the-test-should-verify-if-the-code-solves-the-problem-not-if-it-runs-afea37a3a6e
1. https://medium.freecodecamp.org/how-to-understand-any-programming-task-aea41eabe66e