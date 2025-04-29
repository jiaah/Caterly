## Commit Message Convention

### Commit Message Format

`<type>(<scope>): <subject>`

**Examples:**

- `chore: configure commitlint`
- `feat/web: implement dashboard page`

### Commit Message Types

| Type       | Description                                    |
| ---------- | ---------------------------------------------- |
| `feat`     | Feature addition, improvement, or modification |
| `fix`      | Bug fix                                        |
| `docs`     | Documentation changes                          |
| `style`    | Code style changes                             |
| `refactor` | Code refactor                                  |
| `perf`     | Performance improvements                       |
| `test`     | Tests update                                   |
| `chore`    | Miscellaneous changes                          |

### Commit Message Scopes

| Scope     | Description                            |
| --------- | -------------------------------------- |
| `web`     | Web application changes                |
| `admin`   | Admin panel changes                    |
| `ui`      | UI component changes                   |
| _(empty)_ | Root-level changes (e.g., `chore: **`) |

## Branch Naming Convention

### Branch Naming Format

`<type>/<scope>: <description>`

### Branch Types

| Branch Type  | Example Branch Name             | Description                                    |
| ------------ | ------------------------------- | ---------------------------------------------- |
| **feature**  | `feat/web: add-login-page`      | Feature addition, improvement, or modification |
| **fix**      | `fix/web: resolve-header-issue` | Bug fix                                        |
| **refactor** | `refactor/web: optimize-header` | Code refactor                                  |
| **hotfix**   | `hotfix/web: fix-login-crash`   | Critical bug fix                               |

### PR Title Format

`<type>(<scope>): <subject>`

**Examples:**

| Example Branch Name             | PR Title Format                  |
| ------------------------------- | -------------------------------- |
| `feat/web: add-login-page`      | `feat(web): add login page`      |
| `fix/web: resolve-header-issue` | `fix(web): resolve header issue` |
| `refactor/web: optimize-header` | `refactor(web): optimize header` |
| `hotfix/web: fix-login-crash`   | `hotfix(web): fix login crash`   |
| `release/web: v1.0.0`           | `release(web): v1.0.0`           |

## Guidelines

- Scope: Specify the affected part of the project (e.g., web, admin, ui).
- Verb: Start titles with a verb (e.g., add, fix, update).
- Case: Use lowercase for titles (no PascalCase or UPPERCASE).
- Clarity: Keep branch names and PR titles brief, clear, and descriptive.
