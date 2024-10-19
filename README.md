# Chart.js

## Setup

- Clone the Repository
- Run `composer install` command in root of repo
- Create SQL database and update below variable in .env file
> copy `.env.example`  to `.env`  for reference
- DB_CONNECTION
- DB_HOST
- DB_PORT
- DB_DATABASE
- DB_USERNAME
- DB_PASSWORD

- Run `php artisan migrate` command in root
- Run `php artisan key:generate` command in root
- Run `npm install` command in root it will install the front-end dependency

- Run  command `php artisan serve`
  It will start server on http://127.0.0.1:8000

> If you are mac or linux user and uses the [Valet](https://laravel.com/docs/10.x/valet) then link the directory and open it wth linked URL

### Front-end
After above setup run `npm run dev` in root of project it will compile the front-end code.

###  Required Tech Stack
-   PHP: 8.2.10
-   MySql: 8.0.30
-   Composer: 2.6
-   Valet (Optional)

For windows OS, you can follow `wamp` or `xampp` server