
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Rider
 * 
 */
export type Rider = $Result.DefaultSelection<Prisma.$RiderPayload>
/**
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>
/**
 * Model Ride
 * 
 */
export type Ride = $Result.DefaultSelection<Prisma.$RidePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Riders
 * const riders = await prisma.rider.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Riders
   * const riders = await prisma.rider.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.rider`: Exposes CRUD operations for the **Rider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Riders
    * const riders = await prisma.rider.findMany()
    * ```
    */
  get rider(): Prisma.RiderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ride`: Exposes CRUD operations for the **Ride** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rides
    * const rides = await prisma.ride.findMany()
    * ```
    */
  get ride(): Prisma.RideDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.15.0
   * Query Engine version: 85179d7826409ee107a6ba334b5e305ae3fba9fb
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Rider: 'Rider',
    Driver: 'Driver',
    Ride: 'Ride'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "rider" | "driver" | "ride"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Rider: {
        payload: Prisma.$RiderPayload<ExtArgs>
        fields: Prisma.RiderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RiderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RiderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          findFirst: {
            args: Prisma.RiderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RiderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          findMany: {
            args: Prisma.RiderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>[]
          }
          create: {
            args: Prisma.RiderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          createMany: {
            args: Prisma.RiderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RiderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>[]
          }
          delete: {
            args: Prisma.RiderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          update: {
            args: Prisma.RiderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          deleteMany: {
            args: Prisma.RiderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RiderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RiderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>[]
          }
          upsert: {
            args: Prisma.RiderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RiderPayload>
          }
          aggregate: {
            args: Prisma.RiderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRider>
          }
          groupBy: {
            args: Prisma.RiderGroupByArgs<ExtArgs>
            result: $Utils.Optional<RiderGroupByOutputType>[]
          }
          count: {
            args: Prisma.RiderCountArgs<ExtArgs>
            result: $Utils.Optional<RiderCountAggregateOutputType> | number
          }
        }
      }
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      Ride: {
        payload: Prisma.$RidePayload<ExtArgs>
        fields: Prisma.RideFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RideFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RideFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          findFirst: {
            args: Prisma.RideFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RideFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          findMany: {
            args: Prisma.RideFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>[]
          }
          create: {
            args: Prisma.RideCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          createMany: {
            args: Prisma.RideCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RideCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>[]
          }
          delete: {
            args: Prisma.RideDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          update: {
            args: Prisma.RideUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          deleteMany: {
            args: Prisma.RideDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RideUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RideUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>[]
          }
          upsert: {
            args: Prisma.RideUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RidePayload>
          }
          aggregate: {
            args: Prisma.RideAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRide>
          }
          groupBy: {
            args: Prisma.RideGroupByArgs<ExtArgs>
            result: $Utils.Optional<RideGroupByOutputType>[]
          }
          count: {
            args: Prisma.RideCountArgs<ExtArgs>
            result: $Utils.Optional<RideCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    rider?: RiderOmit
    driver?: DriverOmit
    ride?: RideOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RiderCountOutputType
   */

  export type RiderCountOutputType = {
    Ride: number
  }

  export type RiderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ride?: boolean | RiderCountOutputTypeCountRideArgs
  }

  // Custom InputTypes
  /**
   * RiderCountOutputType without action
   */
  export type RiderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RiderCountOutputType
     */
    select?: RiderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RiderCountOutputType without action
   */
  export type RiderCountOutputTypeCountRideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideWhereInput
  }


  /**
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    Ride: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ride?: boolean | DriverCountOutputTypeCountRideArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountRideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Rider
   */

  export type AggregateRider = {
    _count: RiderCountAggregateOutputType | null
    _avg: RiderAvgAggregateOutputType | null
    _sum: RiderSumAggregateOutputType | null
    _min: RiderMinAggregateOutputType | null
    _max: RiderMaxAggregateOutputType | null
  }

  export type RiderAvgAggregateOutputType = {
    id: number | null
  }

  export type RiderSumAggregateOutputType = {
    id: number | null
  }

  export type RiderMinAggregateOutputType = {
    id: number | null
    uid: string | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiderMaxAggregateOutputType = {
    id: number | null
    uid: string | null
    name: string | null
    email: string | null
    phone: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RiderCountAggregateOutputType = {
    id: number
    uid: number
    name: number
    email: number
    phone: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RiderAvgAggregateInputType = {
    id?: true
  }

  export type RiderSumAggregateInputType = {
    id?: true
  }

  export type RiderMinAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiderMaxAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RiderCountAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    email?: true
    phone?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RiderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rider to aggregate.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Riders
    **/
    _count?: true | RiderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RiderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RiderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RiderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RiderMaxAggregateInputType
  }

  export type GetRiderAggregateType<T extends RiderAggregateArgs> = {
        [P in keyof T & keyof AggregateRider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRider[P]>
      : GetScalarType<T[P], AggregateRider[P]>
  }




  export type RiderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RiderWhereInput
    orderBy?: RiderOrderByWithAggregationInput | RiderOrderByWithAggregationInput[]
    by: RiderScalarFieldEnum[] | RiderScalarFieldEnum
    having?: RiderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RiderCountAggregateInputType | true
    _avg?: RiderAvgAggregateInputType
    _sum?: RiderSumAggregateInputType
    _min?: RiderMinAggregateInputType
    _max?: RiderMaxAggregateInputType
  }

  export type RiderGroupByOutputType = {
    id: number
    uid: string
    name: string
    email: string
    phone: string
    createdAt: Date
    updatedAt: Date
    _count: RiderCountAggregateOutputType | null
    _avg: RiderAvgAggregateOutputType | null
    _sum: RiderSumAggregateOutputType | null
    _min: RiderMinAggregateOutputType | null
    _max: RiderMaxAggregateOutputType | null
  }

  type GetRiderGroupByPayload<T extends RiderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RiderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RiderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RiderGroupByOutputType[P]>
            : GetScalarType<T[P], RiderGroupByOutputType[P]>
        }
      >
    >


  export type RiderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Ride?: boolean | Rider$RideArgs<ExtArgs>
    _count?: boolean | RiderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rider"]>

  export type RiderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rider"]>

  export type RiderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["rider"]>

  export type RiderSelectScalar = {
    id?: boolean
    uid?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RiderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uid" | "name" | "email" | "phone" | "createdAt" | "updatedAt", ExtArgs["result"]["rider"]>
  export type RiderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ride?: boolean | Rider$RideArgs<ExtArgs>
    _count?: boolean | RiderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RiderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RiderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RiderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rider"
    objects: {
      Ride: Prisma.$RidePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uid: string
      name: string
      email: string
      phone: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rider"]>
    composites: {}
  }

  type RiderGetPayload<S extends boolean | null | undefined | RiderDefaultArgs> = $Result.GetResult<Prisma.$RiderPayload, S>

  type RiderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RiderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RiderCountAggregateInputType | true
    }

  export interface RiderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rider'], meta: { name: 'Rider' } }
    /**
     * Find zero or one Rider that matches the filter.
     * @param {RiderFindUniqueArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RiderFindUniqueArgs>(args: SelectSubset<T, RiderFindUniqueArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RiderFindUniqueOrThrowArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RiderFindUniqueOrThrowArgs>(args: SelectSubset<T, RiderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindFirstArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RiderFindFirstArgs>(args?: SelectSubset<T, RiderFindFirstArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindFirstOrThrowArgs} args - Arguments to find a Rider
     * @example
     * // Get one Rider
     * const rider = await prisma.rider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RiderFindFirstOrThrowArgs>(args?: SelectSubset<T, RiderFindFirstOrThrowArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Riders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Riders
     * const riders = await prisma.rider.findMany()
     * 
     * // Get first 10 Riders
     * const riders = await prisma.rider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const riderWithIdOnly = await prisma.rider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RiderFindManyArgs>(args?: SelectSubset<T, RiderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rider.
     * @param {RiderCreateArgs} args - Arguments to create a Rider.
     * @example
     * // Create one Rider
     * const Rider = await prisma.rider.create({
     *   data: {
     *     // ... data to create a Rider
     *   }
     * })
     * 
     */
    create<T extends RiderCreateArgs>(args: SelectSubset<T, RiderCreateArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Riders.
     * @param {RiderCreateManyArgs} args - Arguments to create many Riders.
     * @example
     * // Create many Riders
     * const rider = await prisma.rider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RiderCreateManyArgs>(args?: SelectSubset<T, RiderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Riders and returns the data saved in the database.
     * @param {RiderCreateManyAndReturnArgs} args - Arguments to create many Riders.
     * @example
     * // Create many Riders
     * const rider = await prisma.rider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Riders and only return the `id`
     * const riderWithIdOnly = await prisma.rider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RiderCreateManyAndReturnArgs>(args?: SelectSubset<T, RiderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rider.
     * @param {RiderDeleteArgs} args - Arguments to delete one Rider.
     * @example
     * // Delete one Rider
     * const Rider = await prisma.rider.delete({
     *   where: {
     *     // ... filter to delete one Rider
     *   }
     * })
     * 
     */
    delete<T extends RiderDeleteArgs>(args: SelectSubset<T, RiderDeleteArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rider.
     * @param {RiderUpdateArgs} args - Arguments to update one Rider.
     * @example
     * // Update one Rider
     * const rider = await prisma.rider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RiderUpdateArgs>(args: SelectSubset<T, RiderUpdateArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Riders.
     * @param {RiderDeleteManyArgs} args - Arguments to filter Riders to delete.
     * @example
     * // Delete a few Riders
     * const { count } = await prisma.rider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RiderDeleteManyArgs>(args?: SelectSubset<T, RiderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Riders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Riders
     * const rider = await prisma.rider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RiderUpdateManyArgs>(args: SelectSubset<T, RiderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Riders and returns the data updated in the database.
     * @param {RiderUpdateManyAndReturnArgs} args - Arguments to update many Riders.
     * @example
     * // Update many Riders
     * const rider = await prisma.rider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Riders and only return the `id`
     * const riderWithIdOnly = await prisma.rider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RiderUpdateManyAndReturnArgs>(args: SelectSubset<T, RiderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rider.
     * @param {RiderUpsertArgs} args - Arguments to update or create a Rider.
     * @example
     * // Update or create a Rider
     * const rider = await prisma.rider.upsert({
     *   create: {
     *     // ... data to create a Rider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rider we want to update
     *   }
     * })
     */
    upsert<T extends RiderUpsertArgs>(args: SelectSubset<T, RiderUpsertArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Riders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderCountArgs} args - Arguments to filter Riders to count.
     * @example
     * // Count the number of Riders
     * const count = await prisma.rider.count({
     *   where: {
     *     // ... the filter for the Riders we want to count
     *   }
     * })
    **/
    count<T extends RiderCountArgs>(
      args?: Subset<T, RiderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RiderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RiderAggregateArgs>(args: Subset<T, RiderAggregateArgs>): Prisma.PrismaPromise<GetRiderAggregateType<T>>

    /**
     * Group by Rider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RiderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RiderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RiderGroupByArgs['orderBy'] }
        : { orderBy?: RiderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RiderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRiderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rider model
   */
  readonly fields: RiderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RiderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ride<T extends Rider$RideArgs<ExtArgs> = {}>(args?: Subset<T, Rider$RideArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rider model
   */
  interface RiderFieldRefs {
    readonly id: FieldRef<"Rider", 'Int'>
    readonly uid: FieldRef<"Rider", 'String'>
    readonly name: FieldRef<"Rider", 'String'>
    readonly email: FieldRef<"Rider", 'String'>
    readonly phone: FieldRef<"Rider", 'String'>
    readonly createdAt: FieldRef<"Rider", 'DateTime'>
    readonly updatedAt: FieldRef<"Rider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rider findUnique
   */
  export type RiderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider findUniqueOrThrow
   */
  export type RiderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider findFirst
   */
  export type RiderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Riders.
     */
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }

  /**
   * Rider findFirstOrThrow
   */
  export type RiderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Rider to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Riders.
     */
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }

  /**
   * Rider findMany
   */
  export type RiderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter, which Riders to fetch.
     */
    where?: RiderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Riders to fetch.
     */
    orderBy?: RiderOrderByWithRelationInput | RiderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Riders.
     */
    cursor?: RiderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Riders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Riders.
     */
    skip?: number
    distinct?: RiderScalarFieldEnum | RiderScalarFieldEnum[]
  }

  /**
   * Rider create
   */
  export type RiderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The data needed to create a Rider.
     */
    data: XOR<RiderCreateInput, RiderUncheckedCreateInput>
  }

  /**
   * Rider createMany
   */
  export type RiderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Riders.
     */
    data: RiderCreateManyInput | RiderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rider createManyAndReturn
   */
  export type RiderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * The data used to create many Riders.
     */
    data: RiderCreateManyInput | RiderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rider update
   */
  export type RiderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The data needed to update a Rider.
     */
    data: XOR<RiderUpdateInput, RiderUncheckedUpdateInput>
    /**
     * Choose, which Rider to update.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider updateMany
   */
  export type RiderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Riders.
     */
    data: XOR<RiderUpdateManyMutationInput, RiderUncheckedUpdateManyInput>
    /**
     * Filter which Riders to update
     */
    where?: RiderWhereInput
    /**
     * Limit how many Riders to update.
     */
    limit?: number
  }

  /**
   * Rider updateManyAndReturn
   */
  export type RiderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * The data used to update Riders.
     */
    data: XOR<RiderUpdateManyMutationInput, RiderUncheckedUpdateManyInput>
    /**
     * Filter which Riders to update
     */
    where?: RiderWhereInput
    /**
     * Limit how many Riders to update.
     */
    limit?: number
  }

  /**
   * Rider upsert
   */
  export type RiderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * The filter to search for the Rider to update in case it exists.
     */
    where: RiderWhereUniqueInput
    /**
     * In case the Rider found by the `where` argument doesn't exist, create a new Rider with this data.
     */
    create: XOR<RiderCreateInput, RiderUncheckedCreateInput>
    /**
     * In case the Rider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RiderUpdateInput, RiderUncheckedUpdateInput>
  }

  /**
   * Rider delete
   */
  export type RiderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
    /**
     * Filter which Rider to delete.
     */
    where: RiderWhereUniqueInput
  }

  /**
   * Rider deleteMany
   */
  export type RiderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Riders to delete
     */
    where?: RiderWhereInput
    /**
     * Limit how many Riders to delete.
     */
    limit?: number
  }

  /**
   * Rider.Ride
   */
  export type Rider$RideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    where?: RideWhereInput
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    cursor?: RideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Rider without action
   */
  export type RiderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rider
     */
    select?: RiderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rider
     */
    omit?: RiderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RiderInclude<ExtArgs> | null
  }


  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverAvgAggregateOutputType = {
    id: number | null
  }

  export type DriverSumAggregateOutputType = {
    id: number | null
  }

  export type DriverMinAggregateOutputType = {
    id: number | null
    uid: string | null
    name: string | null
    email: string | null
    phone: string | null
    licenseNumber: string | null
    vehicleNumber: string | null
    vehicleType: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverMaxAggregateOutputType = {
    id: number | null
    uid: string | null
    name: string | null
    email: string | null
    phone: string | null
    licenseNumber: string | null
    vehicleNumber: string | null
    vehicleType: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    uid: number
    name: number
    email: number
    phone: number
    licenseNumber: number
    vehicleNumber: number
    vehicleType: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DriverAvgAggregateInputType = {
    id?: true
  }

  export type DriverSumAggregateInputType = {
    id?: true
  }

  export type DriverMinAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    email?: true
    phone?: true
    licenseNumber?: true
    vehicleNumber?: true
    vehicleType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    email?: true
    phone?: true
    licenseNumber?: true
    vehicleNumber?: true
    vehicleType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    uid?: true
    name?: true
    email?: true
    phone?: true
    licenseNumber?: true
    vehicleNumber?: true
    vehicleType?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _avg?: DriverAvgAggregateInputType
    _sum?: DriverSumAggregateInputType
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: number
    uid: string
    name: string
    email: string
    phone: string
    licenseNumber: string
    vehicleNumber: string
    vehicleType: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    licenseNumber?: boolean
    vehicleNumber?: boolean
    vehicleType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Ride?: boolean | Driver$RideArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    licenseNumber?: boolean
    vehicleNumber?: boolean
    vehicleType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uid?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    licenseNumber?: boolean
    vehicleNumber?: boolean
    vehicleType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectScalar = {
    id?: boolean
    uid?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    licenseNumber?: boolean
    vehicleNumber?: boolean
    vehicleType?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "uid" | "name" | "email" | "phone" | "licenseNumber" | "vehicleNumber" | "vehicleType" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["driver"]>
  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Ride?: boolean | Driver$RideArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DriverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DriverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      Ride: Prisma.$RidePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uid: string
      name: string
      email: string
      phone: string
      licenseNumber: string
      vehicleNumber: string
      vehicleType: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drivers and returns the data saved in the database.
     * @param {DriverCreateManyAndReturnArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers and returns the data updated in the database.
     * @param {DriverUpdateManyAndReturnArgs} args - Arguments to update many Drivers.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DriverUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Ride<T extends Driver$RideArgs<ExtArgs> = {}>(args?: Subset<T, Driver$RideArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Driver model
   */
  interface DriverFieldRefs {
    readonly id: FieldRef<"Driver", 'Int'>
    readonly uid: FieldRef<"Driver", 'String'>
    readonly name: FieldRef<"Driver", 'String'>
    readonly email: FieldRef<"Driver", 'String'>
    readonly phone: FieldRef<"Driver", 'String'>
    readonly licenseNumber: FieldRef<"Driver", 'String'>
    readonly vehicleNumber: FieldRef<"Driver", 'String'>
    readonly vehicleType: FieldRef<"Driver", 'String'>
    readonly status: FieldRef<"Driver", 'String'>
    readonly createdAt: FieldRef<"Driver", 'DateTime'>
    readonly updatedAt: FieldRef<"Driver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver createManyAndReturn
   */
  export type DriverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver updateManyAndReturn
   */
  export type DriverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to delete.
     */
    limit?: number
  }

  /**
   * Driver.Ride
   */
  export type Driver$RideArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    where?: RideWhereInput
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    cursor?: RideWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
  }


  /**
   * Model Ride
   */

  export type AggregateRide = {
    _count: RideCountAggregateOutputType | null
    _avg: RideAvgAggregateOutputType | null
    _sum: RideSumAggregateOutputType | null
    _min: RideMinAggregateOutputType | null
    _max: RideMaxAggregateOutputType | null
  }

  export type RideAvgAggregateOutputType = {
    id: number | null
    riderId: number | null
    driverId: number | null
    pickUpLat: number | null
    pickUpLong: number | null
    dropOffLat: number | null
    dropOffLong: number | null
  }

  export type RideSumAggregateOutputType = {
    id: number | null
    riderId: number | null
    driverId: number | null
    pickUpLat: number | null
    pickUpLong: number | null
    dropOffLat: number | null
    dropOffLong: number | null
  }

  export type RideMinAggregateOutputType = {
    id: number | null
    riderId: number | null
    driverId: number | null
    status: string | null
    pickUpLat: number | null
    pickUpLong: number | null
    dropOffLat: number | null
    dropOffLong: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RideMaxAggregateOutputType = {
    id: number | null
    riderId: number | null
    driverId: number | null
    status: string | null
    pickUpLat: number | null
    pickUpLong: number | null
    dropOffLat: number | null
    dropOffLong: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RideCountAggregateOutputType = {
    id: number
    riderId: number
    driverId: number
    status: number
    pickUpLat: number
    pickUpLong: number
    dropOffLat: number
    dropOffLong: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RideAvgAggregateInputType = {
    id?: true
    riderId?: true
    driverId?: true
    pickUpLat?: true
    pickUpLong?: true
    dropOffLat?: true
    dropOffLong?: true
  }

  export type RideSumAggregateInputType = {
    id?: true
    riderId?: true
    driverId?: true
    pickUpLat?: true
    pickUpLong?: true
    dropOffLat?: true
    dropOffLong?: true
  }

  export type RideMinAggregateInputType = {
    id?: true
    riderId?: true
    driverId?: true
    status?: true
    pickUpLat?: true
    pickUpLong?: true
    dropOffLat?: true
    dropOffLong?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RideMaxAggregateInputType = {
    id?: true
    riderId?: true
    driverId?: true
    status?: true
    pickUpLat?: true
    pickUpLong?: true
    dropOffLat?: true
    dropOffLong?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RideCountAggregateInputType = {
    id?: true
    riderId?: true
    driverId?: true
    status?: true
    pickUpLat?: true
    pickUpLong?: true
    dropOffLat?: true
    dropOffLong?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RideAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ride to aggregate.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rides
    **/
    _count?: true | RideCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RideAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RideSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RideMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RideMaxAggregateInputType
  }

  export type GetRideAggregateType<T extends RideAggregateArgs> = {
        [P in keyof T & keyof AggregateRide]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRide[P]>
      : GetScalarType<T[P], AggregateRide[P]>
  }




  export type RideGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RideWhereInput
    orderBy?: RideOrderByWithAggregationInput | RideOrderByWithAggregationInput[]
    by: RideScalarFieldEnum[] | RideScalarFieldEnum
    having?: RideScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RideCountAggregateInputType | true
    _avg?: RideAvgAggregateInputType
    _sum?: RideSumAggregateInputType
    _min?: RideMinAggregateInputType
    _max?: RideMaxAggregateInputType
  }

  export type RideGroupByOutputType = {
    id: number
    riderId: number
    driverId: number | null
    status: string
    pickUpLat: number
    pickUpLong: number
    dropOffLat: number
    dropOffLong: number
    createdAt: Date
    updatedAt: Date
    _count: RideCountAggregateOutputType | null
    _avg: RideAvgAggregateOutputType | null
    _sum: RideSumAggregateOutputType | null
    _min: RideMinAggregateOutputType | null
    _max: RideMaxAggregateOutputType | null
  }

  type GetRideGroupByPayload<T extends RideGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RideGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RideGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RideGroupByOutputType[P]>
            : GetScalarType<T[P], RideGroupByOutputType[P]>
        }
      >
    >


  export type RideSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    riderId?: boolean
    driverId?: boolean
    status?: boolean
    pickUpLat?: boolean
    pickUpLong?: boolean
    dropOffLat?: boolean
    dropOffLong?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    driver?: boolean | Ride$driverArgs<ExtArgs>
  }, ExtArgs["result"]["ride"]>

  export type RideSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    riderId?: boolean
    driverId?: boolean
    status?: boolean
    pickUpLat?: boolean
    pickUpLong?: boolean
    dropOffLat?: boolean
    dropOffLong?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    driver?: boolean | Ride$driverArgs<ExtArgs>
  }, ExtArgs["result"]["ride"]>

  export type RideSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    riderId?: boolean
    driverId?: boolean
    status?: boolean
    pickUpLat?: boolean
    pickUpLong?: boolean
    dropOffLat?: boolean
    dropOffLong?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    driver?: boolean | Ride$driverArgs<ExtArgs>
  }, ExtArgs["result"]["ride"]>

  export type RideSelectScalar = {
    id?: boolean
    riderId?: boolean
    driverId?: boolean
    status?: boolean
    pickUpLat?: boolean
    pickUpLong?: boolean
    dropOffLat?: boolean
    dropOffLong?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RideOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "riderId" | "driverId" | "status" | "pickUpLat" | "pickUpLong" | "dropOffLat" | "dropOffLong" | "createdAt" | "updatedAt", ExtArgs["result"]["ride"]>
  export type RideInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    driver?: boolean | Ride$driverArgs<ExtArgs>
  }
  export type RideIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    driver?: boolean | Ride$driverArgs<ExtArgs>
  }
  export type RideIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rider?: boolean | RiderDefaultArgs<ExtArgs>
    driver?: boolean | Ride$driverArgs<ExtArgs>
  }

  export type $RidePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ride"
    objects: {
      rider: Prisma.$RiderPayload<ExtArgs>
      driver: Prisma.$DriverPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      riderId: number
      driverId: number | null
      status: string
      pickUpLat: number
      pickUpLong: number
      dropOffLat: number
      dropOffLong: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ride"]>
    composites: {}
  }

  type RideGetPayload<S extends boolean | null | undefined | RideDefaultArgs> = $Result.GetResult<Prisma.$RidePayload, S>

  type RideCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RideFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RideCountAggregateInputType | true
    }

  export interface RideDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ride'], meta: { name: 'Ride' } }
    /**
     * Find zero or one Ride that matches the filter.
     * @param {RideFindUniqueArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RideFindUniqueArgs>(args: SelectSubset<T, RideFindUniqueArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ride that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RideFindUniqueOrThrowArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RideFindUniqueOrThrowArgs>(args: SelectSubset<T, RideFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ride that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideFindFirstArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RideFindFirstArgs>(args?: SelectSubset<T, RideFindFirstArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ride that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideFindFirstOrThrowArgs} args - Arguments to find a Ride
     * @example
     * // Get one Ride
     * const ride = await prisma.ride.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RideFindFirstOrThrowArgs>(args?: SelectSubset<T, RideFindFirstOrThrowArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rides
     * const rides = await prisma.ride.findMany()
     * 
     * // Get first 10 Rides
     * const rides = await prisma.ride.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rideWithIdOnly = await prisma.ride.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RideFindManyArgs>(args?: SelectSubset<T, RideFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ride.
     * @param {RideCreateArgs} args - Arguments to create a Ride.
     * @example
     * // Create one Ride
     * const Ride = await prisma.ride.create({
     *   data: {
     *     // ... data to create a Ride
     *   }
     * })
     * 
     */
    create<T extends RideCreateArgs>(args: SelectSubset<T, RideCreateArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rides.
     * @param {RideCreateManyArgs} args - Arguments to create many Rides.
     * @example
     * // Create many Rides
     * const ride = await prisma.ride.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RideCreateManyArgs>(args?: SelectSubset<T, RideCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rides and returns the data saved in the database.
     * @param {RideCreateManyAndReturnArgs} args - Arguments to create many Rides.
     * @example
     * // Create many Rides
     * const ride = await prisma.ride.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rides and only return the `id`
     * const rideWithIdOnly = await prisma.ride.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RideCreateManyAndReturnArgs>(args?: SelectSubset<T, RideCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ride.
     * @param {RideDeleteArgs} args - Arguments to delete one Ride.
     * @example
     * // Delete one Ride
     * const Ride = await prisma.ride.delete({
     *   where: {
     *     // ... filter to delete one Ride
     *   }
     * })
     * 
     */
    delete<T extends RideDeleteArgs>(args: SelectSubset<T, RideDeleteArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ride.
     * @param {RideUpdateArgs} args - Arguments to update one Ride.
     * @example
     * // Update one Ride
     * const ride = await prisma.ride.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RideUpdateArgs>(args: SelectSubset<T, RideUpdateArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rides.
     * @param {RideDeleteManyArgs} args - Arguments to filter Rides to delete.
     * @example
     * // Delete a few Rides
     * const { count } = await prisma.ride.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RideDeleteManyArgs>(args?: SelectSubset<T, RideDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rides
     * const ride = await prisma.ride.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RideUpdateManyArgs>(args: SelectSubset<T, RideUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rides and returns the data updated in the database.
     * @param {RideUpdateManyAndReturnArgs} args - Arguments to update many Rides.
     * @example
     * // Update many Rides
     * const ride = await prisma.ride.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rides and only return the `id`
     * const rideWithIdOnly = await prisma.ride.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RideUpdateManyAndReturnArgs>(args: SelectSubset<T, RideUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ride.
     * @param {RideUpsertArgs} args - Arguments to update or create a Ride.
     * @example
     * // Update or create a Ride
     * const ride = await prisma.ride.upsert({
     *   create: {
     *     // ... data to create a Ride
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ride we want to update
     *   }
     * })
     */
    upsert<T extends RideUpsertArgs>(args: SelectSubset<T, RideUpsertArgs<ExtArgs>>): Prisma__RideClient<$Result.GetResult<Prisma.$RidePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideCountArgs} args - Arguments to filter Rides to count.
     * @example
     * // Count the number of Rides
     * const count = await prisma.ride.count({
     *   where: {
     *     // ... the filter for the Rides we want to count
     *   }
     * })
    **/
    count<T extends RideCountArgs>(
      args?: Subset<T, RideCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RideCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RideAggregateArgs>(args: Subset<T, RideAggregateArgs>): Prisma.PrismaPromise<GetRideAggregateType<T>>

    /**
     * Group by Ride.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RideGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RideGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RideGroupByArgs['orderBy'] }
        : { orderBy?: RideGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RideGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRideGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ride model
   */
  readonly fields: RideFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ride.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RideClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rider<T extends RiderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RiderDefaultArgs<ExtArgs>>): Prisma__RiderClient<$Result.GetResult<Prisma.$RiderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends Ride$driverArgs<ExtArgs> = {}>(args?: Subset<T, Ride$driverArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ride model
   */
  interface RideFieldRefs {
    readonly id: FieldRef<"Ride", 'Int'>
    readonly riderId: FieldRef<"Ride", 'Int'>
    readonly driverId: FieldRef<"Ride", 'Int'>
    readonly status: FieldRef<"Ride", 'String'>
    readonly pickUpLat: FieldRef<"Ride", 'Float'>
    readonly pickUpLong: FieldRef<"Ride", 'Float'>
    readonly dropOffLat: FieldRef<"Ride", 'Float'>
    readonly dropOffLong: FieldRef<"Ride", 'Float'>
    readonly createdAt: FieldRef<"Ride", 'DateTime'>
    readonly updatedAt: FieldRef<"Ride", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ride findUnique
   */
  export type RideFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride findUniqueOrThrow
   */
  export type RideFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride findFirst
   */
  export type RideFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rides.
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rides.
     */
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Ride findFirstOrThrow
   */
  export type RideFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Ride to fetch.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rides.
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rides.
     */
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Ride findMany
   */
  export type RideFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter, which Rides to fetch.
     */
    where?: RideWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rides to fetch.
     */
    orderBy?: RideOrderByWithRelationInput | RideOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rides.
     */
    cursor?: RideWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rides.
     */
    skip?: number
    distinct?: RideScalarFieldEnum | RideScalarFieldEnum[]
  }

  /**
   * Ride create
   */
  export type RideCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * The data needed to create a Ride.
     */
    data: XOR<RideCreateInput, RideUncheckedCreateInput>
  }

  /**
   * Ride createMany
   */
  export type RideCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rides.
     */
    data: RideCreateManyInput | RideCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ride createManyAndReturn
   */
  export type RideCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * The data used to create many Rides.
     */
    data: RideCreateManyInput | RideCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ride update
   */
  export type RideUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * The data needed to update a Ride.
     */
    data: XOR<RideUpdateInput, RideUncheckedUpdateInput>
    /**
     * Choose, which Ride to update.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride updateMany
   */
  export type RideUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rides.
     */
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyInput>
    /**
     * Filter which Rides to update
     */
    where?: RideWhereInput
    /**
     * Limit how many Rides to update.
     */
    limit?: number
  }

  /**
   * Ride updateManyAndReturn
   */
  export type RideUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * The data used to update Rides.
     */
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyInput>
    /**
     * Filter which Rides to update
     */
    where?: RideWhereInput
    /**
     * Limit how many Rides to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ride upsert
   */
  export type RideUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * The filter to search for the Ride to update in case it exists.
     */
    where: RideWhereUniqueInput
    /**
     * In case the Ride found by the `where` argument doesn't exist, create a new Ride with this data.
     */
    create: XOR<RideCreateInput, RideUncheckedCreateInput>
    /**
     * In case the Ride was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RideUpdateInput, RideUncheckedUpdateInput>
  }

  /**
   * Ride delete
   */
  export type RideDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
    /**
     * Filter which Ride to delete.
     */
    where: RideWhereUniqueInput
  }

  /**
   * Ride deleteMany
   */
  export type RideDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rides to delete
     */
    where?: RideWhereInput
    /**
     * Limit how many Rides to delete.
     */
    limit?: number
  }

  /**
   * Ride.driver
   */
  export type Ride$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
  }

  /**
   * Ride without action
   */
  export type RideDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ride
     */
    select?: RideSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ride
     */
    omit?: RideOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RideInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RiderScalarFieldEnum: {
    id: 'id',
    uid: 'uid',
    name: 'name',
    email: 'email',
    phone: 'phone',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RiderScalarFieldEnum = (typeof RiderScalarFieldEnum)[keyof typeof RiderScalarFieldEnum]


  export const DriverScalarFieldEnum: {
    id: 'id',
    uid: 'uid',
    name: 'name',
    email: 'email',
    phone: 'phone',
    licenseNumber: 'licenseNumber',
    vehicleNumber: 'vehicleNumber',
    vehicleType: 'vehicleType',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const RideScalarFieldEnum: {
    id: 'id',
    riderId: 'riderId',
    driverId: 'driverId',
    status: 'status',
    pickUpLat: 'pickUpLat',
    pickUpLong: 'pickUpLong',
    dropOffLat: 'dropOffLat',
    dropOffLong: 'dropOffLong',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RideScalarFieldEnum = (typeof RideScalarFieldEnum)[keyof typeof RideScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RiderWhereInput = {
    AND?: RiderWhereInput | RiderWhereInput[]
    OR?: RiderWhereInput[]
    NOT?: RiderWhereInput | RiderWhereInput[]
    id?: IntFilter<"Rider"> | number
    uid?: StringFilter<"Rider"> | string
    name?: StringFilter<"Rider"> | string
    email?: StringFilter<"Rider"> | string
    phone?: StringFilter<"Rider"> | string
    createdAt?: DateTimeFilter<"Rider"> | Date | string
    updatedAt?: DateTimeFilter<"Rider"> | Date | string
    Ride?: RideListRelationFilter
  }

  export type RiderOrderByWithRelationInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Ride?: RideOrderByRelationAggregateInput
  }

  export type RiderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uid?: string
    email?: string
    phone?: string
    AND?: RiderWhereInput | RiderWhereInput[]
    OR?: RiderWhereInput[]
    NOT?: RiderWhereInput | RiderWhereInput[]
    name?: StringFilter<"Rider"> | string
    createdAt?: DateTimeFilter<"Rider"> | Date | string
    updatedAt?: DateTimeFilter<"Rider"> | Date | string
    Ride?: RideListRelationFilter
  }, "id" | "uid" | "email" | "phone">

  export type RiderOrderByWithAggregationInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RiderCountOrderByAggregateInput
    _avg?: RiderAvgOrderByAggregateInput
    _max?: RiderMaxOrderByAggregateInput
    _min?: RiderMinOrderByAggregateInput
    _sum?: RiderSumOrderByAggregateInput
  }

  export type RiderScalarWhereWithAggregatesInput = {
    AND?: RiderScalarWhereWithAggregatesInput | RiderScalarWhereWithAggregatesInput[]
    OR?: RiderScalarWhereWithAggregatesInput[]
    NOT?: RiderScalarWhereWithAggregatesInput | RiderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rider"> | number
    uid?: StringWithAggregatesFilter<"Rider"> | string
    name?: StringWithAggregatesFilter<"Rider"> | string
    email?: StringWithAggregatesFilter<"Rider"> | string
    phone?: StringWithAggregatesFilter<"Rider"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Rider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rider"> | Date | string
  }

  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    id?: IntFilter<"Driver"> | number
    uid?: StringFilter<"Driver"> | string
    name?: StringFilter<"Driver"> | string
    email?: StringFilter<"Driver"> | string
    phone?: StringFilter<"Driver"> | string
    licenseNumber?: StringFilter<"Driver"> | string
    vehicleNumber?: StringFilter<"Driver"> | string
    vehicleType?: StringFilter<"Driver"> | string
    status?: StringFilter<"Driver"> | string
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    Ride?: RideListRelationFilter
  }

  export type DriverOrderByWithRelationInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    licenseNumber?: SortOrder
    vehicleNumber?: SortOrder
    vehicleType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Ride?: RideOrderByRelationAggregateInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uid?: string
    email?: string
    phone?: string
    licenseNumber?: string
    vehicleNumber?: string
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    name?: StringFilter<"Driver"> | string
    vehicleType?: StringFilter<"Driver"> | string
    status?: StringFilter<"Driver"> | string
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    Ride?: RideListRelationFilter
  }, "id" | "uid" | "email" | "phone" | "licenseNumber" | "vehicleNumber">

  export type DriverOrderByWithAggregationInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    licenseNumber?: SortOrder
    vehicleNumber?: SortOrder
    vehicleType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DriverCountOrderByAggregateInput
    _avg?: DriverAvgOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
    _sum?: DriverSumOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Driver"> | number
    uid?: StringWithAggregatesFilter<"Driver"> | string
    name?: StringWithAggregatesFilter<"Driver"> | string
    email?: StringWithAggregatesFilter<"Driver"> | string
    phone?: StringWithAggregatesFilter<"Driver"> | string
    licenseNumber?: StringWithAggregatesFilter<"Driver"> | string
    vehicleNumber?: StringWithAggregatesFilter<"Driver"> | string
    vehicleType?: StringWithAggregatesFilter<"Driver"> | string
    status?: StringWithAggregatesFilter<"Driver"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
  }

  export type RideWhereInput = {
    AND?: RideWhereInput | RideWhereInput[]
    OR?: RideWhereInput[]
    NOT?: RideWhereInput | RideWhereInput[]
    id?: IntFilter<"Ride"> | number
    riderId?: IntFilter<"Ride"> | number
    driverId?: IntNullableFilter<"Ride"> | number | null
    status?: StringFilter<"Ride"> | string
    pickUpLat?: FloatFilter<"Ride"> | number
    pickUpLong?: FloatFilter<"Ride"> | number
    dropOffLat?: FloatFilter<"Ride"> | number
    dropOffLong?: FloatFilter<"Ride"> | number
    createdAt?: DateTimeFilter<"Ride"> | Date | string
    updatedAt?: DateTimeFilter<"Ride"> | Date | string
    rider?: XOR<RiderScalarRelationFilter, RiderWhereInput>
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
  }

  export type RideOrderByWithRelationInput = {
    id?: SortOrder
    riderId?: SortOrder
    driverId?: SortOrderInput | SortOrder
    status?: SortOrder
    pickUpLat?: SortOrder
    pickUpLong?: SortOrder
    dropOffLat?: SortOrder
    dropOffLong?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rider?: RiderOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
  }

  export type RideWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RideWhereInput | RideWhereInput[]
    OR?: RideWhereInput[]
    NOT?: RideWhereInput | RideWhereInput[]
    riderId?: IntFilter<"Ride"> | number
    driverId?: IntNullableFilter<"Ride"> | number | null
    status?: StringFilter<"Ride"> | string
    pickUpLat?: FloatFilter<"Ride"> | number
    pickUpLong?: FloatFilter<"Ride"> | number
    dropOffLat?: FloatFilter<"Ride"> | number
    dropOffLong?: FloatFilter<"Ride"> | number
    createdAt?: DateTimeFilter<"Ride"> | Date | string
    updatedAt?: DateTimeFilter<"Ride"> | Date | string
    rider?: XOR<RiderScalarRelationFilter, RiderWhereInput>
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
  }, "id">

  export type RideOrderByWithAggregationInput = {
    id?: SortOrder
    riderId?: SortOrder
    driverId?: SortOrderInput | SortOrder
    status?: SortOrder
    pickUpLat?: SortOrder
    pickUpLong?: SortOrder
    dropOffLat?: SortOrder
    dropOffLong?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RideCountOrderByAggregateInput
    _avg?: RideAvgOrderByAggregateInput
    _max?: RideMaxOrderByAggregateInput
    _min?: RideMinOrderByAggregateInput
    _sum?: RideSumOrderByAggregateInput
  }

  export type RideScalarWhereWithAggregatesInput = {
    AND?: RideScalarWhereWithAggregatesInput | RideScalarWhereWithAggregatesInput[]
    OR?: RideScalarWhereWithAggregatesInput[]
    NOT?: RideScalarWhereWithAggregatesInput | RideScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ride"> | number
    riderId?: IntWithAggregatesFilter<"Ride"> | number
    driverId?: IntNullableWithAggregatesFilter<"Ride"> | number | null
    status?: StringWithAggregatesFilter<"Ride"> | string
    pickUpLat?: FloatWithAggregatesFilter<"Ride"> | number
    pickUpLong?: FloatWithAggregatesFilter<"Ride"> | number
    dropOffLat?: FloatWithAggregatesFilter<"Ride"> | number
    dropOffLong?: FloatWithAggregatesFilter<"Ride"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Ride"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ride"> | Date | string
  }

  export type RiderCreateInput = {
    uid: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Ride?: RideCreateNestedManyWithoutRiderInput
  }

  export type RiderUncheckedCreateInput = {
    id?: number
    uid: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Ride?: RideUncheckedCreateNestedManyWithoutRiderInput
  }

  export type RiderUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ride?: RideUpdateManyWithoutRiderNestedInput
  }

  export type RiderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ride?: RideUncheckedUpdateManyWithoutRiderNestedInput
  }

  export type RiderCreateManyInput = {
    id?: number
    uid: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiderUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverCreateInput = {
    uid: string
    name: string
    email: string
    phone: string
    licenseNumber: string
    vehicleNumber: string
    vehicleType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Ride?: RideCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateInput = {
    id?: number
    uid: string
    name: string
    email: string
    phone: string
    licenseNumber: string
    vehicleNumber: string
    vehicleType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Ride?: RideUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverUpdateInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    vehicleNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ride?: RideUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    vehicleNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Ride?: RideUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateManyInput = {
    id?: number
    uid: string
    name: string
    email: string
    phone: string
    licenseNumber: string
    vehicleNumber: string
    vehicleType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverUpdateManyMutationInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    vehicleNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    vehicleNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCreateInput = {
    status?: string
    pickUpLat: number
    pickUpLong: number
    dropOffLat: number
    dropOffLong: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rider: RiderCreateNestedOneWithoutRideInput
    driver?: DriverCreateNestedOneWithoutRideInput
  }

  export type RideUncheckedCreateInput = {
    id?: number
    riderId: number
    driverId?: number | null
    status?: string
    pickUpLat: number
    pickUpLong: number
    dropOffLat: number
    dropOffLong: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    pickUpLat?: FloatFieldUpdateOperationsInput | number
    pickUpLong?: FloatFieldUpdateOperationsInput | number
    dropOffLat?: FloatFieldUpdateOperationsInput | number
    dropOffLong?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneRequiredWithoutRideNestedInput
    driver?: DriverUpdateOneWithoutRideNestedInput
  }

  export type RideUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    riderId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    pickUpLat?: FloatFieldUpdateOperationsInput | number
    pickUpLong?: FloatFieldUpdateOperationsInput | number
    dropOffLat?: FloatFieldUpdateOperationsInput | number
    dropOffLong?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCreateManyInput = {
    id?: number
    riderId: number
    driverId?: number | null
    status?: string
    pickUpLat: number
    pickUpLong: number
    dropOffLat: number
    dropOffLong: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    pickUpLat?: FloatFieldUpdateOperationsInput | number
    pickUpLong?: FloatFieldUpdateOperationsInput | number
    dropOffLat?: FloatFieldUpdateOperationsInput | number
    dropOffLong?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    riderId?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    pickUpLat?: FloatFieldUpdateOperationsInput | number
    pickUpLong?: FloatFieldUpdateOperationsInput | number
    dropOffLat?: FloatFieldUpdateOperationsInput | number
    dropOffLong?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RideListRelationFilter = {
    every?: RideWhereInput
    some?: RideWhereInput
    none?: RideWhereInput
  }

  export type RideOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RiderCountOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiderAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RiderMaxOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiderMinOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RiderSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DriverCountOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    licenseNumber?: SortOrder
    vehicleNumber?: SortOrder
    vehicleType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    licenseNumber?: SortOrder
    vehicleNumber?: SortOrder
    vehicleType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    id?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    licenseNumber?: SortOrder
    vehicleNumber?: SortOrder
    vehicleType?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type RiderScalarRelationFilter = {
    is?: RiderWhereInput
    isNot?: RiderWhereInput
  }

  export type DriverNullableScalarRelationFilter = {
    is?: DriverWhereInput | null
    isNot?: DriverWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RideCountOrderByAggregateInput = {
    id?: SortOrder
    riderId?: SortOrder
    driverId?: SortOrder
    status?: SortOrder
    pickUpLat?: SortOrder
    pickUpLong?: SortOrder
    dropOffLat?: SortOrder
    dropOffLong?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RideAvgOrderByAggregateInput = {
    id?: SortOrder
    riderId?: SortOrder
    driverId?: SortOrder
    pickUpLat?: SortOrder
    pickUpLong?: SortOrder
    dropOffLat?: SortOrder
    dropOffLong?: SortOrder
  }

  export type RideMaxOrderByAggregateInput = {
    id?: SortOrder
    riderId?: SortOrder
    driverId?: SortOrder
    status?: SortOrder
    pickUpLat?: SortOrder
    pickUpLong?: SortOrder
    dropOffLat?: SortOrder
    dropOffLong?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RideMinOrderByAggregateInput = {
    id?: SortOrder
    riderId?: SortOrder
    driverId?: SortOrder
    status?: SortOrder
    pickUpLat?: SortOrder
    pickUpLong?: SortOrder
    dropOffLat?: SortOrder
    dropOffLong?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RideSumOrderByAggregateInput = {
    id?: SortOrder
    riderId?: SortOrder
    driverId?: SortOrder
    pickUpLat?: SortOrder
    pickUpLong?: SortOrder
    dropOffLat?: SortOrder
    dropOffLong?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RideCreateNestedManyWithoutRiderInput = {
    create?: XOR<RideCreateWithoutRiderInput, RideUncheckedCreateWithoutRiderInput> | RideCreateWithoutRiderInput[] | RideUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: RideCreateOrConnectWithoutRiderInput | RideCreateOrConnectWithoutRiderInput[]
    createMany?: RideCreateManyRiderInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
  }

  export type RideUncheckedCreateNestedManyWithoutRiderInput = {
    create?: XOR<RideCreateWithoutRiderInput, RideUncheckedCreateWithoutRiderInput> | RideCreateWithoutRiderInput[] | RideUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: RideCreateOrConnectWithoutRiderInput | RideCreateOrConnectWithoutRiderInput[]
    createMany?: RideCreateManyRiderInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RideUpdateManyWithoutRiderNestedInput = {
    create?: XOR<RideCreateWithoutRiderInput, RideUncheckedCreateWithoutRiderInput> | RideCreateWithoutRiderInput[] | RideUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: RideCreateOrConnectWithoutRiderInput | RideCreateOrConnectWithoutRiderInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutRiderInput | RideUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: RideCreateManyRiderInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutRiderInput | RideUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: RideUpdateManyWithWhereWithoutRiderInput | RideUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RideUncheckedUpdateManyWithoutRiderNestedInput = {
    create?: XOR<RideCreateWithoutRiderInput, RideUncheckedCreateWithoutRiderInput> | RideCreateWithoutRiderInput[] | RideUncheckedCreateWithoutRiderInput[]
    connectOrCreate?: RideCreateOrConnectWithoutRiderInput | RideCreateOrConnectWithoutRiderInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutRiderInput | RideUpsertWithWhereUniqueWithoutRiderInput[]
    createMany?: RideCreateManyRiderInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutRiderInput | RideUpdateWithWhereUniqueWithoutRiderInput[]
    updateMany?: RideUpdateManyWithWhereWithoutRiderInput | RideUpdateManyWithWhereWithoutRiderInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type RideCreateNestedManyWithoutDriverInput = {
    create?: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput> | RideCreateWithoutDriverInput[] | RideUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RideCreateOrConnectWithoutDriverInput | RideCreateOrConnectWithoutDriverInput[]
    createMany?: RideCreateManyDriverInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
  }

  export type RideUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput> | RideCreateWithoutDriverInput[] | RideUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RideCreateOrConnectWithoutDriverInput | RideCreateOrConnectWithoutDriverInput[]
    createMany?: RideCreateManyDriverInputEnvelope
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
  }

  export type RideUpdateManyWithoutDriverNestedInput = {
    create?: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput> | RideCreateWithoutDriverInput[] | RideUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RideCreateOrConnectWithoutDriverInput | RideCreateOrConnectWithoutDriverInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutDriverInput | RideUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: RideCreateManyDriverInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutDriverInput | RideUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: RideUpdateManyWithWhereWithoutDriverInput | RideUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type RideUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput> | RideCreateWithoutDriverInput[] | RideUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: RideCreateOrConnectWithoutDriverInput | RideCreateOrConnectWithoutDriverInput[]
    upsert?: RideUpsertWithWhereUniqueWithoutDriverInput | RideUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: RideCreateManyDriverInputEnvelope
    set?: RideWhereUniqueInput | RideWhereUniqueInput[]
    disconnect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    delete?: RideWhereUniqueInput | RideWhereUniqueInput[]
    connect?: RideWhereUniqueInput | RideWhereUniqueInput[]
    update?: RideUpdateWithWhereUniqueWithoutDriverInput | RideUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: RideUpdateManyWithWhereWithoutDriverInput | RideUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: RideScalarWhereInput | RideScalarWhereInput[]
  }

  export type RiderCreateNestedOneWithoutRideInput = {
    create?: XOR<RiderCreateWithoutRideInput, RiderUncheckedCreateWithoutRideInput>
    connectOrCreate?: RiderCreateOrConnectWithoutRideInput
    connect?: RiderWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutRideInput = {
    create?: XOR<DriverCreateWithoutRideInput, DriverUncheckedCreateWithoutRideInput>
    connectOrCreate?: DriverCreateOrConnectWithoutRideInput
    connect?: DriverWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type RiderUpdateOneRequiredWithoutRideNestedInput = {
    create?: XOR<RiderCreateWithoutRideInput, RiderUncheckedCreateWithoutRideInput>
    connectOrCreate?: RiderCreateOrConnectWithoutRideInput
    upsert?: RiderUpsertWithoutRideInput
    connect?: RiderWhereUniqueInput
    update?: XOR<XOR<RiderUpdateToOneWithWhereWithoutRideInput, RiderUpdateWithoutRideInput>, RiderUncheckedUpdateWithoutRideInput>
  }

  export type DriverUpdateOneWithoutRideNestedInput = {
    create?: XOR<DriverCreateWithoutRideInput, DriverUncheckedCreateWithoutRideInput>
    connectOrCreate?: DriverCreateOrConnectWithoutRideInput
    upsert?: DriverUpsertWithoutRideInput
    disconnect?: DriverWhereInput | boolean
    delete?: DriverWhereInput | boolean
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutRideInput, DriverUpdateWithoutRideInput>, DriverUncheckedUpdateWithoutRideInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type RideCreateWithoutRiderInput = {
    status?: string
    pickUpLat: number
    pickUpLong: number
    dropOffLat: number
    dropOffLong: number
    createdAt?: Date | string
    updatedAt?: Date | string
    driver?: DriverCreateNestedOneWithoutRideInput
  }

  export type RideUncheckedCreateWithoutRiderInput = {
    id?: number
    driverId?: number | null
    status?: string
    pickUpLat: number
    pickUpLong: number
    dropOffLat: number
    dropOffLong: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideCreateOrConnectWithoutRiderInput = {
    where: RideWhereUniqueInput
    create: XOR<RideCreateWithoutRiderInput, RideUncheckedCreateWithoutRiderInput>
  }

  export type RideCreateManyRiderInputEnvelope = {
    data: RideCreateManyRiderInput | RideCreateManyRiderInput[]
    skipDuplicates?: boolean
  }

  export type RideUpsertWithWhereUniqueWithoutRiderInput = {
    where: RideWhereUniqueInput
    update: XOR<RideUpdateWithoutRiderInput, RideUncheckedUpdateWithoutRiderInput>
    create: XOR<RideCreateWithoutRiderInput, RideUncheckedCreateWithoutRiderInput>
  }

  export type RideUpdateWithWhereUniqueWithoutRiderInput = {
    where: RideWhereUniqueInput
    data: XOR<RideUpdateWithoutRiderInput, RideUncheckedUpdateWithoutRiderInput>
  }

  export type RideUpdateManyWithWhereWithoutRiderInput = {
    where: RideScalarWhereInput
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyWithoutRiderInput>
  }

  export type RideScalarWhereInput = {
    AND?: RideScalarWhereInput | RideScalarWhereInput[]
    OR?: RideScalarWhereInput[]
    NOT?: RideScalarWhereInput | RideScalarWhereInput[]
    id?: IntFilter<"Ride"> | number
    riderId?: IntFilter<"Ride"> | number
    driverId?: IntNullableFilter<"Ride"> | number | null
    status?: StringFilter<"Ride"> | string
    pickUpLat?: FloatFilter<"Ride"> | number
    pickUpLong?: FloatFilter<"Ride"> | number
    dropOffLat?: FloatFilter<"Ride"> | number
    dropOffLong?: FloatFilter<"Ride"> | number
    createdAt?: DateTimeFilter<"Ride"> | Date | string
    updatedAt?: DateTimeFilter<"Ride"> | Date | string
  }

  export type RideCreateWithoutDriverInput = {
    status?: string
    pickUpLat: number
    pickUpLong: number
    dropOffLat: number
    dropOffLong: number
    createdAt?: Date | string
    updatedAt?: Date | string
    rider: RiderCreateNestedOneWithoutRideInput
  }

  export type RideUncheckedCreateWithoutDriverInput = {
    id?: number
    riderId: number
    status?: string
    pickUpLat: number
    pickUpLong: number
    dropOffLat: number
    dropOffLong: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideCreateOrConnectWithoutDriverInput = {
    where: RideWhereUniqueInput
    create: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput>
  }

  export type RideCreateManyDriverInputEnvelope = {
    data: RideCreateManyDriverInput | RideCreateManyDriverInput[]
    skipDuplicates?: boolean
  }

  export type RideUpsertWithWhereUniqueWithoutDriverInput = {
    where: RideWhereUniqueInput
    update: XOR<RideUpdateWithoutDriverInput, RideUncheckedUpdateWithoutDriverInput>
    create: XOR<RideCreateWithoutDriverInput, RideUncheckedCreateWithoutDriverInput>
  }

  export type RideUpdateWithWhereUniqueWithoutDriverInput = {
    where: RideWhereUniqueInput
    data: XOR<RideUpdateWithoutDriverInput, RideUncheckedUpdateWithoutDriverInput>
  }

  export type RideUpdateManyWithWhereWithoutDriverInput = {
    where: RideScalarWhereInput
    data: XOR<RideUpdateManyMutationInput, RideUncheckedUpdateManyWithoutDriverInput>
  }

  export type RiderCreateWithoutRideInput = {
    uid: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiderUncheckedCreateWithoutRideInput = {
    id?: number
    uid: string
    name: string
    email: string
    phone: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RiderCreateOrConnectWithoutRideInput = {
    where: RiderWhereUniqueInput
    create: XOR<RiderCreateWithoutRideInput, RiderUncheckedCreateWithoutRideInput>
  }

  export type DriverCreateWithoutRideInput = {
    uid: string
    name: string
    email: string
    phone: string
    licenseNumber: string
    vehicleNumber: string
    vehicleType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverUncheckedCreateWithoutRideInput = {
    id?: number
    uid: string
    name: string
    email: string
    phone: string
    licenseNumber: string
    vehicleNumber: string
    vehicleType: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverCreateOrConnectWithoutRideInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutRideInput, DriverUncheckedCreateWithoutRideInput>
  }

  export type RiderUpsertWithoutRideInput = {
    update: XOR<RiderUpdateWithoutRideInput, RiderUncheckedUpdateWithoutRideInput>
    create: XOR<RiderCreateWithoutRideInput, RiderUncheckedCreateWithoutRideInput>
    where?: RiderWhereInput
  }

  export type RiderUpdateToOneWithWhereWithoutRideInput = {
    where?: RiderWhereInput
    data: XOR<RiderUpdateWithoutRideInput, RiderUncheckedUpdateWithoutRideInput>
  }

  export type RiderUpdateWithoutRideInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RiderUncheckedUpdateWithoutRideInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUpsertWithoutRideInput = {
    update: XOR<DriverUpdateWithoutRideInput, DriverUncheckedUpdateWithoutRideInput>
    create: XOR<DriverCreateWithoutRideInput, DriverUncheckedCreateWithoutRideInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutRideInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutRideInput, DriverUncheckedUpdateWithoutRideInput>
  }

  export type DriverUpdateWithoutRideInput = {
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    vehicleNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateWithoutRideInput = {
    id?: IntFieldUpdateOperationsInput | number
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    vehicleNumber?: StringFieldUpdateOperationsInput | string
    vehicleType?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCreateManyRiderInput = {
    id?: number
    driverId?: number | null
    status?: string
    pickUpLat: number
    pickUpLong: number
    dropOffLat: number
    dropOffLong: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideUpdateWithoutRiderInput = {
    status?: StringFieldUpdateOperationsInput | string
    pickUpLat?: FloatFieldUpdateOperationsInput | number
    pickUpLong?: FloatFieldUpdateOperationsInput | number
    dropOffLat?: FloatFieldUpdateOperationsInput | number
    dropOffLong?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneWithoutRideNestedInput
  }

  export type RideUncheckedUpdateWithoutRiderInput = {
    id?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    pickUpLat?: FloatFieldUpdateOperationsInput | number
    pickUpLong?: FloatFieldUpdateOperationsInput | number
    dropOffLat?: FloatFieldUpdateOperationsInput | number
    dropOffLong?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideUncheckedUpdateManyWithoutRiderInput = {
    id?: IntFieldUpdateOperationsInput | number
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    pickUpLat?: FloatFieldUpdateOperationsInput | number
    pickUpLong?: FloatFieldUpdateOperationsInput | number
    dropOffLat?: FloatFieldUpdateOperationsInput | number
    dropOffLong?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideCreateManyDriverInput = {
    id?: number
    riderId: number
    status?: string
    pickUpLat: number
    pickUpLong: number
    dropOffLat: number
    dropOffLong: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RideUpdateWithoutDriverInput = {
    status?: StringFieldUpdateOperationsInput | string
    pickUpLat?: FloatFieldUpdateOperationsInput | number
    pickUpLong?: FloatFieldUpdateOperationsInput | number
    dropOffLat?: FloatFieldUpdateOperationsInput | number
    dropOffLong?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rider?: RiderUpdateOneRequiredWithoutRideNestedInput
  }

  export type RideUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    riderId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    pickUpLat?: FloatFieldUpdateOperationsInput | number
    pickUpLong?: FloatFieldUpdateOperationsInput | number
    dropOffLat?: FloatFieldUpdateOperationsInput | number
    dropOffLong?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RideUncheckedUpdateManyWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    riderId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    pickUpLat?: FloatFieldUpdateOperationsInput | number
    pickUpLong?: FloatFieldUpdateOperationsInput | number
    dropOffLat?: FloatFieldUpdateOperationsInput | number
    dropOffLong?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}