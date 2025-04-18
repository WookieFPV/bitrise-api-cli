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
import type { V0ArtifactResponseItemModel } from './V0ArtifactResponseItemModel';
import {
    V0ArtifactResponseItemModelFromJSON,
    V0ArtifactResponseItemModelFromJSONTyped,
    V0ArtifactResponseItemModelToJSON,
    V0ArtifactResponseItemModelToJSONTyped,
} from './V0ArtifactResponseItemModel';

/**
 * 
 * @export
 * @interface V0ArtifactShowResponseModel
 */
export interface V0ArtifactShowResponseModel {
    /**
     * 
     * @type {V0ArtifactResponseItemModel}
     * @memberof V0ArtifactShowResponseModel
     */
    data?: V0ArtifactResponseItemModel;
}

/**
 * Check if a given object implements the V0ArtifactShowResponseModel interface.
 */
export function instanceOfV0ArtifactShowResponseModel(value: object): value is V0ArtifactShowResponseModel {
    return true;
}

export function V0ArtifactShowResponseModelFromJSON(json: any): V0ArtifactShowResponseModel {
    return V0ArtifactShowResponseModelFromJSONTyped(json, false);
}

export function V0ArtifactShowResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0ArtifactShowResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'data': json['data'] == null ? undefined : V0ArtifactResponseItemModelFromJSON(json['data']),
    };
}

export function V0ArtifactShowResponseModelToJSON(json: any): V0ArtifactShowResponseModel {
    return V0ArtifactShowResponseModelToJSONTyped(json, false);
}

export function V0ArtifactShowResponseModelToJSONTyped(value?: V0ArtifactShowResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': V0ArtifactResponseItemModelToJSON(value['data']),
    };
}

