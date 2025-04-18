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
 * @interface V0BuildRequestResponseItemModel
 */
export interface V0BuildRequestResponseItemModel {
    /**
     * 
     * @type {object}
     * @memberof V0BuildRequestResponseItemModel
     */
    buildParams?: object;
    /**
     * 
     * @type {string}
     * @memberof V0BuildRequestResponseItemModel
     */
    createdAt?: string;
    /**
     * 
     * @type {string}
     * @memberof V0BuildRequestResponseItemModel
     */
    pullRequestUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof V0BuildRequestResponseItemModel
     */
    slug?: string;
}

/**
 * Check if a given object implements the V0BuildRequestResponseItemModel interface.
 */
export function instanceOfV0BuildRequestResponseItemModel(value: object): value is V0BuildRequestResponseItemModel {
    return true;
}

export function V0BuildRequestResponseItemModelFromJSON(json: any): V0BuildRequestResponseItemModel {
    return V0BuildRequestResponseItemModelFromJSONTyped(json, false);
}

export function V0BuildRequestResponseItemModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0BuildRequestResponseItemModel {
    if (json == null) {
        return json;
    }
    return {
        
        'buildParams': json['build_params'] == null ? undefined : json['build_params'],
        'createdAt': json['created_at'] == null ? undefined : json['created_at'],
        'pullRequestUrl': json['pull_request_url'] == null ? undefined : json['pull_request_url'],
        'slug': json['slug'] == null ? undefined : json['slug'],
    };
}

export function V0BuildRequestResponseItemModelToJSON(json: any): V0BuildRequestResponseItemModel {
    return V0BuildRequestResponseItemModelToJSONTyped(json, false);
}

export function V0BuildRequestResponseItemModelToJSONTyped(value?: V0BuildRequestResponseItemModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'build_params': value['buildParams'],
        'created_at': value['createdAt'],
        'pull_request_url': value['pullRequestUrl'],
        'slug': value['slug'],
    };
}

