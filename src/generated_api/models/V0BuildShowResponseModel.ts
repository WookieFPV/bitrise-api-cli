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
import type { V0BuildResponseItemModel } from './V0BuildResponseItemModel';
import {
    V0BuildResponseItemModelFromJSON,
    V0BuildResponseItemModelFromJSONTyped,
    V0BuildResponseItemModelToJSON,
    V0BuildResponseItemModelToJSONTyped,
} from './V0BuildResponseItemModel';

/**
 * 
 * @export
 * @interface V0BuildShowResponseModel
 */
export interface V0BuildShowResponseModel {
    /**
     * 
     * @type {V0BuildResponseItemModel}
     * @memberof V0BuildShowResponseModel
     */
    data?: V0BuildResponseItemModel;
}

/**
 * Check if a given object implements the V0BuildShowResponseModel interface.
 */
export function instanceOfV0BuildShowResponseModel(value: object): value is V0BuildShowResponseModel {
    return true;
}

export function V0BuildShowResponseModelFromJSON(json: any): V0BuildShowResponseModel {
    return V0BuildShowResponseModelFromJSONTyped(json, false);
}

export function V0BuildShowResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0BuildShowResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : V0BuildResponseItemModelFromJSON(json['data']),
    };
}

export function V0BuildShowResponseModelToJSON(json: any): V0BuildShowResponseModel {
    return V0BuildShowResponseModelToJSONTyped(json, false);
}

export function V0BuildShowResponseModelToJSONTyped(value?: V0BuildShowResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': V0BuildResponseItemModelToJSON(value['data']),
    };
}

