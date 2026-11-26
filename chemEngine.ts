export type ElementData = { symbol: string; name: string; mass: number };
export const ELEMENTS: Record<string, ElementData> = {
  H:{symbol:'H',name:'Hydrogen',mass:1.008}, He:{symbol:'He',name:'Helium',mass:4.002602}, Li:{symbol:'Li',name:'Lithium',mass:6.94}, Be:{symbol:'Be',name:'Beryllium',mass:9.0121831},
  B:{symbol:'B',name:'Boron',mass:10.81}, C:{symbol:'C',name:'Carbon',mass:12.011}, N:{symbol:'N',name:'Nitrogen',mass:14.007}, O:{symbol:'O',name:'Oxygen',mass:15.999},
  F:{symbol:'F',name:'Fluorine',mass:18.998403163}, Ne:{symbol:'Ne',name:'Neon',mass:20.1797}, Na:{symbol:'Na',name:'Sodium',mass:22.98976928}, Mg:{symbol:'Mg',name:'Magnesium',mass:24.305},
  Al:{symbol:'Al',name:'Aluminium',mass:26.9815385}, Si:{symbol:'Si',name:'Silicon',mass:28.085}, P:{symbol:'P',name:'Phosphorus',mass:30.973761998}, S:{symbol:'S',name:'Sulfur',mass:32.06},
  Cl:{symbol:'Cl',name:'Chlorine',mass:35.45}, Ar:{symbol:'Ar',name:'Argon',mass:39.948}, K:{symbol:'K',name:'Potassium',mass:39.0983}, Ca:{symbol:'Ca',name:'Calcium',mass:40.078},
  Sc:{symbol:'Sc',name:'Scandium',mass:44.955908}, Ti:{symbol:'Ti',name:'Titanium',mass:47.867}, V:{symbol:'V',name:'Vanadium',mass:50.9415}, Cr:{symbol:'Cr',name:'Chromium',mass:51.9961},
  Mn:{symbol:'Mn',name:'Manganese',mass:54.938044}, Fe:{symbol:'Fe',name:'Iron',mass:55.845}, Co:{symbol:'Co',name:'Cobalt',mass:58.933194}, Ni:{symbol:'Ni',name:'Nickel',mass:58.6934},
  Cu:{symbol:'Cu',name:'Copper',mass:63.546}, Zn:{symbol:'Zn',name:'Zinc',mass:65.38}, Ga:{symbol:'Ga',name:'Gallium',mass:69.723}, Ge:{symbol:'Ge',name:'Germanium',mass:72.630},
  As:{symbol:'As',name:'Arsenic',mass:74.921595}, Se:{symbol:'Se',name:'Selenium',mass:78.971}, Br:{symbol:'Br',name:'Bromine',mass:79.904}, Kr:{symbol:'Kr',name:'Krypton',mass:83.798},
  Rb:{symbol:'Rb',name:'Rubidium',mass:85.4678}, Sr:{symbol:'Sr',name:'Strontium',mass:87.62}, Ag:{symbol:'Ag',name:'Silver',mass:107.8682}, Cd:{symbol:'Cd',name:'Cadmium',mass:112.414},
  Sn:{symbol:'Sn',name:'Tin',mass:118.710}, I:{symbol:'I',name:'Iodine',mass:126.90447}, Ba:{symbol:'Ba',name:'Barium',mass:137.327}, Pt:{symbol:'Pt',name:'Platinum',mass:195.084},
  Au:{symbol:'Au',name:'Gold',mass:196.966569}, Hg:{symbol:'Hg',name:'Mercury',mass:200.592}, Pb:{symbol:'Pb',name:'Lead',mass:207.2},
};

// Remaining elements: standard atomic weights where defined; bracketed mass numbers are representative nuclides for elements without standard atomic weights.
const EXTENDED_ELEMENTS: Array<[string,string,number]> = [
 ['Y','Yttrium',88.90584],['Zr','Zirconium',91.224],['Nb','Niobium',92.90637],['Mo','Molybdenum',95.95],['Tc','Technetium',98],['Ru','Ruthenium',101.07],['Rh','Rhodium',102.90550],['Pd','Palladium',106.42],['In','Indium',114.818],['Sb','Antimony',121.760],['Te','Tellurium',127.60],['Xe','Xenon',131.293],
 ['Cs','Caesium',132.90545196],['La','Lanthanum',138.90547],['Ce','Cerium',140.116],['Pr','Praseodymium',140.90766],['Nd','Neodymium',144.242],['Pm','Promethium',145],['Sm','Samarium',150.36],['Eu','Europium',151.964],['Gd','Gadolinium',157.25],['Tb','Terbium',158.92535],['Dy','Dysprosium',162.500],['Ho','Holmium',164.93033],['Er','Erbium',167.259],['Tm','Thulium',168.93422],['Yb','Ytterbium',173.045],['Lu','Lutetium',174.9668],
 ['Hf','Hafnium',178.49],['Ta','Tantalum',180.94788],['W','Tungsten',183.84],['Re','Rhenium',186.207],['Os','Osmium',190.23],['Ir','Iridium',192.217],['Tl','Thallium',204.38],['Bi','Bismuth',208.98040],['Po','Polonium',209],['At','Astatine',210],['Rn','Radon',222],['Fr','Francium',223],['Ra','Radium',226],['Ac','Actinium',227],['Th','Thorium',232.0377],['Pa','Protactinium',231.03588],['U','Uranium',238.02891],['Np','Neptunium',237],['Pu','Plutonium',244],['Am','Americium',243],['Cm','Curium',247],['Bk','Berkelium',247],['Cf','Californium',251],['Es','Einsteinium',252],['Fm','Fermium',257],['Md','Mendelevium',258],['No','Nobelium',259],['Lr','Lawrencium',266],['Rf','Rutherfordium',267],['Db','Dubnium',268],['Sg','Seaborgium',269],['Bh','Bohrium',270],['Hs','Hassium',269],['Mt','Meitnerium',278],['Ds','Darmstadtium',281],['Rg','Roentgenium',282],['Cn','Copernicium',285],['Nh','Nihonium',286],['Fl','Flerovium',289],['Mc','Moscovium',290],['Lv','Livermorium',293],['Ts','Tennessine',294],['Og','Oganesson',294]
];
for (const [symbol,name,mass] of EXTENDED_ELEMENTS) ELEMENTS[symbol] = { symbol, name, mass };

export type FormulaParse = { counts: Record<string, number>; charge: number };

function splitCharge(input: string): { formula: string; charge: number } {
  let s = input.trim().replace(/\s+/g, '');
  const caret = s.match(/\^(\d*)([+-])$/);
  if (caret) return { formula: s.slice(0, caret.index), charge: (caret[1] ? Number(caret[1]) : 1) * (caret[2] === '+' ? 1 : -1) };
  const sign = s.match(/([+-])$/);
  if (!sign) return { formula: s, charge: 0 };
  let formula = s.slice(0, -1);
  let magnitude = 1;
  // Bare forms Fe3+ / O2- encode charge magnitude; NH4+ keeps the 4 as stoichiometry.
  const trailing = formula.match(/^(?:[A-Z][a-z]?)(\d+)$/);
  if (trailing) { magnitude = Number(trailing[1]); formula = formula.slice(0, -trailing[1].length); }
  return { formula, charge: magnitude * (sign[1] === '+' ? 1 : -1) };
}

function parseSegment(segment: string): Record<string, number> {
  let index = 0;
  const parseGroup = (closing?: string): Record<string, number> => {
    const result: Record<string, number> = {};
    while (index < segment.length) {
      const char = segment[index];
      if (char === ')' || char === ']') {
        if (closing !== char) throw new Error(`Ngoặc đóng không hợp lệ tại vị trí ${index + 1}.`);
        index++; return result;
      }
      if (char === '(' || char === '[') {
        index++;
        const nested = parseGroup(char === '(' ? ')' : ']');
        const multiplier = readNumber();
        Object.entries(nested).forEach(([el, count]) => result[el] = (result[el] || 0) + count * multiplier);
        continue;
      }
      const element = segment.slice(index).match(/^[A-Z][a-z]?/)?.[0];
      if (!element) throw new Error(`Ký hiệu hóa học không hợp lệ tại “${segment.slice(index)}”.`);
      if (!ELEMENTS[element]) throw new Error(`Chưa có dữ liệu nguyên tử khối cho nguyên tố ${element}.`);
      index += element.length;
      result[element] = (result[element] || 0) + readNumber();
    }
    if (closing) throw new Error('Còn thiếu ngoặc đóng trong công thức.');
    return result;
  };
  const readNumber = () => {
    const found = segment.slice(index).match(/^\d+/)?.[0];
    if (!found) return 1;
    index += found.length; return Number(found);
  };
  return parseGroup();
}

export function parseFormula(raw: string): FormulaParse {
  const { formula, charge } = splitCharge(raw);
  if (!formula) throw new Error('Vui lòng nhập công thức hóa học.');
  const parts = formula.replace(/·/g, '.').split('.');
  const counts: Record<string, number> = {};
  for (const part of parts) {
    if (!part) continue;
    const coefficientMatch = part.match(/^(\d+)(?=[A-Z[(])/);
    const coefficient = coefficientMatch ? Number(coefficientMatch[1]) : 1;
    const body = coefficientMatch ? part.slice(coefficientMatch[1].length) : part;
    const parsed = parseSegment(body);
    Object.entries(parsed).forEach(([element, count]) => counts[element] = (counts[element] || 0) + count * coefficient);
  }
  if (!Object.keys(counts).length) throw new Error('Không đọc được thành phần nguyên tố trong công thức.');
  return { counts, charge };
}

export function calculateMolarMass(formula: string) {
  const parsed = parseFormula(formula);
  const rows = Object.entries(parsed.counts).map(([element, count]) => {
    const atomicMass = ELEMENTS[element].mass;
    return { element, count, atomicMass, totalMass: atomicMass * count, percentage: 0 };
  });
  const molarMass = rows.reduce((sum, row) => sum + row.totalMass, 0);
  rows.forEach(row => row.percentage = row.totalMass / molarMass * 100);
  return { rows, molarMass, charge: parsed.charge };
}

function gcd(a: number, b: number): number { return b ? gcd(b, a % b) : Math.abs(a); }
function lcm(a: number, b: number): number { return Math.abs(a * b) / (gcd(a, b) || 1); }
function toFractions(matrix: number[][]) {
  const m = matrix.map(row => row.map(v => ({ n: v, d: 1 })));
  const frac = (n: number, d: number) => { const g = gcd(n, d); const sign = d < 0 ? -1 : 1; return { n: n / g * sign, d: Math.abs(d / g) }; };
  const add = (a:{n:number,d:number}, b:{n:number,d:number}) => frac(a.n*b.d+b.n*a.d,a.d*b.d);
  const mul = (a:{n:number,d:number}, b:{n:number,d:number}) => frac(a.n*b.n,a.d*b.d);
  const div = (a:{n:number,d:number}, b:{n:number,d:number}) => frac(a.n*b.d,a.d*b.n);
  let pivotRow = 0; const pivots: number[] = [];
  for (let col=0; col<(m[0]?.length || 0) && pivotRow<m.length; col++) {
    let selected = pivotRow;
    while (selected<m.length && m[selected][col].n===0) selected++;
    if (selected===m.length) continue;
    [m[pivotRow],m[selected]]=[m[selected],m[pivotRow]];
    const pivot=m[pivotRow][col]; m[pivotRow]=m[pivotRow].map(x=>div(x,pivot));
    for (let r=0;r<m.length;r++) if(r!==pivotRow && m[r][col].n!==0) {
      const factor=m[r][col]; m[r]=m[r].map((x,c)=>add(x,mul({n:-factor.n,d:factor.d},m[pivotRow][c])));
    }
    pivots.push(col); pivotRow++;
  }
  return { rref:m, pivots };
}

export type BalanceResult = { equation: string; coefficients: number[]; steps: string[] };
export function balanceEquation(input: string): BalanceResult {
  const arrowMatch = input.includes('→') ? '→' : input.includes('⟶') ? '⟶' : input.includes('=') ? '=' : '->';
  const sides = input.split(arrowMatch);
  if (sides.length !== 2) throw new Error('Phương trình cần có đúng một mũi tên (-> hoặc →).');
  const splitSpecies = (side: string) => side.includes(' + ') ? side.split(/\s+\+\s+/).map(s=>s.trim()).filter(Boolean) : side.split('+').map(s=>s.trim()).filter(Boolean);
  const left = splitSpecies(sides[0]);
  const right = splitSpecies(sides[1]);
  if (!left.length || !right.length) throw new Error('Cần có chất tham gia và sản phẩm ở hai vế.');
  const normalize = (term:string) => term.replace(/^\d+\s*/, '').replace(/\s/g,'');
  const formulas = [...left,...right].map(normalize);
  const parsed = formulas.map(parseFormula);
  const elements = [...new Set(parsed.flatMap(p=>Object.keys(p.counts)))].sort();
  const speciesCount = formulas.length;
  const matrix = elements.map(el => parsed.map((p,i) => (i<left.length?1:-1)*(p.counts[el]||0)));
  const charges = parsed.map((p,i)=>(i<left.length?1:-1)*p.charge);
  if (charges.some(v=>v!==0)) matrix.push(charges);
  const {rref,pivots}=toFractions(matrix);
  const freeCols = Array.from({length:speciesCount},(_,i)=>i).filter(i=>!pivots.includes(i));
  if (!freeCols.length) throw new Error('Không tìm thấy nghiệm bảo toàn khác 0. Hãy kiểm tra lại phương trình.');
  let solution: number[] | null = null;
  const tryValues = (freeValues:number[]) => {
    const values=Array.from({length:speciesCount},()=>({n:0,d:1}));
    freeCols.forEach((c,i)=>values[c]={n:freeValues[i],d:1});
    pivots.forEach((col,row)=>{
      let sum={n:0,d:1};
      freeCols.forEach((fc,i)=>{ const a=rref[row][fc]; const term={n:-a.n*freeValues[i],d:a.d}; const g=gcd(sum.d,term.d); sum={n:sum.n*(term.d/g)+term.n*(sum.d/g),d:sum.d*(term.d/g)}; });
      values[col]=sum;
    });
    const denominator=values.reduce((v,x)=>lcm(v,x.d),1);
    let ints=values.map(x=>x.n*(denominator/x.d));
    const common=ints.reduce((v,x)=>gcd(v,x),0); ints=ints.map(x=>x/(common||1));
    if(ints.every(x=>x>0)) return ints;
    return null;
  };
  const search=(depth:number, current:number[]):boolean=>{
    if(depth===freeCols.length){ const found=tryValues(current); if(found){solution=found;return true;} return false; }
    for(let n=1;n<=12;n++) if(search(depth+1,[...current,n])) return true;
    return false;
  };
  if(freeCols.length>4) throw new Error('Hệ có quá nhiều bậc tự do để tự động tìm nghiệm tối giản. Hãy tách phản ứng thành các bước hoặc cung cấp hệ số sơ bộ.');
  search(0,[]);
  if(!solution) throw new Error('Không tìm được bộ hệ số nguyên dương. Kiểm tra lại công thức hoặc trạng thái ion.');
  const coefficients=solution as number[];
  const format=(terms:string[],offset:number)=>terms.map((term,i)=>`${coefficients[offset+i]===1?'':coefficients[offset+i]}${normalize(term)}`).join(' + ');
  const equation=`${format(left,0)} → ${format(right,left.length)}`;
  const steps=[`Liệt kê các nguyên tố bảo toàn: ${elements.join(', ')}${charges.some(v=>v!==0)?' và điện tích':''}.`,`Lập ma trận hệ số: mỗi cột ứng với một chất; vế trái mang dấu +, vế phải mang dấu −.`,`Khử Gauss–Jordan để đưa ma trận về dạng bậc thang rút gọn; chọn biến tự do dương.`,`Quy đồng mẫu số và chia ước chung lớn nhất để thu được bộ hệ số nguyên dương tối giản: ${coefficients.join(' : ')}.`];
  return { equation, coefficients, steps };
}

const KW_25C = 1e-14;
function solveLogConcentration(balance:(x:number)=>number){let lo=-14,hi=0;for(let i=0;i<140;i++){const mid=(lo+hi)/2;if(balance(10**mid)>0)hi=mid;else lo=mid;}return 10**((lo+hi)/2);}
export function strongAcidPH(concentration:number) { if(concentration<=0) throw new Error('Nồng độ phải lớn hơn 0.'); const h=(concentration+Math.sqrt(concentration**2+4*KW_25C))/2; return -Math.log10(h); }
export function strongBasePH(concentration:number) { if(concentration<=0) throw new Error('Nồng độ phải lớn hơn 0.'); const oh=(concentration+Math.sqrt(concentration**2+4*KW_25C))/2; return 14+Math.log10(oh); }
export function weakAcidPH(concentration:number, ka:number) {
  if(concentration<=0 || ka<=0) throw new Error('C và Ka phải lớn hơn 0.');
  if(concentration>=1e-4){const x=(-ka+Math.sqrt(ka*ka+4*ka*concentration))/2;return -Math.log10(x);}
  const h=solveLogConcentration(x=>x-KW_25C/x-concentration*ka/(ka+x));return -Math.log10(h);
}
export function weakBasePH(concentration:number, kb:number) {
  if(concentration<=0 || kb<=0) throw new Error('C và Kb phải lớn hơn 0.');
  let oh:number;if(concentration>=1e-4){oh=(-kb+Math.sqrt(kb*kb+4*kb*concentration))/2;}else{oh=solveLogConcentration(x=>x-KW_25C/x-concentration*kb/(kb+x));}
  return 14+Math.log10(oh);
}
export function nernstPotential(e0:number,n:number,q:number,temperature=298.15) {
  if(n<=0 || q<=0 || temperature<=0) throw new Error('n, Q và T phải dương.');
  const R=8.314462618, F=96485.33212;
  return e0-(R*temperature/(n*F))*Math.log(q);
}
export function dilution(c1:number,v1:number,v2:number) { if(c1<0||v1<0||v2<=0) throw new Error('Dữ liệu pha loãng không hợp lệ.'); return c1*v1/v2; }

/** Ideal-solution titration model for 50 mL aliquots at 25 °C by default. */
export function titrationPH(type: 'strong' | 'weak' | 'poly', volumeAddedMl: number, acidVolumeMl = 50, acidConcentration = 0.1, baseConcentration = 0.1) {
  if (volumeAddedMl < 0 || acidVolumeMl <= 0 || acidConcentration <= 0 || baseConcentration <= 0) throw new Error('Thể tích và nồng độ chuẩn độ phải dương.');
  const totalL = (acidVolumeMl + volumeAddedMl) / 1000;
  const acidMoles = acidConcentration * acidVolumeMl / 1000;
  const baseMoles = baseConcentration * volumeAddedMl / 1000;
  if (type === 'strong') {
    const excess = baseMoles - acidMoles;
    if (Math.abs(excess) < 1e-12) return 7;
    const concentration = Math.abs(excess) / totalL;
    return excess > 0 ? 14 + Math.log10(concentration) : -Math.log10(concentration);
  }
  const cTotal = acidMoles / totalL;
  const sodium = baseMoles / totalL;
  const kw = 1e-14;
  const solvePH = (chargeBalance: (h: number) => number) => {
    let lo = -14, hi = 0;
    for (let i = 0; i < 120; i++) {
      const mid = (lo + hi) / 2;
      if (chargeBalance(10 ** mid) > 0) hi = mid;
      else lo = mid;
    }
    return -(lo + hi) / 2;
  };
  if (type === 'weak') {
    const ka = 1.8e-5; // acetic acid, approximate thermodynamic value at 25 °C
    return solvePH(h => h + sodium - (kw / h + cTotal * ka / (ka + h)));
  }
  const k1 = 10 ** -2.15, k2 = 10 ** -7.20, k3 = 10 ** -12.35;
  return solvePH(h => {
    const denominator = h ** 3 + k1 * h ** 2 + k1 * k2 * h + k1 * k2 * k3;
    const alpha1 = k1 * h ** 2 / denominator;
    const alpha2 = k1 * k2 * h / denominator;
    const alpha3 = k1 * k2 * k3 / denominator;
    return h + sodium - (kw / h + cTotal * (alpha1 + 2 * alpha2 + 3 * alpha3));
  });
}
