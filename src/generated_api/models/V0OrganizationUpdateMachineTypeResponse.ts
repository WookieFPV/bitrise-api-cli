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
import type { V0OrganizationUpdateMachineTypeResponseErrorsInner } from './V0OrganizationUpdateMachineTypeResponseErrorsInner';
import {
    V0OrganizationUpdateMachineTypeResponseErrorsInnerFromJSON,
    V0OrganizationUpdateMachineTypeResponseErrorsInnerFromJSONTyped,
    V0OrganizationUpdateMachineTypeResponseErrorsInnerToJSON,
    V0OrganizationUpdateMachineTypeResponseErrorsInnerToJSONTyped,
} from './V0OrganizationUpdateMachineTypeResponseErrorsInner';

/**
 * 
 * @export
 * @interface V0OrganizationUpdateMachineTypeResponse
 */
export interface V0OrganizationUpdateMachineTypeResponse {
    /**
     * 
     * @type {Array<V0OrganizationUpdateMachineTypeResponseErrorsInner>}
     * @memberof V0OrganizationUpdateMachineTypeResponse
     */
    errors?: Array<V0OrganizationUpdateMachineTypeResponseErrorsInner>;
    /**
     * The result of the migration
     * @type {string}
     * @memberof V0OrganizationUpdateMachineTypeResponse
     */
    message?: string;
    /**
     * The migrated apps' identifiers in the following format "#{app.title} (#{app.slug})"
     * @type {Array<string>}
     * @memberof V0OrganizationUpdateMachineTypeResponse
     */
    migratedApps?: Array<string>;
}

/**
 * Check if a given object implements the V0OrganizationUpdateMachineTypeResponse interface.
 */
export function instanceOfV0OrganizationUpdateMachineTypeResponse(value: object): value is V0OrganizationUpdateMachineTypeResponse {
    return true;
}

export function V0OrganizationUpdateMachineTypeResponseFromJSON(json: any): V0OrganizationUpdateMachineTypeResponse {
    return V0OrganizationUpdateMachineTypeResponseFromJSONTyped(json, false);
}

export function V0OrganizationUpdateMachineTypeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0OrganizationUpdateMachineTypeResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'errors': json['errors'] == null ? undefined : ((json['errors'] as Array<any>).map(V0OrganizationUpdateMachineTypeResponseErrorsInnerFromJSON)),
        'message': json['message'] == null ? undefined : json['message'],
        'migratedApps': json['migrated_apps'] == null ? undefined : json['migrated_apps'],
    };
}

export function V0OrganizationUpdateMachineTypeResponseToJSON(json: any): V0OrganizationUpdateMachineTypeResponse {
    return V0OrganizationUpdateMachineTypeResponseToJSONTyped(json, false);
}

export function V0OrganizationUpdateMachineTypeResponseToJSONTyped(value?: V0OrganizationUpdateMachineTypeResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'errors': value['errors'] == null ? undefined : ((value['errors'] as Array<any>).map(V0OrganizationUpdateMachineTypeResponseErrorsInnerToJSON)),
        'message': value['message'],
        'migrated_apps': value['migratedApps'],
    };
}

