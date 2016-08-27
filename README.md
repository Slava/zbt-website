# MIT ZBT Website 2016

This is the source of the ZBT website hosted on MIT infrastructure at <zbt.mit.edu>.

The goal is to have a modern-looking, easy to deploy and develop, static website.

## Design Decisions

Since MIT's hosting infrastructure available to the undergraduates runs very
outdated versions of Rails, Django and PHP, the best decision was to go with a
static website with all interactivity implemented in the client-side code.

This is how it came down to using [GatsbyJS](https://github.com/gatsbyjs/gatsby),
a tool that generated static pages with ReactJS powered transitions and
client-side interactivity.

## Goals

- Provide a welcoming information about ZBT Xi Chapter to the wider MIT community
- Have an up to date information about Rush and current brothers
- Make the website usable on mobile (read: responsive design)

## Development

You would need `node` and `npm`.

Install `gatsby` globally:

```
npm install -g gatsby
```

Install dependencies:

```
npm install
```

Run locally:

```
npm run develop
```

Running in development mode will run a server on `localhost:8000`. CSS has hot-code-reloading. Hot module replacement also should work.

To lint:

```
npm run lint
```

## Deployment

The site is deployed on MIT Scripts, under the locker called `zbt`.

Since it is a fraternity-owned locker, your MIT Kerberos account should be on
the `zbt-webmaster@mit.edu` mailing list in order to upload files there.

To deploy, just build files and put them into the Scripts root to be served
as static files.

Run the `./deploy-to-prod` bash script to save keystrokes and upload files
over `scp`.

---

Web design and development by Slava Kim'19.
Photography by John Chow'15.
