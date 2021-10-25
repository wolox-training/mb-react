type Storage = { [index: string]: string | undefined };
const tempStorage: Storage = {};

const getEncodedFieldName = (key: string) =>
  window.btoa(`@@${'mb-react'.replace(/-/g, '_').toUpperCase()}:${key}`);

const getValue = (key: string) => {
  const encodedKey = getEncodedFieldName(key);
  let encodedValue = undefined;
  try {
    encodedValue = window.localStorage.getItem(encodedKey);
  } catch (e) {
    encodedValue = tempStorage[encodedKey];
  }
  const stringValue = encodedValue && window.atob(encodedValue);

  return stringValue && JSON.parse(stringValue);
};

const setValue = (key: string, value: any) => {
  const encodedKey = getEncodedFieldName(key);
  const stringValue = JSON.stringify(value);
  const encodedValue = window.btoa(stringValue);

  try {
    window.localStorage.setItem(encodedKey, encodedValue);
  } catch (e) {
    tempStorage[encodedKey] = encodedValue;
  }
};

const setValues = (values: Record<string, string>) => {
  Object.entries(values).map((value) => setValue(value[0], value[1]));
};

const removeValue = (key: string) => {
  const encodedKey = getEncodedFieldName(key);
  try {
    window.localStorage.removeItem(encodedKey);
  } catch (e) {
    tempStorage[encodedKey] = undefined;
  }
};

const LocalStorageService = {
  getValue,
  setValue,
  setValues,
  removeValue
};

export default LocalStorageService;
