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
 * @interface V0BuildCertificateUploadParams
 */
export interface V0BuildCertificateUploadParams {
    /**
     * 
     * @type {string}
     * @memberof V0BuildCertificateUploadParams
     */
    uploadFileName: string;
    /**
     * 
     * @type {number}
     * @memberof V0BuildCertificateUploadParams
     */
    uploadFileSize: number;
}

/**
 * Check if a given object implements the V0BuildCertificateUploadParams interface.
 */
export function instanceOfV0BuildCertificateUploadParams(value: object): value is V0BuildCertificateUploadParams {
    if (!('uploadFileName' in value) || value['uploadFileName'] === undefined) return false;
    if (!('uploadFileSize' in value) || value['uploadFileSize'] === undefined) return false;
    return true;
}

export function V0BuildCertificateUploadParamsFromJSON(json: any): V0BuildCertificateUploadParams {
    return V0BuildCertificateUploadParamsFromJSONTyped(json, false);
}

export function V0BuildCertificateUploadParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0BuildCertificateUploadParams {
    if (json == null) {
        return json;
    }
    return {
        
        'uploadFileName': json['upload_file_name'],
        'uploadFileSize': json['upload_file_size'],
    };
}

export function V0BuildCertificateUploadParamsToJSON(json: any): V0BuildCertificateUploadParams {
    return V0BuildCertificateUploadParamsToJSONTyped(json, false);
}

export function V0BuildCertificateUploadParamsToJSONTyped(value?: V0BuildCertificateUploadParams | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'upload_file_name': value['uploadFileName'],
        'upload_file_size': value['uploadFileSize'],
    };
}

