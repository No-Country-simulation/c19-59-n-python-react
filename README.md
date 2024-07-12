# Vet-Tech

Welcome to the Veterinary Consultation App! This project is a monorepo containing both the backend and frontend of a web application designed to manage veterinary consultations. The backend is built with FastAPI, while the frontend is developed using React.

<p align="center">
  <a href="https://i.imgur.com/mBmjAIK.png">
    <img src="https://i.imgur.com/mBmjAIK.png" alt="Imagen 1" />
  </a>
</p>

## Table of Contents

- [Vet-Tech](#vet-tech)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Project Structure](#project-structure)
    - [Installation](#installation)
      - [1. Create a virtual environment](#1-create-a-virtual-environment)
      - [2. Activate the virtual environment](#2-activate-the-virtual-environment)
      - [3. Install the dependencies](#3-install-the-dependencies)
      - [4. Start the server in reload mode so it restarts when there is a change:](#4-start-the-server-in-reload-mode-so-it-restarts-when-there-is-a-change)
      - [5. Access the automatic documentation:](#5-access-the-automatic-documentation)
      - [Documentation with Swagger:](#documentation-with-swagger)
      - [Documentation with ReDoc:](#documentation-with-redoc)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

![Python 3.12+](https://img.shields.io/badge/python-3.12%2B-blue?logo=python&logoColor=white)
![Node.js 20+](https://img.shields.io/badge/node.js-20%2B-green?logo=node.js&logoColor=white)
![npm 10+](https://img.shields.io/badge/npm-10%2B-red?logo=npm&logoColor=white)

### Project Structure

```bash
Vet-Tech/
│
├── backend/
│ ├── db/
│ │ ├── models/
│ │ ├── schemas/
│ │ └── client.py
│ ├── routers/
│ ├── static/
│ ├── utils/
│ ├── venv/
│ └── requirements.txt
│
├── frontend/
│ ├── public/
│ ├── src/
│ ├── .env.example
│ ├── package.json
│ └── webpack.config.js
│
├── .gitignore
└── README.md
```

<details>
  <summary>Make clic here to see how install the backend</summary>

### Installation

#### 1. Create a virtual environment

To avoid installing dependencies globally, it is necessary to create a virtual environment. Navigate to the `/backend` directory in the console and run the following command:

```bash
python -m venv venv
```

#### 2. Activate the virtual environment

To activate the environment, run the following command:

```bash
.\venv\Scripts\activate
```

#### 3. Install the dependencies

```bash
pip install -r requirements.txt
```

#### 4. Start the server in reload mode so it restarts when there is a change:

```bash
uvicorn app.main:app --reload
```

#### 5. Access the automatic documentation:

FastAPI provides automatic documentation using Swagger and ReDoc.

It's important to note that the local address may vary on your PC.

#### Documentation with Swagger:

```
http://127.0.0.1:8000/docs
```

#### Documentation with ReDoc:

```
http://127.0.0.1:8000/redoc
```

</details>
