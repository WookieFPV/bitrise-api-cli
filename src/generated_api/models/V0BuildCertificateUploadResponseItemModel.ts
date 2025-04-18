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
 * @interface V0BuildCertificateUploadResponseItemModel
 */
export interface V0BuildCertificateUploadResponseItemModel {
    /**
     * 
     * @type {string}
     * @memberof V0BuildCertificateUploadResponseItemModel
     */
    certificatePassword?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V0BuildCertificateUploadResponseItemModel
     */
    isExpose?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V0BuildCertificateUploadResponseItemModel
     */
    isProtected?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V0BuildCertificateUploadResponseItemModel
     */
    processed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V0BuildCertificateUploadResponseItemModel
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof V0BuildCertificateUploadResponseItemModel
     */
    uploadFileName?: string;
    /**
     * 
     * @type {number}
     * @memberof V0BuildCertificateUploadResponseItemModel
     */
    uploadFileSize?: number;
    /**
     * 
     * @type {string}
     * @memberof V0BuildCertificateUploadResponseItemModel
     */
    uploadUrl?: string;
}

/**
 * Check if a given object implements the V0BuildCertificateUploadResponseItemModel interface.
 */
export function instanceOfV0BuildCertificateUploadResponseItemModel(value: object): value is V0BuildCertificateUploadResponseItemModel {
    return true;
}

export function V0BuildCertificateUploadResponseItemModelFromJSON(json: any): V0BuildCertificateUploadResponseItemModel {
    return V0BuildCertificateUploadResponseItemModelFromJSONTyped(json, false);
}

export function V0BuildCertificateUploadResponseItemModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0BuildCertificateUploadResponseItemModel {
    if (json == null) {
        return json;
    }
    return {
        
        'certificatePassword': json['certificate_password'] == null ? undefined : json['certificate_password'],
        'isExpose': json['is_expose'] == null ? undefined : json['is_expose'],
        'isProtected': json['is_protected'] == null ? undefined : json['is_protected'],
        'processed': json['processed'] == null ? undefined : json['processed'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'uploadFileName': json['upload_file_name'] == null ? undefined : json['upload_file_name'],
        'uploadFileSize': json['upload_file_size'] == null ? undefined : json['upload_file_size'],
        'uploadUrl': json['upload_url'] == null ? undefined : json['upload_url'],
    };
}

export function V0BuildCertificateUploadResponseItemModelToJSON(json: any): V0BuildCertificateUploadResponseItemModel {
    return V0BuildCertificateUploadResponseItemModelToJSONTyped(json, false);
}

export function V0BuildCertificateUploadResponseItemModelToJSONTyped(value?: V0BuildCertificateUploadResponseItemModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'certificate_password': value['certificatePassword'],
        'is_expose': value['isExpose'],
        'is_protected': value['isProtected'],
        'processed': value['processed'],
        'slug': value['slug'],
        'upload_file_name': value['uploadFileName'],
        'upload_file_size': value['uploadFileSize'],
        'upload_url': value['uploadUrl'],
    };
}

