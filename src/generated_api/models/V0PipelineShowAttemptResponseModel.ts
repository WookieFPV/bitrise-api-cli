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
 * @interface V0PipelineShowAttemptResponseModel
 */
export interface V0PipelineShowAttemptResponseModel {
    /**
     * 
     * @type {string}
     * @memberof V0PipelineShowAttemptResponseModel
     */
    id?: string;
    /**
     * 
     * @type {number}
     * @memberof V0PipelineShowAttemptResponseModel
     */
    numberInPipelineBuildScope?: number;
    /**
     * 
     * @type {string}
     * @memberof V0PipelineShowAttemptResponseModel
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof V0PipelineShowAttemptResponseModel
     */
    triggeredAt?: string;
}

/**
 * Check if a given object implements the V0PipelineShowAttemptResponseModel interface.
 */
export function instanceOfV0PipelineShowAttemptResponseModel(value: object): value is V0PipelineShowAttemptResponseModel {
    return true;
}

export function V0PipelineShowAttemptResponseModelFromJSON(json: any): V0PipelineShowAttemptResponseModel {
    return V0PipelineShowAttemptResponseModelFromJSONTyped(json, false);
}

export function V0PipelineShowAttemptResponseModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0PipelineShowAttemptResponseModel {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'numberInPipelineBuildScope': json['number_in_pipeline_build_scope'] == null ? undefined : json['number_in_pipeline_build_scope'],
        'status': json['status'] == null ? undefined : json['status'],
        'triggeredAt': json['triggered_at'] == null ? undefined : json['triggered_at'],
    };
}

export function V0PipelineShowAttemptResponseModelToJSON(json: any): V0PipelineShowAttemptResponseModel {
    return V0PipelineShowAttemptResponseModelToJSONTyped(json, false);
}

export function V0PipelineShowAttemptResponseModelToJSONTyped(value?: V0PipelineShowAttemptResponseModel | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'number_in_pipeline_build_scope': value['numberInPipelineBuildScope'],
        'status': value['status'],
        'triggered_at': value['triggeredAt'],
    };
}

