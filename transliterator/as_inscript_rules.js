﻿/**
 * InScript regular expression rules table for Assamese script
 * According to CDAC's "Enhanced InScript Keyboard Layout 5.2"
 * @author Junaid P V ([[user:Junaidpv]])
 * @date 2010-12-12 (updated: 2010-12-22)
 * License: GPLv3, CC-BY-SA 3.0
 */
if(tr_as_inscript== undefined) var tr_as_inscript = {};
else tr_as_inscript = {};
tr_as_inscript.text = "InScript";
tr_as_inscript.description = "InScript layout for Bengali";
// Normal rules
tr_as_inscript.rules = [
['X', '', 'ঁ'],
['x', '', 'ং'],
['_', '', 'ঃ'],
['D', '', 'অ'],
['E', '', 'আ'],
['F', '', 'ই'],
['R', '', 'ঈ'],
['G', '', 'উ'],
['T', '', 'ঊ'],
['\\+', '', 'ঋ'],
['S', '', 'এ'],
['W', '', 'ঐ'],
['A', '', 'ও'],
['Q', '', 'ঔ'],
['k', '', 'ক'],
['K', '', 'খ'],
['i', '', 'গ'],
['I', '', 'ঘ'],
['U', '', 'ঙ'],
[';', '', 'চ'],
['\\:', '', 'ছ'],
['p', '', 'জ'],
['P', '', 'ঝ'],
['\\}', '', 'ঞ'],
["'", '', 'ট'],
['"', '', 'ঠ'],
['\\[', '', 'ড'],
['\\{', '', 'ঢ'],
['C', '', 'ণ'],
['l', '', 'ত'],
['L', '', 'থ'],
['o', '', 'দ'],
['O', '', 'ধ'],
['v', '', 'ন'],
['h', '', 'প'],
['H', '', 'ফ'],
['y', '', 'ব'],
['Y', '', 'ভ'],
['c', '', 'ম'],
['\\?', '', 'য'],
['j', '', 'র'],
['J', '', 'ৎ'],
['n', '', 'ল'],
['M', '', 'শ'],
['\\<', '', 'ষ'],
['m', '', 'স'],
['u', '', 'হ'],
['\\]', '', '়'],
['e', '', 'া'],
['f', '', 'ি'],
['r', '', 'ী'],
['g', '', 'ু'],
['t', '', 'ূ'],
['\\=', '', 'ৃ'],
['s', '', 'ে'],
['w', '', 'ৈ'],
['a', '', 'ো'],
['q', '', 'ৌ'],
['d', '', '্'],
['/', '', 'য়'],
['\\>', '', '৤'],
['0', '', '০'],
['1', '', '১'],
['2', '', '২'],
['3', '', '৩'],
['4', '', '৪'],
['5', '', '৫'],
['6', '', '৬'],
['7', '', '৭'],
['8', '', '৮'],
['9', '', '৯'],
['z', '', 'ʼ'],
['\\!', '', 'অ্যা'],
['\\#', '', '্র'],
['\\$', '', 'র্'],
['\\%', '', 'জ্ঞ'],
['\\^', '', 'ত্র'],
['\\&', '', 'ক্ষ'],
['\\*', '', 'শ্র'],
['\\(', '', '\u200D'],
['\\)', '', '\u200C']
];

// Extended layout for InScript. Works in Firefox only
tr_as_inscript.extended_keyboard = true;
tr_as_inscript.rules_x = [
['F', '', 'ঌ'],
['\\>', '', 'ঽ'],
['\\=', '', 'ৠ'],
['l', '', 'ৎ'],
['\\[', '', 'ড়'],
['\\{', '', 'ঢ়'],
['\\+', '', 'ৠ'],
['R', '', 'ৡ'],
['f', '', 'ৢ'],
['r', '', 'ৣ'],
['\\.', '', '৥'],
['x', '', '৺'],
['\\<', '', '৲'],
[',', '', '৳'],
['\\!', '', '৴'],
['\\@', '', '৵'],
['\\#', '', '৶'],
['\\$', '', '৷'],
['\\%', '', '৸'],
['\\^', '', '৹'],
['\\?', '', '৻'],
['4', '', '₹']
];
