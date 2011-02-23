﻿/**
 * Trasliteration regular expression rules table for Malayalam
 * @author Junaid P V ([[user:Junaidpv]]) with extensive advise from Thachan Makan ([[user:Thachan.makan]])
 * @date 2010-05-19 (update: 2010-12-11)
 * @credits Malayalam Wikimedia Community, especialy Thachan Makan ([[user:Thachan.makan]])
 * License: GPLv3, CC-BY-SA 3.0
 */
if(tr_ml== undefined) var tr_ml = {};
else tr_ml = {};
tr_ml.text = "Transliteration";
tr_ml.description = "Malayalam transliteration";
// Normal rules
tr_ml.rules = [
['(\u200c)+a', '', 'അ'],
['(\u200c)+A', '', 'ആ'],
['(\u200c)+i', '', 'ഇ'],
['(\u200c)+u', '', 'ഉ'],
['(\u200c)+U', '', 'ഊ'],
['(\u200c)+R', '', 'ഋ'],
['(\u200c)+e', '', 'എ'],
['(\u200c)+E', '', 'ഏ'],
['(\u200c)+I', '', 'ഐ'],
['(\u200c)+o', '', 'ഒ'],
['(\u200c)+O', '', 'ഓ'],
['(\u200c)+H', '', 'ഃ'],
['ൻൿh','nc','ഞ്ച്'],
['ൿh','c', 'ച്'],
['ക്ക്h','cc', 'ച്ച്'],
['ല്പ്p','lp','ൽപ്പ്'],

['\\\\([A-Za-z\\>_~])','\\\\','$2'],

['([ക-ഹ])്R', '', '$2ൃ'],
['ന്ന്j', '', 'ഞ്ഞ്'],
['ന്ന്g', '', 'ങ്ങ്'],
['റ്റ്h', '', 'ത്'],
['റ്റ്t', '', 'ട്ട്'],
['ന്റ്h', '', 'ന്ത്'],
['([ക-ഹ])്ല്l', 'L', '$2\u0d62'],
['([ക-ഹ])\u0d62l', '', '$2\u0d63'],
['([അ-ഊഌഎ-ഐഒ-ഹ])([ഽ-ൂെ-ൌൗ])+R', '', '$2$3റ്'],
['([ക-ഹ])ൃa', '', '$2്ര'],
['([ക-ഹ])ൃA', '', '$2്രാ'],
['([ക-ഹ])ൃi', '', '$2്രി'],
['([ക-ഹ])ൃI', '', '$2്രീ'],
['([ക-ഹ])ൃu', '', '$2്രു'],
['([ക-ഹ])ൃU', '', '$2്രൂ'],
['([ക-ഹ])ൃe', '', '$2്രെ'],
['([ക-ഹ])ൃE', '', '$2്രേ'],
['([ക-ഹ])ൃo', '', '$2്രൊ'],
['([ക-ഹ])ൃO', '', '$2്രോ'],
['([ക-ഹ])്(l|L)', '', '$2്ല്'],
['അa', '', 'ആ'],
['അi', '', 'ഐ'],
['അu', '', 'ഔ'],
['ഇi', '', 'ഈ'],
['ഉu', '', 'ഊ'],
['ഊo', '', 'ഊഊ'],
['ഋR', '', 'ൠ'],
['ഋa', '', 'റ'],
['ഋA', '', 'റാ'],
['ഋi', '', 'റി'],
['ഋI', '', 'റീ'],
['ഋu', '', 'റു'],
['ഋU', '', 'റൂ'],
['ഋe', '', 'റെ'],
['ഋE', '', 'റേ'],
['ഋo', '', 'റൊ'],
['ഋO', '', 'റോ'],
['ഋ~', '', 'റ്'],
['ഌl', '', 'ൡ'],
['എe', '', 'ഈ'],
['ഒo', '', 'ഊ'],
['ാa', '', 'ാാ'],
['ീi', '', 'ീീ'],
['ൂu', '', 'ൂൂ'],
['ൂo', '', 'ൂൂ'],
['ൄR', '', 'ൄൄ'],
['േE', '', 'േേ'],
['ോO', '', 'ോോ'],
['ൗu', '', 'ൗൗ'],
['\u0d62\\^', '', '\u0d63'],
['\u0d63\\^', '', '\u0d63\u0d63'],
['ക്h', '', 'ഖ്'],
['ഗ്h', '', 'ഘ്'],
['ൻg', '', 'ങ്'],
['ച്h', '', 'ഛ്'],
['ജ്h', '', 'ഝ്'],
['ട്h', '', 'ഠ്'],
['ഡ്h', '', 'ഢ്'],
['ത്h', '', 'ഥ്'],
['ദ്h', '', 'ധ്'],
['പ്h', '', 'ഫ്'],
['ബ്h', '', 'ഭ്'],
['ംa', '', 'മ'],
['ംA', '', 'മാ'],
['ംi', '', 'മി'],
['ംI', '', 'മീ'],
['ംu', '', 'മു'],
['ംU', '', 'മൂ'],
['ംR', '', 'മൃ'],
['ംe', '', 'മെ'],
['ംE', '', 'മേ'],
['ംo', '', 'മൊ'],
['ംO', '', 'മോ'],
['ംm', '', 'മ്മ്'],
['([^സ])ംr', '', '$2മ്ര്'],
['ംp', '', 'മ്പ്'],
['([^സ])ം(l|L)', '', '$2മ്ല്'],
['ം~', '', 'മ്'],
['([^സ])ംn', '', '$2മ്ന്'],
['([^സ])ംy', '', '$2മ്യ്'],
['സ്h', '', 'ഷ്'],
['ശ്h', '', 'ഴ്'],
['ൺ\\\\\\\\', '', 'ണ്\u200d'], // old style chillu N
['ൺ~', '', 'ണ്'],
['ൺR', '', 'ണൃ'],
['ൺN', '', 'ണ്ണ്'],
['ൺT', '', 'ണ്ട്'],
['ൺD', '', 'ണ്ഡ്'],
['ൺy', '', 'ണ്യ്'],
['ൺv', '', 'ണ്വ്'],
['ൺm', '', 'ണ്മ്'],
['ൻ\\\\\\\\', '', 'ന്\u200d'], // old style chillu n
['ൻ~', '', 'ന്'],
['ൻr', '', 'ന്ര്'],
['ൻR', '', 'നൃ'],
['ൻk', '', 'ങ്ക്'],
['ൻj', '', 'ഞ്'],
['ൻn', '', 'ന്ന്'],
['ൻd', '', 'ന്ദ്'],
['ൻt', '', 'ന്റ്'],
['ൻm', '', 'ന്മ്'],
['ൻL', '', 'ന്ല്'],
['ൻv', '', 'ന്വ്'],
['ൻy', '', 'ന്യ്'],
['ർ\\\\\\\\', '', 'ര്\u200d'], // old style chill r
['ർ~', '', 'ര്'],
['ർr', '', 'റ്'],
['ർR', '', 'രൃ'],
['ർy', '', 'ര്യ്'],
['ൽ\\\\\\\\', '', 'ല്\u200d'], // old style chillu l
['ൽ~', '', 'ല്'],
['ൽR', '', 'ലൃ'],
['ൽ(l|L)', '', 'ല്ല്'],
['ൽp', '', 'ല്പ്'],
['ൽy', '', 'ല്യ്'],
['ൽv', '', 'ല്വ്'],
['ൾ\\\\\\\\', '', 'ള്\u200d'], // old style chillu L
['ൾ~', '', 'ള്'],
['ൾR', '', 'ളൃ'],
['ൾL', '', 'ള്ള്'],
['ൾy', '', 'ള്യ്'],
['ൾl', '', 'ഌ'],
['ൿ\\\\\\\\', '', 'ക്\u200d'], // old style chillu k
['ൿR', '', 'കൃ'],
['ൿy', '', 'ക്യ്'],
['ൿ(l|L)', '', 'ക്ല്'],
['ൿv', '', 'ക്വ്'],
['ൿ(k|c)', '', 'ക്ക്'],
['([ക-ഹ])a', '', '$2ാ'],
['([ക-ഹ])്a', '', '$2'],
['ൺa', '', 'ണ'],
['ൻa', '', 'ന'],
['ർa', '', 'ര'],
['ൽa', '', 'ല'],
['ൾa', '', 'ള'],
['ൿa', '', 'ക'],
['([ക-ഹ])്A', '', '$2ാ'],
['ൺA', '', 'ണാ'],
['ൻA', '', 'നാ'],
['ർA', '', 'രാ'],
['ൽA', '', 'ലാ'],
['ൾA', '', 'ളാ'],
['ൿA', '', 'കാ'],
['([ക-ഹ])്i', '', '$2ി'],
['ൺi', '', 'ണി'],
['ൻi', '', 'നി'],
['ർi', '', 'രി'],
['ൽi', '', 'ലി'],
['ൾi', '', 'ളി'],
['ൿi', '', 'കി'],
['([ക-ഹ])്I', '', '$2ീ'],
['ൺI', '', 'ണീ'],
['ൻI', '', 'നീ'],
['ർI', '', 'രീ'],
['ൽI', '', 'ലീ'],
['ൾI', '', 'ളീ'],
['ൿI', '', 'കീ'],
['([ക-ഹ])ിi', '', '$2ീ'],
['([ക-ഹ])െe', '', '$2ീ'],
['([ക-ഹ])്u', '', '$2ു'],
['ൺu', '', 'ണു'],
['ൻu', '', 'നു'],
['ർu', '', 'രു'],
['ൽu', '', 'ലു'],
['ൾu', '', 'ളു'],
['ൿu', '', 'കു'],
['([ക-ഹ])്U', '', '$2ൂ'],
['([ക-ഹ])ുu', '', '$2ൂ'],
['ൺU', '', 'ണൂ'],
['ൻU', '', 'നൂ'],
['ർU', '', 'രൂ'],
['ൽU', '', 'ലൂ'],
['ൾU', '', 'ളൂ'],
['ൿU', '', 'കൂ'],
['([ക-ഹ])ൊo', '', '$2ൂ'],
['([ക-ഹ])ൃR', '', '$2ൄ'],
['([ക-ഹ])്e', '', '$2െ'],
['ൺe', '', 'ണെ'],
['ൻe', '', 'നെ'],
['ർe', '', 'രെ'],
['ൽe', '', 'ലെ'],
['ൾe', '', 'ളെ'],
['ൿe', '', 'കെ'],
['([ക-ഹ])്E', '', '$2േ'],
['ൺE', '', 'ണേ'],
['ൻE', '', 'നേ'],
['ർE', '', 'രേ'],
['ൽE', '', 'ലേ'],
['ൾE', '', 'ളേ'],
['ൿE', '', 'കേ'],
['([ക-ഹ])i', '', '$2ൈ'],
['([ക-ഹ])്o', '', '$2ൊ'],
['ൺo', '', 'ണൊ'],
['ൻo', '', 'നൊ'],
['ർo', '', 'രൊ'],
['ൽo', '', 'ലൊ'],
['ൾo', '', 'ളൊ'],
['ൿo', '', 'കൊ'],
['([ക-ഹ])്O', '', '$2ോ'],
['ൺO', '', 'ണോ'],
['ൻO', '', 'നോ'],
['ർO', '', 'രോ'],
['ൽO', '', 'ലോ'],
['ൾO', '', 'ളോ'],
['ൿO', '', 'കോ'],
['([ക-ഹ])u', '', '$2ൗ'],
['([ക-ഹ])U', '', '$2ൌ'],
['([അ-്])m', '', '$2ം'],
['\\\\0', '', '൦'],		// escape to ml digit 0 by \0
['\\\\1', '', '൧'], 	// escape to ml digit 1 by \1
['\\\\2', '', '൨'],	// escape to ml digit 2 by \2
['\\\\3', '', '൩'],	// escape to ml digit 3 by \3
['\\\\4', '', '൪'],		// escape to ml digit 4 by \4
['\\\\5', '', '൫'],	// escape to ml digit 5 by \5
['\\\\6', '', '൬'],	// escape to ml digit 6 by \6
['\\\\7', '', '൭'],		// escape to ml digit 7 by \7
['\\\\8', '', '൮'],	// escape to ml digit 8 by \8
['\\\\9', '', '൯'],	// escape to ml digit 9 by \9
['മ്\\\\', '', 'ം'],
['ആ\\\\', '', 'ാ'],
['ഇ\\\\', '', 'ി'],
['ഈ\\\\', '', 'ീ'],
['ഉ\\\\', '', 'ു'],
['ഊ\\\\', '', 'ൂ'],
['ഋ\\\\', '', 'ൃ'],
['ൠ\\\\', '', 'ൄ'],
['എ\\\\', '', 'െ'],
['ഏ\\\\', '', 'േ'],
['ഐ\\\\', '', 'ൈ'],
['ഒ\\\\', '', 'ൊ'],
['ഓ\\\\', '', 'ോ'],
['ഔ\\\\', '', 'ൗ'],
['ൗ\\\\', '', 'ൌ'],
['ഌ\\\\', '', 'ൢ'],
['ൡ\\\\', '', 'ൣ'],
['(([ൺ-ൿം])\u200c+)?A', '', '$3ആ'],
['(([ൺ-ൿം])\u200c+)?B', '', '$3ബ്ബ്'],
['(([ൺ-ൿം])\u200c+)?C', '', '$3ച്ച്'],
['(([ൺ-ൿം])\u200c+)?D', '', '$3ഡ്'],
['(([ൺ-ൿം])\u200c+)?E', '', '$3ഏ'],
['(([ൺ-ൿം])\u200c+)?F', '', '$3ഫ്'],
['(([ൺ-ൿം])\u200c+)?G', '', '$3ഗ്ഗ്'],
['(([ൺ-ൿം])\u200c+)?H', '', '$3ഃ'],
['(([ൺ-ൿം])\u200c+)?I', '', '$3ഐ'],
['(([ൺ-ൿം])\u200c+)?J', '', '$3ജ്ജ്'],
['(([ൺ-ൿം])\u200c+)?K', '', '$3ക്ക്'],
['(([ൺ-ൿം])\u200c+)?L', '', '$3ൾ'],
['(([ൺ-ൿം])\u200c+)?M', '', '$3മ്മ്'],
['(([ൺ-ൿം])\u200c+)?N', '', '$3ൺ'],
['(([ൺ-ൿം])\u200c+)?O', '', '$3ഓ'],
['(([ൺ-ൿം])\u200c+)?P', '', '$3പ്പ്'],
['(([ൺ-ൿം])\u200c+)?Q', '', '$3ക്യ്'],
['(([ൺ-ൿം])\u200c+)?R', '', '$3ഋ'],
['(([ൺ-ൿം])\u200c+)?(S|z)', '', '$3ശ്'],
['(([ൺ-ൿം])\u200c+)?T', '', '$3ട്'],
['(([ൺ-ൿം])\u200c+)?U', '', '$3ഊ'],
['(([ൺ-ൿം])\u200c+)?(V|W)', '', '$3വ്വ്'],
['(([ൺ-ൿം])\u200c+)?X', '', '$3ക്ഷ്'],
['(([ൺ-ൿം])\u200c+)?Y', '', '$3യ്യ്'],
['(([ൺ-ൿം])\u200c+)?Z', '', '$3ശ്ശ്'],
['(([ൺ-ൿം])\u200c+)?a', '', '$3അ'],
['(([ൺ-ൿം])\u200c+)?b', '', '$3ബ്'],
['(([ൺ-ൿം])\u200c+)?c', '', '$3ൿ'],
['(([ൺ-ൿം])\u200c+)?d', '', '$3ദ്'],
['(([ൺ-ൿം])\u200c+)?e', '', '$3എ'],
['(([ൺ-ൿം])\u200c+)?f', '', '$3ഫ്'],
['(([ൺ-ൿം])\u200c+)?g', '', '$3ഗ്'],
['(([ൺ-ൿം])\u200c+)?h', '', '$3ഹ്'],
['(([ൺ-ൿം])\u200c+)?i', '', '$3ഇ'],
['(([ൺ-ൿം])\u200c+)?j', '', '$3ജ്'],
['(([ൺ-ൿം])\u200c+)?k', '', '$3ക്'],
['(([ൺ-ൿം])\u200c+)?l', '', '$3ൽ'],
['(([ൺ-ൿം])\u200c+)?m', '', '$3മ്'],
['(([ൺ-ൿം])\u200c+)?n', '', '$3ൻ'],
['(([ൺ-ൿം])\u200c+)?o', '', '$3ഒ'],
['(([ൺ-ൿം])\u200c+)?p', '', '$3പ്'],
['(([ൺ-ൿം])\u200c+)?q', '', '$3ക്ക്'],
['(([ൺ-ൿം])\u200c+)?r', '', '$3ർ'],
['(([ൺ-ൿം])\u200c+)?s', '', '$3സ്'],
['(([ൺ-ൿം])\u200c+)?t', '', '$3റ്റ്'], // tta according to 5.1
['(([ൺ-ൿം])\u200c+)?u', '', '$3ഉ'],
['(([ൺ-ൿം])\u200c+)?(v|w)', '', '$3വ്'],
['(([ൺ-ൿം])\u200c+)?x', '', '$3ക്ഷ്'],
['(([ൺ-ൿം])\u200c+)?y', '', '$3യ്'],
['(([ൺ-ൿം])\u200c+)?~', '', '$3്'],
['(\u200C)*_', '', '\u200c'],
['//', '', 'ऽ'],
['1/4\\\\', '', '൳'],
['1/2\\\\', '', '൴'],
['3/4\\\\', '', '൵'],
['10\\\\', '', '\u0D70'],
['100\\\\', '', '\u0D71'],
['1000\\\\', '', '\u0D72'],
['\\-\\-\\-\\\\', '', '—'],	// em dash
['\\-\\-\\\\', '', '–'], 	// en dash
['\\\\\\-', '', '−'],
['\\\\\\*', '', '×'],
['\\\\/', '', '÷']
];
