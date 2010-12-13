/**
 * Regular expression rules table for Bengali National Keyboard
 * @author Junaid P V ([[user:Junaidpv]])
 * @date 2010-12-13
 * License: GPLv3, CC-BY-SA 3.0
 */
var tr_bn_nkb = {};
tr_bn_nkb.text = "NKB";
tr_bn_nkb.description = "Bengali National Keyboard";
// Normal rules
tr_bn_nkb.rules = [
['1', '', '\u09E7'],
['2', '', '\u09E8'],
['3', '', '\u09E9'],
['4', '', '\u09EA'],
['5', '', '\u09EB'],
['6', '', '\u09EC'],
['7', '', '\u09ED'],
['8', '', '\u09EE'],
['9', '', '\u09EF'],
['0', '', '\u09E6'],

['q', '', '\u0999'],
['w', '', '\u09AF'],
['e', '', '\u09A1'],
['r', '', '\u09AA'],
['t', '', '\u099F'],
['y', '', '\u099A'],
['u', '', '\u099C'],
['i', '', '\u09B9'],
['o', '', '\u0997'],
['p', '', '\u09DC'],

['a', '', '\u09C3'],
['s', '', '\u09C1'],
['d', '', '\u09BF'],
['f', '', '\u09AC'],
['g', '', '\u09CD'],
['h', '', '\u09BE'],
['j', '', '\u0995'],
['k', '', '\u09A4'],
['l', '', '\u09A6'],

['z', '', '\u0981'],
['x', '', '\u09CB'],
['c', '', '\u09C7'],
['v', '', '\u09B0'],
['b', '', '\u09A8'],
['n', '', '\u09B8'],
['m', '', '\u09AE'],

['Q', '', '\u0982'],
['W', '', '\u09DF'],
['E', '', '\u09A2'],
['R', '', '\u09AB'],
['T', '', '\u09A0'],
['Y', '', '\u099B'],
['U', '', '\u099D'],
['I', '', '\u099E'],
['O', '', '\u0998'],
['P', '', '\u09DD'],

['A', '', '\u09D7'],
['S', '', '\u09C2'],
['D', '', '\u09C0'],
['F', '', '\u09AD'],
['G', '', '\u0964'],
['H', '', '\u0985'],
['J', '', '\u0996'],
['K', '', '\u09A5'],
['L', '', '\u09A7'],

['Z', '', '\u0983'],
['X', '', '\u09CC'],
['C', '', '\u09C8'],
['V', '', '\u09B2'],
['B', '', '\u09A3'],
['N', '', '\u09B7'],
['M', '', '\u09B6']
];

// Extended layout for National Keyboard. Works in Firefox only
tr_bn_nkb.extended_keyboard = true;
tr_bn_nkb.rules_x = [
['1', '', '\u09F4'],
['2', '', '\u09F5'],
['3', '', '\u09F6'],
['4', '', '\u09F3'],
['5', '', '\u09F7'],
['6', '', '\u09F8'],
['7', '', '\u0902'],
['0', '', '\u09F9'],
['\\-', '', '\u200C'],
['\\=', '', '\u200D'],

['q', '', '\u09E2'],
['w', '', '\u09CD\u09AF'],
['e', '', '\u09C4'],
['i', '', '\u09BD'],

['a', '', '\u098b'],
['s', '', '\u0989'],
//['d', '', ''],
['f', '', '\u09F0'],
['g', '', '\u0965'],
['h', '', '\u0986'],
['j', '', '\u09B1'],
['k', '', '\u09A2'],
['l', '', '\u098C'],

['z', '', '\u09FA'],
['x', '', '\u0993'],
['c', '', '\u098F'],
['v', '', '\u09CD\u09B0'],
['\\.', '', '\u09BC'],

['\\$', '', '\u09F2'],
['\\^', '', '\u09B3'],

['Q', '', '\u09E3'],

['A', '', '\u09E0'],
['S', '', '\u098A'],
['D', '', '\u0988'],
['F', '', '\u09F1'],
['L', '', '\u09E1'],

['X', '', '\u0994'],
['C', '', '\u0990']
];
