type Unit = 'B' | 'KB' | 'MB' | 'GB' | 'TB' | 'PB';

interface IOptions {
  currentUnit?: Unit;
  base?: 'binary' | 'decimal';
  returnType?: 'number' | 'string';
  decimalPlaces?: number;
  showUnit?: boolean;
}

const BINARY_BASE = 1024;
const DECIMAL_BASE = 1000;
const POW_TO_MB = 2;
const POW_TO_GB = 3;
const POW_TO_TB = 4;
const POW_TO_PB = 5;

const binarySizes: Record<Unit, number> = {
  B: 1,
  KB: BINARY_BASE,
  MB: Math.pow(BINARY_BASE, POW_TO_MB),
  GB: Math.pow(BINARY_BASE, POW_TO_GB),
  TB: Math.pow(BINARY_BASE, POW_TO_TB),
  PB: Math.pow(BINARY_BASE, POW_TO_PB),
};

const decimalSizes: Record<Unit, number> = {
  B: 1,
  KB: DECIMAL_BASE,
  MB: Math.pow(DECIMAL_BASE, POW_TO_MB),
  GB: Math.pow(DECIMAL_BASE, POW_TO_GB),
  TB: Math.pow(DECIMAL_BASE, POW_TO_TB),
  PB: Math.pow(DECIMAL_BASE, POW_TO_PB),
};

export const convertFileSize = (
  size: number,
  targetUnit: Unit,
  options?: IOptions
): string | number => {
  const {
    currentUnit = 'B',
    base = 'binary',
    returnType = 'string',
    decimalPlaces = 1,
    showUnit,
  } = options || {};
  const conversionTable = base === 'binary' ? binarySizes : decimalSizes;
  const currentUnitSize = conversionTable[currentUnit];
  const targetUnitSize = conversionTable[targetUnit];

  const sizeInBytes = size * currentUnitSize;
  const convertedSize = `${(sizeInBytes / targetUnitSize).toFixed(decimalPlaces)}${
    showUnit ? targetUnit : ''
  }`;

  // eslint-disable-next-line @typescript-eslint/tslint/config
  return returnType === 'string' ? convertedSize : parseFloat(convertedSize);
};
