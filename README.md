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

The module exposes several services that you can use. These services are designed to ease your development process, and help you keep a standard structure and workflow across all your strategies. By providing you with a standard set of tools and procedures for performing repetitive tasks. Live getting configurations, managing orders, interacting with the pump/dump service and more.

### Available services list

- SDK
- ScriptConfig
- StrongestPresence
- OperationsManager

## IvySDKService:

This service is a wrapper around the Ivy's official node SDK. It exposes a "subscribeReady" method that returns an observable that only emits "true".

Once you get an emission from it, it means that the SDK has successfully initialized and connected to all the required services.

You can then access the SDK instance through the "instance" getter on the service.

**Note**: the SDK will inherit the configuration passed during the module registration. If none is passed the defaults will be used. But you still have to pass as a generic your script config interface if you want to have type checking support

#### Usage example:

```ts
import { IvySDKService } from '@mof-ivy/ivy-nest-strategies-common-module'

interface MyScriptConfig{
    foo: number;
    bar: string;
}

@Injectable()
export class MyStrategy {
    constructor(
        private readonly sdk: IvySDKService<MyScriptConfig> // Pass your script config interface generic
    ){
        this.sdk.subscribeReady().pipe(
            tap(() => {
                // now it is safe to use sdk.instance.
                // For example:
                this.sdk.instance.openOrder(...)
            })
        ).subscribe()
    }
}
```

For more information about Ivy's SDK and API documentation please refer to [Ivy's node SDK repository](https://github.com/MOF-IVY/ivy-node-sdk)

## IvyScriptConfigService:

This library automatically initializes a set of [default configs](https://github.com/MOF-IVY/ivy-nest-strategies-common-module/blob/main/src/modules/ivy-nest-strategies-common/services/ivy-script-config/models/initial-script-config.model.ts) that are used for its inner workings. If a script is deployed for the first time with the library installed, it will automatically merge your script configs with these default configs, and all of them will be accessible via web console, and from the config service itself.

The script config service is a handy service that enables realtime config updates. Like the other asynchronous services it provides a `subscribeReady()` method that you should always subscribe to and wait the first emission before starting using the service itself.

Once the service is ready, you can safely access its `snap` property, in which you will find all your script configs.

**Tip**: this library provides a `IIvyScriptInitialConfig` interface from which you can extend from if you want to have typing support even for the default configs of the library.

**Note: In order to have an actual type checking support on the `snap` property, you have to pass as a generic your script config interface.**

#### Usage example:

```ts
import { IvyScriptConfigService } from "@mof-ivy/ivy-nest-strategies-common-module";

interface MyScriptConfig {
  foo: number;
  bar: string;
}

@Injectable()
export class MyStrategy {
  constructor(
    private readonly config: IvyScriptConfigService<MyScriptConfig> // Pass your script config interface generic
  ) {
    this.config
      .subscribeReady()
      .pipe(
        tap(() => {
          // now it is safe to use config.snap
          // For example:
          console.log(this.config.snap.foo);
        })
      )
      .subscribe();
  }
}
```

This service is a wrapper around Ivy's SDK config service. For more information about Ivy's SDK and API documentation please refer to [Ivy's node SDK repository](https://github.com/MOF-IVY/ivy-node-sdk)

## IvyStrongestPresenceService:

This service uses Ivy's pump/dump service, to create a "strongest presence" ranking list. A symbol is considered to be in "strongest presence" when given more than one time frames to the pump/dump config, it is present in each time frame ranking list.

Eg: if we request pump rankings for (1m, 3m, 5m) time frames, a symbol to become a candidate must be present on all the requested time frames.

This service has also a simpler functioning mode, which is the normal pump/dump ranking system. In this mode, given the same requested time frames as above, for a symbol to become a candidate it is enough to be in at least one of the requested time frames.

This behavior can be configured by changing the following configs on the script:

- `pumpStrongestPresenceDisabled`
- `dumpStrongestPresenceDisabled`

By default the service works in "strongest presence" mode, so if you want to disable this behavior you must explicitly do it from the script config once the script has been deployed, or override it in the initial script config before the deploy.

You can configure the time frames you want to receive for the respective services by changing these configs:

- `pumpTFs`
- `dumpTFs`

You can configure how many items to receive for each time frame requested by changing these configs:

- `pumpingSymbolsPerTF`
- `dumpingSymbolsPerTF`

By default, the service will automatically connect to both pump and dump streams, if time frames are specified for them. If you want to disable one or both explicitly you have to set the value of the respective config to `null`:

```ts
{
    pumpTFs: null,
    dumpTFs: null,
}
```

#### Usage example:

```ts
import { IvyStrongestPresenceService } from "@mof-ivy/ivy-nest-strategies-common-module";

interface MyScriptConfig {
  foo: number;
  bar: string;
}

@Injectable()
export class MyStrategy {
  constructor(private readonly SP: IvyStrongestPresenceService) {
    this.SP.subscribeReady()
      .pipe(
        tap(() => {
          // now it is safe to use the service
          // For example:
          this.SP.isInLongCandidates("BTC/USDT");

          // you can even subscribe to the long/short list changes:
          // Note: this is just an example, do not handle rxjs subscriptions in this way.
          this.SP.subscribeLongCandidatesChanges()
            .pipe(tap((newList) => console.log(newList)))
            .subscribe();

          this.SP.subscribeShortCandidatesChanges()
            .pipe(tap((newList) => console.log(newList)))
            .subscribe();
        })
      )
      .subscribe();
  }
}
```

## OperationsManagerService:

The operations manager service, is the most important service of the library. With this service you interact with your instance trader. This service takes care of a lot of inner workings and abstracts them to you with a simple to use and intuitive interface:

#### Getters:

- `activeOperationsCount`
- `isOverMaxConcurrencyCap`

#### Methods

- `cancelOpenOrder`
- `cancelCloseOrder`
- `hasActiveOperation`
- `getActiveOperationById`
- `getActiveOperationBySym`
- `operationIsPendingOpen`
- `operationIsPendingClose`
- `closeOperation`
- `openOperation`

This service also lets you attach some custom extra properties to each operation, by passing the interface of the props you want to attach as a generic of the service class:

```ts
interface MyExtraProps {
  foo: number;
  bar: string;
}

@Injectable()
export class MyStrategy {
  constructor(
    private readonly operations: IvyOperationsManagerService<MyExtraProps> // pass the extra props as generic
  ) {}
}
```

Please refer to the [IvyOperationsManagerBase](https://github.com/MOF-IVY/ivy-nest-strategies-common-module/blob/main/src/modules/ivy-nest-strategies-common/services/ivy-operations-manager/base/ivy-operations-manager.base.ts) for more information about the parameters, and return types of each method.

#### Usage example:

```ts
import { IvyStrongestPresenceService } from "@mof-ivy/ivy-nest-strategies-common-module";

interface MyExtraProps {
  foo: number;
  bar: string;
}

@Injectable()
export class MyStrategy {
  constructor(
    // if you want to attach some extra props to each operation, pass the interface as a generic
    private readonly operations: IvyOperationsManagerService<MyExtraProps>
  ) {
    this.operations
      .subscribeReady()
      .pipe(
        tap(() => {
          // now it is safe to use the service
          // For example:
          console.log(this.operations.activeOperationsCount());
        })
      )
      .subscribe();
  }
}
```

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

The library provides also a bunch of convenient utility classes for dealing with routine tasks

### Available utils list

- Klines
- TimeFrames

## Klines utils:

Provides utility functions for klines manipulation

#### Usage example:

```ts
import { IvyKlinesUtils } from "@mof-ivy/ivy-nest-strategies-common-module";

IvyKlinesUtils.convertHistoryToHeikinashi([
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
]);
```

## TimeFrames utils:

Provides utility functions for time frames manipulation

#### Usage example:

```ts
import { IvyTimeFramesUtils } from "@mof-ivy/ivy-nest-strategies-common-module";

const metadata = IvyKlinesUtils.getTfMetadata("1m");
console.log(metadata.unit, metadata.amount);
```

<br>
<br>
<div style="text-align: center; width: 100%">Developed with ❤️ in 🇮🇹 by Caius Citiriga</div>
