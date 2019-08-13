function getEmpoyeeInfo(cb) {
    localforage.getItem("shelfHolder").then(function (result) {
      cb(result || []); //{name, score}
    });
  }

  function setEmployeeInfo(newEmployeeInfo, cb) {
    localforage.setItem("shelfHolder", newEmployeeInfo).then(cb);
  }
  setEmployeeInfo("hello", function(){
      getEmpoyeeInfo(function(result){
console.log(result);
      })
  });

//  create function to grab user data from form

document.getElementById("submitButton").addEventListener("click", function(event) {
    
    event.preventDefault();
    const userName = document.getElementById("name").value.trim();  
    const role = document.getElementById("role").value.trim();
    const startDate = document.getElementById("startDate").value.trim();
    const monthlyRate = document.getElementById("monthlyRate").value.trim();

    const userInfo = {
        userName: userName,
        role: role,
        startDate: startDate,
        monthlyRate: monthlyRate
    };

    console.log(userInfo);

    // get the rest of the info from the form
    // create an employee object with info
    // get employee info 
    // add this employee to thr info
    // set employee info back on shelf


    setEmployeeInfo(userInfo, function(){
        getEmpoyeeInfo(function(result){
            console.log(result);  
      })
  });
  
})