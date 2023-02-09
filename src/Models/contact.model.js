'user strict';
var dbConn = require('./../../config/db.config');

var contact=function(result){};

contact.create = function (contact, result) {
    let contactValues = [];
    

    for (let i = 0; i < contact.length; i++) {
        contactValues.push([
            contact[i].contact_Email,
            contact[i].first_Name,
            contact[i].last_Name,
            contact[i].country,
            contact[i].city,
            contact[i].company_Id,
        ])
    }

                    dbConn.query("INSERT INTO contactss(contact_Email,first_Name,last_Name,country,city,company_Id) VALUES ?", [contactValues],
                        function (err, res) {
                            if (err)
                                throw err;
                            console.log("exp of records inserted: " + res.affectedRows);
                            
            result(null, res.insertId);
        });
};




contact.findById = function (id, result) {
    dbConn.query("Select * from contactss where contactID = ? ", id, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};
contact.findAll = function (result) {
    dbConn.query("Select * from contactss", function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            console.log('contactss : ', res);
            result(null, res);
        }
    });
};
// Employee.update = function (id, employee, result) {
//     dbConn.query("UPDATE employees SET first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=?, experience=?, WHERE id = ?", [employee.first_name, employee.last_name, employee.email, employee.phone, employee.organization, employee.designation, employee.salary, employee.experience, employee.additional_information, employee.currently_work_here, employee.designation, id], function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         } else {
//             result(null, res);
//         }
//     });
// // };
// Employee.delete = function (id, result) {
//     dbConn.query("DELETE FROM employees WHERE id = ?", [id], function (err, res) {
//         if (err) {
//             console.log("error: ", err);
//             result(null, err);
//         }
//         else {
//             result(null, res);
//         }
//     });
// };


//  Employee.Interviewer = function(req, res) {
//     AddExitDetails.Interviewer(function(err, Details) {
//     console.log('controller')
//     if (err)
//     res.send(err);
//     console.log('res', Details);
//     res.send(Details);
//   });
// };

//   Employee.Interviewer  = function (result) {
//         dbConn.query("SELECT first_name, last_name FROM employees", function (err, res) {
//             if(err) {
//                 console.log("error: ", err);
//                 result(null, err);
//             }
//             else{
//                 console.log(' employees: ', res);  
//                 result(null, res);
//             }
//         });   
//       };
    
    

module.exports = contact;