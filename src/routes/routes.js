const router = require('express').Router();
const {body} = require('express-validator');
const {register} = require('../login controllers/registerController.js');
const {login} = require('../login controllers/loginController.js');
// const {getUser} = require('./controllers/getUserController');
const {getUserName} = require('../login controllers/getcontroller.js');
const { CompanyRegistration } = require('../login controllers/CompanyRegistration.js');
const { ContactDetails } = require('../login controllers/ContactDetails.js');
const {ContactDetailsEdit} = require('../login controllers/ContactDetails.js');
const{UserRoles}=require('../login controllers/UserRoleMaster.js')
// const{Campaign}=require('../login controllers/UserRoleMaster.js')
const{Campaign}=require('../login controllers/Campaign.js')
const{Segment}=require('../login controllers/Segment.js')

//const{getAllUser}=require('../login controllers/')
router.post('/InviteUser', 
[
  body('Name',"The name must be of minimum 3 characters length")
  .notEmpty()
  .escape()
  .trim()
  .isLength({ min: 3 }),
  
  body('Username',"The name must be of minimum 3 characters length")
  .notEmpty()
  .escape()
  .trim()
  .isLength({ min: 3 }),
  
  body('Email',"Invalid email address")
  .notEmpty()
  .escape()
  .trim().isEmail(),
  
  body("Password", "The Password must be of minimum 4 characters length")
     .notEmpty()
       .trim()
    .isLength({ min: 4 }),
 
],
 register);

router.post('/login',[
  body('Email',"Invalid Email address")
  .notEmpty()
  .escape()
  .trim().isEmail(),
  body('Password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
],login);

 router.get('/getoneuser/:Email',getUserName);


 router.post('/subs',CompanyRegistration);

 router.post('/contact',ContactDetails);
 router.put('/contact/edit',ContactDetailsEdit);


router.post('/userRole',UserRoles);
router.post('/Campaign',Campaign);
router.post('/Segment',Segment); 
// router.post('/Campaign',Campaign);
 
// router.get('/getoneuser',getUserName);

// router.get('/getuser',getUser)
// router.get('/getall',getAllUser)

module.exports = router;
