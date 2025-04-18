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
import type { V0BuildRequestResponseItemModel } from './V0BuildRequestResponseItemModel';
import {
    V0BuildRequestResponseItemModelFromJSON,
    V0BuildRequestResponseItemModelFromJSONTyped,
    V0BuildRequestResponseItemModelToJSON,
    V0BuildRequestResponseItemModelToJSONTyped,
} from './V0BuildRequestResponseItemModel';

/**
 * 
 * @export
 * @interface V0BuildRequestUpdateResponseModel
 */
export interface V0BuildRequestUpdateResponseModel {
    /**
     * 
     * @type {V0BuildRequestResponseItemModel}
     * @memberof V0BuildRequestUpdateResponseModel
     */
    data?: V0BuildRequestResponseItemModel;
}

/**
 * Check if a given object implements the V0BuildRequestUpdateResponseModel interface.
 */
export function instanceOfV0BuildRequestUpdateResponseModel(value: object): value is V0BuildRequestUpdateResponseModel {
    return true;
}

export function V0BuildRequestUpdateResponseModelFromJSON(json: any): V0BuildRequestUpdateResponseModel {
    return V0BuildRequestUpdateResponseModelFromJSONTyped(json, false);
}

export function V0BuildRequestUpdateResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0BuildRequestUpdateResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : V0BuildRequestResponseItemModelFromJSON(json['data']),
    };
}

export function V0BuildRequestUpdateResponseModelToJSON(json: any): V0BuildRequestUpdateResponseModel {
    return V0BuildRequestUpdateResponseModelToJSONTyped(json, false);
}

export function V0BuildRequestUpdateResponseModelToJSONTyped(value?: V0BuildRequestUpdateResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': V0BuildRequestResponseItemModelToJSON(value['data']),
    };
}

