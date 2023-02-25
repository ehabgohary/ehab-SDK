# Design of Lord of the Rings SDK
The Lord of the Rings SDK is a TypeScript library that provides a convenient interface for developers to access the Lord of the Rings API. The SDK is designed to be easy to use and provides a high-level abstraction over the API endpoints.

## Architecture
The SDK is built using the following architectural patterns:

### Facade pattern: The LotrApi library acts as a facade for the underlying API endpoints. It provides a simplified interface that is easier to use and understand than the raw API endpoints.
### Promises: All methods in the SDK return Promises, making it easy to work with the asynchronous nature of HTTP requests.

## Functions
The SDK is built using the following functions:

`listMovie`: This function represents a Lord of the Rings movies. It contains information such as the title, release date, and synopsis of the movie.
`Quote`: This function represents a quote from the Lord of the Rings trilogy. It contains information such as the text of the quote, the character who said it, and the movie it came from.

## Endpoints
The SDK provides access to the following endpoints from the Lord of the Rings API:

`/movie`: Returns information about all of the Lord of the Rings movies.

`/movie/{id}`: Returns information about a specific Lord of the Rings movie.

`/movie/{id}/quote`: Returns all quotes from a specific Lord of the Rings movie.

## Testing
The SDK is tested using the following approach:

### Unit tests: Each function in the SDK is tested using unit tests. These tests ensure that the functions are working correctly and that they provide the expected functionality.
### Integration tests: The SDK is also tested using integration tests. These tests ensure that the SDK is working correctly when it is used to access the Lord of the Rings API. They test the SDK as a whole, rather than testing individual functions.

## Deployment
The Lord of the Rings SDK is deployed as an npm package. Developers can install the SDK using npm, and can then use it in their own projects. The SDK is published to the npm registry using the npm publish command.