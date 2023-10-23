# Ivy Nest strategies common module

Common package for NestJS strategies. It provides a set of useful tools (modules, services, indicators etc) to easily build strategies in NestJS for Ivy

This module is created to ease the development of NestJS Ivy strategies. It is designed to provide a standard set of the most commonly used tools to build your strategy logic, that are common to the majority of strategies you are going to implement. So you don't have to continuously reinvent the wheel.

# How to install

You can install this package in two different ways:

- from the GitHub repository
- from Ivy's npm registry

Although the GitHub installation is the more straightforward, we see more elegant using Ivy's npm registry, and install the package from there.

But is just a matter of taste, and you can use whichever method you prefer.

### From Ivy's repo:

Run the install command in your terminal:

```
npm i git@github.com:MOF-IVY/ivy-nest-strategies-common-module.git
```

### From Ivy's npm registry:

Create an `.npmrc` file at the root of your project with this content:

```
@mof-ivy:registry=https://npm.pkg.github.com
```

Run the install command in your terminal:

```
npm i --save @mof-ivy/ivy-nest-strategies-common-module
```

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

# Indicators

The module also provides a variety of technical indicators ready to use.

All indicators are located and accessible via this import path:

```
@mof-ivy/ivy-nest-strategies-common-module/dist/indicators
```

You can find an enum containing all the supported indicators names called `IvyTechnicalIndicators`<br>
If you find the indicator name you need inside that enum, it means that you can also import the indicator with the same name as the enum key:

```ts
import {
    AVGPRICE, // actual indicator class
    IvyTechnicalIndicators, // all available indicators names enum
} from '@mof-ivy/ivy-nest-strategies-common-module/dist/indicators'

const indicator = new AVGPRICE(...) // each indicator has its own required configs
```

# Utils

### Available utils list

- Klines
- TimeFrames

## Klines utils:

TODO: document

## TimeFrames utils:

TODO: document
