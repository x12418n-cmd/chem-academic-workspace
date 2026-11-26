const subscriptDigits: Record<string,string> = { '₀':'0','₁':'1','₂':'2','₃':'3','₄':'4','₅':'5','₆':'6','₇':'7','₈':'8','₉':'9' };
const superscriptDigits: Record<string,string> = { '⁰':'0','¹':'1','²':'2','³':'3','⁴':'4','⁵':'5','⁶':'6','⁷':'7','⁸':'8','⁹':'9' };
function normalizeChemicalUnicode(input:string){
  return input.replace(/([⁰¹²³⁴⁵⁶⁷⁸⁹]+)([⁺⁻])/g,(_,digits:string,sign:string)=>`^${digits}${sign==='⁺'?'+':'-'}`).replace(/[₀-₉]/g,c=>subscriptDigits[c]||c).replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g,c=>superscriptDigits[c]||c).replace(/⁺/g,'+').replace(/⁻/g,'-').replace(/−/g,'-');
}
function formulaBodyToTex(input:string){
  const segments=input.replace(/·/g,'.').split('.');
  return segments.map((part,index)=>{
    const multiplier=part.match(/^(\d+)(?=[A-Z[(])/);
    const factor=multiplier?multiplier[1]:'';
    const body=multiplier?part.slice(factor.length):part;
    const rendered=body.replace(/([)\]])(\d+)/g,(_,group:string,count:string)=>`${group}_{${count}}`).replace(/([A-Z][a-z]?)(\d*)/g,(_,element:string,count:string)=>`\\mathrm{${element}}${count?`_{${count}}`:''}`).replace(/\(/g,'\\left(').replace(/\)/g,'\\right)').replace(/\[/g,'\\left[').replace(/\]/g,'\\right]');
    return `${index?'\\,\\cdot\\,':''}${factor?`${factor}\\,`:''}${rendered}`;
  }).join('');
}
export function formulaToTex(raw:string){
  let formula=normalizeChemicalUnicode(raw.trim()).replace(/[↑↓]/g,'');
  let precipitate=raw.includes('↓');
  let coefficient='';
  const leading=formula.match(/^(\d+)(?=[A-Z[(])/);
  if(leading){coefficient=leading[1];formula=formula.slice(coefficient.length);}
  let charge='';
  const caret=formula.match(/\^(\d*)([+-])$/);
  if(caret){charge=`${caret[1]||''}${caret[2]}`;formula=formula.slice(0,caret.index);}
  else if(/[+-]$/.test(formula)){
    const sign=formula.slice(-1);formula=formula.slice(0,-1);const mono=formula.match(/^([A-Z][a-z]?)(\d+)$/);
    if(mono){charge=`${mono[2]}${sign}`;formula=mono[1];}else charge=sign;
  }
  // Phases may be written as (s), (l), (g), (aq); render the phase as a chemical-state annotation.
  let phase='';const phaseMatch=formula.match(/\((aq|s|l|g)\)$/i);if(phaseMatch){phase=`\\,\\mathrm{(${phaseMatch[1]})}`;formula=formula.slice(0,phaseMatch.index);}
  if(!formula)throw new Error('Empty chemical formula');
  let tex=formulaBodyToTex(formula);
  if(coefficient)tex=`${coefficient}\\,${tex}`;
  if(charge)tex+=`^{${charge}}`;
  if(precipitate)tex+='\\downarrow';
  return tex+phase;
}
export function equationToTex(raw:string){
  const normalized=normalizeChemicalUnicode(raw);
  if (/[^\w\s+()\[\].·↓↑₀-₉⁰-⁹⁺⁻→⇌⟶^>\-]/u.test(normalized)) throw new Error('Equation text includes prose, not only a chemical equation');
  const arrow=normalized.includes('⇌')?'⇌':normalized.includes('→')?'→':normalized.includes('⟶')?'⟶':'->';
  const sides=normalized.split(arrow);
  if(sides.length!==2)throw new Error('Equation arrow missing');
  const renderSide=(side:string)=>side.split(/\s+\+\s+/).map(part=>formulaToTex(part)).join('\\; + \\;');
  const arrowTex=arrow==='⇌'?'\\rightleftharpoons':'\\longrightarrow';
  return `${renderSide(sides[0])}\\;${arrowTex}\\;${renderSide(sides[1])}`;
}
