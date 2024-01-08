export const BLOCK_TYPE_EMPTY = 0x40;

export const I_UNREACHABLE = 0x00;
export const I_NOP = 0x01;
export const I_BLOCK = 0x02;
export const I_LOOP = 0x03;
export const I_IF = 0x04;
export const I_ELSE = 0x05;
export const I_END = 0x0B;
export const I_BR = 0x0C;
export const I_BR_IF = 0x0D;
export const I_BR_TABLE = 0x0E;
export const I_RETURN = 0x0F;
export const I_CALL = 0x10;
export const I_CALL_INDIRECT = 0x11;
export const I_DROP = 0x1A;
export const I_SELECT = 0x1B;
export const I_SELECT_TYPED = 0x1C;
export const I_LOCAL_GET = 0x20;
export const I_LOCAL_SET = 0x21;
export const I_LOCAL_TEE = 0x22;
export const I_GLOBAL_GET = 0x23;
export const I_GLOBAL_SET = 0x24;
export const I_I32_LOAD = 0x28;
export const I_I64_LOAD = 0x29;
export const I_F32_LOAD = 0x2A;
export const I_F64_LOAD = 0x2B;
export const I_I32_LOAD_8_S = 0x2C;
export const I_I32_LOAD_8_U = 0x2D;
export const I_I32_LOAD_16_S = 0x2E;
export const I_I32_LOAD_16_U = 0x2F;
export const I_I64_LOAD_8_S = 0x30;
export const I_I64_LOAD_8_U = 0x31;
export const I_I64_LOAD_16_S = 0x32;
export const I_I64_LOAD_16_U = 0x33;
export const I_I64_LOAD_32_S = 0x34;
export const I_I64_LOAD_32_U = 0x35;
export const I_I32_STORE = 0x36;
export const I_I64_STORE = 0x37;
export const I_F32_STORE = 0x38;
export const I_F64_STORE = 0x39;
export const I_I32_STORE_8 = 0x3A;
export const I_I32_STORE_16 = 0x3B;
export const I_I64_STORE_8 = 0x3C;
export const I_I64_STORE_16 = 0x3D;
export const I_I64_STORE_32 = 0x3E;
export const I_MEMORY_SIZE = 0x3F;
export const I_MEMORY_GROW = 0x40;
export const I_I32_CONST = 0x41;
export const I_I64_CONST = 0x42;
export const I_F32_CONST = 0x43;
export const I_F64_CONST = 0x44;
export const I_I32_EQZ = 0x45;
export const I_I32_EQ = 0x46;
export const I_I32_NE = 0x47;
export const I_I32_LT_S = 0x48;
export const I_I32_LT_U = 0x49;
export const I_I32_GT_S = 0x4A;
export const I_I32_GT_U = 0x4B;
export const I_I32_LE_S = 0x4C;
export const I_I32_LE_U = 0x4D;
export const I_I32_GE_S = 0x4E;
export const I_I32_GE_U = 0x4F;
export const I_I64_EQZ = 0x50;
export const I_I64_EQ = 0x51;
export const I_I64_NE = 0x52;
export const I_I64_LT_S = 0x53;
export const I_I64_LT_U = 0x54;
export const I_I64_GT_S = 0x55;
export const I_I64_GT_U = 0x56;
export const I_I64_LE_S = 0x57;
export const I_I64_LE_U = 0x58;
export const I_I64_GE_S = 0x59;
export const I_I64_GE_U = 0x5A;
export const I_F32_EQ = 0x5B;
export const I_F32_NE = 0x5C;
export const I_F32_LT = 0x5D;
export const I_F32_GT = 0x5E;
export const I_F32_LE = 0x5F;
export const I_F32_GE = 0x60;
export const I_F64_EQ = 0x61;
export const I_F64_NE = 0x62;
export const I_F64_LT = 0x63;
export const I_F64_GT = 0x64;
export const I_F64_LE = 0x65;
export const I_F64_GE = 0x66;
export const I_I32_CLZ = 0x67;
export const I_I32_CTZ = 0x68;
export const I_I32_POPCNT = 0x69;
export const I_I32_ADD = 0x6A;
export const I_I32_SUB = 0x6B;
export const I_I32_MUL = 0x6C;
export const I_I32_DIV_S = 0x6D;
export const I_I32_DIV_U = 0x6E;
export const I_I32_REM_S = 0x6F;
export const I_I32_REM_U = 0x70;
export const I_I32_AND = 0x71;
export const I_I32_OR = 0x72;
export const I_I32_XOR = 0x73;
export const I_I32_SHL = 0x74;
export const I_I32_SHR_S = 0x75;
export const I_I32_SHR_U = 0x76;
export const I_I32_ROTL = 0x77;
export const I_I32_ROTR = 0x78;
export const I_I64_CLZ = 0x79;
export const I_I64_CTZ = 0x7A;
export const I_I64_POPCNT = 0x7B;
export const I_I64_ADD = 0x7C;
export const I_I64_SUB = 0x7D;
export const I_I64_MUL = 0x7E;
export const I_I64_DIV_S = 0x7F;
export const I_I64_DIV_U = 0x80;
export const I_I64_REM_S = 0x81;
export const I_I64_REM_U = 0x82;
export const I_I64_AND = 0x83;
export const I_I64_OR = 0x84;
export const I_I64_XOR = 0x85;
export const I_I64_SHL = 0x86;
export const I_I64_SHR_S = 0x87;
export const I_I64_SHR_U = 0x88;
export const I_I64_ROTL = 0x89;
export const I_I64_ROTR = 0x8A;
export const I_F32_ABS = 0x8B;
export const I_F32_NEG = 0x8C;
export const I_F32_CEIL = 0x8D;
export const I_F32_FLOOR = 0x8E;
export const I_F32_TRUNC = 0x8F;
export const I_F32_NEAREST = 0x90;
export const I_F32_SQRT = 0x91;
export const I_F32_ADD = 0x92;
export const I_F32_SUB = 0x93;
export const I_F32_MUL = 0x94;
export const I_F32_DIV = 0x95;
export const I_F32_MIN = 0x96;
export const I_F32_MAX = 0x97;
export const I_F32_COPYSIGN = 0x98;
export const I_F64_ABS = 0x99;
export const I_F64_NEG = 0x9A;
export const I_F64_CEIL = 0x9B;
export const I_F64_FLOOR = 0x9C;
export const I_F64_TRUNC = 0x9D;
export const I_F64_NEAREST = 0x9E;
export const I_F64_SQRT = 0x9F;
export const I_F64_ADD = 0xA0;
export const I_F64_SUB = 0xA1;
export const I_F64_MUL = 0xA2;
export const I_F64_DIV = 0xA3;
export const I_F64_MIN = 0xA4;
export const I_F64_MAX = 0xA5;
export const I_F64_COPYSIGN = 0xA6;
export const I_I32_WRAP_I64 = 0xA7;
export const I_I32_TRUNC_F32_S = 0xA8;
export const I_I32_TRUNC_F32_U = 0xA9;
export const I_I32_TRUNC_F64_S = 0xAA;
export const I_I32_TRUNC_F64_U = 0xAB;
export const I_I64_EXTEND_I32_S = 0xAC;
export const I_I64_EXTEND_I32_U = 0xAD;
export const I_I64_TRUNC_F32_S = 0xAE;
export const I_I64_TRUNC_F32_U = 0xAF;
export const I_I64_TRUNC_F64_S = 0xB0;
export const I_I64_TRUNC_F64_U = 0xB1;
export const I_F32_CONVERT_I32_S = 0xB2;
export const I_F32_CONVERT_I32_U = 0xB3;
export const I_I32_EXTEND_8_S = 0xC0;


// https://webassembly.github.io/spec/core/binary/instructions.html#numeric-instructions
// https://webassembly.github.io/spec/core/binary/instructions.html#memory-instructions
// actual opcode comes after this byte
export const I_VARIABLE_0XFC = 0xFC;

export const I_I32_TRUNC_SAT_F32_S = 0; // if the next byte is 0
export const I_I32_TRUNC_SAT_F32_U = 1; // if the next byte is 1
export const I_I32_TRUNC_SAT_F64_S = 2; // if the next byte is 2
export const I_I32_TRUNC_SAT_F64_U = 3; // if the next byte is 3
export const I_I64_TRUNC_SAT_F32_S = 4; // if the next byte is 4
export const I_I64_TRUNC_SAT_F32_U = 5; // if the next byte is 5
export const I_I64_TRUNC_SAT_F64_S = 6; // if the next byte is 6
export const I_I64_TRUNC_SAT_F64_U = 7; // if the next byte is 7

export const I_MEMORY_INIT = 8; // if the next byte is 8
export const I_DATA_DROP = 9; // if the next byte is 9
export const I_MEMORY_COPY = 10; // if the next byte is 10
export const I_MEMORY_FILL = 11; // if the next byte is 11

// https://webassembly.github.io/spec/core/binary/instructions.html#vector-instructions
// actual opcode comes after this byte
export const I_VARIABLE_0XFD = 0xFD;

export const I_V128_LOAD = 0;
export const I_V128_LOAD_8X8_S = 1;
export const I_V128_LOAD_8X8_U = 2;
export const I_V128_LOAD_16X4_S = 3;
export const I_V128_LOAD_16X4_U = 4;
export const I_V128_LOAD_32X2_S = 5;
export const I_V128_LOAD_32X2_U = 6;
export const I_V128_LOAD_8_SPLAT = 7;
export const I_V128_LOAD_16_SPLAT = 8;
export const I_V128_LOAD_32_SPLAT = 9;
export const I_V128_LOAD_64_SPLAT = 10;
export const I_V128_LOAD_32_ZERO = 92;
export const I_V128_LOAD_64_ZERO = 93;
export const I_V128_STORE = 11;
export const I_V128_LOAD_8_LANE = 84;
export const I_V128_LOAD_16_LANE = 85;
export const I_V128_LOAD_32_LANE = 86;
export const I_V128_LOAD_64_LANE = 87;
export const I_V128_STORE_8_LANE = 88;
export const I_V128_STORE_16_LANE = 89;
export const I_V128_STORE_32_LANE = 90;
export const I_V128_STORE_64_LANE = 91;

const generate_inst_name_map = (lines_str: string): string => {
    const lines = lines_str.split('\n');
    const new_lines = lines.map(line => {
        const words = line.split(' ');
        const key = words[2];
        const value = words[4].slice(0, -1); // remove ending semicolon
        return `"${key}": ${value}`;
    });
    return new_lines.join(',\n');
};

export const DEBUG_INST_NAME_TO_HEX = {
    "I_UNREACHABLE": 0x00,
    "I_NOP": 0x01,
    "I_BLOCK": 0x02,
    "I_LOOP": 0x03,
    "I_IF": 0x04,
    "I_ELSE": 0x05,
    "I_END": 0x0B,
    "I_BR": 0x0C,
    "I_BR_IF": 0x0D,
    "I_BR_TABLE": 0x0E,
    "I_RETURN": 0x0F,
    "I_CALL": 0x10,
    "I_CALL_INDIRECT": 0x11,
    "I_DROP": 0x1A,
    "I_SELECT": 0x1B,
    "I_SELECT_TYPED": 0x1C,
    "I_LOCAL_GET": 0x20,
    "I_LOCAL_SET": 0x21,
    "I_LOCAL_TEE": 0x22,
    "I_GLOBAL_GET": 0x23,
    "I_GLOBAL_SET": 0x24,
    "I_I32_LOAD": 0x28,
    "I_I64_LOAD": 0x29,
    "I_F32_LOAD": 0x2A,
    "I_F64_LOAD": 0x2B,
    "I_I32_LOAD_8_S": 0x2C,
    "I_I32_LOAD_8_U": 0x2D,
    "I_I32_LOAD_16_S": 0x2E,
    "I_I32_LOAD_16_U": 0x2F,
    "I_I64_LOAD_8_S": 0x30,
    "I_I64_LOAD_8_U": 0x31,
    "I_I64_LOAD_16_S": 0x32,
    "I_I64_LOAD_16_U": 0x33,
    "I_I64_LOAD_32_S": 0x34,
    "I_I64_LOAD_32_U": 0x35,
    "I_I32_STORE": 0x36,
    "I_I64_STORE": 0x37,
    "I_F32_STORE": 0x38,
    "I_F64_STORE": 0x39,
    "I_I32_STORE_8": 0x3A,
    "I_I32_STORE_16": 0x3B,
    "I_I64_STORE_8": 0x3C,
    "I_I64_STORE_16": 0x3D,
    "I_I64_STORE_32": 0x3E,
    "I_MEMORY_SIZE": 0x3F,
    "I_MEMORY_GROW": 0x40,
    "I_I32_CONST": 0x41,
    "I_I64_CONST": 0x42,
    "I_F32_CONST": 0x43,
    "I_F64_CONST": 0x44,
    "I_I32_EQZ": 0x45,
    "I_I32_EQ": 0x46,
    "I_I32_NE": 0x47,
    "I_I32_LT_S": 0x48,
    "I_I32_LT_U": 0x49,
    "I_I32_GT_S": 0x4A,
    "I_I32_GT_U": 0x4B,
    "I_I32_LE_S": 0x4C,
    "I_I32_LE_U": 0x4D,
    "I_I32_GE_S": 0x4E,
    "I_I32_GE_U": 0x4F,
    "I_I64_EQZ": 0x50,
    "I_I64_EQ": 0x51,
    "I_I64_NE": 0x52,
    "I_I64_LT_S": 0x53,
    "I_I64_LT_U": 0x54,
    "I_I64_GT_S": 0x55,
    "I_I64_GT_U": 0x56,
    "I_I64_LE_S": 0x57,
    "I_I64_LE_U": 0x58,
    "I_I64_GE_S": 0x59,
    "I_I64_GE_U": 0x5A,
    "I_F32_EQ": 0x5B,
    "I_F32_NE": 0x5C,
    "I_F32_LT": 0x5D,
    "I_F32_GT": 0x5E,
    "I_F32_LE": 0x5F,
    "I_F32_GE": 0x60,
    "I_F64_EQ": 0x61,
    "I_F64_NE": 0x62,
    "I_F64_LT": 0x63,
    "I_F64_GT": 0x64,
    "I_F64_LE": 0x65,
    "I_F64_GE": 0x66,
    "I_I32_CLZ": 0x67,
    "I_I32_CTZ": 0x68,
    "I_I32_POPCNT": 0x69,
    "I_I32_ADD": 0x6A,
    "I_I32_SUB": 0x6B,
    "I_I32_MUL": 0x6C,
    "I_I32_DIV_S": 0x6D,
    "I_I32_DIV_U": 0x6E,
    "I_I32_REM_S": 0x6F,
    "I_I32_REM_U": 0x70,
    "I_I32_AND": 0x71,
    "I_I32_OR": 0x72,
    "I_I32_XOR": 0x73,
    "I_I32_SHL": 0x74,
    "I_I32_SHR_S": 0x75,
    "I_I32_SHR_U": 0x76,
    "I_I32_ROTL": 0x77,
    "I_I32_ROTR": 0x78,
    "I_I64_CLZ": 0x79,
    "I_I64_CTZ": 0x7A,
    "I_I64_POPCNT": 0x7B,
    "I_I64_ADD": 0x7C,
    "I_I64_SUB": 0x7D,
    "I_I64_MUL": 0x7E,
    "I_I64_DIV_S": 0x7F,
    "I_I64_DIV_U": 0x80,
    "I_I64_REM_S": 0x81,
    "I_I64_REM_U": 0x82,
    "I_I64_AND": 0x83,
    "I_I64_OR": 0x84,
    "I_I64_XOR": 0x85,
    "I_I64_SHL": 0x86,
    "I_I64_SHR_S": 0x87,
    "I_I64_SHR_U": 0x88,
    "I_I64_ROTL": 0x89,
    "I_I64_ROTR": 0x8A,
    "I_F32_ABS": 0x8B,
    "I_F32_NEG": 0x8C,
    "I_F32_CEIL": 0x8D,
    "I_F32_FLOOR": 0x8E,
    "I_F32_TRUNC": 0x8F,
    "I_F32_NEAREST": 0x90,
    "I_F32_SQRT": 0x91,
    "I_F32_ADD": 0x92,
    "I_F32_SUB": 0x93,
    "I_F32_MUL": 0x94,
    "I_F32_DIV": 0x95,
    "I_F32_MIN": 0x96,
    "I_F32_MAX": 0x97,
    "I_F32_COPYSIGN": 0x98,
    "I_F64_ABS": 0x99,
    "I_F64_NEG": 0x9A,
    "I_F64_CEIL": 0x9B,
    "I_F64_FLOOR": 0x9C,
    "I_F64_TRUNC": 0x9D,
    "I_F64_NEAREST": 0x9E,
    "I_F64_SQRT": 0x9F,
    "I_F64_ADD": 0xA0,
    "I_F64_SUB": 0xA1,
    "I_F64_MUL": 0xA2,
    "I_F64_DIV": 0xA3,
    "I_F64_MIN": 0xA4,
    "I_F64_MAX": 0xA5,
    "I_F64_COPYSIGN": 0xA6,
    "I_I32_WRAP_I64": 0xA7,
    "I_I32_TRUNC_F32_S": 0xA8,
    "I_I32_TRUNC_F32_U": 0xA9,
    "I_I32_TRUNC_F64_S": 0xAA,
    "I_I32_TRUNC_F64_U": 0xAB,
    "I_I64_EXTEND_I32_S": 0xAC,
    "I_I64_EXTEND_I32_U": 0xAD,
    "I_I64_TRUNC_F32_S": 0xAE,
    "I_I64_TRUNC_F32_U": 0xAF,
    "I_I64_TRUNC_F64_S": 0xB0,
    "I_I64_TRUNC_F64_U": 0xB1,
    "I_F32_CONVERT_I32_S": 0xB2,
    "I_F32_CONVERT_I32_U": 0xB3,
    "I_I32_EXTEND_8_S": 0xC0,
};

export const DEBUG_INST_HEX_TO_NAME = Object.fromEntries(Object.entries(DEBUG_INST_NAME_TO_HEX).map(([x, y]) => [y, x]));
