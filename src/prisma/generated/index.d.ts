
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>
/**
 * Model TaskRelation
 * 
 */
export type TaskRelation = $Result.DefaultSelection<Prisma.$TaskRelationPayload>
/**
 * Model Watcher
 * 
 */
export type Watcher = $Result.DefaultSelection<Prisma.$WatcherPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tasks
 * const tasks = await prisma.task.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Tasks
   * const tasks = await prisma.task.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;

  /**
   * `prisma.taskRelation`: Exposes CRUD operations for the **TaskRelation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TaskRelations
    * const taskRelations = await prisma.taskRelation.findMany()
    * ```
    */
  get taskRelation(): Prisma.TaskRelationDelegate<ExtArgs>;

  /**
   * `prisma.watcher`: Exposes CRUD operations for the **Watcher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Watchers
    * const watchers = await prisma.watcher.findMany()
    * ```
    */
  get watcher(): Prisma.WatcherDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Task: 'Task',
    TaskRelation: 'TaskRelation',
    Watcher: 'Watcher'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'task' | 'taskRelation' | 'watcher'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>,
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
      TaskRelation: {
        payload: Prisma.$TaskRelationPayload<ExtArgs>
        fields: Prisma.TaskRelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskRelationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskRelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskRelationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskRelationPayload>
          }
          findFirst: {
            args: Prisma.TaskRelationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskRelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskRelationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskRelationPayload>
          }
          findMany: {
            args: Prisma.TaskRelationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskRelationPayload>[]
          }
          create: {
            args: Prisma.TaskRelationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskRelationPayload>
          }
          createMany: {
            args: Prisma.TaskRelationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TaskRelationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskRelationPayload>
          }
          update: {
            args: Prisma.TaskRelationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskRelationPayload>
          }
          deleteMany: {
            args: Prisma.TaskRelationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TaskRelationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TaskRelationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskRelationPayload>
          }
          aggregate: {
            args: Prisma.TaskRelationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTaskRelation>
          }
          groupBy: {
            args: Prisma.TaskRelationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TaskRelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskRelationCountArgs<ExtArgs>,
            result: $Utils.Optional<TaskRelationCountAggregateOutputType> | number
          }
        }
      }
      Watcher: {
        payload: Prisma.$WatcherPayload<ExtArgs>
        fields: Prisma.WatcherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WatcherFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatcherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WatcherFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatcherPayload>
          }
          findFirst: {
            args: Prisma.WatcherFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatcherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WatcherFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatcherPayload>
          }
          findMany: {
            args: Prisma.WatcherFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatcherPayload>[]
          }
          create: {
            args: Prisma.WatcherCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatcherPayload>
          }
          createMany: {
            args: Prisma.WatcherCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.WatcherDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatcherPayload>
          }
          update: {
            args: Prisma.WatcherUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatcherPayload>
          }
          deleteMany: {
            args: Prisma.WatcherDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.WatcherUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.WatcherUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$WatcherPayload>
          }
          aggregate: {
            args: Prisma.WatcherAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateWatcher>
          }
          groupBy: {
            args: Prisma.WatcherGroupByArgs<ExtArgs>,
            result: $Utils.Optional<WatcherGroupByOutputType>[]
          }
          count: {
            args: Prisma.WatcherCountArgs<ExtArgs>,
            result: $Utils.Optional<WatcherCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    | 'update'
    | 'updateMany'
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
   * Models
   */

  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskAvgAggregateOutputType = {
    id: number | null
  }

  export type TaskSumAggregateOutputType = {
    id: number | null
  }

  export type TaskMinAggregateOutputType = {
    id: number | null
    title: string | null
    assigneeName: string | null
    assigneeAvatar: string | null
    status: string | null
    creationDate: string | null
    description: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: number | null
    title: string | null
    assigneeName: string | null
    assigneeAvatar: string | null
    status: string | null
    creationDate: string | null
    description: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    title: number
    assigneeName: number
    assigneeAvatar: number
    status: number
    creationDate: number
    description: number
    _all: number
  }


  export type TaskAvgAggregateInputType = {
    id?: true
  }

  export type TaskSumAggregateInputType = {
    id?: true
  }

  export type TaskMinAggregateInputType = {
    id?: true
    title?: true
    assigneeName?: true
    assigneeAvatar?: true
    status?: true
    creationDate?: true
    description?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    title?: true
    assigneeName?: true
    assigneeAvatar?: true
    status?: true
    creationDate?: true
    description?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    title?: true
    assigneeName?: true
    assigneeAvatar?: true
    status?: true
    creationDate?: true
    description?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _avg?: TaskAvgAggregateInputType
    _sum?: TaskSumAggregateInputType
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: number
    title: string
    assigneeName: string
    assigneeAvatar: string
    status: string
    creationDate: string
    description: string
    _count: TaskCountAggregateOutputType | null
    _avg: TaskAvgAggregateOutputType | null
    _sum: TaskSumAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    assigneeName?: boolean
    assigneeAvatar?: boolean
    status?: boolean
    creationDate?: boolean
    description?: boolean
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    title?: boolean
    assigneeName?: boolean
    assigneeAvatar?: boolean
    status?: boolean
    creationDate?: boolean
    description?: boolean
  }


  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      assigneeName: string
      assigneeAvatar: string
      status: string
      creationDate: string
      description: string
    }, ExtArgs["result"]["task"]>
    composites: {}
  }


  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
    **/
    create<T extends TaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskCreateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tasks.
     *     @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     *     @example
     *     // Create many Tasks
     *     const task = await prisma.task.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
    **/
    delete<T extends TaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
    **/
    upsert<T extends TaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
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
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'Int'>
    readonly title: FieldRef<"Task", 'String'>
    readonly assigneeName: FieldRef<"Task", 'String'>
    readonly assigneeAvatar: FieldRef<"Task", 'String'>
    readonly status: FieldRef<"Task", 'String'>
    readonly creationDate: FieldRef<"Task", 'String'>
    readonly description: FieldRef<"Task", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }


  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }


  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }


  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }


  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }


  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }


  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }


  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }


  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
  }



  /**
   * Model TaskRelation
   */

  export type AggregateTaskRelation = {
    _count: TaskRelationCountAggregateOutputType | null
    _avg: TaskRelationAvgAggregateOutputType | null
    _sum: TaskRelationSumAggregateOutputType | null
    _min: TaskRelationMinAggregateOutputType | null
    _max: TaskRelationMaxAggregateOutputType | null
  }

  export type TaskRelationAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
    relatedId: number | null
  }

  export type TaskRelationSumAggregateOutputType = {
    id: number | null
    taskId: number | null
    relatedId: number | null
  }

  export type TaskRelationMinAggregateOutputType = {
    id: number | null
    taskId: number | null
    relatedId: number | null
  }

  export type TaskRelationMaxAggregateOutputType = {
    id: number | null
    taskId: number | null
    relatedId: number | null
  }

  export type TaskRelationCountAggregateOutputType = {
    id: number
    taskId: number
    relatedId: number
    _all: number
  }


  export type TaskRelationAvgAggregateInputType = {
    id?: true
    taskId?: true
    relatedId?: true
  }

  export type TaskRelationSumAggregateInputType = {
    id?: true
    taskId?: true
    relatedId?: true
  }

  export type TaskRelationMinAggregateInputType = {
    id?: true
    taskId?: true
    relatedId?: true
  }

  export type TaskRelationMaxAggregateInputType = {
    id?: true
    taskId?: true
    relatedId?: true
  }

  export type TaskRelationCountAggregateInputType = {
    id?: true
    taskId?: true
    relatedId?: true
    _all?: true
  }

  export type TaskRelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskRelation to aggregate.
     */
    where?: TaskRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskRelations to fetch.
     */
    orderBy?: TaskRelationOrderByWithRelationInput | TaskRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TaskRelations
    **/
    _count?: true | TaskRelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TaskRelationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TaskRelationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskRelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskRelationMaxAggregateInputType
  }

  export type GetTaskRelationAggregateType<T extends TaskRelationAggregateArgs> = {
        [P in keyof T & keyof AggregateTaskRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTaskRelation[P]>
      : GetScalarType<T[P], AggregateTaskRelation[P]>
  }




  export type TaskRelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskRelationWhereInput
    orderBy?: TaskRelationOrderByWithAggregationInput | TaskRelationOrderByWithAggregationInput[]
    by: TaskRelationScalarFieldEnum[] | TaskRelationScalarFieldEnum
    having?: TaskRelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskRelationCountAggregateInputType | true
    _avg?: TaskRelationAvgAggregateInputType
    _sum?: TaskRelationSumAggregateInputType
    _min?: TaskRelationMinAggregateInputType
    _max?: TaskRelationMaxAggregateInputType
  }

  export type TaskRelationGroupByOutputType = {
    id: number
    taskId: number
    relatedId: number
    _count: TaskRelationCountAggregateOutputType | null
    _avg: TaskRelationAvgAggregateOutputType | null
    _sum: TaskRelationSumAggregateOutputType | null
    _min: TaskRelationMinAggregateOutputType | null
    _max: TaskRelationMaxAggregateOutputType | null
  }

  type GetTaskRelationGroupByPayload<T extends TaskRelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskRelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskRelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskRelationGroupByOutputType[P]>
            : GetScalarType<T[P], TaskRelationGroupByOutputType[P]>
        }
      >
    >


  export type TaskRelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    relatedId?: boolean
  }, ExtArgs["result"]["taskRelation"]>

  export type TaskRelationSelectScalar = {
    id?: boolean
    taskId?: boolean
    relatedId?: boolean
  }


  export type $TaskRelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TaskRelation"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taskId: number
      relatedId: number
    }, ExtArgs["result"]["taskRelation"]>
    composites: {}
  }


  type TaskRelationGetPayload<S extends boolean | null | undefined | TaskRelationDefaultArgs> = $Result.GetResult<Prisma.$TaskRelationPayload, S>

  type TaskRelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskRelationFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TaskRelationCountAggregateInputType | true
    }

  export interface TaskRelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TaskRelation'], meta: { name: 'TaskRelation' } }
    /**
     * Find zero or one TaskRelation that matches the filter.
     * @param {TaskRelationFindUniqueArgs} args - Arguments to find a TaskRelation
     * @example
     * // Get one TaskRelation
     * const taskRelation = await prisma.taskRelation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TaskRelationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TaskRelationFindUniqueArgs<ExtArgs>>
    ): Prisma__TaskRelationClient<$Result.GetResult<Prisma.$TaskRelationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TaskRelation that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TaskRelationFindUniqueOrThrowArgs} args - Arguments to find a TaskRelation
     * @example
     * // Get one TaskRelation
     * const taskRelation = await prisma.taskRelation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TaskRelationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskRelationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TaskRelationClient<$Result.GetResult<Prisma.$TaskRelationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TaskRelation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskRelationFindFirstArgs} args - Arguments to find a TaskRelation
     * @example
     * // Get one TaskRelation
     * const taskRelation = await prisma.taskRelation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TaskRelationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskRelationFindFirstArgs<ExtArgs>>
    ): Prisma__TaskRelationClient<$Result.GetResult<Prisma.$TaskRelationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TaskRelation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskRelationFindFirstOrThrowArgs} args - Arguments to find a TaskRelation
     * @example
     * // Get one TaskRelation
     * const taskRelation = await prisma.taskRelation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TaskRelationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskRelationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TaskRelationClient<$Result.GetResult<Prisma.$TaskRelationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TaskRelations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskRelationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TaskRelations
     * const taskRelations = await prisma.taskRelation.findMany()
     * 
     * // Get first 10 TaskRelations
     * const taskRelations = await prisma.taskRelation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskRelationWithIdOnly = await prisma.taskRelation.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TaskRelationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskRelationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskRelationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TaskRelation.
     * @param {TaskRelationCreateArgs} args - Arguments to create a TaskRelation.
     * @example
     * // Create one TaskRelation
     * const TaskRelation = await prisma.taskRelation.create({
     *   data: {
     *     // ... data to create a TaskRelation
     *   }
     * })
     * 
    **/
    create<T extends TaskRelationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskRelationCreateArgs<ExtArgs>>
    ): Prisma__TaskRelationClient<$Result.GetResult<Prisma.$TaskRelationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TaskRelations.
     *     @param {TaskRelationCreateManyArgs} args - Arguments to create many TaskRelations.
     *     @example
     *     // Create many TaskRelations
     *     const taskRelation = await prisma.taskRelation.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TaskRelationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskRelationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TaskRelation.
     * @param {TaskRelationDeleteArgs} args - Arguments to delete one TaskRelation.
     * @example
     * // Delete one TaskRelation
     * const TaskRelation = await prisma.taskRelation.delete({
     *   where: {
     *     // ... filter to delete one TaskRelation
     *   }
     * })
     * 
    **/
    delete<T extends TaskRelationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TaskRelationDeleteArgs<ExtArgs>>
    ): Prisma__TaskRelationClient<$Result.GetResult<Prisma.$TaskRelationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TaskRelation.
     * @param {TaskRelationUpdateArgs} args - Arguments to update one TaskRelation.
     * @example
     * // Update one TaskRelation
     * const taskRelation = await prisma.taskRelation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TaskRelationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskRelationUpdateArgs<ExtArgs>>
    ): Prisma__TaskRelationClient<$Result.GetResult<Prisma.$TaskRelationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TaskRelations.
     * @param {TaskRelationDeleteManyArgs} args - Arguments to filter TaskRelations to delete.
     * @example
     * // Delete a few TaskRelations
     * const { count } = await prisma.taskRelation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TaskRelationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskRelationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TaskRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskRelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TaskRelations
     * const taskRelation = await prisma.taskRelation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TaskRelationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TaskRelationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TaskRelation.
     * @param {TaskRelationUpsertArgs} args - Arguments to update or create a TaskRelation.
     * @example
     * // Update or create a TaskRelation
     * const taskRelation = await prisma.taskRelation.upsert({
     *   create: {
     *     // ... data to create a TaskRelation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TaskRelation we want to update
     *   }
     * })
    **/
    upsert<T extends TaskRelationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TaskRelationUpsertArgs<ExtArgs>>
    ): Prisma__TaskRelationClient<$Result.GetResult<Prisma.$TaskRelationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TaskRelations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskRelationCountArgs} args - Arguments to filter TaskRelations to count.
     * @example
     * // Count the number of TaskRelations
     * const count = await prisma.taskRelation.count({
     *   where: {
     *     // ... the filter for the TaskRelations we want to count
     *   }
     * })
    **/
    count<T extends TaskRelationCountArgs>(
      args?: Subset<T, TaskRelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskRelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TaskRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskRelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TaskRelationAggregateArgs>(args: Subset<T, TaskRelationAggregateArgs>): Prisma.PrismaPromise<GetTaskRelationAggregateType<T>>

    /**
     * Group by TaskRelation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskRelationGroupByArgs} args - Group by arguments.
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
      T extends TaskRelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskRelationGroupByArgs['orderBy'] }
        : { orderBy?: TaskRelationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TaskRelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TaskRelation model
   */
  readonly fields: TaskRelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TaskRelation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskRelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TaskRelation model
   */ 
  interface TaskRelationFieldRefs {
    readonly id: FieldRef<"TaskRelation", 'Int'>
    readonly taskId: FieldRef<"TaskRelation", 'Int'>
    readonly relatedId: FieldRef<"TaskRelation", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * TaskRelation findUnique
   */
  export type TaskRelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskRelation
     */
    select?: TaskRelationSelect<ExtArgs> | null
    /**
     * Filter, which TaskRelation to fetch.
     */
    where: TaskRelationWhereUniqueInput
  }


  /**
   * TaskRelation findUniqueOrThrow
   */
  export type TaskRelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskRelation
     */
    select?: TaskRelationSelect<ExtArgs> | null
    /**
     * Filter, which TaskRelation to fetch.
     */
    where: TaskRelationWhereUniqueInput
  }


  /**
   * TaskRelation findFirst
   */
  export type TaskRelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskRelation
     */
    select?: TaskRelationSelect<ExtArgs> | null
    /**
     * Filter, which TaskRelation to fetch.
     */
    where?: TaskRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskRelations to fetch.
     */
    orderBy?: TaskRelationOrderByWithRelationInput | TaskRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskRelations.
     */
    cursor?: TaskRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskRelations.
     */
    distinct?: TaskRelationScalarFieldEnum | TaskRelationScalarFieldEnum[]
  }


  /**
   * TaskRelation findFirstOrThrow
   */
  export type TaskRelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskRelation
     */
    select?: TaskRelationSelect<ExtArgs> | null
    /**
     * Filter, which TaskRelation to fetch.
     */
    where?: TaskRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskRelations to fetch.
     */
    orderBy?: TaskRelationOrderByWithRelationInput | TaskRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TaskRelations.
     */
    cursor?: TaskRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskRelations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TaskRelations.
     */
    distinct?: TaskRelationScalarFieldEnum | TaskRelationScalarFieldEnum[]
  }


  /**
   * TaskRelation findMany
   */
  export type TaskRelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskRelation
     */
    select?: TaskRelationSelect<ExtArgs> | null
    /**
     * Filter, which TaskRelations to fetch.
     */
    where?: TaskRelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TaskRelations to fetch.
     */
    orderBy?: TaskRelationOrderByWithRelationInput | TaskRelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TaskRelations.
     */
    cursor?: TaskRelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TaskRelations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TaskRelations.
     */
    skip?: number
    distinct?: TaskRelationScalarFieldEnum | TaskRelationScalarFieldEnum[]
  }


  /**
   * TaskRelation create
   */
  export type TaskRelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskRelation
     */
    select?: TaskRelationSelect<ExtArgs> | null
    /**
     * The data needed to create a TaskRelation.
     */
    data: XOR<TaskRelationCreateInput, TaskRelationUncheckedCreateInput>
  }


  /**
   * TaskRelation createMany
   */
  export type TaskRelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TaskRelations.
     */
    data: TaskRelationCreateManyInput | TaskRelationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TaskRelation update
   */
  export type TaskRelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskRelation
     */
    select?: TaskRelationSelect<ExtArgs> | null
    /**
     * The data needed to update a TaskRelation.
     */
    data: XOR<TaskRelationUpdateInput, TaskRelationUncheckedUpdateInput>
    /**
     * Choose, which TaskRelation to update.
     */
    where: TaskRelationWhereUniqueInput
  }


  /**
   * TaskRelation updateMany
   */
  export type TaskRelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TaskRelations.
     */
    data: XOR<TaskRelationUpdateManyMutationInput, TaskRelationUncheckedUpdateManyInput>
    /**
     * Filter which TaskRelations to update
     */
    where?: TaskRelationWhereInput
  }


  /**
   * TaskRelation upsert
   */
  export type TaskRelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskRelation
     */
    select?: TaskRelationSelect<ExtArgs> | null
    /**
     * The filter to search for the TaskRelation to update in case it exists.
     */
    where: TaskRelationWhereUniqueInput
    /**
     * In case the TaskRelation found by the `where` argument doesn't exist, create a new TaskRelation with this data.
     */
    create: XOR<TaskRelationCreateInput, TaskRelationUncheckedCreateInput>
    /**
     * In case the TaskRelation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskRelationUpdateInput, TaskRelationUncheckedUpdateInput>
  }


  /**
   * TaskRelation delete
   */
  export type TaskRelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskRelation
     */
    select?: TaskRelationSelect<ExtArgs> | null
    /**
     * Filter which TaskRelation to delete.
     */
    where: TaskRelationWhereUniqueInput
  }


  /**
   * TaskRelation deleteMany
   */
  export type TaskRelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TaskRelations to delete
     */
    where?: TaskRelationWhereInput
  }


  /**
   * TaskRelation without action
   */
  export type TaskRelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TaskRelation
     */
    select?: TaskRelationSelect<ExtArgs> | null
  }



  /**
   * Model Watcher
   */

  export type AggregateWatcher = {
    _count: WatcherCountAggregateOutputType | null
    _avg: WatcherAvgAggregateOutputType | null
    _sum: WatcherSumAggregateOutputType | null
    _min: WatcherMinAggregateOutputType | null
    _max: WatcherMaxAggregateOutputType | null
  }

  export type WatcherAvgAggregateOutputType = {
    id: number | null
    taskId: number | null
  }

  export type WatcherSumAggregateOutputType = {
    id: number | null
    taskId: number | null
  }

  export type WatcherMinAggregateOutputType = {
    id: number | null
    taskId: number | null
    name: string | null
  }

  export type WatcherMaxAggregateOutputType = {
    id: number | null
    taskId: number | null
    name: string | null
  }

  export type WatcherCountAggregateOutputType = {
    id: number
    taskId: number
    name: number
    _all: number
  }


  export type WatcherAvgAggregateInputType = {
    id?: true
    taskId?: true
  }

  export type WatcherSumAggregateInputType = {
    id?: true
    taskId?: true
  }

  export type WatcherMinAggregateInputType = {
    id?: true
    taskId?: true
    name?: true
  }

  export type WatcherMaxAggregateInputType = {
    id?: true
    taskId?: true
    name?: true
  }

  export type WatcherCountAggregateInputType = {
    id?: true
    taskId?: true
    name?: true
    _all?: true
  }

  export type WatcherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watcher to aggregate.
     */
    where?: WatcherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchers to fetch.
     */
    orderBy?: WatcherOrderByWithRelationInput | WatcherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WatcherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Watchers
    **/
    _count?: true | WatcherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WatcherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WatcherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WatcherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WatcherMaxAggregateInputType
  }

  export type GetWatcherAggregateType<T extends WatcherAggregateArgs> = {
        [P in keyof T & keyof AggregateWatcher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWatcher[P]>
      : GetScalarType<T[P], AggregateWatcher[P]>
  }




  export type WatcherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WatcherWhereInput
    orderBy?: WatcherOrderByWithAggregationInput | WatcherOrderByWithAggregationInput[]
    by: WatcherScalarFieldEnum[] | WatcherScalarFieldEnum
    having?: WatcherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WatcherCountAggregateInputType | true
    _avg?: WatcherAvgAggregateInputType
    _sum?: WatcherSumAggregateInputType
    _min?: WatcherMinAggregateInputType
    _max?: WatcherMaxAggregateInputType
  }

  export type WatcherGroupByOutputType = {
    id: number
    taskId: number
    name: string
    _count: WatcherCountAggregateOutputType | null
    _avg: WatcherAvgAggregateOutputType | null
    _sum: WatcherSumAggregateOutputType | null
    _min: WatcherMinAggregateOutputType | null
    _max: WatcherMaxAggregateOutputType | null
  }

  type GetWatcherGroupByPayload<T extends WatcherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WatcherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WatcherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WatcherGroupByOutputType[P]>
            : GetScalarType<T[P], WatcherGroupByOutputType[P]>
        }
      >
    >


  export type WatcherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskId?: boolean
    name?: boolean
  }, ExtArgs["result"]["watcher"]>

  export type WatcherSelectScalar = {
    id?: boolean
    taskId?: boolean
    name?: boolean
  }


  export type $WatcherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Watcher"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      taskId: number
      name: string
    }, ExtArgs["result"]["watcher"]>
    composites: {}
  }


  type WatcherGetPayload<S extends boolean | null | undefined | WatcherDefaultArgs> = $Result.GetResult<Prisma.$WatcherPayload, S>

  type WatcherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WatcherFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: WatcherCountAggregateInputType | true
    }

  export interface WatcherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Watcher'], meta: { name: 'Watcher' } }
    /**
     * Find zero or one Watcher that matches the filter.
     * @param {WatcherFindUniqueArgs} args - Arguments to find a Watcher
     * @example
     * // Get one Watcher
     * const watcher = await prisma.watcher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WatcherFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, WatcherFindUniqueArgs<ExtArgs>>
    ): Prisma__WatcherClient<$Result.GetResult<Prisma.$WatcherPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Watcher that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WatcherFindUniqueOrThrowArgs} args - Arguments to find a Watcher
     * @example
     * // Get one Watcher
     * const watcher = await prisma.watcher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WatcherFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WatcherFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__WatcherClient<$Result.GetResult<Prisma.$WatcherPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Watcher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatcherFindFirstArgs} args - Arguments to find a Watcher
     * @example
     * // Get one Watcher
     * const watcher = await prisma.watcher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WatcherFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, WatcherFindFirstArgs<ExtArgs>>
    ): Prisma__WatcherClient<$Result.GetResult<Prisma.$WatcherPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Watcher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatcherFindFirstOrThrowArgs} args - Arguments to find a Watcher
     * @example
     * // Get one Watcher
     * const watcher = await prisma.watcher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WatcherFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, WatcherFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__WatcherClient<$Result.GetResult<Prisma.$WatcherPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Watchers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatcherFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Watchers
     * const watchers = await prisma.watcher.findMany()
     * 
     * // Get first 10 Watchers
     * const watchers = await prisma.watcher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const watcherWithIdOnly = await prisma.watcher.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WatcherFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WatcherFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WatcherPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Watcher.
     * @param {WatcherCreateArgs} args - Arguments to create a Watcher.
     * @example
     * // Create one Watcher
     * const Watcher = await prisma.watcher.create({
     *   data: {
     *     // ... data to create a Watcher
     *   }
     * })
     * 
    **/
    create<T extends WatcherCreateArgs<ExtArgs>>(
      args: SelectSubset<T, WatcherCreateArgs<ExtArgs>>
    ): Prisma__WatcherClient<$Result.GetResult<Prisma.$WatcherPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Watchers.
     *     @param {WatcherCreateManyArgs} args - Arguments to create many Watchers.
     *     @example
     *     // Create many Watchers
     *     const watcher = await prisma.watcher.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WatcherCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WatcherCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Watcher.
     * @param {WatcherDeleteArgs} args - Arguments to delete one Watcher.
     * @example
     * // Delete one Watcher
     * const Watcher = await prisma.watcher.delete({
     *   where: {
     *     // ... filter to delete one Watcher
     *   }
     * })
     * 
    **/
    delete<T extends WatcherDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, WatcherDeleteArgs<ExtArgs>>
    ): Prisma__WatcherClient<$Result.GetResult<Prisma.$WatcherPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Watcher.
     * @param {WatcherUpdateArgs} args - Arguments to update one Watcher.
     * @example
     * // Update one Watcher
     * const watcher = await prisma.watcher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WatcherUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, WatcherUpdateArgs<ExtArgs>>
    ): Prisma__WatcherClient<$Result.GetResult<Prisma.$WatcherPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Watchers.
     * @param {WatcherDeleteManyArgs} args - Arguments to filter Watchers to delete.
     * @example
     * // Delete a few Watchers
     * const { count } = await prisma.watcher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WatcherDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, WatcherDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Watchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatcherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Watchers
     * const watcher = await prisma.watcher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WatcherUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, WatcherUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Watcher.
     * @param {WatcherUpsertArgs} args - Arguments to update or create a Watcher.
     * @example
     * // Update or create a Watcher
     * const watcher = await prisma.watcher.upsert({
     *   create: {
     *     // ... data to create a Watcher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Watcher we want to update
     *   }
     * })
    **/
    upsert<T extends WatcherUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, WatcherUpsertArgs<ExtArgs>>
    ): Prisma__WatcherClient<$Result.GetResult<Prisma.$WatcherPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Watchers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatcherCountArgs} args - Arguments to filter Watchers to count.
     * @example
     * // Count the number of Watchers
     * const count = await prisma.watcher.count({
     *   where: {
     *     // ... the filter for the Watchers we want to count
     *   }
     * })
    **/
    count<T extends WatcherCountArgs>(
      args?: Subset<T, WatcherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WatcherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Watcher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatcherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WatcherAggregateArgs>(args: Subset<T, WatcherAggregateArgs>): Prisma.PrismaPromise<GetWatcherAggregateType<T>>

    /**
     * Group by Watcher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WatcherGroupByArgs} args - Group by arguments.
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
      T extends WatcherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WatcherGroupByArgs['orderBy'] }
        : { orderBy?: WatcherGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WatcherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWatcherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Watcher model
   */
  readonly fields: WatcherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Watcher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WatcherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Watcher model
   */ 
  interface WatcherFieldRefs {
    readonly id: FieldRef<"Watcher", 'Int'>
    readonly taskId: FieldRef<"Watcher", 'Int'>
    readonly name: FieldRef<"Watcher", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Watcher findUnique
   */
  export type WatcherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watcher
     */
    select?: WatcherSelect<ExtArgs> | null
    /**
     * Filter, which Watcher to fetch.
     */
    where: WatcherWhereUniqueInput
  }


  /**
   * Watcher findUniqueOrThrow
   */
  export type WatcherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watcher
     */
    select?: WatcherSelect<ExtArgs> | null
    /**
     * Filter, which Watcher to fetch.
     */
    where: WatcherWhereUniqueInput
  }


  /**
   * Watcher findFirst
   */
  export type WatcherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watcher
     */
    select?: WatcherSelect<ExtArgs> | null
    /**
     * Filter, which Watcher to fetch.
     */
    where?: WatcherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchers to fetch.
     */
    orderBy?: WatcherOrderByWithRelationInput | WatcherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchers.
     */
    cursor?: WatcherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchers.
     */
    distinct?: WatcherScalarFieldEnum | WatcherScalarFieldEnum[]
  }


  /**
   * Watcher findFirstOrThrow
   */
  export type WatcherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watcher
     */
    select?: WatcherSelect<ExtArgs> | null
    /**
     * Filter, which Watcher to fetch.
     */
    where?: WatcherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchers to fetch.
     */
    orderBy?: WatcherOrderByWithRelationInput | WatcherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Watchers.
     */
    cursor?: WatcherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Watchers.
     */
    distinct?: WatcherScalarFieldEnum | WatcherScalarFieldEnum[]
  }


  /**
   * Watcher findMany
   */
  export type WatcherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watcher
     */
    select?: WatcherSelect<ExtArgs> | null
    /**
     * Filter, which Watchers to fetch.
     */
    where?: WatcherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Watchers to fetch.
     */
    orderBy?: WatcherOrderByWithRelationInput | WatcherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Watchers.
     */
    cursor?: WatcherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Watchers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Watchers.
     */
    skip?: number
    distinct?: WatcherScalarFieldEnum | WatcherScalarFieldEnum[]
  }


  /**
   * Watcher create
   */
  export type WatcherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watcher
     */
    select?: WatcherSelect<ExtArgs> | null
    /**
     * The data needed to create a Watcher.
     */
    data: XOR<WatcherCreateInput, WatcherUncheckedCreateInput>
  }


  /**
   * Watcher createMany
   */
  export type WatcherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Watchers.
     */
    data: WatcherCreateManyInput | WatcherCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Watcher update
   */
  export type WatcherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watcher
     */
    select?: WatcherSelect<ExtArgs> | null
    /**
     * The data needed to update a Watcher.
     */
    data: XOR<WatcherUpdateInput, WatcherUncheckedUpdateInput>
    /**
     * Choose, which Watcher to update.
     */
    where: WatcherWhereUniqueInput
  }


  /**
   * Watcher updateMany
   */
  export type WatcherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Watchers.
     */
    data: XOR<WatcherUpdateManyMutationInput, WatcherUncheckedUpdateManyInput>
    /**
     * Filter which Watchers to update
     */
    where?: WatcherWhereInput
  }


  /**
   * Watcher upsert
   */
  export type WatcherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watcher
     */
    select?: WatcherSelect<ExtArgs> | null
    /**
     * The filter to search for the Watcher to update in case it exists.
     */
    where: WatcherWhereUniqueInput
    /**
     * In case the Watcher found by the `where` argument doesn't exist, create a new Watcher with this data.
     */
    create: XOR<WatcherCreateInput, WatcherUncheckedCreateInput>
    /**
     * In case the Watcher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WatcherUpdateInput, WatcherUncheckedUpdateInput>
  }


  /**
   * Watcher delete
   */
  export type WatcherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watcher
     */
    select?: WatcherSelect<ExtArgs> | null
    /**
     * Filter which Watcher to delete.
     */
    where: WatcherWhereUniqueInput
  }


  /**
   * Watcher deleteMany
   */
  export type WatcherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Watchers to delete
     */
    where?: WatcherWhereInput
  }


  /**
   * Watcher without action
   */
  export type WatcherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Watcher
     */
    select?: WatcherSelect<ExtArgs> | null
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


  export const TaskScalarFieldEnum: {
    id: 'id',
    title: 'title',
    assigneeName: 'assigneeName',
    assigneeAvatar: 'assigneeAvatar',
    status: 'status',
    creationDate: 'creationDate',
    description: 'description'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const TaskRelationScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    relatedId: 'relatedId'
  };

  export type TaskRelationScalarFieldEnum = (typeof TaskRelationScalarFieldEnum)[keyof typeof TaskRelationScalarFieldEnum]


  export const WatcherScalarFieldEnum: {
    id: 'id',
    taskId: 'taskId',
    name: 'name'
  };

  export type WatcherScalarFieldEnum = (typeof WatcherScalarFieldEnum)[keyof typeof WatcherScalarFieldEnum]


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


  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: IntFilter<"Task"> | number
    title?: StringFilter<"Task"> | string
    assigneeName?: StringFilter<"Task"> | string
    assigneeAvatar?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    creationDate?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    assigneeName?: SortOrder
    assigneeAvatar?: SortOrder
    status?: SortOrder
    creationDate?: SortOrder
    description?: SortOrder
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    title?: StringFilter<"Task"> | string
    assigneeName?: StringFilter<"Task"> | string
    assigneeAvatar?: StringFilter<"Task"> | string
    status?: StringFilter<"Task"> | string
    creationDate?: StringFilter<"Task"> | string
    description?: StringFilter<"Task"> | string
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    assigneeName?: SortOrder
    assigneeAvatar?: SortOrder
    status?: SortOrder
    creationDate?: SortOrder
    description?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _avg?: TaskAvgOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
    _sum?: TaskSumOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Task"> | number
    title?: StringWithAggregatesFilter<"Task"> | string
    assigneeName?: StringWithAggregatesFilter<"Task"> | string
    assigneeAvatar?: StringWithAggregatesFilter<"Task"> | string
    status?: StringWithAggregatesFilter<"Task"> | string
    creationDate?: StringWithAggregatesFilter<"Task"> | string
    description?: StringWithAggregatesFilter<"Task"> | string
  }

  export type TaskRelationWhereInput = {
    AND?: TaskRelationWhereInput | TaskRelationWhereInput[]
    OR?: TaskRelationWhereInput[]
    NOT?: TaskRelationWhereInput | TaskRelationWhereInput[]
    id?: IntFilter<"TaskRelation"> | number
    taskId?: IntFilter<"TaskRelation"> | number
    relatedId?: IntFilter<"TaskRelation"> | number
  }

  export type TaskRelationOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    relatedId?: SortOrder
  }

  export type TaskRelationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TaskRelationWhereInput | TaskRelationWhereInput[]
    OR?: TaskRelationWhereInput[]
    NOT?: TaskRelationWhereInput | TaskRelationWhereInput[]
    taskId?: IntFilter<"TaskRelation"> | number
    relatedId?: IntFilter<"TaskRelation"> | number
  }, "id">

  export type TaskRelationOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    relatedId?: SortOrder
    _count?: TaskRelationCountOrderByAggregateInput
    _avg?: TaskRelationAvgOrderByAggregateInput
    _max?: TaskRelationMaxOrderByAggregateInput
    _min?: TaskRelationMinOrderByAggregateInput
    _sum?: TaskRelationSumOrderByAggregateInput
  }

  export type TaskRelationScalarWhereWithAggregatesInput = {
    AND?: TaskRelationScalarWhereWithAggregatesInput | TaskRelationScalarWhereWithAggregatesInput[]
    OR?: TaskRelationScalarWhereWithAggregatesInput[]
    NOT?: TaskRelationScalarWhereWithAggregatesInput | TaskRelationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TaskRelation"> | number
    taskId?: IntWithAggregatesFilter<"TaskRelation"> | number
    relatedId?: IntWithAggregatesFilter<"TaskRelation"> | number
  }

  export type WatcherWhereInput = {
    AND?: WatcherWhereInput | WatcherWhereInput[]
    OR?: WatcherWhereInput[]
    NOT?: WatcherWhereInput | WatcherWhereInput[]
    id?: IntFilter<"Watcher"> | number
    taskId?: IntFilter<"Watcher"> | number
    name?: StringFilter<"Watcher"> | string
  }

  export type WatcherOrderByWithRelationInput = {
    id?: SortOrder
    taskId?: SortOrder
    name?: SortOrder
  }

  export type WatcherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WatcherWhereInput | WatcherWhereInput[]
    OR?: WatcherWhereInput[]
    NOT?: WatcherWhereInput | WatcherWhereInput[]
    taskId?: IntFilter<"Watcher"> | number
    name?: StringFilter<"Watcher"> | string
  }, "id">

  export type WatcherOrderByWithAggregationInput = {
    id?: SortOrder
    taskId?: SortOrder
    name?: SortOrder
    _count?: WatcherCountOrderByAggregateInput
    _avg?: WatcherAvgOrderByAggregateInput
    _max?: WatcherMaxOrderByAggregateInput
    _min?: WatcherMinOrderByAggregateInput
    _sum?: WatcherSumOrderByAggregateInput
  }

  export type WatcherScalarWhereWithAggregatesInput = {
    AND?: WatcherScalarWhereWithAggregatesInput | WatcherScalarWhereWithAggregatesInput[]
    OR?: WatcherScalarWhereWithAggregatesInput[]
    NOT?: WatcherScalarWhereWithAggregatesInput | WatcherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Watcher"> | number
    taskId?: IntWithAggregatesFilter<"Watcher"> | number
    name?: StringWithAggregatesFilter<"Watcher"> | string
  }

  export type TaskCreateInput = {
    title: string
    assigneeName?: string
    assigneeAvatar?: string
    status: string
    creationDate: string
    description: string
  }

  export type TaskUncheckedCreateInput = {
    id?: number
    title: string
    assigneeName?: string
    assigneeAvatar?: string
    status: string
    creationDate: string
    description: string
  }

  export type TaskUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    assigneeName?: StringFieldUpdateOperationsInput | string
    assigneeAvatar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    creationDate?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    assigneeName?: StringFieldUpdateOperationsInput | string
    assigneeAvatar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    creationDate?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManyInput = {
    id?: number
    title: string
    assigneeName?: string
    assigneeAvatar?: string
    status: string
    creationDate: string
    description: string
  }

  export type TaskUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    assigneeName?: StringFieldUpdateOperationsInput | string
    assigneeAvatar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    creationDate?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    assigneeName?: StringFieldUpdateOperationsInput | string
    assigneeAvatar?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    creationDate?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type TaskRelationCreateInput = {
    taskId: number
    relatedId: number
  }

  export type TaskRelationUncheckedCreateInput = {
    id?: number
    taskId: number
    relatedId: number
  }

  export type TaskRelationUpdateInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    relatedId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskRelationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    relatedId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskRelationCreateManyInput = {
    id?: number
    taskId: number
    relatedId: number
  }

  export type TaskRelationUpdateManyMutationInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    relatedId?: IntFieldUpdateOperationsInput | number
  }

  export type TaskRelationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    relatedId?: IntFieldUpdateOperationsInput | number
  }

  export type WatcherCreateInput = {
    taskId: number
    name: string
  }

  export type WatcherUncheckedCreateInput = {
    id?: number
    taskId: number
    name: string
  }

  export type WatcherUpdateInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WatcherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WatcherCreateManyInput = {
    id?: number
    taskId: number
    name: string
  }

  export type WatcherUpdateManyMutationInput = {
    taskId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WatcherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    taskId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    assigneeName?: SortOrder
    assigneeAvatar?: SortOrder
    status?: SortOrder
    creationDate?: SortOrder
    description?: SortOrder
  }

  export type TaskAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    assigneeName?: SortOrder
    assigneeAvatar?: SortOrder
    status?: SortOrder
    creationDate?: SortOrder
    description?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    assigneeName?: SortOrder
    assigneeAvatar?: SortOrder
    status?: SortOrder
    creationDate?: SortOrder
    description?: SortOrder
  }

  export type TaskSumOrderByAggregateInput = {
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

  export type TaskRelationCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    relatedId?: SortOrder
  }

  export type TaskRelationAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    relatedId?: SortOrder
  }

  export type TaskRelationMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    relatedId?: SortOrder
  }

  export type TaskRelationMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    relatedId?: SortOrder
  }

  export type TaskRelationSumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    relatedId?: SortOrder
  }

  export type WatcherCountOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    name?: SortOrder
  }

  export type WatcherAvgOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
  }

  export type WatcherMaxOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    name?: SortOrder
  }

  export type WatcherMinOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
    name?: SortOrder
  }

  export type WatcherSumOrderByAggregateInput = {
    id?: SortOrder
    taskId?: SortOrder
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskRelationDefaultArgs instead
     */
    export type TaskRelationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskRelationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WatcherDefaultArgs instead
     */
    export type WatcherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WatcherDefaultArgs<ExtArgs>

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