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
 * Model applicant
 *
 */
export type applicant = $Result.DefaultSelection<Prisma.$applicantPayload>;
/**
 * Model company
 *
 */
export type company = $Result.DefaultSelection<Prisma.$companyPayload>;
/**
 * Model customer
 *
 */
export type customer = $Result.DefaultSelection<Prisma.$customerPayload>;
/**
 * Model employee
 *
 */
export type employee = $Result.DefaultSelection<Prisma.$employeePayload>;
/**
 * Model hr_manager
 *
 */
export type hr_manager = $Result.DefaultSelection<Prisma.$hr_managerPayload>;
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
 * // Fetch zero or more Applicants
 * const applicants = await prisma.applicant.findMany()
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
   * // Fetch zero or more Applicants
   * const applicants = await prisma.applicant.findMany()
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
   * `prisma.applicant`: Exposes CRUD operations for the **applicant** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Applicants
   * const applicants = await prisma.applicant.findMany()
   * ```
   */
  get applicant(): Prisma.applicantDelegate<ExtArgs>;

  /**
   * `prisma.company`: Exposes CRUD operations for the **company** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   */
  get company(): Prisma.companyDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **customer** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Customers
   * const customers = await prisma.customer.findMany()
   * ```
   */
  get customer(): Prisma.customerDelegate<ExtArgs>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **employee** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Employees
   * const employees = await prisma.employee.findMany()
   * ```
   */
  get employee(): Prisma.employeeDelegate<ExtArgs>;

  /**
   * `prisma.hr_manager`: Exposes CRUD operations for the **hr_manager** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Hr_managers
   * const hr_managers = await prisma.hr_manager.findMany()
   * ```
   */
  get hr_manager(): Prisma.hr_managerDelegate<ExtArgs>;

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
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
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
    applicant: 'applicant';
    company: 'company';
    customer: 'customer';
    employee: 'employee';
    hr_manager: 'hr_manager';
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
      modelProps: 'applicant' | 'company' | 'customer' | 'employee' | 'hr_manager' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      applicant: {
        payload: Prisma.$applicantPayload<ExtArgs>;
        fields: Prisma.applicantFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.applicantFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.applicantFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          findFirst: {
            args: Prisma.applicantFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.applicantFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          findMany: {
            args: Prisma.applicantFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>[];
          };
          create: {
            args: Prisma.applicantCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          createMany: {
            args: Prisma.applicantCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.applicantDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          update: {
            args: Prisma.applicantUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          deleteMany: {
            args: Prisma.applicantDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.applicantUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.applicantUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$applicantPayload>;
          };
          aggregate: {
            args: Prisma.ApplicantAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateApplicant>;
          };
          groupBy: {
            args: Prisma.applicantGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ApplicantGroupByOutputType>[];
          };
          count: {
            args: Prisma.applicantCountArgs<ExtArgs>;
            result: $Utils.Optional<ApplicantCountAggregateOutputType> | number;
          };
        };
      };
      company: {
        payload: Prisma.$companyPayload<ExtArgs>;
        fields: Prisma.companyFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.companyFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.companyFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findFirst: {
            args: Prisma.companyFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.companyFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          findMany: {
            args: Prisma.companyFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>[];
          };
          create: {
            args: Prisma.companyCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          createMany: {
            args: Prisma.companyCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.companyDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          update: {
            args: Prisma.companyUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          deleteMany: {
            args: Prisma.companyDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.companyUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.companyUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$companyPayload>;
          };
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCompany>;
          };
          groupBy: {
            args: Prisma.companyGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CompanyGroupByOutputType>[];
          };
          count: {
            args: Prisma.companyCountArgs<ExtArgs>;
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number;
          };
        };
      };
      customer: {
        payload: Prisma.$customerPayload<ExtArgs>;
        fields: Prisma.customerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.customerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.customerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          findFirst: {
            args: Prisma.customerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.customerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          findMany: {
            args: Prisma.customerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>[];
          };
          create: {
            args: Prisma.customerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          createMany: {
            args: Prisma.customerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.customerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          update: {
            args: Prisma.customerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          deleteMany: {
            args: Prisma.customerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.customerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.customerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$customerPayload>;
          };
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCustomer>;
          };
          groupBy: {
            args: Prisma.customerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CustomerGroupByOutputType>[];
          };
          count: {
            args: Prisma.customerCountArgs<ExtArgs>;
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number;
          };
        };
      };
      employee: {
        payload: Prisma.$employeePayload<ExtArgs>;
        fields: Prisma.employeeFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.employeeFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.employeeFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findFirst: {
            args: Prisma.employeeFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.employeeFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          findMany: {
            args: Prisma.employeeFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>[];
          };
          create: {
            args: Prisma.employeeCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          createMany: {
            args: Prisma.employeeCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.employeeDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          update: {
            args: Prisma.employeeUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          deleteMany: {
            args: Prisma.employeeDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.employeeUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.employeeUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$employeePayload>;
          };
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateEmployee>;
          };
          groupBy: {
            args: Prisma.employeeGroupByArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeGroupByOutputType>[];
          };
          count: {
            args: Prisma.employeeCountArgs<ExtArgs>;
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number;
          };
        };
      };
      hr_manager: {
        payload: Prisma.$hr_managerPayload<ExtArgs>;
        fields: Prisma.hr_managerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.hr_managerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.hr_managerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          findFirst: {
            args: Prisma.hr_managerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.hr_managerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          findMany: {
            args: Prisma.hr_managerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>[];
          };
          create: {
            args: Prisma.hr_managerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          createMany: {
            args: Prisma.hr_managerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.hr_managerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          update: {
            args: Prisma.hr_managerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          deleteMany: {
            args: Prisma.hr_managerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.hr_managerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.hr_managerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$hr_managerPayload>;
          };
          aggregate: {
            args: Prisma.Hr_managerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateHr_manager>;
          };
          groupBy: {
            args: Prisma.hr_managerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Hr_managerGroupByOutputType>[];
          };
          count: {
            args: Prisma.hr_managerCountArgs<ExtArgs>;
            result: $Utils.Optional<Hr_managerCountAggregateOutputType> | number;
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
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    applicant: number;
    customer: number;
    employee: number;
    hr_manager: number;
  };

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | CompanyCountOutputTypeCountApplicantArgs;
    customer?: boolean | CompanyCountOutputTypeCountCustomerArgs;
    employee?: boolean | CompanyCountOutputTypeCountEmployeeArgs;
    hr_manager?: boolean | CompanyCountOutputTypeCountHr_managerArgs;
  };

  // Custom InputTypes

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountApplicantArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: applicantWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountCustomerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: customerWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountEmployeeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: employeeWhereInput;
  };

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountHr_managerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: hr_managerWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    applicant: number;
    company: number;
    customer: number;
    employee: number;
    hr_manager: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | UserCountOutputTypeCountApplicantArgs;
    company?: boolean | UserCountOutputTypeCountCompanyArgs;
    customer?: boolean | UserCountOutputTypeCountCustomerArgs;
    employee?: boolean | UserCountOutputTypeCountEmployeeArgs;
    hr_manager?: boolean | UserCountOutputTypeCountHr_managerArgs;
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
  export type UserCountOutputTypeCountApplicantArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: applicantWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCompanyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: companyWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: customerWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEmployeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: employeeWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHr_managerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: hr_managerWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model applicant
   */

  export type AggregateApplicant = {
    _count: ApplicantCountAggregateOutputType | null;
    _min: ApplicantMinAggregateOutputType | null;
    _max: ApplicantMaxAggregateOutputType | null;
  };

  export type ApplicantMinAggregateOutputType = {
    id: string | null;
    resume: string | null;
    application_date: Date | null;
    status: string | null;
    user_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ApplicantMaxAggregateOutputType = {
    id: string | null;
    resume: string | null;
    application_date: Date | null;
    status: string | null;
    user_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type ApplicantCountAggregateOutputType = {
    id: number;
    resume: number;
    application_date: number;
    status: number;
    user_id: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type ApplicantMinAggregateInputType = {
    id?: true;
    resume?: true;
    application_date?: true;
    status?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ApplicantMaxAggregateInputType = {
    id?: true;
    resume?: true;
    application_date?: true;
    status?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type ApplicantCountAggregateInputType = {
    id?: true;
    resume?: true;
    application_date?: true;
    status?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type ApplicantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applicant to aggregate.
     */
    where?: applicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantOrderByWithRelationInput | applicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: applicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned applicants
     **/
    _count?: true | ApplicantCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ApplicantMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ApplicantMaxAggregateInputType;
  };

  export type GetApplicantAggregateType<T extends ApplicantAggregateArgs> = {
    [P in keyof T & keyof AggregateApplicant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplicant[P]>
      : GetScalarType<T[P], AggregateApplicant[P]>;
  };

  export type applicantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: applicantWhereInput;
    orderBy?: applicantOrderByWithAggregationInput | applicantOrderByWithAggregationInput[];
    by: ApplicantScalarFieldEnum[] | ApplicantScalarFieldEnum;
    having?: applicantScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApplicantCountAggregateInputType | true;
    _min?: ApplicantMinAggregateInputType;
    _max?: ApplicantMaxAggregateInputType;
  };

  export type ApplicantGroupByOutputType = {
    id: string;
    resume: string;
    application_date: Date;
    status: string;
    user_id: string;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: ApplicantCountAggregateOutputType | null;
    _min: ApplicantMinAggregateOutputType | null;
    _max: ApplicantMaxAggregateOutputType | null;
  };

  type GetApplicantGroupByPayload<T extends applicantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicantGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ApplicantGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ApplicantGroupByOutputType[P]>
          : GetScalarType<T[P], ApplicantGroupByOutputType[P]>;
      }
    >
  >;

  export type applicantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        resume?: boolean;
        application_date?: boolean;
        status?: boolean;
        user_id?: boolean;
        company_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['applicant']
    >;

  export type applicantSelectScalar = {
    id?: boolean;
    resume?: boolean;
    application_date?: boolean;
    status?: boolean;
    user_id?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type applicantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $applicantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'applicant';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        resume: string;
        application_date: Date;
        status: string;
        user_id: string;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['applicant']
    >;
    composites: {};
  };

  type applicantGetPayload<S extends boolean | null | undefined | applicantDefaultArgs> = $Result.GetResult<
    Prisma.$applicantPayload,
    S
  >;

  type applicantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    applicantFindManyArgs,
    'select' | 'include'
  > & {
    select?: ApplicantCountAggregateInputType | true;
  };

  export interface applicantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['applicant']; meta: { name: 'applicant' } };
    /**
     * Find zero or one Applicant that matches the filter.
     * @param {applicantFindUniqueArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends applicantFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, applicantFindUniqueArgs<ExtArgs>>,
    ): Prisma__applicantClient<
      $Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Applicant that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {applicantFindUniqueOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends applicantFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__applicantClient<
      $Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Applicant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantFindFirstArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends applicantFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantFindFirstArgs<ExtArgs>>,
    ): Prisma__applicantClient<
      $Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Applicant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantFindFirstOrThrowArgs} args - Arguments to find a Applicant
     * @example
     * // Get one Applicant
     * const applicant = await prisma.applicant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends applicantFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__applicantClient<
      $Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Applicants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applicants
     * const applicants = await prisma.applicant.findMany()
     *
     * // Get first 10 Applicants
     * const applicants = await prisma.applicant.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const applicantWithIdOnly = await prisma.applicant.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends applicantFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Applicant.
     * @param {applicantCreateArgs} args - Arguments to create a Applicant.
     * @example
     * // Create one Applicant
     * const Applicant = await prisma.applicant.create({
     *   data: {
     *     // ... data to create a Applicant
     *   }
     * })
     *
     **/
    create<T extends applicantCreateArgs<ExtArgs>>(
      args: SelectSubset<T, applicantCreateArgs<ExtArgs>>,
    ): Prisma__applicantClient<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Applicants.
     *     @param {applicantCreateManyArgs} args - Arguments to create many Applicants.
     *     @example
     *     // Create many Applicants
     *     const applicant = await prisma.applicant.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends applicantCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Applicant.
     * @param {applicantDeleteArgs} args - Arguments to delete one Applicant.
     * @example
     * // Delete one Applicant
     * const Applicant = await prisma.applicant.delete({
     *   where: {
     *     // ... filter to delete one Applicant
     *   }
     * })
     *
     **/
    delete<T extends applicantDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, applicantDeleteArgs<ExtArgs>>,
    ): Prisma__applicantClient<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Applicant.
     * @param {applicantUpdateArgs} args - Arguments to update one Applicant.
     * @example
     * // Update one Applicant
     * const applicant = await prisma.applicant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends applicantUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, applicantUpdateArgs<ExtArgs>>,
    ): Prisma__applicantClient<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Applicants.
     * @param {applicantDeleteManyArgs} args - Arguments to filter Applicants to delete.
     * @example
     * // Delete a few Applicants
     * const { count } = await prisma.applicant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends applicantDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, applicantDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applicants
     * const applicant = await prisma.applicant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends applicantUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, applicantUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Applicant.
     * @param {applicantUpsertArgs} args - Arguments to update or create a Applicant.
     * @example
     * // Update or create a Applicant
     * const applicant = await prisma.applicant.upsert({
     *   create: {
     *     // ... data to create a Applicant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Applicant we want to update
     *   }
     * })
     **/
    upsert<T extends applicantUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, applicantUpsertArgs<ExtArgs>>,
    ): Prisma__applicantClient<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Applicants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantCountArgs} args - Arguments to filter Applicants to count.
     * @example
     * // Count the number of Applicants
     * const count = await prisma.applicant.count({
     *   where: {
     *     // ... the filter for the Applicants we want to count
     *   }
     * })
     **/
    count<T extends applicantCountArgs>(
      args?: Subset<T, applicantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicantCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApplicantAggregateArgs>(
      args: Subset<T, ApplicantAggregateArgs>,
    ): Prisma.PrismaPromise<GetApplicantAggregateType<T>>;

    /**
     * Group by Applicant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {applicantGroupByArgs} args - Group by arguments.
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
      T extends applicantGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: applicantGroupByArgs['orderBy'] }
        : { orderBy?: applicantGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, applicantGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetApplicantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the applicant model
     */
    readonly fields: applicantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for applicant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__applicantClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
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
   * Fields of the applicant model
   */
  interface applicantFieldRefs {
    readonly id: FieldRef<'applicant', 'String'>;
    readonly resume: FieldRef<'applicant', 'String'>;
    readonly application_date: FieldRef<'applicant', 'DateTime'>;
    readonly status: FieldRef<'applicant', 'String'>;
    readonly user_id: FieldRef<'applicant', 'String'>;
    readonly company_id: FieldRef<'applicant', 'String'>;
    readonly created_at: FieldRef<'applicant', 'DateTime'>;
    readonly updated_at: FieldRef<'applicant', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * applicant findUnique
   */
  export type applicantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter, which applicant to fetch.
     */
    where: applicantWhereUniqueInput;
  };

  /**
   * applicant findUniqueOrThrow
   */
  export type applicantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter, which applicant to fetch.
     */
    where: applicantWhereUniqueInput;
  };

  /**
   * applicant findFirst
   */
  export type applicantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter, which applicant to fetch.
     */
    where?: applicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantOrderByWithRelationInput | applicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for applicants.
     */
    cursor?: applicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * applicant findFirstOrThrow
   */
  export type applicantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter, which applicant to fetch.
     */
    where?: applicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantOrderByWithRelationInput | applicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for applicants.
     */
    cursor?: applicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applicants.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of applicants.
     */
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * applicant findMany
   */
  export type applicantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter, which applicants to fetch.
     */
    where?: applicantWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of applicants to fetch.
     */
    orderBy?: applicantOrderByWithRelationInput | applicantOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing applicants.
     */
    cursor?: applicantWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` applicants from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` applicants.
     */
    skip?: number;
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * applicant create
   */
  export type applicantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * The data needed to create a applicant.
     */
    data: XOR<applicantCreateInput, applicantUncheckedCreateInput>;
  };

  /**
   * applicant createMany
   */
  export type applicantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many applicants.
     */
    data: applicantCreateManyInput | applicantCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * applicant update
   */
  export type applicantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * The data needed to update a applicant.
     */
    data: XOR<applicantUpdateInput, applicantUncheckedUpdateInput>;
    /**
     * Choose, which applicant to update.
     */
    where: applicantWhereUniqueInput;
  };

  /**
   * applicant updateMany
   */
  export type applicantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update applicants.
     */
    data: XOR<applicantUpdateManyMutationInput, applicantUncheckedUpdateManyInput>;
    /**
     * Filter which applicants to update
     */
    where?: applicantWhereInput;
  };

  /**
   * applicant upsert
   */
  export type applicantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * The filter to search for the applicant to update in case it exists.
     */
    where: applicantWhereUniqueInput;
    /**
     * In case the applicant found by the `where` argument doesn't exist, create a new applicant with this data.
     */
    create: XOR<applicantCreateInput, applicantUncheckedCreateInput>;
    /**
     * In case the applicant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<applicantUpdateInput, applicantUncheckedUpdateInput>;
  };

  /**
   * applicant delete
   */
  export type applicantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    /**
     * Filter which applicant to delete.
     */
    where: applicantWhereUniqueInput;
  };

  /**
   * applicant deleteMany
   */
  export type applicantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which applicants to delete
     */
    where?: applicantWhereInput;
  };

  /**
   * applicant without action
   */
  export type applicantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
  };

  /**
   * Model company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  export type CompanyMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type CompanyCountAggregateOutputType = {
    id: number;
    description: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type CompanyMinAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyMaxAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type CompanyCountAggregateInputType = {
    id?: true;
    description?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which company to aggregate.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned companies
     **/
    _count?: true | CompanyCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CompanyMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CompanyMaxAggregateInputType;
  };

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
    [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>;
  };

  export type companyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: companyWhereInput;
    orderBy?: companyOrderByWithAggregationInput | companyOrderByWithAggregationInput[];
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum;
    having?: companyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CompanyCountAggregateInputType | true;
    _min?: CompanyMinAggregateInputType;
    _max?: CompanyMaxAggregateInputType;
  };

  export type CompanyGroupByOutputType = {
    id: string;
    description: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: CompanyCountAggregateOutputType | null;
    _min: CompanyMinAggregateOutputType | null;
    _max: CompanyMaxAggregateOutputType | null;
  };

  type GetCompanyGroupByPayload<T extends companyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CompanyGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
          : GetScalarType<T[P], CompanyGroupByOutputType[P]>;
      }
    >
  >;

  export type companySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      applicant?: boolean | company$applicantArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      customer?: boolean | company$customerArgs<ExtArgs>;
      employee?: boolean | company$employeeArgs<ExtArgs>;
      hr_manager?: boolean | company$hr_managerArgs<ExtArgs>;
      _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['company']
  >;

  export type companySelectScalar = {
    id?: boolean;
    description?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type companyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applicant?: boolean | company$applicantArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    customer?: boolean | company$customerArgs<ExtArgs>;
    employee?: boolean | company$employeeArgs<ExtArgs>;
    hr_manager?: boolean | company$hr_managerArgs<ExtArgs>;
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $companyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'company';
    objects: {
      applicant: Prisma.$applicantPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
      customer: Prisma.$customerPayload<ExtArgs>[];
      employee: Prisma.$employeePayload<ExtArgs>[];
      hr_manager: Prisma.$hr_managerPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['company']
    >;
    composites: {};
  };

  type companyGetPayload<S extends boolean | null | undefined | companyDefaultArgs> = $Result.GetResult<
    Prisma.$companyPayload,
    S
  >;

  type companyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    companyFindManyArgs,
    'select' | 'include'
  > & {
    select?: CompanyCountAggregateInputType | true;
  };

  export interface companyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['company']; meta: { name: 'company' } };
    /**
     * Find zero or one Company that matches the filter.
     * @param {companyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends companyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, companyFindUniqueArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Company that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {companyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends companyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends companyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends companyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     *
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends companyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Company.
     * @param {companyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     *
     **/
    create<T extends companyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, companyCreateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Companies.
     *     @param {companyCreateManyArgs} args - Arguments to create many Companies.
     *     @example
     *     // Create many Companies
     *     const company = await prisma.company.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends companyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Company.
     * @param {companyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     *
     **/
    delete<T extends companyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, companyDeleteArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Company.
     * @param {companyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends companyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Companies.
     * @param {companyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends companyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, companyDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends companyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Company.
     * @param {companyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     **/
    upsert<T extends companyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, companyUpsertArgs<ExtArgs>>,
    ): Prisma__companyClient<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
     **/
    count<T extends companyCountArgs>(
      args?: Subset<T, companyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompanyAggregateArgs>(
      args: Subset<T, CompanyAggregateArgs>,
    ): Prisma.PrismaPromise<GetCompanyAggregateType<T>>;

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {companyGroupByArgs} args - Group by arguments.
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
      T extends companyGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: companyGroupByArgs['orderBy'] }
        : { orderBy?: companyGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, companyGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the company model
     */
    readonly fields: companyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__companyClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    applicant<T extends company$applicantArgs<ExtArgs> = {}>(
      args?: Subset<T, company$applicantArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    customer<T extends company$customerArgs<ExtArgs> = {}>(
      args?: Subset<T, company$customerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'> | Null>;

    employee<T extends company$employeeArgs<ExtArgs> = {}>(
      args?: Subset<T, company$employeeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'> | Null>;

    hr_manager<T extends company$hr_managerArgs<ExtArgs> = {}>(
      args?: Subset<T, company$hr_managerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Fields of the company model
   */
  interface companyFieldRefs {
    readonly id: FieldRef<'company', 'String'>;
    readonly description: FieldRef<'company', 'String'>;
    readonly name: FieldRef<'company', 'String'>;
    readonly created_at: FieldRef<'company', 'DateTime'>;
    readonly updated_at: FieldRef<'company', 'DateTime'>;
    readonly user_id: FieldRef<'company', 'String'>;
    readonly tenant_id: FieldRef<'company', 'String'>;
  }

  // Custom InputTypes

  /**
   * company findUnique
   */
  export type companyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findUniqueOrThrow
   */
  export type companyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company findFirst
   */
  export type companyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findFirstOrThrow
   */
  export type companyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which company to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company findMany
   */
  export type companyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter, which companies to fetch.
     */
    where?: companyWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of companies to fetch.
     */
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing companies.
     */
    cursor?: companyWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` companies from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` companies.
     */
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * company create
   */
  export type companyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to create a company.
     */
    data: XOR<companyCreateInput, companyUncheckedCreateInput>;
  };

  /**
   * company createMany
   */
  export type companyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many companies.
     */
    data: companyCreateManyInput | companyCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * company update
   */
  export type companyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The data needed to update a company.
     */
    data: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
    /**
     * Choose, which company to update.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company updateMany
   */
  export type companyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update companies.
     */
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyInput>;
    /**
     * Filter which companies to update
     */
    where?: companyWhereInput;
  };

  /**
   * company upsert
   */
  export type companyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * The filter to search for the company to update in case it exists.
     */
    where: companyWhereUniqueInput;
    /**
     * In case the company found by the `where` argument doesn't exist, create a new company with this data.
     */
    create: XOR<companyCreateInput, companyUncheckedCreateInput>;
    /**
     * In case the company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<companyUpdateInput, companyUncheckedUpdateInput>;
  };

  /**
   * company delete
   */
  export type companyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    /**
     * Filter which company to delete.
     */
    where: companyWhereUniqueInput;
  };

  /**
   * company deleteMany
   */
  export type companyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which companies to delete
     */
    where?: companyWhereInput;
  };

  /**
   * company.applicant
   */
  export type company$applicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    where?: applicantWhereInput;
    orderBy?: applicantOrderByWithRelationInput | applicantOrderByWithRelationInput[];
    cursor?: applicantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * company.customer
   */
  export type company$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    where?: customerWhereInput;
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    cursor?: customerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * company.employee
   */
  export type company$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    cursor?: employeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * company.hr_manager
   */
  export type company$hr_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    where?: hr_managerWhereInput;
    orderBy?: hr_managerOrderByWithRelationInput | hr_managerOrderByWithRelationInput[];
    cursor?: hr_managerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Hr_managerScalarFieldEnum | Hr_managerScalarFieldEnum[];
  };

  /**
   * company without action
   */
  export type companyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
  };

  /**
   * Model customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  export type CustomerMinAggregateOutputType = {
    id: string | null;
    company_name: string | null;
    contact_number: string | null;
    address: string | null;
    user_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CustomerMaxAggregateOutputType = {
    id: string | null;
    company_name: string | null;
    contact_number: string | null;
    address: string | null;
    user_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type CustomerCountAggregateOutputType = {
    id: number;
    company_name: number;
    contact_number: number;
    address: number;
    user_id: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type CustomerMinAggregateInputType = {
    id?: true;
    company_name?: true;
    contact_number?: true;
    address?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CustomerMaxAggregateInputType = {
    id?: true;
    company_name?: true;
    contact_number?: true;
    address?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type CustomerCountAggregateInputType = {
    id?: true;
    company_name?: true;
    contact_number?: true;
    address?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customer to aggregate.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned customers
     **/
    _count?: true | CustomerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CustomerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CustomerMaxAggregateInputType;
  };

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>;
  };

  export type customerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customerWhereInput;
    orderBy?: customerOrderByWithAggregationInput | customerOrderByWithAggregationInput[];
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum;
    having?: customerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInputType | true;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
  };

  export type CustomerGroupByOutputType = {
    id: string;
    company_name: string;
    contact_number: string;
    address: string;
    user_id: string;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
  };

  type GetCustomerGroupByPayload<T extends customerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof CustomerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
          : GetScalarType<T[P], CustomerGroupByOutputType[P]>;
      }
    >
  >;

  export type customerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        company_name?: boolean;
        contact_number?: boolean;
        address?: boolean;
        user_id?: boolean;
        company_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['customer']
    >;

  export type customerSelectScalar = {
    id?: boolean;
    company_name?: boolean;
    contact_number?: boolean;
    address?: boolean;
    user_id?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type customerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $customerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'customer';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        company_name: string;
        contact_number: string;
        address: string;
        user_id: string;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['customer']
    >;
    composites: {};
  };

  type customerGetPayload<S extends boolean | null | undefined | customerDefaultArgs> = $Result.GetResult<
    Prisma.$customerPayload,
    S
  >;

  type customerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    customerFindManyArgs,
    'select' | 'include'
  > & {
    select?: CustomerCountAggregateInputType | true;
  };

  export interface customerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customer']; meta: { name: 'customer' } };
    /**
     * Find zero or one Customer that matches the filter.
     * @param {customerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends customerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, customerFindUniqueArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {customerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends customerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends customerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindFirstArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends customerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__customerClient<
      $Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     *
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends customerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Customer.
     * @param {customerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     *
     **/
    create<T extends customerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, customerCreateArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Customers.
     *     @param {customerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends customerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Customer.
     * @param {customerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     *
     **/
    delete<T extends customerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, customerDeleteArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Customer.
     * @param {customerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends customerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpdateArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Customers.
     * @param {customerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends customerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, customerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends customerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Customer.
     * @param {customerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     **/
    upsert<T extends customerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, customerUpsertArgs<ExtArgs>>,
    ): Prisma__customerClient<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
     **/
    count<T extends customerCountArgs>(
      args?: Subset<T, customerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(
      args: Subset<T, CustomerAggregateArgs>,
    ): Prisma.PrismaPromise<GetCustomerAggregateType<T>>;

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customerGroupByArgs} args - Group by arguments.
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
      T extends customerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customerGroupByArgs['orderBy'] }
        : { orderBy?: customerGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, customerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the customer model
     */
    readonly fields: customerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
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
   * Fields of the customer model
   */
  interface customerFieldRefs {
    readonly id: FieldRef<'customer', 'String'>;
    readonly company_name: FieldRef<'customer', 'String'>;
    readonly contact_number: FieldRef<'customer', 'String'>;
    readonly address: FieldRef<'customer', 'String'>;
    readonly user_id: FieldRef<'customer', 'String'>;
    readonly company_id: FieldRef<'customer', 'String'>;
    readonly created_at: FieldRef<'customer', 'DateTime'>;
    readonly updated_at: FieldRef<'customer', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * customer findUnique
   */
  export type customerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer findUniqueOrThrow
   */
  export type customerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer findFirst
   */
  export type customerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer findFirstOrThrow
   */
  export type customerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customer to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer findMany
   */
  export type customerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter, which customers to fetch.
     */
    where?: customerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of customers to fetch.
     */
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing customers.
     */
    cursor?: customerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` customers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` customers.
     */
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * customer create
   */
  export type customerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The data needed to create a customer.
     */
    data: XOR<customerCreateInput, customerUncheckedCreateInput>;
  };

  /**
   * customer createMany
   */
  export type customerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customerCreateManyInput | customerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * customer update
   */
  export type customerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The data needed to update a customer.
     */
    data: XOR<customerUpdateInput, customerUncheckedUpdateInput>;
    /**
     * Choose, which customer to update.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer updateMany
   */
  export type customerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyInput>;
    /**
     * Filter which customers to update
     */
    where?: customerWhereInput;
  };

  /**
   * customer upsert
   */
  export type customerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * The filter to search for the customer to update in case it exists.
     */
    where: customerWhereUniqueInput;
    /**
     * In case the customer found by the `where` argument doesn't exist, create a new customer with this data.
     */
    create: XOR<customerCreateInput, customerUncheckedCreateInput>;
    /**
     * In case the customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customerUpdateInput, customerUncheckedUpdateInput>;
  };

  /**
   * customer delete
   */
  export type customerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    /**
     * Filter which customer to delete.
     */
    where: customerWhereUniqueInput;
  };

  /**
   * customer deleteMany
   */
  export type customerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customerWhereInput;
  };

  /**
   * customer without action
   */
  export type customerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
  };

  /**
   * Model employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  export type EmployeeAvgAggregateOutputType = {
    salary: number | null;
  };

  export type EmployeeSumAggregateOutputType = {
    salary: number | null;
  };

  export type EmployeeMinAggregateOutputType = {
    id: string | null;
    position: string | null;
    salary: number | null;
    start_date: Date | null;
    end_date: Date | null;
    user_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeMaxAggregateOutputType = {
    id: string | null;
    position: string | null;
    salary: number | null;
    start_date: Date | null;
    end_date: Date | null;
    user_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type EmployeeCountAggregateOutputType = {
    id: number;
    position: number;
    salary: number;
    start_date: number;
    end_date: number;
    user_id: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type EmployeeAvgAggregateInputType = {
    salary?: true;
  };

  export type EmployeeSumAggregateInputType = {
    salary?: true;
  };

  export type EmployeeMinAggregateInputType = {
    id?: true;
    position?: true;
    salary?: true;
    start_date?: true;
    end_date?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeMaxAggregateInputType = {
    id?: true;
    position?: true;
    salary?: true;
    start_date?: true;
    end_date?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type EmployeeCountAggregateInputType = {
    id?: true;
    position?: true;
    salary?: true;
    start_date?: true;
    end_date?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employee to aggregate.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned employees
     **/
    _count?: true | EmployeeCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: EmployeeAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: EmployeeSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: EmployeeMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: EmployeeMaxAggregateInputType;
  };

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
    [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>;
  };

  export type employeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithAggregationInput | employeeOrderByWithAggregationInput[];
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum;
    having?: employeeScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmployeeCountAggregateInputType | true;
    _avg?: EmployeeAvgAggregateInputType;
    _sum?: EmployeeSumAggregateInputType;
    _min?: EmployeeMinAggregateInputType;
    _max?: EmployeeMaxAggregateInputType;
  };

  export type EmployeeGroupByOutputType = {
    id: string;
    position: string;
    salary: number;
    start_date: Date;
    end_date: Date | null;
    user_id: string;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: EmployeeCountAggregateOutputType | null;
    _avg: EmployeeAvgAggregateOutputType | null;
    _sum: EmployeeSumAggregateOutputType | null;
    _min: EmployeeMinAggregateOutputType | null;
    _max: EmployeeMaxAggregateOutputType | null;
  };

  type GetEmployeeGroupByPayload<T extends employeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> & {
        [P in keyof T & keyof EmployeeGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
          : GetScalarType<T[P], EmployeeGroupByOutputType[P]>;
      }
    >
  >;

  export type employeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        position?: boolean;
        salary?: boolean;
        start_date?: boolean;
        end_date?: boolean;
        user_id?: boolean;
        company_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['employee']
    >;

  export type employeeSelectScalar = {
    id?: boolean;
    position?: boolean;
    salary?: boolean;
    start_date?: boolean;
    end_date?: boolean;
    user_id?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type employeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $employeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'employee';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        position: string;
        salary: number;
        start_date: Date;
        end_date: Date | null;
        user_id: string;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['employee']
    >;
    composites: {};
  };

  type employeeGetPayload<S extends boolean | null | undefined | employeeDefaultArgs> = $Result.GetResult<
    Prisma.$employeePayload,
    S
  >;

  type employeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    employeeFindManyArgs,
    'select' | 'include'
  > & {
    select?: EmployeeCountAggregateInputType | true;
  };

  export interface employeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employee']; meta: { name: 'employee' } };
    /**
     * Find zero or one Employee that matches the filter.
     * @param {employeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends employeeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, employeeFindUniqueArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Employee that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {employeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends employeeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends employeeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends employeeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__employeeClient<
      $Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     *
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends employeeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Employee.
     * @param {employeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     *
     **/
    create<T extends employeeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeCreateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Employees.
     *     @param {employeeCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employee = await prisma.employee.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends employeeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Employee.
     * @param {employeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     *
     **/
    delete<T extends employeeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, employeeDeleteArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Employee.
     * @param {employeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends employeeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Employees.
     * @param {employeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends employeeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, employeeDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends employeeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Employee.
     * @param {employeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     **/
    upsert<T extends employeeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, employeeUpsertArgs<ExtArgs>>,
    ): Prisma__employeeClient<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
     **/
    count<T extends employeeCountArgs>(
      args?: Subset<T, employeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(
      args: Subset<T, EmployeeAggregateArgs>,
    ): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>;

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeeGroupByArgs} args - Group by arguments.
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
      T extends employeeGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeeGroupByArgs['orderBy'] }
        : { orderBy?: employeeGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, employeeGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the employee model
     */
    readonly fields: employeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeeClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
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
   * Fields of the employee model
   */
  interface employeeFieldRefs {
    readonly id: FieldRef<'employee', 'String'>;
    readonly position: FieldRef<'employee', 'String'>;
    readonly salary: FieldRef<'employee', 'Int'>;
    readonly start_date: FieldRef<'employee', 'DateTime'>;
    readonly end_date: FieldRef<'employee', 'DateTime'>;
    readonly user_id: FieldRef<'employee', 'String'>;
    readonly company_id: FieldRef<'employee', 'String'>;
    readonly created_at: FieldRef<'employee', 'DateTime'>;
    readonly updated_at: FieldRef<'employee', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * employee findUnique
   */
  export type employeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findUniqueOrThrow
   */
  export type employeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee findFirst
   */
  export type employeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findFirstOrThrow
   */
  export type employeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employee to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee findMany
   */
  export type employeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter, which employees to fetch.
     */
    where?: employeeWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of employees to fetch.
     */
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing employees.
     */
    cursor?: employeeWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` employees from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` employees.
     */
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * employee create
   */
  export type employeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to create a employee.
     */
    data: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
  };

  /**
   * employee createMany
   */
  export type employeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeeCreateManyInput | employeeCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * employee update
   */
  export type employeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The data needed to update a employee.
     */
    data: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
    /**
     * Choose, which employee to update.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee updateMany
   */
  export type employeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyInput>;
    /**
     * Filter which employees to update
     */
    where?: employeeWhereInput;
  };

  /**
   * employee upsert
   */
  export type employeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * The filter to search for the employee to update in case it exists.
     */
    where: employeeWhereUniqueInput;
    /**
     * In case the employee found by the `where` argument doesn't exist, create a new employee with this data.
     */
    create: XOR<employeeCreateInput, employeeUncheckedCreateInput>;
    /**
     * In case the employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeeUpdateInput, employeeUncheckedUpdateInput>;
  };

  /**
   * employee delete
   */
  export type employeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    /**
     * Filter which employee to delete.
     */
    where: employeeWhereUniqueInput;
  };

  /**
   * employee deleteMany
   */
  export type employeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeeWhereInput;
  };

  /**
   * employee without action
   */
  export type employeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
  };

  /**
   * Model hr_manager
   */

  export type AggregateHr_manager = {
    _count: Hr_managerCountAggregateOutputType | null;
    _avg: Hr_managerAvgAggregateOutputType | null;
    _sum: Hr_managerSumAggregateOutputType | null;
    _min: Hr_managerMinAggregateOutputType | null;
    _max: Hr_managerMaxAggregateOutputType | null;
  };

  export type Hr_managerAvgAggregateOutputType = {
    years_experience: number | null;
  };

  export type Hr_managerSumAggregateOutputType = {
    years_experience: number | null;
  };

  export type Hr_managerMinAggregateOutputType = {
    id: string | null;
    department: string | null;
    years_experience: number | null;
    user_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Hr_managerMaxAggregateOutputType = {
    id: string | null;
    department: string | null;
    years_experience: number | null;
    user_id: string | null;
    company_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Hr_managerCountAggregateOutputType = {
    id: number;
    department: number;
    years_experience: number;
    user_id: number;
    company_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Hr_managerAvgAggregateInputType = {
    years_experience?: true;
  };

  export type Hr_managerSumAggregateInputType = {
    years_experience?: true;
  };

  export type Hr_managerMinAggregateInputType = {
    id?: true;
    department?: true;
    years_experience?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Hr_managerMaxAggregateInputType = {
    id?: true;
    department?: true;
    years_experience?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Hr_managerCountAggregateInputType = {
    id?: true;
    department?: true;
    years_experience?: true;
    user_id?: true;
    company_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Hr_managerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hr_manager to aggregate.
     */
    where?: hr_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hr_managers to fetch.
     */
    orderBy?: hr_managerOrderByWithRelationInput | hr_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: hr_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hr_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hr_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned hr_managers
     **/
    _count?: true | Hr_managerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: Hr_managerAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: Hr_managerSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Hr_managerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Hr_managerMaxAggregateInputType;
  };

  export type GetHr_managerAggregateType<T extends Hr_managerAggregateArgs> = {
    [P in keyof T & keyof AggregateHr_manager]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHr_manager[P]>
      : GetScalarType<T[P], AggregateHr_manager[P]>;
  };

  export type hr_managerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: hr_managerWhereInput;
    orderBy?: hr_managerOrderByWithAggregationInput | hr_managerOrderByWithAggregationInput[];
    by: Hr_managerScalarFieldEnum[] | Hr_managerScalarFieldEnum;
    having?: hr_managerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Hr_managerCountAggregateInputType | true;
    _avg?: Hr_managerAvgAggregateInputType;
    _sum?: Hr_managerSumAggregateInputType;
    _min?: Hr_managerMinAggregateInputType;
    _max?: Hr_managerMaxAggregateInputType;
  };

  export type Hr_managerGroupByOutputType = {
    id: string;
    department: string;
    years_experience: number;
    user_id: string;
    company_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Hr_managerCountAggregateOutputType | null;
    _avg: Hr_managerAvgAggregateOutputType | null;
    _sum: Hr_managerSumAggregateOutputType | null;
    _min: Hr_managerMinAggregateOutputType | null;
    _max: Hr_managerMaxAggregateOutputType | null;
  };

  type GetHr_managerGroupByPayload<T extends hr_managerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Hr_managerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Hr_managerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Hr_managerGroupByOutputType[P]>
          : GetScalarType<T[P], Hr_managerGroupByOutputType[P]>;
      }
    >
  >;

  export type hr_managerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        department?: boolean;
        years_experience?: boolean;
        user_id?: boolean;
        company_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        company?: boolean | companyDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['hr_manager']
    >;

  export type hr_managerSelectScalar = {
    id?: boolean;
    department?: boolean;
    years_experience?: boolean;
    user_id?: boolean;
    company_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type hr_managerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | companyDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $hr_managerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'hr_manager';
    objects: {
      company: Prisma.$companyPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        department: string;
        years_experience: number;
        user_id: string;
        company_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['hr_manager']
    >;
    composites: {};
  };

  type hr_managerGetPayload<S extends boolean | null | undefined | hr_managerDefaultArgs> = $Result.GetResult<
    Prisma.$hr_managerPayload,
    S
  >;

  type hr_managerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    hr_managerFindManyArgs,
    'select' | 'include'
  > & {
    select?: Hr_managerCountAggregateInputType | true;
  };

  export interface hr_managerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hr_manager']; meta: { name: 'hr_manager' } };
    /**
     * Find zero or one Hr_manager that matches the filter.
     * @param {hr_managerFindUniqueArgs} args - Arguments to find a Hr_manager
     * @example
     * // Get one Hr_manager
     * const hr_manager = await prisma.hr_manager.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends hr_managerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerFindUniqueArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<
      $Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Hr_manager that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {hr_managerFindUniqueOrThrowArgs} args - Arguments to find a Hr_manager
     * @example
     * // Get one Hr_manager
     * const hr_manager = await prisma.hr_manager.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends hr_managerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<
      $Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Hr_manager that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerFindFirstArgs} args - Arguments to find a Hr_manager
     * @example
     * // Get one Hr_manager
     * const hr_manager = await prisma.hr_manager.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends hr_managerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerFindFirstArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<
      $Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Hr_manager that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerFindFirstOrThrowArgs} args - Arguments to find a Hr_manager
     * @example
     * // Get one Hr_manager
     * const hr_manager = await prisma.hr_manager.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends hr_managerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<
      $Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Hr_managers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Hr_managers
     * const hr_managers = await prisma.hr_manager.findMany()
     *
     * // Get first 10 Hr_managers
     * const hr_managers = await prisma.hr_manager.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const hr_managerWithIdOnly = await prisma.hr_manager.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends hr_managerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Hr_manager.
     * @param {hr_managerCreateArgs} args - Arguments to create a Hr_manager.
     * @example
     * // Create one Hr_manager
     * const Hr_manager = await prisma.hr_manager.create({
     *   data: {
     *     // ... data to create a Hr_manager
     *   }
     * })
     *
     **/
    create<T extends hr_managerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerCreateArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Hr_managers.
     *     @param {hr_managerCreateManyArgs} args - Arguments to create many Hr_managers.
     *     @example
     *     // Create many Hr_managers
     *     const hr_manager = await prisma.hr_manager.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends hr_managerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Hr_manager.
     * @param {hr_managerDeleteArgs} args - Arguments to delete one Hr_manager.
     * @example
     * // Delete one Hr_manager
     * const Hr_manager = await prisma.hr_manager.delete({
     *   where: {
     *     // ... filter to delete one Hr_manager
     *   }
     * })
     *
     **/
    delete<T extends hr_managerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerDeleteArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Hr_manager.
     * @param {hr_managerUpdateArgs} args - Arguments to update one Hr_manager.
     * @example
     * // Update one Hr_manager
     * const hr_manager = await prisma.hr_manager.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends hr_managerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerUpdateArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Hr_managers.
     * @param {hr_managerDeleteManyArgs} args - Arguments to filter Hr_managers to delete.
     * @example
     * // Delete a few Hr_managers
     * const { count } = await prisma.hr_manager.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends hr_managerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, hr_managerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Hr_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Hr_managers
     * const hr_manager = await prisma.hr_manager.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends hr_managerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Hr_manager.
     * @param {hr_managerUpsertArgs} args - Arguments to update or create a Hr_manager.
     * @example
     * // Update or create a Hr_manager
     * const hr_manager = await prisma.hr_manager.upsert({
     *   create: {
     *     // ... data to create a Hr_manager
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hr_manager we want to update
     *   }
     * })
     **/
    upsert<T extends hr_managerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, hr_managerUpsertArgs<ExtArgs>>,
    ): Prisma__hr_managerClient<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Hr_managers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerCountArgs} args - Arguments to filter Hr_managers to count.
     * @example
     * // Count the number of Hr_managers
     * const count = await prisma.hr_manager.count({
     *   where: {
     *     // ... the filter for the Hr_managers we want to count
     *   }
     * })
     **/
    count<T extends hr_managerCountArgs>(
      args?: Subset<T, hr_managerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Hr_managerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Hr_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Hr_managerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Hr_managerAggregateArgs>(
      args: Subset<T, Hr_managerAggregateArgs>,
    ): Prisma.PrismaPromise<GetHr_managerAggregateType<T>>;

    /**
     * Group by Hr_manager.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {hr_managerGroupByArgs} args - Group by arguments.
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
      T extends hr_managerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: hr_managerGroupByArgs['orderBy'] }
        : { orderBy?: hr_managerGroupByArgs['orderBy'] },
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
      args: SubsetIntersection<T, hr_managerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetHr_managerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the hr_manager model
     */
    readonly fields: hr_managerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hr_manager.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__hr_managerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    company<T extends companyDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, companyDefaultArgs<ExtArgs>>,
    ): Prisma__companyClient<
      $Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
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
   * Fields of the hr_manager model
   */
  interface hr_managerFieldRefs {
    readonly id: FieldRef<'hr_manager', 'String'>;
    readonly department: FieldRef<'hr_manager', 'String'>;
    readonly years_experience: FieldRef<'hr_manager', 'Int'>;
    readonly user_id: FieldRef<'hr_manager', 'String'>;
    readonly company_id: FieldRef<'hr_manager', 'String'>;
    readonly created_at: FieldRef<'hr_manager', 'DateTime'>;
    readonly updated_at: FieldRef<'hr_manager', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * hr_manager findUnique
   */
  export type hr_managerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter, which hr_manager to fetch.
     */
    where: hr_managerWhereUniqueInput;
  };

  /**
   * hr_manager findUniqueOrThrow
   */
  export type hr_managerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter, which hr_manager to fetch.
     */
    where: hr_managerWhereUniqueInput;
  };

  /**
   * hr_manager findFirst
   */
  export type hr_managerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter, which hr_manager to fetch.
     */
    where?: hr_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hr_managers to fetch.
     */
    orderBy?: hr_managerOrderByWithRelationInput | hr_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for hr_managers.
     */
    cursor?: hr_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hr_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hr_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of hr_managers.
     */
    distinct?: Hr_managerScalarFieldEnum | Hr_managerScalarFieldEnum[];
  };

  /**
   * hr_manager findFirstOrThrow
   */
  export type hr_managerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter, which hr_manager to fetch.
     */
    where?: hr_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hr_managers to fetch.
     */
    orderBy?: hr_managerOrderByWithRelationInput | hr_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for hr_managers.
     */
    cursor?: hr_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hr_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hr_managers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of hr_managers.
     */
    distinct?: Hr_managerScalarFieldEnum | Hr_managerScalarFieldEnum[];
  };

  /**
   * hr_manager findMany
   */
  export type hr_managerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter, which hr_managers to fetch.
     */
    where?: hr_managerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of hr_managers to fetch.
     */
    orderBy?: hr_managerOrderByWithRelationInput | hr_managerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing hr_managers.
     */
    cursor?: hr_managerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` hr_managers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` hr_managers.
     */
    skip?: number;
    distinct?: Hr_managerScalarFieldEnum | Hr_managerScalarFieldEnum[];
  };

  /**
   * hr_manager create
   */
  export type hr_managerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * The data needed to create a hr_manager.
     */
    data: XOR<hr_managerCreateInput, hr_managerUncheckedCreateInput>;
  };

  /**
   * hr_manager createMany
   */
  export type hr_managerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many hr_managers.
     */
    data: hr_managerCreateManyInput | hr_managerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * hr_manager update
   */
  export type hr_managerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * The data needed to update a hr_manager.
     */
    data: XOR<hr_managerUpdateInput, hr_managerUncheckedUpdateInput>;
    /**
     * Choose, which hr_manager to update.
     */
    where: hr_managerWhereUniqueInput;
  };

  /**
   * hr_manager updateMany
   */
  export type hr_managerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update hr_managers.
     */
    data: XOR<hr_managerUpdateManyMutationInput, hr_managerUncheckedUpdateManyInput>;
    /**
     * Filter which hr_managers to update
     */
    where?: hr_managerWhereInput;
  };

  /**
   * hr_manager upsert
   */
  export type hr_managerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * The filter to search for the hr_manager to update in case it exists.
     */
    where: hr_managerWhereUniqueInput;
    /**
     * In case the hr_manager found by the `where` argument doesn't exist, create a new hr_manager with this data.
     */
    create: XOR<hr_managerCreateInput, hr_managerUncheckedCreateInput>;
    /**
     * In case the hr_manager was found with the provided `where` argument, update it with this data.
     */
    update: XOR<hr_managerUpdateInput, hr_managerUncheckedUpdateInput>;
  };

  /**
   * hr_manager delete
   */
  export type hr_managerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    /**
     * Filter which hr_manager to delete.
     */
    where: hr_managerWhereUniqueInput;
  };

  /**
   * hr_manager deleteMany
   */
  export type hr_managerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hr_managers to delete
     */
    where?: hr_managerWhereInput;
  };

  /**
   * hr_manager without action
   */
  export type hr_managerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
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
      applicant?: boolean | user$applicantArgs<ExtArgs>;
      company?: boolean | user$companyArgs<ExtArgs>;
      customer?: boolean | user$customerArgs<ExtArgs>;
      employee?: boolean | user$employeeArgs<ExtArgs>;
      hr_manager?: boolean | user$hr_managerArgs<ExtArgs>;
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
    applicant?: boolean | user$applicantArgs<ExtArgs>;
    company?: boolean | user$companyArgs<ExtArgs>;
    customer?: boolean | user$customerArgs<ExtArgs>;
    employee?: boolean | user$employeeArgs<ExtArgs>;
    hr_manager?: boolean | user$hr_managerArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      applicant: Prisma.$applicantPayload<ExtArgs>[];
      company: Prisma.$companyPayload<ExtArgs>[];
      customer: Prisma.$customerPayload<ExtArgs>[];
      employee: Prisma.$employeePayload<ExtArgs>[];
      hr_manager: Prisma.$hr_managerPayload<ExtArgs>[];
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
    'select' | 'include'
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

    applicant<T extends user$applicantArgs<ExtArgs> = {}>(
      args?: Subset<T, user$applicantArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$applicantPayload<ExtArgs>, T, 'findMany'> | Null>;

    company<T extends user$companyArgs<ExtArgs> = {}>(
      args?: Subset<T, user$companyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$companyPayload<ExtArgs>, T, 'findMany'> | Null>;

    customer<T extends user$customerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$customerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customerPayload<ExtArgs>, T, 'findMany'> | Null>;

    employee<T extends user$employeeArgs<ExtArgs> = {}>(
      args?: Subset<T, user$employeeArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeePayload<ExtArgs>, T, 'findMany'> | Null>;

    hr_manager<T extends user$hr_managerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$hr_managerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$hr_managerPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * user.applicant
   */
  export type user$applicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the applicant
     */
    select?: applicantSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: applicantInclude<ExtArgs> | null;
    where?: applicantWhereInput;
    orderBy?: applicantOrderByWithRelationInput | applicantOrderByWithRelationInput[];
    cursor?: applicantWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ApplicantScalarFieldEnum | ApplicantScalarFieldEnum[];
  };

  /**
   * user.company
   */
  export type user$companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the company
     */
    select?: companySelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: companyInclude<ExtArgs> | null;
    where?: companyWhereInput;
    orderBy?: companyOrderByWithRelationInput | companyOrderByWithRelationInput[];
    cursor?: companyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[];
  };

  /**
   * user.customer
   */
  export type user$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customer
     */
    select?: customerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: customerInclude<ExtArgs> | null;
    where?: customerWhereInput;
    orderBy?: customerOrderByWithRelationInput | customerOrderByWithRelationInput[];
    cursor?: customerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[];
  };

  /**
   * user.employee
   */
  export type user$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employee
     */
    select?: employeeSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: employeeInclude<ExtArgs> | null;
    where?: employeeWhereInput;
    orderBy?: employeeOrderByWithRelationInput | employeeOrderByWithRelationInput[];
    cursor?: employeeWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[];
  };

  /**
   * user.hr_manager
   */
  export type user$hr_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hr_manager
     */
    select?: hr_managerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: hr_managerInclude<ExtArgs> | null;
    where?: hr_managerWhereInput;
    orderBy?: hr_managerOrderByWithRelationInput | hr_managerOrderByWithRelationInput[];
    cursor?: hr_managerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Hr_managerScalarFieldEnum | Hr_managerScalarFieldEnum[];
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

  export const ApplicantScalarFieldEnum: {
    id: 'id';
    resume: 'resume';
    application_date: 'application_date';
    status: 'status';
    user_id: 'user_id';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type ApplicantScalarFieldEnum = (typeof ApplicantScalarFieldEnum)[keyof typeof ApplicantScalarFieldEnum];

  export const CompanyScalarFieldEnum: {
    id: 'id';
    description: 'description';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum];

  export const CustomerScalarFieldEnum: {
    id: 'id';
    company_name: 'company_name';
    contact_number: 'contact_number';
    address: 'address';
    user_id: 'user_id';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];

  export const EmployeeScalarFieldEnum: {
    id: 'id';
    position: 'position';
    salary: 'salary';
    start_date: 'start_date';
    end_date: 'end_date';
    user_id: 'user_id';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum];

  export const Hr_managerScalarFieldEnum: {
    id: 'id';
    department: 'department';
    years_experience: 'years_experience';
    user_id: 'user_id';
    company_id: 'company_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Hr_managerScalarFieldEnum = (typeof Hr_managerScalarFieldEnum)[keyof typeof Hr_managerScalarFieldEnum];

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

  export type applicantWhereInput = {
    AND?: applicantWhereInput | applicantWhereInput[];
    OR?: applicantWhereInput[];
    NOT?: applicantWhereInput | applicantWhereInput[];
    id?: UuidFilter<'applicant'> | string;
    resume?: StringFilter<'applicant'> | string;
    application_date?: DateTimeFilter<'applicant'> | Date | string;
    status?: StringFilter<'applicant'> | string;
    user_id?: UuidFilter<'applicant'> | string;
    company_id?: UuidFilter<'applicant'> | string;
    created_at?: DateTimeFilter<'applicant'> | Date | string;
    updated_at?: DateTimeFilter<'applicant'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type applicantOrderByWithRelationInput = {
    id?: SortOrder;
    resume?: SortOrder;
    application_date?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type applicantWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: applicantWhereInput | applicantWhereInput[];
      OR?: applicantWhereInput[];
      NOT?: applicantWhereInput | applicantWhereInput[];
      resume?: StringFilter<'applicant'> | string;
      application_date?: DateTimeFilter<'applicant'> | Date | string;
      status?: StringFilter<'applicant'> | string;
      user_id?: UuidFilter<'applicant'> | string;
      company_id?: UuidFilter<'applicant'> | string;
      created_at?: DateTimeFilter<'applicant'> | Date | string;
      updated_at?: DateTimeFilter<'applicant'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type applicantOrderByWithAggregationInput = {
    id?: SortOrder;
    resume?: SortOrder;
    application_date?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: applicantCountOrderByAggregateInput;
    _max?: applicantMaxOrderByAggregateInput;
    _min?: applicantMinOrderByAggregateInput;
  };

  export type applicantScalarWhereWithAggregatesInput = {
    AND?: applicantScalarWhereWithAggregatesInput | applicantScalarWhereWithAggregatesInput[];
    OR?: applicantScalarWhereWithAggregatesInput[];
    NOT?: applicantScalarWhereWithAggregatesInput | applicantScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'applicant'> | string;
    resume?: StringWithAggregatesFilter<'applicant'> | string;
    application_date?: DateTimeWithAggregatesFilter<'applicant'> | Date | string;
    status?: StringWithAggregatesFilter<'applicant'> | string;
    user_id?: UuidWithAggregatesFilter<'applicant'> | string;
    company_id?: UuidWithAggregatesFilter<'applicant'> | string;
    created_at?: DateTimeWithAggregatesFilter<'applicant'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'applicant'> | Date | string;
  };

  export type companyWhereInput = {
    AND?: companyWhereInput | companyWhereInput[];
    OR?: companyWhereInput[];
    NOT?: companyWhereInput | companyWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
    applicant?: ApplicantListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
    customer?: CustomerListRelationFilter;
    employee?: EmployeeListRelationFilter;
    hr_manager?: Hr_managerListRelationFilter;
  };

  export type companyOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    applicant?: applicantOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
    customer?: customerOrderByRelationAggregateInput;
    employee?: employeeOrderByRelationAggregateInput;
    hr_manager?: hr_managerOrderByRelationAggregateInput;
  };

  export type companyWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: companyWhereInput | companyWhereInput[];
      OR?: companyWhereInput[];
      NOT?: companyWhereInput | companyWhereInput[];
      description?: StringNullableFilter<'company'> | string | null;
      name?: StringFilter<'company'> | string;
      created_at?: DateTimeFilter<'company'> | Date | string;
      updated_at?: DateTimeFilter<'company'> | Date | string;
      user_id?: UuidFilter<'company'> | string;
      tenant_id?: StringFilter<'company'> | string;
      applicant?: ApplicantListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
      customer?: CustomerListRelationFilter;
      employee?: EmployeeListRelationFilter;
      hr_manager?: Hr_managerListRelationFilter;
    },
    'id'
  >;

  export type companyOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: companyCountOrderByAggregateInput;
    _max?: companyMaxOrderByAggregateInput;
    _min?: companyMinOrderByAggregateInput;
  };

  export type companyScalarWhereWithAggregatesInput = {
    AND?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    OR?: companyScalarWhereWithAggregatesInput[];
    NOT?: companyScalarWhereWithAggregatesInput | companyScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'company'> | string;
    description?: StringNullableWithAggregatesFilter<'company'> | string | null;
    name?: StringWithAggregatesFilter<'company'> | string;
    created_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'company'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'company'> | string;
    tenant_id?: StringWithAggregatesFilter<'company'> | string;
  };

  export type customerWhereInput = {
    AND?: customerWhereInput | customerWhereInput[];
    OR?: customerWhereInput[];
    NOT?: customerWhereInput | customerWhereInput[];
    id?: UuidFilter<'customer'> | string;
    company_name?: StringFilter<'customer'> | string;
    contact_number?: StringFilter<'customer'> | string;
    address?: StringFilter<'customer'> | string;
    user_id?: UuidFilter<'customer'> | string;
    company_id?: UuidFilter<'customer'> | string;
    created_at?: DateTimeFilter<'customer'> | Date | string;
    updated_at?: DateTimeFilter<'customer'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type customerOrderByWithRelationInput = {
    id?: SortOrder;
    company_name?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type customerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: customerWhereInput | customerWhereInput[];
      OR?: customerWhereInput[];
      NOT?: customerWhereInput | customerWhereInput[];
      company_name?: StringFilter<'customer'> | string;
      contact_number?: StringFilter<'customer'> | string;
      address?: StringFilter<'customer'> | string;
      user_id?: UuidFilter<'customer'> | string;
      company_id?: UuidFilter<'customer'> | string;
      created_at?: DateTimeFilter<'customer'> | Date | string;
      updated_at?: DateTimeFilter<'customer'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type customerOrderByWithAggregationInput = {
    id?: SortOrder;
    company_name?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: customerCountOrderByAggregateInput;
    _max?: customerMaxOrderByAggregateInput;
    _min?: customerMinOrderByAggregateInput;
  };

  export type customerScalarWhereWithAggregatesInput = {
    AND?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[];
    OR?: customerScalarWhereWithAggregatesInput[];
    NOT?: customerScalarWhereWithAggregatesInput | customerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'customer'> | string;
    company_name?: StringWithAggregatesFilter<'customer'> | string;
    contact_number?: StringWithAggregatesFilter<'customer'> | string;
    address?: StringWithAggregatesFilter<'customer'> | string;
    user_id?: UuidWithAggregatesFilter<'customer'> | string;
    company_id?: UuidWithAggregatesFilter<'customer'> | string;
    created_at?: DateTimeWithAggregatesFilter<'customer'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'customer'> | Date | string;
  };

  export type employeeWhereInput = {
    AND?: employeeWhereInput | employeeWhereInput[];
    OR?: employeeWhereInput[];
    NOT?: employeeWhereInput | employeeWhereInput[];
    id?: UuidFilter<'employee'> | string;
    position?: StringFilter<'employee'> | string;
    salary?: IntFilter<'employee'> | number;
    start_date?: DateTimeFilter<'employee'> | Date | string;
    end_date?: DateTimeNullableFilter<'employee'> | Date | string | null;
    user_id?: UuidFilter<'employee'> | string;
    company_id?: UuidFilter<'employee'> | string;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type employeeOrderByWithRelationInput = {
    id?: SortOrder;
    position?: SortOrder;
    salary?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type employeeWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: employeeWhereInput | employeeWhereInput[];
      OR?: employeeWhereInput[];
      NOT?: employeeWhereInput | employeeWhereInput[];
      position?: StringFilter<'employee'> | string;
      salary?: IntFilter<'employee'> | number;
      start_date?: DateTimeFilter<'employee'> | Date | string;
      end_date?: DateTimeNullableFilter<'employee'> | Date | string | null;
      user_id?: UuidFilter<'employee'> | string;
      company_id?: UuidFilter<'employee'> | string;
      created_at?: DateTimeFilter<'employee'> | Date | string;
      updated_at?: DateTimeFilter<'employee'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type employeeOrderByWithAggregationInput = {
    id?: SortOrder;
    position?: SortOrder;
    salary?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: employeeCountOrderByAggregateInput;
    _avg?: employeeAvgOrderByAggregateInput;
    _max?: employeeMaxOrderByAggregateInput;
    _min?: employeeMinOrderByAggregateInput;
    _sum?: employeeSumOrderByAggregateInput;
  };

  export type employeeScalarWhereWithAggregatesInput = {
    AND?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    OR?: employeeScalarWhereWithAggregatesInput[];
    NOT?: employeeScalarWhereWithAggregatesInput | employeeScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'employee'> | string;
    position?: StringWithAggregatesFilter<'employee'> | string;
    salary?: IntWithAggregatesFilter<'employee'> | number;
    start_date?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    end_date?: DateTimeNullableWithAggregatesFilter<'employee'> | Date | string | null;
    user_id?: UuidWithAggregatesFilter<'employee'> | string;
    company_id?: UuidWithAggregatesFilter<'employee'> | string;
    created_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'employee'> | Date | string;
  };

  export type hr_managerWhereInput = {
    AND?: hr_managerWhereInput | hr_managerWhereInput[];
    OR?: hr_managerWhereInput[];
    NOT?: hr_managerWhereInput | hr_managerWhereInput[];
    id?: UuidFilter<'hr_manager'> | string;
    department?: StringFilter<'hr_manager'> | string;
    years_experience?: IntFilter<'hr_manager'> | number;
    user_id?: UuidFilter<'hr_manager'> | string;
    company_id?: UuidFilter<'hr_manager'> | string;
    created_at?: DateTimeFilter<'hr_manager'> | Date | string;
    updated_at?: DateTimeFilter<'hr_manager'> | Date | string;
    company?: XOR<CompanyRelationFilter, companyWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type hr_managerOrderByWithRelationInput = {
    id?: SortOrder;
    department?: SortOrder;
    years_experience?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    company?: companyOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type hr_managerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: hr_managerWhereInput | hr_managerWhereInput[];
      OR?: hr_managerWhereInput[];
      NOT?: hr_managerWhereInput | hr_managerWhereInput[];
      department?: StringFilter<'hr_manager'> | string;
      years_experience?: IntFilter<'hr_manager'> | number;
      user_id?: UuidFilter<'hr_manager'> | string;
      company_id?: UuidFilter<'hr_manager'> | string;
      created_at?: DateTimeFilter<'hr_manager'> | Date | string;
      updated_at?: DateTimeFilter<'hr_manager'> | Date | string;
      company?: XOR<CompanyRelationFilter, companyWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type hr_managerOrderByWithAggregationInput = {
    id?: SortOrder;
    department?: SortOrder;
    years_experience?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: hr_managerCountOrderByAggregateInput;
    _avg?: hr_managerAvgOrderByAggregateInput;
    _max?: hr_managerMaxOrderByAggregateInput;
    _min?: hr_managerMinOrderByAggregateInput;
    _sum?: hr_managerSumOrderByAggregateInput;
  };

  export type hr_managerScalarWhereWithAggregatesInput = {
    AND?: hr_managerScalarWhereWithAggregatesInput | hr_managerScalarWhereWithAggregatesInput[];
    OR?: hr_managerScalarWhereWithAggregatesInput[];
    NOT?: hr_managerScalarWhereWithAggregatesInput | hr_managerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'hr_manager'> | string;
    department?: StringWithAggregatesFilter<'hr_manager'> | string;
    years_experience?: IntWithAggregatesFilter<'hr_manager'> | number;
    user_id?: UuidWithAggregatesFilter<'hr_manager'> | string;
    company_id?: UuidWithAggregatesFilter<'hr_manager'> | string;
    created_at?: DateTimeWithAggregatesFilter<'hr_manager'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'hr_manager'> | Date | string;
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
    applicant?: ApplicantListRelationFilter;
    company?: CompanyListRelationFilter;
    customer?: CustomerListRelationFilter;
    employee?: EmployeeListRelationFilter;
    hr_manager?: Hr_managerListRelationFilter;
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
    applicant?: applicantOrderByRelationAggregateInput;
    company?: companyOrderByRelationAggregateInput;
    customer?: customerOrderByRelationAggregateInput;
    employee?: employeeOrderByRelationAggregateInput;
    hr_manager?: hr_managerOrderByRelationAggregateInput;
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
      applicant?: ApplicantListRelationFilter;
      company?: CompanyListRelationFilter;
      customer?: CustomerListRelationFilter;
      employee?: EmployeeListRelationFilter;
      hr_manager?: Hr_managerListRelationFilter;
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

  export type applicantCreateInput = {
    id?: string;
    resume: string;
    application_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutApplicantInput;
    user: userCreateNestedOneWithoutApplicantInput;
  };

  export type applicantUncheckedCreateInput = {
    id?: string;
    resume: string;
    application_date: Date | string;
    status: string;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutApplicantNestedInput;
    user?: userUpdateOneRequiredWithoutApplicantNestedInput;
  };

  export type applicantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicantCreateManyInput = {
    id?: string;
    resume: string;
    application_date: Date | string;
    status: string;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    applicant?: applicantCreateNestedManyWithoutCompanyInput;
    user: userCreateNestedOneWithoutCompanyInput;
    customer?: customerCreateNestedManyWithoutCompanyInput;
    employee?: employeeCreateNestedManyWithoutCompanyInput;
    hr_manager?: hr_managerCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    applicant?: applicantUncheckedCreateNestedManyWithoutCompanyInput;
    customer?: customerUncheckedCreateNestedManyWithoutCompanyInput;
    employee?: employeeUncheckedCreateNestedManyWithoutCompanyInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    applicant?: applicantUpdateManyWithoutCompanyNestedInput;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    customer?: customerUpdateManyWithoutCompanyNestedInput;
    employee?: employeeUpdateManyWithoutCompanyNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    applicant?: applicantUncheckedUpdateManyWithoutCompanyNestedInput;
    customer?: customerUncheckedUpdateManyWithoutCompanyNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutCompanyNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyCreateManyInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type companyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type companyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type customerCreateInput = {
    id?: string;
    company_name: string;
    contact_number: string;
    address: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutCustomerInput;
    user: userCreateNestedOneWithoutCustomerInput;
  };

  export type customerUncheckedCreateInput = {
    id?: string;
    company_name: string;
    contact_number: string;
    address: string;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutCustomerNestedInput;
    user?: userUpdateOneRequiredWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerCreateManyInput = {
    id?: string;
    company_name: string;
    contact_number: string;
    address: string;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeCreateInput = {
    id?: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutEmployeeInput;
    user: userCreateNestedOneWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateInput = {
    id?: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutEmployeeNestedInput;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeCreateManyInput = {
    id?: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerCreateInput = {
    id?: string;
    department: string;
    years_experience: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutHr_managerInput;
    user: userCreateNestedOneWithoutHr_managerInput;
  };

  export type hr_managerUncheckedCreateInput = {
    id?: string;
    department: string;
    years_experience: number;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hr_managerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    years_experience?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutHr_managerNestedInput;
    user?: userUpdateOneRequiredWithoutHr_managerNestedInput;
  };

  export type hr_managerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    years_experience?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerCreateManyInput = {
    id?: string;
    department: string;
    years_experience: number;
    user_id: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hr_managerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    years_experience?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    years_experience?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
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
    applicant?: applicantCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
    employee?: employeeCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerCreateNestedManyWithoutUserInput;
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
    applicant?: applicantUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutUserInput;
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
    applicant?: applicantUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutUserNestedInput;
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
    applicant?: applicantUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutUserNestedInput;
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

  export type CompanyRelationFilter = {
    is?: companyWhereInput;
    isNot?: companyWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type applicantCountOrderByAggregateInput = {
    id?: SortOrder;
    resume?: SortOrder;
    application_date?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type applicantMaxOrderByAggregateInput = {
    id?: SortOrder;
    resume?: SortOrder;
    application_date?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type applicantMinOrderByAggregateInput = {
    id?: SortOrder;
    resume?: SortOrder;
    application_date?: SortOrder;
    status?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
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

  export type ApplicantListRelationFilter = {
    every?: applicantWhereInput;
    some?: applicantWhereInput;
    none?: applicantWhereInput;
  };

  export type CustomerListRelationFilter = {
    every?: customerWhereInput;
    some?: customerWhereInput;
    none?: customerWhereInput;
  };

  export type EmployeeListRelationFilter = {
    every?: employeeWhereInput;
    some?: employeeWhereInput;
    none?: employeeWhereInput;
  };

  export type Hr_managerListRelationFilter = {
    every?: hr_managerWhereInput;
    some?: hr_managerWhereInput;
    none?: hr_managerWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type applicantOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type customerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type employeeOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type hr_managerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type companyCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type companyMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
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

  export type customerCountOrderByAggregateInput = {
    id?: SortOrder;
    company_name?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerMaxOrderByAggregateInput = {
    id?: SortOrder;
    company_name?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type customerMinOrderByAggregateInput = {
    id?: SortOrder;
    company_name?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
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

  export type employeeCountOrderByAggregateInput = {
    id?: SortOrder;
    position?: SortOrder;
    salary?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeAvgOrderByAggregateInput = {
    salary?: SortOrder;
  };

  export type employeeMaxOrderByAggregateInput = {
    id?: SortOrder;
    position?: SortOrder;
    salary?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeMinOrderByAggregateInput = {
    id?: SortOrder;
    position?: SortOrder;
    salary?: SortOrder;
    start_date?: SortOrder;
    end_date?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type employeeSumOrderByAggregateInput = {
    salary?: SortOrder;
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

  export type hr_managerCountOrderByAggregateInput = {
    id?: SortOrder;
    department?: SortOrder;
    years_experience?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type hr_managerAvgOrderByAggregateInput = {
    years_experience?: SortOrder;
  };

  export type hr_managerMaxOrderByAggregateInput = {
    id?: SortOrder;
    department?: SortOrder;
    years_experience?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type hr_managerMinOrderByAggregateInput = {
    id?: SortOrder;
    department?: SortOrder;
    years_experience?: SortOrder;
    user_id?: SortOrder;
    company_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type hr_managerSumOrderByAggregateInput = {
    years_experience?: SortOrder;
  };

  export type CompanyListRelationFilter = {
    every?: companyWhereInput;
    some?: companyWhereInput;
    none?: companyWhereInput;
  };

  export type companyOrderByRelationAggregateInput = {
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

  export type companyCreateNestedOneWithoutApplicantInput = {
    create?: XOR<companyCreateWithoutApplicantInput, companyUncheckedCreateWithoutApplicantInput>;
    connectOrCreate?: companyCreateOrConnectWithoutApplicantInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutApplicantInput = {
    create?: XOR<userCreateWithoutApplicantInput, userUncheckedCreateWithoutApplicantInput>;
    connectOrCreate?: userCreateOrConnectWithoutApplicantInput;
    connect?: userWhereUniqueInput;
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type companyUpdateOneRequiredWithoutApplicantNestedInput = {
    create?: XOR<companyCreateWithoutApplicantInput, companyUncheckedCreateWithoutApplicantInput>;
    connectOrCreate?: companyCreateOrConnectWithoutApplicantInput;
    upsert?: companyUpsertWithoutApplicantInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutApplicantInput, companyUpdateWithoutApplicantInput>,
      companyUncheckedUpdateWithoutApplicantInput
    >;
  };

  export type userUpdateOneRequiredWithoutApplicantNestedInput = {
    create?: XOR<userCreateWithoutApplicantInput, userUncheckedCreateWithoutApplicantInput>;
    connectOrCreate?: userCreateOrConnectWithoutApplicantInput;
    upsert?: userUpsertWithoutApplicantInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutApplicantInput, userUpdateWithoutApplicantInput>,
      userUncheckedUpdateWithoutApplicantInput
    >;
  };

  export type applicantCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<applicantCreateWithoutCompanyInput, applicantUncheckedCreateWithoutCompanyInput>
      | applicantCreateWithoutCompanyInput[]
      | applicantUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: applicantCreateOrConnectWithoutCompanyInput | applicantCreateOrConnectWithoutCompanyInput[];
    createMany?: applicantCreateManyCompanyInputEnvelope;
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutCompanyInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    connect?: userWhereUniqueInput;
  };

  export type customerCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<customerCreateWithoutCompanyInput, customerUncheckedCreateWithoutCompanyInput>
      | customerCreateWithoutCompanyInput[]
      | customerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: customerCreateOrConnectWithoutCompanyInput | customerCreateOrConnectWithoutCompanyInput[];
    createMany?: customerCreateManyCompanyInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type employeeCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput>
      | employeeCreateWithoutCompanyInput[]
      | employeeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutCompanyInput | employeeCreateOrConnectWithoutCompanyInput[];
    createMany?: employeeCreateManyCompanyInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type hr_managerCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<hr_managerCreateWithoutCompanyInput, hr_managerUncheckedCreateWithoutCompanyInput>
      | hr_managerCreateWithoutCompanyInput[]
      | hr_managerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: hr_managerCreateOrConnectWithoutCompanyInput | hr_managerCreateOrConnectWithoutCompanyInput[];
    createMany?: hr_managerCreateManyCompanyInputEnvelope;
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
  };

  export type applicantUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<applicantCreateWithoutCompanyInput, applicantUncheckedCreateWithoutCompanyInput>
      | applicantCreateWithoutCompanyInput[]
      | applicantUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: applicantCreateOrConnectWithoutCompanyInput | applicantCreateOrConnectWithoutCompanyInput[];
    createMany?: applicantCreateManyCompanyInputEnvelope;
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
  };

  export type customerUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<customerCreateWithoutCompanyInput, customerUncheckedCreateWithoutCompanyInput>
      | customerCreateWithoutCompanyInput[]
      | customerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: customerCreateOrConnectWithoutCompanyInput | customerCreateOrConnectWithoutCompanyInput[];
    createMany?: customerCreateManyCompanyInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type employeeUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput>
      | employeeCreateWithoutCompanyInput[]
      | employeeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutCompanyInput | employeeCreateOrConnectWithoutCompanyInput[];
    createMany?: employeeCreateManyCompanyInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type hr_managerUncheckedCreateNestedManyWithoutCompanyInput = {
    create?:
      | XOR<hr_managerCreateWithoutCompanyInput, hr_managerUncheckedCreateWithoutCompanyInput>
      | hr_managerCreateWithoutCompanyInput[]
      | hr_managerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: hr_managerCreateOrConnectWithoutCompanyInput | hr_managerCreateOrConnectWithoutCompanyInput[];
    createMany?: hr_managerCreateManyCompanyInputEnvelope;
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type applicantUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<applicantCreateWithoutCompanyInput, applicantUncheckedCreateWithoutCompanyInput>
      | applicantCreateWithoutCompanyInput[]
      | applicantUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: applicantCreateOrConnectWithoutCompanyInput | applicantCreateOrConnectWithoutCompanyInput[];
    upsert?: applicantUpsertWithWhereUniqueWithoutCompanyInput | applicantUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: applicantCreateManyCompanyInputEnvelope;
    set?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    disconnect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    delete?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    update?: applicantUpdateWithWhereUniqueWithoutCompanyInput | applicantUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: applicantUpdateManyWithWhereWithoutCompanyInput | applicantUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: applicantScalarWhereInput | applicantScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutCompanyNestedInput = {
    create?: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    connectOrCreate?: userCreateOrConnectWithoutCompanyInput;
    upsert?: userUpsertWithoutCompanyInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCompanyInput, userUpdateWithoutCompanyInput>,
      userUncheckedUpdateWithoutCompanyInput
    >;
  };

  export type customerUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<customerCreateWithoutCompanyInput, customerUncheckedCreateWithoutCompanyInput>
      | customerCreateWithoutCompanyInput[]
      | customerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: customerCreateOrConnectWithoutCompanyInput | customerCreateOrConnectWithoutCompanyInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutCompanyInput | customerUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: customerCreateManyCompanyInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutCompanyInput | customerUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: customerUpdateManyWithWhereWithoutCompanyInput | customerUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type employeeUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput>
      | employeeCreateWithoutCompanyInput[]
      | employeeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutCompanyInput | employeeCreateOrConnectWithoutCompanyInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutCompanyInput | employeeUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: employeeCreateManyCompanyInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutCompanyInput | employeeUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutCompanyInput | employeeUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type hr_managerUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<hr_managerCreateWithoutCompanyInput, hr_managerUncheckedCreateWithoutCompanyInput>
      | hr_managerCreateWithoutCompanyInput[]
      | hr_managerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: hr_managerCreateOrConnectWithoutCompanyInput | hr_managerCreateOrConnectWithoutCompanyInput[];
    upsert?: hr_managerUpsertWithWhereUniqueWithoutCompanyInput | hr_managerUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: hr_managerCreateManyCompanyInputEnvelope;
    set?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    disconnect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    delete?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    update?: hr_managerUpdateWithWhereUniqueWithoutCompanyInput | hr_managerUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: hr_managerUpdateManyWithWhereWithoutCompanyInput | hr_managerUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: hr_managerScalarWhereInput | hr_managerScalarWhereInput[];
  };

  export type applicantUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<applicantCreateWithoutCompanyInput, applicantUncheckedCreateWithoutCompanyInput>
      | applicantCreateWithoutCompanyInput[]
      | applicantUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: applicantCreateOrConnectWithoutCompanyInput | applicantCreateOrConnectWithoutCompanyInput[];
    upsert?: applicantUpsertWithWhereUniqueWithoutCompanyInput | applicantUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: applicantCreateManyCompanyInputEnvelope;
    set?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    disconnect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    delete?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    update?: applicantUpdateWithWhereUniqueWithoutCompanyInput | applicantUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: applicantUpdateManyWithWhereWithoutCompanyInput | applicantUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: applicantScalarWhereInput | applicantScalarWhereInput[];
  };

  export type customerUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<customerCreateWithoutCompanyInput, customerUncheckedCreateWithoutCompanyInput>
      | customerCreateWithoutCompanyInput[]
      | customerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: customerCreateOrConnectWithoutCompanyInput | customerCreateOrConnectWithoutCompanyInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutCompanyInput | customerUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: customerCreateManyCompanyInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutCompanyInput | customerUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: customerUpdateManyWithWhereWithoutCompanyInput | customerUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type employeeUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput>
      | employeeCreateWithoutCompanyInput[]
      | employeeUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutCompanyInput | employeeCreateOrConnectWithoutCompanyInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutCompanyInput | employeeUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: employeeCreateManyCompanyInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutCompanyInput | employeeUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutCompanyInput | employeeUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type hr_managerUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?:
      | XOR<hr_managerCreateWithoutCompanyInput, hr_managerUncheckedCreateWithoutCompanyInput>
      | hr_managerCreateWithoutCompanyInput[]
      | hr_managerUncheckedCreateWithoutCompanyInput[];
    connectOrCreate?: hr_managerCreateOrConnectWithoutCompanyInput | hr_managerCreateOrConnectWithoutCompanyInput[];
    upsert?: hr_managerUpsertWithWhereUniqueWithoutCompanyInput | hr_managerUpsertWithWhereUniqueWithoutCompanyInput[];
    createMany?: hr_managerCreateManyCompanyInputEnvelope;
    set?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    disconnect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    delete?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    update?: hr_managerUpdateWithWhereUniqueWithoutCompanyInput | hr_managerUpdateWithWhereUniqueWithoutCompanyInput[];
    updateMany?: hr_managerUpdateManyWithWhereWithoutCompanyInput | hr_managerUpdateManyWithWhereWithoutCompanyInput[];
    deleteMany?: hr_managerScalarWhereInput | hr_managerScalarWhereInput[];
  };

  export type companyCreateNestedOneWithoutCustomerInput = {
    create?: XOR<companyCreateWithoutCustomerInput, companyUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: companyCreateOrConnectWithoutCustomerInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutCustomerInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput;
    connect?: userWhereUniqueInput;
  };

  export type companyUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<companyCreateWithoutCustomerInput, companyUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: companyCreateOrConnectWithoutCustomerInput;
    upsert?: companyUpsertWithoutCustomerInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutCustomerInput, companyUpdateWithoutCustomerInput>,
      companyUncheckedUpdateWithoutCustomerInput
    >;
  };

  export type userUpdateOneRequiredWithoutCustomerNestedInput = {
    create?: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    connectOrCreate?: userCreateOrConnectWithoutCustomerInput;
    upsert?: userUpsertWithoutCustomerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutCustomerInput, userUpdateWithoutCustomerInput>,
      userUncheckedUpdateWithoutCustomerInput
    >;
  };

  export type companyCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<companyCreateWithoutEmployeeInput, companyUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: companyCreateOrConnectWithoutEmployeeInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
  };

  export type companyUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<companyCreateWithoutEmployeeInput, companyUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: companyCreateOrConnectWithoutEmployeeInput;
    upsert?: companyUpsertWithoutEmployeeInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutEmployeeInput, companyUpdateWithoutEmployeeInput>,
      companyUncheckedUpdateWithoutEmployeeInput
    >;
  };

  export type userUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    connectOrCreate?: userCreateOrConnectWithoutEmployeeInput;
    upsert?: userUpsertWithoutEmployeeInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutEmployeeInput, userUpdateWithoutEmployeeInput>,
      userUncheckedUpdateWithoutEmployeeInput
    >;
  };

  export type companyCreateNestedOneWithoutHr_managerInput = {
    create?: XOR<companyCreateWithoutHr_managerInput, companyUncheckedCreateWithoutHr_managerInput>;
    connectOrCreate?: companyCreateOrConnectWithoutHr_managerInput;
    connect?: companyWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutHr_managerInput = {
    create?: XOR<userCreateWithoutHr_managerInput, userUncheckedCreateWithoutHr_managerInput>;
    connectOrCreate?: userCreateOrConnectWithoutHr_managerInput;
    connect?: userWhereUniqueInput;
  };

  export type companyUpdateOneRequiredWithoutHr_managerNestedInput = {
    create?: XOR<companyCreateWithoutHr_managerInput, companyUncheckedCreateWithoutHr_managerInput>;
    connectOrCreate?: companyCreateOrConnectWithoutHr_managerInput;
    upsert?: companyUpsertWithoutHr_managerInput;
    connect?: companyWhereUniqueInput;
    update?: XOR<
      XOR<companyUpdateToOneWithWhereWithoutHr_managerInput, companyUpdateWithoutHr_managerInput>,
      companyUncheckedUpdateWithoutHr_managerInput
    >;
  };

  export type userUpdateOneRequiredWithoutHr_managerNestedInput = {
    create?: XOR<userCreateWithoutHr_managerInput, userUncheckedCreateWithoutHr_managerInput>;
    connectOrCreate?: userCreateOrConnectWithoutHr_managerInput;
    upsert?: userUpsertWithoutHr_managerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutHr_managerInput, userUpdateWithoutHr_managerInput>,
      userUncheckedUpdateWithoutHr_managerInput
    >;
  };

  export type applicantCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>
      | applicantCreateWithoutUserInput[]
      | applicantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicantCreateOrConnectWithoutUserInput | applicantCreateOrConnectWithoutUserInput[];
    createMany?: applicantCreateManyUserInputEnvelope;
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
  };

  export type companyCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type customerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type employeeCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type hr_managerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>
      | hr_managerCreateWithoutUserInput[]
      | hr_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: hr_managerCreateOrConnectWithoutUserInput | hr_managerCreateOrConnectWithoutUserInput[];
    createMany?: hr_managerCreateManyUserInputEnvelope;
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
  };

  export type applicantUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>
      | applicantCreateWithoutUserInput[]
      | applicantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicantCreateOrConnectWithoutUserInput | applicantCreateOrConnectWithoutUserInput[];
    createMany?: applicantCreateManyUserInputEnvelope;
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
  };

  export type companyUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
  };

  export type customerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
  };

  export type employeeUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
  };

  export type hr_managerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>
      | hr_managerCreateWithoutUserInput[]
      | hr_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: hr_managerCreateOrConnectWithoutUserInput | hr_managerCreateOrConnectWithoutUserInput[];
    createMany?: hr_managerCreateManyUserInputEnvelope;
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
  };

  export type applicantUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>
      | applicantCreateWithoutUserInput[]
      | applicantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicantCreateOrConnectWithoutUserInput | applicantCreateOrConnectWithoutUserInput[];
    upsert?: applicantUpsertWithWhereUniqueWithoutUserInput | applicantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: applicantCreateManyUserInputEnvelope;
    set?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    disconnect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    delete?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    update?: applicantUpdateWithWhereUniqueWithoutUserInput | applicantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: applicantUpdateManyWithWhereWithoutUserInput | applicantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: applicantScalarWhereInput | applicantScalarWhereInput[];
  };

  export type companyUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type customerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutUserInput | customerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutUserInput | customerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: customerUpdateManyWithWhereWithoutUserInput | customerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type employeeUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type hr_managerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>
      | hr_managerCreateWithoutUserInput[]
      | hr_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: hr_managerCreateOrConnectWithoutUserInput | hr_managerCreateOrConnectWithoutUserInput[];
    upsert?: hr_managerUpsertWithWhereUniqueWithoutUserInput | hr_managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: hr_managerCreateManyUserInputEnvelope;
    set?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    disconnect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    delete?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    update?: hr_managerUpdateWithWhereUniqueWithoutUserInput | hr_managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: hr_managerUpdateManyWithWhereWithoutUserInput | hr_managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: hr_managerScalarWhereInput | hr_managerScalarWhereInput[];
  };

  export type applicantUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>
      | applicantCreateWithoutUserInput[]
      | applicantUncheckedCreateWithoutUserInput[];
    connectOrCreate?: applicantCreateOrConnectWithoutUserInput | applicantCreateOrConnectWithoutUserInput[];
    upsert?: applicantUpsertWithWhereUniqueWithoutUserInput | applicantUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: applicantCreateManyUserInputEnvelope;
    set?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    disconnect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    delete?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    connect?: applicantWhereUniqueInput | applicantWhereUniqueInput[];
    update?: applicantUpdateWithWhereUniqueWithoutUserInput | applicantUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: applicantUpdateManyWithWhereWithoutUserInput | applicantUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: applicantScalarWhereInput | applicantScalarWhereInput[];
  };

  export type companyUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>
      | companyCreateWithoutUserInput[]
      | companyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: companyCreateOrConnectWithoutUserInput | companyCreateOrConnectWithoutUserInput[];
    upsert?: companyUpsertWithWhereUniqueWithoutUserInput | companyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: companyCreateManyUserInputEnvelope;
    set?: companyWhereUniqueInput | companyWhereUniqueInput[];
    disconnect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    delete?: companyWhereUniqueInput | companyWhereUniqueInput[];
    connect?: companyWhereUniqueInput | companyWhereUniqueInput[];
    update?: companyUpdateWithWhereUniqueWithoutUserInput | companyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: companyUpdateManyWithWhereWithoutUserInput | companyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: companyScalarWhereInput | companyScalarWhereInput[];
  };

  export type customerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>
      | customerCreateWithoutUserInput[]
      | customerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: customerCreateOrConnectWithoutUserInput | customerCreateOrConnectWithoutUserInput[];
    upsert?: customerUpsertWithWhereUniqueWithoutUserInput | customerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: customerCreateManyUserInputEnvelope;
    set?: customerWhereUniqueInput | customerWhereUniqueInput[];
    disconnect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    delete?: customerWhereUniqueInput | customerWhereUniqueInput[];
    connect?: customerWhereUniqueInput | customerWhereUniqueInput[];
    update?: customerUpdateWithWhereUniqueWithoutUserInput | customerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: customerUpdateManyWithWhereWithoutUserInput | customerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: customerScalarWhereInput | customerScalarWhereInput[];
  };

  export type employeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>
      | employeeCreateWithoutUserInput[]
      | employeeUncheckedCreateWithoutUserInput[];
    connectOrCreate?: employeeCreateOrConnectWithoutUserInput | employeeCreateOrConnectWithoutUserInput[];
    upsert?: employeeUpsertWithWhereUniqueWithoutUserInput | employeeUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: employeeCreateManyUserInputEnvelope;
    set?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    disconnect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    delete?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    connect?: employeeWhereUniqueInput | employeeWhereUniqueInput[];
    update?: employeeUpdateWithWhereUniqueWithoutUserInput | employeeUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: employeeUpdateManyWithWhereWithoutUserInput | employeeUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: employeeScalarWhereInput | employeeScalarWhereInput[];
  };

  export type hr_managerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>
      | hr_managerCreateWithoutUserInput[]
      | hr_managerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: hr_managerCreateOrConnectWithoutUserInput | hr_managerCreateOrConnectWithoutUserInput[];
    upsert?: hr_managerUpsertWithWhereUniqueWithoutUserInput | hr_managerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: hr_managerCreateManyUserInputEnvelope;
    set?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    disconnect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    delete?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    connect?: hr_managerWhereUniqueInput | hr_managerWhereUniqueInput[];
    update?: hr_managerUpdateWithWhereUniqueWithoutUserInput | hr_managerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: hr_managerUpdateManyWithWhereWithoutUserInput | hr_managerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: hr_managerScalarWhereInput | hr_managerScalarWhereInput[];
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

  export type companyCreateWithoutApplicantInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutCompanyInput;
    customer?: customerCreateNestedManyWithoutCompanyInput;
    employee?: employeeCreateNestedManyWithoutCompanyInput;
    hr_manager?: hr_managerCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutApplicantInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    customer?: customerUncheckedCreateNestedManyWithoutCompanyInput;
    employee?: employeeUncheckedCreateNestedManyWithoutCompanyInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutApplicantInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutApplicantInput, companyUncheckedCreateWithoutApplicantInput>;
  };

  export type userCreateWithoutApplicantInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
    employee?: employeeCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutApplicantInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutApplicantInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutApplicantInput, userUncheckedCreateWithoutApplicantInput>;
  };

  export type companyUpsertWithoutApplicantInput = {
    update: XOR<companyUpdateWithoutApplicantInput, companyUncheckedUpdateWithoutApplicantInput>;
    create: XOR<companyCreateWithoutApplicantInput, companyUncheckedCreateWithoutApplicantInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutApplicantInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutApplicantInput, companyUncheckedUpdateWithoutApplicantInput>;
  };

  export type companyUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    customer?: customerUpdateManyWithoutCompanyNestedInput;
    employee?: employeeUpdateManyWithoutCompanyNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    customer?: customerUncheckedUpdateManyWithoutCompanyNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutCompanyNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type userUpsertWithoutApplicantInput = {
    update: XOR<userUpdateWithoutApplicantInput, userUncheckedUpdateWithoutApplicantInput>;
    create: XOR<userCreateWithoutApplicantInput, userUncheckedCreateWithoutApplicantInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutApplicantInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutApplicantInput, userUncheckedUpdateWithoutApplicantInput>;
  };

  export type userUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutApplicantInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type applicantCreateWithoutCompanyInput = {
    id?: string;
    resume: string;
    application_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutApplicantInput;
  };

  export type applicantUncheckedCreateWithoutCompanyInput = {
    id?: string;
    resume: string;
    application_date: Date | string;
    status: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicantCreateOrConnectWithoutCompanyInput = {
    where: applicantWhereUniqueInput;
    create: XOR<applicantCreateWithoutCompanyInput, applicantUncheckedCreateWithoutCompanyInput>;
  };

  export type applicantCreateManyCompanyInputEnvelope = {
    data: applicantCreateManyCompanyInput | applicantCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
    employee?: employeeCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCompanyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCompanyInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
  };

  export type customerCreateWithoutCompanyInput = {
    id?: string;
    company_name: string;
    contact_number: string;
    address: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutCustomerInput;
  };

  export type customerUncheckedCreateWithoutCompanyInput = {
    id?: string;
    company_name: string;
    contact_number: string;
    address: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerCreateOrConnectWithoutCompanyInput = {
    where: customerWhereUniqueInput;
    create: XOR<customerCreateWithoutCompanyInput, customerUncheckedCreateWithoutCompanyInput>;
  };

  export type customerCreateManyCompanyInputEnvelope = {
    data: customerCreateManyCompanyInput | customerCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type employeeCreateWithoutCompanyInput = {
    id?: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutCompanyInput = {
    id?: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeCreateOrConnectWithoutCompanyInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput>;
  };

  export type employeeCreateManyCompanyInputEnvelope = {
    data: employeeCreateManyCompanyInput | employeeCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type hr_managerCreateWithoutCompanyInput = {
    id?: string;
    department: string;
    years_experience: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutHr_managerInput;
  };

  export type hr_managerUncheckedCreateWithoutCompanyInput = {
    id?: string;
    department: string;
    years_experience: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hr_managerCreateOrConnectWithoutCompanyInput = {
    where: hr_managerWhereUniqueInput;
    create: XOR<hr_managerCreateWithoutCompanyInput, hr_managerUncheckedCreateWithoutCompanyInput>;
  };

  export type hr_managerCreateManyCompanyInputEnvelope = {
    data: hr_managerCreateManyCompanyInput | hr_managerCreateManyCompanyInput[];
    skipDuplicates?: boolean;
  };

  export type applicantUpsertWithWhereUniqueWithoutCompanyInput = {
    where: applicantWhereUniqueInput;
    update: XOR<applicantUpdateWithoutCompanyInput, applicantUncheckedUpdateWithoutCompanyInput>;
    create: XOR<applicantCreateWithoutCompanyInput, applicantUncheckedCreateWithoutCompanyInput>;
  };

  export type applicantUpdateWithWhereUniqueWithoutCompanyInput = {
    where: applicantWhereUniqueInput;
    data: XOR<applicantUpdateWithoutCompanyInput, applicantUncheckedUpdateWithoutCompanyInput>;
  };

  export type applicantUpdateManyWithWhereWithoutCompanyInput = {
    where: applicantScalarWhereInput;
    data: XOR<applicantUpdateManyMutationInput, applicantUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type applicantScalarWhereInput = {
    AND?: applicantScalarWhereInput | applicantScalarWhereInput[];
    OR?: applicantScalarWhereInput[];
    NOT?: applicantScalarWhereInput | applicantScalarWhereInput[];
    id?: UuidFilter<'applicant'> | string;
    resume?: StringFilter<'applicant'> | string;
    application_date?: DateTimeFilter<'applicant'> | Date | string;
    status?: StringFilter<'applicant'> | string;
    user_id?: UuidFilter<'applicant'> | string;
    company_id?: UuidFilter<'applicant'> | string;
    created_at?: DateTimeFilter<'applicant'> | Date | string;
    updated_at?: DateTimeFilter<'applicant'> | Date | string;
  };

  export type userUpsertWithoutCompanyInput = {
    update: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
    create: XOR<userCreateWithoutCompanyInput, userUncheckedCreateWithoutCompanyInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCompanyInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCompanyInput, userUncheckedUpdateWithoutCompanyInput>;
  };

  export type userUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type customerUpsertWithWhereUniqueWithoutCompanyInput = {
    where: customerWhereUniqueInput;
    update: XOR<customerUpdateWithoutCompanyInput, customerUncheckedUpdateWithoutCompanyInput>;
    create: XOR<customerCreateWithoutCompanyInput, customerUncheckedCreateWithoutCompanyInput>;
  };

  export type customerUpdateWithWhereUniqueWithoutCompanyInput = {
    where: customerWhereUniqueInput;
    data: XOR<customerUpdateWithoutCompanyInput, customerUncheckedUpdateWithoutCompanyInput>;
  };

  export type customerUpdateManyWithWhereWithoutCompanyInput = {
    where: customerScalarWhereInput;
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type customerScalarWhereInput = {
    AND?: customerScalarWhereInput | customerScalarWhereInput[];
    OR?: customerScalarWhereInput[];
    NOT?: customerScalarWhereInput | customerScalarWhereInput[];
    id?: UuidFilter<'customer'> | string;
    company_name?: StringFilter<'customer'> | string;
    contact_number?: StringFilter<'customer'> | string;
    address?: StringFilter<'customer'> | string;
    user_id?: UuidFilter<'customer'> | string;
    company_id?: UuidFilter<'customer'> | string;
    created_at?: DateTimeFilter<'customer'> | Date | string;
    updated_at?: DateTimeFilter<'customer'> | Date | string;
  };

  export type employeeUpsertWithWhereUniqueWithoutCompanyInput = {
    where: employeeWhereUniqueInput;
    update: XOR<employeeUpdateWithoutCompanyInput, employeeUncheckedUpdateWithoutCompanyInput>;
    create: XOR<employeeCreateWithoutCompanyInput, employeeUncheckedCreateWithoutCompanyInput>;
  };

  export type employeeUpdateWithWhereUniqueWithoutCompanyInput = {
    where: employeeWhereUniqueInput;
    data: XOR<employeeUpdateWithoutCompanyInput, employeeUncheckedUpdateWithoutCompanyInput>;
  };

  export type employeeUpdateManyWithWhereWithoutCompanyInput = {
    where: employeeScalarWhereInput;
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type employeeScalarWhereInput = {
    AND?: employeeScalarWhereInput | employeeScalarWhereInput[];
    OR?: employeeScalarWhereInput[];
    NOT?: employeeScalarWhereInput | employeeScalarWhereInput[];
    id?: UuidFilter<'employee'> | string;
    position?: StringFilter<'employee'> | string;
    salary?: IntFilter<'employee'> | number;
    start_date?: DateTimeFilter<'employee'> | Date | string;
    end_date?: DateTimeNullableFilter<'employee'> | Date | string | null;
    user_id?: UuidFilter<'employee'> | string;
    company_id?: UuidFilter<'employee'> | string;
    created_at?: DateTimeFilter<'employee'> | Date | string;
    updated_at?: DateTimeFilter<'employee'> | Date | string;
  };

  export type hr_managerUpsertWithWhereUniqueWithoutCompanyInput = {
    where: hr_managerWhereUniqueInput;
    update: XOR<hr_managerUpdateWithoutCompanyInput, hr_managerUncheckedUpdateWithoutCompanyInput>;
    create: XOR<hr_managerCreateWithoutCompanyInput, hr_managerUncheckedCreateWithoutCompanyInput>;
  };

  export type hr_managerUpdateWithWhereUniqueWithoutCompanyInput = {
    where: hr_managerWhereUniqueInput;
    data: XOR<hr_managerUpdateWithoutCompanyInput, hr_managerUncheckedUpdateWithoutCompanyInput>;
  };

  export type hr_managerUpdateManyWithWhereWithoutCompanyInput = {
    where: hr_managerScalarWhereInput;
    data: XOR<hr_managerUpdateManyMutationInput, hr_managerUncheckedUpdateManyWithoutCompanyInput>;
  };

  export type hr_managerScalarWhereInput = {
    AND?: hr_managerScalarWhereInput | hr_managerScalarWhereInput[];
    OR?: hr_managerScalarWhereInput[];
    NOT?: hr_managerScalarWhereInput | hr_managerScalarWhereInput[];
    id?: UuidFilter<'hr_manager'> | string;
    department?: StringFilter<'hr_manager'> | string;
    years_experience?: IntFilter<'hr_manager'> | number;
    user_id?: UuidFilter<'hr_manager'> | string;
    company_id?: UuidFilter<'hr_manager'> | string;
    created_at?: DateTimeFilter<'hr_manager'> | Date | string;
    updated_at?: DateTimeFilter<'hr_manager'> | Date | string;
  };

  export type companyCreateWithoutCustomerInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    applicant?: applicantCreateNestedManyWithoutCompanyInput;
    user: userCreateNestedOneWithoutCompanyInput;
    employee?: employeeCreateNestedManyWithoutCompanyInput;
    hr_manager?: hr_managerCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutCustomerInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    applicant?: applicantUncheckedCreateNestedManyWithoutCompanyInput;
    employee?: employeeUncheckedCreateNestedManyWithoutCompanyInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutCustomerInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutCustomerInput, companyUncheckedCreateWithoutCustomerInput>;
  };

  export type userCreateWithoutCustomerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    employee?: employeeCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutCustomerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutCustomerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
  };

  export type companyUpsertWithoutCustomerInput = {
    update: XOR<companyUpdateWithoutCustomerInput, companyUncheckedUpdateWithoutCustomerInput>;
    create: XOR<companyCreateWithoutCustomerInput, companyUncheckedCreateWithoutCustomerInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutCustomerInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutCustomerInput, companyUncheckedUpdateWithoutCustomerInput>;
  };

  export type companyUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    applicant?: applicantUpdateManyWithoutCompanyNestedInput;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    employee?: employeeUpdateManyWithoutCompanyNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    applicant?: applicantUncheckedUpdateManyWithoutCompanyNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutCompanyNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type userUpsertWithoutCustomerInput = {
    update: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>;
    create: XOR<userCreateWithoutCustomerInput, userUncheckedCreateWithoutCustomerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutCustomerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutCustomerInput, userUncheckedUpdateWithoutCustomerInput>;
  };

  export type userUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    employee?: employeeUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type companyCreateWithoutEmployeeInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    applicant?: applicantCreateNestedManyWithoutCompanyInput;
    user: userCreateNestedOneWithoutCompanyInput;
    customer?: customerCreateNestedManyWithoutCompanyInput;
    hr_manager?: hr_managerCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    applicant?: applicantUncheckedCreateNestedManyWithoutCompanyInput;
    customer?: customerUncheckedCreateNestedManyWithoutCompanyInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutEmployeeInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutEmployeeInput, companyUncheckedCreateWithoutEmployeeInput>;
  };

  export type userCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutEmployeeInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutEmployeeInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
  };

  export type companyUpsertWithoutEmployeeInput = {
    update: XOR<companyUpdateWithoutEmployeeInput, companyUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<companyCreateWithoutEmployeeInput, companyUncheckedCreateWithoutEmployeeInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutEmployeeInput, companyUncheckedUpdateWithoutEmployeeInput>;
  };

  export type companyUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    applicant?: applicantUpdateManyWithoutCompanyNestedInput;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    customer?: customerUpdateManyWithoutCompanyNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    applicant?: applicantUncheckedUpdateManyWithoutCompanyNestedInput;
    customer?: customerUncheckedUpdateManyWithoutCompanyNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type userUpsertWithoutEmployeeInput = {
    update: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
    create: XOR<userCreateWithoutEmployeeInput, userUncheckedCreateWithoutEmployeeInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutEmployeeInput, userUncheckedUpdateWithoutEmployeeInput>;
  };

  export type userUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type companyCreateWithoutHr_managerInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    applicant?: applicantCreateNestedManyWithoutCompanyInput;
    user: userCreateNestedOneWithoutCompanyInput;
    customer?: customerCreateNestedManyWithoutCompanyInput;
    employee?: employeeCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutHr_managerInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    applicant?: applicantUncheckedCreateNestedManyWithoutCompanyInput;
    customer?: customerUncheckedCreateNestedManyWithoutCompanyInput;
    employee?: employeeUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutHr_managerInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutHr_managerInput, companyUncheckedCreateWithoutHr_managerInput>;
  };

  export type userCreateWithoutHr_managerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantCreateNestedManyWithoutUserInput;
    company?: companyCreateNestedManyWithoutUserInput;
    customer?: customerCreateNestedManyWithoutUserInput;
    employee?: employeeCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutHr_managerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    applicant?: applicantUncheckedCreateNestedManyWithoutUserInput;
    company?: companyUncheckedCreateNestedManyWithoutUserInput;
    customer?: customerUncheckedCreateNestedManyWithoutUserInput;
    employee?: employeeUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutHr_managerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutHr_managerInput, userUncheckedCreateWithoutHr_managerInput>;
  };

  export type companyUpsertWithoutHr_managerInput = {
    update: XOR<companyUpdateWithoutHr_managerInput, companyUncheckedUpdateWithoutHr_managerInput>;
    create: XOR<companyCreateWithoutHr_managerInput, companyUncheckedCreateWithoutHr_managerInput>;
    where?: companyWhereInput;
  };

  export type companyUpdateToOneWithWhereWithoutHr_managerInput = {
    where?: companyWhereInput;
    data: XOR<companyUpdateWithoutHr_managerInput, companyUncheckedUpdateWithoutHr_managerInput>;
  };

  export type companyUpdateWithoutHr_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    applicant?: applicantUpdateManyWithoutCompanyNestedInput;
    user?: userUpdateOneRequiredWithoutCompanyNestedInput;
    customer?: customerUpdateManyWithoutCompanyNestedInput;
    employee?: employeeUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutHr_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    applicant?: applicantUncheckedUpdateManyWithoutCompanyNestedInput;
    customer?: customerUncheckedUpdateManyWithoutCompanyNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type userUpsertWithoutHr_managerInput = {
    update: XOR<userUpdateWithoutHr_managerInput, userUncheckedUpdateWithoutHr_managerInput>;
    create: XOR<userCreateWithoutHr_managerInput, userUncheckedCreateWithoutHr_managerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutHr_managerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutHr_managerInput, userUncheckedUpdateWithoutHr_managerInput>;
  };

  export type userUpdateWithoutHr_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUpdateManyWithoutUserNestedInput;
    company?: companyUpdateManyWithoutUserNestedInput;
    customer?: customerUpdateManyWithoutUserNestedInput;
    employee?: employeeUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutHr_managerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    applicant?: applicantUncheckedUpdateManyWithoutUserNestedInput;
    company?: companyUncheckedUpdateManyWithoutUserNestedInput;
    customer?: customerUncheckedUpdateManyWithoutUserNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type applicantCreateWithoutUserInput = {
    id?: string;
    resume: string;
    application_date: Date | string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutApplicantInput;
  };

  export type applicantUncheckedCreateWithoutUserInput = {
    id?: string;
    resume: string;
    application_date: Date | string;
    status: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicantCreateOrConnectWithoutUserInput = {
    where: applicantWhereUniqueInput;
    create: XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>;
  };

  export type applicantCreateManyUserInputEnvelope = {
    data: applicantCreateManyUserInput | applicantCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type companyCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    applicant?: applicantCreateNestedManyWithoutCompanyInput;
    customer?: customerCreateNestedManyWithoutCompanyInput;
    employee?: employeeCreateNestedManyWithoutCompanyInput;
    hr_manager?: hr_managerCreateNestedManyWithoutCompanyInput;
  };

  export type companyUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    applicant?: applicantUncheckedCreateNestedManyWithoutCompanyInput;
    customer?: customerUncheckedCreateNestedManyWithoutCompanyInput;
    employee?: employeeUncheckedCreateNestedManyWithoutCompanyInput;
    hr_manager?: hr_managerUncheckedCreateNestedManyWithoutCompanyInput;
  };

  export type companyCreateOrConnectWithoutUserInput = {
    where: companyWhereUniqueInput;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyCreateManyUserInputEnvelope = {
    data: companyCreateManyUserInput | companyCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type customerCreateWithoutUserInput = {
    id?: string;
    company_name: string;
    contact_number: string;
    address: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutCustomerInput;
  };

  export type customerUncheckedCreateWithoutUserInput = {
    id?: string;
    company_name: string;
    contact_number: string;
    address: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerCreateOrConnectWithoutUserInput = {
    where: customerWhereUniqueInput;
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>;
  };

  export type customerCreateManyUserInputEnvelope = {
    data: customerCreateManyUserInput | customerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type employeeCreateWithoutUserInput = {
    id?: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutEmployeeInput;
  };

  export type employeeUncheckedCreateWithoutUserInput = {
    id?: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeCreateOrConnectWithoutUserInput = {
    where: employeeWhereUniqueInput;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeCreateManyUserInputEnvelope = {
    data: employeeCreateManyUserInput | employeeCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type hr_managerCreateWithoutUserInput = {
    id?: string;
    department: string;
    years_experience: number;
    created_at?: Date | string;
    updated_at?: Date | string;
    company: companyCreateNestedOneWithoutHr_managerInput;
  };

  export type hr_managerUncheckedCreateWithoutUserInput = {
    id?: string;
    department: string;
    years_experience: number;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hr_managerCreateOrConnectWithoutUserInput = {
    where: hr_managerWhereUniqueInput;
    create: XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>;
  };

  export type hr_managerCreateManyUserInputEnvelope = {
    data: hr_managerCreateManyUserInput | hr_managerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type applicantUpsertWithWhereUniqueWithoutUserInput = {
    where: applicantWhereUniqueInput;
    update: XOR<applicantUpdateWithoutUserInput, applicantUncheckedUpdateWithoutUserInput>;
    create: XOR<applicantCreateWithoutUserInput, applicantUncheckedCreateWithoutUserInput>;
  };

  export type applicantUpdateWithWhereUniqueWithoutUserInput = {
    where: applicantWhereUniqueInput;
    data: XOR<applicantUpdateWithoutUserInput, applicantUncheckedUpdateWithoutUserInput>;
  };

  export type applicantUpdateManyWithWhereWithoutUserInput = {
    where: applicantScalarWhereInput;
    data: XOR<applicantUpdateManyMutationInput, applicantUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyUpsertWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    update: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
    create: XOR<companyCreateWithoutUserInput, companyUncheckedCreateWithoutUserInput>;
  };

  export type companyUpdateWithWhereUniqueWithoutUserInput = {
    where: companyWhereUniqueInput;
    data: XOR<companyUpdateWithoutUserInput, companyUncheckedUpdateWithoutUserInput>;
  };

  export type companyUpdateManyWithWhereWithoutUserInput = {
    where: companyScalarWhereInput;
    data: XOR<companyUpdateManyMutationInput, companyUncheckedUpdateManyWithoutUserInput>;
  };

  export type companyScalarWhereInput = {
    AND?: companyScalarWhereInput | companyScalarWhereInput[];
    OR?: companyScalarWhereInput[];
    NOT?: companyScalarWhereInput | companyScalarWhereInput[];
    id?: UuidFilter<'company'> | string;
    description?: StringNullableFilter<'company'> | string | null;
    name?: StringFilter<'company'> | string;
    created_at?: DateTimeFilter<'company'> | Date | string;
    updated_at?: DateTimeFilter<'company'> | Date | string;
    user_id?: UuidFilter<'company'> | string;
    tenant_id?: StringFilter<'company'> | string;
  };

  export type customerUpsertWithWhereUniqueWithoutUserInput = {
    where: customerWhereUniqueInput;
    update: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>;
    create: XOR<customerCreateWithoutUserInput, customerUncheckedCreateWithoutUserInput>;
  };

  export type customerUpdateWithWhereUniqueWithoutUserInput = {
    where: customerWhereUniqueInput;
    data: XOR<customerUpdateWithoutUserInput, customerUncheckedUpdateWithoutUserInput>;
  };

  export type customerUpdateManyWithWhereWithoutUserInput = {
    where: customerScalarWhereInput;
    data: XOR<customerUpdateManyMutationInput, customerUncheckedUpdateManyWithoutUserInput>;
  };

  export type employeeUpsertWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    update: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
    create: XOR<employeeCreateWithoutUserInput, employeeUncheckedCreateWithoutUserInput>;
  };

  export type employeeUpdateWithWhereUniqueWithoutUserInput = {
    where: employeeWhereUniqueInput;
    data: XOR<employeeUpdateWithoutUserInput, employeeUncheckedUpdateWithoutUserInput>;
  };

  export type employeeUpdateManyWithWhereWithoutUserInput = {
    where: employeeScalarWhereInput;
    data: XOR<employeeUpdateManyMutationInput, employeeUncheckedUpdateManyWithoutUserInput>;
  };

  export type hr_managerUpsertWithWhereUniqueWithoutUserInput = {
    where: hr_managerWhereUniqueInput;
    update: XOR<hr_managerUpdateWithoutUserInput, hr_managerUncheckedUpdateWithoutUserInput>;
    create: XOR<hr_managerCreateWithoutUserInput, hr_managerUncheckedCreateWithoutUserInput>;
  };

  export type hr_managerUpdateWithWhereUniqueWithoutUserInput = {
    where: hr_managerWhereUniqueInput;
    data: XOR<hr_managerUpdateWithoutUserInput, hr_managerUncheckedUpdateWithoutUserInput>;
  };

  export type hr_managerUpdateManyWithWhereWithoutUserInput = {
    where: hr_managerScalarWhereInput;
    data: XOR<hr_managerUpdateManyMutationInput, hr_managerUncheckedUpdateManyWithoutUserInput>;
  };

  export type applicantCreateManyCompanyInput = {
    id?: string;
    resume: string;
    application_date: Date | string;
    status: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type customerCreateManyCompanyInput = {
    id?: string;
    company_name: string;
    contact_number: string;
    address: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeCreateManyCompanyInput = {
    id?: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hr_managerCreateManyCompanyInput = {
    id?: string;
    department: string;
    years_experience: number;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicantUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutApplicantNestedInput;
  };

  export type applicantUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicantUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    years_experience?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutHr_managerNestedInput;
  };

  export type hr_managerUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    years_experience?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    years_experience?: IntFieldUpdateOperationsInput | number;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicantCreateManyUserInput = {
    id?: string;
    resume: string;
    application_date: Date | string;
    status: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type companyCreateManyUserInput = {
    id?: string;
    description?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type customerCreateManyUserInput = {
    id?: string;
    company_name: string;
    contact_number: string;
    address: string;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type employeeCreateManyUserInput = {
    id?: string;
    position: string;
    salary: number;
    start_date: Date | string;
    end_date?: Date | string | null;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type hr_managerCreateManyUserInput = {
    id?: string;
    department: string;
    years_experience: number;
    company_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type applicantUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutApplicantNestedInput;
  };

  export type applicantUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type applicantUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    resume?: StringFieldUpdateOperationsInput | string;
    application_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    status?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type companyUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    applicant?: applicantUpdateManyWithoutCompanyNestedInput;
    customer?: customerUpdateManyWithoutCompanyNestedInput;
    employee?: employeeUpdateManyWithoutCompanyNestedInput;
    hr_manager?: hr_managerUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    applicant?: applicantUncheckedUpdateManyWithoutCompanyNestedInput;
    customer?: customerUncheckedUpdateManyWithoutCompanyNestedInput;
    employee?: employeeUncheckedUpdateManyWithoutCompanyNestedInput;
    hr_manager?: hr_managerUncheckedUpdateManyWithoutCompanyNestedInput;
  };

  export type companyUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type customerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutCustomerNestedInput;
  };

  export type customerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type customerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    company_name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutEmployeeNestedInput;
  };

  export type employeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type employeeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    position?: StringFieldUpdateOperationsInput | string;
    salary?: IntFieldUpdateOperationsInput | number;
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    years_experience?: IntFieldUpdateOperationsInput | number;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    company?: companyUpdateOneRequiredWithoutHr_managerNestedInput;
  };

  export type hr_managerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    years_experience?: IntFieldUpdateOperationsInput | number;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type hr_managerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    department?: StringFieldUpdateOperationsInput | string;
    years_experience?: IntFieldUpdateOperationsInput | number;
    company_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CompanyCountOutputTypeDefaultArgs instead
   */
  export type CompanyCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    CompanyCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use applicantDefaultArgs instead
   */
  export type applicantArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    applicantDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use companyDefaultArgs instead
   */
  export type companyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    companyDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use customerDefaultArgs instead
   */
  export type customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    customerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use employeeDefaultArgs instead
   */
  export type employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    employeeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use hr_managerDefaultArgs instead
   */
  export type hr_managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    hr_managerDefaultArgs<ExtArgs>;
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
