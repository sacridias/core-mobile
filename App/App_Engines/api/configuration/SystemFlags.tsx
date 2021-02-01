export enum Flags {
  SaveEnabled,
  ByPassEnabled,
  postAPIFlag,
  LetBubbaTalk,
  preventSumAdv,
  disableErrors,
}

export const SystemFlags = [];

SystemFlags[Flags.SaveEnabled] = false; //false
SystemFlags[Flags.ByPassEnabled] = true; //true
SystemFlags[Flags.postAPIFlag] = true; //false
SystemFlags[Flags.LetBubbaTalk] = false; //true
SystemFlags[Flags.preventSumAdv] = false;
SystemFlags[Flags.disableErrors] = true;
