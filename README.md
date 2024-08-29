# Overlap Search
***Search algorithm for short texts***

[Built With](#built-with) · [Features](#features) · [Installation](#installation) · [Usage](#usage)

## Built With
- ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Features

### Longest Path Problem Algorithm
I implemented my [algorithm for comparing amino acid sequences](https://github.com/tadahiroueta/amino-overlap) to compare search prompts and potential results by their characters.  

![dna-comparison](https://camo.githubusercontent.com/b6f694e250eedceaa5f6f23941fc40e4e81ebf4afab995bb596e80c5e639652f/68747470733a2f2f6d656469612e737072696e6765726e61747572652e636f6d2f6c773638352f737072696e6765722d7374617469632f696d6167652f61727425334131302e313138362532467331333035392d3032302d30323135372d322f4d656469614f626a656374732f31333035395f323032305f323135375f466967385f48544d4c2e706e67)

## Installation
1. Install npm.
    > I recommend [nvm for windows](https://github.com/coreybutler/nvm-windows)

2. Install this package
    ```sh
    npm install overlap-search
    ```

## Usage
```js
import search from "overlap-search";

const searchKey = "geoghraphy";
const options = ["geometry", "geology", "photography", "geography", "hydrolics"];
const result = search(searchKey, options);

console.log(result.map((index) => options[index])); 
// [ 'geography', 'photography', 'geometry', 'geology', 'hydrolics' ]
```
