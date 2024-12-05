import { UserRole } from '../consts/consts';
import { FeatureFlags } from '@/shared/types/faturesFlags';
import { JsonSettings } from './jsonSettings';

export interface User {
    id: string;
    username: string;
    avatar?: string;
    roles?: UserRole[];
    features?: FeatureFlags;
    jsonSettings?: JsonSettings;
}

export interface UserSchema {
    authData?: User;

    _inited: boolean;
}
