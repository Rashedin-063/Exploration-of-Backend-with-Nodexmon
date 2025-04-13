

const loginPage = (req, res) => { 
  res.render('login', { title: 'Login' });
}

const loginUser = (req, res) => {
  try {
   
    const { email, password } = req.body;
  
    res.status(200).json({
     success: true,
      message: 'Login successful',
      data: { email, password }
   })
   
 } catch (error) {
    res.status(500).json({
     success: false,
      message:  error.message ? error.message : 'Server error',
      data: null,
   })
 }
};

module.exports = { loginUser, loginPage };