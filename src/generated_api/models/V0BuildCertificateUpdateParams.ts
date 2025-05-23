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
 * @interface V0BuildCertificateUpdateParams
 */
export interface V0BuildCertificateUpdateParams {
    /**
     * 
     * @type {string}
     * @memberof V0BuildCertificateUpdateParams
     */
    certificatePassword?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V0BuildCertificateUpdateParams
     */
    isExpose?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V0BuildCertificateUpdateParams
     */
    isProtected?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V0BuildCertificateUpdateParams
     */
    processed?: boolean;
}

/**
 * Check if a given object implements the V0BuildCertificateUpdateParams interface.
 */
export function instanceOfV0BuildCertificateUpdateParams(value: object): value is V0BuildCertificateUpdateParams {
    return true;
}

export function V0BuildCertificateUpdateParamsFromJSON(json: any): V0BuildCertificateUpdateParams {
    return V0BuildCertificateUpdateParamsFromJSONTyped(json, false);
}

export function V0BuildCertificateUpdateParamsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0BuildCertificateUpdateParams {
    if (json == null) {
        return json;
    }
    return {
        
        'certificatePassword': json['certificate_password'] == null ? undefined : json['certificate_password'],
        'isExpose': json['is_expose'] == null ? undefined : json['is_expose'],
        'isProtected': json['is_protected'] == null ? undefined : json['is_protected'],
        'processed': json['processed'] == null ? undefined : json['processed'],
    };
}

export function V0BuildCertificateUpdateParamsToJSON(json: any): V0BuildCertificateUpdateParams {
    return V0BuildCertificateUpdateParamsToJSONTyped(json, false);
}

export function V0BuildCertificateUpdateParamsToJSONTyped(value?: V0BuildCertificateUpdateParams | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'certificate_password': value['certificatePassword'],
        'is_expose': value['isExpose'],
        'is_protected': value['isProtected'],
        'processed': value['processed'],
    };
}

