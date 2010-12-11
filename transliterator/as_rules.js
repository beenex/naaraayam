﻿/**
 * Trasliteration regular expression rules table for Assamese script
 * @author Junaid P V ([[user:Junaidpv]])
 * @date 2010-12-01
 * License: GPLv3, CC-BY-SA 3.0
 */
var tr_as = {};
tr_as.text = "Transliteration";
tr_as.description = "Transliteration scheme for Assamese";
// Normal rules
tr_as.rules = [
['ক্h','^.*c','চ্'],

['([ক-হ])্a','', '$2'],
['([ক-হ])(a|্A)','', '$2া'],
['([ক-হ])্i','', '$2ি'],
['([ক-হ])(িi|্I|েe|েE)','', '$2ী'],
['([ক-হ])্u','', '$2ু'],
['([ক-হ])(ুu|্U|োo|োO)','', '$2ূ'],
['([ক-হ])্R','', '$2ৃ'],
['([ক-হ])ৃR','', '$2ৄ'],
['([ক-হ])্L','', '$2ৢ'],
['([ক-হ])ৢL','', '$2ৣ'],
['([ক-হ])্(e|E)','', '$2ে'],
['([ক-হ])i','', '$2ে'],
['([ক-হ])্(o|O)','', '$2ো'],
['([ক-হ])u','', '$2ৌ'],
['([ক-হ])([া-ৌৗ])?m','', '$2$2ং'],

['ং~','', 'ম্'],
['ংa','', 'ম'],
['ংA','', 'মা'],
['ংi','', 'মি'],
['ংI','', 'মী'],
['ংu','', 'মু'],
['ংU','', 'মূ'],
['ংR','', 'মৃ'],
['ং(e|E)','', 'মে'],
['ং(o|O)','', 'মো'],

['অa','', 'আ'],
['ইi','', 'ঈ'],
['এ(e|E)','', 'ঈ'],
['অi','', 'ঐ'],
['উu','', 'ঊ'],
['ও(o|O)','', 'ঊ'],
['অu','', 'ঔ'],
['ঋR','', 'ৠ'],
['ঌL','', 'ৡ'],

['ক্h','', 'খ্'],
['গ্h','', 'ঘ্'],
['ন্g','', 'ঙ্'],
['চ্h','', 'ছ্'],
['জ্h','', 'ঝ্'],
['ন্j','', 'ঞ্'],
['ট্h','', 'ঠ্'],
['ড্h','', 'ঢ্'],
['ত্h','', 'থ্'],
['দ্h','', 'ধ্'],
['প্h','', 'ফ্'],
['ব্h','', 'ভ্'],
['স্h','', 'ষ্'],


['a','', 'অ'],
['b','', 'ব্'],
['c','', 'ক্'],
['d','', 'দ্'],
['(e|E)','', 'এ'],
//['f','', 'অ'],
['g','', 'গ্'],
['h','', 'স্'],
['i','', 'ই'],
['j','', 'জ্'],
['k','', 'ক্'],
['l','', 'ল্'],
['m','', 'ম্'],
['n','', 'ন্'],
['(o|O)','', 'ও'],
['p','', 'প্'],
//['q','', 'অ'],
['r','', 'র্'],
['s','', 'স্'],
['t','', 'ত্'],
['u','', 'উ'],
//['v','', 'অ'],
//['w','', 'অ'],
//['x','', 'অ'],
['y','', 'য্'],
//['z','', 'অ'],
['A','', 'আ'],
['B','', 'ব্ব্'],
['C','', 'ক্ক্'],
['D','', 'ড্'],
//['F','', 'অ'],
['G','', 'গ্গ্'],
['H','', 'ঃ'],
['I','', 'ঈ'],
['J','', 'জ্জ্'],
['K','', 'ক্ক্'],
['L','', 'ঌ'],
['M','', 'ম্ম্'],
['N','', 'ণ্'],
['P','', 'প্প্'],
//['Q','', 'অ'],
['R','', 'ঋ'],
['S','', 'শ্'],
['T','', 'ট্'],
['U','', 'ঊ'],
//['V','', 'অ'],
//['W','', 'অ'],
//['X','', 'অ'],
['Y','', 'য্য্'],
//['Z','', 'অ'],
['0','', '০'],
['1','', '১'],
['2','', '২'],
['3','', '৩'],
['4','', '৪'],
['5','', '৫'],
['6','', '৬'],
['7','', '৭'],
['8','', '৮'],
['9','', '৯'],

['//','', 'ঽ']
];
