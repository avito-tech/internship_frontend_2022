import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../../store';

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypedSelector;
