const Font = (
  w: number,
  p: number
) => `${w} normal ${p}px "pretendard",sans-serif
`;
export const theme = {
  color: {
    white: "#FFFFFF",
    gray300: "#F6F6F6",
    gray500: "#DEDEDE",
    gray700: "#8D8D8D",
    gray900: "#2F2F2F",
    black: "#000000",
    main100: "#F0B2B2",
    main300: "#F08383",
    main500: "#E95151",
    main700: "#BF3939",
    secondary300: "#F898D1",
    secondary500: "#E75FB0",
    secondary700: "#CF3E95",
  },
  font: {
    Heading1: Font(700, 40),
    Heading2: Font(700, 36),
    Heading3: Font(700, 32),
    Heading4: Font(500, 28),
    Heading5: Font(500, 24),
    Heading6: Font(500, 20),
    Body1: Font(500, 16),
    Body2: Font(400, 16),
    Body3: Font(500, 14),
    Body4: Font(400, 14),
    Caption: Font(400, 12),
  },
} as const;
