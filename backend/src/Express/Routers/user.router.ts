import * as express from 'express'

export const postRouter = express.Router();

postRouter.post('/Register', (req, res) => {
  console.log(req.body)

  const newUser = {
    
  }
})

postRouter.post('/Login', (req, res) => {

})