export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export { getUserAuthData } from './model/selectors/getUserAuthdata/getUserAuthData';

export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelectors';

export { userReducer, userActions } from './model/slice/userSlice';

export type { UserSchema, User } from './model/types/user';

export { UserRole } from '@/entities/User/model/consts/consts';
export { useJsonSettings } from './model/selectors/jsonSettings';

export { saveJsonSettings } from './model/services/saveJsonSettings';

export { initAuthData } from './model/services/initAuthData';
