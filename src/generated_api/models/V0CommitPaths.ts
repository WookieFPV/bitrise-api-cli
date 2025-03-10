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
 * @interface V0CommitPaths
 */
export interface V0CommitPaths {
    /**
     * 
     * @type {Array<string>}
     * @memberof V0CommitPaths
     */
    added?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof V0CommitPaths
     */
    modified?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof V0CommitPaths
     */
    removed?: Array<string>;
}

/**
 * Check if a given object implements the V0CommitPaths interface.
 */
export function instanceOfV0CommitPaths(value: object): value is V0CommitPaths {
    return true;
}

export function V0CommitPathsFromJSON(json: any): V0CommitPaths {
    return V0CommitPathsFromJSONTyped(json, false);
}

export function V0CommitPathsFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0CommitPaths {
    if (json == null) {
        return json;
    }
    return {
        
        'added': json['added'] == null ? undefined : json['added'],
        'modified': json['modified'] == null ? undefined : json['modified'],
        'removed': json['removed'] == null ? undefined : json['removed'],
    };
}

export function V0CommitPathsToJSON(json: any): V0CommitPaths {
    return V0CommitPathsToJSONTyped(json, false);
}

export function V0CommitPathsToJSONTyped(value?: V0CommitPaths | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'added': value['added'],
        'modified': value['modified'],
        'removed': value['removed'],
    };
}

