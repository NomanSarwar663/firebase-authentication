const appBaseUrl = 'https://app.mybox.works';

const roles = {
    user: 'user',
    admin: 'admin'
};

const userStatuses = {
    active: 'active',
    inactive: 'inactive',
    nonRegistered: 'nonRegistered'
};

const deviceStatuses = {
    active: 'active',
    inactive: 'inactive',
    nonRegistered: 'nonRegistered'
};

const devicePower = {
    True: 'True',
    False: 'False'
};

const packageStatuses = {
    active: 'active',
    inactive: 'inactive'
};

const updateCreditActions = {
    addition: 'addition',
    substraction: 'substraction'
};

const stripePaymentTypes = {
    packagePayment: 'packagePayment',
    shopPayment: 'shopPayment'
};

const rolesArray = Object.keys(roles);
const userStatusesArray = Object.keys(userStatuses);
const deviceStatusesArray = Object.keys(deviceStatuses);
const devicePowerArray = Object.keys(devicePower);
const packageStatusesArray = Object.keys(packageStatuses);
const updateCreditActionsArray = Object.keys(updateCreditActions);
const stripePaymentTypesArray = Object.keys(stripePaymentTypes);

module.exports = {
    appBaseUrl,
    roles,
    rolesArray,
    userStatuses,
    userStatusesArray,
    deviceStatuses,
    deviceStatusesArray,
    devicePower,
    devicePowerArray,
    packageStatuses,
    packageStatusesArray,
    updateCreditActions,
    updateCreditActionsArray,
    stripePaymentTypes,
    stripePaymentTypesArray
};
