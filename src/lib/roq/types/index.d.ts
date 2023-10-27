/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model course
 *
 */
export type course = $Result.DefaultSelection<Prisma.$coursePayload>;
/**
 * Model parent
 *
 */
export type parent = $Result.DefaultSelection<Prisma.$parentPayload>;
/**
 * Model school
 *
 */
export type school = $Result.DefaultSelection<Prisma.$schoolPayload>;
/**
 * Model student
 *
 */
export type student = $Result.DefaultSelection<Prisma.$studentPayload>;
/**
 * Model teacher
 *
 */
export type teacher = $Result.DefaultSelection<Prisma.$teacherPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Courses
 * const courses = await prisma.course.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Courses
   * const courses = await prisma.course.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

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
  $use(cb: Prisma.Middleware): void;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.course`: Exposes CRUD operations for the **course** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Courses
   * const courses = await prisma.course.findMany()
   * ```
   */
  get course(): Prisma.courseDelegate<ExtArgs>;

  /**
   * `prisma.parent`: Exposes CRUD operations for the **parent** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Parents
   * const parents = await prisma.parent.findMany()
   * ```
   */
  get parent(): Prisma.parentDelegate<ExtArgs>;

  /**
   * `prisma.school`: Exposes CRUD operations for the **school** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Schools
   * const schools = await prisma.school.findMany()
   * ```
   */
  get school(): Prisma.schoolDelegate<ExtArgs>;

  /**
   * `prisma.student`: Exposes CRUD operations for the **student** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Students
   * const students = await prisma.student.findMany()
   * ```
   */
  get student(): Prisma.studentDelegate<ExtArgs>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **teacher** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Teachers
   * const teachers = await prisma.teacher.findMany()
   * ```
   */
  get teacher(): Prisma.teacherDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

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
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

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
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

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
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
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
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    course: 'course';
    parent: 'parent';
    school: 'school';
    student: 'student';
    teacher: 'teacher';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'course' | 'parent' | 'school' | 'student' | 'teacher' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      course: {
        payload: Prisma.$coursePayload<ExtArgs>;
        fields: Prisma.courseFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.courseFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.courseFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          findFirst: {
            args: Prisma.courseFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.courseFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          findMany: {
            args: Prisma.courseFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>[];
          };
          create: {
            args: Prisma.courseCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          createMany: {
            args: Prisma.courseCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.courseDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          update: {
            args: Prisma.courseUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          deleteMany: {
            args: Prisma.courseDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.courseUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.courseUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$coursePayload>;
          };
          aggregate: {
            args: Prisma.CourseAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCourse>;
          };
          groupBy: {
            args: Prisma.courseGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CourseGroupByOutputType>[];
          };
          count: {
            args: Prisma.courseCountArgs<ExtArgs>;
            result: $Utils.Optional<CourseCountAggregateOutputType> | number;
          };
        };
      };
      parent: {
        payload: Prisma.$parentPayload<ExtArgs>;
        fields: Prisma.parentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.parentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$parentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.parentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$parentPayload>;
          };
          findFirst: {
            args: Prisma.parentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$parentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.parentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$parentPayload>;
          };
          findMany: {
            args: Prisma.parentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$parentPayload>[];
          };
          create: {
            args: Prisma.parentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$parentPayload>;
          };
          createMany: {
            args: Prisma.parentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.parentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$parentPayload>;
          };
          update: {
            args: Prisma.parentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$parentPayload>;
          };
          deleteMany: {
            args: Prisma.parentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.parentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.parentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$parentPayload>;
          };
          aggregate: {
            args: Prisma.ParentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateParent>;
          };
          groupBy: {
            args: Prisma.parentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ParentGroupByOutputType>[];
          };
          count: {
            args: Prisma.parentCountArgs<ExtArgs>;
            result: $Utils.Optional<ParentCountAggregateOutputType> | number;
          };
        };
      };
      school: {
        payload: Prisma.$schoolPayload<ExtArgs>;
        fields: Prisma.schoolFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.schoolFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.schoolFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          findFirst: {
            args: Prisma.schoolFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.schoolFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          findMany: {
            args: Prisma.schoolFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>[];
          };
          create: {
            args: Prisma.schoolCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          createMany: {
            args: Prisma.schoolCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.schoolDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          update: {
            args: Prisma.schoolUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          deleteMany: {
            args: Prisma.schoolDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.schoolUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.schoolUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$schoolPayload>;
          };
          aggregate: {
            args: Prisma.SchoolAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateSchool>;
          };
          groupBy: {
            args: Prisma.schoolGroupByArgs<ExtArgs>;
            result: $Utils.Optional<SchoolGroupByOutputType>[];
          };
          count: {
            args: Prisma.schoolCountArgs<ExtArgs>;
            result: $Utils.Optional<SchoolCountAggregateOutputType> | number;
          };
        };
      };
      student: {
        payload: Prisma.$studentPayload<ExtArgs>;
        fields: Prisma.studentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.studentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.studentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          findFirst: {
            args: Prisma.studentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.studentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          findMany: {
            args: Prisma.studentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>[];
          };
          create: {
            args: Prisma.studentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          createMany: {
            args: Prisma.studentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.studentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          update: {
            args: Prisma.studentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          deleteMany: {
            args: Prisma.studentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.studentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.studentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$studentPayload>;
          };
          aggregate: {
            args: Prisma.StudentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateStudent>;
          };
          groupBy: {
            args: Prisma.studentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<StudentGroupByOutputType>[];
          };
          count: {
            args: Prisma.studentCountArgs<ExtArgs>;
            result: $Utils.Optional<StudentCountAggregateOutputType> | number;
          };
        };
      };
      teacher: {
        payload: Prisma.$teacherPayload<ExtArgs>;
        fields: Prisma.teacherFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.teacherFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.teacherFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          findFirst: {
            args: Prisma.teacherFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.teacherFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          findMany: {
            args: Prisma.teacherFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>[];
          };
          create: {
            args: Prisma.teacherCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          createMany: {
            args: Prisma.teacherCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.teacherDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          update: {
            args: Prisma.teacherUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          deleteMany: {
            args: Prisma.teacherDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.teacherUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.teacherUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$teacherPayload>;
          };
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateTeacher>;
          };
          groupBy: {
            args: Prisma.teacherGroupByArgs<ExtArgs>;
            result: $Utils.Optional<TeacherGroupByOutputType>[];
          };
          count: {
            args: Prisma.teacherCountArgs<ExtArgs>;
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
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
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
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
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type SchoolCountOutputType
   */

  export type SchoolCountOutputType = {
    course: number;
    student: number;
    teacher: number;
  };

  export type SchoolCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | SchoolCountOutputTypeCountCourseArgs;
    student?: boolean | SchoolCountOutputTypeCountStudentArgs;
    teacher?: boolean | SchoolCountOutputTypeCountTeacherArgs;
  };

  // Custom InputTypes

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolCountOutputType
     */
    select?: SchoolCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountCourseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: courseWhereInput;
    };

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountStudentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: studentWhereInput;
  };

  /**
   * SchoolCountOutputType without action
   */
  export type SchoolCountOutputTypeCountTeacherArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: teacherWhereInput;
  };

  /**
   * Count Type StudentCountOutputType
   */

  export type StudentCountOutputType = {
    parent: number;
  };

  export type StudentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | StudentCountOutputTypeCountParentArgs;
  };

  // Custom InputTypes

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentCountOutputType
     */
    select?: StudentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * StudentCountOutputType without action
   */
  export type StudentCountOutputTypeCountParentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: parentWhereInput;
  };

  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    course: number;
  };

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | TeacherCountOutputTypeCountCourseArgs;
  };

  // Custom InputTypes

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountCourseArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: courseWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    parent: number;
    school: number;
    student: number;
    teacher: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | UserCountOutputTypeCountParentArgs;
    school?: boolean | UserCountOutputTypeCountSchoolArgs;
    student?: boolean | UserCountOutputTypeCountStudentArgs;
    teacher?: boolean | UserCountOutputTypeCountTeacherArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountParentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: parentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSchoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schoolWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: studentWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: teacherWhereInput;
    };

  /**
   * Models
   */

  /**
   * Model course
   */

  export type AggregateCourse = {
    _count: CourseCountAggregateOutputType | null;
    _avg: CourseAvgAggregateOutputType | null;
    _sum: CourseSumAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
  };

  export type CourseAvgAggregateOutputType = {
    credits: number | null;
  };

  export type CourseSumAggregateOutputType = {
    credits: number | null;
  };

  export type CourseMinAggregateOutputType = {
    id: string | null;
    school_id: string | null;
    teacher_id: string | null;
    name: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    credits: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CourseMaxAggregateOutputType = {
    id: string | null;
    school_id: string | null;
    teacher_id: string | null;
    name: string | null;
    description: string | null;
    start_date: Date | null;
    end_date: Date | null;
    credits: number | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CourseCountAggregateOutputType = {
    id: number;
    school_id: number;
    teacher_id: number;
    name: number;
    description: number;
    start_date: number;
    end_date: number;
    credits: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CourseAvgAggregateInputType = {
    credits?: true;
  };

  export type CourseSumAggregateInputType = {
    credits?: true;
  };

  export type CourseMinAggregateInputType = {
    id?: true;
    school_id?: true;
    teacher_id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    credits?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CourseMaxAggregateInputType = {
    id?: true;
    school_id?: true;
    teacher_id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    credits?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CourseCountAggregateInputType = {
    id?: true;
    school_id?: true;
    teacher_id?: true;
    name?: true;
    description?: true;
    start_date?: true;
    end_date?: true;
    credits?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CourseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which course to aggregate.
     */
    where?: courseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: courseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned courses
     **/
    _count?: true | CourseCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CourseAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CourseSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CourseMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CourseMaxAggregateInputType;
  };

  export type GetCourseAggregateType<T extends CourseAggregateArgs> = {
    [P in keyof T & keyof AggregateCourse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourse[P]>
      : GetScalarType<T[P], AggregateCourse[P]>;
  };

  export type courseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: courseWhereInput;
    orderBy?: courseOrderByWithAggregationInput | courseOrderByWithAggregationInput[];
    by: CourseScalarFieldEnum[] | CourseScalarFieldEnum;
    having?: courseScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CourseCountAggregateInputType | true;
    _avg?: CourseAvgAggregateInputType;
    _sum?: CourseSumAggregateInputType;
    _min?: CourseMinAggregateInputType;
    _max?: CourseMaxAggregateInputType;
  };

  export type CourseGroupByOutputType = {
    id: string;
    school_id: string;
    teacher_id: string;
    name: string;
    description: string | null;
    start_date: Date;
    end_date: Date;
    credits: number;
    created_at: Date;
    updated_at: Date;
    _count: CourseCountAggregateOutputType | null;
    _avg: CourseAvgAggregateOutputType | null;
    _sum: CourseSumAggregateOutputType | null;
    _min: CourseMinAggregateOutputType | null;
    _max: CourseMaxAggregateOutputType | null;
  };

  type GetCourseGroupByPayload<T extends courseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourseGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CourseGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CourseGroupByOutputType[P]>
          : GetScalarType<T[P], CourseGroupByOutputType[P]>;
      }
    >
  >;

  export type courseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      school_id?: boolean;
      teacher_id?: boolean;
      name?: boolean;
      description?: boolean;
      start_date?: boolean;
      end_date?: boolean;
      credits?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      school?: boolean | schoolDefaultArgs<ExtArgs>;
      teacher?: boolean | teacherDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['course']
  >;

  export type courseSelectScalar = {
    id?: boolean;
    school_id?: boolean;
    teacher_id?: boolean;
    name?: boolean;
    description?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    credits?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type courseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    school?: boolean | schoolDefaultArgs<ExtArgs>;
    teacher?: boolean | teacherDefaultArgs<ExtArgs>;
  };

  export type $coursePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'course';
    objects: {
      school: Prisma.$schoolPayload<ExtArgs>;
      teacher: Prisma.$teacherPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        school_id: string;
        teacher_id: string;
        name: string;
        description: string | null;
        start_date: Date;
        end_date: Date;
        credits: number;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['course']
    >;
    composites: {};
  };

  type courseGetPayload<S extends boolean | null | undefined | courseDefaultArgs> = $Result.GetResult<
    Prisma.$coursePayload,
    S
  >;

  type courseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    courseFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: CourseCountAggregateInputType | true;
  };

  export interface courseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['course']; meta: { name: 'course' } };
    /**
     * Find zero or one Course that matches the filter.
     * @param {courseFindUniqueArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends courseFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, courseFindUniqueArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Course that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {courseFindUniqueOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends courseFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Course that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends courseFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindFirstArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Course that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindFirstOrThrowArgs} args - Arguments to find a Course
     * @example
     * // Get one Course
     * const course = await prisma.course.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends courseFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Courses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Courses
     * const courses = await prisma.course.findMany()
     *
     * // Get first 10 Courses
     * const courses = await prisma.course.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const courseWithIdOnly = await prisma.course.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends courseFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, courseFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Course.
     * @param {courseCreateArgs} args - Arguments to create a Course.
     * @example
     * // Create one Course
     * const Course = await prisma.course.create({
     *   data: {
     *     // ... data to create a Course
     *   }
     * })
     *
     **/
    create<T extends courseCreateArgs<ExtArgs>>(
      args: SelectSubset<T, courseCreateArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Courses.
     *     @param {courseCreateManyArgs} args - Arguments to create many Courses.
     *     @example
     *     // Create many Courses
     *     const course = await prisma.course.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends courseCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, courseCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Course.
     * @param {courseDeleteArgs} args - Arguments to delete one Course.
     * @example
     * // Delete one Course
     * const Course = await prisma.course.delete({
     *   where: {
     *     // ... filter to delete one Course
     *   }
     * })
     *
     **/
    delete<T extends courseDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, courseDeleteArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Course.
     * @param {courseUpdateArgs} args - Arguments to update one Course.
     * @example
     * // Update one Course
     * const course = await prisma.course.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends courseUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, courseUpdateArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Courses.
     * @param {courseDeleteManyArgs} args - Arguments to filter Courses to delete.
     * @example
     * // Delete a few Courses
     * const { count } = await prisma.course.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends courseDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, courseDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Courses
     * const course = await prisma.course.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends courseUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, courseUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Course.
     * @param {courseUpsertArgs} args - Arguments to update or create a Course.
     * @example
     * // Update or create a Course
     * const course = await prisma.course.upsert({
     *   create: {
     *     // ... data to create a Course
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Course we want to update
     *   }
     * })
     **/
    upsert<T extends courseUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, courseUpsertArgs<ExtArgs>>,
    ): Prisma__courseClient<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Courses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseCountArgs} args - Arguments to filter Courses to count.
     * @example
     * // Count the number of Courses
     * const count = await prisma.course.count({
     *   where: {
     *     // ... the filter for the Courses we want to count
     *   }
     * })
     **/
    count<T extends courseCountArgs>(
      args?: Subset<T, courseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourseCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourseAggregateArgs>(
      args: Subset<T, CourseAggregateArgs>,
    ): Prisma.PrismaPromise<GetCourseAggregateType<T>>;

    /**
     * Group by Course.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {courseGroupByArgs} args - Group by arguments.
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
      T extends courseGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: courseGroupByArgs['orderBy'] }
        : { orderBy?: courseGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, courseGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCourseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the course model
     */
    readonly fields: courseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for course.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__courseClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    school<T extends schoolDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, schoolDefaultArgs<ExtArgs>>,
    ): Prisma__schoolClient<
      $Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    teacher<T extends teacherDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, teacherDefaultArgs<ExtArgs>>,
    ): Prisma__teacherClient<
      $Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the course model
   */
  interface courseFieldRefs {
    readonly id: FieldRef<'course', 'String'>;
    readonly school_id: FieldRef<'course', 'String'>;
    readonly teacher_id: FieldRef<'course', 'String'>;
    readonly name: FieldRef<'course', 'String'>;
    readonly description: FieldRef<'course', 'String'>;
    readonly start_date: FieldRef<'course', 'DateTime'>;
    readonly end_date: FieldRef<'course', 'DateTime'>;
    readonly credits: FieldRef<'course', 'Int'>;
    readonly created_at: FieldRef<'course', 'DateTime'>;
    readonly updated_at: FieldRef<'course', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * course findUnique
   */
  export type courseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput;
  };

  /**
   * course findUniqueOrThrow
   */
  export type courseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter, which course to fetch.
     */
    where: courseWhereUniqueInput;
  };

  /**
   * course findFirst
   */
  export type courseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * course findFirstOrThrow
   */
  export type courseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter, which course to fetch.
     */
    where?: courseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for courses.
     */
    cursor?: courseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` courses.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of courses.
     */
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * course findMany
   */
  export type courseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter, which courses to fetch.
     */
    where?: courseWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of courses to fetch.
     */
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing courses.
     */
    cursor?: courseWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` courses from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` courses.
     */
    skip?: number;
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * course create
   */
  export type courseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * The data needed to create a course.
     */
    data: XOR<courseCreateInput, courseUncheckedCreateInput>;
  };

  /**
   * course createMany
   */
  export type courseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many courses.
     */
    data: courseCreateManyInput | courseCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * course update
   */
  export type courseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * The data needed to update a course.
     */
    data: XOR<courseUpdateInput, courseUncheckedUpdateInput>;
    /**
     * Choose, which course to update.
     */
    where: courseWhereUniqueInput;
  };

  /**
   * course updateMany
   */
  export type courseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update courses.
     */
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyInput>;
    /**
     * Filter which courses to update
     */
    where?: courseWhereInput;
  };

  /**
   * course upsert
   */
  export type courseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * The filter to search for the course to update in case it exists.
     */
    where: courseWhereUniqueInput;
    /**
     * In case the course found by the `where` argument doesn't exist, create a new course with this data.
     */
    create: XOR<courseCreateInput, courseUncheckedCreateInput>;
    /**
     * In case the course was found with the provided `where` argument, update it with this data.
     */
    update: XOR<courseUpdateInput, courseUncheckedUpdateInput>;
  };

  /**
   * course delete
   */
  export type courseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    /**
     * Filter which course to delete.
     */
    where: courseWhereUniqueInput;
  };

  /**
   * course deleteMany
   */
  export type courseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which courses to delete
     */
    where?: courseWhereInput;
  };

  /**
   * course without action
   */
  export type courseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
  };

  /**
   * Model parent
   */

  export type AggregateParent = {
    _count: ParentCountAggregateOutputType | null;
    _min: ParentMinAggregateOutputType | null;
    _max: ParentMaxAggregateOutputType | null;
  };

  export type ParentMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    student_id: string | null;
    relationship: string | null;
    phone_number: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ParentMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    student_id: string | null;
    relationship: string | null;
    phone_number: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ParentCountAggregateOutputType = {
    id: number;
    user_id: number;
    student_id: number;
    relationship: number;
    phone_number: number;
    address: number;
    city: number;
    state: number;
    zip_code: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ParentMinAggregateInputType = {
    id?: true;
    user_id?: true;
    student_id?: true;
    relationship?: true;
    phone_number?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ParentMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    student_id?: true;
    relationship?: true;
    phone_number?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ParentCountAggregateInputType = {
    id?: true;
    user_id?: true;
    student_id?: true;
    relationship?: true;
    phone_number?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ParentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which parent to aggregate.
     */
    where?: parentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of parents to fetch.
     */
    orderBy?: parentOrderByWithRelationInput | parentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: parentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` parents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` parents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned parents
     **/
    _count?: true | ParentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ParentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ParentMaxAggregateInputType;
  };

  export type GetParentAggregateType<T extends ParentAggregateArgs> = {
    [P in keyof T & keyof AggregateParent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParent[P]>
      : GetScalarType<T[P], AggregateParent[P]>;
  };

  export type parentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: parentWhereInput;
    orderBy?: parentOrderByWithAggregationInput | parentOrderByWithAggregationInput[];
    by: ParentScalarFieldEnum[] | ParentScalarFieldEnum;
    having?: parentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ParentCountAggregateInputType | true;
    _min?: ParentMinAggregateInputType;
    _max?: ParentMaxAggregateInputType;
  };

  export type ParentGroupByOutputType = {
    id: string;
    user_id: string;
    student_id: string;
    relationship: string;
    phone_number: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at: Date;
    updated_at: Date;
    _count: ParentCountAggregateOutputType | null;
    _min: ParentMinAggregateOutputType | null;
    _max: ParentMaxAggregateOutputType | null;
  };

  type GetParentGroupByPayload<T extends parentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ParentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ParentGroupByOutputType[P]>
          : GetScalarType<T[P], ParentGroupByOutputType[P]>;
      }
    >
  >;

  export type parentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      student_id?: boolean;
      relationship?: boolean;
      phone_number?: boolean;
      address?: boolean;
      city?: boolean;
      state?: boolean;
      zip_code?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      student?: boolean | studentDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['parent']
  >;

  export type parentSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    student_id?: boolean;
    relationship?: boolean;
    phone_number?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type parentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | studentDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $parentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'parent';
    objects: {
      student: Prisma.$studentPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        student_id: string;
        relationship: string;
        phone_number: string;
        address: string;
        city: string;
        state: string;
        zip_code: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['parent']
    >;
    composites: {};
  };

  type parentGetPayload<S extends boolean | null | undefined | parentDefaultArgs> = $Result.GetResult<
    Prisma.$parentPayload,
    S
  >;

  type parentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    parentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: ParentCountAggregateInputType | true;
  };

  export interface parentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['parent']; meta: { name: 'parent' } };
    /**
     * Find zero or one Parent that matches the filter.
     * @param {parentFindUniqueArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends parentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, parentFindUniqueArgs<ExtArgs>>,
    ): Prisma__parentClient<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Parent that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {parentFindUniqueOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends parentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, parentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__parentClient<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Parent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parentFindFirstArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends parentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, parentFindFirstArgs<ExtArgs>>,
    ): Prisma__parentClient<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Parent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parentFindFirstOrThrowArgs} args - Arguments to find a Parent
     * @example
     * // Get one Parent
     * const parent = await prisma.parent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends parentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, parentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__parentClient<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Parents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Parents
     * const parents = await prisma.parent.findMany()
     *
     * // Get first 10 Parents
     * const parents = await prisma.parent.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const parentWithIdOnly = await prisma.parent.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends parentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, parentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Parent.
     * @param {parentCreateArgs} args - Arguments to create a Parent.
     * @example
     * // Create one Parent
     * const Parent = await prisma.parent.create({
     *   data: {
     *     // ... data to create a Parent
     *   }
     * })
     *
     **/
    create<T extends parentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, parentCreateArgs<ExtArgs>>,
    ): Prisma__parentClient<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Parents.
     *     @param {parentCreateManyArgs} args - Arguments to create many Parents.
     *     @example
     *     // Create many Parents
     *     const parent = await prisma.parent.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends parentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, parentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Parent.
     * @param {parentDeleteArgs} args - Arguments to delete one Parent.
     * @example
     * // Delete one Parent
     * const Parent = await prisma.parent.delete({
     *   where: {
     *     // ... filter to delete one Parent
     *   }
     * })
     *
     **/
    delete<T extends parentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, parentDeleteArgs<ExtArgs>>,
    ): Prisma__parentClient<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Parent.
     * @param {parentUpdateArgs} args - Arguments to update one Parent.
     * @example
     * // Update one Parent
     * const parent = await prisma.parent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends parentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, parentUpdateArgs<ExtArgs>>,
    ): Prisma__parentClient<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Parents.
     * @param {parentDeleteManyArgs} args - Arguments to filter Parents to delete.
     * @example
     * // Delete a few Parents
     * const { count } = await prisma.parent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends parentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, parentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Parents
     * const parent = await prisma.parent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends parentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, parentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Parent.
     * @param {parentUpsertArgs} args - Arguments to update or create a Parent.
     * @example
     * // Update or create a Parent
     * const parent = await prisma.parent.upsert({
     *   create: {
     *     // ... data to create a Parent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Parent we want to update
     *   }
     * })
     **/
    upsert<T extends parentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, parentUpsertArgs<ExtArgs>>,
    ): Prisma__parentClient<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Parents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parentCountArgs} args - Arguments to filter Parents to count.
     * @example
     * // Count the number of Parents
     * const count = await prisma.parent.count({
     *   where: {
     *     // ... the filter for the Parents we want to count
     *   }
     * })
     **/
    count<T extends parentCountArgs>(
      args?: Subset<T, parentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ParentAggregateArgs>(
      args: Subset<T, ParentAggregateArgs>,
    ): Prisma.PrismaPromise<GetParentAggregateType<T>>;

    /**
     * Group by Parent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {parentGroupByArgs} args - Group by arguments.
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
      T extends parentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: parentGroupByArgs['orderBy'] }
        : { orderBy?: parentGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, parentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetParentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the parent model
     */
    readonly fields: parentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for parent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__parentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    student<T extends studentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, studentDefaultArgs<ExtArgs>>,
    ): Prisma__studentClient<
      $Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the parent model
   */
  interface parentFieldRefs {
    readonly id: FieldRef<'parent', 'String'>;
    readonly user_id: FieldRef<'parent', 'String'>;
    readonly student_id: FieldRef<'parent', 'String'>;
    readonly relationship: FieldRef<'parent', 'String'>;
    readonly phone_number: FieldRef<'parent', 'String'>;
    readonly address: FieldRef<'parent', 'String'>;
    readonly city: FieldRef<'parent', 'String'>;
    readonly state: FieldRef<'parent', 'String'>;
    readonly zip_code: FieldRef<'parent', 'String'>;
    readonly created_at: FieldRef<'parent', 'DateTime'>;
    readonly updated_at: FieldRef<'parent', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * parent findUnique
   */
  export type parentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude<ExtArgs> | null;
    /**
     * Filter, which parent to fetch.
     */
    where: parentWhereUniqueInput;
  };

  /**
   * parent findUniqueOrThrow
   */
  export type parentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude<ExtArgs> | null;
    /**
     * Filter, which parent to fetch.
     */
    where: parentWhereUniqueInput;
  };

  /**
   * parent findFirst
   */
  export type parentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude<ExtArgs> | null;
    /**
     * Filter, which parent to fetch.
     */
    where?: parentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of parents to fetch.
     */
    orderBy?: parentOrderByWithRelationInput | parentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for parents.
     */
    cursor?: parentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` parents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` parents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[];
  };

  /**
   * parent findFirstOrThrow
   */
  export type parentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude<ExtArgs> | null;
    /**
     * Filter, which parent to fetch.
     */
    where?: parentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of parents to fetch.
     */
    orderBy?: parentOrderByWithRelationInput | parentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for parents.
     */
    cursor?: parentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` parents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` parents.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of parents.
     */
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[];
  };

  /**
   * parent findMany
   */
  export type parentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude<ExtArgs> | null;
    /**
     * Filter, which parents to fetch.
     */
    where?: parentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of parents to fetch.
     */
    orderBy?: parentOrderByWithRelationInput | parentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing parents.
     */
    cursor?: parentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` parents from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` parents.
     */
    skip?: number;
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[];
  };

  /**
   * parent create
   */
  export type parentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude<ExtArgs> | null;
    /**
     * The data needed to create a parent.
     */
    data: XOR<parentCreateInput, parentUncheckedCreateInput>;
  };

  /**
   * parent createMany
   */
  export type parentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many parents.
     */
    data: parentCreateManyInput | parentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * parent update
   */
  export type parentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude<ExtArgs> | null;
    /**
     * The data needed to update a parent.
     */
    data: XOR<parentUpdateInput, parentUncheckedUpdateInput>;
    /**
     * Choose, which parent to update.
     */
    where: parentWhereUniqueInput;
  };

  /**
   * parent updateMany
   */
  export type parentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update parents.
     */
    data: XOR<parentUpdateManyMutationInput, parentUncheckedUpdateManyInput>;
    /**
     * Filter which parents to update
     */
    where?: parentWhereInput;
  };

  /**
   * parent upsert
   */
  export type parentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude<ExtArgs> | null;
    /**
     * The filter to search for the parent to update in case it exists.
     */
    where: parentWhereUniqueInput;
    /**
     * In case the parent found by the `where` argument doesn't exist, create a new parent with this data.
     */
    create: XOR<parentCreateInput, parentUncheckedCreateInput>;
    /**
     * In case the parent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<parentUpdateInput, parentUncheckedUpdateInput>;
  };

  /**
   * parent delete
   */
  export type parentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude<ExtArgs> | null;
    /**
     * Filter which parent to delete.
     */
    where: parentWhereUniqueInput;
  };

  /**
   * parent deleteMany
   */
  export type parentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which parents to delete
     */
    where?: parentWhereInput;
  };

  /**
   * parent without action
   */
  export type parentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude<ExtArgs> | null;
  };

  /**
   * Model school
   */

  export type AggregateSchool = {
    _count: SchoolCountAggregateOutputType | null;
    _min: SchoolMinAggregateOutputType | null;
    _max: SchoolMaxAggregateOutputType | null;
  };

  export type SchoolMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type SchoolMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type SchoolCountAggregateOutputType = {
    id: number;
    description: number;
    address: number;
    city: number;
    state: number;
    zip_code: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type SchoolMinAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type SchoolMaxAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type SchoolCountAggregateInputType = {
    id?: true;
    description?: true;
    address?: true;
    city?: true;
    state?: true;
    zip_code?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type SchoolAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which school to aggregate.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned schools
     **/
    _count?: true | SchoolCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: SchoolMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: SchoolMaxAggregateInputType;
  };

  export type GetSchoolAggregateType<T extends SchoolAggregateArgs> = {
    [P in keyof T & keyof AggregateSchool]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchool[P]>
      : GetScalarType<T[P], AggregateSchool[P]>;
  };

  export type schoolGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: schoolWhereInput;
    orderBy?: schoolOrderByWithAggregationInput | schoolOrderByWithAggregationInput[];
    by: SchoolScalarFieldEnum[] | SchoolScalarFieldEnum;
    having?: schoolScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SchoolCountAggregateInputType | true;
    _min?: SchoolMinAggregateInputType;
    _max?: SchoolMaxAggregateInputType;
  };

  export type SchoolGroupByOutputType = {
    id: string;
    description: string | null;
    address: string | null;
    city: string | null;
    state: string | null;
    zip_code: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: SchoolCountAggregateOutputType | null;
    _min: SchoolMinAggregateOutputType | null;
    _max: SchoolMaxAggregateOutputType | null;
  };

  type GetSchoolGroupByPayload<T extends schoolGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolGroupByOutputType, T['by']> & {
        [P in keyof T & keyof SchoolGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], SchoolGroupByOutputType[P]>
          : GetScalarType<T[P], SchoolGroupByOutputType[P]>;
      }
    >
  >;

  export type schoolSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      address?: boolean;
      city?: boolean;
      state?: boolean;
      zip_code?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      course?: boolean | school$courseArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      student?: boolean | school$studentArgs<ExtArgs>;
      teacher?: boolean | school$teacherArgs<ExtArgs>;
      _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['school']
  >;

  export type schoolSelectScalar = {
    id?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    state?: boolean;
    zip_code?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type schoolInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | school$courseArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    student?: boolean | school$studentArgs<ExtArgs>;
    teacher?: boolean | school$teacherArgs<ExtArgs>;
    _count?: boolean | SchoolCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $schoolPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'school';
    objects: {
      course: Prisma.$coursePayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
      student: Prisma.$studentPayload<ExtArgs>[];
      teacher: Prisma.$teacherPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        address: string | null;
        city: string | null;
        state: string | null;
        zip_code: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['school']
    >;
    composites: {};
  };

  type schoolGetPayload<S extends boolean | null | undefined | schoolDefaultArgs> = $Result.GetResult<
    Prisma.$schoolPayload,
    S
  >;

  type schoolCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    schoolFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: SchoolCountAggregateInputType | true;
  };

  export interface schoolDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['school']; meta: { name: 'school' } };
    /**
     * Find zero or one School that matches the filter.
     * @param {schoolFindUniqueArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends schoolFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, schoolFindUniqueArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one School that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {schoolFindUniqueOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends schoolFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first School that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolFindFirstArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends schoolFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindFirstArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first School that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolFindFirstOrThrowArgs} args - Arguments to find a School
     * @example
     * // Get one School
     * const school = await prisma.school.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends schoolFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Schools that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schools
     * const schools = await prisma.school.findMany()
     *
     * // Get first 10 Schools
     * const schools = await prisma.school.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const schoolWithIdOnly = await prisma.school.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends schoolFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a School.
     * @param {schoolCreateArgs} args - Arguments to create a School.
     * @example
     * // Create one School
     * const School = await prisma.school.create({
     *   data: {
     *     // ... data to create a School
     *   }
     * })
     *
     **/
    create<T extends schoolCreateArgs<ExtArgs>>(
      args: SelectSubset<T, schoolCreateArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Schools.
     *     @param {schoolCreateManyArgs} args - Arguments to create many Schools.
     *     @example
     *     // Create many Schools
     *     const school = await prisma.school.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends schoolCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a School.
     * @param {schoolDeleteArgs} args - Arguments to delete one School.
     * @example
     * // Delete one School
     * const School = await prisma.school.delete({
     *   where: {
     *     // ... filter to delete one School
     *   }
     * })
     *
     **/
    delete<T extends schoolDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, schoolDeleteArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one School.
     * @param {schoolUpdateArgs} args - Arguments to update one School.
     * @example
     * // Update one School
     * const school = await prisma.school.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends schoolUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, schoolUpdateArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Schools.
     * @param {schoolDeleteManyArgs} args - Arguments to filter Schools to delete.
     * @example
     * // Delete a few Schools
     * const { count } = await prisma.school.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends schoolDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, schoolDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schools
     * const school = await prisma.school.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends schoolUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, schoolUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one School.
     * @param {schoolUpsertArgs} args - Arguments to update or create a School.
     * @example
     * // Update or create a School
     * const school = await prisma.school.upsert({
     *   create: {
     *     // ... data to create a School
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the School we want to update
     *   }
     * })
     **/
    upsert<T extends schoolUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, schoolUpsertArgs<ExtArgs>>,
    ): Prisma__schoolClient<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Schools.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolCountArgs} args - Arguments to filter Schools to count.
     * @example
     * // Count the number of Schools
     * const count = await prisma.school.count({
     *   where: {
     *     // ... the filter for the Schools we want to count
     *   }
     * })
     **/
    count<T extends schoolCountArgs>(
      args?: Subset<T, schoolCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolAggregateArgs>(
      args: Subset<T, SchoolAggregateArgs>,
    ): Prisma.PrismaPromise<GetSchoolAggregateType<T>>;

    /**
     * Group by School.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {schoolGroupByArgs} args - Group by arguments.
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
      T extends schoolGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: schoolGroupByArgs['orderBy'] }
        : { orderBy?: schoolGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, schoolGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetSchoolGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the school model
     */
    readonly fields: schoolFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for school.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__schoolClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    course<T extends school$courseArgs<ExtArgs> = {}>(
      args?: Subset<T, school$courseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    student<T extends school$studentArgs<ExtArgs> = {}>(
      args?: Subset<T, school$studentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findMany'> | Null>;

    teacher<T extends school$teacherArgs<ExtArgs> = {}>(
      args?: Subset<T, school$teacherArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the school model
   */
  interface schoolFieldRefs {
    readonly id: FieldRef<'school', 'String'>;
    readonly description: FieldRef<'school', 'String'>;
    readonly address: FieldRef<'school', 'String'>;
    readonly city: FieldRef<'school', 'String'>;
    readonly state: FieldRef<'school', 'String'>;
    readonly zip_code: FieldRef<'school', 'String'>;
    readonly name: FieldRef<'school', 'String'>;
    readonly created_at: FieldRef<'school', 'DateTime'>;
    readonly updated_at: FieldRef<'school', 'DateTime'>;
    readonly user_id: FieldRef<'school', 'String'>;
    readonly tenant_id: FieldRef<'school', 'String'>;
  }

  // Custom InputTypes

  /**
   * school findUnique
   */
  export type schoolFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school findUniqueOrThrow
   */
  export type schoolFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school findFirst
   */
  export type schoolFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schools.
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * school findFirstOrThrow
   */
  export type schoolFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which school to fetch.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for schools.
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of schools.
     */
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * school findMany
   */
  export type schoolFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter, which schools to fetch.
     */
    where?: schoolWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of schools to fetch.
     */
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing schools.
     */
    cursor?: schoolWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` schools from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` schools.
     */
    skip?: number;
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * school create
   */
  export type schoolCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * The data needed to create a school.
     */
    data: XOR<schoolCreateInput, schoolUncheckedCreateInput>;
  };

  /**
   * school createMany
   */
  export type schoolCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many schools.
     */
    data: schoolCreateManyInput | schoolCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * school update
   */
  export type schoolUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * The data needed to update a school.
     */
    data: XOR<schoolUpdateInput, schoolUncheckedUpdateInput>;
    /**
     * Choose, which school to update.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school updateMany
   */
  export type schoolUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update schools.
     */
    data: XOR<schoolUpdateManyMutationInput, schoolUncheckedUpdateManyInput>;
    /**
     * Filter which schools to update
     */
    where?: schoolWhereInput;
  };

  /**
   * school upsert
   */
  export type schoolUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * The filter to search for the school to update in case it exists.
     */
    where: schoolWhereUniqueInput;
    /**
     * In case the school found by the `where` argument doesn't exist, create a new school with this data.
     */
    create: XOR<schoolCreateInput, schoolUncheckedCreateInput>;
    /**
     * In case the school was found with the provided `where` argument, update it with this data.
     */
    update: XOR<schoolUpdateInput, schoolUncheckedUpdateInput>;
  };

  /**
   * school delete
   */
  export type schoolDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    /**
     * Filter which school to delete.
     */
    where: schoolWhereUniqueInput;
  };

  /**
   * school deleteMany
   */
  export type schoolDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which schools to delete
     */
    where?: schoolWhereInput;
  };

  /**
   * school.course
   */
  export type school$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    where?: courseWhereInput;
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    cursor?: courseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * school.student
   */
  export type school$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    where?: studentWhereInput;
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    cursor?: studentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * school.teacher
   */
  export type school$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    where?: teacherWhereInput;
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    cursor?: teacherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[];
  };

  /**
   * school without action
   */
  export type schoolDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
  };

  /**
   * Model student
   */

  export type AggregateStudent = {
    _count: StudentCountAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
  };

  export type StudentMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    school_id: string | null;
    grade_level: string | null;
    enrollment_date: Date | null;
    graduation_date: Date | null;
    major: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StudentMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    school_id: string | null;
    grade_level: string | null;
    enrollment_date: Date | null;
    graduation_date: Date | null;
    major: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type StudentCountAggregateOutputType = {
    id: number;
    user_id: number;
    school_id: number;
    grade_level: number;
    enrollment_date: number;
    graduation_date: number;
    major: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type StudentMinAggregateInputType = {
    id?: true;
    user_id?: true;
    school_id?: true;
    grade_level?: true;
    enrollment_date?: true;
    graduation_date?: true;
    major?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StudentMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    school_id?: true;
    grade_level?: true;
    enrollment_date?: true;
    graduation_date?: true;
    major?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type StudentCountAggregateInputType = {
    id?: true;
    user_id?: true;
    school_id?: true;
    grade_level?: true;
    enrollment_date?: true;
    graduation_date?: true;
    major?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type StudentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which student to aggregate.
     */
    where?: studentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: studentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned students
     **/
    _count?: true | StudentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: StudentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: StudentMaxAggregateInputType;
  };

  export type GetStudentAggregateType<T extends StudentAggregateArgs> = {
    [P in keyof T & keyof AggregateStudent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudent[P]>
      : GetScalarType<T[P], AggregateStudent[P]>;
  };

  export type studentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: studentWhereInput;
    orderBy?: studentOrderByWithAggregationInput | studentOrderByWithAggregationInput[];
    by: StudentScalarFieldEnum[] | StudentScalarFieldEnum;
    having?: studentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StudentCountAggregateInputType | true;
    _min?: StudentMinAggregateInputType;
    _max?: StudentMaxAggregateInputType;
  };

  export type StudentGroupByOutputType = {
    id: string;
    user_id: string;
    school_id: string;
    grade_level: string;
    enrollment_date: Date;
    graduation_date: Date | null;
    major: string | null;
    created_at: Date;
    updated_at: Date;
    _count: StudentCountAggregateOutputType | null;
    _min: StudentMinAggregateOutputType | null;
    _max: StudentMaxAggregateOutputType | null;
  };

  type GetStudentGroupByPayload<T extends studentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof StudentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], StudentGroupByOutputType[P]>
          : GetScalarType<T[P], StudentGroupByOutputType[P]>;
      }
    >
  >;

  export type studentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      school_id?: boolean;
      grade_level?: boolean;
      enrollment_date?: boolean;
      graduation_date?: boolean;
      major?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      parent?: boolean | student$parentArgs<ExtArgs>;
      school?: boolean | schoolDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['student']
  >;

  export type studentSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    school_id?: boolean;
    grade_level?: boolean;
    enrollment_date?: boolean;
    graduation_date?: boolean;
    major?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type studentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | student$parentArgs<ExtArgs>;
    school?: boolean | schoolDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | StudentCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $studentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'student';
    objects: {
      parent: Prisma.$parentPayload<ExtArgs>[];
      school: Prisma.$schoolPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        school_id: string;
        grade_level: string;
        enrollment_date: Date;
        graduation_date: Date | null;
        major: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['student']
    >;
    composites: {};
  };

  type studentGetPayload<S extends boolean | null | undefined | studentDefaultArgs> = $Result.GetResult<
    Prisma.$studentPayload,
    S
  >;

  type studentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    studentFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: StudentCountAggregateInputType | true;
  };

  export interface studentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['student']; meta: { name: 'student' } };
    /**
     * Find zero or one Student that matches the filter.
     * @param {studentFindUniqueArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends studentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, studentFindUniqueArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Student that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {studentFindUniqueOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends studentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__studentClient<
      $Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Student that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends studentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindFirstArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Student that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindFirstOrThrowArgs} args - Arguments to find a Student
     * @example
     * // Get one Student
     * const student = await prisma.student.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends studentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.student.findMany()
     *
     * // Get first 10 Students
     * const students = await prisma.student.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const studentWithIdOnly = await prisma.student.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends studentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Student.
     * @param {studentCreateArgs} args - Arguments to create a Student.
     * @example
     * // Create one Student
     * const Student = await prisma.student.create({
     *   data: {
     *     // ... data to create a Student
     *   }
     * })
     *
     **/
    create<T extends studentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, studentCreateArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Students.
     *     @param {studentCreateManyArgs} args - Arguments to create many Students.
     *     @example
     *     // Create many Students
     *     const student = await prisma.student.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends studentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Student.
     * @param {studentDeleteArgs} args - Arguments to delete one Student.
     * @example
     * // Delete one Student
     * const Student = await prisma.student.delete({
     *   where: {
     *     // ... filter to delete one Student
     *   }
     * })
     *
     **/
    delete<T extends studentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, studentDeleteArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Student.
     * @param {studentUpdateArgs} args - Arguments to update one Student.
     * @example
     * // Update one Student
     * const student = await prisma.student.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends studentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, studentUpdateArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Students.
     * @param {studentDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.student.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends studentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, studentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const student = await prisma.student.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends studentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, studentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Student.
     * @param {studentUpsertArgs} args - Arguments to update or create a Student.
     * @example
     * // Update or create a Student
     * const student = await prisma.student.upsert({
     *   create: {
     *     // ... data to create a Student
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Student we want to update
     *   }
     * })
     **/
    upsert<T extends studentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, studentUpsertArgs<ExtArgs>>,
    ): Prisma__studentClient<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.student.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
     **/
    count<T extends studentCountArgs>(
      args?: Subset<T, studentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentAggregateArgs>(
      args: Subset<T, StudentAggregateArgs>,
    ): Prisma.PrismaPromise<GetStudentAggregateType<T>>;

    /**
     * Group by Student.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {studentGroupByArgs} args - Group by arguments.
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
      T extends studentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: studentGroupByArgs['orderBy'] }
        : { orderBy?: studentGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, studentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetStudentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the student model
     */
    readonly fields: studentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for student.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__studentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parent<T extends student$parentArgs<ExtArgs> = {}>(
      args?: Subset<T, student$parentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, 'findMany'> | Null>;

    school<T extends schoolDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, schoolDefaultArgs<ExtArgs>>,
    ): Prisma__schoolClient<
      $Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the student model
   */
  interface studentFieldRefs {
    readonly id: FieldRef<'student', 'String'>;
    readonly user_id: FieldRef<'student', 'String'>;
    readonly school_id: FieldRef<'student', 'String'>;
    readonly grade_level: FieldRef<'student', 'String'>;
    readonly enrollment_date: FieldRef<'student', 'DateTime'>;
    readonly graduation_date: FieldRef<'student', 'DateTime'>;
    readonly major: FieldRef<'student', 'String'>;
    readonly created_at: FieldRef<'student', 'DateTime'>;
    readonly updated_at: FieldRef<'student', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * student findUnique
   */
  export type studentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput;
  };

  /**
   * student findUniqueOrThrow
   */
  export type studentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which student to fetch.
     */
    where: studentWhereUniqueInput;
  };

  /**
   * student findFirst
   */
  export type studentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * student findFirstOrThrow
   */
  export type studentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which student to fetch.
     */
    where?: studentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for students.
     */
    cursor?: studentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of students.
     */
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * student findMany
   */
  export type studentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter, which students to fetch.
     */
    where?: studentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of students to fetch.
     */
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing students.
     */
    cursor?: studentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` students from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` students.
     */
    skip?: number;
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * student create
   */
  export type studentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * The data needed to create a student.
     */
    data: XOR<studentCreateInput, studentUncheckedCreateInput>;
  };

  /**
   * student createMany
   */
  export type studentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many students.
     */
    data: studentCreateManyInput | studentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * student update
   */
  export type studentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * The data needed to update a student.
     */
    data: XOR<studentUpdateInput, studentUncheckedUpdateInput>;
    /**
     * Choose, which student to update.
     */
    where: studentWhereUniqueInput;
  };

  /**
   * student updateMany
   */
  export type studentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update students.
     */
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyInput>;
    /**
     * Filter which students to update
     */
    where?: studentWhereInput;
  };

  /**
   * student upsert
   */
  export type studentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * The filter to search for the student to update in case it exists.
     */
    where: studentWhereUniqueInput;
    /**
     * In case the student found by the `where` argument doesn't exist, create a new student with this data.
     */
    create: XOR<studentCreateInput, studentUncheckedCreateInput>;
    /**
     * In case the student was found with the provided `where` argument, update it with this data.
     */
    update: XOR<studentUpdateInput, studentUncheckedUpdateInput>;
  };

  /**
   * student delete
   */
  export type studentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    /**
     * Filter which student to delete.
     */
    where: studentWhereUniqueInput;
  };

  /**
   * student deleteMany
   */
  export type studentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which students to delete
     */
    where?: studentWhereInput;
  };

  /**
   * student.parent
   */
  export type student$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude<ExtArgs> | null;
    where?: parentWhereInput;
    orderBy?: parentOrderByWithRelationInput | parentOrderByWithRelationInput[];
    cursor?: parentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[];
  };

  /**
   * student without action
   */
  export type studentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
  };

  /**
   * Model teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null;
    _min: TeacherMinAggregateOutputType | null;
    _max: TeacherMaxAggregateOutputType | null;
  };

  export type TeacherMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    school_id: string | null;
    subject: string | null;
    hire_date: Date | null;
    termination_date: Date | null;
    department: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeacherMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    school_id: string | null;
    subject: string | null;
    hire_date: Date | null;
    termination_date: Date | null;
    department: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type TeacherCountAggregateOutputType = {
    id: number;
    user_id: number;
    school_id: number;
    subject: number;
    hire_date: number;
    termination_date: number;
    department: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type TeacherMinAggregateInputType = {
    id?: true;
    user_id?: true;
    school_id?: true;
    subject?: true;
    hire_date?: true;
    termination_date?: true;
    department?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeacherMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    school_id?: true;
    subject?: true;
    hire_date?: true;
    termination_date?: true;
    department?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type TeacherCountAggregateInputType = {
    id?: true;
    user_id?: true;
    school_id?: true;
    subject?: true;
    hire_date?: true;
    termination_date?: true;
    department?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teacher to aggregate.
     */
    where?: teacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: teacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teachers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned teachers
     **/
    _count?: true | TeacherCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: TeacherMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: TeacherMaxAggregateInputType;
  };

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
    [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>;
  };

  export type teacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: teacherWhereInput;
    orderBy?: teacherOrderByWithAggregationInput | teacherOrderByWithAggregationInput[];
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum;
    having?: teacherScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TeacherCountAggregateInputType | true;
    _min?: TeacherMinAggregateInputType;
    _max?: TeacherMaxAggregateInputType;
  };

  export type TeacherGroupByOutputType = {
    id: string;
    user_id: string;
    school_id: string;
    subject: string;
    hire_date: Date;
    termination_date: Date | null;
    department: string | null;
    created_at: Date;
    updated_at: Date;
    _count: TeacherCountAggregateOutputType | null;
    _min: TeacherMinAggregateOutputType | null;
    _max: TeacherMaxAggregateOutputType | null;
  };

  type GetTeacherGroupByPayload<T extends teacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> & {
        [P in keyof T & keyof TeacherGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
          : GetScalarType<T[P], TeacherGroupByOutputType[P]>;
      }
    >
  >;

  export type teacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      user_id?: boolean;
      school_id?: boolean;
      subject?: boolean;
      hire_date?: boolean;
      termination_date?: boolean;
      department?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      course?: boolean | teacher$courseArgs<ExtArgs>;
      school?: boolean | schoolDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['teacher']
  >;

  export type teacherSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    school_id?: boolean;
    subject?: boolean;
    hire_date?: boolean;
    termination_date?: boolean;
    department?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type teacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    course?: boolean | teacher$courseArgs<ExtArgs>;
    school?: boolean | schoolDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $teacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'teacher';
    objects: {
      course: Prisma.$coursePayload<ExtArgs>[];
      school: Prisma.$schoolPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        user_id: string;
        school_id: string;
        subject: string;
        hire_date: Date;
        termination_date: Date | null;
        department: string | null;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['teacher']
    >;
    composites: {};
  };

  type teacherGetPayload<S extends boolean | null | undefined | teacherDefaultArgs> = $Result.GetResult<
    Prisma.$teacherPayload,
    S
  >;

  type teacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    teacherFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: TeacherCountAggregateInputType | true;
  };

  export interface teacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['teacher']; meta: { name: 'teacher' } };
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {teacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends teacherFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, teacherFindUniqueArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Teacher that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {teacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends teacherFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__teacherClient<
      $Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends teacherFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindFirstArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends teacherFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     *
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends teacherFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Teacher.
     * @param {teacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     *
     **/
    create<T extends teacherCreateArgs<ExtArgs>>(
      args: SelectSubset<T, teacherCreateArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Teachers.
     *     @param {teacherCreateManyArgs} args - Arguments to create many Teachers.
     *     @example
     *     // Create many Teachers
     *     const teacher = await prisma.teacher.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends teacherCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Teacher.
     * @param {teacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     *
     **/
    delete<T extends teacherDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, teacherDeleteArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Teacher.
     * @param {teacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends teacherUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, teacherUpdateArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Teachers.
     * @param {teacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends teacherDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, teacherDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends teacherUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, teacherUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Teacher.
     * @param {teacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     **/
    upsert<T extends teacherUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, teacherUpsertArgs<ExtArgs>>,
    ): Prisma__teacherClient<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
     **/
    count<T extends teacherCountArgs>(
      args?: Subset<T, teacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeacherAggregateArgs>(
      args: Subset<T, TeacherAggregateArgs>,
    ): Prisma.PrismaPromise<GetTeacherAggregateType<T>>;

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {teacherGroupByArgs} args - Group by arguments.
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
      T extends teacherGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: teacherGroupByArgs['orderBy'] }
        : { orderBy?: teacherGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, teacherGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the teacher model
     */
    readonly fields: teacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__teacherClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    course<T extends teacher$courseArgs<ExtArgs> = {}>(
      args?: Subset<T, teacher$courseArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$coursePayload<ExtArgs>, T, 'findMany'> | Null>;

    school<T extends schoolDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, schoolDefaultArgs<ExtArgs>>,
    ): Prisma__schoolClient<
      $Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the teacher model
   */
  interface teacherFieldRefs {
    readonly id: FieldRef<'teacher', 'String'>;
    readonly user_id: FieldRef<'teacher', 'String'>;
    readonly school_id: FieldRef<'teacher', 'String'>;
    readonly subject: FieldRef<'teacher', 'String'>;
    readonly hire_date: FieldRef<'teacher', 'DateTime'>;
    readonly termination_date: FieldRef<'teacher', 'DateTime'>;
    readonly department: FieldRef<'teacher', 'String'>;
    readonly created_at: FieldRef<'teacher', 'DateTime'>;
    readonly updated_at: FieldRef<'teacher', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * teacher findUnique
   */
  export type teacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput;
  };

  /**
   * teacher findUniqueOrThrow
   */
  export type teacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter, which teacher to fetch.
     */
    where: teacherWhereUniqueInput;
  };

  /**
   * teacher findFirst
   */
  export type teacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teachers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[];
  };

  /**
   * teacher findFirstOrThrow
   */
  export type teacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter, which teacher to fetch.
     */
    where?: teacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for teachers.
     */
    cursor?: teacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teachers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[];
  };

  /**
   * teacher findMany
   */
  export type teacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter, which teachers to fetch.
     */
    where?: teacherWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of teachers to fetch.
     */
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing teachers.
     */
    cursor?: teacherWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` teachers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` teachers.
     */
    skip?: number;
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[];
  };

  /**
   * teacher create
   */
  export type teacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * The data needed to create a teacher.
     */
    data: XOR<teacherCreateInput, teacherUncheckedCreateInput>;
  };

  /**
   * teacher createMany
   */
  export type teacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many teachers.
     */
    data: teacherCreateManyInput | teacherCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * teacher update
   */
  export type teacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * The data needed to update a teacher.
     */
    data: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>;
    /**
     * Choose, which teacher to update.
     */
    where: teacherWhereUniqueInput;
  };

  /**
   * teacher updateMany
   */
  export type teacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update teachers.
     */
    data: XOR<teacherUpdateManyMutationInput, teacherUncheckedUpdateManyInput>;
    /**
     * Filter which teachers to update
     */
    where?: teacherWhereInput;
  };

  /**
   * teacher upsert
   */
  export type teacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * The filter to search for the teacher to update in case it exists.
     */
    where: teacherWhereUniqueInput;
    /**
     * In case the teacher found by the `where` argument doesn't exist, create a new teacher with this data.
     */
    create: XOR<teacherCreateInput, teacherUncheckedCreateInput>;
    /**
     * In case the teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<teacherUpdateInput, teacherUncheckedUpdateInput>;
  };

  /**
   * teacher delete
   */
  export type teacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    /**
     * Filter which teacher to delete.
     */
    where: teacherWhereUniqueInput;
  };

  /**
   * teacher deleteMany
   */
  export type teacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which teachers to delete
     */
    where?: teacherWhereInput;
  };

  /**
   * teacher.course
   */
  export type teacher$courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the course
     */
    select?: courseSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: courseInclude<ExtArgs> | null;
    where?: courseWhereInput;
    orderBy?: courseOrderByWithRelationInput | courseOrderByWithRelationInput[];
    cursor?: courseWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CourseScalarFieldEnum | CourseScalarFieldEnum[];
  };

  /**
   * teacher without action
   */
  export type teacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      parent?: boolean | user$parentArgs<ExtArgs>;
      school?: boolean | user$schoolArgs<ExtArgs>;
      student?: boolean | user$studentArgs<ExtArgs>;
      teacher?: boolean | user$teacherArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | user$parentArgs<ExtArgs>;
    school?: boolean | user$schoolArgs<ExtArgs>;
    student?: boolean | user$studentArgs<ExtArgs>;
    teacher?: boolean | user$teacherArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      parent: Prisma.$parentPayload<ExtArgs>[];
      school: Prisma.$schoolPayload<ExtArgs>[];
      student: Prisma.$studentPayload<ExtArgs>[];
      teacher: Prisma.$teacherPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include' | 'distinct'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
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
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
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
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
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
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
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
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

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
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
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
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
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
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    parent<T extends user$parentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$parentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$parentPayload<ExtArgs>, T, 'findMany'> | Null>;

    school<T extends user$schoolArgs<ExtArgs> = {}>(
      args?: Subset<T, user$schoolArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$schoolPayload<ExtArgs>, T, 'findMany'> | Null>;

    student<T extends user$studentArgs<ExtArgs> = {}>(
      args?: Subset<T, user$studentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$studentPayload<ExtArgs>, T, 'findMany'> | Null>;

    teacher<T extends user$teacherArgs<ExtArgs> = {}>(
      args?: Subset<T, user$teacherArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$teacherPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.parent
   */
  export type user$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the parent
     */
    select?: parentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: parentInclude<ExtArgs> | null;
    where?: parentWhereInput;
    orderBy?: parentOrderByWithRelationInput | parentOrderByWithRelationInput[];
    cursor?: parentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ParentScalarFieldEnum | ParentScalarFieldEnum[];
  };

  /**
   * user.school
   */
  export type user$schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the school
     */
    select?: schoolSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: schoolInclude<ExtArgs> | null;
    where?: schoolWhereInput;
    orderBy?: schoolOrderByWithRelationInput | schoolOrderByWithRelationInput[];
    cursor?: schoolWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: SchoolScalarFieldEnum | SchoolScalarFieldEnum[];
  };

  /**
   * user.student
   */
  export type user$studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the student
     */
    select?: studentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: studentInclude<ExtArgs> | null;
    where?: studentWhereInput;
    orderBy?: studentOrderByWithRelationInput | studentOrderByWithRelationInput[];
    cursor?: studentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: StudentScalarFieldEnum | StudentScalarFieldEnum[];
  };

  /**
   * user.teacher
   */
  export type user$teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the teacher
     */
    select?: teacherSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: teacherInclude<ExtArgs> | null;
    where?: teacherWhereInput;
    orderBy?: teacherOrderByWithRelationInput | teacherOrderByWithRelationInput[];
    cursor?: teacherWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CourseScalarFieldEnum: {
    id: 'id';
    school_id: 'school_id';
    teacher_id: 'teacher_id';
    name: 'name';
    description: 'description';
    start_date: 'start_date';
    end_date: 'end_date';
    credits: 'credits';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CourseScalarFieldEnum = (typeof CourseScalarFieldEnum)[keyof typeof CourseScalarFieldEnum];

  export const ParentScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    student_id: 'student_id';
    relationship: 'relationship';
    phone_number: 'phone_number';
    address: 'address';
    city: 'city';
    state: 'state';
    zip_code: 'zip_code';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ParentScalarFieldEnum = (typeof ParentScalarFieldEnum)[keyof typeof ParentScalarFieldEnum];

  export const SchoolScalarFieldEnum: {
    id: 'id';
    description: 'description';
    address: 'address';
    city: 'city';
    state: 'state';
    zip_code: 'zip_code';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type SchoolScalarFieldEnum = (typeof SchoolScalarFieldEnum)[keyof typeof SchoolScalarFieldEnum];

  export const StudentScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    school_id: 'school_id';
    grade_level: 'grade_level';
    enrollment_date: 'enrollment_date';
    graduation_date: 'graduation_date';
    major: 'major';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type StudentScalarFieldEnum = (typeof StudentScalarFieldEnum)[keyof typeof StudentScalarFieldEnum];

  export const TeacherScalarFieldEnum: {
    id: 'id';
    user_id: 'user_id';
    school_id: 'school_id';
    subject: 'subject';
    hire_date: 'hire_date';
    termination_date: 'termination_date';
    department: 'department';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type courseWhereInput = {
    AND?: courseWhereInput | courseWhereInput[];
    OR?: courseWhereInput[];
    NOT?: courseWhereInput | courseWhereInput[];
    id?: UuidFilter<'course'> | string;
    school_id?: UuidFilter<'course'> | string;
    teacher_id?: UuidFilter<'course'> | string;
    name?: StringFilter<'course'> | string;
    description?: StringNullableFilter<'course'> | string | null;
    start_date?: DateTimeFilter<'course'> | Date | string;
    end_date?: DateTimeFilter<'course'> | Date | string;
    credits?: IntFilter<'course'> | number;
    created_at?: DateTimeFilter<'course'> | Date | string;
    updated_at?: DateTimeFilter<'course'> | Date | string;
    school?: XOR<SchoolRelationFilter, schoolWhereInput>;
    teacher?: XOR<TeacherRelationFilter, teacherWhereInput>;
  };

  export type courseOrderByWithRelationInput = {
    id?: SortOrder;
    school_id?: SortOrder;
    teacher_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    credits?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    school?: schoolOrderByWithRelationInput;
    teacher?: teacherOrderByWithRelationInput;
  };

  export type courseWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: courseWhereInput | courseWhereInput[];
      OR?: courseWhereInput[];
      NOT?: courseWhereInput | courseWhereInput[];
      school_id?: UuidFilter<'course'> | string;
      teacher_id?: UuidFilter<'course'> | string;
      name?: StringFilter<'course'> | string;
      description?: StringNullableFilter<'course'> | string | null;
      start_date?: DateTimeFilter<'course'> | Date | string;
      end_date?: DateTimeFilter<'course'> | Date | string;
      credits?: IntFilter<'course'> | number;
      created_at?: DateTimeFilter<'course'> | Date | string;
      updated_at?: DateTimeFilter<'course'> | Date | string;
      school?: XOR<SchoolRelationFilter, schoolWhereInput>;
      teacher?: XOR<TeacherRelationFilter, teacherWhereInput>;
    },
    'id'
  >;

  export type courseOrderByWithAggregationInput = {
    id?: SortOrder;
    school_id?: SortOrder;
    teacher_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrderInput | SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    credits?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: courseCountOrderByAggregateInput;
    _avg?: courseAvgOrderByAggregateInput;
    _max?: courseMaxOrderByAggregateInput;
    _min?: courseMinOrderByAggregateInput;
    _sum?: courseSumOrderByAggregateInput;
  };

  export type courseScalarWhereWithAggregatesInput = {
    AND?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[];
    OR?: courseScalarWhereWithAggregatesInput[];
    NOT?: courseScalarWhereWithAggregatesInput | courseScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'course'> | string;
    school_id?: UuidWithAggregatesFilter<'course'> | string;
    teacher_id?: UuidWithAggregatesFilter<'course'> | string;
    name?: StringWithAggregatesFilter<'course'> | string;
    description?: StringNullableWithAggregatesFilter<'course'> | string | null;
    start_date?: DateTimeWithAggregatesFilter<'course'> | Date | string;
    end_date?: DateTimeWithAggregatesFilter<'course'> | Date | string;
    credits?: IntWithAggregatesFilter<'course'> | number;
    created_at?: DateTimeWithAggregatesFilter<'course'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'course'> | Date | string;
  };

  export type parentWhereInput = {
    AND?: parentWhereInput | parentWhereInput[];
    OR?: parentWhereInput[];
    NOT?: parentWhereInput | parentWhereInput[];
    id?: UuidFilter<'parent'> | string;
    user_id?: UuidFilter<'parent'> | string;
    student_id?: UuidFilter<'parent'> | string;
    relationship?: StringFilter<'parent'> | string;
    phone_number?: StringFilter<'parent'> | string;
    address?: StringFilter<'parent'> | string;
    city?: StringFilter<'parent'> | string;
    state?: StringFilter<'parent'> | string;
    zip_code?: StringFilter<'parent'> | string;
    created_at?: DateTimeFilter<'parent'> | Date | string;
    updated_at?: DateTimeFilter<'parent'> | Date | string;
    student?: XOR<StudentRelationFilter, studentWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type parentOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    student_id?: SortOrder;
    relationship?: SortOrder;
    phone_number?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    student?: studentOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type parentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: parentWhereInput | parentWhereInput[];
      OR?: parentWhereInput[];
      NOT?: parentWhereInput | parentWhereInput[];
      user_id?: UuidFilter<'parent'> | string;
      student_id?: UuidFilter<'parent'> | string;
      relationship?: StringFilter<'parent'> | string;
      phone_number?: StringFilter<'parent'> | string;
      address?: StringFilter<'parent'> | string;
      city?: StringFilter<'parent'> | string;
      state?: StringFilter<'parent'> | string;
      zip_code?: StringFilter<'parent'> | string;
      created_at?: DateTimeFilter<'parent'> | Date | string;
      updated_at?: DateTimeFilter<'parent'> | Date | string;
      student?: XOR<StudentRelationFilter, studentWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type parentOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    student_id?: SortOrder;
    relationship?: SortOrder;
    phone_number?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: parentCountOrderByAggregateInput;
    _max?: parentMaxOrderByAggregateInput;
    _min?: parentMinOrderByAggregateInput;
  };

  export type parentScalarWhereWithAggregatesInput = {
    AND?: parentScalarWhereWithAggregatesInput | parentScalarWhereWithAggregatesInput[];
    OR?: parentScalarWhereWithAggregatesInput[];
    NOT?: parentScalarWhereWithAggregatesInput | parentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'parent'> | string;
    user_id?: UuidWithAggregatesFilter<'parent'> | string;
    student_id?: UuidWithAggregatesFilter<'parent'> | string;
    relationship?: StringWithAggregatesFilter<'parent'> | string;
    phone_number?: StringWithAggregatesFilter<'parent'> | string;
    address?: StringWithAggregatesFilter<'parent'> | string;
    city?: StringWithAggregatesFilter<'parent'> | string;
    state?: StringWithAggregatesFilter<'parent'> | string;
    zip_code?: StringWithAggregatesFilter<'parent'> | string;
    created_at?: DateTimeWithAggregatesFilter<'parent'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'parent'> | Date | string;
  };

  export type schoolWhereInput = {
    AND?: schoolWhereInput | schoolWhereInput[];
    OR?: schoolWhereInput[];
    NOT?: schoolWhereInput | schoolWhereInput[];
    id?: UuidFilter<'school'> | string;
    description?: StringNullableFilter<'school'> | string | null;
    address?: StringNullableFilter<'school'> | string | null;
    city?: StringNullableFilter<'school'> | string | null;
    state?: StringNullableFilter<'school'> | string | null;
    zip_code?: StringNullableFilter<'school'> | string | null;
    name?: StringFilter<'school'> | string;
    created_at?: DateTimeFilter<'school'> | Date | string;
    updated_at?: DateTimeFilter<'school'> | Date | string;
    user_id?: UuidFilter<'school'> | string;
    tenant_id?: StringFilter<'school'> | string;
    course?: CourseListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
    student?: StudentListRelationFilter;
    teacher?: TeacherListRelationFilter;
  };

  export type schoolOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    course?: courseOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
    student?: studentOrderByRelationAggregateInput;
    teacher?: teacherOrderByRelationAggregateInput;
  };

  export type schoolWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: schoolWhereInput | schoolWhereInput[];
      OR?: schoolWhereInput[];
      NOT?: schoolWhereInput | schoolWhereInput[];
      description?: StringNullableFilter<'school'> | string | null;
      address?: StringNullableFilter<'school'> | string | null;
      city?: StringNullableFilter<'school'> | string | null;
      state?: StringNullableFilter<'school'> | string | null;
      zip_code?: StringNullableFilter<'school'> | string | null;
      name?: StringFilter<'school'> | string;
      created_at?: DateTimeFilter<'school'> | Date | string;
      updated_at?: DateTimeFilter<'school'> | Date | string;
      user_id?: UuidFilter<'school'> | string;
      tenant_id?: StringFilter<'school'> | string;
      course?: CourseListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
      student?: StudentListRelationFilter;
      teacher?: TeacherListRelationFilter;
    },
    'id'
  >;

  export type schoolOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    address?: SortOrderInput | SortOrder;
    city?: SortOrderInput | SortOrder;
    state?: SortOrderInput | SortOrder;
    zip_code?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: schoolCountOrderByAggregateInput;
    _max?: schoolMaxOrderByAggregateInput;
    _min?: schoolMinOrderByAggregateInput;
  };

  export type schoolScalarWhereWithAggregatesInput = {
    AND?: schoolScalarWhereWithAggregatesInput | schoolScalarWhereWithAggregatesInput[];
    OR?: schoolScalarWhereWithAggregatesInput[];
    NOT?: schoolScalarWhereWithAggregatesInput | schoolScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'school'> | string;
    description?: StringNullableWithAggregatesFilter<'school'> | string | null;
    address?: StringNullableWithAggregatesFilter<'school'> | string | null;
    city?: StringNullableWithAggregatesFilter<'school'> | string | null;
    state?: StringNullableWithAggregatesFilter<'school'> | string | null;
    zip_code?: StringNullableWithAggregatesFilter<'school'> | string | null;
    name?: StringWithAggregatesFilter<'school'> | string;
    created_at?: DateTimeWithAggregatesFilter<'school'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'school'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'school'> | string;
    tenant_id?: StringWithAggregatesFilter<'school'> | string;
  };

  export type studentWhereInput = {
    AND?: studentWhereInput | studentWhereInput[];
    OR?: studentWhereInput[];
    NOT?: studentWhereInput | studentWhereInput[];
    id?: UuidFilter<'student'> | string;
    user_id?: UuidFilter<'student'> | string;
    school_id?: UuidFilter<'student'> | string;
    grade_level?: StringFilter<'student'> | string;
    enrollment_date?: DateTimeFilter<'student'> | Date | string;
    graduation_date?: DateTimeNullableFilter<'student'> | Date | string | null;
    major?: StringNullableFilter<'student'> | string | null;
    created_at?: DateTimeFilter<'student'> | Date | string;
    updated_at?: DateTimeFilter<'student'> | Date | string;
    parent?: ParentListRelationFilter;
    school?: XOR<SchoolRelationFilter, schoolWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type studentOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    grade_level?: SortOrder;
    enrollment_date?: SortOrder;
    graduation_date?: SortOrderInput | SortOrder;
    major?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    parent?: parentOrderByRelationAggregateInput;
    school?: schoolOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type studentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: studentWhereInput | studentWhereInput[];
      OR?: studentWhereInput[];
      NOT?: studentWhereInput | studentWhereInput[];
      user_id?: UuidFilter<'student'> | string;
      school_id?: UuidFilter<'student'> | string;
      grade_level?: StringFilter<'student'> | string;
      enrollment_date?: DateTimeFilter<'student'> | Date | string;
      graduation_date?: DateTimeNullableFilter<'student'> | Date | string | null;
      major?: StringNullableFilter<'student'> | string | null;
      created_at?: DateTimeFilter<'student'> | Date | string;
      updated_at?: DateTimeFilter<'student'> | Date | string;
      parent?: ParentListRelationFilter;
      school?: XOR<SchoolRelationFilter, schoolWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type studentOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    grade_level?: SortOrder;
    enrollment_date?: SortOrder;
    graduation_date?: SortOrderInput | SortOrder;
    major?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: studentCountOrderByAggregateInput;
    _max?: studentMaxOrderByAggregateInput;
    _min?: studentMinOrderByAggregateInput;
  };

  export type studentScalarWhereWithAggregatesInput = {
    AND?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[];
    OR?: studentScalarWhereWithAggregatesInput[];
    NOT?: studentScalarWhereWithAggregatesInput | studentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'student'> | string;
    user_id?: UuidWithAggregatesFilter<'student'> | string;
    school_id?: UuidWithAggregatesFilter<'student'> | string;
    grade_level?: StringWithAggregatesFilter<'student'> | string;
    enrollment_date?: DateTimeWithAggregatesFilter<'student'> | Date | string;
    graduation_date?: DateTimeNullableWithAggregatesFilter<'student'> | Date | string | null;
    major?: StringNullableWithAggregatesFilter<'student'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'student'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'student'> | Date | string;
  };

  export type teacherWhereInput = {
    AND?: teacherWhereInput | teacherWhereInput[];
    OR?: teacherWhereInput[];
    NOT?: teacherWhereInput | teacherWhereInput[];
    id?: UuidFilter<'teacher'> | string;
    user_id?: UuidFilter<'teacher'> | string;
    school_id?: UuidFilter<'teacher'> | string;
    subject?: StringFilter<'teacher'> | string;
    hire_date?: DateTimeFilter<'teacher'> | Date | string;
    termination_date?: DateTimeNullableFilter<'teacher'> | Date | string | null;
    department?: StringNullableFilter<'teacher'> | string | null;
    created_at?: DateTimeFilter<'teacher'> | Date | string;
    updated_at?: DateTimeFilter<'teacher'> | Date | string;
    course?: CourseListRelationFilter;
    school?: XOR<SchoolRelationFilter, schoolWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type teacherOrderByWithRelationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    subject?: SortOrder;
    hire_date?: SortOrder;
    termination_date?: SortOrderInput | SortOrder;
    department?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    course?: courseOrderByRelationAggregateInput;
    school?: schoolOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type teacherWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: teacherWhereInput | teacherWhereInput[];
      OR?: teacherWhereInput[];
      NOT?: teacherWhereInput | teacherWhereInput[];
      user_id?: UuidFilter<'teacher'> | string;
      school_id?: UuidFilter<'teacher'> | string;
      subject?: StringFilter<'teacher'> | string;
      hire_date?: DateTimeFilter<'teacher'> | Date | string;
      termination_date?: DateTimeNullableFilter<'teacher'> | Date | string | null;
      department?: StringNullableFilter<'teacher'> | string | null;
      created_at?: DateTimeFilter<'teacher'> | Date | string;
      updated_at?: DateTimeFilter<'teacher'> | Date | string;
      course?: CourseListRelationFilter;
      school?: XOR<SchoolRelationFilter, schoolWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type teacherOrderByWithAggregationInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    subject?: SortOrder;
    hire_date?: SortOrder;
    termination_date?: SortOrderInput | SortOrder;
    department?: SortOrderInput | SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: teacherCountOrderByAggregateInput;
    _max?: teacherMaxOrderByAggregateInput;
    _min?: teacherMinOrderByAggregateInput;
  };

  export type teacherScalarWhereWithAggregatesInput = {
    AND?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[];
    OR?: teacherScalarWhereWithAggregatesInput[];
    NOT?: teacherScalarWhereWithAggregatesInput | teacherScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'teacher'> | string;
    user_id?: UuidWithAggregatesFilter<'teacher'> | string;
    school_id?: UuidWithAggregatesFilter<'teacher'> | string;
    subject?: StringWithAggregatesFilter<'teacher'> | string;
    hire_date?: DateTimeWithAggregatesFilter<'teacher'> | Date | string;
    termination_date?: DateTimeNullableWithAggregatesFilter<'teacher'> | Date | string | null;
    department?: StringNullableWithAggregatesFilter<'teacher'> | string | null;
    created_at?: DateTimeWithAggregatesFilter<'teacher'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'teacher'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    parent?: ParentListRelationFilter;
    school?: SchoolListRelationFilter;
    student?: StudentListRelationFilter;
    teacher?: TeacherListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    parent?: parentOrderByRelationAggregateInput;
    school?: schoolOrderByRelationAggregateInput;
    student?: studentOrderByRelationAggregateInput;
    teacher?: teacherOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      parent?: ParentListRelationFilter;
      school?: SchoolListRelationFilter;
      student?: StudentListRelationFilter;
      teacher?: TeacherListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type courseCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date: Date | string;
    end_date: Date | string;
    credits: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    school: schoolCreateNestedOneWithoutCourseInput;
    teacher: teacherCreateNestedOneWithoutCourseInput;
  };

  export type courseUncheckedCreateInput = {
    id?: string;
    school_id: string;
    teacher_id: string;
    name: string;
    description?: string | null;
    start_date: Date | string;
    end_date: Date | string;
    credits: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type courseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    credits?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateOneRequiredWithoutCourseNestedInput;
    teacher?: teacherUpdateOneRequiredWithoutCourseNestedInput;
  };

  export type courseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    teacher_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    credits?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseCreateManyInput = {
    id?: string;
    school_id: string;
    teacher_id: string;
    name: string;
    description?: string | null;
    start_date: Date | string;
    end_date: Date | string;
    credits: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type courseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    credits?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    teacher_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    credits?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type parentCreateInput = {
    id?: string;
    relationship: string;
    phone_number: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    student: studentCreateNestedOneWithoutParentInput;
    user: userCreateNestedOneWithoutParentInput;
  };

  export type parentUncheckedCreateInput = {
    id?: string;
    user_id: string;
    student_id: string;
    relationship: string;
    phone_number: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type parentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    relationship?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: studentUpdateOneRequiredWithoutParentNestedInput;
    user?: userUpdateOneRequiredWithoutParentNestedInput;
  };

  export type parentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    student_id?: StringFieldUpdateOperationsInput | string;
    relationship?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type parentCreateManyInput = {
    id?: string;
    user_id: string;
    student_id: string;
    relationship: string;
    phone_number: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type parentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    relationship?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type parentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    student_id?: StringFieldUpdateOperationsInput | string;
    relationship?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type schoolCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    course?: courseCreateNestedManyWithoutSchoolInput;
    user: userCreateNestedOneWithoutSchoolInput;
    student?: studentCreateNestedManyWithoutSchoolInput;
    teacher?: teacherCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    course?: courseUncheckedCreateNestedManyWithoutSchoolInput;
    student?: studentUncheckedCreateNestedManyWithoutSchoolInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    course?: courseUpdateManyWithoutSchoolNestedInput;
    user?: userUpdateOneRequiredWithoutSchoolNestedInput;
    student?: studentUpdateManyWithoutSchoolNestedInput;
    teacher?: teacherUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    course?: courseUncheckedUpdateManyWithoutSchoolNestedInput;
    student?: studentUncheckedUpdateManyWithoutSchoolNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolCreateManyInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type schoolUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type schoolUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type studentCreateInput = {
    id?: string;
    grade_level: string;
    enrollment_date: Date | string;
    graduation_date?: Date | string | null;
    major?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    parent?: parentCreateNestedManyWithoutStudentInput;
    school: schoolCreateNestedOneWithoutStudentInput;
    user: userCreateNestedOneWithoutStudentInput;
  };

  export type studentUncheckedCreateInput = {
    id?: string;
    user_id: string;
    school_id: string;
    grade_level: string;
    enrollment_date: Date | string;
    graduation_date?: Date | string | null;
    major?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    parent?: parentUncheckedCreateNestedManyWithoutStudentInput;
  };

  export type studentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    grade_level?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    major?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: parentUpdateManyWithoutStudentNestedInput;
    school?: schoolUpdateOneRequiredWithoutStudentNestedInput;
    user?: userUpdateOneRequiredWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    grade_level?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    major?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: parentUncheckedUpdateManyWithoutStudentNestedInput;
  };

  export type studentCreateManyInput = {
    id?: string;
    user_id: string;
    school_id: string;
    grade_level: string;
    enrollment_date: Date | string;
    graduation_date?: Date | string | null;
    major?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type studentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    grade_level?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    major?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type studentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    grade_level?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    major?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacherCreateInput = {
    id?: string;
    subject: string;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    department?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    course?: courseCreateNestedManyWithoutTeacherInput;
    school: schoolCreateNestedOneWithoutTeacherInput;
    user: userCreateNestedOneWithoutTeacherInput;
  };

  export type teacherUncheckedCreateInput = {
    id?: string;
    user_id: string;
    school_id: string;
    subject: string;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    department?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    course?: courseUncheckedCreateNestedManyWithoutTeacherInput;
  };

  export type teacherUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUpdateManyWithoutTeacherNestedInput;
    school?: schoolUpdateOneRequiredWithoutTeacherNestedInput;
    user?: userUpdateOneRequiredWithoutTeacherNestedInput;
  };

  export type teacherUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUncheckedUpdateManyWithoutTeacherNestedInput;
  };

  export type teacherCreateManyInput = {
    id?: string;
    user_id: string;
    school_id: string;
    subject: string;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    department?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacherUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacherUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    parent?: parentCreateNestedManyWithoutUserInput;
    school?: schoolCreateNestedManyWithoutUserInput;
    student?: studentCreateNestedManyWithoutUserInput;
    teacher?: teacherCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    parent?: parentUncheckedCreateNestedManyWithoutUserInput;
    school?: schoolUncheckedCreateNestedManyWithoutUserInput;
    student?: studentUncheckedCreateNestedManyWithoutUserInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: parentUpdateManyWithoutUserNestedInput;
    school?: schoolUpdateManyWithoutUserNestedInput;
    student?: studentUpdateManyWithoutUserNestedInput;
    teacher?: teacherUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: parentUncheckedUpdateManyWithoutUserNestedInput;
    school?: schoolUncheckedUpdateManyWithoutUserNestedInput;
    student?: studentUncheckedUpdateManyWithoutUserNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type SchoolRelationFilter = {
    is?: schoolWhereInput;
    isNot?: schoolWhereInput;
  };

  export type TeacherRelationFilter = {
    is?: teacherWhereInput;
    isNot?: teacherWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type courseCountOrderByAggregateInput = {
    id?: SortOrder;
    school_id?: SortOrder;
    teacher_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    credits?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type courseAvgOrderByAggregateInput = {
    credits?: SortOrder;
  };

  export type courseMaxOrderByAggregateInput = {
    id?: SortOrder;
    school_id?: SortOrder;
    teacher_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    credits?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type courseMinOrderByAggregateInput = {
    id?: SortOrder;
    school_id?: SortOrder;
    teacher_id?: SortOrder;
    name?: SortOrder;
    description?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    credits?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type courseSumOrderByAggregateInput = {
    credits?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StudentRelationFilter = {
    is?: studentWhereInput;
    isNot?: studentWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type parentCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    student_id?: SortOrder;
    relationship?: SortOrder;
    phone_number?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type parentMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    student_id?: SortOrder;
    relationship?: SortOrder;
    phone_number?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type parentMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    student_id?: SortOrder;
    relationship?: SortOrder;
    phone_number?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type CourseListRelationFilter = {
    every?: courseWhereInput;
    some?: courseWhereInput;
    none?: courseWhereInput;
  };

  export type StudentListRelationFilter = {
    every?: studentWhereInput;
    some?: studentWhereInput;
    none?: studentWhereInput;
  };

  export type TeacherListRelationFilter = {
    every?: teacherWhereInput;
    some?: teacherWhereInput;
    none?: teacherWhereInput;
  };

  export type courseOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type studentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type teacherOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type schoolCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type schoolMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type schoolMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    address?: SortOrder;
    city?: SortOrder;
    state?: SortOrder;
    zip_code?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type ParentListRelationFilter = {
    every?: parentWhereInput;
    some?: parentWhereInput;
    none?: parentWhereInput;
  };

  export type parentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type studentCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    grade_level?: SortOrder;
    enrollment_date?: SortOrder;
    graduation_date?: SortOrder;
    major?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type studentMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    grade_level?: SortOrder;
    enrollment_date?: SortOrder;
    graduation_date?: SortOrder;
    major?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type studentMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    grade_level?: SortOrder;
    enrollment_date?: SortOrder;
    graduation_date?: SortOrder;
    major?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type teacherCountOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    subject?: SortOrder;
    hire_date?: SortOrder;
    termination_date?: SortOrder;
    department?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teacherMaxOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    subject?: SortOrder;
    hire_date?: SortOrder;
    termination_date?: SortOrder;
    department?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type teacherMinOrderByAggregateInput = {
    id?: SortOrder;
    user_id?: SortOrder;
    school_id?: SortOrder;
    subject?: SortOrder;
    hire_date?: SortOrder;
    termination_date?: SortOrder;
    department?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type SchoolListRelationFilter = {
    every?: schoolWhereInput;
    some?: schoolWhereInput;
    none?: schoolWhereInput;
  };

  export type schoolOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type schoolCreateNestedOneWithoutCourseInput = {
    create?: XOR<schoolCreateWithoutCourseInput, schoolUncheckedCreateWithoutCourseInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutCourseInput;
    connect?: schoolWhereUniqueInput;
  };

  export type teacherCreateNestedOneWithoutCourseInput = {
    create?: XOR<teacherCreateWithoutCourseInput, teacherUncheckedCreateWithoutCourseInput>;
    connectOrCreate?: teacherCreateOrConnectWithoutCourseInput;
    connect?: teacherWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type schoolUpdateOneRequiredWithoutCourseNestedInput = {
    create?: XOR<schoolCreateWithoutCourseInput, schoolUncheckedCreateWithoutCourseInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutCourseInput;
    upsert?: schoolUpsertWithoutCourseInput;
    connect?: schoolWhereUniqueInput;
    update?: XOR<
      XOR<schoolUpdateToOneWithWhereWithoutCourseInput, schoolUpdateWithoutCourseInput>,
      schoolUncheckedUpdateWithoutCourseInput
    >;
  };

  export type teacherUpdateOneRequiredWithoutCourseNestedInput = {
    create?: XOR<teacherCreateWithoutCourseInput, teacherUncheckedCreateWithoutCourseInput>;
    connectOrCreate?: teacherCreateOrConnectWithoutCourseInput;
    upsert?: teacherUpsertWithoutCourseInput;
    connect?: teacherWhereUniqueInput;
    update?: XOR<
      XOR<teacherUpdateToOneWithWhereWithoutCourseInput, teacherUpdateWithoutCourseInput>,
      teacherUncheckedUpdateWithoutCourseInput
    >;
  };

  export type studentCreateNestedOneWithoutParentInput = {
    create?: XOR<studentCreateWithoutParentInput, studentUncheckedCreateWithoutParentInput>;
    connectOrCreate?: studentCreateOrConnectWithoutParentInput;
    connect?: studentWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutParentInput = {
    create?: XOR<userCreateWithoutParentInput, userUncheckedCreateWithoutParentInput>;
    connectOrCreate?: userCreateOrConnectWithoutParentInput;
    connect?: userWhereUniqueInput;
  };

  export type studentUpdateOneRequiredWithoutParentNestedInput = {
    create?: XOR<studentCreateWithoutParentInput, studentUncheckedCreateWithoutParentInput>;
    connectOrCreate?: studentCreateOrConnectWithoutParentInput;
    upsert?: studentUpsertWithoutParentInput;
    connect?: studentWhereUniqueInput;
    update?: XOR<
      XOR<studentUpdateToOneWithWhereWithoutParentInput, studentUpdateWithoutParentInput>,
      studentUncheckedUpdateWithoutParentInput
    >;
  };

  export type userUpdateOneRequiredWithoutParentNestedInput = {
    create?: XOR<userCreateWithoutParentInput, userUncheckedCreateWithoutParentInput>;
    connectOrCreate?: userCreateOrConnectWithoutParentInput;
    upsert?: userUpsertWithoutParentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutParentInput, userUpdateWithoutParentInput>,
      userUncheckedUpdateWithoutParentInput
    >;
  };

  export type courseCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<courseCreateWithoutSchoolInput, courseUncheckedCreateWithoutSchoolInput>
      | courseCreateWithoutSchoolInput[]
      | courseUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: courseCreateOrConnectWithoutSchoolInput | courseCreateOrConnectWithoutSchoolInput[];
    createMany?: courseCreateManySchoolInputEnvelope;
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutSchoolInput = {
    create?: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
    connectOrCreate?: userCreateOrConnectWithoutSchoolInput;
    connect?: userWhereUniqueInput;
  };

  export type studentCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>
      | studentCreateWithoutSchoolInput[]
      | studentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: studentCreateOrConnectWithoutSchoolInput | studentCreateOrConnectWithoutSchoolInput[];
    createMany?: studentCreateManySchoolInputEnvelope;
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
  };

  export type teacherCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<teacherCreateWithoutSchoolInput, teacherUncheckedCreateWithoutSchoolInput>
      | teacherCreateWithoutSchoolInput[]
      | teacherUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutSchoolInput | teacherCreateOrConnectWithoutSchoolInput[];
    createMany?: teacherCreateManySchoolInputEnvelope;
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
  };

  export type courseUncheckedCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<courseCreateWithoutSchoolInput, courseUncheckedCreateWithoutSchoolInput>
      | courseCreateWithoutSchoolInput[]
      | courseUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: courseCreateOrConnectWithoutSchoolInput | courseCreateOrConnectWithoutSchoolInput[];
    createMany?: courseCreateManySchoolInputEnvelope;
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[];
  };

  export type studentUncheckedCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>
      | studentCreateWithoutSchoolInput[]
      | studentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: studentCreateOrConnectWithoutSchoolInput | studentCreateOrConnectWithoutSchoolInput[];
    createMany?: studentCreateManySchoolInputEnvelope;
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
  };

  export type teacherUncheckedCreateNestedManyWithoutSchoolInput = {
    create?:
      | XOR<teacherCreateWithoutSchoolInput, teacherUncheckedCreateWithoutSchoolInput>
      | teacherCreateWithoutSchoolInput[]
      | teacherUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutSchoolInput | teacherCreateOrConnectWithoutSchoolInput[];
    createMany?: teacherCreateManySchoolInputEnvelope;
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
  };

  export type courseUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<courseCreateWithoutSchoolInput, courseUncheckedCreateWithoutSchoolInput>
      | courseCreateWithoutSchoolInput[]
      | courseUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: courseCreateOrConnectWithoutSchoolInput | courseCreateOrConnectWithoutSchoolInput[];
    upsert?: courseUpsertWithWhereUniqueWithoutSchoolInput | courseUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: courseCreateManySchoolInputEnvelope;
    set?: courseWhereUniqueInput | courseWhereUniqueInput[];
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[];
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[];
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[];
    update?: courseUpdateWithWhereUniqueWithoutSchoolInput | courseUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: courseUpdateManyWithWhereWithoutSchoolInput | courseUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutSchoolNestedInput = {
    create?: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
    connectOrCreate?: userCreateOrConnectWithoutSchoolInput;
    upsert?: userUpsertWithoutSchoolInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutSchoolInput, userUpdateWithoutSchoolInput>,
      userUncheckedUpdateWithoutSchoolInput
    >;
  };

  export type studentUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>
      | studentCreateWithoutSchoolInput[]
      | studentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: studentCreateOrConnectWithoutSchoolInput | studentCreateOrConnectWithoutSchoolInput[];
    upsert?: studentUpsertWithWhereUniqueWithoutSchoolInput | studentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: studentCreateManySchoolInputEnvelope;
    set?: studentWhereUniqueInput | studentWhereUniqueInput[];
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[];
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    update?: studentUpdateWithWhereUniqueWithoutSchoolInput | studentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: studentUpdateManyWithWhereWithoutSchoolInput | studentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[];
  };

  export type teacherUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<teacherCreateWithoutSchoolInput, teacherUncheckedCreateWithoutSchoolInput>
      | teacherCreateWithoutSchoolInput[]
      | teacherUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutSchoolInput | teacherCreateOrConnectWithoutSchoolInput[];
    upsert?: teacherUpsertWithWhereUniqueWithoutSchoolInput | teacherUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: teacherCreateManySchoolInputEnvelope;
    set?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    disconnect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    delete?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    update?: teacherUpdateWithWhereUniqueWithoutSchoolInput | teacherUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: teacherUpdateManyWithWhereWithoutSchoolInput | teacherUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: teacherScalarWhereInput | teacherScalarWhereInput[];
  };

  export type courseUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<courseCreateWithoutSchoolInput, courseUncheckedCreateWithoutSchoolInput>
      | courseCreateWithoutSchoolInput[]
      | courseUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: courseCreateOrConnectWithoutSchoolInput | courseCreateOrConnectWithoutSchoolInput[];
    upsert?: courseUpsertWithWhereUniqueWithoutSchoolInput | courseUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: courseCreateManySchoolInputEnvelope;
    set?: courseWhereUniqueInput | courseWhereUniqueInput[];
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[];
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[];
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[];
    update?: courseUpdateWithWhereUniqueWithoutSchoolInput | courseUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: courseUpdateManyWithWhereWithoutSchoolInput | courseUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[];
  };

  export type studentUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>
      | studentCreateWithoutSchoolInput[]
      | studentUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: studentCreateOrConnectWithoutSchoolInput | studentCreateOrConnectWithoutSchoolInput[];
    upsert?: studentUpsertWithWhereUniqueWithoutSchoolInput | studentUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: studentCreateManySchoolInputEnvelope;
    set?: studentWhereUniqueInput | studentWhereUniqueInput[];
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[];
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    update?: studentUpdateWithWhereUniqueWithoutSchoolInput | studentUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: studentUpdateManyWithWhereWithoutSchoolInput | studentUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[];
  };

  export type teacherUncheckedUpdateManyWithoutSchoolNestedInput = {
    create?:
      | XOR<teacherCreateWithoutSchoolInput, teacherUncheckedCreateWithoutSchoolInput>
      | teacherCreateWithoutSchoolInput[]
      | teacherUncheckedCreateWithoutSchoolInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutSchoolInput | teacherCreateOrConnectWithoutSchoolInput[];
    upsert?: teacherUpsertWithWhereUniqueWithoutSchoolInput | teacherUpsertWithWhereUniqueWithoutSchoolInput[];
    createMany?: teacherCreateManySchoolInputEnvelope;
    set?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    disconnect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    delete?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    update?: teacherUpdateWithWhereUniqueWithoutSchoolInput | teacherUpdateWithWhereUniqueWithoutSchoolInput[];
    updateMany?: teacherUpdateManyWithWhereWithoutSchoolInput | teacherUpdateManyWithWhereWithoutSchoolInput[];
    deleteMany?: teacherScalarWhereInput | teacherScalarWhereInput[];
  };

  export type parentCreateNestedManyWithoutStudentInput = {
    create?:
      | XOR<parentCreateWithoutStudentInput, parentUncheckedCreateWithoutStudentInput>
      | parentCreateWithoutStudentInput[]
      | parentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: parentCreateOrConnectWithoutStudentInput | parentCreateOrConnectWithoutStudentInput[];
    createMany?: parentCreateManyStudentInputEnvelope;
    connect?: parentWhereUniqueInput | parentWhereUniqueInput[];
  };

  export type schoolCreateNestedOneWithoutStudentInput = {
    create?: XOR<schoolCreateWithoutStudentInput, schoolUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutStudentInput;
    connect?: schoolWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutStudentInput = {
    create?: XOR<userCreateWithoutStudentInput, userUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: userCreateOrConnectWithoutStudentInput;
    connect?: userWhereUniqueInput;
  };

  export type parentUncheckedCreateNestedManyWithoutStudentInput = {
    create?:
      | XOR<parentCreateWithoutStudentInput, parentUncheckedCreateWithoutStudentInput>
      | parentCreateWithoutStudentInput[]
      | parentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: parentCreateOrConnectWithoutStudentInput | parentCreateOrConnectWithoutStudentInput[];
    createMany?: parentCreateManyStudentInputEnvelope;
    connect?: parentWhereUniqueInput | parentWhereUniqueInput[];
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type parentUpdateManyWithoutStudentNestedInput = {
    create?:
      | XOR<parentCreateWithoutStudentInput, parentUncheckedCreateWithoutStudentInput>
      | parentCreateWithoutStudentInput[]
      | parentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: parentCreateOrConnectWithoutStudentInput | parentCreateOrConnectWithoutStudentInput[];
    upsert?: parentUpsertWithWhereUniqueWithoutStudentInput | parentUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: parentCreateManyStudentInputEnvelope;
    set?: parentWhereUniqueInput | parentWhereUniqueInput[];
    disconnect?: parentWhereUniqueInput | parentWhereUniqueInput[];
    delete?: parentWhereUniqueInput | parentWhereUniqueInput[];
    connect?: parentWhereUniqueInput | parentWhereUniqueInput[];
    update?: parentUpdateWithWhereUniqueWithoutStudentInput | parentUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: parentUpdateManyWithWhereWithoutStudentInput | parentUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: parentScalarWhereInput | parentScalarWhereInput[];
  };

  export type schoolUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<schoolCreateWithoutStudentInput, schoolUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutStudentInput;
    upsert?: schoolUpsertWithoutStudentInput;
    connect?: schoolWhereUniqueInput;
    update?: XOR<
      XOR<schoolUpdateToOneWithWhereWithoutStudentInput, schoolUpdateWithoutStudentInput>,
      schoolUncheckedUpdateWithoutStudentInput
    >;
  };

  export type userUpdateOneRequiredWithoutStudentNestedInput = {
    create?: XOR<userCreateWithoutStudentInput, userUncheckedCreateWithoutStudentInput>;
    connectOrCreate?: userCreateOrConnectWithoutStudentInput;
    upsert?: userUpsertWithoutStudentInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutStudentInput, userUpdateWithoutStudentInput>,
      userUncheckedUpdateWithoutStudentInput
    >;
  };

  export type parentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?:
      | XOR<parentCreateWithoutStudentInput, parentUncheckedCreateWithoutStudentInput>
      | parentCreateWithoutStudentInput[]
      | parentUncheckedCreateWithoutStudentInput[];
    connectOrCreate?: parentCreateOrConnectWithoutStudentInput | parentCreateOrConnectWithoutStudentInput[];
    upsert?: parentUpsertWithWhereUniqueWithoutStudentInput | parentUpsertWithWhereUniqueWithoutStudentInput[];
    createMany?: parentCreateManyStudentInputEnvelope;
    set?: parentWhereUniqueInput | parentWhereUniqueInput[];
    disconnect?: parentWhereUniqueInput | parentWhereUniqueInput[];
    delete?: parentWhereUniqueInput | parentWhereUniqueInput[];
    connect?: parentWhereUniqueInput | parentWhereUniqueInput[];
    update?: parentUpdateWithWhereUniqueWithoutStudentInput | parentUpdateWithWhereUniqueWithoutStudentInput[];
    updateMany?: parentUpdateManyWithWhereWithoutStudentInput | parentUpdateManyWithWhereWithoutStudentInput[];
    deleteMany?: parentScalarWhereInput | parentScalarWhereInput[];
  };

  export type courseCreateNestedManyWithoutTeacherInput = {
    create?:
      | XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput>
      | courseCreateWithoutTeacherInput[]
      | courseUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: courseCreateOrConnectWithoutTeacherInput | courseCreateOrConnectWithoutTeacherInput[];
    createMany?: courseCreateManyTeacherInputEnvelope;
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[];
  };

  export type schoolCreateNestedOneWithoutTeacherInput = {
    create?: XOR<schoolCreateWithoutTeacherInput, schoolUncheckedCreateWithoutTeacherInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutTeacherInput;
    connect?: schoolWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutTeacherInput = {
    create?: XOR<userCreateWithoutTeacherInput, userUncheckedCreateWithoutTeacherInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeacherInput;
    connect?: userWhereUniqueInput;
  };

  export type courseUncheckedCreateNestedManyWithoutTeacherInput = {
    create?:
      | XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput>
      | courseCreateWithoutTeacherInput[]
      | courseUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: courseCreateOrConnectWithoutTeacherInput | courseCreateOrConnectWithoutTeacherInput[];
    createMany?: courseCreateManyTeacherInputEnvelope;
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[];
  };

  export type courseUpdateManyWithoutTeacherNestedInput = {
    create?:
      | XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput>
      | courseCreateWithoutTeacherInput[]
      | courseUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: courseCreateOrConnectWithoutTeacherInput | courseCreateOrConnectWithoutTeacherInput[];
    upsert?: courseUpsertWithWhereUniqueWithoutTeacherInput | courseUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: courseCreateManyTeacherInputEnvelope;
    set?: courseWhereUniqueInput | courseWhereUniqueInput[];
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[];
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[];
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[];
    update?: courseUpdateWithWhereUniqueWithoutTeacherInput | courseUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: courseUpdateManyWithWhereWithoutTeacherInput | courseUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[];
  };

  export type schoolUpdateOneRequiredWithoutTeacherNestedInput = {
    create?: XOR<schoolCreateWithoutTeacherInput, schoolUncheckedCreateWithoutTeacherInput>;
    connectOrCreate?: schoolCreateOrConnectWithoutTeacherInput;
    upsert?: schoolUpsertWithoutTeacherInput;
    connect?: schoolWhereUniqueInput;
    update?: XOR<
      XOR<schoolUpdateToOneWithWhereWithoutTeacherInput, schoolUpdateWithoutTeacherInput>,
      schoolUncheckedUpdateWithoutTeacherInput
    >;
  };

  export type userUpdateOneRequiredWithoutTeacherNestedInput = {
    create?: XOR<userCreateWithoutTeacherInput, userUncheckedCreateWithoutTeacherInput>;
    connectOrCreate?: userCreateOrConnectWithoutTeacherInput;
    upsert?: userUpsertWithoutTeacherInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutTeacherInput, userUpdateWithoutTeacherInput>,
      userUncheckedUpdateWithoutTeacherInput
    >;
  };

  export type courseUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?:
      | XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput>
      | courseCreateWithoutTeacherInput[]
      | courseUncheckedCreateWithoutTeacherInput[];
    connectOrCreate?: courseCreateOrConnectWithoutTeacherInput | courseCreateOrConnectWithoutTeacherInput[];
    upsert?: courseUpsertWithWhereUniqueWithoutTeacherInput | courseUpsertWithWhereUniqueWithoutTeacherInput[];
    createMany?: courseCreateManyTeacherInputEnvelope;
    set?: courseWhereUniqueInput | courseWhereUniqueInput[];
    disconnect?: courseWhereUniqueInput | courseWhereUniqueInput[];
    delete?: courseWhereUniqueInput | courseWhereUniqueInput[];
    connect?: courseWhereUniqueInput | courseWhereUniqueInput[];
    update?: courseUpdateWithWhereUniqueWithoutTeacherInput | courseUpdateWithWhereUniqueWithoutTeacherInput[];
    updateMany?: courseUpdateManyWithWhereWithoutTeacherInput | courseUpdateManyWithWhereWithoutTeacherInput[];
    deleteMany?: courseScalarWhereInput | courseScalarWhereInput[];
  };

  export type parentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<parentCreateWithoutUserInput, parentUncheckedCreateWithoutUserInput>
      | parentCreateWithoutUserInput[]
      | parentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: parentCreateOrConnectWithoutUserInput | parentCreateOrConnectWithoutUserInput[];
    createMany?: parentCreateManyUserInputEnvelope;
    connect?: parentWhereUniqueInput | parentWhereUniqueInput[];
  };

  export type schoolCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>
      | schoolCreateWithoutUserInput[]
      | schoolUncheckedCreateWithoutUserInput[];
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput | schoolCreateOrConnectWithoutUserInput[];
    createMany?: schoolCreateManyUserInputEnvelope;
    connect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
  };

  export type studentCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>
      | studentCreateWithoutUserInput[]
      | studentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: studentCreateOrConnectWithoutUserInput | studentCreateOrConnectWithoutUserInput[];
    createMany?: studentCreateManyUserInputEnvelope;
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
  };

  export type teacherCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>
      | teacherCreateWithoutUserInput[]
      | teacherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutUserInput | teacherCreateOrConnectWithoutUserInput[];
    createMany?: teacherCreateManyUserInputEnvelope;
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
  };

  export type parentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<parentCreateWithoutUserInput, parentUncheckedCreateWithoutUserInput>
      | parentCreateWithoutUserInput[]
      | parentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: parentCreateOrConnectWithoutUserInput | parentCreateOrConnectWithoutUserInput[];
    createMany?: parentCreateManyUserInputEnvelope;
    connect?: parentWhereUniqueInput | parentWhereUniqueInput[];
  };

  export type schoolUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>
      | schoolCreateWithoutUserInput[]
      | schoolUncheckedCreateWithoutUserInput[];
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput | schoolCreateOrConnectWithoutUserInput[];
    createMany?: schoolCreateManyUserInputEnvelope;
    connect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
  };

  export type studentUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>
      | studentCreateWithoutUserInput[]
      | studentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: studentCreateOrConnectWithoutUserInput | studentCreateOrConnectWithoutUserInput[];
    createMany?: studentCreateManyUserInputEnvelope;
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
  };

  export type teacherUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>
      | teacherCreateWithoutUserInput[]
      | teacherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutUserInput | teacherCreateOrConnectWithoutUserInput[];
    createMany?: teacherCreateManyUserInputEnvelope;
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
  };

  export type parentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<parentCreateWithoutUserInput, parentUncheckedCreateWithoutUserInput>
      | parentCreateWithoutUserInput[]
      | parentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: parentCreateOrConnectWithoutUserInput | parentCreateOrConnectWithoutUserInput[];
    upsert?: parentUpsertWithWhereUniqueWithoutUserInput | parentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: parentCreateManyUserInputEnvelope;
    set?: parentWhereUniqueInput | parentWhereUniqueInput[];
    disconnect?: parentWhereUniqueInput | parentWhereUniqueInput[];
    delete?: parentWhereUniqueInput | parentWhereUniqueInput[];
    connect?: parentWhereUniqueInput | parentWhereUniqueInput[];
    update?: parentUpdateWithWhereUniqueWithoutUserInput | parentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: parentUpdateManyWithWhereWithoutUserInput | parentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: parentScalarWhereInput | parentScalarWhereInput[];
  };

  export type schoolUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>
      | schoolCreateWithoutUserInput[]
      | schoolUncheckedCreateWithoutUserInput[];
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput | schoolCreateOrConnectWithoutUserInput[];
    upsert?: schoolUpsertWithWhereUniqueWithoutUserInput | schoolUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: schoolCreateManyUserInputEnvelope;
    set?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    disconnect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    delete?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    connect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    update?: schoolUpdateWithWhereUniqueWithoutUserInput | schoolUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: schoolUpdateManyWithWhereWithoutUserInput | schoolUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: schoolScalarWhereInput | schoolScalarWhereInput[];
  };

  export type studentUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>
      | studentCreateWithoutUserInput[]
      | studentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: studentCreateOrConnectWithoutUserInput | studentCreateOrConnectWithoutUserInput[];
    upsert?: studentUpsertWithWhereUniqueWithoutUserInput | studentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: studentCreateManyUserInputEnvelope;
    set?: studentWhereUniqueInput | studentWhereUniqueInput[];
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[];
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    update?: studentUpdateWithWhereUniqueWithoutUserInput | studentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: studentUpdateManyWithWhereWithoutUserInput | studentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[];
  };

  export type teacherUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>
      | teacherCreateWithoutUserInput[]
      | teacherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutUserInput | teacherCreateOrConnectWithoutUserInput[];
    upsert?: teacherUpsertWithWhereUniqueWithoutUserInput | teacherUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: teacherCreateManyUserInputEnvelope;
    set?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    disconnect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    delete?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    update?: teacherUpdateWithWhereUniqueWithoutUserInput | teacherUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: teacherUpdateManyWithWhereWithoutUserInput | teacherUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: teacherScalarWhereInput | teacherScalarWhereInput[];
  };

  export type parentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<parentCreateWithoutUserInput, parentUncheckedCreateWithoutUserInput>
      | parentCreateWithoutUserInput[]
      | parentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: parentCreateOrConnectWithoutUserInput | parentCreateOrConnectWithoutUserInput[];
    upsert?: parentUpsertWithWhereUniqueWithoutUserInput | parentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: parentCreateManyUserInputEnvelope;
    set?: parentWhereUniqueInput | parentWhereUniqueInput[];
    disconnect?: parentWhereUniqueInput | parentWhereUniqueInput[];
    delete?: parentWhereUniqueInput | parentWhereUniqueInput[];
    connect?: parentWhereUniqueInput | parentWhereUniqueInput[];
    update?: parentUpdateWithWhereUniqueWithoutUserInput | parentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: parentUpdateManyWithWhereWithoutUserInput | parentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: parentScalarWhereInput | parentScalarWhereInput[];
  };

  export type schoolUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>
      | schoolCreateWithoutUserInput[]
      | schoolUncheckedCreateWithoutUserInput[];
    connectOrCreate?: schoolCreateOrConnectWithoutUserInput | schoolCreateOrConnectWithoutUserInput[];
    upsert?: schoolUpsertWithWhereUniqueWithoutUserInput | schoolUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: schoolCreateManyUserInputEnvelope;
    set?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    disconnect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    delete?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    connect?: schoolWhereUniqueInput | schoolWhereUniqueInput[];
    update?: schoolUpdateWithWhereUniqueWithoutUserInput | schoolUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: schoolUpdateManyWithWhereWithoutUserInput | schoolUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: schoolScalarWhereInput | schoolScalarWhereInput[];
  };

  export type studentUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>
      | studentCreateWithoutUserInput[]
      | studentUncheckedCreateWithoutUserInput[];
    connectOrCreate?: studentCreateOrConnectWithoutUserInput | studentCreateOrConnectWithoutUserInput[];
    upsert?: studentUpsertWithWhereUniqueWithoutUserInput | studentUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: studentCreateManyUserInputEnvelope;
    set?: studentWhereUniqueInput | studentWhereUniqueInput[];
    disconnect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    delete?: studentWhereUniqueInput | studentWhereUniqueInput[];
    connect?: studentWhereUniqueInput | studentWhereUniqueInput[];
    update?: studentUpdateWithWhereUniqueWithoutUserInput | studentUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: studentUpdateManyWithWhereWithoutUserInput | studentUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: studentScalarWhereInput | studentScalarWhereInput[];
  };

  export type teacherUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>
      | teacherCreateWithoutUserInput[]
      | teacherUncheckedCreateWithoutUserInput[];
    connectOrCreate?: teacherCreateOrConnectWithoutUserInput | teacherCreateOrConnectWithoutUserInput[];
    upsert?: teacherUpsertWithWhereUniqueWithoutUserInput | teacherUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: teacherCreateManyUserInputEnvelope;
    set?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    disconnect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    delete?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    connect?: teacherWhereUniqueInput | teacherWhereUniqueInput[];
    update?: teacherUpdateWithWhereUniqueWithoutUserInput | teacherUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: teacherUpdateManyWithWhereWithoutUserInput | teacherUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: teacherScalarWhereInput | teacherScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
  };

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: NestedDateTimeNullableFilter<$PrismaModel>;
  };

  export type schoolCreateWithoutCourseInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutSchoolInput;
    student?: studentCreateNestedManyWithoutSchoolInput;
    teacher?: teacherCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateWithoutCourseInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    student?: studentUncheckedCreateNestedManyWithoutSchoolInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolCreateOrConnectWithoutCourseInput = {
    where: schoolWhereUniqueInput;
    create: XOR<schoolCreateWithoutCourseInput, schoolUncheckedCreateWithoutCourseInput>;
  };

  export type teacherCreateWithoutCourseInput = {
    id?: string;
    subject: string;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    department?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    school: schoolCreateNestedOneWithoutTeacherInput;
    user: userCreateNestedOneWithoutTeacherInput;
  };

  export type teacherUncheckedCreateWithoutCourseInput = {
    id?: string;
    user_id: string;
    school_id: string;
    subject: string;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    department?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacherCreateOrConnectWithoutCourseInput = {
    where: teacherWhereUniqueInput;
    create: XOR<teacherCreateWithoutCourseInput, teacherUncheckedCreateWithoutCourseInput>;
  };

  export type schoolUpsertWithoutCourseInput = {
    update: XOR<schoolUpdateWithoutCourseInput, schoolUncheckedUpdateWithoutCourseInput>;
    create: XOR<schoolCreateWithoutCourseInput, schoolUncheckedCreateWithoutCourseInput>;
    where?: schoolWhereInput;
  };

  export type schoolUpdateToOneWithWhereWithoutCourseInput = {
    where?: schoolWhereInput;
    data: XOR<schoolUpdateWithoutCourseInput, schoolUncheckedUpdateWithoutCourseInput>;
  };

  export type schoolUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutSchoolNestedInput;
    student?: studentUpdateManyWithoutSchoolNestedInput;
    teacher?: teacherUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    student?: studentUncheckedUpdateManyWithoutSchoolNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type teacherUpsertWithoutCourseInput = {
    update: XOR<teacherUpdateWithoutCourseInput, teacherUncheckedUpdateWithoutCourseInput>;
    create: XOR<teacherCreateWithoutCourseInput, teacherUncheckedCreateWithoutCourseInput>;
    where?: teacherWhereInput;
  };

  export type teacherUpdateToOneWithWhereWithoutCourseInput = {
    where?: teacherWhereInput;
    data: XOR<teacherUpdateWithoutCourseInput, teacherUncheckedUpdateWithoutCourseInput>;
  };

  export type teacherUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateOneRequiredWithoutTeacherNestedInput;
    user?: userUpdateOneRequiredWithoutTeacherNestedInput;
  };

  export type teacherUncheckedUpdateWithoutCourseInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type studentCreateWithoutParentInput = {
    id?: string;
    grade_level: string;
    enrollment_date: Date | string;
    graduation_date?: Date | string | null;
    major?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    school: schoolCreateNestedOneWithoutStudentInput;
    user: userCreateNestedOneWithoutStudentInput;
  };

  export type studentUncheckedCreateWithoutParentInput = {
    id?: string;
    user_id: string;
    school_id: string;
    grade_level: string;
    enrollment_date: Date | string;
    graduation_date?: Date | string | null;
    major?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type studentCreateOrConnectWithoutParentInput = {
    where: studentWhereUniqueInput;
    create: XOR<studentCreateWithoutParentInput, studentUncheckedCreateWithoutParentInput>;
  };

  export type userCreateWithoutParentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    school?: schoolCreateNestedManyWithoutUserInput;
    student?: studentCreateNestedManyWithoutUserInput;
    teacher?: teacherCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutParentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    school?: schoolUncheckedCreateNestedManyWithoutUserInput;
    student?: studentUncheckedCreateNestedManyWithoutUserInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutParentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutParentInput, userUncheckedCreateWithoutParentInput>;
  };

  export type studentUpsertWithoutParentInput = {
    update: XOR<studentUpdateWithoutParentInput, studentUncheckedUpdateWithoutParentInput>;
    create: XOR<studentCreateWithoutParentInput, studentUncheckedCreateWithoutParentInput>;
    where?: studentWhereInput;
  };

  export type studentUpdateToOneWithWhereWithoutParentInput = {
    where?: studentWhereInput;
    data: XOR<studentUpdateWithoutParentInput, studentUncheckedUpdateWithoutParentInput>;
  };

  export type studentUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    grade_level?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    major?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateOneRequiredWithoutStudentNestedInput;
    user?: userUpdateOneRequiredWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    grade_level?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    major?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutParentInput = {
    update: XOR<userUpdateWithoutParentInput, userUncheckedUpdateWithoutParentInput>;
    create: XOR<userCreateWithoutParentInput, userUncheckedCreateWithoutParentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutParentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutParentInput, userUncheckedUpdateWithoutParentInput>;
  };

  export type userUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateManyWithoutUserNestedInput;
    student?: studentUpdateManyWithoutUserNestedInput;
    teacher?: teacherUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUncheckedUpdateManyWithoutUserNestedInput;
    student?: studentUncheckedUpdateManyWithoutUserNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type courseCreateWithoutSchoolInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date: Date | string;
    end_date: Date | string;
    credits: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    teacher: teacherCreateNestedOneWithoutCourseInput;
  };

  export type courseUncheckedCreateWithoutSchoolInput = {
    id?: string;
    teacher_id: string;
    name: string;
    description?: string | null;
    start_date: Date | string;
    end_date: Date | string;
    credits: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type courseCreateOrConnectWithoutSchoolInput = {
    where: courseWhereUniqueInput;
    create: XOR<courseCreateWithoutSchoolInput, courseUncheckedCreateWithoutSchoolInput>;
  };

  export type courseCreateManySchoolInputEnvelope = {
    data: courseCreateManySchoolInput | courseCreateManySchoolInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutSchoolInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    parent?: parentCreateNestedManyWithoutUserInput;
    student?: studentCreateNestedManyWithoutUserInput;
    teacher?: teacherCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutSchoolInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    parent?: parentUncheckedCreateNestedManyWithoutUserInput;
    student?: studentUncheckedCreateNestedManyWithoutUserInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutSchoolInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
  };

  export type studentCreateWithoutSchoolInput = {
    id?: string;
    grade_level: string;
    enrollment_date: Date | string;
    graduation_date?: Date | string | null;
    major?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    parent?: parentCreateNestedManyWithoutStudentInput;
    user: userCreateNestedOneWithoutStudentInput;
  };

  export type studentUncheckedCreateWithoutSchoolInput = {
    id?: string;
    user_id: string;
    grade_level: string;
    enrollment_date: Date | string;
    graduation_date?: Date | string | null;
    major?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    parent?: parentUncheckedCreateNestedManyWithoutStudentInput;
  };

  export type studentCreateOrConnectWithoutSchoolInput = {
    where: studentWhereUniqueInput;
    create: XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>;
  };

  export type studentCreateManySchoolInputEnvelope = {
    data: studentCreateManySchoolInput | studentCreateManySchoolInput[];
    skipDuplicates?: boolean;
  };

  export type teacherCreateWithoutSchoolInput = {
    id?: string;
    subject: string;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    department?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    course?: courseCreateNestedManyWithoutTeacherInput;
    user: userCreateNestedOneWithoutTeacherInput;
  };

  export type teacherUncheckedCreateWithoutSchoolInput = {
    id?: string;
    user_id: string;
    subject: string;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    department?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    course?: courseUncheckedCreateNestedManyWithoutTeacherInput;
  };

  export type teacherCreateOrConnectWithoutSchoolInput = {
    where: teacherWhereUniqueInput;
    create: XOR<teacherCreateWithoutSchoolInput, teacherUncheckedCreateWithoutSchoolInput>;
  };

  export type teacherCreateManySchoolInputEnvelope = {
    data: teacherCreateManySchoolInput | teacherCreateManySchoolInput[];
    skipDuplicates?: boolean;
  };

  export type courseUpsertWithWhereUniqueWithoutSchoolInput = {
    where: courseWhereUniqueInput;
    update: XOR<courseUpdateWithoutSchoolInput, courseUncheckedUpdateWithoutSchoolInput>;
    create: XOR<courseCreateWithoutSchoolInput, courseUncheckedCreateWithoutSchoolInput>;
  };

  export type courseUpdateWithWhereUniqueWithoutSchoolInput = {
    where: courseWhereUniqueInput;
    data: XOR<courseUpdateWithoutSchoolInput, courseUncheckedUpdateWithoutSchoolInput>;
  };

  export type courseUpdateManyWithWhereWithoutSchoolInput = {
    where: courseScalarWhereInput;
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyWithoutSchoolInput>;
  };

  export type courseScalarWhereInput = {
    AND?: courseScalarWhereInput | courseScalarWhereInput[];
    OR?: courseScalarWhereInput[];
    NOT?: courseScalarWhereInput | courseScalarWhereInput[];
    id?: UuidFilter<'course'> | string;
    school_id?: UuidFilter<'course'> | string;
    teacher_id?: UuidFilter<'course'> | string;
    name?: StringFilter<'course'> | string;
    description?: StringNullableFilter<'course'> | string | null;
    start_date?: DateTimeFilter<'course'> | Date | string;
    end_date?: DateTimeFilter<'course'> | Date | string;
    credits?: IntFilter<'course'> | number;
    created_at?: DateTimeFilter<'course'> | Date | string;
    updated_at?: DateTimeFilter<'course'> | Date | string;
  };

  export type userUpsertWithoutSchoolInput = {
    update: XOR<userUpdateWithoutSchoolInput, userUncheckedUpdateWithoutSchoolInput>;
    create: XOR<userCreateWithoutSchoolInput, userUncheckedCreateWithoutSchoolInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutSchoolInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutSchoolInput, userUncheckedUpdateWithoutSchoolInput>;
  };

  export type userUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: parentUpdateManyWithoutUserNestedInput;
    student?: studentUpdateManyWithoutUserNestedInput;
    teacher?: teacherUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: parentUncheckedUpdateManyWithoutUserNestedInput;
    student?: studentUncheckedUpdateManyWithoutUserNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type studentUpsertWithWhereUniqueWithoutSchoolInput = {
    where: studentWhereUniqueInput;
    update: XOR<studentUpdateWithoutSchoolInput, studentUncheckedUpdateWithoutSchoolInput>;
    create: XOR<studentCreateWithoutSchoolInput, studentUncheckedCreateWithoutSchoolInput>;
  };

  export type studentUpdateWithWhereUniqueWithoutSchoolInput = {
    where: studentWhereUniqueInput;
    data: XOR<studentUpdateWithoutSchoolInput, studentUncheckedUpdateWithoutSchoolInput>;
  };

  export type studentUpdateManyWithWhereWithoutSchoolInput = {
    where: studentScalarWhereInput;
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyWithoutSchoolInput>;
  };

  export type studentScalarWhereInput = {
    AND?: studentScalarWhereInput | studentScalarWhereInput[];
    OR?: studentScalarWhereInput[];
    NOT?: studentScalarWhereInput | studentScalarWhereInput[];
    id?: UuidFilter<'student'> | string;
    user_id?: UuidFilter<'student'> | string;
    school_id?: UuidFilter<'student'> | string;
    grade_level?: StringFilter<'student'> | string;
    enrollment_date?: DateTimeFilter<'student'> | Date | string;
    graduation_date?: DateTimeNullableFilter<'student'> | Date | string | null;
    major?: StringNullableFilter<'student'> | string | null;
    created_at?: DateTimeFilter<'student'> | Date | string;
    updated_at?: DateTimeFilter<'student'> | Date | string;
  };

  export type teacherUpsertWithWhereUniqueWithoutSchoolInput = {
    where: teacherWhereUniqueInput;
    update: XOR<teacherUpdateWithoutSchoolInput, teacherUncheckedUpdateWithoutSchoolInput>;
    create: XOR<teacherCreateWithoutSchoolInput, teacherUncheckedCreateWithoutSchoolInput>;
  };

  export type teacherUpdateWithWhereUniqueWithoutSchoolInput = {
    where: teacherWhereUniqueInput;
    data: XOR<teacherUpdateWithoutSchoolInput, teacherUncheckedUpdateWithoutSchoolInput>;
  };

  export type teacherUpdateManyWithWhereWithoutSchoolInput = {
    where: teacherScalarWhereInput;
    data: XOR<teacherUpdateManyMutationInput, teacherUncheckedUpdateManyWithoutSchoolInput>;
  };

  export type teacherScalarWhereInput = {
    AND?: teacherScalarWhereInput | teacherScalarWhereInput[];
    OR?: teacherScalarWhereInput[];
    NOT?: teacherScalarWhereInput | teacherScalarWhereInput[];
    id?: UuidFilter<'teacher'> | string;
    user_id?: UuidFilter<'teacher'> | string;
    school_id?: UuidFilter<'teacher'> | string;
    subject?: StringFilter<'teacher'> | string;
    hire_date?: DateTimeFilter<'teacher'> | Date | string;
    termination_date?: DateTimeNullableFilter<'teacher'> | Date | string | null;
    department?: StringNullableFilter<'teacher'> | string | null;
    created_at?: DateTimeFilter<'teacher'> | Date | string;
    updated_at?: DateTimeFilter<'teacher'> | Date | string;
  };

  export type parentCreateWithoutStudentInput = {
    id?: string;
    relationship: string;
    phone_number: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutParentInput;
  };

  export type parentUncheckedCreateWithoutStudentInput = {
    id?: string;
    user_id: string;
    relationship: string;
    phone_number: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type parentCreateOrConnectWithoutStudentInput = {
    where: parentWhereUniqueInput;
    create: XOR<parentCreateWithoutStudentInput, parentUncheckedCreateWithoutStudentInput>;
  };

  export type parentCreateManyStudentInputEnvelope = {
    data: parentCreateManyStudentInput | parentCreateManyStudentInput[];
    skipDuplicates?: boolean;
  };

  export type schoolCreateWithoutStudentInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    course?: courseCreateNestedManyWithoutSchoolInput;
    user: userCreateNestedOneWithoutSchoolInput;
    teacher?: teacherCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateWithoutStudentInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    course?: courseUncheckedCreateNestedManyWithoutSchoolInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolCreateOrConnectWithoutStudentInput = {
    where: schoolWhereUniqueInput;
    create: XOR<schoolCreateWithoutStudentInput, schoolUncheckedCreateWithoutStudentInput>;
  };

  export type userCreateWithoutStudentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    parent?: parentCreateNestedManyWithoutUserInput;
    school?: schoolCreateNestedManyWithoutUserInput;
    teacher?: teacherCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutStudentInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    parent?: parentUncheckedCreateNestedManyWithoutUserInput;
    school?: schoolUncheckedCreateNestedManyWithoutUserInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutStudentInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutStudentInput, userUncheckedCreateWithoutStudentInput>;
  };

  export type parentUpsertWithWhereUniqueWithoutStudentInput = {
    where: parentWhereUniqueInput;
    update: XOR<parentUpdateWithoutStudentInput, parentUncheckedUpdateWithoutStudentInput>;
    create: XOR<parentCreateWithoutStudentInput, parentUncheckedCreateWithoutStudentInput>;
  };

  export type parentUpdateWithWhereUniqueWithoutStudentInput = {
    where: parentWhereUniqueInput;
    data: XOR<parentUpdateWithoutStudentInput, parentUncheckedUpdateWithoutStudentInput>;
  };

  export type parentUpdateManyWithWhereWithoutStudentInput = {
    where: parentScalarWhereInput;
    data: XOR<parentUpdateManyMutationInput, parentUncheckedUpdateManyWithoutStudentInput>;
  };

  export type parentScalarWhereInput = {
    AND?: parentScalarWhereInput | parentScalarWhereInput[];
    OR?: parentScalarWhereInput[];
    NOT?: parentScalarWhereInput | parentScalarWhereInput[];
    id?: UuidFilter<'parent'> | string;
    user_id?: UuidFilter<'parent'> | string;
    student_id?: UuidFilter<'parent'> | string;
    relationship?: StringFilter<'parent'> | string;
    phone_number?: StringFilter<'parent'> | string;
    address?: StringFilter<'parent'> | string;
    city?: StringFilter<'parent'> | string;
    state?: StringFilter<'parent'> | string;
    zip_code?: StringFilter<'parent'> | string;
    created_at?: DateTimeFilter<'parent'> | Date | string;
    updated_at?: DateTimeFilter<'parent'> | Date | string;
  };

  export type schoolUpsertWithoutStudentInput = {
    update: XOR<schoolUpdateWithoutStudentInput, schoolUncheckedUpdateWithoutStudentInput>;
    create: XOR<schoolCreateWithoutStudentInput, schoolUncheckedCreateWithoutStudentInput>;
    where?: schoolWhereInput;
  };

  export type schoolUpdateToOneWithWhereWithoutStudentInput = {
    where?: schoolWhereInput;
    data: XOR<schoolUpdateWithoutStudentInput, schoolUncheckedUpdateWithoutStudentInput>;
  };

  export type schoolUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    course?: courseUpdateManyWithoutSchoolNestedInput;
    user?: userUpdateOneRequiredWithoutSchoolNestedInput;
    teacher?: teacherUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    course?: courseUncheckedUpdateManyWithoutSchoolNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type userUpsertWithoutStudentInput = {
    update: XOR<userUpdateWithoutStudentInput, userUncheckedUpdateWithoutStudentInput>;
    create: XOR<userCreateWithoutStudentInput, userUncheckedCreateWithoutStudentInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutStudentInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutStudentInput, userUncheckedUpdateWithoutStudentInput>;
  };

  export type userUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: parentUpdateManyWithoutUserNestedInput;
    school?: schoolUpdateManyWithoutUserNestedInput;
    teacher?: teacherUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: parentUncheckedUpdateManyWithoutUserNestedInput;
    school?: schoolUncheckedUpdateManyWithoutUserNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type courseCreateWithoutTeacherInput = {
    id?: string;
    name: string;
    description?: string | null;
    start_date: Date | string;
    end_date: Date | string;
    credits: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    school: schoolCreateNestedOneWithoutCourseInput;
  };

  export type courseUncheckedCreateWithoutTeacherInput = {
    id?: string;
    school_id: string;
    name: string;
    description?: string | null;
    start_date: Date | string;
    end_date: Date | string;
    credits: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type courseCreateOrConnectWithoutTeacherInput = {
    where: courseWhereUniqueInput;
    create: XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput>;
  };

  export type courseCreateManyTeacherInputEnvelope = {
    data: courseCreateManyTeacherInput | courseCreateManyTeacherInput[];
    skipDuplicates?: boolean;
  };

  export type schoolCreateWithoutTeacherInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    course?: courseCreateNestedManyWithoutSchoolInput;
    user: userCreateNestedOneWithoutSchoolInput;
    student?: studentCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateWithoutTeacherInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    course?: courseUncheckedCreateNestedManyWithoutSchoolInput;
    student?: studentUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolCreateOrConnectWithoutTeacherInput = {
    where: schoolWhereUniqueInput;
    create: XOR<schoolCreateWithoutTeacherInput, schoolUncheckedCreateWithoutTeacherInput>;
  };

  export type userCreateWithoutTeacherInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    parent?: parentCreateNestedManyWithoutUserInput;
    school?: schoolCreateNestedManyWithoutUserInput;
    student?: studentCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutTeacherInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    parent?: parentUncheckedCreateNestedManyWithoutUserInput;
    school?: schoolUncheckedCreateNestedManyWithoutUserInput;
    student?: studentUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutTeacherInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutTeacherInput, userUncheckedCreateWithoutTeacherInput>;
  };

  export type courseUpsertWithWhereUniqueWithoutTeacherInput = {
    where: courseWhereUniqueInput;
    update: XOR<courseUpdateWithoutTeacherInput, courseUncheckedUpdateWithoutTeacherInput>;
    create: XOR<courseCreateWithoutTeacherInput, courseUncheckedCreateWithoutTeacherInput>;
  };

  export type courseUpdateWithWhereUniqueWithoutTeacherInput = {
    where: courseWhereUniqueInput;
    data: XOR<courseUpdateWithoutTeacherInput, courseUncheckedUpdateWithoutTeacherInput>;
  };

  export type courseUpdateManyWithWhereWithoutTeacherInput = {
    where: courseScalarWhereInput;
    data: XOR<courseUpdateManyMutationInput, courseUncheckedUpdateManyWithoutTeacherInput>;
  };

  export type schoolUpsertWithoutTeacherInput = {
    update: XOR<schoolUpdateWithoutTeacherInput, schoolUncheckedUpdateWithoutTeacherInput>;
    create: XOR<schoolCreateWithoutTeacherInput, schoolUncheckedCreateWithoutTeacherInput>;
    where?: schoolWhereInput;
  };

  export type schoolUpdateToOneWithWhereWithoutTeacherInput = {
    where?: schoolWhereInput;
    data: XOR<schoolUpdateWithoutTeacherInput, schoolUncheckedUpdateWithoutTeacherInput>;
  };

  export type schoolUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    course?: courseUpdateManyWithoutSchoolNestedInput;
    user?: userUpdateOneRequiredWithoutSchoolNestedInput;
    student?: studentUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    course?: courseUncheckedUpdateManyWithoutSchoolNestedInput;
    student?: studentUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type userUpsertWithoutTeacherInput = {
    update: XOR<userUpdateWithoutTeacherInput, userUncheckedUpdateWithoutTeacherInput>;
    create: XOR<userCreateWithoutTeacherInput, userUncheckedCreateWithoutTeacherInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutTeacherInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutTeacherInput, userUncheckedUpdateWithoutTeacherInput>;
  };

  export type userUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: parentUpdateManyWithoutUserNestedInput;
    school?: schoolUpdateManyWithoutUserNestedInput;
    student?: studentUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: parentUncheckedUpdateManyWithoutUserNestedInput;
    school?: schoolUncheckedUpdateManyWithoutUserNestedInput;
    student?: studentUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type parentCreateWithoutUserInput = {
    id?: string;
    relationship: string;
    phone_number: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    student: studentCreateNestedOneWithoutParentInput;
  };

  export type parentUncheckedCreateWithoutUserInput = {
    id?: string;
    student_id: string;
    relationship: string;
    phone_number: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type parentCreateOrConnectWithoutUserInput = {
    where: parentWhereUniqueInput;
    create: XOR<parentCreateWithoutUserInput, parentUncheckedCreateWithoutUserInput>;
  };

  export type parentCreateManyUserInputEnvelope = {
    data: parentCreateManyUserInput | parentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type schoolCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    course?: courseCreateNestedManyWithoutSchoolInput;
    student?: studentCreateNestedManyWithoutSchoolInput;
    teacher?: teacherCreateNestedManyWithoutSchoolInput;
  };

  export type schoolUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    course?: courseUncheckedCreateNestedManyWithoutSchoolInput;
    student?: studentUncheckedCreateNestedManyWithoutSchoolInput;
    teacher?: teacherUncheckedCreateNestedManyWithoutSchoolInput;
  };

  export type schoolCreateOrConnectWithoutUserInput = {
    where: schoolWhereUniqueInput;
    create: XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>;
  };

  export type schoolCreateManyUserInputEnvelope = {
    data: schoolCreateManyUserInput | schoolCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type studentCreateWithoutUserInput = {
    id?: string;
    grade_level: string;
    enrollment_date: Date | string;
    graduation_date?: Date | string | null;
    major?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    parent?: parentCreateNestedManyWithoutStudentInput;
    school: schoolCreateNestedOneWithoutStudentInput;
  };

  export type studentUncheckedCreateWithoutUserInput = {
    id?: string;
    school_id: string;
    grade_level: string;
    enrollment_date: Date | string;
    graduation_date?: Date | string | null;
    major?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    parent?: parentUncheckedCreateNestedManyWithoutStudentInput;
  };

  export type studentCreateOrConnectWithoutUserInput = {
    where: studentWhereUniqueInput;
    create: XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>;
  };

  export type studentCreateManyUserInputEnvelope = {
    data: studentCreateManyUserInput | studentCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type teacherCreateWithoutUserInput = {
    id?: string;
    subject: string;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    department?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    course?: courseCreateNestedManyWithoutTeacherInput;
    school: schoolCreateNestedOneWithoutTeacherInput;
  };

  export type teacherUncheckedCreateWithoutUserInput = {
    id?: string;
    school_id: string;
    subject: string;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    department?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    course?: courseUncheckedCreateNestedManyWithoutTeacherInput;
  };

  export type teacherCreateOrConnectWithoutUserInput = {
    where: teacherWhereUniqueInput;
    create: XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>;
  };

  export type teacherCreateManyUserInputEnvelope = {
    data: teacherCreateManyUserInput | teacherCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type parentUpsertWithWhereUniqueWithoutUserInput = {
    where: parentWhereUniqueInput;
    update: XOR<parentUpdateWithoutUserInput, parentUncheckedUpdateWithoutUserInput>;
    create: XOR<parentCreateWithoutUserInput, parentUncheckedCreateWithoutUserInput>;
  };

  export type parentUpdateWithWhereUniqueWithoutUserInput = {
    where: parentWhereUniqueInput;
    data: XOR<parentUpdateWithoutUserInput, parentUncheckedUpdateWithoutUserInput>;
  };

  export type parentUpdateManyWithWhereWithoutUserInput = {
    where: parentScalarWhereInput;
    data: XOR<parentUpdateManyMutationInput, parentUncheckedUpdateManyWithoutUserInput>;
  };

  export type schoolUpsertWithWhereUniqueWithoutUserInput = {
    where: schoolWhereUniqueInput;
    update: XOR<schoolUpdateWithoutUserInput, schoolUncheckedUpdateWithoutUserInput>;
    create: XOR<schoolCreateWithoutUserInput, schoolUncheckedCreateWithoutUserInput>;
  };

  export type schoolUpdateWithWhereUniqueWithoutUserInput = {
    where: schoolWhereUniqueInput;
    data: XOR<schoolUpdateWithoutUserInput, schoolUncheckedUpdateWithoutUserInput>;
  };

  export type schoolUpdateManyWithWhereWithoutUserInput = {
    where: schoolScalarWhereInput;
    data: XOR<schoolUpdateManyMutationInput, schoolUncheckedUpdateManyWithoutUserInput>;
  };

  export type schoolScalarWhereInput = {
    AND?: schoolScalarWhereInput | schoolScalarWhereInput[];
    OR?: schoolScalarWhereInput[];
    NOT?: schoolScalarWhereInput | schoolScalarWhereInput[];
    id?: UuidFilter<'school'> | string;
    description?: StringNullableFilter<'school'> | string | null;
    address?: StringNullableFilter<'school'> | string | null;
    city?: StringNullableFilter<'school'> | string | null;
    state?: StringNullableFilter<'school'> | string | null;
    zip_code?: StringNullableFilter<'school'> | string | null;
    name?: StringFilter<'school'> | string;
    created_at?: DateTimeFilter<'school'> | Date | string;
    updated_at?: DateTimeFilter<'school'> | Date | string;
    user_id?: UuidFilter<'school'> | string;
    tenant_id?: StringFilter<'school'> | string;
  };

  export type studentUpsertWithWhereUniqueWithoutUserInput = {
    where: studentWhereUniqueInput;
    update: XOR<studentUpdateWithoutUserInput, studentUncheckedUpdateWithoutUserInput>;
    create: XOR<studentCreateWithoutUserInput, studentUncheckedCreateWithoutUserInput>;
  };

  export type studentUpdateWithWhereUniqueWithoutUserInput = {
    where: studentWhereUniqueInput;
    data: XOR<studentUpdateWithoutUserInput, studentUncheckedUpdateWithoutUserInput>;
  };

  export type studentUpdateManyWithWhereWithoutUserInput = {
    where: studentScalarWhereInput;
    data: XOR<studentUpdateManyMutationInput, studentUncheckedUpdateManyWithoutUserInput>;
  };

  export type teacherUpsertWithWhereUniqueWithoutUserInput = {
    where: teacherWhereUniqueInput;
    update: XOR<teacherUpdateWithoutUserInput, teacherUncheckedUpdateWithoutUserInput>;
    create: XOR<teacherCreateWithoutUserInput, teacherUncheckedCreateWithoutUserInput>;
  };

  export type teacherUpdateWithWhereUniqueWithoutUserInput = {
    where: teacherWhereUniqueInput;
    data: XOR<teacherUpdateWithoutUserInput, teacherUncheckedUpdateWithoutUserInput>;
  };

  export type teacherUpdateManyWithWhereWithoutUserInput = {
    where: teacherScalarWhereInput;
    data: XOR<teacherUpdateManyMutationInput, teacherUncheckedUpdateManyWithoutUserInput>;
  };

  export type courseCreateManySchoolInput = {
    id?: string;
    teacher_id: string;
    name: string;
    description?: string | null;
    start_date: Date | string;
    end_date: Date | string;
    credits: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type studentCreateManySchoolInput = {
    id?: string;
    user_id: string;
    grade_level: string;
    enrollment_date: Date | string;
    graduation_date?: Date | string | null;
    major?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacherCreateManySchoolInput = {
    id?: string;
    user_id: string;
    subject: string;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    department?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type courseUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    credits?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    teacher?: teacherUpdateOneRequiredWithoutCourseNestedInput;
  };

  export type courseUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teacher_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    credits?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    teacher_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    credits?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type studentUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    grade_level?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    major?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: parentUpdateManyWithoutStudentNestedInput;
    user?: userUpdateOneRequiredWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    grade_level?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    major?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: parentUncheckedUpdateManyWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    grade_level?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    major?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacherUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUpdateManyWithoutTeacherNestedInput;
    user?: userUpdateOneRequiredWithoutTeacherNestedInput;
  };

  export type teacherUncheckedUpdateWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUncheckedUpdateManyWithoutTeacherNestedInput;
  };

  export type teacherUncheckedUpdateManyWithoutSchoolInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type parentCreateManyStudentInput = {
    id?: string;
    user_id: string;
    relationship: string;
    phone_number: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type parentUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    relationship?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutParentNestedInput;
  };

  export type parentUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    relationship?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type parentUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    relationship?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseCreateManyTeacherInput = {
    id?: string;
    school_id: string;
    name: string;
    description?: string | null;
    start_date: Date | string;
    end_date: Date | string;
    credits: number;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type courseUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    credits?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    school?: schoolUpdateOneRequiredWithoutCourseNestedInput;
  };

  export type courseUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    credits?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type courseUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    credits?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type parentCreateManyUserInput = {
    id?: string;
    student_id: string;
    relationship: string;
    phone_number: string;
    address: string;
    city: string;
    state: string;
    zip_code: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type schoolCreateManyUserInput = {
    id?: string;
    description?: string | null;
    address?: string | null;
    city?: string | null;
    state?: string | null;
    zip_code?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type studentCreateManyUserInput = {
    id?: string;
    school_id: string;
    grade_level: string;
    enrollment_date: Date | string;
    graduation_date?: Date | string | null;
    major?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type teacherCreateManyUserInput = {
    id?: string;
    school_id: string;
    subject: string;
    hire_date: Date | string;
    termination_date?: Date | string | null;
    department?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type parentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    relationship?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    student?: studentUpdateOneRequiredWithoutParentNestedInput;
  };

  export type parentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    student_id?: StringFieldUpdateOperationsInput | string;
    relationship?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type parentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    student_id?: StringFieldUpdateOperationsInput | string;
    relationship?: StringFieldUpdateOperationsInput | string;
    phone_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    city?: StringFieldUpdateOperationsInput | string;
    state?: StringFieldUpdateOperationsInput | string;
    zip_code?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type schoolUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    course?: courseUpdateManyWithoutSchoolNestedInput;
    student?: studentUpdateManyWithoutSchoolNestedInput;
    teacher?: teacherUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    course?: courseUncheckedUpdateManyWithoutSchoolNestedInput;
    student?: studentUncheckedUpdateManyWithoutSchoolNestedInput;
    teacher?: teacherUncheckedUpdateManyWithoutSchoolNestedInput;
  };

  export type schoolUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    address?: NullableStringFieldUpdateOperationsInput | string | null;
    city?: NullableStringFieldUpdateOperationsInput | string | null;
    state?: NullableStringFieldUpdateOperationsInput | string | null;
    zip_code?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type studentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    grade_level?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    major?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: parentUpdateManyWithoutStudentNestedInput;
    school?: schoolUpdateOneRequiredWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    grade_level?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    major?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    parent?: parentUncheckedUpdateManyWithoutStudentNestedInput;
  };

  export type studentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    grade_level?: StringFieldUpdateOperationsInput | string;
    enrollment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    graduation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    major?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type teacherUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUpdateManyWithoutTeacherNestedInput;
    school?: schoolUpdateOneRequiredWithoutTeacherNestedInput;
  };

  export type teacherUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    course?: courseUncheckedUpdateManyWithoutTeacherNestedInput;
  };

  export type teacherUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    school_id?: StringFieldUpdateOperationsInput | string;
    subject?: StringFieldUpdateOperationsInput | string;
    hire_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    termination_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    department?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use SchoolCountOutputTypeDefaultArgs instead
   */
  export type SchoolCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    SchoolCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use StudentCountOutputTypeDefaultArgs instead
   */
  export type StudentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    StudentCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use TeacherCountOutputTypeDefaultArgs instead
   */
  export type TeacherCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    TeacherCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use courseDefaultArgs instead
   */
  export type courseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    courseDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use parentDefaultArgs instead
   */
  export type parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    parentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use schoolDefaultArgs instead
   */
  export type schoolArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    schoolDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use studentDefaultArgs instead
   */
  export type studentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    studentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use teacherDefaultArgs instead
   */
  export type teacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    teacherDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
