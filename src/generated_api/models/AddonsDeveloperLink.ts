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
 * @interface AddonsDeveloperLink
 */
export interface AddonsDeveloperLink {
    /**
     * 
     * @type {string}
     * @memberof AddonsDeveloperLink
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof AddonsDeveloperLink
     */
    url?: string;
}

/**
 * Check if a given object implements the AddonsDeveloperLink interface.
 */
export function instanceOfAddonsDeveloperLink(value: object): value is AddonsDeveloperLink {
    return true;
}

export function AddonsDeveloperLinkFromJSON(json: any): AddonsDeveloperLink {
    return AddonsDeveloperLinkFromJSONTyped(json, false);
}

export function AddonsDeveloperLinkFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddonsDeveloperLink {
    if (json == null) {
        return json;
    }
    return {
        
        'title': json['title'] == null ? undefined : json['title'],
        'url': json['url'] == null ? undefined : json['url'],
    };
}

export function AddonsDeveloperLinkToJSON(json: any): AddonsDeveloperLink {
    return AddonsDeveloperLinkToJSONTyped(json, false);
}

export function AddonsDeveloperLinkToJSONTyped(value?: AddonsDeveloperLink | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'title': value['title'],
        'url': value['url'],
    };
}

