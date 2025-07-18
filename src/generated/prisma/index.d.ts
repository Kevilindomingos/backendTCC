
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model List
 * 
 */
export type List = $Result.DefaultSelection<Prisma.$ListPayload>
/**
 * Model DailyList
 * 
 */
export type DailyList = $Result.DefaultSelection<Prisma.$DailyListPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.list`: Exposes CRUD operations for the **List** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lists
    * const lists = await prisma.list.findMany()
    * ```
    */
  get list(): Prisma.ListDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dailyList`: Exposes CRUD operations for the **DailyList** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyLists
    * const dailyLists = await prisma.dailyList.findMany()
    * ```
    */
  get dailyList(): Prisma.DailyListDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    User: 'User',
    List: 'List',
    DailyList: 'DailyList'
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
      modelProps: "user" | "list" | "dailyList"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      List: {
        payload: Prisma.$ListPayload<ExtArgs>
        fields: Prisma.ListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          findFirst: {
            args: Prisma.ListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          findMany: {
            args: Prisma.ListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          create: {
            args: Prisma.ListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          createMany: {
            args: Prisma.ListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          delete: {
            args: Prisma.ListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          update: {
            args: Prisma.ListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          deleteMany: {
            args: Prisma.ListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>[]
          }
          upsert: {
            args: Prisma.ListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ListPayload>
          }
          aggregate: {
            args: Prisma.ListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateList>
          }
          groupBy: {
            args: Prisma.ListGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListGroupByOutputType>[]
          }
          count: {
            args: Prisma.ListCountArgs<ExtArgs>
            result: $Utils.Optional<ListCountAggregateOutputType> | number
          }
        }
      }
      DailyList: {
        payload: Prisma.$DailyListPayload<ExtArgs>
        fields: Prisma.DailyListFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyListFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyListPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyListFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyListPayload>
          }
          findFirst: {
            args: Prisma.DailyListFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyListPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyListFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyListPayload>
          }
          findMany: {
            args: Prisma.DailyListFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyListPayload>[]
          }
          create: {
            args: Prisma.DailyListCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyListPayload>
          }
          createMany: {
            args: Prisma.DailyListCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyListCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyListPayload>[]
          }
          delete: {
            args: Prisma.DailyListDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyListPayload>
          }
          update: {
            args: Prisma.DailyListUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyListPayload>
          }
          deleteMany: {
            args: Prisma.DailyListDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyListUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DailyListUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyListPayload>[]
          }
          upsert: {
            args: Prisma.DailyListUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyListPayload>
          }
          aggregate: {
            args: Prisma.DailyListAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyList>
          }
          groupBy: {
            args: Prisma.DailyListGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyListGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyListCountArgs<ExtArgs>
            result: $Utils.Optional<DailyListCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    user?: UserOmit
    list?: ListOmit
    dailyList?: DailyListOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type ListCountOutputType
   */

  export type ListCountOutputType = {
    DailyLists: number
  }

  export type ListCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DailyLists?: boolean | ListCountOutputTypeCountDailyListsArgs
  }

  // Custom InputTypes
  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListCountOutputType
     */
    select?: ListCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListCountOutputType without action
   */
  export type ListCountOutputTypeCountDailyListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyListWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    type: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    type: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    type: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    type?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    type?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    type?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    type: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    type?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    type?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    type?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    type?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "type", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      type: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly type: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model List
   */

  export type AggregateList = {
    _count: ListCountAggregateOutputType | null
    _avg: ListAvgAggregateOutputType | null
    _sum: ListSumAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  export type ListAvgAggregateOutputType = {
    id: number | null
    roomNumber: number | null
  }

  export type ListSumAggregateOutputType = {
    id: number | null
    roomNumber: number | null
  }

  export type ListMinAggregateOutputType = {
    id: number | null
    name: string | null
    bornAge: string | null
    image: string | null
    roomNumber: number | null
    caregiverName: string | null
    especialConditions: string | null
  }

  export type ListMaxAggregateOutputType = {
    id: number | null
    name: string | null
    bornAge: string | null
    image: string | null
    roomNumber: number | null
    caregiverName: string | null
    especialConditions: string | null
  }

  export type ListCountAggregateOutputType = {
    id: number
    name: number
    bornAge: number
    image: number
    roomNumber: number
    caregiverName: number
    especialConditions: number
    _all: number
  }


  export type ListAvgAggregateInputType = {
    id?: true
    roomNumber?: true
  }

  export type ListSumAggregateInputType = {
    id?: true
    roomNumber?: true
  }

  export type ListMinAggregateInputType = {
    id?: true
    name?: true
    bornAge?: true
    image?: true
    roomNumber?: true
    caregiverName?: true
    especialConditions?: true
  }

  export type ListMaxAggregateInputType = {
    id?: true
    name?: true
    bornAge?: true
    image?: true
    roomNumber?: true
    caregiverName?: true
    especialConditions?: true
  }

  export type ListCountAggregateInputType = {
    id?: true
    name?: true
    bornAge?: true
    image?: true
    roomNumber?: true
    caregiverName?: true
    especialConditions?: true
    _all?: true
  }

  export type ListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which List to aggregate.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lists
    **/
    _count?: true | ListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListMaxAggregateInputType
  }

  export type GetListAggregateType<T extends ListAggregateArgs> = {
        [P in keyof T & keyof AggregateList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateList[P]>
      : GetScalarType<T[P], AggregateList[P]>
  }




  export type ListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ListWhereInput
    orderBy?: ListOrderByWithAggregationInput | ListOrderByWithAggregationInput[]
    by: ListScalarFieldEnum[] | ListScalarFieldEnum
    having?: ListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListCountAggregateInputType | true
    _avg?: ListAvgAggregateInputType
    _sum?: ListSumAggregateInputType
    _min?: ListMinAggregateInputType
    _max?: ListMaxAggregateInputType
  }

  export type ListGroupByOutputType = {
    id: number
    name: string
    bornAge: string
    image: string
    roomNumber: number
    caregiverName: string
    especialConditions: string
    _count: ListCountAggregateOutputType | null
    _avg: ListAvgAggregateOutputType | null
    _sum: ListSumAggregateOutputType | null
    _min: ListMinAggregateOutputType | null
    _max: ListMaxAggregateOutputType | null
  }

  type GetListGroupByPayload<T extends ListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListGroupByOutputType[P]>
            : GetScalarType<T[P], ListGroupByOutputType[P]>
        }
      >
    >


  export type ListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bornAge?: boolean
    image?: boolean
    roomNumber?: boolean
    caregiverName?: boolean
    especialConditions?: boolean
    DailyLists?: boolean | List$DailyListsArgs<ExtArgs>
    _count?: boolean | ListCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["list"]>

  export type ListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bornAge?: boolean
    image?: boolean
    roomNumber?: boolean
    caregiverName?: boolean
    especialConditions?: boolean
  }, ExtArgs["result"]["list"]>

  export type ListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bornAge?: boolean
    image?: boolean
    roomNumber?: boolean
    caregiverName?: boolean
    especialConditions?: boolean
  }, ExtArgs["result"]["list"]>

  export type ListSelectScalar = {
    id?: boolean
    name?: boolean
    bornAge?: boolean
    image?: boolean
    roomNumber?: boolean
    caregiverName?: boolean
    especialConditions?: boolean
  }

  export type ListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "bornAge" | "image" | "roomNumber" | "caregiverName" | "especialConditions", ExtArgs["result"]["list"]>
  export type ListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    DailyLists?: boolean | List$DailyListsArgs<ExtArgs>
    _count?: boolean | ListCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "List"
    objects: {
      DailyLists: Prisma.$DailyListPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      bornAge: string
      image: string
      roomNumber: number
      caregiverName: string
      especialConditions: string
    }, ExtArgs["result"]["list"]>
    composites: {}
  }

  type ListGetPayload<S extends boolean | null | undefined | ListDefaultArgs> = $Result.GetResult<Prisma.$ListPayload, S>

  type ListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ListCountAggregateInputType | true
    }

  export interface ListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['List'], meta: { name: 'List' } }
    /**
     * Find zero or one List that matches the filter.
     * @param {ListFindUniqueArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ListFindUniqueArgs>(args: SelectSubset<T, ListFindUniqueArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one List that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ListFindUniqueOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ListFindUniqueOrThrowArgs>(args: SelectSubset<T, ListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first List that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ListFindFirstArgs>(args?: SelectSubset<T, ListFindFirstArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first List that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindFirstOrThrowArgs} args - Arguments to find a List
     * @example
     * // Get one List
     * const list = await prisma.list.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ListFindFirstOrThrowArgs>(args?: SelectSubset<T, ListFindFirstOrThrowArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lists
     * const lists = await prisma.list.findMany()
     * 
     * // Get first 10 Lists
     * const lists = await prisma.list.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listWithIdOnly = await prisma.list.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ListFindManyArgs>(args?: SelectSubset<T, ListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a List.
     * @param {ListCreateArgs} args - Arguments to create a List.
     * @example
     * // Create one List
     * const List = await prisma.list.create({
     *   data: {
     *     // ... data to create a List
     *   }
     * })
     * 
     */
    create<T extends ListCreateArgs>(args: SelectSubset<T, ListCreateArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lists.
     * @param {ListCreateManyArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const list = await prisma.list.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ListCreateManyArgs>(args?: SelectSubset<T, ListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lists and returns the data saved in the database.
     * @param {ListCreateManyAndReturnArgs} args - Arguments to create many Lists.
     * @example
     * // Create many Lists
     * const list = await prisma.list.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lists and only return the `id`
     * const listWithIdOnly = await prisma.list.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ListCreateManyAndReturnArgs>(args?: SelectSubset<T, ListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a List.
     * @param {ListDeleteArgs} args - Arguments to delete one List.
     * @example
     * // Delete one List
     * const List = await prisma.list.delete({
     *   where: {
     *     // ... filter to delete one List
     *   }
     * })
     * 
     */
    delete<T extends ListDeleteArgs>(args: SelectSubset<T, ListDeleteArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one List.
     * @param {ListUpdateArgs} args - Arguments to update one List.
     * @example
     * // Update one List
     * const list = await prisma.list.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ListUpdateArgs>(args: SelectSubset<T, ListUpdateArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lists.
     * @param {ListDeleteManyArgs} args - Arguments to filter Lists to delete.
     * @example
     * // Delete a few Lists
     * const { count } = await prisma.list.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ListDeleteManyArgs>(args?: SelectSubset<T, ListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lists
     * const list = await prisma.list.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ListUpdateManyArgs>(args: SelectSubset<T, ListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lists and returns the data updated in the database.
     * @param {ListUpdateManyAndReturnArgs} args - Arguments to update many Lists.
     * @example
     * // Update many Lists
     * const list = await prisma.list.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lists and only return the `id`
     * const listWithIdOnly = await prisma.list.updateManyAndReturn({
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
    updateManyAndReturn<T extends ListUpdateManyAndReturnArgs>(args: SelectSubset<T, ListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one List.
     * @param {ListUpsertArgs} args - Arguments to update or create a List.
     * @example
     * // Update or create a List
     * const list = await prisma.list.upsert({
     *   create: {
     *     // ... data to create a List
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the List we want to update
     *   }
     * })
     */
    upsert<T extends ListUpsertArgs>(args: SelectSubset<T, ListUpsertArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListCountArgs} args - Arguments to filter Lists to count.
     * @example
     * // Count the number of Lists
     * const count = await prisma.list.count({
     *   where: {
     *     // ... the filter for the Lists we want to count
     *   }
     * })
    **/
    count<T extends ListCountArgs>(
      args?: Subset<T, ListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ListAggregateArgs>(args: Subset<T, ListAggregateArgs>): Prisma.PrismaPromise<GetListAggregateType<T>>

    /**
     * Group by List.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListGroupByArgs} args - Group by arguments.
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
      T extends ListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ListGroupByArgs['orderBy'] }
        : { orderBy?: ListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the List model
   */
  readonly fields: ListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for List.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    DailyLists<T extends List$DailyListsArgs<ExtArgs> = {}>(args?: Subset<T, List$DailyListsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the List model
   */
  interface ListFieldRefs {
    readonly id: FieldRef<"List", 'Int'>
    readonly name: FieldRef<"List", 'String'>
    readonly bornAge: FieldRef<"List", 'String'>
    readonly image: FieldRef<"List", 'String'>
    readonly roomNumber: FieldRef<"List", 'Int'>
    readonly caregiverName: FieldRef<"List", 'String'>
    readonly especialConditions: FieldRef<"List", 'String'>
  }
    

  // Custom InputTypes
  /**
   * List findUnique
   */
  export type ListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List findUniqueOrThrow
   */
  export type ListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List findFirst
   */
  export type ListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List findFirstOrThrow
   */
  export type ListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which List to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lists.
     */
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List findMany
   */
  export type ListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter, which Lists to fetch.
     */
    where?: ListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lists to fetch.
     */
    orderBy?: ListOrderByWithRelationInput | ListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lists.
     */
    cursor?: ListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lists.
     */
    skip?: number
    distinct?: ListScalarFieldEnum | ListScalarFieldEnum[]
  }

  /**
   * List create
   */
  export type ListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The data needed to create a List.
     */
    data: XOR<ListCreateInput, ListUncheckedCreateInput>
  }

  /**
   * List createMany
   */
  export type ListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lists.
     */
    data: ListCreateManyInput | ListCreateManyInput[]
  }

  /**
   * List createManyAndReturn
   */
  export type ListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * The data used to create many Lists.
     */
    data: ListCreateManyInput | ListCreateManyInput[]
  }

  /**
   * List update
   */
  export type ListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The data needed to update a List.
     */
    data: XOR<ListUpdateInput, ListUncheckedUpdateInput>
    /**
     * Choose, which List to update.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List updateMany
   */
  export type ListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lists.
     */
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to update.
     */
    limit?: number
  }

  /**
   * List updateManyAndReturn
   */
  export type ListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * The data used to update Lists.
     */
    data: XOR<ListUpdateManyMutationInput, ListUncheckedUpdateManyInput>
    /**
     * Filter which Lists to update
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to update.
     */
    limit?: number
  }

  /**
   * List upsert
   */
  export type ListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * The filter to search for the List to update in case it exists.
     */
    where: ListWhereUniqueInput
    /**
     * In case the List found by the `where` argument doesn't exist, create a new List with this data.
     */
    create: XOR<ListCreateInput, ListUncheckedCreateInput>
    /**
     * In case the List was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ListUpdateInput, ListUncheckedUpdateInput>
  }

  /**
   * List delete
   */
  export type ListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
    /**
     * Filter which List to delete.
     */
    where: ListWhereUniqueInput
  }

  /**
   * List deleteMany
   */
  export type ListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lists to delete
     */
    where?: ListWhereInput
    /**
     * Limit how many Lists to delete.
     */
    limit?: number
  }

  /**
   * List.DailyLists
   */
  export type List$DailyListsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyList
     */
    select?: DailyListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyList
     */
    omit?: DailyListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyListInclude<ExtArgs> | null
    where?: DailyListWhereInput
    orderBy?: DailyListOrderByWithRelationInput | DailyListOrderByWithRelationInput[]
    cursor?: DailyListWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyListScalarFieldEnum | DailyListScalarFieldEnum[]
  }

  /**
   * List without action
   */
  export type ListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the List
     */
    select?: ListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the List
     */
    omit?: ListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ListInclude<ExtArgs> | null
  }


  /**
   * Model DailyList
   */

  export type AggregateDailyList = {
    _count: DailyListCountAggregateOutputType | null
    _avg: DailyListAvgAggregateOutputType | null
    _sum: DailyListSumAggregateOutputType | null
    _min: DailyListMinAggregateOutputType | null
    _max: DailyListMaxAggregateOutputType | null
  }

  export type DailyListAvgAggregateOutputType = {
    id: number | null
    listId: number | null
  }

  export type DailyListSumAggregateOutputType = {
    id: number | null
    listId: number | null
  }

  export type DailyListMinAggregateOutputType = {
    id: number | null
    horaRefeicao: string | null
    medicamentos: string | null
    atvRealizadas: string | null
    humorGeral: string | null
    higienePessoal: string | null
    listId: number | null
  }

  export type DailyListMaxAggregateOutputType = {
    id: number | null
    horaRefeicao: string | null
    medicamentos: string | null
    atvRealizadas: string | null
    humorGeral: string | null
    higienePessoal: string | null
    listId: number | null
  }

  export type DailyListCountAggregateOutputType = {
    id: number
    horaRefeicao: number
    medicamentos: number
    atvRealizadas: number
    humorGeral: number
    higienePessoal: number
    listId: number
    _all: number
  }


  export type DailyListAvgAggregateInputType = {
    id?: true
    listId?: true
  }

  export type DailyListSumAggregateInputType = {
    id?: true
    listId?: true
  }

  export type DailyListMinAggregateInputType = {
    id?: true
    horaRefeicao?: true
    medicamentos?: true
    atvRealizadas?: true
    humorGeral?: true
    higienePessoal?: true
    listId?: true
  }

  export type DailyListMaxAggregateInputType = {
    id?: true
    horaRefeicao?: true
    medicamentos?: true
    atvRealizadas?: true
    humorGeral?: true
    higienePessoal?: true
    listId?: true
  }

  export type DailyListCountAggregateInputType = {
    id?: true
    horaRefeicao?: true
    medicamentos?: true
    atvRealizadas?: true
    humorGeral?: true
    higienePessoal?: true
    listId?: true
    _all?: true
  }

  export type DailyListAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyList to aggregate.
     */
    where?: DailyListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLists to fetch.
     */
    orderBy?: DailyListOrderByWithRelationInput | DailyListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyLists
    **/
    _count?: true | DailyListCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyListAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyListSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyListMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyListMaxAggregateInputType
  }

  export type GetDailyListAggregateType<T extends DailyListAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyList]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyList[P]>
      : GetScalarType<T[P], AggregateDailyList[P]>
  }




  export type DailyListGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyListWhereInput
    orderBy?: DailyListOrderByWithAggregationInput | DailyListOrderByWithAggregationInput[]
    by: DailyListScalarFieldEnum[] | DailyListScalarFieldEnum
    having?: DailyListScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyListCountAggregateInputType | true
    _avg?: DailyListAvgAggregateInputType
    _sum?: DailyListSumAggregateInputType
    _min?: DailyListMinAggregateInputType
    _max?: DailyListMaxAggregateInputType
  }

  export type DailyListGroupByOutputType = {
    id: number
    horaRefeicao: string
    medicamentos: string
    atvRealizadas: string
    humorGeral: string
    higienePessoal: string
    listId: number
    _count: DailyListCountAggregateOutputType | null
    _avg: DailyListAvgAggregateOutputType | null
    _sum: DailyListSumAggregateOutputType | null
    _min: DailyListMinAggregateOutputType | null
    _max: DailyListMaxAggregateOutputType | null
  }

  type GetDailyListGroupByPayload<T extends DailyListGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyListGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyListGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyListGroupByOutputType[P]>
            : GetScalarType<T[P], DailyListGroupByOutputType[P]>
        }
      >
    >


  export type DailyListSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horaRefeicao?: boolean
    medicamentos?: boolean
    atvRealizadas?: boolean
    humorGeral?: boolean
    higienePessoal?: boolean
    listId?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyList"]>

  export type DailyListSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horaRefeicao?: boolean
    medicamentos?: boolean
    atvRealizadas?: boolean
    humorGeral?: boolean
    higienePessoal?: boolean
    listId?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyList"]>

  export type DailyListSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    horaRefeicao?: boolean
    medicamentos?: boolean
    atvRealizadas?: boolean
    humorGeral?: boolean
    higienePessoal?: boolean
    listId?: boolean
    list?: boolean | ListDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyList"]>

  export type DailyListSelectScalar = {
    id?: boolean
    horaRefeicao?: boolean
    medicamentos?: boolean
    atvRealizadas?: boolean
    humorGeral?: boolean
    higienePessoal?: boolean
    listId?: boolean
  }

  export type DailyListOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "horaRefeicao" | "medicamentos" | "atvRealizadas" | "humorGeral" | "higienePessoal" | "listId", ExtArgs["result"]["dailyList"]>
  export type DailyListInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
  }
  export type DailyListIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
  }
  export type DailyListIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    list?: boolean | ListDefaultArgs<ExtArgs>
  }

  export type $DailyListPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyList"
    objects: {
      list: Prisma.$ListPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      horaRefeicao: string
      medicamentos: string
      atvRealizadas: string
      humorGeral: string
      higienePessoal: string
      listId: number
    }, ExtArgs["result"]["dailyList"]>
    composites: {}
  }

  type DailyListGetPayload<S extends boolean | null | undefined | DailyListDefaultArgs> = $Result.GetResult<Prisma.$DailyListPayload, S>

  type DailyListCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DailyListFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DailyListCountAggregateInputType | true
    }

  export interface DailyListDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyList'], meta: { name: 'DailyList' } }
    /**
     * Find zero or one DailyList that matches the filter.
     * @param {DailyListFindUniqueArgs} args - Arguments to find a DailyList
     * @example
     * // Get one DailyList
     * const dailyList = await prisma.dailyList.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyListFindUniqueArgs>(args: SelectSubset<T, DailyListFindUniqueArgs<ExtArgs>>): Prisma__DailyListClient<$Result.GetResult<Prisma.$DailyListPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DailyList that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DailyListFindUniqueOrThrowArgs} args - Arguments to find a DailyList
     * @example
     * // Get one DailyList
     * const dailyList = await prisma.dailyList.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyListFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyListFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyListClient<$Result.GetResult<Prisma.$DailyListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyList that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyListFindFirstArgs} args - Arguments to find a DailyList
     * @example
     * // Get one DailyList
     * const dailyList = await prisma.dailyList.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyListFindFirstArgs>(args?: SelectSubset<T, DailyListFindFirstArgs<ExtArgs>>): Prisma__DailyListClient<$Result.GetResult<Prisma.$DailyListPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DailyList that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyListFindFirstOrThrowArgs} args - Arguments to find a DailyList
     * @example
     * // Get one DailyList
     * const dailyList = await prisma.dailyList.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyListFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyListFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyListClient<$Result.GetResult<Prisma.$DailyListPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DailyLists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyListFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyLists
     * const dailyLists = await prisma.dailyList.findMany()
     * 
     * // Get first 10 DailyLists
     * const dailyLists = await prisma.dailyList.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyListWithIdOnly = await prisma.dailyList.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyListFindManyArgs>(args?: SelectSubset<T, DailyListFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyListPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DailyList.
     * @param {DailyListCreateArgs} args - Arguments to create a DailyList.
     * @example
     * // Create one DailyList
     * const DailyList = await prisma.dailyList.create({
     *   data: {
     *     // ... data to create a DailyList
     *   }
     * })
     * 
     */
    create<T extends DailyListCreateArgs>(args: SelectSubset<T, DailyListCreateArgs<ExtArgs>>): Prisma__DailyListClient<$Result.GetResult<Prisma.$DailyListPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DailyLists.
     * @param {DailyListCreateManyArgs} args - Arguments to create many DailyLists.
     * @example
     * // Create many DailyLists
     * const dailyList = await prisma.dailyList.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyListCreateManyArgs>(args?: SelectSubset<T, DailyListCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyLists and returns the data saved in the database.
     * @param {DailyListCreateManyAndReturnArgs} args - Arguments to create many DailyLists.
     * @example
     * // Create many DailyLists
     * const dailyList = await prisma.dailyList.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyLists and only return the `id`
     * const dailyListWithIdOnly = await prisma.dailyList.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyListCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyListCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyListPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DailyList.
     * @param {DailyListDeleteArgs} args - Arguments to delete one DailyList.
     * @example
     * // Delete one DailyList
     * const DailyList = await prisma.dailyList.delete({
     *   where: {
     *     // ... filter to delete one DailyList
     *   }
     * })
     * 
     */
    delete<T extends DailyListDeleteArgs>(args: SelectSubset<T, DailyListDeleteArgs<ExtArgs>>): Prisma__DailyListClient<$Result.GetResult<Prisma.$DailyListPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DailyList.
     * @param {DailyListUpdateArgs} args - Arguments to update one DailyList.
     * @example
     * // Update one DailyList
     * const dailyList = await prisma.dailyList.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyListUpdateArgs>(args: SelectSubset<T, DailyListUpdateArgs<ExtArgs>>): Prisma__DailyListClient<$Result.GetResult<Prisma.$DailyListPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DailyLists.
     * @param {DailyListDeleteManyArgs} args - Arguments to filter DailyLists to delete.
     * @example
     * // Delete a few DailyLists
     * const { count } = await prisma.dailyList.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyListDeleteManyArgs>(args?: SelectSubset<T, DailyListDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyListUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyLists
     * const dailyList = await prisma.dailyList.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyListUpdateManyArgs>(args: SelectSubset<T, DailyListUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyLists and returns the data updated in the database.
     * @param {DailyListUpdateManyAndReturnArgs} args - Arguments to update many DailyLists.
     * @example
     * // Update many DailyLists
     * const dailyList = await prisma.dailyList.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DailyLists and only return the `id`
     * const dailyListWithIdOnly = await prisma.dailyList.updateManyAndReturn({
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
    updateManyAndReturn<T extends DailyListUpdateManyAndReturnArgs>(args: SelectSubset<T, DailyListUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyListPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DailyList.
     * @param {DailyListUpsertArgs} args - Arguments to update or create a DailyList.
     * @example
     * // Update or create a DailyList
     * const dailyList = await prisma.dailyList.upsert({
     *   create: {
     *     // ... data to create a DailyList
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyList we want to update
     *   }
     * })
     */
    upsert<T extends DailyListUpsertArgs>(args: SelectSubset<T, DailyListUpsertArgs<ExtArgs>>): Prisma__DailyListClient<$Result.GetResult<Prisma.$DailyListPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DailyLists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyListCountArgs} args - Arguments to filter DailyLists to count.
     * @example
     * // Count the number of DailyLists
     * const count = await prisma.dailyList.count({
     *   where: {
     *     // ... the filter for the DailyLists we want to count
     *   }
     * })
    **/
    count<T extends DailyListCountArgs>(
      args?: Subset<T, DailyListCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyListCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyListAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DailyListAggregateArgs>(args: Subset<T, DailyListAggregateArgs>): Prisma.PrismaPromise<GetDailyListAggregateType<T>>

    /**
     * Group by DailyList.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyListGroupByArgs} args - Group by arguments.
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
      T extends DailyListGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyListGroupByArgs['orderBy'] }
        : { orderBy?: DailyListGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DailyListGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyListGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyList model
   */
  readonly fields: DailyListFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyList.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyListClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    list<T extends ListDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ListDefaultArgs<ExtArgs>>): Prisma__ListClient<$Result.GetResult<Prisma.$ListPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DailyList model
   */
  interface DailyListFieldRefs {
    readonly id: FieldRef<"DailyList", 'Int'>
    readonly horaRefeicao: FieldRef<"DailyList", 'String'>
    readonly medicamentos: FieldRef<"DailyList", 'String'>
    readonly atvRealizadas: FieldRef<"DailyList", 'String'>
    readonly humorGeral: FieldRef<"DailyList", 'String'>
    readonly higienePessoal: FieldRef<"DailyList", 'String'>
    readonly listId: FieldRef<"DailyList", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * DailyList findUnique
   */
  export type DailyListFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyList
     */
    select?: DailyListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyList
     */
    omit?: DailyListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyListInclude<ExtArgs> | null
    /**
     * Filter, which DailyList to fetch.
     */
    where: DailyListWhereUniqueInput
  }

  /**
   * DailyList findUniqueOrThrow
   */
  export type DailyListFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyList
     */
    select?: DailyListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyList
     */
    omit?: DailyListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyListInclude<ExtArgs> | null
    /**
     * Filter, which DailyList to fetch.
     */
    where: DailyListWhereUniqueInput
  }

  /**
   * DailyList findFirst
   */
  export type DailyListFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyList
     */
    select?: DailyListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyList
     */
    omit?: DailyListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyListInclude<ExtArgs> | null
    /**
     * Filter, which DailyList to fetch.
     */
    where?: DailyListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLists to fetch.
     */
    orderBy?: DailyListOrderByWithRelationInput | DailyListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyLists.
     */
    cursor?: DailyListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyLists.
     */
    distinct?: DailyListScalarFieldEnum | DailyListScalarFieldEnum[]
  }

  /**
   * DailyList findFirstOrThrow
   */
  export type DailyListFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyList
     */
    select?: DailyListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyList
     */
    omit?: DailyListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyListInclude<ExtArgs> | null
    /**
     * Filter, which DailyList to fetch.
     */
    where?: DailyListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLists to fetch.
     */
    orderBy?: DailyListOrderByWithRelationInput | DailyListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyLists.
     */
    cursor?: DailyListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyLists.
     */
    distinct?: DailyListScalarFieldEnum | DailyListScalarFieldEnum[]
  }

  /**
   * DailyList findMany
   */
  export type DailyListFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyList
     */
    select?: DailyListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyList
     */
    omit?: DailyListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyListInclude<ExtArgs> | null
    /**
     * Filter, which DailyLists to fetch.
     */
    where?: DailyListWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyLists to fetch.
     */
    orderBy?: DailyListOrderByWithRelationInput | DailyListOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyLists.
     */
    cursor?: DailyListWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyLists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyLists.
     */
    skip?: number
    distinct?: DailyListScalarFieldEnum | DailyListScalarFieldEnum[]
  }

  /**
   * DailyList create
   */
  export type DailyListCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyList
     */
    select?: DailyListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyList
     */
    omit?: DailyListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyListInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyList.
     */
    data: XOR<DailyListCreateInput, DailyListUncheckedCreateInput>
  }

  /**
   * DailyList createMany
   */
  export type DailyListCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyLists.
     */
    data: DailyListCreateManyInput | DailyListCreateManyInput[]
  }

  /**
   * DailyList createManyAndReturn
   */
  export type DailyListCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyList
     */
    select?: DailyListSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyList
     */
    omit?: DailyListOmit<ExtArgs> | null
    /**
     * The data used to create many DailyLists.
     */
    data: DailyListCreateManyInput | DailyListCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyListIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyList update
   */
  export type DailyListUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyList
     */
    select?: DailyListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyList
     */
    omit?: DailyListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyListInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyList.
     */
    data: XOR<DailyListUpdateInput, DailyListUncheckedUpdateInput>
    /**
     * Choose, which DailyList to update.
     */
    where: DailyListWhereUniqueInput
  }

  /**
   * DailyList updateMany
   */
  export type DailyListUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyLists.
     */
    data: XOR<DailyListUpdateManyMutationInput, DailyListUncheckedUpdateManyInput>
    /**
     * Filter which DailyLists to update
     */
    where?: DailyListWhereInput
    /**
     * Limit how many DailyLists to update.
     */
    limit?: number
  }

  /**
   * DailyList updateManyAndReturn
   */
  export type DailyListUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyList
     */
    select?: DailyListSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DailyList
     */
    omit?: DailyListOmit<ExtArgs> | null
    /**
     * The data used to update DailyLists.
     */
    data: XOR<DailyListUpdateManyMutationInput, DailyListUncheckedUpdateManyInput>
    /**
     * Filter which DailyLists to update
     */
    where?: DailyListWhereInput
    /**
     * Limit how many DailyLists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyListIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyList upsert
   */
  export type DailyListUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyList
     */
    select?: DailyListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyList
     */
    omit?: DailyListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyListInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyList to update in case it exists.
     */
    where: DailyListWhereUniqueInput
    /**
     * In case the DailyList found by the `where` argument doesn't exist, create a new DailyList with this data.
     */
    create: XOR<DailyListCreateInput, DailyListUncheckedCreateInput>
    /**
     * In case the DailyList was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyListUpdateInput, DailyListUncheckedUpdateInput>
  }

  /**
   * DailyList delete
   */
  export type DailyListDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyList
     */
    select?: DailyListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyList
     */
    omit?: DailyListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyListInclude<ExtArgs> | null
    /**
     * Filter which DailyList to delete.
     */
    where: DailyListWhereUniqueInput
  }

  /**
   * DailyList deleteMany
   */
  export type DailyListDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyLists to delete
     */
    where?: DailyListWhereInput
    /**
     * Limit how many DailyLists to delete.
     */
    limit?: number
  }

  /**
   * DailyList without action
   */
  export type DailyListDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyList
     */
    select?: DailyListSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DailyList
     */
    omit?: DailyListOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyListInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    type: 'type'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ListScalarFieldEnum: {
    id: 'id',
    name: 'name',
    bornAge: 'bornAge',
    image: 'image',
    roomNumber: 'roomNumber',
    caregiverName: 'caregiverName',
    especialConditions: 'especialConditions'
  };

  export type ListScalarFieldEnum = (typeof ListScalarFieldEnum)[keyof typeof ListScalarFieldEnum]


  export const DailyListScalarFieldEnum: {
    id: 'id',
    horaRefeicao: 'horaRefeicao',
    medicamentos: 'medicamentos',
    atvRealizadas: 'atvRealizadas',
    humorGeral: 'humorGeral',
    higienePessoal: 'higienePessoal',
    listId: 'listId'
  };

  export type DailyListScalarFieldEnum = (typeof DailyListScalarFieldEnum)[keyof typeof DailyListScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    type?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    type?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    type?: StringFilter<"User"> | string
  }, "id" | "name">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    type?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    type?: StringWithAggregatesFilter<"User"> | string
  }

  export type ListWhereInput = {
    AND?: ListWhereInput | ListWhereInput[]
    OR?: ListWhereInput[]
    NOT?: ListWhereInput | ListWhereInput[]
    id?: IntFilter<"List"> | number
    name?: StringFilter<"List"> | string
    bornAge?: StringFilter<"List"> | string
    image?: StringFilter<"List"> | string
    roomNumber?: IntFilter<"List"> | number
    caregiverName?: StringFilter<"List"> | string
    especialConditions?: StringFilter<"List"> | string
    DailyLists?: DailyListListRelationFilter
  }

  export type ListOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    bornAge?: SortOrder
    image?: SortOrder
    roomNumber?: SortOrder
    caregiverName?: SortOrder
    especialConditions?: SortOrder
    DailyLists?: DailyListOrderByRelationAggregateInput
  }

  export type ListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ListWhereInput | ListWhereInput[]
    OR?: ListWhereInput[]
    NOT?: ListWhereInput | ListWhereInput[]
    name?: StringFilter<"List"> | string
    bornAge?: StringFilter<"List"> | string
    image?: StringFilter<"List"> | string
    roomNumber?: IntFilter<"List"> | number
    caregiverName?: StringFilter<"List"> | string
    especialConditions?: StringFilter<"List"> | string
    DailyLists?: DailyListListRelationFilter
  }, "id">

  export type ListOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    bornAge?: SortOrder
    image?: SortOrder
    roomNumber?: SortOrder
    caregiverName?: SortOrder
    especialConditions?: SortOrder
    _count?: ListCountOrderByAggregateInput
    _avg?: ListAvgOrderByAggregateInput
    _max?: ListMaxOrderByAggregateInput
    _min?: ListMinOrderByAggregateInput
    _sum?: ListSumOrderByAggregateInput
  }

  export type ListScalarWhereWithAggregatesInput = {
    AND?: ListScalarWhereWithAggregatesInput | ListScalarWhereWithAggregatesInput[]
    OR?: ListScalarWhereWithAggregatesInput[]
    NOT?: ListScalarWhereWithAggregatesInput | ListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"List"> | number
    name?: StringWithAggregatesFilter<"List"> | string
    bornAge?: StringWithAggregatesFilter<"List"> | string
    image?: StringWithAggregatesFilter<"List"> | string
    roomNumber?: IntWithAggregatesFilter<"List"> | number
    caregiverName?: StringWithAggregatesFilter<"List"> | string
    especialConditions?: StringWithAggregatesFilter<"List"> | string
  }

  export type DailyListWhereInput = {
    AND?: DailyListWhereInput | DailyListWhereInput[]
    OR?: DailyListWhereInput[]
    NOT?: DailyListWhereInput | DailyListWhereInput[]
    id?: IntFilter<"DailyList"> | number
    horaRefeicao?: StringFilter<"DailyList"> | string
    medicamentos?: StringFilter<"DailyList"> | string
    atvRealizadas?: StringFilter<"DailyList"> | string
    humorGeral?: StringFilter<"DailyList"> | string
    higienePessoal?: StringFilter<"DailyList"> | string
    listId?: IntFilter<"DailyList"> | number
    list?: XOR<ListScalarRelationFilter, ListWhereInput>
  }

  export type DailyListOrderByWithRelationInput = {
    id?: SortOrder
    horaRefeicao?: SortOrder
    medicamentos?: SortOrder
    atvRealizadas?: SortOrder
    humorGeral?: SortOrder
    higienePessoal?: SortOrder
    listId?: SortOrder
    list?: ListOrderByWithRelationInput
  }

  export type DailyListWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DailyListWhereInput | DailyListWhereInput[]
    OR?: DailyListWhereInput[]
    NOT?: DailyListWhereInput | DailyListWhereInput[]
    horaRefeicao?: StringFilter<"DailyList"> | string
    medicamentos?: StringFilter<"DailyList"> | string
    atvRealizadas?: StringFilter<"DailyList"> | string
    humorGeral?: StringFilter<"DailyList"> | string
    higienePessoal?: StringFilter<"DailyList"> | string
    listId?: IntFilter<"DailyList"> | number
    list?: XOR<ListScalarRelationFilter, ListWhereInput>
  }, "id">

  export type DailyListOrderByWithAggregationInput = {
    id?: SortOrder
    horaRefeicao?: SortOrder
    medicamentos?: SortOrder
    atvRealizadas?: SortOrder
    humorGeral?: SortOrder
    higienePessoal?: SortOrder
    listId?: SortOrder
    _count?: DailyListCountOrderByAggregateInput
    _avg?: DailyListAvgOrderByAggregateInput
    _max?: DailyListMaxOrderByAggregateInput
    _min?: DailyListMinOrderByAggregateInput
    _sum?: DailyListSumOrderByAggregateInput
  }

  export type DailyListScalarWhereWithAggregatesInput = {
    AND?: DailyListScalarWhereWithAggregatesInput | DailyListScalarWhereWithAggregatesInput[]
    OR?: DailyListScalarWhereWithAggregatesInput[]
    NOT?: DailyListScalarWhereWithAggregatesInput | DailyListScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyList"> | number
    horaRefeicao?: StringWithAggregatesFilter<"DailyList"> | string
    medicamentos?: StringWithAggregatesFilter<"DailyList"> | string
    atvRealizadas?: StringWithAggregatesFilter<"DailyList"> | string
    humorGeral?: StringWithAggregatesFilter<"DailyList"> | string
    higienePessoal?: StringWithAggregatesFilter<"DailyList"> | string
    listId?: IntWithAggregatesFilter<"DailyList"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    type?: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    type?: string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    type?: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type ListCreateInput = {
    name: string
    bornAge: string
    image: string
    roomNumber: number
    caregiverName: string
    especialConditions: string
    DailyLists?: DailyListCreateNestedManyWithoutListInput
  }

  export type ListUncheckedCreateInput = {
    id?: number
    name: string
    bornAge: string
    image: string
    roomNumber: number
    caregiverName: string
    especialConditions: string
    DailyLists?: DailyListUncheckedCreateNestedManyWithoutListInput
  }

  export type ListUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    bornAge?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    roomNumber?: IntFieldUpdateOperationsInput | number
    caregiverName?: StringFieldUpdateOperationsInput | string
    especialConditions?: StringFieldUpdateOperationsInput | string
    DailyLists?: DailyListUpdateManyWithoutListNestedInput
  }

  export type ListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bornAge?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    roomNumber?: IntFieldUpdateOperationsInput | number
    caregiverName?: StringFieldUpdateOperationsInput | string
    especialConditions?: StringFieldUpdateOperationsInput | string
    DailyLists?: DailyListUncheckedUpdateManyWithoutListNestedInput
  }

  export type ListCreateManyInput = {
    id?: number
    name: string
    bornAge: string
    image: string
    roomNumber: number
    caregiverName: string
    especialConditions: string
  }

  export type ListUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    bornAge?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    roomNumber?: IntFieldUpdateOperationsInput | number
    caregiverName?: StringFieldUpdateOperationsInput | string
    especialConditions?: StringFieldUpdateOperationsInput | string
  }

  export type ListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bornAge?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    roomNumber?: IntFieldUpdateOperationsInput | number
    caregiverName?: StringFieldUpdateOperationsInput | string
    especialConditions?: StringFieldUpdateOperationsInput | string
  }

  export type DailyListCreateInput = {
    horaRefeicao: string
    medicamentos: string
    atvRealizadas: string
    humorGeral: string
    higienePessoal: string
    list: ListCreateNestedOneWithoutDailyListsInput
  }

  export type DailyListUncheckedCreateInput = {
    id?: number
    horaRefeicao: string
    medicamentos: string
    atvRealizadas: string
    humorGeral: string
    higienePessoal: string
    listId: number
  }

  export type DailyListUpdateInput = {
    horaRefeicao?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    atvRealizadas?: StringFieldUpdateOperationsInput | string
    humorGeral?: StringFieldUpdateOperationsInput | string
    higienePessoal?: StringFieldUpdateOperationsInput | string
    list?: ListUpdateOneRequiredWithoutDailyListsNestedInput
  }

  export type DailyListUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    horaRefeicao?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    atvRealizadas?: StringFieldUpdateOperationsInput | string
    humorGeral?: StringFieldUpdateOperationsInput | string
    higienePessoal?: StringFieldUpdateOperationsInput | string
    listId?: IntFieldUpdateOperationsInput | number
  }

  export type DailyListCreateManyInput = {
    id?: number
    horaRefeicao: string
    medicamentos: string
    atvRealizadas: string
    humorGeral: string
    higienePessoal: string
    listId: number
  }

  export type DailyListUpdateManyMutationInput = {
    horaRefeicao?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    atvRealizadas?: StringFieldUpdateOperationsInput | string
    humorGeral?: StringFieldUpdateOperationsInput | string
    higienePessoal?: StringFieldUpdateOperationsInput | string
  }

  export type DailyListUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    horaRefeicao?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    atvRealizadas?: StringFieldUpdateOperationsInput | string
    humorGeral?: StringFieldUpdateOperationsInput | string
    higienePessoal?: StringFieldUpdateOperationsInput | string
    listId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    type?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    type?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    type?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type DailyListListRelationFilter = {
    every?: DailyListWhereInput
    some?: DailyListWhereInput
    none?: DailyListWhereInput
  }

  export type DailyListOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ListCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bornAge?: SortOrder
    image?: SortOrder
    roomNumber?: SortOrder
    caregiverName?: SortOrder
    especialConditions?: SortOrder
  }

  export type ListAvgOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
  }

  export type ListMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bornAge?: SortOrder
    image?: SortOrder
    roomNumber?: SortOrder
    caregiverName?: SortOrder
    especialConditions?: SortOrder
  }

  export type ListMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bornAge?: SortOrder
    image?: SortOrder
    roomNumber?: SortOrder
    caregiverName?: SortOrder
    especialConditions?: SortOrder
  }

  export type ListSumOrderByAggregateInput = {
    id?: SortOrder
    roomNumber?: SortOrder
  }

  export type ListScalarRelationFilter = {
    is?: ListWhereInput
    isNot?: ListWhereInput
  }

  export type DailyListCountOrderByAggregateInput = {
    id?: SortOrder
    horaRefeicao?: SortOrder
    medicamentos?: SortOrder
    atvRealizadas?: SortOrder
    humorGeral?: SortOrder
    higienePessoal?: SortOrder
    listId?: SortOrder
  }

  export type DailyListAvgOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
  }

  export type DailyListMaxOrderByAggregateInput = {
    id?: SortOrder
    horaRefeicao?: SortOrder
    medicamentos?: SortOrder
    atvRealizadas?: SortOrder
    humorGeral?: SortOrder
    higienePessoal?: SortOrder
    listId?: SortOrder
  }

  export type DailyListMinOrderByAggregateInput = {
    id?: SortOrder
    horaRefeicao?: SortOrder
    medicamentos?: SortOrder
    atvRealizadas?: SortOrder
    humorGeral?: SortOrder
    higienePessoal?: SortOrder
    listId?: SortOrder
  }

  export type DailyListSumOrderByAggregateInput = {
    id?: SortOrder
    listId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DailyListCreateNestedManyWithoutListInput = {
    create?: XOR<DailyListCreateWithoutListInput, DailyListUncheckedCreateWithoutListInput> | DailyListCreateWithoutListInput[] | DailyListUncheckedCreateWithoutListInput[]
    connectOrCreate?: DailyListCreateOrConnectWithoutListInput | DailyListCreateOrConnectWithoutListInput[]
    createMany?: DailyListCreateManyListInputEnvelope
    connect?: DailyListWhereUniqueInput | DailyListWhereUniqueInput[]
  }

  export type DailyListUncheckedCreateNestedManyWithoutListInput = {
    create?: XOR<DailyListCreateWithoutListInput, DailyListUncheckedCreateWithoutListInput> | DailyListCreateWithoutListInput[] | DailyListUncheckedCreateWithoutListInput[]
    connectOrCreate?: DailyListCreateOrConnectWithoutListInput | DailyListCreateOrConnectWithoutListInput[]
    createMany?: DailyListCreateManyListInputEnvelope
    connect?: DailyListWhereUniqueInput | DailyListWhereUniqueInput[]
  }

  export type DailyListUpdateManyWithoutListNestedInput = {
    create?: XOR<DailyListCreateWithoutListInput, DailyListUncheckedCreateWithoutListInput> | DailyListCreateWithoutListInput[] | DailyListUncheckedCreateWithoutListInput[]
    connectOrCreate?: DailyListCreateOrConnectWithoutListInput | DailyListCreateOrConnectWithoutListInput[]
    upsert?: DailyListUpsertWithWhereUniqueWithoutListInput | DailyListUpsertWithWhereUniqueWithoutListInput[]
    createMany?: DailyListCreateManyListInputEnvelope
    set?: DailyListWhereUniqueInput | DailyListWhereUniqueInput[]
    disconnect?: DailyListWhereUniqueInput | DailyListWhereUniqueInput[]
    delete?: DailyListWhereUniqueInput | DailyListWhereUniqueInput[]
    connect?: DailyListWhereUniqueInput | DailyListWhereUniqueInput[]
    update?: DailyListUpdateWithWhereUniqueWithoutListInput | DailyListUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: DailyListUpdateManyWithWhereWithoutListInput | DailyListUpdateManyWithWhereWithoutListInput[]
    deleteMany?: DailyListScalarWhereInput | DailyListScalarWhereInput[]
  }

  export type DailyListUncheckedUpdateManyWithoutListNestedInput = {
    create?: XOR<DailyListCreateWithoutListInput, DailyListUncheckedCreateWithoutListInput> | DailyListCreateWithoutListInput[] | DailyListUncheckedCreateWithoutListInput[]
    connectOrCreate?: DailyListCreateOrConnectWithoutListInput | DailyListCreateOrConnectWithoutListInput[]
    upsert?: DailyListUpsertWithWhereUniqueWithoutListInput | DailyListUpsertWithWhereUniqueWithoutListInput[]
    createMany?: DailyListCreateManyListInputEnvelope
    set?: DailyListWhereUniqueInput | DailyListWhereUniqueInput[]
    disconnect?: DailyListWhereUniqueInput | DailyListWhereUniqueInput[]
    delete?: DailyListWhereUniqueInput | DailyListWhereUniqueInput[]
    connect?: DailyListWhereUniqueInput | DailyListWhereUniqueInput[]
    update?: DailyListUpdateWithWhereUniqueWithoutListInput | DailyListUpdateWithWhereUniqueWithoutListInput[]
    updateMany?: DailyListUpdateManyWithWhereWithoutListInput | DailyListUpdateManyWithWhereWithoutListInput[]
    deleteMany?: DailyListScalarWhereInput | DailyListScalarWhereInput[]
  }

  export type ListCreateNestedOneWithoutDailyListsInput = {
    create?: XOR<ListCreateWithoutDailyListsInput, ListUncheckedCreateWithoutDailyListsInput>
    connectOrCreate?: ListCreateOrConnectWithoutDailyListsInput
    connect?: ListWhereUniqueInput
  }

  export type ListUpdateOneRequiredWithoutDailyListsNestedInput = {
    create?: XOR<ListCreateWithoutDailyListsInput, ListUncheckedCreateWithoutDailyListsInput>
    connectOrCreate?: ListCreateOrConnectWithoutDailyListsInput
    upsert?: ListUpsertWithoutDailyListsInput
    connect?: ListWhereUniqueInput
    update?: XOR<XOR<ListUpdateToOneWithWhereWithoutDailyListsInput, ListUpdateWithoutDailyListsInput>, ListUncheckedUpdateWithoutDailyListsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type DailyListCreateWithoutListInput = {
    horaRefeicao: string
    medicamentos: string
    atvRealizadas: string
    humorGeral: string
    higienePessoal: string
  }

  export type DailyListUncheckedCreateWithoutListInput = {
    id?: number
    horaRefeicao: string
    medicamentos: string
    atvRealizadas: string
    humorGeral: string
    higienePessoal: string
  }

  export type DailyListCreateOrConnectWithoutListInput = {
    where: DailyListWhereUniqueInput
    create: XOR<DailyListCreateWithoutListInput, DailyListUncheckedCreateWithoutListInput>
  }

  export type DailyListCreateManyListInputEnvelope = {
    data: DailyListCreateManyListInput | DailyListCreateManyListInput[]
  }

  export type DailyListUpsertWithWhereUniqueWithoutListInput = {
    where: DailyListWhereUniqueInput
    update: XOR<DailyListUpdateWithoutListInput, DailyListUncheckedUpdateWithoutListInput>
    create: XOR<DailyListCreateWithoutListInput, DailyListUncheckedCreateWithoutListInput>
  }

  export type DailyListUpdateWithWhereUniqueWithoutListInput = {
    where: DailyListWhereUniqueInput
    data: XOR<DailyListUpdateWithoutListInput, DailyListUncheckedUpdateWithoutListInput>
  }

  export type DailyListUpdateManyWithWhereWithoutListInput = {
    where: DailyListScalarWhereInput
    data: XOR<DailyListUpdateManyMutationInput, DailyListUncheckedUpdateManyWithoutListInput>
  }

  export type DailyListScalarWhereInput = {
    AND?: DailyListScalarWhereInput | DailyListScalarWhereInput[]
    OR?: DailyListScalarWhereInput[]
    NOT?: DailyListScalarWhereInput | DailyListScalarWhereInput[]
    id?: IntFilter<"DailyList"> | number
    horaRefeicao?: StringFilter<"DailyList"> | string
    medicamentos?: StringFilter<"DailyList"> | string
    atvRealizadas?: StringFilter<"DailyList"> | string
    humorGeral?: StringFilter<"DailyList"> | string
    higienePessoal?: StringFilter<"DailyList"> | string
    listId?: IntFilter<"DailyList"> | number
  }

  export type ListCreateWithoutDailyListsInput = {
    name: string
    bornAge: string
    image: string
    roomNumber: number
    caregiverName: string
    especialConditions: string
  }

  export type ListUncheckedCreateWithoutDailyListsInput = {
    id?: number
    name: string
    bornAge: string
    image: string
    roomNumber: number
    caregiverName: string
    especialConditions: string
  }

  export type ListCreateOrConnectWithoutDailyListsInput = {
    where: ListWhereUniqueInput
    create: XOR<ListCreateWithoutDailyListsInput, ListUncheckedCreateWithoutDailyListsInput>
  }

  export type ListUpsertWithoutDailyListsInput = {
    update: XOR<ListUpdateWithoutDailyListsInput, ListUncheckedUpdateWithoutDailyListsInput>
    create: XOR<ListCreateWithoutDailyListsInput, ListUncheckedCreateWithoutDailyListsInput>
    where?: ListWhereInput
  }

  export type ListUpdateToOneWithWhereWithoutDailyListsInput = {
    where?: ListWhereInput
    data: XOR<ListUpdateWithoutDailyListsInput, ListUncheckedUpdateWithoutDailyListsInput>
  }

  export type ListUpdateWithoutDailyListsInput = {
    name?: StringFieldUpdateOperationsInput | string
    bornAge?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    roomNumber?: IntFieldUpdateOperationsInput | number
    caregiverName?: StringFieldUpdateOperationsInput | string
    especialConditions?: StringFieldUpdateOperationsInput | string
  }

  export type ListUncheckedUpdateWithoutDailyListsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bornAge?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    roomNumber?: IntFieldUpdateOperationsInput | number
    caregiverName?: StringFieldUpdateOperationsInput | string
    especialConditions?: StringFieldUpdateOperationsInput | string
  }

  export type DailyListCreateManyListInput = {
    id?: number
    horaRefeicao: string
    medicamentos: string
    atvRealizadas: string
    humorGeral: string
    higienePessoal: string
  }

  export type DailyListUpdateWithoutListInput = {
    horaRefeicao?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    atvRealizadas?: StringFieldUpdateOperationsInput | string
    humorGeral?: StringFieldUpdateOperationsInput | string
    higienePessoal?: StringFieldUpdateOperationsInput | string
  }

  export type DailyListUncheckedUpdateWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    horaRefeicao?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    atvRealizadas?: StringFieldUpdateOperationsInput | string
    humorGeral?: StringFieldUpdateOperationsInput | string
    higienePessoal?: StringFieldUpdateOperationsInput | string
  }

  export type DailyListUncheckedUpdateManyWithoutListInput = {
    id?: IntFieldUpdateOperationsInput | number
    horaRefeicao?: StringFieldUpdateOperationsInput | string
    medicamentos?: StringFieldUpdateOperationsInput | string
    atvRealizadas?: StringFieldUpdateOperationsInput | string
    humorGeral?: StringFieldUpdateOperationsInput | string
    higienePessoal?: StringFieldUpdateOperationsInput | string
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