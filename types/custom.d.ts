declare module 'bcryptjs' {
  /** Synchronously generates a hash for the given string. */
  export function hashSync(data: string, saltOrRounds: string | number): string;

  /** Asynchronously generates a hash for the given string. */
  export function hash(data: string, saltOrRounds: string | number): Promise<string>;

  /** Synchronously tests a string against a hash. */
  export function compareSync(data: string, encrypted: string): boolean;

  /** Asynchronously compares the given data against the given hash. */
  export function compare(data: string, encrypted: string): Promise<boolean>;

  /** Synchronously generates a salt. */
  export function genSaltSync(rounds?: number, minor?: string): string;

  /** Asynchronously generates a salt. */
  export function genSalt(rounds?: number, minor?: string): Promise<string>;

  /** Gets the number of rounds used to encrypt the given hash. */
  export function getRounds(encrypted: string): number;

  const bcryptjs: {
    hashSync: typeof hashSync;
    hash: typeof hash;
    compareSync: typeof compareSync;
    compare: typeof compare;
    genSaltSync: typeof genSaltSync;
    genSalt: typeof genSalt;
    getRounds: typeof getRounds;
  };

  export default bcryptjs;
}
