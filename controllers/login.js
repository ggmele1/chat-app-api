const handleLogin = (req, res, db) => {
    const { username } = req.body;
        db("users")
        .insert({
            username: username,
            joined: new Date()
        })
        .returning("*")
      .then((data) => {
   res.json(data)
      })
      .catch((err) => res.status(400).json("wrong Credentials"));
  };

  module.exports = {
      handleLogin
  }