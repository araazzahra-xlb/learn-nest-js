import { Transform } from 'class-transformer';

/**
 * Query strings arrive as text. Implicit conversion turns "false" into true
 * via Boolean("false"), so read the original query value from `obj`.
 */
export function ToBoolean(defaultValue?: boolean) {
  return Transform(({ value, key, obj }) => {
    const raw = obj && key in obj ? obj[key] : value;
    if (raw === undefined || raw === null || raw === '') return defaultValue;
    if (raw === true || raw === 'true') return true;
    if (raw === false || raw === 'false') return false;
    return raw;
  });
}

export function Trim() {
  return Transform(({ value }) =>
    typeof value === 'string' ? value.trim() : value,
  );
}

export function Default<T>(fallback: T) {
  return Transform(({ value }) =>
    value === undefined || value === null || value === '' ? fallback : value,
  );
}
