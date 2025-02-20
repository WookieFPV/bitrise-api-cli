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


import * as runtime from '../runtime';
import type {
  ServiceStandardErrorRespModel,
  V0AppleAPICredentialsListResponse,
} from '../models/index';
import {
    ServiceStandardErrorRespModelFromJSON,
    ServiceStandardErrorRespModelToJSON,
    V0AppleAPICredentialsListResponseFromJSON,
    V0AppleAPICredentialsListResponseToJSON,
} from '../models/index';

export interface AppleApiCredentialListRequest {
    userSlug: string;
}

/**
 * 
 */
export class AppleApiCredentialsApi extends runtime.BaseAPI {

    /**
     * List Apple API credentials for a specific Bitrise user
     * List Apple API credentials for a specific user
     */
    async appleApiCredentialListRaw(requestParameters: AppleApiCredentialListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V0AppleAPICredentialsListResponse>> {
        if (requestParameters['userSlug'] == null) {
            throw new runtime.RequiredError(
                'userSlug',
                'Required parameter "userSlug" was null or undefined when calling appleApiCredentialList().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // PersonalAccessToken authentication
        }

        const response = await this.request({
            path: `/users/{user-slug}/apple-api-credentials`.replace(`{${"user-slug"}}`, encodeURIComponent(String(requestParameters['userSlug']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V0AppleAPICredentialsListResponseFromJSON(jsonValue));
    }

    /**
     * List Apple API credentials for a specific Bitrise user
     * List Apple API credentials for a specific user
     */
    async appleApiCredentialList(requestParameters: AppleApiCredentialListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V0AppleAPICredentialsListResponse> {
        const response = await this.appleApiCredentialListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
