export function ok<T>(message: string, data: T) {
  return { success: true as const, message, data };
}
