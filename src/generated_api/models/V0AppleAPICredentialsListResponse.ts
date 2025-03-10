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
import type { V0AppleAPICredentialResponseItem } from './V0AppleAPICredentialResponseItem';
import {
    V0AppleAPICredentialResponseItemFromJSON,
    V0AppleAPICredentialResponseItemFromJSONTyped,
    V0AppleAPICredentialResponseItemToJSON,
    V0AppleAPICredentialResponseItemToJSONTyped,
} from './V0AppleAPICredentialResponseItem';

/**
 * 
 * @export
 * @interface V0AppleAPICredentialsListResponse
 */
export interface V0AppleAPICredentialsListResponse {
    /**
     * 
     * @type {Array<V0AppleAPICredentialResponseItem>}
     * @memberof V0AppleAPICredentialsListResponse
     */
    data?: Array<V0AppleAPICredentialResponseItem>;
}

/**
 * Check if a given object implements the V0AppleAPICredentialsListResponse interface.
 */
export function instanceOfV0AppleAPICredentialsListResponse(value: object): value is V0AppleAPICredentialsListResponse {
    return true;
}

export function V0AppleAPICredentialsListResponseFromJSON(json: any): V0AppleAPICredentialsListResponse {
    return V0AppleAPICredentialsListResponseFromJSONTyped(json, false);
}

export function V0AppleAPICredentialsListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0AppleAPICredentialsListResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(V0AppleAPICredentialResponseItemFromJSON)),
    };
}

export function V0AppleAPICredentialsListResponseToJSON(json: any): V0AppleAPICredentialsListResponse {
    return V0AppleAPICredentialsListResponseToJSONTyped(json, false);
}

export function V0AppleAPICredentialsListResponseToJSONTyped(value?: V0AppleAPICredentialsListResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(V0AppleAPICredentialResponseItemToJSON)),
    };
}

