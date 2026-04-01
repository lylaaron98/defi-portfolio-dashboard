// src/lib/utils/result.ts
// Result helpers for safer error handling (inspired by Rust/FP patterns).

export type Ok<T> = { ok: true; value: T };
export type Err<E> = { ok: false; error: E };
export type Result<T, E> = Ok<T> | Err<E>;

export function ok<T>(value: T): Ok<T> {
  return { ok: true, value };
}

export function err<E>(error: E): Err<E> {
  return { ok: false, error };
}

// Usage: const result = doSomething(); if (result.ok) { ... } else { ... }
// This pattern avoids exceptions for expected errors and improves code safety.
