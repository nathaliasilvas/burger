<h1 align="center">Burger</h1>

This is an express api to create a hamburger menu for easy customer service.

## Installation

### NPM
In the root folder, run the command below:
```batch
npm install
```

### Environment
Create your own `.env` file based on `sample.env`.
Change the file `config/config.json` with the same parameters used in `.env` file.

### Database
If your db not exists, run the command below:
```batch
npx sequelize-cli db:create
```

When you already have a database, run the command below:
```batch
npx sequelize-cli db:migrate
```

### Run the app
If you want to run the express server locally, just run the command below:
#### Windows
```batch
npm run windev
```

#### Linux or other
```batch
npm run dev
```

If you want to create a production build, run the commands below:
```batch
npm run build
npm start
```

Now, your app is ready to use! :running:

## :bulb: Endpoint documentation
> GET /burgers

List all menu items.

---
> POST /burgers

Create a menu item based on body fields.

| field       | type   | required |
|-------------|--------|----------|
| name        | string | true     |
| description | string | true     |
| price       | number | true     |

---
> GET /burgers/:id

Get the selected menu item.

---
> PATCH /burgers/:id

Update the selected menu item, only sent fields are updated.

| field       | type   | required |
|-------------|--------|----------|
| name        | string | false    |
| description | string | false    |
| price       | number | false    |

---
> DELETE /burgers/:id

Remove the selected menu item.

## That's All!!
