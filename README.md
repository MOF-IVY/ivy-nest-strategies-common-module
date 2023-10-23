# Ivy Nest strategies common module

Common package for NestJS strategies. It provides a set of useful tools (modules, services, models etc) to easily build strategies in NestJS for Ivy

This module is created to ease the development of NestJS Ivy strategies. It is designed to provide a standard set of the most commonly used tools to build your strategy logic, so you don't have to continuously copy and paste services, models etc that are common to the majority of strategies you are going to implement.

# Services

The module exposes several services that you can use,

Each service provided has its own interface, called as the service name with the `I` prefix. For example: `ConfigService` interface will be `IConfigService`.

You can use these interfaces to implement your own version of a service, if that service does not fullfil your needs. <br>
Or you can extend each service and only override the methods you want to behave differently.

### Available services list

- SDK
- Config
- StrongestPresence
- OperationsManager

## SDK service:

## Config service:

## StrongestPresence service:

## OperationsManager service:

# Utils

### Available utils list

- kline utils
