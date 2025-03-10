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
 * @interface AppSecretCreateRequest
 */
export interface AppSecretCreateRequest {
    /**
     * 
     * @type {boolean}
     * @memberof AppSecretCreateRequest
     */
    expandInStepInputs?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppSecretCreateRequest
     */
    isExposedForPullRequests?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof AppSecretCreateRequest
     */
    isProtected?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AppSecretCreateRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof AppSecretCreateRequest
     */
    value: string;
}

/**
 * Check if a given object implements the AppSecretCreateRequest interface.
 */
export function instanceOfAppSecretCreateRequest(value: object): value is AppSecretCreateRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function AppSecretCreateRequestFromJSON(json: any): AppSecretCreateRequest {
    return AppSecretCreateRequestFromJSONTyped(json, false);
}

export function AppSecretCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AppSecretCreateRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'expandInStepInputs': json['expand_in_step_inputs'] == null ? undefined : json['expand_in_step_inputs'],
        'isExposedForPullRequests': json['is_exposed_for_pull_requests'] == null ? undefined : json['is_exposed_for_pull_requests'],
        'isProtected': json['is_protected'] == null ? undefined : json['is_protected'],
        'name': json['name'],
        'value': json['value'],
    };
}

export function AppSecretCreateRequestToJSON(json: any): AppSecretCreateRequest {
    return AppSecretCreateRequestToJSONTyped(json, false);
}

export function AppSecretCreateRequestToJSONTyped(value?: AppSecretCreateRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'expand_in_step_inputs': value['expandInStepInputs'],
        'is_exposed_for_pull_requests': value['isExposedForPullRequests'],
        'is_protected': value['isProtected'],
        'name': value['name'],
        'value': value['value'],
    };
}

