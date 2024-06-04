import { ReactNode } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type TAny = any;

export type TAnyObject = Record<string, TAny>;

export interface ILabelValue<L = string, V = string> {
  label: L;
  value: V;
}

export type TWithChildren<T = ReactNode> = {
  children: T;
};

export interface IWithDataTest {
  /**
   * A test ID to be placed on the trigger DOM node.
   */
  'data-test'?: string;
}
