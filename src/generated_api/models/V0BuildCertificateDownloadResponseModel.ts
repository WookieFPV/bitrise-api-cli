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
import type { V0BuildCertificateDownloadResponseItemModel } from './V0BuildCertificateDownloadResponseItemModel';
import {
    V0BuildCertificateDownloadResponseItemModelFromJSON,
    V0BuildCertificateDownloadResponseItemModelFromJSONTyped,
    V0BuildCertificateDownloadResponseItemModelToJSON,
    V0BuildCertificateDownloadResponseItemModelToJSONTyped,
} from './V0BuildCertificateDownloadResponseItemModel';

/**
 * 
 * @export
 * @interface V0BuildCertificateDownloadResponseModel
 */
export interface V0BuildCertificateDownloadResponseModel {
    /**
     * 
     * @type {V0BuildCertificateDownloadResponseItemModel}
     * @memberof V0BuildCertificateDownloadResponseModel
     */
    data?: V0BuildCertificateDownloadResponseItemModel;
}

/**
 * Check if a given object implements the V0BuildCertificateDownloadResponseModel interface.
 */
export function instanceOfV0BuildCertificateDownloadResponseModel(value: object): value is V0BuildCertificateDownloadResponseModel {
    return true;
}

export function V0BuildCertificateDownloadResponseModelFromJSON(json: any): V0BuildCertificateDownloadResponseModel {
    return V0BuildCertificateDownloadResponseModelFromJSONTyped(json, false);
}

export function V0BuildCertificateDownloadResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0BuildCertificateDownloadResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : V0BuildCertificateDownloadResponseItemModelFromJSON(json['data']),
    };
}

export function V0BuildCertificateDownloadResponseModelToJSON(json: any): V0BuildCertificateDownloadResponseModel {
    return V0BuildCertificateDownloadResponseModelToJSONTyped(json, false);
}

export function V0BuildCertificateDownloadResponseModelToJSONTyped(value?: V0BuildCertificateDownloadResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': V0BuildCertificateDownloadResponseItemModelToJSON(value['data']),
    };
}

