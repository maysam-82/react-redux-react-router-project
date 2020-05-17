## Simple Guide

- Create a `db.json` file to save any record inside api server. `db.json` acts like a Database.

```json
{
	"streams": []
}
```

- Goto `package.json` file and inside of `scripts` add the following code:

```json
"scripts": {
    "start": "json-server -p 3001 -w db.json"
  },
```

This is going to start with `json-server` on port `3001`. It is also going to watch `db.json` for any changes of it.

- Open terminal and enter `npm start`

`http://localhost:3001/streams` means that we can use `json-server` to manipulate the list of `streams` that store inside api server by following all RESTful conventions (i.e. `GET, POST, PUT, DELETE`)
