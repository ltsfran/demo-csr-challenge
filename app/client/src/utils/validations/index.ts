export const required = (value: string) => {
  return value ? undefined : "Campo requerido";
};

export const email = (value: string) => {
  return !/(\.{2}|-{2}|_{2})/.test(value) && /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/i.test(value) ? null : 'Formato no válido';
};

export const useAuthorization = (): boolean => {
  const username: string = sessionStorage.getItem('name');
  const token: string = sessionStorage.getItem('token');
  return !!username && !!token;
};