/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

function createEmployeeRecord([firstName, familyName, title, payPerHour]) {
    return {
        firstName,
        familyName,
        title,
        payPerHour,
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(records) {
    return records.map((record) => {
        return createEmployeeRecord(record)
    })
}

function createTimeInEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    
    this.timeInEvents.push({
        type: 'TimeIn',
        hour: parseInt(hour),
        date
    })
    return this
}

function createTimeOutEvent(dateStamp) {
    const [date, hour] = dateStamp.split(' ')
    
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(hour),
        date
    })
    return this
}

function hoursWorkedOnDate(date) {
    const timeIn = this.timeInEvents.find(e => e.date === date).hour
    const timeOut = this.timeOutEvents.find(e => e.date === date).hour
    
    return (timeOut - timeIn) / 100
}

function wagesEarnedOnDate(date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(records, firstName) {
    return records.find(record => record.firstName === firstName)
}

function calculatePayroll(records) {
    return records.reduce(function (total, record) {
        return total + allWagesFor.call(record)
    }, 0)
}
