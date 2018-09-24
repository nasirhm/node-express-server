# **NODE + EXPRESS SERVER**

> WORK IN PROGRESS

---

## **What this boilerplate contains**

<img src="./__repo_readme_assets__/logo-node.png" height="55" alt="logo placeholder">&nbsp;&nbsp;
<img src="./__repo_readme_assets__/logo-express.png" height="55" alt="logo placeholder">&nbsp;&nbsp;
<img src="./__repo_readme_assets__/logo-socket.png" height="55" alt="logo placeholder">&nbsp;&nbsp;

- [x] Node 10.9.0
- [x] Express 4.16.3
- [x] Socket.io 2.1.1

---

## **Set up project**

Before cloning the repo **be sure** you have installed:

- [Node](http://nodejs.org/download/) (version >= 9.10.x)
- [Yarn](https://yarnpkg.com/en/docs/install) (version >= 1.9.x)
- [Npm](https://www.npmjs.com/) (version >= 6.3.x)

Then:

- Choose a folder project in your system and switch in `cd [folder path]`
- Clone the repo in your folder `git clone [repository url]`

---

## **Installation**

To install the project and all dependencies, run (from the directory of the project):

```bash
# install dependencies
npm install
```

or

```bash
# install dependencies
yarn
```

---

## **Run the project**

##### run the server

```bash
npm start
# or
yarn start
```

---

# **Editor setup**

To keep consistency to the style of resources, I decided to stick to some shared rules that have to be applied to every project using some editors plugins. Plese be sure to disable / remove any other js/jsx linters or custom configurations.

#### Basic Editor Configuration

I chose to use [EditorConfig](http://editorconfig.org/) to share the basic configuration like indentation and charset. It works including an `.editorconfig` file in the root directory and making sure your editor has the necessary plugin. You can find a list of downloads [here](http://editorconfig.org/#download). The choice to keep the indentation with 2 spaces is to be compliant with actual standards (major frameworks use this configuration both for JS and CSS).

#### Auto correction on save

I have chose to use [js-beautify](https://github.com/beautify-web/js-beautify). Despite of his name it works as a beautifier also for HTML and CSS. Every editor has a plugin that implement it, es. [Sublime](https://github.com/victorporof/Sublime-HTMLPrettify), [Atom](https://atom.io/packages/atom-beautify) or [Visual studio](https://www.visualstudio.com/it/?rr=https%3A%2F%2Fwww.google.it%2F). The setup for js-beautify is controlled within a `.jsbeautifyrc` file that have to be included in the root directory of the project (.hbs are not completely supported yet).

#### Eslint

To check on Javascript / React [.js / .jsx] syntax I use [Eslint](http://eslint.org/). The rules to detect errors are written in a `.eslintrc` file included in the root directory of the project (best practice use `airbnb linter`).

---

## **Todo**

- [ ] Run basic server
- [ ] Simple auth

---

### **Troubleshootings**

This is just a personal project created for study / demonstration purpose only, it may or may not be a good fit for your project(s).

---

> GitHub [@ibbatta](https://github.com/ibbatta) &nbsp;&middot;&nbsp;
> Twitter [@battago](https://twitter.com/battago)
