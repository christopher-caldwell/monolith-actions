# GraphQL for Music Tracker

API assisted by Dynamo for the Music Tracker table

## Setup

Run `yarn install-dependencies`

Inside the `env/`, copy the `env.example` to a new file called `.env.local`.

## Setup

### Dynamo

Go to the [README for the Music Tracker table](../../infrastructure/dynamo/music-tracker/README.md)

### Lambda

Run `yarn start`, this will start a local API gateway that you can make requests to.

### GraphQL

Install [GraphiQL](https://www.electronjs.org/apps/graphiql). Use the url: `http://localhost:5000/local/graphql`

You can now use GraphQL locally from this URL
