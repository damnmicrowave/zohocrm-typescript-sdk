"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Taxes = void 0;
const taxes_operations_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/taxes/taxes_operations");
const success_response_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/taxes/success_response");
const action_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/taxes/action_wrapper");
const response_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/taxes/response_wrapper");
const api_exception_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/taxes/api_exception");
const body_wrapper_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/taxes/body_wrapper");
const tax_1 = require("@zohocrm/typescript-sdk-2.0/core/com/zoho/crm/api/taxes/tax");
const parameter_map_1 = require("@zohocrm/typescript-sdk-2.0/routes/parameter_map");
class Taxes {
    /**
     * <h3> Get Taxes </h3>
     * This method is used to get all the Organization Taxes and print the response.
     */
    static async getTaxes() {
        //Get instance of TaxesOperations Class
        let taxesOperations = new taxes_operations_1.TaxesOperations();
        //Call getTaxes method
        let response = await taxesOperations.getTaxes();
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ResponseWrapper instance is received
                if (responseObject instanceof response_wrapper_1.ResponseWrapper) {
                    //Get the array of obtained Tax instances
                    let taxes = responseObject.getTaxes();
                    taxes.forEach(tax => {
                        //Get the DisplayLabel of each Tax
                        console.log("Tax DisplayLabel: " + tax.getDisplayLabel());
                        //Get the Name of each Tax
                        console.log("Tax Name: " + tax.getName());
                        //Get the ID of each Tax
                        console.log("Tax ID: " + tax.getId());
                        //Get the Value of each Tax
                        console.log("Tax Value: " + tax.getValue().toString());
                    });
                    let preference = responseObject.getPreference();
                    if (preference != null) {
                        //Get the AutoPopulateTax of each Preference
                        console.log("Preference AutoPopulateTax: " + preference.getAutoPopulateTax().toString());
                        //Get the ModifyTaxRates of each Preference
                        console.log("Preference ModifyTaxRates: " + preference.getModifyTaxRates().toString());
                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof api_exception_1.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());
                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    //Get the details map
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
    /**
     * <h3> Get Tax </h3>
     * This method is used to get the Organization Tax with ID and print the response.
     * @param taxId The ID of the tax to be obtained
     */
    static async getTax(taxId) {
        //example
        //let taxId = 34096432317003n;
        //Get instance of TaxesOperations Class
        let taxesOperations = new taxes_operations_1.TaxesOperations();
        //Call getTax method that takes taxId as parameter
        let response = await taxesOperations.getTax(taxId);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            if ([204, 304].includes(response.getStatusCode())) {
                console.log(response.getStatusCode() == 204 ? "No Content" : "Not Modified");
                return;
            }
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ResponseWrapper instance is received
                if (responseObject instanceof response_wrapper_1.ResponseWrapper) {
                    //Get the array of obtained Tax instances
                    let taxes = responseObject.getTaxes();
                    taxes.forEach(tax => {
                        //Get the DisplayLabel of each Tax
                        console.log("Tax DisplayLabel: " + tax.getDisplayLabel());
                        //Get the Name of each Tax
                        console.log("Tax Name: " + tax.getName());
                        //Get the ID of each Tax
                        console.log("Tax ID: " + tax.getId());
                        //Get the Value of each Tax
                        console.log("Tax Value: " + tax.getValue().toString());
                    });
                    let preference = responseObject.getPreference();
                    if (preference != null) {
                        //Get the AutoPopulateTax of each Preference
                        console.log("Preference AutoPopulateTax: " + preference.getAutoPopulateTax().toString());
                        //Get the ModifyTaxRates of each Preference
                        console.log("Preference ModifyTaxRates: " + preference.getModifyTaxRates().toString());
                    }
                }
                //Check if the request returned an exception
                else if (responseObject instanceof api_exception_1.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());
                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    //Get the details map
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
    /**
     * <h3> Create Taxes </h3>
     * This method is used to create Organization Taxes and print the response.
     */
    static async createTaxes() {
        //Get instance of TaxesOperations Class
        let taxesOperations = new taxes_operations_1.TaxesOperations();
        //Get instance of BodyWrapper Class that will contain the request body
        let request = new body_wrapper_1.BodyWrapper();
        //Array to hold Tax instances
        let taxArray = [];
        //Get instance of Tax Class
        let tax = new tax_1.Tax();
        //Set name
        tax.setName("ash211");
        //Set sequence number
        tax.setSequenceNumber(2);
        //Set value
        tax.setValue(10.0);
        //Add the instance to array
        taxArray.push(tax);
        tax = new tax_1.Tax();
        //Set name
        tax.setName("a231h2");
        //Set sequence number
        tax.setValue(12.0);
        //Add the instance to array
        taxArray.push(tax);
        //Set the array to taxes in BodyWrapper instance
        request.setTaxes(taxArray);
        //Call createTaxes method that takes BodyWrapper class instance as parameter
        let response = await taxesOperations.createTaxes(request);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof action_wrapper_1.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getTaxes();
                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof success_response_1.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            //Get the details map
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof api_exception_1.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            //Get the details map
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof api_exception_1.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());
                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    //Get the details map
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
    /**
     * <h3> Update Taxes </h3>
     * This method is used to update Organization Taxes and print the response.
     */
    static async updateTaxes() {
        //Get instance of TaxesOperations Class
        let taxesOperations = new taxes_operations_1.TaxesOperations();
        //Get instance of BodyWrapper Class that will contain the request body
        let request = new body_wrapper_1.BodyWrapper();
        //Array to hold Tax instances
        let taxArray = [];
        //Get instance of Tax Class
        let tax = new tax_1.Tax();
        //Set ID
        tax.setId(BigInt("347706110962009"));
        //Set Name
        tax.setName("Modifiedtax11");
        //Add the instance to the array
        taxArray.push(tax);
        tax = new tax_1.Tax();
        //Set ID
        tax.setId(BigInt("34096432317004"));
        //Set Name
        tax.setName("Modifiedtax21");
        //Add the instance to the array
        taxArray.push(tax);
        //Set the array to taxes in BodyWrapper instance
        request.setTaxes(taxArray);
        //Call updateTaxes method that takes BodyWrapper instance as parameter
        let response = await taxesOperations.updateTaxes(request);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof action_wrapper_1.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getTaxes();
                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof success_response_1.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            //Get the details map
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof api_exception_1.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            //Get the details map
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof api_exception_1.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());
                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    //Get the details map
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
    /**
     * <h3> Delete Taxes </h3>
     * This method is used to delete Organization Taxes and print the response.
     * @param taxIds The Array of the tax IDs to be deleted
     */
    static async deleteTaxes(taxIds) {
        //example
        //let taxIds = [34096432407046n, 34096432407047n];
        //Get instance of TaxesOperations Class
        let taxesOperations = new taxes_operations_1.TaxesOperations();
        //Get instance of ParameterMap Class
        let paramInstance = new parameter_map_1.ParameterMap();
        /* Possible parameters for Delete Taxes operation */
        for (let taxId of taxIds) {
            await paramInstance.add(taxes_operations_1.DeleteTaxesParam.IDS, taxId);
        }
        //Call deleteTaxes method that takes ParameterMap instance as parameter
        let response = await taxesOperations.deleteTaxes(paramInstance);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof action_wrapper_1.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getTaxes();
                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof success_response_1.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            //Get the details map
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof api_exception_1.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            //Get the details map
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof api_exception_1.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());
                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    //Get the details map
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
    /**
     * <h3> Delete Tax </h3>
     * This method is used to delete Organization Tax and print the response.
     * @param taxId The ID of the tax to be deleted
     */
    static async deleteTax(taxId) {
        //example
        //let taxId = 34096432407046n;
        //Get instance of TaxesOperations Class
        let taxesOperations = new taxes_operations_1.TaxesOperations();
        //Call deleteTaxes method that takes taxId as parameter
        let response = await taxesOperations.deleteTax(taxId);
        if (response != null) {
            //Get the status code from response
            console.log("Status Code: " + response.getStatusCode());
            //Get object from response
            let responseObject = response.getObject();
            if (responseObject != null) {
                //Check if expected ActionWrapper instance is received
                if (responseObject instanceof action_wrapper_1.ActionWrapper) {
                    //Get the array of obtained ActionResponse instances
                    let actionResponses = responseObject.getTaxes();
                    actionResponses.forEach(actionResponse => {
                        //Check if the request is successful
                        if (actionResponse instanceof success_response_1.SuccessResponse) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            //Get the details map
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                        //Check if the request returned an exception
                        else if (actionResponse instanceof api_exception_1.APIException) {
                            //Get the Status
                            console.log("Status: " + actionResponse.getStatus().getValue());
                            //Get the Code
                            console.log("Code: " + actionResponse.getCode().getValue());
                            console.log("Details");
                            //Get the details map
                            let details = actionResponse.getDetails();
                            if (details != null) {
                                Array.from(details.keys()).forEach(key => {
                                    console.log(key + ": " + details.get(key));
                                });
                            }
                            //Get the Message
                            console.log("Message: " + actionResponse.getMessage().getValue());
                        }
                    });
                }
                //Check if the request returned an exception
                else if (responseObject instanceof api_exception_1.APIException) {
                    //Get the Status
                    console.log("Status: " + responseObject.getStatus().getValue());
                    //Get the Code
                    console.log("Code: " + responseObject.getCode().getValue());
                    console.log("Details");
                    //Get the details map
                    let details = responseObject.getDetails();
                    if (details != null) {
                        Array.from(details.keys()).forEach(key => {
                            console.log(key + ": " + details.get(key));
                        });
                    }
                    //Get the Message
                    console.log("Message: " + responseObject.getMessage().getValue());
                }
            }
        }
    }
}
exports.Taxes = Taxes;
//# sourceMappingURL=tax.js.map