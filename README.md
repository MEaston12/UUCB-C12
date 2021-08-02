# UUCB-C12 - Crazy SQL Stuff

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

This project was put together for the U of U's Coding Bootcamp program to demonstrate SQL database manipulation capabilities.  In the process of developing this, a new form of SQL database modeling was also developed in which a series of .sql files are read in and parsed at boot time for the node project, then live compiled into code that can be accessed in the db handler module.  Each query can be referenced using the pattern: ```db.<folder>.<filename>(argsObject)```.  Any variables references in a .sql file that follow the pattern ```@argName``` will be automatically replaced with the relevant ```argsObject.<argName>``` when the query is called.

## Table of Contents

1. [Description](#description)
2. [Table of Contents](#table-of-contents)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Contribution](#contribution)
6. [Testing](#testing)
7. [License](#license)
8. [Questions](#questions)

## Installation

```npm i```

## Usage

I might try to turn this into a proper npm library later, this might have some merit.  For now, though, this is completely useless.

## License

MIT License

## Questions

If you have any additional questions, contact me at:  
Github: [MEaston12](https://github.com/MEaston12)  
Email: eastonmalcolm@gmail.com
