import { AlGlobalizer } from '@al/common';
import { AlApplicationsClientInstance } from './al-applications-client';

export * from './al-applications-client';
export * from './types';
/* tslint:disable:variable-name */
export const AlApplicationsClient = AlGlobalizer.instantiate( "AlApplicationsClient", () => new AlApplicationsClientInstance() );
