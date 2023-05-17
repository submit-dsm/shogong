export const blockType = {
  SHORT_ANSWER: "SHORT_ANSWER",
  LONG_ANSWER: "LONG_ANSWER",
  RADIO: "RADIO",
  CHECKBOX: "CHECKBOX",
  FILE: "FILE",
} as const;

export type BlockType = keyof typeof blockType;
