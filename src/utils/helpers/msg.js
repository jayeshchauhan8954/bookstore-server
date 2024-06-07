const response_message = {
    invalid: (key) => `Invalid ${key}.`,
    allReadyExist: (key) => `${key || "Data"} already exist.`,
    created: (name) => `${name || "Record"} created successfully.`,
    updated: (name) => `${name || "Record"} updated successfully.`,
    notFound: (key) => `${key || "Record"} not found.`,
    deleted: (name) => `${name || "Record"} deleted successfully.`,
    found: (key) => `${key || "Record"} found successfully.`,
    Unauthorized: (key) => `${key || "User"} Unauthorized`,
}

export default response_message;