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
  V0CacheItemDownloadResponseModel,
  V0CacheItemListResponseModel,
} from '../models/index';
import {
    ServiceStandardErrorRespModelFromJSON,
    ServiceStandardErrorRespModelToJSON,
    V0CacheItemDownloadResponseModelFromJSON,
    V0CacheItemDownloadResponseModelToJSON,
    V0CacheItemListResponseModelFromJSON,
    V0CacheItemListResponseModelToJSON,
} from '../models/index';

export interface CacheItemDeleteRequest {
    appSlug: string;
    cacheItemId: string;
}

export interface CacheItemDeleteAllRequest {
    appSlug: string;
}

export interface CacheItemDownloadRequest {
    appSlug: string;
    cacheItemId: string;
}

export interface CacheListRequest {
    appSlug: string;
    next?: string;
    limit?: number;
}

/**
 * 
 */
export class KeyValueCacheApi extends runtime.BaseAPI {

    /**
     * Deletes a key-value cache item. Deleted cache items are no longer accessible and cannot be restored.
     * Deletes a key-value cache item
     */
    async cacheItemDeleteRaw(requestParameters: CacheItemDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['appSlug'] == null) {
            throw new runtime.RequiredError(
                'appSlug',
                'Required parameter "appSlug" was null or undefined when calling cacheItemDelete().'
            );
        }

        if (requestParameters['cacheItemId'] == null) {
            throw new runtime.RequiredError(
                'cacheItemId',
                'Required parameter "cacheItemId" was null or undefined when calling cacheItemDelete().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // PersonalAccessToken authentication
        }

        const response = await this.request({
            path: `/apps/{app-slug}/cache-items/{cache-item-id}`.replace(`{${"app-slug"}}`, encodeURIComponent(String(requestParameters['appSlug']))).replace(`{${"cache-item-id"}}`, encodeURIComponent(String(requestParameters['cacheItemId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes a key-value cache item. Deleted cache items are no longer accessible and cannot be restored.
     * Deletes a key-value cache item
     */
    async cacheItemDelete(requestParameters: CacheItemDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.cacheItemDeleteRaw(requestParameters, initOverrides);
    }

    /**
     * Deletes all key-value cache items created by the builds of an app. Deleted cache items are no longer accessible and cannot be restored.
     * Deletes all key-value cache items belonging to an app
     */
    async cacheItemDeleteAllRaw(requestParameters: CacheItemDeleteAllRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['appSlug'] == null) {
            throw new runtime.RequiredError(
                'appSlug',
                'Required parameter "appSlug" was null or undefined when calling cacheItemDeleteAll().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // PersonalAccessToken authentication
        }

        const response = await this.request({
            path: `/apps/{app-slug}/cache-items`.replace(`{${"app-slug"}}`, encodeURIComponent(String(requestParameters['appSlug']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Deletes all key-value cache items created by the builds of an app. Deleted cache items are no longer accessible and cannot be restored.
     * Deletes all key-value cache items belonging to an app
     */
    async cacheItemDeleteAll(requestParameters: CacheItemDeleteAllRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.cacheItemDeleteAllRaw(requestParameters, initOverrides);
    }

    /**
     * Gets a download URL of a cache item.
     * Gets the download URL of a key-value cache item
     */
    async cacheItemDownloadRaw(requestParameters: CacheItemDownloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V0CacheItemDownloadResponseModel>> {
        if (requestParameters['appSlug'] == null) {
            throw new runtime.RequiredError(
                'appSlug',
                'Required parameter "appSlug" was null or undefined when calling cacheItemDownload().'
            );
        }

        if (requestParameters['cacheItemId'] == null) {
            throw new runtime.RequiredError(
                'cacheItemId',
                'Required parameter "cacheItemId" was null or undefined when calling cacheItemDownload().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // PersonalAccessToken authentication
        }

        const response = await this.request({
            path: `/apps/{app-slug}/cache-items/{cache-item-id}/download`.replace(`{${"app-slug"}}`, encodeURIComponent(String(requestParameters['appSlug']))).replace(`{${"cache-item-id"}}`, encodeURIComponent(String(requestParameters['cacheItemId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V0CacheItemDownloadResponseModelFromJSON(jsonValue));
    }

    /**
     * Gets a download URL of a cache item.
     * Gets the download URL of a key-value cache item
     */
    async cacheItemDownload(requestParameters: CacheItemDownloadRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V0CacheItemDownloadResponseModel> {
        const response = await this.cacheItemDownloadRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List all the available cache items that the builds of the app created via the save-cache step.
     * List the key-value cache items belonging to an app
     */
    async cacheListRaw(requestParameters: CacheListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<V0CacheItemListResponseModel>> {
        if (requestParameters['appSlug'] == null) {
            throw new runtime.RequiredError(
                'appSlug',
                'Required parameter "appSlug" was null or undefined when calling cacheList().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['next'] != null) {
            queryParameters['next'] = requestParameters['next'];
        }

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.apiKey) {
            headerParameters["Authorization"] = await this.configuration.apiKey("Authorization"); // PersonalAccessToken authentication
        }

        const response = await this.request({
            path: `/apps/{app-slug}/cache-items`.replace(`{${"app-slug"}}`, encodeURIComponent(String(requestParameters['appSlug']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => V0CacheItemListResponseModelFromJSON(jsonValue));
    }

    /**
     * List all the available cache items that the builds of the app created via the save-cache step.
     * List the key-value cache items belonging to an app
     */
    async cacheList(requestParameters: CacheListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<V0CacheItemListResponseModel> {
        const response = await this.cacheListRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
