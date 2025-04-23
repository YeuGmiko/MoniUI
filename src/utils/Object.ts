/**
 * @author YeuGmiko
 * @param target 源对象
 * @param keys 需要忽略的属性
 * @return 返回一个对象，该对象包含了target对象中，属性不存在与keys中的所有属性
 */
export function omit<T extends object, K extends keyof T>(target: T, keys: K[]): Omit<T, K> {
  const obj = Object.assign({}, target);
  keys.forEach(prop => delete obj[prop]);
  return obj as Omit<T, K>;
}
