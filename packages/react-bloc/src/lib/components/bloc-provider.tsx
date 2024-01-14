import { BlocBase, ClassType } from '@jacobtipp/bloc';
import { PropsWithChildren, ReactNode } from 'react';
import { MultiProvider, Provider } from './provider';

export interface BlocProviderProps<Bloc extends ClassType<BlocBase<any>>> {
  bloc: Bloc;
  create: () => InstanceType<Bloc>;
  children: ReactNode;
  dependencies?: any[];
}

export const BlocProvider = <Bloc extends ClassType<BlocBase<any>>>({
  bloc,
  children,
  dependencies = [],
  create,
}: BlocProviderProps<Bloc>) => {
  return Provider({
    classDef: bloc,
    create,
    dependencies,
    children,
  });
};

type BlocProviderReturnType = ReturnType<typeof BlocProvider>;

export type MultiBlocProviderProps = {
  providers: Array<({ children }: PropsWithChildren) => BlocProviderReturnType>;
};

export const MultiBlocProvider = ({
  providers,
  children,
}: PropsWithChildren<MultiBlocProviderProps>) => {
  return MultiProvider({
    providers,
    children,
  });
};
