// Use this file as single source of truth for all strings/messages which are visible to user (including error messages)
// Prefer keeping strings inside appropriate module objects

export const CLUBHOUSE = {
  errorsMsg: {
    contactNotFound: 'Unable to find the contact',
    emailNotAvailable: 'Email ID is not available',
    locationNotAvailable: 'Location is not available',
    incorrectEmptySpacesFile: 'Unnable to load Empty Spaces File',
    phoneNotAvailable: 'Phone Number not available',
    errorWhileSaving: 'Error while saving contacts',
    errorWhileDeleting: 'Error in deleting',
    errorWhileSelectingFile: 'Data File Not Selected.',
    errorWhileSelectingVCFFile: 'VCF File Not Selected.',
    errorWhileSelectingJSONFile: 'JSON File Not Selected.',
    errorReadingFile: 'Error while reading the source file',
    errorInSelectingAvatar: 'Error while selecting the photo',
    errorInPermissions: 'Error in permission',
    errorInReadingContacts: 'Please allow accessing the contacts.',
  },
  permissions: {
    status: {
      granted: 'granted',
      denied: 'denied',
      never_ask_again: 'never_ask_again',
    },
  },
};

export const DASHBOARD = {
  price: 'Price',
  quantity: 'Quantity',
  rate: 'Rate',
  unit: 'Unit',
};

export const SETTINGS = {
  title: 'Settings',
};

export const TOOLS = {
  title: 'Tools',
};
