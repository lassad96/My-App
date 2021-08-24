export const adminAuth = (isAdmin)  =>{
  return (req, res, next) => {
    if (req.user.isAdmin) {

        next()
      
    }

    res.status(401)
      return res.send('Not allowed')

  }
}
