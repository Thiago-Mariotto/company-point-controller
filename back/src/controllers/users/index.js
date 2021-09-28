const register = async (req, res, next) => {
  try { 
    const { name, email, password, birthday } = req.body;

    return res.status(200).json();
  } catch(err) {
    console.log(`Erro no registro de usuário: \n${err.message}`)
    next(err);
  }
}