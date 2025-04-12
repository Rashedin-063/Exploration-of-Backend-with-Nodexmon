

const loginPage = (req, res) => { 
  res.render('login', { title: 'Login' });
}

const loginUser = (req, res) => {
 try {
  
   res.status(200).json({
      message: 'Login successful',
      status: true,
      error: null
   })
   
 } catch (error) {
   res.status(500).json({
      message: 'Server error',
      status: false,
      data: null,
      error: error.message
   })
 }
};

module.exports = { loginUser, loginPage };