# Life.Church Web Services Library

The Life.Church Web Services Library is a shared NPM package that is maintained and used by the [Life.Church Interactive Web Services team](https://life.church). Members of the team may be contributors to the project, and should familiarize themselves with the following information before contributing.

---

## Table of Contents

- [Life.Church Web Services Library](#lifechurch-web-services-library)
  - [Table of Contents](#table-of-contents)
  - [Preamble](#preamble)
  - [Project Overview](#project-overview)
  - [Development](#development)
    - [Commit Strategy](#commit-strategy)
      - [Tips](#tips)
    - [Adding a New Component](#adding-a-new-component)
      - [Create Component Files](#create-component-files)
        - [Component Directory and Files](#component-directory-and-files)
      - [Write Out Component](#write-out-component)
      - [Include Component in Main `index.js` File](#include-component-in-main-indexjs-file)
      - [Write Out Markdown Documentation File](#write-out-markdown-documentation-file)
    - [Create Merge/Pull Request](#create-mergepull-request)
    - [Resolve Draft Status, Merge, and Publish](#resolve-draft-status-merge-and-publish)
  - [Documentation](#documentation)
  - [Package and Documentation Deployment](#package-and-documentation-deployment)
    - [1. Update Versions](#1-update-versions)
    - [2. Confirm with Project Development Lead](#2-confirm-with-project-development-lead)
    - [3. Build Documentation Files](#3-build-documentation-files)
    - [4. Commit and Merge to `main`](#4-commit-and-merge-to-main)
    - [5. Build and Publish `npm` Package](#5-build-and-publish-npm-package)
    - [6. Build and Deploy Documentation Site](#6-build-and-deploy-documentation-site)
  - [References](#references)
    - [Project References](#project-references)
    - [Development References](#development-references)

---

## Preamble

For these instructions, it is assumed that you have the following installed on your Mac, and have access to the appropriate workspaces, repositories, and teams.

- [VS Code](https://code.visualstudio.com/)
- [iTerm2](https://iterm2.com/)
- [NVM](https://nvm.sh)

For VS Code, it is also assumed you have the appropriate extensions and settings in your installation. Some helpful extensions can be found on the [VS Code page of the Interactive Team Engineering Wiki](https://www.notion.so/lcinteractive/VS-Code-7bf6a00ee3c74a97ad873ed54ef79d7e).

## Project Overview

The shared library is set up to distribute and export to [`npm`](https://npmjs.com/) as a shared package, installable by a variety of projects.

## Development

### Commit Strategy

As you begin to develop, do whatever development work needs to be done, pushing and committing as needed along the way.

#### Tips

- Try to be mindful and intentional about your commits and commit history, especially on large MRs/PRs, so any developers who review your code can reference the commit history for a step-by-step review.
- If needed, add `Draft:` to the beginning of the initial commit so it's seen as a "work in progress" and thus not be able to merge to `main` until resolved, reviewed, and approved.

### Adding a New Component

#### Create Component Files

To add a new component to the library, a few files and folders will need to be created.

##### Component Directory and Files

Add the component directory and files by creating a folder for the component in the `/src/lib/Components` directory, along with its corresponding `{ComponentName}.js` file and, if needed, a `{ComponentName}.scss` file.

```shell
📂 src
  📂 lib
    📂 Components
      📂 NewComponent
        📄 NewComponent.js
        📄 NewComponent.scss
```

Add the component's corresponding markdown documentation file in the `/docs/docs/Components` directory.

```shell
📂 docs
  📂 docs
    📂 Components
      📂 Global
        📂 NewComponent
          📄 index.md
```

#### Write Out Component

Build and write out the component as needed, with the following tips in mind:

- Make the component as style- and functionality-agnostic as possible, allowing for full flexibility of use across a variety of projects and contexts.
  - This library is intended to provide **_very_** customizable components that are not tied to one specific product or use case. As such, the intention is to provide each component with the necessary `props` to allow for customization by the consuming project, not defined within the library itself.
- Write clean, organized, error-free code, making use of `eslint` and `prettier` to ensure consistency between the development team.

#### Include Component in Main `index.js` File

<blockquote style="background-color:#fed;border-left:5px solid #f90;padding:1rem;">❗ <b>Important:</b> Once the component is written, include it in the main `/src/lib/index.js` file so it is imported and exported. The existing pattern of import/export already in place in that file will show how to do this.</blockquote>

#### Write Out Markdown Documentation File

Once the component is completely build out, flesh out and complete its corresponding markdown documentation file. The `TemplateComponent/index.md` file can be used as a starting point for authoring the new component markdown file.

### Create Merge/Pull Request

Once development is done and you're ready to get it reviewed, you'll need to create a Merge _(Pull)_ Request. When creating it, please adhere to the following:

- If the request is not immediately ready for review, add the prefix `Draft:` to the beginning of the commit title.
- Add a description and/or testing instructions to the request, depending on the needs of the testing and functionality. Also include the applicable links to the Jira _(or other tracking utility)_ ticket(s) that the MR/PR addresses.
- Assign the request to yourself.
- Assign (an)other developer(s) as reviewers.

<blockquote style="background-color:#def;border-left:5px solid #0cf;padding:1rem;">💁🏻‍♂️ <b>Tip:</b> It's good practice and beneficial to do a self-review of the MR before assigning Reviewers, especially if it's a large MR. While much of the request should speak for itself, it's often helpful to add in supporting comments and notes where there may be more complex changes, where something might not seem clear, and the like.</blockquote>

### Resolve Draft Status, Merge, and Publish

Once the review is done and the Merge Request is approved, it's assigned back to developer, whose responsibility it is to merge and publish. To do this, simply click the Merge button and check the “Delete source branch” checkbox. Merging to main will trigger the publishing of the new release in GitLab.

---

## Documentation

The documentation for the library uses [Docusaurus](https://www.docusaurus.io/). The documentation and files for documentation are located in this project's `docs` directory. Inside that directory, several commands can be run:

- `npm start` Starts the development server.
- `npm run build` Bundles your website into static files for production.
- `npm run serve` Serves the built website locally.
- `npm deploy` Publishes the website to GitHub pages.

> **Note:** If GitHub pages are used for hosting, the `npm deploy` command is a convenient way to build the website and push to the `gh-pages` branch.

To begin and launch the documentation on your local development machine, navigate to the project directory's `docs` folder and run `npm start`:

```shell
cd /path/to/lc-component-library-io/docs
npm start
```

---

## Package and Documentation Deployment

To build the and deploy the `npm` package and documentation site, a very intentional process and procedure must be followed to ensure everything is built and deployed in the proper order.

### 1. Update Versions

The first step is to update the `version` key for both the main `package.json` and the `/docs/package.json` files, incrementing as needed using [Semantic Versioning 2.0.0](https://semver.org/spec/v2.0.0.html), where given a version number `MAJOR.MINOR.PATCH`, increment the:

- MAJOR version when you make incompatible changes.
- MINOR version when you add functionality in a backwards compatible manner.
- PATCH version when you make backwards compatible bug fixes.

The `version` numbers for both should be the same, as the documentation should **_always_** be updated along with a new build and publish to `npm`.

### 2. Confirm with Project Development Lead

When everything is updated and ready to go, confirm with the [project's development lead](https://github.com/hessler) and coordinate the deploy and publish process.

### 3. Build Documentation Files

To build the documentation files, invoke the following commands:

```shell
# Navigate to main project directory.
cd /path/to/lc-component-library-io

# Navigate to docs directory and build files.
cd docs
npm run build
```

### 4. Commit and Merge to `main`

Ensure everything is merged and deployed to the project's `main` branch.

### 5. Build and Publish `npm` Package

To build and deploy to `npm`, invoke the following commands:

```shell
# Navigate to main project directory.
cd /path/to/lc-component-library-io

# Bundle and transpile code inside `src/lib` into `dist` directory.
npm run build

# Publish the package to npm; launches interactive mode with prompts as needed.
npm run publish:npm
```

### 6. Build and Deploy Documentation Site

Once the `npm` package is successfully published, deploy the documentation site files by invoking the following commands:

```shell
# Navigate to main project directory.
cd /path/to/lc-component-library-io

# Navigate to docs directory and deploy the documentation site.
cd docs
npm run deploy
```

---

## References

### Project References

- [README](README.md)
- [Documentation README](docs/README.md)

### Development References

- [Creating a Library of React Components using Create React App](https://hackernoon.com/creating-a-library-of-react-components-using-create-react-app-without-ejecting-d182df690c6b)
- [Docusaurus](https://docusaurus.io/)
  - [Installation | Docusaurus](https://docusaurus.io/docs/installation)
  - [Docs | Docusaurus](https://docusaurus.io/docs/)
  - [API Reference | Docusaurus](https://docusaurus.io/docs/cli)
  - [Deployment | Docusaurus](https://docusaurus.io/docs/deployment)
