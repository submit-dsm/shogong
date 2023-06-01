export const blockType = {
  SHORT_ANSWER: "SHORT_ANSWER",
  LONG_ANSWER: "LONG_ANSWER",
  RADIO: "RADIO",
  CHECKBOX: "CHECKBOX",
  FILE: "FILE",
  DROP_DOWN: "DROP_DOWN",
} as const;

export type BlockType = keyof typeof blockType;
