# Ivy Nest strategies common module

Common package for NestJS strategies. It provides a set of useful tools (modules, services, models etc) to easily build strategies in NestJS for Ivy

This module is created to ease the development of NestJS Ivy strategies. It is designed to provide a standard set of the most commonly used tools to build your strategy logic, so you don't have to continuously copy and paste services, models etc that are common to the majority of strategies you are going to implement.

# How to install

You can install this package in two different ways.

- from the GitHub repository
- from Ivy's npm registry

Although the GitHub installation is the more straightforward, we see more elegant using the Ivy's npm registry, and install the package from there.

But it's just a matter of personal taste, and you can use whichever method you prefer.

### Install from Ivy's npm registry:

To install the package from Ivy's official npm registry, you have to:

- create an ".npmrc" file at the root of your project with this content: `@mof-ivy:registry=https://npm.pkg.github.com`

- run this command: `npm i --save @mof-ivy/ivy-nest-strategies-common-module`

### Install from Ivy's GitHub repo:

To install the package directly from the GitHub repo:

- run this command: `npm i git@github.com:MOF-IVY/ivy-nest-strategies-common-module.git`

# Getting started

TODO: document how to register the module and a basic usage example

# Services

The module exposes several services that you can use.

Each service provided has its own base class, called as the service name with the `Base` postfix. For example: `IvyScriptConfigService` base would be `IvyScriptConfigServiceBase`.

You can use these interfaces to implement your own version of a service, if that service does not fullfil your needs. <br>
Or you can extend each service and only override the methods you want to behave differently.

### Available services list

- SDK
- ScriptConfig
- StrongestPresence
- OperationsManager

## SDK service:

This service is a wrapper around the Ivy's official node SDK. It exposes a "subscribeReady" method that returns an observable that only emits "true".

Once you get an emission from it, it means that the SDK has successfully initialized and connected to all the required services.

You can then access the SDK instance through the "instance" getter on the service.

Note: the SDK will inherit the configuration passed during the module registration. If none is passed the defaults will be used.

## ScriptConfig service:

TODO: document

## StrongestPresence service:

TODO: document

## OperationsManager service:

TODO: document

# Utils

### Available utils list

- Klines
- TimeFrames

## Klines utils:

TODO: document

## TimeFrames utils:

TODO: document
