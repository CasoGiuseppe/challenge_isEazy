export default [{
  id: 'STUDENT',
  name: "Giuseppe",
  surname: "Caso",
  email: `${import.meta.env.VITE_APP_LOGIN_EMAIL_STUDENT}`,
  password: `${import.meta.env.VITE_APP_LOGIN_PASSWORD}`,
  picture: `${import.meta.env.VITE_APP_LOGIN_PICTURE_STUDENT}`
},{
  id: 'TEACHER',
  name: "Marco",
  surname: "Gonzales",
  email: `${import.meta.env.VITE_APP_LOGIN_EMAIL_TEACHER}`,
  password: `${import.meta.env.VITE_APP_LOGIN_PASSWORD}`,
  picture: `${import.meta.env.VITE_APP_LOGIN_PICTURE_TEACHER}`
}
]
