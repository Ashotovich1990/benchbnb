

export const signup = (newUser) => {

  return (
  $.ajax({
    url: 'api/users',
    method: "POST",
    data: newUser,
  }))
}

export const login = (currentUser) => (
  $.ajax({
    url: 'api/session',
    method: "POST",
    data: { 
      user: {
        username: currentUser.username,
        password:  currentUser.password,
      }
    }
  })
)

export const logout = () => (
  $.ajax({
    url: 'api/session',
    method: "DELETE",
  })
)

