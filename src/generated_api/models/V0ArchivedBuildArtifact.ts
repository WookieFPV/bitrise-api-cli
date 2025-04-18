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
 * @interface V0ArchivedBuildArtifact
 */
export interface V0ArchivedBuildArtifact {
    /**
     * 
     * @type {{ [key: string]: any; }}
     * @memberof V0ArchivedBuildArtifact
     */
    artifactMeta?: { [key: string]: any; };
    /**
     * 
     * @type {string}
     * @memberof V0ArchivedBuildArtifact
     */
    artifactType?: string;
    /**
     * 
     * @type {string}
     * @memberof V0ArchivedBuildArtifact
     */
    createdAt?: string;
    /**
     * 
     * @type {number}
     * @memberof V0ArchivedBuildArtifact
     */
    fileSizeBytes?: number;
    /**
     * 
     * @type {string}
     * @memberof V0ArchivedBuildArtifact
     */
    id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof V0ArchivedBuildArtifact
     */
    isPublicPageEnabled?: boolean;
    /**
     * 
     * @type {string}
     * @memberof V0ArchivedBuildArtifact
     */
    publicPageToken?: string;
    /**
     * 
     * @type {string}
     * @memberof V0ArchivedBuildArtifact
     */
    title?: string;
}

/**
 * Check if a given object implements the V0ArchivedBuildArtifact interface.
 */
export function instanceOfV0ArchivedBuildArtifact(value: object): value is V0ArchivedBuildArtifact {
    return true;
}

export function V0ArchivedBuildArtifactFromJSON(json: any): V0ArchivedBuildArtifact {
    return V0ArchivedBuildArtifactFromJSONTyped(json, false);
}

export function V0ArchivedBuildArtifactFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0ArchivedBuildArtifact {
    if (json == null) {
        return json;
    }
    return {
        
        'artifactMeta': json['artifact_meta'] == null ? undefined : json['artifact_meta'],
        'artifactType': json['artifact_type'] == null ? undefined : json['artifact_type'],
        'createdAt': json['created_at'] == null ? undefined : json['created_at'],
        'fileSizeBytes': json['file_size_bytes'] == null ? undefined : json['file_size_bytes'],
        'id': json['id'] == null ? undefined : json['id'],
        'isPublicPageEnabled': json['is_public_page_enabled'] == null ? undefined : json['is_public_page_enabled'],
        'publicPageToken': json['public_page_token'] == null ? undefined : json['public_page_token'],
        'title': json['title'] == null ? undefined : json['title'],
    };
}

export function V0ArchivedBuildArtifactToJSON(json: any): V0ArchivedBuildArtifact {
    return V0ArchivedBuildArtifactToJSONTyped(json, false);
}

export function V0ArchivedBuildArtifactToJSONTyped(value?: V0ArchivedBuildArtifact | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'artifact_meta': value['artifactMeta'],
        'artifact_type': value['artifactType'],
        'created_at': value['createdAt'],
        'file_size_bytes': value['fileSizeBytes'],
        'id': value['id'],
        'is_public_page_enabled': value['isPublicPageEnabled'],
        'public_page_token': value['publicPageToken'],
        'title': value['title'],
    };
}

