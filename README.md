# Lord of the Rings SDK
This is a TypeScript SDK for the Lord of the Rings API. It provides an easy-to-use interface for accessing information about the movies and quotes from the Lord of the Rings trilogy.

## Installation
To install the SDK, run the following command:
```
npm install --save ehab-sdk
```

## Usage
To use the SDK in your TypeScript or JavaScript code, import it like this:
```
import { listMovies, getMovie, listQuotes } from "ehab-sdk";

const movies = await listMovies();
const movie = await getMovie("exampleMovieId");
const quotes = await listQuotes("exampleMovieId");
```

## Testing
To test the SDK, run the following command:
```
npm test
```

## Publishing
To publish the SDK, run the following command:
```
npm run build
npm publish
```
