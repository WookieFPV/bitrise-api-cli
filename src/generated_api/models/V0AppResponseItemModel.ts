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
import type { V0OwnerAccountResponseModel } from './V0OwnerAccountResponseModel';
import {
    V0OwnerAccountResponseModelFromJSON,
    V0OwnerAccountResponseModelFromJSONTyped,
    V0OwnerAccountResponseModelToJSON,
    V0OwnerAccountResponseModelToJSONTyped,
} from './V0OwnerAccountResponseModel';

/**
 * 
 * @export
 * @interface V0AppResponseItemModel
 */
export interface V0AppResponseItemModel {
    /**
     * 
     * @type {string}
     * @memberof V0AppResponseItemModel
     */
    avatarUrl?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V0AppResponseItemModel
     */
    isDisabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V0AppResponseItemModel
     */
    isGithubChecksEnabled?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof V0AppResponseItemModel
     */
    isPublic?: boolean;
    /**
     * 
     * @type {V0OwnerAccountResponseModel}
     * @memberof V0AppResponseItemModel
     */
    owner?: V0OwnerAccountResponseModel;
    /**
     * 
     * @type {string}
     * @memberof V0AppResponseItemModel
     */
    projectId?: string;
    /**
     * 
     * @type {string}
     * @memberof V0AppResponseItemModel
     */
    projectType?: string;
    /**
     * 
     * @type {string}
     * @memberof V0AppResponseItemModel
     */
    provider?: string;
    /**
     * 
     * @type {string}
     * @memberof V0AppResponseItemModel
     */
    repoOwner?: string;
    /**
     * 
     * @type {string}
     * @memberof V0AppResponseItemModel
     */
    repoSlug?: string;
    /**
     * 
     * @type {string}
     * @memberof V0AppResponseItemModel
     */
    repoUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof V0AppResponseItemModel
     */
    slug?: string;
    /**
     * 
     * @type {number}
     * @memberof V0AppResponseItemModel
     */
    status?: number;
    /**
     * 
     * @type {string}
     * @memberof V0AppResponseItemModel
     */
    title?: string;
}

/**
 * Check if a given object implements the V0AppResponseItemModel interface.
 */
export function instanceOfV0AppResponseItemModel(value: object): value is V0AppResponseItemModel {
    return true;
}

export function V0AppResponseItemModelFromJSON(json: any): V0AppResponseItemModel {
    return V0AppResponseItemModelFromJSONTyped(json, false);
}

export function V0AppResponseItemModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0AppResponseItemModel {
    if (json == null) {
        return json;
    }
    return {
        
        'avatarUrl': json['avatar_url'] == null ? undefined : json['avatar_url'],
        'isDisabled': json['is_disabled'] == null ? undefined : json['is_disabled'],
        'isGithubChecksEnabled': json['is_github_checks_enabled'] == null ? undefined : json['is_github_checks_enabled'],
        'isPublic': json['is_public'] == null ? undefined : json['is_public'],
        'owner': json['owner'] == null ? undefined : V0OwnerAccountResponseModelFromJSON(json['owner']),
        'projectId': json['project_id'] == null ? undefined : json['project_id'],
        'projectType': json['project_type'] == null ? undefined : json['project_type'],
        'provider': json['provider'] == null ? undefined : json['provider'],
        'repoOwner': json['repo_owner'] == null ? undefined : json['repo_owner'],
        'repoSlug': json['repo_slug'] == null ? undefined : json['repo_slug'],
        'repoUrl': json['repo_url'] == null ? undefined : json['repo_url'],
        'slug': json['slug'] == null ? undefined : json['slug'],
        'status': json['status'] == null ? undefined : json['status'],
        'title': json['title'] == null ? undefined : json['title'],
    };
}

export function V0AppResponseItemModelToJSON(json: any): V0AppResponseItemModel {
    return V0AppResponseItemModelToJSONTyped(json, false);
}

export function V0AppResponseItemModelToJSONTyped(value?: V0AppResponseItemModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'avatar_url': value['avatarUrl'],
        'is_disabled': value['isDisabled'],
        'is_github_checks_enabled': value['isGithubChecksEnabled'],
        'is_public': value['isPublic'],
        'owner': V0OwnerAccountResponseModelToJSON(value['owner']),
        'project_id': value['projectId'],
        'project_type': value['projectType'],
        'provider': value['provider'],
        'repo_owner': value['repoOwner'],
        'repo_slug': value['repoSlug'],
        'repo_url': value['repoUrl'],
        'slug': value['slug'],
        'status': value['status'],
        'title': value['title'],
    };
}

