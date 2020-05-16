function createEmployeeRecord(employeeArray) {
    return {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrays) {
    return arrays.map(createEmployeeRecord)
}

function createTimeInEvent(timeStamp) {
    const timeArray = timeStamp.split(" ")

    this.timeInEvents.push({
        type: "TimeIn",
        hour: Number(timeArray[1]),
        date: timeArray[0]
    })
    return this  
}

function createTimeOutEvent(timeStamp) {
    const timeArray = timeStamp.split(" ")

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: Number(timeArray[1]),
        date: timeArray[0]
    })
    return this 
}

function hoursWorkedOnDate(date) {
    const timeO = this.timeOutEvents.find(x => x.date == date) 
    const timeI = this.timeInEvents.find(x => x.date == date)
    return (timeO.hour - timeI.hour)/100
}

function wagesEarnedOnDate(date) {
    return this.payPerHour * hoursWorkedOnDate.call(this, date)     
}

function findEmployeeByFirstName(empArray, name) {
    return empArray.find(x => x.firstName == name)
}

function calculatePayroll(empArray) {
    return empArray.reduce(function(total, current) {
        return total += allWagesFor.call(current)
    }, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}