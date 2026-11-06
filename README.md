# The Tiny Victory Bureau

The Tiny Victory Bureau is a cheerful one-page website for celebrating life's small wins. Visitors can browse a few examples of what counts as an achievement, then press a button to receive a silly, randomly selected certificate message. The page uses plain HTML, CSS, and JavaScript, so its parts are easy to explore and change.

## Project files

- `index.html` — The page content, navigation, and certificate area.
- `styles.css` — The rainbow-inspired colors, responsive layout, and accessible focus styles.
- `script.js` — The small interaction that awards a random tiny victory.
- `package.json` — Start and static build commands, plus the GitHub Pages deploy dependency.
- `.gitignore` — Files that should stay out of version control.
- `LICENSE` — The MIT license for this project.
- `.devcontainer/` — Existing GitHub Codespaces configuration.
- `_helpers/` — Existing project helper scripts.

## Requirements

- Node.js and npm for the optional local preview and build commands.
- A modern web browser.
- No extra VS Code extensions are required. The existing Codespaces configuration includes its recommended extensions.

## Run in GitHub Codespaces

1. Open this repository in a Codespace.
2. In the terminal, run `npm start`.
3. Open the forwarded port 3000 in the Simple Browser when Codespaces prompts you.

The existing Codespaces setup can also start a preview automatically when you attach to the workspace.

## Run locally

1. Install [Node.js](https://nodejs.org/) (npm is included).
2. Open this folder in VS Code or a terminal.
3. Run `npm start` and open [http://localhost:3000](http://localhost:3000).

You can also open `index.html` directly in a browser to explore the page; the button works without a build step.

## Build and publish

Run `npm run build` to copy the static website into `dist/`. The preserved `npm run deploy` command publishes that folder to GitHub Pages using `gh-pages`.

This project uses no framework or external libraries. To keep learning, try changing a card's text in `index.html`, a color in `styles.css`, or an award message in `script.js`.
