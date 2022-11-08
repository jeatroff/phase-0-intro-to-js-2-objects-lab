// Write your solution in this file!
var employee = {
    name: undefined,
    streetAddress: undefined
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    var newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    var newEmployee = {...employee};
    newEmployee[key] = undefined;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    employee[key] = undefined;
    return employee;
}