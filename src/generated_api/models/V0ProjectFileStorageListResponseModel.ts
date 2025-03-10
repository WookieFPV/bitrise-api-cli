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
import type { V0ProjectFileStorageResponseItemModel } from './V0ProjectFileStorageResponseItemModel';
import {
    V0ProjectFileStorageResponseItemModelFromJSON,
    V0ProjectFileStorageResponseItemModelFromJSONTyped,
    V0ProjectFileStorageResponseItemModelToJSON,
    V0ProjectFileStorageResponseItemModelToJSONTyped,
} from './V0ProjectFileStorageResponseItemModel';
import type { V0PagingResponseModel } from './V0PagingResponseModel';
import {
    V0PagingResponseModelFromJSON,
    V0PagingResponseModelFromJSONTyped,
    V0PagingResponseModelToJSON,
    V0PagingResponseModelToJSONTyped,
} from './V0PagingResponseModel';

/**
 * 
 * @export
 * @interface V0ProjectFileStorageListResponseModel
 */
export interface V0ProjectFileStorageListResponseModel {
    /**
     * 
     * @type {Array<V0ProjectFileStorageResponseItemModel>}
     * @memberof V0ProjectFileStorageListResponseModel
     */
    data?: Array<V0ProjectFileStorageResponseItemModel>;
    /**
     * pagination
     * @type {V0PagingResponseModel}
     * @memberof V0ProjectFileStorageListResponseModel
     */
    paging?: V0PagingResponseModel;
}

/**
 * Check if a given object implements the V0ProjectFileStorageListResponseModel interface.
 */
export function instanceOfV0ProjectFileStorageListResponseModel(value: object): value is V0ProjectFileStorageListResponseModel {
    return true;
}

export function V0ProjectFileStorageListResponseModelFromJSON(json: any): V0ProjectFileStorageListResponseModel {
    return V0ProjectFileStorageListResponseModelFromJSONTyped(json, false);
}

export function V0ProjectFileStorageListResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0ProjectFileStorageListResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : ((json['data'] as Array<any>).map(V0ProjectFileStorageResponseItemModelFromJSON)),
        'paging': json['paging'] == null ? undefined : V0PagingResponseModelFromJSON(json['paging']),
    };
}

export function V0ProjectFileStorageListResponseModelToJSON(json: any): V0ProjectFileStorageListResponseModel {
    return V0ProjectFileStorageListResponseModelToJSONTyped(json, false);
}

export function V0ProjectFileStorageListResponseModelToJSONTyped(value?: V0ProjectFileStorageListResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': value['data'] == null ? undefined : ((value['data'] as Array<any>).map(V0ProjectFileStorageResponseItemModelToJSON)),
        'paging': V0PagingResponseModelToJSON(value['paging']),
    };
}

