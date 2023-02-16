'use strict'; // Created by ua.lifesheets on 15.02.2023.

let config = {
  'TypeMode': 'Development',  // Development | Testing | Production
  'DataBase': "mysql",
  'MySQL Connect': {
    "Development": {
      Connect: ['127.0.0.1', 3306, 'database_devs', 'username', 'password'],
      Logging: false,
      Pool: [50, 0, 30000, 10000],
      ConnectTimeout: 15000,
      TimeStamps: false
    },
    "Testing": {
      Connect: ['127.0.0.1', 3306, 'database_test', 'username', 'password'],
      Logging: false,
      Pool: [50, 0, 30000, 10000],
      ConnectTimeout: 15000,
      TimeStamps: false
    },
    "Production": {
      Connect: ['127.0.0.1', 3306, 'database_prod', 'username', 'password'],
      Logging: false,
      Pool: [50, 0, 30000, 10000],
      ConnectTimeout: 15000,
      TimeStamps: false
    }
  }
}

module.exports = config;