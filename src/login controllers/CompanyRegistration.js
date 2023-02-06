const dbConn = require('../../config/db.config').promise();

exports.CompanyRegistration = async (req, res, next) => {
  

  

  try {
    const [row] = await dbConn.execute(
      // "SELECT * FROM `users` WHERE `Email`=?",
      "SELECT * FROM `invite_users` WHERE `UserId`=?",

      [req.body.UserId]
    
    );

    if (row.length === 0) {
      // return res.status(422).json({
      return res.json({
        message: "Invalid UserId",
      });
    }
const [rows] =await dbConn.execute(
  
   'insert into company_ragistration (`companyName`, `companyEmail`,`companyURL`,`remark`,`companyLocation`, `userid`,`isactive`) values(?,?,?,?,?,?,?)',
  //"insert into company_ragistration (`company_Id`,`companyName`, `companyEmail`,`companyURL`,`remark`,`companyLocation`, `userid`,`isactive`) values(113,'c','c','c','c','c',16,0)",
[
           
          req.body.companyName,  
           req.body.companyEmail, 
            req.body.companyURL,  
              req.body.remark,
               req.body.companyLocation,
               req.body.UserId,
               req.body.isActive
]);
      if (rows.affectedRows === 1) {
        return res.status(201).json({
          success: rows,
          message: "The user has been successfully inserted.",
        });
      }
      
    
   
    return res.json({
      success: row,
      message: "UserID matched Successfully",

      
      
    });

    



// console.log(req.body)
//     const [row1] = dbConn.execute('insert into company_ragistration (`company_Id`,`companyName`, `companyEmail`,`companyURL`,`remark`,`companyLocation`,`userid`,`isactive`) values(?,?,?,?,?,?,?,?)',

//     req.body.company_Id,   
//     req.body.companyName,  
//     req.body.companyEmail, 
//       req.body.companyURL,  
//        req.body.remark,
//         req.body.companyLocation,
//         req.body.UserId,
//         req.body.isactive
//       );
  
//   if(row1.affectedRows===1){
// return res.status(201).json({
//     message:"user has been inserted successfully",
// })
//   }

  }


  catch (err) {
    next(err);
  }
};
