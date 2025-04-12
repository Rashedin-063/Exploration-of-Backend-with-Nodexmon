

const loginPage = (req, res) => { 
  res.render('login', { title: 'Login' });
}

const loginUser = (req, res) => {
  res.render('login');
};

module.exports = { loginUser, loginPage };