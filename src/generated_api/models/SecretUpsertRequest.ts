/* tslint:disable */
/* eslint-disable */
/**
 * Bitrise API
 * Official REST API for Bitrise.io
 *
 * The version of the OpenAPI document: 0.1
 * Contact: letsconnect@bitrise.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SecretUpsertRequest
 */
export interface SecretUpsertRequest {
    /**
     * Replace variable in inputs? https://devcenter.bitrise.io/en/references/steps-reference/step-inputs-reference.html#step-input-properties
     * @type {boolean}
     * @memberof SecretUpsertRequest
     */
    expandInStepInputs?: boolean;
    /**
     * Expose for Pull Requests?
     * @type {boolean}
     * @memberof SecretUpsertRequest
     */
    isExposedForPullRequests?: boolean;
    /**
     * Secret marked as protected?
     * @type {boolean}
     * @memberof SecretUpsertRequest
     */
    isProtected?: boolean;
    /**
     * Value of the secret
     * @type {string}
     * @memberof SecretUpsertRequest
     */
    value?: string;
}

/**
 * Check if a given object implements the SecretUpsertRequest interface.
 */
export function instanceOfSecretUpsertRequest(value: object): value is SecretUpsertRequest {
    return true;
}

export function SecretUpsertRequestFromJSON(json: any): SecretUpsertRequest {
    return SecretUpsertRequestFromJSONTyped(json, false);
}

export function SecretUpsertRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SecretUpsertRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'expandInStepInputs': json['expand_in_step_inputs'] == null ? undefined : json['expand_in_step_inputs'],
        'isExposedForPullRequests': json['is_exposed_for_pull_requests'] == null ? undefined : json['is_exposed_for_pull_requests'],
        'isProtected': json['is_protected'] == null ? undefined : json['is_protected'],
        'value': json['value'] == null ? undefined : json['value'],
    };
}

export function SecretUpsertRequestToJSON(json: any): SecretUpsertRequest {
    return SecretUpsertRequestToJSONTyped(json, false);
}

export function SecretUpsertRequestToJSONTyped(value?: SecretUpsertRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'expand_in_step_inputs': value['expandInStepInputs'],
        'is_exposed_for_pull_requests': value['isExposedForPullRequests'],
        'is_protected': value['isProtected'],
        'value': value['value'],
    };
}

