# Tabula
Electron based dashboard for the FIRST Robotics Competition.


## Overview

This project is a proof of concept/example of how to create a dashboard using AngularJS to power the front-end.  Each custom element is an AngularJS directives, which must require both a nt-key and a name.  This is so that the dashboard can interact with the NetworkTable value represented by that key and so that on the dashboard, you can tell what component it represents (i.e. left motor, right motor etc.).  

## Installation
In order to use this dashboard, you must first install the dependencies:
```sh
npm install
```

## Usage
If you wish to see the example provided in this project please run:
```sh
npm start
```

## Development
If you wish to use this project as a starting point, first fork the repository and then clone it to your desktop.  If you create a new directive, store it in the `dasboard/directives` directory along with a corresponding template file in the `template` director.  Then add a `script` tag to the `index.html` file in order to use it. 

## License
This project is licensed under the MIT License

## Acknowledgements
[*] [Erik Boesen](https://github.com/ErikBoesen) - The primary developer of [FRCDashboard](https://github.com/FRCDashboard) which this project is based on