const NOTE_ERRORS = {
  NOT_FOUND: {
    code: 404,
    message: 'Note Not Found',
  },
}

const TODO_ERRORS = {
  NOT_FOUND: {
    code: 404,
    message: 'TO DO Not Found',
  },
}

const TOBUY_ERRORS = {
  NOT_FOUND: {
    code: 404,
    message: 'To Buy Not Found',
  },
}

const TOTRAVEL_ERRORS = {
  NOT_FOUND: {
    code: 404,
    message: 'To Travel Not Found',
  },
}

const USER_ERRORS = {
  NOT_FOUND: {
    code: 404,
    message: ' User Not Found',
  },

  ALREADY_EXIST: {
    code: 404,
    message: 'This User already exist',
  },

  NOT_AUTHENTICATED: {
    code: 401,
    message: 'You are not authenticated.Please log in',
  },
}

module.exports = {
  NOTE_ERRORS,
  TODO_ERRORS,
  TOBUY_ERRORS,
  TOTRAVEL_ERRORS,
  USER_ERRORS,
}
