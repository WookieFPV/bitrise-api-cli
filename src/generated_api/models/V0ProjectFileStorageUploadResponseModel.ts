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
import type { V0ProjectFileStorageUploadResponseItemModel } from './V0ProjectFileStorageUploadResponseItemModel';
import {
    V0ProjectFileStorageUploadResponseItemModelFromJSON,
    V0ProjectFileStorageUploadResponseItemModelFromJSONTyped,
    V0ProjectFileStorageUploadResponseItemModelToJSON,
    V0ProjectFileStorageUploadResponseItemModelToJSONTyped,
} from './V0ProjectFileStorageUploadResponseItemModel';

/**
 * 
 * @export
 * @interface V0ProjectFileStorageUploadResponseModel
 */
export interface V0ProjectFileStorageUploadResponseModel {
    /**
     * 
     * @type {V0ProjectFileStorageUploadResponseItemModel}
     * @memberof V0ProjectFileStorageUploadResponseModel
     */
    data?: V0ProjectFileStorageUploadResponseItemModel;
}

/**
 * Check if a given object implements the V0ProjectFileStorageUploadResponseModel interface.
 */
export function instanceOfV0ProjectFileStorageUploadResponseModel(value: object): value is V0ProjectFileStorageUploadResponseModel {
    return true;
}

export function V0ProjectFileStorageUploadResponseModelFromJSON(json: any): V0ProjectFileStorageUploadResponseModel {
    return V0ProjectFileStorageUploadResponseModelFromJSONTyped(json, false);
}

export function V0ProjectFileStorageUploadResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0ProjectFileStorageUploadResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : V0ProjectFileStorageUploadResponseItemModelFromJSON(json['data']),
    };
}

export function V0ProjectFileStorageUploadResponseModelToJSON(json: any): V0ProjectFileStorageUploadResponseModel {
    return V0ProjectFileStorageUploadResponseModelToJSONTyped(json, false);
}

export function V0ProjectFileStorageUploadResponseModelToJSONTyped(value?: V0ProjectFileStorageUploadResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': V0ProjectFileStorageUploadResponseItemModelToJSON(value['data']),
    };
}

