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


/**
 * 
 * @export
 */
export const WebsiteBitriseYMLLocation = {
    LocationBitriseIo: 'bitrise.io',
    LocationRepository: 'repository'
} as const;
export type WebsiteBitriseYMLLocation = typeof WebsiteBitriseYMLLocation[keyof typeof WebsiteBitriseYMLLocation];


export function instanceOfWebsiteBitriseYMLLocation(value: any): boolean {
    for (const key in WebsiteBitriseYMLLocation) {
        if (Object.prototype.hasOwnProperty.call(WebsiteBitriseYMLLocation, key)) {
            if (WebsiteBitriseYMLLocation[key as keyof typeof WebsiteBitriseYMLLocation] === value) {
                return true;
            }
        }
    }
    return false;
}

export function WebsiteBitriseYMLLocationFromJSON(json: any): WebsiteBitriseYMLLocation {
    return WebsiteBitriseYMLLocationFromJSONTyped(json, false);
}

export function WebsiteBitriseYMLLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebsiteBitriseYMLLocation {
    return json as WebsiteBitriseYMLLocation;
}

export function WebsiteBitriseYMLLocationToJSON(value?: WebsiteBitriseYMLLocation | null): any {
    return value as any;
}

export function WebsiteBitriseYMLLocationToJSONTyped(value: any, ignoreDiscriminator: boolean): WebsiteBitriseYMLLocation {
    return value as WebsiteBitriseYMLLocation;
}

