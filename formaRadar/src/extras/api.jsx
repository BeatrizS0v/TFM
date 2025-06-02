const BASE_URL = 'https://mock.apidog.com/m1/921517-904104-default';

//========Users==============

// Obtener usuarios
export const getUsers = async () => {
  const res = await fetch(`${BASE_URL}/users`);
  if (!res.ok) throw new Error('Error al cargar usuarios');
  return res.json();
};

// Obtener usuarios por ID
export const getUsersById = async (id) => {
  const res = await fetch(`${BASE_URL}/users/${id}`);
  if (!res.ok) throw new Error('Usuario no encontrado');
  return res.json();
};

// Registrar nuevo usuario
export const createUser = async (user) => {
  const res = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) throw new Error('Error al registrar usuario');
  return res.json();
};

// Editar usuario por ID
export const modifyUser = async (id, user) => {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) throw new Error('Error al editar usuario');
  return res.json();
};

//========Studies==============

// Obtener estudios
export const getStudies = async () => {
  const res = await fetch(`${BASE_URL}/studies`);
  if (!res.ok) throw new Error('Error al cargar estudios');
  return res.json();
};

// Obtener estudios por ID
export const getStudiesById = async (id) => {
  const res = await fetch(`${BASE_URL}/studies/${id}`);
  if (!res.ok) throw new Error('Estudio no encontrado');
  return res.json();
};

// Registrar nuevo estudio
export const createStudy = async (study) => {
  const res = await fetch(`${BASE_URL}/studies`, {
    method: 'POST',
    body: JSON.stringify(study),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) throw new Error('Error al registrar estudio');
  return res.json();
};

//========Comments==============

// Obtener comments by ID de estudio
export const getComments = async (id) => {
  const res = await fetch(`${BASE_URL}/comments/${id}`);
  if (!res.ok) throw new Error('Error al cargar comentario');
  return res.json();
};

// Registrar nuevo comentario
export const createComment = async (comment) => {
  const res = await fetch(`${BASE_URL}/comments`, {
    method: 'POST',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) throw new Error('Error al crear comentario');
  return res.json();
};

// Editar comentario por ID
export const modifyComment = async (id, comment) => {
  const res = await fetch(`${BASE_URL}/comments/${id}`, {
    method: 'PUT',
    body: JSON.stringify(comment),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) throw new Error('Error al editar comentario');
  return res.json();
};

// Eliminar comentario
export const deleteComment = async (id) => {
  const res = await fetch(`${BASE_URL}/comments/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error al eliminar comentario');
  return res.json();
};

//========Favourites==============

// Obtener los favoritos por ID de usuario
export const getFavouritesById = async (id) => {
  const res = await fetch(`${BASE_URL}/favourites/${id}`);
  if (!res.ok) throw new Error('Error al cargar los favoritos del usuario');
  return await res.json();
};

// Eliminar favorito
export const deleteFavourites = async (id) => {
  const res = await fetch(`${BASE_URL}/favourites/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Error al eliminar favorito');
  return res.json();
};

// Crear un favorito
export const createFavourite = async (favorito) => {
  const res = await fetch(`${BASE_URL}/favourite`, {
    method: 'POST',
    body: JSON.stringify(favorito),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  if (!res.ok) throw new Error('Error al guardar como favorito');
  return res.json();
};
