import { Dispatch, MutableRefObject, SetStateAction } from 'react';

export interface ContactTabsType {
  steps: MutableRefObject<number>;
  formRef: MutableRefObject<any>;
  uiRefresh: Dispatch<SetStateAction<number>>;
  formKey: string;
}
