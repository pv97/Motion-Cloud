export const fetchUser = (id, success, error) => {
  $.ajax({
    url: `api/users/${id}`,
    success,
    error
  });
};
