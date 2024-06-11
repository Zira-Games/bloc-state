import { AnyClassType } from '../context';
export declare const useRepository: <Repository extends AnyClassType>(repository: Repository) => InstanceType<Repository>;
