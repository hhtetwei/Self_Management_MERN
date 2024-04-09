const { NOTE_ERRORS } = require('../constants/errors.constants')
const { noteService } = require('../services/notes.services')

const notesController = {
  getNotes: async (req, res, next) => {
    try {
      const notes = await noteService.getNotes({ query: req.query })

      return res.status(200).json({ data: notes })
    } catch (err) {
      next(err)
    }
  },

  getNote: async (req, res, next) => {
    try {
      const note = await noteService.getNote(req.params.id)

      if (!note) {
        return NOTE_ERRORS.NOT_FOUND
      }

      return res.status(201).json({
        note,
      })
    } catch (err) {
      next(err)
    }
  },

  createNote: async (req, res, next) => {
    try {
      // const note = await noteService.createNote(req.body, req.user)
      const note = await noteService.createNote(req.body)

      return res.status(201).json({ note })
    } catch (err) {
      next(err)
    }
  },

  getMyNotes: async (req, res, next) => {
    try {
      const note = await noteService.getMyNotes(req.user)

      return res.status(200).json({ data: note })
    } catch (err) {
      next(err)
    }
  },

  editNote: async (req, res, next) => {
    try {
      const notes = await noteService.editNote({
        id: req.params.id,
        payload: req.body,
      })

      return res.status(201).json({ data: notes })
    } catch (err) {
      next(err)
    }
  },

  deleteNote: async (req, res, next) => {
    try {
      const notes = await noteService.deleteNote(req.params.id)
      return res.status(201).json({ message: 'note is successfully deleted' })
    } catch (err) {
      next(err)
    }
  },
}

module.exports = {
  notesController,
}
