import { useEffect, useRef } from 'react';
import { TAny } from '../contracts';

type TPreviousRef<Value = TAny> = (value: Value) => Value;

/**
 * Will keep a reference to the previous value
 * Copied from https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
 *
 * @param value
 * @returns previous value of the passed value.
 */
export const usePrevious: TPreviousRef = (value: TAny) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
