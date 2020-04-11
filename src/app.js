/** @typedef {{id: string, title: string, url: string, techs: string[], likes: number}} Repository */

const express = require("express");
const cors = require("cors");

const { uuid } = require("uuidv4");

const app = express();

app.use(express.json());
app.use(cors());

/** @type {Repository[]} */
const repositories = [];

function findRepo(request, response, next) {
  const { id } = request.params;

  const index = repositories.findIndex(repo => repo.id === id);

  if (index === -1) {
    return response.status(400).json({
      message: 'repo does not exists'
    });
  }

  response.locals.index = index

  return next();
}

app.get("/repositories", (request, response) => {
  return response.json(repositories)
});

app.post("/repositories", (request, response) => {
  const { title, url, techs } = request.body;

  /** @type {Repository} */
  const repository = {
    id: uuid(),
    likes: 0,
    techs,
    title,
    url
  }

  repositories.push(repository);

  return response.json(repository);
});

app.put("/repositories/:id", findRepo, (request, response) => {
  const { index } = response.locals

  const updatedRepository = {
    ...repositories[index],
    ...request.body,
    likes: repositories[index].likes
  }

  repositories[index] = updatedRepository;

  return response.json(updatedRepository);
});

app.delete("/repositories/:id", findRepo, (request, response) => {
  const { index } = response.locals;

  repositories.splice(index, 1);

  return response.status(204).json();
});

app.post("/repositories/:id/like", findRepo, (request, response) => {
  const { index } = response.locals;

  repositories[index].likes += 1;

  return response.json({
    likes: repositories[index].likes
  });
});

module.exports = app;
