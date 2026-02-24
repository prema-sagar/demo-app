\# CI/CD Demo — Node.js + SonarCloud + Docker



A complete CI/CD pipeline using GitHub Actions, SonarCloud Quality Gates, and Docker Hub. No cloud infrastructure required.



---



\## Pipeline Flow



```

Push Code to GitHub

&nbsp;       ↓

🧪 Run Jest Tests + Coverage

&nbsp;       ↓

🔍 SonarCloud Quality Gate

&nbsp;       ↓

&nbsp;  ❌ FAIL → Pipeline stops. No Docker build.

&nbsp;  ✅ PASS → Build Docker Image → Push to Docker Hub → Run Container

```



---



\## Tech Stack



| Tool | Purpose |

|------|---------|

| GitHub Actions | Pipeline automation |

| SonarCloud | Code quality \& Quality Gates |

| Jest | Testing \& coverage |

| Docker + Docker Hub | Build \& deploy container |



---



\## Project Structure



```

demo-app/

├── src/

│   ├── app.js                 # HTTP server

│   └── math.js                # Business logic

├── tests/

│   ├── app.test.js            # API tests

│   └── math.test.js           # Unit tests

├── .github/workflows/

│   └── ci-cd.yml              # Pipeline definition

├── Dockerfile

└── sonar-project.properties

```



---



\## API Endpoints



| Endpoint | Description |

|----------|-------------|

| `GET /` | Welcome message |

| `GET /health` | Health check |

| `GET /demo` | Demo math results |



---



\## Run Locally



```bash

npm install

npm test          # Run tests with coverage

npm start         # Start server on port 3000

```



```bash

\# Docker

docker build -t demo-app .

docker run -d --name demo-app -p 3000:3000 demo-app

```



---



\## Required GitHub Secrets



| Secret | Where to get it |

|--------|----------------|

| `SONAR\_TOKEN` | SonarCloud → My Account → Security |

| `DOCKERHUB\_USERNAME` | Your Docker Hub username |

| `DOCKERHUB\_TOKEN` | Docker Hub → Account Settings → Security |



---



\## Demo: Trigger a Quality Gate Failure



Break a test intentionally, then push:

```js

// tests/math.test.js — change expected value to wrong one

expect(add(2, 3)).toBe(99);

```

```bash

git add . \&\& git commit -m "demo: bad code" \&\& git push origin main

```

Result — pipeline stops at Quality Gate, no Docker image is built.



---



\## Docker Tags



Each successful build creates 2 tags on Docker Hub:



| Tag | Purpose |

|-----|---------|

| `latest` | Always the newest build |

| `sha-xxxxxxx` | Tied to a specific commit — for rollback |



