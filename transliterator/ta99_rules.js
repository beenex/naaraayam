﻿/**
 * Regular expression rules table for Tamil 99 input method
 * @author Junaid P V ([[user:Junaidpv]])
 * @date 2010-11-20
 * License: GPLv3, CC-BY-SA 3.0
 */
 // Normal rules
 var rules = {
'^க்கh$':'க்கக்',
'^ங்ஙb$':'ங்ஙங்',
'^ச்ச\\[$':'ச்சச்',
'^ஜ்ஜE$':'ஜ்ஜஜ்',
'^ஞ்ஞ\\]$':'ஞ்ஞஞ்',
'^ட்டo$':'ட்டட்',
'^ண்ணp$':'ண்ணண்',
'^த்தl$':'த்தத்',
'^ந்ந;$':'ந்நந்',
'^ன்னi$':'ன்னன்',
'^ப்பj$':'ப்பப்',
'^ம்மk$':'ம்மம்',
"^ய்ய'$":'ய்யய்',
'^ர்ரm$':'ர்ரர்',
'^ற்றu$':'ற்றற்',
'^ல்லn$':'ல்லல்',
'^ள்ளy$':'ள்ளள்',
'^ழ்ழ/$':'ழ்ழழ்',
'^வ்வv$':'வ்வவ்',
// void
'^ஷ்ஷW$':'ஷ்ஷஷ்',
'^ஸ்ஸQ$':'ஸ்ஸஸ்',
'^ஹ்ஹR$':'ஹ்ஹஹ்',

'^([க-ஹ])q$':'$1ா',
'^([க-ஹ])s$':'$1ி',
'^([க-ஹ])w$':'$1ீ',
'^([க-ஹ])d$':'$1ு',
'^([க-ஹ])e$':'$1ூ',
'^([க-ஹ])g$':'$1ெ',
'^([க-ஹ])t$':'$1ே',
'^([க-ஹ])r$':'$1ை',
'^([க-ஹ])c$':'$1ொ',
'^([க-ஹ])x$':'$1ோ',
'^([க-ஹ])z$':'$1ௌ',

'^([க-ஹ])a$':'$1',

'^கh$':'க்க',
'^ஙb$':'ங்ங',
'^ச\\[$':'ச்ச',
'^ஜE$':'ஜ்ஜ',
'^ஞ\\]$':'ஞ்ஞ',
'^டo$':'ட்ட',
'^ணp$':'ண்ண',
'^தl$':'த்த',
'^ந;$':'ந்ந',
'^னi$':'ன்ன',
'^பj$':'ப்ப',
'^மk$':'ம்ம',
"^ய'$":'ய்ய',
'^ரm$':'ர்ர',
'^றu$':'ற்ற',
'^லn$':'ல்ல',
'^ளy$':'ள்ள',
'^ழ/$':'ழ்ழ',
'^வv$':'வ்வ',
// void
'^ஷW$':'ஷ்ஷ',
'^ஸQ$':'ஸ்ஸ',
'^ஹR$':'ஹ்ஹ',

'^நl$':'ந்த',
'^ஙh$':'ங்க',
 '^னu$':'ன்ற',
'^ணo$':'ண்ட',
'^ஞ\\[$':'ஞ்ச',
'^மj$':'ம்ப',
 
'^q$':'ஆ',
'^w$':'ஈ',
'^e$':'ஊ',
'^r$':'ஐ',
'^t$':'ஏ',
'^y$':'ள',
'^u$':'ற',
'^i$':'ன',
'^o$':'ட',
'^p$':'ண',
'^\\[$':'ச',
'^\\]$':'ஞ',

'^a$':'அ',
'^s$':'இ',
'^d$':'உ',
'^f$':'்',
'^g$':'எ',
'^h$':'க',
'^j$':'ப',
'^k$':'ம',
'^l$':'த',
'^;$':'ந',
"^'$":'ய',

'^z$':'ஔ',
'^x$':'ஓ',
'^c$':'ஒ',
'^v$':'வ',
'^b$':'ங',
'^n$':'ல',
'^m$':'ர',
//'^,$':'ஆ',
//'^\\.$':'ஆ',
'^/$':'ழ',

'^Q$':'ஸ',
'^W$':'ஷ',
'^E$':'ஜ',
'^R$':'ஹ',
'^T$':'க்ஷ',
'^Y$':'ஸ்ரீ',
'^U$':'ற',
'^I$':'ன',
'^O$':'[',
'^P$':']',
//'^\\{$':'ஆ',
//'^\\}$':'ஆ',

'^A$':'௹',
'^S$':'௺',
'^D$':'௸',
'^F$':'ஃ',
'^G$':'எ',
'^H$':'க',
'^J$':'ப',
'^K$':'"',
'^L$':':',
'^\\:$':';',
'^"$':"'",

'^Z$':'௳',
'^X$':'௴',
'^C$':'௵',
'^V$':'௶',
'^B$':'௷',
'^N$':'ல',
'^M$':'ர',

'^\\\\0$':'\u0be6',
'^\\\\1$':'௧',
'^\\\\2$':'௨',
'^\\\\3$':'௩',
'^\\\\4$':'௪',
'^\\\\5$':'௫',
'^\\\\6$':'௬',
'^\\\\7$':'௭',
'^\\\\8$':'௮',
'^\\\\9$':'௯'
};
// Memorised rules
var memrules = {
};
