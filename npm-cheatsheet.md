
# 📦 npm Commands Cheat Sheet

A comprehensive guide to essential and advanced `npm` commands, categorized for clarity.

---

## 🟢 1. Installation Commands

| Command | Description |
|--------|-------------|
| `npm install` or `npm i` | Install all dependencies from `package.json`. |
| `npm install <package>` | Install a package locally. |
| `npm install <package> -g` | Install a package globally. |
| `npm install <package>@version` | Install a specific version. |
| `npm install --save` | Save to `dependencies`. |
| `npm install --save-dev` | Save to `devDependencies`. |
| `npm ci` | Clean install, ideal for CI/CD. |

---

## 🔵 2. Uninstall / Remove

| Command | Description |
|--------|-------------|
| `npm uninstall <package>` | Remove a local package. |
| `npm uninstall -g <package>` | Remove a global package. |

---

## 🟣 3. Update / Upgrade

| Command | Description |
|--------|-------------|
| `npm update` | Update all dependencies. |
| `npm update <package>` | Update a specific package. |
| `npm outdated` | List outdated packages. |

---

## 🟠 4. Init / Project Setup

| Command | Description |
|--------|-------------|
| `npm init` | Start creating `package.json` interactively. |
| `npm init -y` | Generate `package.json` with defaults. |

---

## 🔴 5. Run Scripts

| Command | Description |
|--------|-------------|
| `npm start` | Run the `start` script. |
| `npm test` | Run the `test` script. |
| `npm run <script>` | Run a custom script. |
| `npm run` | List all available scripts. |

---

## 🟡 6. Package Management

| Command | Description |
|--------|-------------|
| `npm list` | Show all installed packages. |
| `npm list -g` | Show globally installed packages. |
| `npm list <package>` | Show version of a specific package. |
| `npm dedupe` | Remove duplicate packages. |
| `npm prune` | Remove unnecessary packages. |

---

## 🟤 7. Publish & Versioning

| Command | Description |
|--------|-------------|
| `npm login` | Log in to npm. |
| `npm logout` | Log out of npm. |
| `npm publish` | Publish a package. |
| `npm unpublish` | Unpublish a package. |
| `npm version <major|minor|patch>` | Bump version number. |

---

## ⚪ 8. Cache & Configuration

| Command | Description |
|--------|-------------|
| `npm cache clean --force` | Force clear the cache. |
| `npm config set <key> <value>` | Set a config value. |
| `npm config get <key>` | Get a config value. |

---

## 🟧 9. Help & Info

| Command | Description |
|--------|-------------|
| `npm help` | General help. |
| `npm help <command>` | Help for a specific command. |
| `npm --version` / `npm -v` | Show version of npm. |
| `npm view <package>` | View package details. |
| `npm docs <package>` | Open package docs in browser. |

---

## 🧪 10. Security & Audit

| Command | Description |
|--------|-------------|
| `npm audit` | Check for vulnerabilities. |
| `npm audit fix` | Automatically fix vulnerabilities. |

---

## ✅ Bonus: Common Aliases

| Shortcut | Full Command |
|----------|--------------|
| `npm i` | `npm install` |
| `npm i -D` | `npm install --save-dev` |
| `npm i -g` | `npm install -g` |
| `npm r` | `npm uninstall` |

---


