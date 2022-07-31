Helmet (https://github.com/helmetjs/helmet) is a dependency that helps to protect HTTP APIs written in express.

It set various HTTP headers to improve an application security.

Helmet is a simple middleware that is used in express:
`
app.use(helmet());
`

Example headers that are set by the dependency:

- `Content-Security-Policy` - it helps mitigate cross-site scripting attacks
- `X-XSS-Protection` - disables browser's buggy cross-site scripting filtering
- `Strict-Transport-Security` - tells browsers to prefer HTTPS over insecure HTTP
- `Cross-Origin-Resource-Policy` - allows to control the set of origins that are allowed to use an resource. For example. Server returns user-sensitive data, we can limit potential clients that are able to get a response from the server (`same-site`, `same-origin`, `cross-origin`)
and more